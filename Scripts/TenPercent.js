var body = $response.body;
var obj = JSON.parse(body);
obj.user.expiration_date = "07/07/2099, 07:07:07 PM UTC",
obj.user.plan_description = "1 year",
obj.user.subscription_end_date = "07/07/2099, 07:07:07 PM UTC",
obj.user.subscription_period = "P1Y",
obj.user.subscription_source = "62926",
body = JSON.stringify(obj);
$done({
	body
});
