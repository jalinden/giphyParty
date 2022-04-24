let gifForm = document.querySelector("form");
let gifContainer = document.getElementById("container");
let removeButton = document.getElementById("button")
gifForm.addEventListener("submit", function(e){
    e.preventDefault();
    let gifTerm = JSON.stringify(document.getElementById("gif").value);
    gifRequest(gifTerm);
    
})

removeButton.addEventListener("click", function (e){
    e.preventDefault();
    gifContainer.innerHTML = '';


})

async function gifRequest(term) {
    let apiKey='5JH1O94rHUMEwAxELqRtVm9fjOTeTjv5';
    let gif = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${apiKey}`);
    let newGif = document.createElement("img");
    let idx = Math.floor(Math.random() * 49);
    newGif.src = gif.data.data[idx].images.original.url;
    gifContainer.appendChild(newGif);
}