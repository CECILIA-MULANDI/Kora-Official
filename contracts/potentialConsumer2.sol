// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./kor.sol";

contract PotentialConsumer {
    KoraInsurance public insuranceCompany;
    KoraInsurance.Policies public selectedPolicy;
    uint256 public quotedPrice;
    bool public isPolicyAccepted;
    KoraInsurance.User public user;
    
    event policyCancel(address _user, KoraInsurance.Policies _policyname);

    constructor(address _insuranceCompanyAddress) {
        insuranceCompany = KoraInsurance(_insuranceCompanyAddress);
        isPolicyAccepted = false;
    }

    function selectPolicy(KoraInsurance.Policies _policy) external {
        selectedPolicy = _policy;
        isPolicyAccepted = false;
    }

    function setUserDetails(uint256 _age, uint256 _drivingexperience) external {
        user = KoraInsurance.User({
            age: _age,
            drivingexperience: _drivingexperience
        });
    }

    function generateQuote() public returns(uint256) {
        quotedPrice = insuranceCompany.calculatePremium(selectedPolicy, user);
        return quotedPrice;
    }

    function signPolicy() public {
        require(quotedPrice > 0, "Generate a quote before accepting the policy");
        isPolicyAccepted = true;
    }

    function purchasePolicy() external payable {
        require(isPolicyAccepted, "Please accept the policy first");
        require(msg.value == quotedPrice, "Incorrect premium amount");
        insuranceCompany.purchasePolicy{value: msg.value}(selectedPolicy, user, msg.sender);

    }
    function cancelPolicy(KoraInsurance.Policies _policy) external{
        insuranceCompany.cancelPolicy(msg.sender, _policy);
        emit policyCancel(msg.sender, _policy);

    }
    function makeClaim(KoraInsurance.Policies _policy, uint256 _amount) external {
        insuranceCompany.makeClaim(msg.sender, _policy, _amount);
    }
    function checkMyPolicyStatus(KoraInsurance.Policies _policy) external view returns (bool found, bool active, uint256 expirationDate) {
        return insuranceCompany.checkPolicyStatus(msg.sender, _policy);
    }
}