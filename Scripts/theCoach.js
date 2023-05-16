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
let url = $request.url;

if (url.indexOf('tofu-open/trial_day') !== -1) {
	obj.data.trial_day = 77777;
}

if (url.indexOf('v1/user?') !== -1) {
	obj.data.is_premium = true;
	obj.data.product_expired_time = '2099-07-07T07:07:07.799';
}

if (url.indexOf('v1/learnfeed/level?') !== -1) {
	replaceValueToAny(obj, 'is_lock', false);
	replaceValueToAny(obj, 'is_prize', false);
}

if (url.indexOf('v1/learnfeed/level/') !== -1) {
	replaceValueToAny(obj, 'is_prize', false);
}

if (url.indexOf('v1/learnfeed/stage') !== -1) {
	replaceValueToAny(obj, 'is_lock', false);
	replaceValueToAny(obj, 'is_lock_on_board', false);
	replaceValueToAny(obj, 'is_lock_register', false);
}

if (url.indexOf('v1/communicate/topics') !== -1) {
	replaceValueToAny(obj, 'is_pro', false);
	// replaceValueToAny(obj, 'is_trial', true);
}

// if (url.indexOf('v1/communicate/lessons') !== -1) {
	// replaceValueToAny(obj, 'is_trial', true);
	// replaceValueToAny(obj, 'access_type', 'USER');
	// replaceValueToAny(obj, 'access_type', 'DEVICE');
// }

if (url.indexOf('v1/ai_conversation/topics?') !== -1) {
	replaceValueToAny(obj, 'entry_status', 'OPEN');
}

if (url.indexOf('v1/ai_conversation/topics/') !== -1) {
	obj.data.popup = null;
}

if (url.indexOf('v1/gym/ipa/lesson?') !== -1) {
	replaceValueToAny(obj, 'is_lock', false);
	replaceValueToAny(obj, 'is_lock_product', false);
	replaceValueToAny(obj, 'is_lock_register', false);
}

if (url.indexOf('v1/gym/course/listening/lesson?') !== -1) {
	replaceValueToAny(obj, 'is_lock_product', false);
	replaceValueToAny(obj, 'is_lock_login', false);
}

// if (url.indexOf('v1/product-user') !== -1) {
	// obj.data.is_trial = true;
	// obj.data.is_trial_x_day = true;
	// obj.data.day = 77777;
	// obj.data.hour = 7;
	// obj.data.second = 7;
	// obj.data.minute = 7;
// }

$done({body: JSON.stringify(obj)});