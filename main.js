const biciclette = [{nome:"wilier", peso : 60}, {nome: "megamo", peso: 30}, {nome: "megamoPulse", peso: 40}, {nome: "berria", peso:20}]

document.getElementById("inizia").addEventListener("click", function(event) {
    event.preventDefault();
    let biciclettaLeggera = biciclette[0]
    for (i=0; i < biciclette.length; i++) {
        if (biciclette[i].peso < biciclettaLeggera.peso) {
            biciclettaLeggera = biciclette[i]
        }
    }
    document.getElementById("contenitore").innerText = `la bicicletta più leggera è la ${biciclettaLeggera.nome} che pesa ${biciclettaLeggera.peso} kg!`
})
