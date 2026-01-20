const request = $request;

const options = {
    url: "https://api.revenuecat.com/v1/product_entitlement_mapping",
    method: "GET",
    headers: {
        'Authorization': request.headers["Authorization"] || request.headers["authorization"],
        'X-Platform': 'iOS',
        'User-Agent': request.headers["User-Agent"] || request.headers["user-agent"]
    }
};

$task.fetch(options).then(response => {
    if (!response || !response.body) {
        $done({});
        return;
    }

    const ent = JSON.parse(response.body);

    let jsonToUpdate = {
        "request_date_ms": 1704070861000,
        "request_date": "2024-01-01T01:01:01Z",
        "subscriber": {
            "entitlement": {},
            "first_seen": "2024-01-01T01:01:01Z",
            "original_application_version": "1.0",
            "last_seen": "2024-01-01T01:01:01Z",
            "other_purchases": {},
            "management_url": null,
            "subscriptions": {},
            "entitlements": {},
            "original_purchase_date": "2024-01-01T01:01:01Z",
            "original_app_user_id": "AutoRC-User",
            "non_subscriptions": {}
        }
    };

    const productEntitlementMapping = ent.product_entitlement_mapping;

    if (productEntitlementMapping) {
        for (const [_, productInfo] of Object.entries(productEntitlementMapping)) {
            const productIdentifier = productInfo.product_identifier;
            const entitlements = productInfo.entitlements;

            for (const entitlement of entitlements) {
                jsonToUpdate.subscriber.entitlements[entitlement] = {
                    "purchase_date": "2024-01-01T01:01:01Z",
                    "original_purchase_date": "2024-01-01T01:01:01Z",
                    "expires_date": "2099-01-01T01:01:01Z",
                    "is_sandbox": false,
                    "ownership_type": "PURCHASED",
                    "store": "app_store",
                    "product_identifier": productIdentifier
                };

                jsonToUpdate.subscriber.subscriptions[productIdentifier] = {
                    "expires_date": "2099-01-01T01:01:01Z",
                    "original_purchase_date": "2024-01-01T01:01:01Z",
                    "purchase_date": "2024-01-01T01:01:01Z",
                    "is_sandbox": false,
                    "ownership_type": "PURCHASED",
                    "store": "app_store"
                };
            }
        }
    }

    $done({ body: JSON.stringify(jsonToUpdate) });
}).catch(err => {
    console.log(err);
    $done({});
});
