// Shopping Cart Array
let cart = [];

// Function to add items to the cart
const addItemToCart = (productId, productName, quantity, price) => {
    // Create a product object
    const product = { productId, productName, quantity, price };
    cart.push(product);
    console.log(`${productName} added to the cart.`);
};

// Function to remove an item by product ID
const removeItemFromCart = (productId) => {
    const index = cart.findIndex(product => product.productId === productId);
    if (index !== -1) {
        const removedItem = cart.splice(index, 1);
        console.log(`${removedItem[0].productName} removed from the cart.`);
    } else {
        console.log(`Item with ID ${productId} not found in the cart.`);
    }
};

// Function to update the quantity of an item
const updateItemQuantity = (productId, newQuantity) => {
    cart = cart.map(product =>
        product.productId === productId
            ? { ...product, quantity: newQuantity }
            : product
    );
    console.log(`Quantity of product ID ${productId} updated to ${newQuantity}.`);
};

// Function to calculate total cost of the cart
const calculateTotalCost = () => {
    const totalCost = cart.reduce((total, product) =>
        total + (product.price * product.quantity), 0);
    console.log(`Total Cost: $${totalCost}`);
    return totalCost;
};

// Function to display the cart summary
const displayCartSummary = () => {
    console.log("Cart Summary:");
    cart.map(product => {
        const productTotalPrice = product.price * product.quantity;
        console.log(`${product.productName} - Quantity: ${product.quantity}, Total: $${productTotalPrice}`);
    });
};

// Function to filter out items with zero quantity
const filterOutZeroQuantityItems = () => {
    cart = cart.filter(product => product.quantity > 0);
    console.log("Filtered out items with zero quantity.");
};

// Optional: Apply a discount code (e.g., 10% off)
const applyDiscount = (discountCode) => {
    const discount = discountCode === 'DISCOUNT10' ? 0.10 : 0;
    const totalCost = calculateTotalCost();
    const discountedTotal = totalCost - (totalCost * discount);
    console.log(`Discounted Total (after applying ${discountCode}): $${discountedTotal}`);
};

// Sample Usage
addItemToCart(1, 'Phone', 2, 300);
addItemToCart(2, 'Laptop', 1, 1000);
addItemToCart(3, 'Headphones', 3, 50);
displayCartSummary();

updateItemQuantity(1, 3);
displayCartSummary();

removeItemFromCart(2);
displayCartSummary();

filterOutZeroQuantityItems();
calculateTotalCost();

applyDiscount('DISCOUNT10');
