const headers = $request.headers;
const selectedHeaders = {
  AppId: headers['AppId'],
  'Content-Type': headers['Content-Type'],
  Authorization: headers['Authorization'],
  UserId: headers['UserId'],
  Token: headers['Token']
};
const headerString = JSON.stringify(selectedHeaders, null, 2);
$notification.post("Selected Headers", "Test1", headerString);
$notify("Selected Headers", "Test2", headerString);
$clipboard.set(headerString);
$done({});