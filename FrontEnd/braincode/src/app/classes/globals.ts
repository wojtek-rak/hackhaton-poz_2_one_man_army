export abstract class Globals {
  private static _data = null;
  public static get data() {
    return this._data;
  }
  public static set data(data) {
    this._data = data;
  }
}
