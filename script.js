var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//javascript for autotype
var typed = new Typed(".auto-input", {
    strings: ["Web Developer", "Web Designer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});


//javascript of responsive navigation sidebar meun
const meunBtn = document.querySelector(".meun-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

meunBtn.addEventListener("click", () => {
    meunBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        meunBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
});  

//java for Email
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "fadumilaemmanuel@gmail.com",
        Password: "Eoluwatobi686@gmail",
        To: 'fadumilaemmanuel@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Contact Form Enquiry",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}






