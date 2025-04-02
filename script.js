document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("sideMenu");
    const hamburger = document.querySelector(".hamburger");
    const closeBtn = document.getElementById("closeMenu"); 

    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    }

    // Event listener untuk hamburger menu
    hamburger.addEventListener("click", toggleMenu);

    // Event listener untuk tombol "×"
    closeBtn.addEventListener("click", function () {
        menu.classList.remove("active"); 
    });

    // Tutup menu jika klik di luar area menu
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target) && !closeBtn.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});
