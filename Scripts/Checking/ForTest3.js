var obj = JSON.parse($response.body); 
obj['is_admin'] = 1; 
obj['is_netplus'] = 1; 
obj['first_vip_login'] = 1; 
$done({body: JSON.stringify(obj)});