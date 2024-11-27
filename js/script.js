const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const section = document.getElementById('ctas');

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
});
