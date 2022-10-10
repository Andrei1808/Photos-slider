const slides = document.querySelectorAll('.slide');

for (let slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();

        slide.classList.add('active');
    })
}


let clearActiveClasses = () => {
    for (let slide of slides) {
        slide.classList.remove('active');
    }
}

