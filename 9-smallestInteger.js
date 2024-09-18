class smallestIntegerFinder {
    findSmallestInt(arrOfNumbers){
        let smallestNumber;

        for(i=0;i<arrOfNumbers.length;i++){
            const arrNumber=arrOfNumbers[i];

            if(i===o){
                smallestNumber=arrNumber;
            }
            if(arrNumber<smallestNumber){
                smallestNumber=arrNumber;
            }
        }
        return smallestNumber; 
    }
}