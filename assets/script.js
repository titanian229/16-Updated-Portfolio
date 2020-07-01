gsap.from("#welcome-container h1", { delay: 2, duration: 1, x: 110, opacity: 0, ease: "circ" });
gsap.from("#welcome-container p", { delay: 3, duration: 1, x: -110, opacity: 0, ease: "circ" });

//detecting scroll
(function () {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll(".project-card");
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

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
