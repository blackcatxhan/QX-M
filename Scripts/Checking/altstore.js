let obj = JSON.parse($response.body);
obj ={
        "data" : {
    "status" : 0,
    "activeAtDay" : "",
    "lifetimeType" : 0,
    "inviteMax" : 100,
    "invitedNum" : "5",
    "coupons" : [

    ],
    "expireAtDay" : "",
    "sn" : "EU01705A0001700",
    "remainDays" : 0
  }
    }
$done({body: JSON.stringify(obj)});