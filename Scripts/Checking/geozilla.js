let obj = JSON.parse($response.body);

obj.success = true;
obj.premium_expired_at = 4087091227;
obj.premium_type = 'purchase';
obj.trial = true;

$done({body: JSON.stringify(obj)});