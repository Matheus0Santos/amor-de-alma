const dataNamoro = new Date("2025-10-12T00:00:00");

function atualizar() {
    const agora = new Date();
    const diff = agora - dataNamoro;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if(document.getElementById("contador-dias")) {
        document.getElementById("contador-dias").innerText = `Juntos há ${dias} dias ❤️`;
    }

    // Bodas
    const meses = Math.floor(dias / 30);
    const perc = ((dias % 30) / 30) * 100;
    if(document.getElementById("progresso-fill")) {
        document.getElementById("boda-de").innerText = `${meses} meses`;
        document.getElementById("boda-para").innerText = `${meses + 1} meses`;
        document.getElementById("progresso-fill").style.width = perc + "%";
    }
}
setInterval(atualizar, 1000);
atualizar();
