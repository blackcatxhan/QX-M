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

replaceValueToAny(obj, 'success', true);
replaceValueToAny(obj, 'message', "OK");
replaceValueToAny(obj, 'validUntil', "2099-12-30T08:00:00Z");

$done({
	body: JSON.stringify(obj)
});