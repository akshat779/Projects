const inputBox = document.getElementById("input");
const listContainer = document.querySelector("#list-container");
const button = document.querySelector("#add");

button.addEventListener("click", () => {
    if(inputBox.value === ""){
        alert("Please enter a valid task");
    }
    else{
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let delBtn = document.createElement("span");
        delBtn.innerHTML = "\u00d7";
        li.appendChild(delBtn);

    }
    inputBox.value = "";
    saveData();
});

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();