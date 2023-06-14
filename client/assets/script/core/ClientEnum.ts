import { TLPlayState } from "./ServerEnum";

// cc.exports.Enum {}
// Enum { }

// local status, msg =
//     xpcall(
//         function ()
//         require "app.core.ServerEnum"
//     end,
//         function (error)
//         // body
//     end
//     )
// if not status then
// print(msg)
// end

//服务器环境标志，true为客户端，false为服务器
// export enum isServer = true

//BUFF堆叠类型：
export enum STACKTYPE {
    TOGETHER = 1,    //共存
    ADD = 2,    //叠加
    MUTUAL = 3,    //互斥（一般针对特殊BUFF）
}

export enum BATTLE_VALUE {
    MISS_MAX_V = 0.4,       //闪避最高权值
    BLO_MAX_V = 0.35,       //格挡最高权值
    CRI_MAX_V = 0.45,       //暴击最高权值
    MAX_ANG = 100,          //怒气上限
    CAN_SKILL = 100,        //技能释放的怒气值
    //怒气计算参数
    ANG_A = 50,             //怒气系数A：初始基础怒气
    ANG_B = 25,             //怒气系数B：每次普攻固定增长怒气
    ANG_C = 5,              //怒气系数C：受到大招、普攻、时装技攻增长固定怒气
    ANG_D = 5,              //怒气系数D：受到大招、普攻时，如果暴击，增长固定怒气
    ANG_E = 25,             //怒气系数E：击杀目标，额外恢复怒气
    ANG_G = 25,             //怒气系数G：每回合结束基础怒气


}

//攻击类型（1普攻；2主动技能；3所有攻击）
export enum ATTACK_TYPE {
    ALL = 1,
    NORMAL = 2,
    SKILL = 3,
}

export enum SKILL_TYPE {
    SKILL_NONE = 0,         //非英雄技能
    SKILL_MAIN = 1,         //主动技能
    SKILL_PASS1 = 2,        //被动技能1
    SKILL_PASS2 = 3,        //被动技能2
    SKILL_PASS3 = 4,        //被动技能3
    ATT_NORMAL = 50,        //普攻
    SKILL_LORDER = 90,      //主角技能
    EX_ATK = 101,           //追击普攻（不产生能量）
    EX_SKL = 102,           //追击技能（不产生能量
}

//真实伤害类型
export enum READ_DMG_TYPE {
    NORMAL = 1,        //普攻
    SKILL = 2,        //技能
    DOT = 3,        //持续伤害
    RE_ATT = 4,        //反击
    ASS_ATT = 5,        //助攻
}

export enum ATT_VALUE {
    masterDamageRate = 1,       //主角伤害率
    atkDamageRate = 1,          //普攻伤害率
    skillDamageRate = 6,        //技能伤害率
    skillAdd = 1,               //技能伤害加成
    dotDamageRate = 3,          //持续伤害率
    counterAtkDamageRate = 1,   //反弹伤害率
    assistDamageRate = 1,       //助攻伤害率
    realDamage = 0.7,           //真实伤害常数
    realDamageRate = 1,         //真实伤害率
    masterAnger = 25,           //主角回合怒气
    masterAngerAdd = 5,         //主角回复怒气：友方角色释放技能增长固定怒气
}

//atkDamageRate/skillDamageRate+ SklAdd）/dotDamageRate/counterAtkDamageRate/assistDamageRate
// export enum ATT_VALUE.hurtFactor = ATT_VALUE.dotDamageRate / ATT_VALUE.counterAtkDamageRate / ATT_VALUE.assistDamageRate
// export enum ATT_VALUE.hurtFactor = ATT_VALUE.atkDamageRate / (ATT_VALUE.skillDamageRate + ATT_VALUE.skillAdd)

export enum HURT_TYPE {
    NORMAL = 1,          //普通伤害
    PHYSICS = 2,          //流血伤害
    MAGIC = 3,          //回响伤害
    DOT = 4,          //灼烧伤害
    REAL = 5,          //真实伤害
    ROLE = 6,          //主角伤害
}

export enum MODEL_SCALE {
    // [1] = 0.95,
    // [2] = 0.85,
    // [3] = 1,
    // [4] = 0.9,
    // [5] = 0.8,
    // [6] = 0.9,
}

//以中心点左右偏移
export enum BATTLE_POS {
    // [1] = {
    //     [1] { x = -218, y = -255 },
    //     [2] { x = -156, y = -93 },
    //     [3] { x = -454, y = -287 },
    //     [4] { x = -378, y = -145 },
    //     [5] { x = -318, y = -33 },
    //     [6] { x = -550, y = -33 },
    // },
    // [2] = {
    //     [1] { x = 218, y = -255 },
    //     [2] { x = 156, y = -93 },
    //     [3] { x = 454, y = -287 },
    //     [4] { x = 378, y = -145 },
    //     [5] { x = 318, y = -33 },
    //     [6] { x = 550, y = -33 },
    // }
}

export enum BUFF_TRIGGER {
    BattleStart = 1001,   //固定触发	开场触发
    Round = 1002,   //固定触发	回合开始触发
    SkillStart = 1003,   //固定触发	技能开始触发
    Hit = 1004,   //条件触发	命中触发
    BeHit = 1005,   //条件触发	被命中触发
    Block = 1006,   //条件触发	格挡触发
    BeBlocked = 1007,   //条件触发	被格挡触发
    Crit = 1008,   //条件触发	暴击触发
    BeCrited = 1009,   //条件触发	被暴击触发
    HpChange = 1010,   //条件触发	血量变化触发
    HpUp = 1011,   //条件触发	血量上升触发
    HpDown = 1012,   //条件触发	血量下降触发
    Death = 1013,   //[全局]条件触发	自身死亡触发
    Kill = 1014,   //条件触发	击杀触发
    CauseDamage = 1015,   //条件触发	造成伤害触发
    BeDamaged = 1016,   //条件触发	受到伤害触发
    SkillEnd = 1017,   //条件触发	技能结束触发
    BuffRemove = 1018,   //条件触发	该buff移除时触发
    BuffAdd = 1019,   //条件触发	该buff挂载时便触发
    Attack = 1020,   //条件触发	攻击触发
    SkillAttack = 1021,   //条件触发	主动技能攻击触发
    NormalAttack = 1022,   //条件触发	普通攻击触发
    BeBuffAdd = 1023,   //条件触发	被挂载buff时触发
    BeControl = 1024,	  //条件触发	被控制时触发
    FriendDied = 1025,	  //条件触发	友方角色死亡时触发
    EnemyDied = 1026,	  //条件触发	敌方死亡时触发
    BeAttack = 1027,	  //条件触发	被攻击时触发
    AttackEnd = 1028,	  //条件触发	攻击结束触发
    SkillAttackEnd = 1029,	  //条件触发	主动技能攻击结束触发
    NormalAttackEnd = 1030,	  //条件触发	普通攻击结束触发
    BeLethalDamage = 1031,	  //条件触发	受到致死伤害时触发
    CauseDamageBefore = 1032,   //条件触发	造成伤害前触发（包含dot）
    BeNormalAttack = 1033,   //条件触发	被普攻时触发
    BeSkillAttack = 1034,   //条件触发	被技能攻击触发
    Rebirth = 1035,   //条件触发	友方角色重生时触发
    NormalAttacBeStart = 1036,	  //条件触发	普通攻击技能进行前触发
    RoundEnd = 1037,	  //条件触发	回合结束触发
    BePetrifaction = 1038,   //条件触发	被石化触发
    BeBind = 1039,   //条件触发	被束缚触发
    ReleaseTreat = 1040,   //条件触发	释放治疗技能触发
    CauseReboundDamage = 1041,   //条件触发	造成反弹伤害时
    DotEnd = 1042,   //条件触发	dot结束触发
    SurvivalNumChange = 1043,   //条件触发	友方角色生存数量变化时（包括开场）
    EnemyNumChange = 1044,   //条件触发	敌方角色生存数量变化时（包括开场）
    BeDebuff = 1045,   //条件触发	被附加异常状态触发
    Evade = 1046,	  //条件触发	触发闪避时
    BeEvade = 1047,   //条件触发	被闪避时（自身攻击被闪避）
    MasterDead = 1048,	  //条件触发	友方法师职业武将阵亡时
    FriendsBeNormalAttack = 1049,	  //条件触发	友方武将被普攻触发
    FriendsBeLethalDamage = 1050,	  //条件触发	友方武将受到致死伤害触发
    BeManDamaged = 1051,	  //条件触发	受到男性伤害触发
    BeWomanDamaged = 1052,	  //条件触发	受到女性伤害触发
    BeHypnosis = 1053,	  //条件触发	被沉睡触发
    BeDot = 1054,	  //条件触发	友方武将被挂载dot触发
    FriendsAttack = 1055,	  //条件触发	友方武将攻击触发
    FriendsBeNADamage = 1056,	  //条件触发	友方武将被普攻伤害触发
    FirstAttack = 1057,	  //条件触发	每场战斗首次攻击后触发
    NormalAttackHit = 1058,   //条件触发	普通攻击命中后触发
    FirstKill = 1059,	  //条件触发	友方阵容首次击杀触发
    ZhuoShaoEnd = 1060,	  //条件触发	灼烧结束触发

