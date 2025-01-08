const jokeBtn = document.getElementById("btn");
const joke  = document.getElementById("joke");

async function generateJoke(){
    const header = {
        headers: { 'X-Api-Key':'q7MuAH0Q3bnmYxZHaX7srg==9UW154kagdjfO38Z'}
    }
    const url = `https://api.api-ninjas.com/v1/dadjokes`
    let dadjoke = await fetch(url, header);
    dadjoke = await dadjoke.json();
    console.log(dadjoke,"dad joke");
    console.log(dadjoke[0])
    console.log(dadjoke[0].joke)
    joke.innerHTML = dadjoke[0].joke;

}


jokeBtn.addEventListener('click', generateJoke);


//using api ninja api