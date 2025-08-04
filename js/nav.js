export function initializeNavbar() {
    const nav_menu = document.getElementById('nav-bar');
    const nav_toggle = document.querySelector('.nav-toggle');
    const nav_links = document.querySelectorAll('.nav-item a');

    if (nav_toggle) {
        nav_toggle.addEventListener('click', function() {
            nav_toggle.classList.toggle('active');
            nav_menu.classList.toggle('active');
        });
    }

    nav_links.forEach(link => {
        link.addEventListener('click', function() {
            if (nav_menu.classList.contains('active')) {
                nav_menu.classList.remove('active');
                nav_toggle.classList.remove('active');
            }
        });
    });
}
