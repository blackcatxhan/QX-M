function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}

let obj = JSON.parse($response.body);

switch ($request.url){
	case findUrl(/auth\/start-registration/):
		let new_obj = {
		  message: "License key is valid. You can continue registration.",
		  licenseStatus: "active"
		};
		break;
	case findUrl(/auth\/login/):
		let new_obj = {
		  message: "Login is success."
		  email: obj.email,
		  password: obj.password,
		  deviceId: obj.deviceId
		};
		break;
}

$done({
  status: "HTTP/1.1 200 OK",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(new_obj)
});
