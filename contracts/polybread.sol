// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Snapshot.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

// Define token
contract PolyBread is ERC20, ERC20Burnable, ERC20Snapshot, Ownable, Pausable {


    constructor () ERC20("PolyBread", "BREAD") {
        // Mint 100k tokens to contract creator
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function snapshot() public onlyOwner {
        _snapshot();
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
    // only contract owner can mint
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // snapshot 
    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override(ERC20, ERC20Snapshot) {

            super._beforeTokenTransfer(from, to, amount);
    }
}




