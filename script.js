// Function to show the modal with dynamic content
function showModal(category) {
    let content = '';

    if (category === 'pizza') {
        content = `
            <h3>Our Pizzas</h3>
            <div class="item-card">
                <img src="images/pizza1.avif" alt="Pizza 1">
                <h4>Margherita</h4>
                <p>$12.99</p>
            </div>
            <div class="item-card">
                <img src="images/pizza2.avif" alt="Pizza 2">
                <h4>Pepperoni</h4>
                <p>$14.99</p>
            </div>
            <!-- Add more pizzas here -->
        `;
    } else if (category === 'burger') {
        content = `
            <h3>Our Burgers</h3>
            <div class="item-card">
                <img src="images/cheese_burger.avif" alt="Burger 1">
                <h4>Cheese Burger</h4>
                <p>$9.99</p>
            </div>
            <div class="item-card">
                <img src="images/chicken_burger.avif" alt="Burger 2">
                <h4>Chicken Burger</h4>
                <p>$10.99</p>
            </div>
            <!-- Add more burgers here -->
        `;
    } else if (category === 'icecream') {
        content = `
            <h3>Our Ice Creams</h3>
            <div class="item-card">
                <img src="images/vanilla_icecream.avif" alt="Ice Cream 1">
                <h4>Vanilla</h4>
                <p>$4.99</p>
            </div>
            <div class="item-card">
                <img src="images/strawberry_icecream.avif" alt="Ice Cream 2">
                <h4>Strawberry</h4>
                <p>$5.99</p>
            </div>
            <!-- Add more ice creams here -->
        `;
    }

    // Insert the content into the modal
    document.querySelector('.item-list').innerHTML = content;

    // Show the modal
    document.querySelector('.item-details').style.display = 'block';
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Gather form data
    const formData = new FormData(event.target);
    
    // Send the data via fetch (example)
    fetch(event.target.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data
        console.log('Form submitted successfully:', data);
    })
    .catch(error => {
        console.error('Error submitting form:', error);
    });
});

