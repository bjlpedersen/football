import { getTeamList } from "./database.js";

import (getTeamList)

const teamListTable = document.getElementById('teamList')

const teamList = getTeamList()
teamList.forEach(team => {
    let currentHTML = teamListTable.innerHTML
    const html = `
        <tr>
            <td>
                <a href = "team.html?id=${team.id}">${team.name}</a>
            </td>
            <td>
                ${team.born}
            </td>
            <td>
                ${team.CL}
            </td>
        </tr>
    `
    teamListTable.innerHTML = currentHTML + html
})