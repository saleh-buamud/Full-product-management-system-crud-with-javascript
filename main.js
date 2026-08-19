const title = document.getElementById("title");
const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const ads = document.getElementById("ads");
const discount = document.getElementById("discount");
const total = document.getElementById("total");
const count = document.getElementById("count");
const category = document.getElementById("category");
const submit = document.getElementById("submit");


// Get total
function getTotal() {

    const priceValue = Number(price.value);
    const taxesValue = Number(taxes.value);
    const adsValue = Number(ads.value);
    const discountValue = Number(discount.value);

    if (price.value !== "") {

        const result =
            (priceValue + taxesValue + adsValue) - discountValue;

        total.innerHTML = Math.max(0, result);

        document.getElementsByClassName("total-box")[0].style.background = "#2e7d32";
        document.getElementsByClassName("total-box")[0].style.border = "2px solid #2e7d32";
        total.style.color = "#ffffff";
    }

    else {
        document.getElementsByClassName("total-box")[0].style.background = "#ef476f";
        document.getElementsByClassName("total-box")[0].style.border = "2px solid #ef476f";
        total.style.color = "#ffffff";
        total.innerHTML = "";
    }
}


// Create Product
// Save Data to Local Storage
// Clear input fields
// Read data
// Count data
// Delete data
// Edit data
// Search
// Clean data