function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}
let obj = JSON.parse($response.body);

switch ($request.url){
	case findUrl(/api\/getUser/):
		obj.data.data = [
			{
				"id": 1024,
				"firstname": "Mr",
				"lastname": "Mqluus",
				"email": "mqluus+wingman@gmail.com",
				"uuid": "a35eb98f-f884-46b3-8b77-0933298fa0fb",
				"app": "12faf4fc-127a-4fe6-9ebf-513289658b22",
				"unlimitedAccess": true,
				"connectID": ""
			}
		];
		break;
	case findUrl(/api\/verify/):
		obj = {
			"type": "success",
			"errors": [],
			"licenses": [
				{
					"uuid": "a35eb98f-f884-46b3-8b77-0933298fa0fb",
					"code": "QLZQ-XXOW-HYCP-HJP2",
					"appID": "12faf4fc-127a-4fe6-9ebf-513289658b22",
					"userID": "a35eb98f-f884-46b3-8b77-0933298fa0fb",
					"deviceID": "GHQICX",
					"deviceName": "iPhone 13",
					"disabled": null,
					"createdBy": null,
					"lastUsed": "2025-07-14T04:54:28.027223",
					"createdAt": "2025-07-14T04:54:28.027223",
					"chargeID": "ch_3RkePEE8fzS13Pu10JwfWGQT"
				}
			]
		}
		break;
}

$done({
	body: JSON.stringify(obj)
});