let obj = JSON.parse($response.body);

obj =  true;

$done({
	body: JSON.stringify(obj)
});