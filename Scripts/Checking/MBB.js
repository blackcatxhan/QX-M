function replaceValueToAny(obj, key, value) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      replaceValueToAny(obj[prop], key, value);
    } else if (prop === key) {
      obj[prop] = value;
    }
  }
}

function findUrl(reg) {
  return reg.test($request.url);
}

let obj = JSON.parse($response.body);

// For: rpc/redeem_license_on_device
if (findUrl(/rpc\/redeem_license_on_device/)) {
  replaceValueToAny(obj, 'success', true);
  replaceValueToAny(obj, 'message', "OK");
  replaceValueToAny(obj, 'validUntil', "2099-12-30T08:00:00Z");
}

// For: licenses?user_id
if (findUrl(/licenses\?user_id=/)) {
  replaceValueToAny(obj, 'paid', true);
  replaceValueToAny(obj, 'is_active', true);
  replaceValueToAny(obj, 'trial_expires_at', "2099-12-30T08:00:00.003459+00:00");
}

$done({
  body: JSON.stringify(obj)
});