    Halo = 1100,   //固定触发	光环触发
    SignDead = 1101,	  //条件触发	标记死亡触发（黄忠化境1）
    DeathTwoRounds = 1102,	  //条件触发	死亡2回合后触发（华佗青囊）
    DiewuRemove = 1103,	  //条件触发	蝶舞被驱散或消失触发（黄舞蝶）
    SecondDead = 1104,	  //条件触发	友方第二名角色死亡时触发（黄舞蝶化境）
    TotalLife40 = 1105,	  //条件触发	己方所有武将总生命低于40%触发
    KillWizard = 1106,	  //条件触发	击杀巫师武将触发
    ShensuMount = 1107,	  //条件触发	挂载神速时触发
    EnemyHealing = 1108,	  //条件触发	敌方释放治疗技能或生命吸取时
    EnemyHpLess50 = 1109,	  //条件触发	敌方每有1名武将生命首次低于50%时
    XinyinChange = 1110,	  //条件触发	心印变化时
    Dead3Times = 1111,	  //条件触发	第3次死亡触发
    DouqiChange = 1112,   //条件触发	豆萁层数变化时	豆萁buffid：170025
    HujiaEnd = 1113,   //条件触发	胡笳消耗或持续时间结束时	胡笳buffid：910004
    HujiaLoad = 1114,   //条件触发	胡笳挂载时触发	胡笳buffid：910004
    FirstXQDead = 1115	  //条件触发	友方第一名先遣角色阵亡时触发

}

//禁怒类型参数：
export enum NO_ANG {
    ALL = 1,            //1、所有怒气恢复
    ATTACK = 2,         //2、普攻怒气
    SKILL = 3,          //3、技能怒气
    HIT = 4,            //4、受击怒气
    ROUND = 5           //5、回合结束时怒气恢复
}

export enum STATE_TYPE {
    ATTR = 1,	                //修改属性	修改属性
    ADD_HURT_PER = 2,	        //增伤作用于计算伤害，默认生效1次
    ATT_TIMES_VAMPIRE = 3,      //单次吸血
    ATT_TIMES_CRI = 4,	        //增加单次暴击
    ATT_TIMES_BOG = 5,	        //增加单体破格
    ATT_TIMES_IGNORE_ARM = 6,	//单次无视护甲
    ATT_TIMES_MISS = 7,	        //增加单次闪避
    ATT_TIMES_DMGADD = 8,	    //增伤单次
    ATT_TIMES_NUM_PER = 9,	    //根据攻击目标数量递减单次增伤
    VAMPIRE = 20,	            //吸血	参数1（吸血类型）；参数2（吸血百分比）


    ATTR_VALUE_BY_NUM = 50,	//修改属性*目标筛选器（筛选选定目标数量）
    CHANGE_HP_ATTR = 51,   //当前损失生命值附加属性
    CHANGE_ATTR_CAMP = 52,	//根据阵营不同修改属性
    ATT_TIMES_HP_DMGADD = 53,	//根据目标血量百分比单次增伤
    CHANGE_ATTR_NUMS = 54,	//根据敌方武将数量修改属性

    TRANSFER_ATTR = 56,   //转移释放者属性
    ATTR_BY_NUM = 57,	//根据指定buff层数获得属性加成

    HURT = 100,	                //伤害	直接伤害
    DOT = 101,	                //dot	伤害dot
    SPLASH = 102,	            //伤害	伤害溅射
    DOT_HURT_BY_ATTR = 107,	    //dot（根据被挂载者属性算）	伤害dot
    MAIN_ROLE_HURT = 110,	    //主角伤害	直接伤害
    HURT_SELF = 111,	        //自损伤害	为一种特殊直接伤害，可触发伤害相关触发
    HURT_REVERT = 112,	        //反弹伤害	"伤害计算：受到伤害值Dmg*反弹伤害率*反弹伤害常数（不受任何减伤影响）
    HURT_REVERT_VALUE = 113,	//基于反弹伤害的伤害	自身反弹产生的伤害*伤害百分比
    HURT_BY_ALL_DMG = 114,      //基于持续伤害量给予伤害	持续伤害造成的总伤害*伤害百分比（不会经过任何增减伤运算的直接伤害）
    HURT_LAST_PER = 115,        //基于攻击伤害量给予伤害	上次普攻造成伤害*伤害百分比（不会经过任何增减伤运算的直接伤害）
    HURT_ATTR_BY_FROMER = 116,	//根据选定目标释放追击伤害	属性来源基于技能释放者，但是播放选定目标角色的普攻动画，触发选定目标的相关触发（技能攻击触发）
    HURT_NUM_PER = 117, 	    //随机伤害	直接伤害

    ANG_HURT = 131,	            //根据目标怒气不足以被扣除折算伤害	造成伤害=参数1*伤害百分比
    HURT_BY_CAIWJ = 132, 	    //伤害（属性来源蔡文姬）	直接伤害
    TREAT = 140,	            //治疗	根据某属性算的治疗
    TREAT_PERCENT = 141,	        //治疗生命上限百分比
    TREAT_BY_NUM = 142,	        //治疗（根据友方吴国武将数量提升治疗量）	根据某属性算的治疗
    TREAT_ATTR = 143,	        //治疗（根据被挂载者属性算）	根据某属性算的治疗
    TREAT_BY_REVERT = 144,	    //治疗（根据造成的反弹伤害折算）	造成的反弹伤害*治疗百分比	治疗百分比
    TREAT_BY_HURT = 145,	    //治疗（根据友方上次受到的伤害折算）	友方上次受到伤害*治疗百分比	治疗百分比
    TREAT_TARGET_ATTR = 146,    //治疗	根据产生治疗
    TREAT_BY_ROUND_NUM = 147,	//治疗（根据当前回合数及生命上限百分比计算）	治疗量=生命上限百分比*当前回合数
    TREAT_BY_TREAT_NUM = 148,   //治疗	治疗（根据释放者治疗量一定百分比计算）


    SHIELD = 160,	            //护盾	护盾根据某属性附加护盾值/以固定值附加
    SHIELD_ATTR = 161,	        //护盾（根据被挂载者属性算）	护盾根据某属性附加护盾值/以固定值附加


    STUN = 200,	                //控制	眩晕(无法出手,浪费一次机会)
    SLEEP = 201,	            //控制	沉睡(无法出手,浪费一次机会,免疫其他任何效果)
    PERTRIFIED = 202,	        //控制	石化(无法出手,浪费一次机会)
    SILENT = 203,	            //控制	沉默(只可普攻)
    CHARM = 204,	            //控制	魅惑
    SHACKLES = 206,	            //控制	束缚(公孙绿萼的技能)
    FEAR = 208,	                //控制	恐惧(无法使用技能,禁止主动触发技能,dot等除外)
    TIRED = 209,	            //控制	疲惫（无法获得任何怒气)
    SEAL = 210, 	            //控制	封印（触发类技能无法生效）
    DECLINE = 211,	            //控制	衰败（主动被动技能失效）
    ICE_CONTROL = 212,	        //控制	冰封（无法施放技能，无法获得怒气）


    INTERDICTION = 230,	        //控制	禁疗(无法回血,可以加盾)
    NO_ANGER = 231,	            //控制	禁怒(怒气不再增长)
    DOT_ATT_DOWN = 232,	        //减益状态	dot易伤
    DOT_ATT_UP = 233,	        //增益状态	dot伤害减免

    NO_DEAD = 300,	            //特殊	免死(抵消致命伤害后，保留1滴血)，
    NO_STUN = 301,	            //特殊	免控制(无法被条件控制类buff)
    INVINCIBLE = 302,	        //特殊	无敌(免疫任何特效)
    AGAIN = 303,	            //特殊	再次行动(排序时无视本回合出手次数)
    STEAL_ATTR = 304,	        //特殊	偷取属性
    NO_ATTR = 305,	            //特殊	无视属性
    ADD_BUFF = 306,	            //特殊	挂载特定buff,目标为当前buff对象
    EXT_ATTACK = 307,	        //特殊	追击
    REPLACE = 308,	            //特殊	替换技能
    TRACK = 309,	            //特殊	锁定攻击某buff挂载目标（仅对单体类目标生效）
    REMOVE_ID = 310,	        //特殊	移除特定buff
    STRONG_ID = 311,	        //特殊	强化buff
    NO_HURT = 312,	            //特殊	免疫单次伤害
    CLEAN_SPE = 313,            //驱散  1随机控制 2随机dot……
    MARK = 314,	                //特殊	标记（黄忠化境1重生buff）
    MOVE = 315,	                //特殊	移除特定buff层数
    ADD_TARGET_BUFF = 316,	    //特殊	挂载特定buff，带目标筛选器
    REBOREN = 317,	            //特殊	复活（并回复）
    ADD_BUFF_NUM = 318,	        //特殊	指定目标挂指定层数buff
    NO_SHIELD = 319,	        //特殊	无法获得护盾
    NO_REBORN = 320,	        //特殊	无法复活
    VALUE_MUL = 321,	        //特殊	buff数值衰减
    TARGET_CHANGE = 322,	    //特殊	Buff目标修改
    XINYING = 323,              //特殊  大乔心印
    CLEAN = 324,	            //特殊	驱散


    ADD_TARGET_RANDOM_BUFF = 401,//特殊	指定目标分别随机挂buff（特殊）
    ADD_EXE_TIMES = 402,	    //特殊	指定buff未触发则提高触发概率（触发后清空增益）
    SHARE_HURT = 403,	        //特殊	选择指定目标分摊自身即将受到的伤害（若指定目标自己触发该效果则无效）
    STRONG_ADD_BUFF = 405,	    //特殊	强化buff（在原有基础上，附加该值）
    FORCE_START_BUFF = 406,     //特殊	触发指定目标身上的指定buff（无视条件，若目标buff已经触发则无视）
    CHANGE_BUFF = 407,	        //特殊	替换buff	目标选择器id	buffid1（被替换buff）	buffid2（替换后的buff）
    STRONG_DOT_BUFF = 408,      //特殊	强化buff（强化随机dot）
    ADD_RANDOM_BUFF = 409,	    //特殊	指定目标随机挂buff（从选中的目标中，每个目标依次从所有参数的buff中随机1个出来挂）
    REMOVE_BUFFID_SEL = 410,	//特殊	移除指定目标buff	目标选择器id
    STRONG_BY_WU_NUM = 411,     //特殊	强化buff（根据当前友方吴国武将数量，增加对应值）

