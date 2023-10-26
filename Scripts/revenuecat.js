const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
console.log(ua);
const list = {
'1Blocker': { name: 'premium', id: 'blocker.ios.subscription.lifetime' },
'Alpenglow': { name: 'newPro', id: 'ProLifetime' },
'Anybox': { name: 'pro', id: 'cc.anybox.Anybox.annual' },
'APTV': { name: 'pro', id: 'com.kimen.aptvpro.lifetime' },
'Athan%20Pro': { name: 'com.quanticapps.premium', id: 'com.quanticapps.athanpro.premium.onetime'},
'audiomack': { name: 'Premium1', id: 'com.audiomack.premium.2023' },
'audiomack-iphone': { name: 'Premium1', id: 'com.audiomack.premium.2018'},
'Blink': { name: 'pro', id: 'blink_shell_plus_1y_1999' },
'CadTool': { name: 'revencat.entitlement.cadviewer', id: 'com.jieluo.cadviewer.subsription.yearly'},
'CallRecorder': { name: 'full_access', id: 'com.prettyboa.CallRecorder.MonthlySubscription2999' },
'Calories': { name: 'premium', id: 'com.lhmedia.healthyfood.calories.12months'},
'Chai': { name: 'premium', id: 'subscription_gold_trial'}, // subscription_gold_annually
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
'DeforumAI': { name: 'Subscriptions', id: 'com.niwoq.deforum.weekly.subscription'},
'djay': { name: 'pro', id: 'com.algoriddim.djay_iphone_free.pro.yearly' },
'DNS%20Changer': { name: 'premium', id: 'com.burakgon.dnschanger.sub_1_year_7.99usd'},
'Dream': { name: 'dreampremium', id: 'dream_lifetime' },
'dreamerai': { name: 'Pro', id: 'dreamerai_lifetime'},
'DSDownload': { name: 'Unlimited', id: 'dsdownload.app.subscription.lifetime.a'},
'Endel': { name: 'pro', id: 'Lifetime  discount 50'},
'Everlog': { name: 'premium', id: 'co.wonderbit.hummingbird.lifetime'},
'Fileball': { name: 'filebox_pro', id: 'filebox_pro' },
'FoodNoms': { name: 'plus', id: 'com.algebraiclabs.foodnoms.plus.annual'},
'Funimate': { name: 'Pro', id: 'com.avcr.funimate.ProSubscription.weekly.ft3day'},
'Genius': { name: 'premium', id: 'com.alloy.genius.subscription.monthly'},
'GoRecord': { name: 'Pro', id: 'com.alloy.screenrecorder.subcription.monthlyPro'},
'Greg': { name: 'super_greg', id: 'greg_29999_lifetime'},
'Grow': { name: 'grow.pro', id: 'grow_lifetime' },
'Harukong': { name: 'premium', id: 'com.bluesignum.harukong.lifetime.premium'},
'HTTPBot': { name: 'pro', id: 'com.behindtechlines.HTTPBot.prounlock'},
'image_upscaler': { name: 'pro', id: 'yearly_sub_pro'},
'ipTV': { name: 'ipTV+', id: 'iptv_39.99_infinity'},
'Logo_Maker': { name: 'UNLIMITED ACCESS', id: 'com.logomaker.fullyearly' },
'MallocVPN': { name: 'IOS_PRO', id: 'malloc_vpn_one_off' },
'Meditation': { name: 'premium', id: 'thien_duong_dai_goi_nam'},
'mizframa': { name: 'premium', id: 'mf_20_lifetime2' },
'Mockview': { name: 'Pro', id: 'kavsoft.dev.yearly'},
'Moises': { name: 'premium', id: 'yearly'},
'Mojo': { name: 'pro', id: 'video.mojo.pro.yearly'},
'MoneyCoach': { name: 'Premium', id: 'lifetimePremium' },
'MyAniList': { name: 'Tokubetsu+', id: 'com.coreyroberts.myanilist.tokubetsu.forever' },
'Naughty': { name: 'Premium', id: 'com.scottjulian.nice.yearly2'},
'NotePlan': { name: 'Personal Annual', id: 'co.noteplan.subscription.personal.annual'},
'Noto': { name: 'pro', id: 'com.lkzhao.editor.full'}, // com.lkzhao.editor.pro.ios.yearly // monthly // lifetime
'NotVPN': { name: 'Premium', id: 'org.reactjs.native.exampleio.NotVPN.30'},
'OffScreen': { name: 'Entitlement.Pro', id: 'tech.miidii.OffScreen.pro.c' },
'OneBox': { name: 'all', id: 'com.ziheng.totowallet.onetimepurchase'},
'Paper': { name: 'pro', id: 'com.fiftythree.paper.pro_12'},
'Parrot': { name: 'Lifetime Pro', id: 'p_2999_life'},
'PDF%20Viewer': { name: 'sub.pro', id: 'com.pspdfkit.viewer.sub.pro.yearly'},
'Penbook': { name: 'pro', id: 'penbook.lifetime02'},
'Period%20Calendar': { name: 'Premium', id: 'com.lbrc.PeriodCalendar.premium.yearly'},
'PhotoRoom': { name: 'business', id: 'com.background.business.yearly' },
'Pixelcut': { name: 'teams', id: 'com.circular.pixels.teams.monthly.3' }, // pro | com.circular.pixels.pro.yearly
'Planny': { name: 'premium', id: 'com.kevinreutter.Sagittarius.Premium3Months' },
'Pomodoro': { name: 'Plus', id: 'com.MINE.PomodoroTimer.plus.lifetime.en.forYearly' },
'ProximoJogo': { name: 'Pro', id: 'nm_199_lifetime'},
'Quran%20Pro': { name: 'com.quanticapps.premium', id: 'com.quanticapps.quranpro.premium.onetime'},
'Radarbot': { name: 'truck_access', id: 'rb_truck_5999_annual_direct'},
'Reface': { name: 'pro', id: 'com.reface.yearly' },
'ScannerPro': { name: 'plus', id: 'com.readdle.Scanner.subscription.year25'},
'shortcut': { name: 'subscription', id: 'standard.monthly'},
'Simple': { name: 'pro', id: 'ios_simple_original_subscription_12_weeks_2999_trial_7d'},
'Spark': { name: 'premium', id: 'spark_b_799_1m_1w0'},
'Super%20Agent': { name: 'unlimited', id: 'sa_2999_lifetime'},
'Tangerine': { name: 'Premium', id: 'PremiumMonthly'},
'Thenics': { name: 'Pro', id: 'pro_yearly_subscription_ios'},
'TouchRetouchBasic': { name: 'premium', id: 'tr5_yearlysubsc_15dlrs_1'},
'TuneIn': { name: 'subscriptions', id: 'com.tunein.TuneInRadio.TUNEIN_1_MONTH_7_DAY_1.99'},
'Ultrawall': { name: 'lifetime', id: 'com.idevtal.Wallpapers.lifetime'},
'Usage': { name: 'pro', id: 'com.olegst.usage.pro'},
'Viet%20ID': { name: 'Pro', id: 'yearly_pro'},
'VSCO': { name: 'membership', id: 'com.circles.fin.premium.yearly' },
'WidgetsApp': { name: 'pro', id: 'cw_1999_1y' },
'Locket': { name: 'Gold', id: 'locket_2400_1y' },
'Zoomerang': { name: 'pro', id: 'zoomerang.yearly.h' },
'Widgetsmith': { name: 'Premium', id: 'PremiumMonthly' }
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