import { BaseModel } from 'sjs-base-model';

export default class LoginModel extends BaseModel {

    constructor(data) {
        super();
        this.token = '';
        this.update(data);
    }
}