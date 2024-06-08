let userInput = document.getElementById("date");
// // console.log(userInput.value)
userInput.max = new Date().toISOString().split("T")[0];
let button = document.querySelector("button");

button.addEventListener("click", () => {
    let currentDate = new Date();
    let currentYear, currentMonth,currentDay;
    let userYear,userMonth,userDay
    currentYear = currentDate.getFullYear();
    currentMonth = currentDate.getMonth() + 1;
    currentDate = currentDate.getDay();
    userYear = Number(userInput.value.split("-")[0]);
    userMonth =Number(userInput.value.split("-")[1]);
    userDay = Number(userInput.value.split("-")[2]);
    let year = currentYear-userYear;
    let month = currentMonth-userMonth;
    if(month < 0){
        year--;
        month = 12 + month;
    }
    let day = currentDate-userDay;
    if(day < 0){
        month--;
        day = dayGiver(currentYear,currentMonth) + day;
    }

    let result  = document.getElementById("result");
    result.innerHTML = `You are ${year} years, ${month} months and ${day} days old`;
    
})

function dayGiver(year,month){
    return new Date(year,month,0).getDate();
}



