// Inject.js
console.log(`Request method: ${$request.method}`);
console.log(`Request URL: ${$request.url}`);

if ($request.method !== "POST") {
    console.log(`Skipping ${$request.method} request, only processing POST`);
    $done({});
    return;
}

console.log("Processing POST request...");
console.log(`Original body: ${$request.body}`);

const modifiedBody = JSON.stringify({
    "platform": "ios",
    "productId": "com.rostamimagic.inject", 
    "receipt": "77",
    "email": null,
    "password": null
});

console.log(`Modified body: ${modifiedBody}`);

$done({
    body: modifiedBody
});