if ($request.method !== "POST") {
    $done({});
    return;
}

const modifiedBody = JSON.stringify({
    "platform": "ios",
    "productId": "com.rostamimagic.inject", 
    "receipt": "2",
    "email": "ourworlmagician@gmail.com",
    "password": null
});

$done({
    body: modifiedBody
});