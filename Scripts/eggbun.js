function replaceLockedWithFalse(obj) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceLockedWithFalse(obj[prop]);
    } else if (prop === 'locked') {
      obj[prop] = false;
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
	case findUrl(/v3\/accounts\/sign-in/):
        obj.isLifetimePremium = true;
		obj.isAdmin = true;
		obj.isGptChat = true;
		obj.expired = false;
		obj.isAlumni = true;
		obj.isSchoolPremium = true;
        break;
    case findUrl(/chapters/):
        replaceLockedWithFalse(obj);
        break;
}

$done({body:JSON.stringify(obj)});