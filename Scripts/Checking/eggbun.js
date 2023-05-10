let obj=JSON.parse($response.body);
obj.isLifetimePremium = true;
obj.isAdmin = true;
obj.isGptChat = true;
obj.expired = false;
obj.isAlumni = true;
obj.isSchoolPremium = true;
$done({body:JSON.stringify(obj)});