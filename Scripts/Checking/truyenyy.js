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

switch (url) {
    case url.includes("auth/verify-token"):
        obj.user.isPremium =  true;
        obj.user.isStaff =  true;
        obj.user.isSuperUser =  true;
        obj.user.premiumUntil =  "2099-07-07T07:07:07.832336+07:00";
        break;
    case url.includes("novel/chapter/"):
        replaceValueToAny(obj, 'vipStones', 0);
        replaceValueToAny(obj, 'isVip', false);
        replaceValueToAny(obj, 'isOwned', true);
        break;
    case url.includes("novel/"):
        obj.novel.isVip = false;
        obj.novel.vipStartedAt = null;
        break;
}

$done({
    body: JSON.stringify(obj)
});