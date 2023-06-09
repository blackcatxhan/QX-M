let obj = JSON.parse($response.body);

obj.data.apple_extra.original_application_version = "4.47.1";

$done({
    body: JSON.stringify(obj)
});