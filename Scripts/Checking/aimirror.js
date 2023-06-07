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

switch ($request.url){
	case findUrl(/query_is_vip/):
		obj =  false;
		break;
	case findUrl(/config/):
		replaceValueToAny(obj, 'is_free', true);
		break;
}

$done({
	body: JSON.stringify(obj)
});