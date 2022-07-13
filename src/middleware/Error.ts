export default class ErrorM extends Error {
  constructor(sts: string, msg: string) {
    super();
    this.name = sts;
    this.message = msg;
    Object.setPrototypeOf(this, ErrorM.prototype);
  }
}