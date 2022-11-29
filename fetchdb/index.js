fetch("http://localhost:3000/dogs")
.then(function(resp){
    console.log(resp)
    return resp.json()
})
.then(function(data){
    console.log(data)
    const div = document.getElementById("div")
    data.forEach(obj => {
        const container = document.createElement("div")
        div.append(container)
        const name = document.createElement("h1")
        const breed = document.createElement("h3")
        const image = document.createElement("img")
        container.append(name,image, breed)
        name.innerText = obj.name
        breed.innerText = obj.breed
        image.src = obj.image

    })

})

fetch("http://localhost:3000/cats")
.then(function(resp){
    console.log(resp)
    return resp.json()
})
.then(function(data){
    console.log(data)
    const div = document.getElementById("div")
    data.forEach(obj => {
        console.log(obj)
        const container = document.createElement("div")
        div.append(container)
        const name = document.createElement("h1")
        const breed = document.createElement("h3")
        const image = document.createElement("img")
        container.append(name,image, breed)
        name.innerText = obj.name
        breed.innerText = obj.breed
        image.src = obj.image
    })
})

const inputName = document.getElementById("name")
const inputChange = document.getElementById("change")

async function patch(id){
    await fetch(`http://localhost:3000/dogs/${id+1}`, {
        method: "PATCH",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name: inputChange.value
        })
    })
}

const btn = document.getElementById("btn")
async function changeName(){
    let request = await fetch("http://localhost:3000/dogs")
    console.log(request)
    let response = await request.json()
    console.log(response)
    response.forEach((data, index) => {
        console.log(inputName.value)
        if(inputName.value === data.name){
        patch(index)
        }
    })
}
btn.addEventListener("click", changeName)

const newForm = document.getElementById("newForm")
const newBtn = document.getElementById("newBtn")
const newName = document.getElementById("newName")
const newPic = document.getElementById("newPic")
const newBreed = document.getElementById("newBreed")

// async function post(){
// await fetch("http://localhost:3000/cats", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name: newName.value,
//         breed: newBreed.value,
//         image: newPic.value
//     })
// })
// }
newBtn.addEventListener("click", function(){
    fetch("http://localhost:3000/cats", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: newName.value,
        breed: newBreed.value,
        image: newPic.value
    })
})
})