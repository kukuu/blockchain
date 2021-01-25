const AzzottoToken =artifacts.require("AzzottoToken") ;

module.exports = function(deployer) {
    deployer.deploy(AzzottoToken);
}