    EXTEND_ANG = 901,           //继承自身复活角色怒气
    COPY_DOT_TO_SELF = 902,	    //特殊	复制dot（复制指定角色技能buff池中的随机一个dot，挂给他自身。数值成长都保持不变。仅限：【流血】、【回响】、【灼烧】三种类型的dot）
    ADD_HP_S_HERO = 903,	    //特殊	带来洞主恢复等量血量（木鹿大王被动3）
    CHANGE_XIN_YIN = 904,	    //特殊	大乔buff切换（检查身上已触发buff，触发切换为另一buff）
    REMOVE_XIN_YIN = 905,	    //特殊	大乔buff移除+切换（检查身上已触发buff，触发移除并切换为另一buff）
    STRONG_PROB_BUFF = 906,	    //特殊	（虚构1）攻击每低于击杀者一定比例则降低固定buff触发概率
    CLEAN_CONTROL_RD = 907,	    //特殊	免疫最近的一次控制

}

//控制buff
export enum CONTROL_BUFF {
    // STATE_TYPE.STUN,
    // STATE_TYPE.SLEEP,
    // STATE_TYPE.PERTRIFIED,
    // STATE_TYPE.SILENT,
    // STATE_TYPE.CHARM,
    // STATE_TYPE.SHACKLES,
    // STATE_TYPE.FEAR,
    // STATE_TYPE.TIRED,
    // STATE_TYPE.SEAL,
    // STATE_TYPE.DECLINE,
    // STATE_TYPE.ICE_CONTROL,


    // STATE_TYPE.INTERDICTION,
    // STATE_TYPE.NO_ANGER
}

export enum SKILL_TARGET {
    SIGNAL_ARM = 1,    //敌方单体
    ALL_ARM = 2,    //敌方全体
    FRONT_ARM = 3,    //敌方前排
    BACK_ARM = 4,    //敌方后排
    RANDOM_ARM = 5,    //敌方随机
    MAX_HP_ARM = 6,    //敌方生命最高
    MINI_HP_ARM = 7,    //敌方生命最低
    MAX_DEF_ARM = 8,    //敌方护甲最高
    MINI_DEF_ARM = 9,    //敌方护甲最低
    MAX_ATK_ARM = 10,   //敌方攻击最高
    MINI_ATK_ARM = 11,   //敌方攻击最低
    MAX_ARG_ARM = 12,   //敌方怒气最高
    MINI_ARG_ARM = 13,   //敌方怒气最低
    MAX_SPD_ARM = 14,   //敌方速度最高
    MINI_SPD_ARM = 15,   //敌方速度最低
    MAX_DMG_ARM = 16,   //敌方对自己伤害最高
    POS_1_ARM = 17,   //敌方1号位
    POS_2_ARM = 18,   //敌方2号位
    POS_3_ARM = 19,   //敌方3号位
    POS_4_ARM = 20,   //敌方4号位
    POS_5_ARM = 21,   //敌方5号位
    SPD_BUFF_ARM = 22,   //敌方对特殊buff状态的目标
    FRONT_MAX_HP_ARM = 23,	//敌方前排生命最高
    FRONT_MINI_HP_ARM = 24,	//敌方前排生命最低
    FRONT_MAX_DEF_ARM = 25,	//敌方前排护甲最高
    FRONT_MINI_DEF_ARM = 26,	//敌方前排护甲最低
    FRONT_MAX_ATK_ARM = 27,	//敌方前排攻击最高
    FRONT_MINI_ATK_ARM = 28,	//敌方前排攻击最低
    FRONT_MAX_ANG_ARM = 29,	//敌方前排怒气最高
    FRONT_MINI_ANG_ARM = 30,	//敌方前排怒气最低
    FRONT_MAX_SPD_ARM = 31,	//敌方前排速度最高
    FRONT_MINI_SPD_ARM = 32,	//敌方前排速度最低
    FEMALE_ARM = 33,	//敌方女性
    MALE_ARM = 34,	//敌方男性
    FRONT_RD_ARM = 35,	//敌方前排随机
    BACK_RD_ARM = 36,	//敌方后排随机
    RANDOM_2_ARM = 37,	//敌方随机2个
    RANDOM_3_ARM = 38,	//敌方随机3个
    RANDOM_4_ARM = 39,	//敌方随机4个
    ALL_camp_1_ARM = 40,	//敌方全体魏国角色
    ALL_camp_2_ARM = 41,	//敌方全体蜀国角色
    ALL_camp_3_ARM = 42,	//敌方全体吴国角色
    ALL_camp_4_ARM = 43,	//敌方全体群雄角色
    HERO_TYPE_1_ARM = 44,	//敌方先遣职业角色
    HERO_TYPE_2_ARM = 45,	//敌方秘术职业角色
    HERO_TYPE_3_ARM = 46,	//敌方绝异职业角色
    HERO_TYPE_4_ARM = 47,	//敌方宿卫职业角色
    HERO_TYPE_5_ARM = 48,	//敌方启迪职业角色
    HERO_NO_TYPE_1_ARM = 49,   //敌方非先遣职业角色
    HERO_NO_TYPE_2_ARM = 50,   //敌方非秘术职业角色
    HERO_NO_TYPE_3_ARM = 51,   //敌方非绝异职业角色
    HERO_NO_TYPE_4_ARM = 52,   //敌方非宿卫职业角色
    HERO_NO_TYPE_5_ARM = 53,   //敌方非启迪职业角色
    BACK_RANDOM_1_ARM = 54,	//敌方后排随机1个
    BACK_RANDOM_2_ARM = 55,	//敌方后排随机2个
    BACK_MAX_HP_ARM = 56,	//敌方后排生命最高
    BACK_MINI_HP_ARM = 57,	//敌方后排生命最低
    BACK_MAX_DEF_ARM = 58,	//敌方后排护甲最高
    BACK_MINI_DEF_ARM = 59,	//敌方后排护甲最低
    BACK_MAX_ATK_ARM = 60,	//敌方后排攻击最高
    BACK_MINI_ATK_ARM = 61,	//敌方后排攻击最低
    BACK_MAX_ANG_ARM = 62,	//敌方后排怒气最高
    BACK_MINI_ANG_ARM = 63,	//敌方后排怒气最低
    BACK_MAX_SPD_ARM = 64,	//敌方后排速度最高
    BACK_MINI_SPD_ARM = 65,	//敌方后排速度最低
    TARGET_ROUND_ARM = 66,	//敌方随机目标及其周围
    HP_PERSENT_3_ARM = 67,	//生命百分比最高3名角色
    RD_FT_BACK_ALL_ARM = 68,   //敌方随机前排或后排所有目标
    RD_FRONT_BACK_ARM = 69,	//敌方前排随机1目标及后排随机1目标
    MAX_POWER_ARM = 70,	//敌方战力最高目标
    DOT_GAIN_RANDOM_ARM = 73,   //拥有增益buff的敌方随机


    SELF = 100,  //自己
    NONE = 101,  //无目标
    ALL = 102,  //双方全体
    ALL_OUT_MY = 103,  //双方全体除自己
    ALL_FREND = 104,  //友方全体
    ALL_FRD_OUT_MY = 105,  //友方除自己
    FRONT_FRD = 106,  //友方前排
    BACK_FRD = 107,  //友方后排
    RANDOM_FRD = 108,  //友方随机
    MAX_HP_FRD = 109,  //友方生命最高
    MINI_HP_FRD = 110,  //友方生命最低
    MAX_DEF_FRD = 111,  //友方护甲最高
    MINI_DEF_FRD = 112,  //友方护甲最低
    MAX_ATK_FRD = 113,  //友方攻击最高
    MINI_ATK_FRD = 114,  //友方攻击最低
    MAX_ARG_FRD = 115,  //友方怒气最高
    MINI_ARG_FRD = 116,  //友方怒气最低
    MAX_SPD_FRD = 117,  //友方速度最高
    MINI_SPD_FRD = 118,  //友方速度最低
    FOLLOW_SELF_NATK = 119,	//自身普攻目标
    FOLLOW_SELF_SKILL = 120,	//自身技能目标
    FOLLOW_SELF_ATK = 121,	//自身攻击目标
    FEMALE_FRD = 122,	//友方女性
    MALE_FRD = 123,	//友方男性
    HERO_TYPE_1_FRD = 124,	//友方先遣职业角色
    HERO_TYPE_2_FRD = 125,	//友方秘术职业角色
    HERO_TYPE_3_FRD = 126,	//友方绝异职业角色
    HERO_TYPE_4_FRD = 127,	//友方宿卫职业角色
    HERO_TYPE_5_FRD = 128,	//友方启迪职业角色
    FRONT_RANDOM_FRD = 129,	//友方前排随机
    BACK_RANDOM_FRD = 130,	//友方后排随机
    CAMP_1_ALL_FRD = 131,	//友方全体魏国角色
    CAMP_2_ALL_FRD = 132,	//友方全体蜀国角色
    CAMP_3_ALL_FRD = 133,	//友方全体吴国角色
    CAMP_4_ALL_FRD = 134,	//友方全体群雄角色
    CAMP_1_RANDOM_FRD = 135,	//友方随机蜀国1名角色
    NOT_CAMP_1_FRD = 136,	//友方非魏国角色
    NOT_CAMP_2_FRD = 137,	//友方非蜀国角色
    NOT_CAMP_3_FRD = 138,	//友方非吴国角色
    NOT_CAMP_4_FRD = 139,	//友方非群雄角色
    RANDOM_2_FRD = 140,	//友方随机2角色
    RANDOM_3_FRD = 141,	//友方随机3角色
    RANDOM_4_FRD = 142,	//友方随机4角色
    MINI_HP_2_FRD = 143,	//友方生命最低2名
    FIRST_POS_FRD = 144,	//友方站位最前的目标
    RANDOM_NO_SELF_FRD = 145,	//友方除自身外随机1
    RD_1_TYPE_4_FRD = 146,	//友方随机1骑士职业角色
    MINI_HP_TYPE_3_FRD = 147,	//友方生命最低绝异角色
    RANDOM_FEMALE_1_FRD = 148,	//友方随机1女性
    CUR_BE_ATK_FRD = 149,	//友方当前被攻击目标
    MAXNUM_TYPE_FRD = 150,	//友方上阵武将中占比最高的职业的所有武将
    CUR_ADD_DOT_FRD = 151,	//友方当前被挂载dot的角色
    BENEFIT_RANDOM_FRD = 152,  //拥有负益buff的友方随机
    RD_FEMALE_NOTME_FRD = 153,  //友方除自己外随机1女性

