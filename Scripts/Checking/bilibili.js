function replaceStatus(obj, key, value) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceStatus(obj[prop]);
    } else if (prop === key) {
      obj[prop] = value;
    }
  }
}

let url = $request.url;
let obj = JSON.parse($response.body);

if (url.indexOf('app/account/myinfo') !== -1) {
	obj.data.vip = {
      "status" : 1,
      "avatar_subscript" : 0,
      "nickname_color" : "",
      "due_date" : 4087091227000,
      "vip_pay_type" : 1,
      "label" : {
        "path" : "",
        "text" : "",
        "label_theme" : ""
      },
      "type" : 0,
      "theme_type" : 0
    };
	obj.data.vip_type = 1;
	obj.data.sign = "BlackCatX - LK Team";
	obj.data.badge = {
		"name": "Premium",
		"color": "#F26183",
		"uri": "bstar://pgc/vip_zone?page_id=360009"
	  };
	obj.data.bg_accessory = {
	  "show_guide": true,
	  "landscape_img": "https://pic.bstarstatic.com/management/6b683b14c768b3ccccda6c93daf6ea90.png",
	  "portrait_img": "https://pic.bstarstatic.com/management/b46a1310684e48948e52bc3b9cbb7349.png",
	  "item_id": 659,
	  "parent_item_id": 660,
	  "suit_name": "Ảnh Bìa Premium Độc Quyền",
	  "url": "https://www.bilibili.tv/mall-accessory/home?msource=21",
	  "show_conf": {
		"status_bar_mode": 1
	  }
	};
}

if (url.indexOf('app/account/mine') !== -1) {
	obj.data.user_info.is_vip = true;
	delete  obj.data.premium;
	obj.data.user_info.badge = {
		"name": "Premium",
		"color": "#F26183",
		"uri": "bstar://pgc/vip_zone?page_id=360009"
	  };
	obj.data.user_info.bg_accessory = {
	  "show_guide": true,
	  "landscape_img": "https://pic.bstarstatic.com/management/6b683b14c768b3ccccda6c93daf6ea90.png",
	  "portrait_img": "https://pic.bstarstatic.com/management/b46a1310684e48948e52bc3b9cbb7349.png",
	  "item_id": 659,
	  "parent_item_id": 660,
	  "suit_name": "Ảnh Bìa Premium Độc Quyền",
	  "url": "https://www.bilibili.tv/mall-accessory/home?msource=21",
	  "show_conf": {
		"status_bar_mode": 1
	  }
	};
}

if (url.indexOf('ogv/app/season/download') !== -1) {
	replaceStatus(obj, 'pay_status', 0);
}

if (url.indexOf('ogv/view/app/season2') !== -1) {
	obj.data.status = 2;
	obj.data.sections.section.forEach(ep => {
	  ep.ep_details.forEach(details => {
		details.status = 2;
		details.badge = null;
		delete details.dialog;
	  });
	});
	delete obj.data.vip_benefits;
	obj.data.user_status.vip = 1;
}

if (url.indexOf('ogv/view/app/episode') !== -1) {
	obj.data.watermark.text = "LK Team";
}

if (url.indexOf('ogv/playurl') !== -1) {
	replaceStatus(obj, 'need_vip', false);
	replaceStatus(obj, 'need_login', false);
}
	
$done({body: JSON.stringify(obj)});