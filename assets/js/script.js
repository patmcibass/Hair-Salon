const scrollBtn = document.querySelector('.scrolly')
const firstSection = document.querySelector('#first')

// Array of sections to cycle through
const sections = Array.from(document.querySelectorAll('.display-sections'))
const cycleBtns = Array.from(document.querySelectorAll('.cycle-btn'))


// send function to sections to decide which will be shown

cycleBtns.forEach(btn => btn.addEventListener('click', () => {
    const index = cycleBtns.indexOf(btn)
    showSect(index)
}))

function showSect(index) {

    const btnToShow = cycleBtns[index]

    cycleBtns.forEach(btn => btn.classList.remove('active'))

    sections.forEach(section => {

        section.classList.remove('current-section')
        section.classList.add('hidden')
        
        if(section === sections[index]){
            section.classList.add('current-section')
            section.classList.remove('hidden')
            btnToShow.classList.add('active')
        } 
    })
}



// function to scroll

scrollBtn.addEventListener('click', (e) => {
    e.preventDefault()
    firstSection.scrollIntoView({behavior: 'smooth'})
})
