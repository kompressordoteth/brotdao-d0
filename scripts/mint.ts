import { ethers } from "hardhat";


async function main() {
    const NFT = await ethers.getContractFactory("PbNFT");
    const URI = "ipfs://METADATA_CID";
    const WALLET_ADDRESS = "YOUR_WALLET_ADDRESS";
    const CONTRACT_ADDRESS = "NFT CONTRACT ADDRESS";

    const contract = NFT.attach(CONTRACT_ADDRESS);


    await contract.mint(WALLET_ADDRESS, URI);

    console.log("NFT minted:", contract);
}


main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});