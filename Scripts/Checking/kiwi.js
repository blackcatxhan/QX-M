const headers = $request.headers;
const selectedHeaders = {
  AppId: headers['AppId'],
  Authorization: headers['Authorization'],
  UserId: headers['UserId'],
  Token: headers['Token']
};
const headerString = JSON.stringify(selectedHeaders);
$notify("Sao chép nó", "", headerString);
$done({});