/* KONTRA SITE v49 — Google Play legal pages */
(() => {
  "use strict";
  // KONTRA site app v16 — persistent pinball rewards with a protected launch lane.

  const config = window.KONTRA_CONFIG || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const AVATAR_IDS = Object.freeze(Array.from({ length: 10 }, (_, index) => `avatar-${String(index + 1).padStart(2, "0")}`));
  const DEFAULT_AVATAR_ID = AVATAR_IDS[0];

  const i18n = {
    en: {
      serverOnline: "SERVER ONLINE",
      serverOffline: "SERVER OFFLINE",
      playersOnline: "PLAYERS ONLINE",
      joinServer: "JOIN SERVER",
      openingKontra: "OPENING KONTRA...",
      map: "MAP",
      mode: "MODE",
      updated: "UPDATED",
      zombies: "ZOMBIES",
      survivors: "SURVIVORS",
      localTime: "LOCAL TIME",
      capacity: "CAPACITY",
      playersOnServer: "PLAYERS ON SERVER",
      playersBridgeTitle: "PLAYER DATA IS UNAVAILABLE",
      playersBridgeText: "The server is online, but the live player list has not been received.",
      serverEmpty: "SERVER IS EMPTY",
      serverEmptyText: "No players are connected right now.",
      serverOfflinePlayers: "SERVER IS OFFLINE",
      serverOfflinePlayersText: "The live player list will return when the server sender reconnects.",
      fullScoreboard: "FULL SCOREBOARD",
      yourStats: "YOUR STATISTICS",
      seasonPromosEyebrow: "SEASON BONUS",
      seasonPromosTitle: "NEW SEASON PROMO CODES",
      seasonPromosLead: "Enter the promo code in the in-game chat or activate it in your profile.",
      promoTokens: "TOKENS",
      promoCopy: "COPY",
      promoCopied: "PROMO CODE COPIED",
      promoSynced: "SYNCED WITH SERVER",
      promoRedeemTitle: "ACTIVATE PROMO CODE",
      promoRedeemLead: "Redeem a server promo code here or in the in-game chat. Each code can be used once per account.",
      promoRedeemPlaceholder: "ENTER PROMO CODE",
      promoRedeemButton: "ACTIVATE",
      promoRedeemHint: "The reward is issued by LVL MOD and saved to your game profile.",
      promoRedeemSending: "CHECKING PROMO CODE...",
      promoRedeemSuccess: "PROMO CODE ACTIVATED",
      promoRedeemNotFound: "PROMO CODE NOT FOUND",
      promoRedeemUsed: "THIS PROMO CODE HAS ALREADY BEEN USED",
      promoRedeemInvalid: "ENTER A VALID PROMO CODE",
      promoRedeemBusy: "ANOTHER ECONOMY OPERATION IS IN PROGRESS. TRY AGAIN.",
      promoRedeemTimeout: "THE GAME SERVER DID NOT CONFIRM THE PROMO CODE IN TIME.",
      promoRedeemUnavailable: "PROMO ACTIVATION IS TEMPORARILY UNAVAILABLE",
      profileLocked: "PROFILE IS LOCKED",
      profileLockedText: "Sign in through the game or with your username and password.",
      signIn: "SIGN IN",
      home: "HOME",
      server: "SERVER",
      control: "CONTROL",
      top: "TOP",
      profile: "PROFILE",
      notifications: "NOTIFICATIONS",
      notificationUnread: "UNREAD",
      notificationMarkAll: "MARK ALL READ",
      notificationAllRead: "YOU ARE ALL CAUGHT UP",
      notificationEmpty: "NO NOTIFICATIONS YET",
      notificationEmptyText: "Server news, season events and account updates will appear here.",
      notificationLoading: "LOADING NOTIFICATIONS...",
      notificationError: "NOTIFICATIONS ARE TEMPORARILY UNAVAILABLE",
      notificationGuestHint: "Guest read state is stored on this device. Sign in to sync it with your account.",
      notificationAccountHint: "Read state is synchronized with your KONTRA account.",
      notificationNew: "NEW",
      notificationTypePromo: "PROMO CODE",
      notificationTypeSeason: "SEASON",
      notificationTypeUpdate: "UPDATE",
      notificationTypeAccount: "ACCOUNT",
      notificationTypeSystem: "SYSTEM",
      announcementCenter: "ANNOUNCEMENTS",
      announcementTileText: "Send a server announcement to the notification bell",
      announcementPanelLead: "Publish a global announcement to every player and guest.",
      announcementTypeLabel: "TYPE",
      announcementTitleRu: "TITLE · RU",
      announcementBodyRu: "MESSAGE · RU",
      announcementTitleEn: "TITLE · EN (OPTIONAL)",
      announcementBodyEn: "MESSAGE · EN (OPTIONAL)",
      announcementExpiresLabel: "SHOW FOR",
      announcementNever: "NO EXPIRATION",
      announcement1Day: "1 DAY",
      announcement3Days: "3 DAYS",
      announcement7Days: "7 DAYS",
      announcement30Days: "30 DAYS",
      announcementSend: "PUBLISH ANNOUNCEMENT",
      announcementSending: "PUBLISHING...",
      announcementSent: "ANNOUNCEMENT PUBLISHED",
      announcementFailed: "COULD NOT PUBLISH ANNOUNCEMENT",
      announcementRequired: "ENTER A TITLE AND MESSAGE",
      announcementTypeSystem: "ANNOUNCEMENT",
      announcementTypeUpdate: "UPDATE",
      announcementTypeSeason: "SEASON",
      announcementTypePromo: "PROMO CODE",
      liveScoreboard: "LIVE SCOREBOARD",
      controlCenter: "CONTROL CENTER",
      retroPinball: "KONTRA PINBALL",
      retroPinballText: "Hit token targets and find the victory hole",
      pinballDailyBadge: "3 FREE ATTEMPTS DAILY",
      pinballTokens: "TOKENS",
      pinballAttempts: "ATTEMPTS",
      pinballRules: "RULES",
      pinballRewards: "REWARDS",
      pinballBuyAttempt: "BUY ATTEMPT",
      pinballRulesLead: "Registered players receive 3 free attempts every day at 00:00 MSK.",
      pinballRuleLaunch: "Use one attempt and press LAUNCH to send the ball onto the field.",
      pinballRuleFlippers: "Hold LEFT and RIGHT to control the flippers and keep the ball alive.",
      pinballRuleExit: "Guide the ball into the green EXIT hole to win and collect the jackpot.",
      pinballRuleDrain: "If the ball falls through the center or either lower drain, the attempt ends.",
      pinballRewardsLead: "Targets recharge during the attempt. A maximum of 75 tokens can be credited per run.",
      pinballBlueTarget: "BLUE TARGET",
      pinballBlueTargetText: "Fast target · 1 token",
      pinballVioletTarget: "VIOLET BUMPER",
      pinballVioletTargetText: "Medium target · 5 tokens",
      pinballGoldTarget: "GOLD BUMPER",
      pinballGoldTargetText: "Rare target · 10 tokens",
      pinballExtraTarget: "EXTRA ATTEMPT",
      pinballExtraTargetText: "Small green target · once per run",
      pinballExitReward: "VICTORY HOLE",
      pinballExitRewardText: "EXIT jackpot · ends the run",
      pinballReady: "READY?",
      pinballReadyText: "One attempt, one ball. Reach the EXIT hole before the ball drains.",
      pinballStart: "USE ATTEMPT",
      pinballLaunch: "LAUNCH",
      pinballLeft: "LEFT",
      pinballRight: "RIGHT",
      pinballTip: "Keyboard: A / D or ← / →. Space launches the ball.",
      pinballLaunchPrompt: "PRESS LAUNCH",
      pinballLaunchPromptText: "The ball is ready in the launch lane.",
      pinballLost: "ATTEMPT LOST",
      pinballLostText: "The ball escaped. You collected {tokens} tokens.",
      pinballVictory: "EXIT FOUND",
      pinballVictoryText: "Victory! The run credited {tokens} tokens.",
      pinballNextAttempt: "NEXT ATTEMPT",
      pinballNoAttempts: "NO ATTEMPTS",
      pinballNoAttemptsText: "Come back after 00:00 MSK or buy one attempt for 100 tokens.",
      pinballSignIn: "SIGN IN REQUIRED",
      pinballSignInText: "Only registered KONTRA players can use daily attempts and earn tokens.",
      pinballOpenLogin: "SIGN IN",
      pinballLoading: "LOADING ARCADE",
      pinballLoadingText: "Checking your attempts and token balance...",
      pinballStarting: "STARTING ATTEMPT",
      pinballStartingText: "The arcade is reserving one attempt...",
      pinballSaving: "CREDITING REWARDS",
      pinballSavingText: "The server is checking this run...",
      pinballTryAgain: "TRY AGAIN",
      pinballBuySuccess: "One attempt purchased for 100 tokens.",
      pinballNotEnoughTokens: "You need 100 tokens to buy an attempt.",
      pinballExtraEarned: "+1 ATTEMPT",
      pinballPreview: "PREVIEW MODE",
      pinballPreviewText: "The new Worker is not installed yet. This test run is saved only on this device.",
      pinballUnavailable: "ARCADE UNAVAILABLE",
      pinballUnavailableText: "The attempt server did not respond. Please try again.",
      webControl: "WEB CONTROL",
      webControlReady: "WEB CONTROL READY",
      webControlHint: "Persistent settings are saved while offline. Live server actions require an active connection.",
      controlWaiting: "Select an action.",
      controlLoginRequired: "Sign in before using web control.",
      controlSending: "SENDING COMMAND...",
      controlDelivered: "COMMAND DELIVERED TO THE GAME",
      controlPlayerOffline: "Your player is not connected to the server.",
      controlFailed: "The command could not be executed.",
      controlTimeout: "The server did not confirm the command in time.",
      controlLvlLead: "Open the LVL MOD menu directly in your active game session.",
      controlClassesLead: "Choose which class menu to open in the game.",
      controlMenuLead: "Open the main server menu in the game.",
      controlAdminLead: "Administrator-only server controls.",
      openLvl: "OPEN LVL MOD",
      openLvlText: "Stats, shop, inventory and LVL MOD functions",
      openCtClasses: "SURVIVOR CLASSES",
      openCtClassesText: "Open the CT / survivor class menu",
      openTClasses: "ZOMBIE CLASSES",
      openTClassesText: "Open the T / zombie class menu",
      openGameMenu: "OPEN GAME MENU",
      openGameMenuText: "Votes, teleports, news and server functions",
      openAdminMenu: "OPEN ADMIN CONTROL",
      openAdminMenuText: "Administrator menu in the active game session",
      gameMenuWebLead: "Choose a live server action. Your player must be connected to the server.",
      openTeleport: "OPEN TELEPORT",
      openTeleportText: "Open the player teleport menu",
      openTurret: "OPEN TURRET MENU",
      openTurretText: "Available while using the Turret class",
      soundOn: "ENABLE SOUNDS",
      soundOnText: "Enable server and weapon sounds",
      soundOff: "DISABLE SOUNDS",
      soundOffText: "Disable optional server sounds",
      openAdminMessage: "MESSAGE ADMIN",
      openAdminMessageText: "Open the private administrator message form",
      adminPanelLead: "Select an action, a live player and an optional value.",
      adminActionLabel: "ADMIN ACTION",
      adminTargetLabel: "TARGET PLAYER",
      adminValueLabel: "VALUE",
      chooseAction: "SELECT ACTION",
      choosePlayer: "SELECT PLAYER",
      noLivePlayers: "NO LIVE PLAYERS",
      executeAction: "EXECUTE ACTION",
      adminOpenInGame: "OPEN IN-GAME ADMIN MENU",
      adminKick: "KICK PLAYER",
      adminBan: "BAN PLAYER",
      adminMute: "MUTE CHAT",
      adminUnmute: "UNMUTE CHAT",
      adminVoiceMute: "MUTE VOICE",
      adminVoiceUnmute: "UNMUTE VOICE",
      adminKill: "KILL PLAYER",
      adminRevive: "REVIVE PLAYER",
      adminTeam: "CHANGE TEAM",
      adminHp: "SET HP",
      adminArmor: "SET ARMOR",
      adminMoney: "GIVE MONEY",
      adminTeleport: "TELEPORT TO ADMIN",
      adminImmortal: "TOGGLE IMMORTAL",
      adminInvisible: "TOGGLE INVISIBLE",
      adminResetScore: "RESET SCORE",
      adminEndMap: "END MAP",
      adminRoundMode: "START ROUND MODE",
      confirmAdminDanger: "Confirm this administrator action?",
      targetOffline: "The selected player is no longer connected.",
      targetChanged: "The player list changed. Reopen the panel and select the player again.",
      selfProtected: "This action cannot target your own player.",
      adminProtected: "Another administrator is protected from this action.",
      controlInvalidValue: "Invalid action value.",
      adminRequired: "Administrator access is required.",
      whereLoginPassword: "Where do I find the username and password?",
      authHelpTitle: "WHERE TO FIND LOGIN DETAILS",
      authHelpText: "Enter the same username and password that are set in the game profile window where you change your nickname.",
      authFirstLoginHint: "First sign in with the username and password from your game account. After that you can link email or Google in your profile.",
      howToSignIn: "HOW TO SIGN IN?",
      forgotPassword: "FORGOT PASSWORD?",
      otherSignInMethods: "OTHER SIGN-IN METHODS",
      orText: "OR",
      showPassword: "SHOW PASSWORD",
      hidePassword: "HIDE PASSWORD",
      emailCodeLogin: "SIGN IN BY EMAIL CODE",
      emailOrUsername: "EMAIL OR USERNAME",
      sendCode: "SEND CODE",
      codeLabel: "6-DIGIT CODE",
      verifyAndSignIn: "VERIFY AND SIGN IN",
      emailLoginHint: "Email login works only after you have signed in with the game account once and linked a verified email in PROFILE.",
      googleLoginHint: "Google sign-in works only after Google has been linked to this KONTRA account in PROFILE.",
      securityTitle: "ACCOUNT SECURITY",
      securityLead: "Link recovery methods only after the first game-account sign-in. They do not create a separate KONTRA account.",
      emailLinkTitle: "EMAIL",
      googleLinkTitle: "GOOGLE",
      linked: "LINKED",
      notLinked: "NOT LINKED",
      linkEmail: "LINK EMAIL",
      changeEmail: "CHANGE EMAIL",
      emailLinkHint: "We will send a 6-digit verification code. After verification, this email can be used for code sign-in and forgotten-password access.",
      googleLinkHint: "Link Google here once. Next time you can sign in with Google without entering the game password.",
      verifyEmail: "VERIFY EMAIL",
      unlink: "UNLINK",
      codeSent: "Code sent. Check your email.",
      codeVerified: "Email linked successfully.",
      invalidCode: "Incorrect or expired code.",
      emailAlreadyLinked: "This email is already linked to another KONTRA account.",
      googleNotLinked: "This Google account is not linked to KONTRA yet. Sign in with the game account first and link Google in PROFILE.",
      googleAlreadyLinked: "This Google account is already linked to another KONTRA account.",
      emailNotConfigured: "Email delivery is not configured on the Worker yet.",
      googleNotConfigured: "Google sign-in is not configured yet.",
      securityUpdated: "ACCOUNT SECURITY UPDATED",
      forgotPasswordHint: "Forgot the password? If email is already linked, request a one-time code below.",
      statsShopInventory: "Stats, shop, inventory",
      classes: "CLASSES",
      survivorZombieClasses: "Survivor and zombie classes",
      votesTeleportsNews: "Votes, teleports, news",
      adminOnly: "Available to administrators",
      ranking: "RANKING",
      topPlayers: "TOP PLAYERS",
      rankingPending: "The global LVL MOD leaderboard will appear here.",
      globalRanking: "GLOBAL LVL MOD RANKING",
      currentSeason: "CURRENT SEASON",
      hallOfFame: "HALL OF FAME",
      seasonHistory: "SEASON HISTORY",
      comparePlayers: "PLAYER VS PLAYER",
      compareTitle: "PLAYER COMPARISON",
      compareLead: "Choose two LVL MOD players and compare their current season statistics.",
      comparePlayerA: "PLAYER A",
      comparePlayerB: "PLAYER B",
      comparePlaceholder: "ENTER PLAYER NAME",
      compareButton: "COMPARE",
      compareSwap: "SWAP PLAYERS",
      comparePickPlayers: "CHOOSE TWO PLAYERS",
      comparePickPlayersText: "Start typing a nickname. Suggestions are taken from the current TOP, but any synchronized player can be entered manually.",
      compareLoading: "LOADING PLAYER PROFILES...",
      compareNotFound: "PLAYER PROFILE NOT FOUND",
      compareError: "PLAYER COMPARISON IS TEMPORARILY UNAVAILABLE",
      compareSamePlayer: "CHOOSE TWO DIFFERENT PLAYERS",
      compareScore: "STAT ADVANTAGE",
      compareAdvantage: "ADVANTAGE",
      compareDraw: "DRAW",
      compareMetricLevel: "LEVEL",
      compareWithPlayer: "COMPARE PLAYER",
      compareTopPickTitle: "CHOOSE FROM TOP",
      compareTopPickHint: "Tap Player A or B, then choose a player below.",
      hallLoading: "LOADING HALL OF FAME...",
      seasonLoading: "LOADING SEASONS...",
      hallWaiting: "HALL OF FAME IS WAITING FOR THE FIRST FINISHED SEASON",
      hallWaitingText: "Champions will appear here automatically after the first quarterly season reset.",
      seasonEmpty: "NO FINISHED SEASONS YET",
      seasonEmptyText: "Season history will be created automatically when the first season ends.",
      seasonChampion: "SEASON CHAMPION",
      seasonFinished: "SEASON FINISHED",
      seasonPlayers: "PLAYERS ARCHIVED",
      seasonOpen: "OPEN SEASON",
      seasonBack: "ALL SEASONS",
      seasonArchive: "ARCHIVED RANKING",
      seasonLoadError: "SEASON DATA IS TEMPORARILY UNAVAILABLE",
      hallLoadError: "HALL OF FAME IS TEMPORARILY UNAVAILABLE",
      richestAtFinish: "BALANCE AT SEASON END",
      leaderboardLoading: "LOADING RANKING...",
      leaderboardEmpty: "NO PLAYERS IN RANKING YET",
      leaderboardError: "RANKING IS TEMPORARILY UNAVAILABLE",
      rankUpdated: "UPDATED",
      onlineNow: "ONLINE",
      offlineNow: "OFFLINE",
      playerCard: "PLAYER CARD",
      liveStatus: "LIVE STATUS",
      lvlProfile: "LVL MOD PROFILE",
      profileNotFound: "LVL MOD PROFILE NOT FOUND",
      profileNotFoundText: "Live server data is available, but this player has not synchronized a web profile yet.",
      botProfileText: "Bots only have live server data.",
      loadingPlayer: "LOADING PLAYER...",
      playerLookupError: "Could not load the LVL MOD profile.",
      team: "TEAM",
      status: "STATUS",
      account: "ACCOUNT",
      playerProfile: "PLAYER PROFILE",
      profilePending: "Sign in to view your LVL MOD profile.",
      usernamePassword: "Username and password",
      shareSite: "SHARE SITE",
      publicLinkOnly: "Public link only",
      downloadGame: "DOWNLOAD THE GAME",
      officialMobileVersion: "Official mobile version",
      downloadOn: "DOWNLOAD ON THE",
      getItOn: "GET IT ON",
      developerWebsite: "DEVELOPER WEBSITE",
      officialKontraWebsite: "Official KONTRA website",
      communityLinks: "COMMUNITIES",
      telegramUnofficial: "Unofficial group",
      discordOfficial: "Official group",
      contactAdministration: "CONTACT SERVER DEVELOPER",
      usefulLinks: "USEFUL LINKS",
      legalDocuments: "DOCUMENTS",
      privacyPolicy: "PRIVACY POLICY",
      deleteAccount: "DELETE ACCOUNT",
      supportCenter: "SUPPORT",
      communityRules: "RULES",
      legalCenterTitle: "PRIVACY & ACCOUNT",
      legalCenterLead: "Manage privacy, account deletion, support and community rules.",
      serverIp: "SERVER IP",
      copyIp: "COPY IP",
      installKontraServer: "INSTALL KONTRA SERVER",
      androidApk: "ANDROID APK",
      comingSoonGooglePlay: "COMING SOON ON GOOGLE PLAY",
      unofficialServer: "UNOFFICIAL SERVER",
      seasonDuration: "SEASON DURATION",
      untilNextSeason: "UNTIL NEXT SEASON",
      gameServers: "GAME SERVERS",
      signInAccount: "SIGN IN TO ACCOUNT",
      username: "USERNAME",
      password: "PASSWORD",
      authPending: "Use your in-game username and password.",
      justNow: "JUST NOW",
      secondsAgo: "SEC. AGO",
      minutesAgo: "MIN. AGO",
      copied: "Copied",
      copyFailed: "Could not copy",
      shareCopied: "Public site link copied",
      authNotReady: "Authorization service is unavailable",
      unknown: "UNKNOWN",
      zombiesTeam: "ZOMBIES",
      survivorsTeam: "SURVIVORS",
      unknownTeam: "NO TEAM",
      alive: "ALIVE",
      dead: "DEAD",
      bot: "BOT",
      hp: "HP",
      armor: "ARMOR",
      score: "SCORE",
      deaths: "DEATHS",
      morePlayers: "MORE",
      noPlayersInTeam: "NO PLAYERS",
      liveData: "LIVE DATA",
      realPlayer: "PLAYER",
      authReady: "Use your in-game username and password.",
      signingIn: "SIGNING IN...",
      ticketSigningIn: "AUTHORIZING THROUGH THE GAME...",
      invalidCredentials: "Incorrect username or password.",
      ticketInvalid: "The personal link has expired or was already used.",
      networkError: "Connection error. Try again.",
      loginSuccess: "Signed in successfully",
      signedInAs: "SIGNED IN AS",
      signOut: "SIGN OUT",
      level: "LEVEL",
      kills: "KILLS",
      kd: "K/D",
      gameTime: "GAME TIME",
      matches: "MATCHES",
      wins: "WINS",
      tokens: "TOKENS",
      richestPlayers: "RICHEST PLAYERS",
      myTokens: "MY TOKENS",
      balanceLabel: "BALANCE",
      tokenUnitSingle: "Token",
      tokenLiveBalance: "Updates after purchases and transfers",
      role: "ROLE",
      winRate: "WIN RATE",
      firstJoin: "FIRST JOIN",
      profileUpdated: "PROFILE UPDATED",
      openProfile: "OPEN PROFILE",
      accountActive: "ACCOUNT ACTIVE",
      avatar: "AVATAR",
      chooseAvatar: "CHOOSE AVATAR",
      avatarPublicHint: "Your avatar is visible to every player in the ranking and public player cards.",
      avatarSaving: "SAVING AVATAR...",
      avatarSaved: "AVATAR SAVED",
      avatarSaveError: "COULD NOT SAVE AVATAR",
      avatarWorkerRequired: "WORKER v3.8 REQUIRED TO PUBLISH AVATAR",
      avatarPendingBadge: "SYNC REQUIRED",
      authUnavailable: "Authorization is temporarily unavailable.",
      settingsLoading: "LOADING PLAYER SETTINGS...",
      settingsNotSynced: "SETTINGS HAVE NOT BEEN SYNCHRONIZED YET",
      settingsNotSyncedText: "Install the new server bridge and join the server once. The settings will then be available even while you are offline.",
      settingsSavedOnline: "SAVED — APPLYING IN THE GAME",
      settingsSavedOffline: "SAVED — WILL APPLY ON YOUR NEXT JOIN",
      settingsApplied: "SETTINGS APPLIED",
      settingsPending: "SAVED SETTINGS ARE WAITING TO BE APPLIED",
      settingsFailed: "THE GAME COULD NOT APPLY THE SETTINGS",
      saveSettings: "SAVE SETTINGS",
      notSelected: "NOT SELECTED",
      languageSetting: "MENU LANGUAGE",
      prefixSetting: "PREFIX",
      prefixColorSetting: "PREFIX COLOR",
      ctSkinSetting: "SURVIVOR SKIN",
      skinColorSetting: "SKIN GLOW",
      critBulletSetting: "CRITICAL SHOT",
      minimapSetting: "MINIMAP",
      weaponSoundsSetting: "WEAPON SOUNDS",
      ctClassSetting: "SURVIVOR CLASS",
      tClassSetting: "ZOMBIE CLASS",
      persistentSettingsLead: "Configure your account now. The selection is saved while offline and is applied when you join the server.",
      liveActionRequired: "This action requires an active server connection.",
      activeSkin: "ACTIVE SKIN",
      selectedSkin: "SELECTED SKIN",
      uiPreview: "UI PREVIEW",
      lvlHubPlayer: "PLAYER",
      skinPreviewOnly: "Preview only — game state is not changed",
      hubOverview: "OVERVIEW",
      hubSwipe: "SWIPE",
      hubOverviewKicker: "LVL HUB",
      hubQuickAccess: "QUICK ACCESS",
      hubAllSections: "8 SECTIONS",
      hubOverviewHint: "Everything important is here. Open any section with one tap; the strip above is only a quick switcher.",
      hubSettingsHint: "Manage language, equipped cosmetics and game options.",
      hubShopHint: "Upgrades, temporary boosts, equipment and cosmetics.",
      hubSkins: "SKINS",
      hubKnives: "KNIVES",
      activeKnife: "ACTIVE KNIFE",
      knifeNone: "OFF",
      knifeCollection: "CT KNIFE COLLECTION",
      chooseKnife: "CHOOSE KNIFE",
      chooseKnifeHint: "Open the CT knife gallery and manage the active knife.",
      knifeGalleryNote: "Glass, Katana and Axe are permanent items. Sickle is free for ADMIN only and cannot be sold or transferred.",
      knifeModels: "KNIVES",
      hubShop: "SHOP",
      shopTitle: "STORE CATALOG",
      hubMarket: "MARKET",
      marketTitle: "TRADING POST",
      marketHint: "Buy player listings, sell your items and manage your offers.",
      hubInventory: "BACKPACK",
      hubFriends: "FRIENDS",
      hubBattlePass: "BATTLE PASS",
      hubSettings: "SETTINGS",
      inventoryTitle: "YOUR ITEMS",
      inventoryHint: "Owned cosmetics and equipment will be collected here.",
      friendsTitle: "SOCIAL",
      friendsHint: "Requests, friends and messages in one place.",
      battlePassTitle: "PROGRESS",
      battlePassHint: "Tasks, days and rewards will appear here.",
      chooseSkinHint: "Open the skin gallery and preview your loadout.",
      survivorCollection: "SURVIVOR COLLECTION",
      chooseSkin: "CHOOSE SKIN",
      models: "MODELS",
      owned: "OWNED",
      locked: "LOCKED",
      preview: "PREVIEW",
      active: "ACTIVE",
      selectSkinAction: "SELECT",
      skinApplying: "APPLYING...",
      skinPending: "WAITING FOR GAME",
      skinApplied: "SKIN APPLIED",
      skinQueued: "SAVED — WILL APPLY ON YOUR NEXT JOIN",
      skinSelectFailed: "COULD NOT APPLY SKIN",
      skinNotOwned: "THIS SKIN IS NOT OWNED",
      buySkinAction: "BUY",
      confirmSkinPurchase: "CONFIRM",
      skinBuyTapAgain: "TAP AGAIN TO CONFIRM PURCHASE",
      skinBuying: "PURCHASING...",
      skinBought: "SKIN PURCHASED",
      skinAlreadyOwned: "SKIN IS ALREADY OWNED",
      skinBuyOffline: "JOIN THE SERVER TO PURCHASE",
      skinBuyInsufficient: "NOT ENOUGH TOKENS",
      skinBuyFailed: "PURCHASE FAILED",
      functionalStore: "SKIN SHOP",
      functionalStoreHint: "Purchases are validated and charged only by the game server. The website never changes your token balance itself.",
      price: "PRICE",
      skinUiDemoNote: "Owned skins can be selected; unowned skins can now be purchased through server validation.",
      shopNextStage: "STORE CATALOG",
      nextStageReadOnly: "Next stage: read-only catalog first, purchases only after Lua validation is connected.",
      nextStageBootstrap: "This section will receive its data from the single /lvl/bootstrap snapshot.",
      currentSettings: "CURRENT WEB SETTINGS",
      currentSettingsHint: "The existing safe settings bridge stays available while the new HUB is being built.",
      openCurrentSettings: "OPEN CURRENT SETTINGS",
      readOnlyBadge: "READ ONLY",
      skinReadOnly: "Actual game selection. Owned skins can now be applied from this gallery.",
      skinReadOnlyNote: "Ownership and active skin come from /lvl/bootstrap. Selecting an owned skin is verified again by the game server before it becomes active.",
      bootstrapLoading: "SYNCING...",
      bootstrapReady: "SYNCED",
      bootstrapWaiting: "WAITING FOR GAME SYNC",
      bootstrapError: "SYNC ERROR",
      bootstrapLogin: "SIGN IN",
      noData: "NO DATA YET",
      readOnlyHint: "Read-only stage: the site displays game data but cannot spend tokens or apply items.",
      refresh: "REFRESH",
      ownedItems: "OWNED ITEMS",
      activeBoosts: "ACTIVE BONUSES",
      friendsList: "FRIENDS",
      friendRequests: "REQUESTS",
      followers: "FOLLOWERS",
      subscriptions: "MY SUBSCRIPTIONS",
      inbox: "INBOX",
      unread: "UNREAD",
      battlePassActive: "PASS ACTIVE",
      battlePassInactive: "PASS NOT ACTIVE",
      daysLeft: "DAYS LEFT",
      dailyReward: "DAILY REWARD",
      claimed: "CLAIMED",
      notClaimed: "AVAILABLE IN GAME",
      tasks: "TASKS",
      gameSettings: "GAME SETTINGS",
      actualValue: "ACTUAL",
      pendingValue: "PENDING",
      defaultSkin: "DEFAULT",
      syncStatus: "SYNC STATUS",
      lastSync: "LAST SYNC",
      readOnlyStore: "CATALOG — VIEW ONLY",
      noFriends: "No entries yet.",
      noMessages: "No messages yet.",
      boostToken: "TOKEN BOOST",
      boostLevel: "LEVEL BOOST",
      boostGold: "GOLD WEAPON",
      boostMinigun: "MINIGUN",
      boostArmor50: "ARMOR 50",
      boostArmor100: "ARMOR 100",
      boostBlind: "BLIND",
      boostGas: "GAS",
      boostInvis: "INVISIBILITY",
      secondsShort: "s",
      hoursShort: "h",
      minutesShort: "m"
    },
    ru: {
      serverOnline: "СЕРВЕР ОНЛАЙН",
      serverOffline: "СЕРВЕР ОФЛАЙН",
      playersOnline: "ИГРОКОВ ОНЛАЙН",
      joinServer: "ПРИСОЕДИНИТЬСЯ К СЕРВЕРУ",
      openingKontra: "ОТКРЫВАЕМ KONTRA...",
      map: "КАРТА",
      mode: "РЕЖИМ",
      updated: "ОБНОВЛЕНО",
      zombies: "ЗОМБИ",
      survivors: "ВЫЖИВШИЕ",
      localTime: "МЕСТНОЕ ВРЕМЯ",
      capacity: "ЗАПОЛНЕНИЕ",
      playersOnServer: "ИГРОКИ НА СЕРВЕРЕ",
      playersBridgeTitle: "ДАННЫЕ ИГРОКОВ НЕДОСТУПНЫ",
      playersBridgeText: "Сервер работает, но живой список игроков ещё не получен.",
      serverEmpty: "СЕРВЕР ПУСТ",
      serverEmptyText: "Сейчас на сервере нет подключённых игроков.",
      serverOfflinePlayers: "СЕРВЕР ОФЛАЙН",
      serverOfflinePlayersText: "Живой список появится после подключения серверного sender.",
      fullScoreboard: "ПОЛНАЯ ТАБЛИЦА",
      yourStats: "ВАША СТАТИСТИКА",
      seasonPromosEyebrow: "БОНУС СЕЗОНА",
      seasonPromosTitle: "ПРОМОКОДЫ НОВОГО СЕЗОНА",
      seasonPromosLead: "Введи промокод в игровой чат или активируй его в профиле.",
      promoTokens: "ТОКЕНОВ",
      promoCopy: "КОПИРОВАТЬ",
      promoCopied: "ПРОМОКОД СКОПИРОВАН",
      promoSynced: "СИНХРОНИЗИРОВАНО С СЕРВЕРОМ",
      promoRedeemTitle: "АКТИВИРОВАТЬ ПРОМОКОД",
      promoRedeemLead: "Активируй серверный промокод здесь или в игровом чате. Каждый код можно использовать один раз на аккаунт.",
      promoRedeemPlaceholder: "ВВЕДИ ПРОМОКОД",
      promoRedeemButton: "АКТИВИРОВАТЬ",
      promoRedeemHint: "Награду выдаёт LVL MOD и сохраняет прямо в игровой профиль.",
      promoRedeemSending: "ПРОВЕРЯЕМ ПРОМОКОД...",
      promoRedeemSuccess: "ПРОМОКОД АКТИВИРОВАН",
      promoRedeemNotFound: "ПРОМОКОД НЕ НАЙДЕН",
      promoRedeemUsed: "ЭТОТ ПРОМОКОД УЖЕ ИСПОЛЬЗОВАН",
      promoRedeemInvalid: "ВВЕДИ КОРРЕКТНЫЙ ПРОМОКОД",
      promoRedeemBusy: "СЕЙЧАС ВЫПОЛНЯЕТСЯ ДРУГАЯ ОПЕРАЦИЯ С ЭКОНОМИКОЙ. ПОПРОБУЙ ЕЩЁ РАЗ.",
      promoRedeemTimeout: "ИГРОВОЙ СЕРВЕР НЕ ПОДТВЕРДИЛ ПРОМОКОД ВОВРЕМЯ.",
      promoRedeemUnavailable: "АКТИВАЦИЯ ПРОМОКОДОВ ВРЕМЕННО НЕДОСТУПНА",
      profileLocked: "ПРОФИЛЬ ЗАКРЫТ",
      profileLockedText: "Войдите через игру или по логину и паролю.",
      signIn: "ВОЙТИ",
      home: "ГЛАВНАЯ",
      server: "СЕРВЕР",
      control: "УПРАВЛЕНИЕ",
      top: "ТОП",
      profile: "ПРОФИЛЬ",
      notifications: "УВЕДОМЛЕНИЯ",
      notificationUnread: "НЕПРОЧИТАНО",
      notificationMarkAll: "ПРОЧИТАТЬ ВСЕ",
      notificationAllRead: "ВСЁ ПРОЧИТАНО",
      notificationEmpty: "УВЕДОМЛЕНИЙ ПОКА НЕТ",
      notificationEmptyText: "Здесь появятся новости сервера, события сезонов и уведомления аккаунта.",
      notificationLoading: "ЗАГРУЗКА УВЕДОМЛЕНИЙ...",
      notificationError: "УВЕДОМЛЕНИЯ ВРЕМЕННО НЕДОСТУПНЫ",
      notificationGuestHint: "Для гостя прочитанное хранится на этом устройстве. Войди в аккаунт для синхронизации.",
      notificationAccountHint: "Прочитанное синхронизируется с твоим аккаунтом KONTRA.",
      notificationNew: "НОВОЕ",
      notificationTypePromo: "ПРОМОКОД",
      notificationTypeSeason: "СЕЗОН",
      notificationTypeUpdate: "ОБНОВЛЕНИЕ",
      notificationTypeAccount: "АККАУНТ",
      notificationTypeSystem: "СИСТЕМА",
      announcementCenter: "ОБЪЯВЛЕНИЯ",
      announcementTileText: "Отправить объявление всем в колокольчик",
      announcementPanelLead: "Опубликуй общее объявление для всех игроков и гостей сайта.",
      announcementTypeLabel: "ТИП",
      announcementTitleRu: "ЗАГОЛОВОК · RU",
      announcementBodyRu: "ТЕКСТ · RU",
      announcementTitleEn: "ЗАГОЛОВОК · EN (НЕОБЯЗАТЕЛЬНО)",
      announcementBodyEn: "ТЕКСТ · EN (НЕОБЯЗАТЕЛЬНО)",
      announcementExpiresLabel: "ПОКАЗЫВАТЬ",
      announcementNever: "БЕЗ СРОКА",
      announcement1Day: "1 ДЕНЬ",
      announcement3Days: "3 ДНЯ",
      announcement7Days: "7 ДНЕЙ",
      announcement30Days: "30 ДНЕЙ",
      announcementSend: "ОПУБЛИКОВАТЬ ОБЪЯВЛЕНИЕ",
      announcementSending: "ПУБЛИКУЮ...",
      announcementSent: "ОБЪЯВЛЕНИЕ ОПУБЛИКОВАНО",
      announcementFailed: "НЕ УДАЛОСЬ ОПУБЛИКОВАТЬ ОБЪЯВЛЕНИЕ",
      announcementRequired: "ВВЕДИ ЗАГОЛОВОК И ТЕКСТ",
      announcementTypeSystem: "ОБЪЯВЛЕНИЕ",
      announcementTypeUpdate: "ОБНОВЛЕНИЕ",
      announcementTypeSeason: "СЕЗОН",
      announcementTypePromo: "ПРОМОКОД",
      liveScoreboard: "ТАБЛИЦА ИГРОКОВ",
      controlCenter: "ЦЕНТР УПРАВЛЕНИЯ",
      retroPinball: "KONTRA ПИНБОЛ",
      retroPinballText: "Собирайте токены и найдите победную лунку",
      pinballDailyBadge: "3 БЕСПЛАТНЫЕ ПОПЫТКИ В ДЕНЬ",
      pinballTokens: "ТОКЕНЫ",
      pinballAttempts: "ПОПЫТКИ",
      pinballRules: "ПРАВИЛА",
      pinballRewards: "НАГРАДЫ",
      pinballBuyAttempt: "КУПИТЬ ПОПЫТКУ",
      pinballRulesLead: "Зарегистрированный игрок получает 3 бесплатные попытки каждый день в 00:00 МСК.",
      pinballRuleLaunch: "Используйте одну попытку и нажмите ЗАПУСК, чтобы подать шар на поле.",
      pinballRuleFlippers: "Удерживайте ЛЕВУЮ и ПРАВУЮ кнопки, управляйте лапками и не дайте шару упасть.",
      pinballRuleExit: "Направьте шар в зелёную лунку EXIT, чтобы победить и забрать джекпот.",
      pinballRuleDrain: "Если шар уйдёт в центр или в один из нижних боковых сливов, попытка закончится.",
      pinballRewardsLead: "Мишени перезаряжаются во время игры. За одну попытку начисляется не более 75 токенов.",
      pinballBlueTarget: "СИНЯЯ МИШЕНЬ",
      pinballBlueTargetText: "Быстрая мишень · 1 токен",
      pinballVioletTarget: "ФИОЛЕТОВЫЙ БАМПЕР",
      pinballVioletTargetText: "Средняя мишень · 5 токенов",
      pinballGoldTarget: "ЗОЛОТОЙ БАМПЕР",
      pinballGoldTargetText: "Редкая мишень · 10 токенов",
      pinballExtraTarget: "ДОП. ПОПЫТКА",
      pinballExtraTargetText: "Маленький зелёный круг · один раз за игру",
      pinballExitReward: "ПОБЕДНАЯ ЛУНКА",
      pinballExitRewardText: "Джекпот EXIT · завершает игру",
      pinballReady: "ГОТОВЫ?",
      pinballReadyText: "Одна попытка — один шар. Найдите лунку EXIT, пока шар не ушёл в слив.",
      pinballStart: "ИСПОЛЬЗОВАТЬ ПОПЫТКУ",
      pinballLaunch: "ЗАПУСК",
      pinballLeft: "ЛЕВАЯ",
      pinballRight: "ПРАВАЯ",
      pinballTip: "Клавиатура: A / D или ← / →. Пробел запускает шар.",
      pinballLaunchPrompt: "НАЖМИТЕ ЗАПУСК",
      pinballLaunchPromptText: "Шар готов в пусковом канале.",
      pinballLost: "ПОПЫТКА ПРОИГРАНА",
      pinballLostText: "Шар ушёл в слив. Вы собрали {tokens} токенов.",
      pinballVictory: "ВЫХОД НАЙДЕН",
      pinballVictoryText: "Победа! За попытку начислено {tokens} токенов.",
      pinballNextAttempt: "ЕЩЁ ПОПЫТКА",
      pinballNoAttempts: "ПОПЫТКИ ЗАКОНЧИЛИСЬ",
      pinballNoAttemptsText: "Возвращайтесь после 00:00 МСК или купите попытку за 100 токенов.",
      pinballSignIn: "НУЖЕН ВХОД",
      pinballSignInText: "Ежедневные попытки и токены доступны только зарегистрированным игрокам KONTRA.",
      pinballOpenLogin: "ВОЙТИ",
      pinballLoading: "ЗАГРУЗКА АРКАДЫ",
      pinballLoadingText: "Проверяем ваши попытки и баланс токенов...",
      pinballStarting: "ЗАПУСК ПОПЫТКИ",
      pinballStartingText: "Аркада резервирует одну попытку...",
      pinballSaving: "НАЧИСЛЯЕМ НАГРАДЫ",
      pinballSavingText: "Сервер проверяет результат игры...",
      pinballTryAgain: "ПОВТОРИТЬ",
      pinballBuySuccess: "Куплена одна попытка за 100 токенов.",
      pinballNotEnoughTokens: "Для покупки попытки нужно 100 токенов.",
      pinballExtraEarned: "+1 ПОПЫТКА",
      pinballPreview: "РЕЖИМ ПРОВЕРКИ",
      pinballPreviewText: "Новый Worker ещё не установлен. Эта тестовая игра сохранена только на устройстве.",
      pinballUnavailable: "АРКАДА НЕДОСТУПНА",
      pinballUnavailableText: "Сервер попыток не ответил. Попробуйте ещё раз.",
      webControl: "WEB УПРАВЛЕНИЕ",
      webControlReady: "УПРАВЛЕНИЕ ПОДКЛЮЧЕНО",
      webControlHint: "Постоянные настройки сохраняются офлайн. Для живых команд требуется подключение к серверу.",
      controlWaiting: "Выберите действие.",
      controlLoginRequired: "Сначала войдите в аккаунт.",
      controlSending: "ОТПРАВЛЯЮ КОМАНДУ...",
      controlDelivered: "КОМАНДА ДОСТАВЛЕНА В ИГРУ",
      controlPlayerOffline: "Ваш игрок сейчас не подключён к серверу.",
      controlFailed: "Не удалось выполнить команду.",
      controlTimeout: "Сервер не подтвердил команду вовремя.",
      controlLvlLead: "Открыть меню LVL MOD прямо в вашей активной игровой сессии.",
      controlClassesLead: "Выберите меню классов, которое нужно открыть в игре.",
      controlMenuLead: "Открыть главное серверное меню в игре.",
      controlAdminLead: "Управление, доступное только администраторам.",
      openLvl: "ОТКРЫТЬ LVL MOD",
      openLvlText: "Статистика, магазин, рюкзак и функции LVL MOD",
      openCtClasses: "КЛАССЫ ВЫЖИВШИХ",
      openCtClassesText: "Открыть меню CT-классов выживших",
      openTClasses: "КЛАССЫ ЗОМБИ",
      openTClassesText: "Открыть меню T-классов зомби",
      openGameMenu: "ОТКРЫТЬ GAME MENU",
      openGameMenuText: "Голосования, телепорты, новости и функции сервера",
      openAdminMenu: "ОТКРЫТЬ ADMIN CONTROL",
      openAdminMenuText: "Админ-меню в активной игровой сессии",
      gameMenuWebLead: "Выберите живое действие сервера. Ваш игрок должен находиться на сервере.",
      openTeleport: "ОТКРЫТЬ ТЕЛЕПОРТ",
      openTeleportText: "Открыть меню телепорта к игрокам",
      openTurret: "ОТКРЫТЬ МЕНЮ ТУРЕЛИ",
      openTurretText: "Доступно при выбранном классе Turret",
      soundOn: "ВКЛЮЧИТЬ ЗВУКИ",
      soundOnText: "Включить серверные и оружейные звуки",
      soundOff: "ВЫКЛЮЧИТЬ ЗВУКИ",
      soundOffText: "Отключить дополнительные звуки сервера",
      openAdminMessage: "НАПИСАТЬ АДМИНУ",
      openAdminMessageText: "Открыть форму личного сообщения администратору",
      adminPanelLead: "Выберите действие, игрока онлайн и дополнительное значение.",
      adminActionLabel: "ДЕЙСТВИЕ АДМИНА",
      adminTargetLabel: "ЦЕЛЕВОЙ ИГРОК",
      adminValueLabel: "ЗНАЧЕНИЕ",
      chooseAction: "ВЫБЕРИТЕ ДЕЙСТВИЕ",
      choosePlayer: "ВЫБЕРИТЕ ИГРОКА",
      noLivePlayers: "НЕТ ИГРОКОВ ОНЛАЙН",
      executeAction: "ВЫПОЛНИТЬ ДЕЙСТВИЕ",
      adminOpenInGame: "ОТКРЫТЬ АДМИН-МЕНЮ В ИГРЕ",
      adminKick: "КИКНУТЬ ИГРОКА",
      adminBan: "ЗАБАНИТЬ ИГРОКА",
      adminMute: "ВЫДАТЬ МУТ ЧАТА",
      adminUnmute: "СНЯТЬ МУТ ЧАТА",
      adminVoiceMute: "ВЫДАТЬ ГОЛОСОВОЙ МУТ",
      adminVoiceUnmute: "СНЯТЬ ГОЛОСОВОЙ МУТ",
      adminKill: "УБИТЬ ИГРОКА",
      adminRevive: "ВОСКРЕСИТЬ ИГРОКА",
      adminTeam: "СМЕНИТЬ КОМАНДУ",
      adminHp: "УСТАНОВИТЬ HP",
      adminArmor: "УСТАНОВИТЬ БРОНЮ",
      adminMoney: "ВЫДАТЬ ДЕНЬГИ",
      adminTeleport: "ТЕЛЕПОРТИРОВАТЬ К АДМИНУ",
      adminImmortal: "ПЕРЕКЛЮЧИТЬ БЕССМЕРТИЕ",
      adminInvisible: "ПЕРЕКЛЮЧИТЬ НЕВИДИМОСТЬ",
      adminResetScore: "СБРОСИТЬ СЧЁТ",
      adminEndMap: "ЗАВЕРШИТЬ КАРТУ",
      adminRoundMode: "ЗАПУСТИТЬ РЕЖИМ РАУНДА",
      confirmAdminDanger: "Подтвердить это административное действие?",
      targetOffline: "Выбранный игрок уже вышел с сервера.",
      targetChanged: "Список игроков изменился. Откройте панель заново и выберите игрока ещё раз.",
      selfProtected: "Это действие нельзя применить к самому себе.",
      adminProtected: "Другой администратор защищён от этого действия.",
      controlInvalidValue: "Недопустимое значение действия.",
      adminRequired: "Требуются права администратора.",
      whereLoginPassword: "Где взять логин и пароль?",
      authHelpTitle: "ГДЕ ВЗЯТЬ ДАННЫЕ ДЛЯ ВХОДА",
      authHelpText: "Введите логин и пароль как у вас в настройках игры, где вы меняете свой ник.",
      authFirstLoginHint: "Сначала войдите логином и паролем из игрового аккаунта. После этого в ПРОФИЛЕ можно привязать почту или Google.",
      howToSignIn: "КАК ВОЙТИ?",
      forgotPassword: "ЗАБЫЛИ ПАРОЛЬ?",
      otherSignInMethods: "ДРУГИЕ СПОСОБЫ ВХОДА",
      orText: "ИЛИ",
      showPassword: "ПОКАЗАТЬ ПАРОЛЬ",
      hidePassword: "СКРЫТЬ ПАРОЛЬ",
      emailCodeLogin: "ВОЙТИ ПО КОДУ ИЗ ПОЧТЫ",
      emailOrUsername: "ПОЧТА ИЛИ ИГРОВОЙ ЛОГИН",
      sendCode: "ОТПРАВИТЬ КОД",
      codeLabel: "6-ЗНАЧНЫЙ КОД",
      verifyAndSignIn: "ПРОВЕРИТЬ И ВОЙТИ",
      emailLoginHint: "Вход по почте работает только после первого входа игровым аккаунтом и привязки подтвержденной почты в ПРОФИЛЕ.",
      googleLoginHint: "Вход через Google работает только после привязки Google к этому KONTRA аккаунту в ПРОФИЛЕ.",
      securityTitle: "БЕЗОПАСНОСТЬ АККАУНТА",
      securityLead: "Способы восстановления привязываются только после первого входа игровым аккаунтом и не создают отдельный KONTRA аккаунт.",
      emailLinkTitle: "ПОЧТА",
      googleLinkTitle: "GOOGLE",
      linked: "ПРИВЯЗАНО",
      notLinked: "НЕ ПРИВЯЗАНО",
      linkEmail: "ПРИВЯЗАТЬ ПОЧТУ",
      changeEmail: "СМЕНИТЬ ПОЧТУ",
      emailLinkHint: "Мы отправим 6-значный код. После подтверждения почта подходит для входа по коду и доступа при забытом пароле.",
      googleLinkHint: "Привяжите Google один раз. В следующий раз сможете войти через Google без ввода игрового пароля.",
      verifyEmail: "ПОДТВЕРДИТЬ ПОЧТУ",
      unlink: "ОТВЯЗАТЬ",
      codeSent: "Код отправлен. Проверьте почту.",
      codeVerified: "Почта успешно привязана.",
      invalidCode: "Неверный или просроченный код.",
      emailAlreadyLinked: "Эта почта уже привязана к другому KONTRA аккаунту.",
      googleNotLinked: "Этот Google аккаунт ещё не привязан к KONTRA. Сначала войдите игровым аккаунтом и привяжите Google в ПРОФИЛЕ.",
      googleAlreadyLinked: "Этот Google аккаунт уже привязан к другому KONTRA аккаунту.",
      emailNotConfigured: "Отправка почты ещё не настроена в Worker.",
      googleNotConfigured: "Вход через Google ещё не настроен.",
      securityUpdated: "БЕЗОПАСНОСТЬ АККАУНТА ОБНОВЛЕНА",
      forgotPasswordHint: "Забыли пароль? Если почта уже привязана, запросите одноразовый код ниже.",
      statsShopInventory: "Статистика, магазин, рюкзак",
      classes: "КЛАССЫ",
      survivorZombieClasses: "Классы людей и зомби",
      votesTeleportsNews: "Голосования, телепорт, новости",
      adminOnly: "Доступно администраторам",
      ranking: "РЕЙТИНГ",
      topPlayers: "ТОП ИГРОКОВ",
      rankingPending: "Здесь появится глобальный рейтинг LVL MOD.",
      globalRanking: "ГЛОБАЛЬНЫЙ РЕЙТИНГ LVL MOD",
      currentSeason: "ТЕКУЩИЙ СЕЗОН",
      hallOfFame: "ЗАЛ СЛАВЫ",
      seasonHistory: "ИСТОРИЯ СЕЗОНОВ",
      comparePlayers: "ИГРОК VS ИГРОК",
      compareTitle: "СРАВНЕНИЕ ИГРОКОВ",
      compareLead: "Выбери двух игроков LVL MOD и сравни их статистику текущего сезона.",
      comparePlayerA: "ИГРОК A",
      comparePlayerB: "ИГРОК B",
      comparePlaceholder: "ВВЕДИ НИК ИГРОКА",
      compareButton: "СРАВНИТЬ",
      compareSwap: "ПОМЕНЯТЬ ИГРОКОВ",
      comparePickPlayers: "ВЫБЕРИ ДВУХ ИГРОКОВ",
      comparePickPlayersText: "Начни вводить ник. Подсказки берутся из текущего ТОПа, но можно вручную указать любого синхронизированного игрока.",
      compareLoading: "ЗАГРУЖАЕМ ПРОФИЛИ ИГРОКОВ...",
      compareNotFound: "ПРОФИЛЬ ИГРОКА НЕ НАЙДЕН",
      compareError: "СРАВНЕНИЕ ИГРОКОВ ВРЕМЕННО НЕДОСТУПНО",
      compareSamePlayer: "ВЫБЕРИ ДВУХ РАЗНЫХ ИГРОКОВ",
      compareScore: "ПРЕИМУЩЕСТВО ПО ПОКАЗАТЕЛЯМ",
      compareAdvantage: "ПРЕИМУЩЕСТВО",
      compareDraw: "НИЧЬЯ",
      compareMetricLevel: "УРОВЕНЬ",
      compareWithPlayer: "СРАВНИТЬ ИГРОКА",
      compareTopPickTitle: "ВЫБРАТЬ ИЗ ТОПА",
      compareTopPickHint: "Нажми поле Игрок A или B, затем выбери игрока ниже.",
      hallLoading: "ЗАГРУЗКА ЗАЛА СЛАВЫ...",
      seasonLoading: "ЗАГРУЗКА СЕЗОНОВ...",
      hallWaiting: "ЗАЛ СЛАВЫ ЖДЁТ ЗАВЕРШЕНИЯ ПЕРВОГО СЕЗОНА",
      hallWaitingText: "Чемпионы появятся здесь автоматически после первого квартального сброса сезона.",
      seasonEmpty: "ЗАВЕРШЁННЫХ СЕЗОНОВ ПОКА НЕТ",
      seasonEmptyText: "История будет создана автоматически после окончания первого сезона.",
      seasonChampion: "ЧЕМПИОН СЕЗОНА",
      seasonFinished: "СЕЗОН ЗАВЕРШЁН",
      seasonPlayers: "ИГРОКОВ В АРХИВЕ",
      seasonOpen: "ОТКРЫТЬ СЕЗОН",
      seasonBack: "ВСЕ СЕЗОНЫ",
      seasonArchive: "АРХИВНЫЙ РЕЙТИНГ",
      seasonLoadError: "ДАННЫЕ СЕЗОНА ВРЕМЕННО НЕДОСТУПНЫ",
      hallLoadError: "ЗАЛ СЛАВЫ ВРЕМЕННО НЕДОСТУПЕН",
      richestAtFinish: "БАЛАНС НА КОНЕЦ СЕЗОНА",
      leaderboardLoading: "ЗАГРУЗКА РЕЙТИНГА...",
      leaderboardEmpty: "В РЕЙТИНГЕ ПОКА НЕТ ИГРОКОВ",
      leaderboardError: "РЕЙТИНГ ВРЕМЕННО НЕДОСТУПЕН",
      rankUpdated: "ОБНОВЛЕНО",
      onlineNow: "ОНЛАЙН",
      offlineNow: "ОФЛАЙН",
      playerCard: "КАРТОЧКА ИГРОКА",
      liveStatus: "ЖИВОЙ СТАТУС",
      lvlProfile: "ПРОФИЛЬ LVL MOD",
      profileNotFound: "ПРОФИЛЬ LVL MOD НЕ НАЙДЕН",
      profileNotFoundText: "Живые данные сервера доступны, но веб-профиль этого игрока ещё не синхронизирован.",
      botProfileText: "Для ботов доступны только живые данные сервера.",
      loadingPlayer: "ЗАГРУЗКА ИГРОКА...",
      playerLookupError: "Не удалось загрузить профиль LVL MOD.",
      team: "КОМАНДА",
      status: "СТАТУС",
      account: "АККАУНТ",
      playerProfile: "ПРОФИЛЬ ИГРОКА",
      profilePending: "Войдите, чтобы открыть профиль LVL MOD.",
      usernamePassword: "Логин и пароль",
      shareSite: "ПОДЕЛИТЬСЯ САЙТОМ",
      publicLinkOnly: "Только публичная ссылка",
      downloadGame: "СКАЧАТЬ ИГРУ",
      officialMobileVersion: "Официальная мобильная версия",
      downloadOn: "ЗАГРУЗИТЬ В",
      getItOn: "СКАЧАТЬ В",
      developerWebsite: "САЙТ РАЗРАБОТЧИКА",
      officialKontraWebsite: "Официальный сайт KONTRA",
      communityLinks: "СООБЩЕСТВА",
      telegramUnofficial: "Неофициальная группа",
      discordOfficial: "Официальная группа",
      contactAdministration: "СВЯЗЬ С РАЗРАБОТЧИКОМ СЕРВЕРА",
      usefulLinks: "ПОЛЕЗНЫЕ ССЫЛКИ",
      legalDocuments: "ДОКУМЕНТЫ",
      privacyPolicy: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
      deleteAccount: "УДАЛИТЬ АККАУНТ",
      supportCenter: "ПОДДЕРЖКА",
      communityRules: "ПРАВИЛА",
      legalCenterTitle: "КОНФИДЕНЦИАЛЬНОСТЬ И АККАУНТ",
      legalCenterLead: "Политика конфиденциальности, удаление аккаунта, поддержка и правила сообщества.",
      serverIp: "IP СЕРВЕРА",
      copyIp: "КОПИРОВАТЬ IP",
      installKontraServer: "УСТАНОВИТЬ KONTRA SERVER",
      androidApk: "ANDROID APK",
      comingSoonGooglePlay: "СКОРО В GOOGLE PLAY",
      unofficialServer: "НЕОФИЦИАЛЬНЫЙ СЕРВЕР",
      seasonDuration: "ДЛИТЕЛЬНОСТЬ СЕЗОНА",
      untilNextSeason: "ДО НОВОГО СЕЗОНА",
      gameServers: "ИГРОВЫЕ СЕРВЕРЫ",
      signInAccount: "ВОЙТИ В АККАУНТ",
      username: "ЛОГИН",
      password: "ПАРОЛЬ",
      authPending: "Введите игровой логин и пароль.",
      justNow: "ТОЛЬКО ЧТО",
      secondsAgo: "СЕК. НАЗАД",
      minutesAgo: "МИН. НАЗАД",
      copied: "Скопировано",
      copyFailed: "Не удалось скопировать",
      shareCopied: "Публичная ссылка скопирована",
      authNotReady: "Сервис авторизации временно недоступен",
      unknown: "НЕИЗВЕСТНО",
      zombiesTeam: "ЗОМБИ",
      survivorsTeam: "ВЫЖИВШИЕ",
      unknownTeam: "БЕЗ КОМАНДЫ",
      alive: "ЖИВ",
      dead: "МЁРТВ",
      bot: "БОТ",
      hp: "HP",
      armor: "БРОНЯ",
      score: "СЧЁТ",
      deaths: "СМЕРТИ",
      morePlayers: "ЕЩЁ",
      noPlayersInTeam: "НЕТ ИГРОКОВ",
      liveData: "ЖИВЫЕ ДАННЫЕ",
      realPlayer: "ИГРОК",
      authReady: "Введите игровой логин и пароль.",
      signingIn: "ВХОД...",
      ticketSigningIn: "АВТОРИЗАЦИЯ ЧЕРЕЗ ИГРУ...",
      invalidCredentials: "Неверный логин или пароль.",
      ticketInvalid: "Персональная ссылка истекла или уже использована.",
      networkError: "Ошибка соединения. Повторите попытку.",
      loginSuccess: "Вход выполнен",
      signedInAs: "ВЫ ВОШЛИ КАК",
      signOut: "ВЫЙТИ",
      level: "УРОВЕНЬ",
      kills: "УБИЙСТВА",
      kd: "K/D",
      gameTime: "ВРЕМЯ В ИГРЕ",
      matches: "МАТЧИ",
      wins: "ПОБЕДЫ",
      tokens: "ТОКЕНЫ",
      richestPlayers: "ТОП БОГАЧЕЙ",
      myTokens: "МОИ ТОКЕНЫ",
      balanceLabel: "BALANCE",
      tokenUnitSingle: "Token",
      tokenLiveBalance: "Обновляется после покупок и переводов",
      role: "РОЛЬ",
      winRate: "ПРОЦЕНТ ПОБЕД",
      firstJoin: "ПЕРВЫЙ ВХОД",
      profileUpdated: "ПРОФИЛЬ ОБНОВЛЁН",
      openProfile: "ОТКРЫТЬ ПРОФИЛЬ",
      accountActive: "АККАУНТ АКТИВЕН",
      avatar: "АВАТАР",
      chooseAvatar: "ВЫБЕРИТЕ АВАТАР",
      avatarPublicHint: "Ваш аватар видят все игроки в рейтинге и публичных карточках.",
      avatarSaving: "СОХРАНЯЮ АВАТАР...",
      avatarSaved: "АВАТАР СОХРАНЁН",
      avatarSaveError: "НЕ УДАЛОСЬ СОХРАНИТЬ АВАТАР",
      avatarWorkerRequired: "ДЛЯ ПУБЛИЧНОГО АВАТАРА НУЖЕН WORKER v3.8",
      avatarPendingBadge: "НУЖНА СИНХРОНИЗАЦИЯ",
      authUnavailable: "Авторизация временно недоступна.",
      settingsLoading: "ЗАГРУЗКА НАСТРОЕК ИГРОКА...",
      settingsNotSynced: "НАСТРОЙКИ ЕЩЁ НЕ СИНХРОНИЗИРОВАНЫ",
      settingsNotSyncedText: "Установите новый серверный мост и один раз зайдите на сервер. После этого настройки будут доступны даже офлайн.",
      settingsSavedOnline: "СОХРАНЕНО — ПРИМЕНЯЮ В ИГРЕ",
      settingsSavedOffline: "СОХРАНЕНО — ПРИМЕНИТСЯ ПРИ СЛЕДУЮЩЕМ ВХОДЕ",
      settingsApplied: "НАСТРОЙКИ ПРИМЕНЕНЫ",
      settingsPending: "СОХРАНЁННЫЕ НАСТРОЙКИ ОЖИДАЮТ ПРИМЕНЕНИЯ",
      settingsFailed: "ИГРА НЕ СМОГЛА ПРИМЕНИТЬ НАСТРОЙКИ",
      saveSettings: "СОХРАНИТЬ НАСТРОЙКИ",
      notSelected: "НЕ ВЫБРАНО",
      languageSetting: "ЯЗЫК МЕНЮ",
      prefixSetting: "ПРЕФИКС",
      prefixColorSetting: "ЦВЕТ ПРЕФИКСА",
      ctSkinSetting: "СКИН ВЫЖИВШЕГО",
      skinColorSetting: "СВЕЧЕНИЕ СКИНА",
      critBulletSetting: "КРИТИЧЕСКИЙ ВЫСТРЕЛ",
      minimapSetting: "МИНИ-КАРТА",
      weaponSoundsSetting: "ЗВУКИ ОРУЖИЯ",
      ctClassSetting: "КЛАСС ВЫЖИВШЕГО",
      tClassSetting: "КЛАСС ЗОМБИ",
      persistentSettingsLead: "Настройте аккаунт сейчас. Выбор сохраняется офлайн и применяется после входа на сервер.",
      liveActionRequired: "Для этого действия игрок должен находиться на сервере.",
      activeSkin: "АКТИВНЫЙ СКИН",
      selectedSkin: "ВЫБРАННЫЙ СКИН",
      uiPreview: "МАКЕТ UI",
      lvlHubPlayer: "ИГРОК",
      skinPreviewOnly: "Только предпросмотр — состояние игры не меняется",
      hubOverview: "ОБЗОР",
      hubSwipe: "ЛИСТАЙ",
      hubOverviewKicker: "LVL HUB",
      hubQuickAccess: "БЫСТРЫЙ ДОСТУП",
      hubAllSections: "8 РАЗДЕЛОВ",
      hubOverviewHint: "Все важные разделы собраны здесь. Откройте нужный одним нажатием; полоска выше — только быстрый переключатель.",
      hubSettingsHint: "Язык, экипировка, косметика и игровые параметры.",
      hubShopHint: "Прокачка, временные бонусы, экипировка и косметика.",
      hubSkins: "СКИНЫ",
      hubKnives: "НОЖИ",
      activeKnife: "АКТИВНЫЙ НОЖ",
      knifeNone: "ВЫКЛ",
      knifeCollection: "КОЛЛЕКЦИЯ НОЖЕЙ КТ",
      chooseKnife: "ВЫБЕРИТЕ НОЖ",
      chooseKnifeHint: "Откройте галерею ножей КТ и управляйте активным ножом.",
      knifeGalleryNote: "Стеклянный нож, Катана и Топор — постоянные товары. Серп бесплатен только для ADMIN и не продаётся/не передаётся.",
      knifeModels: "НОЖА",
      hubShop: "МАГАЗИН",
      shopTitle: "КАТАЛОГ МАГАЗИНА",
      hubMarket: "ЛАВКА",
      marketTitle: "ТОРГОВАЯ ЛАВКА",
      marketHint: "Покупайте объявления игроков, продавайте свои предметы и управляйте продажами.",
      hubInventory: "РЮКЗАК",
      hubFriends: "ДРУЗЬЯ",
      hubBattlePass: "BATTLE PASS",
      hubSettings: "НАСТРОЙКИ",
      inventoryTitle: "ВАШИ ПРЕДМЕТЫ",
      inventoryHint: "Купленная косметика и предметы будут собраны здесь.",
      friendsTitle: "СОЦИАЛЬНОЕ",
      friendsHint: "Заявки, друзья и сообщения в одном месте.",
      battlePassTitle: "ПРОГРЕСС",
      battlePassHint: "Задания, дни и награды будут отображаться здесь.",
      chooseSkinHint: "Откройте галерею скинов и посмотрите выбранный образ.",
      survivorCollection: "КОЛЛЕКЦИЯ ВЫЖИВШЕГО",
      chooseSkin: "ВЫБЕРИТЕ СКИН",
      models: "МОДЕЛЕЙ",
      owned: "КУПЛЕН",
      locked: "НЕ КУПЛЕН",
      preview: "ПРЕДПРОСМОТР",
      active: "АКТИВЕН",
      selectSkinAction: "ВЫБРАТЬ",
      skinApplying: "ПРИМЕНЯЕТСЯ...",
      skinPending: "ЖДЁТ ИГРУ",
      skinApplied: "СКИН ПРИМЕНЁН",
      skinQueued: "СОХРАНЕНО — ПРИМЕНИТСЯ ПРИ СЛЕДУЮЩЕМ ВХОДЕ",
      skinSelectFailed: "НЕ УДАЛОСЬ ПРИМЕНИТЬ СКИН",
      skinNotOwned: "ЭТОТ СКИН НЕ КУПЛЕН",
      buySkinAction: "КУПИТЬ",
      confirmSkinPurchase: "ПОДТВЕРДИТЬ",
      skinBuyTapAgain: "НАЖМИТЕ ЕЩЁ РАЗ ДЛЯ ПОДТВЕРЖДЕНИЯ ПОКУПКИ",
      skinBuying: "ПОКУПКА...",
      skinBought: "СКИН КУПЛЕН",
      skinAlreadyOwned: "СКИН УЖЕ КУПЛЕН",
      skinBuyOffline: "ДЛЯ ПОКУПКИ ЗАЙДИТЕ НА СЕРВЕР",
      skinBuyInsufficient: "НЕДОСТАТОЧНО ТОКЕНОВ",
      skinBuyFailed: "ПОКУПКА НЕ ВЫПОЛНЕНА",
      functionalStore: "МАГАЗИН СКИНОВ",
      functionalStoreHint: "Покупку проверяет и списывает только игровой сервер. Сайт сам никогда не меняет баланс токенов.",
      price: "ЦЕНА",
      skinUiDemoNote: "Купленные скины можно выбирать, а некупленные — покупать после проверки игровым сервером.",
      shopNextStage: "КАТАЛОГ МАГАЗИНА",
      nextStageReadOnly: "Следующий этап: сначала каталог только для просмотра; покупки подключим только после проверки Lua.",
      nextStageBootstrap: "Этот раздел будет получать данные из одного снимка /lvl/bootstrap.",
      currentSettings: "ТЕКУЩИЕ WEB-НАСТРОЙКИ",
      currentSettingsHint: "Рабочий безопасный мост настроек остаётся доступен, пока мы строим новый HUB.",
      openCurrentSettings: "ОТКРЫТЬ ТЕКУЩИЕ НАСТРОЙКИ",
      readOnlyBadge: "ТОЛЬКО ЧТЕНИЕ",
      skinReadOnly: "Показывается реальный выбор в игре. Купленные скины теперь можно применять прямо здесь.",
      skinReadOnlyNote: "Владение и активный скин приходят из /lvl/bootstrap. Перед применением игровой сервер повторно проверяет, что скин действительно куплен.",
      bootstrapLoading: "СИНХРОНИЗАЦИЯ...",
      bootstrapReady: "СИНХРОНИЗИРОВАНО",
      bootstrapWaiting: "ЖДЁМ СИНХРОНИЗАЦИЮ С ИГРОЙ",
      bootstrapError: "ОШИБКА СИНХРОНИЗАЦИИ",
      bootstrapLogin: "ВОЙТИ",
      noData: "ДАННЫХ ПОКА НЕТ",
      readOnlyHint: "Этап только для чтения: сайт показывает игровые данные, но не списывает токены и не применяет предметы.",
      refresh: "ОБНОВИТЬ",
      ownedItems: "КУПЛЕННЫЕ ПРЕДМЕТЫ",
      activeBoosts: "АКТИВНЫЕ БОНУСЫ",
      friendsList: "ДРУЗЬЯ",
      friendRequests: "ЗАЯВКИ",
      followers: "ПОДПИСЧИКИ",
      subscriptions: "МОИ ПОДПИСКИ",
      inbox: "СООБЩЕНИЯ",
      unread: "НЕ ПРОЧИТАНО",
      battlePassActive: "ПРОПУСК АКТИВЕН",
      battlePassInactive: "ПРОПУСК НЕ АКТИВЕН",
      daysLeft: "ДНЕЙ ОСТАЛОСЬ",
      dailyReward: "ЕЖЕДНЕВНАЯ НАГРАДА",
      claimed: "ПОЛУЧЕНО",
      notClaimed: "ДОСТУПНО В ИГРЕ",
      tasks: "ЗАДАНИЯ",
      gameSettings: "ИГРОВЫЕ НАСТРОЙКИ",
      actualValue: "В ИГРЕ",
      pendingValue: "ОЖИДАЕТ",
      defaultSkin: "ПО УМОЛЧАНИЮ",
      syncStatus: "СИНХРОНИЗАЦИЯ",
      lastSync: "ПОСЛЕДНИЙ СНИМОК",
      readOnlyStore: "КАТАЛОГ — ТОЛЬКО ПРОСМОТР",
      noFriends: "Записей пока нет.",
      noMessages: "Сообщений пока нет.",
      boostToken: "БУСТ ТОКЕНОВ",
      boostLevel: "БУСТ УРОВНЯ",
      boostGold: "ЗОЛОТОЕ ОРУЖИЕ",
      boostMinigun: "МИНИГАН",
      boostArmor50: "БРОНЯ 50",
      boostArmor100: "БРОНЯ 100",
      boostBlind: "ОСЛЕПЛЕНИЕ",
      boostGas: "ГАЗ",
      boostInvis: "НЕВИДИМОСТЬ",
      secondsShort: "с",
      hoursShort: "ч",
      minutesShort: "м"
    }
  };

  let language = localStorage.getItem("kontra:lang") || "en";
  // Version the preference so every existing and new visitor starts v13 in night mode.
  // Their choice is remembered normally after the first v13 visit.
  const THEME_KEY = "kontra:theme:v13";
  let colorTheme = localStorage.getItem(THEME_KEY) === "day" ? "day" : "night";
  let toastTimer = null;
  let statusTimer = null;
  let statusRequestInFlight = false;
  let statusFailureCount = 0;
  const STATUS_LEADER_KEY = "kontra:status-leader:v21";
  const STATUS_CACHE_KEY = "kontra:status-cache:v21";
  const STATUS_TAB_ID = (() => {
    try {
      if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
    } catch {}
    return `tab-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  })();
  const SESSION_KEY = "kontra:session";
  try { localStorage.removeItem("kontra:pending-avatar"); } catch {}

  let authState = {
    loading: false,
    avatarSaving: false,
    account: null,
    profile: null,
    security: null,
    sessionToken: localStorage.getItem(SESSION_KEY) || ""
  };
  let promoRedeemState = {
    busy: false,
    code: "",
    message: "",
    tone: ""
  };
  const GUEST_NOTIFICATION_READ_KEY = "kontra:notification-guest-read:v1";
  let notificationState = {
    open: false,
    loading: false,
    error: "",
    authenticated: false,
    unreadCount: 0,
    notifications: [],
    loadedAt: 0
  };
  let leaderboardState = {
    sort: "level",
    loading: false,
    loadedAt: 0,
    players: []
  };
  let compareState = {
    leftName: "",
    rightName: "",
    leftProfile: null,
    rightProfile: null,
    loading: false,
    error: "",
    message: "",
    pickSide: "right"
  };
  let seasonArchiveState = {
    mode: "current",
    hallLoading: false,
    hallLoadedAt: 0,
    hall: null,
    hallError: "",
    seasonsLoading: false,
    seasonsLoadedAt: 0,
    seasons: [],
    seasonsError: "",
    selectedSeason: "",
    seasonSort: "level",
    seasonLoading: false,
    seasonMeta: null,
    seasonPlayers: [],
    seasonError: ""
  };
  let playerModalState = {
    requestId: 0,
    loading: false,
    live: null,
    profile: null,
    error: ""
  };
  let controlState = {
    panel: "",
    busy: false,
    commandId: ""
  };
  let settingsState = {
    data: null,
    loading: false,
    requestId: 0
  };

  const LVL_SKINS = Object.freeze([
    { skinId: "sas", name: "SAS", price: 6000, preview: "assets/skins/sas.webp" },
    { skinId: "gsg9", name: "GSG 9", price: 6000, preview: "assets/skins/gsg9.webp" },
    { skinId: "gsg9_admin", name: "GSG 9 ADMIN", price: 6000, preview: "assets/skins/gsg9_admin.webp" },
    { skinId: "gign", name: "GIGN", price: 6000, preview: "assets/skins/gign.webp" },
    { skinId: "sas_custom", name: "SAS CUSTOM", price: 6000, preview: "assets/skins/sas_custom.webp" },
    { skinId: "elite_arctic", name: "ELITE ARCTIC", price: 6000, preview: "assets/skins/elite_arctic.webp" },
    { skinId: "leet", name: "LEET", price: 6000, preview: "assets/skins/leet.webp" },
    { skinId: "leet_pirate", name: "LEET PIRATE", price: 6000, preview: "assets/skins/leet_pirate.webp" },
    { skinId: "professional", name: "PROFESSIONAL", price: 6000, preview: "assets/skins/professional.webp" },
    { skinId: "survivor", name: "SURVIVOR", price: 12000, preview: "assets/skins/survivor.webp" }
  ]);
  const LVL_KNIVES = Object.freeze([
    { knifeId: "glass", ru: "Стеклянный нож", en: "Glass knife", price: 5000, preview: "assets/knives/glass.webp" },
    { knifeId: "sickle", ru: "Серп", en: "Sickle", price: 0, adminOnly: true, preview: "assets/knives/sickle.webp" },
    { knifeId: "katana", ru: "Катана", en: "Katana", price: 5000, preview: "assets/knives/katana.webp" },
    { knifeId: "axe", ru: "Топор", en: "Axe", price: 5000, preview: "assets/knives/axe.webp" }
  ]);

  const LVL_SHOP_FALLBACK = Object.freeze([
    { key:"upgrades", ru:"ПРОКАЧКА", en:"UPGRADES", items:[
      ["lvl_x2","LVL ×2 · 3 часа","LVL ×2 · 3 hours",1800],
      ["tok_x2","ТОКЕНЫ ×2 · 3 часа","TOKENS ×2 · 3 hours",300]
    ] },
    { key:"crate", ru:"ЯЩИК С ОРУЖИЕМ", en:"WEAPON CRATE", items:[
      ["gold","Золотой AK47 + Deagle · 30 мин","Golden AK47 + Deagle · 30 min",600],
      ["minigun","Миниган + Базука · 30 мин","Minigun + Bazooka · 30 min",900],
      ["armor50","50 брони каждый раунд · 30 мин","50 armor every round · 30 min",250],
      ["armor100","100 брони каждый раунд · 30 мин","100 armor every round · 30 min",450],
      ["invis","Авто-инвиз КТ · 3 заряда","CT auto-invis · 3 charges",700],
      ["blind","Слепой нож КТ · 30 мин","CT blind knife · 30 min",500],
      ["gas","Противогаз КТ · 30 мин","CT gas mask · 30 min",300]
    ] },
    { key:"prefix", ru:"ПРЕФИКСЫ", en:"PREFIXES", items:[
      ["noob","НУБ","NOOB",3000],["bot","БОТ","BOT",3000],["pro","ПРО","PRO",3000],["king","КИНГ","KING",3000],
      ["boss","БОСС","BOSS",3000],["legend","ЛЕГЕНДА","LEGEND",3000],["master","МАСТЕР","MASTER",3000],["guru","ГУРУ","GURU",3000],
      ["titan","ТИТАН","TITAN",3000],["lord","ЛОРД","LORD",3000],["demon","ДЕМОН","DEMON",3000],["warrior","ВОИН","WARRIOR",3000]
    ] },
    { key:"prefcolor", ru:"ЦВЕТ ПРЕФИКСА", en:"PREFIX COLOR", items:[
      ["#FF0000","Красный","Red",2500],["#FFFF00","Жёлтый","Yellow",2500],["#00FF00","Зелёный","Green",2500],["#0088FF","Синий","Blue",2500],
      ["#00FFFF","Голубой","Cyan",2500],["#FF8800","Оранжевый","Orange",2500],["#FF66CC","Розовый","Pink",2500],["#AA00FF","Фиолетовый","Purple",2500],
      ["#FFD700","Золотой","Gold",2500],["#FFFFFF","Белый","White",2500]
    ] },
    { key:"skin", ru:"СКИНЫ КТ", en:"CT SKINS", items: LVL_SKINS.map((skin)=>[skin.skinId,skin.name,skin.name,skin.price]) },
    { key:"knife", ru:"НОЖИ КТ", en:"CT KNIVES", items:[
      ["glass","Стеклянный нож","Glass knife",5000],
      ["sickle","Серп","Sickle",0],
      ["katana","Катана","Katana",5000],
      ["axe","Топор","Axe",5000]
    ] },
    { key:"skincolor", ru:"ЦВЕТ СКИНА КТ", en:"CT SKIN COLOR", items:[
      ["#0044FF","Синий","Blue",3000],["#0000FF","Тёмно-синий","Navy",3000],["#00AAFF","Голубой","LtBlue",3000],["#00FFFF","Морской","Cyan",3000],
      ["#00FFAA","Бирюзовый","Teal",3000],["#00CC00","Зелёный","Green",3000],["#00FF00","Лайм","Lime",3000],["#FFFF00","Жёлтый","Yellow",3000],
      ["#FFD700","Золотой","Gold",3000],["#FFFFFF","Белый","White",3000]
    ] },
    { key:"crit", ru:"КРИТИЧЕСКИЙ ВЫСТРЕЛ", en:"CRITICAL SHOT", items:[
      ["fire","Зажигательная пуля","Incendiary bullet",7000],["freeze","Замораживающая пуля","Freezing bullet",7500],["dmg2","Урон Х2 пуля","Damage X2 bullet",8000]
    ] },
    { key:"minimap", ru:"МИНИ-КАРТА", en:"MINIMAP", items:[["minimap","Мини-карта","Minimap",9000]] },
    { key:"wsound", ru:"ЗВУКИ (РАЗНОЕ)", en:"SOUNDS (MISC)", items:[
      ["shot_pistol_01","Звук 1","Sound 1",5000],
      ["shot_pistol_02","Звук 2","Sound 2",5000],
      ["shot_pistol_03","Звук 3","Sound 3",5000],
      ["shot_pistol_04","Звук 4","Sound 4",5000],
      ["shot_shotgun_01","Звук 1","Sound 1",5000],
      ["shot_smg_01","Звук 1","Sound 1",5000],
      ["shot_rifle_01","Звук 1","Sound 1",5000],
      ["shot_rifle_02","Звук 2","Sound 2",5000],
      ["shot_rifle_03","Звук 3","Sound 3",5000],
      ["shot_rifle_04","Звук 4","Sound 4",5000],
      ["shot_rifle_guitar","Звук 5","Sound 5",5000],
      ["shot_rifle_blaster","Звук 6","Sound 6",5000],
      ["shot_sniper_01","Звук 1","Sound 1",5000],
      ["shot_sniper_02","Звук 2","Sound 2",5000],
      ["shot_machinegun_01","Звук 1","Sound 1",5000],
      ["shot_machinegun_02","Звук 2","Sound 2",5000],
      ["shot_machinegun_minigun","Звук 3","Sound 3",5000],
      ["pickup_weapon_01","Звук 1","Sound 1",5000],
      ["pickup_weapon_02","Звук 2","Sound 2",5000],
      ["pickup_weapon_03","Звук 3","Sound 3",5000],
      ["pickup_weapon_04","Звук 4","Sound 4",5000],
      ["pickup_weapon_05","Звук 5","Sound 5",5000],
      ["pickup_weapon_06","Звук 6","Sound 6",5000],
      ["pickup_weapon_07","Звук 7","Sound 7",5000],
      ["welcome_01","Звук 1","Sound 1",5000],
      ["welcome_02","Звук 2","Sound 2",5000],
      ["welcome_03","Звук 3","Sound 3",5000],
      ["welcome_04","Звук 4","Sound 4",5000],
      ["welcome_05","Звук 5","Sound 5",5000],
      ["welcome_mario","Звук 6","Sound 6",5000],
      ["knife_hit_01","Звук 1","Sound 1",5000],
      ["knife_hit_02","Звук 2","Sound 2",5000],
      ["knife_hit_03","Звук 3","Sound 3",5000],
      ["knife_hit_04","Звук 4","Sound 4",5000],
      ["knife_hit_05","Звук 5","Sound 5",5000],
      ["knife_hit_06","Звук 6","Sound 6",5000],
      ["knife_hit_07","Звук 7","Sound 7",5000],
      ["knife_hit_starwars","Звук 8","Sound 8",5000],
      ["death_01","Звук 1","Sound 1",5000],
      ["death_02","Звук 2","Sound 2",5000],
      ["death_03","Звук 3","Sound 3",5000],
      ["death_04","Звук 4","Sound 4",5000],
      ["death_05","Звук 5","Sound 5",5000],
      ["death_06","Звук 6","Sound 6",5000],
      ["death_mario","Звук 7","Sound 7",5000]
    ] },
    { key:"ability", ru:"СПОСОБНОСТИ КТ", en:"CT ABILITIES", items:[
      ["spring","Пружина","Spring",8000],["time","Возврат во времени","Time rewind",10000]
    ] },
    { key:"sniper_shape", ru:"СНАЙПЕРСКИЙ ПРИЦЕЛ · ФОРМА", en:"SNIPER CROSSHAIR · SHAPE", items:[
      ["dot","Точка ●","Dot ●",7000],["ring","Кольцо ○","Ring ○",7000],["oldring","Прицел ㆁ","Crosshair ㆁ",7000],
      ["ieung","Прицел ㅇ","Crosshair ㅇ",7000],["chevron","Прицел ㅅ","Crosshair ㅅ",7000]
    ] },
    { key:"sniper_color", ru:"СНАЙПЕРСКИЙ ПРИЦЕЛ · ЦВЕТ", en:"SNIPER CROSSHAIR · COLOR", items:[
      ["white","Белый","White",0],["green","Зелёный","Green",2500],["red","Красный","Red",2500],
      ["cyan","Голубой","Cyan",3000],["yellow","Жёлтый","Yellow",3000],["violet","Фиолетовый","Violet",3000]
    ] }
  ]);

  const LVL_SHOP_OPTION_KEYS = Object.freeze({
    prefix:"prefix", prefcolor:"prefixColor", skin:"ctSkin", skincolor:"skinColor",
    crit:"critBullet", minimap:"minimap", wsound:"weaponSounds", knife:"knife",
    ability:"abilities", sniper_shape:"sniperCrosshairShape", sniper_color:"sniperCrosshairColor"
  });

  const LVL_SOUND_SLOT_DEFS = Object.freeze([
    { slot:"shot_pistol", ru:"Выстрелы · Пистолеты", en:"Shots · Pistols" },
    { slot:"shot_shotgun", ru:"Выстрелы · Дробовики", en:"Shots · Shotguns" },
    { slot:"shot_smg", ru:"Выстрелы · SMG", en:"Shots · SMG" },
    { slot:"shot_rifle", ru:"Выстрелы · Автоматы", en:"Shots · Rifles" },
    { slot:"shot_sniper", ru:"Выстрелы · Снайперки", en:"Shots · Snipers" },
    { slot:"shot_machinegun", ru:"Выстрелы · Пулемёты", en:"Shots · Machine guns" },
    { slot:"pickup", ru:"Выбор оружия", en:"Weapon draw" },
    { slot:"welcome", ru:"Заход на сервер", en:"Server join" },
    { slot:"knife_hit", ru:"Удар ножом", en:"Knife hit" },
    { slot:"death", ru:"Смерть", en:"Death" }
  ]);

  function lvlSoundSlotForId(value) {
    const id=String(value||"");
    if (id.startsWith("shot_pistol_")) return "shot_pistol";
    if (id.startsWith("shot_shotgun_")) return "shot_shotgun";
    if (id.startsWith("shot_smg_")) return "shot_smg";
    if (id.startsWith("shot_rifle_")) return "shot_rifle";
    if (id.startsWith("shot_sniper_")) return "shot_sniper";
    if (id.startsWith("shot_machinegun_")) return "shot_machinegun";
    if (id.startsWith("pickup_")) return "pickup";
    if (id.startsWith("welcome_")) return "welcome";
    if (id.startsWith("knife_hit_")) return "knife_hit";
    if (id.startsWith("death_")) return "death";
    return "";
  }

  function lvlFallbackShopCategories(bootstrap) {
    const options = bootstrap?.settings?.options || {};
    const actual = bootstrap?.settings?.actual || {};
    const boosts = bootstrap?.boosts || {};
    return LVL_SHOP_FALLBACK.map((cat) => {
      const optionKey = LVL_SHOP_OPTION_KEYS[cat.key];
      const optionList = Array.isArray(options?.[optionKey]) ? options[optionKey] : [];
      const owned = new Set(optionList.map((item) => String(item?.id || item || "")));
      const activeRaw = actual?.[optionKey];
      const activeSet = new Set(Array.isArray(activeRaw) ? activeRaw.map(String) : [String(activeRaw || "")]);
      return {
        key: cat.key, ru: cat.ru, en: cat.en, enabled: true,
        items: cat.items.map(([itemId,itemRu,itemEn,price]) => {
          const id=String(itemId);
          let remainingSec=0, charges=0, maxCharges=0, repeatable=false, mode="equipment";
          if (cat.key === "upgrades") {
            repeatable=true; mode="upgrade";
            if (id === "lvl_x2") remainingSec=Math.max(0,Number(boosts.level||0));
            if (id === "tok_x2") remainingSec=Math.max(0,Number(boosts.token||0));
          } else if (cat.key === "crate") {
            repeatable=true; mode="temporary";
            if (id === "invis") { charges=Math.max(0,Number(boosts.invis||0)); maxCharges=3; }
            else remainingSec=Math.max(0,Number(boosts[id]||0));
          }
          const adminOnly = cat.key === "knife" && id === "sickle";
          const accountIsAdmin = String(bootstrap?.profile?.role || "").toUpperCase() === "ADMIN";
          return {
            itemId:id, itemRu:String(itemRu), itemEn:String(itemEn), price:Number(price)||0,
            owned:adminOnly ? accountIsAdmin : (optionKey ? owned.has(id) : false),
            active:optionKey ? activeSet.has(id) : (remainingSec>0 || charges>0),
            adminOnly, available:!adminOnly || accountIsAdmin, free:adminOnly,
            repeatable, mode, remainingSec, charges, maxCharges
          };
        })
      };
    });
  }

  function lvlEffectiveShopCategories(bootstrap) {
    const server = Array.isArray(bootstrap?.shop?.categories) ? bootstrap.shop.categories : [];
    const fallback = lvlFallbackShopCategories(bootstrap);
    const byKey = new Map(server.filter((cat)=>cat && cat.key).map((cat)=>[String(cat.key),cat]));
    const result = fallback.map((fb) => {
      const live = byKey.get(fb.key);
      if (!live) return fb;
      if (live.enabled === false) return { ...fb, ...live, items: [] };
      return Array.isArray(live.items) && live.items.length ? live : fb;
    });
    const known = new Set(result.map((cat)=>String(cat?.key||"")));
    for (const live of server) {
      const key=String(live?.key||"");
      if (!key || known.has(key)) continue;
      result.push(live?.enabled === false ? { ...live, items: [] } : live);
      known.add(key);
    }

    // v89: игровые звуки на сайте разбиваем так же, как в LVL MOD:
    // выстрелы по классам оружия + выбор оружия + вход + нож + смерть.
    const expanded=[];
    for (const cat of result) {
      if (String(cat?.key||"")!=="wsound") { expanded.push(cat); continue; }
      const items=Array.isArray(cat?.items)?cat.items:[];
      for (const def of LVL_SOUND_SLOT_DEFS) {
        const group=items.filter((item)=>lvlSoundSlotForId(item?.itemId)===def.slot);
        if (!group.length) continue;
        expanded.push({
          ...cat,
          key:`wsound_${def.slot}`,
          actionKey:"wsound",
          ru:def.ru,
          en:def.en,
          items:group
        });
      }
    }
    return expanded;
  }

  function lvlFallbackMarketSellable(bootstrap, categories) {
    const market = bootstrap?.market || {};
    if (Array.isArray(market.sellable) && market.sellable.length) return market.sellable;
    const mine = new Set((Array.isArray(market.mine) ? market.mine : []).map((item)=>`${String(item.category||"")}|${String(item.itemId||"")}`));
    const out=[];
    for (const cat of categories) {
      const actionCategory=String(cat?.actionKey || cat?.key || "");
      for (const item of (Array.isArray(cat?.items) ? cat.items : [])) {
        if (!item?.owned) continue;
        const key=`${actionCategory}|${String(item.itemId||"")}`;
        if (mine.has(key)) continue;
        const maxPrice=Math.max(0,Math.floor(Number(item.price)||0));
        if (!maxPrice) continue;
        out.push({ category:actionCategory, categoryRu:cat.ru, categoryEn:cat.en, itemId:item.itemId, itemRu:item.itemRu, itemEn:item.itemEn, maxPrice, active:item.active===true });
      }
    }
    return out;
  }

  let lvlHubState = {
    tab: "overview",
    previewSkinId: "sas",
    previewTouched: false,
    bootstrap: null,
    loading: false,
    loadedAt: 0,
    error: "",
    skinAction: { busy: false, skinId: "", mode: "", error: "" },
    skinBuyConfirm: { skinId: "", until: 0 },
    socialAction: { busy: false, key: "", error: "", notice: "" },
    marketAction: { busy: false, key: "", error: "" },
    shopAction: { busy: false, key: "", error: "" },
    equipmentAction: { busy: false, key: "", error: "" },
    shopCategory: "skin",
    lastTokenBalance: null
  };

  const t = (key) => i18n[language]?.[key] ?? i18n.en[key] ?? key;
  const setTextAll = (selector, value) => $$(selector).forEach((node) => { node.textContent = value; });
  const clamp = (number, min, max) => Math.min(max, Math.max(min, number));
  const integer = (value, fallback = 0, min = 0, max = 1000000) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? clamp(Math.floor(parsed), min, max) : fallback;
  };

  function normalizeAvatarId(value) {
    const avatarId = String(value || "").toLowerCase();
    return AVATAR_IDS.includes(avatarId) ? avatarId : DEFAULT_AVATAR_ID;
  }

  function identityKey(value) {
    return String(value || "").trim().toLocaleLowerCase("en-US");
  }

  function currentAccountIdentityKeys() {
    return new Set([
      identityKey(authState.account?.username),
      identityKey(authState.profile?.name)
    ].filter(Boolean));
  }

  function profileMatchesCurrentAccount(profile) {
    const keys = currentAccountIdentityKeys();
    if (!keys.size || !profile) return false;
    return keys.has(identityKey(profile.username)) || keys.has(identityKey(profile.name));
  }

  function syncCurrentAvatarAcrossViews(value) {
    const avatarId = normalizeAvatarId(value);
    if (!currentAccountIdentityKeys().size) return;

    leaderboardState.players = leaderboardState.players.map((profile) => (
      profileMatchesCurrentAccount(profile) ? { ...profile, avatarId } : profile
    ));

    if (playerModalState.profile && profileMatchesCurrentAccount(playerModalState.profile)) {
      playerModalState.profile = { ...playerModalState.profile, avatarId };
      if ($("#playerModal")?.classList.contains("is-open")) renderPlayerModal();
    }

    renderLeaderboard();
    if (window.__kontraLastStatus) {
      renderPlayersPreview(window.__kontraLastStatus);
      renderScoreboard(window.__kontraLastStatus);
    }
  }

  function avatarSource(value) {
    return `assets/avatars/${normalizeAvatarId(value)}.webp`;
  }

  function createAvatarImage(value, className = "", alt = "") {
    const image = document.createElement("img");
    image.className = className;
    image.src = avatarSource(value);
    image.alt = alt;
    image.width = 160;
    image.height = 160;
    image.loading = "lazy";
    image.decoding = "async";
    return image;
  }

  function previewProfileEnabled() {
    return location.hostname === "terminal.local" && new URL(location.href).searchParams.get("demo") === "profile";
  }

  function toast(message) {
    const node = $("#toast");
    node.textContent = message;
    node.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove("is-visible"), 2400);
  }

  function authBase() {
    return String(config.authBaseEndpoint || "").trim().replace(/\/+$/, "");
  }

  function leaderboardEndpoint() {
    return String(config.leaderboardEndpoint || "").trim();
  }

  function playerEndpoint() {
    return String(config.playerEndpoint || "").trim();
  }

  function notificationsEndpoint() {
    return String(config.notificationsEndpoint || "/api/notifications").trim().replace(/\/+$/, "");
  }

  function seasonsEndpoint() {
    return String(config.seasonsEndpoint || "/api/seasons").trim();
  }

  function seasonEndpoint() {
    return String(config.seasonEndpoint || "/api/season").trim();
  }

  function hallOfFameEndpoint() {
    return String(config.hallOfFameEndpoint || "/api/hall-of-fame").trim();
  }

  function promosEndpoint() {
    return String(config.promosEndpoint || "/api/promos").trim();
  }

  function controlBase() {
    return String(config.controlBaseEndpoint || "").trim().replace(/\/+$/, "");
  }

  function settingsBase() {
    return String(config.settingsBaseEndpoint || "").trim().replace(/\/+$/, "");
  }

  function normalizeAuthProfile(profile = {}, username = "Player", role = "PLAYER") {
    const kills = integer(profile.kills, 0, 0, 2147483647);
    const deaths = integer(profile.deaths, 0, 0, 2147483647);
    const kdValue = Number(profile.kd);
    return {
      name: String(profile.name || username || "Player").slice(0, 40),
      level: integer(profile.level, 1, 1, 2147483647),
      kills,
      deaths,
      kd: Number.isFinite(kdValue) ? Math.max(0, Math.round(kdValue * 100) / 100) : (deaths > 0 ? Math.round((kills / deaths) * 100) / 100 : kills),
      timeSec: integer(profile.timeSec, 0, 0, 2147483647),
      matches: integer(profile.matches, 0, 0, 2147483647),
      wins: integer(profile.wins, 0, 0, 2147483647),
      winRate: integer(profile.winRate, 0, 0, 100),
      tokens: integer(profile.tokens, 0, 0, 2147483647),
      firstJoin: String(profile.firstJoin || "").slice(0, 24),
      role: String(profile.role || role || "PLAYER").toUpperCase(),
      avatarId: normalizeAvatarId(profile.avatarId),
      updatedAt: Number(profile.updatedAt || 0)
    };
  }

  async function authRequest(path, options = {}) {
    const base = authBase();
    if (!config.authEnabled || !base) throw new Error("auth_unavailable");

    const headers = { Accept: "application/json", ...(options.headers || {}) };
    if (options.body !== undefined) headers["Content-Type"] = "application/json";
    if (options.session !== false && authState.sessionToken) {
      headers.Authorization = `Bearer ${authState.sessionToken}`;
    }

    const response = await fetch(`${base}${path}`, {
      method: options.method || "GET",
      cache: "no-store",
      headers,
      body: options.body === undefined ? undefined : JSON.stringify(options.body)
    });

    let data = {};
    try { data = await response.json(); } catch {}
    if (!response.ok || data.ok === false) {
      const error = new Error(String(data.error || `HTTP_${response.status}`));
      error.status = response.status;
      error.payload = data;
      throw error;
    }
    return data;
  }

  function storeAuth(data) {
    const token = String(data.sessionToken || authState.sessionToken || "");
    if (token) localStorage.setItem(SESSION_KEY, token);
    const previousAccount = authState.account;
    const previousProfile = authState.profile;
    const username = String(data.username || data.profile?.name || previousAccount?.username || "Player");
    const sameAccount = identityKey(previousAccount?.username) === identityKey(username);
    const incomingProfile = data.profile && typeof data.profile === "object" ? data.profile : {};
    authState.sessionToken = token;
    authState.account = {
      username,
      role: String(data.role || incomingProfile.role || (sameAccount ? previousAccount?.role : "") || "PLAYER").toUpperCase()
    };
    authState.profile = normalizeAuthProfile(
      sameAccount ? { ...(previousProfile || {}), ...incomingProfile } : incomingProfile,
      authState.account.username,
      authState.account.role
    );
    if (data.security && typeof data.security === "object") authState.security = { ...(authState.security || {}), ...data.security };
    syncCurrentAvatarAcrossViews(authState.profile.avatarId);
    if (!sameAccount) {
      lvlHubState.bootstrap = null;
      lvlHubState.loadedAt = 0;
      lvlHubState.previewTouched = false;
      lvlHubState.error = "";
      lvlHubState.skinAction = { busy: false, skinId: "", error: "" };
    }
    renderAuth();
    void fetchNotifications(true);
  }

  function clearAuth() {
    localStorage.removeItem(SESSION_KEY);
    authState.sessionToken = "";
    authState.account = null;
    authState.profile = null;
    authState.security = null;
    lvlHubState.bootstrap = null;
    lvlHubState.loadedAt = 0;
    lvlHubState.previewTouched = false;
    lvlHubState.error = "";
    lvlHubState.skinAction = { busy: false, skinId: "", error: "" };
    renderAuth();
    renderLvlHub();
    void fetchNotifications(true);
  }

  function setLoginStatus(message, isError = false) {
    const node = $("#loginStatus");
    if (!node) return;
    const text = message || t("authReady");
    node.textContent = text;
    node.classList.toggle("is-error", isError);
    node.hidden = !isError && (!message || text === t("authReady"));
  }

  function setLoginBusy(busy, message) {
    authState.loading = Boolean(busy);
    const form = $("#loginForm");
    if (form) $$('input, button', form).forEach((node) => { node.disabled = Boolean(busy); });
    const submit = $("#loginSubmit");
    if (submit) submit.textContent = busy ? t("signingIn") : t("signIn");
    if (message) setLoginStatus(message, false);
  }


  function authLocalized(ru, en) { return language === "ru" ? ru : en; }

  function authErrorMessage(error) {
    const code = String(error?.message || error || "");
    if (code === "invalid_code") return t("invalidCode");
    if (code === "email_already_linked") return t("emailAlreadyLinked");
    if (code === "google_not_linked") return t("googleNotLinked");
    if (code === "google_already_linked") return t("googleAlreadyLinked");
    if (code === "email_not_configured" || code === "email_send_failed") return t("emailNotConfigured");
    if (code === "google_not_configured") return t("googleNotConfigured");
    if (code === "code_rate_limited") return authLocalized("Подождите минуту перед новым кодом.", "Wait one minute before requesting another code.");
    if (code === "invalid_email") return authLocalized("Введите корректную почту.", "Enter a valid email address.");
    return t("networkError");
  }

  async function refreshSecurity() {
    if (!authState.sessionToken) return;
    try {
      const data = await authRequest("/security", { method: "GET" });
      authState.security = data.security || {};
      renderAuth();
    } catch {}
  }

  async function startEmailLogin(identifier) {
    const data = await authRequest("/email/login/start", { method: "POST", session: false, body: { identifier } });
    return data;
  }

  async function verifyEmailLogin(challengeId, code) {
    const data = await authRequest("/email/login/verify", { method: "POST", session: false, body: { challengeId, code } });
    storeAuth(data);
    setLogin(false);
    toast(t("loginSuccess"));
    showView("profile");
  }

  async function startEmailLink(email) {
    return authRequest("/email/link/start", { method: "POST", body: { email } });
  }

  async function verifyEmailLink(challengeId, code) {
    const data = await authRequest("/email/link/verify", { method: "POST", body: { challengeId, code } });
    authState.security = data.security || {};
    renderAuth();
    toast(t("codeVerified"));
  }

  let googleScriptPromise = null;
  function googleClientId() { return String(config.googleClientId || "").trim(); }
  function loadGoogleIdentity() {
    if (!googleClientId()) return Promise.reject(new Error("google_not_configured"));
    if (globalThis.google?.accounts?.id) return Promise.resolve(globalThis.google.accounts.id);
    if (googleScriptPromise) return googleScriptPromise;
    googleScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => globalThis.google?.accounts?.id ? resolve(globalThis.google.accounts.id) : reject(new Error("google_unavailable"));
      script.onerror = () => reject(new Error("google_unavailable"));
      document.head.append(script);
    });
    return googleScriptPromise;
  }

  async function handleGoogleCredential(response) {
    const credential = String(response?.credential || "");
    if (!credential) return;
    try {
      if (authState.account && authState.sessionToken) {
        const data = await authRequest("/google/link", { method: "POST", body: { credential } });
        authState.security = data.security || {};
        renderAuth();
        toast(t("securityUpdated"));
      } else {
        const data = await authRequest("/google/login", { method: "POST", session: false, body: { credential } });
        storeAuth(data);
        setLogin(false);
        toast(t("loginSuccess"));
        showView("profile");
      }
    } catch (error) {
      if (authState.account) toast(authErrorMessage(error));
      else setLoginStatus(authErrorMessage(error), true);
    }
  }

  async function renderGoogleButtons() {
    const slots = $$(".google-signin-slot");
    if (!slots.length) return;
    if (!googleClientId()) {
      slots.forEach((slot) => { slot.textContent = t("googleNotConfigured"); slot.classList.add("is-config-missing"); });
      return;
    }
    try {
      const api = await loadGoogleIdentity();
      api.initialize({ client_id: googleClientId(), callback: handleGoogleCredential, auto_select: false, cancel_on_tap_outside: true });
      slots.forEach((slot) => {
        slot.replaceChildren();
        slot.classList.remove("is-config-missing");
        const isProfileSlot = slot.classList.contains("google-signin-slot--profile");
        api.renderButton(slot, {
          theme: colorTheme === "day" ? "outline" : "filled_black",
          size: isProfileSlot ? "medium" : "large",
          shape: "pill",
          text: "continue_with",
          width: isProfileSlot ? Math.min(260, Math.max(220, slot.clientWidth || 240)) : Math.min(340, Math.max(240, slot.clientWidth || 300))
        });
      });
    } catch (error) {
      slots.forEach((slot) => { slot.textContent = authErrorMessage(error); slot.classList.add("is-config-missing"); });
    }
  }

  function formatGameTime(totalSeconds) {
    const seconds = integer(totalSeconds, 0, 0, 2147483647);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}${t("hoursShort")} ${minutes}${t("minutesShort")}`;
  }


  function formatCompactNumber(value) {
    const number = Number(value || 0);
    return new Intl.NumberFormat(language === "ru" ? "ru-RU" : "en-US", {
      notation: Math.abs(number) >= 10000 ? "compact" : "standard",
      maximumFractionDigits: 1
    }).format(number);
  }

  function normalizePublicProfile(profile = {}) {
    const kills = integer(profile.kills, 0, 0, 2147483647);
    const deaths = integer(profile.deaths, 0, 0, 2147483647);
    const kdRaw = Number(profile.kd);
    return {
      rank: integer(profile.rank, 0, 0, 1000000),
      username: String(profile.username || profile.name || "Player").slice(0, 40),
      name: String(profile.name || profile.username || "Player").slice(0, 40),
      role: String(profile.role || "PLAYER").toUpperCase(),
      level: integer(profile.level, 1, 1, 2147483647),
      kills,
      deaths,
      kd: Number.isFinite(kdRaw) ? Math.max(0, Math.round(kdRaw * 100) / 100) : (deaths > 0 ? Math.round((kills / deaths) * 100) / 100 : kills),
      timeSec: integer(profile.timeSec, 0, 0, 2147483647),
      matches: integer(profile.matches, 0, 0, 2147483647),
      wins: integer(profile.wins, 0, 0, 2147483647),
      winRate: integer(profile.winRate, 0, 0, 100),
      tokens: integer(profile.tokens, 0, 0, 2147483647),
      online: profile.online === true,
      avatarId: normalizeAvatarId(profile.avatarId),
      updatedAt: Number(profile.updatedAt || 0)
    };
  }

  function leaderboardMetric(profile, sort = leaderboardState.sort) {
    if (sort === "kills") return { label: t("kills"), value: formatCompactNumber(profile.kills) };
    if (sort === "wins") return { label: t("wins"), value: formatCompactNumber(profile.wins) };
    if (sort === "time") return { label: t("gameTime"), value: formatGameTime(profile.timeSec) };
    if (sort === "tokens") return { label: t("tokens"), value: formatCompactNumber(profile.tokens) };
    return { label: t("level"), value: `LVL ${profile.level}` };
  }

  function keepActiveLeaderboardTabVisible() {
    const activeButton = $('[data-rank-sort].is-active');
    const tabs = activeButton?.closest(".leaderboard-tabs");
    if (!activeButton || !tabs) return;
    const tabsRect = tabs.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();
    const edge = 6;
    if (buttonRect.left >= tabsRect.left + edge && buttonRect.right <= tabsRect.right - edge) return;
    const left = tabs.scrollLeft + buttonRect.left - tabsRect.left - (tabs.clientWidth - buttonRect.width) / 2;
    tabs.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }

  function renderLeaderboardState(title, text = "", tone = "") {
    const body = $("#leaderboardBody");
    if (!body) return;
    const state = document.createElement("div");
    state.className = `leaderboard-state${tone ? ` is-${tone}` : ""}`;
    const strong = document.createElement("strong");
    strong.textContent = title;
    state.append(strong);
    if (text) {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      state.append(paragraph);
    }
    body.replaceChildren(state);
  }

  function bindPlayerActivation(node, live, profile = null) {
    node.classList.add("is-player-open");
    node.setAttribute("role", "button");
    node.tabIndex = 0;
    const open = () => openPlayerDetails(live, profile);
    node.addEventListener("click", open);
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  }

  function createLeaderboardPlayer(profile) {
    const row = document.createElement("article");
    row.className = `leaderboard-player rank-${Math.min(profile.rank || 99, 4)}`;

    const rank = document.createElement("strong");
    rank.className = "leaderboard-player__rank";
    const rankValue = integer(profile.rank, 0, 0, 1000000);
    const rankNumber = document.createElement("span");
    rankNumber.className = "leaderboard-player__rank-number";
    rankNumber.textContent = rankValue ? String(rankValue).padStart(2, "0") : "—";
    if (rankValue >= 1 && rankValue <= 3) {
      const crown = document.createElement("span");
      crown.className = `leaderboard-player__crown leaderboard-player__crown--${rankValue}`;
      crown.textContent = "♛";
      crown.setAttribute("aria-hidden", "true");
      rank.append(crown);
    }
    rank.append(rankNumber);
    rank.setAttribute("aria-label", `${t("ranking")} ${rankValue || "—"}`);

    const avatar = createAvatarImage(profile.avatarId, "leaderboard-player__avatar", `${t("avatar")}: ${profile.name}`);

    const identity = document.createElement("div");
    identity.className = "leaderboard-player__identity";
    const name = document.createElement("strong");
    name.textContent = profile.name;
    name.title = profile.name;
    const meta = document.createElement("div");
    meta.className = "leaderboard-player__meta";
    meta.append(createRoleBadge(profile.role));
    const online = document.createElement("span");
    online.className = `leaderboard-online${profile.online ? " is-online" : ""}`;
    online.textContent = profile.online ? t("onlineNow") : t("offlineNow");
    meta.append(online);
    identity.append(name, meta);

    const metricData = leaderboardMetric(profile);
    const metric = document.createElement("div");
    metric.className = "leaderboard-player__metric";
    const metricValue = document.createElement("strong");
    metricValue.textContent = metricData.value;
    const metricLabel = document.createElement("small");
    metricLabel.textContent = metricData.label;
    metric.append(metricValue, metricLabel);

    const summary = document.createElement("div");
    summary.className = "leaderboard-player__summary";
    summary.innerHTML = `<span>LVL <b>${profile.level}</b></span><span>${t("kills")} <b>${formatCompactNumber(profile.kills)}</b></span><span>K/D <b>${profile.kd.toFixed(2)}</b></span>`;

    const versus = document.createElement("button");
    versus.type = "button";
    versus.className = "leaderboard-player__vs";
    versus.dataset.comparePlayer = profile.name;
    versus.textContent = "VS";
    versus.setAttribute("aria-label", `${t("compareWithPlayer")}: ${profile.name}`);
    versus.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      compareWithSelectedPlayer(profile.name);
    });

    row.append(rank, avatar, identity, metric, summary, versus);
    bindPlayerActivation(row, profile.online
      ? { name: profile.name, team: "UNKNOWN", alive: true, hp: 0, armor: 0, score: 0, deaths: 0, bot: false }
      : null, profile);
    return row;
  }

  function renderLeaderboard() {
    const body = $("#leaderboardBody");
    if (!body) return;
    $$('[data-rank-sort]').forEach((button) => {
      const active = button.dataset.rankSort === leaderboardState.sort;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    requestAnimationFrame(keepActiveLeaderboardTabVisible);
    const updated = $("#leaderboardUpdated");
    if (updated) updated.textContent = leaderboardState.loadedAt ? `${t("rankUpdated")}: ${formatAge(leaderboardState.loadedAt)}` : "—";

    if (leaderboardState.loading && !leaderboardState.players.length) {
      renderLeaderboardState(t("leaderboardLoading"));
      return;
    }
    if (!leaderboardState.players.length) {
      renderLeaderboardState(t("leaderboardEmpty"));
      return;
    }
    const list = document.createElement("div");
    list.className = "leaderboard-list";
    leaderboardState.players.forEach((profile) => list.append(createLeaderboardPlayer(profile)));
    body.replaceChildren(list);
  }

  async function fetchLeaderboard(sort = leaderboardState.sort, force = false) {
    const endpoint = leaderboardEndpoint();
    if (!endpoint || leaderboardState.loading) return;
    const now = Date.now();
    if (!force && sort === leaderboardState.sort && leaderboardState.players.length && now - leaderboardState.loadedAt < (Number(config.leaderboardRefreshMs) || 60000)) {
      renderLeaderboard();
      return;
    }

    leaderboardState.sort = ["level", "kills", "wins", "time", "tokens"].includes(sort) ? sort : "level";
    leaderboardState.loading = true;
    renderLeaderboard();
    try {
      const separator = endpoint.includes("?") ? "&" : "?";
      const response = await fetch(`${endpoint}${separator}sort=${encodeURIComponent(leaderboardState.sort)}&limit=50&_=${Date.now()}`, {
        cache: "no-store",
        headers: { Accept: "application/json" }
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.ok === false) throw new Error(String(data.error || `HTTP_${response.status}`));
      leaderboardState.players = Array.isArray(data.players)
        ? data.players.map(normalizePublicProfile)
        : [];
      leaderboardState.loadedAt = Number(data.updatedAt || Date.now());
    } catch (error) {
      leaderboardState.players = [];
      leaderboardState.loadedAt = 0;
      renderLeaderboardState(t("leaderboardError"), "", "error");
      console.warn("KONTRA leaderboard fetch failed", error);
      leaderboardState.loading = false;
      return;
    }
    leaderboardState.loading = false;
    renderLeaderboard();
    updateCompareDatalist();
    renderCompareTopPicker();
    if (window.__kontraLastStatus) {
      renderPlayersPreview(window.__kontraLastStatus);
      renderScoreboard(window.__kontraLastStatus);
    }
  }


  function compareInputNames() {
    return {
      left: String($("#comparePlayerA")?.value || compareState.leftName || "").trim(),
      right: String($("#comparePlayerB")?.value || compareState.rightName || "").trim()
    };
  }

  function syncCompareInputs() {
    const left = $("#comparePlayerA");
    const right = $("#comparePlayerB");
    if (left && document.activeElement !== left) left.value = compareState.leftName || "";
    if (right && document.activeElement !== right) right.value = compareState.rightName || "";
  }

  function updateCompareDatalist() {
    const list = $("#comparePlayersList");
    if (!list) return;
    const seen = new Set();
    const fragment = document.createDocumentFragment();
    leaderboardState.players.forEach((profile) => {
      const name = String(profile?.name || profile?.username || "").trim();
      const key = identityKey(name);
      if (!name || !key || seen.has(key)) return;
      seen.add(key);
      const option = document.createElement("option");
      option.value = name;
      option.label = `LVL ${integer(profile.level, 1)} · ${profile.online ? t("onlineNow") : t("offlineNow")}`;
      fragment.append(option);
    });
    list.replaceChildren(fragment);
  }

  function syncComparePickTarget() {
    const left = $("#comparePlayerA");
    const right = $("#comparePlayerB");
    left?.closest(".compare-picker__field")?.classList.toggle("is-pick-target", compareState.pickSide === "left");
    right?.closest(".compare-picker__field")?.classList.toggle("is-pick-target", compareState.pickSide === "right");
  }

  function renderCompareTopPicker() {
    const picker = $("#compareTopPicker");
    if (!picker) return;
    const fragment = document.createDocumentFragment();
    const seen = new Set();
    leaderboardState.players.forEach((profile) => {
      const name = String(profile?.name || profile?.username || "").trim();
      const key = identityKey(name);
      if (!name || !key || seen.has(key)) return;
      seen.add(key);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "compare-top-player";
      button.dataset.comparePick = name;
      const rank = integer(profile.rank, 0, 0, 9999);
      button.innerHTML = `<span>#${rank || "—"}</span><strong></strong><small>LVL ${integer(profile.level, 1)}</small>`;
      button.querySelector("strong").textContent = name;
      if (profile.online) button.classList.add("is-online");
      fragment.append(button);
    });
    picker.replaceChildren(fragment);
    syncComparePickTarget();
  }

  function pickComparePlayerFromTop(name) {
    const selected = String(name || "").trim();
    if (!selected) return;
    const left = $("#comparePlayerA");
    const right = $("#comparePlayerB");
    let side = compareState.pickSide === "left" ? "left" : "right";
    if (side === "right" && !String(left?.value || compareState.leftName || "").trim()) side = "left";
    if (side === "left") {
      compareState.leftName = selected;
      if (left) left.value = selected;
      compareState.pickSide = "right";
      right?.focus({ preventScroll: true });
    } else {
      compareState.rightName = selected;
      if (right) right.value = selected;
    }
    compareState.leftProfile = null;
    compareState.rightProfile = null;
    compareState.error = "";
    syncComparePickTarget();
    renderPlayerComparison();
  }

  function compareStateMessage(title, text = "", tone = "") {
    const body = $("#compareBody");
    if (!body) return;
    const state = document.createElement("div");
    state.className = `leaderboard-state${tone ? ` is-${tone}` : ""}`;
    const strong = document.createElement("strong");
    strong.textContent = title;
    state.append(strong);
    if (text) {
      const p = document.createElement("p");
      p.textContent = text;
      state.append(p);
    }
    body.replaceChildren(state);
  }

  function compareMetricRows(left, right) {
    const metrics = [
      { key: "level", label: t("compareMetricLevel"), left: left.level, right: right.level, format: (v) => `LVL ${integer(v, 1)}`, better: "high" },
      { key: "kills", label: t("kills"), left: left.kills, right: right.kills, format: formatCompactNumber, better: "high" },
      { key: "deaths", label: t("deaths"), left: left.deaths, right: right.deaths, format: formatCompactNumber, better: "low" },
      { key: "kd", label: t("kd"), left: left.kd, right: right.kd, format: (v) => Number(v || 0).toFixed(2), better: "high" },
      { key: "time", label: t("gameTime"), left: left.timeSec, right: right.timeSec, format: formatGameTime, better: "high" },
      { key: "matches", label: t("matches"), left: left.matches, right: right.matches, format: formatCompactNumber, better: "high" },
      { key: "wins", label: t("wins"), left: left.wins, right: right.wins, format: formatCompactNumber, better: "high" },
      { key: "winRate", label: t("winRate"), left: left.winRate, right: right.winRate, format: (v) => `${integer(v, 0, 0, 100)}%`, better: "high" },
      { key: "tokens", label: t("tokens"), left: left.tokens, right: right.tokens, format: formatCompactNumber, better: "high" }
    ];
    let leftScore = 0;
    let rightScore = 0;
    const rows = document.createElement("div");
    rows.className = "compare-metrics";
    metrics.forEach((metric) => {
      const a = Number(metric.left || 0);
      const b = Number(metric.right || 0);
      let winner = "tie";
      if (a !== b) {
        const leftWins = metric.better === "low" ? a < b : a > b;
        winner = leftWins ? "left" : "right";
        if (leftWins) leftScore += 1;
        else rightScore += 1;
      }
      const row = document.createElement("div");
      row.className = "compare-metric-row";
      const leftValue = document.createElement("strong");
      leftValue.className = `compare-metric-row__value${winner === "left" ? " is-winner" : ""}`;
      leftValue.textContent = metric.format(metric.left);
      const label = document.createElement("small");
      label.textContent = metric.label;
      const rightValue = document.createElement("strong");
      rightValue.className = `compare-metric-row__value${winner === "right" ? " is-winner" : ""}`;
      rightValue.textContent = metric.format(metric.right);
      row.append(leftValue, label, rightValue);
      rows.append(row);
    });
    return { rows, leftScore, rightScore };
  }

  function createCompareHero(profile, side) {
    const card = document.createElement("article");
    card.className = `compare-player-card compare-player-card--${side}`;
    const avatar = createAvatarImage(profile.avatarId, "compare-player-card__avatar", `${t("avatar")}: ${profile.name}`);
    const copy = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = profile.name;
    name.title = profile.name;
    const meta = document.createElement("div");
    meta.className = "compare-player-card__meta";
    meta.append(createRoleBadge(profile.role));
    const online = document.createElement("span");
    online.className = `leaderboard-online${profile.online ? " is-online" : ""}`;
    online.textContent = profile.online ? t("onlineNow") : t("offlineNow");
    meta.append(online);
    const level = document.createElement("b");
    level.textContent = `LVL ${profile.level}`;
    copy.append(name, meta, level);
    card.append(avatar, copy);
    return card;
  }

  function renderPlayerComparison() {
    syncCompareInputs();
    updateCompareDatalist();
    renderCompareTopPicker();
    if (compareState.loading) {
      compareStateMessage(t("compareLoading"));
      return;
    }
    if (compareState.error) {
      const key = compareState.error === "same_player" ? "compareSamePlayer" : compareState.error === "player_not_found" ? "compareNotFound" : "compareError";
      compareStateMessage(t(key), "", "error");
      return;
    }
    const left = compareState.leftProfile;
    const right = compareState.rightProfile;
    if (!left || !right) {
      compareStateMessage(t("comparePickPlayers"), t("comparePickPlayersText"));
      return;
    }

    const body = $("#compareBody");
    if (!body) return;
    const duel = document.createElement("div");
    duel.className = "compare-duel";
    const center = document.createElement("div");
    center.className = "compare-duel__vs";
    center.innerHTML = `<span>VS</span>`;
    duel.append(createCompareHero(left, "left"), center, createCompareHero(right, "right"));

    const metricData = compareMetricRows(left, right);
    const score = document.createElement("div");
    score.className = "compare-score";
    const eyebrow = document.createElement("small");
    eyebrow.textContent = t("compareScore");
    const value = document.createElement("strong");
    value.textContent = `${metricData.leftScore} : ${metricData.rightScore}`;
    const verdict = document.createElement("p");
    if (metricData.leftScore === metricData.rightScore) verdict.textContent = t("compareDraw");
    else verdict.textContent = `${t("compareAdvantage")}: ${metricData.leftScore > metricData.rightScore ? left.name : right.name}`;
    score.append(eyebrow, value, verdict);

    body.replaceChildren(duel, score, metricData.rows);
  }

  async function fetchComparisonProfile(name) {
    const normalizedName = String(name || "").trim();
    if (!normalizedName) throw new Error("player_not_found");
    const endpoint = playerEndpoint();
    if (!endpoint) throw new Error("compare_unavailable");
    const separator = endpoint.includes("?") ? "&" : "?";
    const response = await fetch(`${endpoint}${separator}name=${encodeURIComponent(normalizedName)}&_=${Date.now()}`, {
      cache: "no-store",
      headers: { Accept: "application/json" }
    });
    const data = await response.json().catch(() => ({}));
    if (response.status === 404 || data.error === "player_not_found") throw new Error("player_not_found");
    if (!response.ok || data.ok === false || !data.player) throw new Error(String(data.error || `HTTP_${response.status}`));
    return normalizePublicProfile(data.player);
  }

  async function runPlayerComparison() {
    if (compareState.loading) return;
    const names = compareInputNames();
    compareState.leftName = names.left;
    compareState.rightName = names.right;
    compareState.leftProfile = null;
    compareState.rightProfile = null;
    compareState.error = "";
    if (!names.left || !names.right) {
      renderPlayerComparison();
      return;
    }
    if (identityKey(names.left) === identityKey(names.right)) {
      compareState.error = "same_player";
      renderPlayerComparison();
      return;
    }
    compareState.loading = true;
    renderPlayerComparison();
    try {
      const [left, right] = await Promise.all([
        fetchComparisonProfile(names.left),
        fetchComparisonProfile(names.right)
      ]);
      compareState.leftProfile = left;
      compareState.rightProfile = right;
      compareState.leftName = left.name;
      compareState.rightName = right.name;
    } catch (error) {
      compareState.error = String(error?.message || error || "compare_failed") === "player_not_found" ? "player_not_found" : "compare_failed";
    }
    compareState.loading = false;
    renderPlayerComparison();
  }

  async function preparePlayerComparison() {
    if (!compareState.leftName) {
      compareState.leftName = String(authState.profile?.name || authState.account?.username || "").trim();
    }
    compareState.pickSide = compareState.leftName && !compareState.rightName ? "right" : "left";
    syncCompareInputs();
    syncComparePickTarget();
    renderPlayerComparison();
    if (!leaderboardState.players.length && !leaderboardState.loading) {
      await fetchLeaderboard("level", false);
      updateCompareDatalist();
      renderCompareTopPicker();
    } else {
      updateCompareDatalist();
      renderCompareTopPicker();
    }
  }

  function compareWithSelectedPlayer(name) {
    const selected = String(name || "").trim();
    if (!selected) return;
    const current = String(authState.profile?.name || authState.account?.username || "").trim();
    if (current && identityKey(current) !== identityKey(selected)) {
      compareState.leftName = current;
      compareState.rightName = selected;
    } else if (!compareState.leftName || identityKey(compareState.leftName) === identityKey(selected)) {
      compareState.leftName = selected;
      compareState.rightName = "";
    } else {
      compareState.rightName = selected;
    }
    compareState.leftProfile = null;
    compareState.rightProfile = null;
    compareState.error = "";
    setPlayerModal(false);
    seasonArchiveState.mode = "compare";
    showView("top");
    syncCompareInputs();
    renderPlayerComparison();
    if (compareState.leftName && compareState.rightName) void runPlayerComparison();
  }

  function seasonDateLabel(seasonKey) {
    const raw = String(seasonKey || "").trim();
    const match = raw.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
    if (!match) return raw || "—";
    const date = new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]));
    return date.toLocaleDateString(language === "ru" ? "ru-RU" : "en-GB", {
      day: "2-digit", month: "long", year: "numeric"
    });
  }

  function seasonTimestampLabel(value) {
    const raw = Number(value || 0);
    if (!raw) return "—";
    const ms = raw < 1e12 ? raw * 1000 : raw;
    return new Date(ms).toLocaleString(language === "ru" ? "ru-RU" : "en-GB", {
      day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit"
    });
  }

  function hallCategoryInfo(category) {
    if (category === "kills") return { label: t("kills"), icon: "☠" };
    if (category === "wins") return { label: t("wins"), icon: "W" };
    if (category === "time") return { label: t("gameTime"), icon: "◷" };
    if (category === "tokens") return { label: t("richestPlayers"), icon: "T" };
    return { label: t("level"), icon: "LVL" };
  }

  function archivedMetric(profile, sort) {
    if (sort === "kills") return { label: t("kills"), value: formatCompactNumber(profile.kills) };
    if (sort === "wins") return { label: t("wins"), value: formatCompactNumber(profile.wins) };
    if (sort === "time") return { label: t("gameTime"), value: formatGameTime(profile.timeSec) };
    if (sort === "tokens") return { label: t("tokens"), value: formatCompactNumber(profile.tokens) };
    if (sort === "kd") return { label: t("kd"), value: profile.kd.toFixed(2) };
    if (sort === "matches") return { label: t("matches"), value: formatCompactNumber(profile.matches) };
    return { label: t("level"), value: `LVL ${profile.level}` };
  }

  function renderRankingMode() {
    $$('[data-rank-mode]').forEach((button) => {
      const active = button.dataset.rankMode === seasonArchiveState.mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    $$('[data-rank-mode-panel]').forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.rankModePanel === seasonArchiveState.mode);
    });
  }

  function setRankingMode(mode) {
    const normalized = ["current", "hall", "seasons", "compare"].includes(mode) ? mode : "current";
    seasonArchiveState.mode = normalized;
    renderRankingMode();
    if (normalized === "current") void fetchLeaderboard(leaderboardState.sort, false);
    if (normalized === "hall") void fetchHallOfFame(false);
    if (normalized === "seasons") void fetchSeasonList(false);
    if (normalized === "compare") void preparePlayerComparison();
  }

  function hallMetricValue(player, category) {
    if (!player) return "—";
    if (category === "kills") return formatCompactNumber(player.kills);
    if (category === "wins") return formatCompactNumber(player.wins);
    if (category === "time") return formatGameTime(player.timeSec);
    if (category === "tokens") return formatCompactNumber(player.tokens);
    return `LVL ${player.level}`;
  }

  function createHallCategory(category, podium = []) {
    const info = hallCategoryInfo(category);
    const card = document.createElement("article");
    card.className = `hall-category hall-category--${category}`;

    const head = document.createElement("header");
    const icon = document.createElement("span");
    icon.className = "hall-category__icon";
    icon.textContent = info.icon;
    const copy = document.createElement("div");
    const small = document.createElement("small");
    small.textContent = t("seasonChampion");
    const title = document.createElement("strong");
    title.textContent = info.label;
    copy.append(small, title);
    head.append(icon, copy);

    const winner = podium[0] ? normalizePublicProfile(podium[0]) : null;
    const hero = document.createElement("div");
    hero.className = "hall-category__winner";
    if (winner) {
      const avatar = createAvatarImage(winner.avatarId, "hall-category__avatar", `${t("avatar")}: ${winner.name}`);
      const identity = document.createElement("div");
      const crown = document.createElement("span"); crown.textContent = "♛ #1";
      const name = document.createElement("strong"); name.textContent = winner.name;
      const metric = document.createElement("b"); metric.textContent = hallMetricValue(winner, category);
      identity.append(crown, name, metric);
      hero.append(avatar, identity);
    }

    const list = document.createElement("div");
    list.className = "hall-category__podium";
    podium.slice(0, 3).forEach((raw, index) => {
      const player = normalizePublicProfile(raw);
      const row = document.createElement("div");
      row.className = `hall-podium-row hall-podium-row--${index + 1}`;
      const rank = document.createElement("span"); rank.textContent = `#${index + 1}`;
      const name = document.createElement("strong"); name.textContent = player.name;
      const value = document.createElement("b"); value.textContent = hallMetricValue(player, category);
      row.append(rank, name, value);
      list.append(row);
    });

    card.append(head, hero, list);
    return card;
  }

  function renderHallOfFame() {
    const body = $("#hallOfFameBody");
    const label = $("#hallSeasonLabel");
    if (!body) return;
    if (seasonArchiveState.hallLoading && !seasonArchiveState.hall) {
      renderInlineArchiveState(body, t("hallLoading"));
      if (label) label.textContent = "—";
      return;
    }
    if (seasonArchiveState.hallError) {
      renderInlineArchiveState(body, t("hallLoadError"), "", "error");
      if (label) label.textContent = "—";
      return;
    }
    const data = seasonArchiveState.hall;
    if (!data || data.ready !== true || !data.season) {
      renderInlineArchiveState(body, t("hallWaiting"), t("hallWaitingText"));
      if (label) label.textContent = "—";
      return;
    }
    if (label) label.textContent = `${t("seasonFinished")}: ${seasonDateLabel(data.season.seasonKey)}`;
    const shell = document.createElement("div");
    shell.className = "hall-of-fame-grid";
    ["level", "kills", "wins", "time", "tokens"].forEach((category) => {
      shell.append(createHallCategory(category, Array.isArray(data.podiums?.[category]) ? data.podiums[category] : []));
    });
    const note = document.createElement("p");
    note.className = "hall-of-fame-note";
    note.textContent = `${t("seasonPlayers")}: ${formatCompactNumber(data.season.archivedPlayers || 0)} · ${t("richestAtFinish")}`;
    body.replaceChildren(shell, note);
  }

  function renderInlineArchiveState(container, title, text = "", tone = "") {
    const state = document.createElement("div");
    state.className = `leaderboard-state${tone ? ` is-${tone}` : ""}`;
    const strong = document.createElement("strong"); strong.textContent = title;
    state.append(strong);
    if (text) { const p = document.createElement("p"); p.textContent = text; state.append(p); }
    container.replaceChildren(state);
  }

  async function fetchHallOfFame(force = false) {
    const endpoint = hallOfFameEndpoint();
    if (!endpoint || seasonArchiveState.hallLoading) return;
    const now = Date.now();
    if (!force && seasonArchiveState.hall && now - seasonArchiveState.hallLoadedAt < 60000) {
      renderHallOfFame(); return;
    }
    seasonArchiveState.hallLoading = true;
    seasonArchiveState.hallError = "";
    renderHallOfFame();
    try {
      const separator = endpoint.includes("?") ? "&" : "?";
      const response = await fetch(`${endpoint}${separator}_=${Date.now()}`, { cache: "no-store", headers: { Accept: "application/json" } });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.ok === false) throw new Error(String(data.error || `HTTP_${response.status}`));
      seasonArchiveState.hall = data;
      seasonArchiveState.hallLoadedAt = Date.now();
    } catch (error) {
      seasonArchiveState.hall = null;
      seasonArchiveState.hallError = String(error?.message || error || "hall_failed");
      console.warn("KONTRA Hall of Fame fetch failed", error);
    }
    seasonArchiveState.hallLoading = false;
    renderHallOfFame();
  }

  function createSeasonCard(season, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "season-card";
    button.dataset.seasonKey = String(season.seasonKey || "");
    const number = document.createElement("span");
    number.className = "season-card__number";
    number.textContent = String(index + 1).padStart(2, "0");
    const copy = document.createElement("div");
    const small = document.createElement("small");
    small.textContent = t("seasonFinished");
    const title = document.createElement("strong");
    title.textContent = seasonDateLabel(season.seasonKey);
    const meta = document.createElement("p");
    meta.textContent = `${t("seasonPlayers")}: ${formatCompactNumber(season.archivedPlayers || 0)} · ${seasonTimestampLabel(season.resetAt)}`;
    copy.append(small, title, meta);
    const arrow = document.createElement("b"); arrow.textContent = "›";
    button.append(number, copy, arrow);
    return button;
  }

  function createArchivedPlayer(profile) {
    const row = document.createElement("article");
    row.className = `leaderboard-player archived-player rank-${Math.min(profile.rank || 99, 4)}`;
    const rank = document.createElement("strong");
    rank.className = "leaderboard-player__rank";
    const rankValue = integer(profile.rank, 0, 0, 1000000);
    if (rankValue >= 1 && rankValue <= 3) {
      const crown = document.createElement("span");
      crown.className = `leaderboard-player__crown leaderboard-player__crown--${rankValue}`;
      crown.textContent = "♛";
      rank.append(crown);
    }
    const num = document.createElement("span");
    num.className = "leaderboard-player__rank-number";
    num.textContent = rankValue ? String(rankValue).padStart(2, "0") : "—";
    rank.append(num);
    const avatar = createAvatarImage(profile.avatarId, "leaderboard-player__avatar", `${t("avatar")}: ${profile.name}`);
    const identity = document.createElement("div"); identity.className = "leaderboard-player__identity";
    const name = document.createElement("strong"); name.textContent = profile.name;
    const meta = document.createElement("div"); meta.className = "leaderboard-player__meta"; meta.append(createRoleBadge(profile.role));
    identity.append(name, meta);
    const metricData = archivedMetric(profile, seasonArchiveState.seasonSort);
    const metric = document.createElement("div"); metric.className = "leaderboard-player__metric";
    const value = document.createElement("strong"); value.textContent = metricData.value;
    const label = document.createElement("small"); label.textContent = metricData.label;
    metric.append(value, label);
    const summary = document.createElement("div"); summary.className = "leaderboard-player__summary";
    summary.innerHTML = `<span>LVL <b>${profile.level}</b></span><span>${t("kills")} <b>${formatCompactNumber(profile.kills)}</b></span><span>K/D <b>${profile.kd.toFixed(2)}</b></span><span>${t("wins")} <b>${formatCompactNumber(profile.wins)}</b></span>`;
    row.append(rank, avatar, identity, metric, summary);
    return row;
  }

  function renderSeasonHistory() {
    const body = $("#seasonHistoryBody");
    const meta = $("#seasonHistoryMeta");
    if (!body) return;
    if (seasonArchiveState.seasonsLoading && !seasonArchiveState.seasons.length) {
      renderInlineArchiveState(body, t("seasonLoading"));
      if (meta) meta.textContent = "—";
      return;
    }
    if (seasonArchiveState.seasonsError) {
      renderInlineArchiveState(body, t("seasonLoadError"), "", "error");
      if (meta) meta.textContent = "—";
      return;
    }
    if (!seasonArchiveState.selectedSeason) {
      if (!seasonArchiveState.seasons.length) {
        renderInlineArchiveState(body, t("seasonEmpty"), t("seasonEmptyText"));
        if (meta) meta.textContent = "0";
        return;
      }
      const list = document.createElement("div"); list.className = "season-card-list";
      seasonArchiveState.seasons.forEach((season, index) => list.append(createSeasonCard(season, index)));
      body.replaceChildren(list);
      if (meta) meta.textContent = `${seasonArchiveState.seasons.length}`;
      return;
    }

    if (seasonArchiveState.seasonLoading && !seasonArchiveState.seasonMeta) {
      renderInlineArchiveState(body, t("seasonLoading")); return;
    }
    if (seasonArchiveState.seasonError) {
      const wrapper = document.createElement("div");
      renderInlineArchiveState(wrapper, t("seasonLoadError"), "", "error");
      const back = document.createElement("button"); back.type = "button"; back.className = "season-back-button"; back.dataset.seasonBack = "1"; back.textContent = `‹ ${t("seasonBack")}`;
      body.replaceChildren(back, wrapper); return;
    }

    const shell = document.createElement("div"); shell.className = "season-detail";
    const top = document.createElement("div"); top.className = "season-detail__top";
    const back = document.createElement("button"); back.type = "button"; back.className = "season-back-button"; back.dataset.seasonBack = "1"; back.textContent = `‹ ${t("seasonBack")}`;
    const title = document.createElement("div");
    const small = document.createElement("small"); small.textContent = t("seasonArchive");
    const strong = document.createElement("strong"); strong.textContent = seasonDateLabel(seasonArchiveState.selectedSeason);
    title.append(small, strong); top.append(back, title); shell.append(top);

    const sorts = document.createElement("div"); sorts.className = "leaderboard-tabs season-sort-tabs"; sorts.setAttribute("role", "tablist");
    const sortOptions = [["level", t("level")], ["kills", t("kills")], ["wins", t("wins")], ["time", t("gameTime")], ["tokens", t("tokens")], ["kd", t("kd")], ["matches", t("matches")]];
    sortOptions.forEach(([key, labelText]) => {
      const button = document.createElement("button"); button.type = "button"; button.dataset.seasonSort = key; button.textContent = labelText; button.classList.toggle("is-active", seasonArchiveState.seasonSort === key); sorts.append(button);
    });
    shell.append(sorts);

    if (!seasonArchiveState.seasonPlayers.length) {
      const empty = document.createElement("div"); renderInlineArchiveState(empty, t("leaderboardEmpty")); shell.append(empty);
    } else {
      const list = document.createElement("div"); list.className = "leaderboard-list season-ranking-list";
      seasonArchiveState.seasonPlayers.forEach((profile) => list.append(createArchivedPlayer(profile)));
      shell.append(list);
    }
    body.replaceChildren(shell);
    if (meta) meta.textContent = `${t("seasonPlayers")}: ${formatCompactNumber(seasonArchiveState.seasonMeta?.archivedPlayers || seasonArchiveState.seasonPlayers.length)}`;
  }

  async function fetchSeasonList(force = false) {
    const endpoint = seasonsEndpoint();
    if (!endpoint || seasonArchiveState.seasonsLoading) return;
    const now = Date.now();
    if (!force && seasonArchiveState.seasonsLoadedAt && now - seasonArchiveState.seasonsLoadedAt < 60000) {
      renderSeasonHistory(); return;
    }
    seasonArchiveState.seasonsLoading = true;
    seasonArchiveState.seasonsError = "";
    renderSeasonHistory();
    renderSeasonPromos();
    try {
      const separator = endpoint.includes("?") ? "&" : "?";
      const response = await fetch(`${endpoint}${separator}limit=50&_=${Date.now()}`, { cache: "no-store", headers: { Accept: "application/json" } });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.ok === false) throw new Error(String(data.error || `HTTP_${response.status}`));
      seasonArchiveState.seasons = Array.isArray(data.seasons) ? data.seasons : [];
      seasonArchiveState.seasonsLoadedAt = Date.now();
    } catch (error) {
      seasonArchiveState.seasons = [];
      seasonArchiveState.seasonsError = String(error?.message || error || "season_list_failed");
      console.warn("KONTRA season list fetch failed", error);
    }
    seasonArchiveState.seasonsLoading = false;
    renderSeasonHistory();
  }

  async function fetchSeasonHistory(seasonKey, sort = seasonArchiveState.seasonSort) {
    const endpoint = seasonEndpoint();
    if (!endpoint || seasonArchiveState.seasonLoading) return;
    const key = String(seasonKey || "").trim();
    if (!key) return;
    seasonArchiveState.selectedSeason = key;
    seasonArchiveState.seasonSort = ["level", "kills", "wins", "time", "tokens", "kd", "matches"].includes(sort) ? sort : "level";
    seasonArchiveState.seasonLoading = true;
    seasonArchiveState.seasonError = "";
    seasonArchiveState.seasonMeta = null;
    seasonArchiveState.seasonPlayers = [];
    renderSeasonHistory();
    try {
      const separator = endpoint.includes("?") ? "&" : "?";
      const response = await fetch(`${endpoint}${separator}key=${encodeURIComponent(key)}&sort=${encodeURIComponent(seasonArchiveState.seasonSort)}&limit=100&_=${Date.now()}`, { cache: "no-store", headers: { Accept: "application/json" } });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.ok === false) throw new Error(String(data.error || `HTTP_${response.status}`));
      seasonArchiveState.seasonMeta = data.season || null;
      seasonArchiveState.seasonPlayers = Array.isArray(data.players) ? data.players.map(normalizePublicProfile) : [];
    } catch (error) {
      seasonArchiveState.seasonError = String(error?.message || error || "season_history_failed");
      console.warn("KONTRA season history fetch failed", error);
    }
    seasonArchiveState.seasonLoading = false;
    renderSeasonHistory();
  }

  function playerTeamLabel(team) {
    const normalized = normalizeTeam(team);
    return normalized === "T" ? t("zombiesTeam") : normalized === "CT" ? t("survivorsTeam") : t("unknownTeam");
  }

  function playerDetailStat(label, value, className = "") {
    const item = document.createElement("div");
    item.className = `player-detail-stat${className ? ` ${className}` : ""}`;
    const small = document.createElement("small");
    small.textContent = label;
    const strong = document.createElement("strong");
    strong.textContent = value;
    item.append(small, strong);
    return item;
  }

  function renderPlayerModal() {
    const body = $("#playerModalBody");
    if (!body) return;
    const live = playerModalState.live;
    const profile = playerModalState.profile;
    const name = profile?.name || live?.name || "Player";

    const wrapper = document.createElement("div");
    wrapper.className = "player-detail";
    const head = document.createElement("header");
    const hero = document.createElement("div");
    hero.className = "player-detail__hero";
    const avatar = createAvatarImage(profile?.avatarId, "player-detail__avatar", `${t("avatar")}: ${name}`);
    const heading = document.createElement("div");
    const eyebrow = document.createElement("small");
    eyebrow.textContent = t("playerCard");
    const title = document.createElement("h2");
    title.id = "playerModalTitle";
    title.textContent = name;
    const badges = document.createElement("div");
    badges.className = "profile-badges";
    if (profile) badges.append(createRoleBadge(profile.role));
    if (live?.bot) badges.append(createBadge(t("bot"), "is-bot"));
    const onlineBadge = document.createElement("span");
    const currentlyOnline = profile?.online || Boolean(live);
    onlineBadge.className = `leaderboard-online${currentlyOnline ? " is-online" : ""}`;
    onlineBadge.textContent = currentlyOnline ? t("onlineNow") : t("offlineNow");
    badges.append(onlineBadge);
    heading.append(eyebrow, title, badges);
    hero.append(avatar, heading);
    head.append(hero);
    wrapper.append(head);

    if (live) {
      const liveSection = document.createElement("section");
      liveSection.className = "player-detail__section";
      const label = document.createElement("h3");
      label.textContent = t("liveStatus");
      const stats = document.createElement("div");
      stats.className = "player-detail-grid";
      stats.append(
        playerDetailStat(t("team"), playerTeamLabel(live.team)),
        playerDetailStat(t("status"), live.alive ? t("alive") : t("dead")),
        playerDetailStat(t("hp"), String(integer(live.hp))),
        playerDetailStat(t("armor"), String(integer(live.armor))),
        playerDetailStat(t("score"), String(integer(live.score, 0, 0, 65535))),
        playerDetailStat(t("deaths"), String(integer(live.deaths, 0, 0, 65535)))
      );
      liveSection.append(label, stats);
      wrapper.append(liveSection);
    }

    const profileSection = document.createElement("section");
    profileSection.className = "player-detail__section";
    const profileLabel = document.createElement("h3");
    profileLabel.textContent = t("lvlProfile");
    profileSection.append(profileLabel);

    if (profile) {
      const stats = document.createElement("div");
      stats.className = "player-detail-grid";
      stats.append(
        playerDetailStat(t("level"), String(profile.level), "is-green"),
        playerDetailStat(t("kills"), formatCompactNumber(profile.kills)),
        playerDetailStat(t("deaths"), formatCompactNumber(profile.deaths), "is-red"),
        playerDetailStat(t("kd"), profile.kd.toFixed(2)),
        playerDetailStat(t("gameTime"), formatGameTime(profile.timeSec)),
        playerDetailStat(t("matches"), formatCompactNumber(profile.matches)),
        playerDetailStat(t("wins"), formatCompactNumber(profile.wins)),
        playerDetailStat(t("winRate"), `${profile.winRate}%`)
      );
      profileSection.append(stats);
      const compareAction = document.createElement("button");
      compareAction.type = "button";
      compareAction.className = "primary-button player-compare-action";
      compareAction.dataset.comparePlayer = profile.name;
      compareAction.textContent = `VS · ${t("compareWithPlayer")}`;
      profileSection.append(compareAction);
    } else if (playerModalState.loading) {
      const state = document.createElement("p");
      state.className = "player-detail__message";
      state.textContent = t("loadingPlayer");
      profileSection.append(state);
    } else {
      const titleMissing = document.createElement("strong");
      titleMissing.className = "player-detail__missing";
      titleMissing.textContent = t("profileNotFound");
      const text = document.createElement("p");
      text.className = "player-detail__message";
      text.textContent = live?.bot ? t("botProfileText") : (playerModalState.error ? t("playerLookupError") : t("profileNotFoundText"));
      profileSection.append(titleMissing, text);
    }
    wrapper.append(profileSection);
    body.replaceChildren(wrapper);
  }

  function setPlayerModal(open) {
    const modal = $("#playerModal");
    if (!modal) return;
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", String(!open));
    if (!open) playerModalState.requestId += 1;
  }

  async function openPlayerDetails(live, initialProfile = null) {
    const requestId = ++playerModalState.requestId;
    playerModalState.live = live || null;
    playerModalState.profile = initialProfile ? normalizePublicProfile(initialProfile) : null;
    playerModalState.loading = !initialProfile && !live?.bot;
    playerModalState.error = "";
    renderPlayerModal();
    setPlayerModal(true);

    const endpoint = playerEndpoint();
    const name = String(initialProfile?.username || initialProfile?.name || live?.name || "").trim();
    if (!endpoint || !name || live?.bot) {
      playerModalState.loading = false;
      renderPlayerModal();
      return;
    }

    try {
      const separator = endpoint.includes("?") ? "&" : "?";
      const response = await fetch(`${endpoint}${separator}name=${encodeURIComponent(name)}&_=${Date.now()}`, {
        cache: "no-store",
        headers: { Accept: "application/json" }
      });
      const data = await response.json().catch(() => ({}));
      if (requestId !== playerModalState.requestId) return;
      if (response.status === 404 || data.error === "player_not_found") {
        playerModalState.loading = false;
        playerModalState.error = "";
        renderPlayerModal();
        return;
      }
      if (!response.ok || data.ok === false) throw new Error(String(data.error || `HTTP_${response.status}`));
      playerModalState.profile = data.player ? normalizePublicProfile(data.player) : playerModalState.profile;
      if (data.live) playerModalState.live = normalizePlayer(data.live);
      playerModalState.loading = false;
      renderPlayerModal();
    } catch (error) {
      if (requestId !== playerModalState.requestId) return;
      playerModalState.loading = false;
      playerModalState.error = String(error?.message || error);
      renderPlayerModal();
    }
  }

  function createRoleBadge(role) {
    const normalized = String(role || "PLAYER").toUpperCase();
    const badge = document.createElement("span");
    badge.className = `account-role account-role--${normalized.toLowerCase()}`;
    badge.textContent = normalized;
    return badge;
  }

  function createProfileStat(label, value, className = "") {
    const item = document.createElement("div");
    item.className = `profile-stat${className ? ` ${className}` : ""}`;
    const small = document.createElement("small");
    small.textContent = label;
    const strong = document.createElement("strong");
    strong.textContent = String(value);
    item.append(small, strong);
    return item;
  }

  function createLockedProfile(compact) {
    const wrap = document.createElement(compact ? "div" : "article");
    wrap.className = compact ? "locked-profile" : "panel profile-login-card";

    const image = document.createElement("img");
    image.src = "assets/kontra-zombie-logo.webp";
    image.alt = "";
    image.width = compact ? 74 : 88;
    image.height = compact ? 74 : 88;

    const text = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = t("profileLocked");
    const description = document.createElement("p");
    description.textContent = t("profileLockedText");
    text.append(title, description);

    const button = document.createElement("button");
    button.className = "primary-button";
    button.type = "button";
    button.textContent = t("signIn");
    button.addEventListener("click", () => setLogin(true));

    wrap.append(image, text, button);
    return wrap;
  }

  function createCompactProfile() {
    const profile = authState.profile;
    const account = authState.account;
    const wrap = document.createElement("div");
    wrap.className = "profile-compact";

    const identity = document.createElement("div");
    identity.className = "profile-identity";
    const image = createAvatarImage(profile.avatarId, "profile-avatar", `${t("avatar")}: ${profile.name || account.username}`);
    image.width = 72;
    image.height = 72;
    const identityText = document.createElement("div");
    const eyebrow = document.createElement("small");
    eyebrow.textContent = t("signedInAs");
    const name = document.createElement("strong");
    name.textContent = profile.name || account.username;
    const badges = document.createElement("div");
    badges.className = "profile-badges";
    badges.append(createRoleBadge(account.role));
    const level = document.createElement("span");
    level.className = "account-level";
    level.textContent = `LVL ${profile.level}`;
    badges.append(level);
    identityText.append(eyebrow, name, badges);
    identity.append(image, identityText);

    const stats = document.createElement("div");
    stats.className = "profile-stats profile-stats--compact";
    stats.append(
      createProfileStat(t("kills"), profile.kills),
      createProfileStat(t("deaths"), profile.deaths),
      createProfileStat(t("kd"), profile.kd.toFixed(2)),
      createProfileStat(t("tokens"), profile.tokens)
    );

    const button = document.createElement("button");
    button.className = "primary-button profile-open-button";
    button.type = "button";
    button.textContent = t("openProfile");
    button.addEventListener("click", () => showView("profile"));

    wrap.append(identity, stats, button);
    return wrap;
  }

  function createAvatarPicker(selectedValue) {
    const selectedId = normalizeAvatarId(selectedValue);
    const section = document.createElement("section");
    section.className = "avatar-picker";

    const heading = document.createElement("header");
    const copy = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = t("chooseAvatar");
    const hint = document.createElement("small");
    hint.textContent = t("avatarPublicHint");
    copy.append(title, hint);
    const publicBadge = document.createElement("span");
    publicBadge.className = "avatar-picker__public";
    publicBadge.textContent = "PUBLIC";
    heading.append(copy, publicBadge);

    const grid = document.createElement("div");
    grid.className = "avatar-picker__grid";
    AVATAR_IDS.forEach((avatarId, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `avatar-option${avatarId === selectedId ? " is-selected" : ""}`;
      button.dataset.avatarId = avatarId;
      button.disabled = authState.avatarSaving;
      button.setAttribute("aria-pressed", String(avatarId === selectedId));
      button.setAttribute("aria-label", `${t("avatar")} ${index + 1}`);
      const avatar = createAvatarImage(avatarId, "", "");
      const number = document.createElement("span");
      number.textContent = String(index + 1).padStart(2, "0");
      button.append(avatar, number);
      button.addEventListener("click", () => saveAvatar(avatarId));
      grid.append(button);
    });

    section.append(heading, grid);
    return section;
  }

  async function saveAvatar(value) {
    const avatarId = normalizeAvatarId(value);
    if (
      authState.avatarSaving ||
      !authState.account ||
      !authState.profile ||
      (!authState.sessionToken && !previewProfileEnabled())
    ) return;

    if (avatarId === normalizeAvatarId(authState.profile.avatarId)) return;

    if (previewProfileEnabled()) {
      authState.profile.avatarId = avatarId;
      syncCurrentAvatarAcrossViews(avatarId);
      renderAuth();
      toast(t("avatarSaved"));
      return;
    }

    // The Worker/D1 response is the source of truth.
    // Do not keep a second avatar state in localStorage and do not publish
    // an optimistic avatar before the server confirms the write.
    authState.avatarSaving = true;
    renderAuth();
    toast(t("avatarSaving"));

    try {
      const data = await authRequest("/avatar", {
        method: "POST",
        body: { avatarId }
      });

      storeAuth(data);
      const confirmedAvatarId = normalizeAvatarId(
        data?.profile?.avatarId || authState.profile?.avatarId
      );
      if (authState.profile) authState.profile.avatarId = confirmedAvatarId;
      syncCurrentAvatarAcrossViews(confirmedAvatarId);

      leaderboardState.loadedAt = 0;
      toast(t("avatarSaved"));
      void fetchLeaderboard(leaderboardState.sort, true);
    } catch (error) {
      const errorCode = String(error?.message || "");
      if (["invalid_session", "unauthorized"].includes(errorCode)) {
        clearAuth();
        setLogin(true);
      } else if (["not_found", "HTTP_404"].includes(errorCode)) {
        toast(t("avatarWorkerRequired"));
      } else {
        toast(t("avatarSaveError"));
      }
    } finally {
      authState.avatarSaving = false;
      renderAuth();
    }
  }


  function createSecurityCenter() {
    const security = authState.security || {};
    const section = document.createElement("section");
    section.className = "account-security";
    const head = document.createElement("header");
    const title = document.createElement("strong"); title.textContent = t("securityTitle");
    const lead = document.createElement("small"); lead.textContent = t("securityLead");
    head.append(title, lead); section.append(head);

    const grid = document.createElement("div"); grid.className = "account-security__grid";
    const emailCard = document.createElement("article"); emailCard.className = "security-method";
    const emailTop = document.createElement("div");
    const emailTitle = document.createElement("strong"); emailTitle.textContent = t("emailLinkTitle");
    const emailState = document.createElement("span"); emailState.className = `security-state ${security.emailLinked ? "is-linked" : ""}`; emailState.textContent = security.emailLinked ? t("linked") : t("notLinked");
    emailTop.append(emailTitle,emailState);
    const emailCurrent = document.createElement("p"); emailCurrent.className="security-current"; emailCurrent.textContent = security.emailLinked ? (security.email || security.emailMasked || "") : t("emailLinkHint");
    const emailForm = document.createElement("form"); emailForm.className="security-email-form";
    emailForm.innerHTML = `<input type="email" name="email" autocomplete="email" placeholder="${authLocalized("name@example.com","name@example.com")}" required><button class="secondary-button" type="submit">${security.emailLinked ? t("changeEmail") : t("linkEmail")}</button>`;
    const emailVerify = document.createElement("div"); emailVerify.className="security-verify"; emailVerify.hidden=true;
    emailVerify.innerHTML = `<input inputmode="numeric" maxlength="6" pattern="[0-9]{6}" placeholder="000000"><button class="primary-button" type="button">${t("verifyEmail")}</button>`;
    const emailStatus = document.createElement("small"); emailStatus.className="security-hint"; emailStatus.textContent=t("emailLinkHint");
    let challengeId="";
    emailForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const email=String(new FormData(emailForm).get("email")||"").trim();
      try { const data=await startEmailLink(email); challengeId=String(data.challengeId||""); emailVerify.hidden=false; emailStatus.textContent=`${t("codeSent")} ${data.emailMasked||""}`.trim(); emailVerify.querySelector("input")?.focus(); }
      catch(error){ emailStatus.textContent=authErrorMessage(error); }
    });
    emailVerify.querySelector("button").addEventListener("click", async()=>{
      const code=String(emailVerify.querySelector("input")?.value||"").trim();
      if(!challengeId || code.length!==6){ emailStatus.textContent=t("invalidCode"); return; }
      try { await verifyEmailLink(challengeId,code); }
      catch(error){ emailStatus.textContent=authErrorMessage(error); }
    });
    emailCard.append(emailTop,emailCurrent,emailForm,emailVerify,emailStatus);
    if (security.emailLinked) {
      const unlink=document.createElement("button"); unlink.type="button"; unlink.className="text-action danger-text"; unlink.textContent=t("unlink");
      unlink.addEventListener("click", async()=>{ if(!confirm(authLocalized("Отвязать подтвержденную почту? Игровой логин и пароль останутся рабочими.","Unlink the verified email? Game username/password will still work."))) return; try{const data=await authRequest("/email/unlink",{method:"POST",body:{}});authState.security=data.security||{};renderAuth();}catch(error){toast(authErrorMessage(error));} });
      emailCard.append(unlink);
    }

    const googleCard=document.createElement("article"); googleCard.className=`security-method security-method--google ${security.googleLinked?"is-linked":""}`;
    const googleTop=document.createElement("div"); const googleTitle=document.createElement("strong");googleTitle.textContent=t("googleLinkTitle");
    const googleState=document.createElement("span");googleState.className=`security-state ${security.googleLinked?"is-linked":""}`;googleState.textContent=security.googleLinked?t("linked"):t("notLinked"); googleTop.append(googleTitle,googleState);
    const googleCurrent=document.createElement("p");googleCurrent.className="security-current";googleCurrent.textContent=security.googleLinked?(security.googleEmail||t("linked")):t("googleLinkHint");
    googleCard.append(googleTop,googleCurrent);
    if(!security.googleLinked){
      const googleSlot=document.createElement("div");googleSlot.className="google-signin-slot google-signin-slot--profile";
      googleCard.append(googleSlot);
    } else {
      const unlink=document.createElement("button");unlink.type="button";unlink.className="text-action danger-text";unlink.textContent=t("unlink");unlink.addEventListener("click",async()=>{if(!confirm(authLocalized("Отвязать Google? Игровой логин и пароль останутся рабочими.","Unlink Google? Game username/password will still work.")))return;try{const data=await authRequest("/google/unlink",{method:"POST",body:{}});authState.security=data.security||{};renderAuth();}catch(error){toast(authErrorMessage(error));}});googleCard.append(unlink);
    }
    grid.append(emailCard,googleCard); section.append(grid); return section;
  }

  function parsePromoRedeemResult(value) {
    const parts = String(value || "").split(":");
    if (parts.length < 5 || parts[0] !== "promo_redeemed") return null;
    const kind = parts[1] === "lvl" ? "lvl" : "tok";
    const amount = integer(parts[2], 0, 0, 2147483647);
    const level = integer(parts[3], authState.profile?.level || 1, 1, 2147483647);
    const tokens = integer(parts[4], authState.profile?.tokens || 0, 0, 2147483647);
    return { kind, amount, level, tokens };
  }

  function promoRedeemFailureText(code) {
    const value = String(code || "");
    if (value === "promo_not_found") return t("promoRedeemNotFound");
    if (value === "promo_already_used") return t("promoRedeemUsed");
    if (value === "invalid_promo" || value === "invalid_payload") return t("promoRedeemInvalid");
    if (value === "economy_busy" || value === "command_rate_limited") return t("promoRedeemBusy");
    if (["data_not_loaded", "profile_unavailable", "lvl_promo_bridge_unavailable", "web_op_bridge_unavailable", "control_unavailable"].includes(value)) return t("promoRedeemUnavailable");
    return t("promoRedeemUnavailable");
  }

  function promoRedeemSuccessText(result) {
    if (!result) return t("promoRedeemSuccess");
    const amount = Number(result.amount || 0).toLocaleString(language === "ru" ? "ru-RU" : "en-US");
    const reward = result.kind === "lvl" ? `+${amount} LVL` : `+${amount} ${t("promoTokens")}`;
    return `${t("promoRedeemSuccess")}: ${reward}`;
  }

  async function refreshProfileAfterPromo() {
    if (!authState.sessionToken) return;
    await new Promise((resolve) => setTimeout(resolve, 1200));
    try {
      const data = await authRequest("/me", { method: "GET" });
      storeAuth(data);
    } catch {}
  }

  async function redeemPromoFromProfile(rawCode) {
    if (promoRedeemState.busy) return;
    const code = String(rawCode || "").trim().replace(/\s+/g, "");
    promoRedeemState.code = code;
    if (!code || code.length > 64 || !/^[A-Za-z0-9_-]+$/.test(code)) {
      promoRedeemState.message = t("promoRedeemInvalid");
      promoRedeemState.tone = "error";
      renderAuth();
      return;
    }

    promoRedeemState.busy = true;
    promoRedeemState.message = t("promoRedeemSending");
    promoRedeemState.tone = "loading";
    renderAuth();
    try {
      const created = await controlRequest("/command", { method: "POST", body: { action: "promo_redeem", code } });
      const outcome = await waitControlResult(created.commandId || "");
      if (outcome.timeout) {
        promoRedeemState.message = t("promoRedeemTimeout");
        promoRedeemState.tone = "error";
        return;
      }
      if (!outcome.ok) {
        promoRedeemState.message = promoRedeemFailureText(outcome.data?.result || "promo_failed");
        promoRedeemState.tone = "error";
        return;
      }

      const parsed = parsePromoRedeemResult(outcome.data?.result);
      if (!parsed) {
        promoRedeemState.message = t("promoRedeemUnavailable");
        promoRedeemState.tone = "error";
        return;
      }
      if (authState.profile) {
        authState.profile.level = parsed.level;
        authState.profile.tokens = parsed.tokens;
      }
      promoRedeemState.code = "";
      promoRedeemState.message = promoRedeemSuccessText(parsed);
      promoRedeemState.tone = "success";
      toast(promoRedeemState.message);
      void refreshProfileAfterPromo();
    } catch (error) {
      if (["unauthorized", "invalid_session"].includes(String(error?.message || ""))) {
        clearAuth();
        setLogin(true);
        return;
      }
      promoRedeemState.message = promoRedeemFailureText(error?.message || "promo_failed");
      promoRedeemState.tone = "error";
    } finally {
      promoRedeemState.busy = false;
      renderAuth();
    }
  }

  function createPromoRedeemCenter() {
    const section = document.createElement("section");
    section.className = "profile-promo-redeem";

    const header = document.createElement("header");
    const copy = document.createElement("div");
    const eyebrow = document.createElement("small");
    eyebrow.textContent = t("seasonPromosEyebrow");
    const title = document.createElement("strong");
    title.textContent = t("promoRedeemTitle");
    const lead = document.createElement("p");
    lead.textContent = t("promoRedeemLead");
    copy.append(eyebrow, title, lead);
    const badge = document.createElement("span");
    badge.className = "profile-promo-redeem__badge";
    badge.textContent = "%";
    header.append(copy, badge);

    const form = document.createElement("form");
    form.className = "profile-promo-redeem__form";
    const input = document.createElement("input");
    input.type = "text";
    input.name = "promo";
    input.maxLength = 64;
    input.autocomplete = "off";
    input.autocapitalize = "none";
    input.spellcheck = false;
    input.placeholder = t("promoRedeemPlaceholder");
    input.value = promoRedeemState.code;
    input.disabled = promoRedeemState.busy;
    input.addEventListener("input", () => { promoRedeemState.code = input.value; });

    const button = document.createElement("button");
    button.type = "submit";
    button.className = "primary-button";
    button.disabled = promoRedeemState.busy;
    button.textContent = promoRedeemState.busy ? t("promoRedeemSending") : t("promoRedeemButton");
    form.append(input, button);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      void redeemPromoFromProfile(input.value);
    });

    const status = document.createElement("small");
    status.className = `profile-promo-redeem__status${promoRedeemState.tone ? ` is-${promoRedeemState.tone}` : ""}`;
    status.textContent = promoRedeemState.message || t("promoRedeemHint");
    section.append(header, form, status);
    return section;
  }

  function createLegalCenter() {
    const section = document.createElement("section");
    section.className = "profile-legal-center";

    const header = document.createElement("header");
    const title = document.createElement("strong");
    title.textContent = t("legalCenterTitle");
    const lead = document.createElement("p");
    lead.textContent = t("legalCenterLead");
    header.append(title, lead);

    const links = document.createElement("div");
    links.className = "profile-legal-center__links";
    [
      ["privacyPolicy", "/privacy/"],
      ["deleteAccount", "/delete-account/"],
      ["supportCenter", "/support/"],
      ["communityRules", "/rules/"]
    ].forEach(([key, href]) => {
      const link = document.createElement("a");
      link.href = href;
      link.className = "secondary-button profile-legal-center__link";
      link.textContent = t(key);
      links.appendChild(link);
    });

    section.append(header, links);
    return section;
  }

  function createFullProfile() {
    const profile = authState.profile;
    const account = authState.account;
    const card = document.createElement("article");
    card.className = "panel web-profile-card";

    const hero = document.createElement("header");
    hero.className = "web-profile-card__hero";
    const image = createAvatarImage(profile.avatarId, "profile-avatar profile-avatar--large", `${t("avatar")}: ${profile.name || account.username}`);
    image.width = 90;
    image.height = 90;
    const identity = document.createElement("div");
    const status = document.createElement("small");
    status.textContent = t("accountActive");
    const name = document.createElement("h2");
    name.textContent = profile.name || account.username;
    const badges = document.createElement("div");
    badges.className = "profile-badges";
    badges.append(createRoleBadge(account.role));
    const level = document.createElement("span");
    level.className = "account-level";
    level.textContent = `LVL ${profile.level}`;
    badges.append(level);
    identity.append(status, name, badges);
    hero.append(image, identity);

    const stats = document.createElement("div");
    stats.className = "profile-stats profile-stats--full";
    stats.append(
      createProfileStat(t("kills"), profile.kills, "is-green"),
      createProfileStat(t("deaths"), profile.deaths, "is-red"),
      createProfileStat(t("kd"), profile.kd.toFixed(2), "is-cyan"),
      createProfileStat(t("gameTime"), formatGameTime(profile.timeSec), "is-yellow"),
      createProfileStat(t("matches"), profile.matches),
      createProfileStat(t("wins"), profile.wins),
      createProfileStat(t("winRate"), `${profile.winRate}%`),
      createProfileStat(t("tokens"), profile.tokens, "is-gold")
    );

    const footer = document.createElement("footer");
    footer.className = "web-profile-card__footer";
    const meta = document.createElement("div");
    const firstLabel = document.createElement("small");
    firstLabel.textContent = t("firstJoin");
    const firstValue = document.createElement("strong");
    firstValue.textContent = profile.firstJoin || "—";
    meta.append(firstLabel, firstValue);

    const logout = document.createElement("button");
    logout.type = "button";
    logout.className = "secondary-button danger-button";
    logout.textContent = t("signOut");
    logout.addEventListener("click", logoutAccount);
    footer.append(meta, logout);

    card.append(hero, createAvatarPicker(profile.avatarId), stats, createPromoRedeemCenter(), createSecurityCenter(), createLegalCenter(), footer);
    return card;
  }

  function syncAdminOnlyControls() {
    const isAdmin = String(authState.account?.role || authState.profile?.role || "").toUpperCase() === "ADMIN";
    $$("[data-admin-only]").forEach((node) => { node.hidden = !isAdmin; });
  }

  function renderAuth() {
    syncAdminOnlyControls();
    const home = $("#homeProfileBody");
    const page = $("#profilePageBody");
    if (home) home.replaceChildren(authState.account && authState.profile ? createCompactProfile() : createLockedProfile(true));
    if (page) page.replaceChildren(authState.account && authState.profile ? createFullProfile() : createLockedProfile(false));

    const drawerTitle = $("#drawerAccountTitle");
    const drawerSubtitle = $("#drawerAccountSubtitle");
    const drawerAvatar = $("#drawerAccountAvatar");
    const drawerAvatarFrame = drawerAvatar?.closest(".drawer-account-avatar");
    if (drawerTitle && drawerSubtitle) {
      if (authState.account && authState.profile) {
        drawerTitle.textContent = authState.profile.name || authState.account.username;
        drawerSubtitle.textContent = `${authState.account.role} · LVL ${authState.profile.level}`;
        if (drawerAvatar) drawerAvatar.src = avatarSource(authState.profile.avatarId);
        drawerAvatarFrame?.classList.add("is-authenticated");
      } else {
        drawerTitle.textContent = t("signIn");
        drawerSubtitle.textContent = t("usernamePassword");
        if (drawerAvatar) drawerAvatar.src = avatarSource(DEFAULT_AVATAR_ID);
        drawerAvatarFrame?.classList.remove("is-authenticated");
      }
    }
    renderLvlHub();
    queueMicrotask(() => { void renderGoogleButtons(); });
  }

  function removeTicketFromAddress() {
    const url = new URL(location.href);
    if (!url.searchParams.has("ticket")) return;
    url.searchParams.delete("ticket");
    history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }

  async function redeemTicket(ticket) {
    setLogin(true);
    setLoginBusy(true, t("ticketSigningIn"));
    try {
      const data = await authRequest("/redeem", {
        method: "POST",
        session: false,
        body: { ticket }
      });
      storeAuth(data);
      removeTicketFromAddress();
      setLogin(false);
      toast(t("loginSuccess"));
      showView("profile");
    } catch (error) {
      removeTicketFromAddress();
      clearAuth();
      setLoginBusy(false);
      setLoginStatus(error.message === "ticket_expired_or_used" ? t("ticketInvalid") : t("networkError"), true);
    } finally {
      setLoginBusy(false);
    }
  }

  async function restoreSession() {
    if (!authState.sessionToken) return;
    try {
      const data = await authRequest("/me", { method: "GET" });
      storeAuth(data);
      if (!data.security) void refreshSecurity();
    } catch {
      clearAuth();
    }
  }

  async function loginAccount(username, password) {
    setLoginBusy(true, t("signingIn"));
    try {
      const data = await authRequest("/login", {
        method: "POST",
        session: false,
        body: { username, password }
      });
      storeAuth(data);
      $("#loginForm").reset();
      setLogin(false);
      toast(t("loginSuccess"));
      showView("profile");
    } catch (error) {
      const invalid = error.status === 401 || error.message === "invalid_credentials";
      setLoginStatus(invalid ? t("invalidCredentials") : t("networkError"), true);
    } finally {
      setLoginBusy(false);
    }
  }

  async function logoutAccount() {
    const token = authState.sessionToken;
    clearAuth();
    setDrawer(false);
    if (token && config.authEnabled) {
      try {
        authState.sessionToken = token;
        await authRequest("/logout", { method: "POST" });
      } catch {}
      authState.sessionToken = "";
    }
    showView("home");
  }

  async function initializeAuth() {
    renderAuth();
    if (previewProfileEnabled()) {
      storeAuth({
        username: "Kuro",
        role: "ADMIN",
        profile: {
          name: "Kuro",
          role: "ADMIN",
          avatarId: "avatar-03",
          level: 170,
          kills: 2,
          deaths: 90,
          kd: 0.02,
          timeSec: 18240,
          matches: 73,
          wins: 57,
          winRate: 78,
          tokens: 142481,
          firstJoin: "10.07.2026"
        }
      });
      return;
    }
    if (!config.authEnabled || !authBase()) return;
    const ticket = new URL(location.href).searchParams.get("ticket");
    if (ticket) {
      await redeemTicket(ticket);
      return;
    }
    await restoreSession();
  }

  function updateThemeControl() {
    const toggle = $("#themeToggle");
    if (!toggle) return;
    const day = colorTheme === "day";
    toggle.setAttribute("aria-pressed", String(day));
    toggle.setAttribute("aria-label", language === "ru"
      ? (day ? "Выключить лампу и включить ночную тему" : "Включить лампу и включить дневную тему")
      : (day ? "Turn the lamp off and use night mode" : "Turn the lamp on and use day mode"));
    toggle.title = language === "ru" ? (day ? "Ночная тема" : "Дневная тема") : (day ? "Night mode" : "Day mode");
  }

  function applyColorTheme(next, animate = false) {
    colorTheme = next === "day" ? "day" : "night";
    localStorage.setItem(THEME_KEY, colorTheme);
    document.body.classList.toggle("theme-day", colorTheme === "day");
    document.documentElement.style.colorScheme = colorTheme === "day" ? "light" : "dark";
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", colorTheme === "day" ? "#f6f8f2" : "#050706");
    updateThemeControl();

    if (animate) {
      const toggle = $("#themeToggle");
      document.body.classList.remove("theme-switching");
      toggle?.classList.remove("is-switching");
      void document.body.offsetWidth;
      document.body.classList.add("theme-switching");
      toggle?.classList.add("is-switching");
      window.setTimeout(() => {
        document.body.classList.remove("theme-switching");
        toggle?.classList.remove("is-switching");
      }, 760);
    }
  }

  function toggleColorTheme() {
    applyColorTheme(colorTheme === "day" ? "night" : "day", true);
  }

  const promoSeasonState = { promos: [], updatedAt: 0, loading: false };

  function normalizeSeasonPromo(raw) {
    if (!raw || typeof raw !== "object") return null;
    const word = String(raw.word || "").trim().slice(0, 64);
    const kind = String(raw.kind || "tok").toLowerCase() === "lvl" ? "lvl" : "tok";
    const amount = Math.max(0, Math.floor(Number(raw.amount) || 0));
    if (!word || amount <= 0) return null;
    return { word, kind, amount };
  }

  function escapePromoText(value) {
    return String(value || "").replace(/[&<>"']/g, (ch) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "\"":"&quot;", "'":"&#39;" }[ch] || ch));
  }

  function promoRewardLabel(promo) {
    const amount = Number(promo?.amount || 0).toLocaleString(language === "ru" ? "ru-RU" : "en-US");
    return promo?.kind === "lvl" ? `+${amount} LVL` : `+${amount} ${t("promoTokens")}`;
  }

  function renderSeasonPromos() {
    const panel = $("#promoSeasonPanel");
    const grid = $("#promoSeasonGrid");
    if (!panel || !grid) return;
    const promos = Array.isArray(promoSeasonState.promos) ? promoSeasonState.promos : [];
    panel.hidden = promos.length === 0;
    grid.replaceChildren();
    if (!promos.length) return;
    promos.forEach((promo, index) => {
      const card = document.createElement("article");
      card.className = `promo-season-card ${promo.kind === "lvl" ? "is-lvl" : "is-tokens"}`;
      card.style.setProperty("--promo-delay", `${Math.min(index, 7) * 45}ms`);
      const copy = document.createElement("button");
      copy.type = "button";
      copy.className = "promo-season-card__copy";
      copy.setAttribute("aria-label", `${t("promoCopy")}: ${promo.word}`);
      copy.innerHTML = `<span>${escapePromoText(promo.word)}</span><small>${t("promoCopy")}</small>`;
      copy.addEventListener("click", async () => {
        const copied = await copyText(promo.word);
        toast(copied ? `${t("promoCopied")}: ${promo.word}` : t("copyFailed"));
      });
      const reward = document.createElement("div");
      reward.className = "promo-season-card__reward";
      reward.innerHTML = `<span>${promo.kind === "lvl" ? "LVL" : "TK"}</span><strong>${promoRewardLabel(promo)}</strong>`;
      card.append(copy, reward);
      grid.append(card);
    });
    const updated = $("#promoUpdatedAt");
    if (updated) updated.textContent = promoSeasonState.updatedAt ? formatAge(promoSeasonState.updatedAt) : "—";
  }

  async function fetchSeasonPromos() {
    if (promoSeasonState.loading) return;
    const endpoint = promosEndpoint();
    if (!endpoint) return;
    promoSeasonState.loading = true;
    try {
      const separator = endpoint.includes("?") ? "&" : "?";
      const response = await fetch(`${endpoint}${separator}_=${Date.now()}`, { cache: "no-store", headers: { Accept: "application/json" } });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.ok === false) throw new Error(String(data.error || `HTTP_${response.status}`));
      promoSeasonState.promos = (Array.isArray(data.promos) ? data.promos : []).map(normalizeSeasonPromo).filter(Boolean);
      promoSeasonState.updatedAt = Number(data.updatedAt || 0);
      renderSeasonPromos();
    } catch (error) {
      console.warn("[KONTRA] promo list unavailable", error);
    } finally {
      promoSeasonState.loading = false;
    }
  }

  const seasonLiveState = {
    endAt: Date.parse("2026-09-01T00:00:00+03:00"),
    refreshInFlight: false
  };

  function parseSeasonBoundary(value) {
    const match = String(value || "").trim().match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
    if (!match) return 0;
    const day = Number(match[1]);
    const month = Number(match[2]);
    const year = Number(match[3]);
    if (!day || month < 1 || month > 12 || year < 2020) return 0;
    return Date.parse(`${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T00:00:00+03:00`);
  }

  function addSeasonMonths(timestamp, months = 3) {
    if (!Number.isFinite(timestamp) || timestamp <= 0) return 0;
    const source = new Date(timestamp + (3 * 60 * 60 * 1000));
    let year = source.getUTCFullYear();
    let month = source.getUTCMonth() + Number(months || 3);
    const day = source.getUTCDate();
    year += Math.floor(month / 12);
    month %= 12;
    const maxDay = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    const targetDay = Math.min(day, maxDay);
    return Date.UTC(year, month, targetDay, -3, 0, 0, 0);
  }

  function nextQuarterBoundary(fromTimestamp) {
    let target = Number(fromTimestamp) || Date.parse("2026-09-01T00:00:00+03:00");
    const now = Date.now();
    let guard = 0;
    while (target <= now && guard < 48) {
      target = addSeasonMonths(target, 3);
      guard += 1;
    }
    return target;
  }

  function renderSeasonDuration() {
    const node = $("#seasonLiveTime");
    if (!node) return;
    const target = nextQuarterBoundary(seasonLiveState.endAt);
    if (target !== seasonLiveState.endAt) seasonLiveState.endAt = target;
    let seconds = Math.max(0, Math.floor((target - Date.now()) / 1000));
    const days = Math.floor(seconds / 86400); seconds %= 86400;
    const hours = Math.floor(seconds / 3600); seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const clock = [hours, minutes, secs].map((value) => String(value).padStart(2, "0")).join(":");
    node.textContent = language === "ru" ? `${days} ДН. ${clock}` : `${days} DAYS ${clock}`;
  }

  async function refreshSeasonDurationTarget() {
    if (seasonLiveState.refreshInFlight) return;
    seasonLiveState.refreshInFlight = true;
    try {
      const endpoint = seasonsEndpoint();
      if (!endpoint) return;
      const separator = endpoint.includes("?") ? "&" : "?";
      const response = await fetch(`${endpoint}${separator}limit=12&_=${Date.now()}`, { cache: "no-store", headers: { Accept: "application/json" } });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data?.ok === false) return;
      const candidates = [];
      const current = parseSeasonBoundary(data.currentSeason);
      if (current) candidates.push(current);
      for (const season of (Array.isArray(data.seasons) ? data.seasons : [])) {
        const parsed = parseSeasonBoundary(season?.seasonKey);
        if (parsed) candidates.push(parsed);
      }
      if (candidates.length) {
        const latestBoundary = Math.max(...candidates);
        seasonLiveState.endAt = nextQuarterBoundary(addSeasonMonths(latestBoundary, 3));
      } else {
        seasonLiveState.endAt = nextQuarterBoundary(Date.parse("2026-09-01T00:00:00+03:00"));
      }
      renderSeasonDuration();
    } catch (error) {
      console.warn("[KONTRA] season duration unavailable", error);
    } finally {
      seasonLiveState.refreshInFlight = false;
    }
  }

  function notificationGuestReadSet() {
    try {
      const parsed = JSON.parse(localStorage.getItem(GUEST_NOTIFICATION_READ_KEY) || "[]");
      return new Set(Array.isArray(parsed) ? parsed.map((value) => String(value || "")).filter(Boolean).slice(-300) : []);
    } catch {
      return new Set();
    }
  }

  function saveNotificationGuestReadSet(set) {
    try { localStorage.setItem(GUEST_NOTIFICATION_READ_KEY, JSON.stringify([...set].slice(-300))); } catch {}
  }

  function normalizeNotification(item = {}, authenticated = false, guestRead = null) {
    const id = String(item.id || "").slice(0, 80);
    if (!id) return null;
    const type = ["promo", "season", "update", "account", "system"].includes(String(item.type || "").toLowerCase())
      ? String(item.type).toLowerCase() : "system";
    const title = item.title && typeof item.title === "object" ? item.title : {};
    const body = item.body && typeof item.body === "object" ? item.body : {};
    const read = authenticated ? item.read === true : Boolean(guestRead?.has(id));
    return {
      id,
      type,
      scope: String(item.scope || "global") === "personal" ? "personal" : "global",
      title: { ru: String(title.ru || title.en || "").slice(0, 120), en: String(title.en || title.ru || "").slice(0, 120) },
      body: { ru: String(body.ru || body.en || "").slice(0, 600), en: String(body.en || body.ru || "").slice(0, 600) },
      meta: item.meta && typeof item.meta === "object" ? item.meta : {},
      createdAt: Number(item.createdAt || 0),
      publishedAt: Number(item.publishedAt || item.createdAt || 0),
      expiresAt: Number(item.expiresAt || 0),
      read
    };
  }

  function notificationDescriptor(type) {
    const descriptors = {
      promo: { icon: "%", key: "notificationTypePromo" },
      season: { icon: "★", key: "notificationTypeSeason" },
      update: { icon: "⚡", key: "notificationTypeUpdate" },
      account: { icon: "◎", key: "notificationTypeAccount" },
      system: { icon: "◇", key: "notificationTypeSystem" }
    };
    return descriptors[type] || descriptors.system;
  }

  function notificationText(value) {
    if (!value || typeof value !== "object") return "";
    return String(value[language] || value.ru || value.en || "");
  }

  function formatNotificationTime(value) {
    const ms = Number(value || 0);
    if (!ms) return "—";
    const diff = Math.max(0, Date.now() - ms);
    const minute = 60000;
    const hour = 60 * minute;
    const day = 24 * hour;
    if (diff < minute) return language === "ru" ? "ТОЛЬКО ЧТО" : "JUST NOW";
    if (diff < hour) return language === "ru" ? `${Math.floor(diff / minute)} МИН НАЗАД` : `${Math.floor(diff / minute)} MIN AGO`;
    if (diff < day) return language === "ru" ? `${Math.floor(diff / hour)} Ч НАЗАД` : `${Math.floor(diff / hour)} H AGO`;
    return new Date(ms).toLocaleDateString(language === "ru" ? "ru-RU" : "en-GB", { day: "2-digit", month: "2-digit", year: "2-digit" });
  }

  function renderNotificationBell() {
    const button = $("#notificationButton");
    const badge = $("#notificationBadge");
    if (!button || !badge) return;
    const count = Math.max(0, Number(notificationState.unreadCount || 0));
    button.classList.toggle("has-unread", count > 0);
    button.classList.toggle("is-open", notificationState.open);
    button.setAttribute("aria-expanded", String(notificationState.open));
    button.setAttribute("aria-label", count > 0 ? `${t("notifications")}: ${count}` : t("notifications"));
    badge.hidden = count <= 0;
    badge.textContent = count > 99 ? "99+" : String(count);
  }

  function renderNotificationCenter() {
    const center = $("#notificationCenter");
    const list = $("#notificationList");
    const count = $("#notificationUnreadCount");
    const markAll = $("#notificationsMarkAll");
    const foot = $("#notificationFoot");
    if (!center || !list) return;
    center.classList.toggle("is-open", notificationState.open);
    center.setAttribute("aria-hidden", String(!notificationState.open));
    if (count) count.textContent = String(Math.max(0, Number(notificationState.unreadCount || 0)));
    if (markAll) markAll.disabled = notificationState.loading || notificationState.unreadCount <= 0;
    if (foot) foot.textContent = t(notificationState.authenticated ? "notificationAccountHint" : "notificationGuestHint");
    renderNotificationBell();

    list.replaceChildren();
    if (notificationState.loading && !notificationState.notifications.length) {
      const state = document.createElement("div");
      state.className = "notification-center__state";
      state.innerHTML = `<span class="notification-center__spinner"></span><strong>${t("notificationLoading")}</strong>`;
      list.append(state);
      return;
    }
    if (notificationState.error && !notificationState.notifications.length) {
      const state = document.createElement("div");
      state.className = "notification-center__state is-error";
      const strong = document.createElement("strong"); strong.textContent = t("notificationError");
      state.append(strong); list.append(state); return;
    }
    if (!notificationState.notifications.length) {
      const state = document.createElement("div");
      state.className = "notification-center__state";
      const icon = document.createElement("span"); icon.className = "notification-center__empty-icon"; icon.textContent = "♢";
      const strong = document.createElement("strong"); strong.textContent = t("notificationEmpty");
      const p = document.createElement("p"); p.textContent = t("notificationEmptyText");
      state.append(icon, strong, p); list.append(state); return;
    }

    for (const item of notificationState.notifications) {
      const descriptor = notificationDescriptor(item.type);
      const card = document.createElement("button");
      card.type = "button";
      card.className = `notification-card notification-card--${item.type}${item.read ? " is-read" : " is-unread"}`;
      card.dataset.notificationId = item.id;
      const icon = document.createElement("span"); icon.className = "notification-card__icon"; icon.textContent = descriptor.icon;
      const copy = document.createElement("span"); copy.className = "notification-card__copy";
      const meta = document.createElement("span"); meta.className = "notification-card__meta";
      const type = document.createElement("b"); type.textContent = t(descriptor.key);
      const time = document.createElement("time"); time.textContent = formatNotificationTime(item.publishedAt || item.createdAt);
      meta.append(type, time);
      const title = document.createElement("strong"); title.textContent = notificationText(item.title) || t(descriptor.key);
      const body = document.createElement("small"); body.textContent = notificationText(item.body);
      copy.append(meta, title, body);
      card.append(icon, copy);
      if (!item.read) { const dot = document.createElement("i"); dot.className = "notification-card__dot"; dot.setAttribute("aria-label", t("notificationNew")); card.append(dot); }
      list.append(card);
    }
  }

  async function fetchNotifications(force = false) {
    const endpoint = notificationsEndpoint();
    if (!endpoint || notificationState.loading) return;
    if (!force && notificationState.loadedAt && Date.now() - notificationState.loadedAt < 30000) return;
    notificationState.loading = true;
    notificationState.error = "";
    renderNotificationCenter();
    try {
      const headers = { Accept: "application/json" };
      if (authState.sessionToken) headers.Authorization = `Bearer ${authState.sessionToken}`;
      const separator = endpoint.includes("?") ? "&" : "?";
      const response = await fetch(`${endpoint}${separator}limit=50&_=${Date.now()}`, { cache: "no-store", headers });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data?.ok === false) throw new Error(String(data?.error || `HTTP_${response.status}`));
      const authenticated = data.authenticated === true && Boolean(authState.sessionToken);
      const guestRead = authenticated ? null : notificationGuestReadSet();
      notificationState.authenticated = authenticated;
      notificationState.notifications = (Array.isArray(data.notifications) ? data.notifications : [])
        .map((item) => normalizeNotification(item, authenticated, guestRead)).filter(Boolean);
      notificationState.unreadCount = authenticated
        ? Math.max(0, Number(data.unreadCount || 0))
        : notificationState.notifications.filter((item) => !item.read).length;
      notificationState.loadedAt = Date.now();
    } catch (error) {
      notificationState.error = String(error?.message || "notifications_unavailable");
    } finally {
      notificationState.loading = false;
      renderNotificationCenter();
    }
  }

  function setNotificationCenter(open) {
    notificationState.open = Boolean(open);
    document.body.classList.toggle("notification-center-open", notificationState.open);
    renderNotificationCenter();
    if (notificationState.open) void fetchNotifications(true);
  }

  async function markNotificationRead(id) {
    const item = notificationState.notifications.find((entry) => entry.id === id);
    if (!item || item.read) return;
    if (notificationState.authenticated && authState.sessionToken) {
      try {
        const endpoint = notificationsEndpoint();
        const response = await fetch(`${endpoint}/read`, {
          method: "POST", cache: "no-store",
          headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${authState.sessionToken}` },
          body: JSON.stringify({ id })
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok || data?.ok === false) throw new Error(String(data?.error || `HTTP_${response.status}`));
        item.read = true;
        notificationState.unreadCount = Math.max(0, Number(data.unreadCount ?? (notificationState.unreadCount - 1)));
      } catch {
        toast(t("notificationError"));
        return;
      }
    } else {
      const read = notificationGuestReadSet(); read.add(id); saveNotificationGuestReadSet(read);
      item.read = true;
      notificationState.unreadCount = notificationState.notifications.filter((entry) => !entry.read).length;
    }
    renderNotificationCenter();
  }

  async function markAllNotificationsRead() {
    if (notificationState.unreadCount <= 0) return;
    if (notificationState.authenticated && authState.sessionToken) {
      try {
        const endpoint = notificationsEndpoint();
        const response = await fetch(`${endpoint}/read`, {
          method: "POST", cache: "no-store",
          headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${authState.sessionToken}` },
          body: JSON.stringify({ all: true })
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok || data?.ok === false) throw new Error(String(data?.error || `HTTP_${response.status}`));
      } catch {
        toast(t("notificationError")); return;
      }
    } else {
      const read = notificationGuestReadSet();
      notificationState.notifications.forEach((item) => read.add(item.id));
      saveNotificationGuestReadSet(read);
    }
    notificationState.notifications.forEach((item) => { item.read = true; });
    notificationState.unreadCount = 0;
    renderNotificationCenter();
  }

  function applyLanguage(next) {
    language = next === "ru" ? "ru" : "en";
    localStorage.setItem("kontra:lang", language);
    document.documentElement.lang = language;
    $$('[data-lang]').forEach((button) => button.classList.toggle("is-active", button.dataset.lang === language));
    $$('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
    $$('[data-i18n-aria]').forEach((node) => { node.setAttribute('aria-label', t(node.dataset.i18nAria)); });
    if (window.__kontraLastStatus) renderStatus(window.__kontraLastStatus);
    renderAuth();
    renderLeaderboard();
    renderRankingMode();
    renderHallOfFame();
    renderSeasonHistory();
    renderSeasonDuration();
    renderNotificationCenter();
    if ($("#playerModal")?.classList.contains("is-open")) renderPlayerModal();
    if ($("#controlModal")?.classList.contains("is-open") && settingsState.data && controlState.panel === "lvl") {
      $("#controlModalLead").textContent = t("persistentSettingsLead");
      renderPersistentPanel(controlState.panel, settingsState.data);
    }
    refreshPinballLanguage();
    renderLvlHub();
    updateThemeControl();
  }

  function formatAge(value) {
    const raw = Number(value);
    if (!raw) return "—";
    const ms = raw < 1e12 ? raw * 1000 : raw;
    const seconds = Math.max(0, Math.floor((Date.now() - ms) / 1000));
    if (seconds < 5) return t("justNow");
    if (seconds < 60) return `${seconds} ${t("secondsAgo")}`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} ${t("minutesAgo")}`;
    return new Date(ms).toLocaleString(language === "ru" ? "ru-RU" : "en-GB", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  const MAP_IMAGES = {
    ZM_3ROOMS: "assets/maps/zm_3rooms.webp",
    ZM_ARK_BHZRDBASE_V2: "assets/maps/zm_ark_bhzrdbase_v2.webp",
    ZM_ARK_DEKO2_V1: "assets/maps/zm_ark_deko2_v1.webp",
    ZM_BATTLEGROUND_EXTREME: "assets/maps/zm_battleground_extreme.webp",
    ZM_BHZRD_BASE_RMK: "assets/maps/zm_bhzrd_base_rmk.webp",
    ZM_BIOHAZARD_BASE_MX: "assets/maps/zm_biohazard_base_mx.webp",
    ZM_CHATOYANT: "assets/maps/zm_chatoyant.webp",
    ZM_CUBEWORLD_MINI: "assets/maps/zm_cubeworld_mini.webp",
    ZM_DEFENSE: "assets/maps/zm_defense.webp",
    ZM_DEKO2: "assets/maps/zm_deko2.webp",
    ZM_DUST_WORLD_SUMMER_F: "assets/maps/zm_dust_world_summer_f.webp",
    ZM_GROUND_SG: "assets/maps/zm_ground_sg.webp",
    ZM_MINI_RE: "assets/maps/zm_mini_re.webp",
    ZM_MNX_SUMMER: "assets/maps/zm_mnx_summer.webp",
    ZM_NTC_WATER_FALL: "assets/maps/zm_ntc_water_fall.webp",
    ZM_SLN_MARIOZOMB: "assets/maps/zm_sln_mariozomb.webp",
    ZM_TC_DEATH: "assets/maps/zm_tc_death.webp",
    ZM_ZOMBUST: "assets/maps/zm_zombust.webp",
    ZM_ATIX_ASSAULT_U3: "assets/maps/zm_atix_assault_u3.webp",
    ZM_ATIX_HELICOPTER: "assets/maps/zm_atix_helicopter.webp",
    ZM_ATIX_PANIC_A3: "assets/maps/zm_atix_panic_a3.webp",
    ZM_ATIX_PANIC_V1_FIX: "assets/maps/zm_atix_panic_v1_fix.webp",
    ZM_BLACK_HAWK_V1: "assets/maps/zm_black_hawk_v1.webp"
  };

  function updateMapCard(mapName) {
    const card = $("#mapCard");
    const image = $("#mapCardImage");
    if (!card || !image) return;
    const key = String(mapName || "").trim().toUpperCase();
    const source = MAP_IMAGES[key] || "";
    if (source) {
      if (image.getAttribute("src") !== source) image.setAttribute("src", source);
      image.alt = key;
      image.hidden = false;
      card.classList.add("has-image");
    } else {
      image.hidden = true;
      image.alt = "";
      card.classList.remove("has-image");
    }
  }

  function displayMap(value) {
    const map = String(value || "").trim();
    if (!map || map.toUpperCase() === "UNKNOWN" || map.toUpperCase() === "НЕИЗВЕСТНО") return t("unknown");
    return map;
  }

  function normalizeTeam(value) {
    const team = String(value || "").trim().toUpperCase();
    if (team === "T" || team === "ZOMBIE") return "T";
    if (team === "CT" || team === "SURVIVOR") return "CT";
    return "UNKNOWN";
  }

  function normalizePlayer(player = {}, index = 0) {
    return {
      slot: integer(player.slot, index + 1, 1, 16),
      name: String(player.name || `Player ${index + 1}`).replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 40) || `Player ${index + 1}`,
      team: normalizeTeam(player.team),
      alive: player.alive === true,
      hp: integer(player.hp),
      armor: integer(player.armor),
      score: integer(player.score, 0, 0, 65535),
      deaths: integer(player.deaths, 0, 0, 65535),
      bot: player.bot === true
    };
  }

  function normalize(payload = {}) {
    const playerDataAvailable = Array.isArray(payload.players);
    const players = playerDataAvailable ? payload.players.slice(0, 16).map(normalizePlayer) : [];
    const rawOnline = payload.online ?? (playerDataAvailable ? players.length : 0);
    const maxPlayers = Number(payload.maxPlayers ?? payload.max ?? config.maxPlayers ?? 16);
    const updatedAt = payload.updatedAt ?? payload.timestamp ?? 0;
    const ms = Number(updatedAt) < 1e12 ? Number(updatedAt) * 1000 : Number(updatedAt);
    const stale = ms > 0 && Date.now() - ms > (Number(config.staleAfterMs) || 60000);
    const serverOnline = Boolean(payload.serverOnline ?? payload.onlineStatus ?? true) && !stale;
    const derivedZombies = players.filter((player) => player.team === "T").length;
    const derivedSurvivors = players.filter((player) => player.team === "CT").length;

    return {
      online: Number.isFinite(Number(rawOnline)) ? clamp(Math.floor(Number(rawOnline)), 0, 64) : 0,
      maxPlayers: Number.isFinite(maxPlayers) ? clamp(Math.floor(maxPlayers), 1, 64) : 16,
      map: String(payload.map ?? payload.mapName ?? ""),
      mode: String(payload.mode ?? payload.gameMode ?? "Zombie Mod"),
      updatedAt,
      serverOnline,
      zombies: Number.isFinite(Number(payload.zombies)) ? Number(payload.zombies) : derivedZombies,
      survivors: Number.isFinite(Number(payload.survivors)) ? Number(payload.survivors) : derivedSurvivors,
      players,
      playerDataAvailable,
      storageSource: String(payload.storageSource || "")
    };
  }

  function teamDescriptor(team) {
    if (team === "T") return { key: "zombiesTeam", className: "zombies", symbol: "☠" };
    if (team === "CT") return { key: "survivorsTeam", className: "survivors", symbol: "♙" };
    return { key: "unknownTeam", className: "unknown", symbol: "?" };
  }

  function sortedPlayers(players) {
    return [...players].sort((left, right) => {
      const teamOrder = { T: 0, CT: 1, UNKNOWN: 2 };
      return (teamOrder[left.team] - teamOrder[right.team]) || (right.score - left.score) || (left.deaths - right.deaths) || (left.slot - right.slot);
    });
  }

  function publicProfileForPlayer(player) {
    const key = String(player?.name || "").trim().toLowerCase();
    if (!key) return null;
    return leaderboardState.players.find((profile) => (
      String(profile.name || "").trim().toLowerCase() === key ||
      String(profile.username || "").trim().toLowerCase() === key
    )) || null;
  }

  function avatarForPlayer(player) {
    return publicProfileForPlayer(player)?.avatarId || DEFAULT_AVATAR_ID;
  }

  function createBadge(text, className) {
    const badge = document.createElement("span");
    badge.className = `player-badge ${className}`;
    badge.textContent = text;
    return badge;
  }

  function createMiniPlayer(player) {
    const row = document.createElement("div");
    row.className = `mini-player${player.alive ? " is-alive" : " is-dead"}`;

    const dot = document.createElement("span");
    dot.className = "player-state-dot";
    dot.setAttribute("aria-label", player.alive ? t("alive") : t("dead"));

    const avatar = createAvatarImage(avatarForPlayer(player), "mini-player__avatar", "");

    const identity = document.createElement("div");
    identity.className = "mini-player__identity";
    const name = document.createElement("strong");
    name.textContent = player.name;
    name.title = player.name;
    identity.append(name);
    if (player.bot) identity.append(createBadge(t("bot"), "is-bot"));

    const score = document.createElement("span");
    score.className = "mini-player__score";
    score.textContent = String(player.score);
    score.title = t("score");

    row.append(dot, avatar, identity, score);
    bindPlayerActivation(row, player);
    return row;
  }

  function createPreviewTeam(team, players) {
    const descriptor = teamDescriptor(team);
    const section = document.createElement("section");
    section.className = `team-preview team-preview--${descriptor.className}`;

    const header = document.createElement("header");
    const title = document.createElement("strong");
    title.textContent = `${descriptor.symbol} ${t(descriptor.key)}`;
    const count = document.createElement("span");
    count.textContent = String(players.length);
    header.append(title, count);
    section.append(header);

    const list = document.createElement("div");
    list.className = "team-preview__list";
    const visiblePlayers = players.slice(0, 5);

    if (!visiblePlayers.length) {
      const empty = document.createElement("p");
      empty.className = "team-preview__empty";
      empty.textContent = t("noPlayersInTeam");
      list.append(empty);
    } else {
      visiblePlayers.forEach((player) => list.append(createMiniPlayer(player)));
    }

    if (players.length > visiblePlayers.length) {
      const more = document.createElement("p");
      more.className = "team-preview__more";
      more.textContent = `+${players.length - visiblePlayers.length} ${t("morePlayers")}`;
      list.append(more);
    }

    section.append(list);
    return section;
  }

  function renderPlayerState(container, title, text, tone = "") {
    container.replaceChildren();
    const state = document.createElement("div");
    state.className = `player-list-state${tone ? ` is-${tone}` : ""}`;
    const strong = document.createElement("strong");
    strong.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    state.append(strong, paragraph);
    container.append(state);
  }

  function renderPlayersPreview(status) {
    const body = $("#playersPreviewBody");

    if (!status.serverOnline) {
      renderPlayerState(body, t("serverOfflinePlayers"), t("serverOfflinePlayersText"), "offline");
      return;
    }

    if (!status.playerDataAvailable) {
      renderPlayerState(body, t("playersBridgeTitle"), t("playersBridgeText"));
      return;
    }

    if (!status.players.length) {
      renderPlayerState(body, t("serverEmpty"), t("serverEmptyText"));
      return;
    }

    const sorted = sortedPlayers(status.players);
    const grid = document.createElement("div");
    grid.className = "team-preview-grid";
    grid.append(
      createPreviewTeam("T", sorted.filter((player) => player.team === "T")),
      createPreviewTeam("CT", sorted.filter((player) => player.team === "CT"))
    );

    const unknown = sorted.filter((player) => player.team === "UNKNOWN");
    if (unknown.length) grid.append(createPreviewTeam("UNKNOWN", unknown));
    body.replaceChildren(grid);
  }

  function createVital(label, value, max, className) {
    const vital = document.createElement("div");
    vital.className = `player-vital ${className}`;
    const top = document.createElement("div");
    const name = document.createElement("span");
    name.textContent = label;
    const number = document.createElement("strong");
    number.textContent = String(value);
    top.append(name, number);
    const bar = document.createElement("span");
    bar.className = "player-vital__bar";
    const fill = document.createElement("i");
    fill.style.width = `${clamp(value / Math.max(1, max), 0, 1) * 100}%`;
    bar.append(fill);
    vital.append(top, bar);
    return vital;
  }

  function createResult(label, value) {
    const item = document.createElement("div");
    const small = document.createElement("small");
    small.textContent = label;
    const strong = document.createElement("strong");
    strong.textContent = String(value);
    item.append(small, strong);
    return item;
  }

  function createScoreboardPlayer(player) {
    const row = document.createElement("article");
    row.className = `scoreboard-player${player.alive ? " is-alive" : " is-dead"}`;

    const identity = document.createElement("div");
    identity.className = "scoreboard-player__identity";
    const dot = document.createElement("span");
    dot.className = "player-state-dot";
    const avatar = createAvatarImage(avatarForPlayer(player), "scoreboard-player__avatar", "");
    const identityText = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = player.name;
    name.title = player.name;
    const badges = document.createElement("div");
    badges.className = "player-badges";
    badges.append(createBadge(player.alive ? t("alive") : t("dead"), player.alive ? "is-alive" : "is-dead"));
    badges.append(createBadge(player.bot ? t("bot") : t("realPlayer"), player.bot ? "is-bot" : "is-player"));
    identityText.append(name, badges);
    identity.append(dot, avatar, identityText);

    const vitals = document.createElement("div");
    vitals.className = "scoreboard-player__vitals";
    vitals.append(
      createVital(t("hp"), player.hp, Math.max(100, player.hp), "is-hp"),
      createVital(t("armor"), player.armor, Math.max(100, player.armor), "is-armor")
    );

    const result = document.createElement("div");
    result.className = "scoreboard-player__result";
    result.append(createResult(t("score"), player.score), createResult(t("deaths"), player.deaths));

    row.append(identity, vitals, result);
    bindPlayerActivation(row, player);
    return row;
  }

  function createScoreboardTeam(team, players) {
    const descriptor = teamDescriptor(team);
    const section = document.createElement("section");
    section.className = `scoreboard-team scoreboard-team--${descriptor.className}`;

    const header = document.createElement("header");
    const heading = document.createElement("div");
    const symbol = document.createElement("span");
    symbol.textContent = descriptor.symbol;
    const title = document.createElement("strong");
    title.textContent = t(descriptor.key);
    heading.append(symbol, title);
    const count = document.createElement("b");
    count.textContent = String(players.length);
    header.append(heading, count);
    section.append(header);

    const list = document.createElement("div");
    list.className = "scoreboard-team__list";
    if (!players.length) {
      const empty = document.createElement("p");
      empty.className = "scoreboard-team__empty";
      empty.textContent = t("noPlayersInTeam");
      list.append(empty);
    } else {
      players.forEach((player) => list.append(createScoreboardPlayer(player)));
    }
    section.append(list);
    return section;
  }

  function renderScoreboard(status) {
    const body = $("#scoreboardBody");
    const statusLabel = $("#scoreboardStatus");
    statusLabel.textContent = status.serverOnline ? t("serverOnline") : t("serverOffline");
    $("#scoreboardLiveState").classList.toggle("is-online", status.serverOnline);

    if (!status.serverOnline) {
      renderPlayerState(body, t("serverOfflinePlayers"), t("serverOfflinePlayersText"), "offline");
      return;
    }

    if (!status.playerDataAvailable) {
      renderPlayerState(body, t("playersBridgeTitle"), t("playersBridgeText"));
      return;
    }

    if (!status.players.length) {
      renderPlayerState(body, t("serverEmpty"), t("serverEmptyText"));
      return;
    }

    const players = sortedPlayers(status.players);
    const fragment = document.createDocumentFragment();
    fragment.append(
      createScoreboardTeam("T", players.filter((player) => player.team === "T")),
      createScoreboardTeam("CT", players.filter((player) => player.team === "CT"))
    );
    const unknown = players.filter((player) => player.team === "UNKNOWN");
    if (unknown.length) fragment.append(createScoreboardTeam("UNKNOWN", unknown));
    body.replaceChildren(fragment);
  }

  function renderStatus(status) {
    window.__kontraLastStatus = status;
    const online = status.serverOnline ? status.online : 0;
    const ratio = clamp(online / status.maxPlayers, 0, 1);
    setTextAll("[data-online]", online);
    setTextAll("[data-max]", status.maxPlayers);
    setTextAll("[data-map]", displayMap(status.map));
    updateMapCard(status.serverOnline ? status.map : "");
    setTextAll("[data-mode]", status.mode || "Zombie Mod");
    setTextAll("[data-updated]", formatAge(status.updatedAt));
    setTextAll("[data-zombies]", status.zombies ?? "—");
    setTextAll("[data-survivors]", status.survivors ?? "—");
    setTextAll("[data-fill]", `${Math.round(ratio * 100)}%`);
    $("#onlineProgress").style.width = `${ratio * 100}%`;
    $("#serverCard").classList.toggle("is-online", status.serverOnline);
    const label = $("#serverCard [data-i18n='serverOnline']");
    label.textContent = status.serverOnline ? t("serverOnline") : t("serverOffline");
    document.title = status.serverOnline ? `[${online}/${status.maxPlayers}] KONTRA // SURVIVAL` : "KONTRA // SURVIVAL";
    renderPlayersPreview(status);
    renderScoreboard(status);
  }

  function statusRefreshMs() {
    return Math.max(30000, Number(config.statusRefreshMs) || 30000);
  }

  function statusBackoffMs() {
    if (statusFailureCount <= 0) return statusRefreshMs();
    const step = Math.min(statusFailureCount - 1, 2);
    return Math.min(30000 * (2 ** step), Math.max(30000, Number(config.statusBackoffMaxMs) || 120000));
  }

  function statusLeaseMs() {
    return Math.max(statusRefreshMs() + 10000, Number(config.statusLeaderLeaseMs) || 45000);
  }

  function readStatusLeader() {
    try {
      const value = JSON.parse(localStorage.getItem(STATUS_LEADER_KEY) || "null");
      if (!value || typeof value !== "object") return null;
      return { id: String(value.id || ""), until: Number(value.until || 0) };
    } catch {
      return null;
    }
  }

  function claimStatusLeader() {
    if (document.hidden) return false;
    try {
      const now = Date.now();
      const current = readStatusLeader();
      if (current && current.id && current.id !== STATUS_TAB_ID && current.until > now) return false;
      localStorage.setItem(STATUS_LEADER_KEY, JSON.stringify({ id: STATUS_TAB_ID, until: now + statusLeaseMs() }));
      return readStatusLeader()?.id === STATUS_TAB_ID;
    } catch {
      // localStorage can be unavailable in strict/privacy modes. In that case
      // this visible tab is allowed to poll on its own.
      return true;
    }
  }

  function renewStatusLeader() {
    try {
      const current = readStatusLeader();
      if (current?.id !== STATUS_TAB_ID) return false;
      localStorage.setItem(STATUS_LEADER_KEY, JSON.stringify({ id: STATUS_TAB_ID, until: Date.now() + statusLeaseMs() }));
      return true;
    } catch {
      return true;
    }
  }

  function releaseStatusLeader() {
    try {
      if (readStatusLeader()?.id === STATUS_TAB_ID) localStorage.removeItem(STATUS_LEADER_KEY);
    } catch {}
  }

  function publishStatus(status) {
    try {
      localStorage.setItem(STATUS_CACHE_KEY, JSON.stringify({ at: Date.now(), status }));
    } catch {}
  }

  function renderCachedStatus(maxAgeMs = 90000) {
    try {
      const cached = JSON.parse(localStorage.getItem(STATUS_CACHE_KEY) || "null");
      if (!cached || !cached.status || Date.now() - Number(cached.at || 0) > maxAgeMs) return false;
      renderStatus(cached.status);
      return true;
    } catch {
      return false;
    }
  }

  function scheduleStatusPoll(delayMs = statusRefreshMs()) {
    clearTimeout(statusTimer);
    statusTimer = null;
    if (document.hidden) return;
    statusTimer = window.setTimeout(runStatusPoll, Math.max(1000, Number(delayMs) || statusRefreshMs()));
  }

  async function fetchStatus() {
    const endpoint = String(config.statusEndpoint || "").trim();
    if (!endpoint || statusRequestInFlight || document.hidden) return false;
    statusRequestInFlight = true;
    try {
      const response = await fetch(`${endpoint}${endpoint.includes("?") ? "&" : "?"}_=${Date.now()}`, {
        cache: "no-store",
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const status = normalize(await response.json());
      statusFailureCount = 0;
      renderStatus(status);
      publishStatus(status);
      return true;
    } catch (error) {
      statusFailureCount += 1;
      if (!renderCachedStatus(120000)) {
        renderStatus(normalize({
          online: 0,
          maxPlayers: config.maxPlayers || 16,
          map: "",
          mode: "Zombie Mod",
          serverOnline: false,
          updatedAt: 0,
          players: []
        }));
      }
      console.warn("KONTRA status fetch failed", error);
      return false;
    } finally {
      statusRequestInFlight = false;
    }
  }

  async function runStatusPoll() {
    if (document.hidden) return;

    if (!claimStatusLeader()) {
      renderCachedStatus();
      // No Worker request in follower tabs. Re-check the local lease only.
      scheduleStatusPoll(5000);
      return;
    }

    renewStatusLeader();
    await fetchStatus();
    renewStatusLeader();
    scheduleStatusPoll(statusBackoffMs());
  }

  function handleStatusVisibilityChange() {
    clearTimeout(statusTimer);
    statusTimer = null;
    if (document.hidden) {
      releaseStatusLeader();
      return;
    }
    renderCachedStatus();
    void runStatusPoll();
  }

  function handleStatusStorage(event) {
    if (event.key === STATUS_CACHE_KEY && event.newValue) {
      try {
        const cached = JSON.parse(event.newValue);
        if (cached?.status) renderStatus(cached.status);
      } catch {}
      return;
    }

    if (event.key === STATUS_LEADER_KEY && !document.hidden) {
      const leader = readStatusLeader();
      if (!leader || leader.until <= Date.now()) scheduleStatusPoll(250);
    }
  }

  function showView(name) {
    $$('[data-view]').forEach((view) => view.classList.toggle("is-active", view.dataset.view === name));
    const navName = name === "lvlhub" ? "control" : name;
    $$('.bottom-nav [data-nav]').forEach((button) => {
      const active = button.dataset.nav === navName;
      button.classList.toggle("is-active", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    if (name === "top") {
      renderRankingMode();
      if (seasonArchiveState.mode === "current") fetchLeaderboard(leaderboardState.sort, false);
      else if (seasonArchiveState.mode === "hall") fetchHallOfFame(false);
      else if (seasonArchiveState.mode === "seasons") fetchSeasonList(false);
      else void preparePlayerComparison();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setDrawer(open) {
    $("#drawer").classList.toggle("is-open", open);
    $("#drawer").setAttribute("aria-hidden", String(!open));
    $("#menuButton").setAttribute("aria-expanded", String(open));
    $("#scrim").hidden = !open;
  }


  function setControlStatus(message, state = "") {
    const node = $("#controlCommandStatus");
    if (!node) return;
    node.textContent = message || t("controlWaiting");
    node.classList.toggle("is-error", state === "error");
    node.classList.toggle("is-success", state === "success");
  }

  function setControlModal(open) {
    const modal = $("#controlModal");
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", String(!open));
    if (!open) {
      controlState.busy = false;
      controlState.commandId = "";
      settingsState.requestId += 1;
    }
  }

  function setAuthHelp(open) {
    const modal = $("#authHelpModal");
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", String(!open));
  }

  const CONTROL_PANELS = {
    lvl: { title: "LVL MOD", persistent: true, module: "lvl" },
    menu: { title: "GAME MENU", custom: "game", lead: "gameMenuWebLead" },
    admin: { title: "ADMIN CONTROL", custom: "admin", lead: "adminPanelLead", admin: true },
    announcements: { title: "ANNOUNCEMENTS", custom: "announcements", lead: "announcementPanelLead", admin: true }
  };

  const GAME_MENU_ACTIONS = [
    { action: "open_game_menu", icon: "⌘", title: "openGameMenu", text: "openGameMenuText" },
    { action: "open_lvl", icon: "◉", title: "openLvl", text: "openLvlText" },
    { action: "open_teleport", icon: "↗", title: "openTeleport", text: "openTeleportText" },
    { action: "open_turret", icon: "▣", title: "openTurret", text: "openTurretText" },
    { action: "sound_on", icon: "♪", title: "soundOn", text: "soundOnText" },
    { action: "sound_off", icon: "×", title: "soundOff", text: "soundOffText" },
    { action: "open_admin_message", icon: "✉", title: "openAdminMessage", text: "openAdminMessageText" }
  ];

  const ADMIN_WEB_ACTIONS = [
    { action: "admin_kick", title: "adminKick", target: true, danger: true },
    { action: "admin_ban", title: "adminBan", target: true, danger: true, value: [
      ["30m", "30 min"], ["60m", "60 min"], ["90m", "90 min"], ["24h", "1 day"],
      ["168h", "7 days"], ["360h", "15 days"], ["720h", "30 days"], ["01.01.99", "Forever"]
    ] },
    { action: "admin_mute", title: "adminMute", target: true },
    { action: "admin_unmute", title: "adminUnmute", target: true },
    { action: "admin_voice_mute", title: "adminVoiceMute", target: true },
    { action: "admin_voice_unmute", title: "adminVoiceUnmute", target: true },
    { action: "admin_kill", title: "adminKill", target: true, danger: true },
    { action: "admin_revive", title: "adminRevive", target: true },
    { action: "admin_team", title: "adminTeam", target: true, value: [["ct", "CT"], ["t", "T"]] },
    { action: "admin_hp", title: "adminHp", target: true, amount: [50, 100, 150, 200, 250, 500, 1000, 65535] },
    { action: "admin_armor", title: "adminArmor", target: true, amount: [0, 50, 100, 150, 200, 250, 500, 65535] },
    { action: "admin_money", title: "adminMoney", target: true, amount: [5000, 10000, 15000, 25000, 35000, 50000, 65300] },
    { action: "admin_teleport", title: "adminTeleport", target: true },
    { action: "admin_immortal", title: "adminImmortal", target: true },
    { action: "admin_invisible", title: "adminInvisible", target: true },
    { action: "admin_reset_score", title: "adminResetScore", target: true },
    { action: "admin_round_mode", title: "adminRoundMode", danger: true, value: [
      ["infection", "Infection"], ["nemesis", "Nemesis"], ["survivor", "Survivor"],
      ["assassin", "Assassin"], ["multi_infection", "Multi Infection"]
    ] },
    { action: "admin_end_map", title: "adminEndMap", danger: true }
  ];

  function setControlBusy(busy) {
    controlState.busy = Boolean(busy);
    $$("#controlActions button, #controlActions select, #controlActions input").forEach((node) => { node.disabled = controlState.busy; });
  }

  async function controlRequest(path, options = {}) {
    const base = controlBase();
    if (!base || !authState.sessionToken) throw new Error("control_unavailable");
    const headers = { Accept: "application/json", Authorization: `Bearer ${authState.sessionToken}` };
    if (options.body !== undefined) headers["Content-Type"] = "application/json";
    const response = await fetch(`${base}${path}`, {
      method: options.method || "GET",
      headers,
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
      cache: "no-store"
    });
    let data = null;
    try { data = await response.json(); } catch {}
    if (!response.ok || !data?.ok) {
      const error = new Error(data?.error || `http_${response.status}`);
      error.data = data;
      throw error;
    }
    return data;
  }

  async function settingsRequest(path, options = {}) {
    const base = settingsBase();
    if (!base || !authState.sessionToken) throw new Error("settings_unavailable");
    const headers = { Accept: "application/json", Authorization: `Bearer ${authState.sessionToken}` };
    if (options.body !== undefined) headers["Content-Type"] = "application/json";
    const response = await fetch(`${base}${path}`, {
      method: options.method || "GET",
      headers,
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
      cache: "no-store"
    });
    let data = null;
    try { data = await response.json(); } catch {}
    if (!response.ok || !data?.ok) {
      const error = new Error(data?.error || `http_${response.status}`);
      error.data = data;
      throw error;
    }
    return data;
  }

  function settingsOptionLabel(option) {
    if (!option || typeof option !== "object") return "";
    return String(language === "ru" ? (option.ru || option.en || option.id) : (option.en || option.ru || option.id));
  }

  function appendSettingsState(container, title, text) {
    const state = document.createElement("div");
    state.className = "settings-empty";
    const strong = document.createElement("strong");
    strong.textContent = title;
    state.appendChild(strong);
    if (text) {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      state.appendChild(paragraph);
    }
    container.appendChild(state);
  }

  function appendSelectField(container, labelKey, field, options, value) {
    const label = document.createElement("label");
    label.className = "settings-field";
    const title = document.createElement("span");
    title.textContent = t(labelKey);
    const select = document.createElement("select");
    select.dataset.settingsField = field;
    const none = document.createElement("option");
    none.value = "";
    none.textContent = t("notSelected");
    select.appendChild(none);
    (Array.isArray(options) ? options : []).forEach((option) => {
      const item = document.createElement("option");
      item.value = String(option.id || "");
      item.textContent = settingsOptionLabel(option);
      select.appendChild(item);
    });
    select.value = String(value || "");
    label.append(title, select);
    container.appendChild(label);
  }

  function appendSettingsGroupTitle(container, ru, en, hintRu="", hintEn="") {
    const head=document.createElement("div");
    head.className="settings-group-title";
    const strong=document.createElement("strong");
    strong.textContent=lvlLocalized(ru,en);
    head.appendChild(strong);
    const hint=lvlLocalized(hintRu,hintEn,"");
    if (hint) {
      const small=document.createElement("small");
      small.textContent=hint;
      head.appendChild(small);
    }
    container.appendChild(head);
  }

  function appendSelectFieldText(container, label, field, options, value) {
    const wrap=document.createElement("label");
    wrap.className="settings-field";
    const title=document.createElement("span");
    title.textContent=label;
    const select=document.createElement("select");
    select.dataset.settingsField=field;
    const none=document.createElement("option");
    none.value="";
    none.textContent=t("notSelected");
    select.appendChild(none);
    (Array.isArray(options)?options:[]).forEach((option)=>{
      const item=document.createElement("option");
      item.value=String(option?.id||"");
      item.textContent=settingsOptionLabel(option);
      select.appendChild(item);
    });
    select.value=String(value||"");
    wrap.append(title,select);
    container.appendChild(wrap);
  }

  function appendBooleanSwitch(container, label, field, value, invert=false, danger=false) {
    const row=document.createElement("label");
    row.className=`settings-toggle${danger ? " is-danger" : ""}`;
    const copy=document.createElement("span");
    copy.textContent=label;
    const input=document.createElement("input");
    input.type="checkbox";
    input.dataset.settingsBoolean=field;
    if (invert) input.dataset.settingsInvert="1";
    input.checked=invert ? value!==true : value===true;
    row.append(copy,input);
    container.appendChild(row);
  }

  function appendAbilityChecks(container, options, selected) {
    const section=document.createElement("fieldset");
    section.className="settings-checks settings-checks--abilities";
    const legend=document.createElement("legend");
    legend.textContent=lvlLocalized("СПОСОБНОСТИ КТ","CT ABILITIES");
    section.appendChild(legend);
    const enabled=new Set(Array.isArray(selected)?selected.map(String):[]);
    const list=Array.isArray(options)?options:[];
    if (!list.length) {
      const empty=document.createElement("small");
      empty.textContent=t("notSelected");
      section.appendChild(empty);
    } else {
      for (const option of list) {
        const row=document.createElement("label");
        row.className="settings-check";
        const input=document.createElement("input");
        input.type="checkbox";
        input.value=String(option?.id||"");
        input.dataset.settingsAbility="1";
        input.checked=enabled.has(input.value);
        const text=document.createElement("span");
        text.textContent=settingsOptionLabel(option);
        row.append(input,text);
        section.appendChild(row);
      }
    }
    container.appendChild(section);
  }

  function appendSoundSlotSelects(container, options, selected) {
    const list=Array.isArray(options)?options:[];
    const active=new Set(Array.isArray(selected)?selected.map(String):[]);
    const bySlot=new Map(LVL_SOUND_SLOT_DEFS.map((def)=>[def.slot,[]]));
    for (const option of list) {
      const slot=lvlSoundSlotForId(option?.id);
      if (slot && bySlot.has(slot)) bySlot.get(slot).push(option);
    }
    for (const def of LVL_SOUND_SLOT_DEFS) {
      const choices=bySlot.get(def.slot)||[];
      if (!choices.length) continue;
      const wrap=document.createElement("label");
      wrap.className="settings-field settings-field--sound";
      const title=document.createElement("span");
      title.textContent=lvlLocalized(def.ru,def.en);
      const select=document.createElement("select");
      select.dataset.settingsSoundSlot=def.slot;
      const none=document.createElement("option");
      none.value="";
      none.textContent=lvlLocalized("ВЫКЛЮЧЕНО","DISABLED");
      select.appendChild(none);
      for (const option of choices) {
        const item=document.createElement("option");
        item.value=String(option?.id||"");
        item.textContent=settingsOptionLabel(option);
        select.appendChild(item);
      }
      const selectedId=choices.find((option)=>active.has(String(option?.id||"")))?.id || "";
      select.value=String(selectedId||"");
      wrap.append(title,select);
      container.appendChild(wrap);
    }
  }

  function appendWeaponSounds(container, options, selected) {
    const section = document.createElement("fieldset");
    section.className = "settings-checks";
    const legend = document.createElement("legend");
    legend.textContent = t("weaponSoundsSetting");
    section.appendChild(legend);
    const enabled = new Set(Array.isArray(selected) ? selected.map(String) : []);
    if (!Array.isArray(options) || options.length === 0) {
      const empty = document.createElement("small");
      empty.textContent = t("notSelected");
      section.appendChild(empty);
    } else {
      options.forEach((option) => {
        const row = document.createElement("label");
        row.className = "settings-check";
        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = String(option.id || "");
        input.dataset.settingsSound = "1";
        input.checked = enabled.has(input.value);
        const text = document.createElement("span");
        text.textContent = settingsOptionLabel(option);
        row.append(input, text);
        section.appendChild(row);
      });
    }
    container.appendChild(section);
  }

  function appendSaveButton(container, panelName) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "primary-button settings-save";
    button.textContent = t("saveSettings");
    button.addEventListener("click", () => savePersistentSettings(panelName));
    container.appendChild(button);
  }

  function renderPersistentPanel(panelName, data) {
    const actions = $("#controlActions");
    actions.replaceChildren();
    if (!data?.ready || !data?.snapshot?.modules) {
      appendSettingsState(actions, t("settingsNotSynced"), t("settingsNotSyncedText"));
      setControlStatus(t("settingsNotSynced"), "error");
      return;
    }

    const moduleData = data.snapshot.modules.lvl;
    const desired = { ...(moduleData?.values || {}), ...(data.desired?.modules?.lvl || {}) };
    if (!moduleData) {
      appendSettingsState(actions, t("settingsNotSynced"), t("settingsNotSyncedText"));
      setControlStatus(t("settingsNotSynced"), "error");
      return;
    }

    const form = document.createElement("div");
    form.className = "settings-form";
    if (panelName === "lvl") {
      appendSettingsGroupTitle(form,"ОСНОВНОЕ","GENERAL","Профиль, косметика и нож.","Profile, cosmetics and knife.");
      appendSelectField(form, "languageSetting", "language", [
        { id: "en", en: "English", ru: "English" },
        { id: "ru", en: "Русский", ru: "Русский" }
      ], desired.language);
      appendSelectField(form, "prefixSetting", "prefix", moduleData.options?.prefix, desired.prefix);
      appendSelectField(form, "prefixColorSetting", "prefixColor", moduleData.options?.prefixColor, desired.prefixColor);
      appendSelectField(form, "ctSkinSetting", "ctSkin", moduleData.options?.ctSkin, desired.ctSkin);
      appendSelectField(form, "skinColorSetting", "skinColor", moduleData.options?.skinColor, desired.skinColor);
      appendSelectFieldText(form, lvlLocalized("НОЖ КТ","CT KNIFE"), "knife", moduleData.options?.knife, desired.knife);

      appendSettingsGroupTitle(form,"БОЕВЫЕ ФУНКЦИИ","COMBAT","Можно включать Пружину и Возврат одновременно.","Spring and Time rewind can be enabled together.");
      appendSelectField(form, "critBulletSetting", "critBullet", moduleData.options?.critBullet, desired.critBullet);
      appendSelectField(form, "minimapSetting", "minimap", moduleData.options?.minimap, desired.minimap);
      appendAbilityChecks(form, moduleData.options?.abilities || moduleData.options?.ability, desired.abilities || []);

      appendSettingsGroupTitle(form,"СНАЙПЕРСКИЙ ПРИЦЕЛ","SNIPER CROSSHAIR","Scout, AWM, G3SG1 и SG550.","Scout, AWM, G3SG1 and SG550.");
      appendBooleanSwitch(form,lvlLocalized("Показывать HUD-прицел","Show HUD crosshair"),"sniperCrosshairEnabled",desired.sniperCrosshairEnabled,false);
      appendSelectFieldText(form,lvlLocalized("Форма прицела","Crosshair shape"),"sniperCrosshairShape",moduleData.options?.sniperCrosshairShape,desired.sniperCrosshairShape);
      appendSelectFieldText(form,lvlLocalized("Цвет прицела","Crosshair color"),"sniperCrosshairColor",moduleData.options?.sniperCrosshairColor,desired.sniperCrosshairColor);

      appendSettingsGroupTitle(form,"ЗВУКИ LVL MOD","LVL MOD SOUNDS","Выберите один купленный звук для каждого события.","Choose one owned sound for each event.");
      appendSoundSlotSelects(form,moduleData.options?.weaponSounds,desired.weaponSounds);
      appendBooleanSwitch(form,lvlLocalized("Все звуки LVL MOD","All LVL MOD sounds"),"soundMuteAll",desired.soundMuteAll,true);
      appendBooleanSwitch(form,lvlLocalized("Звуки выстрелов","Shot sounds"),"soundMuteShot",desired.soundMuteShot,true);
      appendBooleanSwitch(form,lvlLocalized("Звуки захода на сервер","Server join sounds"),"soundMuteWelcome",desired.soundMuteWelcome,true);
      appendBooleanSwitch(form,lvlLocalized("Звуки удара ножом","Knife hit sounds"),"soundMuteKnife",desired.soundMuteKnife,true);
      appendBooleanSwitch(form,lvlLocalized("Звуки смерти","Death sounds"),"soundMuteDeath",desired.soundMuteDeath,true);
      appendBooleanSwitch(form,lvlLocalized("ЗАГЛУШИТЬ ВСЕ ЗВУКИ СЕРВЕРА","MUTE ALL SERVER SOUNDS"),"soundServerMuted",desired.soundServerMuted,false,true);
    } else {
      appendSelectField(form, "ctClassSetting", "ct", moduleData.options?.ct, desired.ct);
      appendSelectField(form, "tClassSetting", "t", moduleData.options?.t, desired.t);
    }
    appendSaveButton(form, panelName);
    actions.appendChild(form);

    if (data.pending) setControlStatus(t("settingsPending"));
    else if (data.status === "failed") setControlStatus(t("settingsFailed"), "error");
    else setControlStatus(data.online ? t("onlineNow") : t("offlineNow"), data.online ? "success" : "");
  }

  function collectSettingsValues(panelName) {
    const values = {};
    $$("#controlActions [data-settings-field]").forEach((field) => { values[field.dataset.settingsField] = field.value; });
    if (panelName === "lvl") {
      const soundSlots=$$("#controlActions [data-settings-sound-slot]");
      if (soundSlots.length) values.weaponSounds=soundSlots.map((select)=>String(select.value||"")).filter(Boolean);
      else values.weaponSounds = $$("#controlActions [data-settings-sound]:checked").map((input) => input.value);
      values.abilities=$$("#controlActions [data-settings-ability]:checked").map((input)=>input.value);
      $$("#controlActions [data-settings-boolean]").forEach((input)=>{
        const field=String(input.dataset.settingsBoolean||"");
        if (!field) return;
        values[field]=input.dataset.settingsInvert==="1" ? !input.checked : input.checked;
      });
      if (values.soundServerMuted===true) values.soundMuteAll=true;
    }
    return values;
  }

  async function waitSettingsApplied(revision, requestId) {
    const started = Date.now();
    while (Date.now() - started < 18000 && requestId === settingsState.requestId) {
      await new Promise((resolve) => setTimeout(resolve, 900));
      const data = await settingsRequest("/me");
      settingsState.data = data;
      if (Number(data.appliedRevision || 0) >= Number(revision || 0)) {
        setControlStatus(t("settingsApplied"), "success");
        toast(t("settingsApplied"));
        return;
      }
      if (data.status === "failed") {
        setControlStatus(t("settingsFailed"), "error");
        return;
      }
    }
  }

  async function savePersistentSettings(panelName) {
    if (controlState.busy || !settingsState.data) return;
    setControlBusy(true);
    try {
      const desired = JSON.parse(JSON.stringify(settingsState.data.desired || { modules: {} }));
      desired.modules = desired.modules || {};
      desired.modules.lvl = collectSettingsValues(panelName);
      const saved = await settingsRequest("/me", { method: "POST", body: { desired } });
      settingsState.data.desired = saved.desired;
      settingsState.data.pending = true;
      const requestId = settingsState.requestId;
      if (saved.online) {
        setControlStatus(t("settingsSavedOnline"), "success");
        toast(t("settingsSavedOnline"));
        await waitSettingsApplied(saved.revision, requestId);
      } else {
        setControlStatus(t("settingsSavedOffline"), "success");
        toast(t("settingsSavedOffline"));
      }
    } catch (error) {
      if (["invalid_session", "unauthorized"].includes(error.message)) {
        clearAuth();
        setControlModal(false);
        setLogin(true);
        toast(t("controlLoginRequired"));
      } else {
        setControlStatus(t("settingsFailed"), "error");
      }
    } finally {
      setControlBusy(false);
    }
  }


  function appendControlAction(container, item, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `control-action${item.admin || item.danger ? " admin-action" : ""}`;
    button.innerHTML = `<span>${item.icon || "›"}</span><div><strong>${t(item.title)}</strong><small>${t(item.text || item.title)}</small></div><b>›</b>`;
    button.addEventListener("click", onClick);
    container.appendChild(button);
    return button;
  }

  function liveControlPlayers() {
    const status = window.__kontraLastStatus;
    if (!status?.serverOnline || !Array.isArray(status.players)) return [];
    return status.players
      .filter((player) => Number(player.slot) >= 1 && Number(player.slot) <= 16)
      .slice()
      .sort((a, b) => Number(a.slot) - Number(b.slot));
  }

  function appendFormSelect(container, labelText, options, value = "") {
    const label = document.createElement("label");
    label.className = "settings-field";
    const title = document.createElement("span");
    title.textContent = labelText;
    const select = document.createElement("select");
    options.forEach(([optionValue, optionText]) => {
      const option = document.createElement("option");
      option.value = String(optionValue);
      option.textContent = String(optionText);
      select.appendChild(option);
    });
    if (value !== "") select.value = String(value);
    label.append(title, select);
    container.appendChild(label);
    return { label, select };
  }

  async function notificationAdminRequest(body) {
    const endpoint = notificationsEndpoint();
    if (!endpoint || !authState.sessionToken) throw new Error("notifications_unavailable");
    const response = await fetch(`${endpoint}/admin/publish`, {
      method: "POST",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${authState.sessionToken}`
      },
      body: JSON.stringify(body)
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data?.ok === false) {
      const error = new Error(String(data?.error || `HTTP_${response.status}`));
      error.data = data;
      throw error;
    }
    return data;
  }

  function appendAnnouncementTextField(container, labelText, multiline = false, maxLength = 120) {
    const label = document.createElement("label");
    label.className = "settings-field announcement-field";
    const title = document.createElement("span");
    title.textContent = labelText;
    const field = multiline ? document.createElement("textarea") : document.createElement("input");
    if (!multiline) field.type = "text";
    field.maxLength = maxLength;
    field.autocomplete = "off";
    if (multiline) field.rows = 4;
    label.append(title, field);
    container.appendChild(label);
    return field;
  }

  function renderAnnouncementPanel() {
    const actions = $("#controlActions");
    actions.replaceChildren();
    const form = document.createElement("div");
    form.className = "settings-form announcement-form";

    const typeField = appendFormSelect(form, t("announcementTypeLabel"), [
      ["system", t("announcementTypeSystem")],
      ["update", t("announcementTypeUpdate")],
      ["season", t("announcementTypeSeason")],
      ["promo", t("announcementTypePromo")]
    ], "system");

    const titleRu = appendAnnouncementTextField(form, t("announcementTitleRu"), false, 120);
    const bodyRu = appendAnnouncementTextField(form, t("announcementBodyRu"), true, 600);
    const titleEn = appendAnnouncementTextField(form, t("announcementTitleEn"), false, 120);
    const bodyEn = appendAnnouncementTextField(form, t("announcementBodyEn"), true, 600);

    const expiresField = appendFormSelect(form, t("announcementExpiresLabel"), [
      ["0", t("announcementNever")],
      ["1", t("announcement1Day")],
      ["3", t("announcement3Days")],
      ["7", t("announcement7Days")],
      ["30", t("announcement30Days")]
    ], "7");

    const submit = document.createElement("button");
    submit.type = "button";
    submit.className = "primary-button settings-save";
    submit.textContent = t("announcementSend");
    form.appendChild(submit);
    actions.appendChild(form);

    submit.addEventListener("click", async () => {
      const ruTitle = String(titleRu.value || "").trim();
      const ruBody = String(bodyRu.value || "").trim();
      if (!ruTitle || !ruBody) {
        setControlStatus(t("announcementRequired"), "error");
        return;
      }
      if (controlState.busy) return;
      setControlBusy(true);
      submit.textContent = t("announcementSending");
      setControlStatus(t("announcementSending"));
      try {
        const days = Number(expiresField.select.value || 0);
        const expiresAt = days > 0 ? Date.now() + days * 24 * 60 * 60 * 1000 : 0;
        await notificationAdminRequest({
          scope: "global",
          type: typeField.select.value || "system",
          titleRu: ruTitle,
          bodyRu: ruBody,
          titleEn: String(titleEn.value || "").trim(),
          bodyEn: String(bodyEn.value || "").trim(),
          expiresAt,
          meta: {
            source: "web_admin",
            author: authState.account?.username || authState.profile?.name || "ADMIN"
          }
        });
        titleRu.value = "";
        bodyRu.value = "";
        titleEn.value = "";
        bodyEn.value = "";
        notificationState.loadedAt = 0;
        await fetchNotifications(true);
        setControlStatus(t("announcementSent"), "success");
        toast(t("announcementSent"));
      } catch (error) {
        if (["invalid_session", "unauthorized"].includes(String(error?.message || ""))) {
          clearAuth();
          setControlModal(false);
          setLogin(true);
          toast(t("controlLoginRequired"));
        } else if (String(error?.message || "") === "admin_required") {
          setControlStatus(t("adminRequired"), "error");
        } else {
          setControlStatus(t("announcementFailed"), "error");
        }
      } finally {
        setControlBusy(false);
        submit.textContent = t("announcementSend");
      }
    });

    setControlStatus(t("announcementPanelLead"));
  }

  function renderGameMenuPanel() {
    const actions = $("#controlActions");
    actions.replaceChildren();
    GAME_MENU_ACTIONS.forEach((item) => appendControlAction(actions, item, () => sendControlCommand(item.action)));
    setControlStatus(t("liveActionRequired"));
  }

  function renderAdminPanel() {
    const actions = $("#controlActions");
    actions.replaceChildren();

    appendControlAction(actions, {
      action: "admin_open_menu", icon: "⚠", title: "adminOpenInGame", text: "openAdminMenuText", admin: true
    }, () => sendControlCommand("admin_open_menu"));

    const form = document.createElement("div");
    form.className = "settings-form";

    const actionField = appendFormSelect(form, t("adminActionLabel"), [
      ["", t("chooseAction")],
      ...ADMIN_WEB_ACTIONS.map((item) => [item.action, t(item.title)])
    ]);

    const players = liveControlPlayers();
    const targetField = appendFormSelect(form, t("adminTargetLabel"), [
      ["", players.length ? t("choosePlayer") : t("noLivePlayers")],
      ...players.map((player) => [player.slot, `#${player.slot} · ${player.name}`])
    ]);

    const valueHost = document.createElement("div");
    valueHost.style.display = "contents";
    form.appendChild(valueHost);

    const execute = document.createElement("button");
    execute.type = "button";
    execute.className = "primary-button settings-save";
    execute.textContent = t("executeAction");
    execute.disabled = true;
    form.appendChild(execute);
    actions.appendChild(form);

    let valueSelect = null;
    const updateForm = () => {
      const definition = ADMIN_WEB_ACTIONS.find((item) => item.action === actionField.select.value);
      valueHost.replaceChildren();
      valueSelect = null;
      targetField.label.hidden = !definition?.target;
      targetField.select.disabled = !definition?.target || players.length === 0;
      execute.disabled = !definition || (definition.target && (!players.length || !targetField.select.value));
      execute.className = `${definition?.danger ? "danger-button" : "primary-button"} settings-save`;

      if (definition?.value) {
        const field = appendFormSelect(valueHost, t("adminValueLabel"), definition.value);
        valueSelect = field.select;
      } else if (definition?.amount) {
        const field = appendFormSelect(valueHost, t("adminValueLabel"), definition.amount.map((amount) => [amount, String(amount)]));
        valueSelect = field.select;
      }
    };

    actionField.select.addEventListener("change", updateForm);
    targetField.select.addEventListener("change", updateForm);
    updateForm();

    execute.addEventListener("click", async () => {
      const definition = ADMIN_WEB_ACTIONS.find((item) => item.action === actionField.select.value);
      if (!definition) return;
      const payload = {};
      if (definition.target) {
        const targetSlot = Number(targetField.select.value);
        if (!Number.isInteger(targetSlot) || targetSlot < 1 || targetSlot > 16) {
          setControlStatus(t("targetOffline"), "error");
          return;
        }
        payload.targetSlot = targetSlot;
        const selectedPlayer = players.find((player) => Number(player.slot) === targetSlot);
        payload.targetName = selectedPlayer?.name || "";
      }
      if (definition.value) payload.value = valueSelect?.value || "";
      if (definition.amount) payload.amount = Number(valueSelect?.value || 0);
      if (definition.danger) {
        if (!window.confirm(t("confirmAdminDanger"))) return;
        payload.confirm = true;
      }
      await sendControlCommand(definition.action, payload);
    });

    setControlStatus(players.length ? t("liveActionRequired") : t("noLivePlayers"), players.length ? "" : "error");
  }

  function controlFailureText(result) {
    const code = String(result?.data?.result || result?.message || "");
    if (code === "player_offline") return t("controlPlayerOffline");
    if (code === "target_offline") return t("targetOffline");
    if (code === "target_changed") return t("targetChanged");
    if (code === "self_protected") return t("selfProtected");
    if (code === "admin_protected") return t("adminProtected");
    if (code === "admin_required") return t("adminRequired");
    if (code.startsWith("invalid_")) return t("controlInvalidValue");
    return t("controlFailed");
  }

  async function openControlPanel(panelName) {
    const panel = CONTROL_PANELS[panelName];
    if (!panel) return;
    if (!authState.account || !authState.sessionToken) {
      toast(t("controlLoginRequired"));
      setLogin(true);
      return;
    }
    if (panel.admin && String(authState.account.role || "").toUpperCase() !== "ADMIN") {
      toast(t("adminRequired"));
      return;
    }

    controlState.panel = panelName;
    $("#controlModalTitle").textContent = panel.title;
    $("#controlModalLead").textContent = panel.persistent ? t("persistentSettingsLead") : t(panel.lead);
    const actions = $("#controlActions");
    actions.replaceChildren();
    setControlModal(true);

    if (panel.persistent) {
      const requestId = ++settingsState.requestId;
      appendSettingsState(actions, t("settingsLoading"), "");
      setControlStatus(t("settingsLoading"));
      try {
        const data = await settingsRequest("/me");
        if (requestId !== settingsState.requestId) return;
        settingsState.data = data;
        renderPersistentPanel(panelName, data);
      } catch (error) {
        if (["invalid_session", "unauthorized"].includes(error.message)) {
          clearAuth();
          setControlModal(false);
          setLogin(true);
          toast(t("controlLoginRequired"));
        } else {
          actions.replaceChildren();
          appendSettingsState(actions, t("settingsFailed"), error.message);
          setControlStatus(t("settingsFailed"), "error");
        }
      }
      return;
    }

    if (panel.custom === "game") {
      renderGameMenuPanel();
      return;
    }
    if (panel.custom === "admin") {
      renderAdminPanel();
      return;
    }
    if (panel.custom === "announcements") {
      renderAnnouncementPanel();
      return;
    }
    setControlStatus(t("controlWaiting"));
  }

  async function waitControlResult(commandId) {
    const startedAt = Date.now();
    while (Date.now() - startedAt < 20000) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const data = await controlRequest(`/status?id=${encodeURIComponent(commandId)}`);
      if (data.status === "done") return { ok: true, data };
      if (["failed", "expired"].includes(data.status)) return { ok: false, data };
    }
    return { ok: false, timeout: true };
  }

  async function sendControlCommand(action, payload = {}) {
    if (controlState.busy) return;
    setControlBusy(true);
    setControlStatus(t("controlSending"));
    try {
      const created = await controlRequest("/command", { method: "POST", body: { action, ...payload } });
      controlState.commandId = created.commandId || "";
      const result = await waitControlResult(controlState.commandId);
      if (result.ok) {
        setControlStatus(t("controlDelivered"), "success");
        toast(t("controlDelivered"));
      } else if (result.timeout) {
        setControlStatus(t("controlTimeout"), "error");
      } else {
        setControlStatus(controlFailureText(result), "error");
      }
    } catch (error) {
      if (error.message === "unauthorized" || error.message === "invalid_session") {
        clearAuth();
        setControlModal(false);
        setLogin(true);
        toast(t("controlLoginRequired"));
      } else if (error.message === "admin_required") {
        setControlStatus(t("adminRequired"), "error");
      } else if (error.message === "invalid_target") {
        setControlStatus(t("targetOffline"), "error");
      } else if (["invalid_value", "invalid_amount", "confirmation_required"].includes(error.message)) {
        setControlStatus(t("controlInvalidValue"), "error");
      } else {
        setControlStatus(t("controlFailed"), "error");
      }
    } finally {
      setControlBusy(false);
    }
  }

  function setLogin(open) {
    $("#loginModal").classList.toggle("is-open", open);
    $("#loginModal").setAttribute("aria-hidden", String(!open));
    if (open) {
      setDrawer(false);
      if (!authState.loading) {
        setLoginBusy(false);
        setLoginStatus(t("authReady"), false);
      }
    }
  }

  async function copyText(value) {
    const text = String(value || "");
    if (!text) return false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {}

    const field = document.createElement("textarea");
    field.value = text;
    field.readOnly = true;
    field.setAttribute("aria-hidden", "true");
    Object.assign(field.style, {
      position: "fixed",
      inset: "0 auto auto -9999px",
      opacity: "0",
      pointerEvents: "none"
    });
    document.body.append(field);
    field.focus({ preventScroll: true });
    field.select();
    field.setSelectionRange(0, field.value.length);
    let copied = false;
    try { copied = document.execCommand("copy"); } catch {}
    field.remove();
    return copied;
  }

  async function shareSite() {
    const url = config.publicUrl || location.href.split("#")[0].split("?")[0];
    const data = { title: "KONTRA // ZOMBIE", text: "KONTRA // ZOMBIE", url };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        const copied = await copyText(url);
        toast(copied ? t("shareCopied") : t("copyFailed"));
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        const copied = await copyText(url);
        toast(copied ? t("shareCopied") : t("copyFailed"));
      }
    }
  }

  function launchServerJoin() {
    const userAgent = navigator.userAgent || "";
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const appStoreUrl = String(config.links?.appStore || "").trim();
    const googlePlayUrl = String(config.links?.googlePlay || "").trim();
    const deepLink = String(config.deepLinks?.zm || "kontra://join/zm").trim();

    if (isIOS) {
      if (appStoreUrl) window.location.href = appStoreUrl;
      return;
    }

    if (!isAndroid) {
      if (googlePlayUrl) window.location.href = googlePlayUrl;
      return;
    }

    toast(t("openingKontra"));

    let appOpened = false;
    const markOpened = () => {
      if (document.hidden) appOpened = true;
    };
    const markPageHidden = () => { appOpened = true; };

    document.addEventListener("visibilitychange", markOpened);
    window.addEventListener("pagehide", markPageHidden, { once: true });

    window.location.href = deepLink;

    window.setTimeout(() => {
      document.removeEventListener("visibilitychange", markOpened);
      if (!appOpened && document.visibilityState === "visible" && googlePlayUrl) {
        window.location.href = googlePlayUrl;
      }
    }, 1600);
  }

  function applyConfig() {
    setTextAll("[data-server-address]", config.serverAddress || "—");
    setTextAll("[data-max]", config.maxPlayers || 16);
    $$('[data-link]').forEach((anchor) => {
      const value = config.links?.[anchor.dataset.link];
      if (value) anchor.href = value;
      else {
        anchor.href = "#";
        anchor.addEventListener("click", (event) => event.preventDefault());
      }
    });
  }

  let ambientAudio = null;

  function getAmbientAudio() {
    if (ambientAudio) return ambientAudio;

    ambientAudio = document.getElementById("ambientAudio");
    if (!ambientAudio) {
      ambientAudio = document.createElement("audio");
      ambientAudio.id = "ambientAudio";
      ambientAudio.src = "assets/s_autoplay.mp3";
      ambientAudio.preload = "metadata";
      ambientAudio.loop = true;
      ambientAudio.autoplay = false;
      ambientAudio.hidden = true;
      document.body.appendChild(ambientAudio);
    }

    return ambientAudio;
  }

  function updateAmbientAudioButton(playing) {
    const button = $("#ambientToggle");
    if (!button) return;
    button.classList.toggle("is-playing", Boolean(playing));
    button.setAttribute("aria-pressed", playing ? "true" : "false");
    button.setAttribute("aria-label", playing ? "Музыка: пауза" : "Музыка: включить");
    const label = button.querySelector("small");
    if (label) label.textContent = playing ? "PAUSE" : "PLAY";
  }

  async function toggleAmbientAudio() {
    const audio = getAmbientAudio();
    try {
      if (audio.paused) {
        await audio.play();
        updateAmbientAudioButton(true);
      } else {
        audio.pause();
        updateAmbientAudioButton(false);
      }
    } catch {
      updateAmbientAudioButton(false);
    }
  }

  function setupAmbientAudioToggle() {
    const button = $("#ambientToggle");
    if (!button) return;

    const audio = getAmbientAudio();
    audio.pause();
    updateAmbientAudioButton(false);
    button.addEventListener("click", toggleAmbientAudio);
    audio.addEventListener("play", () => updateAmbientAudioButton(true));
    audio.addEventListener("pause", () => updateAmbientAudioButton(false));
    audio.addEventListener("ended", () => updateAmbientAudioButton(false));
  }

  const PINBALL_REWARD_CAP = 75;
  const PINBALL_PREVIEW_KEY = "kontra:pinball-preview:v14";
  const PINBALL_BUY_PRICE = 100;
  const PINBALL_EVENT_LIMIT = 120;

  const pinball = {
    open: false,
    running: false,
    launched: false,
    launchLaneActive: true,
    finishing: false,
    loading: false,
    statusReady: false,
    statusIdentity: "",
    previewMode: false,
    attemptsRemaining: 0,
    tokenBalance: 0,
    runTokens: 0,
    bonusAttempts: 0,
    runId: "",
    startedClock: 0,
    pendingFinish: null,
    events: [],
    overlay: null,
    overlayAction: "start",
    infoTab: "rules",
    frame: 0,
    lastTime: 0,
    accumulator: 0,
    leftPressed: false,
    rightPressed: false,
    leftAngle: 0.27,
    rightAngle: Math.PI - 0.27,
    flash: 0,
    shake: 0,
    audioContext: null,
    trail: [],
    particles: [],
    ball: { x: 374, y: 620, vx: 0, vy: 0, r: 7 },
    exitHole: { id: "exit", x: 210, y: 515, r: 23, reward: 25, color: "#71ff7d" },
    bonusTarget: { id: "extra", x: 210, y: 360, r: 12, reward: 0, color: "#72ff75", cooldown: 999999 },
    targets: [
      { id: "gold", x: 210, y: 210, r: 31, reward: 10, color: "#ffd44b", glow: "#ff9d34", cooldown: 4000, phase: 0 },
      { id: "violet-1", x: 120, y: 302, r: 27, reward: 5, color: "#b879ff", glow: "#ff4fbd", cooldown: 2000, phase: 1.7 },
      { id: "violet-2", x: 300, y: 302, r: 27, reward: 5, color: "#8d7cff", glow: "#48b9ff", cooldown: 2000, phase: 3.2 },
      { id: "blue-1", x: 72, y: 410, r: 18, reward: 1, color: "#55d1ff", glow: "#2f8cff", cooldown: 300, phase: 2.1 },
      { id: "blue-2", x: 320, y: 430, r: 18, reward: 1, color: "#55d1ff", glow: "#2f8cff", cooldown: 300, phase: 4.1 },
      { id: "blue-3", x: 210, y: 420, r: 17, reward: 1, color: "#55d1ff", glow: "#2f8cff", cooldown: 300, phase: 5.3 }
    ],
    pegs: [
      { x: 69, y: 224, r: 6 }, { x: 332, y: 226, r: 6 },
      { x: 152, y: 365, r: 7 }, { x: 268, y: 365, r: 7 },
      { x: 104, y: 492, r: 8 }, { x: 316, y: 492, r: 8 },
      { x: 164, y: 548, r: 6 }, { x: 256, y: 548, r: 6 }
    ],
    rails: [
      { ax: 33, ay: 156, bx: 94, by: 112, width: 4, color: "#ff4b5a", boost: 1.02 },
      { ax: 327, ay: 112, bx: 343, by: 158, width: 4, color: "#53c9ff", boost: 1.02 },
      { ax: 38, ay: 492, bx: 116, by: 578, width: 5, color: "#ff4b5a", boost: 1.12 },
      { ax: 343, ay: 492, bx: 292, by: 578, width: 5, color: "#53c9ff", boost: 1.12 },
      { ax: 62, ay: 558, bx: 109, by: 594, width: 4, color: "#ffcf4c", boost: 1.06 },
      { ax: 342, ay: 558, bx: 311, by: 594, width: 4, color: "#ffcf4c", boost: 1.06 }
    ]
  };

  function pinballDayKey() {
    return new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString().slice(0, 10);
  }

  function pinballIdentity() {
    return identityKey(authState.account?.username || authState.profile?.name);
  }

  function readPinballPreview() {
    const username = pinballIdentity();
    const fallbackBalance = integer(authState.profile?.tokens, 0, 0, 2147483647);
    try {
      const stored = JSON.parse(localStorage.getItem(PINBALL_PREVIEW_KEY) || "null");
      if (identityKey(stored?.username) === username && stored?.dayKey === pinballDayKey()) {
        return {
          username: authState.account?.username || authState.profile?.name || "Player",
          dayKey: stored.dayKey,
          attemptsRemaining: integer(stored.attemptsRemaining, 3, 0, 999),
          tokenBalance: integer(stored.tokenBalance, fallbackBalance, 0, 2147483647),
          wins: integer(stored.wins, 0, 0, 2147483647),
          played: integer(stored.played, 0, 0, 2147483647)
        };
      }
    } catch {}
    return {
      username: authState.account?.username || authState.profile?.name || "Player",
      dayKey: pinballDayKey(),
      attemptsRemaining: 3,
      tokenBalance: fallbackBalance,
      wins: 0,
      played: 0
    };
  }

  function writePinballPreview(state) {
    try { localStorage.setItem(PINBALL_PREVIEW_KEY, JSON.stringify(state)); } catch {}
  }

  function pinballText(key, values = {}) {
    let result = t(key);
    Object.entries(values).forEach(([name, value]) => {
      result = result.replaceAll(`{${name}}`, String(value));
    });
    return result;
  }

  function renderPinballOverlay() {
    const state = pinball.overlay;
    const overlay = $("#pinballOverlay");
    if (!overlay || !state) return;
    overlay.classList.toggle("is-visible", Boolean(state.visible));
    overlay.classList.toggle("is-processing", Boolean(state.processing));
    $("#pinballOverlayTitle").textContent = pinballText(state.titleKey, state.values);
    $("#pinballOverlayText").textContent = pinballText(state.textKey, state.values);
    const button = $("#pinballStart");
    button.hidden = !state.buttonKey;
    button.disabled = Boolean(state.processing || state.disabled);
    if (state.buttonKey) button.textContent = pinballText(state.buttonKey, state.values);
  }

  function setPinballOverlay(
    visible,
    titleKey = "pinballReady",
    textKey = "pinballReadyText",
    buttonKey = "pinballStart",
    action = "start",
    values = {},
    options = {}
  ) {
    pinball.overlayAction = action;
    pinball.overlay = {
      visible: Boolean(visible),
      titleKey,
      textKey,
      buttonKey,
      values,
      processing: options.processing === true,
      disabled: options.disabled === true
    };
    renderPinballOverlay();
  }

  function updatePinballHud() {
    const projectedTokens = Math.max(0, pinball.tokenBalance + pinball.runTokens);
    const projectedAttempts = Math.max(0, pinball.attemptsRemaining + pinball.bonusAttempts);
    const locale = language === "ru" ? "ru-RU" : "en-US";
    const tokens = $("#pinballTokens");
    const attempts = $("#pinballAttempts");
    const session = $("#pinballSessionReward");
    const buy = $("#pinballBuy");
    if (tokens) tokens.textContent = projectedTokens.toLocaleString(locale);
    if (attempts) attempts.textContent = String(projectedAttempts);
    if (session) {
      const reward = `+${pinball.runTokens.toLocaleString(locale)} ${t("pinballTokens")}`;
      session.textContent = pinball.previewMode ? `${t("pinballPreview")} · ${reward}` : reward;
    }
    if (buy) {
      buy.disabled = (
        !authState.account ||
        pinball.loading ||
        pinball.finishing ||
        pinball.tokenBalance < PINBALL_BUY_PRICE
      );
    }
  }

  function applyPinballStatus(data = {}, previewMode = false) {
    pinball.previewMode = previewMode || data.previewMode === true;
    pinball.attemptsRemaining = integer(data.attemptsRemaining, 0, 0, 999);
    pinball.tokenBalance = integer(
      data.tokenBalance ?? data.profile?.tokens ?? authState.profile?.tokens,
      0,
      0,
      2147483647
    );
    pinball.statusReady = true;
    pinball.statusIdentity = pinballIdentity();
    if (authState.profile) {
      authState.profile.tokens = pinball.tokenBalance;
      renderAuth();
    }
    updatePinballHud();
  }

  function setPinballSignedOut() {
    pinball.statusReady = false;
    pinball.attemptsRemaining = 0;
    pinball.tokenBalance = 0;
    updatePinballHud();
    setPinballOverlay(true, "pinballSignIn", "pinballSignInText", "pinballOpenLogin", "signin");
  }

  function applyPinballPreviewStatus() {
    const state = readPinballPreview();
    applyPinballStatus(state, true);
    if (!pinball.running && !pinball.finishing) {
      const noAttempts = state.attemptsRemaining <= 0;
      setPinballOverlay(
        true,
        noAttempts ? "pinballNoAttempts" : "pinballReady",
        noAttempts ? "pinballNoAttemptsText" : "pinballPreviewText",
        noAttempts
          ? (state.tokenBalance >= PINBALL_BUY_PRICE ? "pinballBuyAttempt" : "")
          : "pinballStart",
        noAttempts ? "buy" : "start",
        {},
        { disabled: noAttempts && state.tokenBalance < PINBALL_BUY_PRICE }
      );
    }
  }

  async function refreshPinballStatus(showLoading = true) {
    if (!authState.account || !authState.profile) {
      setPinballSignedOut();
      return;
    }
    if (previewProfileEnabled() || !authState.sessionToken) {
      applyPinballPreviewStatus();
      return;
    }

    pinball.loading = true;
    updatePinballHud();
    if (showLoading && !pinball.running) {
      setPinballOverlay(
        true,
        "pinballLoading",
        "pinballLoadingText",
        "",
        "none",
        {},
        { processing: true }
      );
    }
    try {
      const data = await authRequest("/pinball", { method: "GET" });
      applyPinballStatus(data, false);
      if (data.activeRun?.runId && !pinball.running) {
        beginPinballAttempt(data.activeRun, true);
      } else if (!pinball.running && !pinball.finishing) {
        const noAttempts = pinball.attemptsRemaining <= 0;
        setPinballOverlay(
          true,
          noAttempts ? "pinballNoAttempts" : "pinballReady",
          noAttempts ? "pinballNoAttemptsText" : "pinballReadyText",
          noAttempts
            ? (pinball.tokenBalance >= PINBALL_BUY_PRICE ? "pinballBuyAttempt" : "")
            : "pinballStart",
          noAttempts ? "buy" : "start",
          {},
          { disabled: noAttempts && pinball.tokenBalance < PINBALL_BUY_PRICE }
        );
      }
    } catch (error) {
      if (["not_found", "HTTP_404"].includes(String(error?.message || ""))) {
        applyPinballPreviewStatus();
      } else {
        pinball.statusReady = false;
        setPinballOverlay(
          true,
          "pinballUnavailable",
          "pinballUnavailableText",
          "pinballTryAgain",
          "retryStatus"
        );
      }
    } finally {
      pinball.loading = false;
      updatePinballHud();
    }
  }

  function pinballTone(frequency = 220, duration = 0.05, gain = 0.035, type = "square") {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!pinball.audioContext) pinball.audioContext = new AudioContextClass();
      const context = pinball.audioContext;
      if (context.state === "suspended") context.resume();
      const oscillator = context.createOscillator();
      const volume = context.createGain();
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      volume.gain.setValueAtTime(gain, context.currentTime);
      volume.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
      oscillator.connect(volume);
      volume.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + duration);
    } catch {}
  }

  function resetPinballBall() {
    Object.assign(pinball.ball, { x: 374, y: 620, vx: 0, vy: 0, r: 7 });
    pinball.launched = false;
    pinball.launchLaneActive = true;
    pinball.trail = [];
  }

  function resetPinballRunState() {
    pinball.runTokens = 0;
    pinball.bonusAttempts = 0;
    pinball.events = [];
    pinball.pendingFinish = null;
    pinball.particles = [];
    pinball.flash = 0;
    pinball.shake = 0;
    pinball.targets.forEach((target) => { target.nextHitAt = 0; });
    pinball.bonusTarget.nextHitAt = 0;
    pinball.bonusTarget.collected = false;
    resetPinballBall();
  }

  function beginPinballAttempt(data = {}, resumed = false) {
    if (data.attemptsRemaining !== undefined || data.tokenBalance !== undefined) {
      applyPinballStatus(data, pinball.previewMode);
    }
    resetPinballRunState();
    pinball.runId = String(data.runId || `preview-${Date.now()}-${Math.random().toString(16).slice(2)}`);
    pinball.running = true;
    pinball.finishing = false;
    pinball.startedClock = performance.now();
    pinball.leftPressed = false;
    pinball.rightPressed = false;
    updatePinballHud();
    setPinballOverlay(
      true,
      "pinballLaunchPrompt",
      "pinballLaunchPromptText",
      "pinballLaunch",
      "launch"
    );
    pinballTone(resumed ? 285 : 350, 0.09, 0.035, "square");
  }

  async function requestPinballStart() {
    if (pinball.loading || pinball.finishing) return;
    if (!authState.account || !authState.profile) {
      setPinballSignedOut();
      return;
    }
    if (!pinball.statusReady) {
      await refreshPinballStatus(true);
      return;
    }
    if (pinball.attemptsRemaining <= 0) {
      setPinballOverlay(
        true,
        "pinballNoAttempts",
        "pinballNoAttemptsText",
        pinball.tokenBalance >= PINBALL_BUY_PRICE ? "pinballBuyAttempt" : "",
        "buy",
        {},
        { disabled: pinball.tokenBalance < PINBALL_BUY_PRICE }
      );
      return;
    }

    pinball.loading = true;
    setPinballOverlay(
      true,
      "pinballStarting",
      "pinballStartingText",
      "",
      "none",
      {},
      { processing: true }
    );
    try {
      if (pinball.previewMode) {
        const state = readPinballPreview();
        if (state.attemptsRemaining <= 0) throw new Error("no_attempts");
        state.attemptsRemaining -= 1;
        state.played += 1;
        writePinballPreview(state);
        applyPinballStatus(state, true);
        beginPinballAttempt({
          runId: `preview-${Date.now()}-${Math.random().toString(16).slice(2)}`,
          attemptsRemaining: state.attemptsRemaining,
          tokenBalance: state.tokenBalance
        });
      } else {
        const data = await authRequest("/pinball/start", { method: "POST", body: {} });
        applyPinballStatus(data, false);
        beginPinballAttempt(data, data.resumed === true);
      }
    } catch (error) {
      if (String(error?.message || "") === "no_attempts") {
        pinball.attemptsRemaining = 0;
        updatePinballHud();
        setPinballOverlay(
          true,
          "pinballNoAttempts",
          "pinballNoAttemptsText",
          pinball.tokenBalance >= PINBALL_BUY_PRICE ? "pinballBuyAttempt" : "",
          "buy",
          {},
          { disabled: pinball.tokenBalance < PINBALL_BUY_PRICE }
        );
      } else {
        setPinballOverlay(
          true,
          "pinballUnavailable",
          "pinballUnavailableText",
          "pinballTryAgain",
          "retryStatus"
        );
      }
    } finally {
      pinball.loading = false;
      updatePinballHud();
    }
  }

  async function buyPinballAttempt() {
    if (pinball.loading || pinball.finishing) return;
    if (!authState.account || !authState.profile) {
      setPinballSignedOut();
      return;
    }
    if (pinball.tokenBalance < PINBALL_BUY_PRICE) {
      toast(t("pinballNotEnoughTokens"));
      updatePinballHud();
      return;
    }

    pinball.loading = true;
    updatePinballHud();
    try {
      if (pinball.previewMode) {
        const state = readPinballPreview();
        if (state.tokenBalance < PINBALL_BUY_PRICE) throw new Error("insufficient_tokens");
        state.tokenBalance -= PINBALL_BUY_PRICE;
        state.attemptsRemaining += 1;
        writePinballPreview(state);
        applyPinballStatus(state, true);
      } else {
        const data = await authRequest("/pinball/buy", { method: "POST", body: {} });
        applyPinballStatus(data, false);
      }
      toast(t("pinballBuySuccess"));
      if (!pinball.running && !pinball.finishing) {
        setPinballOverlay(true, "pinballReady", "pinballReadyText", "pinballStart", "start");
      }
    } catch (error) {
      const insufficient = ["insufficient_tokens", "HTTP_409"].includes(String(error?.message || ""));
      toast(insufficient ? t("pinballNotEnoughTokens") : t("pinballUnavailableText"));
      if (!insufficient) {
        setPinballOverlay(
          true,
          "pinballUnavailable",
          "pinballUnavailableText",
          "pinballTryAgain",
          "retryStatus"
        );
      }
    } finally {
      pinball.loading = false;
      updatePinballHud();
    }
  }

  function launchPinballBall() {
    if (!pinball.open || pinball.loading || pinball.finishing) return;
    if (!pinball.running) {
      requestPinballStart();
      return;
    }
    if (pinball.launched) return;
    pinball.launched = true;
    pinball.ball.vx = -1.8;
    pinball.ball.vy = -17.2;
    setPinballOverlay(false, "pinballReady", "pinballReadyText", "", "none");
    pinballTone(560, 0.1, 0.042, "sawtooth");
  }

  function showPinballResult(result, earnedTokens) {
    const hasAttempt = pinball.attemptsRemaining > 0;
    const canBuy = pinball.tokenBalance >= PINBALL_BUY_PRICE;
    const buttonKey = hasAttempt ? "pinballNextAttempt" : (canBuy ? "pinballBuyAttempt" : "");
    const action = hasAttempt ? "start" : (canBuy ? "buy" : "none");
    setPinballOverlay(
      true,
      result === "win" ? "pinballVictory" : "pinballLost",
      result === "win" ? "pinballVictoryText" : "pinballLostText",
      buttonKey,
      action,
      { tokens: earnedTokens },
      { disabled: !hasAttempt && !canBuy }
    );
  }

  async function submitPinballFinish() {
    const pending = pinball.pendingFinish;
    if (!pending || pinball.finishing) return;
    pinball.finishing = true;
    setPinballOverlay(
      true,
      "pinballSaving",
      "pinballSavingText",
      "",
      "none",
      {},
      { processing: true }
    );
    try {
      let data;
      if (pinball.previewMode) {
        await new Promise((resolve) => window.setTimeout(resolve, 260));
        const state = readPinballPreview();
        state.tokenBalance = Math.min(2147483647, state.tokenBalance + pending.localTokens);
        state.attemptsRemaining = Math.min(999, state.attemptsRemaining + pending.bonusAttempts);
        if (pending.result === "win") state.wins += 1;
        writePinballPreview(state);
        data = {
          ...state,
          earnedTokens: pending.localTokens,
          extraAttempts: pending.bonusAttempts
        };
        applyPinballStatus(data, true);
      } else {
        data = await authRequest("/pinball/finish", {
          method: "POST",
          body: pending.payload
        });
        applyPinballStatus(data, false);
      }
      const earnedTokens = integer(data.earnedTokens, pending.localTokens, 0, PINBALL_REWARD_CAP);
      const finalResult = ["win", "loss"].includes(String(data.result || ""))
        ? String(data.result)
        : pending.result;
      pinball.pendingFinish = null;
      pinball.runId = "";
      pinball.runTokens = 0;
      pinball.bonusAttempts = 0;
      updatePinballHud();
      showPinballResult(finalResult, earnedTokens);
    } catch {
      setPinballOverlay(
        true,
        "pinballUnavailable",
        "pinballUnavailableText",
        "pinballTryAgain",
        "retryFinish"
      );
    } finally {
      pinball.finishing = false;
      updatePinballHud();
    }
  }

  function finishPinballAttempt(result) {
    if (!pinball.running || pinball.finishing || pinball.pendingFinish) return;
    pinball.running = false;
    pinball.launched = false;
    pinball.leftPressed = false;
    pinball.rightPressed = false;
    pinballTone(result === "win" ? 760 : 82, result === "win" ? 0.2 : 0.28, 0.05, result === "win" ? "triangle" : "sawtooth");
    const durationMs = Math.max(0, Math.floor(performance.now() - pinball.startedClock));
    pinball.pendingFinish = {
      result,
      localTokens: Math.min(PINBALL_REWARD_CAP, pinball.runTokens),
      bonusAttempts: Math.min(1, pinball.bonusAttempts),
      payload: {
        runId: pinball.runId,
        result,
        durationMs,
        events: pinball.events.slice(0, PINBALL_EVENT_LIMIT)
      }
    };
    submitPinballFinish();
  }

  function pinballEventTime() {
    return Math.max(0, Math.floor(performance.now() - pinball.startedClock));
  }

  function showPinballFloat(x, y, text, color) {
    const layer = $("#pinballFloatLayer");
    const canvas = $("#pinballCanvas");
    if (!layer || !canvas) return;
    const canvasRect = canvas.getBoundingClientRect();
    const layerRect = layer.getBoundingClientRect();
    const node = document.createElement("span");
    node.className = "pinball-float";
    node.textContent = text;
    node.style.setProperty("--float-color", color);
    node.style.left = `${canvasRect.left - layerRect.left + (x / canvas.width) * canvasRect.width}px`;
    node.style.top = `${canvasRect.top - layerRect.top + (y / canvas.height) * canvasRect.height}px`;
    layer.append(node);
    window.setTimeout(() => node.remove(), 900);
  }

  function addPinballBurst(x, y, color, count = 12) {
    for (let index = 0; index < count; index += 1) {
      const angle = (Math.PI * 2 * index) / count + Math.random() * 0.35;
      const speed = 1.2 + Math.random() * 3.1;
      pinball.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        color,
        size: 1.5 + Math.random() * 2.8
      });
    }
    if (pinball.particles.length > 90) pinball.particles.splice(0, pinball.particles.length - 90);
  }

  function registerPinballTarget(target) {
    if (!pinball.running || !pinball.launched) return;
    const now = performance.now();
    if (target.collected || now < Number(target.nextHitAt || 0)) return;
    target.nextHitAt = now + Number(target.cooldown || 300);

    if (target.id === "extra") {
      target.collected = true;
      pinball.bonusAttempts = 1;
      pinball.events.push({ t: pinballEventTime(), target: "extra" });
      showPinballFloat(target.x, target.y, t("pinballExtraEarned"), target.color);
      addPinballBurst(target.x, target.y, target.color, 18);
      pinball.flash = 1;
      pinball.shake = 1.2;
      pinballTone(880, 0.14, 0.045, "triangle");
      updatePinballHud();
      return;
    }

    const available = PINBALL_REWARD_CAP - pinball.runTokens;
    const reward = Math.max(0, Math.min(available, integer(target.reward, 0, 0, 25)));
    if (reward <= 0 && target.id !== "exit") return;
    pinball.runTokens += reward;
    pinball.events.push({ t: pinballEventTime(), target: target.id });
    showPinballFloat(target.x, target.y, reward > 0 ? `+${reward}` : "EXIT", target.color);
    addPinballBurst(target.x, target.y, target.color, target.id === "exit" ? 28 : 12 + reward);
    pinball.flash = Math.min(1, .45 + reward / 18);
    pinball.shake = Math.min(2.2, .6 + reward / 10);
    pinballTone(300 + reward * 46, 0.06 + reward * 0.004, 0.024 + reward * 0.0015, reward >= 10 ? "triangle" : "square");
    updatePinballHud();
  }

  function setPinballOpen(open) {
    const modal = $("#pinballModal");
    if (!modal) return;
    pinball.open = Boolean(open);
    modal.classList.toggle("is-open", pinball.open);
    modal.setAttribute("aria-hidden", String(!pinball.open));
    document.body.classList.toggle("pinball-open", pinball.open);
    if (pinball.open) {
      pinball.lastTime = performance.now();
      if (!pinball.frame) pinball.frame = requestAnimationFrame(pinballFrame);
      const identityChanged = pinball.statusIdentity !== pinballIdentity();
      if (!pinball.running && (!pinball.statusReady || identityChanged)) refreshPinballStatus(true);
      else if (pinball.running && !pinball.launched) {
        setPinballOverlay(true, "pinballLaunchPrompt", "pinballLaunchPromptText", "pinballLaunch", "launch");
      }
    } else {
      pinball.leftPressed = false;
      pinball.rightPressed = false;
      setPinballInfo(false);
    }
  }

  function setPinballInfo(open, tab = pinball.infoTab) {
    const sheet = $("#pinballInfoSheet");
    if (!sheet) return;
    pinball.infoTab = tab === "rewards" ? "rewards" : "rules";
    sheet.classList.toggle("is-open", Boolean(open));
    sheet.setAttribute("aria-hidden", String(!open));
    $$("[data-pinball-info-tab]").forEach((button) => {
      const active = button.dataset.pinballInfoTab === pinball.infoTab;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    $$("[data-pinball-info-panel]").forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.pinballInfoPanel === pinball.infoTab);
    });
    const title = $("#pinballInfoTitle");
    if (title) title.textContent = t(pinball.infoTab === "rewards" ? "pinballRewards" : "pinballRules");
  }

  function refreshPinballLanguage() {
    updatePinballHud();
    renderPinballOverlay();
    if ($("#pinballInfoSheet")?.classList.contains("is-open")) setPinballInfo(true, pinball.infoTab);
  }

  function pinballClosestPoint(px, py, ax, ay, bx, by) {
    const abx = bx - ax;
    const aby = by - ay;
    const lengthSquared = abx * abx + aby * aby || 1;
    const ratio = Math.max(0, Math.min(1, ((px - ax) * abx + (py - ay) * aby) / lengthSquared));
    return { x: ax + abx * ratio, y: ay + aby * ratio };
  }

  function pinballCollideCircle(circle, boost = 1.05) {
    const ball = pinball.ball;
    const dx = ball.x - circle.x;
    const dy = ball.y - circle.y;
    const minDistance = ball.r + circle.r;
    const distanceSquared = dx * dx + dy * dy;
    if (distanceSquared >= minDistance * minDistance || distanceSquared <= 0.0001) return false;
    const distance = Math.sqrt(distanceSquared);
    const nx = dx / distance;
    const ny = dy / distance;
    const overlap = minDistance - distance;
    ball.x += nx * overlap;
    ball.y += ny * overlap;
    const velocityAlongNormal = ball.vx * nx + ball.vy * ny;
    if (velocityAlongNormal < 0) {
      ball.vx -= (1 + boost) * velocityAlongNormal * nx;
      ball.vy -= (1 + boost) * velocityAlongNormal * ny;
    }
    ball.vx += nx * Math.max(.55, boost);
    ball.vy += ny * Math.max(.55, boost);
    if (circle.id) registerPinballTarget(circle);
    return true;
  }

  function pinballCollideSegment(segment) {
    const ball = pinball.ball;
    const closest = pinballClosestPoint(ball.x, ball.y, segment.ax, segment.ay, segment.bx, segment.by);
    const dx = ball.x - closest.x;
    const dy = ball.y - closest.y;
    const radius = ball.r + Number(segment.width || 4);
    const distanceSquared = dx * dx + dy * dy;
    if (distanceSquared >= radius * radius || distanceSquared <= 0.0001) return false;
    const distance = Math.sqrt(distanceSquared);
    const nx = dx / distance;
    const ny = dy / distance;
    ball.x += nx * (radius - distance);
    ball.y += ny * (radius - distance);
    const velocityAlongNormal = ball.vx * nx + ball.vy * ny;
    if (velocityAlongNormal < 0) {
      const boost = Number(segment.boost || 1);
      ball.vx -= (1 + boost) * velocityAlongNormal * nx;
      ball.vy -= (1 + boost) * velocityAlongNormal * ny;
    }
    return true;
  }

  function pinballFlipperGeometry(left) {
    const pivot = left ? { x: 128, y: 636 } : { x: 292, y: 636 };
    const angle = left ? pinball.leftAngle : pinball.rightAngle;
    const length = 88;
    return {
      pivot,
      length,
      angle,
      end: {
        x: pivot.x + Math.cos(angle) * length,
        y: pivot.y + Math.sin(angle) * length
      }
    };
  }

  function collidePinballFlipper(left) {
    const ball = pinball.ball;
    const flipper = pinballFlipperGeometry(left);
    const closest = pinballClosestPoint(
      ball.x,
      ball.y,
      flipper.pivot.x,
      flipper.pivot.y,
      flipper.end.x,
      flipper.end.y
    );
    const dx = ball.x - closest.x;
    const dy = ball.y - closest.y;
    const radius = ball.r + 9;
    const distanceSquared = dx * dx + dy * dy;
    if (distanceSquared >= radius * radius || distanceSquared <= 0.0001) return;
    const distance = Math.sqrt(distanceSquared);
    const nx = dx / distance;
    const ny = dy / distance;
    ball.x += nx * (radius - distance);
    ball.y += ny * (radius - distance);
    const velocityAlongNormal = ball.vx * nx + ball.vy * ny;
    if (velocityAlongNormal < 1.5) {
      ball.vx -= 1.9 * velocityAlongNormal * nx;
      ball.vy -= 1.9 * velocityAlongNormal * ny;
    }
    const active = left ? pinball.leftPressed : pinball.rightPressed;
    if (active) {
      ball.vx += left ? 2.7 : -2.7;
      ball.vy -= 6.8;
      pinballTone(145, 0.035, 0.018, "square");
    }
  }

  function updatePinballFlippers(step) {
    const leftTarget = pinball.leftPressed ? -0.57 : 0.27;
    const rightTarget = pinball.rightPressed ? Math.PI + 0.57 : Math.PI - 0.27;
    const speed = Math.min(1, step * 0.03);
    pinball.leftAngle += (leftTarget - pinball.leftAngle) * speed;
    pinball.rightAngle += (rightTarget - pinball.rightAngle) * speed;
  }

  function updatePinballParticles(dt) {
    pinball.particles.forEach((particle) => {
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.vy += .08 * dt;
      particle.life -= .035 * dt;
    });
    pinball.particles = pinball.particles.filter((particle) => particle.life > 0);
  }

  function updatePinballLaunchLane(ball, dt, active) {
    if (!active) return false;

    const laneLeft = 350 + ball.r;
    const laneRight = 396 - ball.r;
    const laneCenter = (laneLeft + laneRight) / 2;

    if (ball.x < laneLeft) {
      ball.x = laneLeft;
      ball.vx = Math.abs(ball.vx) * .58;
    } else if (ball.x > laneRight) {
      ball.x = laneRight;
      ball.vx = -Math.abs(ball.vx) * .58;
    }

    ball.vx += (laneCenter - ball.x) * .012 * dt;

    if (ball.y <= 92) {
      ball.vx = Math.min(ball.vx, -5.8);
      ball.vy = Math.min(ball.vy, -9.4);
      return false;
    }

    return true;
  }

  function updatePinballPhysics(step) {
    updatePinballFlippers(step);
    const dt = step / 16.6667;
    updatePinballParticles(dt);
    if (!pinball.running || !pinball.launched) return;

    const ball = pinball.ball;
    ball.vy += 0.205 * dt;
    ball.vx *= Math.pow(0.998, dt);
    ball.vy *= Math.pow(0.999, dt);
    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;
    pinball.trail.unshift({ x: ball.x, y: ball.y });
    if (pinball.trail.length > 18) pinball.trail.length = 18;

    const leftWall = 24;
    const rightWall = 396;
    const topWall = 28;
    if (ball.x - ball.r < leftWall) {
      ball.x = leftWall + ball.r;
      ball.vx = Math.abs(ball.vx) * .88;
      pinballTone(105, .025, .011, "triangle");
    }
    if (ball.x + ball.r > rightWall) {
      ball.x = rightWall - ball.r;
      ball.vx = -Math.abs(ball.vx) * .88;
      pinballTone(105, .025, .011, "triangle");
    }
    if (ball.y - ball.r < topWall) {
      ball.y = topWall + ball.r;
      ball.vy = Math.abs(ball.vy) * .9;
    }

    pinball.launchLaneActive = updatePinballLaunchLane(ball, dt, pinball.launchLaneActive);

    if (!pinball.launchLaneActive) {
      // After launch, the one-way gate keeps the ball on the main field.
      if (ball.x + ball.r > 350 && ball.y > 98 && ball.y < 626) {
        ball.x = 350 - ball.r;
        ball.vx = -Math.abs(ball.vx) * .74;
      }
      if (ball.x > 350 && ball.y <= 98) ball.vx -= .92 * dt;

      const exitDx = ball.x - pinball.exitHole.x;
      const exitDy = ball.y - pinball.exitHole.y;
      if (exitDx * exitDx + exitDy * exitDy < (pinball.exitHole.r - 1) ** 2) {
        registerPinballTarget(pinball.exitHole);
        addPinballBurst(pinball.exitHole.x, pinball.exitHole.y, pinball.exitHole.color, 36);
        finishPinballAttempt("win");
        return;
      }

      pinball.targets.forEach((target) => pinballCollideCircle(target, target.reward >= 10 ? 1.28 : 1.18));
      pinballCollideCircle(pinball.bonusTarget, 1.24);
      pinball.pegs.forEach((peg) => pinballCollideCircle(peg, .92));
      pinball.rails.forEach(pinballCollideSegment);
      collidePinballFlipper(true);
      collidePinballFlipper(false);

      if (ball.y > 520 && ball.y < 650) {
        if (ball.x < 96) ball.vx += .1 * dt;
        if (ball.x > 324) ball.vx -= .1 * dt;
      }
    }

    const speed = Math.hypot(ball.vx, ball.vy);
    if (speed > 18) {
      ball.vx *= 18 / speed;
      ball.vy *= 18 / speed;
    }
    if (ball.y - ball.r > 720) {
      finishPinballAttempt("loss");
      return;
    }
    pinball.flash = Math.max(0, pinball.flash - .06 * dt);
    pinball.shake = Math.max(0, pinball.shake - .12 * dt);
  }

  function roundedRectPath(context, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    context.beginPath();
    context.moveTo(x + r, y);
    context.arcTo(x + width, y, x + width, y + height, r);
    context.arcTo(x + width, y + height, x, y + height, r);
    context.arcTo(x, y + height, x, y, r);
    context.arcTo(x, y, x + width, y, r);
    context.closePath();
  }

  function drawPinballRail(context, rail) {
    context.save();
    context.strokeStyle = rail.color;
    context.lineWidth = rail.width * 2;
    context.lineCap = "round";
    context.shadowColor = rail.color;
    context.shadowBlur = 12;
    context.beginPath();
    context.moveTo(rail.ax, rail.ay);
    context.lineTo(rail.bx, rail.by);
    context.stroke();
    context.strokeStyle = "rgba(255,255,255,.62)";
    context.lineWidth = 1;
    context.stroke();
    context.restore();
  }

  function drawPinballTarget(context, target) {
    const time = performance.now();
    const cooling = time < Number(target.nextHitAt || 0);
    const pulse = 1 + Math.sin(time / 220 + Number(target.phase || 0)) * .055;
    const radius = target.r * pulse;
    const color = cooling ? "#405062" : target.color;
    const glow = context.createRadialGradient(target.x, target.y, 2, target.x, target.y, radius + 19);
    glow.addColorStop(0, cooling ? "rgba(75,90,110,.65)" : target.glow || target.color);
    glow.addColorStop(.4, cooling ? "rgba(35,45,60,.28)" : `${target.color}88`);
    glow.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = glow;
    context.beginPath();
    context.arc(target.x, target.y, radius + 19, 0, Math.PI * 2);
    context.fill();

    const face = context.createRadialGradient(target.x - 7, target.y - 9, 2, target.x, target.y, radius);
    face.addColorStop(0, cooling ? "#5a6672" : "#f9fcff");
    face.addColorStop(.2, cooling ? "#29313e" : target.color);
    face.addColorStop(1, "#080c14");
    context.fillStyle = face;
    context.strokeStyle = color;
    context.lineWidth = 4;
    context.shadowColor = color;
    context.shadowBlur = cooling ? 3 : 13;
    context.beginPath();
    context.arc(target.x, target.y, radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.shadowBlur = 0;

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = cooling ? "#758190" : "#ffffff";
    context.font = `900 ${target.reward >= 10 ? 15 : 13}px ui-monospace, monospace`;
    context.fillText(`+${target.reward}`, target.x, target.y + 1);
  }

  function drawPinballFlipper(context, left) {
    const flipper = pinballFlipperGeometry(left);
    context.save();
    context.translate(flipper.pivot.x, flipper.pivot.y);
    context.rotate(flipper.angle);
    const color = left ? "#ff4655" : "#55caff";
    const gradient = context.createLinearGradient(0, -10, flipper.length, 10);
    gradient.addColorStop(0, color);
    gradient.addColorStop(.5, "#f5fbff");
    gradient.addColorStop(1, color);
    context.fillStyle = gradient;
    context.shadowColor = color;
    context.shadowBlur = 17;
    roundedRectPath(context, -11, -9, flipper.length + 17, 18, 9);
    context.fill();
    context.strokeStyle = "rgba(255,255,255,.75)";
    context.lineWidth = 1;
    context.stroke();
    context.fillStyle = "#07101b";
    context.beginPath();
    context.arc(0, 0, 5, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  function drawPinball() {
    const canvas = $("#pinballCanvas");
    if (!canvas) return;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const now = performance.now();
    context.clearRect(0, 0, width, height);
    context.save();
    if (pinball.shake > 0) {
      context.translate(
        (Math.random() - .5) * pinball.shake * 5,
        (Math.random() - .5) * pinball.shake * 5
      );
    }

    const background = context.createLinearGradient(0, 0, width, height);
    background.addColorStop(0, "#061627");
    background.addColorStop(.34, "#130a29");
    background.addColorStop(.7, "#180817");
    background.addColorStop(1, "#03060c");
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "rgba(75, 181, 255, .075)";
    context.lineWidth = 1;
    for (let y = 28; y < height; y += 28) {
      context.beginPath();
      context.moveTo(22, y);
      context.lineTo(398, y);
      context.stroke();
    }
    for (let x = 22; x <= 398; x += 28) {
      context.beginPath();
      context.moveTo(x, 24);
      context.lineTo(x, 700);
      context.stroke();
    }

    context.strokeStyle = "#53c9ff";
    context.lineWidth = 4;
    context.shadowColor = "#2a9dff";
    context.shadowBlur = 17;
    roundedRectPath(context, 20, 18, 380, 686, 25);
    context.stroke();
    context.shadowBlur = 0;
    context.strokeStyle = "rgba(255, 66, 82, .62)";
    context.lineWidth = 2;
    roundedRectPath(context, 29, 27, 362, 668, 20);
    context.stroke();

    context.textAlign = "center";
    context.textBaseline = "alphabetic";
    context.fillStyle = "#f4f9ff";
    context.font = "900 23px ui-monospace, monospace";
    context.shadowColor = "#51c8ff";
    context.shadowBlur = 12;
    context.fillText("KONTRA // TOKEN RUN", 210, 62);
    context.shadowBlur = 0;
    context.fillStyle = "#ff5965";
    context.font = "800 9px ui-monospace, monospace";
    context.fillText("ZOMBIE ARCADE  ·  FIND THE EXIT", 210, 79);

    // EXIT victory hole. It sits deep in the field, well away from the launch gate.
    const exit = pinball.exitHole;
    const exitPulse = 1 + Math.sin(now / 180) * .08;
    const exitGlow = context.createRadialGradient(exit.x, exit.y, 1, exit.x, exit.y, 45);
    exitGlow.addColorStop(0, "rgba(113,255,125,.12)");
    exitGlow.addColorStop(.45, "rgba(78,255,112,.2)");
    exitGlow.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = exitGlow;
    context.beginPath();
    context.arc(exit.x, exit.y, 45, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#010604";
    context.strokeStyle = "#71ff7d";
    context.lineWidth = 4;
    context.shadowColor = "#55ff68";
    context.shadowBlur = 17;
    context.beginPath();
    context.arc(exit.x, exit.y, exit.r * exitPulse, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.shadowBlur = 0;
    context.save();
    context.translate(exit.x, exit.y);
    context.rotate(now / 900);
    context.strokeStyle = "rgba(163,255,174,.65)";
    context.lineWidth = 2;
    for (let index = 0; index < 4; index += 1) {
      context.rotate(Math.PI / 2);
      context.beginPath();
      context.arc(0, 0, 17, -.65, .65);
      context.stroke();
    }
    context.restore();
    context.fillStyle = "#9dffa7";
    context.font = "900 8px ui-monospace, monospace";
    context.fillText("EXIT +25", exit.x, exit.y + 4);

    // Launch lane.
    context.fillStyle = "rgba(255, 214, 70, .075)";
    context.fillRect(353, 100, 34, 530);
    context.strokeStyle = "rgba(255, 219, 75, .78)";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(350, 98);
    context.lineTo(350, 630);
    context.stroke();
    context.fillStyle = "#ffe064";
    context.font = "800 8px ui-monospace, monospace";
    context.save();
    context.translate(377, 382);
    context.rotate(-Math.PI / 2);
    context.fillText("LAUNCH LANE", 0, 0);
    context.restore();
    for (let index = 0; index < 4; index += 1) {
      const arrowY = 170 + index * 92;
      const pulse = .22 + ((Math.sin(now / 220 - index * .85) + 1) / 2) * .48;
      context.fillStyle = `rgba(255, 224, 100, ${pulse})`;
      context.beginPath();
      context.moveTo(370, arrowY + 8);
      context.lineTo(377, arrowY);
      context.lineTo(384, arrowY + 8);
      context.closePath();
      context.fill();
    }

    // Side energy panels.
    [
      { x: 38, color: "#ff4655", label: "DANGER" },
      { x: 284, color: "#50c9ff", label: "OUTBREAK" }
    ].forEach((panel) => {
      context.fillStyle = `${panel.color}12`;
      roundedRectPath(context, panel.x, 174, 59, 184, 18);
      context.fill();
      context.strokeStyle = `${panel.color}55`;
      context.lineWidth = 2;
      context.stroke();
      context.save();
      context.translate(panel.x + 30, 266);
      context.rotate(-Math.PI / 2);
      context.fillStyle = `${panel.color}aa`;
      context.font = "800 7px ui-monospace, monospace";
      context.fillText(panel.label, 0, 0);
      context.restore();
    });

    pinball.rails.forEach((rail) => drawPinballRail(context, rail));
    pinball.targets.forEach((target) => drawPinballTarget(context, target));

    // Extra-attempt target.
    const bonus = pinball.bonusTarget;
    const bonusColor = bonus.collected ? "#35443e" : bonus.color;
    context.fillStyle = bonus.collected ? "#111820" : "#06140a";
    context.strokeStyle = bonusColor;
    context.lineWidth = 3;
    context.shadowColor = bonusColor;
    context.shadowBlur = bonus.collected ? 0 : 14;
    context.beginPath();
    context.arc(bonus.x, bonus.y, bonus.r, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.shadowBlur = 0;
    context.fillStyle = bonus.collected ? "#63716b" : "#a0ffab";
    context.font = "900 7px ui-monospace, monospace";
    context.fillText("+1 TRY", bonus.x, bonus.y + 3);

    // Pegs.
    pinball.pegs.forEach((peg, index) => {
      const color = index % 2 ? "#54caff" : "#ff5060";
      context.fillStyle = color;
      context.shadowColor = color;
      context.shadowBlur = 10;
      context.beginPath();
      context.arc(peg.x, peg.y, peg.r, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "#ffffff";
      context.beginPath();
      context.arc(peg.x - 1.5, peg.y - 2, Math.max(1, peg.r * .24), 0, Math.PI * 2);
      context.fill();
    });
    context.shadowBlur = 0;

    // Lower drain zones.
    context.fillStyle = "rgba(255, 48, 62, .1)";
    roundedRectPath(context, 31, 603, 72, 88, 13);
    context.fill();
    roundedRectPath(context, 277, 603, 72, 88, 13);
    context.fill();
    context.strokeStyle = "rgba(255, 66, 78, .65)";
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = "rgba(255, 91, 100, .82)";
    context.font = "800 7px ui-monospace, monospace";
    context.fillText("DRAIN", 67, 680);
    context.fillText("DRAIN", 313, 680);
    context.fillStyle = "rgba(255, 45, 59, .14)";
    context.beginPath();
    context.moveTo(181, 665);
    context.lineTo(210, 705);
    context.lineTo(239, 665);
    context.closePath();
    context.fill();
    context.fillStyle = "rgba(255, 103, 111, .7)";
    context.fillText("DRAIN", 210, 697);

    drawPinballFlipper(context, true);
    drawPinballFlipper(context, false);

    // Trail and particles.
    [...pinball.trail].reverse().forEach((point, index, list) => {
      const alpha = ((index + 1) / list.length) * .24;
      context.fillStyle = `rgba(166, 222, 255, ${alpha})`;
      context.beginPath();
      context.arc(point.x, point.y, 1 + index * .13, 0, Math.PI * 2);
      context.fill();
    });
    pinball.particles.forEach((particle) => {
      context.globalAlpha = Math.max(0, particle.life);
      context.fillStyle = particle.color;
      context.shadowColor = particle.color;
      context.shadowBlur = 8;
      context.fillRect(particle.x, particle.y, particle.size, particle.size);
    });
    context.globalAlpha = 1;
    context.shadowBlur = 0;

    // Ball.
    const ball = pinball.ball;
    const ballGradient = context.createRadialGradient(ball.x - 3, ball.y - 4, 1, ball.x, ball.y, ball.r + 4);
    ballGradient.addColorStop(0, "#ffffff");
    ballGradient.addColorStop(.28, "#d7edff");
    ballGradient.addColorStop(.62, "#778ca4");
    ballGradient.addColorStop(1, "#1c2733");
    context.fillStyle = ballGradient;
    context.strokeStyle = "rgba(255,255,255,.72)";
    context.lineWidth = 1;
    context.shadowColor = "#ffffff";
    context.shadowBlur = 15;
    context.beginPath();
    context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.shadowBlur = 0;

    if (pinball.flash > 0) {
      context.fillStyle = `rgba(255,255,255,${pinball.flash * .115})`;
      context.fillRect(0, 0, width, height);
    }
    context.restore();
  }

  function pinballFrame(time) {
    pinball.frame = 0;
    if (!pinball.open) return;
    const elapsed = Math.min(40, Math.max(0, time - (pinball.lastTime || time)));
    pinball.lastTime = time;
    pinball.accumulator += elapsed;
    while (pinball.accumulator >= 8.3333) {
      updatePinballPhysics(8.3333);
      pinball.accumulator -= 8.3333;
    }
    drawPinball();
    pinball.frame = requestAnimationFrame(pinballFrame);
  }

  function bindPinballHold(button, key) {
    if (!button) return;
    const press = (event) => {
      event.preventDefault();
      button.setPointerCapture?.(event.pointerId);
      pinball[key] = true;
      pinballTone(125, .025, .012, "square");
    };
    const release = (event) => {
      event.preventDefault();
      pinball[key] = false;
    };
    button.addEventListener("pointerdown", press);
    button.addEventListener("pointerup", release);
    button.addEventListener("pointercancel", release);
    button.addEventListener("lostpointercapture", release);
  }

  function handlePinballOverlayAction() {
    if (pinball.overlayAction === "signin") {
      setPinballOpen(false);
      setLogin(true);
      return;
    }
    if (pinball.overlayAction === "retryStatus") {
      refreshPinballStatus(true);
      return;
    }
    if (pinball.overlayAction === "retryFinish") {
      submitPinballFinish();
      return;
    }
    if (pinball.overlayAction === "buy") {
      buyPinballAttempt();
      return;
    }
    if (pinball.overlayAction === "launch") {
      launchPinballBall();
      return;
    }
    if (pinball.overlayAction === "start") requestPinballStart();
  }

  function setupPinball() {
    const launchTile = $("#pinballLaunch");
    const modal = $("#pinballModal");
    if (!launchTile || !modal) return;

    pinball.open = false;
    document.body.classList.remove("pinball-open");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    launchTile.addEventListener("click", () => setPinballOpen(true));
    $("#pinballClose")?.addEventListener("click", () => setPinballOpen(false));
    modal.addEventListener("click", (event) => {
      if (event.target === modal) setPinballOpen(false);
    });
    $("#pinballStart")?.addEventListener("click", handlePinballOverlayAction);
    $("#pinballBallLaunch")?.addEventListener("click", launchPinballBall);
    $("#pinballBuy")?.addEventListener("click", buyPinballAttempt);
    $$("[data-pinball-info]").forEach((button) => {
      button.addEventListener("click", () => setPinballInfo(true, button.dataset.pinballInfo));
    });
    $$("[data-pinball-info-tab]").forEach((button) => {
      button.addEventListener("click", () => setPinballInfo(true, button.dataset.pinballInfoTab));
    });
    $$("[data-close-pinball-info]").forEach((button) => {
      button.addEventListener("click", () => setPinballInfo(false));
    });
    bindPinballHold($("#pinballLeft"), "leftPressed");
    bindPinballHold($("#pinballRight"), "rightPressed");

    window.addEventListener("keydown", (event) => {
      if (!pinball.open) return;
      if (["ArrowLeft", "a", "A"].includes(event.key)) {
        event.preventDefault();
        pinball.leftPressed = true;
      }
      if (["ArrowRight", "d", "D"].includes(event.key)) {
        event.preventDefault();
        pinball.rightPressed = true;
      }
      if (event.key === " ") {
        event.preventDefault();
        launchPinballBall();
      }
      if (event.key === "Escape") {
        event.preventDefault();
        if ($("#pinballInfoSheet")?.classList.contains("is-open")) setPinballInfo(false);
        else setPinballOpen(false);
      }
    });
    window.addEventListener("keyup", (event) => {
      if (["ArrowLeft", "a", "A"].includes(event.key)) pinball.leftPressed = false;
      if (["ArrowRight", "d", "D"].includes(event.key)) pinball.rightPressed = false;
    });
    updatePinballHud();
    drawPinball();
  }

  function lvlSkinById(skinId) {
    return LVL_SKINS.find((skin) => skin.skinId === skinId) || LVL_SKINS[0];
  }

  function lvlSkinImage(skinOrId) {
    const skin = typeof skinOrId === "string" ? lvlSkinById(skinOrId) : (skinOrId || LVL_SKINS[0]);
    return String(skin.preview || `assets/skins/${skin.skinId}.webp`);
  }

  function decorateLvlSkinImage(image, skinOrId) {
    if (!image) return;
    const skin = typeof skinOrId === "string" ? lvlSkinById(skinOrId) : (skinOrId || LVL_SKINS[0]);
    image.src = lvlSkinImage(skin);
    image.alt = skin.name;
    image.dataset.skinId = skin.skinId;
    image.classList.add("lvl-skin-art");
  }

  function lvlCategoryIcon(category) {
    const key=String(category||"");
    if (key.startsWith("wsound_")) return "♪";
    return ({
      upgrades:"↑", crate:"✚", prefix:"TAG", prefcolor:"◐", skin:"◉", skincolor:"◈",
      crit:"✦", minimap:"▦", wsound:"♪", knife:"KNF", ability:"⚡",
      sniper_shape:"◎", sniper_color:"◉"
    })[key] || "◇";
  }

  function lvlKnifeById(knifeId) {
    return LVL_KNIVES.find((knife) => knife.knifeId === String(knifeId || "")) || null;
  }

  function lvlKnifeCategory(bootstrap = lvlReadOnlyData()) {
    return lvlEffectiveShopCategories(bootstrap).find((cat) => String(cat?.key || "") === "knife") || null;
  }

  function actualLvlKnifeId(bootstrap = lvlReadOnlyData()) {
    const raw = String(bootstrap?.settings?.actual?.knife || "");
    return lvlKnifeById(raw) ? raw : "";
  }

  function lvlKnifeSnapshot(knife, bootstrap = lvlReadOnlyData()) {
    const live = lvlKnifeCategory(bootstrap)?.items?.find((item) => String(item?.itemId || "") === knife.knifeId) || null;
    const role = String(bootstrap?.profile?.role || authState.account?.role || "").toUpperCase();
    const adminOnly = live?.adminOnly === true || knife.adminOnly === true;
    const available = live ? live.available !== false : (!adminOnly || role === "ADMIN");
    const owned = adminOnly && available ? true : live?.owned === true;
    return {
      ...knife,
      ru: String(live?.itemRu || knife.ru),
      en: String(live?.itemEn || knife.en),
      price: Math.max(0, Number(live?.price ?? knife.price) || 0),
      adminOnly,
      available,
      owned,
      active: owned && lvlEquipmentIsOn(bootstrap, "knife", knife.knifeId)
    };
  }

  function lvlDurationLabel(seconds) {
    const sec=Math.max(0,Math.floor(Number(seconds)||0));
    if (!sec) return "";
    const h=Math.floor(sec/3600);
    const m=Math.max(1,Math.ceil((sec%3600)/60));
    if (h>0) return language === "ru" ? `${h}ч ${m}м` : `${h}h ${m}m`;
    return language === "ru" ? `${m}м` : `${m}m`;
  }

  function lvlItemVisual(category, itemId) {
    const wrap = document.createElement("div");
    wrap.className = "lvl-shop-item__visual";
    if (category === "skin") {
      const skin = LVL_SKINS.find((entry) => entry.skinId === String(itemId || ""));
      if (skin) {
        const image = document.createElement("img");
        decorateLvlSkinImage(image, skin);
        image.loading = "lazy";
        image.decoding = "async";
        wrap.appendChild(image);
        return wrap;
      }
    }
    if (category === "knife") {
      const image = document.createElement("img");
      image.src = `assets/knives/${String(itemId || "knife")}.webp`;
      image.alt = String(itemId || "knife");
      image.loading = "lazy"; image.decoding = "async";
      image.classList.add("lvl-knife-art");
      wrap.appendChild(image);
      return wrap;
    }
    if (category === "skincolor" || category === "prefcolor") {
      const swatch = document.createElement("i");
      swatch.className = "lvl-shop-swatch";
      swatch.style.background = String(itemId || "#3da7ff");
      wrap.appendChild(swatch);
      return wrap;
    }
    wrap.textContent = lvlCategoryIcon(category);
    return wrap;
  }

  function lvlBootstrapEndpoint() {
    return String(config.lvlBootstrapEndpoint || "").replace(/\/+$/, "");
  }

  function lvlReadOnlyData() {
    return lvlHubState.bootstrap && typeof lvlHubState.bootstrap === "object" ? lvlHubState.bootstrap : null;
  }

  function actualLvlSkinId() {
    const bootstrap = lvlReadOnlyData();
    if (bootstrap?.sync?.ready) {
      const bootstrapId = String(bootstrap?.skin?.activeId || "");
      return LVL_SKINS.some((skin) => skin.skinId === bootstrapId) ? bootstrapId : "";
    }
    const synced = String(settingsState.data?.snapshot?.modules?.lvl?.values?.ctSkin || "");
    return LVL_SKINS.some((skin) => skin.skinId === synced) ? synced : "";
  }

  function previewLvlSkinId() {
    if (LVL_SKINS.some((skin) => skin.skinId === lvlHubState.previewSkinId)) return lvlHubState.previewSkinId;
    const actual = actualLvlSkinId();
    return LVL_SKINS.some((skin) => skin.skinId === actual) ? actual : "sas";
  }

  function lvlLocale() {
    return language === "ru" ? "ru-RU" : "en-US";
  }

  function lvlLocalized(ru, en, fallback = "—") {
    return String((language === "ru" ? ru : en) || ru || en || fallback);
  }

  function lvlFormatValue(value) {
    if (Array.isArray(value)) return value.length ? value.join(", ") : "—";
    if (value === undefined || value === null || value === "") return "—";
    return String(value);
  }

  function lvlFormatTime(value) {
    const seconds = Math.max(0, integer(value, 0, 0, 31536000));
    if (!seconds) return "—";
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (days) return `${days}${language === "ru" ? "д" : "d"} ${hours}${t("hoursShort")}`;
    if (hours) return `${hours}${t("hoursShort")} ${minutes}${t("minutesShort")}`;
    if (minutes) return `${minutes}${t("minutesShort")}`;
    return `${seconds}${t("secondsShort")}`;
  }

  function lvlHumanSyncTime(timestamp) {
    const value = Number(timestamp || 0);
    if (!Number.isFinite(value) || value <= 0) return "—";
    try {
      return new Date(value).toLocaleString(lvlLocale(), { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" });
    } catch {
      return "—";
    }
  }

  function lvlEmptyState(title, text = "") {
    const box = document.createElement("div");
    box.className = "lvl-data-empty";
    const strong = document.createElement("strong");
    strong.textContent = title;
    box.appendChild(strong);
    if (text) {
      const p = document.createElement("p");
      p.textContent = text;
      box.appendChild(p);
    }
    return box;
  }

  function lvlSectionHeader(eyebrow, title, meta = "") {
    const header = document.createElement("header");
    header.className = "lvl-data-head";
    const copy = document.createElement("div");
    const small = document.createElement("small");
    const strong = document.createElement("strong");
    small.textContent = eyebrow;
    strong.textContent = title;
    copy.append(small, strong);
    header.appendChild(copy);
    if (meta) {
      const span = document.createElement("span");
      span.textContent = meta;
      header.appendChild(span);
    }
    return header;
  }

  function lvlChip(label, value = "") {
    const chip = document.createElement("span");
    chip.className = "lvl-data-chip";
    const b = document.createElement("b");
    b.textContent = label;
    chip.appendChild(b);
    if (value) {
      const i = document.createElement("i");
      i.textContent = value;
      chip.appendChild(i);
    }
    return chip;
  }

  function lvlSettingOptionLabel(key, id, bootstrap = lvlReadOnlyData()) {
    if (Array.isArray(id)) return id.map((value) => lvlSettingOptionLabel(key, value, bootstrap)).filter(Boolean).join(", ") || "—";
    const raw = String(id || "");
    if (!raw) return t("notSelected");
    const list = bootstrap?.settings?.options?.[key];
    const item = Array.isArray(list) ? list.find((entry) => String(entry?.id || "") === raw) : null;
    return item ? lvlLocalized(item.ru, item.en, raw) : raw;
  }

  function lvlSettingDisplayValue(key, value, bootstrap = lvlReadOnlyData()) {
    if (key === "language") return String(value || "—").toUpperCase();
    if (key === "sniperCrosshairEnabled") return value === true ? lvlLocalized("ВКЛ","ON") : lvlLocalized("ВЫКЛ","OFF");
    if (["soundMuteAll","soundMuteShot","soundMuteWelcome","soundMuteKnife","soundMuteDeath"].includes(key)) {
      return value === true ? lvlLocalized("ВЫКЛ","OFF") : lvlLocalized("ВКЛ","ON");
    }
    if (key === "soundServerMuted") return value === true ? lvlLocalized("ЗАГЛУШЕНО","MUTED") : lvlLocalized("ЗВУК ВКЛ","SOUND ON");
    return lvlSettingOptionLabel(key, value, bootstrap);
  }

  async function fetchLvlBootstrap(force = false) {
    const endpoint = lvlBootstrapEndpoint();
    if (!authState.sessionToken) {
      lvlHubState.bootstrap = null;
      lvlHubState.error = "login_required";
      lvlHubState.loading = false;
      renderLvlHub();
      return null;
    }
    if (!endpoint) {
      lvlHubState.error = "endpoint_missing";
      renderLvlHub();
      return null;
    }
    if (!force && lvlHubState.bootstrap && Date.now() - lvlHubState.loadedAt < 60000) {
      renderLvlHub();
      return lvlHubState.bootstrap;
    }
    if (lvlHubState.loading) return lvlHubState.bootstrap;
    lvlHubState.loading = true;
    lvlHubState.error = "";
    renderLvlHub();
    try {
      const response = await fetch(endpoint, {
        method: "GET",
        cache: "no-store",
        headers: { Accept: "application/json", Authorization: `Bearer ${authState.sessionToken}` }
      });
      let data = {};
      try { data = await response.json(); } catch {}
      if (!response.ok || data.ok === false) {
        const error = new Error(String(data.error || `HTTP_${response.status}`));
        error.status = response.status;
        throw error;
      }
      lvlHubState.bootstrap = data;
      lvlHubState.loadedAt = Date.now();
      lvlHubState.error = "";
      if (!lvlHubState.previewTouched) {
        const incomingSkin = String(data?.skin?.activeId || "");
        lvlHubState.previewSkinId = LVL_SKINS.some((skin) => skin.skinId === incomingSkin) ? incomingSkin : "sas";
      }
      const profile = data.profile && typeof data.profile === "object" ? data.profile : null;
      if (profile && authState.account) {
        authState.profile = normalizeAuthProfile({ ...(authState.profile || {}), ...profile }, authState.account.username, authState.account.role);
        syncCurrentAvatarAcrossViews(authState.profile.avatarId);
        renderAuth();
      }
      return data;
    } catch (error) {
      lvlHubState.error = error.status === 401 ? "login_required" : String(error.message || "bootstrap_failed");
      if (error.status === 401) {
        lvlHubState.bootstrap = null;
        lvlHubState.loadedAt = 0;
      }
      return null;
    } finally {
      lvlHubState.loading = false;
      renderLvlHub();
    }
  }

  function setLvlHubTab(tab) {
    const allowed = new Set(["overview", "skins", "knives", "shop", "market", "inventory", "friends", "battlepass", "settings"]);
    lvlHubState.tab = allowed.has(tab) ? tab : "overview";
    let activeButton=null;
    $$('[data-lvl-tab]').forEach((button) => {
      const on=button.dataset.lvlTab === lvlHubState.tab;
      button.classList.toggle("is-active", on);
      if (on) activeButton=button;
    });
    $$('[data-lvl-panel]').forEach((panel) => panel.classList.toggle("is-active", panel.dataset.lvlPanel === lvlHubState.tab));
    const rail=activeButton?.closest?.(".lvl-hub-tabs");
    if (rail && rail.scrollWidth > rail.clientWidth + 4) {
      const target=Math.max(0,activeButton.offsetLeft-(rail.clientWidth-activeButton.offsetWidth)/2);
      if (Math.abs(rail.scrollLeft-target)>18) rail.scrollTo({left:target,behavior:"smooth"});
    }
  }

  function renderLvlSyncBadge() {
    const badge = $("#lvlHubRefresh");
    if (!badge) return;
    badge.disabled = lvlHubState.loading;
    badge.classList.toggle("is-loading", lvlHubState.loading);
    badge.classList.toggle("is-error", Boolean(lvlHubState.error && lvlHubState.error !== "login_required"));
    badge.classList.toggle("is-ready", Boolean(lvlReadOnlyData()?.sync?.ready && !lvlHubState.error));
    if (lvlHubState.loading) badge.textContent = t("bootstrapLoading");
    else if (!authState.sessionToken || lvlHubState.error === "login_required") badge.textContent = t("bootstrapLogin");
    else if (lvlHubState.error) badge.textContent = t("bootstrapError");
    else if (!lvlReadOnlyData()?.sync?.ready) badge.textContent = t("bootstrapWaiting");
    else badge.textContent = t("bootstrapReady");
    const syncedAt = lvlReadOnlyData()?.sync?.syncedAt;
    badge.title = syncedAt ? `${t("lastSync")}: ${lvlHumanSyncTime(syncedAt)}` : t("refresh");
  }

  function lvlOwnedSkinSet(bootstrap = lvlReadOnlyData()) {
    const ids = Array.isArray(bootstrap?.skin?.ownedIds) ? bootstrap.skin.ownedIds.map(String) : [];
    const owned = new Set(ids);
    const activeId = actualLvlSkinId();
    if (activeId) owned.add(activeId);
    return owned;
  }

  function lvlPendingSkinId(bootstrap = lvlReadOnlyData()) {
    if (!bootstrap?.sync?.pending) return "";
    const desiredId = String(bootstrap?.settings?.desired?.ctSkin || "");
    return LVL_SKINS.some((skin) => skin.skinId === desiredId) && desiredId !== actualLvlSkinId() ? desiredId : "";
  }

  const LVL_MANAGED_FIELDS = new Set([
    "prefix","prefixColor","ctSkin","skinColor","critBullet","minimap","weaponSounds","knife",
    "abilities","sniperCrosshairShape","sniperCrosshairColor","sniperCrosshairEnabled"
  ]);

  function lvlEquipmentField(categoryOrField) {
    const key = String(categoryOrField || "");
    if (key.startsWith("wsound_")) return "weaponSounds";
    const mapped = LVL_SHOP_OPTION_KEYS[key] || key;
    return LVL_MANAGED_FIELDS.has(mapped) ? mapped : "";
  }

  function lvlManagedSettingValue(bootstrap, categoryOrField) {
    const field = lvlEquipmentField(categoryOrField);
    if (!field) return "";
    const actual = bootstrap?.settings?.actual || {};
    const desired = bootstrap?.settings?.desired || {};
    if (bootstrap?.sync?.pending && Object.prototype.hasOwnProperty.call(desired, field)) return desired[field];
    return actual[field];
  }

  function lvlEquipmentIsOn(bootstrap, categoryOrField, itemId) {
    const field = lvlEquipmentField(categoryOrField);
    const id = String(itemId || "");
    if (!field || !id) return false;
    const value = lvlManagedSettingValue(bootstrap, field);
    if (field === "weaponSounds" || field === "abilities") return new Set(Array.isArray(value) ? value.map(String) : []).has(id);
    return String(value || "") === id;
  }

  function lvlEquipmentSwitch(isOn, busy, onToggle, label = "") {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `lvl-equip-switch${isOn ? " is-on" : ""}${busy ? " is-busy" : ""}`;
    button.setAttribute("role", "switch");
    button.setAttribute("aria-checked", String(isOn));
    button.setAttribute("aria-label", label || (isOn ? lvlLocalized("Выключить", "Disable") : lvlLocalized("Включить", "Enable")));
    button.disabled = busy;
    const track = document.createElement("span");
    const knob = document.createElement("i");
    track.appendChild(knob);
    const state = document.createElement("b");
    state.textContent = busy ? "…" : (isOn ? lvlLocalized("ВКЛ", "ON") : lvlLocalized("ВЫКЛ", "OFF"));
    button.append(track, state);
    button.addEventListener("click", () => onToggle(!isOn));
    return button;
  }

  async function setLvlEquipmentState(categoryOrField, itemId, enabled) {
    const field = lvlEquipmentField(categoryOrField);
    const id = String(itemId || "");
    if (!field || !id || lvlHubState.equipmentAction.busy) return false;
    if (!authState.sessionToken) { setLogin(true); return false; }
    const bootstrap = lvlReadOnlyData();
    if (!bootstrap?.sync?.ready) { toast(t("bootstrapWaiting")); return false; }

    let value;
    let patch={};
    if (field === "weaponSounds") {
      const current = new Set(Array.isArray(lvlManagedSettingValue(bootstrap, field)) ? lvlManagedSettingValue(bootstrap, field).map(String) : []);
      if (enabled) {
        const slot=lvlSoundSlotForId(id);
        if (slot) {
          for (const existing of [...current]) if (lvlSoundSlotForId(existing)===slot) current.delete(existing);
        }
        current.add(id);
      } else current.delete(id);
      value=[...current];
      patch[field]=value;
    } else if (field === "abilities") {
      const current = new Set(Array.isArray(lvlManagedSettingValue(bootstrap, field)) ? lvlManagedSettingValue(bootstrap, field).map(String) : []);
      if (enabled) current.add(id); else current.delete(id);
      value=[...current];
      patch[field]=value;
    } else if (field === "sniperCrosshairShape") {
      value=enabled ? id : "";
      patch[field]=value;
      patch.sniperCrosshairEnabled=enabled;
    } else {
      value = enabled ? id : "";
      patch[field]=value;
    }

    const key = `${field}|${id}`;
    lvlHubState.equipmentAction = { busy: true, key, error: "" };
    renderLvlHub();
    try {
      const saved = await settingsRequest("/me", {
        method: "POST",
        body: { desired: { modules: { lvl: patch } } }
      });

      if (lvlHubState.bootstrap?.settings) {
        lvlHubState.bootstrap.settings.desired = { ...(lvlHubState.bootstrap.settings.desired || {}), ...patch };
        lvlHubState.bootstrap.sync = {
          ...(lvlHubState.bootstrap.sync || {}),
          pending: true,
          revision: Number(saved?.revision || lvlHubState.bootstrap.sync?.revision || 0)
        };
      }
      renderLvlHub();

      if (!saved?.online) {
        toast(enabled
          ? lvlLocalized("СОХРАНЕНО — ВКЛЮЧИТСЯ ПРИ ВХОДЕ", "SAVED — WILL ENABLE ON NEXT JOIN")
          : lvlLocalized("СОХРАНЕНО — ВЫКЛЮЧИТСЯ ПРИ ВХОДЕ", "SAVED — WILL DISABLE ON NEXT JOIN"));
        await fetchLvlBootstrap(true);
        return true;
      }

      toast(enabled ? lvlLocalized("СОХРАНЕНО — ВКЛЮЧАЮ", "SAVED — ENABLING") : lvlLocalized("СОХРАНЕНО — ВЫКЛЮЧАЮ", "SAVED — DISABLING"));
      const revision = Number(saved?.revision || 0);
      const started = Date.now();
      let applied = false;
      while (revision > 0 && Date.now() - started < 18000) {
        await new Promise((resolve) => setTimeout(resolve, 900));
        const current = await settingsRequest("/me", { method: "GET" });
        settingsState.data = current;
        if (current?.status === "failed") throw new Error(String(current?.lastError || "settings_failed"));
        if (Number(current?.appliedRevision || 0) >= revision) { applied = true; break; }
      }
      await fetchLvlBootstrap(true);
      toast(applied
        ? (enabled ? lvlLocalized("ВКЛЮЧЕНО ✓", "ENABLED ✓") : lvlLocalized("ВЫКЛЮЧЕНО ✓", "DISABLED ✓"))
        : lvlLocalized("СОХРАНЕНО — ОЖИДАЕТ ПРИМЕНЕНИЯ", "SAVED — WAITING TO APPLY"));
      return true;
    } catch (error) {
      const code = String(error?.message || "settings_failed");
      lvlHubState.equipmentAction.error = code;
      if (["invalid_session", "unauthorized"].includes(code)) { clearAuth(); setLogin(true); }
      else if (code.includes("not_owned")) toast(lvlLocalized("ПРЕДМЕТ БОЛЬШЕ НЕ ПРИНАДЛЕЖИТ ИГРОКУ", "ITEM IS NO LONGER OWNED"));
      else toast(lvlLocalized("НЕ УДАЛОСЬ ИЗМЕНИТЬ СОСТОЯНИЕ", "COULD NOT CHANGE ITEM STATE"));
      await fetchLvlBootstrap(true);
      return false;
    } finally {
      lvlHubState.equipmentAction = { busy: false, key: "", error: lvlHubState.equipmentAction.error || "" };
      renderLvlHub();
    }
  }

  async function selectOwnedLvlSkin(skinId) {
    const id = String(skinId || "");
    const skin = LVL_SKINS.find((item) => item.skinId === id);
    if (!skin || lvlHubState.skinAction.busy) return;
    if (!authState.sessionToken) { setLogin(true); return; }

    const bootstrap = lvlReadOnlyData();
    if (!bootstrap?.sync?.ready) {
      toast(t("bootstrapWaiting"));
      return;
    }

    const owned = lvlOwnedSkinSet(bootstrap);
    if (!owned.has(id)) {
      lvlHubState.previewSkinId = id;
      lvlHubState.previewTouched = true;
      renderLvlHub();
      toast(t("skinNotOwned"));
      return;
    }

    if (actualLvlSkinId() === id && !bootstrap?.sync?.pending) {
      lvlHubState.previewSkinId = id;
      lvlHubState.previewTouched = false;
      renderLvlHub();
      return;
    }

    lvlHubState.previewSkinId = id;
    lvlHubState.previewTouched = true;
    lvlHubState.skinAction = { busy: true, skinId: id, error: "" };
    renderLvlHub();

    let revision = 0;
    try {
      // /settings/me merges this partial patch with the existing desired settings.
      // The Worker cannot grant ownership; LVL_MOD checks Owns(rec, 3, id) again.
      const saved = await settingsRequest("/me", {
        method: "POST",
        body: { desired: { modules: { lvl: { ctSkin: id } } } }
      });
      revision = Number(saved?.revision || 0);

      if (!saved?.online) {
        lvlHubState.previewTouched = false;
        await fetchLvlBootstrap(true);
        toast(t("skinQueued"));
        return;
      }

      const started = Date.now();
      let applied = false;
      while (Date.now() - started < 20000) {
        await new Promise((resolve) => setTimeout(resolve, 900));
        const current = await settingsRequest("/me", { method: "GET" });
        settingsState.data = current;
        if (current?.status === "failed") {
          const error = new Error(String(current?.lastError || "settings_failed"));
          error.data = current;
          throw error;
        }
        if (revision > 0 && Number(current?.appliedRevision || 0) >= revision) {
          applied = true;
          break;
        }
      }

      lvlHubState.previewTouched = false;
      await fetchLvlBootstrap(true);
      if (applied && actualLvlSkinId() === id) toast(t("skinApplied"));
      else toast(t("skinPending"));
    } catch (error) {
      const message = String(error?.message || "");
      lvlHubState.skinAction.error = message;
      if (["invalid_session", "unauthorized"].includes(message)) {
        clearAuth();
        setLogin(true);
      } else if (message.includes("not_owned_ctSkin")) {
        toast(t("skinNotOwned"));
        await fetchLvlBootstrap(true);
      } else {
        toast(t("skinSelectFailed"));
      }
    } finally {
      lvlHubState.skinAction = { busy: false, skinId: "", error: lvlHubState.skinAction.error || "" };
      renderLvlHub();
    }
  }

  function skinBuyConfirmed(skinId) {
    return lvlHubState.skinBuyConfirm.skinId === skinId && Date.now() < Number(lvlHubState.skinBuyConfirm.until || 0);
  }

  function armSkinPurchase(skin) {
    lvlHubState.previewSkinId = skin.skinId;
    lvlHubState.previewTouched = true;
    lvlHubState.skinBuyConfirm = { skinId: skin.skinId, until: Date.now() + 6500 };
    renderLvlHub();
    toast(t("skinBuyTapAgain"));
  }

  async function buyLvlSkin(skinId) {
    const id = String(skinId || "");
    const skin = LVL_SKINS.find((item) => item.skinId === id);
    if (!skin || lvlHubState.skinAction.busy) return;
    if (!authState.sessionToken) { setLogin(true); return; }
    const bootstrap = lvlReadOnlyData();
    if (!bootstrap?.sync?.ready) { toast(t("bootstrapWaiting")); return; }
    if (lvlOwnedSkinSet(bootstrap).has(id)) {
      lvlHubState.skinBuyConfirm = { skinId: "", until: 0 };
      void selectOwnedLvlSkin(id);
      return;
    }

    // First tap previews and arms a short confirmation window. Second tap buys.
    if (!skinBuyConfirmed(id)) {
      armSkinPurchase(skin);
      return;
    }

    lvlHubState.skinBuyConfirm = { skinId: "", until: 0 };
    lvlHubState.previewSkinId = id;
    lvlHubState.previewTouched = true;
    lvlHubState.skinAction = { busy: true, skinId: id, mode: "buy", error: "" };
    renderLvlHub();

    try {
      const created = await controlRequest("/command", {
        method: "POST",
        body: { action: "buy_skin", skinId: id }
      });
      const commandId = String(created?.commandId || "");
      if (!commandId) throw new Error("buy_command_missing");
      const result = await waitControlResult(commandId);
      if (!result.ok) {
        const reason = String(result?.data?.result || (result.timeout ? "control_timeout" : "buy_failed"));
        throw new Error(reason);
      }

      const resultText = String(result?.data?.result || "");
      // The bridge queues an immediate fresh game snapshot after a successful purchase.
      let synced = false;
      for (let attempt = 0; attempt < 12; attempt += 1) {
        if (attempt) await new Promise((resolve) => setTimeout(resolve, 850));
        await fetchLvlBootstrap(true);
        const fresh = lvlReadOnlyData();
        if (lvlOwnedSkinSet(fresh).has(id)) {
          synced = true;
          break;
        }
      }
      lvlHubState.previewTouched = false;
      if (resultText.startsWith("already_owned")) toast(t("skinAlreadyOwned"));
      else if (synced) toast(t("skinBought"));
      else toast(t("skinPending"));
    } catch (error) {
      const message = String(error?.message || "buy_failed");
      lvlHubState.skinAction.error = message;
      if (["invalid_session", "unauthorized"].includes(message)) {
        clearAuth(); setLogin(true);
      } else if (message.includes("player_offline")) {
        toast(t("skinBuyOffline"));
      } else if (message.includes("not_enough_tokens")) {
        toast(t("skinBuyInsufficient"));
      } else if (message.includes("invalid_skin")) {
        toast(t("skinBuyFailed"));
      } else if (message.includes("command_rate_limited") || message.includes("economy_busy")) {
        toast(lvlLocalized("Другая операция с токенами уже выполняется. Дождитесь её завершения.", "Another token operation is already running. Wait for it to finish."));
      } else if (message.includes("invalid_operation_id") || message.includes("operation_mismatch")) {
        toast(lvlLocalized("Защитная проверка операции не пройдена. Обновите страницу.", "Transaction security check failed. Refresh the page."));
      } else {
        toast(t("skinBuyFailed"));
      }
      await fetchLvlBootstrap(true);
    } finally {
      lvlHubState.skinAction = { busy: false, skinId: "", mode: "", error: lvlHubState.skinAction.error || "" };
      renderLvlHub();
    }
  }

  function renderLvlSkinGallery() {
    const gallery = $("#lvlSkinGallery");
    if (!gallery) return;
    const bootstrap = lvlReadOnlyData();
    const actualId = actualLvlSkinId();
    const managedId = String(lvlManagedSettingValue(bootstrap, "ctSkin") || "");
    const previewId = previewLvlSkinId();
    const pendingId = lvlPendingSkinId(bootstrap);
    const owned = lvlOwnedSkinSet(bootstrap);
    const actionBusy = Boolean(lvlHubState.skinAction?.busy || lvlHubState.equipmentAction?.busy);
    gallery.replaceChildren();
    LVL_SKINS.forEach((skin, index) => {
      const isActive = skin.skinId === managedId;
      const isPending = skin.skinId === pendingId;
      const isPreview = skin.skinId === previewId && !isActive && !isPending;
      const isOwned = owned.has(skin.skinId);
      const skinActionBusy = Boolean(lvlHubState.skinAction?.busy && lvlHubState.skinAction.skinId === skin.skinId);
      const equipmentActionBusy = Boolean(lvlHubState.equipmentAction?.busy && lvlHubState.equipmentAction.key === `ctSkin|${skin.skinId}`);
      const isApplying = skinActionBusy || equipmentActionBusy;
      const isBuying = skinActionBusy && lvlHubState.skinAction.mode === "buy";
      const isBuyConfirm = !isOwned && skinBuyConfirmed(skin.skinId);
      const card = document.createElement("button");
      card.type = "button";
      card.className = `skin-card${isActive ? " is-active" : ""}${isPreview ? " is-previewing" : ""}${isPending ? " is-pending" : ""}${isApplying ? " is-applying" : ""}${isBuying ? " is-buying" : ""}${isBuyConfirm ? " is-buy-confirm" : ""}`;
      card.dataset.skinPreview = skin.skinId;
      card.disabled = actionBusy;

      const visual = document.createElement("span");
      visual.className = "skin-card__visual";
      const img = document.createElement("img");
      decorateLvlSkinImage(img, skin);
      img.loading = "lazy";
      img.decoding = "async";
      img.width = 160;
      img.height = 200;
      const number = document.createElement("i");
      number.textContent = String(index + 1).padStart(2, "0");
      visual.append(img, number);

      const copy = document.createElement("span");
      copy.className = "skin-card__copy";
      const status = document.createElement("small");
      status.textContent = isActive ? t("active") : (isPending ? t("skinPending") : (isOwned ? t("owned") : t("locked")));
      const name = document.createElement("strong");
      name.textContent = skin.name;
      const price = document.createElement("em");
      price.textContent = `${t("price")}: ${skin.price.toLocaleString(lvlLocale())} ${t("tokens")}`;
      copy.append(status, name, price);

      const action = document.createElement("b");
      action.textContent = isBuying ? t("skinBuying") : (isApplying ? t("skinApplying") : (isActive ? lvlLocalized("ВЫКЛЮЧИТЬ", "DISABLE") : (isPending ? t("skinPending") : (isOwned ? t("selectSkinAction") : (isBuyConfirm ? `${t("confirmSkinPurchase")} · ${skin.price.toLocaleString(lvlLocale())}` : `${t("buySkinAction")} · ${skin.price.toLocaleString(lvlLocale())}`)))));
      card.append(visual, copy, action);
      card.addEventListener("click", () => {
        if (isActive) {
          void setLvlEquipmentState("ctSkin", skin.skinId, false);
          return;
        }
        if (isOwned) {
          void selectOwnedLvlSkin(skin.skinId);
          return;
        }
        void buyLvlSkin(skin.skinId);
      });
      gallery.appendChild(card);
    });
  }

  function renderLvlKnifeGallery() {
    const root = $("#lvlKnifeGallery");
    if (!root) return;
    root.replaceChildren();
    const bootstrap = lvlReadOnlyData();
    const globallyBusy = Boolean(lvlHubState.shopAction?.busy || lvlHubState.equipmentAction?.busy);

    for (const baseKnife of LVL_KNIVES) {
      const knife = lvlKnifeSnapshot(baseKnife, bootstrap);
      const itemKey = `knife|${knife.knifeId}`;
      const shopBusy = Boolean(lvlHubState.shopAction?.busy && lvlHubState.shopAction.key === itemKey);
      const equipBusy = Boolean(lvlHubState.equipmentAction?.busy && lvlHubState.equipmentAction.key === itemKey);
      const card = document.createElement("article");
      card.className = `knife-card${knife.owned ? " is-owned" : ""}${knife.active ? " is-active" : ""}${knife.adminOnly ? " is-admin" : ""}${shopBusy || equipBusy ? " is-busy" : ""}`;

      const visual = document.createElement("div");
      visual.className = "knife-card__visual";
      const image = document.createElement("img");
      image.src = knife.preview;
      image.alt = lvlLocalized(knife.ru, knife.en, knife.knifeId);
      image.loading = "lazy";
      image.decoding = "async";
      image.width = 260;
      image.height = 170;
      image.className = "lvl-knife-art";
      visual.appendChild(image);
      if (knife.adminOnly) {
        const admin = document.createElement("span");
        admin.textContent = "ADMIN";
        visual.appendChild(admin);
      }

      const copy = document.createElement("div");
      copy.className = "knife-card__copy";
      const state = document.createElement("small");
      if (!knife.available) state.textContent = lvlLocalized("ТОЛЬКО ADMIN", "ADMIN ONLY");
      else if (knife.active) state.textContent = lvlLocalized("АКТИВЕН", "ACTIVE");
      else if (knife.adminOnly) state.textContent = lvlLocalized("ADMIN · БЕСПЛАТНО", "ADMIN · FREE");
      else if (knife.owned) state.textContent = lvlLocalized("КУПЛЕН · ВЫКЛ", "OWNED · OFF");
      else state.textContent = lvlLocalized("КУПИТЬ", "BUY");
      const title = document.createElement("strong");
      title.textContent = lvlLocalized(knife.ru, knife.en, knife.knifeId);
      const price = document.createElement("span");
      price.textContent = knife.adminOnly
        ? lvlLocalized("БЕСПЛАТНО · ADMIN ONLY", "FREE · ADMIN ONLY")
        : `${knife.price.toLocaleString(lvlLocale())} ${t("tokens")}`;
      copy.append(state, title, price);

      let action;
      if (!knife.available) {
        action = document.createElement("button");
        action.type = "button";
        action.className = "lvl-store-buy";
        action.disabled = true;
        action.textContent = lvlLocalized("НЕДОСТУПНО", "UNAVAILABLE");
      } else if (knife.owned) {
        action = lvlEquipmentSwitch(
          knife.active,
          globallyBusy,
          (next) => { void setLvlEquipmentState("knife", knife.knifeId, next); },
          `${lvlLocalized("Нож", "Knife")}: ${title.textContent}`
        );
        if (equipBusy) action.classList.add("is-busy");
      } else {
        action = document.createElement("button");
        action.type = "button";
        action.className = "lvl-store-buy knife-card__buy";
        action.disabled = globallyBusy;
        action.textContent = shopBusy ? lvlLocalized("ПОКУПКА...", "PURCHASING...") : lvlLocalized("КУПИТЬ", "BUY");
        action.addEventListener("click", async () => {
          const name = lvlLocalized(knife.ru, knife.en, knife.knifeId);
          const ok = window.confirm(lvlLocalized(
            `Купить «${name}» за ${knife.price.toLocaleString(lvlLocale())} токенов?`,
            `Buy “${name}” for ${knife.price.toLocaleString(lvlLocale())} tokens?`
          ));
          if (!ok) return;
          await runLvlShopAction("knife", knife.knifeId);
        });
      }

      card.append(visual, copy, action);
      root.appendChild(card);
    }
  }

  async function runLvlShopAction(category, itemId) {
    if (lvlHubState.shopAction.busy) return false;
    if (!authState.sessionToken) { setLogin(true); return false; }
    const previousSyncedAt = Number(lvlReadOnlyData()?.sync?.syncedAt || 0);
    lvlHubState.shopAction = { busy: true, key: `${category}|${itemId}`, error: "" };
    renderLvlShop();
    if (category === "knife") renderLvlKnifeGallery();
    try {
      const created = await controlRequest("/command", { method: "POST", body: { action: "shop_buy", category, itemId } });
      const commandId = String(created?.commandId || "");
      if (!commandId) throw new Error("command_missing");
      const result = await waitControlResult(commandId);
      if (!result.ok) throw new Error(String(result?.data?.result || (result.timeout ? "control_timeout" : "shop_failed")));
      for (let attempt = 0; attempt < 22; attempt += 1) {
        if (attempt) await new Promise((resolve) => setTimeout(resolve, 850));
        const fresh = await fetchLvlBootstrap(true);
        const syncedAt = Number(fresh?.sync?.syncedAt || 0);
        if (fresh?.sync?.ready && (previousSyncedAt === 0 || syncedAt > previousSyncedAt)) break;
      }
      toast(lvlLocalized("Товар куплен", "Item purchased"));
      return true;
    } catch (error) {
      const code = String(error?.message || "shop_failed");
      const map = {
        player_offline: lvlLocalized("Игровой мост временно не готов. Обновите страницу и повторите.", "The game bridge is temporarily unavailable. Refresh and retry."),
        invalid_action: lvlLocalized("На сервере загружен старый WEB bridge. Нужен v11.", "An old WEB bridge is loaded on the server. v11 is required."),
        not_for_sale: lvlLocalized("Этот предмет нельзя покупать как обычный товар", "This item is not sold as a regular store item"),
        invalid_item: lvlLocalized("Товар недоступен", "Item unavailable"),
        already_owned: lvlLocalized("Этот товар уже куплен", "You already own this item"),
        not_enough_tokens: lvlLocalized("Недостаточно токенов", "Not enough tokens"),
        shop_category_disabled: lvlLocalized("Этот раздел магазина временно выключен", "This shop category is temporarily disabled"),
        time_unavailable: lvlLocalized("Серверное время временно недоступно", "Server time is temporarily unavailable"),
        charges_full: lvlLocalized("Заряды авто-инвиза уже полные", "Auto-invis charges are already full"),
        command_rate_limited: lvlLocalized("Подождите секунду и повторите", "Wait a second and retry"),
        economy_busy: lvlLocalized("Другая операция с токенами уже выполняется. Дождитесь её завершения.", "Another token operation is already running. Wait for it to finish."),
        invalid_operation_id: lvlLocalized("Защитная проверка операции не пройдена. Обновите страницу.", "Transaction security check failed. Refresh the page."),
        operation_mismatch: lvlLocalized("Повтор операции отклонён защитой. Обновите данные.", "Transaction replay was rejected. Refresh the data."),
        control_timeout: lvlLocalized("Сервер не подтвердил покупку вовремя", "The server did not confirm the purchase in time")
      };
      lvlHubState.shopAction.error = map[code] || code;
      toast(lvlHubState.shopAction.error);
      return false;
    } finally {
      lvlHubState.shopAction.busy = false;
      renderLvlShop();
      if (category === "knife") renderLvlKnifeGallery();
    }
  }

  function renderLvlShop() {
    const root = $("#lvlHubShop");
    if (!root) return;
    root.replaceChildren();
    const bootstrap = lvlReadOnlyData();
    const categories = lvlEffectiveShopCategories(bootstrap).filter((cat) => cat?.enabled !== false && Array.isArray(cat?.items) && cat.items.length);
    const total = categories.reduce((sum, cat) => sum + cat.items.length, 0);
    root.appendChild(lvlSectionHeader(lvlLocalized("МАГАЗИН", "SHOP"), lvlLocalized("КАТАЛОГ МАГАЗИНА", "STORE CATALOG"), `${total} ${lvlLocalized("ТОВАРОВ", "ITEMS")}`));
    const hint = document.createElement("p");
    hint.className = "lvl-data-hint lvl-data-hint--safe-shop";
    hint.textContent = lvlLocalized("Листайте категории. Покупку, цену и баланс повторно проверяет игровой сервер.", "Swipe categories. Price, ownership and balance are revalidated by the game server.");
    root.appendChild(hint);
    if (!authState.sessionToken) { root.appendChild(lvlEmptyState(t("bootstrapLogin"), t("functionalStoreHint"))); return; }
    if (!bootstrap?.sync?.ready) { root.appendChild(lvlEmptyState(t("bootstrapWaiting"), t("nextStageBootstrap"))); return; }
    if (!categories.length) { root.appendChild(lvlEmptyState(lvlLocalized("КАТАЛОГ ПОКА ПУСТ", "CATALOG IS EMPTY"))); return; }

    if (!categories.some((cat) => cat.key === lvlHubState.shopCategory)) lvlHubState.shopCategory = categories[0].key;
    const rail = document.createElement("div");
    rail.className = "lvl-shop-category-rail";
    for (const cat of categories) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `lvl-shop-category${cat.key === lvlHubState.shopCategory ? " is-active" : ""}`;
      button.innerHTML = `<span>${lvlCategoryIcon(cat.key)}</span><b></b><small>${cat.items.length}</small>`;
      button.querySelector("b").textContent = lvlLocalized(cat.ru, cat.en, cat.key);
      button.addEventListener("click", () => { lvlHubState.shopCategory = cat.key; renderLvlShop(); });
      rail.appendChild(button);
    }
    root.appendChild(rail);

    const cat = categories.find((entry) => entry.key === lvlHubState.shopCategory) || categories[0];
    const actionCategory=String(cat?.actionKey || cat?.key || "");
    const heading = document.createElement("div");
    heading.className = "lvl-shop-category-heading";
    heading.innerHTML = `<span>${lvlCategoryIcon(cat.key)}</span><div><small>${lvlLocalized("КАТЕГОРИЯ", "CATEGORY")}</small><strong></strong></div><b>${cat.items.length}</b>`;
    heading.querySelector("strong").textContent = lvlLocalized(cat.ru, cat.en, cat.key);
    root.appendChild(heading);

    if (lvlHubState.shopAction.error) {
      const error = document.createElement("div"); error.className = "lvl-social-status is-error"; error.textContent = lvlHubState.shopAction.error; root.appendChild(error);
    }
    const busy = Boolean(lvlHubState.shopAction.busy);
    const grid = document.createElement("div"); grid.className = "lvl-shop-grid-v33";
    for (const item of cat.items) {
      const repeatable = item.repeatable === true || cat.key === "upgrades" || cat.key === "crate";
      const remainingSec=Math.max(0,Number(item.remainingSec||0));
      const charges=Math.max(0,Number(item.charges||0));
      const maxCharges=Math.max(0,Number(item.maxCharges||0));
      const tempActive=remainingSec>0 || charges>0;
      const isOn = !repeatable && item.owned && lvlEquipmentIsOn(bootstrap, cat.key, item.itemId);
      const equipKey = `${lvlEquipmentField(cat.key)}|${String(item.itemId || "")}`;
      const equipBusy = Boolean(lvlHubState.equipmentAction.busy && lvlHubState.equipmentAction.key === equipKey);
      const row = document.createElement("article");
      row.className = `lvl-shop-item-v33${item.owned ? " is-owned" : ""}${(isOn||tempActive) ? " is-active" : ""}${repeatable ? " is-repeatable" : ""}`;
      const visual = lvlItemVisual(cat.key, item.itemId);
      const copy = document.createElement("div"); copy.className = "lvl-shop-item__copy";
      const small = document.createElement("small");
      if (repeatable) {
        if (remainingSec>0) small.textContent=`${lvlLocalized("АКТИВНО", "ACTIVE")} · ${lvlDurationLabel(remainingSec)}`;
        else if (maxCharges>0) small.textContent=`${lvlLocalized("ЗАРЯДЫ", "CHARGES")} · ${charges}/${maxCharges}`;
        else small.textContent=lvlLocalized("ПОКУПКА", "PURCHASE");
      } else small.textContent = isOn ? lvlLocalized("ВКЛЮЧЕНО", "ENABLED") : (item.owned ? lvlLocalized("ВЫКЛЮЧЕНО", "DISABLED") : lvlLocalized("ЦЕНА", "PRICE"));
      const strong = document.createElement("strong"); strong.textContent = lvlLocalized(item.itemRu, item.itemEn, item.itemId);
      const adminLocked = item.adminOnly === true && item.available === false;
      if (item.adminOnly === true) small.textContent = adminLocked ? lvlLocalized("ТОЛЬКО ADMIN", "ADMIN ONLY") : (isOn ? lvlLocalized("ADMIN · ВКЛЮЧЕНО", "ADMIN · ENABLED") : lvlLocalized("ADMIN · БЕСПЛАТНО", "ADMIN · FREE"));
      const price = document.createElement("span");
      price.textContent = item.adminOnly === true ? lvlLocalized("БЕСПЛАТНО · ADMIN", "FREE · ADMIN") : `${Number(item.price || 0).toLocaleString(lvlLocale())} ${t("tokens")}`;
      copy.append(small, strong, price);
      let action;
      if (adminLocked) {
        action = document.createElement("button"); action.type="button"; action.className="lvl-store-buy"; action.disabled=true; action.textContent=lvlLocalized("НЕДОСТУПНО", "UNAVAILABLE");
      } else if (!repeatable && item.owned) {
        action = lvlEquipmentSwitch(isOn, Boolean(lvlHubState.equipmentAction.busy), (next) => { void setLvlEquipmentState(cat.key, String(item.itemId || ""), next); }, lvlLocalized(`Управление: ${lvlLocalized(item.itemRu, item.itemEn, item.itemId)}`, `Manage: ${lvlLocalized(item.itemRu, item.itemEn, item.itemId)}`));
        if (equipBusy) action.classList.add("is-busy");
      } else {
        action = document.createElement("button"); action.type = "button"; action.className = "lvl-store-buy";
        const thisBusy = busy && lvlHubState.shopAction.key === `${actionCategory}|${item.itemId}`;
        const fullCharges = cat.key === "crate" && String(item.itemId)==="invis" && maxCharges>0 && charges>=maxCharges;
        action.disabled = busy || lvlHubState.equipmentAction.busy || fullCharges;
        if (thisBusy) action.textContent=lvlLocalized("ПОКУПКА...", "PURCHASING...");
        else if (fullCharges) action.textContent=lvlLocalized("ЗАРЯДЫ ПОЛНЫЕ", "CHARGES FULL");
        else if (repeatable && remainingSec>0 && cat.key==="upgrades") action.textContent=lvlLocalized("ПРОДЛИТЬ", "EXTEND");
        else if (repeatable && remainingSec>0) action.textContent=lvlLocalized("ОБНОВИТЬ", "REFRESH");
        else action.textContent=lvlLocalized("КУПИТЬ", "BUY");
        action.addEventListener("click", async () => {
          if (!window.confirm(lvlLocalized(`Купить «${lvlLocalized(item.itemRu, item.itemEn, item.itemId)}» за ${Number(item.price || 0).toLocaleString(lvlLocale())} токенов?`, `Buy “${lvlLocalized(item.itemRu, item.itemEn, item.itemId)}” for ${Number(item.price || 0).toLocaleString(lvlLocale())} tokens?`))) return;
          await runLvlShopAction(actionCategory, String(item.itemId || ""));
        });
      }
      row.append(visual, copy, action); grid.appendChild(row);
    }
    root.appendChild(grid);
  }

  async function runLvlMarketAction(action, payload = {}) {
    if (lvlHubState.marketAction.busy) return false;
    if (!authState.sessionToken) { setLogin(true); return false; }
    const previousSyncedAt = Number(lvlReadOnlyData()?.sync?.syncedAt || 0);
    lvlHubState.marketAction = { busy: true, key: action, error: "" };
    renderLvlMarket();
    try {
      const created = await controlRequest("/command", { method: "POST", body: { action, ...payload } });
      const commandId = String(created?.commandId || "");
      if (!commandId) throw new Error("command_missing");
      const result = await waitControlResult(commandId);
      if (!result.ok) throw new Error(String(result?.data?.result || (result.timeout ? "control_timeout" : "market_failed")));
      let fresh = null;
      for (let attempt = 0; attempt < 22; attempt += 1) {
        if (attempt) await new Promise((resolve) => setTimeout(resolve, 850));
        fresh = await fetchLvlBootstrap(true);
        const syncedAt = Number(fresh?.sync?.syncedAt || 0);
        if (fresh?.sync?.ready && (previousSyncedAt === 0 || syncedAt > previousSyncedAt)) break;
      }
      const done = {
        market_buy: lvlLocalized("Товар куплен", "Item purchased"),
        market_list: lvlLocalized("Объявление опубликовано", "Listing published"),
        market_withdraw: lvlLocalized("Объявление снято", "Listing withdrawn")
      };
      toast(done[action] || lvlLocalized("Выполнено", "Done"));
      return true;
    } catch (error) {
      const code = String(error?.message || "market_failed");
      const map = {
        player_offline: lvlLocalized("Игровой сервер недоступен для операции", "The game server is unavailable for this action"),
        invalid_action: lvlLocalized("На сервере загружен старый WEB bridge. Нужен v11.", "An old WEB bridge is loaded on the server. v11 is required."),
        invalid_listing: lvlLocalized("Неверное объявление", "Invalid listing"),
        listing_unavailable: lvlLocalized("Объявление уже недоступно", "Listing is no longer available"),
        listing_expired: lvlLocalized("Срок объявления истёк", "Listing has expired"),
        own_listing: lvlLocalized("Нельзя купить своё объявление", "You cannot buy your own listing"),
        not_listing_owner: lvlLocalized("Это не ваше объявление", "This is not your listing"),
        invalid_item: lvlLocalized("Товар больше недоступен", "Item is no longer available"),
        not_owned: lvlLocalized("Этого предмета больше нет в рюкзаке", "You no longer own this item"),
        not_sellable: lvlLocalized("Временные и служебные награды нельзя продавать", "Temporary and service rewards cannot be sold"),
        already_owned: lvlLocalized("У вас уже есть этот предмет", "You already own this item"),
        listing_limit: lvlLocalized("Достигнут лимит активных объявлений", "Active listing limit reached"),
        invalid_price: lvlLocalized("Введите корректную цену", "Enter a valid price"),
        price_too_high: lvlLocalized("Цена выше магазинной", "Price is above the store price"),
        not_enough_tokens: lvlLocalized("Недостаточно токенов", "Not enough tokens"),
        seller_unavailable: lvlLocalized("Данные продавца недоступны", "Seller data is unavailable"),
        command_rate_limited: lvlLocalized("Подождите секунду и повторите", "Wait a second and retry"),
        economy_busy: lvlLocalized("Другая операция с токенами уже выполняется. Дождитесь её завершения.", "Another token operation is already running. Wait for it to finish."),
        invalid_operation_id: lvlLocalized("Защитная проверка операции не пройдена. Обновите страницу.", "Transaction security check failed. Refresh the page."),
        operation_mismatch: lvlLocalized("Повтор операции отклонён защитой. Обновите данные.", "Transaction replay was rejected. Refresh the data."),
        control_timeout: lvlLocalized("Сервер не подтвердил операцию вовремя", "The server did not confirm the action in time")
      };
      lvlHubState.marketAction.error = map[code] || code;
      toast(lvlHubState.marketAction.error);
      return false;
    } finally {
      lvlHubState.marketAction.busy = false;
      renderLvlMarket();
    }
  }

  function renderLvlMarket() {
    const root = $("#lvlHubMarket");
    if (!root) return;
    root.replaceChildren();
    const bootstrap = lvlReadOnlyData();
    const market = bootstrap?.market || {};
    const listings = Array.isArray(market.listings) ? market.listings : [];
    const mine = Array.isArray(market.mine) ? market.mine : [];
    const effectiveShop = lvlEffectiveShopCategories(bootstrap);
    const sellable = lvlFallbackMarketSellable(bootstrap, effectiveShop);
    const totalListings = Math.max(listings.length, Number(market.totalListings || listings.length));
    const rules = market.rules || {};
    const maxListings = Math.max(1, Number(rules.maxListings || 3));
    const marketDays = Math.max(1, Number(rules.marketDays || 7));
    const taxPct = Math.max(0, Number(rules.taxPct ?? 5));
    const busy = Boolean(lvlHubState.marketAction?.busy);

    root.appendChild(lvlSectionHeader(
      lvlLocalized("ТОРГОВЛЯ ИГРОКОВ", "PLAYER TRADING"),
      lvlLocalized("ТОРГОВАЯ ЛАВКА", "TRADING POST"),
      `${totalListings} ${lvlLocalized("ОБЪЯВЛ.", "LISTINGS")}`
    ));

    const hint = document.createElement("p");
    hint.className = "lvl-data-hint lvl-market-safe";
    hint.textContent = lvlLocalized(
      "Покупку, продажу, владение и токены проверяет игровой сервер. Сайт не может сам выдать предмет или изменить баланс.",
      "Purchases, sales, ownership and tokens are verified by the game server. The website cannot grant items or change balances by itself."
    );
    root.appendChild(hint);

    if (!authState.sessionToken) {
      root.appendChild(lvlEmptyState(t("bootstrapLogin"), lvlLocalized("Войдите в аккаунт, чтобы открыть лавку.", "Sign in to open the trading post.")));
      return;
    }
    if (!bootstrap?.sync?.ready) {
      root.appendChild(lvlEmptyState(t("bootstrapWaiting"), t("nextStageBootstrap")));
      return;
    }

    if (lvlHubState.marketAction.error) {
      const error = document.createElement("div");
      error.className = "lvl-social-status is-error";
      error.textContent = lvlHubState.marketAction.error;
      root.appendChild(error);
    }

    const stats = document.createElement("div");
    stats.className = "lvl-market-stats";
    const statDefs = [
      [String(totalListings), lvlLocalized("В ПРОДАЖЕ", "FOR SALE")],
      [`${mine.length}/${maxListings || "—"}`, lvlLocalized("МОИ ОБЪЯВЛ.", "MY LISTINGS")],
      [`${taxPct}%`, lvlLocalized("НАЛОГ", "TAX")],
      [`${marketDays}${language === "ru" ? "д" : "d"}`, lvlLocalized("СРОК", "DURATION")]
    ];
    statDefs.forEach(([value, label]) => {
      const box = document.createElement("div");
      const b = document.createElement("b"); b.textContent = value;
      const span = document.createElement("span"); span.textContent = label;
      box.append(b, span); stats.appendChild(box);
    });
    root.appendChild(stats);

    const sell = document.createElement("section");
    sell.className = "lvl-data-group lvl-market-sell";
    const sellHead = document.createElement("div"); sellHead.className = "lvl-market-title-row";
    const sellTitle = document.createElement("h3"); sellTitle.textContent = lvlLocalized("ПРОДАТЬ ТОВАР", "SELL AN ITEM");
    const slots = document.createElement("span"); slots.textContent = `${mine.length}/${maxListings || "—"}`;
    sellHead.append(sellTitle, slots);
    sell.appendChild(sellHead);

    if (maxListings > 0 && mine.length >= maxListings) {
      sell.appendChild(lvlEmptyState(
        lvlLocalized("ЛИМИТ ОБЪЯВЛЕНИЙ", "LISTING LIMIT"),
        lvlLocalized("Сначала снимите одно из своих объявлений или дождитесь продажи.", "Withdraw one of your listings or wait for a sale first.")
      ));
    } else if (!sellable.length) {
      sell.appendChild(lvlEmptyState(
        lvlLocalized("НЕТ ТОВАРОВ ДЛЯ ПРОДАЖИ", "NOTHING TO SELL"),
        lvlLocalized("Купленные предметы, которые сейчас не выставлены, появятся здесь.", "Owned items that are not already listed will appear here.")
      ));
    } else {
      const form = document.createElement("div"); form.className = "lvl-market-sell-form";
      const select = document.createElement("select"); select.id = "lvlMarketSellItem";
      for (const item of sellable) {
        const option = document.createElement("option");
        option.value = `${String(item.category || "")}|${String(item.itemId || "")}`;
        option.textContent = `${lvlLocalized(item.categoryRu, item.categoryEn, item.category)} · ${lvlLocalized(item.itemRu, item.itemEn, item.itemId)}${item.active ? lvlLocalized(" · АКТИВЕН", " · ACTIVE") : ""}`;
        option.dataset.maxPrice = String(Number(item.maxPrice || 0));
        option.dataset.active = item.active ? "1" : "0";
        select.appendChild(option);
      }
      const price = document.createElement("input");
      price.id = "lvlMarketSellPrice";
      price.type = "number";
      price.inputMode = "numeric";
      price.min = "1";
      const note = document.createElement("p"); note.className = "lvl-market-sell-note";
      const updateLimit = () => {
        const option = select.selectedOptions?.[0];
        const maxPrice = Math.max(1, Number(option?.dataset.maxPrice || 1));
        price.max = String(maxPrice);
        price.placeholder = `${lvlLocalized("до", "up to")} ${maxPrice.toLocaleString(lvlLocale())}`;
        if (!price.value || Number(price.value) > maxPrice) price.value = String(maxPrice);
        const net = Math.floor(Number(price.value || maxPrice) * Math.max(0, 100 - taxPct) / 100);
        note.textContent = lvlLocalized(
          `Макс. цена: ${maxPrice.toLocaleString(lvlLocale())} · после налога получите примерно ${net.toLocaleString(lvlLocale())} токенов`,
          `Max price: ${maxPrice.toLocaleString(lvlLocale())} · after tax you receive about ${net.toLocaleString(lvlLocale())} tokens`
        );
      };
      select.addEventListener("change", updateLimit);
      price.addEventListener("input", updateLimit);
      updateLimit();
      const listButton = document.createElement("button");
      listButton.type = "button"; listButton.className = "lvl-market-action lvl-market-action--sell";
      listButton.textContent = busy && lvlHubState.marketAction.key === "market_list" ? lvlLocalized("ВЫСТАВЛЯЮ...", "LISTING...") : lvlLocalized("ВЫСТАВИТЬ", "LIST ITEM");
      listButton.disabled = busy;
      listButton.addEventListener("click", async () => {
        const [category, itemId] = String(select.value || "").split("|");
        const amount = Math.floor(Number(price.value || 0));
        const option = select.selectedOptions?.[0];
        const maxPrice = Math.floor(Number(option?.dataset.maxPrice || 0));
        if (!category || !itemId || amount <= 0) { toast(lvlLocalized("Введите корректную цену", "Enter a valid price")); return; }
        if (amount > maxPrice) { toast(lvlLocalized("Цена выше магазинной", "Price is above the store price")); return; }
        const activeWarning = option?.dataset.active === "1" ? lvlLocalized(" Активный предмет будет снят с экипировки.", " The active item will be unequipped.") : "";
        if (!window.confirm(lvlLocalized(
          `Выставить товар за ${amount.toLocaleString(lvlLocale())} токенов?${activeWarning}`,
          `List this item for ${amount.toLocaleString(lvlLocale())} tokens?${activeWarning}`
        ))) return;
        await runLvlMarketAction("market_list", { category, itemId, price: amount });
      });
      form.append(select, price, listButton);
      sell.append(form, note);
    }
    root.appendChild(sell);

    const buildListingCard = (listing, mineOnly = false) => {
      const card = document.createElement("article");
      card.className = `lvl-market-card${listing.mine ? " is-mine" : ""}`;
      const visual = document.createElement("div"); visual.className = "lvl-market-card__visual";
      if (String(listing.category) === "skin") {
        const skin = LVL_SKINS.find((entry) => entry.skinId === String(listing.itemId || ""));
        if (skin) {
          const image = document.createElement("img"); decorateLvlSkinImage(image, skin); image.loading = "lazy"; image.decoding = "async"; visual.appendChild(image);
        } else visual.textContent = "◉";
      } else if (String(listing.category) === "skincolor" || String(listing.category) === "prefcolor") {
        const swatch = document.createElement("i"); swatch.className = "lvl-market-swatch"; swatch.style.background = String(listing.itemId || "#3da7ff"); visual.appendChild(swatch);
      } else {
        const icons = { prefix: "TAG", crit: "✦", minimap: "▦", wsound: "♪" };
        visual.textContent = icons[String(listing.category || "")] || "◇";
      }
      const copy = document.createElement("div"); copy.className = "lvl-market-card__copy";
      const small = document.createElement("small"); small.textContent = lvlLocalized(listing.categoryRu, listing.categoryEn, listing.category);
      const strong = document.createElement("strong"); strong.textContent = lvlLocalized(listing.itemRu, listing.itemEn, listing.itemId);
      const meta = document.createElement("span");
      meta.textContent = `${listing.mine ? lvlLocalized("ВАШЕ ОБЪЯВЛЕНИЕ", "YOUR LISTING") : `${lvlLocalized("ПРОДАВЕЦ", "SELLER")}: ${listing.seller}`} · ${Math.max(0, Number(listing.daysLeft || 0))}${language === "ru" ? "д" : "d"}`;
      copy.append(small, strong, meta);
      const side = document.createElement("div"); side.className = "lvl-market-card__side";
      const priceTag = document.createElement("b"); priceTag.textContent = `${Number(listing.price || 0).toLocaleString(lvlLocale())} ${t("tokens")}`;
      const action = document.createElement("button"); action.type = "button"; action.className = `lvl-market-action${listing.mine ? " lvl-market-action--danger" : ""}`;
      if (listing.mine || mineOnly) {
        action.textContent = busy && lvlHubState.marketAction.key === "market_withdraw" ? lvlLocalized("СНИМАЮ...", "WITHDRAWING...") : lvlLocalized("СНЯТЬ", "WITHDRAW");
        action.disabled = busy;
        action.addEventListener("click", async () => {
          if (!window.confirm(lvlLocalized("Снять объявление и вернуть предмет в рюкзак?", "Withdraw the listing and return the item to your backpack?"))) return;
          await runLvlMarketAction("market_withdraw", { listingId: String(listing.id || "") });
        });
      } else {
        action.textContent = busy && lvlHubState.marketAction.key === "market_buy" ? lvlLocalized("ПОКУПАЮ...", "BUYING...") : lvlLocalized("КУПИТЬ", "BUY");
        action.disabled = busy;
        action.addEventListener("click", async () => {
          if (!window.confirm(lvlLocalized(
            `Купить ${lvlLocalized(listing.itemRu, listing.itemEn, listing.itemId)} за ${Number(listing.price || 0).toLocaleString(lvlLocale())} токенов?`,
            `Buy ${lvlLocalized(listing.itemRu, listing.itemEn, listing.itemId)} for ${Number(listing.price || 0).toLocaleString(lvlLocale())} tokens?`
          ))) return;
          await runLvlMarketAction("market_buy", { listingId: String(listing.id || "") });
        });
      }
      side.append(priceTag, action);
      card.append(visual, copy, side);
      return card;
    };

    const allSection = document.createElement("section"); allSection.className = "lvl-data-group lvl-market-listings";
    const allTitle = document.createElement("div"); allTitle.className = "lvl-market-title-row";
    const allH = document.createElement("h3"); allH.textContent = `${lvlLocalized("ОБЪЯВЛЕНИЯ ИГРОКОВ", "PLAYER LISTINGS")} · ${totalListings}`;
    const sort = document.createElement("span");
    sort.textContent = totalListings > listings.length
      ? lvlLocalized(`ПОКАЗАНО ${listings.length} ДЕШЁВЫХ`, `SHOWING ${listings.length} LOWEST`)
      : lvlLocalized("ДЕШЁВЫЕ СВЕРХУ", "LOWEST PRICE FIRST");
    allTitle.append(allH, sort); allSection.appendChild(allTitle);
    const allList = document.createElement("div"); allList.className = "lvl-market-list";
    if (!listings.length) allList.appendChild(lvlEmptyState(lvlLocalized("ПОКА ПУСТО", "NO LISTINGS YET"), lvlLocalized("Первое объявление можно выставить выше.", "Create the first listing above.")));
    else listings.forEach((listing) => allList.appendChild(buildListingCard(listing, false)));
    allSection.appendChild(allList); root.appendChild(allSection);

    const mySection = document.createElement("section"); mySection.className = "lvl-data-group lvl-market-listings lvl-market-listings--mine";
    const myTitle = document.createElement("div"); myTitle.className = "lvl-market-title-row";
    const myH = document.createElement("h3"); myH.textContent = `${lvlLocalized("МОИ ОБЪЯВЛЕНИЯ", "MY LISTINGS")} · ${mine.length}`;
    const limit = document.createElement("span"); limit.textContent = `${mine.length}/${maxListings || "—"}`;
    myTitle.append(myH, limit); mySection.appendChild(myTitle);
    const myList = document.createElement("div"); myList.className = "lvl-market-list";
    if (!mine.length) myList.appendChild(lvlEmptyState(lvlLocalized("НЕТ АКТИВНЫХ ОБЪЯВЛЕНИЙ", "NO ACTIVE LISTINGS")));
    else mine.forEach((listing) => myList.appendChild(buildListingCard(listing, true)));
    mySection.appendChild(myList); root.appendChild(mySection);
  }

  function renderLvlInventory() {
    const root = $("#lvlHubInventory");
    if (!root) return;
    root.replaceChildren();
    root.appendChild(lvlSectionHeader(t("hubInventory"), t("ownedItems")));
    const bootstrap = lvlReadOnlyData();
    if (!authState.sessionToken) {
      root.appendChild(lvlEmptyState(t("bootstrapLogin"), t("readOnlyHint")));
      return;
    }
    if (!bootstrap?.sync?.ready) {
      root.appendChild(lvlEmptyState(t("bootstrapWaiting"), t("nextStageBootstrap")));
      return;
    }
    const hint = document.createElement("p");
    hint.className = "lvl-data-hint lvl-inventory-manage-hint";
    hint.textContent = lvlLocalized("Постоянные предметы можно включать и выключать. Офлайн-изменение сохранится и применится при следующем входе.", "Permanent items can be enabled or disabled. Offline changes are saved and applied on the next join.");
    root.appendChild(hint);

    if (lvlHubState.equipmentAction.error) {
      const error = document.createElement("div");
      error.className = "lvl-social-status is-error";
      error.textContent = lvlHubState.equipmentAction.error;
      root.appendChild(error);
    }

    const categories = bootstrap?.inventory?.categories || {};
    const defs = [
      ["prefix", t("prefixSetting")], ["prefixColor", t("prefixColorSetting")], ["ctSkin", t("ctSkinSetting")],
      ["skinColor", t("skinColorSetting")], ["critBullet", t("critBulletSetting")], ["minimap", t("minimapSetting")],
      ["weaponSounds", t("weaponSoundsSetting")], ["knife", lvlLocalized("НОЖ КТ", "CT KNIFE")],
      ["abilities", lvlLocalized("СПОСОБНОСТИ КТ","CT ABILITIES")],
      ["sniperCrosshairShape", lvlLocalized("ФОРМЫ СНАЙПЕРСКОГО ПРИЦЕЛА","SNIPER CROSSHAIR SHAPES")],
      ["sniperCrosshairColor", lvlLocalized("ЦВЕТА СНАЙПЕРСКОГО ПРИЦЕЛА","SNIPER CROSSHAIR COLORS")]
    ];
    let shown = 0;
    for (const [field, label] of defs) {
      const list = Array.isArray(categories[field]) ? categories[field] : [];
      if (!list.length) continue;
      shown += list.length;
      const section = document.createElement("section");
      section.className = "lvl-data-group lvl-inventory-manage";
      const title = document.createElement("h3");
      title.textContent = `${label} · ${list.length}`;
      const items = document.createElement("div");
      items.className = "lvl-inventory-manage__list";
      for (const item of list) {
        const id = String(item?.id || "");
        if (!id) continue;
        const isOn = lvlEquipmentIsOn(bootstrap, field, id);
        const key = `${field}|${id}`;
        const busy = Boolean(lvlHubState.equipmentAction.busy && lvlHubState.equipmentAction.key === key);
        const row = document.createElement("article");
        row.className = `lvl-inventory-item${isOn ? " is-on" : ""}`;
        let knifeThumb = null;
        if (field === "knife") {
          const knifeDef = lvlKnifeById(id);
          if (knifeDef) {
            knifeThumb = document.createElement("img");
            knifeThumb.className = "lvl-inventory-knife-thumb";
            knifeThumb.src = knifeDef.preview;
            knifeThumb.alt = lvlLocalized(knifeDef.ru, knifeDef.en, id);
            knifeThumb.loading = "lazy";
            knifeThumb.decoding = "async";
          }
        }
        const copy = document.createElement("div");
        const strong = document.createElement("strong");
        strong.textContent = lvlLocalized(item?.ru, item?.en, id);
        const small = document.createElement("small");
        small.textContent = `${id} · ${isOn ? lvlLocalized("АКТИВЕН", "ACTIVE") : lvlLocalized("ВЫКЛЮЧЕН", "DISABLED")}`;
        copy.append(strong, small);
        const toggle = lvlEquipmentSwitch(isOn, Boolean(lvlHubState.equipmentAction.busy), (next) => { void setLvlEquipmentState(field, id, next); }, `${label}: ${strong.textContent}`);
        if (busy) toggle.classList.add("is-busy");
        if (knifeThumb) row.classList.add("lvl-inventory-item--knife");
        if (knifeThumb) row.append(knifeThumb, copy, toggle); else row.append(copy, toggle);
        items.appendChild(row);
      }
      section.append(title, items);
      root.appendChild(section);
    }
    if (!shown) root.appendChild(lvlEmptyState(t("noData")));

    const boosts = bootstrap?.inventory?.boosts || {};
    const boostDefs = [
      ["token", t("boostToken")], ["level", t("boostLevel")], ["gold", t("boostGold")], ["minigun", t("boostMinigun")],
      ["armor50", t("boostArmor50")], ["armor100", t("boostArmor100")], ["blind", t("boostBlind")], ["gas", t("boostGas")], ["invis", t("boostInvis")]
    ];
    const active = boostDefs.filter(([key]) => Number(boosts[key] || 0) > 0);
    if (active.length) {
      const section = document.createElement("section");
      section.className = "lvl-data-group lvl-data-group--boosts";
      const title = document.createElement("h3");
      title.textContent = t("activeBoosts");
      const chips = document.createElement("div");
      chips.className = "lvl-data-chips";
      for (const [key, label] of active) chips.appendChild(lvlChip(label, lvlFormatTime(boosts[key])));
      section.append(title, chips);
      root.appendChild(section);
    }
  }

  function socialButton(label, action, payload = {}, tone = "") {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `lvl-social-btn${tone ? ` lvl-social-btn--${tone}` : ""}`;
    button.textContent = label;
    button.dataset.socialAction = action;
    for (const [key, value] of Object.entries(payload)) button.dataset[key] = String(value ?? "");
    button.disabled = lvlHubState.socialAction.busy;
    return button;
  }

  function socialPersonCard(person, kind) {
    const name = String(person?.name || "Player");
    const card = document.createElement("article");
    card.className = "lvl-social-person";
    const identity = document.createElement("div");
    identity.className = "lvl-social-person__identity";
    const dot = document.createElement("i");
    dot.className = `lvl-social-online${person?.online ? " is-online" : ""}`;
    const copy = document.createElement("div");
    const strong = document.createElement("strong"); strong.textContent = name;
    const small = document.createElement("small"); small.textContent = person?.online ? lvlLocalized("В ИГРЕ", "ONLINE") : lvlLocalized("НЕ В ИГРЕ", "OFFLINE");
    copy.append(strong, small); identity.append(dot, copy); card.append(identity);
    const actions = document.createElement("div"); actions.className = "lvl-social-person__actions";
    if (kind === "request") {
      actions.append(
        socialButton(lvlLocalized("ПРИНЯТЬ", "ACCEPT"), "social_friend_accept", { targetName: name }, "ok"),
        socialButton(lvlLocalized("В ПОДПИСЧИКИ", "FOLLOWER"), "social_friend_dismiss", { targetName: name }, "muted")
      );
    } else if (kind === "friend") {
      const msg = socialButton(lvlLocalized("НАПИСАТЬ", "MESSAGE"), "compose_message", { targetName: name });
      const tok = socialButton(lvlLocalized("ТОКЕНЫ", "TOKENS"), "compose_tokens", { targetName: name }, "gold");
      const remove = socialButton(lvlLocalized("УДАЛИТЬ", "REMOVE"), "social_friend_remove", { targetName: name }, "danger");
      const block = socialButton(lvlLocalized("БЛОКИРОВАТЬ", "BLOCK"), "social_block", { targetName: name }, "danger");
      actions.append(msg, tok, remove, block);
    } else if (kind === "follower") {
      actions.append(socialButton(lvlLocalized("ДОБАВИТЬ", "ADD"), "social_friend_accept", { targetName: name }, "ok"));
    } else if (kind === "subscription") {
      actions.append(socialButton(lvlLocalized("ОТМЕНИТЬ", "CANCEL"), "social_subscription_cancel", { targetName: name }, "danger"));
    } else if (kind === "blocked") {
      actions.append(socialButton(lvlLocalized("РАЗБЛОКИРОВАТЬ", "UNBLOCK"), "social_unblock", { targetName: name }, "muted"));
    }
    card.append(actions);
    return card;
  }

  function renderLvlFriends() {
    const root = $("#lvlHubFriends");
    if (!root) return;
    root.replaceChildren();
    const social = lvlReadOnlyData()?.friends;
    root.appendChild(lvlSectionHeader(lvlLocalized("СОЦИАЛЬНОЕ", "SOCIAL"), lvlLocalized("ДРУЗЬЯ И СООБЩЕНИЯ", "FRIENDS & MESSAGES"), social ? `${social.counts?.friends || 0}` : ""));
    if (!authState.sessionToken) {
      root.appendChild(lvlEmptyState(t("bootstrapLogin"), t("readOnlyHint")));
      return;
    }
    if (!lvlReadOnlyData()?.sync?.ready) {
      root.appendChild(lvlEmptyState(t("bootstrapWaiting"), t("nextStageBootstrap")));
      return;
    }

    const stats = document.createElement("div");
    stats.className = "lvl-social-stats";
    const counters = [["friends", t("friendsList")], ["requests", t("friendRequests")], ["followers", t("followers")], ["subscriptions", t("subscriptions")], ["blocked", lvlLocalized("БЛОК", "BLOCKED")], ["unread", t("unread")]];
    for (const [key, label] of counters) {
      const box = document.createElement("div");
      const b = document.createElement("b"); b.textContent = String(social?.counts?.[key] || 0);
      const span = document.createElement("span"); span.textContent = label;
      box.append(b, span); stats.appendChild(box);
    }
    root.appendChild(stats);

    if (lvlHubState.socialAction.notice) {
      const notice = document.createElement("div");
      notice.className = "lvl-social-status is-success";
      notice.textContent = lvlHubState.socialAction.notice;
      root.appendChild(notice);
    }
    if (lvlHubState.socialAction.error) {
      const error = document.createElement("div");
      error.className = "lvl-social-status is-error";
      error.textContent = lvlHubState.socialAction.error;
      root.appendChild(error);
    }

    const addSection = document.createElement("section");
    addSection.className = "lvl-data-group lvl-social-compose";
    const addTitle = document.createElement("h3"); addTitle.textContent = lvlLocalized("ДОБАВИТЬ ДРУГА", "ADD FRIEND");
    const addRow = document.createElement("div"); addRow.className = "lvl-social-formrow";
    const addInput = document.createElement("input");
    addInput.id = "lvlFriendAddName"; addInput.maxLength = 40; addInput.placeholder = lvlLocalized("Точный ник игрока", "Exact player name");
    const addButton = socialButton(lvlLocalized("ОТПРАВИТЬ ЗАЯВКУ", "SEND REQUEST"), "friend_add_form", {}, "ok");
    addRow.append(addInput, addButton); addSection.append(addTitle, addRow); root.appendChild(addSection);

    const friends = Array.isArray(social?.friends) ? social.friends : [];
    const composer = document.createElement("section");
    composer.className = "lvl-data-group lvl-social-compose";
    const compTitle = document.createElement("h3"); compTitle.textContent = lvlLocalized("СООБЩЕНИЕ ДРУГУ", "MESSAGE A FRIEND");
    const compGrid = document.createElement("div"); compGrid.className = "lvl-social-compose__grid";
    const msgSelect = document.createElement("select"); msgSelect.id = "lvlMessageTarget";
    const placeholder = document.createElement("option"); placeholder.value = ""; placeholder.textContent = lvlLocalized("Выберите друга", "Choose friend"); msgSelect.appendChild(placeholder);
    friends.forEach((person) => { const o = document.createElement("option"); o.value = String(person.name || ""); o.textContent = String(person.name || ""); msgSelect.appendChild(o); });
    const textarea = document.createElement("textarea"); textarea.id = "lvlMessageText"; textarea.maxLength = 160; textarea.rows = 3; textarea.placeholder = lvlLocalized("Сообщение до 160 символов", "Message up to 160 characters");
    const msgSend = socialButton(lvlLocalized("ОТПРАВИТЬ", "SEND"), "message_send_form", {}, "ok");
    compGrid.append(msgSelect, textarea, msgSend); composer.append(compTitle, compGrid); root.appendChild(composer);

    const transfer = social?.transfer || {};
    const tokenSection = document.createElement("section"); tokenSection.className = "lvl-data-group lvl-social-compose lvl-social-compose--tokens";
    const tokenTitle = document.createElement("h3"); tokenTitle.textContent = lvlLocalized("ПЕРЕВЕСТИ ТОКЕНЫ ДРУГУ", "SEND TOKENS TO FRIEND");
    const tokenNote = document.createElement("p");
    tokenNote.className = "lvl-social-note";
    tokenNote.textContent = lvlLocalized(
      `Доступно сегодня: ${Number(transfer.leftToday || 0).toLocaleString(lvlLocale())} / ${Number(transfer.dailyLimit || 0).toLocaleString(lvlLocale())} · с LVL ${transfer.minLevel || 0} · получатель может быть офлайн`,
      `Today left: ${Number(transfer.leftToday || 0).toLocaleString(lvlLocale())} / ${Number(transfer.dailyLimit || 0).toLocaleString(lvlLocale())} · from LVL ${transfer.minLevel || 0} · recipient may be offline`
    );
    const tokenRow = document.createElement("div"); tokenRow.className = "lvl-social-tokenrow";
    const tokenTarget = document.createElement("select"); tokenTarget.id = "lvlTokenTarget";
    const tokenPlaceholder = document.createElement("option"); tokenPlaceholder.value = ""; tokenPlaceholder.textContent = lvlLocalized("Выберите друга", "Choose friend"); tokenTarget.appendChild(tokenPlaceholder);
    friends.forEach((person) => { const o = document.createElement("option"); o.value = String(person.name || ""); o.textContent = `${person.name}${person.online ? " • ONLINE" : ""}`; tokenTarget.appendChild(o); });
    const amountSelect = document.createElement("select"); amountSelect.id = "lvlTokenAmount";
    const amounts = Array.isArray(transfer.amounts) && transfer.amounts.length ? transfer.amounts : [10,50,100,500];
    amounts.forEach((amount) => { const o = document.createElement("option"); o.value = String(amount); o.textContent = `${Number(amount).toLocaleString(lvlLocale())} ${t("tokens")}`; amountSelect.appendChild(o); });
    const tokenSend = socialButton(lvlLocalized("ПЕРЕВЕСТИ", "SEND"), "token_send_form", {}, "gold");
    tokenRow.append(tokenTarget, amountSelect, tokenSend); tokenSection.append(tokenTitle, tokenNote, tokenRow); root.appendChild(tokenSection);

    const groups = [
      ["requests", lvlLocalized("ЗАЯВКИ", "REQUESTS"), "request"],
      ["friends", lvlLocalized("ДРУЗЬЯ", "FRIENDS"), "friend"],
      ["followers", lvlLocalized("ПОДПИСЧИКИ", "FOLLOWERS"), "follower"],
      ["subscriptions", lvlLocalized("МОИ ПОДПИСКИ", "MY SUBSCRIPTIONS"), "subscription"],
      ["blocked", lvlLocalized("ЗАБЛОКИРОВАННЫЕ", "BLOCKED USERS"), "blocked"]
    ];
    for (const [key, label, kind] of groups) {
      const values = Array.isArray(social?.[key]) ? social[key] : [];
      const section = document.createElement("section"); section.className = "lvl-data-group";
      const title = document.createElement("h3"); title.textContent = `${label} · ${values.length}`;
      const list = document.createElement("div"); list.className = "lvl-social-people";
      if (values.length) values.forEach((person) => list.appendChild(socialPersonCard(person, kind)));
      else list.appendChild(lvlEmptyState(lvlLocalized("Пусто", "Empty")));
      section.append(title, list); root.appendChild(section);
    }

    const inbox = Array.isArray(social?.inbox) ? social.inbox.slice().reverse() : [];
    const section = document.createElement("section"); section.className = "lvl-data-group";
    const titleRow = document.createElement("div"); titleRow.className = "lvl-social-title-row";
    const title = document.createElement("h3"); title.textContent = `${t("inbox")} · ${inbox.length}`;
    const clear = socialButton(lvlLocalized("ОЧИСТИТЬ", "CLEAR"), "social_inbox_clear", {}, "danger");
    if (!inbox.length) clear.disabled = true;
    titleRow.append(title, clear);
    const messages = document.createElement("div"); messages.className = "lvl-message-list";
    if (!inbox.length) messages.appendChild(lvlEmptyState(t("noMessages")));
    for (const message of inbox) {
      const item = document.createElement("article"); item.className = `lvl-message${message?.read === false ? " is-unread" : ""}`;
      const head = document.createElement("div");
      const strong = document.createElement("strong"); strong.textContent = String(message?.fromNick || "Player");
      const time = document.createElement("span"); time.textContent = String(message?.at || "");
      head.append(strong, time);
      const p = document.createElement("p"); p.textContent = String(message?.text || "");
      const actions = document.createElement("div"); actions.className = "lvl-message__actions";
      if (message?.read === false && message?.id) actions.appendChild(socialButton(lvlLocalized("ПРОЧИТАНО", "MARK READ"), "social_message_read", { messageId: message.id }, "muted"));
      actions.appendChild(socialButton(lvlLocalized("ОТВЕТИТЬ", "REPLY"), "compose_message", { targetName: message?.fromNick || "" }));
      actions.appendChild(socialButton(lvlLocalized("БЛОКИРОВАТЬ", "BLOCK"), "social_block", { targetName: message?.fromNick || "" }, "danger"));
      if (message?.id) actions.appendChild(socialButton(lvlLocalized("УДАЛИТЬ", "DELETE"), "social_message_delete", { messageId: message.id }, "danger"));
      item.append(head, p, actions); messages.appendChild(item);
    }
    section.append(titleRow, messages); root.appendChild(section);
  }

  async function runLvlSocialAction(action, payload = {}) {
    if (lvlHubState.socialAction.busy) return false;
    if (!authState.sessionToken) { setLogin(true); return false; }
    const previousSyncedAt = Number(lvlReadOnlyData()?.sync?.syncedAt || 0);
    lvlHubState.socialAction = { busy: true, key: action, error: "", notice: "" };
    renderLvlFriends();
    try {
      const created = await controlRequest("/command", { method: "POST", body: { action, ...payload } });
      const commandId = String(created?.commandId || "");
      if (!commandId) throw new Error("command_missing");
      const result = await waitControlResult(commandId);
      if (!result.ok) throw new Error(String(result?.data?.result || (result.timeout ? "control_timeout" : "social_failed")));
      let fresh = null;
      for (let attempt = 0; attempt < 22; attempt += 1) {
        if (attempt) await new Promise((resolve) => setTimeout(resolve, 850));
        fresh = await fetchLvlBootstrap(true);
        const syncedAt = Number(fresh?.sync?.syncedAt || 0);
        if (fresh?.sync?.ready && (previousSyncedAt === 0 || syncedAt > previousSyncedAt)) break;
      }
      const successMap = {
        social_friend_add: lvlLocalized("Заявка отправлена ✓", "Friend request sent ✓"),
        social_friend_accept: lvlLocalized("Заявка принята ✓", "Friend request accepted ✓"),
        social_friend_dismiss: lvlLocalized("Заявка перемещена в подписчики ✓", "Request moved to followers ✓"),
        social_friend_remove: lvlLocalized("Друг удалён ✓", "Friend removed ✓"),
        social_subscription_cancel: lvlLocalized("Подписка отменена ✓", "Subscription cancelled ✓"),
        social_block: lvlLocalized("Игрок заблокирован ✓", "Player blocked ✓"),
        social_unblock: lvlLocalized("Игрок разблокирован ✓", "Player unblocked ✓"),
        social_message_send: lvlLocalized("Сообщение отправлено ✓ Офлайн-друг увидит его позже.", "Message sent ✓ An offline friend will see it later."),
        social_message_read: lvlLocalized("Сообщение отмечено прочитанным ✓", "Message marked as read ✓"),
        social_message_delete: lvlLocalized("Сообщение удалено ✓", "Message deleted ✓"),
        social_inbox_clear: lvlLocalized("Входящие очищены ✓", "Inbox cleared ✓"),
        social_token_send: lvlLocalized("Токены отправлены ✓", "Tokens sent ✓")
      };
      const notice = successMap[action] || lvlLocalized("Выполнено ✓", "Done ✓");
      lvlHubState.socialAction.notice = notice;
      toast(notice);
      return true;
    } catch (error) {
      const code = String(error?.message || "social_failed");
      const map = {
        invalid_action: lvlLocalized("На сервере загружен старый WEB bridge. Нужен v11.", "An old WEB bridge is loaded on the server. v11 is required."),
        target_offline: lvlLocalized("Это действие требует живую игровую сессию", "This action requires a live game session"),
        target_not_found: lvlLocalized("Игрок не найден", "Player not found"),
        ambiguous_target: lvlLocalized("Ник не уникален", "Player name is ambiguous"),
        already_friends: lvlLocalized("Вы уже друзья", "Already friends"),
        already_requested: lvlLocalized("Заявка уже отправлена", "Request already sent"),
        not_friends: lvlLocalized("Игрок больше не в друзьях", "Player is not a friend"),
        request_not_found: lvlLocalized("Заявка уже недоступна", "Request is no longer available"),
        target_blocked: lvlLocalized("Вы заблокировали этого игрока", "You blocked this player"),
        blocked_by_target: lvlLocalized("Этот игрок заблокировал вас", "This player blocked you"),
        not_blocked: lvlLocalized("Игрок уже разблокирован", "Player is already unblocked"),
        empty_message: lvlLocalized("Введите сообщение", "Enter a message"),
        message_cooldown: lvlLocalized("Слишком часто. Подождите несколько секунд", "Too fast. Wait a few seconds"),
        sender_inbox_limit: lvlLocalized("У друга уже слишком много ваших сообщений", "Too many of your messages are waiting"),
        mailbox_full: lvlLocalized("Почтовый ящик друга заполнен", "Friend mailbox is full"),
        message_not_found: lvlLocalized("Сообщение уже удалено", "Message no longer exists"),
        level_too_low: lvlLocalized("Недостаточный LVL для перевода", "Level too low for transfer"),
        not_enough_tokens: lvlLocalized("Недостаточно токенов", "Not enough tokens"),
        daily_limit: lvlLocalized("Дневной лимит перевода исчерпан", "Daily transfer limit reached"),
        command_rate_limited: lvlLocalized("Подождите секунду и повторите", "Wait a second and retry"),
        economy_busy: lvlLocalized("Другая операция с токенами уже выполняется. Дождитесь её завершения.", "Another token operation is already running. Wait for it to finish."),
        invalid_operation_id: lvlLocalized("Защитная проверка операции не пройдена. Обновите страницу.", "Transaction security check failed. Refresh the page."),
        operation_mismatch: lvlLocalized("Повтор операции отклонён защитой. Обновите данные.", "Transaction replay was rejected. Refresh the data.")
      };
      lvlHubState.socialAction.error = map[code] || code;
      toast(lvlHubState.socialAction.error);
      return false;
    } finally {
      lvlHubState.socialAction.busy = false;
      renderLvlFriends();
    }
  }

  function renderLvlBattlePass() {
    const root = $("#lvlHubBattlePass");
    if (!root) return;
    root.replaceChildren();
    const bp = lvlReadOnlyData()?.battlePass;
    root.appendChild(lvlSectionHeader(t("hubBattlePass"), t("battlePassTitle"), bp ? (bp.active ? t("battlePassActive") : t("battlePassInactive")) : ""));
    if (!authState.sessionToken) {
      root.appendChild(lvlEmptyState(t("bootstrapLogin"), t("readOnlyHint")));
      return;
    }
    if (!lvlReadOnlyData()?.sync?.ready) {
      root.appendChild(lvlEmptyState(t("bootstrapWaiting"), t("nextStageBootstrap")));
      return;
    }
    const summary = document.createElement("div");
    summary.className = "lvl-bp-summary";
    const summaryItems = [
      [bp?.active ? t("battlePassActive") : t("battlePassInactive"), bp?.active ? `${bp.daysLeft || 0} ${t("daysLeft")}` : `${Number(bp?.price || 0).toLocaleString(lvlLocale())} ${t("tokens")}`],
      [t("dailyReward"), `${Number(bp?.dailyReward || 0).toLocaleString(lvlLocale())} ${t("tokens")} · ${bp?.dailyClaimed ? t("claimed") : t("notClaimed")}`]
    ];
    for (const [label, value] of summaryItems) {
      const box = document.createElement("div");
      const small = document.createElement("small"); small.textContent = label;
      const strong = document.createElement("strong"); strong.textContent = value;
      box.append(small, strong); summary.appendChild(box);
    }
    root.appendChild(summary);

    const taskSection = document.createElement("section");
    taskSection.className = "lvl-data-group";
    const taskTitle = document.createElement("h3"); taskTitle.textContent = `${t("tasks")} · ${Array.isArray(bp?.tasks) ? bp.tasks.length : 0}`;
    const taskList = document.createElement("div"); taskList.className = "lvl-bp-tasks";
    const tasks = Array.isArray(bp?.tasks) ? bp.tasks : [];
    if (!tasks.length) taskList.appendChild(lvlEmptyState(t("noData")));
    for (const task of tasks) {
      const goal = Math.max(0, Number(task?.goal || 0));
      const progress = Math.max(0, Number(task?.progress || 0));
      const pct = goal > 0 ? Math.min(100, Math.round((progress / goal) * 100)) : 0;
      const item = document.createElement("article"); item.className = `lvl-bp-task${task?.claimed ? " is-claimed" : ""}`;
      const head = document.createElement("div");
      const strong = document.createElement("strong"); strong.textContent = lvlLocalized(task?.ru, task?.en, task?.id);
      const span = document.createElement("span"); span.textContent = task?.claimed ? t("claimed") : `+${Number(task?.reward || 0).toLocaleString(lvlLocale())} ${t("tokens")}`;
      head.append(strong, span);
      const meter = document.createElement("div"); meter.className = "lvl-bp-meter";
      const fill = document.createElement("i"); fill.style.width = `${pct}%`; meter.appendChild(fill);
      const foot = document.createElement("small"); foot.textContent = `${Math.min(progress, goal || progress).toLocaleString(lvlLocale())} / ${goal.toLocaleString(lvlLocale())}`;
      item.append(head, meter, foot); taskList.appendChild(item);
    }
    taskSection.append(taskTitle, taskList); root.appendChild(taskSection);
  }

  function renderLvlSettingsSummary() {
    const root = $("#lvlHubSettingsSummary");
    if (!root) return;
    root.replaceChildren();
    const bootstrap = lvlReadOnlyData();
    root.appendChild(lvlSectionHeader(t("hubSettings"), t("gameSettings"), bootstrap?.sync?.pending ? t("pendingValue") : t("actualValue")));
    if (!authState.sessionToken) {
      root.appendChild(lvlEmptyState(t("bootstrapLogin"), t("readOnlyHint")));
      return;
    }
    if (!bootstrap?.sync?.ready) {
      root.appendChild(lvlEmptyState(t("bootstrapWaiting"), t("nextStageBootstrap")));
      return;
    }
    const actual = bootstrap?.settings?.actual || {};
    const desired = bootstrap?.settings?.desired || {};
    const defs = [
      ["language", t("languageSetting")], ["prefix", t("prefixSetting")], ["prefixColor", t("prefixColorSetting")], ["ctSkin", t("ctSkinSetting")],
      ["skinColor", t("skinColorSetting")], ["critBullet", t("critBulletSetting")], ["minimap", t("minimapSetting")],
      ["weaponSounds", t("weaponSoundsSetting")], ["knife", lvlLocalized("НОЖ КТ", "CT KNIFE")],
      ["abilities", lvlLocalized("СПОСОБНОСТИ КТ","CT ABILITIES")],
      ["sniperCrosshairEnabled", lvlLocalized("СНАЙПЕРСКИЙ ПРИЦЕЛ","SNIPER CROSSHAIR")],
      ["sniperCrosshairShape", lvlLocalized("ФОРМА ПРИЦЕЛА","CROSSHAIR SHAPE")],
      ["sniperCrosshairColor", lvlLocalized("ЦВЕТ ПРИЦЕЛА","CROSSHAIR COLOR")],
      ["soundMuteAll", lvlLocalized("ВСЕ ЗВУКИ LVL MOD","ALL LVL MOD SOUNDS")],
      ["soundMuteShot", lvlLocalized("ЗВУКИ ВЫСТРЕЛОВ","SHOT SOUNDS")],
      ["soundMuteWelcome", lvlLocalized("ЗВУКИ ВХОДА","SERVER JOIN SOUNDS")],
      ["soundMuteKnife", lvlLocalized("ЗВУКИ НОЖА","KNIFE SOUNDS")],
      ["soundMuteDeath", lvlLocalized("ЗВУКИ СМЕРТИ","DEATH SOUNDS")],
      ["soundServerMuted", lvlLocalized("ВСЕ ЗВУКИ СЕРВЕРА","ALL SERVER SOUNDS")]
    ];
    const list = document.createElement("div"); list.className = "lvl-settings-list";
    for (const [key, label] of defs) {
      const row = document.createElement("article");
      const copy = document.createElement("div");
      const small = document.createElement("small"); small.textContent = label;
      const strong = document.createElement("strong");
      strong.textContent = lvlSettingDisplayValue(key, actual[key], bootstrap);
      copy.append(small, strong);
      const pending = document.createElement("span");
      const a = JSON.stringify(actual[key] ?? null);
      const d = JSON.stringify(desired[key] ?? null);
      if (a !== d) {
        pending.className = "is-pending";
        pending.textContent = `${t("pendingValue")}: ${lvlSettingDisplayValue(key, desired[key], bootstrap)}`;
      } else {
        pending.textContent = t("actualValue");
      }
      row.append(copy, pending); list.appendChild(row);
    }
    root.appendChild(list);
    const sync = document.createElement("div"); sync.className = "lvl-sync-box";
    sync.appendChild(lvlChip(t("syncStatus"), String(bootstrap?.sync?.status || "synced")));
    sync.appendChild(lvlChip(t("lastSync"), lvlHumanSyncTime(bootstrap?.sync?.syncedAt)));
    root.appendChild(sync);
  }

  function updateLvlHubTokenDisplays(rawValue) {
    const value = Number.isFinite(Number(rawValue)) ? Math.max(0, Math.floor(Number(rawValue))) : null;
    const formatted = value === null ? "—" : value.toLocaleString(lvlLocale());
    ["#lvlHubTokens", "#lvlHubTokensSticky"].forEach((selector) => {
      const node = $(selector);
      if (node) node.textContent = formatted;
    });
    const dock = $("#lvlHubTokenDock");
    const changed = value !== null && lvlHubState.lastTokenBalance !== null && value !== lvlHubState.lastTokenBalance;
    if (dock) {
      dock.classList.toggle("is-empty", value === null);
      if (changed) {
        dock.classList.remove("is-flash");
        void dock.offsetWidth;
        dock.classList.add("is-flash");
      }
    }
    if (changed) {
      ["#lvlHubTokens", "#lvlHubTokensSticky"].forEach((selector) => {
        const node = $(selector);
        if (!node) return;
        node.classList.remove("is-flash");
        void node.offsetWidth;
        node.classList.add("is-flash");
      });
    }
    lvlHubState.lastTokenBalance = value;
  }

  function renderLvlHub() {
    const bootstrap = lvlReadOnlyData();
    const actualSkinId = actualLvlSkinId();
    const actualSkin = actualSkinId ? lvlSkinById(actualSkinId) : null;
    const actualSkinName = actualSkin ? actualSkin.name : lvlLocalized("СТАНДАРТНЫЙ", "DEFAULT");
    $$('[data-lvl-actual-name]').forEach((node) => { node.textContent = actualSkinName; });
    $$('[data-lvl-actual-image]').forEach((image) => {
      const holder = image.closest(".lvl-hub-tile__skin, .lvl-hub-equipped__figure");
      if (actualSkin) {
        decorateLvlSkinImage(image, actualSkin);
        holder?.classList.remove("is-skin-off");
      } else {
        decorateLvlSkinImage(image, "sas");
        holder?.classList.add("is-skin-off");
      }
    });

    const profile = bootstrap?.profile || authState.profile;
    const account = authState.account;
    const name = $("#lvlHubPlayerName");
    const avatar = $("#lvlHubAvatar");
    const level = $("#lvlHubLevel");
    if (name) name.textContent = profile?.name || profile?.username || account?.username || (language === "ru" ? "ГОСТЬ" : "GUEST");
    if (avatar) avatar.src = avatarSource(profile?.avatarId || authState.profile?.avatarId || DEFAULT_AVATAR_ID);
    if (level) level.textContent = profile ? `LVL ${integer(profile.level, 1, 1, 2147483647)}` : "LVL —";
    updateLvlHubTokenDisplays(profile ? Number(profile.tokens || 0) : null);

    const activeKnifeId = actualLvlKnifeId(bootstrap);
    const activeKnife = lvlKnifeById(activeKnifeId);
    $$('[data-lvl-actual-knife-name]').forEach((node) => { node.textContent = activeKnife ? lvlLocalized(activeKnife.ru, activeKnife.en, activeKnife.knifeId) : t("knifeNone"); });
    $$('[data-lvl-actual-knife-image]').forEach((image) => {
      const holder = image.closest(".lvl-hub-equipped__knife");
      if (activeKnife) {
        image.src = activeKnife.preview;
        image.alt = lvlLocalized(activeKnife.ru, activeKnife.en, activeKnife.knifeId);
        holder?.classList.remove("is-off");
      } else {
        image.src = "assets/knives/glass.webp";
        image.alt = t("knifeNone");
        holder?.classList.add("is-off");
      }
    });

    if (!lvlHubState.previewSkinId) lvlHubState.previewSkinId = actualSkin?.skinId || "sas";

    setLvlHubTab(lvlHubState.tab);
    renderLvlSyncBadge();
    renderLvlSkinGallery();
    renderLvlKnifeGallery();
    renderLvlShop();
    renderLvlMarket();
    renderLvlInventory();
    renderLvlFriends();
    renderLvlBattlePass();
    renderLvlSettingsSummary();
  }

  function openLvlHub(tab = "overview") {
    lvlHubState.tab = tab;
    renderLvlHub();
    showView("lvlhub");
    void fetchLvlBootstrap(false);
  }

  function tickClock() {
    const now = new Date();
    setTextAll("[data-clock]", now.toLocaleTimeString(language === "ru" ? "ru-RU" : "en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    }));
  }

  function bind() {
    $$('[data-lang]').forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
    $("#notificationButton")?.addEventListener("click", () => setNotificationCenter(!notificationState.open));
    $$('[data-close-notifications]').forEach((button) => button.addEventListener("click", () => setNotificationCenter(false)));
    $("#notificationsMarkAll")?.addEventListener("click", () => void markAllNotificationsRead());
    $("#notificationList")?.addEventListener("click", (event) => {
      const card = event.target.closest("[data-notification-id]");
      if (card) void markNotificationRead(card.dataset.notificationId);
    });
    $$('[data-nav]').forEach((button) => button.addEventListener("click", (event) => {
      event.preventDefault();
      showView(button.dataset.nav);
      if (button.dataset.nav === "control" && authState.sessionToken) void fetchLvlBootstrap(false);
    }));
    $("#menuButton").addEventListener("click", () => setDrawer(!$("#drawer").classList.contains("is-open")));
    $("#scrim").addEventListener("click", () => setDrawer(false));
    $$('[data-close-drawer]').forEach((button) => button.addEventListener("click", () => setDrawer(false)));
    $$('[data-open-login]').forEach((button) => button.addEventListener("click", () => {
      if (authState.account && authState.profile) {
        setDrawer(false);
        showView("profile");
      } else {
        setLogin(true);
      }
    }));
    $$('[data-open-lvl-hub]').forEach((button) => button.addEventListener("click", () => openLvlHub("overview")));
    $("#lvlHubRefresh")?.addEventListener("click", () => {
      if (!authState.sessionToken) { setLogin(true); return; }
      void fetchLvlBootstrap(true);
    });
    $$('[data-lvl-tab]').forEach((button) => button.addEventListener("click", () => setLvlHubTab(button.dataset.lvlTab)));
    $$('[data-lvl-jump]').forEach((button) => button.addEventListener("click", () => setLvlHubTab(button.dataset.lvlJump)));
    $("#lvlHubFriends")?.addEventListener("click", async (event) => {
      const button = event.target.closest("[data-social-action]");
      if (!button || button.disabled) return;
      const action = String(button.dataset.socialAction || "");
      if (action === "friend_add_form") {
        const targetName = String($("#lvlFriendAddName")?.value || "").trim();
        if (!targetName) return;
        await runLvlSocialAction("social_friend_add", { targetName });
        return;
      }
      if (action === "message_send_form") {
        const targetName = String($("#lvlMessageTarget")?.value || "").trim();
        const text = String($("#lvlMessageText")?.value || "").trim();
        if (!targetName || !text) return;
        if (await runLvlSocialAction("social_message_send", { targetName, text })) { const field = $("#lvlMessageText"); if (field) field.value = ""; }
        return;
      }
      if (action === "token_send_form") {
        const targetName = String($("#lvlTokenTarget")?.value || "").trim();
        const amount = Number($("#lvlTokenAmount")?.value || 0);
        if (!targetName || !amount) return;
        await runLvlSocialAction("social_token_send", { targetName, amount });
        return;
      }
      if (action === "compose_message") {
        const select = $("#lvlMessageTarget"); if (select) select.value = String(button.dataset.targetName || "");
        $("#lvlMessageText")?.focus();
        $("#lvlMessageTarget")?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      if (action === "compose_tokens") {
        const select = $("#lvlTokenTarget"); if (select) select.value = String(button.dataset.targetName || "");
        $("#lvlTokenTarget")?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      if (action === "social_inbox_clear" && !window.confirm(lvlLocalized("Удалить все входящие сообщения?", "Delete all inbox messages?"))) return;
      if (action === "social_block") {
        if (!window.confirm(lvlLocalized("Заблокировать игрока? Дружба будет удалена, а новые сообщения и заявки от него будут запрещены.", "Block this player? Friendship will be removed and new messages and requests from them will be blocked."))) return;
      }
      if (action === "social_unblock") {
        if (!window.confirm(lvlLocalized("Разблокировать игрока?", "Unblock this player?"))) return;
      }
      if (["social_friend_remove", "social_subscription_cancel", "social_message_delete"].includes(action)) {
        if (!window.confirm(lvlLocalized("Подтвердить действие?", "Confirm action?"))) return;
      }
      const payload = {};
      if (button.dataset.targetName) payload.targetName = button.dataset.targetName;
      if (button.dataset.messageId) payload.messageId = button.dataset.messageId;
      await runLvlSocialAction(action, payload);
    });
    $$('[data-lvl-open-settings]').forEach((button) => button.addEventListener("click", () => openControlPanel("lvl")));
    $$('[data-control-panel]').forEach((button) => button.addEventListener("click", () => openControlPanel(button.dataset.controlPanel)));
    $$('[data-close-control]').forEach((button) => button.addEventListener("click", () => setControlModal(false)));
    $("#controlModal")?.addEventListener("click", (event) => { if (event.target === event.currentTarget) setControlModal(false); });
    $$('[data-open-auth-help]').forEach((button) => button.addEventListener("click", () => { setLogin(false); setAuthHelp(true); }));
    $$('[data-close-auth-help]').forEach((button) => button.addEventListener("click", () => setAuthHelp(false)));
    $("#authHelpModal")?.addEventListener("click", (event) => { if (event.target === event.currentTarget) setAuthHelp(false); });
    $$('[data-close-login]').forEach((button) => button.addEventListener("click", () => setLogin(false)));
    $("#loginModal").addEventListener("click", (event) => { if (event.target === event.currentTarget) setLogin(false); });
    $$('[data-close-player]').forEach((button) => button.addEventListener("click", () => setPlayerModal(false)));
    $("#playerModal")?.addEventListener("click", (event) => { if (event.target === event.currentTarget) setPlayerModal(false); });
    $$('[data-rank-sort]').forEach((button) => button.addEventListener("click", () => fetchLeaderboard(button.dataset.rankSort, true)));
    $$('[data-rank-mode]').forEach((button) => button.addEventListener("click", () => setRankingMode(button.dataset.rankMode)));
    $("#comparePlayersButton")?.addEventListener("click", () => void runPlayerComparison());
    $("#compareSwapButton")?.addEventListener("click", () => {
      const names = compareInputNames();
      compareState.leftName = names.right;
      compareState.rightName = names.left;
      const leftProfile = compareState.leftProfile;
      compareState.leftProfile = compareState.rightProfile;
      compareState.rightProfile = leftProfile;
      compareState.error = "";
      syncCompareInputs();
      renderPlayerComparison();
    });
    [$("#comparePlayerA"), $("#comparePlayerB")].forEach((input) => input?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") { event.preventDefault(); void runPlayerComparison(); }
    }));
    $("#comparePlayerA")?.addEventListener("focus", () => { compareState.pickSide = "left"; syncComparePickTarget(); });
    $("#comparePlayerB")?.addEventListener("focus", () => { compareState.pickSide = "right"; syncComparePickTarget(); });
    $("#compareTopPicker")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-compare-pick]");
      if (button) pickComparePlayerFromTop(button.dataset.comparePick);
    });
    $("#playerModalBody")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-compare-player]");
      if (button) compareWithSelectedPlayer(button.dataset.comparePlayer);
    });
    $("#seasonHistoryBody")?.addEventListener("click", (event) => {
      const seasonButton = event.target.closest("[data-season-key]");
      if (seasonButton) { void fetchSeasonHistory(seasonButton.dataset.seasonKey, "level"); return; }
      const backButton = event.target.closest("[data-season-back]");
      if (backButton) {
        seasonArchiveState.selectedSeason = ""; seasonArchiveState.seasonMeta = null; seasonArchiveState.seasonPlayers = []; seasonArchiveState.seasonError = "";
        renderSeasonHistory(); return;
      }
      const sortButton = event.target.closest("[data-season-sort]");
      if (sortButton && seasonArchiveState.selectedSeason) void fetchSeasonHistory(seasonArchiveState.selectedSeason, sortButton.dataset.seasonSort);
    });
    $("#loginForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      if (authState.loading) return;
      const form = new FormData(event.currentTarget);
      const username = String(form.get("username") || "").trim();
      const password = String(form.get("password") || "");
      if (!username || !password) {
        setLoginStatus(t("invalidCredentials"), true);
        return;
      }
      await loginAccount(username, password);
    });

    $("[data-toggle-password]")?.addEventListener("click", (event) => {
      const input = $("#loginPassword"); if (!input) return;
      const showing = input.type === "text"; input.type = showing ? "password" : "text";
      event.currentTarget.textContent = showing ? "👁" : "🙈";
      event.currentTarget.setAttribute("aria-label", showing ? t("showPassword") : t("hidePassword"));
    });

    function toggleAuthPanel(button, panel, forceOpen = null) {
      if (!button || !panel) return false;
      const open = forceOpen === null ? panel.hidden : Boolean(forceOpen);
      panel.hidden = !open;
      button.setAttribute("aria-expanded", String(open));
      button.classList.toggle("is-open", open);
      return open;
    }

    $("[data-toggle-auth-info]")?.addEventListener("click", (event) => {
      toggleAuthPanel(event.currentTarget, $("#authInfoPanel"));
    });
    $("[data-toggle-other-login]")?.addEventListener("click", (event) => {
      toggleAuthPanel(event.currentTarget, $("#authOtherPanel"));
    });
    $("[data-forgot-password]")?.addEventListener("click", () => {
      toggleAuthPanel($("[data-toggle-other-login]"), $("#authOtherPanel"), true);
      toggleAuthPanel($("[data-toggle-email-login]"), $("#emailLoginPanel"), true);
      $("#emailLoginIdentifier")?.focus();
    });
    $("[data-toggle-email-login]")?.addEventListener("click", (event) => {
      const open = toggleAuthPanel(event.currentTarget, $("#emailLoginPanel"));
      if (open) $("#emailLoginIdentifier")?.focus();
    });
    let emailLoginChallengeId="";
    $("#emailLoginRequest")?.addEventListener("click", async()=>{
      const identifier=String($("#emailLoginIdentifier")?.value||"").trim(); if(!identifier) return;
      const status=$("#emailLoginStatus");
      try{const data=await startEmailLogin(identifier);emailLoginChallengeId=String(data.challengeId||"");$("#emailLoginVerifyRow").hidden=false;if(status)status.textContent=`${t("codeSent")} ${data.emailMasked||""}`.trim();$("#emailLoginCode")?.focus();}
      catch(error){if(status)status.textContent=authErrorMessage(error);}
    });
    $("#emailLoginVerify")?.addEventListener("click",async()=>{
      const code=String($("#emailLoginCode")?.value||"").trim();const status=$("#emailLoginStatus");if(!emailLoginChallengeId||code.length!==6){if(status)status.textContent=t("invalidCode");return;}
      try{await verifyEmailLogin(emailLoginChallengeId,code);}catch(error){if(status)status.textContent=authErrorMessage(error);}
    });
    void renderGoogleButtons();
    $("#themeToggle")?.addEventListener("click", toggleColorTheme);
    $("#serverJoinButton")?.addEventListener("click", launchServerJoin);
    $("#shareButton").addEventListener("click", shareSite);
    $("#drawerShare").addEventListener("click", shareSite);
    $$("[data-copy-server]").forEach((button) => button.addEventListener("click", async () => {
      const key = button.dataset.copyServer || "";
      const address = config.servers?.[key] || button.dataset.address || "";
      const copied = await copyText(address);
      toast(copied ? `${t("copied")}: ${address}` : t("copyFailed"));
    }));
  }

  applyConfig();
  applyColorTheme(colorTheme, false);
  bind();
  setupAmbientAudioToggle();
  setupPinball();
  applyLanguage(language);
  tickClock();
  setInterval(tickClock, 1000);
  document.addEventListener("visibilitychange", handleStatusVisibilityChange);
  window.addEventListener("storage", handleStatusStorage);
  window.addEventListener("pagehide", releaseStatusLeader);
  renderCachedStatus();
  void runStatusPoll();
  void fetchSeasonPromos();
  setInterval(() => void fetchSeasonPromos(), 60000);
  void fetchNotifications(true);
  setInterval(() => void fetchNotifications(false), 60000);
  renderSeasonDuration();
  void refreshSeasonDurationTarget();
  setInterval(renderSeasonDuration, 1000);
  setInterval(() => void refreshSeasonDurationTarget(), 300000);
  initializeAuth();
})();
