let allProduct = [];

// Get the container element where products will be displayed
let product = document.getElementById("container");

// Function to fetch product data from the API
let fetchData = async () => {
    try {
        // Fetch data from the API
        let productApi = await fetch("https://dummyjson.com/recipes");

        // Parse the response as JSON
        let data = await productApi.json();

        // Log the products array for debugging

        // Call the function to display products
        displayProduct(data.recipes);
        allProduct = data.recipes;
    } catch (error) {
        console.error("Error fetching product data:", error);
    }
};
fetchData();

// Function to display products on the page
let displayProduct = (items) => {
    console.log(items); 
    let productData = items.map((e) =>
         `
                    <div class="product-card">
                        <img src="${e.image}" class="prod-img" alt="${e.title}" />
                        <h2 class="product-title">${e.name}</h2>
                        <p class="product-price">Cuisine: ${e.cuisine}</p>
                        <p class="product-price">Order Time: ${e.prepTimeMinutes + e.cookTimeMinutes}</p>
                        <p class="product-rating">⭐ ${e.rating}</p>
                        <button class="cart-btn" onclick="addToCart('${e.name}')">Add to Cart</button>
                    </div>
                    `
        )
        .join("");

    // Set the innerHTML of the container to the generated product cards
    product.innerHTML = productData;
};

// Function to handle "Add to Cart" button click
let addToCart = (productName) => {
    alert(`${productName} has been added to your cart!`);
};


let above500 = () =>{
    console.log("inside");
    let filteredProducts = allProduct.filter((e) => e.price > 500)
    console.log(filteredProducts);
    displayProduct(filteredProducts);
    
}


let below500 = () =>{
    console.log("inside");
    let filteredProducts = allProduct.filter((e) => e.price < 500)
    console.log(filteredProducts);
    displayProduct(filteredProducts);
    
}


let showall = () =>{
    console.log("inside");
    displayProduct(allProduct);
    
}