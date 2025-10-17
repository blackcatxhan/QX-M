let obj = {
    "kind": "identitytoolkit#GetAccountInfoResponse",
    "users": [
        {
            "localId": "b84a7d09-0d49-4bf4-8e72-12b13b6ab8cb",
            "validSince": "1760658822",
            "lastLoginAt": "1760674727004",
            "createdAt": "1760658822231",
            "customAuth": true,
            "lastRefreshAt": "2025-10-17T04:18:47.004Z"
        }
    ]
};


$done({
	body: JSON.stringify(obj)
});