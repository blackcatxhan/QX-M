function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}

function generateRandomNumber() {
  var randomNum = Math.random();  // generates a random decimal between 0 and 1
  var randomNumber = Math.floor(randomNum * 100000000);  // multiplies the decimal by 100000000 and rounds down to the nearest integer
  return randomNumber;
}

var pad_id = generateRandomNumber();
var payment_account_id = generateRandomNumber();
var id = generateRandomNumber();

let obj = JSON.parse($response.body);

switch ($request.url) {
    case findUrl(/analytics\/tracker/):
        obj = {
		  "attributes" : {
			"user_register_date" : 0,
			"pad_id" : pad_id
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
		  "payment_account_id" : payment_account_id
		};
        break;
   case findUrl(/app\/link\/appsflyer/):
        obj = {
		  "store" : "apple",
		  "bundle_id" : "com.musescore.player",
		  "appsflyer_id" : "1685369347652-5329518",
		  "id" : id,
		  "payment_account_device_id" : pad_id,
		  "advertising_id" : "",
		  "date_created" : 1685420974,
		  "payment_account_id" : payment_account_id
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