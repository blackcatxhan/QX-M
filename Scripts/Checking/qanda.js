function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}
let obj = JSON.parse($response.body);

switch ($request.url) {
    case findUrl(/payment-service\/api\/v1\/ios\/purchase_histories/):
        obj = {
		  "payload" : {
			"product_skus" : [
			  {
				"sku" : "MATHPRESSO.QANDA.ADFREE.FREE_TRIAL.VN.19000",
				"expires_date" : "2099-07-07T07:07:07+09:00",
				"auto_renewing" : true
			  }
			]
		  },
		  "message" : null,
		  "code" : "SUCCESS"
		};
        break;
    case findUrl(/membership-service\/membership\/users\/status/):
		const user_id = 87353000 + Math.floor(Math.random() * 1000);
		const id = 500000 + Math.floor(Math.random() * 1000);
        obj.free_trial_possible = true;
        obj.show_premium_banner = false;
        obj.current_subscription = {
			"start_at" : "2023-05-20T11:59:40Z",
			"id" : id,
			"expire_at" : "2099-07-07T07:07:07Z",
			"billing_info" : {
			  "product_code" : "vi_ad_free_membership_a",
			  "id" : id,
			  "payer_user_id" : user_id,
			  "next_billing_at" : null,
			  "platform" : "ios",
			  "price" : 19000,
			  "consumer_user_id" : user_id,
			  "platform_sku" : "MATHPRESSO.QANDA.ADFREE.FREE_TRIAL.VN.19000",
			  "currency" : "VND",
			  "payment_method" : "ios"
			},
			"plan" : {
			  "product_code" : "vi_ad_free_membership_a",
			  "is_manual" : false,
			  "product_type" : "AD_FREE",
			  "name" : "vi_ad_free_membership_a",
			  "plan_type" : "NORMAL"
			},
			"is_trial_period" : true,
			"auto_renewing" : true
		};
		break;
}

$done({
    body: JSON.stringify(obj)
});