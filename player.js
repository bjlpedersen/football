const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);

import { getPlayer } from "./database.js";

console.log("player", getPlayer(id))

const player = getPlayer(id)

document.getElementById('name').innerText = player.name
document.getElementById('DOB').innerText = player.born
document.getElementById('club').innerText = player.club