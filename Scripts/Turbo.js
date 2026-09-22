let obj = JSON.parse($response.body);
obj = {
	"isPro": true
};
$done({
	body: JSON.stringify(obj)
});
