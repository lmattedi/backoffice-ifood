document.addEventListener('DOMContentLoaded', function () {
    
    const menuToggle = document.getElementById('menu-toggle');
    const wrapper = document.getElementById('wrapper');

    menuToggle.addEventListener('click', function () {
        wrapper.classList.toggle('toggled');
    });
});
