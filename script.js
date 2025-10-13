const fakta = [
    "Hästar kan sova både stående och liggande.",
    "Det finns över 350 olika hästraser i världen.",
    "Ett hästhjärta väger cirka 4–5 kg.",
    "Hästar har ett utmärkt minne och kan komma ihåg människor länge.",
    "Vilda hästar lever i flockar och har ett starkt socialt beteende."
];

function visaFakta() {
    const slumpmässigFakta = fakta[Math.floor(Math.random() * fakta.length)];
    document.getElementById("faktaText").textContent = slumpmässigFakta;
}
