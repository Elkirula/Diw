window.onload = () => {
    let enlacesMenu = document.querySelectorAll('nav a');

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', (event) => {
            event.preventDefault(); 
            let idPortada = event.target.getAttribute('href').substring(1);
            let portada = document.getElementById(idPortada);

            document.querySelectorAll('.main-item').forEach(item => {
                item.style.border = ''; 
            });
            portada.style.border = '8px solid green'; 
        });
    });
};
