let url = $request.url;
let obj;

function randomString(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}

const now = new Date();
const timestamp = now.toISOString();

const offlineUntil = new Date(now);
offlineUntil.setUTCFullYear(
	offlineUntil.getUTCFullYear() + 10
);

const id = Math.floor(1000 + Math.random() * 900000);
const name = "John " + randomString(6);
const email = "john_" + randomString(8) + "@gmail.com";
const password = randomString(12);
const code = "LOPRO_" + randomString(12);

function randomHex(length) {
  const chars = "0123456789abcdef";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}

if (/\/iunlock2\/login\.php(?:\?|$)/.test(url)) {
  obj = {
    status: "success",
    id: id,
    name: name,
    email: email,
    password: password,
    code: code,
    deviceId: "IPhoneApp ver-3 (3)",
    error: null
  };

} else if (/\/iunlock2\/register\.php(?:\?|$)/.test(url)) {
  obj = {
    status: "success",
    statusMessage: "Account was successfully registered",
    id: id,
    name: name,
    email: email,
    password: password,
    code: code,
    deviceId: "IPhoneApp ver-3 (3)",
    error: null
  };

} else if (/\/ghost-unlock\/access\.php(?:\?|$)/.test(url)) {
  obj = {
    ok: true,
    error: null,
    data: {
      email: email,
      account_id: "acc_" + randomString(12),
      verified_at: timestamp,
      recheck_at: timestamp,
      offline_until: offlineUntil.toISOString(),
      token: "gh_v1_" + randomHex(32),
      lastSeen: timestamp
    }
  };

} else {
  $done({});
}

$done({
  body: JSON.stringify(obj)
});