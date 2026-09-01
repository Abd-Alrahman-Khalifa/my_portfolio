// =========================================================
// MAIN.JS
// AbdAlrahman Khalifa Portfolio
// =========================================================


// =========================================================
// TYPING EFFECT
// =========================================================

const typedTextSpan = document.querySelector(".typed-text");

const textArray = [
    "Scalable Backends with Laravel",
    "REST APIs & Databases",
    "Full-Stack Web Applications"
];

let textArrayIndex = 0;
let charIndex = 0;

function typing() {

    if (!typedTextSpan) return;

    if (charIndex < textArray[textArrayIndex].length) {

        typedTextSpan.textContent +=
            textArray[textArrayIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typing, 200);

    } else {

        setTimeout(erasing, 1000);

    }
}


function erasing() {

    if (!typedTextSpan) return;

    if (charIndex > 0) {

        typedTextSpan.textContent =
            textArray[textArrayIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erasing, 100);

    } else {

        textArrayIndex++;

        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }

        setTimeout(typing, 1500);

    }

}


// =========================================================
// MOBILE MENU
// =========================================================

const menu = document.querySelector("#icon-menu");
const navbar = document.querySelector(".sidebar");

if (menu && navbar) {

    menu.addEventListener("click", () => {

        menu.classList.toggle("fa-times");
        navbar.classList.toggle("active");

    });

}


// =========================================================
// PRELOADER
// =========================================================

const loader = document.getElementById("preloader");

window.addEventListener("load", () => {

    if (loader) {
        loader.style.display = "none";
    }

});


// =========================================================
// SCROLL REVEAL
// =========================================================

function showsec() {

    const reveals = document.querySelectorAll(".showsec");

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", showsec);


// =========================================================
// SCALE REVEAL
// =========================================================

function a7aa() {

    const reveals = document.querySelectorAll(".showscal");

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 40;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("showsc");

        }

    });

}

window.addEventListener("scroll", a7aa);


// =========================================================
// ARROW UP
// =========================================================

const arrow = document.querySelector(".icon-arrow-up");


// =========================================================
// SKILLS PROGRESS BARS
// =========================================================

const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress-bar");


// =========================================================
// SIDEBAR NAVIGATION
// =========================================================
//
// IMPORTANT:
// The sidebar is NOT inside <header>.
// Therefore we use:
// ".sidebar .menu a"
// instead of:
// "header .sidebar .menu a"
//
// =========================================================

const sectionAll = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".sidebar .menu a");


// =========================================================
// SET ACTIVE NAV LINK
// =========================================================

