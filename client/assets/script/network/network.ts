import { EDITOR } from "cc/env";
import { GameSocket } from "./GameSocket";
import { error, isValid } from "cc";

interface IParamEx {
    lockScreen?: boolean
    view?
    msgId?: number
    callback?: Function
    errorCallback?: Function
}

class NetWorkClass {
    constructor() { }

    ip: string = null;
    port: number = null;
    needReconnect: boolean = false;
    connectCallback: Function = null;
    ws_game: GameSocket = null;

    tcpConnect(ip: string, port: number, callback: Function, reconnet: boolean) {
        if (this.ws_game && this.ws_game.ws.readyState == WebSocket.OPEN && ip == this.ip && port == this.port) {
            if (reconnet) {
                this.ws_game.close();
            } else {
                if (callback) {
                    callback(WebSocket.CONNECTING);
                }
                return
            }
        }

        // TODO
        // show loading UI

        this.ip = ip;
        this.port = port;
        this.needReconnect = true;
        this.connectCallback = callback;
        this.ws_game = null;
        this.ws_game = new GameSocket(ip + ':' + port);
    }

    tcpSend(msgId: number, data: any, params: IParamEx) {
        if (!this.ws_game || this.ws_game.ws.readyState != WebSocket.OPEN) {
            error('socket is null or disconnected');
            return;
        }
        this.ws_game.tcpSend(msgId, data, params);
    }


}
export const network = new NetWorkClass();
