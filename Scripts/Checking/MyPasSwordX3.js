let obj = {
  message: "License key is valid. You can continue registration.",
  licenseStatus: "not_activated"
};

$done({
  status: "HTTP/1.1 200 OK",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(obj)
});
