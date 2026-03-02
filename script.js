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
},];

let cartData = [];

let allProducts = "";
productsData.forEach(function(elem, index) {
    allProducts += `<div class="product-card">
        <div class="img">
            <img
            src="${elem.imageurls[0]}"
            alt=""
            />
        </div>

        <div class="content">
            <h3>Name: <span>${elem.productname}</span></h3>
            <h3>Category: ${elem.category}</h3>
            <h3>Price:m <span>$${elem.price}</span></h3>
        </div>

        <div class="btns">
            <button>Remove</button>
            <button id="${index}">Add to Cart</button>
        </div>
        </div>`;  });

    let section = document.querySelector("section");
    section.innerHTML = allProducts;

    section.addEventListener("click", function(e){
        if(
            e.target.tagName === "BUTTON" &&
            e.target.textContent == "Add to Cart"
        ){
            console.log("Product added to cart:", productsData[e.target.id]);
        }
    })