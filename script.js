document.addEventListener("DOMContentLoaded", () => {
    const imageContainers = document.querySelectorAll(".image-loader");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const img = container.querySelector("img");
          const loader = container.querySelector(".loader");
  
          // Load only once
          if (!img.classList.contains("loaded")) {
            img.classList.add("loaded");
  
            // If already loaded (cached), trigger manually
            if (img.complete) {
              showImage();
            } else {
              img.addEventListener("load", showImage);
            }
  
            function showImage() {
              setTimeout(() => {
                loader.style.display = "none";
                img.classList.add("show");
              }, 1000);
            }
          }
  
          // Stop observing this one
          observer.unobserve(container);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% visible
    });
  
    imageContainers.forEach(container => {
      observer.observe(container);
    });
  });
  


  document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero");
  const heroLoader = document.querySelector(".hero-loader");
  const heroImage = document.querySelector(".hero-image img");

  // Wait for the image to load
  if (heroImage.complete) {
    showHero();
  } else {
    heroImage.addEventListener("load", () => {
      setTimeout(showHero, 1500); // Delay to keep loader visible a bit longer
    });
  }

  function showHero() {
    heroLoader.style.display = "none";
    heroSection.style.display = "block";
  }
});
