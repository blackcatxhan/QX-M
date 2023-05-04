var obj = JSON.parse($response.body); 
obj['is_premium'] = 1; 
obj['premium_expired'] = 1714720027; 
obj['rating'] = false; 
$done({body: JSON.stringify(obj)});