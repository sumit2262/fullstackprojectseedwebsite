//2nd section in home page 
  document.addEventListener("DOMContentLoaded", function() {
    const shopButton = document.querySelector("#shop-button");

    if (shopButton) {
      shopButton.addEventListener("click", function() {
        window.location.href = "shop.html";
      });
    }
  });


//
