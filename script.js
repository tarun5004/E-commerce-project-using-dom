// ========================================
// 1. DUMMY DATA — Products ka array
// ========================================

let productsData = [
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
    imageurls: [
      "https://dummyimage.com/400x400/20c997/fff.png&text=AppleWatch",
    ],
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
    imageurls: [
      "https://dummyimage.com/400x400/198754/fff.png&text=Patagonia",
    ],
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

// ========================================
// 2. SELECT ELEMENTS — DOM se elements pakdo
// ========================================

let section = document.querySelector("section");
let cartScreen = document.querySelector(".cart-screen");
let homeBtn = document.querySelector("#home");
let cartBtn = document.querySelector("#cart");
let cartCount = document.querySelector("#cart-count");

// ========================================
// 3. RENDER PRODUCTS — UI pe products dikhao
// ========================================

let allProducts = "";

productsData.forEach(function (elem, index) {
  allProducts += `<div class="product-card">
      <div class="img">
        <img src="${elem.imageurls[0]}" alt="${elem.productname}" />
      </div>

      <div class="content">
        <h3>Name: <span>${elem.productname}</span></h3>
        <h3>Category: ${elem.category}</h3>
        <h3 class="price">$${elem.price}</h3>
      </div>

      <div class="btns">
        <button class="btn-remove">Remove</button>
        <button class="btn-add" id="${index}">Add to Cart</button>
      </div>
    </div>`;
});

section.innerHTML = allProducts;

// ========================================
// 4. CART DATA — Empty array jisme selected items push honge
// ========================================

let cartsData = [];

// ========================================
// 5. RENDER CART UI — Cart screen me items dikhao
// ========================================

function renderCartsUi() {
  // Cart count update karo
  cartCount.textContent = cartsData.length;

  // Agar cart khali hai to message dikhao
  if (cartsData.length === 0) {
    cartScreen.innerHTML = `<h2 class="empty-msg">No Items Added <i class="ri-shopping-bag-line"></i></h2>`;
    return;
  }

  let cartsUi = "";

  cartsData.forEach(function (elem, index) {
    cartsUi += `<div class="product-card">
        <div class="img">
          <img src="${elem.imageurls[0]}" alt="${elem.productname}" />
        </div>

        <div class="content">
          <h3>Name: <span>${elem.productname}</span></h3>
          <h3>Category: ${elem.category}</h3>
          <h3 class="price">$${elem.price}</h3>
        </div>

        <div class="btns">
          <button class="btn-remove" onClick="deleteFromCart(${index})">Remove</button>
        </div>
      </div>`;
  });

  cartScreen.innerHTML = cartsUi;
}

// ========================================
// 6. ADD TO CART — Click pe product ko cartsData me push karo
// ========================================

section.addEventListener("click", function (dets) {
  // Agar click kisi button pe nahi hua to return
  if (!dets.target.id) {
    return;
  }

  // Clicked product dhundho productsData me
  let clickedCard = productsData.find(function (elem, index) {
    return index == dets.target.id;
  });

  // Cart me push karo
  cartsData.push(clickedCard);

  // Cart UI update karo
  renderCartsUi();

  console.log("Added:", clickedCard.productname);
});

// ========================================
// 7. TOGGLE SCREENS — Home aur Cart switch karo
// ========================================

cartBtn.addEventListener("click", function () {
  cartScreen.style.display = "flex";
  section.style.display = "none";
});

homeBtn.addEventListener("click", function () {
  cartScreen.style.display = "none";
  section.style.display = "flex";
});

// ========================================
// 8. DELETE FROM CART — Cart se item hatao
// ========================================

function deleteFromCart(id) {
  let result = cartsData.filter(function (elem, index) {
    return index !== id;
  });

  cartsData = result;
  renderCartsUi();
}
