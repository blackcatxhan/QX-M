function replaceYWithF(obj) {
  for (var prop in obj) {
    if (obj[prop] === 'Y') {
      obj[prop] = 'F';
    } else if (typeof obj[prop] === 'object') {
      replaceYWithF(obj[prop]);
    }
  }
}
let url=$request.url;
var obj = JSON.parse($response.body);
if(url.indexOf('story')!=-1 || url.indexOf('song')!=-1){
	replaceYWithF(obj);
}
if(url.indexOf('player?')!=-1){
	delete obj.data.preview_time;
	replaceYWithF(obj);
}
$done({body: JSON.stringify(obj)});