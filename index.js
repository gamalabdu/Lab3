
let noteName = document.getElementById("noteName")
let noteText = document.getElementById("note")
let submitBtn = document.getElementById('submit')
let clearBtn = document.getElementById('clear')
let form = document.getElementById("myForm");
let storedName = localStorage.getItem("name")
let storedNote = localStorage.getItem("note")

function handleForm (event) { 
    event.preventDefault(); 
} 

if (storedName && storedNote) {
    noteName.value = storedName
    noteText.textContent = storedNote
}


form.addEventListener('submit', handleForm);

submitBtn.addEventListener("click", function() {
    localStorage.setItem("name", noteName.value)
    localStorage.setItem("note", noteText.value)
})


clearBtn.addEventListener("click", () => {
    noteName.value = ""
    noteText.textContent = ""
    localStorage.clear()
})


