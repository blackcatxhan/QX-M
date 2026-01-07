function matchUrl(reg) {
  return reg.test($request.url);
}

let obj = JSON.parse($response.body);
let new_obj;

switch (true) {
  case matchUrl(/auth\/start-registration/):
    new_obj = {
      message: "License key is valid. You can continue registration.",
      licenseStatus: "active"
    };
    break;

  case matchUrl(/auth\/login/):
    new_obj = {
      message: "Login is success.",
      email: obj.email,
      password: obj.password,
      deviceId: obj.deviceId
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
