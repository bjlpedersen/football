const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);

import { getTeam } from "./database.js";

console.log("team", getTeam(id))

const team = getTeam(id)

document.getElementById('name').innerText = team.name
document.getElementById('DOB').innerText = team.born
document.getElementById('CL').innerText = team.CL