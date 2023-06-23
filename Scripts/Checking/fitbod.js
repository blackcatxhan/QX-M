let obj = JSON.parse($response.body);

obj.data.subscriptions = [
      {
        "id": 1234,
        "user_id": "-redacted-",
        "source": "stripe",
        "is_subscribed": true,
        "subscribed_at": 1502937927000,
        "subscribed_at_date": "2020-10-17T15:19:47Z",
        "expiration_at": 4087091227000,
        "expiration_at_date": "2099-07-07T07:07:07Z",
        "renewable": false,
        "canceled_at": "2020-06-20T19:50:07Z",
        "product": "com-fitbod-web-yearly-44_99-discount-25",
        "stripe_subscription_id": "sub_-redacted-",
        "stripe_customer_id": "cus_-redacted-",
        "prepaid_code_id": 0
      }
    ];

$done({
    body: JSON.stringify(obj)
});