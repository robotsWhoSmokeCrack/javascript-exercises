const repeatString = function(string,num) {
    if(num < 0){
        return("ERROR");
    } else {
    let strings = "";
    for(i=0; i < num; i++){
        strings = strings + string;
    }
   return(strings);
}
};

// Do not edit below this line
module.exports = repeatString;
