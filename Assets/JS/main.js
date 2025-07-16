    // Select all navbar links
    const links = document.querySelectorAll('.navbar a');
    
    // Loop through each link
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            links.forEach(link => link.classList.remove('active'));
            
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
// Toggle Icon navbar 
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active")
}

// Scroll Section Active Link 
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
//  Sticky navbar 
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
// Remove Toggle Icon And navbar 
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');   
};
// Scroll Reveal 
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// Typed JS 
const typed = new Typed('.multiple-text', {
    strings: ['Flutter App Developer','Full-Stack Web Developer', 'ASP.NET Core Developer', 'Web Designer',],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

//Read More Read Less Functionality In About
function toggleReadMore(button) {
    const moreText = button.previousElementSibling.querySelector('.more-text');
    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        button.textContent = "Read More";
    } else {
        moreText.style.display = "inline";
        button.textContent = "Read Less";
    }
};

//Read More Read Less Functionality On Services
function toggleReadMore(button) {
    const moreText = button.previousElementSibling.querySelector('.more-text');
    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        button.textContent = "Read More";
    } else {
        moreText.style.display = "inline";
        button.textContent = "Read Less";
    }
}