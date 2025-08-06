let obj = JSON.parse($response.body);

// Kiểm tra nếu appBundle là com.appmazing.xvision
if (obj?.res?.record?.appBundle === "com.appmazing.xvision") {
    // Thay thế toàn bộ trường code trong record
    obj.res.record.code = {
        "_id": "6891885ccc513600151ebbf2",
        "dummyCode": false,
        "origin": "APP",
        "active": true,
        "code": "jVD9A0zX",
        "iapTransactionReceipt": "7A3D78A8-2A0C-4A21-AEAC-AC57FE33ED22",
        "__v": 0,
        "created": "2025-08-05T04:28:12.450Z",
        "appBundle": "com.appmazing.xvision",
        "activationDate": "2025-08-05T04:28:12.450Z",
        "iapTransactionId": "7A3D78A8-2A0C-4A21-AEAC-AC57FE33ED22"
    };
}

$done({
    body: JSON.stringify(obj)
});