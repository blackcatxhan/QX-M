var obj = JSON.parse($response.body);

obj.data.user_resource.can_playlist_coin = true;
obj.data.user_resource.has_survey = false;
obj.data.user_resource.remaining_coins = 7777777;
obj.data.user_resource.can_playlist_coin = true;
obj.data.promotion = "vip_reward";

$done({body: JSON.stringify(obj)});