    //
    FOLLOW_SKILL = 200,  //跟随技能目标
    FOLLOW_ATK = 201,	//当前攻击的目标
    ATTACK_BY_ARM = 202,	//当前攻击自身的目标
    CUE_DEAD_UNIT = 203,	//当前死亡目标
    RANDOM_CUR_TARGET = 204,	//当前攻击目标随机1
    RANDOM_CUR_ANOTHER = 205,	//当前攻击选中的另一目标	用于排除204随机1目标
    FOUNT_TARGET = 206,	//除当前攻击目标外的同排其他目标
    AROUND_TARGET = 207,	//当前攻击目标周围角色
    CUR_ATK_TARGET = 208,	//当前正在进行攻击的角色
    ATK_TARGET_RD_1 = 209,	//当前攻击目标及此目标以外随机1敌方目标
    ATK_TARGET_RD_2 = 210,	//当前攻击目标及此目标以外随机2敌方目标


    NOT_CAMP_2_ALL = 301,	//场上非蜀国武将目标
    SAME_FONT = 302,	//与释放者同排目标（包括释放者）

    FOLLOW_TREAT_VAMP = 701,	//自身吸血/恢复所治疗的目标
    FOLLOW_TREAT_ARM = 702,	//敌方释放治疗或生命吸取技能的目标
    SINGLE_CAMP_1_ARM = 703,	//优先敌方魏国单体目标


    DIEWU_DIS = 901,	//友方蝶舞被驱散或消失的目标
    DIEWU_DIS_RD = 902,	//友方蝶舞被驱散或消失的目标之外随机1角色

    LVBU_FRD = 905,	//友方优先吕布	无吕布则友方随机1
    ON_HUJIA_LOAD = 906,	//当前被挂载胡笳的目标	胡笳buffid：910004
    MORE_HURT_ARM = 908,	//该次攻击伤害次数最多的目标

    LVBU = 6001,	//吕布（友方）
    ZHENJI = 6004, //友方甄姬
    CAOZHI_FRD = 6017,	//曹植（友方）
    DAQIAO_FRD = 6018,	//大乔（友方）
    YANLIANG_FRD = 6045,	//颜良(友方)
    WENCHOU_FRD = 6049,	//文丑(友方)
    DAILAIDONGZHU_FRD = 6083, //带来洞主（友方）
    CAIWENJI_FRD = 6091, //蔡文姬（友方）
}

//战斗飘字类型
export enum BAT_TEXT {
    MOVE = 1,           //1行动前
    ATTACK = 2,         //2开始攻击
    ON_HIT_ONE = 3,     //3第一个打击点后
    ON_HIT = 4,         //4跟随打击点（与跳字拆分例对应）
    ON_HIT_END = 5,     //5最后一个打击点后
    BACK = 6,           //6攻击后回到原位
    ROUND_BEGIN = 7,    //7回合开始
    ROUND_END = 8,      //8回合结束
    ON_ANI_HIT = 9,     //9被击动画时
    ON_ATT = 10,        //10攻击动画击中时
    ON_CONTROL = 11,    //11被控制
    ON_DOT = 12,        //12被上dot
}

export enum SEX {
    MALE = 1,
    FEMALE = 2,
}

// 职业
export enum JOB {
    ALL = 0,        // 所有职业
    MASTER = 1,        //先遣
    KNIGHT = 2,        //秘术
    FIGHTER = 3,        //绝异
    RANGER = 4,        //宿卫
    WIZARD = 5,        //启迪
}

export enum JOB_RES {
    // [1] = "ui_zhandou_zhiye_icon1",
    // [2] = "ui_zhandou_zhiye_icon2",
    // [3] = "ui_zhandou_zhiye_icon3",
    // [4] = "ui_zhandou_zhiye_icon4",
    // [5] = "ui_zhandou_zhiye_icon5",
}

export enum ModelUseType {
    Battle = 1,
    Embattle = 2,
    March = 3,
}

export enum SOCKET_STATE {
    Connecting = 0,
    ConnectTimeOut = 1,
    Connected = 2,
    SocketError = 3,
}

//提示方式(计位):1请求返回结果,2绿字提示,4跑马灯,8喇叭,16系统频道,32公会频道,64世界频道,128弹窗提示
export enum ServerErrorType {
    Return = 1,
    Tips = 2,
    HorseRaceLamp = 4,
    Horn = 8,
    ChannelSystem = 16,
    ChannelGuild = 32,
    ChannelWorld = 64,
    Dialog = 128,
}

export enum UnitFaction {
    Attacker = 1,
    Defender = 2,
}

export enum UnitDirection {
    Up = 'shang',
    LeftUp = 'youshang',
    Left = 'you',
    LeftDown = 'youxia',
    Down = 'xia',
    RightDown = 'zuoxia',
    Right = 'zuo',
    RightUp = 'zuoshang',
}

export enum GotoType {
    UpdateScene = "UpdateScene",
    LoginScene = "LoginScene",
    WorldScene = "WorldScene",
    BattleScene = "BattleScene",
}

export enum UnitState {
    Idle = "stand",
    Hit = "hit",
    Skill = "skill",
    Vertigo = "vertigo",
    Attack = "attack",
    Stone = "stand",
    Die = "die",
    Run = "run",
}

export enum SeasonTabType {
    Exits = 1, //存在
    Server = 2, //服务器列表
}

export enum ServerState {
    Normal = 1, //正常
    Maintain = 2, // 维护
}

export enum ServerState1 {
    Recommend = 1, //推荐
    New = 2, // 新
}

export enum ServerFlag {
    Full = 1, //爆满
    Crowd = 2, //拥挤
    Fluent = 3, //流畅
}

//倒计时界面
export enum LoginCodeType {
    LoginWithPhone = 1,
    ResetPass = 2,
    RegisterAccount = 3,
    BindPhone = 4,
}

//渐变类型
export enum GradientType {
    Title = 1, //标题
    Custom = 99,
}

export enum CreateNewTap {
    Role = 1,
    Select = 2,
    reset = 3
}

export enum InputLengthType {
    PlayerName = "playerNameNumMax",
    Talk = "talkWords",
}

export enum PoolItem {
    ItemFrame = "ItemFrame",
    MartialFrame = "MartialFrame",
    NewHeroListTileItem = "NewHeroListTileItem",
}

export enum ItemType {
    HeroFrag = 13, // 武将碎片
    Hero = 5, // 武将
    Exp = 4, // 经验书
    ChooseBox = 19,// 可选宝箱
    Spirit = 16,// 精神
    ExpMartial = 35,// 精神经验道具
    LiveGift = 36,// 直播间礼物
    gem = 33,// 主角宝石
}

export enum ItemUIType {

}

export enum ResourceType {
    Gold = 7, //黄金
    GiftCard = 8, //礼券
}

// currencyDisplay表（货币显示类型表）对应的界面(key 界面，v id)
// export enum GoodsTypeForView {
//     ["Default"] = 1, // 默认类型（进入游戏默认的，非界面，调用而已）
//     ["MainUIView"] = 1,
//     ["BagView"] = 1,
//     ["MailMain"] = 1,
//     ["GuildView"] = 1,
//     ["GuildListView"] = 1,
//     ["GuildDonateView"] = 1,
//     ["GuildBossMainView"] = 1,
//     ["RoleMainView"] = 1,
//     ["RoleSkillMapView"] = 8,
//     ["RoleUnlockSkillMapView"] = 8,
//     ["RoleEquipMainView"] = 1,
//     ["PveBattlefieldScavengeView"] = 1,
//     ["DrawCardMainView"] = 1,
//     ["DrawCardResultView"] = 1,
//     ["DrawCardGetHeroView"] = 1,
//     ["DrawCardArriveResultView"] = 1,
//     ["DrawCardAdmireListView"] = 1,
//     ["CollegeMainView"] = 1,
//     ["CollegeJoinView"] = 1,
//     ["ScoreMatchMainView"] = 1,
//     ["HonourPkMainView"] = 1,
//     ["TopMatchMainView"] = 1,
//     ["MainCopyMainView"] = 1,
//     ["MainCopyView"] = 1,
//     ["ShopMainView"] = 1,
//     ["RankListView"] = 1,
//     ["PvpMainView"] = 1,
//     ["HeroCollectMainView"] = 1,
//     ["ArenaMainView"] = 1,
//     ["HomeMainView"] = 1,
//     ["HomeAstronomyView"] = 1,
//     ["HomeBodyView"] = 1,
//     ["LimitFunMainView"] = 1,
//     ["LimitWuJueMainView"] = 1,
//     ["GodTrialMainView"] = 1,
//     ["ThreeNightmaresMainView"] = 1,
//     ["AuctionMainView"] = 1,
//     ["PaperWarsMainView"] = 1,
//     ["WuDaoMainView"] = 20,
//     ["NewHeroDetailView"] = 1,
//     ["NewHeroSpiritGUPView"] = 1,
//     ["LiveMainView"] = 1,
//     ["NewCampMainView"] = 1,
//     ["BuildMainView"] = 1,
//     ["FitnessMainView"] = 1,
//     ["TaskMainView"] = 1,
//     ["ClubMainView"] = 1,
//     ["NewHeroListView"] = 1,
//     ["ResonanceView"] = 1,
//     ["SenseGemView"] = 1,
//     ["NewCityWarMainView"] = 1,
//     ["FriendMainView"] = 1,
//     ["NewHeroMartialDevelopView"] = 1,
//     ["NewGodTrialMainView"] = 1,
// }

