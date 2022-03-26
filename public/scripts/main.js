import Modal from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll('.actions a.check-button')

checkButtons.forEach(button => {
     button.addEventListener("click", event => {
         modal.open()
     })
})



modal.open()
modal.close()