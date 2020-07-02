let tl = gsap.timeline();

tl.from("#welcome-container h1", { delay: 2, duration: 1, x: 110, opacity: 0, ease: "circ" });
// gsap.from("#welcome-container p", { delay: 3, duration: 1, x: -110, opacity: 0, ease: "circ" });
// tl.to("#astronaut", { delay: 0.5, duration: 3, width: 50, ease: "back.inOut", left: 30, top: 30 });
tl.to("#earth", {delay:1, duration: 3, bottom: "-30vh"})
tl.from("nav", { duration: 1.5, opacity: 0, ease: "circ"});

// gsap.to("#about-container img", {delay:3, duration:3, y: 10, opacity: 0});

//detecting scroll

(function () {
    let elements;
    let windowHeight;

    function init() {
        elements = document.querySelectorAll(".project-card");
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add("come-in");
            }
        }
    }

    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);

    init();
    checkPosition();
})();
