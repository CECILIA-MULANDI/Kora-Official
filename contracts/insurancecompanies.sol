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

    mapping(Policies => uint256) public basePrices;

    constructor() {
        basePrices[Policies.Liability_Cover] = 400;
        basePrices[Policies.Collision_Cover] = 200;
        basePrices[Policies.Comprehensive_Cover] = 1000;
        basePrices[Policies.Personal_Injury_Cover] = 500;
        basePrices[Policies.Underinsured_Cover] = 400;
        basePrices[Policies.Uninsured_Cover] = 300;
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
  

}

