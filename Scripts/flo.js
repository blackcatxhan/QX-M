
let obj = JSON.parse($response.body);

obj.features[0] = "family";
obj.status = "active";
obj.auto_renew_status = true;
obj.expiration_date = "2099-07-07T07:07:07Z";
obj.transaction_id = Math.floor(100000000000000 + Math.random() * 900000000000000);
delete obj.used_intro_gr1;

$done({
    body: JSON.stringify(obj)
});