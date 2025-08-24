function replaceValues(obj) {
    for (var prop in obj) {
        if (prop === 'free_yn' && obj[prop] === 'N') {
            obj[prop] = 'Y'; // đổi N thành Y cho free_yn
        } else if (obj[prop] === 'Y') {
            obj[prop] = 'F'; // đổi Y thành F (theo logic cũ)
        } else if (typeof obj[prop] === 'object') {
            replaceValues(obj[prop]);
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
    case findUrl(/game/):
        replaceValues(obj);
        break;
    case findUrl(/story/):
        replaceValues(obj);
        break;
    case findUrl(/song/):
        replaceValues(obj);
        break;
    case findUrl(/player?/):
        delete obj.data.preview_time;
        replaceValues(obj);
        break;
}

$done({body: JSON.stringify(obj)});
