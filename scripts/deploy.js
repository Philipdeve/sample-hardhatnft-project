async function main () {
    // We get the contract to deploy
    const Nft = await ethers.getContractFactory('Nft');
    console.log('Deploying NFT...');
    const nft = await Nft.deploy("PhilNFT", "PN");
    await nft.waitForDeployment();
    console.log('Nft deployed to:', await nft.getAddress());
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });