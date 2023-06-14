import { tween, Node, Vec3, UIOpacity } from "cc";
import { PopViewParams } from "../../lib/framework/core/gui/layer/Defines";

class UIToolsClass {

    DialogPopAnim(callbacks?: PopViewParams) {
        let newCallbacks: PopViewParams = {
            // 节点添加动画
            onAdded: (node, params) => {
                let bg = node.getChildByName('bg');
                let root = node.getChildByName('root');
                let bgUIOpc = bg.getComponent(UIOpacity) || bg.addComponent(UIOpacity);
                root.setScale(0.1, 0.1, 0.1);
                tween(root)
                    .to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' })
                    .start();
                bgUIOpc.opacity = 0;
                tween(bgUIOpc)
                    .to(0.3, { opacity: 127 }, { easing: 'backOut' })
                    .start();
            },
            // 节点删除动画
            onBeforeRemove: (node, next) => {
                let bg = node.getChildByName('bg');
                let root = node.getChildByName('root');
                let bgUIOpc = bg.getComponent(UIOpacity) || bg.addComponent(UIOpacity);
                tween(root)
                    .to(0.3, { scale: new Vec3(0.1, 0.1, 0.1) }, { easing: 'backIn' })
                    .call(next)
                    .start();
                tween(bgUIOpc)
                    .to(0.3, { opacity: 0 }, { easing: "backIn" })
                    .start();
            },
        }
        if (callbacks) {
            if (callbacks && callbacks.onAdded) {
                let onAdded = callbacks.onAdded;
                callbacks.onAdded = (node: Node, params: any) => {
                    onAdded(node, params);
                    newCallbacks.onAdded && newCallbacks.onAdded(node, params);
                };
            }
            if (callbacks && callbacks.onBeforeRemove) {
                let onBeforeRemove = callbacks.onBeforeRemove;
                callbacks.onBeforeRemove = (node, params) => {
                    onBeforeRemove(node, params);
                    newCallbacks.onBeforeRemove && newCallbacks.onBeforeRemove(node, params);
                };
            }
            return callbacks;
        }
        return newCallbacks;
    }

}
export const UITools = new UIToolsClass();