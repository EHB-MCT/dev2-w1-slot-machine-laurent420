export const slotMachine = {
    symbols: ["♠", "♥", "♣", "♦"],
    slots: [],
    slotsAmount: 3,
    win: false,
    
    getRandomSymbol: function () {
        return this.symbols[Math.floor(Math.random() * this.symbols.length)];
    },
    
    spin: function () {
        this.slots = [];
        for (let i = 0; i < this.slotsAmount; i++) {
            this.slots.push(this.getRandomSymbol());
        }
        this.calculateStatus();
    },
    
    calculateStatus: function () {
        this.win = this.slots.every(symbol => symbol === this.slots[0]);
    },
    
    reset: function () {
        this.slots = [];
        this.win = false;
        document.getElementById("result").innerHTML = "";
        document.getElementById("status").textContent = "";
    }
};
