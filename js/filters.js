document.addEventListener("DOMContentLoaded",()=>{
 const search=document.getElementById("searchInput"),cat=document.getElementById("categoryFilter"),flavor=document.getElementById("flavorFilter"),price=document.getElementById("priceFilter"),sort=document.getElementById("sortFilter"),clear=document.getElementById("clearFilters");
 function apply(){
  const term=(search?.value||"").trim().toLowerCase(), c=cat?.value||"All", f=flavor?.value||"All", pr=price?.value||"All", s=sort?.value||"default";
  let list=products.filter(p=>
   (!term||`${p.name} ${p.category} ${p.flavor} ${p.description}`.toLowerCase().includes(term)) &&
   (c==="All"||p.category===c) &&
   (f==="All"||p.flavor===f) &&
   (pr==="All"||(pr==="under100"&&p.price<100)||(pr==="100-150"&&p.price>=100&&p.price<=150)||(pr==="150-200"&&p.price>150&&p.price<=200)||(pr==="above200"&&p.price>200))
  );
  if(s==="low")list.sort((a,b)=>a.price-b.price); if(s==="high")list.sort((a,b)=>b.price-a.price); if(s==="rating")list.sort((a,b)=>b.rating-a.rating); if(s==="popular")list.sort((a,b)=>b.popularity-a.popularity);
  displayedProducts=list; renderProducts(list);
 }
 search?.addEventListener("input",apply); [cat,flavor,price,sort].forEach(e=>e?.addEventListener("change",apply));
 document.querySelectorAll(".category-card").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".category-card").forEach(b=>b.classList.remove("active-category"));btn.classList.add("active-category");if(cat)cat.value=btn.dataset.category;apply();document.getElementById("all-products")?.scrollIntoView({behavior:"smooth"})}));
 clear?.addEventListener("click",()=>{if(search)search.value="";if(cat)cat.value="All";if(flavor)flavor.value="All";if(price)price.value="All";if(sort)sort.value="default";document.querySelectorAll(".category-card").forEach(b=>b.classList.toggle("active-category",b.dataset.category==="All"));apply()});
});
