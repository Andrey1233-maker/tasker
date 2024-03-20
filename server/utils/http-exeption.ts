export class HttpExeprion extends Error {
  status: number;

  constructor(status, message) {
    super(message);
    this.status = status;
  }
}
