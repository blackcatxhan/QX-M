let obj = JSON.parse($response.body);
const user = "user";
const profile = "profile";
if(url.indexOf(user) != -1){
	obj.is_purchased = 1;
	obj.gift_premium = 1;
	obj.gift_premium_till = 4087066027;
	obj.purchased_till = 4087066027;
}
if(url.indexOf(profile) != -1){
	obj.premium = 1;
}

$done({body: JSON.stringify(obj)});