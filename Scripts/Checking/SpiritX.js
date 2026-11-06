// GIAI ĐOẠN 1: Bắt và lưu request body
if (typeof $response === "undefined") {
  if ($request.body) {
    $prefs.setValueForKey($request.body, "SPIRITX_CACHED_REQ");
  }
  $done({});
} 
// GIAI ĐOẠN 2: Khi server trả về response (kể cả server trả 400)
else {
  let req = {};
  const cached = $prefs.valueForKey("SPIRITX_CACHED_REQ");
  if (cached) {
    try {
      req = JSON.parse(cached);
    } catch (e) {
      console.log("Parse cached error: " + e);
    }
  }

  const mockResponse = {
    "status": "success",
    "data": {
		"licenseKey": req.licenseKey || "SPX-PRO-9842-8812-ABCD",
		"phoneUniqueKey": req.phoneUniqueKey || "A662DA39-E5F0-432A-9364-29AF36931048",
		"appId": req.appId || "spirit-x-ios",
		"userEmail": req.userEmail || "hello@gmail.com",
		"token": "jwt_mock_token_spiritx",
		"sessionID": "sess_891234abcd",
		"sessionVersion": "1.0",
		"valid": true,
		"expiresAt": 1999999999
    }
  };

  // Ép status code về 200 OK để ghi đè mã 400
  $done({
    status: "HTTP/1.1 200 OK",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(mockResponse)
  });
}