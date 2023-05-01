function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}
const features = [
  { id: "spam_blocking", rank: -2147483648, status: "Included" },
  { id: "caller_id", rank: -2147483648, status: "Included" },
  { id: "no_ads", rank: 1, status: "Included" },
  { id: "call_assistant", rank: 2, status: "Included" },
  { id: "extended_spam_blocking", rank: 3, status: "Included" },
  { id: "who_viewed_my_profile", rank: 4, status: "Included" },
  { id: "incognito_mode", rank: 6, status: "Included" },
  { id: "premium_badge", rank: 10, status: "Included" },
  { id: "premium_support", rank: 11, status: "Included" },
  { id: "gold_caller_id", rank: 13, status: "Included" }
];
const features_sub = [
  { id: "spam_blocking", rank: -2147483648, status: "Included", isFree: true },
  { id: "caller_id", rank: -2147483648, status: "Included", isFree: true },
  { id: "siri_search", rank: 1, status: "Included", isFree: false },
  { id: "no_ads", rank: 2, status: "Included", isFree: false },
  { id: "extended_spam_blocking", rank: 3, status: "Included", isFree: false },
  { id: "call_assistant", rank: 4, status: "Included", isFree: false },
  { id: "assistant_voicemail", rank: 5, status: "Included", isFree: false },
  { id: "assistant_custom_greeting", rank: 6, status: "Included", isFree: false },
  { id: "ct_call_recording", rank: 7, status: "Included", isFree: false },
  { id: "who_viewed_my_profile", rank: 9, status: "Included", isFree: false },
  { id: "incognito_mode", rank: 11, status: "Included", isFree: false },
  { id: "premium_badge", rank: 15, status: "Included", isFree: false },
  { id: "premium_support", rank: 16, status: "Included", isFree: false },
  { id: "live_chat_support", rank: 17, status: "Included", isFree: false },
  { id: "family_sharing", rank: 18, status: "Excluded", isFree: false },
  { id: "gold_caller_id", rank: 19, status: "Included", isFree: false }
];
var obj;
switch ($request.url) {
  case findUrl(/subscriptions\/status/):
      obj = {
        expire: "2099-07-07T11:20:25Z",
        start: "2022-09-03T11:20:25Z",
        paymentProvider: "Apple",
        isExpired: false,
        isGracePeriodExpired: false,
        subscriptionStatus: "SUBSCRIBED",
        inAppPurchaseAllowed: true,
        product: {
          id: "renewable.premiumgold.annual",
          sku: "renewable.premiumgold.annual",
          contentType: "subscription",
          productType: "GoldYearly",
          isFreeTrial: false
        },
        tier: { id: "gold", feature: features_sub }
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
          "id": "renewable.gold.annual",
          "sku": "renewable.gold.annual",
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
