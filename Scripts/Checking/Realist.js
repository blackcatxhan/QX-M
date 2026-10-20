let obj = JSON.parse($response.body);

obj = {
  "code": "REALIST",
  "userId": "38be93f6-45a5-42a4-8b2a-5b13e2b6e0df",
  "disabled": false
};

$done({
  status: 200,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(obj)
});