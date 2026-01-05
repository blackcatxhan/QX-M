let url = $request.url;
let obj = JSON.parse($response.body);

if (/login\.php/.test(url)) {
	obj = {
		"status": "success"
	};
} else if (/register\.php/.test(url)) {
	obj = {
		"status": "success"
	};
}

$done({
  body: JSON.stringify(obj)
});
