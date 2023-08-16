const products = document.querySelectorAll('.product');

products.forEach(product => {
    const quantityValue = product.querySelector('.product__quantity-value');
    
    product.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
        quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
    });
    
    product.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
        if (parseInt(quantityValue.textContent) > 1) {
            quantityValue.textContent = parseInt(quantityValue.textContent) - 1;
        }
    });
});

const cart = document.querySelector('.cart__products');

products.forEach(product => {
    product.querySelector('.product__add').addEventListener('click', () => {
        const id = product.dataset.id;
        const count = parseInt(product.querySelector('.product__quantity-value').textContent);
        
        const cartProduct = cart.querySelector(`.cart__product[data-id="${id}"]`);
        
        if (cartProduct) {
            const cartProductCount = cartProduct.querySelector('.cart__product-count');
            cartProductCount.textContent = parseInt(cartProductCount.textContent) + count;
        } else {
            const src = product.querySelector('.product__image').src;
            cart.insertAdjacentHTML('beforeend', `
                <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${src}">
                    <div class="cart__product-count">${count}</div>
                </div>
            `);
        }
    });
});
