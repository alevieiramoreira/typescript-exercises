abstract class View<T> {
  protected element: Element

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  update(model: T) {
    this.element.innerHTML = this.template(model);
  }

  abstract template(model: T): string;
}