const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = '0xAd4CA20fA7785F3C6869FCB3ae418B0aefBB5fdC';
const contract = require('../artifacts/contracts/NeoHR.sol/NeoHR.json');

const url = 'https://rpc-mumbai.maticvigil.com/';

let httpProvider = new ethers.providers.JsonRpcProvider(url);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, httpProvider);

// Contract
const arkhe = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
  //   const name = await arkhe.name();
  //   console.log('Contract name: ', name);
  // Minting
  const tx = await arkhe.mint5('0x48D185bc646534597E25199dd4d73692ebD98BAc');
  console.log('Transaction: ', tx);
  console.log('Minted');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log('error');
    console.error(error);
    process.exit(1);
  });
