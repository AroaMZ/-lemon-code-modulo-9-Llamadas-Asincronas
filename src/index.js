import "./style.css";
// import * as dataBusiness from "./data-business";
// import * as Utils from "../utils.js"
import { getCharacters } from "./data-business";
import { createCharacterRow, showCharacter, showEpisodes } from "../utils.js";
import { infoGetCharacter } from "./data-business";
import { infoGetEpisode } from "./data-business";


getCharacters().then(
    data => {
        document.getElementById("root").innerHTML = "";
        rickMortyCharacters = data.results
        for (character of rickMortyCharacters) {
            console.log(character)
            divCharacter = createCharacterRow(character)
            divCharacter.setAttribute('id', character.id);
            document.getElementById("root").appendChild(divCharacter);
            divCharacter.addEventListener("click", function () {
                infoGetCharacter(this.id).then(
                    data => {
                        showCharacter(data)
                        // recorrer todos los episodios en los que aparece le personaje
                        // y pedir los detalles de cada uno con Axios
                        for (position in data.episode) {
                            infoGetEpisode(data.episode[position]).then(
                                data => {
                                    showEpisodes(data)
                                }
                            )
                        }
                    }
                )
            }
            )
        }
    })

