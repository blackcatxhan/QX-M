function replaceLockedWithFalse(obj, key) {
  var keyString = key;
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceLockedWithFalse(obj[prop]);
    } else if (prop === keyString) {
      obj[prop] = false;
    }
  }
}

let obj = JSON.parse($response.body);
let url = $request.url;

if (url.indexOf('tofu-open/trial_day') !== -1) {
	obj.data.trial_day = 7777;
}

if (url.indexOf('v1/user?') !== -1) {
	obj.data.is_premium = true;
	obj.data.product_expired_time = 4087091227;
}

if (url.indexOf('v1/learnfeed/level?') !== -1) {
	replaceLockedWithFalse(obj, 'is_lock');
	replaceLockedWithFalse(obj, 'is_prize');
}

if (url.indexOf('v1/learnfeed/level/') !== -1) {
	replaceLockedWithFalse(obj, 'is_prize');
}

if (url.indexOf('v1/learnfeed/stage') !== -1) {
	replaceLockedWithFalse(obj, 'is_lock');
	replaceLockedWithFalse(obj, 'is_lock_on_board');
	replaceLockedWithFalse(obj, 'is_lock_register');
}

if (url.indexOf('v1/communicate/topics') !== -1) {
	replaceLockedWithFalse(obj, 'is_pro');
}

$done({body: JSON.stringify(obj)});