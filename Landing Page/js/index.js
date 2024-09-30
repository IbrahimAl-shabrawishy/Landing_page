let img = document.querySelector(".img");
let icons = document.querySelectorAll('#icons img');
let section = document.querySelector(".section");

function phones(phone) {
    img.src = phone;
}

function colors(color) {
    section.style.background = color;
}

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', function() {
        phones(this.src); 
        colors(this.getAttribute('data-color')); 
    });
}
