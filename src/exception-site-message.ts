import Exception from './exception';

export default class ExceptionSiteMessage extends Exception {
  constructor(msg: string | undefined) {
    super(msg);
    Object.setPrototypeOf(this, ExceptionSiteMessage.prototype);
  }
}