let obj = JSON.parse($response.body);

obj.mystersmith_sub_valid = "2030-12-12";
obj.input_addon_activated = 1;
obj.mystersmith_sub_id = "PREMIUM";
obj.mystersmith_sub = 365;
obj.credits = 99999;


$done({
	body: JSON.stringify(obj)
});