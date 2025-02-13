import { slotMachine } from "./slotMachine.js";

function init() {
    console.log("Init");
    const button = document.getElementById("button");
    button.addEventListener("click", pullLever);
    slotMachine.reset();
}

function pullLever() {
    slotMachine.reset();
    slotMachine.spin();
    showSlots();
    showGameResult();
}

function showSlots() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = slotMachine.slots.map(symbol => `<span class="${symbol}">${symbol}</span>`).join(" ");
}

function showGameResult() {
    const statusP = document.getElementById("status");
    statusP.textContent = slotMachine.win ? "JE WINT 🎉💰" : "JE VERLIEST 😭🥺";
}

init();
