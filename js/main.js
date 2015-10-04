var PROJECTS = {
    dexto: {
        title: "Dexto",
        url: "dexto.html",
        img: "img/dexto.png",
        description: "Dexto is a revolutionary application that makes configuring gestures with the Myo easy. Using various algorithms we figured out how to track finger movements...",
    },
    istitch: {
        title: "iStitch",
        url: "istitch.html",
        img: "img/istitch2.png",
        description: "iStitch is a image processing system for corneal nerve quantification. It stitches images and videos into montages using the OpenCV stitching algorithm and..."
    },
    fireauth: {
        title: "FireAuth",
        url: "https://github.com/FireAuth/FireAuth",
        img: "img/fireauth.png",
        description: "FireAuth is a firebase wrapper that manages all the authentication in a Firebase application. The wrapper has a many simple methods which make firebase authentication simple."
    },
    firecrud: {
        title: "FireCRUD",
        url: "https://github.com/ayushajain/FireCRUD",
        img: "img/firecrud.png",
        description: "FireCRUD is an open source library for making CRUDs with Firebase. By refrencing the firebase branch url and passing in an object that defines the table structure a full user CRUD screen is created."
    },
    teaching: {
        title: "Teaching at Techlab",
        url: "techlab-teaching.html",
        img: "img/teaching.JPG",
        description: "During the summer of 2015, I worked as an intern for Techlab Education. I worked with kids of all ages and taught them how to program in various languages such as javascript and python. I also helped taught the web dev classes..."
    },
    techlab: {
        title: "Techlab Website",
        url: "techlab-website.html",
        img: "img/techlab.png",
        description: "I contributed to the creation of the Techlab website during my internship at Techlab Education. I collaborated with other interns to improve the user experience and make the entire website beautiful and usable."
    },
    dankripplz: {
        title: "DankRipplz",
        url: "dankripplz.html",
        img: "img/dankripplz.png",
        description: "DankRipplz was a fun minigame created using D3.js by myself and another Techlab intern. It was a fun project we created within the span of 2-3 hours without any prior knowledge of D3..."
    },
    aquaponics: {
        title: "Aquaponics",
        url: "aquaponics.html",
        img: "img/aqua.jpg",
        description: "The Aquaponics Project was a DIY aquaponics system that is meant to operate without human interferance. It was created to minimize water usage since California was in a drought."
    },
    dankchains: {
        title: "DankChains",
        url: "dankchains.html",
        img: "img/dankchains.png",
        description: "DankChains is a game concept that I have been planning to work on. So far, I have created an engine for the game and I am currently working on switching from Firebase to some sort of RTC or WebSocket"
    },
    peered: {
        title: "PeerEd",
        url: "http://ayushajain.com/PeerEd",
        img: "",
        description: "PeerEd was the project I worked on in a Hackathon. During TeenHacks, my team and I created PeerEd to help students recieve feedback on their writing. For most of us, this was our first hackathon..."
    }
}

var count = 0;
var projectList = '<div class="row">';
for(var project in PROJECTS){
    if(PROJECTS[project].img == ""){
        PROJECTS[project].img = "http://placehold.it/700x400";
    }
    if(PROJECTS[project].description == ""){
        PROJECTS[project].description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.";
    }

    projectList += '<div class="col-md-4 portfolio-item">' +
        '<div class="card shadow-z-1">' +
            '<a href="' + PROJECTS[project].url + '">' +
                '<img class="img-responsive" src="' + PROJECTS[project].img + '" alt="">' +
            '</a>' +
            '<h3>' +
                '<a href="' + PROJECTS[project].url + '">' + PROJECTS[project].title + '</a>' +
            '</h3>' +
            '<p>' + PROJECTS[project].description + '</p>' +
        '</div>' +
    '</div>'

    count++;
    if(count % 3 == 0){
        projectList += '</div><div class="row">'
    }
}

projectList += "</div>";

$("#PROJECTROWS").append(projectList);
