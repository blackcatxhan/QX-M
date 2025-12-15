let obj = JSON.parse($response.body);

obj = {
    "success": true
};

$done({
	body: JSON.stringify(obj)
});
