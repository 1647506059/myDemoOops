
export class OneRequest {

    view = null;
    msgId: number = -1;
    callback: Function = null;
    errorCallback: Function = null;
    type: string = null;

    constructor(view, msgId: number, callback: Function, errorCallback: Function, type: string) {
        this.view = view;
        this.msgId = msgId;
        this.callback = callback;
        this.errorCallback = errorCallback;
        this.type = type;
    }

    



}


