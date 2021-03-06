
//Hero animations
let tl = gsap.timeline();

tl.to('#earth', { delay: 3, duration: 4, y: '80vh', opacity: 0, ease: 'sine.in' }, 'earthFade');
tl.from('#astronaut', { delay: 3, duration: 4, css: { scale: 0.4 }, ease: 'power1.inOut' }, 'earthFade');
tl.from('#welcome-container h1', { duration: 0.7, x: 110, opacity: 0, ease: 'circ' }, 'name');
tl.from('nav', { delay: 0, duration: 0.7, x: -110, opacity: 0, ease: 'circ' }, 'name');

//Project card animations
setTimeout(function () {
    let elements;
    let windowHeight;
    
    function init() {
        elements = document.querySelectorAll('.project-card');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('come-in');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
}, 5000);

//Menu animation
setTimeout(function () {
    let sectionTitle;
    let windowHeight;

    function init() {
        sectionTitle = document.querySelector('#skills');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        let positionFromTop = sectionTitle.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            document.querySelector('nav').classList.add('minimized');
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
}, 8000);