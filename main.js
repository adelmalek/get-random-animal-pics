const panda = document.querySelector("#panda");
const fox = document.querySelector("#fox");
const panda_btn = document.querySelector("#panda_btn");
const fox_btn = document.querySelector("#fox_btn");


function getRandomPanda() {
    fetch('https://some-random-api.ml/animal/red_panda')
        .then( result => result.json() )
        .then( data => {
            panda.innerHTML = `<img src="${data.image}"/>`
        })
}


function getRandomFox() {
    fetch('https://some-random-api.ml/animal/fox')
        .then( result => result.json() )
        .then( data => {
            fox.innerHTML = `<img src="${data.image}"/>`
        })
}


panda_btn.addEventListener('click', getRandomPanda);
fox_btn.addEventListener('click', getRandomFox);