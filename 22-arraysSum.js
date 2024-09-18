function sumations(arr1,arr2){
    let sum=0;

    for(let i=0;i<arr1.length;i++){
        const arrValue1=arr1[i];
        const arrValue2=arr2[i];

        const addedValue=arrValue1+arrValue2;

        sum+=addedValue;
    }
    return sum;
}