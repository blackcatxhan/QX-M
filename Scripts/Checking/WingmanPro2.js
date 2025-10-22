if ($request.method !== "POST") {
    $done({});
    return;
}

const modifiedBody = JSON.stringify({
    "deviceName": "iPhone18,1",
    "appID": "12faf4fc-127a-4fe6-9ebf-513289658b22",
    "deviceID": "EOURLX",
    "user": "6d737aac-936f-4f7b-b659-8f199c175257"
});

$done({
    body: modifiedBody
});