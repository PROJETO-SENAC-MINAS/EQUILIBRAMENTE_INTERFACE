// Lista simulada de psicólogos
const psicologos = [
    {
        nome: "Dra. Ana Souza",
        especialidade: "ansiedade",
        cidade: "belo horizonte",
        estado: "MG"
    },
    {
        nome: "Dr. Carlos Mendes",
        especialidade: "relacionamento",
        cidade: "contagem",
        estado: "MG"
    },
    {
        nome: "Dra. Juliana Lima",
        especialidade: "depressao",
        cidade: "belo horizonte",
        estado: "MG"
    }
];

function buscarPsicologos() {
    const cidadeInput = document.getElementById("cidade").value.toLowerCase();
    const especialidadeInput = document.getElementById("especialidade").value;

    const lista = document.getElementById("listaPsicologos");
    lista.innerHTML = "";

    const resultados = psicologos.filter(psico => {
        const cidadeMatch = psico.cidade.includes(cidadeInput);
        const especialidadeMatch = especialidadeInput === "" || psico.especialidade === especialidadeInput;
        return cidadeMatch && especialidadeMatch;
    });

    if (resultados.length === 0) {
        lista.innerHTML = "<p>Nenhum psicólogo encontrado.</p>";
        return;
    }

    resultados.forEach(psico => {
        const card = document.createElement("div");
        card.classList.add("card-psicologo");

        card.innerHTML = `
            <h3>${psico.nome}</h3>
            <p><strong>Especialidade:</strong> ${psico.especialidade}</p>
            <p><strong>Local:</strong> ${psico.cidade} - ${psico.estado}</p>
            <button onclick="agendarConsulta('${psico.nome}')">Agendar Consulta</button>
        `;

        lista.appendChild(card);
    });
}

function agendarConsulta(nome) {
    alert("Consulta solicitada com " + nome);
}