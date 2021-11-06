function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    // duration = time npc moves in a specified direction
    function walkEast(duration, callback) {
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        // setting timeout to stop the npc
        setTimeout(() => {
            stop()
            // if callback is passed calling upon the callback again
            if(callback){
                callback();
            }  
        }, duration) 
    }

    function walkNorth(duration, callback) {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        // setting timeout to stop the npc
        setTimeout(() => {
            stop()
            // if callback is passed calling upon the callback again
            if(callback){
                callback();
            }
        }, duration) 
    }

    function walkWest(duration, callback) {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        
        setTimeout(() => {
            stop()
            if(callback){
                callback();
            }
        }, duration) 
    }

    function walkSouth(duration, callback) {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        setTimeout(() => {
            stop()
            if(callback){
                callback();
            }
        }, duration) 
    }

    function stop(duration, callback) {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}