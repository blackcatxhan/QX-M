let obj = JSON.parse($response.body);

obj.data.expired_day = 4087091227;

$done({body: JSON.stringify(obj)});