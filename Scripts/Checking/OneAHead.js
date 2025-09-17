let obj = JSON.parse($response.body);
obj = {
    "uuid": "5c747f17-63f7-4689-baf4-07f43224af22",
    "email": "blackcatx@gmail.com",
    "name": null,
    "firstname": null,
    "expertise": null,
    "avatar_image": "https://www.gravatar.com/avatar/b57b00bf904ebb7e0976e2413eb48e13?s=250&r=g&d=blank",
    "subscribed": false,
    "subscriptions": [
        {
            "id": "sub_1LzFnrBi1n6SArE8lCkecUN7",
            "customer": {
                "id": "cus_MihCxBMKdFCFC1",
                "name": null,
                "email": "blackcatx@gmail.com"
            },
            "plan": {
                "id": "yearly200usd",
                "nickname": "$200 a year",
                "amount": 20000,
                "interval": "year",
                "currency": "USD"
            },
            "status": "active",
            "start_date": "2022-11-01T08:26:34.000Z",
            "default_payment_card_last4": null,
            "cancel_at_period_end": false,
            "cancellation_reason": null,
            "current_period_end": "2099-11-01T08:39:04.000Z",
            "trial_start_at": null,
            "trial_end_at": null,
            "price": {
                "id": "yearly200usd",
                "price_id": "64496693a27fc5003d3897bd",
                "nickname": "$200 a year",
                "amount": 20000,
                "interval": "year",
                "type": "recurring",
                "currency": "USD",
                "product": {
                    "id": "prod_LQLhcHT2lALFTX",
                    "name": "Collector",
                    "product_id": "643af394500acb003d5214b8"
                }
            },
            "tier": {
                "id": "643af394500acb003d5214b8",
                "name": "Collector",
                "slug": "founding-member",
                "active": true,
                "welcome_page_url": "/welcome/",
                "visibility": "public",
                "trial_days": 0,
                "description": "Get a limited edition collector-only magic book shipped worldwide every February",
                "type": "paid",
                "currency": "USD",
                "monthly_price": 6500,
                "yearly_price": 16000,
                "created_at": "2023-04-15T18:57:24.000Z",
                "updated_at": "2024-02-03T02:20:44.000Z",
                "monthly_price_id": null,
                "yearly_price_id": null,
                "expiry_at": null
            },
            "offer": null,
            "attribution": {
                "id": null,
                "type": null,
                "url": null,
                "title": null,
                "referrerSource": null,
                "referrerMedium": null,
                "referrerUrl": null
            }
        }
    ],
    "paid": true,
    "created_at": "2022-11-01T08:19:04.000Z",
    "enable_comment_notifications": true,
    "newsletters": [
        {
            "id": "642c9d8d87b54700310b2ec2",
            "uuid": "dacb22c7-a5fc-413d-a4a0-be7386e8418b",
            "name": "Weekly Magic Newsletter",
            "description": "Magic articles for magicians.",
            "sort_order": 0
        },
        {
            "id": "644bdc6238e0a4003d3b5d76",
            "uuid": "d66ddf9e-09a6-4940-9e49-6b7ca289e055",
            "name": "Professional Magicians",
            "description": "For working pros.",
            "sort_order": 1
        },
        {
            "id": "6446f450f0046d003dafd446",
            "uuid": "db15e6f1-ec07-4b96-a40a-092abfeb0c93",
            "name": "Special Updates",
            "description": "Messages from the editor.",
            "sort_order": 2
        },
        {
            "id": "65bae08bf9a17600016e984e",
            "uuid": "2ecf9755-baeb-4460-8ddc-164e4a530a01",
            "name": "The Sunday Archive",
            "description": "The best One Ahead articles.",
            "sort_order": 3
        }
    ],
    "email_suppression": {
        "suppressed": false,
        "info": null
    }
};
$done({
	body: JSON.stringify(obj)
});
