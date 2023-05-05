let obj = JSON.parse($response.body);
obj.data.vipExpire= "07.07.2099";
obj.data.isVIP= true;
obj.data.displayName= "BlackCatX (LK Team)";
obj.data.balanceNum= 7777;
obj.data.balance= "7777 xu";
obj.data.fullName= "BlackCatX (LK Team)";
$done({body: JSON.stringify(obj)});
