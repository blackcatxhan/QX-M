function replaceValueToAny(obj, key, value) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceValueToAny(obj[prop], key, value);
    } else if (prop === key) {
      obj[prop] = value;
    }
  }
}
let obj = JSON.parse($response.body);
var ListApps = JSON.stringify(Object.keys(obj.productLines));
replaceValueToAny(obj, 'subscribed', 'true');
obj.auto_renew_product_id = null;
obj.date_subscription = "2023-05-22T05:21:54.000Z";
// obj.plans = ["com.sagosago.School.iap.default.subscription.one_year"];
obj.plans = ["com.sagosago.Friends.iap.default.subscription.one_year","com.sagosago.School.iap.default.subscription.one_year"];
obj.period = "year";
obj.billing_on_hold = false;
obj.billing_platform = "AppleAppStore";
obj.date_expiration = "2099-07-07T07:07:07.000Z";
obj.date_billing_grace_period_end = null;
obj.auto_renew = false;
obj.trial_period = true;
obj.date_original_purchase = "2023-05-22T05:21:54.000Z";
obj.billing_grace_period = false;
obj.billing_issue = false;
obj.date_valid_until = "2099-07-07T07:07:07.000Z";
obj.subscriptions = [{
	"promo": null,
	"store_transaction_id": "450001435318701",
	"date_subscription": "2023-05-22T05:21:54.000Z",
	"plans": [
		"com.sagosago.Friends.iap.default.subscription.one_year",
		"com.sagosago.School.iap.default.subscription.one_year"
	],
	"billing_on_hold": false,
	"billing_platform": "AppleAppStore",
	"productLines": ListApps,
	"date_expiration": "2099-07-07T07:07:07.000Z",
	"original_transaction_id": "450001435318701",
	"date_billing_grace_period_end": null,
	"auto_renew_preference": null,
	"auto_renew": false,
	"trial_period": true,
	"billing_grace_period": false,
	"billing_issue": false,
	"store": "AppleAppStore",
	"status": "subscribed"
}];

$done({
    body: JSON.stringify(obj)
});