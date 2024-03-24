const divContainer = document.querySelector(".container")
const botonAdd = document.getElementById("btn-add")
const botonRemove = document.getElementById("btn-remove-styles")
const botonAnimation = document.getElementById("btn-animation")
const botonRemoveAnimation = document.getElementById("btn-remove-animation")

botonAdd.addEventListener("click",()=>{
    divContainer.classList.add("tarjet-styles")
})

botonRemove.addEventListener("click",()=>{
    divContainer.classList.remove("tarjet-styles")
})

botonAnimation.addEventListener("click",()=>{
    divContainer.classList.add("animation")
})

botonRemoveAnimation.addEventListener("click",()=>{
    divContainer.classList.remove("animation")
})