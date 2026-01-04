function replaceValueToAny(obj, key, value) {
  for (let prop in obj) {
    if (obj[prop] !== null && typeof obj[prop] === "object") {
      replaceValueToAny(obj[prop], key, value);
    } else if (prop === key) {
      obj[prop] = value;
    }
  }
}

if ($request.method !== "POST") {
  $done({});
  return;
}

let body = $request.body;
let obj = JSON.parse(body);

replaceValueToAny(obj, "wealth", 500000);

let modifiedBody = JSON.stringify(obj);

$done({
  body: modifiedBody
});
