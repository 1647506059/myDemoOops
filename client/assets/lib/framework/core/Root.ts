/*
 * @Author: dgflash
 * @Date: 2021-07-03 16:13:17
 * @LastEditors: dgflash
 * @LastEditTime: 2022-11-01 15:44:57
 */
import { Component, director, game, Game, log, Node, sys, view, _decorator } from "cc";
import { LanguageManager } from "../libs/gui/language/Language";
import { AudioManager } from "./common/audio/AudioManager";
import { EventMessage } from "./common/event/EventMessage";
import { TimerManager } from "./common/manager/TimerManager";
import { GameManager } from "./game/GameManager";
import { GUI } from "./gui/GUI";
import { LayerManager } from "./gui/layer/LayerManager";
import { oops, version } from "./Oops";

const { ccclass, property } = _decorator;

/** 框架显示层根节点 */
export class Root extends Component {
    /** 游戏层节点 */
    @property({
        type: Node,
        tooltip: "游戏层"
    })
    game: Node | null = null;

    /** 界面层节点 */
    @property({
        type: Node,
        tooltip: "界面层"
    })
    gui: Node | null = null;

    onLoad() {
        console.log(`Oops Framework v${version}`);
        this.enabled = false;
        oops.config.init(() => {
            this.enabled = true;
            this.init();
            this.run();
        });
    }

    update(dt: number) {

    }

    /** 初始化游戏界面 */
    protected initGui() {

    }

    /** 初始化游戏业务模块 */
    protected initEcsSystem() {

    }

    /** 加载完引擎配置文件后执行 */
    protected run() {

    }

    protected init() {
        oops.language = new LanguageManager();
        oops.timer = new TimerManager(this);
        oops.audio = AudioManager.instance;
        oops.game = new GameManager(this.game!);
        oops.gui = new LayerManager(this.gui!);
        this.initGui();

        this.initEcsSystem();

        // 游戏显示事件
        game.on(Game.EVENT_SHOW, () => {
            log("Game.EVENT_SHOW");
            oops.timer.load();     // 平台不需要在退出时精准计算时间，直接暂时游戏时间
            oops.audio.resumeAll();
            director.resume();
            game.resume();
            oops.message.dispatchEvent(EventMessage.GAME_ENTER);
        });

        // 游戏隐藏事件
        game.on(Game.EVENT_HIDE, () => {
            log("Game.EVENT_HIDE");
            oops.timer.save();     // 平台不需要在退出时精准计算时间，直接暂时游戏时间
            oops.audio.pauseAll();
            director.pause();
            game.pause();
            oops.message.dispatchEvent(EventMessage.GAME_EXIT);
        });

        // 游戏尺寸修改事件
        if (sys.isMobile == false) {
            var c_gui = this.gui?.addComponent(GUI)!;
            view.setResizeCallback(() => {
                c_gui.resize();
                oops.message.dispatchEvent(EventMessage.GAME_RESIZE);
            });
        }
    }
}