class NegotiationController {
    constructor() {
        this.negotiations = new NegotiationList();
        this.negotiationsView = new NegotiationsView('#negotiationsView');
        this.messageView = new MessageView('#mensagemView');
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negotiationsView.update(this.negotiations);
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this.inputDate.value.replace(/-/g, ',')), parseInt(this.inputQuantity.value), parseFloat(this.inputValue.value));
        this.negotiations.add(negotiation);
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Negociação adicionada com sucesso!');
    }
}
