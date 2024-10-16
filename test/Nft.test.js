const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Nft", function () {
    it("should return correct name", async function () {
        const nftContract = await ethers.getContractFactory("Nft");
        const myContractDeployed = await nftContract.deploy("PhilNFT", "PN");
        await myContractDeployed.waitForDeployment();
        expect(await myContractDeployed.name()).to.equal("PhilNFT");
    }) 
   
})