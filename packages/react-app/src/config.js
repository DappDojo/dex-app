import { Sepolia } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x124B8c59A85859466E517Cd1529bEB25a55bfEa7";

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: "https://eth-sepolia.g.alchemy.com/v2/6Gv62s_V-KIZAHbnrLWiJicvhoMxdo6d",
  },
};