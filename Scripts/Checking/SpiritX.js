let req = {};

// Đọc thông tin từ request client gửi lên
if (typeof $request !== "undefined" && $request.body) {
  try {
    req = typeof $request.body === "string" ? JSON.parse($request.body) : $request.body;
  } catch (e) {
    console.log("Parse request error: " + e);
  }
}

const mockResponse = {
  "status": "success",
  "success": true,
  "data": {
    "auth": {
      "licenseKey": req.licenseKey || "SPX-PRO-9842-8812-ABCD",
      "phoneUniqueKey": req.phoneUniqueKey || "",
      "appID": req.appId || "spirit-x-ios",
      "userEmail": req.userEmail || "",
      "token": "jwt_mock_token_spiritx",
      "sessionID": "sess_891234abcd",
      "valid": true,
      "expiresAt": 1999999999
    },
    "user": {
      "userID": "alex",
      "email": req.userEmail || ""
    }
  }
};

// Ghi đè mã 400 thành 200 OK và trả về body
$done({
  status: 200,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(mockResponse)
});