function setActiveNav(sectionId) {

    if (!navLinks.length) return;

    navLinks.forEach((link) => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${sectionId}`) {

            link.classList.add("active");

        }

    });

}


// =========================================================
// NAV LINK CLICK
// =========================================================
//
// This makes the clicked item active immediately,
// without waiting for the scroll event.
//

navLinks.forEach((link) => {

    link.addEventListener("click", function () {

        const href = this.getAttribute("href");

        if (!href || !href.startsWith("#")) return;

        const targetId = href.substring(1);

        const targetSection =
            document.getElementById(targetId);

        if (!targetSection) return;

        // Active immediately
        setActiveNav(targetId);

        // Close mobile sidebar
        if (menu && navbar) {

            menu.classList.remove("fa-times");
            navbar.classList.remove("active");

        }

    });

});


// =========================================================
// DETECT ACTIVE SECTION ON SCROLL
// =========================================================

function updateActiveSection() {

    if (!sectionAll.length || !navLinks.length) return;

    const scrollPosition =
        window.scrollY + 250;

    let currentSection = "home";

    sectionAll.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });

    setActiveNav(currentSection);

}


// =========================================================
// MAIN SCROLL EVENT
// =========================================================

window.addEventListener("scroll", () => {


    // -----------------------------------------------------
    // Close Mobile Menu
    // -----------------------------------------------------

    if (menu && navbar) {

        menu.classList.remove("fa-times");
        navbar.classList.remove("active");

    }


    // -----------------------------------------------------
    // Arrow Up
    // -----------------------------------------------------

    if (arrow) {

        if (window.scrollY >= 800) {

            arrow.classList.add("showarro");

        } else {

            arrow.classList.remove("showarro");

        }

    }


    // -----------------------------------------------------
    // Skills Progress Bars
    // -----------------------------------------------------

    if (skillsSection) {

        if (
            window.scrollY >=
            skillsSection.offsetTop - 270
        ) {

            progressBars.forEach((progressBar) => {

                if (progressBar.dataset.width) {

                    progressBar.style.width =
                        progressBar.dataset.width;

                    progressBar.style.transition =
                        "width 1s ease";

                }

            });

        }

    }


    // -----------------------------------------------------
    // Sidebar Active Section
    // -----------------------------------------------------

    updateActiveSection();

});


// =========================================================
// DARK / LIGHT MODE
// =========================================================

const darkLight =
    document.getElementById("moon");

if (darkLight) {

    darkLight.addEventListener("click", () => {

        document.body.classList.toggle("dark");

    });

}


// =========================================================
// SWIPER - TESTIMONIAL
// =========================================================

if (document.querySelector(".testimonial")) {

    new Swiper(".testimonial", {

        slidesPerView: 1,

        grabCursor: true,

        loop: true,

        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },

        speed: 2000,

        pagination: {
            el: ".swiper-paginationn",
            clickable: true
        },

        navigation: {
            nextEl: ".swiper-button-nextt",
            prevEl: ".swiper-button-prevv"
        }

    });

}


// =========================================================
// SERVICES SWIPER
// =========================================================
//
// NOTE:
// We initialize .team-slider ONLY ONCE.
// The old code initialized it twice, which could
// cause Swiper conflicts.
//

if (document.querySelector(".team-slider")) {

    new Swiper(".team-slider", {

        slidesPerView: 3,

        spaceBetween: 25,

        loop: true,

        speed: 700,

        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },

        navigation: {
            nextEl: ".service-next",
            prevEl: ".service-prev"
        },

        pagination: {
            el: ".service-pagination",
            clickable: true
        },

        breakpoints: {

            0: {
                slidesPerView: 1
            },

            600: {
                slidesPerView: 2
            },

            1000: {
                slidesPerView: 3
            }

        }

    });

}


// =========================================================
// PORTFOLIO PROJECT FILTER
// =========================================================

const switcherLis =
    document.querySelectorAll(".project-menu li");

const projects =
    document.querySelectorAll(
        ".all-project .portfolio-project"
    );


if (switcherLis.length && projects.length) {

    switcherLis.forEach((li) => {

        li.addEventListener("click", function () {


            // Remove active from all filters

            switcherLis.forEach((item) => {

                item.classList.remove("active");

            });


            // Add active to clicked filter

            this.classList.add("active");


            // Get category

            const filter =
                this.dataset.cat;


            // Filter projects

            projects.forEach((project) => {

                if (filter === ".all-m") {

                    project.style.display =
                        "block";

                } else if (
                    project.matches(filter)
                ) {

                    project.style.display =
                        "block";

                } else {

                    project.style.display =
                        "none";

                }

            });

        });

    });

}


// =========================================================
// CERTIFICATES SWIPER
// =========================================================

if (document.querySelector(".certificate-slider")) {

    new Swiper(".certificate-slider", {

        slidesPerView: 1,

        spaceBetween: 25,

        loop: true,

        speed: 700,

        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },

        navigation: {
            nextEl: ".certificate-next",
            prevEl: ".certificate-prev"
        },

        pagination: {
            el: ".certificate-pagination",
            clickable: true
        }

    });

}


// =========================================================
// CERTIFICATE MODAL
// =========================================================

const certificateModal =
    document.getElementById(
        "certificateModal"
    );

const certificateModalImage =
    document.getElementById(
        "certificateModalImage"
    );


const certificateCards =
    document.querySelectorAll(
        ".certificate-card"
    );


if (
    certificateModal &&
    certificateModalImage &&
    certificateCards.length
) {

    certificateCards.forEach((card) => {

        card.addEventListener("click", function () {

            const image =
                this.querySelector("img");

            if (!image) return;

            certificateModalImage.src =
                image.src;

            certificateModal.classList.add(
                "active"
            );

        });

    });


    // -----------------------------------------------------
    // Close Button
    // -----------------------------------------------------

    const closeButton =
        document.querySelector(
            ".certificate-modal-close"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            () => {

                certificateModal.classList.remove(
                    "active"
                );

            }
        );

    }


    // -----------------------------------------------------
    // Click Outside
    // -----------------------------------------------------

    certificateModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                certificateModal
            ) {

                certificateModal.classList.remove(
                    "active"
                );

            }

        }
    );


    // -----------------------------------------------------
    // ESC
    // -----------------------------------------------------

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                certificateModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


// =========================================================
// START TYPING
// =========================================================

window.addEventListener("load", () => {

    if (typedTextSpan) {

        setTimeout(typing, 0);

    }

});


// =========================================================
// INITIAL PAGE CHECK
// =========================================================

showsec();
a7aa();


// =========================================================
// INITIAL ACTIVE NAV
// =========================================================

updateActiveSection();


// =========================================================
// HANDLE HASH ON PAGE LOAD
// =========================================================

window.addEventListener("load", () => {

    const hash =
        window.location.hash;

    if (
        hash &&
        hash.length > 1
    ) {

        const sectionId =
            hash.substring(1);

        const section =
            document.getElementById(
                sectionId
            );

        if (section) {

            setActiveNav(sectionId);

        }

    } else {

        setActiveNav("home");

    }

});

