export const SEPOLIA_ID = 11155111;

const commonContracts = {
  factory: "0xA47B4cC48f77dbC0726Fa12eF15c6dbBaff09c79",
  router: "0xDcC0FD6FEC01B50c560eA3E749322F1D9f9C6ec3",
  Pool: "0xF580CF8CDbC3009aD4D87E21fE5CA4543ad35Ba4"
};

export default {
  [SEPOLIA_ID]: {
    pools: {
      "UNI-DAI": "0xF580CF8CDbC3009aD4D87E21fE5CA4543ad35Ba4"
    },
    tokens: {
      DAI: "0x53A912943928F6d26696DF9C31B16355Ff4ED924",
      UNI: "0xfe457663234EC1Db6CB4eE472931A9553362440E"
    },
    ...commonContracts
  }
};
