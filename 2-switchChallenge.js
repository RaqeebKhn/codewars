function getPlanetName(id){
    var name;
    switch(id){
        case 1:
            name='mercury'
            break;
        case 2:
            name='venus'
            break;
        case 3:
            name='earth'
            break;
        case 4:
            name='mars'
            break;
        case 5:
            name='jupiter'
            break;
        case 6:
            name='saturn'    
            break;
        case 7:
            name='uranus'
            break;
        case 8:
            name='neptune'
            break;47
        default:
            name='Invalid ID'

    }
    return name;
}