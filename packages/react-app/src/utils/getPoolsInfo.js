import { abis } from "@my-app/contracts";

export async function getPoolsInfo(poolAddresses, web3) {
  const poolsInfo = [];
  const poolABI = abis.pool.abi;
  const tokenABI = abis.token.abi;

  for (let i = 0; i < poolAddresses.length; ++i) {
    const poolAddress = poolAddresses[i];
    const pool = new web3.eth.Contract(poolABI, poolAddresses[i]);

    const token0Address = await pool.methods.token0().call();
    const token1Address = await pool.methods.token1().call();
    const token0Contract = new web3.eth.Contract(tokenABI, token0Address);
    const token1Contract = new web3.eth.Contract(tokenABI, token1Address);
    const token0Name = await token0Contract.methods.name().call();
    const token1Name = await token1Contract.methods.name().call();

    poolsInfo.push({
      address: poolAddress,
      token0Address,
      token1Address,
      token0Name,
      token1Name
    });
  }

  return poolsInfo;
}
