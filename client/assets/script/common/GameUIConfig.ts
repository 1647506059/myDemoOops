import { UIConfig, LayerType } from "../../lib/framework/core/gui/layer/LayerManager";


/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum UIID {
    /** 弹窗界面 */
    CommonPrompt = 1,
    /** 加载与延时提示界面 */
    Netinstable,
}

/** 打开界面方式的配置数据 */
export var UIConfigData: { [key: number]: UIConfig } = {
    [UIID.Netinstable]: { layer: LayerType.PopUp, prefab: "common/prefab/netinstable" },
    [UIID.CommonPrompt]: { layer: LayerType.Dialog, prefab: "common/prefab/CommonPrompt" },
}