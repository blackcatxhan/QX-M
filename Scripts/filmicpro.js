var body = $response.body;
var obj = JSON.parse(body);
obj.me.non_consumables_ids = ["com.cinegenix.filmic.pro.filmic_standard_t15"]
body = JSON.stringify(obj);
$done({body});