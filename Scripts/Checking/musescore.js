function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}

let obj = JSON.parse($response.body);

switch ($request.url) {
    case findUrl(/analytics\/tracker/):
        obj = {
		  "attributes" : {
			"user_register_date" : 0,
			"pad_id" : 36075622
		  },
		  "country" : "VN",
		  "rt_analytics" : {
			"retry_interval" : 1000,
			"buffer_size" : 20,
			"enabled" : true,
			"buffer_interval" : 40,
			"flush_triggers" : [
			  "App Start",
			  "App End"
			],
			"retry_count" : 5
		  },
		  "time" : 1685420974000,
		  "payment_account_id" : 39557752
		};
        break;
   case findUrl(/app\/link\/appsflyer/):
        obj = {
		  "store" : "apple",
		  "bundle_id" : "com.musescore.player",
		  "appsflyer_id" : "1685369347652-5329518",
		  "id" : 20211307,
		  "payment_account_device_id" : 36075622,
		  "advertising_id" : "",
		  "date_created" : 1685420974,
		  "payment_account_id" : 39557752
		};
        break;
    case findUrl(/purchase\/service\/access/):
        obj = [
		  {
			"lifetime" : 0,
			"product_id" : "com.musescore.player.1year.learn",
			"date_access" : 4087091227,
			"product_code" : 342,
			"service_name" : "web_mu_edu_courses",
			"auto_renew" : -1,
			"trial" : 1
		  },
		  {
			"lifetime" : 0,
			"product_id" : "com.musescore.player.1year.learn",
			"date_access" : 4087091227,
			"product_code" : 342,
			"service_name" : "ios_mu_edu_courses",
			"auto_renew" : -1,
			"trial" : 1
		  },
		  {
			"lifetime" : 0,
			"product_id" : "com.musescore.player.1year.learn",
			"date_access" : 4087091227,
			"product_code" : 342,
			"service_name" : "android_mu_edu_courses",
			"auto_renew" : -1,
			"trial" : 1
		  }
		];
        break;
    case findUrl(/purchase\/transaction\/device\/ios/):
        obj = {
		  "service_access" : [
			{
			  "lifetime" : 0,
			  "product_id" : "com.musescore.player.1year.learn",
			  "date_access" : 4087091227,
			  "product_code" : 342,
			  "service_name" : "web_mu_edu_courses",
			  "auto_renew" : -1,
			  "trial" : 1
			},
			{
			  "lifetime" : 0,
			  "product_id" : "com.musescore.player.1year.learn",
			  "date_access" : 4087091227,
			  "product_code" : 342,
			  "service_name" : "ios_mu_edu_courses",
			  "auto_renew" : -1,
			  "trial" : 1
			},
			{
			  "lifetime" : 0,
			  "product_id" : "com.musescore.player.1year.learn",
			  "date_access" : 4087091227,
			  "product_code" : 342,
			  "service_name" : "android_mu_edu_courses",
			  "auto_renew" : -1,
			  "trial" : 1
			}
		  ]
		};
        break;
}

$done({
    body: JSON.stringify(obj)
});