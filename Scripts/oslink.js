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

replaceValueToAny(obj, 'cutofftime', 4087091227);
replaceValueToAny(obj, 'viplist', "[{\"astrict\":0,\"cutofftime\":4087091227,\"minctime\":4087091227,\"viptype\":1}]");
replaceValueToAny(obj, 'viptype', 1);
replaceValueToAny(obj, 'astrict', 0);

$done({
    body: JSON.stringify(obj)
});