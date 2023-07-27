let obj = JSON.parse($response.body);

obj.active_subscriptions = [
    {
      "id" : "f8c3b44f-ba80-4595-a103-312428c846d0",
      "plan_id" : "8a6ba232-5d9f-4e4e-99ce-67d02be8d510",
      "next_renewal_at" : "2099-07-07T03:54:05Z",
      "purchase_token" : null,
      "offer_type" : "FREE_TRIAL",
      "original_purchased_at" : "2023-06-30T03:54:06Z",
      "subscription_status" : "AUTO_RENEWING",
      "content_id" : null,
      "purchased_at" : "2023-06-30T03:54:05Z",
      "cancelled_at" : null,
      "offer_identifier" : null,
      "store_country" : "VN",
      "environment" : "PRODUCTION",
      "is_family_shared" : false,
      "store_type" : "APPLE_APP_STORE"
    }
];

$done({
	body: JSON.stringify(obj)
});