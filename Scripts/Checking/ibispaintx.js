let obj = JSON.parse($response.body);

obj = {
  "result" : 1,
  "purchases" : [
    {
      "last_expire_date" : 4087091227000,
      "cancel_date" : null,
      "next_purchase_id" : "ibisPaintXPrimeYearly",
      "renew_state" : true,
      "item" : 5,
      "test_flag" : false,
      "last_purchase_id" : "450001461974642",
      "token" : null,
      "first_purchase_date" : 1687253523000,
      "cancel_reason" : 0,
      "trial_mode" : false,
      "last_purchase_date" : 1687253522000,
      "first_purchase_id" : "450001461974642"
    }
  ]
};

$done({
	body: JSON.stringify(obj)
});