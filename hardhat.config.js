require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const Private_Key = "2da523498caed447af9be86f16dfa180d35fbd54908bf22ffd92095e53c952f6"

module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
        url: `https://dawn-light-cloud.ethereum-goerli.discover.quiknode.pro/db2e4ee2b40be796986403c9eb57f0d3cb07375e/`,
        accounts: [`0x${Private_Key}`]
    }
  }
};