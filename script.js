/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   3D HERO CARD
========================================= */

const heroCard =
    document.querySelector(".hero-card");

const heroArea =
    document.querySelector(".hero-card-wrap");


if (heroCard && heroArea) {

    heroArea.addEventListener("mousemove", (event) => {

        const rect =
            heroArea.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateY =
            ((x - centerX) / centerX) * 10;

        const rotateX =
            ((centerY - y) / centerY) * 10;

        heroCard.style.transform =
            `rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateZ(10px)`;

    });


    heroArea.addEventListener("mouseleave", () => {

        heroCard.style.transform =
            "rotateY(-8deg) rotateX(5deg)";

    });

}


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor =
    document.querySelector(".cursor");

const follower =
    document.querySelector(".cursor-follower");


let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;


document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursor.style.left =
        `${mouseX}px`;

    cursor.style.top =
        `${mouseY}px`;

});


function animateCursor() {

    followerX +=
        (mouseX - followerX) * 0.12;

    followerY +=
        (mouseY - followerY) * 0.12;

    follower.style.left =
        `${followerX}px`;

    follower.style.top =
        `${followerY}px`;

    requestAnimationFrame(animateCursor);

}

animateCursor();


/* =========================================
   CURSOR HOVER EFFECT
========================================= */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .service-card, .process-card"
    );


interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        follower.style.width = "60px";
        follower.style.height = "60px";

        follower.style.background =
            "rgba(50,255,126,0.06)";

    });


    element.addEventListener("mouseleave", () => {

        follower.style.width = "35px";
        follower.style.height = "35px";

        follower.style.background =
            "transparent";

    });

});


/* =========================================
   MAGNETIC BUTTONS
========================================= */

const magneticButtons =
    document.querySelectorAll(".magnetic");


magneticButtons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const rect =
            button.getBoundingClientRect();

        const x =
            event.clientX - rect.left - rect.width / 2;

        const y =
            event.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0, 0)";

    });

});


/* =========================================
   MOUSE LIGHT FOLLOWER
========================================= */

const background =
    document.querySelector(".background");


document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth) * 100;

    const y =
        (event.clientY / window.innerHeight) * 100;

    background.style.background = `
        radial-gradient(
            circle at ${x}% ${y}%,
            rgba(30,255,110,0.035),
            transparent 25%
        ),
        #030504
    `;

});


/* =========================================
   SERVICE CARD TILT
========================================= */

const serviceCards =
    document.querySelectorAll(".service-card");


serviceCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateX =
            ((y - rect.height / 2) /
                rect.height) * -5;

        const rotateY =
            ((x - rect.width / 2) /
                rect.width) * 5;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) rotateX(0) rotateY(0)";

    });

});


/* =========================================
   DYNAMIC GRID PARALLAX
========================================= */

const grid =
    document.querySelector(".grid");


document.addEventListener("mousemove", (event) => {

    if (!grid) return;

    const moveX =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const moveY =
        (event.clientY / window.innerHeight - 0.5) * 15;

    grid.style.marginLeft =
        `${moveX}px`;

    grid.style.marginTop =
        `${moveY}px`;

});


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});