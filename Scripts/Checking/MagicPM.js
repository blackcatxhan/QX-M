let obj = JSON.parse($response.body);
obj = {"valid":true};
$done({
	body: JSON.stringify(obj)
});