pragma solidity ^0.8.0;
contract Advertisement{
 
   address payable advertiser;
   uint256 adcost;
   uint256 costSoFar;
   uint256 perUserCost;
   mapping(address=>uint256) public map;
   uint256 public value = msg.value;
 
   constructor(uint256 perusercost) payable {
       advertiser = payable(msg.sender);
       adcost = msg.value;
       perUserCost = perusercost;
   }
 
    //user viewing the ad, and get paid
   function watchAd(address payable user) payable public returns(uint256){
       if(costSoFar<=adcost){
        costSoFar+=perUserCost;
        map[user] += perUserCost;
        uint256 amount = perUserCost;
        user.transfer(amount);
       }
       return costSoFar;
   }
}