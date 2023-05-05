var obj = JSON.parse($response.body);

obj.data.plan_subscriptions[0].remaining_day = 7;
obj.data.plan_subscriptions[0].promotion = "vip_reward";
obj.data.plan_subscriptions[0].end_at = "07:07 07-07-2099";
obj.data.plan_subscriptions[0].start_at = "07:07 05-05-2023"";
obj.data.plan_subscriptions[0].name = "Gói VIP LK Team";
obj.data.user_resource.can_playlist_coin = true;
obj.data.user_resource.has_survey = false;
obj.data.user_resource.remaining_coins = 7777777;
obj.data.user_resource.can_playlist_coin = true;
obj.data.promotion = "vip_reward";

$done({body: JSON.stringify(obj)});