function replaceRWithP(obj) {
  for (var prop in obj) {
    if (obj[prop] === 'Relation') {
      obj[prop] = 'Pointer';
    } else if (typeof obj[prop] === 'object') {
      replaceRWithP(obj[prop]);
    }
  }
}
let obj = JSON.parse($response.body);

if (!'updatedAt' in obj) {
	replaceRWithP(obj);
}

$done({body: JSON.stringify(obj)});
