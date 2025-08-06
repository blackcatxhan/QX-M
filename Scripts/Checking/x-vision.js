// Parse JSON từ response body
let obj = JSON.parse($response.body);

// Định nghĩa cấu trúc code chung để tránh lặp lại
const premiumCode = {
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

// Kiểm tra appBundle từ record hoặc từ res
const appBundle = obj?.res?.record?.appBundle || obj?.res?.appBundle;

if (appBundle === "com.appmazing.xvision") {
    // Ưu tiên ghi vào obj.res.record nếu tồn tại
    if (obj?.res?.record) {
        obj.res.record.code = premiumCode;
    }
    // Nếu không có record, ghi vào obj.res.code
    else {
        obj.res.code = premiumCode;
    }
}

// Gửi phản hồi với body đã chỉnh sửa
$done({
    body: JSON.stringify(obj)
});