var obj = JSON.parse($response.body); 
obj.data.users[0].type = "S";
$done({body: JSON.stringify(obj)});