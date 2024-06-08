// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example 

let buttonOne = document.querySelector("#buttonOne");


const getQrCode = function() {
    let userInput = document.querySelector("#given");
    let image = document.querySelector("qrImg");
    let url = String("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput.value);
    let newElement = document.createElement("img");  
    newElement.src = url;
    let imageBox = document.querySelector("#imgBox");
    imageBox.className = "show-img";
    console.log(imageBox)
    imageBox.appendChild(newElement);
}
buttonOne.addEventListener("click", getQrCode);