// 首页功能按钮类型
export enum MainBtnType {
    RightBottomBtn = 1,
    LeftBottomBtn = 2,
    LeftTopBanner = 3,
    RightTopBtn = 4,
    RightBanner = 5,
    OffeceBtn = 7,
    MenuBtn = 8,
    FloatBtn = 9,
}

// 首页功能按钮ID
export enum MainBtnId {
    Office = 100,  // 办公室
    Hero = 101,  // 英雄
    Bag = 102,  // 背包
    Braces = 103,  // 好感(社交)
    Garden = 104,  // 社团
    College = 105,  // 学院
    Guild = 106,  // 联盟
    Role = 107,  // 监察官
    Train = 108,  // 培养
    DrawCard = 401,  // 招募
    Shop = 402,  // 商店
    Auction = 403,  // 拍卖
    Mail = 500,  // 邮件
    Notice = 501,  // 公告
    AchieTask = 502,  // 成就任务
    Fashion = 507,  // 时装图鉴
    Rank = 503,  // 排行榜
    Book = 504,  // 功能手册
    More = 506,  // 更多
    Charge = 600,  // 充值
    FirstCharge = 601,  // 首充
    Welfare = 602,  // 福利
    Activity = 603,  // 活动
    LimitShop = 604,  // 限时商店
    PveTeam = 701,  // 协同作战

    ////-首页固定位置功能////-
    Task = 10001, // 任务
    MainCopy = 10002, // 副本
    Pve = 10003, // Pve
    Pvp = 10004, // Pvp
    Limit = 10005, // 限时玩法入口
    CityWar = 10006, // 城战
    Chat = 10007, // 聊天
    MainTask = 10008, // 主线任务
}

// 首页功能入口状态
export enum MainBtnState {
    Hide = 1,
    Lock = 2,
    Show = 3,
}

// 部分功能开启ID
export enum OpenFuncID {
    Role = 2100, // 主角
    Hero = 2200, // 武将
    HeroLevel = 2201, // 升级
    HeroAdvance = 2202, // 进阶
    HeroStar = 2203, // 升星
    HeroSkill = 2204, // 技能
    HeroFetter = 2205, // 羁绊
    HeroEquip = 2206, // 天命
    HeroMartial = 2207, // 精神
    HeroFashion = 2211, // 天启时装
    HeroCollect = 2230, // 武将
    WuDao = 2240, // 思悟
    Item = 2300, // 背包
    Social = 2400, // 社交
    Club = 2500, // 社团
    Fitness = 2501, // 健身房
    Build = 2502, // 园艺社
    Live = 2503, // 直播间
    BuyResources = 2511, // 资源购买
    Guild = 2700, // 公会
    CreateGuild = 7501, // 创建公会
    CityWar = 2702, // 城战
    MainCopy = 3100, // 副本
    MainCopyAutoFight = 3102, // 主线副本自动推图
    Pve = 3200, // Pve
    ThreeNightmares = 3202, // 三国梦演
    GodTrial = 3203, // 青梅煮酒
    TeamPve = 3205, // 协同作战
    Pvp = 3300, // Pvp
    Arena = 3301, // 竞技场
    Knife = 3302, // 试刀大会
    Peak = 3303, // 巅峰对决
    Best = 3304, // 天下第一
    Heros = 3305, // 冠绝群雄
    Tournament = 3306, // 比武论道
    Limit = 3400, // 限时玩法入口
    Task = 3500, // 编队
    MainTask = 3504, // 主线任务
    Helper = 3600, // 日常任务助手
    DrawCard = 4100, // 抽卡
    Fashion = 5114, // 皮肤图鉴
    Chat = 7001, // 聊天
}

// 部分货币ID
export enum ItemId {
    Copper = 1,   // 银光币
    Gold = 2,   // 星光币
    Grass = 3,   // 面包果
    DailyTaskActive = 4,   // 每日活跃度
    Intimate = 5,   // 亲密值
    RoleExp = 100, // 玩家经验
    GuildExp = 300, // 公会经验
    Energy = 500, // 体力
    GuildPoint = 701, // 协会战绩
    ConsciousPoint = 1202, // 神识点数
    HightExpBook = 1903,// 高级经验书
}

// 非战斗属性
export enum NonCombatAttrID {
    DailyGold = 100, // 每日奖励元宝
    WarRelalive = 200, // 帮战复活次数
    GuildMail = 201, // 公会邮件次数
    AddFeats = 300, // 城战功勋加成
    CoinOutput = 401, // 社团银光币产出
    FoodOutPut = 402, // 社团面包果产出
    IronOutPut = 403, // 社团血魂石产出
    CoinMax = 404, // 社团银光币上限
    FoodMax = 405, // 社团面包果上限
    FoodOutputRate = 408, // 社团面包过产出加成
    IronOutputRate = 409, // 社团银光币产出加成
}

// 战斗属性
export enum CombatAttrID {
    Atk = 7,
    Hp = 8,
    Arm = 9,
}
////////////////////////武将////////////////////////////-
// 武将类型
export enum HeroType {
    Common = 1,// 普通
    Reaching = 2,// 至臻
}

// 品质
export enum Quality {
    White = 1,  // 白色
    Green = 2,  // 绿色
    Blue = 3,  // 蓝色
    Purple = 4,  // 紫色
    Orange = 5,  // 橙色
    Red = 6,  // 红色
    Golden = 7,  // 金色
    DarkGolden = 8,  // 暗金色
    Pink = 9,  // 粉色
    DarkPink = 10, // 暗粉色
    MultiColor = 11, // 彩色
    Dazzle = 12, // 炫彩
}

// 武将资质
export enum Potential {
    All = 0,
    C = 1,
    B = 2,
    A = 3,
    R = 4,
    SR = 5,
    SSR = 6,
    UR = 7,    //sp
}

// 阵营
export enum Camp {
    All = 0, // 所有阵营
    Wei = 1, // 魏
    Shu = 2, // 蜀
    Wu = 3, // 吴
    Qun = 4, // 群
}

// 武将状态
export enum HeroState {
    CanActive = 1, // 可激活
    YesActive = 2, // 已激活
    NotActive = 3, // 未激活
}

// 武将星星阶段
export enum HeroStarStage {
    Common = 1, // 普通星星
    Fire = 2, // 火
    TaiJi = 3, // 太极
}

// 武将升星状态
export enum HeroStarState {
    LightUp = 1, // 点亮状态
    CommonUp = 2, // 升星状态
    FireUp = 3, // 升品状态
    TaiJiUp = 4, // 升太极
}

// 技能升星状态
export enum SkillStarType {
    FirstGlimpse = 1, // 初窥
    Master = 2, // 精通
    Perfect = 3, // 化境
}

// 技能类型
export enum SkillType {
    ActiveSkill = 1,   // 主动技能
    PassiveSkill1 = 2, // 被动技能1
    PassiveSkill2 = 3, // 被动技能2
    PassiveSkill3 = 4, // 被动技能3
    FireSkill0 = 5,    // 化境技能0
    FireSkill1 = 6,    // 化境技能1
    FireSkill2 = 7,    // 化境技能2
}

// 武将部位类型
export enum PartType {
    Part1 = 1,
    Part2 = 2,
    Part3 = 3,
    Part4 = 4,
}

// 武将部位状态
export enum PartState {
    Lock = 1,  // 未解锁
    NotItem = 2,  // 道具不足
    CanCompose = 3,  // 可合成
    Composed = 4,  // 已合成
    Max = 5,
}

// 部分属性Id
export enum AttrId {
    Sta = 1, // 耐力
    Inte = 2, // 智力
    Str = 3, // 力量
}

// 属性类型
export enum AttrType {
    Integer = 1,
    Float = 2,
    Percent = 3,
}

export enum HeroHeadShowType {
    Level = 1,  // 等级
    Head = 2,  // 头像
    Carrer = 3,  // 职业
    Advance = 4,  // 阶级
    Star = 5,  // 星星
    Quality = 6,  // 品质框
    NotHave = 7,  // 未拥有
    Shade = 8,  // 遮罩
    HeadNode = 9,  // 头像
    Name = 10,  // 名字
    Camped = 11, // 已上阵
    Selected = 12, // 选中状态
    Blood = 13, // 血条
    Angry = 14, // 怒气
    Help = 15, // 助战
    Dead = 16, // 死亡
}

export enum HeroAdvanceGetWay {
    MainCopy = 1,
}

////////////////////////布阵//////////////////-
// 布阵类型对应sysGroup表的applySystem
export enum CampSystemType {
    MainCopy = 1,  // 主线副本
    JiangHu = 2,  // 江湖纪事
    WuLin = 3,  // 武林传记
    BaiZhuang = 4,  // 拜庄论剑
    WanJian = 5,  // 万剑魔窟
    TeamPve = 6,  // 组队pve
    WuXing = 7,  // 五行幻境
    ShiLian = 8,  // 试炼塔
    ArenaDef = 12, // 竞技场防守
    ScoreMatch = 13, // 积分赛
    HonourPk = 14, // 荣耀对决
    Evilinvade = 22, // 考核突袭
    CityWar = 17, // 城战
    ArenaAtk = 18, // 竞技场进攻
    WuJue = 19, // 挑战五绝
    GuildBoss = 20, // 公会副本
    GodTrial = 21, // 神道试炼
    TopMatch = 23, // 天启之争
    CareerTower1 = 24, // 七星塔
    CareerTower2 = 25, // 七星塔
    CareerTower3 = 26, // 七星塔
    CareerTower4 = 27, // 七星塔
    CareerTower5 = 28, // 七星塔
    playerInteraction = 31, // 玩家切磋
}
////////////////////////聊天//////////////////-

