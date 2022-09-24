let button = document.querySelector(".btn")
let jokes = document.getElementById("joke")

button.addEventListener('click', ()=>{
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
    .then((res)=> res.json())
    .then((res) => {
        let joke = res.joke;
        jokes.innerText = joke
        
    })

})
