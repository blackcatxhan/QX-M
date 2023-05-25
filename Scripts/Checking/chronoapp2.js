function generateRandomString() {
  const characters = '0123456789abcdef';
  let randomString = '';

  for (let i = 0; i < 32; i++) {
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      randomString += '-';
    } else {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
  }

  return randomString;
}
function generateRandomEmail() {
  const emailProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomEmail = '';
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomEmail += characters[randomIndex];
  }
  const randomProviderIndex = Math.floor(Math.random() * emailProviders.length);
  const randomProvider = emailProviders[randomProviderIndex];
  randomEmail += '@' + randomProvider;

  return randomEmail;
}
const randomEmail = generateRandomEmail();
const randomString = generateRandomString();

let obj = JSON.parse($response.body);

obj = {
  "refresh_token" : "JaLGlbX0VOtLFJFnfhzZYw",
  "user" : {
    "id" : randomString,
    "phone" : "",
    "last_sign_in_at" : "2023-05-24T23:09:03.522175106Z",
    "created_at" : "2021-12-18T11:29:57.967577Z",
    "email_confirmed_at" : "2021-12-18T11:29:57.971371Z",
    "app_metadata" : {
      "providers" : [
        "email"
      ],
      "provider" : "email"
    },
    "user_metadata" : {

    },
    "confirmed_at" : "2021-12-18T11:29:57.971371Z",
    "identities" : [
      {
        "identity_data" : {
          "email" : randomEmail,
          "sub" : randomString
        },
        "provider" : "email",
        "id" : randomString,
        "last_sign_in_at" : "2021-12-18T11:29:57.969568Z",
        "created_at" : "2021-12-18T11:29:57.969612Z",
        "user_id" : randomString,
        "updated_at" : "2022-11-25T00:00:00Z"
      }
    ],
    "updated_at" : "2023-05-24T23:09:03.530102Z",
    "aud" : "authenticated",
    "role" : "authenticated",
    "email" : randomEmail
  },
  "token_type" : "bearer",
  "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjg1NTc0NTQzLCJzdWIiOiI2MGIyNDA4YS00MjJkLTRjMDItODdlZS1mY2RhNjdkY2M0ODgiLCJlbWFpbCI6Im91cndvcmxkbWFnaWNpYW5AZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2ODQ5Njk3NDN9XSwic2Vzc2lvbl9pZCI6Ijc1NWI2MjU1LTQ0ZTQtNDFmOC04NmExLWNjMDQyNmIwZTY0MCJ9.Narelarknnp2HQLJIRyNLEOuZcpmV5vnZgH3K6WveF0",
  "expires_in" : 604800
};
$done({
    body: JSON.stringify(obj)
});