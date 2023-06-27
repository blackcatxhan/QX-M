const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
console.log(ua);
const list = {
'VSCO': { name: 'membership', id: 'com.circles.fin.premium.yearly' },
'1Blocker': { name: 'premium', id: 'blocker.ios.subscription.lifetime' },
'Anybox': { name: 'pro', id: 'cc.anybox.Anybox.annual' },
'Fileball': { name: 'filebox_pro', id: 'filebox_pro' },
'ipTV': { name: 'ipTV+', id: 'iptv_39.99_infinity'},
'APTV': { name: 'pro', id: 'com.kimen.aptvpro.lifetime' },
'Blink': { name: 'pro', id: 'blink_shell_plus_1y_1999' },
'mizframa': { name: 'premium', id: 'mf_20_lifetime2' },
'CallRecorder': { name: 'full_access', id: 'com.prettyboa.CallRecorder.MonthlySubscription2999' },
'Pixelcut': { name: 'teams', id: 'com.circular.pixels.teams.monthly.3' },
'Planny': { name: 'premium', id: 'com.kevinreutter.Sagittarius.Premium3Months' },
'WidgetsApp': { name: 'pro', id: 'cw_1999_1y' },
'djay': { name: 'pro', id: 'com.algoriddim.djay_iphone_free.pro.yearly' },
'PhotoRoom': { name: 'business', id: 'com.background.business.yearly' },
'CPUMonitor': { name: 'Pro', id: 'pro_annual' },
'Alpenglow': { name: 'newPro', id: 'ProLifetime' },
'Pomodoro': { name: 'Plus', id: 'com.MINE.PomodoroTimer.plus.lifetime.en.forYearly' },
'MoneyCoach': { name: 'Premium', id: 'lifetimePremium' },
'Reface': { name: 'pro', id: 'com.reface.yearly' },
'MyAniList': { name: 'Tokubetsu+', id: 'com.coreyroberts.myanilist.tokubetsu.forever' },
'Currency': { name: 'pro', id: 'com.jeffreygrossman.currencyapp.iap.pro' },
'Dream': { name: 'dreampremium', id: 'dream_lifetime' },
'audiomack': { name: 'Premium1', id: 'com.audiomack.premium.2023' },
'OffScreen': { name: 'Entitlement.Pro', id: 'tech.miidii.OffScreen.pro.c' },
'Logo_Maker': { name: 'UNLIMITED ACCESS', id: 'com.logomaker.fullyearly' },
'MallocVPN': { name: 'IOS_PRO', id: 'malloc_vpn_one_off' },
'Grow': { name: 'grow.pro', id: 'grow_lifetime' },
'Noto': { name: 'pro', id: 'com.lkzhao.editor.full'},
'Ultrawall': { name: 'lifetime', id: 'com.idevtal.Wallpapers.lifetime'},
'ClipDrop': { name: 'unlimited', id: 'app.arcopypaste.subscriptions.yearly'},
'Mockview': { name: 'Pro', id: 'kavsoft.dev.yearly'},
'Harukong': { name: 'premium', id: 'com.bluesignum.harukong.lifetime.premium'},
'CadTool': { name: 'revencat.entitlement.cadviewer', id: 'com.jieluo.cadviewer.subsription.yearly'},
'chatbotapp': { name: 'Premium', id: 'aichat_premium_yearly1'},
'Moises': { name: 'premium', id: 'yearly'},
'NotePlan': { name: 'Personal Annual', id: 'co.noteplan.subscription.personal.annual'},
'Greg': { name: 'super_greg', id: 'greg_29999_lifetime'},
'OneBox': { name: 'all', id: 'com.ziheng.totowallet.onetimepurchase'},
'ScannerPro': { name: 'plus', id: 'com.readdle.Scanner.subscription.year25'},
'Naughty': { name: 'Premium', id: 'com.scottjulian.nice.yearly2'},
'Clockology': { name: 'pro', id: 'com.mikehill.clockologyios.yearly'},
'Parrot': { name: 'Lifetime Pro', id: 'p_2999_life'},
'shortcut': { name: 'subscription', id: 'standard.monthly'},
'ProximoJogo': { name: 'Pro', id: 'nm_199_lifetime'},
'Mojo': { name: 'pro', id: 'video.mojo.pro.yearly'},
'Paper': { name: 'pro', id: 'com.fiftythree.paper.pro_12'},
'Collect': { name: 'pro', id: 'com.revenuecat.product.yearly.ios'},
'Simple': { name: 'pro', id: 'ios_simple_original_subscription_12_weeks_2999_trial_7d'},
'DNS%20Changer': { name: 'premium', id: 'com.burakgon.dnschanger.sub_1_year_7.99usd'},
'Everlog': { name: 'premium', id: 'co.wonderbit.hummingbird.lifetime'},
'Meditation': { name: 'premium', id: 'thien_duong_dai_goi_nam'},
'ChessvisionMobile': { name: 'default', id: 'basic_subscription_1_year'},
'Calories': { name: 'premium', id: 'com.lhmedia.healthyfood.calories.12months'},
'Athan%20Pro': { name: 'com.quanticapps.premium', id: 'com.quanticapps.athanpro.premium.onetime'},
'Quran%20Pro': { name: 'com.quanticapps.premium', id: 'com.quanticapps.quranpro.premium.onetime'},
'Radarbot': { name: 'truck_access', id: 'rb_truck_5999_annual_direct'},
'PDF%20Viewer': { name: 'sub.pro', id: 'com.pspdfkit.viewer.sub.pro.yearly'},
'Thenics': { name: 'Pro', id: 'pro_yearly_subscription_ios'},
'Super%20Agent': { name: 'unlimited', id: 'sa_2999_lifetime'},
'Endel': { name: 'pro', id: 'Lifetime  discount 50'},
'Usage': { name: 'pro', id: 'com.olegst.usage.pro'},
'GoRecord': { name: 'Pro', id: 'com.alloy.screenrecorder.subcription.monthlyPro'},
'DSDownload': { name: 'Unlimited', id: 'dsdownload.app.subscription.lifetime.a'},
'FoodNoms': { name: 'plus', id: 'com.algebraiclabs.foodnoms.plus.annual'},
'Penbook': { name: 'pro', id: 'penbook.lifetime02'},
'TuneIn': { name: 'subscriptions', id: 'com.tunein.TuneInRadio.TUNEIN_1_MONTH_7_DAY_1.99'},
'Viet%20ID': { name: 'Pro', id: 'yearly_pro'},
'Spark': { name: 'premium', id: 'spark_b_799_1m_1w0'},
'NotVPN': { name: 'Premium', id: 'org.reactjs.native.exampleio.NotVPN.30'},
'Darkroom': { name: 'subscriptions', id: 'co.bergen.Darkroom.product.forever.everything'},
'Genius': { name: 'premium', id: 'com.alloy.genius.subscription.monthly'},
'TouchRetouchBasic': { name: 'premium', id: 'tr5_yearlysubsc_15dlrs_1'},
'image_upscaler': { name: 'pro', id: 'yearly_sub_pro'},
'dreamerai': { name: 'Pro', id: 'dreamerai_lifetime'},
'HTTPBot': { name: 'pro', id: 'com.behindtechlines.HTTPBot.prounlock'},
'Chatme': { name: 'premium', id: 'chatme_premium_week_trial'},
'ChatGPTApp': { name: 'Advanced', id: 'com.palligroup.gpt3.yearlyyy'},
'Chai': { name: 'premium', id: 'subscription_gold_annually'}

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
		if (new RegExp(`^${i}`, `i`).test(ua)) {
			obj.subscriber.subscriptions[list[i].id] = data;
			obj.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
			obj.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
			break;
		}
	}
	resp.body = JSON.stringify(obj).replace(/\"expires_date\":\"\w{4}/g, "\"expires_date\":\"2099").replace(/\"period_type\":\"\w+\"/g, "\"period_type\":\"active\"");
}
$done(resp);