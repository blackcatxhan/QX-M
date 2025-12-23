let obj = JSON.parse($response.body);

obj.message = "License key is valid. You can continue registration.";
obj.licenseStatus = "unactive";

$done({
	body: JSON.stringify(obj)
});
