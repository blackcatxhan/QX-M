let obj = JSON.parse($response.body);
var currentTime = Math.floor(Date.now() / 1000);
var oneHourAgo = currentTime - 3600;
var currentDate = new Date();
var futureDate = new Date('2099-07-07');
var currentTime = currentDate.getTime();
var futureTime = futureDate.getTime();
var diffTime = futureTime - currentTime;
var diffDays = Math.ceil(diffTime / (24 * 60 * 60 * 1000));
var seconds = diffDays * 24 * 60 * 60;

obj.data.vip_trial_start_time = oneHourAgo;
obj.data.vip_show_expire_time = 4087091227;
obj.data.vip_expire_time = 4087091227;
obj.data.vip_current_type = 2; // 0: Free
obj.data.vip_current_is_trial = true; // false
obj.data.vip_trial_day = seconds;

$done({
    body: JSON.stringify(obj)
});