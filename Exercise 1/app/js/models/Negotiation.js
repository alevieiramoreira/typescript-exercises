class Negotiation {
    constructor(date, quantity, value) {
        this.date = date;
        this.quantity = quantity;
        this.value = value;
    }
    get negDate() {
        return this.date;
    }
    get negQuantity() {
        return this.quantity;
    }
    get negValue() {
        return this.value;
    }
    get negVolume() {
        return this.quantity * this.value;
    }
}
