class Negotiation {

  constructor(
    private date: Date, 
    private quantity: number, 
    private value: number) 
  {}

  getDate() {
    return this.date;
  }

  getQuantity() {
    return this.quantity;
  }

  getValue() {
    return this.value;
  }
}