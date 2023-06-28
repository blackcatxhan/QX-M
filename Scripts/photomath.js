let [{ body }, { url }] = [$response, $request],
    obj = JSON.parse(body);

obj["content"]["tier"] = {
    "added": "1970-01-08T19:05:42.540Z",
    "level": "genius"
};
obj["content"]["scope"] = [
    "free:solution",
    "paid:solution",
    "trial:solution",
    "mypedia:solution",
    "wip:basic"
];
obj["content"]["subscription"] = {
    "expiry": "2099-07-07T19:07:03.000Z",
    "orderId": "320000813070599",
    "autoRenewing": true,
    "productId": "com.microblink.PhotoMath.purchase.genius.one_year",
    "status": "active",
    "inGracePeriod": false,
    "packageName": "com.microblink.PhotoMath",
    "started": "1970-01-08T19:07:03.000Z"
};
obj["content"]["rewardVideoAdCounter"] = 3;
delete obj["content"]["subscriptionSharing"];
delete obj["content"]["NotationOne"];
delete obj["content"]["freeSunday"];
delete obj["content"]["freeSundayVariant"];

body = JSON.stringify(obj);
$done({ body });