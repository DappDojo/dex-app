import { abis } from "@my-app/contracts";
import { getPoolsInfo } from "./getPoolsInfo";

export const getFactoryInfo = async (factoryAddress, web3) => {
  const factory = new web3.eth.Contract(abis.factory.abi, factoryAddress);
  
  const factoryInfo = {
    /*feeTo: await factory.methods.feeTo().call(),
    feeToSetter: await factory.methods.feeToSetter().call(), */
    allPoolsLength: await factory.methods.allPoolsLength().call(),
    allPools: [],
  };
  
  for (let i = 0; i < factoryInfo.allPoolsLength; i++) {
    factoryInfo.allPools[i] = await factory.methods.allPools(i).call();
  }

  factoryInfo.poolsInfo = await getPoolsInfo(factoryInfo.allPools, web3);
  return factoryInfo;
}
