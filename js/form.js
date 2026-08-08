document.addEventListener("DOMContentLoaded",()=>{
 const date=document.getElementById("deliveryDate");if(date){const today=new Date();today.setMinutes(today.getMinutes()-today.getTimezoneOffset());date.min=today.toISOString().split("T")[0]}
 const order=document.getElementById("orderForm");
 order?.addEventListener("submit",e=>{
  e.preventDefault();let ok=true;
  const fields=[["customerName",v=>v.trim().length>=2,"customerNameError","Please enter your full name."],["customerEmail",v=>/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v),"customerEmailError","Please enter a valid email."],["customerPhone",v=>/^[0-9+\\s-]{10,15}$/.test(v),"customerPhoneError","Please enter a valid phone number."],["deliveryAddress",v=>v.trim().length>=8,"addressError","Please enter your delivery address."],["deliveryPincode",v=>/^\\d{6}$/.test(v.trim()),"pincodeError","Pincode must contain 6 digits."],["deliveryDate",v=>v!=="","dateError","Please select a delivery date."],["deliveryTime",v=>v!=="","timeError","Please select a delivery time."]];
  fields.forEach(([id,test,err,msg])=>{const el=document.getElementById(id),er=document.getElementById(err);if(!el)return;const valid=test(el.value);el.classList.toggle("input-error",!valid);if(er)er.textContent=valid?"":msg;if(!valid)ok=false});
  if(ok){showToast("🎉 Your donut order has been placed!","✓");order.reset();if(date)date.min=new Date().toISOString().split("T")[0]}
 });
 const contact=document.getElementById("contactForm"),status=document.getElementById("contactMessageStatus");
 contact?.addEventListener("submit",e=>{e.preventDefault();const n=document.getElementById("contactName"),em=document.getElementById("contactEmail"),m=document.getElementById("contactMessage");if(n.value.trim().length<2||!/^\\S+@\\S+\\.\\S+$/.test(em.value)||m.value.trim().length<5){status.textContent="Please complete the required fields correctly.";status.className="mt-5 rounded-xl p-4 text-sm status-error";status.classList.remove("hidden");return}status.textContent="Thank you! We'll get back to you soon.";status.className="mt-5 rounded-xl p-4 text-sm status-success";status.classList.remove("hidden");contact.reset()});
 document.getElementById("newsletterForm")?.addEventListener("submit",e=>{e.preventDefault();const input=document.getElementById("newsletterEmail");if(!/^\\S+@\\S+\\.\\S+$/.test(input.value)){showToast("Please enter a valid email.","!");return}showToast("You're subscribed!","✓");e.target.reset()});
});
