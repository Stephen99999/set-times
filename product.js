// Define the array of products
const products = [
    { 
        image: '1.jpg', 
        name: 'Hp-24C Got Coding Machine', 
        model: 'Model NO. DZ400-2T' 
    },
    { 
        image: '2.jpg', 
        name: 'DFD040 Smart Courier Bag Packing Machine', 
        model: 'Model NO. DFD040' 
    },
    { 
        image: '3.jpg', 
        name: 'DFD040L Smart Courier Bag Packing Machine', 
        model: 'Model NO. DFD040L' 
    }
];

// Function to dynamically generate and display products
function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear the previous products

    // Loop through the products array
    products.forEach((product, index) => {
        // Create the product container
        const productContainer = document.createElement('div');
        productContainer.className = 'product-container';
        
        // Set the inner HTML for each product
        productContainer.innerHTML = `
            <div class="product-header">
                <img src="logo-removebg-preview.png" alt="Logo" class="logo">
                <h2>${product.name}</h2>
            </div>
            <p class="model-no">${product.model}</p>
            <div class="product-details">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="quantity-control">
                    <button class="decrement" id="decrement-${index}">-</button>
                    <input type="text" value="1" class="quantity" id="quantity-${index}">
                    <button class="increment" id="increment-${index}">+</button>
                </div>
                <div class="product-buttons">
                    <button class="contact-now">Contact Now</button>
                    <button class="inquiry-basket">Add to Inquiry Basket</button>
                </div>
            </div>
        `;
        
        // Append the product container to the product list
        productList.appendChild(productContainer);
    });
    
    // Add event listeners to the buttons for each product
    products.forEach((product, index) => {
        const decrementButton = document.getElementById(`decrement-${index}`);
        const incrementButton = document.getElementById(`increment-${index}`);
        const quantityInput = document.getElementById(`quantity-${index}`);

        // Add event listener for decrement button
        decrementButton.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value); // Get the current value and convert to integer
            if (currentValue > 1) { // Prevent value going below 1
                quantityInput.value = currentValue - 1;
            }
        });

        // Add event listener for increment button
        incrementButton.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value); // Get the current value and convert to integer
            quantityInput.value = currentValue + 1; // Increase the value by 1
        });
    });
}

// Call the function to display the products
displayProducts();
