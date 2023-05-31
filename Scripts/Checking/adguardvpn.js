function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}

function replaceValueToAny(obj, key, value) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceValueToAny(obj[prop], key, value);
    } else if (prop === key) {
      obj[prop] = value;
    }
  }
}

function generateLicenseKey(length) {
  let key = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }

  return key;
}

const licenseKey = generateLicenseKey(10);

let obj = JSON.parse($response.body);

switch ($request.url) {
    case findUrl(/account\/api\/1.0\/products\/licenses\/vpn.json/):
        obj.tokens[1] = {
		  "max_devices_count" : 10,
		  "vpn_subscription" : {
			"status" : "ACTIVE",
			"duration_v2" : "YEARLY",
			"next_bill_date_sec" : 4087091227,
			"next_bill_date_iso" : "2099-07-07T07:07:07+0000",
			"duration" : "YEARLY"
		  },
		  "license_key" : licenseKey,
		  "token" : obj.token,
		  "time_expires_sec" : 4087091227,
		  "license_status" : "VALID",
		  "time_expires_iso" : "2099-07-07T07:07:07+0000"
		};
        break;
    case findUrl(/api\/v2\/locations\/IOS?/):
        replaceValueToAny(obj, 'premium_only', false);
        break;
    case findUrl(/api\/v1\/info\/application?/):
		obj.max_downloaded_bytes = 0;
		obj.max_devices_count = 10;
        break;
}

$done({
    body: JSON.stringify(obj)
});