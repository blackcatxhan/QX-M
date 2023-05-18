function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}

let obj = JSON.parse($response.body);

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
        const purchasedProducts = [];
		obj.productsAvailableForPurchase.forEach(product => {
		  const newProduct = {
			buyMode: "once",
			id: (2548000 + Math.floor(Math.random() * 1000)),
			boughtAt: new Date().toISOString(),
			productType: product.productType,
			price: product.price,
			coinPrice: product.coinPrice
		  };

		  purchasedProducts.push(newProduct);
		});
		obj.purchasedProducts = purchasedProducts;
        break;
    case findUrl(/users\//):
        obj.isPremium = true;
        break;
}

$done({
    body: JSON.stringify(obj)
});