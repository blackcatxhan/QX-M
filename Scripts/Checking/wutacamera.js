let obj = JSON.parse($response.body);
var currentTime = Math.floor(Date.now() / 1000);
var oneHourAgo = currentTime - 3600;
var oneYearLater = currentTime + 31536000;
var secondsInOneYear = oneYearLater - currentTime;

obj.data.vip_trial_start_time = oneHourAgo;
obj.data.vip_show_expire_time = oneYearLater;
obj.data.vip_expire_time = oneYearLater;
obj.data.vip_current_type = 2; // 0: Free
obj.data.vip_current_is_trial = false; // false
obj.data.vip_trial_day = secondsInOneYear;

$done({
    body: JSON.stringify(obj)
});