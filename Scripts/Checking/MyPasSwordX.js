function matchUrl(reg) {
  return reg.test($request.url);
}

let obj = JSON.parse($response.body);
let new_obj;

switch (true) {
  case matchUrl(/auth\/start-registration/):
    new_obj = {
		"status": "success",
		"registration_id": "reg_565a2496979ea7f4e5d9",
		"message": "License validated. Continue registration with user profile.",
		"license_key": "MPX-A41B-99F2-0192",
		"expires_at": "2027-10-21T11:00:45+07:00"
	};
    break;

  case matchUrl(/auth\/login/):
    new_obj = {
		"token": "nfx_jwt_4658478c90d8b25885a841ce69aaa74d693b94038048208f",
		"user": {
			"id": "usr_7608",
			"email": "magician@nahapetfx.com",
			"role": "pro_performer"
		},
		"license": {
			"active": true,
			"key": "MPX-A41B-99F2-0192",
			"project": "mpx",
			"device_id": "iPhone16,2-646f4564",
			"registered_at": "2026-10-21T11:00:03+07:00"
		}
	};
    break;

  default:
    new_obj = obj;
}

$done({
  status: "HTTP/1.1 200 OK",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(new_obj)
});
