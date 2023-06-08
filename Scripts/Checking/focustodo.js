let obj = JSON.parse($response.body);

obj.expiredDate = 4087091227;

$done({
	body: JSON.stringify(obj)
});