// @flow

export default class Template {
  _templateString: string;

  constructor(template: string) {
    this._templateString = template;
  }

  embed(combi: { [key: string]: string }) {
    let json = this._templateString;
    Object.keys(combi).forEach(key => {
      const keyString = `$${key}`;
      const value = combi[key];
      json = json.replace(keyString, value);
    });
    return json;
  }
}
