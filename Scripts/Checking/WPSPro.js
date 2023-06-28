function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}

let obj = JSON.parse($response.body);

switch ($request.url) {
    case findUrl(/mine\/vips/):
        obj.vips = [
			{
				"name": "注册用户",
				"has_ad": 0,
				"memberid": 10,
				"expire_time": 1998890772,
				"enabled": null
			}, {
				"name": "WPS Premium",
				"has_ad": 0,
				"memberid": 210,
				"expire_time": 4087091227,
				"enabled": null
			}
		];
    /*
	case findUrl(/order\/create/): // Restore purchase
		After purchased: {"code":401,"message":"You have become a member, please be patient","data":null}
		Before purchased: {"code":0,"message":"success","data":{"order_id":"ORDER_SG_CID8U1KF0TQFA1RLJB6G","order_db_id":0,"links":[{"href":"https://kpay-sg.wps.com/apple/api/%s/confirm","method":"POST"}],"third_product_id":"","apple_order_uuid":"bca79266-14bb-11ee-9db8-0a580af41848","client_secret":""}}
        break;
	*/
    case findUrl(/permits\/check_snew/):
		obj.data = [
			{
				"service_id": 5,
				"expire_time": 4087091227,
				"is_available": 1,
				"fake_service_id": 0,
				"permit_pack_id": 0
			}, {
				"service_id": 211,
				"expire_time": 4087091227,
				"is_available": 1,
				"fake_service_id": 0,
				"permit_pack_id": 0
			}, {
				"service_id": 210,
				"expire_time": 4087091227,
				"is_available": 1,
				"fake_service_id": 0,
				"permit_pack_id": 0
			}
		];
        break;
    case findUrl(/api\/users/):
		obj.privilege = [
			{
				"spid": "data_recover",
				"times": 0,
				"expire_time": 4087091227
			}, {
				"spid": "ocr",
				"times": 0,
				"expire_time": 4087091227
			}, {
				"spid": "pdf2doc",
				"times": 0,
				"expire_time": 4087091227
			}, {
				"spid": "pdf_merge",
				"times": 0,
				"expire_time": 4087091227
			}, {
				"spid": "pdf_sign",
				"times": 0,
				"expire_time": 4087091227
			}, {
				"spid": "pdf_split",
				"times": 0,
				"expire_time": 4087091227
			}
		];
		obj.vip = {
			"name": "WPS Premium",
			"has_ad": 0,
			"memberid": 210,
			"expire_time": 4087091227,
			"enabled": []
		};
		obj.vip.enabled = [
			{
				"memberid": 'vip_pro_plus',
				"name": "超级会员Pro",
				"expire_time": 4087091227
			}, {
				"memberid": 40,
				"name": "超级会员",
				"expire_time": 4087091227
			}, {
				"memberid": 20,
				"name": "WPS会员",
				"expire_time": 4087091227
			}, {
				"memberid": 12,
				"name": "稻壳会员",
				"expire_time": 4087091227
			}, {
				"memberid": 100,
				"name": "企业用户",
				"expire_time": 4087091227
			}, {
				"memberid": 83,
				"name": "小金库",
				"expire_time": 4087091227
			}
		];
        break;
}

$done({
	body: JSON.stringify(obj)
});