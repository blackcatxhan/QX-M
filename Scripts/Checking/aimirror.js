/* Chờ kiểm tra khi hết hạn - Nếu không chạy thì bỏ Comment. Có thể obj.is_vip = true thay vì false. Kiểm tra lại cả url aiconf vs config
#!name=Unlock AI Mirror
#!desc=AI Mirror
[MITM]
hostname= %APPEND% be.aimirror.fun
[Script]
AIMirror = type=http-response,pattern=^https:\/\/be\.aimirror\.fun\/(query_is_vip|config|draw(.*))\?(.*)$,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/blackcatxhan/QX-M/main/Scripts/Checking/aimirror.js,script-update-interval=-1
*/
function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}
/*
function replaceValueToAny(obj, key, value) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceValueToAny(obj[prop], key, value);
    } else if (prop === key) {
      obj[prop] = value;
    }
  }
}
*/
let obj = JSON.parse($response.body);

switch ($request.url){
	case findUrl(/query_is_vip/):
		obj =  true;
		break;
	/*
	case findUrl(/config/):
		replaceValueToAny(obj, 'is_free', true);
		break;
	*/
	case findUrl(/draw/):
		obj.is_vip = true;
		obj.draw_num = 4;
		break;
}

$done({
	body: JSON.stringify(obj)
});