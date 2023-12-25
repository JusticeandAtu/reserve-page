 // Function to generate  HTML
 function generateGalleryHTML() {
    const gallerySection = document.getElementById("galleryCards");
    // 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

    gallerySamples.forEach(sample => {
        const imgList = document.createElement("li");
        imgList.className = "gallery-member";
        imgList.innerHTML = `
        <div class="gallery-card">

          <figure class="card-banner img-holder" style="--width: 422; --height: 550;">
            <img src="${sample.ImageUrl}" width="422" height="550" loading="lazy" alt="Hair Cutting"
              class="img-cover">
          </figure>

          <div class="card-content">

            
            <h3 class="h3 card-title">Peak Pamper Salon</h3>

            <p class="card-text">A Glimpse Of Our Work</p>
            <a href="#" class="card-btn" aria-label="Read more">
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>

          </div>

        </div>    
        `;
        gallerySection.appendChild(imgList);
    });
}

            generateGalleryHTML();