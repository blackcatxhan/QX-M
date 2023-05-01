var obj = JSON.parse($response.body); 
obj['subscriber']['subscriptions'] = {
      "blocker.ios.subscription.yearly" : {
        "original_purchase_date" : "2023-05-01T11:27:02Z",
        "expires_date" : "2099-07-07T11:27:01Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : "2023-05-01T11:27:28Z",
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2023-05-01T11:27:01Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    }; 
obj['subscriber']['entitlements'] = {
      "premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-05-01T11:27:01Z",
        "product_identifier" : "blocker.ios.subscription.yearly",
        "expires_date" : "2099-07-07T11:27:01Z"
      }
    }; 
$done({body: JSON.stringify(obj)});