function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
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
    case findUrl(/novel\/download\//):
        obj.ok = true;
		obj.requirePremium = false;
		obj.msg = "LK Team";
        break;
    case findUrl(/novel\/?novel_id/):
        obj.novel.isVip = false;
        obj.novel.vipStartedAt = null;
        break;
}

$done({
    body: JSON.stringify(obj)
});