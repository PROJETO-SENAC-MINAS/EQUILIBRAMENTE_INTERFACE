function validarPaciente() {
    const usuario = document.getElementById("emailPaciente").value;
    const senha = document.getElementById("senhaPaciente").value;
    

    const pacienteCorreto = "paciente@gmail.com";
    const senhaCorreta = "1234";

    if (usuario === pacienteCorreto && senha === senhaCorreta) {
        alert("Usuario e senha corretos!");
        localStorage.setItem("usuarioLogado", pacienteCorreto);
        window.location.href = "consultas.html";
    } else {
        alert("Usuario ou e senha incorreto!");
    }
}

function validarPsicologo(event) {
    event.preventDefault(); 

    const emailPsicologo = document.getElementById("emailPsicologo").value.trim();
    const crpPsicologo = document.getElementById("crpPsicologo").value.trim();
    const senhaPsicologo = document.getElementById("senhaPsicologo").value.trim();

    const emailCorreto = "psicologo@gmail.com";
    const senhaCorreta = "1234";
    const crpCorreto = "01/1234";

    if (
        emailPsicologo === emailCorreto &&
        senhaPsicologo === senhaCorreta &&
        crpPsicologo === crpCorreto
    ) {
        alert("Usuário autenticado com sucesso!");
        localStorage.setItem("psicologoLogado", emailCorreto);

        
    } else {
        alert("Usuário, senha ou CRP incorretos!");
    }
}