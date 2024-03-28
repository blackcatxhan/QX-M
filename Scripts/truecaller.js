function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}
const features = [
	{
	  "status" : "Included",
	  "id" : "siri_search",
	  "isFree" : true,
	  "rank" : 1
	},
	{
	  "status" : "Included",
	  "id" : "no_ads",
	  "isFree" : true,
	  "rank" : 2
	},
	{
	  "status" : "Included",
	  "id" : "extended_spam_blocking",
	  "isFree" : true,
	  "rank" : 3
	},
	{
	  "status" : "Included",
	  "id" : "ct_call_recording",
	  "isFree" : true,
	  "rank" : 7
	},
	{
	  "status" : "Included",
	  "id" : "who_viewed_my_profile",
	  "isFree" : true,
	  "rank" : 9
	},
	{
	  "status" : "Included",
	  "id" : "incognito_mode",
	  "isFree" : true,
	  "rank" : 11
	},
	{
	  "status" : "Included",
	  "id" : "premium_badge",
	  "isFree" : true,
	  "rank" : 15
	},
	{
	  "status" : "Included",
	  "id" : "premium_support",
	  "isFree" : true,
	  "rank" : 16
	},
	{
	  "status" : "Included",
	  "id" : "live_chat_support",
	  "isFree" : true,
	  "rank" : 17
	},
	{
	  "status" : "Included",
	  "id" : "premium_app_icon",
	  "isFree" : true,
	  "rank" : 19
	},
	{
	  "status" : "Included",
	  "id" : "gold_caller_id",
	  "isFree" : true,
	  "rank" : 20
	}
];
var obj;
switch ($request.url) {
  case findUrl(/subscriptions\/status/):
      obj = {
        expire: "2099-07-07T11:20:25Z",
		// subscriptionStatus: "INITIAL_BUY",
		subscriptionStatus: "SUBSCRIBED",
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
          isFreeTrial: false,
		  rank : 6,
		  paymentProvider : "Apple",
		  clientProductMetadata : {
			selectionRank : 5,
			displayOrder : 5,
			isEntitledPremiumScreenProduct : false
		  }
        },
        tier: { id: "premium", feature: features }
      }
    break;
  case findUrl(/products\/apple/):
      obj = {
	  "tier" : [
		{
		  "id" : "gold",
		  "product" : [
			{
			  "productType" : "GoldYearly",
			  "id" : "renewable.premiumgold.annual",
			  "sku" : "renewable.premiumgold.annual",
			  "contentType" : "subscription",
			  "rank" : 6,
			  "paymentProvider" : "Apple",
			  "clientProductMetadata" : {
				"selectionRank" : 5,
				"displayOrder" : 5,
				"isEntitledPremiumScreenProduct" : false
			  }
			}
		  ],
		  "feature" : features,
		  "rank" : 5
		},
		{
		  "id" : "premium",
		  "product" : [
			{
			  "productType" : "SubsYearly",
			  "id" : "renewable.pro.annual",
			  "sku" : "renewable.pro.annual",
			  "contentType" : "subscription",
			  "rank" : 5,
			  "paymentProvider" : "Apple",
			  "clientProductMetadata" : {
				"selectionRank" : 1,
				"displayOrder" : 1,
				"isEntitledPremiumScreenProduct" : false
			  }
			},
			{
			  "productType" : "SubsMonthly",
			  "id" : "renewable.pro.monthly",
			  "sku" : "renewable.pro.monthly",
			  "contentType" : "subscription",
			  "rank" : 2,
			  "paymentProvider" : "Apple",
			  "clientProductMetadata" : {
				"selectionRank" : 2,
				"displayOrder" : 2,
				"isEntitledPremiumScreenProduct" : false
			  }
			}
		  ],
		  "feature" : features,
		  "rank" : 2
		}
	  ]
	}
    break;
}
$done({body: JSON.stringify(obj)});
