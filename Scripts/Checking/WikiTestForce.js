let obj = JSON.parse($response.body);
obj = {
	"proTools": "yes"
};
$done({
	body: JSON.stringify(obj)
});
