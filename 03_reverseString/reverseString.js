const reverseString = function(string) {
    let newString = '';
    for( i = string.length; i >= 0 ; i--){
      newString += string.slice(i-1,i);
    }
    return(newString)
};

// Do not edit below this line
module.exports = reverseString;
