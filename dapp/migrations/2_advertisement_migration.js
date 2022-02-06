var Advertisement = artifacts.require('./contracts/Advertisement.sol');

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Advertisement);
};
