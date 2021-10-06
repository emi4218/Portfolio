window.addEventListener('load', () => {

    let modale = document.querySelector('.modale');
    let contain = modale.querySelector('.contain')
    let images = document.querySelectorAll('.image');
    modale.querySelector('.close').addEventListener('click', event => {
        modale.classList.remove('open');
    })

    images.forEach(image => {
        image.addEventListener('click', event => {
            console.log(image);
            contain.innerHTML = "";
            contain.appendChild(image.querySelector('img').cloneNode());
            modale.classList.add('open');
        })
    });



});