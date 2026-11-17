const list = document.querySelectorAll(".portbox2text")

list.forEach(li => {
    li.addEventListener("mouseenter", () => {
        li.classList.add("ishover")
    })
    li.addEventListener("mouseleave", () => {
        li.classList.remove("ishover")
    })
})