const { ethers } = require('hardhat');

async function main() {
  const Arhke = await ethers.getContractFactory('Arkhe');
  const arhke = await Arhke.deploy('Arkhe', 'ARK');

  await arhke.deployed();
  console.log('Success! Contract was deployed to: ', arhke.address);

  await arhke.mint(
    'https://ipfs.io/ipfs/QmYoVjXNGbAVHKucFJ3xw8MMxWqFXHtyWPLzf4EB8aLW4f'
  );

  console.log('NFT successfully minted');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
