import { Sepolia } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xDcC0FD6FEC01B50c560eA3E749322F1D9f9C6ec3";

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: "https://eth-sepolia.g.alchemy.com/v2/6Gv62s_V-KIZAHbnrLWiJicvhoMxdo6d",
  },
};