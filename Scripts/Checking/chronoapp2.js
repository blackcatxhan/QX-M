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
function generateRandomToken(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  return randomString;
}
function generateRandomAccessToken() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.';
  const tokenLength = 169; // Increased by 1 to accommodate the dot
  let randomToken = '';

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomToken += characters[randomIndex];
  }

  return randomToken;
}

const randomAccessToken = generateRandomAccessToken();
const randomToken = generateRandomToken(22);
const randomEmail = generateRandomEmail();
const randomString = generateRandomString();

let obj = JSON.parse($response.body);

obj = {
  "refresh_token" : randomToken,
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
  "access_token" : randomAccessToken,
  "expires_in" : 604800
};
$done({
    body: JSON.stringify(obj)
});