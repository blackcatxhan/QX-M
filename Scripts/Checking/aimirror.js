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

let obj;

switch ($request.url){
	case findUrl(/query_is_vip/):
		obj =  true;
		break;
	case findUrl(/config/):
		let resbody = JSON.parse($response.body);
		replaceValueToAny(resbody, 'is_free', true);
		obj = JSON.stringify(resbody);
		break;
}

$done({
	body: obj
});