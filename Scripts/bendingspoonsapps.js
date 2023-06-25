function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}

let obj = JSON.parse($response.body);

switch ($request.url) {
    case findUrl(/remini.oracle/):
        obj.transactions = {
			"300001475927460": {
			  "error_code": null,
			  "product_id": "com.bigwinepot.nwdn.international.1y_p99_99_pro"
			}
		};
		obj.me.active_subscriptions_ids = ["com.bigwinepot.nwdn.international.1y_p99_99_pro"];
		obj.me.available_consumable_credits = {
			"avatar_generations": 100000
		};
        break;
    case findUrl(/filmicpro.oracle/):
        obj.me.non_consumables_ids = ["com.cinegenix.filmic.pro.filmic_standard_t15"];
        break;
    case findUrl(/splice.oracle/):
        obj.me.non_consumables_ids =  ["com.path36.SpliceFree.lt_t73"];
        break;
}

$done({
    body: JSON.stringify(obj)
});