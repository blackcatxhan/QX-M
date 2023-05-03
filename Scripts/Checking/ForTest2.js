let obj = JSON.parse($response.body);
obj["result"]["products"][]={
  "managed" : false,
        "status" : "ACTIVE",
        "startDate" : 1683153619000,
        "productId" : "com.snowcorp.epik.subscribe.plan.oneyear",
        "expireDate" : 4087122786000
      };
obj["result"]["activated"]=true;
      
$done({body: JSON.stringify(obj)});