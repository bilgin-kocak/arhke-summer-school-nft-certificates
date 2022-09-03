const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const contract = require('../artifacts/contracts/Arkhe.sol/ArkheProjesiBlokzinciri.json');

const url =
  'https://polygon-mainnet.g.alchemy.com/v2/XfcPlY-hY1r-HkuCUw9xENoZbVuk6A5w';

let httpProvider = new ethers.providers.JsonRpcProvider(url);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, httpProvider);

// Contract
const arkhe = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
  //   const name = await arkhe.name();
  //   console.log('Contract name: ', name);
  // Minting
  const tx = await arkhe.mint(
    '0xaA914171DAC56aBF7f9276DB843d0B98b45Ee4AA',
    'https://ipfs.io/ipfs/bafkreifrk3v6lhlcg23edbvdjiw27sy3ujygagi5zhtemlg3xcaxvpg4ii',
    { gasPrice: 32000000000 }
  );
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
