var obj = JSON.parse($response.body);

var url = $request.url;

// One month in seconds (30 days)
var ONE_MONTH = 30 * 24 * 60 * 60;

// Function to add 1 month to expireDate
function addOneMonth(expireDate) {
  if (expireDate && expireDate > 0) {
    return expireDate + ONE_MONTH;
  }
  // If expireDate is 0 or null, set to 1 month from now
  return Math.floor(Date.now() / 1000) + ONE_MONTH;
}

// GetProfile endpoint
if (url.indexOf("/GetProfile") !== -1) {
  if (obj.data && obj.data.user) {
    obj.data.user.expireDate = addOneMonth(obj.data.user.expireDate);
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
  // Extract userId from URL parameter
  var urlMatch = url.match(/userId=(\d+)/);
  if (urlMatch && obj.data) {
    obj.data.userId = parseInt(urlMatch[1]);
  }
  // Set new expireDate (current + 1 month)
  if (obj.data) {
    obj.data.expireDate = addOneMonth(obj.data.expireDate);
  }
}

$done({
  body: JSON.stringify(obj)
});
