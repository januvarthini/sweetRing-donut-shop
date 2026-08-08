const products=[
{id:1,name:"Classic Glazed",category:"Classic",flavor:"Vanilla",price:89,rating:4.8,popularity:98,image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85",description:"Soft brioche donut coated with our signature vanilla glaze.",vegan:false,featured:true},
{id:2,name:"Chocolate Dream",category:"Chocolate",flavor:"Chocolate",price:119,rating:4.9,popularity:100,image:"https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=85",description:"Rich chocolate glaze topped with decadent chocolate curls.",vegan:false,featured:true},
{id:3,name:"Strawberry Bliss",category:"Fruity",flavor:"Strawberry",price:129,rating:4.7,popularity:92,image:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=85",description:"Fresh strawberry glaze finished with a creamy white drizzle.",vegan:false,featured:true},
{id:4,name:"Pistachio Cream",category:"Premium",flavor:"Pistachio",price:149,rating:4.9,popularity:97,image:"https://images.unsplash.com/photo-1533910534207-90f31029a78e?auto=format&fit=crop&w=700&q=85",description:"Premium pistachio cream topped with roasted pistachios.",vegan:false,featured:true},
{id:5,name:"Lotus Biscoff Crunch",category:"Premium",flavor:"Caramel",price:159,rating:4.9,popularity:96,image:"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=700&q=85",description:"Creamy Biscoff filling with caramel glaze and cookie crunch.",vegan:false,featured:true},
{id:6,name:"Salted Caramel",category:"Premium",flavor:"Caramel",price:139,rating:4.8,popularity:91,image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85",description:"Golden caramel glaze balanced with a touch of sea salt.",vegan:false,featured:false},
{id:7,name:"Vanilla Sprinkle",category:"Classic",flavor:"Vanilla",price:99,rating:4.6,popularity:86,image:"https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=85",description:"Classic vanilla glaze covered with colorful sprinkles.",vegan:false,featured:false},
{id:8,name:"Coffee Crunch",category:"Premium",flavor:"Coffee",price:139,rating:4.8,popularity:89,image:"https://images.unsplash.com/photo-1533910534207-90f31029a78e?auto=format&fit=crop&w=700&q=85",description:"Smooth coffee glaze topped with crunchy roasted coffee bits.",vegan:false,featured:false},
{id:9,name:"Lemon Zest",category:"Fruity",flavor:"Lemon",price:109,rating:4.5,popularity:80,image:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=85",description:"Bright lemon glaze with freshly grated citrus zest.",vegan:false,featured:false},
{id:10,name:"Cinnamon Sugar",category:"Classic",flavor:"Cinnamon",price:89,rating:4.7,popularity:84,image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85",description:"Warm cinnamon sugar coating on a soft freshly baked donut.",vegan:false,featured:false},
{id:11,name:"Double Chocolate",category:"Chocolate",flavor:"Chocolate",price:129,rating:4.8,popularity:94,image:"https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=85",description:"Chocolate donut with chocolate glaze and chocolate chips.",vegan:false,featured:false},
{id:12,name:"Strawberry Cheesecake",category:"Fruity",flavor:"Strawberry",price:169,rating:4.9,popularity:93,image:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=85",description:"Strawberry glaze, cheesecake cream and biscuit crumble.",vegan:false,featured:false},
{id:13,name:"Chocolate Hazelnut",category:"Premium",flavor:"Chocolate",price:179,rating:4.9,popularity:95,image:"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=700&q=85",description:"Silky chocolate hazelnut filling with roasted hazelnuts.",vegan:false,featured:false},
{id:14,name:"Vanilla Custard",category:"Filled",flavor:"Vanilla",price:119,rating:4.7,popularity:87,image:"https://images.unsplash.com/photo-1533910534207-90f31029a78e?auto=format&fit=crop&w=700&q=85",description:"Soft donut filled with smooth homemade vanilla custard.",vegan:false,featured:false},
{id:15,name:"Caramel Cream",category:"Filled",flavor:"Caramel",price:139,rating:4.8,popularity:90,image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85",description:"Fluffy donut filled with rich caramel cream.",vegan:false,featured:false},
{id:16,name:"Vegan Chocolate",category:"Vegan",flavor:"Chocolate",price:129,rating:4.6,popularity:78,image:"https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=85",description:"Plant-based chocolate donut made without dairy or eggs.",vegan:true,featured:false},
{id:17,name:"Vegan Strawberry",category:"Vegan",flavor:"Strawberry",price:139,rating:4.6,popularity:76,image:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=85",description:"Fresh strawberry glaze on a completely plant-based donut.",vegan:true,featured:false},
{id:18,name:"Pumpkin Spice",category:"Seasonal",flavor:"Cinnamon",price:149,rating:4.8,popularity:88,image:"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=700&q=85",description:"Seasonal pumpkin spice donut with cinnamon sugar.",vegan:false,featured:false},
{id:19,name:"Berry Blast",category:"Fruity",flavor:"Strawberry",price:149,rating:4.7,popularity:83,image:"https://images.unsplash.com/photo-1533910534207-90f31029a78e?auto=format&fit=crop&w=700&q=85",description:"Mixed berry glaze topped with fresh berry pieces.",vegan:false,featured:false},
{id:20,name:"Caramel Apple",category:"Seasonal",flavor:"Caramel",price:159,rating:4.8,popularity:85,image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=85",description:"Caramel glazed donut topped with cinnamon apple pieces.",vegan:false,featured:false}
];

let displayedProducts=[...products];

function formatPrice(price){return `₹${price.toLocaleString("en-IN")}`}
function createRating(rating){let full=Math.floor(rating);return "★".repeat(full)+"☆".repeat(5-full)}
function createProductCard(p){
 const card=document.createElement("article");
 card.className="product-card filter-visible";
 card.dataset.id=p.id;
 card.innerHTML=`
 <div class="product-image-wrapper">
  <img src="${p.image}" alt="${p.name}" class="product-image" loading="lazy">
  ${p.popularity>=95?'<span class="absolute start-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">BEST SELLER</span>':""}
  ${p.vegan?'<span class="absolute bottom-4 start-4 z-10 rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">VEGAN</span>':""}
  <button type="button" class="favorite-btn" data-id="${p.id}" aria-label="Add ${p.name} to favorites"><i class="fa-regular fa-heart"></i></button>
 </div>
 <div class="product-content">
  <span class="product-category">${p.category}</span>
  <h3 class="product-name">${p.name}</h3>
  <p class="product-description">${p.description}</p>
  <div class="mt-3 flex items-center gap-2"><div class="product-rating">${createRating(p.rating)}</div><span class="text-xs text-stone-500">${p.rating}</span></div>
  <div class="product-bottom"><span class="product-price">${formatPrice(p.price)}</span><button type="button" class="add-cart-btn" data-id="${p.id}" aria-label="Add ${p.name} to cart"><i class="fa-solid fa-plus"></i> Add</button></div>
 </div>`;
 return card;
}
function renderProducts(list=displayedProducts){
 const grid=document.getElementById("productGrid"); if(!grid)return;
 grid.innerHTML="";
 if(!list.length){showEmptyProducts();updateProductCount(0);return}
 hideEmptyProducts();
 const f=document.createDocumentFragment(); list.forEach(p=>f.appendChild(createProductCard(p))); grid.appendChild(f);
 updateProductCount(list.length); updateFavoriteButtons();
}
function renderFeaturedProducts(){
 const c=document.getElementById("featuredProducts"); if(!c)return;
 c.innerHTML=""; const f=document.createDocumentFragment();
 products.filter(p=>p.featured).slice(0,8).forEach(p=>f.appendChild(createProductCard(p))); c.appendChild(f); updateFavoriteButtons();
}
function populateOrderProducts(){
 const s=document.getElementById("orderDonut"); if(!s)return;
 s.innerHTML='<option value="">Choose a donut</option>';
 products.forEach(p=>{const o=document.createElement("option");o.value=p.id;o.textContent=`${p.name} - ${formatPrice(p.price)}`;s.appendChild(o)});
}
function getProductById(id){return products.find(p=>p.id===Number(id))}
function updateProductCount(n){const e=document.getElementById("productCount");if(e)e.textContent=`${n} product${n===1?"":"s"} found`}
function showEmptyProducts(){document.getElementById("emptyProducts")?.classList.remove("hidden")}
function hideEmptyProducts(){document.getElementById("emptyProducts")?.classList.add("hidden")}
function getFavorites(){try{return JSON.parse(localStorage.getItem("sweetRingFavorites"))||[]}catch{return[]}}
function updateFavoriteButtons(){const fav=getFavorites();document.querySelectorAll(".favorite-btn").forEach(b=>{const i=b.querySelector("i");const on=fav.includes(Number(b.dataset.id));b.classList.toggle("active",on);i?.classList.toggle("fa-solid",on);i?.classList.toggle("fa-regular",!on)})}
function toggleFavorite(id){let f=getFavorites();id=Number(id);if(f.includes(id)){f=f.filter(x=>x!==id);showToast("Removed from favorites","♡")}else{f.push(id);showToast("Added to favorites","♥")}localStorage.setItem("sweetRingFavorites",JSON.stringify(f));updateFavoriteButtons()}

document.addEventListener("click",e=>{
 const add=e.target.closest(".add-cart-btn"); if(add){const p=getProductById(add.dataset.id);if(p&&typeof addToCart==="function")addToCart(p)}
 const fav=e.target.closest(".favorite-btn"); if(fav)toggleFavorite(fav.dataset.id);
});
document.addEventListener("DOMContentLoaded",()=>{renderProducts(products);renderFeaturedProducts();populateOrderProducts();updateFavoriteButtons()});
window.products=products;window.getProductById=getProductById;window.formatPrice=formatPrice;window.renderProducts=renderProducts;window.renderFeaturedProducts=renderFeaturedProducts;window.populateOrderProducts=populateOrderProducts;window.toggleFavorite=toggleFavorite;
