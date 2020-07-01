const fs = require("fs");
const path = require("path");

const projects = [
    {
        projectName: "EcoRoute",
        subtitle: "Find your way from A to B while minimizing your carbon footprint! ",
        description:
            "A web application for planning and mapping routes, that displays carbon contributions from each. ",
        githubLink: "https://github.com/titanian229/EcoRoute",
        liveLink: "https://go-ecoroute.com",
        imageURL: "./assets/icons/EcoRouteTall.jpg",
        technologies: ["JavaScript", "HTML/CSS", "HERE Mapping/Routing API", "OpenWeatherMap API", "Bootstrap"],
    },
    {
        projectName: "ScheduleCreator",
        subtitle: "Enter your work schedule on mobile or desktop",
        description:
            "Application that provides a simple way to create many Google Calendar events based on a week's shift schedule, while logging expected pay and shift information to a SQL database. Easily accessed with through an android application or a command line interface.",
        githubLink: "https://github.com/titanian229/schedule-creator-public",
        liveLink: "",
        imageURL: "./assets/icons/scheduler1.jpg",
        technologies: ["Python", "Kivy", "Google Calendar API", "SQLite"],
    },
    {
        projectName: "Weather Dashboard",
        subtitle: "See weather conditions, to plan your trips or just your day",
        description:
            "Weather dashboard for easily checking conditions in multiple cities, using the OpenWeatherMap API",
        githubLink: "https://github.com/titanian229/homework06",
        liveLink: "https://titanian229.github.io/homework06",
        imageURL: "./assets/icons/weather-dashboard.jpg",
        technologies: ["HTML/CSS", "JavaScript", "OpenWeatherMap API"],
    },
    {
        projectName: "Workday Scheduler",
        subtitle: "Quickly plan out your day",
        description:
            "A simple proof of concept using local storage to plan out a workday in a layout that responds to the time.",
        githubLink: "https://github.com/titanian229/workdayScheduler",
        liveLink: "https://titanian229.github.io/workdayScheduler",
        imageURL: "./assets/icons/workday-scheduler.jpg",
        technologies: ["HTML/CSS", "JavaScript", "Moment.js"],
    },
    {
        projectName: "Coding Quiz",
        subtitle: "See how you measure up in your Javascript knowledge",
        description:
            "A timed quiz that tests you on the basics of Javascript then shows you how you compare to others.",
        githubLink: "https://github.com/titanian229/homework04",
        liveLink: "https://titanian229.github.io/homework04",
        imageURL: "./assets/icons/javascript-quiz.jpg",
        technologies: ["HTML/CSS", "JavaScript"],
    },
    {
        projectName: "Password Generator",
        subtitle: "Easily generate a password to fit your requirements",
        description:
            "A javascript based password generator that takes requirements and randomly creates passwords of a given length.",
        githubLink: "https://github.com/titanian229/homework03",
        liveLink: "https://titanian229.github.io/homework03",
        imageURL: "./assets/icons/password-generator.jpg",
        technologies: ["HTML/CSS", "JavaScript"],
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
        projectName: "TC-Tools",
        subtitle:
            "Manage ecomm orders from multiple vendors, easily deal with conflicting vendor's item databases on the go",
        description:
            "An android application built using Python, SQLite and the Google Sheets API, for tracking orders and converting item numbers",
        githubLink: "https://github.com/titanian229/tc-tools-public",
        liveLink: "",
        imageURL: "./assets/icons/tc-main.png",
        technologies: ["Python", "Kivy", "SQLite", "Google Sheets API"],
    },
];

const skills = [
    {
        name: "JavaScript",
        icon: "",
    },
    {
        name: "HTML/CSS",
        icon: "",
    },
    {
        name: "React-JS",
        icon: "",
    },
    {
        name: "SQL",
        icon: "",
    },
    {
        name: "MongoDB",
        icon: "",
    },
    {
        name: "Express",
        icon: "",
    },
    {
        name: "NodeJS",
        icon: "",
    },
    {
        name: "Python",
        icon: "",
    },
];

const renderProject = (project) => {
    let template = fs.readFileSync(path.resolve(__dirname, "project-template.html"), "utf8");
    template = replacePlaceholders(template, "ProjectTitle", project.projectName);
    template = replacePlaceholders(template, "ProjectHeadline", project.subtitle);
    template = replacePlaceholders(template, "ProjectDescription", project.description);
    
    technologies = project.technologies.map(function (techItem) {
        return `<li>${techItem}</li>`;
    });

    template = replacePlaceholders(template, "ProjectTechnologies", technologies.join("\n"));
    if (project.githubLink != "") {
        githubButtonTemplate = `<a href="${project.githubLink}"><i class="fab fa-github"></i></a>`;
        template = replacePlaceholders(template, "ProjectGithub", githubButtonTemplate);
    } else {
        template = replacePlaceholders(template, "ProjectGithub", "");
    }
    if (project.liveLink != "") {
        liveTemplate = `<a href="${project.liveLink}"><i class="fas fa-anchor"></i></a>`;
        template = replacePlaceholders(template, "ProjectLiveLink", liveTemplate);
    } else {
        template = replacePlaceholders(template, "ProjectLiveLink", "");
    }

    template = replacePlaceholders(template, "ProjectImg", project.imageURL);
    return template;
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

let projectSection = projects.map(function (project) {
    return renderProject(project);
});
// console.log(projectSection);
fs.writeFileSync(path.resolve(__dirname, "project-output.html"), projectSection.join("\n"), "utf8");
