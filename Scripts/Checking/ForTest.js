let obj = JSON.parse($response.body);
obj.data.coins= 9999;
obj.success = false;
$done({body: JSON.stringify(obj)});