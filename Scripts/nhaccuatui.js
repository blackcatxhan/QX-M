let obj = JSON.parse($response.body);
obj.data.vipExpire= "09.09.2099";
obj.data.isVIP= true;
obj.data.displayName= "BlackCatX";
obj.data.balanceNum= 9999;
obj.data.balance= "9999 xu";
obj.data.fullName= "BlackCatX";
$done({body: JSON.stringify(obj)});
