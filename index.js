//grabbing elements off the page
const dogDiv = document.querySelector(".page-content")

//initializing
document.addEventListener("DOMContentLoaded", init)

function init(){
  getInfoFromApi()
}

const getInfoFromApi = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(parsedResponse => addDogToPage(parsedResponse))
}

//here's an example if you like createElement
const addDogToPage = (response) => {
  let dogPicture = document.createElement('img')
    dogPicture.src = response.message
    dogDiv.appendChild(dogPicture)
  let dogText = document.createElement("p")
    dogText.innerText = "There should be a dog above me!"
    dogDiv.appendChild(dogText)
}

//here's an example if you like innerHTML
// const addDogToPage = (response) => {
//   dogDiv.innerHTML = `
//   <img src=${response.message}></img>
//   <p>There should be a dog above me!</p>
//   `
// }
