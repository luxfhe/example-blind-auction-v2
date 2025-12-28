// Plugins
import "@nomicfoundation/hardhat-toolbox";
import "@luxfhe/hardhat-plugin";
import "@luxfhe/hardhat-docker";
import "hardhat-deploy";
import { HardhatUserConfig } from "hardhat/config";

// Tasks
import "./tasks";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  // Optional: defaultNetwork is already being set to "localluxfhe" by @luxfhe/hardhat-plugin
  defaultNetwork: "localluxfhe",
};

export default config;
