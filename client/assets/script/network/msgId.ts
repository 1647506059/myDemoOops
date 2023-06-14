export const netVersion = 213
export namespace msgIdList {
    export enum College {
        ReqCollegeJoin = 101040002,
        ReqCollege = 101040000,
        ReqCollegeRefreshTask = 101040008,
        ResCollege = 101010000,
        ResCollegeQuit = 101010003,
        ReqCollegeChallenge = 101040011,
        ResCollegeJoinTask = 101010005,
        ResCollegeReward = 101010004,
        ResCollegeRefreshTask = 101010008,
        SyncPlayerCollege = 101070001,
        ReqCollegeReward = 101040004,
        ResCollegeStudy = 101010009,
        ResCollegeChallenge = 101010011,
        ResPlayerCollege = 101010001,
        ReqCollegeSpeedUpTask = 101040006,
        ResCollegeRewardTask = 101010007,
        SyncPlayerCollegeTask = 101070002,
        SyncCollegeRepresentPlayer = 101070003,
        ReqPlayerCollege = 101040001,
        ReqCollegeRewardTask = 101040007,
        ResCollegeScore = 101010010,
        ResCollegeJoin = 101010002,
        ReqCollegeStudy = 101040009,
        ReqCollegeScore = 101040010,
        ReqCollegeQuit = 101040003,
        ReqCollegeJoinTask = 101040005,
        SyncCollege = 101070000,
        ResCollegeSpeedUpTask = 101010006,
    }

    export enum GuildStatue {
        ResStatueReceivePartAward = 102910001,
        ReqStatueReceivePartAllAward = 102940002,
        SyncStatueInfo = 102970000,
        ResStatueReceiveSetlAward = 102910004,
        ReqStatueCasting = 102940003,
        ResStatueCasting = 102910003,
        ResStatuePlayerStatueInfo = 102910000,
        ReqStatueReceiveSetlAward = 102940004,
        ReqStatuePlayerStatueInfo = 102940000,
        ResStatueReceivePartAllAward = 102910002,
        SyncStatuePart = 102970001,
        ReqStatueReceivePartAward = 102940001,
    }

    export enum UnionTeam {
        SyncTeamInvite = 106470003,
        ResGuildTeamInfo = 106410000,
        SyncGuildTeamSimpleInfo = 106470000,
        ResOpenTeamBox = 106410006,
        ResTeamQuickInvite = 106410005,
        ReqOpenTeamBox = 106440006,
        ResQuitGuildTeam = 106410004,
        ReqLookTeamInfo = 106440001,
        ReqGuildTeamFightNow = 106440007,
        ReqJoinGuildTeam = 106440003,
        ResJoinGuildTeam = 106410003,
        ReqQuitGuildTeam = 106440004,
        ResLookTeamInfo = 106410001,
        ReqTeamQuickInvite = 106440005,
        SyncTeamResult = 106470004,
        ResLookTeamMemberInfo = 106410002,
        SyncGuildMemberChange = 106470002,
        ResGuildTeamFightNow = 106410007,
        ReqGuildTeamInfo = 106440000,
        SyncGuildTeamInfo = 106470001,
        ReqLookTeamMemberInfo = 106440002,
    }

    export enum Practice {
        ResLevelUp = 105110001,
        ResGridUnlock = 105110003,
        ResGridHeroSet = 105110004,
        ResTotalLevelUp = 105110002,
        ResPractice = 105110000,
        ReqGridHeroSet = 105140004,
        ReqGridUnlock = 105140003,
        ReqPractice = 105140000,
        SyncPractice = 105170000,
        ReqLevelUp = 105140001,
        ReqTotalLevelUp = 105140002,
    }

    export enum Mail {
        ReqMail = 104440001,
        ReqStoreUpMail = 104440002,
        ResDeleteMail = 104410003,
        SyncDeleteMail = 104470001,
        ResMail = 104410001,
        ResMailList = 104410000,
        ResGetMailsItems = 104410005,
        SyncAddMail = 104470000,
        ResStoreUpMail = 104410002,
        ReqGetMailsItems = 104440005,
        ReqGetMailItems = 104440006,
        ReqGetMails = 104440004,
        ResGetMailItems = 104410006,
        ResGetMails = 104410004,
        ReqMailList = 104440000,
        ReqDeleteMail = 104440003,
    }

    export enum HeroBiography {
        SyncBiographyInfo = 107870000,
        SyncBiographyChapter = 107870001,
        ReqBiographyChallengeResult = 107840001,
        ReqBiographyReward = 107840002,
        ResBiographyReward = 107810002,
        ReqBiographyChallenge = 107840000,
        ResBiographyChallengeResult = 107810001,
        ResBiographyChallenge = 107810000,
    }

    export enum HeroCollect {
        ReqCollectLevelUp = 103140000,
        SyncHeroCollect = 103170000,
        ResCollectLevelUp = 103110000,
    }

    export enum Arena {
        ReqArenaInfo = 100040003,
        ReqMatch = 100040001,
        ReqLogs = 100040000,
        ResMatch = 100010001,
        ResChallenge = 100010002,
        ReqOtherArena = 100040004,
        ReqChallenge = 100040002,
        ResArenaInfo = 100010003,
        ResLogs = 100010000,
        ResArenaRank = 100010005,
        ResOtherArena = 100010004,
        ReqArenaRank = 100040005,
    }

