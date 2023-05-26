function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}
let obj = JSON.parse($response.body);

var currentTime = Math.floor(Date.now() / 1000);
var oneHourAgo = currentTime - 3600;
var oneMonthLater = currentTime + (30 * 24 * 60 * 60);
var secondsInOneMonth = oneMonthLater - currentTime;

obj.data.vip_trial_start_time = oneHourAgo;
obj.data.vip_show_expire_time = oneMonthLater;
obj.data.vip_current_type = 2;
obj.data.vip_expire_time = oneMonthLater;
obj.data.vip_current_is_trial = false;
obj.data.vip_trial_day = secondsInOneMonth;

$done({
    body: JSON.stringify(obj)
});