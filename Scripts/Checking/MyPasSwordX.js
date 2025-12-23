function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}

let obj = JSON.parse($response.body);

switch ($request.url){
	case findUrl(/auth\/start-registration/):
		obj = {
		  message: "License key is valid. You can continue registration.",
		  licenseStatus: "active"
		};
		break;
	case findUrl(/auth\/login/):
		obj = {
		  message: "Login is success."
		};
		break;
}

$done({
  status: "HTTP/1.1 200 OK",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(obj)
});