    export enum Welfare {
        ReqScoreLimitHeroReward = 107540007,
        ResGetLimitHeroReward = 107510006,
        ResSupplyReward = 107510011,
        ResFateLottery = 107510009,
        ReqLimitHeroUpStar = 107540005,
        ReqSupplyReward = 107540011,
        ResScoreLimitHeroReward = 107510007,
        ReqSignInWelfare = 107540000,
        ResFateLotteryData = 107510008,
        ResGetOnlineReward = 107510004,
        ReqGetTotalSignReward = 107540002,
        ResDoubleIncome = 107510012,
        ResOnlineWelfare = 107510003,
        SyncDoubleIncomeUpdate = 107570000,
        ReqOnlineWelfare = 107540003,
        ResSignInWelfare = 107510000,
        ReqMealSupply = 107540010,
        ResLimitHeroUpStar = 107510005,
        ReqDoubleIncome = 107540012,
        ReqFateLotteryData = 107540008,
        ReqFateLottery = 107540009,
        ResMealSupply = 107510010,
        ReqGetOnlineReward = 107540004,
        ReqGetLimitHeroReward = 107540006,
        ResGetSignReward = 107510001,
        ReqGetSignReward = 107540001,
        ResGetTotalSignReward = 107510002,
    }

    export enum Setting {
        ReqSetting = 105740000,
        ResSetting = 105710000,
        SyncSettingData = 105770000,
    }

    export enum actAccumulativeRechargeActMsg {
        ReqGetAccumulativeAct = 108440000,
        ResGetAccumulativeAct = 108410000,
    }

    export enum Guild {
        ResGuildInfo = 102410000,
        ResGuildInviteList = 102410011,
        ResCreateGuild = 102410002,
        SyncExtInfo = 102470001,
        ResJoinGuild = 102410004,
        ReqGuildInvite = 102440010,
        ResGuildMemberInfo = 102410013,
        ReqAppointJob = 102440015,
        ResGuildSetting = 102410016,
        ResGuildRecruit = 102410018,
        ResDealGuildInvite = 102410012,
        ReqCancelApply = 102440005,
        ReqGuildSetting = 102440016,
        ResGetSalary = 102410021,
        ReqKickOutMember = 102440009,
        ResKickOutMember = 102410009,
        SyncGuildJob = 102470003,
        ReqQuitGuild = 102440008,
        ResChallengeJob = 102410020,
        ReqGuildList = 102440003,
        SyncGuild = 102470000,
        ResGuildInvite = 102410010,
        ReqChallengeJob = 102440020,
        ReqGuildApplyList = 102440006,
        ReqDealGuildInvite = 102440012,
        ReqGuildMemberInfo = 102440013,
        ResGuildExtInfo = 102410001,
        ReqGuildOtherInfo = 102440019,
        ResCancelApply = 102410005,
        ResDealApplyList = 102410007,
        ReqGuildInviteList = 102440011,
        ReqCreateGuild = 102440002,
        ResQuitGuild = 102410008,
        ReqGuildInfo = 102440000,
        ReqJob = 102440014,
        ResGuildOtherInfo = 102410019,
        ReqGuildExtInfo = 102440001,
        ReqDealApplyList = 102440007,
        ResJob = 102410014,
        ReqJoinGuild = 102440004,
        ResGuildList = 102410003,
        ResGuildApplyList = 102410006,
        SyncGuildMap = 102470002,
        ReqGuildRecruit = 102440018,
        ResAppointJob = 102410015,
        ResSendGuildMail = 102410017,
        ReqSendGuildMail = 102440017,
        ReqGetSalary = 102440021,
    }

    export enum CopyMap {
        ResSweep = 101310003,
        ResChallengeResult = 101310001,
        ResChapterReward = 101310002,
        ResBattle = 101310004,
        SyncChapters = 101370001,
        SyncCopyMapInfo = 101370000,
        ResChallenge = 101310000,
        ReqBattle = 101340004,
        ReqChallenge = 101340000,
        ReqChapterReward = 101340002,
        ReqSweep = 101340003,
        ReqChallengeResult = 101340001,
    }

    export enum Act {
        SyncActList = 107270002,
        SyncActEnd = 107270001,
        ResAct = 107210000,
        ReqAct = 107240000,
        SyncActStart = 107270000,
    }

    export enum ClientAgent {
        ResRealName = 100910007,
        ReqThirdPart = 100940002,
        ReqRealName = 100940007,
        ReqLogin = 100940000,
        ReqAnnouncement = 100940001,
        ReqTraveler = 100940004,
        ResVerify = 100910006,
        ResAnnouncement = 100910001,
        ResPhoneCode = 100910005,
        ReqVerify = 100940006,
        ResThirdPart = 100910002,
        ResTraveler = 100910004,
        ReqDelBind = 100940003,
        ResDelBind = 100910003,
        SyncAccountInfo = 100970000,
        ReqPhoneCode = 100940005,
        ResLogin = 100910000,
    }

    export enum Fitness {
        ResOnekeyFitnessLvUp = 108310003,
        ReqFitnessSpeedupFree = 108340009,
        ResHeroFitness = 108310004,
        ReqFitnessCancelLvUp = 108340007,
        ReqOnekeyFitnessLvUp = 108340003,
        ReqFitness = 108340000,
        ReqInstantFitnessLvUp = 108340002,
        ReqHeroFitnessSpeedup = 108340005,
        ResFitness = 108310000,
        ResFitnessLvUp = 108310001,
        ReqFitnessLvUp = 108340001,
        SyncFitnessUnLock = 108370002,
        ResFitnessSpeedupUseGold = 108310008,
        ResInstantFitnessLvUp = 108310002,
        ResFitnessCancelLvUp = 108310007,
        ReqHeroFitness = 108340004,
        ResHeroFitnessSpeedup = 108310005,
        ResRewardFitness = 108310006,
        SyncFitnessChange = 108370001,
        ReqRewardFitness = 108340006,
        SyncFitnessData = 108370000,
        ReqFitnessSpeedupUseGold = 108340008,
        ResFitnessSpeedupFree = 108310009,
    }

    export enum CareerTower {
        ResCareerTower = 100410000,
        ResChallengeResult = 100410002,
        SyncCareerTowerLevel = 100470000,
        ResChallenge = 100410001,
        ReqCareerTower = 100440000,
        ReqChallenge = 100440001,
        ReqChallengeResult = 100440002,
    }

    export enum Function {
        SyncFunction = 102070000,
    }

