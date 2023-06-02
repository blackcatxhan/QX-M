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
        obj.user.isSuperUser =  true;
        obj.user.goldTickets =  999999999;
        obj.user.violetStones =  999999999;
        obj.user.spiritStones =  999999999;
        obj.user.magicStones =  999999999;
        obj.user.bannedReasone =  "";
        obj.user.banned =  false;
        obj.user.bannedUntil =  null;
        obj.user.premiumUntil =  "2099-07-07T07:07:07.832336+07:00";
        break;
}

$done({
    body: JSON.stringify(obj)
});