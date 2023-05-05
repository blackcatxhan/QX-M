let obj = JSON.parse($response.body);
let time = new Date();
obj.data.is_apple_auto_renewable = false;
obj.data.is_trial_eligible = true;
obj.data.will_renew = true;
obj.data.is_premium = 1;
obj.data.type = "diamond";
obj.data.sku = "diamond_yearly_032022";
obj.data.is_apple_subscriber = true;
obj.data.date.start = time.setHours(time.getHours() - 1);
obj.data.date.expires = time.setDate(time.getDate() + 7);
$done({body: JSON.stringify(obj)});
