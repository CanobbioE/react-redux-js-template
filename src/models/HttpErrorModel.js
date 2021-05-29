export default class HttpErrorModel {
    constructor(status, code, message, raw) {
        this.status = status;
        this.code = code;
        this.message = message;
        this.raw = raw;
    }

}