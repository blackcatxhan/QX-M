body = $response.body.replace(/"is_pro_user":(.*?)(?=,|$)/, '"is_pro_user": true,');
$done({body});