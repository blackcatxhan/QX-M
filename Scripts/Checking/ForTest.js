var obj = JSON.parse($response.body); 
obj['is_premium'] = 1; 
$done({body: JSON.stringify(obj)});