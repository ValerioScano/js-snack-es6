squadreDiCalcio = [{ "nome": "Arsenal", "puntiFatti": 0, "falliSubiti": 0 }, { "nome": "Tottenham", "puntiFatti": 0, "falliSubiti": 0 }, { "nome": "Liverpool", "puntiFatti": 0, "falliSubiti": 0 }];

document.getElementById("bottone").addEventListener("click", function(event) {
    event.preventDefault();
    debugger
    let risultati = ``
    let nomiSquadre = []
    for (i = 0; i < squadreDiCalcio.length; i++) {
        squadreDiCalcio[i].puntiFatti = Math.floor(Math.random() * 11);
        squadreDiCalcio[i].falliSubiti = Math.floor(Math.random() * 11);
        risultati += `la squadra ${squadreDiCalcio[i].nome} ha ottenuto ${squadreDiCalcio[i].puntiFatti} punti e ha subito ${squadreDiCalcio[i].falliSubiti} falli, `;
        nomiSquadre.push(squadreDiCalcio[i].nome);
    }
    document.getElementById("contenitore2").innerText = risultati;
    const tabellaSquadre = document.createElement("div");
    tabellaSquadre.innerText = nomiSquadre.join(", ");
    document.body.appendChild(tabellaSquadre);
})