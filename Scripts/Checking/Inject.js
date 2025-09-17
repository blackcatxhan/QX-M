const obj = {
  "platform": "ios",
  "productId": "com.rostamimagic.inject",
  "receipt": "77",
  "email": "mqluus@gmail.com",
  "password": "mqluus"
};

$done({
  response: {
    status: 200,
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify($obj)
  }
});