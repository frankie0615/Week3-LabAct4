import { getStockStatus } from "./inventoryUtils.js";

export function displayProducts(products) {

    const productList = document.getElementById("productList");
    const noResultsMessage = document.getElementById("noResultsMessage");

    productList.innerHTML = "";

    if (products.length === 0) {
        noResultsMessage.style.display = "block";
        return;
    }

    noResultsMessage.style.display = "none";

    products.forEach(product => {

        const {
            id,
            name,
            category,
            price,
            stock
        } = product;

        const productCard = document.createElement("div");

        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Price:</strong> ₱${price.toLocaleString()}</p>
            <p><strong>Stock:</strong> ${stock}</p>
            <p><strong>Status:</strong> ${getStockStatus(stock)}</p>
        `;

        productList.appendChild(productCard);
    });
}

export function displaySummary(totalValue, lowStock, outOfStock) {

    document.getElementById("totalInventoryValue").textContent =
        `₱${totalValue.toLocaleString()}`;

    document.getElementById("lowStockCount").textContent =
        lowStock;

    document.getElementById("outOfStockCount").textContent =
        outOfStock;
}