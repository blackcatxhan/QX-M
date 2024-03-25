function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}
const features = [
	{
	  "status" : "Included",
	  "id" : "siri_search",
	  "isFree" : false,
	  "rank" : 1
	},
	{
	  "status" : "Included",
	  "id" : "no_ads",
	  "isFree" : false,
	  "rank" : 2
	},
	{
	  "status" : "Included",
	  "id" : "extended_spam_blocking",
	  "isFree" : false,
	  "rank" : 3
	},
	{
	  "status" : "Included",
	  "id" : "ct_call_recording",
	  "isFree" : false,
	  "rank" : 7
	},
	{
	  "status" : "Included",
	  "id" : "who_viewed_my_profile",
	  "isFree" : false,
	  "rank" : 9
	},
	{
	  "status" : "Included",
	  "id" : "incognito_mode",
	  "isFree" : false,
	  "rank" : 11
	},
	{
	  "status" : "Included",
	  "id" : "premium_badge",
	  "isFree" : false,
	  "rank" : 15
	},
	{
	  "status" : "Included",
	  "id" : "premium_support",
	  "isFree" : false,
	  "rank" : 16
	},
	{
	  "status" : "Included",
	  "id" : "live_chat_support",
	  "isFree" : false,
	  "rank" : 17
	},
	{
	  "status" : "Included",
	  "id" : "premium_app_icon",
	  "isFree" : false,
	  "rank" : 19
	},
	{
	  "status" : "Included",
	  "id" : "gold_caller_id",
	  "isFree" : false,
	  "rank" : 20
	}
];
var obj;
switch ($request.url) {
  case findUrl(/subscriptions\/status/):
      obj = {
        expire: "2099-07-07T11:20:25Z",
		subscriptionStatus: "INITIAL_BUY",
        start: "2022-09-03T11:20:25Z",
		isGracePeriodExpired: false,
		isExpired: false,
		inAppPurchaseAllowed: true,
        paymentProvider: "Apple",
        product: {
          id: "renewable.premiumgold.annual",
          sku: "renewable.premiumgold.annual",
          contentType: "subscription",
          productType: "GoldYearly",
          isFreeTrial: false
        },
        tier: { id: "gold", feature: features }
      }
    break;
  case findUrl(/products\/apple/):
      obj = {
  "tier": [
    {
      "id": "gold",
      "product": [
        {
          "productType": "GoldYearly",
          "id": "renewable.premiumgold.annual",
          "sku": "renewable.premiumgold.annual",
          "contentType": "subscription",
          "rank": 6,
          "paymentProvider": "Apple",
          "clientProductMetadata": {
            "selectionRank": 5,
            "displayOrder": 5,
            "isEntitledPremiumScreenProduct": false
          }
        }
      ],
      "feature": features,
      "rank": 5
    }
  ]
}
    break;
}
$done({body: JSON.stringify(obj)});
