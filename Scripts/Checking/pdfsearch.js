let obj = JSON.parse($response.body);

obj.isValid = "YES";
obj.latest_expire_date_ms = 4087091227000;
obj.original_transaction_id = Math.floor(100000000000000 + Math.random() * 900000000000000);
obj.latest_expire_date = {
	"date": "2099-07-07 07:07:07.000000",
	"timezone": "Etc/GMT",
	"timezone_type": 3
};

$done({
    body: JSON.stringify(obj)
});