let req = {};

// 1. Đọc và parse dữ liệu từ request body
if (typeof $request !== "undefined" && $request.body) {
  try {
    req = JSON.parse($request.body);
  } catch (e) {
    console.log("Parse $request.body failed: " + e);
  }
}

// 2. Tạo body response với các giá trị khớp theo client vừa gửi
const mockResponse = {
  "status": "success",
  "data": {
    "auth": {
      "licenseKey": req.licenseKey || "",
      "phoneUniqueKey": req.phoneUniqueKey || "",
      "appID": req.appId || "spirit-x-ios",
      "userEmail": req.userEmail || "",
      "token": "jwt_mock_token_" + (req.phoneUniqueKey || "spiritx"),
      "sessionID": "sess_" + Math.random().toString(36).substring(2, 12),
      "valid": true,
      "expiresAt": 1999999999
    },
    "user": {
      "userID": "alex",
      "email": req.userEmail || ""
    }
  }
};

const resHeaders = {
  "Content-Type": "application/json"
};
const resBody = JSON.stringify(mockResponse);

// 3. Trả về response (Tương thích cả Surge, Shadowrocket, Loon, Quantumult X)
if (typeof $response !== "undefined") {
  // Nếu module đang đặt là type=http-response
  $done({
    status: 200,
    headers: resHeaders,
    body: resBody
  });
} else {
  // Nếu module đang đặt là type=http-request (Mock response trực tiếp)
  $done({
    response: {
      status: 200,
      headers: resHeaders,
      body: resBody
    }
  });
}