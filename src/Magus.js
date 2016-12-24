// @flow

export default class Magus {

  _template: string;
  _combiList: Array<{
    key: string,
    values: Array<string>,
    length: number,
    factorial: number
  }>;
  _patternNum: number;

  constructor(combi: {[key: string]: Array<string>}, template: string) {
    this._template = template;

    this._combiList = Object.keys(combi).map(key => {
      return {
        key,
        values: combi[key],
        length: combi[key].length,
        factorial: 0
      };
    });

    this._patternNum = this._combiList.reduce((patternNum, item) => {
      item.factorial = patternNum * item.length;
      return patternNum * item.length;
    }, 1);
  }

  _embed(combi: { [key: string]: string }) {
    let json = this._template;
    Object.keys(combi).forEach(key => {
      const keyString = `$${key}`;
      const value = combi[key];
      json = json.replace(keyString, value);
    });
    return json;
  }

  _choose(index: number) {
    return this._combiList.reduce((hash, combi) => {
      const combiIndex = index % combi.factorial % combi.length;
      hash[combi.key] = combi.values[combiIndex];
      return hash;
    }, {});
  }

  produce(
    fn: (
      product: string,
      combi: { [key: string]: string }
    ) => void
  ): null {
    for (let index = 0; index < this._patternNum; index += 1) {
      const combi = this._choose(index);
      const product = this._embed(combi);
      fn(product, combi);
    }
    return null;
  }
}
