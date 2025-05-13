let allProduct = [];

// Get the container element where products will be displayed
let product = document.getElementById("container");

// Function to fetch product data from the API
let fetchData = async () => {
    try {
        // Fetch data from the API
        let productApi = await fetch("https://dummyjson.com/products");

        // Parse the response as JSON
        let data = await productApi.json();

        // Log the products array for debugging
        console.log(data.products);

        // Call the function to display products
        
        displayProduct(data.products);
        allProduct = data.products;
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
                        <img src="${e.images[0]}" class="prod-img" alt="${e.title}" />
                        <h2 class="product-title">${e.title}</h2>
                        <p class="product-price">Price: $${e.price}</p>
                        <p class="product-rating">⭐ ${e.rating}</p>
                        <button class="cart-btn" onclick="addToCart('${e.title}')">Add to Cart</button>
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