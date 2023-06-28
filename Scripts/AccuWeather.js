let obj = JSON.parse($response.body);
obj = {
	"isValid": true,
	"autoRenewalStatus": null,
	"productId": "com.accuweather.annual.subscription",
	"expiryDateEpoch": 4087091227,
	"expirationDate": "2099-07-07T07:07:07+00:00",
	"expirationIntent": null,
	"expirationRetry": null,
	"purchaseDateEpoch": 1650809915000,
	"isTrial": false,
	"isIntro": true,
	"status": 0,
	"usedTrial": ["com.accuweather.annual.subscription"],
	"usedIntro": null,
	"isRetryable": null
};
$done({
	body: JSON.stringify(obj)
});
