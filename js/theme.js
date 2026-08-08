document.addEventListener("DOMContentLoaded",()=>{
 const themeBtn=document.getElementById("themeToggle"),icon=document.getElementById("themeIcon"),dirBtn=document.getElementById("directionToggle");
 const saved=localStorage.getItem("sweetRingTheme"); if(saved==="dark")document.documentElement.classList.add("dark");
 function updateIcon(){if(icon)icon.className=document.documentElement.classList.contains("dark")?"fa-solid fa-sun":"fa-solid fa-moon"}
 updateIcon();
 themeBtn?.addEventListener("click",()=>{document.documentElement.classList.toggle("dark");localStorage.setItem("sweetRingTheme",document.documentElement.classList.contains("dark")?"dark":"light");updateIcon()});
 const savedDir=localStorage.getItem("sweetRingDirection");if(savedDir)document.documentElement.dir=savedDir;
 dirBtn?.addEventListener("click",()=>{const d=document.documentElement.dir==="rtl"?"ltr":"rtl";document.documentElement.dir=d;localStorage.setItem("sweetRingDirection",d)});
});
