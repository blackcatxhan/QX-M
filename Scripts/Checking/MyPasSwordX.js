function matchUrl(reg) {
  return reg.test($request.url);
}

let resp = JSON.parse($response.body);
let req = {};

if ($request.body) {
  try {
    req = JSON.parse($request.body);
  } catch (e) {}
}

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
      email: req.email,
      password: req.password,
      deviceId: req.deviceId
    };
    break;

  default:
    new_obj = resp;
}

$done({
  status: "HTTP/1.1 200 OK",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(new_obj)
});
