const selectEl = document.getElementById('select');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const registrationImage = document.getElementById('planet-img');
const button = document.querySelector('.form-submit-button');

name.addEventListener('change', function() {
    button.style.backgroundColor = name.value !== "" && phone.value !== "" && selectEl.value !== "" ? "var(--button-active)" : "var(--button-dimmed)";
})

phone.addEventListener('change', function() {
    button.style.backgroundColor = name.value !== "" && phone.value !== "" && selectEl.value !== "" ? "var(--button-active)" : "var(--button-dimmed)";
})

selectEl.addEventListener('change', function() {
    switch(true) {
        case this.value === 'bread' : registrationImage.src = "./assets/bread.png";
        break;
        case this.value === 'loaf' : registrationImage.src = "./assets/loaf.png";
        break;
        case this.value === 'croissant' : registrationImage.src = "./assets/croissant.png";
        break;
        case this.value === 'cupcake' : registrationImage.src = "./assets/cupcake.png";
        break;
        case this.value === 'cake' : registrationImage.src = "./assets/cake.png";
        break;
    }
    button.style.backgroundColor = name.value !== "" && phone.value !== "" && selectEl.value !== "" ? "var(--button-active)" : "var(--button-dimmed)";
})

let selectDropped = false;

selectEl.addEventListener('click',function () {
    selectDropped ? this.style.backgroundImage = "url('../assets/icons/Expand More.svg')" : this.style.backgroundImage = "url('../assets/icons/Expand Less.svg')";
    selectDropped = !selectDropped;
})
