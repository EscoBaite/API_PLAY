const newP = document.querySelector('#people')
const button1 = document.querySelector('#button1')

const addNewPerson = async () => {
    const randNum = Math.floor(Math.random() * 80 + 1)
    const newPerson = await getPerson(randNum)
    const new1 = document.createElement('LI')
    new1.append(newPerson.name)
    newP.append(new1)
}
const getPerson = async (id) => {
    try {
        const person = await axios.get(`https://swapi.dev/api/people/${id}`)
        return person.data
    } catch (error) {
        console.log('Error', error)
    }

}

button1.addEventListener('click', addNewPerson)

const randNum = Math.floor(Math.random() * 80 + 1)
getPerson(randNum)


const jokes = document.querySelector('#jokes')
const button2 = document.querySelector('#button2')

const addNewJoke = async () => {
    const newJoke = await getJoke()
    const newLI = document.createElement('LI')
    newLI.append(newJoke)
    jokes.append(newLI)
}
const getJoke = async () => {
    const config = {headers: {Accept: 'application/json'}}
    const joke = await axios.get('https://icanhazdadjoke.com/', config)
    return joke.data.joke
}

button2.addEventListener('click', addNewJoke)