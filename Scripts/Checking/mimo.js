function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}
let obj = JSON.parse($response.body);

const currentDate = new Date();
const year = currentDate.getUTCFullYear();
const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
const day = String(currentDate.getUTCDate()).padStart(2, '0');
const hours = String(currentDate.getUTCHours()).padStart(2, '0');
const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
const milliseconds = String(currentDate.getUTCMilliseconds()).padStart(3, '0');
const formattedTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}+00:00`;

switch ($request.url) {
    case findUrl(/subscriptions\/receipt/):
        obj = {
		  "source" : "ios",
		  "status" : "active",
		  "interval" : "yearly",
		  "trialEndAt" : "2099-07-07T07:07:07+00:00",
		  "billingInfo" : {
			"currency" : "VND",
			"paymentPending" : false,
			"nextBillingPrice" : 2299000
		  },
		  "intervalCount" : 1,
		  "activeUntil" : "2099-07-07T07:07:07+00:00",
		  "createdAt" : "2023-05-17T23:07:32+00:00",
		  "type" : "pro",
		  "isActive" : true
		};
        break;
    case findUrl(/subscriptions/):
        obj = {
		  "source" : "ios",
		  "status" : "active",
		  "interval" : "yearly",
		  "trialEndAt" : "2099-07-07T07:07:07+00:00",
		  "subscriptions" : [
			{
			  "source" : "ios",
			  "status" : "active",
			  "interval" : "yearly",
			  "trialEndAt" : "2099-07-07T07:07:07+00:00",
			  "billingInfo" : {
				"currency" : "USD",
				"paymentPending" : false,
				"nextBillingPrice" : 99.989999999999995
			  },
			  "intervalCount" : 1,
			  "activeUntil" : "2099-07-07T07:07:07+00:00",
			  "createdAt" : "2023-05-17T23:07:32+00:00",
			  "type" : "pro",
			  "isActive" : true
			}
		  ],
		  "billingInfo" : {
			"currency" : "USD",
			"paymentPending" : false,
			"nextBillingPrice" : 99.989999999999995
		  },
		  "intervalCount" : 1,
		  "activeUntil" : "2099-07-07T07:07:07+00:00",
		  "createdAt" : "2023-05-17T23:07:32+00:00",
		  "type" : "pro",
		  "isActive" : true
		};
        break;
    case findUrl(/products\/user/):
        const purchasedProductss = [];
		obj.productsAvailableForPurchase.forEach(product => {
			if (!(product.productType === "streak_challenge_7d")) {
			  const newProduct = {
				buyMode: "once",
				id: (2548000 + Math.floor(Math.random() * 1000)),
				boughtAt: formattedTime,
				productType: product.productType,
				price: product.price,
				coinPrice: product.coinPrice
			  };

			  purchasedProductss.push(newProduct);
			}
		});
		obj.purchasedProducts = purchasedProductss;
        break;
    case findUrl(/users\//):
        obj.isPremium = true;
        break;
}

$done({
    body: JSON.stringify(obj)
});