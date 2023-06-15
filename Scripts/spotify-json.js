console.log(`spotify-json-2023.06.13`);
let url = $request.url;
// console.log(`Original url:${url}`);
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
    // console.log(`Replaceplatform:${url}`);
} else {
    console.log('No need to deal with');
}
$done({
    url
});