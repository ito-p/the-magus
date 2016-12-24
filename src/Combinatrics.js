export default class Combinatrics {
  _combiList: Array<{
    key: string,
    values: Array<string>,
    length: number,
    factorial: number
  }>;

  constructor(combi: {[key: string]: Array<string>}) {
    this._combiList = Object.keys(combi).map(key => {
      return {
        key,
        values: combi[key],
        length: combi[key].length,
        factorial: 0
      };
    });
  }

  choose(index: number) {
    return this._combiList.reduce((hash, combi) => {
      const combiIndex = index % combi.factorial % combi.length;
      hash[combi.key] = combi.values[combiIndex];
      return hash;
    }, {});
  }


  get length() {
    return this._combiList.reduce((patternNum, item) => {
      item.factorial = patternNum * item.length;
      return patternNum * item.length;
    }, 1);
  }
}