    export enum Friend {
        ResDealFriendApply = 101910006,
        ResDeleteRelation = 101910004,
        ReqDealFriendApply = 101940006,
        ResRecommendPlayer = 101910009,
        ResAddRelation = 101910002,
        ReqDeleteRelation = 101940004,
        ResFriendApplyList = 101910005,
        ReqRecommendPlayer = 101940009,
        ResRelationInfo = 101910000,
        ReqRewardIntimate = 101940008,
        ResSearchPlayer = 101910001,
        ReqAddRelation = 101940002,
        ResOneKeyApply = 101910003,
        ReqSendIntimate = 101940007,
        ReqOneKeyApply = 101940003,
        SyncRelationInfo = 101970000,
        ReqRelationInfo = 101940000,
        ResRewardIntimate = 101910008,
        ReqFriendApplyList = 101940005,
        ResSendIntimate = 101910007,
        ReqSearchPlayer = 101940001,
    }

    export enum Games {
        ReqPlay = 102140001,
        ReqStart = 102140003,
        ResPlay = 102110001,
        ReqClose = 102140002,
        SyncGames = 102170000,
        ResStart = 102110003,
        SyncGamesChange = 102170001,
        ResClose = 102110002,
    }

    export enum Club {
        SyncClubData = 108570000,
    }

    export enum Rank {
        ReqRankList = 105240000,
        ResRankList = 105210000,
    }

    export enum CrossBase {
    }

    export enum ResourcesBuy {
        SyncBuy = 105570000,
        ResBuyResources = 105510001,
        ResBuy = 105510000,
        ReqBuy = 105540000,
        ReqBuyResources = 105540001,
    }

    export enum Image {
        ReqChangeHeadId = 103340001,
        SyncGetFrame = 103370001,
        ResChangeHeadId = 103310001,
        ResChangeFrame = 103310002,
        ReqImageInfo = 103340000,
        SyncGetHead = 103370000,
        ResImageInfo = 103310000,
        ReqChangeFrame = 103340002,
    }

    export enum Item {
        ResExchangeGold = 104010003,
        ResItemSell = 104010005,
        ReqOptionalItemUse = 104040002,
        ResOptionalItemUse = 104010002,
        ResItemDecompose = 104010004,
        ResItemList = 104010000,
        SyncItem = 104070000,
        ReqItemUse = 104040001,
        SyncItemChange = 104070001,
        ResItemCompound = 104010006,
        ReqItemDecompose = 104040004,
        ReqItemList = 104040000,
        ReqItemCompound = 104040006,
        ReqExchangeGold = 104040003,
        ReqItemSell = 104040005,
        SyncItemGet = 104070002,
        ResItemUse = 104010001,
    }

    export enum HandBook {
        ReqHandBook = 108740000,
        ResBreakthrough = 108710001,
        ResHandBook = 108710000,
        ReqPromote = 108740002,
        ResPromote = 108710002,
        ReqBreakthrough = 108740001,
        SyncHandBook = 108770000,
    }

    export enum CollegeContest {
        ResBuyChallengeCount = 101110005,
        ReqCollegeContestChangeEnemy = 101140001,
        ResCollegeContest = 101110000,
        ResCollegeContestFastChallenge = 101110003,
        ReqRewardCount = 101140006,
        ResCollegeContestChallenge = 101110002,
        ReqCollegeContestFastChallenge = 101140003,
        ResRewardCount = 101110006,
        ResCollegeContestChangeEnemy = 101110001,
        SyncCollegeContest = 101170000,
        SyncUpdateChallengeCount = 101170001,
        ReqLogs = 101140004,
        ReqBuyChallengeCount = 101140005,
        ReqCollegeContestChallenge = 101140002,
        ReqCollegeContest = 101140000,
        ResLogs = 101110004,
    }

    export enum League {
        ResLeagueChallenge = 107910001,
        ReqLeague = 107940000,
        ReqLeagueChallenge = 107940001,
        ReqLeagueChallengeBuy = 107940002,
        ResLeagueResultsTop = 107910004,
        ResLeagueTopRank = 107910003,
        ReqLeagueTopRank = 107940003,
        ResLeague = 107910000,
        SyncLeagueGlobal = 107970000,
        ResLeagueResultsMy = 107910005,
        ReqLeagueResultsMy = 107940005,
        ResLeagueChallengeBuy = 107910002,
        ReqLeagueResultsTop = 107940004,
        SyncLeagueChallenge = 107970001,
    }

    export enum GameAgent {
        SyncDelAccountRole = 103870002,
        ResChargeBack = 103810002,
        ResQueryBindAccount = 103810000,
        SyncChargeToAgent = 103870005,
        ReqChargeBack = 103840002,
        SyncAccountChange = 103870009,
        SyncInValidNotificationDevice = 103870007,
        SyncGameRegister = 103870000,
        SyncGMCharge = 103870008,
        ReqVerifyLogin = 103840001,
        SyncUpdateAccountRole = 103870001,
        ResVerifyLogin = 103810001,
        SyncChargeToServer = 103870004,
        ReqQueryBindAccount = 103840000,
        SyncOnlineTime = 103870003,
        SyncPushNotification = 103870006,
    }

    export enum actTaskActMsg {
        ReqActTask = 108140000,
        ResActTaskReward = 108110001,
        SyncActTask = 108170000,
        ResActTask = 108110000,
        ReqActTaskReward = 108140001,
    }

    export enum AgentCenter {
    }

    export enum actDayRechargeActMsg {
        ReqFreeGetDayRechargeAct = 108940002,
        ReqGoalGetDayRechargeAct = 108940003,
        ResStageGetDayRechargeAct = 108910004,
        ReqStageGetDayRechargeAct = 108940004,
        ResFreeGetDayRechargeAct = 108910002,
        ResGoalGetDayRechargeAct = 108910003,
    }

