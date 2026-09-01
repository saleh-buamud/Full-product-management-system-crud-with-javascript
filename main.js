const title = document.getElementById("title");
const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const ads = document.getElementById("ads");
const discount = document.getElementById("discount");
const total = document.getElementById("total");
const count = document.getElementById("count");
const category = document.getElementById("category");
const submit = document.getElementById("submit");
let Products = JSON.parse(localStorage.getItem("Products")) || [];
displayProducts();
let editMode = false;
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



//add event listener to the submit button
document.getElementById("submitBtn").addEventListener("click", function (e) {
    e.preventDefault();
    if (editMode === true) {
        updateProduct();
    } else {
        createProduct();
    }
});

// Validate Product
function validateProduct() {

    if (title.value.trim() === "") {
        alert("Title is required");
        return false;
    }

    if (price.value === "" || Number(price.value) <= 0) {
        alert("Price must be greater than 0");
        return false;
    }

    if (category.value.trim() === "") {
        alert("Category is required");
        return false;
    }

    // if (count.value === "" || Number(count.value) <= 0) {
    //     alert("Count must be greater than 0");
    //     return false;
    // }

    return true;
}
function createProduct() {

    if (!validateProduct()) {
        return;
    }
    const newProduct = {
        title: title.value,
        price: Number(price.value),
        taxes: Number(taxes.value),
        ads: Number(ads.value),
        discount: Number(discount.value),
        total: Number(total.innerHTML),
        category: category.value,
        count: Number(count.value)
    };
    if (newProduct.count > 1) {
        for (let i = 0; i < newProduct.count; i++) {
            Products.push(newProduct);
        }
    } else {
        Products.push(newProduct);
    }
    Products.push(newProduct);
    localStorage.setItem("Products", JSON.stringify(Products));
    displayProducts();
    clearInputs();
    console.log(newProduct);
    console.log("============================");
    console.log(Products);
}



function clearInputs() {
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "";
    count.value = "";
    category.value = "";
}





// Save Data to Local Storage
// Clear input fields
// Read data



function displayProducts() {
    let tr = document.getElementById("productsBody");

    tr.innerHTML = "";

    for (let i = 0; i < Products.length; i++) {
        tr.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${Products[i].title}</td>
                <td>${Products[i].price}</td>
                <td>${Products[i].taxes}</td>
                <td>${Products[i].ads}</td>
                <td>${Products[i].discount}</td>
                <td>${Products[i].total}</td>
                <td>${Products[i].category}</td>
                <td>
                    <button onclick="updateData(${i})">Update</button>
                </td>
                <td>
                    <button onclick="deleteData(${i})">Delete</button>
                </td>
            </tr>
        `;
    }
    if (Products.length > 0) {
        document.getElementById("deleteAllBtn").style.display = "block";
        document.getElementById("deleteAllBtn").innerHTML = `Delete All (${Products.length})`;
    } else {
        document.getElementById("deleteAllBtn").style.display = "none";
    }

}



// Count data
// Delete data

function deleteData(id) {
    let p = Products.findIndex((product) => product.id == id);
    Products.splice(p, 1);
    localStorage.setItem("Products", JSON.stringify(Products));
    displayProducts();

}
// Edit data

function updateData(i) {
    title.value = Products[i].title;
    price.value = Products[i].price;
    taxes.value = Products[i].taxes;
    ads.value = Products[i].ads;
    discount.value = Products[i].discount;
    total.innerHTML = Products[i].total;
    category.value = Products[i].category;
    count.style.display = "none";
    document.getElementById("submitBtn").innerHTML = "Update Product";
    editMode = true;
    updateProduct(i);

}


function updateProduct(id) {
    if (!validateProduct()) {
        return;
    }
    scrolPage();

    let p = Products.findIndex((product) => product.id == id);
    Products[p].title = title.value;
    Products[p].price = Number(price.value);
    Products[p].taxes = Number(taxes.value);
    Products[p].ads = Number(ads.value);
    Products[p].discount = Number(discount.value);
    Products[p].total = Number(total.innerHTML);
    Products[p].category = category.value;
    Products[p].count = Number(count.value);
    localStorage.setItem("Products", JSON.stringify(Products));
    displayProducts();
    clearInputs();
    editMode = false;
    document.getElementById("submitBtn").innerHTML = "Create Product";

}



// Delete data All 

document.getElementById("deleteAllBtn").addEventListener("click", function () {


    localStorage.removeItem("Products");

    Products = [];

    document.getElementById("deleteAllBtn").style.display = "none";

    displayProducts();

});
// Search
// Clean data


function scrolPage() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}