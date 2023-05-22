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
obj.plans = ["com.sagosago.Friends.iap.default.subscription.one_year",
	"com.sagosago.School.iap.default.subscription.one_year",
	"com.sagosago.Fairytales.iap.default.subscription.one_year",
	"com.sagosago.Apartment.iap.default.subscription.one_year",
	"com.sagosago.Trains.iap.default.subscription.one_year",
	"com.sagosago.Village.iap.default.subscription.one_year",
	"com.sagosago.Forestflyer.iap.default.subscription.one_year",
	"com.sagosago.Preschool.iap.default.subscription.one_year",
	"com.sagosago.Dogs.iap.default.subscription.one_year",
	"com.sagosago.Spaceblocks.iap.default.subscription.one_year",
	"com.sagosago.Box.iap.default.subscription.one_year",
	"com.sagosago.Dinosaurs.iap.default.subscription.one_year",
	"com.sagosago.Autoshop.iap.default.subscription.one_year",
	"com.sagosago.Toolbox.iap.default.subscription.one_year",
	"com.sagosago.Petcafe.iap.default.subscription.one_year",
	"com.sagosago.Spaceexplorer.iap.default.subscription.one_year",
	"com.sagosago.World.iap.default.subscription.one_year",
	"com.sagosago.Planes.iap.default.subscription.one_year",
	"com.sagosago.Puppypreschool.iap.default.subscription.one_year",
	"com.sagosago.Parent.iap.default.subscription.one_year",
	"com.sagosago.Construction.iap.default.subscription.one_year",
	"com.sagosago.Babies.iap.default.subscription.one_year",
	"com.sagosago.Numbers.iap.default.subscription.one_year",
	"com.sagosago.Sleds.iap.default.subscription.one_year",
	"com.sagosago.Roadtrip.iap.default.subscription.one_year",
	"com.sagosago.Camping.iap.default.subscription.one_year",
	"com.sagosago.Superjuice.iap.default.subscription.one_year",
	"com.sagosago.Neighborhoodblocks.iap.default.subscription.one_year",
	"com.sagosago.Wintercity.iap.default.subscription.one_year",
	"com.sagosago.Town.iap.default.subscription.one_year",
	"com.sagosago.Diner.iap.default.subscription.one_year",
	"com.sagosago.Firstwords.iap.default.subscription.one_year",
	"com.sagosago.Airport.iap.default.subscription.one_year",
	"com.sagosago.Fair.iap.default.subscription.one_year",
	"com.sagosago.Zoo.iap.default.subscription.one_year",
	"com.sagosago.Snowtrucks.iap.default.subscription.one_year",
	"com.sagosago.Vacation.iap.default.subscription.one_year"
	];
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
		"com.sagosago.School.iap.default.subscription.one_year",
		"com.sagosago.Fairytales.iap.default.subscription.one_year",
		"com.sagosago.Apartment.iap.default.subscription.one_year",
		"com.sagosago.Trains.iap.default.subscription.one_year",
		"com.sagosago.Village.iap.default.subscription.one_year",
		"com.sagosago.Forestflyer.iap.default.subscription.one_year",
		"com.sagosago.Preschool.iap.default.subscription.one_year",
		"com.sagosago.Dogs.iap.default.subscription.one_year",
		"com.sagosago.Spaceblocks.iap.default.subscription.one_year",
		"com.sagosago.Box.iap.default.subscription.one_year",
		"com.sagosago.Dinosaurs.iap.default.subscription.one_year",
		"com.sagosago.Autoshop.iap.default.subscription.one_year",
		"com.sagosago.Toolbox.iap.default.subscription.one_year",
		"com.sagosago.Petcafe.iap.default.subscription.one_year",
		"com.sagosago.Spaceexplorer.iap.default.subscription.one_year",
		"com.sagosago.World.iap.default.subscription.one_year",
		"com.sagosago.Planes.iap.default.subscription.one_year",
		"com.sagosago.Puppypreschool.iap.default.subscription.one_year",
		"com.sagosago.Parent.iap.default.subscription.one_year",
		"com.sagosago.Construction.iap.default.subscription.one_year",
		"com.sagosago.Babies.iap.default.subscription.one_year",
		"com.sagosago.Numbers.iap.default.subscription.one_year",
		"com.sagosago.Sleds.iap.default.subscription.one_year",
		"com.sagosago.Roadtrip.iap.default.subscription.one_year",
		"com.sagosago.Camping.iap.default.subscription.one_year",
		"com.sagosago.Superjuice.iap.default.subscription.one_year",
		"com.sagosago.Neighborhoodblocks.iap.default.subscription.one_year",
		"com.sagosago.Wintercity.iap.default.subscription.one_year",
		"com.sagosago.Town.iap.default.subscription.one_year",
		"com.sagosago.Diner.iap.default.subscription.one_year",
		"com.sagosago.Firstwords.iap.default.subscription.one_year",
		"com.sagosago.Airport.iap.default.subscription.one_year",
		"com.sagosago.Fair.iap.default.subscription.one_year",
		"com.sagosago.Zoo.iap.default.subscription.one_year",
		"com.sagosago.Snowtrucks.iap.default.subscription.one_year",
		"com.sagosago.Vacation.iap.default.subscription.one_year"
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