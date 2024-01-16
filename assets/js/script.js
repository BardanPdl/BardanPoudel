'use strict';
// for a moving text
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: [
      "I design &amp; build creative things",
      "We Create, We made",
      "Contact me if you want something special",
    ],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 600,
    loop: true,
    showCursor: false,
  };

  const typed = new Typed('.text', options);
});

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll(".navbar-link");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

// Add event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Toggle the navbar and other elements
    elemToggleFunc(navToggleBtn);
    elemToggleFunc(navbar);
    elemToggleFunc(document.body);
  });
});




/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

// Include EmailJS library
// You can get it from https://www.emailjs.com/

// Getting the button from the DOM
let submitButton = document.getElementById('button');

// Add event listener on click to the button
submitButton.addEventListener('click', function(event) {
    // Prevent the reload of the page
    event.preventDefault();

    // Getting the name, email, phone, and message from the DOM
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    // Sending the email with the name, email, phone, and message
    emailjs.send("service_jo66nj4", "template_iqlnohu", {
        "from_name": name,
        "from_email": email,
        "phone": phone,
        "message": message
    }).then(function(response) {
        console.log("SUCCESS", response);
    }, function(error) {
        console.log("FAILED", error);
    });
});
