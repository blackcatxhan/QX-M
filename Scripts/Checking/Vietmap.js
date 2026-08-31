let obj = JSON.parse($response.body);

// One month in seconds (30 days)
const ONE_MONTH = 30 * 24 * 60 * 60;

// Function to add 1 month to expireDate
function addOneMonth(expireDate) {
  if (expireDate && expireDate > 0) {
    return expireDate + ONE_MONTH;
  }
  // If expireDate is 0 or null, set to 1 month from now
  return Math.floor(Date.now() / 1000) + ONE_MONTH;
}

// GetProfile endpoint
if ($request.url.includes("/GetProfile")) {
  if (obj.data && obj.data.user) {
    obj.data.user.expireDate = addOneMonth(obj.data.user.expireDate);
  }
}

// GetFeaturePacks endpoint
if ($request.url.includes("/GetFeaturePacks")) {
  if (obj.data && obj.data.results) {
    for (let i = 0; i < obj.data.results.length; i++) {
      obj.data.results[i].isLock = false;
    }
  }
}

// GetUserExpireDate endpoint
if ($request.url.includes("/GetUserExpireDate")) {
  // Extract userId from URL parameter
  const urlMatch = $request.url.match(/userId=(\d+)/);
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
