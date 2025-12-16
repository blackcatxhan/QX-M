let obj = JSON.parse($response.body);

obj.siker = 1;

$done({
	body: JSON.stringify(obj)
});
