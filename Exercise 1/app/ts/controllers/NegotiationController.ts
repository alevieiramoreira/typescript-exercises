class NegotiationController {

  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations = new NegotiationList();

  constructor() {
    this.inputDate = document.querySelector('#data');
    this.inputQuantity = document.querySelector('#quantidade');
    this.inputValue = document.querySelector('#valor');
  }

  add(event: Event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this.inputDate.value.replace(/-/g, ',')),
      parseInt(this.inputQuantity.value),
      parseFloat(this.inputValue.value)
    );

    this.negotiations.add(negotiation);

      console.log(this.negotiations)

    this.negotiations.showNegotiations().length = 0;

    this.negotiations.showNegotiations().forEach(negotiation => (
      console.log(negotiation)
    ))
  }
}