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

let obj = JSON.parse($response.body);

switch ($request.url) {
    case findUrl(/auth\/verify-token/):
        obj.user.isPremium =  true;
        obj.user.isStaff =  true;
        obj.user.isSuperUser =  true;
        obj.user.premiumUntil =  "2099-07-07T07:07:07.832336+07:00";
        break;
    case findUrl(/user\/purchase\/purchase-chapters-info\//):
        obj.totalVipStones = 0;
        break;
    case findUrl(/user\/purchase\/purchase-chapters\//):
        obj.requiredStones = 0;
        obj.ok = true;
        obj.notAfford = false;
        break;
}

$done({
    body: JSON.stringify(obj)
});