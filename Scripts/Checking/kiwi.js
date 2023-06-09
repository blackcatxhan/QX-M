function encodeString(str) {
  let encodedStr = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const encodedChar = String.fromCharCode(charCode + 1);
    encodedStr += encodedChar;
  }
  return encodedStr;
}

const headers = $request.headers;
const selectedHeaders = {
  Authorization: headers['Authorization'],
  UserId: headers['UserId'],
  Token: headers['Token']
};
const headerString = JSON.stringify(selectedHeaders);
const encodedString = encodeString(headerString);

$notify("Sao chép mã", "", encodedString);
$done({});