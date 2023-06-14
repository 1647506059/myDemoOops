import { _decorator, Component, Node, SpriteFrame } from 'cc';
import { Root } from '../lib/framework/core/Root';
import { oops } from '../lib/framework/core/Oops';
import { UIConfigData, UIID } from './common/GameUIConfig';
import { UITools } from './common/UITools';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Root {


    protected run(): void {

    }   

    protected initGui(): void {
        oops.gui.init(UIConfigData);

        // 模式层弹窗 按照队列的形式弹出 先进先出
        oops.gui.open(UIID.CommonPrompt, {
            title: "提示",
            content: "第一条提示信息",
            okWord: "确认",
            cancelWord: "取消",
            needCancel: true
        }, UITools.DialogPopAnim());
        oops.gui.open(UIID.CommonPrompt, {
            title: "提示",
            content: "第二条提示信息",
            okWord: "确认",
            cancelWord: "取消",
            needCancel: true
        }, UITools.DialogPopAnim());
        oops.gui.open(UIID.CommonPrompt, {
            title: "提示",
            content: "第三条提示信息",
            okWord: "确认",
            cancelWord: "取消",
            needCancel: true
        }, UITools.DialogPopAnim());
        // oops.gui.toast('loading')
    }

}


