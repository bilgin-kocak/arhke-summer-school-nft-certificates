const { ethers } = require('hardhat');

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function main() {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const Arhke = await ethers.getContractFactory('ArkheProjesiBlokzinciri');
  const arhke = await Arhke.deploy('Arkhe Projesi Blockchain', 'ARKPB');

  await arhke.deployed();
  console.log('Success! Contract was deployed to: ', arhke.address);

  const tx1 = await arhke.mint(
    '0x2d9A7E9b88e9708819C922812037d0483692dF6A',
    'https://ipfs.io/ipfs/bafkreihe4fsyrhfioeu3c3gff6gtdqvlhwdwbnfhpfrfiaufuuk5fl44j4'
  );
  await delay(20000);
  console.log('NFTs successfully minted');
  const tx2 = await arhke.mint(
    '0x3F7573bd328BF750f22ffDDb04Eb5eFE2505134e',
    'https://ipfs.io/ipfs/bafkreihca2syearukkkvg7hcl7qidgphoha3fulogrefkwhl4jxumrsqfe'
  );
  await delay(20000);
  console.log('NFTs successfully minted');
  const tx3 = await arhke.mint(
    '0xc4c13e94950DeB7A1608175464aE9547210eB58E',
    'https://ipfs.io/ipfs/bafkreie5ay2qwvmib52dfs3xw7axdzl7fekp2acatgiopaaqarknwrjmem'
  );
  await delay(20000);
  console.log('NFTs successfully minted');
  const tx4 = await arhke.mint(
    '0x54aE1c37fBD56AF37F77bF82ED433d283D1c3484',
    'https://ipfs.io/ipfs/bafkreia5hfbh7uwtqzgup6gwjolvgcyffvwzfev7va6qbidfgyrjrznru4'
  );
  await delay(20000);
  console.log('NFTs successfully minted');
  const tx5 = await arhke.mint(
    '0xB7830bE33b1F2a44899C71142338687ea766eF18',
    'https://ipfs.io/ipfs/bafkreido3u43j6dtazzfhavs7v2cqse54juoawanfn4gdmxrrogo5evg4e'
  );
  await delay(20000);
  console.log('NFTs successfully minted');
  const tx6 = await arhke.mint(
    '0x075486d2CD04b0C0EeC355277e82D64337CB88E9',
    'https://ipfs.io/ipfs/bafkreibjexwmiulye5b563kyc4kwtrwzwunq3d5yraljukcxe5y5xbdmpq'
  );
  await delay(20000);
  console.log('NFTs successfully minted');

  const tx7 = await arhke.mint(
    '0x64DaaEA08D62e2031f796266879a61BAb763425E',
    'https://ipfs.io/ipfs/bafkreiaq4dhdc4uwnvkllm6uwo2pjazc2dz6efl3gou75bhumm7ym7ftsq'
  );
  await delay(20000);
  console.log('NFTs successfully minted');

  const tx8 = await arhke.mint(
    '0xfbf4aebae86872e0072c12e306a406f6d11ce2b3',
    'https://ipfs.io/ipfs/bafkreifyettcr4lap3v7tea3drfkrl2ttgfujscqtcujwbsbi3r4cbnur4'
  );
  await delay(20000);
  console.log('NFTs successfully minted');

  const tx9 = await arhke.mint(
    '0x0B89423E392c097286A828f6c624F4b6c1e4B259',
    'https://ipfs.io/ipfs/bafkreih2ene5osbwofurhc3etqlifvvvyliiopsfj6gg773nntezns2njm'
  );
  await delay(20000);
  console.log('NFTs successfully minted');

  const tx10 = await arhke.mint(
    '0x075486d2CD04b0C0EeC355277e82D64337CB88E9',
    'https://ipfs.io/ipfs/bafkreiemzfsscgqpxktod4ynly7oackm4j2brfwagan3yzxvxeghoxyu3i'
  );
  await delay(20000);
  console.log('NFTs successfully minted');

  const tx11 = await arhke.mint(
    '0x4338581215cf0B81603EBBB6e18a84e03c3a381D',
    'https://ipfs.io/ipfs/bafkreigkmlueh27i3zj5c3yguml5hiedaixqkk3h4gtoz23bbfqvfgaxnm'
  );
  await delay(20000);
  console.log('NFTs successfully minted');

  const tx12 = await arhke.mint(
    '0x390e77c5A25Ecad0e17C7F1f2C58df019cfE6462',
    'https://ipfs.io/ipfs/bafkreihvlzycdojp3txpx4qxfnsbnkur4d4vghv2skwysz53dmfmxwk5mq'
  );
  await delay(20000);
  console.log('NFTs successfully minted');

  const tx13 = await arhke.mint(
    '0x87c00fef47b7AEa126C134f6597C004bc9738796',
    'https://ipfs.io/ipfs/bafkreia33ymq5dx6bzrn3rmudjpqsueafoyzx2q6pdswhqjrfi5c5uvb44'
  );
  await delay(20000);
  console.log('NFTs successfully minted');

  const tx14 = await arhke.mint(
    '0xBAB96c32CC748Fa458F52fbE54c697e031bb429b',
    'https://ipfs.io/ipfs/bafkreidpgyc5a7pbt7num36zcg43dvknbk7mpkou6fuveviljaslx3gfnq'
  );
  await delay(20000);
  console.log('NFTs successfully minted');

  const tx15 = await arhke.mint(
    '0x3522B13D1b0DD83B641efa8AB9AEafB3E9B67a1d',
    'https://ipfs.io/ipfs/bafkreia2a2qsmvqpgeknt6dyx44oeylaecg3qwy25jhstlrq4smnietdae'
  );
  await delay(20000);
  console.log('NFTs successfully minted');

  const tx16 = await arhke.mint(
    '0xE9f4e4826a71d4327D8621C16daF33371705c845',
    'https://ipfs.io/ipfs/bafkreicznc5ma4nfreok3q3spzb5d5jnl2474sn4z7auw7xyguox3hkatm'
  );
  await delay(20000);
  console.log('NFTs successfully minted');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
