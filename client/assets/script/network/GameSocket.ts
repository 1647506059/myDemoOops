import { isValid } from "cc";
import { OneRequest } from "./OneRequest";
import { Socket } from "./Socket";

export class GameSocket extends Socket {

    requsetList: Array<OneRequest> = new Array();

    onOpen(): void {
        super.onOpen();

    }

    onMessage(evt): void {

    }

    tcpSend(msgId: number, data: any, params: any) {
        // protobuf endoce...
        
        if ((params.callback || params.errorCallback) && isValid(params.view)) {
            let oneReq = new OneRequest(
                params.view,
                params.msgId,
                params.callback,
                params.errorCallback,
                'once'
            );
            this.requsetList.push(oneReq);
        }
    }





}


