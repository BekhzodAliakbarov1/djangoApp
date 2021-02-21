const titleInput = document.querySelector('input[name=title]');
const slugInput = document.querySelector('input[name=slug]');


const slugify = val => val.toString().toLowerCase().trim()
        .replace(/&/g, '-and-') //replace and with and
        .replace(/[\s\W-]+/g, '-')



titleInput.addEventListener('keyup', (e) => {
    slugInput.setAttribute('value', slugify(titleInput.value))
})