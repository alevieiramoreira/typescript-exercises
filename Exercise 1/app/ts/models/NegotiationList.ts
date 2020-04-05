class NegotiationList {

  private negotiations: Negotiation[] = [];

  add(negotiation: Negotiation): void {
    this.negotiations.push(negotiation);
  }

  showNegotiations(): Negotiation[] {
    return [].concat(this.negotiations);
  }

}