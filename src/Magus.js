// @flow
import Template from './Template';
import Combinatrics from './Combinatrics';

export default class Magus {

  _template: Template;
  _combinatrics: Combinatrics;

  constructor(combi: {[key: string]: Array<string>}, template: string) {
    this._template = new Template(template);
    this._combinatrics = new Combinatrics(combi);
  }

  produce(
    fn: (
      product: string,
      combi: { [key: string]: string }
    ) => void
  ): null {
    for (let index = 0; index < this._combinatrics.length; index += 1) {
      const combi = this._combinatrics.choose(index);
      const product = this._template.embed(combi);
      fn(product, combi);
    }
    return null;
  }
}
