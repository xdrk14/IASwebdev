var codeElements = document.querySelectorAll("code");

// Iterate over each <code> element and add a class
codeElements.forEach(function(codeElement) {
    console.log("works")
    codeElement.classList.add("language-css");
});
window.addEventListener('scroll', function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercentage = (scrollPosition / docHeight) * 100;
    console.log("works")

// Update the width of the progress bar based on scroll percentage
document.getElementById('progress-bar').style.width = scrollPercentage + '%';
});