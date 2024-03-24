 // Function to generate team members HTML
 function generatePriceHTML() {
    const pricesGrid = document.getElementById("price-cards");

    priceList.forEach(price => {
        const card = document.createElement("li");
        card.className = "card-container";
        card.innerHTML = `
        <li data-filter="${price.filter}">
            <div class="pricing-card">

            <figure class="card-banner img-holder" style="--width: 90; --height: 90;">
                <img src="${price.picture}" width="90" height="90" alt="Hair Cutting & Fitting"
                class="img-cover">
            </figure>

            <div class="wrapper">
                <h3 class="h3 card-title">${price.title}</h3>

                <p class="card-text">${price.text}</p>
            </div>


            </div>
        </li>    
        `;
        pricesGrid.appendChild(card);
    });
}

            generatePriceHTML();