function replaceDiamondWithNull(obj) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceDiamondWithNull(obj[prop]);
    } else if (prop === 'DiamondUnlock') {
      obj[prop] = null;
    }
  }
}

let obj = JSON.parse($response.body);

if(obj.action == "get_data_state")
{
	obj.data.isShowSubscribeChannel = true;
	obj.data.numJewels = 999999999;
	obj.data.inAppPurchase = {
      "isUnlockSong" : true,
      "isSubscription" : true,
      "subscribeText" : {
        "buttonSubscribeOffer" : {
          "isShow" : false
        },
        "buttonPro" : {
          "isShow" : false
        }
      },
      "isPriority" : true,
      "isPro" : true,
      "isVip" : true,
      "isActive" : true
    };
	
	obj.data.instruments = obj.data.instruments.map(instrument => {
	  delete instrument.isVip;
	  return instrument;
	});
}

if(obj.action == "get_songs_tab_album")
{
	replaceDiamondWithNull(obj);
}
	
$done({body: JSON.stringify(obj)});