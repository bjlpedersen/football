import { getPlayerList } from "./database.js";

import (getPlayerList)

const playerListTable = document.getElementById('playerList')

const playerList = getPlayerList()


playerList.forEach(player => {
    let currentHTML = playerListTable.innerHTML
    const html = `
        <tr>
            <td>
                <a href = "player.html?id=${player.id}">${player.name}</a>
            </td>
            <td>
                ${player.born}
            </td>
            <td>
                ${player.club}
            </td>
        </tr>
    `
    playerListTable.innerHTML = currentHTML + html
});