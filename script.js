let label = document.querySelector('.hamb')
let toggleLabel = document.querySelector('.toggle-hamb')
let header = document.querySelector('.header')
let toggle = document.querySelector('.toggle')

label.addEventListener('click', () => {
        header.style.display = 'none' 
        toggle.style.display = 'block'              
    }
)
toggleLabel.addEventListener('click', () => {
    header.style.display = '' 
    toggle.style.display = 'none' 
}
)


