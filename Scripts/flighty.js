let obj = JSON.parse($response.body);

obj.data[0].is_eligible_intro_offer_holidays2020 = false;
obj.data[0].product_id = "com.flightyapp.flighty.lifetime";
obj.data[0].expiration_date = null;
delete obj.data[0].remaining_flights;

$done({
    body: JSON.stringify(obj)
});