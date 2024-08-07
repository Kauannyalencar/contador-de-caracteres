const input = document.querySelector("#input")
const counter = document.querySelector(".counter")
const toggleBtn = document.querySelector("#toggle")

let mode = "characters"

toggleBtn.addEventListener("click", () => {
    if (mode === "characters") {
        mode = "words"
        toggleBtn.textContent = "Contar caracteres"
    } else {
        mode = "characters"
        toggleBtn.textContent = "Contar palavras"
    }
    //Simula o evento do input
    input.dispatchEvent(new Event("input"));
})

input.addEventListener("input", () => {
    let count = 0
    if (mode === "characters") {
        count = input.value.length
        counter.textContent = `${count} caractere(s)`
    } else {
        const word = input.value.trim().split(/\s+/)
        count = input.value.trim() === "" ? 0 : word.length;
        counter.textContent = `${count} palavra(s)`
    }
})

