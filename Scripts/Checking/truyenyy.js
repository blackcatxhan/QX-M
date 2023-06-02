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
    case findUrl(/novel\/?novel_id/):
        obj.novel.isVip = false;
        obj.novel.vipStartedAt = null;
        break;
    case findUrl(/novel\/chapter\/?novel_id/):
        obj.chapter.isVip = false;
        obj.chapter.isOwned = true;
        obj.chapter.vipStones = 0;
        break;
    case findUrl(/novel\/chapter\/raw-list\/?novel_id/):
        replaceValueToAny(obj, 'vipStones', 0);
        replaceValueToAny(obj, 'isVip', false);
        replaceValueToAny(obj, 'isOwned', true);
        break;
    case findUrl(/novel\/chapter\/list\/?novel_id/):
        replaceValueToAny(obj, 'vipStones', 0);
        replaceValueToAny(obj, 'isVip', false);
        replaceValueToAny(obj, 'isOwned', true);
        break;
}

$done({
    body: JSON.stringify(obj)
});