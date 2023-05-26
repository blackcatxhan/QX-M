let obj = JSON.parse($response.body);

var currentTime = Math.floor(Date.now() / 1000);
var oneHourAgo = currentTime - 3600;
// var oneMonthLater = currentTime + (30 * 24 * 60 * 60);
var oneYearLater = oneHourAgo + 31536000;
var secondsInOneYear = oneYearLater - oneHourAgo;

// var secondsInOneMonth = oneMonthLater - currentTime;

obj.data.vip_trial_start_time = oneHourAgo;
obj.data.vip_show_expire_time = oneYearLater;
obj.data.vip_current_type = 2;
obj.data.vip_expire_time = oneYearLater;
obj.data.vip_current_is_trial = true;
obj.data.vip_trial_day = secondsInOneYear;

$done({
    body: JSON.stringify(obj)
});