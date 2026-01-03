let obj = JSON.parse($response.body);

let newItem = {
  id: obj[0].id + 77,
  payment_method: "stripe",
  amount: 1499,
  created_at: obj[0].created_at,
  metadata: null,
  expires_at: null,
  user_id: obj[0].user_id,
  stripe_price_id: "li_1TQ8XpBTmZk9X2FJQW7A3CDe",
  revenuecat_transaction_id: null,
  product_id: "ios_pro",
  updated_at: obj[0].updated_at,
  stripe_payment_id: "pi_3TQ8YqBTmZk9X2FJH9KLMN4",
  status: "paid",
  refund_reason: null
};

obj.push(newItem);

$done({
	body: JSON.stringify(obj)
});
