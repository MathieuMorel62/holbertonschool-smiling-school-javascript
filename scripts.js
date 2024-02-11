$(document).ready(function () {
  // Function to toggle loader
  function toggleLoader(show) {
    if (show) {
      $(".loader").show();
    } else {
      $(".loader").hide();
    }
  }

  // Function to add quotes to carousel
  function addQuotesToCarousel(quotes) {
    let quotesHTML = quotes.map((element, index) => `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <div class="row mx-auto align-items-center">
          <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
            <img src="${element.pic_url}" class="d-block align-self-center" alt="Carousel Pic ${index + 1}" />
          </div>
          <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
            <div class="quote-text">
              <p class="text-white">${element.text}</p>
              <h4 class="text-white font-weight-bold">${element.name}</h4>
              <span class="text-white">${element.title}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    $("#carouselExampleControls .carousel-inner").html(quotesHTML);
  }

  // Function to display error
  function displayError() {
    console.log("Error loading quotes.");
  }

  // Function to load quotes
  function loadQuotes() {
    toggleLoader(true);

    $.ajax({
      method: "GET",
      url: "https://smileschool-api.hbtn.info/quotes",
      dataType: "json",
    }).done(function (response) {
      addQuotesToCarousel(response);
    }).fail(displayError).always(function () {
      toggleLoader(false);
    });
  }

  loadQuotes();
});
