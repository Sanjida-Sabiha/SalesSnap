


       // Get the button
const goToTopBtn = document.getElementById("goToTopBtn");

// Show the button when scrolling down 100px
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goToTopBtn.classList.remove("hidden");
        goToTopBtn.classList.add("opacity-100");
    } else {
        goToTopBtn.classList.add("hidden");
        goToTopBtn.classList.remove("opacity-100");
    }
};

// Scroll to the top when the button is clicked
goToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};



       