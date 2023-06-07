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

var currentDate = new Date();
currentDate.setHours(currentDate.getHours() + 2);
var plus2hrs = currentDate.toISOString();
currentDate.setHours(currentDate.getHours() - 2);
var current = currentDate.toISOString();
currentDate.setDate(currentDate.getDate() + 7);
var after7days = currentDate.toISOString();

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
	"expires_at": after7days,
	"group_id": "e9359adb",
	"id": idsub,
	"in_retry_billing": false,
	"introductory_activated": true,
	"kind": "autorenewable",
	"local": false,
	"next_check_at": plus2hrs,
	"platform": "ios",
	"product_id": "com.aiarlabs.prequel.subscription.weekly",
	"retries_count": 0,
	"started_at": current,
	"status": "trial",
	"unit": "day",
	"units_count": 7
};

$done({
    body: JSON.stringify(obj)
});