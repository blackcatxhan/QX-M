let obj = JSON.parse($response.body);

obj.platform = "ios";
obj.productId = "com.rostamimagic.inject";
obj.receipt = "MA==5122";
obj.email = "nguyendat.glhan@gmail.com";
obj.password = null;


$done({
	body: JSON.stringify(obj)
});