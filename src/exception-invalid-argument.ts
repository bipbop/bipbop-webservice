import Exception from './exception';

export default class ExceptionInvalidArgument extends Exception {
  constructor(msg: string | undefined) {
    super(msg);
    Object.setPrototypeOf(this, ExceptionInvalidArgument.prototype);
  }
}