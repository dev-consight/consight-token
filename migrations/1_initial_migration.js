const Migrations = artifacts.require("Consighttoken");

module.exports = (deployer) => {
  deployer.deploy(Migrations);
};
