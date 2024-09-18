function getAverage(arrayOfNumbers) {

    const count = arrayOfNumbers.length;
    let sum = 0;

    for(let i=0;i=count;i++){
        sum=sum+arrayOfNumbers[i]
    }

    const average=sum/count;
    const answer=Math.floor(average)

    return answer;
}