// 聊天消息类型
export enum ChatMessageType {
    System = 0, //系统聊天 （前面是系统文字标签，不带人物头像）
    Normal = 1, //普通信息（正常文字，带人物头像）// 这个不能改（服务器用到）!!!
    Guild = 2, // 公会消息（前面是公会标签）
    voice = 3, // 语音 // 这个不能改（服务器用到）!!!
    picture = 4, // 图片
    notice = 5, // 公告  // 前面是公告标签
    mass = 6, // 集结
    sharePlayer = 7,  // 分享玩家
    sharePick = 8,  // 分享采集点
    shareMonster = 9, // 分享怪物
    guildRecruit = 10, // 公会招募
    shareOpenSpace = 11, // 分享空地
    shareBaseStation = 12, // 分享驻扎点
    shareCity = 13, // 分享城池 
    assemblyCity = 14,  // 集结城池
    team = 15, // 公会组队
    shareRelic = 16,  // 分享遗迹
    shareMail = 17, // 分享邮件（战报）
    shareNpcFightHedge = 18,//分享决战赤壁
    shareBoss = 19,//boss
    shareBattlefield = 20,//战场
    shareMirror = 21,//古镜子碎片
    shareWorldBoss = 22,//世界boss
    shareWorldResource = 23,//世界boss资源点
}
////////////////////////-邮件//////////////////////
// 邮件类型
export enum MailType {
    Sys = 0, // 系统
    Guild = 1, // 公会
    Report = 2, //战报
    Store = 99, // 收藏(服务器收藏用99)
}

//邮件状态
export enum MailState {
    Unread = 0, //未读
    Read = 1, //已读（有附件物品时已读未领）
    Got = 2, //附件已领取
}

//////////////////////////背包//////////////////////-
// 背包页签
export enum BagTabType {
    Item = 1,       //通用道具
    HeroFrag = 2,       //英雄碎片
    Materials = 3,     //进阶材料
    Equip = 4,     //装备
    Martial = 5,     //武学
    Secret = 6,     //秘籍
    Formation = 7,    //阵法
}

//跳转系统id，和wayId表对应
export enum GotoSystem {
    PvpShop = 42071, //pvp商店
    GuildShop = 42101, //公会商店
    FashionShop = 42121, //皮肤商店
    HonourShop = 42131, //王者商店
    RoleMain = 21001, //主角系统主界面
    HeroList = 22001, //武将列表
    HeroDetailInfo = 22002, //武将详情
    Guild = 27011, //联盟主界面
    GuildBoss = 27012, //公会副本
    CityWar = 27021, // 城战
    BattlefieldScavenge = 32011, //战场拾遗界面
    ThreeNightmares = 32021, //三国梦演
    ScoreMatch = 33021, //积分赛界面
    HonourPk = 33031, //荣耀对决界面
    NormalLottery = 41011, //普通招募
    WishLottery = 41021, //心愿招募
    FriendLottery = 41031, //友情招募
    GodArrive = 41051, //神话招募
    MainCopy = 31001, // 主线副本
    PersonalTitle = 14001, // 称号界面
    TeamPve = 32051, // 协同作战
    CareerTower = 32061, // 七星塔
    LadderStore = 42061, // 天命商店
    BattleStore = 42041, // 古战商店
}

// if export enum isServer then
// //品质对应颜色rgb
// export enum QualityToColor {
//     [Quality.White] = CoreColor.QUALITY_WHITE,
//     [Quality.Green] = CoreColor.QUALITY_GREEN,
//     [Quality.Blue] = CoreColor.QUALITY_BLUE,
//     [Quality.Purple] = CoreColor.QUALITY_PURPLE,
//     [Quality.Orange] = CoreColor.QUALITY_ORANGE,
//     [Quality.Red] = CoreColor.QUALITY_RED,
//     [Quality.Golden] = CoreColor.QUALITY_GOLDEN,
//     [Quality.DarkGolden] = CoreColor.QUALITY_RED,
// }
// end

////////////////////////////主角//////////////////////////-
//监察官主界面页签
export enum RoleSystem {
    Handbook = 1, //监察手册
    Renown = 2,  //监察声望
    Conscious = 3,  //通识（神识）
    Fashion = 4,  //时装
}

//玩家形象类型
export enum ImageType {
    Half = 1,   //半身像
    Full = 2,   //全身像
    Normal = 3,  //小半身像
    Spine = 4,   //spine动画
    ModelSpine = 5, // 模型
}

//主角装备界面页签
export enum RoleEquipTab {
    Strengthen = 1,    //强化
    RankUp = 2,      //进阶
    Refines = 3,      //淬火
}

////////////////////////-抽卡////////////////////////////
//抽卡界面页签
export enum DrawCardPage {
    Normal = 1,    //普通抽卡
    Infinity = 2,   //无限来访
}

//抽卡卡池id
export enum DrawCardType {
    Normal = 1, //普通
    Friend = 2, //友情
    Wish = 3, //心愿（高级）
    GodLottery = 4, //神话招募
    GodArrive = 5, //神话来访
    HighestArrive = 6, //至臻来访
}

//抽卡卡池对应上方货币栏id
export enum CardTypeToGoodsUI {
    // [DrawCardType.Normal] = 2,
    // [DrawCardType.Friend] = 3,
    // [DrawCardType.Wish] = 4,
    // [DrawCardType.GodLottery] = 5,
    // [DrawCardType.GodArrive] = 6,
    // [DrawCardType.HighestArrive] = 7,
}

// 商店上方货币id
export enum ShopTypeToGoodsUI {
    Shop_1 = 34,      // 星光商店
    Shop_2 = 30,      // 街区商店
    Shop_3 = 33,      // 传奇商店
    Shop_4 = 40,      // 王者商店
    Shop_5 = 38,      // 协会商店
    Shop_6 = 41,      // 社团商店
    Shop_7 = 37,      // 天命商店
    Shop_8 = 35,      // 古战商店
    Shop_9 = 36,      // 时空商店
}

////////////////////////公会相关//////////////////////////

//公会职位权力，和guildPermission表对应
export enum GuildJobAuthority {
    SetEnterCondition = 1,         //设置入会条件
    ExamineApply = 2,         //审批入会申请
    WorldRecruit = 3,         //发送世界招募信息
    InviteOther = 4,         //邀请加入公会
    Appoint = 5,         //任命职位
    KickMember = 6,         //踢人
    ModifyName = 7,         //修改公会名字
    ModifyNotice = 8,         //修改公告
    ChangeColor = 9,         //修改旗帜
    ChangeJobModel = 10,         //官职模式
    SendMail = 11,           //发送公会邮件
    ViewOffTime = 12,           //查看详细离线时间
    DeclareCity = 30,    // 宣战城池
    AbandonCity = 31,    // 放弃城池
    FireCity = 32,    // 集火城池
    MainCity = 33,    // 设置主城
}

// 公会详情界面打开方式
export enum GuildDetailsOpenType {
    Default = 0,
    GuildList = 1, //公会列表
    InviteList = 2, //公会邀请
}

// 公会主界面打开方式
export enum GuildViewOpenType {
    Default = 0,
    Create = 1, //创建公会
    Join = 2, //加入公会
}

//公会官职类型
export enum GuildJobType {
    Leader = 1, //会长
    ViceLeader = 2, //副会长
    InteriorOfficer = 3, //内政官
    PioneerOfficer = 4, //先锋官
    Common = 99, //普通成员
}

// 次数表类型
export enum FrequencyType {
    Energy = 1,         // 购买体力次数
    ModifyGuildName = 4, // 4-修改公会名称/代号
    Copyres1Count = 6,   //资源副本1
    Copyres2Count = 7,   //资源副本2
    ThreeNightmares = 8, //三国梦演
    GuildBoss = 9,   //公会副本
    ScoreMatch = 12,   //积分赛
    LeagueChallenge = 14,   //荣耀联赛
    caveSwordChallenge = 16, //纸上谈兵/神兵之主
    Copyres = 17, //勤政安民木桩战场挑战次数
}

//公会管理模式
export enum GuildManageType {
    Appoint = 0,    //任命模式
    Challenge = 1,    //挑战模式
}

export enum CheckGuildQuitView {
    "GuildView",
    "BagView",
    "TaskMainView",
    //"GuildTeamUI",
}

export enum RemindSelectionStatus {
    GuildDonate = 3,
}

export enum GuildEventType {
    History = 1, // 史册事件
    Interior = 2,// 内政动态事件
    Diplomacy = 3,// 外交动态事件
    Military = 4, // 军事动态事件
}

////////////////////////-任务////////////////////////-
export enum TaskType {
    DailyTask = 1, // 日常任务
    CityTask = 2, // 城战破敌
    AchievementTask = 3, // 成就任务
    MainTask = 4, // 主线任务
    LotteryTask = 5, // 招募任务
    GuildWarTask = 7, // 城战公会任务
    CityWarServerTask = 6,
    RoleSkill = 8, // 主角神识技能任务
    PaperWars = 9, // 纸上谈兵任务
    BuildTask = 10,// 天文社任务
    LiveTask = 11,// 直播间任务
    PkDailyTask = 12,// 荣耀对决每日任务
    PkLevelTask = 13,// 荣耀对决段位任务
    ClubTask = 20,// 社团任务
    CityLeadTask = 21,// 城战引导任务
}

export enum ClientTaskState {
    Completed = 1,    // 已完成未领取
    NotCompleted = 2, // 未完成
    Reward = 3,       // 已完成
}

//////////////////////////红点////////////////////////

//玩家信息
export enum PersonalInfo {
    Player = 1,
    OtherPlayer = 2,
    reset = 3,
}

