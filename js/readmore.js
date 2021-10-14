const readBtn = document.querySelector('.read__btn')
const readText = document.querySelector('.read__text')

readBtn.addEventListener('click', (e) => {
    readText.classList.toggle('show-more');
    if (readBtn.innerText === 'Read More') {
        readBtn.innerText = 'Read Less';
    } else {
        readBtn.innerText = 'Read More';
    }
})