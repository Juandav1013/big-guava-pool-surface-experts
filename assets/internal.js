const header=document.getElementById('header');
const menuButton=document.getElementById('menuButton');
const navLinks=document.getElementById('navLinks');
const syncHeader=()=>header&&header.classList.toggle('scrolled',scrollY>24);
syncHeader();addEventListener('scroll',syncHeader,{passive:true});
if(menuButton&&navLinks){menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.classList.toggle('active',open);menuButton.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-open',open)});navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.classList.remove('active');menuButton.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}))}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('visible',entry.isIntersecting)),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const form=document.getElementById('estimateForm');
if(form){form.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(form);const subject=encodeURIComponent('Big Guava estimate request — '+(data.get('service')||'Pool project'));const body=encodeURIComponent(`Name: ${data.get('name')||''}\nPhone: ${data.get('phone')||''}\nEmail: ${data.get('email')||''}\nService: ${data.get('service')||''}\n\nProject details:\n${data.get('details')||''}`);const status=document.getElementById('formStatus');if(status)status.textContent='Your email application is opening with the project details prepared.';location.href=`mailto:expertpoolpro@yahoo.com?subject=${subject}&body=${body}`})}