//////////////////////////红点////////////////////////
// 红点类型
export enum RedType {
    Image = 1, // 玩家头像框
    Title = 3,  // 玩家称号
    PlayerUpgrade = 4,  // 校长修炼/升级
    PlayerEquipment = 5,  // 校长装备
    PlayerWeapon = 6,  // 校长神兵
    PlayerSkills = 7,  // 校长神识
    Fashion = 8,  // 校长时装武将时装
    GemStone = 9,  // 校长宝石
    pratices = 10,  // 修行
    Popularity = 13, // 校长声望
    HeroGrowUp = 15,  // 英雄基础成长
    HeroEquip = 20,  // 英雄专武
    HeroMartial = 21,  // 英雄武学（魂石）
    HeroTransmit = 22,  // 英雄传功
    HeroSecret = 23,  // 英雄秘籍
    HeroMeridians = 24,  // 英雄经脉
    HeroMuMu = 26,  // 武穆遗书
    HeroCollect = 27,  // 英雄图鉴
    HeroEnlightenment = 28,  // 英雄悟道
    Item = 29,  // 背包
    Friend = 30,  // 好友
    FriendBrother = 31,  // 结义
    Institute = 32,  // 社团
    Live = 33,  // 直播间
    BuyResource = 35,  //资源购买
    College = 36,  // 学院
    Guild = 37,  // 联盟
    CityWar = 38,  // 模拟战
    CopyMap = 40,  // 主线副本
    CopyMapShop = 41,  // 主线副本商店
    CopyRes = 42,  // 战场拾遗
    ThreeNightmares = 43,  // 三国梦演
    GodTrial = 44,  // 神道试炼
    PaperWars = 45,  // 万剑魔窟
    TeamPve = 46,  // 协同作战
    CareerTower = 47,  // 七星塔
    Arena = 52,  // 竞技场
    ScoreMatch = 53,  // 积分赛
    HonourPk = 54,  // 荣耀对决
    TopMatch = 55,  // 天启之争
    WuJue = 59,  // 挑战五绝
    DailyTask = 65,  // 每日任务
    GuildTask = 66,  // 城战破敌任务
    AchieveTask = 67,  // 成就任务
    MainTask = 68,  // 主线任务
    RoleSkillTask = 69,  // 主角技能任务
    DrawCardTask = 70,  // 招募任务
    Helper = 71,  // 玩家助手
    Lottery = 72,  // 招募 
    ShopPerfect = 73,  // 至臻商店
    ShopMarket = 74,  // 集市
    ShopTreasure = 75,  // 珍宝阁
    ShopWuLin = 76,  // 武林商店
    ShopWuLinHidden = 77,  // 武林密藏
    ShopWanJian = 78,  // 万剑墓窟商店
    ShopBiwu = 79,  // 比武商店
    ShopArena = 80,  // 海阁秘室
    ShopTactical = 81,  // 阵法商店
    ShopGuild = 82,  // 联盟商店
    ShopFashion = 83,  // 时装商店
    Auction = 84,  // 拍卖
    Manual = 85,  // 功能手册
    Mail = 86,  // 邮件
    RedEnvelope = 87,  // 红包
    Rank = 88,  // 排行榜
    Announcement = 93,  // 公告  
    ChatPrivate = 105, // 私聊
}

export enum RedId {
    Head = 1001, // 玩家头像
    HeadFrame = 1002, // 玩家头像框
    Title = 3001, // 称号
    PlayerEquipActive = 5001, // 主角装备可激活
    PlayerEquipStr = 5002, // 主角装备可强化
    PlayerEquipAdvance = 5003, // 主角装备可进阶
    PlayerEquipUnlock = 5004, // 主角装备可解锁
    PlayerEquipReform = 5005, // 主角装备可改造
    PlayerEquipReplace = 5006, // 主角装备可替换
    PlayerEquipQuench = 5007, // 主角装备可淬火
    PlayerEquipRecovery = 5008, // 主角装备可回收
    PlayerEquipStar = 6001, // 主角神兵可升星
    FashionReward = 8001, // 时装奖励
    PlayerFashionActive = 8002, // 时装可激活
    HeroFashionActive = 8003, // 英雄时装可激活
    Popularity = 13001,// 声望可升级
    GemStoneSet = 9001, // 宝石可镶嵌
    GemStoneUp = 9002, // 宝石可升级
    GemStoneReplace = 9003, // 宝石可替换
    GemStoneSynthesis = 9004, // 宝石可合成
    PlayerMentalUp = 7001, // 主角神识可升级
    PlayerSkillUp = 7002, // 主角技能可升级
    PlayerMentalPointUp = 7003, // 主角神识点可升级
    Auctioning = 84001,// 拍卖正在开启
    AuctionReward = 84002,// 奖励未领取
    LiveTaskNotComplete = 89001,// 直播间任务未完成
    LiveStoryReward = 89002,// 直播间传记奖励
    LiveHeroUnlock = 89003,// 直播间英雄带解锁
    WuJueReward = 90001,// 挑战五绝可领取奖励
    WuJueCount = 90002,// 挑战五绝可用次数
    HeroActive = 14001,// 英雄可激活
    HeroUp = 15001,// 英雄可升级
    HeroTrain = 16001,// 英雄可训练
    HeroTrainUp = 16002,// 英雄可进阶
    HeroStar = 17001,// 英雄可升星
    HeroSkilUp = 18001,// 英雄技能可升级
    HeroFetter = 18002,// 英雄羁绊可激活
    HeroEquipStreng = 20001,// 英雄专武强化
    HeroEquipStar = 20002,// 英雄专武可升星
    HeroEquipGrade = 20003,// 英雄专武可升品
    HeroSpiritStreng = 21001,// 精神可升级
    HeroSpiritEquip = 21002,// 精神可穿戴
    HeroMuMuUp = 26001,// 武穆遗书可升级
    HeroCollectLvUp = 27001,// 英雄图鉴可升级
    WuDaoSkill = 28001,// 有思悟点可用
    WuDaoHero = 28002,// 有英雄可思悟
    ItemBox = 29001,// 有宝箱可使用
    ItemNew = 29002,// 获得新物品
    FriendPrivateChat = 30001,// 好友私聊
    FriendRequest = 30002,// 好友申请
    BuildUp = 32001,// 社团建筑可升级
    MachineUp = 32002,// 有健身器材可升级
    MachineUse = 32003,// 有健身器材可使用
    ResourcesCount = 35001,// 资源购买有可用次数
    CollegeJoin = 36001,// 可加入学院
    CollegeSchoolarship = 36002,// 学院奖学金可领取
    CollegeTaskAward = 36003,// 学院任务奖励可领取
    GuildDonateCount = 37001,// 联盟可捐献
    GuildDonateBox = 37002,// 联盟捐献宝箱可领取
    GuildCastBox = 37003,// 联盟铸像宝箱可领取
    GuildCastAward = 37004,// 联盟铸像奖励可领取
    GuildBossBox = 37005,// 公会副本有可领取的宝箱
    CopyResCount = 42001,// 战场拾遗有可用次数
    GodTrialPass = 44001,// 神道试炼为通关
    GodTrialBox = 44002,// 神道试炼宝箱
    PaperWarsRich = 45001,// 万剑墓窟收益任务
    PaperWarsAchi = 45002,// 万剑墓窟成就任务
    WulinFirstACount = 46001,// 武林传记首通奖励可领取
    WulinStarACount = 46002,// 武林传记星级奖励可领取
    CareerTower = 47001,// 七星塔
    ArenaExChange = 52001,// 竞技场兑换
    ScoreMatchCount = 53001,// 积分赛有可挑战次数
    ScoreMatchReward = 53002,// 积分赛有可领取奖励
    HonourPkReport = 54001,// 荣耀对决未读战报
    HonourPkDaily = 54002,// 荣耀对决每日奖励
    HonourPkRank = 54003,// 荣耀对决段位奖励
    TopMatchReady = 55001,// 天启之争准备阶段
    TopMatchFight = 55002,// 天启之争战斗阶段
    TopMatchWorship = 55003,// 天启之争可膜拜
    TaskDaily = 65001,// 每日任务奖励
    TaskDailyActive = 65002,// 每日任务活跃奖励
    TaskRoleMental = 69001,// 主角认识任务奖励
    TaskCityWar = 66001,// 城战破敌任务奖励
    TaskAchieve = 67001,// 成就任务奖励
    TaskMain = 68001,// 主线任务奖励
    TaskLottery = 70001,// 招募任务奖励
    LotteryCount = 72001,// 抽卡有免费次数
    LotteryCardEnough = 72002,// 有足够招募券
    LotterySpecialOne = 72003,// 可使用特殊卡大于1次
    LotterySpecialTen = 72004,// 可使用特殊卡大于10次
    LotteryExChange = 72005,// 有仰慕券可兑换
    LotteryNotHero = 72006,// 神话招募没有选择武将
    Mail = 86001,// 邮件未查看
    Rank = 88001,// 排行榜 
    ParticelvTotal = 107002,// 修行总修炼
    ParticelvUp = 107001,// 修行可升级
    TeamPveBox = 110001,// 协同作战有可领宝箱
}

//红点显示类型
export enum RedShowType {
    day = 1,        //每天一次
    login = 2,      //每次登录一次
    always = 3,     //一直显示
}

//////////////////////////-城战//////////////////

export enum ClientTeamState {
    NotCamp = 1, // 未编队
    Camped = 2,  // 已编队
}

export enum WarState {
    Declare = 1, //宣战
    Atk = 2, //进攻
    Def = 3, //防守
}

//////////////////////////副本//////////////////
export enum MainCopyState {
    Lock = 1,// 未解锁
    CanChallenge = 2, // 已解锁可挑战
    NotChallenge = 3, // 已解锁不可挑战
    Completed = 4, // 已完成
}

export enum MainCopyNextCopyState {
    CanChallenge = 1,// 可以挑战
    NotPlayerLv = 2, // 玩家等级不足
    NotResource = 3, // 玩家资源不足
    AllCompleted = 4,
}

//////////////////-pve//////////////////////////
//pve中功能入口状态
export enum PveStatus {
    Open = 1,    //开放
    CheckFunc = 2,     //CheckFunction未满足
    Time = 3,      //时间不对
    ClosedByServer = 4,      //服务器那边通知未开放
}