    export enum Wulin {
        SyncWulinInfo = 106870000,
        ReqWulinStarReward = 106840006,
        ReqWulinChallengeResult = 106840001,
        ResWulinChallengeReward = 106810004,
        SyncWulinChapter = 106870001,
        ReqWulinChallenge = 106840000,
        ResWulinStarReward = 106810006,
        ResWulinChallenge = 106810000,
        ResWulinFastChallenge = 106810002,
        ReqWulinBuyFastChallengeCount = 106840003,
        ResWulinBuyFastChallengeCount = 106810003,
        ResWulinChallengeResult = 106810001,
        ReqWulinChallengeReward = 106840004,
        ResWulinLevelFirstReward = 106810005,
        ReqWulinLevelFirstReward = 106840005,
        ReqWulinFastChallenge = 106840002,
    }

    export enum Task {
        SyncTask = 105970001,
        ResFunctionTask = 105910002,
        ResDayTaskActiveReward = 105910003,
        SyncRefreshDayTask = 105970002,
        ReqFunctionTask = 105940002,
        ReqDayTaskActiveInfo = 105940004,
        ReqTaskReward = 105940000,
        SyncRemoveTask = 105970003,
        ResServerTask = 105910005,
        ResTask = 105910001,
        ResTaskReward = 105910000,
        ResDayTaskActiveInfo = 105910004,
        SyncAchievementPoint = 105970004,
        ReqDayTaskActiveReward = 105940003,
        SyncTaskDel = 105970000,
        ReqTask = 105940001,
        ReqServerTask = 105940005,
    }

    export enum Operate {
        ResOpeningCeremonyPointReward = 108210003,
        SyncHeroMass = 108270006,
        ReqOpeningCeremonyTaskReward = 108240002,
        ReqEntrySpecialSale = 108240009,
        ResEntranceSign = 108210010,
        ReqPowerCompetition = 108240012,
        ResHeroMass = 108210014,
        ReqOpeningCeremony = 108240000,
        ReqEnrollGiftGroupReward = 108240006,
        ResOpeningCeremonyTaskReward = 108210002,
        SyncPowerCompetition = 108270004,
        ReqEnrollGiftDonateReward = 108240008,
        ReqHeroMass = 108240014,
        SyncCityWarKill = 108270005,
        ReqHeroMassTaskReward = 108240016,
        ResEntranceSignSign = 108210011,
        ResEnrollGiftDonateReward = 108210008,
        SyncEntrySpecialSale = 108270002,
        SyncEnrollGift = 108270001,
        ReqEntranceSign = 108240010,
        ReqOpeningCeremonyBuy = 108240001,
        ResEnrollGift = 108210004,
        ReqOpeningCeremonyPointReward = 108240003,
        ReqCityWarKill = 108240013,
        ResCityWarKillTaskReward = 108210015,
        ResOpeningCeremony = 108210000,
        ResOpeningCeremonyBuy = 108210001,
        ReqEnrollGiftDonate = 108240007,
        ResHeroMassTaskReward = 108210016,
        ReqEnrollGiftHeroReward = 108240005,
        SyncEntranceSign = 108270003,
        ResEntrySpecialSale = 108210009,
        SyncOpeningCeremony = 108270007,
        ReqCityWarKillTaskReward = 108240015,
        ResEnrollGiftHeroReward = 108210005,
        ResPowerCompetition = 108210012,
        ResEnrollGiftDonate = 108210007,
        ReqEnrollGift = 108240004,
        ResCityWarKill = 108210013,
        ReqEntranceSignSign = 108240011,
        SyncOpeningCeremonyPointUpdate = 108270000,
        ResEnrollGiftGroupReward = 108210006,
    }

    export enum Martial {
        ReqModifyMartialPlan = 104640011,
        ReqMartialQuality = 104640003,
        ResMartialRe = 104610004,
        ReqMartialWashCover = 104640002,
        ResMartialRemakeView = 104610013,
        ResMartialLevelUp = 104610000,
        ReqWearMartialPlan = 104640012,
        ReqMartialWash = 104640001,
        ReqMartial = 104640007,
        ReqMartialRe = 104640004,
        ResMartialPlan = 104610008,
        ReqDelMartialPlan = 104640010,
        ResAddMartialPlan = 104610009,
        ReqHeroMartial = 104640006,
        SyncMartial = 104670002,
        ReqMartialRemakeView = 104640013,
        ResMartialLock = 104610005,
        ReqAddMartialPlan = 104640009,
        ReqMartialRemake = 104640014,
        ResDelMartialPlan = 104610010,
        ResMartialWash = 104610001,
        ResMartialWashCover = 104610002,
        ResMartialRemake = 104610014,
        ReqMartialLevelUp = 104640000,
        ResWearMartialPlan = 104610012,
        SyncMartialPlan = 104670001,
        ResMartial = 104610007,
        ResMartialQuality = 104610003,
        ResHeroMartial = 104610006,
        ReqMartialPlan = 104640008,
        ReqMartialLock = 104640005,
        ResModifyMartialPlan = 104610011,
    }

    export enum TLPlay {
        SyncTLPlayOfWeek = 106270001,
        SyncTLPlay = 106270000,
        SyncTLPlayChange = 106270002,
    }

    export enum actAccumulativeConsumeActMsg {
        ResGetAccumulativeConsumeAct = 108810000,
        ReqGetAccumulativeConsumeAct = 108840000,
    }

    export enum GameCenter {
        ReqLoadServerInfo = 103940001,
        ResUseActiveCode = 103910000,
        ReqUseActiveCode = 103940000,
        ResLoadServerInfo = 103910001,
        SyncMergeResult = 103970000,
    }

    export enum actExchange {
        ReqExchange = 109040000,
        ResExchange = 109010000,
    }

    export enum LegendEquip {
        SyncLegendEquip = 104170000,
        ResStarUp = 104110000,
        ReqStarUp = 104140000,
    }

