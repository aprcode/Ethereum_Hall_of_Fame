pragma solidity >=0.7.0 <0.9.0;

contract Billboard{

    struct Tips{
        address userAddress;
        uint  amont;
        string user;
    }

    address payable admin;
    Tips[] dons;

    constructor()
    {
        admin = payable(msg.sender);
    }

    function invest(string memory nom) external payable{
        dons.push(Tips(msg.sender, msg.value, nom));
        admin.transfer(msg.value);

    }

    function getDons() external view returns( uint[] memory amonts, string[] memory user)
    {
        uint[] memory amontDons = new uint[](dons.length);
        string[] memory userDons = new string[](dons.length);
        for(uint i =0; i < dons.length; i++)
        {
            amontDons[i] = dons[i].amont;
            userDons[i] = dons[i].user;
        }
        return(amontDons, userDons);

    }


}
