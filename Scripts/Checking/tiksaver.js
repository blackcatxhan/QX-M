let url=$request.url;
let obj=JSON.parse($response.body);
if (url.indexOf('bookmark/add/user') !== -1) {
	obj = {
		"code" : 8000,
		"ok" : 0,
		"codeName" : "AtlasError",
		"name" : "MongoError"
	};
}

if (url.indexOf('bookmark/getStatus') !== -1) {
	obj = {
	  "features": [
		"Remove Watermark",
		"No ADS!",
		"Download HD TikTok Videos",
		"Save In Photo Library"
	  ],
	  "maxLimit": 1000,
	  "isR": false,
	  "annualTitle": "3 Days Free Trial",
	  "monthlyTitle": "Monthly",
	  "annualButtonTitle": "START MY FREE 3 DAYS",
	  "offer": {
		"title": "No ADS & Unlimited Download",
		"detail": "This price is for a monthly subscription."
	  },
	  "showStore": false,
	  "moveApp": {
		"show": false,
		"title": "",
		"description": "",
		"appIconURL": "",
		"appName": "",
		"appURL": "",
		"forced": false
	  }
	};
	// $response.writeHead(304);
	// $response.end();
}
$done({body:JSON.stringify(obj)});