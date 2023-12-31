
import { Contract } from "@ethersproject/contracts";
import { abis } from "@my-app/contracts";
import { useCall } from "@usedapp/core";
import { useEffect } from "react";
import { parseUnits } from "ethers/lib/utils";

import { ROUTER_ADDRESS } from "../config";

export const getAvailableTokens = (pools) =>
  pools.reduce((prev, curr) => {
    prev[curr.token0Address] = curr.token0Name;
    prev[curr.token1Address] = curr.token1Name;
    return prev;
  }, {});

export const getCounterpartTokens = (pools, fromToken) => pools
  .filter((cur) => cur.token0Address === fromToken || cur.token1Address)
  .reduce((prev, curr) => {
    if (curr.token0Address === fromToken) {
      prev[curr.token1Address] = curr.token1Name;
    } else if (curr.token1Address === fromToken) {
      prev[curr.token0Address] = curr.token0Name;
    }
    return prev;
  }, {});

export const findPoolByTokens = (pools, fromToken, toToken) => {
  if (!Array.isArray(pools) || !fromToken || !toToken) return undefined;

  return pools.find((cur) =>
    (cur.token0Address === fromToken && cur.token1Address === toToken) ||
    (cur.token1Address === fromToken && cur.token0Address === toToken)
  );
};

export const isOperationPending = (operationState) => 
  operationState.status === "PendingSignature" || operationState.status === "Mining";
export const isOperationFailed = (operationState) =>
operationState.status === "Fail" || operationState.status === "Exception";
export const isOperationSucceeded = (operationState) =>
operationState.status === "Success";

export const getFailureMessage = (swapApproveState, swapExecuteState) => {
  if (isOperationPending(swapApproveState) || isOperationPending(swapExecuteState)) {
    return undefined;
  }

  if (isOperationFailed(swapApproveState)) {
    return "Approval failed - " + swapApproveState.errorMessage;
  }

  if (isOperationFailed(swapExecuteState)) {
    return "Swap failed - " + swapExecuteState.errorMessage;
  }

  return undefined;
};

export const getSuccessMessage = (swapApproveState, swapExecuteState) => {
  if (isOperationPending(swapExecuteState) ||isOperationPending(swapApproveState)) {
    return undefined;
  }

  if (isOperationSucceeded(swapExecuteState)) {
    return "Swap executed successfully";
  }

  if (isOperationSucceeded(swapApproveState)) {
    return "Approval successful";
  }

  return undefined;
};

export const useAmountsOut = (poolAddress, amountIn, fromToken, toToken) => {
  const isValidAmountIn = amountIn.gt(parseUnits("0"));
  const areParamsValid = !!(poolAddress && isValidAmountIn && fromToken && toToken);

  console.log("poolAddress: ", poolAddress);
  console.log("isValidAmountIn: ", isValidAmountIn);
  console.log("fromToken: ", fromToken);
  console.log("toToken: ", toToken);

  const { error, value } =
   useCall(
        areParamsValid && {
        contract: new Contract(ROUTER_ADDRESS, abis.router.abi),
        method: "getPoolAmountOut",
        args: [fromToken, toToken, amountIn],
      }
    ) ?? {};

  console.log("error: ", error);
  let temp;
  if(typeof value == "undefined") {
    temp = parseUnits("0"); 
    console.log("detected");
  }
  else
    temp = value?.amountOut;

  console.log("Amount out: ", value?.amountOut);

  return error ? parseUnits("0") : temp;
}

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}