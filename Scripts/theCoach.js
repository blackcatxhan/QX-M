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
    case findUrl(/v1\/user?/):
        obj.data.is_premium = true;
        obj.data.product_expired_time = '2099-07-07T07:07:07.799';
        break;
    case findUrl(/v1\/learnfeed\/level?/):
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
        // replaceValueToAny(obj, 'is_trial', true);
        break;
    case findUrl(/v1\/communicate\/lessons/):
        // replaceValueToAny(obj, 'is_trial', true);
        replaceValueToAny(obj, 'access_type', 'USER');
        // replaceValueToAny(obj, 'access_type', 'DEVICE');
        break;
    case findUrl(/v1\/ai_conversation\/topics?/):
        replaceValueToAny(obj, 'entry_status', 'OPEN');
        break;
    case findUrl(/v1\/ai_conversation\/topics\//):
        obj.data.popup = null;
        break;
    case findUrl(/v1\/gym\/ipa\/lesson?/):
        replaceValueToAny(obj, 'is_lock', false);
        replaceValueToAny(obj, 'is_lock_product', false);
        replaceValueToAny(obj, 'is_lock_register', false);
        break;
    case findUrl(/v1\/gym\/course\/listening\/lesson?/):
        replaceValueToAny(obj, 'is_lock_product', false);
        replaceValueToAny(obj, 'is_lock_login', false);
        break;
    // case findUrl(/v1\/product-user/):
        // obj.data.is_trial = true;
        // obj.data.is_trial_x_day = true;
        // obj.data.day = 77777;
        // obj.data.hour = 7;
        // obj.data.second = 7;
        // obj.data.minute = 7;
        // break;
}

$done({
    body: JSON.stringify(obj)
});