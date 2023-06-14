/*
 * @Author: dgflash
 * @Date: 2022-02-11 09:32:47
 * @LastEditors: dgflash
 * @LastEditTime: 2022-11-01 15:47:42
 */
import { LanguageManager } from "../libs/gui/language/Language";
import { HttpRequest } from "../libs/network/HttpRequest";
import { config } from "../module/config/Config";
import { AudioManager } from "./common/audio/AudioManager";
import { MessageManager } from "./common/event/MessageManager";
import { ResLoader } from "./common/loader/ResLoader";
import { Logger } from "./common/log/Logger";
import { TimerManager } from "./common/manager/TimerManager";
import { StorageManager } from "./common/storage/StorageManager";
import { GameManager } from "./game/GameManager";
import { LayerManager } from "./gui/layer/LayerManager";

/** 框架版本号 */
export var version: string = "1.1.3";

/** 框架核心模块访问入口 */
export class oops {
    /** ----------核心模块---------- */
    /** 游戏配置 */
    static config = config;
    /** 日志管理 */
    static log = Logger;
    /** 全局消息 */
    static message: MessageManager = MessageManager.Instance;
    /** 本地存储 */
    static storage: StorageManager = new StorageManager();
    /** 游戏时间管理 */
    static timer: TimerManager;
    /** 游戏音乐管理 */
    static audio: AudioManager;
    /** 二维界面管理 */
    static gui: LayerManager;
    /** 三维游戏世界管理 */
    static game: GameManager;
    /** 资源管理 */
    static res = new ResLoader();

    /** ----------可选模块---------- */

    /** 多语言模块 */
    static language: LanguageManager;
    /** HTTP */
    static http: HttpRequest = new HttpRequest();
}