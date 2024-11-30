let heroImage = document.getElementById("hero-image")
let heroTitle = document.getElementById("hero-title")
let heroDescription = document.getElementById("hero-description")
let heroes;

async function fetchAllHeroes(){
    let url = "https://akabab.github.io/superhero-api/api/all.json"

    try{
        let response = await fetch(url)
        
        heroes = await response.json()

        configureRandomHero()
    }
    catch{
        console.log(`Getting some error $(error)` )
    }
}

function onButtonClick(){
    configureRandomHero()
}

function configureRandomHero(){
    let randomIndex = Math.floor(Math.random()*562)
    let FirstHero = heroes[randomIndex]

    heroTitle.innerText = FirstHero.name
    heroDescription.innerText = FirstHero.biography.firstAppearance
    heroImage.setAttribute("src", FirstHero.images.md)
}

addEventListener("onload", fetchAllHeroes())