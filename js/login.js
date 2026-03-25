function validarPaciente(event) {
    event.preventDefault();

    const usuario = document.getElementById("emailPaciente").value.trim();
    const senha = document.getElementById("senhaPaciente").value.trim();

    const pacienteCorreto = "paciente@gmail.com";
    const senhaCorreta = "1234";

    if (usuario === pacienteCorreto && senha === senhaCorreta) {
<<<<<<< HEAD
        alert("Usuario e senha corretos!");
        localStorage.setItem("usuarioLogado", pacienteCorreto);
        window.location.href = "consultas.html";
=======
        alert("Login realizado!");
        window.location.href = "menu.html";
>>>>>>> dce99dc3a8e8a82172e7c7158e57458a2570c0ad
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function validarPsicologo() {

    const emailPsicologo = document.getElementById("emailPsicologo").value;
    const crpPsicologo = document.getElementById("crpPsicologo").value;
    const senhaPsicologo = document.getElementById("senhaPsicologo").value;

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