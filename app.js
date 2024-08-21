const button = document.querySelector(".button");
const advice_num = document.getElementById("advice-number");
const advice = document.getElementById("advice");

async function getData(){
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    advice_num.textContent = data.slip.id;
    advice.textContent = `"${data.slip.advice}"`;
}

button.addEventListener("click", getData);