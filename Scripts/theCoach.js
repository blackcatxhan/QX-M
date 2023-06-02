function replaceValueToAny(obj, key, value) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'object') {
            replaceValueToAny(obj[prop], key, value);
        } else if (prop === key) {
            obj[prop] = value;
        }
    }
}

function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}

let obj = JSON.parse($response.body);

switch ($request.url) {
    case findUrl(/tofu-open\/trial_day/):
        obj.data.trial_day = 77777;
        break;
    case findUrl(/v1\/user\?/):
        obj.data.is_premium = true;
        obj.data.product_expired_time = '2099-07-07T07:07:07.799';
        break;
    case findUrl(/v1\/learnfeed\/level\?/):
        replaceValueToAny(obj, 'is_lock', false);
        replaceValueToAny(obj, 'is_prize', false);
        break;
    case findUrl(/v1\/learnfeed\/level\//):
        replaceValueToAny(obj, 'is_prize', false);
        break;
    case findUrl(/v1\/learnfeed\/stage/):
        replaceValueToAny(obj, 'is_lock', false);
        replaceValueToAny(obj, 'is_lock_on_board', false);
        replaceValueToAny(obj, 'is_lock_register', false);
        break;
    case findUrl(/v1\/communicate\/topics/):
        replaceValueToAny(obj, 'is_pro', false);
        break;
    case findUrl(/v1\/communicate\/lessons/):
        replaceValueToAny(obj, 'access_type', 'USER');
        break;
    case findUrl(/v1\/ai_conversation\/topics\?/):
        replaceValueToAny(obj, 'entry_status', 'OPEN');
        break;
    case findUrl(/v1\/ai_conversation\/topics\//):
        obj.data.popup = null;
        break;
}

$done({
    body: JSON.stringify(obj)
});