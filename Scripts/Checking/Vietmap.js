var obj = JSON.parse($response.body);
var url = $request.url;

// 1 year in seconds
var ONE_YEAR = 365 * 24 * 60 * 60;

// Get current time + 1 year
var newExpireDate = Math.floor(Date.now() / 1000) + ONE_YEAR;

// GetProfile endpoint
if (url.indexOf("/GetProfile") !== -1) {
  if (obj.data && obj.data.user) {
    obj.data.user.expireDate = newExpireDate;
  }
}

// GetFeaturePacks endpoint
if (url.indexOf("/GetFeaturePacks") !== -1) {
  if (obj.data && obj.data.results) {
    for (var i = 0; i < obj.data.results.length; i++) {
      obj.data.results[i].isLock = false;
    }
  }
}

// GetUserExpireDate endpoint
if (url.indexOf("/GetUserExpireDate") !== -1) {
  var urlMatch = url.match(/userId=(\d+)/);
  if (urlMatch && obj.data) {
    obj.data.userId = parseInt(urlMatch[1]);
  }
  if (obj.data) {
    obj.data.expireDate = newExpireDate;
  }
}

$done({
  body: JSON.stringify(obj)
});
