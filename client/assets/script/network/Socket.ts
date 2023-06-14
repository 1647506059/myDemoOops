import { error, log } from "cc";

const TAG = "[SOKCET]";

export class Socket {
    constructor(url: string) {
        try {
            this.url = url;
            this.ws = new WebSocket(this.url);
            this.ws.onopen = this.onOpen.bind(this);
            this.ws.onclose = this.onClose.bind(this);
            this.ws.onerror = this.onError.bind(this);
            this.ws.onmessage = this.onMessage.bind(this);
        } catch (e) {
            error(e);
        }
    }

    url: string = "";
    ws: WebSocket = null;
    heartTime: number = 60;
    handler = -1;

    onOpen() {
        log(TAG, "onOpen");
        clearInterval(this.handler);
        this.handler = setInterval(this.hertSend.bind(this), this.heartTime);
    }

    onClose() {
        log(TAG, "onClose");
    }

    onError() {
        log(TAG, "onError");
    }

    onMessage(evt) {
        log(TAG, "onMessage:", evt);
    }

    hertSend() {
        // WebSocket.CONNECTING  0 - 表示连接尚未建立
        // WebSocket.OPEN        1 - 表示连接已建立，可以进行通信。
        // WebSocket.CONNECTING  2 - 表示连接正在进行关闭。
        // WebSocket.CLOSED      3 - 表示连接已经关闭或者连接不能打开。
        if (this.ws.readyState == WebSocket.OPEN) {
            this.ws.send('');
        }
    }

    close() {
        clearInterval(this.handler);
        this.ws.close();
        this.ws.onopen = null;
        this.ws.onclose = null;
        this.ws.onerror = null;
        this.ws.onmessage = null;
        this.handler = -1;
    }
}


