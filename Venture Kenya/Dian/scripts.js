// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const bookNowButtons = document.querySelectorAll(".book-now");

    bookNowButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const card = button.closest(".place-card");
            const tourName = card.getAttribute("data-tour");
            const price = card.getAttribute("data-price");

            // Store the tour information in localStorage to persist across pages
            localStorage.setItem("tourName", tourName);
            localStorage.setItem("price", price);

            // Redirect to the checkout page
            window.location.href = "checkout.html";
        });
    });
});
