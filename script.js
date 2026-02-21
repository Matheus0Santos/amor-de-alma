const dataInicio = new Date("2025-10-12T00:00:00");

function atualizarBodas() {
    const hoje = new Date();
    const diffTime = Math.abs(hoje - dataInicio);
    const totalDias = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Lógica de Mensário (Exemplo: 30 em 30 dias)
    const mesesJuntos = Math.floor(totalDias / 30);
    const diasNesseMes = totalDias % 30;
    const porcentagem = (diasNesseMes / 30) * 100;

    document.getElementById("boda-passada").innerText = `${mesesJuntos} meses`;
    document.getElementById("proxima-boda").innerText = `${mesesJuntos + 1} meses`;
    document.getElementById("progresso-boda").style.width = porcentagem + "%";
    
    // Atualiza título com emoji (exemplo simples)
    const emojis = ["🎈", "🍦", "🍫", "🍕", "🎥", "🏰", "🏠"];
    const emojiAtual = emojis[mesesJuntos % emojis.length];
    document.getElementById("boda-titulo-atual").innerText = `Bodas de Mensário ${emojiAtual}`;
}

// Chame essa função dentro do seu setInterval de tempo
setInterval(() => {
    // ... seu código de contador anterior ...
    atualizarBodas();
}, 1000);
