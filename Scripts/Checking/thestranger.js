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
var currentDate = new Date();
currentDate.setHours(currentDate.getHours() - 1);
var year = currentDate.getUTCFullYear();
var month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
var day = String(currentDate.getUTCDate()).padStart(2, '0');
var hours = String(currentDate.getUTCHours()).padStart(2, '0');
var minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
var seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
var formattedDateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;


switch ($request.url){
	case findUrl(/check-trial-period/):
		obj.start_date = formattedDateTime;
		obj.status = "success";
		break;
	case findUrl(/get-user-plan-details/):
		obj.plan_id = 29;
		obj.plan_name = "Live";
		obj.expire_date = "2099-07-07 07:07:07";
		break;
	case findUrl(/get-exp-date/):
		obj.data.active = 1;
		obj.data.subscription_id = 29;
		obj.data.expire_date = "2099-07-07 07:07:07";
		break;
	case findUrl(/user_playingcard_purchase_status/):
		obj.status = "success";
		obj.is_playingcard_admin = 1;
		break;
	case findUrl(/revelation-list/):
		replaceValueToAny(obj, 'purchased', true);
		replaceValueToAny(obj, 'is_paid', true);
		break;
}

$done({
    body: JSON.stringify(obj)
});