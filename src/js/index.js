const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");



openButton.addEventListener("click", () => {
    modal.showModal()
    console.log("clicked")
})

closeButton.addEventListener("click", () => {
    modal.close()
})

modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect()
    //check if clicked outside modal  
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom 
    ) {
        modal.close()
    }
})