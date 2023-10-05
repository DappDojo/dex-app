import { Sepolia } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x65983431d26FdfC8f1A6A9A03732C050A95D3Ee1";

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: "https://eth-sepolia.g.alchemy.com/v2/6Gv62s_V-KIZAHbnrLWiJicvhoMxdo6d",
  },
};