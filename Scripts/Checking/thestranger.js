let obj = JSON.parse($response.body);
var currentDate = new Date();
currentDate.setHours(currentDate.getHours() - 1);
var year = currentDate.getUTCFullYear();
var month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
var day = String(currentDate.getUTCDate()).padStart(2, '0');
var hours = String(currentDate.getUTCHours()).padStart(2, '0');
var minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
var seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
var formattedDateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
obj.start_date = formattedDateTime;
$done({
    body: JSON.stringify(obj)
});