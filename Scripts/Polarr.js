const sta = typeof $task !== "undefined" ? "HTTP/1.1 200 OK" : 200;
const res = $response;
const req = $request;

if (res.body && req.method == "PUT") {
  $done({
    body: JSON.stringify({
      "app": "PPE",
      "isUnlimited": true,
      "membershipExpiryDate": "2099-07-07T07:07:07.000Z"
    }),
    status: sta,
    headers: res.headers
  });
} else {
  $done({});
}