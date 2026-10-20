if ($request.method !== "POST") {
    $done({});
    return;
}

const modifiedBody = JSON.stringify({
  "code": "REALIST",
  "userId": "38be93f6-45a5-42a4-8b2a-5b13e2b6e0df",
  "disabled": false
});

$done({
    body: modifiedBody
});