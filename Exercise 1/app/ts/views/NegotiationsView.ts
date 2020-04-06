class NegotiationsView extends View<NegotiationList> {

  template(model: NegotiationList): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
          ${model.showNegotiations().map(negotiation => 
            `
              <tr>
                <th>
                   ${negotiation.negDate.getDate()}
                  /${negotiation.negDate.getMonth() +1}
                  /${negotiation.negDate.getFullYear()}
                </th>
                <th>${negotiation.negQuantity}</th>
                <th>${negotiation.negValue}</th>
                <th>${negotiation.negQuantity}</th>
              </tr>
            `
          ).join('')}
        </tbody>

        <tfoot>
        </tfoot>
      </table>
    `
  }
}