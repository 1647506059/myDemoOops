import { _decorator, Button, Component, Node } from 'cc';
import { UICallbacks } from '../../core/gui/layer/Defines';
import { oops } from '../../core/Oops';
const { ccclass, property } = _decorator;

/**
 * UI界面组件基类
 * 在这里做了点击事件的绑定和界面进入移除的相关回调定义
 * 解析了界面节点树
 */
@ccclass('BaseUIComponent')
export class BaseUIComponent extends Component implements UICallbacks {

    /** 节点树平铺表 按照路径获取节点 */
    views: Map<string, Node> = new Map();

    protected onLoad(): void {
        this.initNodeTree(this.node);
    }

    private initNodeTree(node: Node, path?: string) {
        const child = node.children;
        const childCount = child.length;
        for (let i = 0; i < childCount; i++) {
            let node = child[i];
            let name = path ? path + '/' + node.name : node.name;
            this.views.set(name, node);
            if (node.children.length) {
                this.initNodeTree(node, name);
            }
            // 点击事件
            if (node.name.startsWith('btn') && node.name.endsWith('Click')) {
                let funcName = node.name.substring(3, node.name.length - 5);
                let button = node.getComponent(Button) || node.addComponent(Button);
                node.on(Button.EventType.CLICK, () => {
                    if (this['on' + funcName + 'Click'] && typeof this['on' + funcName + 'Click'] == 'function') {
                        this['on' + funcName + 'Click'].call(this, button);
                    }
                    // 这里可以添加音效播放
                    // oops.audio.playEffect('');
                }, this);
            }
        }
    }

    protected onDestroy(): void {
        this.views.clear();
        this.views = null;
    }

    onAdded(node: Node, params: any) {

    }

    onRemoved(node: Node, params: any) {

    }

    onBeforeRemove(node: Node, next: Function) {
        next && next();
    }
}


