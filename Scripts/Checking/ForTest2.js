let obj = JSON.parse($response.body);
obj.result.products.managed = false;
obj.result.products.status = "ACTIVE";
obj.result.products.productId = "com.snowcorp.epik.subscribe.plan.oneyear";
obj.result.products.startDate = Math.floor(time / 1000);
time.setFullYear(time.getFullYear() + 1);
obj.result.products.expireDate = Math.floor(time / 1000);
obj.result.activated = true;
$done({body: JSON.stringify(obj)});