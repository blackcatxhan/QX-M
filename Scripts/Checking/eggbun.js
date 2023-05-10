function replaceLockedWithFalse(obj) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceLockedWithFalse(obj[prop]);
    } else if (prop === 'locked') {
      obj[prop] = false;
    }
  }
}

let url=$request.url;
let obj=JSON.parse($response.body);
if (url.indexOf('v3/accounts/sign-in') !== -1) {
	obj.isLifetimePremium = true;
	obj.isAdmin = true;
	obj.isGptChat = true;
	obj.expired = false;
	obj.isAlumni = true;
	obj.isSchoolPremium = true;
}

if (url.indexOf('v1/chapters/progress/enumerate') !== -1 && $response.status === 200) {
	replaceLockedWithFalse(obj);
}
$done({body:JSON.stringify(obj)});