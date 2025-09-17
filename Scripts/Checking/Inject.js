if ($request.method !== "POST") {
    $done({});
    return;
}

const modifiedBody = JSON.stringify({
    "platform": "ios",
    "productId": "com.rostamimagic.inject", 
    "receipt": "MA==",
    "email": null,
    "password": null
});

$done({
    body: modifiedBody
});