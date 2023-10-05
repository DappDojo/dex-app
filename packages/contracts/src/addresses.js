export const SEPOLIA_ID = 11155111;

const commonContracts = {
  factory: "0x034174932b140352555c138087224c043503974e",
  router: "0x65983431d26FdfC8f1A6A9A03732C050A95D3Ee1",
  pool: "0x83531E6467b81723b0E5d2f88105e50465b40Aa4"
};

export default {
  [SEPOLIA_ID]: {
    pools: {
      "UNI-DAI": "0x83531E6467b81723b0E5d2f88105e50465b40Aa4"
    },
    tokens: {
      DAI: "0x8F97c9e52dDfC1F8b03e897c1F7D85db5242b55D",
      UNI: "0x3bfCDdf53140f8e87E0c942e3Cb17076C30876FD"
    },
    ...commonContracts
  }
};
