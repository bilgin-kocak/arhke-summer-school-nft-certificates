const { ethers } = require('hardhat');

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function main() {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const Arhke = await ethers.getContractFactory('Day');
  const arhke = await Arhke.deploy();

  await arhke.deployed();
  console.log('Success! Contract was deployed to: ', arhke.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
