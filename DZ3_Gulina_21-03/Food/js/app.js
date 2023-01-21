const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i=0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if(event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item,i) => {
            if(event.target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'

}
const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}
modalTrigger.addEventListener('click',openModal)
closeModalBtn.addEventListener('click',closeModal)

modal.onclick = (event) => event.target === modal ? closeModal() : false
window.onkeydown = (event) => event.code === 'Backspace' ? closeModal() : false

const modalTrigger2Part = document.querySelector('.btn_dark')
 modalTrigger2Part.addEventListener('click', openModal)














let indexValue = 0;
const slideAuto = () => {
    for (let i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = 'none'
        tabs[i].classList.remove('tabheader__item_active')
    }
    indexValue++
    if(indexValue > tabContent.length){
        indexValue = 1
    }
    tabContent[indexValue -1].style.display = 'block'
    tabs[indexValue -1].classList.add('tabheader__item_active')
    setTimeout(slideAuto , 2000)
}
slideAuto()

/////////////////////////////////////////////////////////////////////////////
const scrollTopWindow = () => {
    let windowBottom = document.documentElement.getBoundingClientRect().bottom;
    if(windowBottom < document.documentElement.clientHeight){
        openModal()
    }
}
 window.addEventListener('scroll', scrollTopWindow)







// let scrollheight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
// )
// console.log(scrollheight)