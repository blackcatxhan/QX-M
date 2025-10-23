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

replaceValueToAny(obj, 'unlimitedAccess', true);
replaceValueToAny(obj, 'debugger', true);

$done({
	body: JSON.stringify(obj)
});