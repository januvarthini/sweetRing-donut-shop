document.addEventListener("DOMContentLoaded",()=>{
 const modal=document.getElementById("galleryModal"),img=document.getElementById("galleryModalImage"),title=document.getElementById("galleryModalTitle"),close=document.getElementById("closeGallery");
 function open(item){img.src=item.dataset.image;img.alt=item.dataset.title||"Donut";title.textContent=item.dataset.title||"SweetRing Donut";modal.classList.remove("hidden");modal.classList.add("flex","show");document.body.classList.add("modal-open")}
 function shut(){modal.classList.add("hidden");modal.classList.remove("flex","show");document.body.classList.remove("modal-open")}
 document.querySelectorAll(".gallery-item").forEach(item=>item.addEventListener("click",()=>open(item)));
 close?.addEventListener("click",shut);modal?.addEventListener("click",e=>{if(e.target===modal)shut()});document.addEventListener("keydown",e=>{if(e.key==="Escape")shut()});
});