    export enum WuDao {
        ResHeroFireSoul = 106710001,
        ResWuDao = 106710000,
        ReqWuDaoSkillReset = 106740003,
        ReqWuDaoSkillUp = 106740002,
        ResWuDaoSkillUp = 106710002,
        ResWuDaoSkillReset = 106710003,
        ReqHeroFireSoul = 106740001,
        ReqWuDao = 106740000,
    }

    export enum SiegeCity {
        ResDefend = 106910001,
        ReqSiegeCityInfo = 106940002,
        ReqCityWarExit = 106940004,
        ReqRankList = 106940005,
        ResSiegeCityInfo = 106910002,
        ResCityWarExit = 106910004,
        ResCityWarJoin = 106910003,
        ReqCityWarJoin = 106940003,
        ResRankList = 106910005,
        ReqDefend = 106940001,
    }

    export enum WorkQueue {
        SyncWorkQueueChange = 106570000,
        ReqCancelQueue = 106540002,
        ResWorkQueues = 106510000,
        ResCancelQueue = 106510002,
        ResUnlockQueue = 106510001,
        ResWQSpeedupUseGold = 106510003,
        SyncWorkQueues = 106570001,
        ReqWQSpeedupFree = 106540004,
        ResWQSpeedupFree = 106510004,
        ReqWorkQueues = 106540000,
        ReqUnlockQueue = 106540001,
        ReqWQSpeedupUseGold = 106540003,
    }

    export enum GuildEvent {
        ResRecentHistory = 102710001,
        ReqGuildHistory = 102740000,
        ResGuildHistory = 102710000,
        ReqRecentHistory = 102740001,
    }

    export enum LeagueCross {
    }

    export enum GuildDungeon {
        ResGuildBuyCount = 102610005,
        ReqGuildAllChapter = 102640000,
        ReqGuildChallenge = 102640002,
        ReqGuildChallengeResult = 102640003,
        SyncGuildChapter = 102670000,
        ResGuildChallenge = 102610002,
        ResGuildAllChapter = 102610000,
        ReqGuildRewardBox = 102640004,
        ReqGuildChapter = 102640001,
        ResGuildChapter = 102610001,
        ResGuildChallengeResult = 102610003,
        ResGuildRewardBox = 102610004,
        ReqGuildBuyCount = 102640005,
    }

    export enum Shop {
        SyncShop = 105870000,
        ReqBuyItem = 105840000,
        ResBuyItem = 105810000,
        ResRefreshShop = 105810001,
        SyncRefreshShop = 105870001,
        SyncRemoveShop = 105870002,
        ReqRefreshShop = 105840001,
    }

    export enum GuildMap {
        ResItemBox = 102810000,
        ReqSetMainCity = 102840001,
        ReqGetItemBox = 102840002,
        ResSetMainCity = 102810001,
        SyncItemBox = 102870000,
        ResGetItemBox = 102810002,
        ReqItemBox = 102840000,
    }

    export enum BattleReport {
        ReqBattleReport = 107040000,
        ResBattleReport = 107010000,
    }

    export enum ChallengePeak {
        ReqChallengePeak = 100640000,
        SyncChallengePeak = 100670000,
        ReqReport = 100640001,
        ResChallengePeak = 100610000,
        ResReportReplay = 100610002,
        ResChallenge = 100610004,
        ResBestSnapshot = 100610003,
        ReqReportReplay = 100640002,
        ResDmgReward = 100610006,
        ResSweep = 100610005,
        ResReport = 100610001,
        ReqBestSnapshot = 100640003,
        ReqChallenge = 100640004,
        ReqSweep = 100640005,
        ReqDmgReward = 100640006,
    }

    export enum Hero {
        ResElevationStarStage = 103010007,
        ReqHeroEquipStageUp = 103040013,
        ReqElevationStarLevel = 103040006,
        ReqElevationAdvanced = 103040005,
        ResAddPractice = 103010003,
        ReqHeroEquipLvUp = 103040011,
        ResOneKeyUpHeroRelation = 103010015,
        SyncHero = 103070000,
        ReqUpHeroRelation = 103040010,
        SyncGotHero = 103070002,
        ReqComposeHero = 103040001,
        ResHeroEquipLvUp = 103010011,
        ResAutoSkillLvUp = 103010009,
        ReqAutoSkillLvUp = 103040009,
        ReqOneKeyUpHeroRelation = 103040015,
        ResElevationAdvanced = 103010005,
        ResHeroEquipStageUp = 103010013,
        ResOtherHero = 103010000,
        ResHeroEquipStarUp = 103010012,
        ResAutoPractice = 103010004,
        ReqAddPractice = 103040003,
        ResComposeHero = 103010001,
        ResSkillLvUp = 103010008,
        ReqAddHeroExp = 103040002,
        ResUpHeroRelation = 103010010,
        ReqHeroEquipStageReset = 103040014,
        ReqAutoPractice = 103040004,
        ResHeroEquipStageReset = 103010014,
        ReqHeroEquipStarUp = 103040012,
        ReqOtherHero = 103040000,
        ReqSkillLvUp = 103040008,
        ResElevationStarLevel = 103010006,
        ResAddHeroExp = 103010002,
        ReqElevationStarStage = 103040007,
        SyncHeroChange = 103070001,
    }

    export enum CityWar {
        SyncDeclareState = 100870001,
        SyncCityWarLastBattle = 100870005,
        ReqCityWarExit = 100840001,
        ResTroopQueue = 100810003,
        SyncCityWar = 100870003,
        SyncCityWarOver = 100870007,
        ResCityWarExit = 100810001,
        ResCityWarJoin = 100810000,
        ReqCityWarRank = 100840002,
        ReqTroopQueue = 100840003,
        ResCityWarRank = 100810002,
        SyncWarState = 100870000,
        SyncCityWarBattle = 100870004,
        SyncJoinReq = 100870006,
        ReqCityWarJoin = 100840000,
        SyncCityWarInfo = 100870002,
    }

