import axios from "axios";
function getCharacters() {
    return axios
        .get("https://rickandmortyapi.com/api/character")
        .then(response => {
            return response.data

        })
   
}

function infoGetCharacter(id){
    return axios
    .get("https://rickandmortyapi.com/api/character/" + id)
    .then(response =>{
        return response.data
    })
}

function infoGetEpisode(episode){
    return axios
    .get(episode)
    .then(response =>{
        return response.data
    })
}


module.exports = {
    getCharacters: getCharacters,
    infoGetCharacter: infoGetCharacter,
    infoGetEpisode: infoGetEpisode
}

