const removeFromArray = function() {
    const newArray = arguments[0];
     for (i = 1; i < arguments.length; i++){
     if(newArray.includes(arguments[i])){
      newArray.splice(newArray.indexOf(arguments[i]),1);
     } else {continue}
 }
return(newArray)
}
// Do not edit below this line
module.exports = removeFromArray;
