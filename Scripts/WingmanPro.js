let obj = JSON.parse($response.body);
obj = {
  "type" : "success",
  "data" : {
    "status" : 200,
    "data" : [
      {
        "id" : 880,
        "lastname" : "Stand",
        "firstname" : "John",
        "uuid" : "734f2ecc-a0c2-40ab-8730-49473ca31386",
        "email" : "o62df02ne7b+wingman@skytiming.site",
        "app" : "12faf4fc-127a-4fe6-9ebf-513289658b22",
        "unlimitedAccess" : true,
        "connectID" : ""
      }
    ],
    "statusText" : "OK",
    "count" : null,
    "error" : null
  }
};
$done({
	body: JSON.stringify(obj)
});
