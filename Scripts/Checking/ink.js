let obj = {
  "data" : {
    "type" : "adapty_analytics_profile",
    "id" : "b2aa98ec-91ae-413c-904e-1576d015b8ee",
    "attributes" : {
      "app_id" : "c2e380b9-b8d5-4a2b-af78-8b9e50697fd3",
      "total_revenue_usd" : 0,
      "customer_user_id" : null,
      "subscriptions" : {
        "digital.nestapps.ink.iap.annual.trial" : {
          "vendor_transaction_id" : "450001422813306",
          "billing_issue_detected_at" : null,
          "is_lifetime" : false,
          "store" : "app_store",
          "vendor_product_id" : "digital.nestapps.ink.iap.annual.trial",
          "vendor_original_transaction_id" : "450001422813306",
          "will_renew" : false,
          "renewed_at" : "2023-05-08T02:27:43.000000+0000",
          "cancellation_reason" : null,
          "active_promotional_offer_id" : null,
          "active_promotional_offer_type" : null,
          "unsubscribed_at" : "2023-05-08T02:28:13.912068+0000",
          "is_active" : true,
          "activated_at" : "2023-05-08T02:27:44.000000+0000",
          "is_refund" : false,
          "is_in_grace_period" : false,
          "active_introductory_offer_type" : "free_trial",
          "expires_at" : "2099-07-07T02:27:43.000000+0000",
          "starts_at" : null,
          "is_sandbox" : false
        }
      },
      "promotional_offer_eligibility" : false,
      "custom_attributes" : {

      },
      "profile_id" : "b2aa98ec-91ae-413c-904e-1576d015b8ee",
      "paid_access_levels" : {
        "premium" : {
          "id" : "premium",
          "is_lifetime" : false,
          "vendor_product_id" : "digital.nestapps.ink.iap.annual.trial",
          "active_promotional_offer_type" : null,
          "cancellation_reason" : null,
          "billing_issue_detected_at" : null,
          "unsubscribed_at" : "2023-05-08T02:28:13.915312+0000",
          "expires_at" : "2099-07-07T02:27:43.000000+0000",
          "will_renew" : false,
          "is_active" : true,
          "active_promotional_offer_id" : null,
          "is_in_grace_period" : false,
          "activated_at" : "2023-05-08T02:27:44.000000+0000",
          "renewed_at" : "2023-05-08T02:27:43.000000+0000",
          "is_refund" : false,
          "active_introductory_offer_type" : "free_trial",
          "store" : "app_store",
          "starts_at" : null
        }
      },
      "introductory_offer_eligibility" : false,
      "non_subscriptions" : null
    }
  }
};
	
$done({body: JSON.stringify(obj)});