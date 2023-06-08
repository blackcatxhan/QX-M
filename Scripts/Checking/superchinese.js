let obj = JSON.parse($response.body);

obj.vip_buy_url = null;
obj.vip_lifetime = true;
obj.vip_expired = 4087091227;
obj.vip_label = null;
obj.vip_icon = "@oss/icons/vip/ai1.png";
obj.vip = 1;


$done({
	body: JSON.stringify(obj)
});