//pve功能id列表
export enum PveId {
    BattlefieldScavenge = 1,        //战场拾遗
    ThreeNightmares = 2,        //三国梦演
    GodTrial = 3,        //神道试炼
    PaperWars = 4,        //纸上谈兵
    TeamPve = 5,        //协同作战
    CareerTower = 6,        //七星塔
}

//////////////////////////商店//////////////////
export enum ShopId {
    Market = 1,    // 集市
    CopyMap = 2,    // 主线副本神秘商店 
    ArenaExChange = 3,    // 竞技场兑换
    ArenaShop = 4,    // 竞技场商店
    RarityShop = 5,    // 至臻商店
    DiamondStore = 6,    // 钻石商店
    BattleStore = 7,    // 战场商店
    RuinsStore = 8,    // 战场遗迹
    LadderStore = 9,    // 天梯商店
    MysteryShop = 10,   // 海阁秘市
    PledgeShop = 11,   // 誓约商店
    UnionShop = 12,   // 联盟商店
    FashionShop = 13,   // 时装商店
    HonourShop = 14,   // 荣耀商店
    SocietyShop = 16,   // 社团商店
}

export enum ShopShowType {
    CommonShop = 1, // 常驻商店
    LimitShop = 2, // 限时商店
}

export enum ShopBuyLimitType {
    PlayerLv = 1, // 主角等级
    ArenaShop = 2, // 竞技场段位排名
}

////////////////////////消息设置////////////////-
// 队列类型
export enum QueueType {
    QueueBuild = 1, // 建筑队列
}

export enum QueueUnlockType {
    PlayerLv = 1, // 玩家等级自动解锁
    Item = 2, // 消耗道具解锁
}

export enum CityRankType {
    Personal = 1, // 个人排行榜
    Guild = 2, // 公会排行榜
}

export enum AdornType {
    Image = 1,
    Effect = 2,
}

export enum RankType {
    PlayerPower = 1,
    GuildPower = 2,
    CityWarPersonKill = 3,
    GuildCity = 4,
    WanJian = 5,
    XianQianPower = 21,
    MiShuPower = 22,
    JueYiPower = 23,
    SuWeiPower = 24,
    QiDiPower = 25,
    WuJueHurt = 40, // 挑战五绝最高单次伤害排行
    ScoreMatch = 50, // 积分赛排行
    CareerTower1 = 31,
    CareerTower2 = 32,
    CareerTower3 = 33,
    CareerTower4 = 34,
    CareerTower5 = 35,
    EntranceExamination = 55, //考核突袭个人
    EntranceExaminationGuild = 56,//考核突袭协会
}

// 刷新时间类型（对应flushtime表id）
export enum FlushTimeType {
    CityBox = 4,
}

export enum ExchangeState {
    NotExchange = 1, // 不能兑换
    CanExchange = 2, // 可以兑换
    Exchanged = 3, // 已兑换
}

export enum CityLineState {
    None = 0,
    Half = 1,
    All = 2,
}

// 社交关系类型
export enum SocialRelation {
    Friend = 1, //好友
    Black = 2, //黑名单
    Enemy = 3, //仇人
}

// 好友界面页签类型
export enum FriendViewTag {
    Friend = 1, //好友
    Add = 2, //添加
    ApplyFor = 3, //申请
}

// 资源购买
export enum ResourceBuyType {
    Copper = 1,
    Grass = 2,
}

export enum HeroEquipPartState {
    Lock = 1,
    UnLock = 2,
    CanStreng = 3,
    Max = 4
}

export enum LimitFunType {
    ChallengeWuJue = 1,
    Evilinvade = 2,
}

export enum LimitFunState {
    Wait = TLPlayState.Wait, // 等待开放
    Open = TLPlayState.Open, // 开放中
    Close = TLPlayState.Close,// 已关闭数据未清理
    Over = 3,// 已结束
    NotOpen = 4,// 未开启
}

export enum LimitWuJueStage {
    Wait = 1,
    Open = 2,
    Result = 3,
}

export enum GodTrialDiffType {
    Base = 1, // 基础
    Simple = 2, // 简单 
    Difficulty = 3, // 困难
}

export enum GodTrialEventType {
    Fight = 1,   // 战斗事件
    Shop = 2,   // 商店事件
    Rise = 3,   // 复活事件
    Treat = 4,   // 治疗事件
    Invite = 5,   // 邀请事件
    Reward = 6,   // 奖励事件
    Drug = 7,   // 药剂奖励
}

export enum GodTrialBoxState {
    Complete = 1,
    NotComplete = 2,
    Reward = 3,
}

export enum GodTrialBoxType {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4
}

export enum WuDaoAttrState {
    Lock = 1,
    CanActive = 2,
    CanUpLevel = 3,
    MaxLevel = 4,
    Actived = 5,
}

export enum WuDaoHeroState {
    NotHave = 1,
    NotActive = 2,
    CanActive = 3,
    CanUpLevel = 4,
    Actived = 5,
    MaxLevel = 6,
    NotHero = 7,
}

export enum AuctionFunType {
    ChallengeWuJue = 1,
}

export enum CityWarType {
    cityWar = 1,
    evilInvade = 2,
}

export enum EvilType {
    notOpen = 0,
    open = 1,
    close = 2,
}

export enum EvilStageType {
    camp = 0,
    fight = 1,
}

export enum HeroMartialPart {
    Part1 = 1,
    Part2 = 2,
    Part3 = 3,
    Part4 = 4,
    Part5 = 5,
    Part6 = 6,
}

// 游戏
export enum GAME {
    CAFE = 101,        // 咖啡机
    EGG = 102,        // 扭蛋机
    Finger = 103,        // 猜拳
}

// 猜拳类型
export enum FingerType {
    Fist = 1, // 拳头
    Palm = 2, // 手掌
    Clipper = 3, // 剪刀
}

// 猜拳胜利类型
export enum SmallGameWinType {
    Lose = 0,
    Win = 1,
    Flat = 2,
}

// 荣耀对决
export enum LeagueZoneType {
    NORMAL = 0,        // 普通
    NOVICE = 1,        // 新手
}

// 荣耀对决
export enum LeagueGlobalState {
    BATTLE = 0,        // 战斗
    SETTLE = 1,        // 结算
    SLEEP = 2         // 休眠
}

// 园艺社建筑类型
export enum BuildType {
    FlowerHouse = 1, // 花房
    SilveryFlowerFrame = 2, // 银色花框
    GoldFlowerFrame = 3, // 金色花框
    SnowFlower = 4, // 雪银花
    SoulFlower = 5, // 赤魂花
    BreadFlower = 6, // 面包花
}

export enum BuildState {
    Lock = 1, // 未解锁
    CanActive = 2, // 可激活
    NotAConsume = 3, // 激活资源不足
    Activing = 4, // 激活中
    CanUpLevel = 5, // 可升级
    NotUConsume = 6, // 升级资源不足
    UpLeveling = 7, // 升级中
    MaxLevel = 8, // 最大等级
    Actived = 9, // 已激活
}

export enum FitnessState {
    Lock = 1,     // 未解锁
    Unlock = 2,     // 可解锁
    UnLocking = 3,     // 解锁中
    UpLevening = 4,     // 升级中
    Training = 5,     // 训练中
    Complete = 6,     // 训练结束
    CanTrain = 7,     // 可训练
    NotCount = 8,     // 次数不足  
}

export enum FashionState {
    Lock = 1,     // 未解锁
    CanActive = 2,     // 可激活
    Actived = 3,     // 已激活
}

export enum HeroDevelopType {
    Level = 1, // 升级
    Advance = 2, // 进阶
    Skill = 3, // 技能升级
    Star = 4, // 升星
    Fetter = 5, // 羁绊
}

export enum HeroEquipMenuType {
    Star = 1,
    Quality = 2,
}

// 技能状态
export enum HeroSkillState {
    Lock = 1,    // 未解锁
    Active = 2,  // 已解锁
    MaxLevel = 3 // 已到最大级
}

// 天启者列表展示模式
export enum HeroShowMode {
    List = 1, // 列表
    Tile = 2, // 平铺
}

// 天命属性加成对象
export enum HeroEquipAttrCond {
    Simple = 1, // 单体
    All = 2, // 全体
}

// 天命属性级别
export enum HeroEquipAttrLevelType {
    Lower = 1, // 低级
    Senior = 2, // 高级
}

// 天命强化消耗道具类型
export enum HeroEquipStrengConsuemType {
    FangZhen = 1, // 防震合金
    Tai = 2, // 钛合金
    XiYinGang = 3, // 吸音钢
}

// 天启者详情界面功能
export enum HeroDetailType {
    Info = 1,
    Equip = 2,
    Martial = 3,
}


export enum HeroEquipState {
    Star = 1,
    MaxStar = 2,
    Quality = 3,
    MaxQuality = 4
}

// 商店限购类型
export enum ShopRefreshType {
    Day = 1,  // 每日
    Week = 2,  // 每周
    Month = 3,  // 每月
    NotRefresh = 4   // 不刷新
}

// 小游戏类型
export enum SamllGameType {
    Cafe = 1,  // 咖啡机
    Gacha = 2,  // 扭蛋机
    Mora = 3,  // 猜拳
    Dialog = 4,  // 对话
    Question = 5   // 答题
}

// 小游戏功能类型
export enum SamllGameEnterType {
    LiveHouse = 1,  // 直播间
    MainPanel = 2   // 主界面
}

// 天启者详情数据类型 1 本地配置生成 2 服务器返回
export enum HeroInfoDataType {
    Conf = 1,  // 配置
    Server = 2   // 服务器
}

// 天启者详情功能
export enum HeroInfoType {
    Base = 1,  // 基础
    Equip = 2,  // 天命
    Spirit = 3   // 精神
}

// 天启者基础功能
export enum HeroBaseType {
    Attr = 1,  // 详细属性
    StarUp = 2,  // 升星技能
    FireUp = 3,  // 升品天赋
    Introduce = 4   // 天启者介绍
}