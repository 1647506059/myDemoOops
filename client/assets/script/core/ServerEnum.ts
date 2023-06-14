export enum ActState {
    DEFAULT = 0, // 默认还未开始
    START = 1, // 进行中
    END = 2, // 已经结束
    DISABLE = 3, // 不可用(被GM停了)
}

export enum ApocalypseState {
    Close = 0, // 关闭
    Ready = 1, // 准备
    Fight = 2, // 战斗
    Worship = 3, // 膜拜
}

export enum AuctionState {
    CLOSE = 0, // 关闭
    Bidding = 1, // 竞拍
    Show = 2, // 公示
}

export enum Relation {
    None = 0,
    Self = 1, // 1自己
    SelfGuild = 2, // 同公会
    Union = 3, // 联盟
    Neutral = 4, // 中立
    Enemy = 5, // 敌对
}

export enum BattleCamp {
    NoCamp = 0, // 无
    Attack = 1, // 进攻方
    Defend = 2, // 防守方
}

export enum BattleType {
    NoType = 0,//无类型
    Unknown = 1,//默认
    CopyMap = 2,//章节副本
    Arena = 3,//竞技场PVP
    CityWar = 4,//城战
    CollegeContest = 5,//学院积分赛
    League = 6,//荣耀联赛
    Apocalypse = 7,//天启之争
    UnionTeam = 8,//通力合作
    ChallengePeak = 9, // 挑战五绝
    // 待添加......
}

export enum Channel {
    None = 0, //占位，无意义
    System = 1, // 系统频道
    World = 2, // 世界频道
    Guild = 3, // 公会频道
    Person = 4, // 私聊频道
    Team = 5, // 组队频道
    Cross = 6, // 跨服频道
    Apocalypse = 7, // 天启之争频道
}

export enum OccupyType {
    FAILURE = 0, //没有占领
    SUCCESS = 1, // 可占领
    GUILD_LV = 2, // 公会等级不足
    CITY_TOO_MUCH = 3, // 同类型城池太多
    CITY_NOT_LINK = 4, // 城池未连线
    CITY_NUM_LIMIT = 5, // 前置城池数量不足
}

export enum CityWarState {
    WAR = 0,// 可以开战
    NoWar = 1,// 不可开战
}

export enum DeclareState {
    Declare = 0,//可宣战
    NoDeclare = 1,//不可宣战
}

export enum TeamType {
    NoType = 0,//可宣战
    Player = 1,//玩家
    Normal = 2,//NPC_put
    Elite = 3,//NPC_精英
    Leader = 4,//NPC_大将
    Boss = 5,//NPC_BOSS
}

export enum AccountType {
    NORMAL = 0, // 普通(内部)
    TRAVELER = 1,//(游客)
}

export enum VerifyType {
    LoginCode = 0, // 验证码登录(第一次用手机号登录，会自动注册)
    LoginPass = 1, // 密码登录
    ResetPass = 2, // 用验证码重置密码
    BindPhone = 3, // 绑定手机号
    RegisterCode = 4, // 纯注册
}

export enum CareerEnum {
    NullCareer = 0,
    XianQian = 1,// 先遣
    MiShu = 2,// 秘术
    JueYi = 3,// 绝异
    SuWei = 4,// 宿卫
    QiDi = 5,//启迪
}

export enum CampEnum {
    NullCamp = 0,
    Wei = 1,// 魏
    Shu = 2,// 蜀
    Wu = 3,// 吴
}

export enum SubEventType {
    NONE = 0,
    EFFECT = 1,
    INVITE = 2,
    BOX = 3,
}

export enum LeagueGlobalState {
    BATTLE = 0, // 战斗阶段：首轮联赛于跨服开服当前星期的星期一凌晨0时整开始，以后再休眠阶段结束后开始，持续global.gloryLeagueContinuedTime[0]秒
    SETTLE = 1, // 结算阶段：战斗阶段结束后开始，持续global.gloryLeagueContinuedTime[1]秒
    SLEEP = 2, // 休眠阶段：结算阶段结束后开始，持续global.gloryLeagueContinuedTime[2]秒。
}

export enum LeagueZoneType {
    NORMAL = 0, // 普通战区
    NOVICE = 1, // 新手战区
}

export enum OwnerType {
    none = 0,//未知
    npc = 1, //npc
    guild = 2,// 公会
    player = 3,// 玩家
}

export enum TaskState {
    Normal = 0,//进行中
    Complete = 1,//已达成,未领奖
    Finish = 2,//已完成,已领奖
    Failure = 3,//任务失败
}

export enum TeamState {
    Idle = 0,// 默认状态
    Dispatch = 1,//派遣中
    Fighting = 2, //战斗中
    Dead = 3,//全灭
}

export enum TLPlayState {
    Wait = 0, // 等待开放A
    Open = 1, // 开放中
    Close = 2, // 已关闭,数据未清理
}

