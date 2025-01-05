const products = [
    { id: 1, name: 'Product-1', price: 100 },
    { id: 2, name: 'Product-2', price: 200 },
    { id: 3, name: 'Product-3', price: 300 },
  ];
  
  const cart = {};
  let total = 0;
  
  function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalElement = document.querySelector('.total');
  
    cartList.innerHTML = '';
    let hasProducts = false;
  
    for (const id in cart) {
      if (cart[id] > 0) {
        hasProducts = true;
        const product = products.find((p) => p.id === parseInt(id));
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
          <span>${product.name}</span>
          <span>${cart[id]} × ${product.price}</span>
        `;
        cartList.appendChild(cartItem);
      }
    }
  
    if (!hasProducts) {
      cartList.innerHTML = '<p class="empty-cart">No Product added to the cart</p>';
    }
  
    totalElement.textContent = `Total: ${total}`;
  }
  
  function updateTotal() {
    total = Object.entries(cart).reduce(
      (sum, [id, quantity]) =>
        sum + quantity * products.find((p) => p.id === parseInt(id)).price,
      0
    );
    updateCart();
  }
  
  function updateQuantityDisplay(productId) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    quantityElement.textContent = cart[productId] || 0;
  }
  
  function handleAdd(id) {
    if (!cart[id]) cart[id] = 0;
    cart[id]++;
    updateQuantityDisplay(id); // Update quantity display
    updateTotal();
  }
  
  function handleRemove(id) {
    if (cart[id] && cart[id] > 0) {
      cart[id]--;
      updateQuantityDisplay(id); // Update quantity display
      updateTotal();
    }
  }
  
  function renderProducts() {
    const productList = document.getElementById('product-list');
  
    products.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        <span>${product.name}</span>
        <span>${product.price}</span>
        <div class="btn-container">
          <button onclick="handleRemove(${product.id})">-</button>
          <span id="quantity-${product.id}">0</span>
          <button onclick="handleAdd(${product.id})">+</button>
        </div>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  renderProducts();
  updateCart();
