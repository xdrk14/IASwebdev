document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.slide-container');
    const slides = document.querySelectorAll('.slides');
    let currentSlide = 0;
  
    const showSlide = (index) => {
      container.style.transform = `translateX(-${index * 100}%)`;
    };
  
    document.querySelector(".next").addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  
    document.querySelector(".prev").addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  
    // Auto slide every 5 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  });
  