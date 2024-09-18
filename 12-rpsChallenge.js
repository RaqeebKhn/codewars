function rps(p1,p2){
    if(p1==='rock'){
        if(p2==='rock'){
            return 'Draw!'
        }
        if(p2==='paper'){
            return 'p2 won!'
        }
        if(p2==='scissor'){
            return 'p1 won!'
        }
    }
    if(p1==='paper'){
        if(p2==='rock'){
            return 'p1 won!!'
        }
        if(p2==='paper'){
            return 'Draw!'
        }
        if(p2==='scissor'){
            return 'p2 won!'
        }
    }
    if(p1==='scissor'){
        if(p2==='rock'){
            return 'p2 won!'
        }
        if(p2==='paper'){
            return 'p1 won!'
        }
        if(p2==='scissor'){
            return 'Draw!'
        }
    }
}