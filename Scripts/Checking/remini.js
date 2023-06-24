var body = $response.body;
var obj = JSON.parse(body);
obj.transactions =
 {
    "300001475927460": {
      "error_code": null,
      "product_id": "com.bigwinepot.nwdn.international.1y_p99_99_pro"
    }
}
obj.me.active_subscriptions_ids = ["com.bigwinepot.nwdn.international.1y_p99_99_pro"]
obj.me.available_consumable_credits = {
"avatar_generations": 100000
}
body = JSON.stringify(obj);
$done({body});