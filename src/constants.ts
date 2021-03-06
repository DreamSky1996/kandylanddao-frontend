export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-graph";
export const EPOCH_INTERVAL = 2200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 13.14;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  97: "https://thegraph.com/hosted-service/subgraph/pooltogether/bsc-v3_4_3",
  56: "https://thegraph.com/hosted-service/subgraph/pooltogether/bsc-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  97: {
    DAI_ADDRESS: "0x7Aa1D10D2bbFe51834b12628c59e6d90b10bd3B3", // duplicate
    KANDY_ADDRESS: "0x96968302E5D01AB7C2cBe65ADdB1BEbcB4bC869A",
    STAKING_ADDRESS: "0xd3eEbce3D1b368Bb111c09a8fE0038562FdBFE55",
    STAKING_HELPER_ADDRESS: "0x5874735d8349D77c54f34DAf3875dbFcB60a1c57",
    OLD_STAKING_ADDRESS: "0xb640AA9082ad720c60102489b806E665d67DCE32",
    SKANDY_ADDRESS: "0xE14e22E77B8E74BDEC412e7329290fBd34D0bBCa",
    WSKANDY_ADDRESS: "0xe73384f11Bb748Aa0Bc20f7b02958DF573e6E2ad",
    OLD_SKANDY_ADDRESS: "0x8Fc4167B0bdA22cb9890af2dB6cB1B818D6068AE",
    MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    DISTRIBUTOR_ADDRESS: "0x90fe28e22c2e3f0Fb6027b5BD483c8b338614A7B",
    BONDINGCALC_ADDRESS: "0xaDBE4FA3c2fcf36412D618AfCfC519C869400CEB",
    CIRCULATING_SUPPLY_ADDRESS: "0x1e9f955c9b3B577D5936Cc7CAfdEC7F8E42bBe47",
    TREASURY_ADDRESS: "0x8a336B44b1068A8726d5C81F0E25Da2cc6B6b190",
    REDEEM_HELPER_ADDRESS: "0xBd35d8b2FDc2b720842DB372f5E419d39B24781f",
    PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
  },
  56: {
    DAI_ADDRESS: "0x6b175474e89094c44da98b954eedeac495271d0f", // duplicate
    KANDY_ADDRESS: "0x383518188c0c6d7730d91b2c03a03c837814a899",
    STAKING_ADDRESS: "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xc8c436271f9a6f10a5b80c8b8ed7d0e8f37a612d", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x0822F3C03dcc24d200AFF33493Dc08d0e1f274A2",
    SKANDY_ADDRESS: "0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",
    WSKANDY_ADDRESS: "0xca76543cf381ebbb277be79574059e32108e3e65",
    OLD_SKANDY_ADDRESS: "0x31932E6e45012476ba3A3A4953cbA62AeE77Fbbe",
    PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
    AKANDY_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
    MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
    DISTRIBUTOR_ADDRESS: "0xbe731507810C8747C3E01E62c676b1cA6F93242f",
    BONDINGCALC_ADDRESS: "0xcaaa6a2d4b26067a391e7b7d65c16bb2d5fa571a",
    CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
    TREASURY_ADDRESS: "0x31f8cc382c9898b273eff4e0b7626a6987c846e8",
    CRUCIBLE_KANDY_LUSD: "0x2230ad29920D61A535759678191094b74271f373",
    LQTY: "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
    MIST: "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab",
    REDEEM_HELPER_ADDRESS: "0xE1e83825613DE12E8F0502Da939523558f0B819E",
    FUSE_6_SKANDY: "0x59bd6774c22486d9f4fab2d448dce4f892a9ae25", // Tetranode's Locker
    FUSE_18_SKANDY: "0x6eDa4b59BaC787933A4A21b65672539ceF6ec97b", // Olympus Pool Party
    PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", // NEW
  },
};
