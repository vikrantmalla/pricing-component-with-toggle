const toggle = document.getElementById('toggle');
const price = document.getElementById('price');

toggle.addEventListener('change', e => {
    price.classList.toggle('show-monthly');
});