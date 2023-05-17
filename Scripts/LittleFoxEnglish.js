function replaceYWithF(obj) {
    for (var prop in obj) {
        if (obj[prop] === 'Y') {
            obj[prop] = 'F';
        } else if (typeof obj[prop] === 'object') {
            replaceYWithF(obj[prop]);
        }
    }
}

function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}

let obj = JSON.parse($response.body);
let url = $request.url;

switch ($request.url) {
    case findUrl(/story/):
        replaceYWithF(obj);
        break;
    case findUrl(/song/):
        replaceYWithF(obj);
        break;
    case findUrl(/player?/):
        delete obj.data.preview_time;
        replaceYWithF(obj);
        break;
}

$done({body: JSON.stringify(obj)});