    export enum Login {
        ResSelectRole = 104210001,
        SyncPlayerData = 104270000,
        ReqLogin = 104240000,
        ReqHeart = 104240003,
        ResCreateRole = 104210002,
        ReqSelectRole = 104240001,
        ReqCreateRole = 104240002,
        ResLogin = 104210000,
        ResHeart = 104210003,
    }

    export enum Title {
        ReqTitle = 106140000,
        SyncTitle = 106170000,
        ReqShow = 106140001,
        ResShow = 106110001,
        ResTitle = 106110000,
        SyncShowTitle = 106170001,
    }

    export enum Gem {
        ReqGem = 102240004,
        ResGemAutoCompose = 102210005,
        ReqGemTakeOff = 102240002,
        ResGemTakeOff = 102210002,
        ResGemInlay = 102210000,
        ResGemCompose = 102210003,
        ReqGemAutoCompose = 102240005,
        ResGem = 102210004,
        ReqGemCompose = 102240003,
        ReqGemInlay = 102240000,
    }

    export enum Auction {
        ResFollow = 100110002,
        ResAuctionMsg = 100110005,
        ReqFollow = 100140002,
        SyncGoodsChange = 100170001,
        ResGoodsMsgGet = 100110003,
        ReqAuctionMsg = 100140005,
        ReqGoodsMsgGet = 100140003,
        ResAuction = 100110000,
        SyncAuction = 100170000,
        ReqAuction = 100140000,
        ReqAuctionGoods = 100140004,
        ResAuctionGoods = 100110004,
        SyncMsg = 100170002,
        ReqBidding = 100140001,
        ResBidding = 100110001,
    }

    export enum CrossAgent {
        SyncCrossRegister = 103670000,
    }

    export enum PlayerEquip {
        ReqEquipUp = 104940001,
        ReqPlayerEquip = 104940000,
        ReqRefine = 104940004,
        ReqBaptizeUnLock = 104940006,
        ReqEquipChange = 104940002,
        ResEquipChange = 104910002,
        ReqStrength = 104940003,
        ResEquipRecovery = 104910007,
        ResRefine = 104910004,
        ResPlayerEquip = 104910000,
        ResStrength = 104910003,
        ResBaptizeUnLock = 104910006,
        ResEquipUp = 104910001,
        ResBaptize = 104910005,
        ReqEquipRecovery = 104940007,
        ReqBaptize = 104940005,
    }

    export enum World {
        SyncWorldLvl = 106670000,
    }

    export enum Common {
        SyncUpdateServerDynData = 103570001,
        ResServerRegister = 103510000,
        SyncCommonOrder = 103570000,
        ReqServerRegister = 103540000,
        SyncCloseSrv = 103570002,
    }

    export enum CaveSword {
        ReqCaveSwordChallenge = 100540001,
        ReqCaveSwordQuickReward = 100540009,
        ResCaveSwordEliteChallengeResult = 100510005,
        ResCaveSwordFastChallenge = 100510003,
        ResCaveSwordReward = 100510008,
        ReqCaveSwordInfo = 100540000,
        ReqCaveSwordEliteChallenge = 100540004,
        ReqCaveSwordEliteFastChallenge = 100540006,
        ResCaveSwordEliteFastChallenge = 100510006,
        ResCaveSwordEliteReward = 100510007,
        ResCaveSwordChallengeResult = 100510002,
        ResCaveSwordQuickReward = 100510009,
        ReqCaveSwordBuy = 100540010,
        ReqCaveSwordChallengeResult = 100540002,
        ResCaveSwordEliteChallenge = 100510004,
        ReqCaveSwordReward = 100540008,
        ResCaveSwordChallenge = 100510001,
        ResCaveSwordInfo = 100510000,
        ReqCaveSwordFastChallenge = 100540003,
        ReqCaveSwordEliteReward = 100540007,
        ResCaveSwordBuy = 100510010,
        ReqCaveSwordEliteChallengeResult = 100540005,
    }

    export enum TotalHeroCombat {
        SyncTotalHeroCombat = 106370000,
        ResTotalHeroCombatUp = 106310001,
        ResTotalHeroCombat = 106310000,
        ReqTotalHeroCombatUp = 106340001,
        ReqTotalHeroCombat = 106340000,
    }

    export enum GodTrial {
        ResComplete = 102310008,
        ResChallengeSave = 102310019,
        ReqChallengeSave = 102340019,
        ReqShopBuy = 102340004,
        ResShopBuy = 102310004,
        ResPointReward = 102310010,
        ResEffectPool = 102310017,
        ReqPointReward = 102340010,
        ReqBoxReward = 102340016,
        ResQuick = 102310011,
        ReqChooseBlock = 102340006,
        ReqComplete = 102340008,
        ReqChallenge = 102340007,
        ResChallengeResult = 102310013,
        ResGodTrial = 102310000,
        ReqBuffPool = 102340015,
        SyncGodTrialFlush = 102370001,
        ReqGodTrial = 102340000,
        ResChallenge = 102310007,
        ReqHeroPool = 102340018,
        ReqTrailBlock = 102340012,
        ResNextLayer = 102310009,
        ResChooseBlock = 102310006,
        ReqNextLayer = 102340009,
        ReqQuick = 102340011,
        ResTrailBlock = 102310012,
        ResHeroPool = 102310018,
        ResBoxReward = 102310016,
        ReqEffectPool = 102340017,
        ResBuffPool = 102310015,
        ReqChallengeResult = 102340013,
    }

