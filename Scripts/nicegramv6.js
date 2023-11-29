function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}

let obj = JSON.parse($response.body);

switch ($request.url) {
    case findUrl(/api\/v4\/settings/):
        obj.premium = true;
        break;
    case findUrl(/api\/v6\/telegram\/auth/):
        obj.data.user.subscription = true;
		obj.data.user.lifetime_subscription = true;
        break;
    case findUrl(/api\/v6\/user\/info/):
        obj.data.user.subscription = true;
		obj.data.user.lifetime_subscription = true;
        break;
}

$done({
    body: JSON.stringify(obj)
});
