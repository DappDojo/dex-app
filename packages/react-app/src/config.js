import { Sepolia } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x3c93bbA21a8dCbb70b0542bE7992537f27acEa75";

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: "https://eth-sepolia.g.alchemy.com/v2/6Gv62s_V-KIZAHbnrLWiJicvhoMxdo6d",
  },
};