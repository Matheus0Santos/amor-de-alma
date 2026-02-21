const dataInicio = new Date("2025-10-12T00:00:00");

function atualizarTudo() {
    const agora = new Date();
    
    // Contador de Dias e Segundos
    const diff = agora - dataInicio;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const segundosTotal = Math.floor(diff / 1000);
    
    document.getElementById("contador-dias").innerText = `Juntos há ${dias} dias ❤️`;
    document.getElementById("contador-segundos").innerText = `${segundosTotal.toLocaleString()} segundos de puro amor`;

    // Contagem Regressiva Nivers
    function regressiva(dataAlvo, elementId) {
        let alvo = new Date(agora.getFullYear(), dataAlvo.mes - 1, dataAlvo.dia);
        if (agora > alvo) alvo.setFullYear(agora.getFullYear() + 1);
        
        const diasFaltam = Math.ceil((alvo - agora) / (1000 * 60 * 60 * 24));
        document.getElementById(elementId).innerText = `Faltam ${diasFaltam} dias`;
    }

    regressiva({dia: 27, mes: 7}, "regressiva-meu");
    regressiva({dia: 10, mes: 1}, "regressiva-dela");

    // Painel de Bodas (Exemplo: Bodas de Mensário)
    const mesesJuntos = Math.floor(dias / 30);
    const progresso = (dias % 30 / 30) * 100;
    document.getElementById("boda-atual").innerText = `Próximo Mensário: ${mesesJuntos + 1} meses`;
    document.getElementById("progresso-boda").style.width = progresso + "%";
}

// Simulação de Clima (Para funcionar real precisa de chave API, mas deixei o visual pronto)
function carregarClima() {
    document.getElementById("temp-recife").innerText = "29°C";
    document.getElementById("temp-garanhuns").innerText = "21°C";
}

setInterval(atualizarTudo, 1000);
carregarClima();
atualizarTudo();
