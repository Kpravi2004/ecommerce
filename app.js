document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();

    document.getElementById('login-link').addEventListener('click', () => {
        alert('Login feature coming soon!');
    });

    document.getElementById('signup-link').addEventListener('click', () => {
        alert('Signup feature coming soon!');
    });
});

function fetchProducts() {
    fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(products => {
            const productContainer = document.getElementById('product-list');
            productContainer.innerHTML = '';
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <button>Buy Now</button>
                `;
                productContainer.appendChild(productItem);
            });
        });
}
