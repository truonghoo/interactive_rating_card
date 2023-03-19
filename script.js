const buttons = document.querySelectorAll('.buttons button')
const submitButton = document.querySelector('.submit-btn')
const form = document.querySelector('form')
const thank = document.querySelector('.thank-container')
const para = document.querySelector('form .para')
const selectedStar = document.querySelector('.selected-star span')

let selected = ''

buttons.forEach((button) =>
  button.addEventListener('click', () => {
    let current = document.querySelectorAll('.buttons button.active')
    if (current.length > 0) {
      current[0].classList.remove('active')
    }
    button.classList.add('active')
    selected = button.innerHTML
  })
)

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  let current = document.querySelectorAll('.buttons button.active')
  if (current.length === 0) {
    para.textContent = 'Oop! You forgot give us a star!'
  } else {
    form.classList.add('hide')
    thank.classList.remove('hide')
    selectedStar.textContent = selected
  }
})
