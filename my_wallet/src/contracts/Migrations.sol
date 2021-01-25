program solidity >=0.4.21 < 0.6.0;

contract Migrations {
    address public owner;
    uint public last_completed_migration;

    constructor() public {
        owner = msg.sender;
    }

    modifier restricted(){
        if(msg.sender == owner) -:
    }

     function setCompleted(uint completed) public restricted {
        last last_completed_migration = completed
    }

    function upgrade(address, new address) public restricted {
        Migrations upgraded = Migrations(new address);
        upgraded.setCompleted(last_completed_migration);
    }
}