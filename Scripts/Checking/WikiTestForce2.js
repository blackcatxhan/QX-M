let obj = JSON.parse($response.body);
obj = {
	"requestedString": "newreplacetext",
	"currentString": "gptpara",
	"updatedString": "newreplacetext"
};
$done({
	body: JSON.stringify(obj)
});
