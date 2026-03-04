const CART_STORAGE_KEY = "domECommerceCart";

const cartListElement = document.querySelector("#cart-list");
const cartTotalElement = document.querySelector("#cart-total");
const cartCountElement = document.querySelector("#cart-count");
const clearCartButton = document.querySelector("#clear-cart-btn");

let cartData = loadCartData();

function loadCartData() {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Could not parse cart data:", error);
    return [];
  }
}

function saveCartData() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartData));
}

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

function updateCartCount() {
  const totalQuantity = cartData.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountElement) {
    cartCountElement.textContent = totalQuantity;
  }
}

function calculateTotal() {
  return cartData.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCart() {
  if (cartData.length === 0) {
    cartListElement.innerHTML = `
      <div class="empty-state">
        <p>Your cart is empty.</p>
        <a href="index.html">Go to products</a>
      </div>
    `;
    cartTotalElement.textContent = formatPrice(0);
    clearCartButton.disabled = true;
    updateCartCount();
    return;
  }

  clearCartButton.disabled = false;

  const cartHtml = cartData
    .map(
      (item) => `
        <article class="cart-item">
          <div class="cart-item-image">
            <img src="${item.imageurls[0]}" alt="${item.productname}">
          </div>
          <div class="cart-item-content">
            <h3>${item.productname}</h3>
            <p>Category: ${item.category}</p>
            <p>Price: ${formatPrice(item.price)}</p>
            <p>Subtotal: ${formatPrice(item.price * item.quantity)}</p>
            <div class="cart-actions">
              <button type="button" data-action="decrement" data-name="${item.productname}">-</button>
              <span class="qty">${item.quantity}</span>
              <button type="button" data-action="increment" data-name="${item.productname}">+</button>
              <button class="remove-btn" type="button" data-action="remove" data-name="${item.productname}">
                Remove
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  cartListElement.innerHTML = cartHtml;
  cartTotalElement.textContent = formatPrice(calculateTotal());
  updateCartCount();
}

cartListElement.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const productName = button.dataset.name;
  const itemIndex = cartData.findIndex((item) => item.productname === productName);

  if (itemIndex === -1) return;

  if (action === "increment") {
    cartData[itemIndex].quantity += 1;
  }

  if (action === "decrement") {
    if (cartData[itemIndex].quantity > 1) {
      cartData[itemIndex].quantity -= 1;
    } else {
      cartData.splice(itemIndex, 1);
    }
  }

  if (action === "remove") {
    cartData.splice(itemIndex, 1);
  }

  saveCartData();
  renderCart();
});

clearCartButton.addEventListener("click", function () {
  cartData = [];
  saveCartData();
  renderCart();
});

renderCart();
