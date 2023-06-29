var body = $response.body;
var obj = JSON.parse(body);
obj.data = {
	"expires_date_ms": 4087091227000,
	"vip": 1
}
body = JSON.stringify(obj);
$done({
	body
});
