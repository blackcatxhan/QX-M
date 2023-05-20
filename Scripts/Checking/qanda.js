function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}
let obj = JSON.parse($response.body);
const currentDate = new Date();
const year = currentDate.getUTCFullYear();
const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
const day = (String(currentDate.getUTCDate()).padStart(2, '0'));
const day_purchase = (String(currentDate.getUTCDate()).padStart(2, '0'))+7;
const hours = String(currentDate.getUTCHours()).padStart(2, '0');
const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
const purchase_time = `${year}-${month}-${day_purchase}T${hours}:${minutes}:${seconds}+09:00`;
const currentTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
const SeventTime = `${year}-${month}-${day_purchase}T${hours}:${minutes}:${seconds}Z`;

switch ($request.url) {
    case findUrl(/payment-service\/api\/v1\/ios\/purchase_histories/):
        obj = {
		  "payload" : {
			"product_skus" : [
			  {
				"sku" : "MATHPRESSO.QANDA.ADFREE.FREE_TRIAL.VN.19000",
				"expires_date" : purchase_time,
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
			"start_at" : currentTime,
			"id" : id,
			"expire_at" : SeventTime,
			"billing_info" : {
			  "product_code" : "vi_ad_free_membership_with_trial_a",
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
			  "product_code" : "vi_ad_free_membership_with_trial_a",
			  "is_manual" : false,
			  "product_type" : "AD_FREE",
			  "name" : "vi_ad_free_membership_with_trial_a",
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