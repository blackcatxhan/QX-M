let body = JSON.parse($response.body);

body.result.success = true; 
body.result.message = "License key is valid."; 

$done({
	body: JSON.stringify(body)
});