function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}

let obj = JSON.parse($response.body);

switch ($request.url) {
    case findUrl(/manageSubscription/):
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
    case findUrl(/getFileTree/):
		obj.maxSize = 21474836480;
		/*
		{
		  "expandable" : false,
		  "maxSize" : 21474836480,
		  "modified" : false,
		  "synced" : 1687254576805
		}
		*/
        break;
}

$done({
	body: JSON.stringify(obj)
});