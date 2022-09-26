const playerList = [
    {
        id: 1,
        name: "Messi",
        born: 1996,
        club: "PSG"
    },
    {
        id: 2,
        name: "Pedri",
        born: 2021,
        club: "FC Barcelona"
    },
    {
        id: 3,
        name: "Pele",
        born: 1967,
        club: "FC Midtjylland"
    },
]

export function getPlayerList() {
    return playerList
}


export function getPlayer(id) {
    for ( let n = 0; n < playerList.length; n++ ) {
        if (playerList[n].id == id) {
            return playerList[n]
        }
    };
    return {error: "Player not found"}
}


const teamList = [
    {
        id: 1,
        name: "barcelona",
        born: 1996,
        CL: 5
    },
    {
        id: 2,
        name: "Juventus",
        born: 2021,
        CL: 2
    },
    {
        id: 3,
        name: "Girona",
        born: 1967,
        CL: 0
    },
]

export function getTeamList() {
    return teamList
}


export function getTeam(id) {
    for ( let n = 0; n < teamList.length; n++ ) {
        if (teamList[n].id == id) {
            return teamList[n]
        }
    };
    return {error: "Team not found"}
}