// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract PassoGO is ERC721URIStorage, Ownable {
    uint256 public _tokenId = 0;
    string public tokenURI =
        "https://moccasin-weary-cat-358.mypinata.cloud/ipfs/QmZDh5WsaszqvpdzoYFXp2vKPvPbRL7UUch4QzFGg2LhcB/";

    constructor() ERC721("PassoGO", "PGO") {}

    function mint(address player) public onlyOwner returns (uint256) {
        _tokenId += 1;
        _mint(player, _tokenId);
        string memory _tokenUri = string(
            abi.encodePacked(tokenURI, Strings.toString(_tokenId), ".json")
        );
        _setTokenURI(_tokenId, _tokenUri);

        return _tokenId;
    }

    function mint10(address player) public onlyOwner {
        for (uint256 i = 0; i < 10; i++) {
            mint(player);
        }
    }
}
