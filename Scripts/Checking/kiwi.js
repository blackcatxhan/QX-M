const headers = $request.headers;
const selectedHeaders = {
  Authorization: headers['Authorization'],
  UserId: headers['UserId'],
  Token: headers['Token']
};
const headerString = JSON.stringify(selectedHeaders);
$notify("Sao chép nó", "", headerString);
$done({});