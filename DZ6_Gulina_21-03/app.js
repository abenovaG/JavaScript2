const btn = document.querySelector('.btn')
const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
let num = 0

const fetchFun = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
        .then(response => response.json())
        .then(todoItem => {
            block.innerHTML = `
            <div class="card">
                <h3>${todoItem.title}</h3>
                <h3>${todoItem.completed}</h3>
                <h3>${todoItem.id}</h3>
            </div>
            `
        })
}

const counter = () => {
    btn.onclick = () => {
        num++
        fetchFun()
    }
    btnPrev.onclick = () => {
        num--
        fetchFun()
        if(num <= 2){
            num = 2
        }
    }
}
counter()


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json.forEach(item => {
        console.log(` ${item.id}) ${item.title}`)
    }))
