document.getElementById("theheader").innerHTML = "<nav id=\"navbar\"><div id=\"menu-toggle\" class=\"menu-icon\">&#9776;</div><div class=\"logo\">Unnamed Website</div><ul id=\"menu-items\" class=\"hidden\"><li><a href=\"index.html\">Home</a></li><li><a href=\"#\">World</a></li><li><a href=\"#\">Local</a></li><li><a href=\"#\">Sports</a></li></ul></nav>";

// Toggle mobile menu visibility
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu-items');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.style.display = 'block';
    } else {
        menu.classList.add('hidden');
        menu.style.display = 'none';
    }
});

// footer

document.getElementById('thefooter').innerHTML = "<p>&copy; 2024 Unnamed Website. All rights reserved.</p>";

/////////////

let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let autoPlayInterval = null;

function moveSlide(n) {
    clearInterval(autoPlayInterval);  // Clear the auto-play when the user interacts
    showSlides(slideIndex += n);
    startAutoPlay();  // Restart auto-play after interaction
}

function showSlides(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function startAutoPlay() {
    autoPlayInterval = setInterval(function() {
        showSlides(slideIndex += 1);
    }, 3000); // Change slides every 3000 milliseconds (3 seconds)
}

// Initialize the slideshow and auto-play
showSlides(slideIndex);
startAutoPlay();