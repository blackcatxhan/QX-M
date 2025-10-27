let obj = {
  message: "Your key has been activated!",
  type: "success",
  activatedFeature: "IMF"
};

$done({
	body: JSON.stringify(obj)
});