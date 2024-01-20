const extendHex = (shortHex) => {
  // write your code here
let fullHexCode ='';
	
for(let i = 0; i < shortHex.length; i++)
    {
        const tempHex = shortHex[i];
        if(tempHex != '#')
        {
        fullHexCode += tempHex + tempHex;    
        }
    }
	return '#'+fullHexCode;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex))
