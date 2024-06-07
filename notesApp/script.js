const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function saveData(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}


createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    img.src = "./images/delete.png";
    inputBox.appendChild(img);
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    // note.classList.add(".input-box");
    notesContainer.appendChild(inputBox);
    // saveData();
});

notesContainer.addEventListener("click",(e) => {
    // console.log(e.target.tagName);
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.targetName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach((note) => {
            note.addEventListener("keyup",() => {
                saveData();
            })
        })
    }
        
})

function saveData(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}