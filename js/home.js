// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Função para abrir o menu
    const openSidebar = () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    };

    // Função para fechar o menu
    const closeSidebar = () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    };

    // Eventos de clique
    menuToggle.addEventListener('click', openSidebar);
    closeMenu.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
});