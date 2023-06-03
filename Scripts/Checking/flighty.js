let obj = JSON.parse($response.body);

obj.data[0].is_eligible_intro_offer_holidays2020 = false;
obj.data[0].product_id = "com.flightyapp.flighty.monthlyPlan";
obj.data[0].expiration_date = 4087091227;
delete obj.data[0].remaining_flights;

$done({
    body: JSON.stringify(obj)
});