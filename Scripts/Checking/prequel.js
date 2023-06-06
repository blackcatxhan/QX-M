function generateUUID() {
  function generateSegment() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return (
    generateSegment() + generateSegment() + "-" + generateSegment() + "-" + generateSegment() + "-" + generateSegment() + "-" + generateSegment() + generateSegment() + generateSegment()
  );
}

const uuid = generateUUID(); // Original: 879d11b6-f021-4cb6-a036-d059415dd4d6
const idsub = generateUUID(); // Original: bfcf6924-8708-4caa-a06b-e35d9bd75ec1

let obj = JSON.parse($response.body);

obj.data.results.currency = {
	"code": "VND",
	"country_code": "VN",
	"id": uuid
};

obj.data.results.subscriptions[0] = {
	"autorenew_enabled": true,
	"cancelled_at": null,
	"environment": "production",
	"expires_at": "2099-07-07T07:07:07.000Z",
	"group_id": "e9359adb",
	"id": idsub,
	"in_retry_billing": false,
	"introductory_activated": true,
	"kind": "autorenewable",
	"local": false,
	"next_check_at": "2023-06-04T07:01:24.000Z",
	"platform": "ios",
	"product_id": "com.aiarlabs.prequel.subscription.weekly",
	"retries_count": 0,
	"started_at": "2023-06-04T06:01:24.000Z",
	"status": "trial",
	"unit": "day",
	"units_count": 47278
};

$done({
    body: JSON.stringify(obj)
});