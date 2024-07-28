// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./kor.sol";
contract PotentialConsumer is KoraInsurance {
    Policies public selectedPolicy;
    uint256 public quotedPrice;
    bool public isPolicyAccepted;
   
    User public user;

    constructor() {
        isPolicyAccepted = false;
    }

    function selectPolicy(Policies _policy) external {
        selectedPolicy = _policy;
        isPolicyAccepted = false;
    }

   
    function setUserDetails(uint256 _age, uint256 _drivingexperience)  external {
       user=User({
             age:_age,
            drivingexperience:_drivingexperience
       });
    }
     function generateQuote() public returns(uint256) {
        quotedPrice = calculatePremium(selectedPolicy, user);
        return quotedPrice;
    }

    function signPolicy() public {
        require(quotedPrice > 0, "Generate a quote before accepting the policy");
        isPolicyAccepted = true;
    }
}