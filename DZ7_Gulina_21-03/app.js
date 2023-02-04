const info = document.querySelector('.info .container')
function getData () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((post) => {
                info.innerHTML +=  `
            <div class="info_inner">
            <img src="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" />
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
            `
            })
        })
}
getData()
