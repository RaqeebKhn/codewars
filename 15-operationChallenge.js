function calci(operation, i1, i2){
    let result = 0;

    switch(operation){
        case '+':
            result = i1 + i2;
            break;
        case '-':
            result = i1 - i2;
            break;
        case '*':
            result = i1 * i2;
            break;
        case '/':
            result = i1 / i2;
            break;
    }
    return result;
}