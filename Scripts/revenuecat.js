const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
console.log(ua);
const list = {
'1Blocker': { name: 'premium', id: 'blocker.ios.subscription.lifetime' },
'aichat/23': { name: 'premium', id: 'sa_lifetime_premium'},
'Alpenglow': { name: 'newPro', id: 'ProLifetime' },
'AnkiPro': { name: 'Premium', id: 'com.ankipro.app.lifetime'},
'Anybox': { name: 'pro', id: 'cc.anybox.Anybox.annual' },
'APTV': { name: 'pro', id: 'com.kimen.aptvpro.lifetime' },
'Athan%20Pro': { name: 'com.quanticapps.premium', id: 'com.quanticapps.athanpro.premium.onetime'},
'audiomack': { name: 'Premium1', id: 'com.audiomack.premium.2023' },
'Authenticator': { name: 'Premium', id: 'com.obsidian.lifetime'},
'Blink': { name: 'pro', id: 'blink_shell_plus_1y_1999' },
'CadTool': { name: 'revencat.entitlement.cadviewer', id: 'com.jieluo.cadviewer.subsription.yearly'},
'CallRecorder': { name: 'full_access', id: 'com.prettyboa.CallRecorder.MonthlySubscription2999' },
'Calories': { name: 'premium', id: 'com.lhmedia.healthyfood.calories.12months'},
'Chai': { name: 'premium', id: 'subscription_gold'}, // subscription_gold_annually
'chatbotapp': { name: 'Premium', id: 'aichat_premium_yearly1'},
'ChatGPTApp': { name: 'Advanced', id: 'com.palligroup.gpt3.weeklyyy'}, // com.palligroup.gpt3.yearlyyy
'Chatme': { name: 'premium', id: 'chatme_premium_week_trial'},
'ChessvisionMobile': { name: 'default', id: 'basic_subscription_1_year'},
'ClipDrop': { name: 'unlimited', id: 'app.arcopypaste.subscriptions.yearly'},
'Clockology': { name: 'pro', id: 'com.mikehill.clockologyios.yearly'},
'Collect': { name: 'pro', id: 'com.revenuecat.product.yearly.ios'},
'CPUMonitor': { name: 'Pro', id: 'pro_annual' },
'Currency': { name: 'pro', id: 'com.jeffreygrossman.currencyapp.iap.pro' },
'Darkroom': { name: 'subscriptions', id: 'co.bergen.Darkroom.product.forever.everything'},
//'Dream': { name: 'dreampremium', id: 'dream_lifetime' },
'DeforumAI': { name: 'Subscriptions', id: 'com.niwoq.deforum.weekly.subscription'},
'djay': { name: 'pro', id: 'com.algoriddim.djay_iphone_free.pro.yearly' },
'DNS%20Changer': { name: 'premium', id: 'com.burakgon.dnschanger.sub_1_year_7.99usd'},
'Done': { name: 'Growth_Bundle_Subscription', id: 'com.tbd.Done.growth.bundle.yearly.v6'},
'Drafthound': { name: 'Pro', id: 'drafthound_pro_annual'},
'dreamerai': { name: 'Pro', id: 'dreamerai_lifetime'},
'DSDownload': { name: 'Unlimited', id: 'dsdownload.app.subscription.lifetime.a'},
'Endel': { name: 'pro', id: 'Lifetime  discount 50'},
'Everlog': { name: 'premium', id: 'co.wonderbit.hummingbird.lifetime'},
'Fileball': { name: 'filebox_pro', id: 'filebox_pro' },
'FitnessCoach': { name: 'premium', id: 'yearly_79_zing.coach'},
'FoodNoms': { name: 'plus', id: 'com.algebraiclabs.foodnoms.plus.annual'},
'Funimate': { name: 'Pro', id: 'com.avcr.funimate.ProSubscription.weekly.ft3day'},
'Gear': { name: 'pro', id: 'com.gear.app.yearly'},
'Genius': { name: 'premium', id: 'com.alloy.genius.subscription.monthly'},
'GoRecord': { name: 'Pro', id: 'com.alloy.screenrecorder.subcription.monthlyPro'},
'Greg': { name: 'super_greg', id: 'greg_29999_lifetime'},
'Grow': { name: 'grow.pro', id: 'grow_lifetime' },
'Harukong': { name: 'premium', id: 'com.bluesignum.harukong.lifetime.premium'},
'HTTPBot': { name: 'pro', id: 'com.behindtechlines.HTTPBot.prounlock'},
'image_upscaler': { name: 'pro', id: 'yearly_sub_pro'},
//'ipTV': { name: 'ipTV+', id: 'iptv_39.99_infinity'},
'IPTVUltra': { name: 'premium', id: 'com.poopsnaggle.IPTVUltra.lifetime'},
'Konsensus': { name: 'patron', id: 'konsensus.patron.lifetime'},
'Locket': { name: 'Gold', id: 'locket_3600_1y'},
'Logo_Maker': { name: 'UNLIMITED ACCESS', id: 'com.logomaker.fullyearly' },
'Loopsie': { name: 'pro-iOS', id: 'com.gamelounge.loopsie.ios.one_time'},
'MallocVPN': { name: 'IOS_PRO', id: 'malloc_vpn_one_off' },
'Meditation': { name: 'premium', id: 'thien_duong_dai_goi_nam'},
'mizframa': { name: 'premium', id: 'mf_20_lifetime2' },
'Mockview': { name: 'Pro', id: 'kavsoft.dev.yearly'},
'Moises': { name: 'premium', id: 'yearly'},
'Mojo': { name: 'pro', id: 'video.mojo.pro.yearly'},
'Monefy': { name: 'premium', id: 'com.monefyapp.subscription.yearly.v2'},
'MoneyCoach': { name: 'Premium', id: 'lifetimePremium' },
'MOZE': { name: 'MOZE_PRO_SUBSCRIPTION_MONTHLY_BASIC', id: 'MOZE_PRO_SUBSCRIPTION_MONTHLY_BASIC'},
'MyAniList': { name: 'Tokubetsu+', id: 'com.coreyroberts.myanilist.tokubetsu.forever' },
'Naughty': { name: 'Premium', id: 'com.scottjulian.nice.yearly2'},
'NotePlan': { name: 'Personal Annual', id: 'co.noteplan.subscription.personal.annual'},
'Noto': { name: 'pro', id: 'com.lkzhao.editor.full'},
'NotVPN': { name: 'Premium', id: 'org.reactjs.native.exampleio.NotVPN.30'},
'OffScreen': { name: 'Entitlement.Pro', id: 'tech.miidii.OffScreen.pro.c' },
'One4WallSwiftUI': { name: 'lifetime', id: 'lifetime_key'},
'OneBox': { name: 'all', id: 'com.ziheng.totowallet.onetimepurchase'},
'Paper': { name: 'pro', id: 'com.fiftythree.paper.pro_12'},
'Parrot': { name: 'Lifetime Pro', id: 'p_2999_life'},
'PDF%20Viewer': { name: 'sub.pro', id: 'com.pspdfkit.viewer.sub.pro.yearly'},
'Penbook02': { name: 'pro', id: 'penbook.lifetime02'},
'Period%20Calendar': { name: 'Premium', id: 'com.lbrc.PeriodCalendar.premium.yearly'},
'Photomator': { name: 'pixelmator_photo_pro_access', id: 'pixelmator_photo_lifetime_v1'},
'PhotoRoom': { name: 'business', id: 'com.background.business.yearly' },
'PhotoSync': { name: 'premium', id: 'com.touchbyte.PhotoSync.PremiumLifetime'},
'Pixelcut': { name: 'teams', id: 'com.circular.pixels.teams.monthly.3' },
'Pixel%20Pals': { name: 'Premium', id: 'com.christianselig.pixelpalspremium.yearly'},
'Planny': { name: 'premium', id: 'com.kevinreutter.Sagittarius.Premium3Months' },
'Pomodoro': { name: 'Plus', id: 'com.MINE.PomodoroTimer.plus.lifetime.en.forYearly' },
'ProximoJogo': { name: 'Pro', id: 'nm_199_lifetime'},
'Quran%20Pro': { name: 'com.quanticapps.premium', id: 'com.quanticapps.quranpro.premium.onetime'},
'Radarbot': { name: 'truck_access', id: 'rb_truck_5999_annual_direct'},
'Reface': { name: 'pro', id: 'com.reface.yearly' },
'Rise%20Sleep': { name: 'Pro', id: 'com.risesci.nyx.subscriptions.annual_70'},
'ScannerPro': { name: 'plus', id: 'com.readdle.Scanner.subscription.year25'},
'Scorespot': { name: 'plus', id: 'com.roadesign.Scorespot.Lifetime'},
'SCRL': { name: 'com.dopedevelopment.Panels.subscription.Pro', id: 'com.dopedevelopment.Panels.subscription.Pro'},
'ServerCat': { name: 'premium', id: 'servercat_premium_universal'},
'shortcut': { name: 'subscription', id: 'standard.monthly'},
'Simple': { name: 'pro', id: 'ios_simple_original_subscription_12_weeks_2999_trial_7d'},
'Smart%20Video': { name: 'Max', id: 'TranscriptionMaxYearly'},
'Spark': { name: 'premium', id: 'spark_b_799_1m_1w0'},
'Structured': { name: 'pro', id: 'today.structured.pro'},
'Super%20Agent': { name: 'unlimited', id: 'sa_2999_lifetime'},
'Tangerine': { name: 'Premium', id: 'PremiumMonthly'},
'Thenics': { name: 'Pro', id: 'pro_yearly_subscription_ios'},
'TouchRetouchBasic': { name: 'premium', id: 'tr5_yearlysubsc_15dlrs_1'},
'TuneIn': { name: 'subscriptions', id: 'com.tunein.TuneInRadio.TUNEIN_1_MONTH_7_DAY_1.99'},
'TV%20Remote%20Samsung': { name: 'premium', id: 'tvs_999_1y_3d0'},
'Ultrawall': { name: 'lifetime', id: 'com.idevtal.Wallpapers.lifetime'},
'universal': { name: 'Premium', id: 'remotetv.yearly.01'},
'Usage': { name: 'pro', id: 'com.olegst.usage.pro'},
'Viet%20ID': { name: 'Pro', id: 'yearly_pro'},
'VSCO': { name: 'membership', id: 'com.circles.fin.premium.yearly' },
'WidgetsApp': { name: 'pro', id: 'cw_1999_1y' },
'Widgetsmith': { name: 'Premium', id: 'PremiumMonthly' },
'Zoomerang': { name: 'pro', id: 'zoomerang.yearly.h' },
'Tacter': { name: 'tier1.tacter.app', id: 'pe.high.annual.tacter.app' },
'Sex%20Actions': { name: 'Premium', id: 'ru.sexactions.subscriptionPromo1' }
};
const data = {
	"expires_date": "2099-02-18T07:52:54Z",
	"original_purchase_date": "2020-02-11T07:52:55Z",
	"purchase_date": "2020-02-11T07:52:54Z"
};

if (typeof $response == "undefined") {
	delete $request.headers["x-revenuecat-etag"]; // prevent 304 issues
	delete $request.headers["X-RevenueCat-ETag"];
	resp.headers = $request.headers;
} else if (obj && obj.subscriber) {
	obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
	obj.subscriber.entitlement = obj.subscriber.entitlement || {};
	for (const i in list) {
		// if (new RegExp(`^${i}`, `i`).test(ua)) {
		if (new RegExp(`^${i}(?:\\W|$)`, `i`).test(ua)) {
			obj.subscriber.subscriptions[list[i].id] = data;
			obj.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
			obj.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
			break;
		}
	}
	resp.body = JSON.stringify(obj).replace(/\"expires_date\":\"\w{4}/g, "\"expires_date\":\"2099").replace(/\"period_type\":\"\w+\"/g, "\"period_type\":\"active\"");
}
$done(resp);