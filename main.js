document.addEventListener("DOMContentLoaded",()=>{
 const mobile=document.getElementById("mobileMenu"),menuBtn=document.getElementById("mobileMenuButton");
 menuBtn?.addEventListener("click",()=>mobile?.classList.toggle("hidden"));
 document.querySelectorAll(".mobile-nav-link").forEach(a=>a.addEventListener("click",()=>mobile?.classList.add("hidden")));
 const drawer=document.getElementById("cartDrawer"),open=document.getElementById("cartButton"),close=document.getElementById("closeCart"),overlay=document.getElementById("cartOverlay"),checkout=document.getElementById("checkoutButton");
 function openCart(){drawer?.classList.remove("hidden");document.body.classList.add("modal-open")}
 function closeCart(){drawer?.classList.add("hidden");document.body.classList.remove("modal-open")}
 open?.addEventListener("click",openCart);close?.addEventListener("click",closeCart);overlay?.addEventListener("click",closeCart);
 checkout?.addEventListener("click",closeCart);
 document.querySelectorAll(".combo-button").forEach(b=>b.addEventListener("click",()=>{const combo=document.getElementById("comboPackage");if(combo)combo.value=b.dataset.combo;document.getElementById("order")?.scrollIntoView({behavior:"smooth"});showToast(`${b.dataset.combo} selected`,"✓")}));
 document.getElementById("searchToggle")?.addEventListener("click",()=>{document.getElementById("all-products")?.scrollIntoView({behavior:"smooth"});setTimeout(()=>document.getElementById("searchInput")?.focus(),500)});
 document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCart()});
});
function showToast(message,icon="✓"){const t=document.getElementById("toast"),m=document.getElementById("toastMessage"),i=document.getElementById("toastIcon");if(!t)return;m.textContent=message;i.textContent=icon;t.classList.remove("hidden");t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>{t.classList.remove("show");setTimeout(()=>t.classList.add("hidden"),300)},2600)}
window.showToast=showToast;