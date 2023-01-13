const phoneInput = document.querySelector('#phoneInput')
const phoneCheck = document.querySelector('.phoneCheck')
const phoneResult = document.querySelector('.phoneResult')

const phoneRegExp = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

phoneCheck.addEventListener('click',  () => {
    if(phoneRegExp.test(phoneInput.value)){
        phoneResult.innerText = 'OK'
        phoneResult.style.color = 'green'
    }else{
        phoneResult.innerText = 'ERROR'
        phoneResult.style.color = 'red'
    }
})



const smBlock = document.querySelector('.sm_block')

let left = smBlock.style.left;
function moveRight (){
    if(left !== '') left = parseInt(left);
    else left += 40;
    smBlock.style.left = left + 'px';
    moveRight()
}
smBlock.addEventListener('click', moveRight);

//////////////////////////////////////////////////////////////

// let left = smBlock.style.left;
// document.querySelector('.sm_block').onclick = function moveRight () {
//     if(left !== '') left = parseInt(left);
//     else left += 40;
//     smBlock.style.left = left + 'px';
//     moveRight()
// }
//
