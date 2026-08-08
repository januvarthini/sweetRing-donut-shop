let cart=JSON.parse(localStorage.getItem("sweetRingCart")||"[]");
const deliveryCharge=50;
function saveCart(){localStorage.setItem("sweetRingCart",JSON.stringify(cart))}
function addToCart(product){
 const existing=cart.find(i=>i.id===product.id);
 if(existing)existing.quantity++;else cart.push({...product,quantity:1});
 saveCart();renderCart();showToast(`${product.name} added to cart`,"🛒");
 document.getElementById("cartCount")?.classList.add("cart-count-bump");
 setTimeout(()=>document.getElementById("cartCount")?.classList.remove("cart-count-bump"),350);
}
function changeQuantity(id,delta){const item=cart.find(i=>i.id===Number(id));if(!item)return;item.quantity+=delta;if(item.quantity<=0)cart=cart.filter(i=>i.id!==Number(id));saveCart();renderCart()}
function removeFromCart(id){cart=cart.filter(i=>i.id!==Number(id));saveCart();renderCart()}
function cartSubtotal(){return cart.reduce((sum,i)=>sum+i.price*i.quantity,0)}
function cartCount(){return cart.reduce((sum,i)=>sum+i.quantity,0)}
function renderCart(){
 const count=cartCount(),sub=cartSubtotal(),fee=count?deliveryCharge:0,total=sub+fee;
 ["cartCount","summaryItemCount"].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent=id==="summaryItemCount"?`${count} item${count===1?"":"s"}`:count});
 const subEl=document.getElementById("cartSubtotal"),feeEl=document.getElementById("deliveryFee"),disc=document.getElementById("cartDiscount"),totalEl=document.getElementById("cartTotal"),drawerTotal=document.getElementById("drawerCartTotal");
 if(subEl)subEl.textContent=formatPrice(sub);if(feeEl)feeEl.textContent=formatPrice(fee);if(disc)disc.textContent="-₹0";if(totalEl)totalEl.textContent=formatPrice(total);if(drawerTotal)drawerTotal.textContent=formatPrice(total);
 const containers=[document.getElementById("cartItems"),document.getElementById("drawerCartItems")];
 containers.forEach((c,index)=>{
  if(!c)return;c.innerHTML="";
  if(!cart.length){c.innerHTML=`<div class="py-10 text-center"><div class="text-5xl">🍩</div><h4 class="mt-4 font-bold">Your donut box is empty!</h4><p class="mt-2 text-sm text-stone-400">Add some delicious donuts to get started.</p><a href="#menu" class="mt-5 inline-block font-semibold text-orange-400">Explore Donuts →</a></div>`;return}
  cart.forEach(i=>c.insertAdjacentHTML("beforeend",`<div class="cart-item"><img src="${i.image}" alt="${i.name}" class="cart-item-image"><div class="cart-item-content"><div class="flex justify-between gap-2"><div><p class="cart-item-name">${i.name}</p><p class="cart-item-price">${formatPrice(i.price)}</p></div><button class="remove-cart-item" data-remove="${i.id}" aria-label="Remove ${i.name}"><i class="fa-solid fa-trash"></i></button></div><div class="quantity-control"><button data-qty="${i.id}" data-delta="-1">−</button><span>${i.quantity}</span><button data-qty="${i.id}" data-delta="1">+</button></div></div></div>`));
 });
}
document.addEventListener("click",e=>{
 const q=e.target.closest("[data-qty]");if(q)changeQuantity(q.dataset.qty,Number(q.dataset.delta));
 const r=e.target.closest("[data-remove]");if(r)removeFromCart(r.dataset.remove);
});
document.addEventListener("DOMContentLoaded",()=>renderCart());
window.addToCart=addToCart;window.renderCart=renderCart;