    export enum Map {
        ReqTroopDispatch = 104540006,
        ReqDelegate = 104540010,
        SyncCityInfo = 104570000,
        ResCity = 104510001,
        SyncTroop = 104570001,
        ResTroopDispatch = 104510006,
        ReqTroopRevive = 104540009,
        ResDelegate = 104510010,
        ResMap = 104510000,
        ResAbandonCity = 104510003,
        ResGetOccupyReward = 104510016,
        ReqMap = 104540000,
        ResFireCity = 104510004,
        ReqSetDelegate = 104540011,
        ReqStartDelegate = 104540012,
        ResStopDelegate = 104510013,
        ResStartDelegate = 104510012,
        ReqCityWarReward = 104540017,
        ResCityWarReward = 104510017,
        ReqStopDelegate = 104540013,
        ReqDelegateReport = 104540014,
        ResTroopBack = 104510007,
        ReqGetCityWarReward = 104540018,
        ReqDeclareCity = 104540002,
        ResTroopAutoRevive = 104510008,
        ReqGetOccupyReward = 104540016,
        ResOccupyReward = 104510015,
        ResTroopRevive = 104510009,
        ReqOccupyReward = 104540015,
        ReqAbandonCity = 104540003,
        ResDelegateReport = 104510014,
        ReqCancleFireCity = 104540005,
        ResGetCityWarReward = 104510018,
        ReqTroopBack = 104540007,
        SyncDelegateInfo = 104570002,
        ReqFireCity = 104540004,
        ReqCity = 104540001,
        ResDeclareCity = 104510002,
        ResCancleFireCity = 104510005,
        ResSetDelegate = 104510011,
        ReqTroopAutoRevive = 104540008,
    }

    export enum Copyres {
        SyncEvent = 101470000,
        ResEventSweep = 101410003,
        ReqEventChallengeResult = 101440001,
        ResEventChallengeResult = 101410001,
        ReqEventBuy = 101440002,
        ReqEventSweep = 101440003,
        ResEventChallenge = 101410000,
        ResEventBuy = 101410002,
        SyncSingleEvent = 101470001,
        ReqEventChallenge = 101440000,
    }

    export enum CrossCenter {
    }

    export enum RedDot {
        ResRedDot = 105310000,
        ReqRedDot = 105340000,
        SyncRedDot = 105370000,
    }

    export enum Notice {
        SyncPMD = 104770001,
        SyncSysNotice = 104770000,
    }

    export enum Player {
        ReqChangeHeadId = 104840002,
        ResUpdateClientInfo = 104810006,
        ReqChangeName = 104840000,
        ResChangeHeadId = 104810002,
        ResShowHeros = 104810008,
        ResChangeFrame = 104810003,
        ResUseActiveCode = 104810009,
        ReqUseActiveCode = 104840009,
        ReqPlayerInfoInit = 104840005,
        ReqExit = 104840007,
        ResSetUserGuide = 104810013,
        ReqChangeImage = 104840004,
        ResPlayerInfoInit = 104810005,
        ReqSetUserGuide = 104840013,
        ReqChangeSignature = 104840001,
        SyncSysNotice = 104870002,
        ReqShowHeros = 104840008,
        ResSkipUserGuide = 104810014,
        ReqSkipUserGuide = 104840014,
        SyncPlayerPower = 104870003,
        SyncPlayerNonBattleAttr = 104870004,
        ReqChangeFrame = 104840003,
        ReqUpdateClientInfo = 104840006,
        SyncPlayerName = 104870001,
        ResExit = 104810007,
        ResChangeImage = 104810004,
        SyncPlayerExp = 104870000,
        ResChangeName = 104810000,
        ResChangeSignature = 104810001,
    }

    export enum CrossChat {
    }

    export enum Charge {
        ResMonthCard = 107410004,
        SyncChargeSuccess = 107470001,
        ResCanCharge = 107410001,
        ReqDayGiftReward = 107440009,
        ResDayGiftReward = 107410009,
        ReqGetProductReward = 107440010,
        ReqVip = 107440011,
        ResVip = 107410011,
        ResGMCharge = 107410000,
        SyncChargeCard = 107470003,
        ReqGetFundReward = 107440006,
        SyncLimitGift = 107470004,
        ResGetFundReward = 107410006,
        ResLimitBuy = 107410008,
        ResGetProductReward = 107410010,
        SyncVipInfo = 107470005,
        ReqLimitBuy = 107440008,
        ReqDirectChargeInfo = 107440003,
        ResDirectChargeInfo = 107410003,
        ReqGetReward = 107440005,
        ReqGMCharge = 107440000,
        ResDayGift = 107410007,
        ReqGetVipBox = 107440012,
        ReqDayGift = 107440007,
        ReqMonthCard = 107440004,
        SyncCanGMCharge = 107470000,
        ResClientCharge = 107410002,
        ResGetReward = 107410005,
        SyncChargeData = 107470002,
        ReqCanCharge = 107440001,
        ReqClientCharge = 107440002,
        ResGetVipBox = 107410012,
    }

    export enum Recover {
        ResBuyRoleStrength = 109110002,
        SyncRecover = 109170000,
        ResRoleStrengthBuyCount = 109110001,
        ReqBuyRoleStrength = 109140002,
        ResRecover = 109110000,
        ReqRecover = 109140000,
        ReqRoleStrengthBuyCount = 109140001,
    }

    export enum Lottery {
        ResLottery = 104310001,
        ReqInfiniteReplace = 104340007,
        ResInfiniteAdmire = 104310006,
        ResWishOrFormationRec = 104310008,
        ResInfiniteLotteryList = 104310005,
        ResData = 104310000,
        ResInfiniteReplace = 104310007,
        ReqInfiniteAdmire = 104340006,
        ResThumbsUpRec = 104310009,
        ReqLottery = 104340001,
        SyncInfiniteLotteryList = 104370001,
        ResWish = 104310003,
        ReqWishOrFormationRec = 104340008,
        ReqThumbsUpRec = 104340009,
        ReqInfiniteLotteryList = 104340005,
        ReqData = 104340000,
        SyncLottery = 104370000,
        ResInfiniteLottery = 104310004,
        ReqWish = 104340003,
        ReqInfiniteLottery = 104340004,
    }

