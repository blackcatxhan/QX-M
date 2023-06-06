function replaceValueToAny(obj, key, value) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceValueToAny(obj[prop], key, value);
    } else if (prop === key) {
      obj[prop] = value;
    }
  }
}

function generateUUID() {
  function generateSegment() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return (
    generateSegment() + generateSegment() + "-" + generateSegment() + "-" + generateSegment() + "-" + generateSegment() + "-" + generateSegment() + generateSegment() + generateSegment()
  );
}

function generateRandomString(length) {
  var result = '';
  var characters = '0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}


let obj = JSON.parse($response.body);
var timestamp = Date.now() - 5 * 60 * 1000;
const iid = generateUUID(); // Original: ea2e05e6-8d98-4127-ab63-742d70262687
const sub = "user:" + generateUUID(); // Original: dd6bbaf8-a792-5411-ae10-bdabbaf89559
var unm = "apple-user-" + generateRandomString(15); // Original: apple-user-450001449245354

obj = {
  "token" : "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdmlkLnNpYmVsaXVzLnphcHBhIiwiZXhwIjoxNjg2MDQ0ODI2LCJpYXQiOjE2ODYwNDQzNDYsImlkcCI6InJlY2VpcHQuYXBwbGUuY29tIiwiaWlkIjoiZWEyZTA1ZTYtOGQ5OC00MTI3LWFiNjMtNzQyZDcwMjYyNjg3IiwiaXNzIjoiYXZpZC5zaWJlbGl1cy56YXBwYS92MC4xLjAiLCJuYmYiOjE2ODYwNDQzNDUsInNjZSI6MTY4ODYzNjM0Mywic2NwIjoiaHR0cHM6Ly9hdmlkLmNvbS9hdmlkLnNpYmVsaXVzLmJlc3QiLCJzdWIiOiJ1c2VyOmRkNmJiYWY4LWE3OTItNTQxMS1hZTEwLWJkYWJiYWY4OTU1OSIsInR5cCI6ImFjY2VzcyIsInVubSI6ImFwcGxlLXVzZXItNDUwMDAxNDQ5MjQ1MzU0IiwidmVyIjoiMS4wLjAifQ.GKtqZYvZrj1jBkm2MWMg9Y9fjI8XA6rtTd1jhivSgCOk9LMxrCp7OXcspXDk6DjpoHXYkRf5SZgjUEH6YXunfA",
  "scope" : "https://avid.com/avid.sibelius.best",
  "identity_provider" : "receipt.apple.com",
  "token_type" : "bearer",
  "access_token" : "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdmlkLnNpYmVsaXVzLnphcHBhIiwiZXhwIjoxNjg2MDQ0ODI2LCJpYXQiOjE2ODYwNDQzNDYsImlkcCI6InJlY2VpcHQuYXBwbGUuY29tIiwiaWlkIjoiZWEyZTA1ZTYtOGQ5OC00MTI3LWFiNjMtNzQyZDcwMjYyNjg3IiwiaXNzIjoiYXZpZC5zaWJlbGl1cy56YXBwYS92MC4xLjAiLCJuYmYiOjE2ODYwNDQzNDUsInNjZSI6MTY4ODYzNjM0Mywic2NwIjoiaHR0cHM6Ly9hdmlkLmNvbS9hdmlkLnNpYmVsaXVzLmJlc3QiLCJzdWIiOiJ1c2VyOmRkNmJiYWY4LWE3OTItNTQxMS1hZTEwLWJkYWJiYWY4OTU1OSIsInR5cCI6ImFjY2VzcyIsInVubSI6ImFwcGxlLXVzZXItNDUwMDAxNDQ5MjQ1MzU0IiwidmVyIjoiMS4wLjAifQ.GKtqZYvZrj1jBkm2MWMg9Y9fjI8XA6rtTd1jhivSgCOk9LMxrCp7OXcspXDk6DjpoHXYkRf5SZgjUEH6YXunfA",
  "claims" : {
    "iid" : iid,
    "exp" : timestamp,
    "nbf" : timestamp,
    "unm" : unm,
    "iss" : "avid.sibelius.zappa/v0.1.0",
    "sce" : 4087091227,
    "sub" : sub,
    "aud" : "avid.sibelius.zappa",
    "iat" : timestamp,
    "typ" : "access",
    "ver" : "1.0.0",
    "idp" : "receipt.apple.com",
    "scp" : "https://avid.com/avid.sibelius.best"
  }
};

$done({
    body: JSON.stringify(obj)
});