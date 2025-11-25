let body = JSON.parse($response.body);

body.valid = true; 

$done({
	body: JSON.stringify(body)
});