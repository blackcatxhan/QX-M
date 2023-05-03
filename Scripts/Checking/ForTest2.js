let obj = JSON.parse($response.body);
obj.result.products.managed = false;
obj.result.products.status = "ACTIVE";
obj.result.products.productId = "com.snowcorp.epik.subscribe.plan.oneyear";
obj.result.products.startDate = 1683153619000;
obj.result.products.expireDate = 4087122786000;
obj.result.activated = true;
$done({body: JSON.stringify(obj)});