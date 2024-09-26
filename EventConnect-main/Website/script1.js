let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const carouselTrack = document.querySelector('.carousel-track');

function moveSlide(n) {
    currentSlide += n;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    const slideWidth = slides[0].clientWidth;
    carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function selectSlide(index) {
    currentSlide = index;
    const slideWidth = slides[0].clientWidth;
    carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

window.addEventListener('resize', () => {
    const slideWidth = slides[0].clientWidth;
    carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

setInterval(() => {
    moveSlide(1);
}, 3000);
  // Toggle the visibility of the profile dropdown
// Function to toggle the dropdown visibility
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Logout button click event
document.getElementById('logout-btn').addEventListener('click', function() {
    // Redirect to the index.html page
    window.location.href = 'index.html';
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

