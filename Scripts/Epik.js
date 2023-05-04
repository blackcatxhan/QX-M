let obj = JSON.parse($response.body);
obj = {
	  "result" : {
		"products" : [
		  {
			"managed" : false,
			"status" : "ACTIVE",
			"startDate" : 1683153619000,
			"productId" : "com.snowcorp.epik.subscribe.plan.oneyear",
			"expireDate" : 4087126586000
		  }
		],
		"activated" : true
	  }
	};
$done({body: JSON.stringify(obj)});