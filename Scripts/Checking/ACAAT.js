function replaceValueToAny(obj, key, value) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      replaceValueToAny(obj[prop], key, value);
    } else if (prop === key) {
      obj[prop] = value;
    }
  }
}

function formatDate(date) {
  return date.toISOString().replace(/\.\d{3}Z$/, '+00:00');
}

// firstInstallAt = thời điểm hiện tại
let firstInstallAt = new Date();

// expiresAt = hiện tại + 4 ngày
let expiresAt = new Date(firstInstallAt.getTime() + 4 * 24 * 60 * 60 * 1000);

var secondsRemaining = 4 * 24 * 60 * 60;

let obj = JSON.parse($response.body);

replaceValueToAny(obj, 'secondsRemaining', secondsRemaining);
replaceValueToAny(obj, 'firstInstallAt', formatDate(firstInstallAt));
replaceValueToAny(obj, 'expiresAt', formatDate(expiresAt));
replaceValueToAny(obj, 'isExpired', false);

$done({
  body: JSON.stringify(obj)
});