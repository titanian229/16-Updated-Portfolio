let tl = gsap.timeline();

// gsap.from("#welcome-container p", { delay: 3, duration: 1, x: -110, opacity: 0, ease: "circ" });
// tl.to("#astronaut", { delay: 0.5, duration: 3, width: 50, ease: "back.inOut", left: 30, top: 30 });
tl.to('#earth', { delay: 3, duration: 4, y: '80vh', opacity: 0, ease: 'sine.in' }, 'earthFade');
tl.from('#astronaut', { delay: 3, duration: 4, css: { scale: 0.4 }, ease: 'power1.inOut' }, 'earthFade');
tl.from('#welcome-container h1', { duration: 0.7, x: 110, opacity: 0, ease: 'circ' }, 'name');
tl.from('nav', { delay: 0, duration: 0.7, x: -110, opacity: 0, ease: 'circ' }, 'name');

// gsap.to("#about-container img", {delay:3, duration:3, y: 10, opacity: 0});

//detecting scroll

(function () {
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
})();

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

// window.addEventListener('scroll', () => {
//     const nav = document.querySelector("nav")
//     nav.classList.add("nav-horizontal")
// });

const projects = [
    {
        projectName: 'EcoRoute',
        subtitle: 'Find your way from A to B while minimizing your carbon footprint! ',
        description:
            'A web application for planning and mapping routes, that displays carbon contributions from each. ',
        githubLink: 'https://github.com/titanian229/EcoRoute',
        liveLink: 'https://go-ecoroute.com',
        imageURL: './assets/icons/EcoRouteTall.jpg',
        technologies: ['JavaScript', 'HTML/CSS', 'HERE Mapping/Routing API', 'OpenWeatherMap API', 'Bootstrap'],
    },
    {
        projectName: 'PageExchange',
        subtitle: 'Find a new life for your old books',
        description:
            'Node/Express based web application, a communal library for sharing and exchanging books acros the internet.  Has a built in messaging system and uses Auth0 authenticated accounts',
        imageURL: './assets/icons/PageExchange.png',
        githubLink: 'https://github.com/titanian229/TheSemicolons',
        liveLink: 'https://obscure-stream-03506.herokuapp.com/',
        technologies: ['JavaScript', 'HTML/CSS', 'NodeJS', 'Handlebars', 'Express', 'Auth0/PassportJS', 'MySQL'],
    },
    {
        projectName: 'ScheduleCreator',
        subtitle: 'Enter your work schedule on mobile or desktop',
        description:
            "Application that provides a simple way to create many Google Calendar events based on a week's shift schedule, while logging expected pay and shift information to a SQL database. Easily accessed with through an android application or a command line interface.",
        githubLink: 'https://github.com/titanian229/schedule-creator-public',
        liveLink: '',
        imageURL: './assets/icons/scheduler1.jpg',
        technologies: ['Python', 'Kivy', 'Google Calendar API', 'SQLite'],
    },
    {
        projectName: 'Weather Dashboard',
        subtitle: 'See weather conditions, to plan your trips or just your day',
        description:
            'Weather dashboard for easily checking conditions in multiple cities, using the OpenWeatherMap API',
        githubLink: 'https://github.com/titanian229/homework06',
        liveLink: 'https://titanian229.github.io/homework06',
        imageURL: './assets/icons/weather-dashboard.jpg',
        technologies: ['HTML/CSS', 'JavaScript', 'OpenWeatherMap API'],
    },
    {
        projectName: 'Workday Scheduler',
        subtitle: 'Quickly plan out your day',
        description:
            'A simple proof of concept using local storage to plan out a workday in a layout that responds to the time.',
        githubLink: 'https://github.com/titanian229/workdayScheduler',
        liveLink: 'https://titanian229.github.io/workdayScheduler',
        imageURL: './assets/icons/workday-scheduler.jpg',
        technologies: ['HTML/CSS', 'JavaScript', 'Moment.js'],
    },
    {
        projectName: 'Coding Quiz',
        subtitle: 'See how you measure up in your Javascript knowledge',
        description:
            'A timed quiz that tests you on the basics of Javascript then shows you how you compare to others.',
        githubLink: 'https://github.com/titanian229/homework04',
        liveLink: 'https://titanian229.github.io/homework04',
        imageURL: './assets/icons/javascript-quiz.jpg',
        technologies: ['HTML/CSS', 'JavaScript'],
    },
    {
        projectName: 'Password Generator',
        subtitle: 'Easily generate a password to fit your requirements',
        description:
            'A javascript based password generator that takes requirements and randomly creates passwords of a given length.',
        githubLink: 'https://github.com/titanian229/homework03',
        liveLink: 'https://titanian229.github.io/homework03',
        imageURL: './assets/icons/password-generator.jpg',
        technologies: ['HTML/CSS', 'JavaScript'],
    },
    // {
    //     projectName: "pHue Experiment",
    //     subtitle: "Simply control your smart lightbulb",
    //     description:
    //         "A proof of concept Python controller providing a simple command line interface using POST requests to control a smart light's settings.",
    //     githubLink: "https://github.com/titanian229/phueUIExperiment",
    //     liveLink: "",
    //     imageURL: "./assets/icons/phue.jpg",
    //     technologies: ["Python", "pHue Library"],
    // },
    {
        projectName: 'TC-Tools',
        subtitle:
            "Manage ecomm orders from multiple vendors, easily deal with conflicting vendor's item databases on the go",
        description:
            'An android application built using Python, SQLite and the Google Sheets API, for tracking orders and converting item numbers',
        githubLink: 'https://github.com/titanian229/tc-tools-public',
        liveLink: '',
        imageURL: './assets/icons/tc-main.png',
        technologies: ['Python', 'Kivy', 'SQLite', 'Google Sheets API'],
    },
];

const projectTemplater = (project) => {
    ({ projectName, subtitle, description, githubLink, liveLink, imageURL, technologies } = project);
    return `<div class="project-card">
    <div class="project-title">
        <h2>${projectName}</h2>
        <img src="${imageURL}" alt="${projectName}" />
    </div>
    <div class="project-text">
        <div class="project-description">
            <p class="project-headline">${subtitle}</p>
            <p class="description">${description}</p>
            <ul>
                ${technologies.map((tech) => `<li>${tech}</li>`).join('')}  
            </ul>
        </div>
    </div>
    <div class="project-links">
        ${liveLink ? `<a href="${liveLink}"><i class="fas fa-anchor"></i></a>` : ''}
        ${githubLink ? `<a href="${githubLink}"><i class="fab fa-github"></i></a>` : ''}
    </div>
    </div>
    `;
};

document.querySelector('#projects-container').innerHTML = projects.map((project) => projectTemplater(project)).join('');

//links

document.querySelector('#about').addEventListener('click', () => {window.location.href = window.location.href.split("#")[0] + '#about-title'});
document
    .querySelector('#portfolio')
    .addEventListener('click', () => {window.location.href = window.location.href.split("#")[0] + '#portfolio-title'});
document
    .querySelector('#contact')
    .addEventListener('click', () => {window.location.href = window.location.href.split("#")[0] + '#contact-title'});
document
    .querySelector('.logo')
    .addEventListener('click', () => document.querySelector('nav').classList.toggle('minimized'));
