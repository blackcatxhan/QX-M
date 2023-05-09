let url=$request.url;
let obj=JSON.parse($response.body);
if (url.endsWith('user')) {
	obj = {
		"code" : 8000,
		"ok" : 0,
		"codeName" : "AtlasError",
		"name" : "MongoError"
	};
	$done({body:JSON.stringify(obj)});
}

if (url.endsWith('getStatus')) {
	$response.writeHead(304);
	$response.end();
}