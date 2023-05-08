let obj = JSON.parse($response.body);

obj.subscriber.subscriptions.annual.original_purchase_date = "2023-05-08T02:25:10Z";
obj.subscriber.subscriptions.annual.expires_date = "2099-07-07T07:27:12Z";
obj.subscriber.subscriptions.annual.purchase_date = "2023-05-08T02:25:08Z";
obj.subscriber.subscriptions.annual.is_sandbox = false;
obj.subscriber.subscriptions.annual.refunded_at = null;
obj.subscriber.subscriptions.annual.unsubscribe_detected_at = null;
obj.subscriber.subscriptions.annual.grace_period_expires_date = null;
obj.subscriber.subscriptions.annual.billing_issues_detected_at = null;
obj.subscriber.subscriptions.annual.auto_resume_date = null;
obj.subscriber.subscriptions.annual.period_type = "trial";
obj.subscriber.subscriptions.annual.ownership_type = "PURCHASED";
obj.subscriber.subscriptions.annual.store = "app_store";
obj.subscriber.original_purchase_date.store = "2023-05-07T17:51:03Z";

$done({body: JSON.stringify(obj)});