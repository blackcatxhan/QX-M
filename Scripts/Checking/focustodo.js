let obj = JSON.parse($response.body);

obj.expiredDate = 4087091227000;

$done({
	body: JSON.stringify(obj)
});