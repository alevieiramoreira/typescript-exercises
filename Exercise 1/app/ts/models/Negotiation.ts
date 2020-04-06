class Negotiation {

  constructor(
    private date: Date, 
    private quantity: number, 
    private value: number) 
  {}

  get negDate() {
    return this.date;
  }

  get negQuantity() {
    return this.quantity;
  }

  get negValue() {
    return this.value;
  }

  get negVolume(){
    return this.quantity * this.value;
  }
}