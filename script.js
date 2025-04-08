document.addEventListener("DOMContentLoaded", () => {
    const imageContainers = document.querySelectorAll(".image-loader");
  
    imageContainers.forEach(container => {
      const img = container.querySelector("img");
      const loader = container.querySelector(".loader");
  
      if (img.complete) {
        showImage();
      } else {
        img.addEventListener("load", showImage);
      }
  
      function showImage() {
        setTimeout(() => {
          loader.style.display = "none";
          img.classList.add("show");
        }, 800); // 1 second delay
      }
    });
  });
  