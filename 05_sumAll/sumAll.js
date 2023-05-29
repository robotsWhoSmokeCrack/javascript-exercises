const sumAll = function(num1,num2) {
    let lowNum;
    let highNum;
    if(num1 < 0|| num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number"){
        return("ERROR");
    } else {
    if(num1 < num2){
        lowNum = num1; 
        highNum = num2;
    } else {lowNum = num2; 
            highNum = num1;}
    let sumNums = lowNum;
    for (i = 1; i <=  (highNum - lowNum) ; i++){
        sumNums = sumNums + (lowNum + i);     
    }
return(sumNums);
    }
}

// Do not edit below this line
module.exports = sumAll;
