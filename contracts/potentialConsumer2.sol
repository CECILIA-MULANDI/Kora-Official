// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./kor.sol";

contract PotentialConsumer {
    KoraInsurance public insuranceCompany;
    KoraInsurance.Policies public selectedPolicy;
    uint256 public quotedPrice;
    bool public isPolicyAccepted;
    KoraInsurance.User public user;

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
}