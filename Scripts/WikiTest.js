let obj = JSON.parse($response.body);
obj = {
	"aiCredits": 5
};
$done({
	body: JSON.stringify(obj)
});
