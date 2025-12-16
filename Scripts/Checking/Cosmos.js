let obj = JSON.parse($response.body);
obj = {
    "status": 200,
    "is_success": true,
    "message": "Token is valid!"
};
$done({
	body: JSON.stringify(obj)
});