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

let obj = JSON.parse($response.body);

switch ($request.url) {
    case findUrl(/drive\/v1\/about/):
        obj.quota.limit = "10995116277760";
        break;
    case findUrl(/vip\/v1\/vip\/info/):
		replaceValueToAny(obj, "expire", "2099-07-07T70:07:07+08:00")
		replaceValueToAny(obj, "status", "ok")
		replaceValueToAny(obj, "surplus_day", 27795)
        obj.data.fee_record = "apple";
        obj.data.type = "platinum";
        break;
    case findUrl(/vip\/v1\/product\/productList/):
        replaceValueToAny(obj, "intro_offer_id", "");
        replaceValueToAny(obj, "promotional_id", "");
        break;
    case findUrl(/vip\/v1\/allSubscriptionStatus/):
        obj.apple.interval = "year";
        obj.apple.product = "sub.year";
        obj.apple.region = "regional";
        obj.apple.status = "trial";
        obj.apple.subscribed = true;
        break;
    case findUrl(/vip\/v1\/activity\/invite/):
        obj.check_free_send = "free";
        obj.updated = "false";
        break;
}

$done({
    body: JSON.stringify(obj)
});