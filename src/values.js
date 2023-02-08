

export class Values {

  static values = {};

  static set(key, value) {
    this.values[key] = value;
  }

  static get(key) {
    return this.values[key];
  }

  static remove(key) {
    delete this.values[key];
  }

  static clear() {
    this.values = {};
  }

  static has(key) {
    return this.values.hasOwnProperty(key);
  }

  static getKeys() {
    return Object.keys(this.values);
  }

  static getValues() {
    return Object.values(this.values);
  }

  static getEntries() {
    return Object.entries(this.values);
  }

}