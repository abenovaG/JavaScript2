const box = document.querySelector('.box')

let positionX = 0
let positionY = 0

// const move = () => {
//     if (positionY >= 450 && positionX >= -450){
//         positionX--
//         box.style.left = `${positionX}px`
//         setTimeout(move,1)
//     }
// }
// move()

const move = () => {
    if (positionX <= 450 && positionY <=  0){
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move,1)
    }else if (positionX >= 450 &&  positionY <= 450){
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move,1)
    } else if (positionY >= 450 && positionX >= 0){
        positionX --
        box.style.left = `${positionX}px`
        setTimeout(move,1)
    }else if (positionY >= 0 && positionX <= 0){
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move,1)
    }
}
move()

////////////////////////////////////////////////////////////////////////

const input = document.querySelector('.input')
let stopInterval;


document.querySelector('.start').addEventListener('click', () => {
    const printNumbers=()=> {
        let begin = 0;

        stopInterval = setInterval(function() {
            input.value = begin;
            begin++;
        }, 100);
    }

    printNumbers();
})


document.querySelector('.stop').addEventListener('click', () => {
    clearInterval(stopInterval);
})
