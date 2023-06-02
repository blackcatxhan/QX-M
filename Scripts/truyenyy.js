let obj = JSON.parse($response.body);

obj.user.isPremium =  true;
obj.user.isSuperUser =  true;
obj.user.bannedReasone =  "";
obj.user.banned =  false;
obj.user.bannedUntil =  null;
obj.user.premiumUntil =  "2099-07-07T07:07:07.832336+07:00";

$done({
    body: JSON.stringify(obj)
});