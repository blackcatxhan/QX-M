let obj = JSON.parse($response.body);
obj.data.coins= 9999;
$done({body: JSON.stringify(obj)});