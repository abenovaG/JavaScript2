const button = document.querySelector('.btn')

button.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "peoples.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const data = JSON.parse(request.response)

        data.forEach(people => {
            // for (let i = 0; i < data.length; i++)
                console.log(`- Name: ${people.name}`)
                console.log(`Age: ${people.age}` )
                document.querySelector('.name').innerHTML = people.name
                document.querySelector('.age').innerHTML = people.age
            // document.querySelector('.name2').innerHTML = data[1].name
            // document.querySelector('.age2').innerHTML = data[1].age
            // document.querySelector('.name3').innerHTML = data[2].name
            // document.querySelector('.age3').innerHTML = data[2].age
            // document.querySelector('.name4').innerHTML = data[3].name
            // document.querySelector('.age4').innerHTML = data[3].age
        })
    }
})