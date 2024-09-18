function points(arrOfPts){

    let totalPts=0;

    for(let i=0;i<arrOfPts.length;i++){

        const value=arrOfPts[i];
        const parts=value.split(':')

        const x=parts[0]
        const y=parts[1]

        if(x>y){
            totalPts+=3;
        }else if(x===y){
            totalPts+=1;
        }
    }
    return totalPts;
}