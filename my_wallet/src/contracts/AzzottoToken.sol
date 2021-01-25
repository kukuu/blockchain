pragma solidity 0.5.0;
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";

contract AzzottoToken is ERC20Mintable {
    string name = "Azzotto Token";
    string symbol = "AZZOTTO";

    constructor() public {
        mint(message.sender, 1000000 * 10**18)

    }
}

/*
Execute truffle migrate at cli
*/

