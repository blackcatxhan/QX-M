var body = $response.body;
var obj = JSON.parse(body);
obj.data.user.isVip = "1",
obj.data.user.isLifeVip = "1",
obj.data.user.vipEndTime = "2099-07-07 07:07:07.0"
body = JSON.stringify(obj);
$done({
	body
});
