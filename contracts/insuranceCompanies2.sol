// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract KoraInsurance {
    // types of policies
    enum Policies {
        Liability_Cover,
        Collision_Cover,
        Comprehensive_Cover,
        Personal_Injury_Cover,
        Uninsured_Cover,
        Underinsured_Cover
    }
     struct User{
        uint256 age;
        uint256 drivingexperience;
    }
    struct Policy {
        Policies policyType;
        User userDetails;
        uint256 premium;
        uint256 expirationDate;
        bool isActive;

    }
    struct Claim{
        uint256 claimId;
        address policyHolder;
        Policies policyType;
        uint256 amount;
        bool isApproved;
    }

    mapping(Policies => uint256) public basePrices;
    mapping(address => Policy[]) public userPolicies;
    mapping(address => Claim[]) public userClaims;
    uint256 public nextClaimId;

    event PolicyPurchased(address indexed policyHolder, Policies policyType, uint256 premium, uint256 expirationDate);
    event ClaimMade(address indexed policyHolder, uint256 claimId, Policies policyType, uint256 amount);
    event ClaimApproved(uint256 claimId, address indexed policyHolder, uint256 amount);


    constructor() {
        basePrices[Policies.Liability_Cover] = 400;
        basePrices[Policies.Collision_Cover] = 200;
        basePrices[Policies.Comprehensive_Cover] = 1000;
        basePrices[Policies.Personal_Injury_Cover] = 500;
        basePrices[Policies.Underinsured_Cover] = 400;
        basePrices[Policies.Uninsured_Cover] = 300;
        nextClaimId = 1;
    }

    function getBasePrice(Policies _policy) public view returns(uint256) {
        return basePrices[_policy];
    }
    function calculatePremium(Policies _policy,User memory user) public view returns (uint256){
        uint256 basePrice = getBasePrice(_policy);
        uint256 premium = basePrice;
        if (user.age < 25) {
            premium += basePrice * 20 / 100; // 20% increase for young drivers
        } else if (user.age > 65) {
            premium += basePrice * 15 / 100; // 15% increase for senior drivers
        }
        if (user.drivingexperience < 5) {
            premium += basePrice * 10 / 100; // 10% increase for less experienced drivers
        }
        return premium;
    }
    function purchasePolicy(Policies _policy, User memory _user, address _policyHolder) external payable {
        uint256 premium = calculatePremium(_policy, _user);
        require(msg.value == premium, "Incorrect premium amount");
       

        Policy memory newPolicy = Policy({
            policyType: _policy,
            userDetails: _user,
            premium: premium,
            expirationDate: block.timestamp + 365 days,
            isActive: true
        });

        userPolicies[_policyHolder].push(newPolicy);

        emit PolicyPurchased(_policyHolder, _policy, premium, newPolicy.expirationDate);
    }
    function getUserPolicies(address _user) external view returns (Policy[] memory) {
        return userPolicies[_user];
    }
    
    function cancelPolicy(address user,Policies _policy) external {
        Policy[] storage policies=userPolicies[user];
        bool policyFound = false;

        for (uint256 i = 0; i < policies.length; i++) {
            if (policies[i].policyType == _policy && policies[i].isActive) {
                policies[i] = policies[policies.length - 1];
                policies.pop();
                policyFound = true;
                break;
            }
        }

        require(policyFound, "You don't have this active policy");
    }
   function makeClaim(address _user, Policies _policy, uint256 _amount) external {
        Policy[] storage policies = userPolicies[_user];
        require(policies.length > 0, "User has no policies");

        bool policyFound = false;
        bool policyActive = false;

        for (uint256 i = 0; i < policies.length; i++) {
            if (policies[i].policyType == _policy) {
                policyFound = true;
                if (policies[i].isActive && policies[i].expirationDate > block.timestamp) {
                    policyActive = true;
                    break;
                }
            }
        }

        require(policyFound, "No policy found for the specified type");
        require(policyActive, "Policy is not active or has expired");

        Claim memory newClaim = Claim({
            claimId: nextClaimId,
            policyHolder: _user,
            policyType: _policy,
            amount: _amount,
            isApproved: false
        });

        userClaims[_user].push(newClaim);
        nextClaimId++;

        emit ClaimMade(_user, newClaim.claimId, _policy, _amount);
    }
    function checkPolicyStatus(address _user, Policies _policy) external view returns (bool found, bool active, uint256 expirationDate) {
        Policy[] storage policies = userPolicies[_user];
        for (uint256 i = 0; i < policies.length; i++) {
            if (policies[i].policyType == _policy) {
                found = true;
                active = policies[i].isActive && policies[i].expirationDate > block.timestamp;
                expirationDate = policies[i].expirationDate;
                return (found, active, expirationDate);
            }
        }
        return (false, false, 0);
    }
    
    

}

  