    export enum Team {
        ResTeamList = 106010000,
        ResHeroData = 106010005,
        ResDelSample = 106010004,
        SyncTeamOne = 106070000,
        ResSampleList = 106010002,
        ReqDelSample = 106040004,
        ReqTeamList = 106040000,
        ReqSaveSample = 106040003,
        SyncTeamAll = 106070003,
        ReqSampleList = 106040002,
        ResSaveTeam = 106010001,
        ResSaveSample = 106010003,
        SyncTeamState = 106070001,
        ReqSaveTeam = 106040001,
        SyncSampleAll = 106070002,
        ReqHeroData = 106040005,
    }

    export enum GuildDonate {
        ResGetGuildDonateBox = 102510002,
        ResGuildDonateInfo = 102510000,
        ResGuildDonate = 102510001,
        ReqDonateRecord = 102540003,
        ResDonateRecord = 102510003,
        SyncDonateExpFull = 102570000,
        ReqGuildDonate = 102540001,
        ReqGetGuildDonateBox = 102540002,
        ReqGuildDonateInfo = 102540000,
    }

    export enum Home {
        ReqCollectResource = 103240009,
        ResOneKeyRewardBuild = 103210008,
        ResOnekeyBuildLvUp = 103210018,
        ReqBuilds = 103240000,
        ResCollectResource = 103210009,
        ReqRewardBuild = 103240007,
        ReqOneKeyRewardBuild = 103240008,
        ReqOnekeyBuildLvUp = 103240018,
        ResInstantBuildLvUp = 103210004,
        ReqBuildLvUp = 103240003,
        ResBuilds = 103210000,
        ReqInstantBuildLvUp = 103240004,
        ResRewardBuild = 103210007,
        SyncBuildChange = 103270001,
        ResBuildLvUp = 103210003,
    }

    export enum ServerRank {
        ReqServerRank = 105640001,
        SyncServerRank = 105670000,
        ResRewardGet = 105610000,
        ReqRewardGet = 105640000,
        ResServerRank = 105610001,
    }

    export enum actCntinuousRechargeActMsg {
        ReqGetGradeRechargeAct = 108640002,
        ResGetGradeRechargeAct = 108610002,
        ResGetDayFreeRechargeAct = 108610000,
        ResGetDayRechargeAct = 108610001,
        ReqGetDayFreeRechargeAct = 108640000,
        ReqGetDayRechargeAct = 108640001,
    }

    export enum EasyBuy {
        ReqEasyBuyItem = 109240000,
        SyncEasyBuyItem = 109270000,
        SyncUpdateEasyBuyItem = 109270001,
        ResEasyBuyItem = 109210000,
    }

    export enum Battle {
        ResBattle = 100310000,
        SyncTestBattle = 100370000,
        ReqBattle = 100340000,
    }

    export enum Favor {
        ResInteract = 101810005,
        SyncHeroFavor = 101870001,
        ResFavor = 101810000,
        ResBuild = 101810001,
        ResStoryReward = 101810004,
        ReqTaskReward = 101840006,
        ReqStoryReward = 101840004,
        ReqFavor = 101840000,
        ReqBuild = 101840001,
        ResTaskReward = 101810006,
        ReqGift = 101840002,
        ReqInteract = 101840005,
        ResGift = 101810002,
    }

    export enum Chat {
        ResChatRead = 100710001,
        ResDeleteChat = 100710002,
        SyncPersonChat = 100770001,
        SyncDelChat = 100770002,
        ResChat = 100710000,
        ResAllPersonChat = 100710003,
        ReqChat = 100740000,
        SyncChat = 100770000,
        ReqDeleteChat = 100740002,
        ReqChatRead = 100740001,
        SyncSeason = 100770003,
        ReqAllPersonChat = 100740003,
    }

    export enum PlayerView {
        ReqTitle = 105040002,
        ReqGem = 105040006,
        ResInfo = 105010000,
        ReqTeam = 105040004,
        ReqCollege = 105040008,
        ResEquip = 105010001,
        ResBattle = 105010005,
        ResTeam = 105010004,
        ResCollege = 105010008,
        ReqMartial = 105040007,
        ReqFashion = 105040003,
        ResMartial = 105010007,
        ResFashion = 105010003,
        ReqEquip = 105040001,
        ReqBattle = 105040005,
        ResTitle = 105010002,
        ResGem = 105010006,
        ReqInfo = 105040000,
    }

    export enum Apocalypse {
        ResApocalypseCompetition = 107110001,
        ReqReport = 107140006,
        ResApocalypseWorship = 107110002,
        ReqTeam = 107140007,
        ReqCompetition = 107140005,
        ReqApocalypse = 107140000,
        ResWorship = 107110003,
        ResTeam = 107110007,
        SyncApocalypseUpdate = 107170000,
        ResApocalypse = 107110000,
        ReqAutoCompetition = 107140004,
        ResAutoCompetition = 107110004,
        ResReport = 107110006,
        ReqApocalypseCompetition = 107140001,
        ReqWorship = 107140003,
        ResCompetition = 107110005,
        ReqApocalypseWorship = 107140002,
    }

    export enum actSignActMsg {
        ResActSign = 107610000,
        ReqActSign = 107640000,
    }

    export enum Conscious {
        ResLevelUp = 101210000,
        ResSkillSeatLevelUp = 101210001,
        ReqPointLevelUp = 101240002,
        ResUnlockSpecialPoint = 101210003,
        SyncConscious = 101270000,
        ReqSkillSeatLevelUp = 101240001,
        ReqLevelUp = 101240000,
        ResPointLevelUp = 101210002,
        ReqUnlockSpecialPoint = 101240003,
    }

    export enum Base {
    }

    export enum Fashion {
        ReqActive = 101740000,
        ReqWear = 101740001,
        ResCollectRewardGet = 101710002,
        ResActive = 101710000,
        ReqTakeOff = 101740003,
        SyncPlayerFashionChange = 101770001,
        SyncData = 101770000,
        ResWear = 101710001,
        ResTakeOff = 101710003,
        ReqCollectRewardGet = 101740002,
        SyncHeroFashionChange = 101770002,
    }

}

