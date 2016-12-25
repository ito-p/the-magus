// @flow

export default class Template {
  _templateString: string;

  constructor(templateData: {[key: string]: any}) {
    this._templateString = JSON.stringify(templateData);
  }

  embed(combi: { [key: string]: string }): {[key: string]: any} {
    let jsonString = this._templateString;
    Object.keys(combi).forEach(key => {
      const keyString = `$${key}`;
      const value = combi[key];
      jsonString = jsonString.replace(keyString, value);
    });
    return JSON.parse(jsonString);
  }
}
