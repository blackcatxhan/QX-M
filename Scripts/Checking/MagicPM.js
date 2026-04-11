let obj = {};

try {
    obj = JSON.parse($response.body);
} catch (e) {
    obj = {};
}

// lấy code từ request body
let body = $request.body || "";
let code = (body.match(/code=([^&]*)/) || [,""])[1];
code = decodeURIComponent(code);

// override response
obj = {
    valid: true,
    discount: 99,
    code: code,
    message: "99% off applied!"
    //message: "✓ Access granted!"
};

$done({ body: JSON.stringify(obj) });