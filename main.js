const button = document.querySelector(".box3")
const box = document.querySelector(".burger-case")
const remove = document.querySelector(".close")

button.addEventListener("click", (e) => {
    box.classList.toggle("active")
    e.preventDefault()
})

remove.addEventListener("click", (e) => {
    box.classList.toggle("active")
    e.preventDefault()
})