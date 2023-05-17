let obj = JSON.parse($response.body);
let unique_id = obj.me.unique_id;

obj.me = {
    "non_consumables_ids" : [

    ],
    "active_subscriptions_ids" : [
      "fontskeyboard.font.1y_t160"
    ],
    "privacy_notice" : {
      "required_consents" : [

      ],
      "is_at_least_16" : "unknown",
      "last_acknowledged_version" : "2.1.0"
    },
    "unique_id" : unique_id,
    "active_bundle_subscriptions" : [
      {
        "expiry" : "2099-07-07T07:07:07+00:00",
        "product_id" : "fontskeyboard.font.1y_t160",
        "features" : [
          "unlock"
        ]
      }
    ],
    "is_spooner" : false,
    "terms_of_service" : {
      "last_accepted_version" : "2.4.0"
    },
    "available_consumable_credits" : {

    }
  };

$done({body: JSON.stringify(obj)});