let obj = JSON.parse(body);
obj.data.user.subscription = true;
obj.data.user.lifetime_subscription = true;
body = JSON.stringify(obj); 
$done({body});
