let obj = JSON.parse($response.body);

if ($request.url.includes('https://beebook.cloud/api/api_user_item')) {
  obj.data.beecoin = 99999;
  obj.data.gem = 99999;
} else if ($request.url.includes('https://beebook.cloud/api/api_user_data')) {
  let obj = JSON.parse($response.body);
  if (obj.data.level) {
    obj.data.level.num = 999;
    obj.data.level.exp = 9999;
  }
}

$done({body: JSON.stringify(obj)});
