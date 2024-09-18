function petYears(humanYears){

    if(humanYears===1){
        return [humanYears,15,15]
    }
    if(humanYears===2){
        return [humanYears,24,24]
    }

    const excessYears=humanYears-2;
    const catYears=excessYears*4;
    const dogYears=excessYears*5;

    return [humanYears,24+catYears,24+dogYears]
}