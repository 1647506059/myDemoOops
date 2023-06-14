import { _decorator, Component, Node, RichText } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RichTextEx')
export class RichTextEx extends RichText {
    
    get string () {
        return this._string;
    }
    set string (value) {
        if (this._string === value) {
            return;
        }

        this._string = value;
        this._updateRichTextStatus();
    }




    
}


