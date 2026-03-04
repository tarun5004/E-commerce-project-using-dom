// ========================================
// 1. DUMMY DATA - Products ka array
// ========================================

const productsData = [
    {
    productname: "iPhone 16 Pro Max",
    category: "Electronics",
    price: 1199,
    imageurls: ["https://dummyimage.com/400x400/000/fff.png&text=iPhone"],
    },
    {
    productname: "Samsung Galaxy S25 Ultra",
    category: "Electronics",
    price: 1299,
    imageurls: ["https://dummyimage.com/400x400/f03c3c/fff.png&text=Samsung"],
    },
    {
    productname: "MacBook Air M3",
    category: "Electronics",
    price: 1099,
    imageurls: ["https://dummyimage.com/400x400/007bff/fff.png&text=MacBook"],
    },
    {
    productname: "Sony WH-1000XM5",
    category: "Electronics",
    price: 399,
    imageurls: ["https://dummyimage.com/400x400/28a745/fff.png&text=Sony"],
    },
    {
    productname: "Nike Air Max 90",
    category: "Footwear",
    price: 120,
    imageurls: ["https://dummyimage.com/400x400/dc3545/fff.png&text=Nike"],
    },
    {
    productname: "Adidas Ultraboost",
    category: "Footwear",
    price: 190,
    imageurls: ["https://dummyimage.com/400x400/ffc107/000.png&text=Adidas"],
    },
    {
    productname: "Levis 501 Jeans",
    category: "Clothing",
    price: 69,
    imageurls: ["https://dummyimage.com/400x400/6f42c1/fff.png&text=Levis"],
    },
    {
    productname: "Ray-Ban Wayfarer",
    category: "Accessories",
    price: 160,
    imageurls: ["https://dummyimage.com/400x400/fd7e14/fff.png&text=RayBan"],
    },
    {
    productname: "Apple Watch Series 10",
    category: "Wearables",
    price: 429,
    imageurls: ["https://dummyimage.com/400x400/20c997/fff.png&text=AppleWatch"],
    },
    {
    productname: "DJI Mini 4 Pro",
    category: "Electronics",
    price: 759,
    imageurls: ["https://dummyimage.com/400x400/17a2b8/fff.png&text=DJI"],
    },
    {
    productname: "Canon EOS R6 II",
    category: "Cameras",
    price: 2499,
    imageurls: ["https://dummyimage.com/400x400/343a40/fff.png&text=Canon"],
    },
    {
    productname: "YETI Rambler",
    category: "Kitchen",
    price: 38,
    imageurls: ["https://dummyimage.com/400x400/00d4aa/fff.png&text=YETI"],
    },
    {
    productname: "Dyson V15",
    category: "Home Appliances",
    price: 749,
    imageurls: ["https://dummyimage.com/400x400/6610f2/fff.png&text=Dyson"],
    },
    {
    productname: "Patagonia Nano Puff",
    category: "Clothing",
    price: 239,
    imageurls: ["https://dummyimage.com/400x400/198754/fff.png&text=Patagonia"],
    },
    {
    productname: "Kindle Paperwhite",
    category: "Electronics",
    price: 159,
    imageurls: ["https://dummyimage.com/400x400/0dcaf0/000.png&text=Kindle"],
    },
    {
    productname: "Bose QC Earbuds",
    category: "Electronics",
    price: 279,
    imageurls: ["https://dummyimage.com/400x400/e83e8c/fff.png&text=Bose"],
    },
    {
    productname: "Garmin Venu 3",
    category: "Wearables",
    price: 449,
    imageurls: ["https://dummyimage.com/400x400/495057/fff.png&text=Garmin"],
    },
    {
    productname: "Stanley Quencher",
    category: "Kitchen",
    price: 45,
    imageurls: ["https://dummyimage.com/400x400/007bff/fff.png&text=Stanley"],
    },
    {
    productname: "Oakley Holbrook",
    category: "Accessories",
    price: 149,
    imageurls: ["https://dummyimage.com/400x400/28a745/fff.png&text=Oakley"],
    },
];

const CART_STORAGE_KEY = "domECommerceCart";

const section = document.querySelector("section");
const cartCountElement = document.querySelector("#cart-count");

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

function updateCartCount() {
    const totalQuantity = cartData.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountElement) {
    cartCountElement.textContent = totalQuantity;
    }
}

function renderProducts() {
    const allProducts = productsData
    .map(
        (elem, index) => `
        <div class="product-card">
            <div class="img">
            <img src="${elem.imageurls[0]}" alt="${elem.productname}" />
            </div>

            <div class="content">
            <h3>Name: <span>${elem.productname}</span></h3>
            <h3>Category: ${elem.category}</h3>
            <h3>Price: <span>$${elem.price}</span></h3>
            </div>

            <div class="btns">
            <button data-index="${index}" data-action="remove">
                Remove
            </button>
            <button data-index="${index}" data-action="add-to-cart">
                Add to Cart
            </button>
            </div>
        </div>
        `
    )
    .join("");

    section.innerHTML = allProducts;
}

renderProducts();
updateCartCount();

// Event Delegation (Add + Remove logic)
section.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const action = button.dataset.action;
    const index = Number(button.dataset.index);

  // Safety check
    if (!action || Number.isNaN(index)) return;

    const product = productsData[index];
    if (!product) return;

  // -----------------------
  // ADD TO CART
  // -----------------------
    if (action === "add-to-cart") {
    const existingItem = cartData.find(
        (item) => item.productname === product.productname
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartData.push({ ...product, quantity: 1 });
    }
    }

  // -----------------------
  // REMOVE FROM CART
  // -----------------------
    if (action === "remove") {
    const existingItemIndex = cartData.findIndex(
        (item) => item.productname === product.productname
    );

    if (existingItemIndex === -1) return;

    if (cartData[existingItemIndex].quantity > 1) {
        cartData[existingItemIndex].quantity -= 1;
    } else {
        cartData.splice(existingItemIndex, 1);
    }
    }

    saveCartData();
    updateCartCount();
    console.log("Cart Updated:", cartData);
});
