export { buttonsMore };

let buttonReadMore = document.querySelector('.post__more');
let showCardTech = document.querySelector('.cardtech__more');
let showCardBrand = document.querySelector('.cardbrand__more');

let moreText = document.querySelectorAll('.readmore');
let visible = document.querySelectorAll('.visible');

function buttonsMore() {
    buttonReadMore.addEventListener('click', function() {
        buttonReadMore.classList.toggle('rotate-arrow');
        for (let i = 0; i < moreText.length; i++) {
            moreText[i].classList.toggle('showpost');
        }
        if (buttonReadMore.classList.contains('rotate-arrow')) {
            buttonReadMore.textContent = 'Свернуть';
        } else {
            buttonReadMore.textContent = 'Читать далее';
        }

    });

    showCardTech.addEventListener('click', function() {
        showCardTech.classList.toggle('rotate-arrow');
        for (let i = 0; i < visible.length; i++) {
            visible[i].classList.toggle('show-cardtech');
        }
        if (showCardTech.classList.contains('rotate-arrow')) {
            showCardTech.textContent = 'Свернуть';
        } else {
            showCardTech.textContent = 'Показать все';
        }
    });

    showCardBrand.addEventListener('click', function() {
        showCardBrand.classList.toggle('rotate-arrow');
        for (let i = 0; i < visible.length; i++) {
            visible[i].classList.toggle('show-cardbrand');
        }
        if (showCardBrand.classList.contains('rotate-arrow')) {
            showCardBrand.textContent = 'Свернуть';
        } else {
            showCardBrand.textContent = 'Показать все';
        }
    });


}

//Прописанные классы смотри в файах more.scss и cardsblock.scss.
//Этот код отвечает за открытие/сворачивание элеметов на странице + визуальные формления для них