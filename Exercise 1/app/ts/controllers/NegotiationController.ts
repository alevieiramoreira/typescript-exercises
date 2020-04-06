class NegotiationController {

  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations = new NegotiationList();
  private negotiationsView = new NegotiationsView('#negotiationsView');
  private messageView = new MessageView('#mensagemView');

  constructor() {
    this.inputDate = document.querySelector('#data');
    this.inputQuantity = document.querySelector('#quantidade');
    this.inputValue = document.querySelector('#valor');
    this.negotiationsView.update(this.negotiations);
  }

  add(event: Event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this.inputDate.value.replace(/-/g, ',')),
      parseInt(this.inputQuantity.value),
      parseFloat(this.inputValue.value)
    );

    this.negotiations.add(negotiation);

    this.negotiationsView.update(this.negotiations);

    this.messageView.update('Negociação adicionada com sucesso!');

  }
}