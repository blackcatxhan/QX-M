function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}

function generateRandomNumber() {
  const digits = 15;
  let randomNumber = '';
  randomNumber += Math.floor(Math.random() * 9) + 1;
  for (let i = 1; i < digits; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }
  return randomNumber;
}

const randomNum = generateRandomNumber();


let obj = JSON.parse($response.body);

obj.legal_notifications.to_notify_terms_of_service = false;
obj.me.active_subscriptions_ids[0] = "com.bendingspoons.dawn.ai.1y_t110";
obj.me.terms_of_service.last_accepted_version = "2.5.0";

switch ($request.url) {
    case findUrl(/purchases\/verify\/apple/):
        obj.transactions = {
			randomNum: {
				"error_code": null,
				"product_id": "com.bendingspoons.dawn.ai.1y_t110"
			}
		};
        break;
}

$done({
    body: JSON.stringify(obj)
});