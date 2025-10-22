let obj = JSON.parse($response.body);

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

$done({
	body: JSON.stringify(obj)
});