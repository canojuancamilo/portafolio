let eventoScroll = function () {
    let sections = document.querySelectorAll('.section');
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 50;
        let sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {

            // Muestra la sección correspondiente
            section.style.display = 'block';

            let id = section.id;
            let correspondingLink = document.querySelector(`.sidebar-nav a[href="#${id}"]`);

            // Reinicia todos los enlaces a su estado original
            document.querySelectorAll('.sidebar-nav a').forEach(link => {
                link.classList.remove("opcionActiva");
            });

            // Cambia el color del enlace correspondiente
            correspondingLink.classList.add("opcionActiva");
        }
    });
}
eventoScroll();

window.addEventListener('scroll', eventoScroll);

function cerrarMenu() {
    // Cierra el menú cuando se hace clic en un elemento del menú
    $('.navbar-collapse').collapse('hide');
}