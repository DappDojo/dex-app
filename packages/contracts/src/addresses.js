export const SEPOLIA_ID = 11155111;

const commonContracts = {
  factory: "0x25AEfC6A20844Eeca35637cFADC7773537Ea287c",
  router: "0x124B8c59A85859466E517Cd1529bEB25a55bfEa7",
  pool: "0x1C9686B105F3589776C5200DF7a5bb68EA616897"
};

export default {
  [SEPOLIA_ID]: {
    pairs: {
      "UNI-DAI": "0x1C9686B105F3589776C5200DF7a5bb68EA616897"
    },
    tokens: {
      DAI: "0x5D56c511572B57eD24aB89f572659aC5016FB0BA",
      UNI: "0x38bc780e0f42c3108a75FA6a5d762D2f11D661D4"
    },
    ...commonContracts
  }
};
