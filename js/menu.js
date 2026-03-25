let dataAtual = new Date();

function renderCalendario() {
    const mesAno = document.getElementById("mesAno");
    const diasContainer = document.getElementById("dias");

    const mes = dataAtual.getMonth();
    const ano = dataAtual.getFullYear();

    const primeiroDia = new Date(ano, mes, 1).getDay();
    const ultimoDia = new Date(ano, mes + 1, 0).getDate();

    const nomesMeses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    mesAno.innerText = `${nomesMeses[mes]} ${ano}`;
    diasContainer.innerHTML = "";

    for (let i = 0; i < primeiroDia; i++) {
        diasContainer.innerHTML += `<div></div>`;
    }

    for (let dia = 1; dia <= ultimoDia; dia++) {
        const hoje = new Date();
        const classeHoje =
            dia === hoje.getDate() &&
            mes === hoje.getMonth() &&
            ano === hoje.getFullYear()
                ? "hoje"
                : "";

        diasContainer.innerHTML += `<div class="${classeHoje}">${dia}</div>`;
    }
}

function mudarMes(valor) {
    dataAtual.setMonth(dataAtual.getMonth() + valor);
    renderCalendario();
}

renderCalendario();