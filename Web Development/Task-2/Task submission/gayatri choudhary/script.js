const checkbox=document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
    document.body.style.transition= '0.9s';
});