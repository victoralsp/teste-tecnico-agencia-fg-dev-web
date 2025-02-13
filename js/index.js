const slides = document.querySelectorAll('.slides img')
const dots = document.querySelectorAll('.dot')
let slideIndex = 0
let intervalId = null

initializeSlider()

function initializeSlider() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide')
        dots[slideIndex].classList.add('active')
        intervalId = setInterval(nextSlide, 5000)
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0
    } else if (index < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach((slide) => {
        slide.classList.remove('displaySlide')
    })
    dots.forEach((dot) => {
        dot.classList.remove('active')
    })

    slides[slideIndex].classList.add('displaySlide')
    dots[slideIndex].classList.add('active')
}

function prevSlide() {
    clearInterval(intervalId)
    slideIndex--
    showSlide(slideIndex)
}

function nextSlide() {
    slideIndex++
    showSlide(slideIndex)
}

function currentSlide(index) {
    clearInterval(intervalId)
    slideIndex = index
    showSlide(slideIndex)
}


// Mostra imagens ao clicar no botão 

const btnShowImgs = document.getElementById('btn-ver-equipe')
const divImages = document.getElementById('equipe-imgs')
let imgShow = false

btnShowImgs.addEventListener('click', () => {
    if (imgShow) {
        divImages.classList.remove('active')
        btnShowImgs.innerHTML = 'Veja nossa equipe <i class="fa-sharp fa-solid fa-chevron-right btn-sobre-empresa-icon"></i>'
    } else {
        divImages.classList.add('active')
        btnShowImgs.innerHTML = 'Veja nossa equipe <i class="fa-sharp fa-solid fa-chevron-down btn-sobre-empresa-icon"></i>'
    }

    imgShow = !imgShow
})