class NegotiationList {
    constructor() {
        this.negotiations = [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    showNegotiations() {
        return [].concat(this.negotiations);
    }
}
