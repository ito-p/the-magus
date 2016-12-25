// @flow
import Template from './Template';
import Combinatrics from './Combinatrics';

export default class Magus {

  _template: Template;
  _combinatrics: Combinatrics;

  constructor(
    combinations: {[key: string]: Array<string>},
    templateData: {[key: string]: any}
  ) {
    this._template = new Template(templateData);
    this._combinatrics = new Combinatrics(combinations);
  }

  produce(
    fn: (
      product: { [key: string]: any },
      combination: { [key: string]: string }
    ) => any
  ): Array<any> {
    const results = [];
    for (let index = 0; index < this._combinatrics.length; index += 1) {
      const combination = this._combinatrics.choose(index);
      const product = this._template.embed(combination);
      results.push(fn(product, combination));
    }
    return results;
  }
}
