const scrollBtn = document.querySelector('.scrolly')
const firstSection = document.querySelector('#first')
const showMoreBtn = document.querySelector('#showMore')

// Array of sections to cycle through
const sections = Array.from(document.querySelectorAll('.display-sections'))
const cycleBtns = Array.from(document.querySelectorAll('.cycle-btn'))

const photoContainer =Array.from(document.querySelector('#photoContainer').children)
console.log(photoContainer)


// function to scroll

scrollBtn.addEventListener('click', (e) => {
    e.preventDefault()
    firstSection.scrollIntoView({behavior: 'smooth'})
})


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


// on click run function to show more photos
showMoreBtn.addEventListener('click', showMorePhotos)

// Function to show more photos
function showMorePhotos() {
    // remove hide class from photos
    for(let i = 0; i < photoContainer.length; i++){
        if(i < 3){
            
        }
        else {
            photoContainer[i].classList.toggle('hide')
        }
    }

    // change button text to show less

    if(showMoreBtn.innerText === 'Show More'){
        showMoreBtn.innerText = 'Show Less'
    } else {
        showMoreBtn.innerText = 'Show More'
    }

}