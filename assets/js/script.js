const scrollBtn = document.querySelector('.scrolly')
const firstSection = document.querySelector('#first')

// function to scroll

scrollBtn.addEventListener('click', (e) => {
    e.preventDefault()
    firstSection.scrollIntoView({behavior: 'smooth'})
})

