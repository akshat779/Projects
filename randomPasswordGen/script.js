const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+{}":?><;.,[]-=';

function createPassword(){
    let password = "";
    let characters = upperCase + lowerCase + numbers +symbols;
    for(let i = 0; i < length; i++){
        let value = Math.floor(Math.random() * characters.length);
        password += characters[(value)];
    }
    passwordBox.value = password;
}

let button = document.querySelector(".button");
button.addEventListener("click",createPassword)

let copy = document.querySelector(".copy");
copy.addEventListener("click",() => {
    passwordBox.select();
    // document.execCommand("copy")
    navigator.clipboard.writeText(passwordBox.value);
});
