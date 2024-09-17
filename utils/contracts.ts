import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "<0x366c5104778bE0580005D77FC3DC3F40c59E6993>";
const rewardTokenContractAddress = "<0xB1f5039359192Ca6e3F28C30Dcf4453581E3c9f3>";
const stakingContractAddress = "<0xB9d9a385f741E7Cae75Cb6e0D7E9833a4355A9dF>";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});
