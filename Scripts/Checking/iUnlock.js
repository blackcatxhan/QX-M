let url = $request.url;
let obj = JSON.parse($response.body);

if (/login\.php/.test(url)) {
	obj = {
	  "status" : "success",
	  "password" : "123456789",
	  "deviceId" : "IPhoneApp ver-3 (3)",
	  "id" : 2579,
	  "code" : "LOPRO_7541596852",
	  "email" : "johnquanta@mailnesia.com",
	  "name" : "John Quanta"
	};
} else if (/register\.php/.test(url)) {
	obj = {
	  "status" : "success",
	  "username" : "johnquanta@mailnesia.com",
	  "password" : "123456789"
	};
}

$done({
  body: JSON.stringify(obj)
});
