document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) {
        console.log("Mobile navigation elements not found.");
        return;
    }

    menuToggle.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }

    });


    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });


    document.addEventListener("click", function (e) {

        if (
            navLinks.classList.contains("active") &&
            !navLinks.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");

        }

    });


    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");

        }

    });


    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");

        }

    });

});