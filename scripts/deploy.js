const { ethers } = require('hardhat');

async function main() {
  const Arhke = await ethers.getContractFactory('Arkhe');
  const arhke = await Arhke.deploy('Deneme', 'DNM');

  await arhke.deployed();
  console.log('Success! Contract was deployed to: ', arhke.address);

  await arhke.mint(
    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    'https://ipfs.io/ipfs/bafkreih5je4ejvcljm26gbptwnf6wtzmvrqtc7iaythu7xbbkidfnmnabm'
  );

  console.log('NFT successfully minted');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
