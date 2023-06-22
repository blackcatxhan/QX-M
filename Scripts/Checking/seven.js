function replaceValueToAny(obj, key, value) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceValueToAny(obj[prop], key, value);
    } else if (prop === key) {
      obj[prop] = value;
    }
  }
}

function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}

function generateUUID() {
  function generateSegment() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return (
    generateSegment() + generateSegment() + "-" + generateSegment() + "-" + generateSegment() + "-" + generateSegment() + "-" + generateSegment() + generateSegment() + generateSegment()
  );
}

let obj = JSON.parse($response.body);
const id = generateUUID();
switch ($request.url) {
    case findUrl(/v2\/verify-purchases/):
        obj.subscription_purchases_state = 3883519044;
        obj.buyer_identifier = id; // a0c7a5c2-5caa-4797-83f0-f9a4a0cb934e
        obj.has_valid_purchases = true;
        obj.subscription_purchases = [
			{
				"auto_renew": true,
				"expires_at": {
					"offset": 0,
					"timestamp": 4087091227
				},
				"gifted": false,
				"grace_period_days": 364,
				"is_referral": false,
				"ownership": "purchased",
				"period": "P1Y",
				"purchased_at": {
					"offset": 0,
					"timestamp": 1687408819
				},
				"sandbox": false,
				"sku_identifier": "S_Club_G_Family_12Months",
				"status": "normal",
				"store": "app_store",
				"trial_period": "P1Y"
			}
		];
        break;
    case findUrl(/v1\/account\/subscription-purchases/):
        obj.subscription_purchases_state = 3883519044;
        break;
    case findUrl(/v2\/account\/feed-activities/):
        replaceValueToAny(obj, "club_member_until", 4087091227);
        break;
    case findUrl(/v2\/account\/profile/):
        obj.club_member_until = 4087091227;
        break;
}

$done({
    body: JSON.stringify(obj)
});