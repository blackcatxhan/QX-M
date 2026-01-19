const request = $request;
const options = {
    url: "https://api.revenuecat.com/v1/product_entitlement_mapping",
    headers: {
        'Authorization': request.headers["Authorization"] || request.headers["authorization"],
        'X-Platform': 'iOS',
        'User-Agent': request.headers["User-Agent"] || request.headers["user-agent"]
    }
};

$httpClient.get(options, function(error, newResponse, data) {
    if (error || !data) {
        $done({});
        return;
    }

    const ent = JSON.parse(data);
    
    // Tạo giả lập dữ liệu subscriber mới
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

    // Duyệt qua tất cả các entitlements có trong mapping của app
    const productEntitlementMapping = ent.product_entitlement_mapping;

    if (productEntitlementMapping) {
        for (const [entitlementId, productInfo] of Object.entries(productEntitlementMapping)) {
            const productIdentifier = productInfo.product_identifier;
            const entitlements = productInfo.entitlements;

            for (const entitlement of entitlements) {
                // Thêm vào entitlements
                jsonToUpdate.subscriber.entitlements[entitlement] = {
                    "purchase_date": "2024-01-01T01:01:01Z",
                    "original_purchase_date": "2024-01-01T01:01:01Z",
                    "expires_date": "9999-01-01T01:01:01Z",
                    "is_sandbox": false,
                    "ownership_type": "PURCHASED",
                    "store": "app_store",
                    "product_identifier": productIdentifier
                };

                // Thêm vào subscriptions
                jsonToUpdate.subscriber.subscriptions[productIdentifier] = {
                    "expires_date": "9999-01-01T01:01:01Z",
                    "original_purchase_date": "2024-01-01T01:01:01Z",
                    "purchase_date": "2024-01-01T01:01:01Z",
                    "is_sandbox": false,
                    "ownership_type": "PURCHASED",
                    "store": "app_store"
                };
            }
        }
    }

    // Trả về body đã được chỉnh sửa
    $done({ body: JSON.stringify(jsonToUpdate) });
});