function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}
/*

function replaceValueToAny(obj, key, value) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceValueToAny(obj[prop], key, value);
    } else if (prop === key) {
      obj[prop] = value;
    }
  }
}
*/
let obj = JSON.parse($response.body);
var EndTimestamp = new Date().getTime() + (3 * 60 * 60 * 1000);
switch ($request.url){
	/*
	case findUrl(/mobile_profile\/nul\/v2/):
		obj.mobileProfile.profileStatus =  "PROFILE_AVAILABLE";
		obj.mobileProfile.legacyProfile =  "{\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseType\":3,\"licenseVersion\":\"91.0\",\"effectiveEndTimestamp\":"+EndTimestamp+",\"graceTime\":0,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":118,\"serialKey\":\"719594172484074650698776\",\"clearSerialKey\":\"90970938077827684226\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":1184999,\"customerId\":0,\"deliveryMethod\":3,\"pc\":false,\"rb\":false}}"; // Acrotbat
		obj.mobileProfile.relationshipProfile =  "[{\"profileGenerationTimestamp\":1686045287707,\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseExpiryTimestamp\":"+EndTimestamp+",\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1685526873385,\"warningInterval\":0}}]"; // Acrotbat
		obj.mobileProfile.legacyProfile =  "{\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseType\":3,\"licenseVersion\":\"1.0\",\"effectiveEndTimestamp\":1686302263189,\"graceTime\":0,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":598,\"serialKey\":\"719594172484074650698776\",\"clearSerialKey\":\"90970938077827684226\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":5984027,\"customerId\":0,\"deliveryMethod\":3,\"pc\":true,\"rb\":true}}"; // Adobe Express
		obj.mobileProfile.relationshipProfile =  "[{\"profileGenerationTimestamp\":1686279330990,\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseExpiryTimestamp\":1686302263189,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1685697463189,\"warningInterval\":0}}]"; // Adobe Express
		break;
	*/
	case findUrl(/users\/self\/limits\/conversions/):
		obj = {
		  "edit_pdf_ops" : {
			"remaining" : -1
		  },
		  "ocr_pdf_max_file_size" : {
			"limit" : 102400
		  },
		  "ocr_pdf_conversions" : {
			"remaining" : -1
		  },
		  "organize_pdf_max_file_size" : {
			"limit" : 102400
		  },
		  "optimize_pdf_max_file_size" : {
			"limit" : 2097152
		  },
		  "ipp_create_pdf_conversions" : {
			"remaining" : 0
		  },
		  "password_encrypt_ops" : {
			"remaining" : -1
		  },
		  "edit_pdf_max_file_size" : {
			"limit" : 102400
		  },
		  "optimize_pdf_ops" : {
			"remaining" : -1
		  },
		  "export_pdf_conversions" : {
			"remaining" : -1
		  },
		  "organize_pdf_conversions" : {
			"remaining" : -1
		  },
		  "organize_pdf_documents" : {
			"limit" : 100
		  },
		  "combine_pdf_max_file_size" : {
			"limit" : 102400
		  },
		  "create_pdf_conversions" : {
			"remaining" : -1
		  },
		  "combine_pdf_conversions" : {
			"remaining" : -1
		  },
		  "split_pdf_max_split_points" : {
			"limit" : 20
		  },
		  "password_encrypt_max_file_size" : {
			"limit" : 102400
		  },
		  "export_pdf_max_file_size" : {
			"limit" : 102400
		  },
		  "split_pdf_conversions" : {
			"remaining" : -1
		  },
		  "create_pdf_max_file_size" : {
			"limit" : 102400
		  },
		  "split_pdf_max_file_size" : {
			"limit" : 1048576
		  },
		  "combine_pdf_documents" : {
			"limit" : 100
		  }
		};
		break;
	case findUrl(/ais\/v3\/products\?app_id=com.adobe.Adobe-Reader/):
		for (var i = 0; i < obj.offer_groups.length; i++) {
			var offerGroup = obj.offer_groups[i];
			if (
				offerGroup.offer_group_id === "21188762" &&
				offerGroup.products.some(
					function(product) {
						return product.product_id === "com.adobe.reader.ios.acropremium.v7.6999.1yr";
					}
				)
			) {
				for (var j = 0; j < offerGroup.products.length; j++) {
					var product = offerGroup.products[j];
					if (
						product.product_id === "com.adobe.reader.ios.acropremium.v7.6999.1yr"
					) {
						product.free_trial_consumed = true;
						product.purchase_info = {
							expiry_date: "2099-07-07T07:07:07.000+00:00",
							purchase_date: "2023-06-06T07:07:07.000+00:00",
							subscription_status: "Active"
						};
						break;
					}
				}
				break;
			}
		}
		break;
	case findUrl(/ais\/v3\/products\?app_id=com.adobe.scan.ios/):
		for (var i = 0; i < obj.offer_groups.length; i++) {
			var offerGroup = obj.offer_groups[i];
			if (
				offerGroup.offer_group_id === "20892743" &&
				offerGroup.products.some(
					function(product) {
						return product.product_id === "com.adobe.scan.premium6999.trial.1yr";
					}
				)
			) {
				for (var j = 0; j < offerGroup.products.length; j++) {
					var product = offerGroup.products[j];
					if (
						product.product_id === "com.adobe.scan.premium6999.trial.1yr"
					) {
						product.free_trial_consumed = true;
						product.purchase_info = {
							expiry_date: "2099-07-07T07:07:07.000+00:00",
							purchase_date: "2023-06-06T07:07:07.000+00:00",
							subscription_status: "Active"
						};
						break;
					}
				}
				break;
			}
		}
		break;
	case findUrl(/ais\/v3\/products\?app_id=com.adobe.fresco.ios/):
		for (var i = 0; i < obj.offer_groups.length; i++) {
			var offerGroup = obj.offer_groups[i];
			if (
				offerGroup.offer_group_id === "20531930" &&
				offerGroup.products.some(
					function(product) {
						return product.product_id === "com.adobe.fresco.cc.allapps.1yr.subscription"; // com.adobe.fresco.cc.1yr.sub
					}
				)
			) {
				for (var j = 0; j < offerGroup.products.length; j++) {
					var product = offerGroup.products[j];
					if (
						product.product_id === "com.adobe.fresco.cc.allapps.1yr.subscription"
					) {
						product.free_trial_consumed = true;
						product.purchase_info = {
							expiry_date: "2099-07-07T07:07:07.000+00:00",
							purchase_date: "2023-06-06T07:07:07.000+00:00",
							subscription_status: "Active"
						};
						break;
					}
				}
				break;
			}
		}
		break;
	case findUrl(/ais\/v3\/products\?app_id=com.adobe.post/):
		for (var i = 0; i < obj.offer_groups.length; i++) {
			var offerGroup = obj.offer_groups[i];
			if (
				offerGroup.offer_group_id === "20261227" &&
				offerGroup.products.some(
					function(product) {
						return product.product_id === "com.adobe.post.allapps.1yr";
					}
				)
			) {
				for (var j = 0; j < offerGroup.products.length; j++) {
					var product = offerGroup.products[j];
					if (
						product.product_id === "com.adobe.post.allapps.1yr"
					) {
						product.free_trial_consumed = true;
						product.purchase_info = {
							expiry_date: "2099-07-07T07:07:07.000+00:00",
							purchase_date: "2023-06-06T07:07:07.000+00:00",
							subscription_status: "Active"
						};
						break;
					}
				}
				break;
			}
			if (
				offerGroup.offer_group_id === "20972312" &&
				offerGroup.products.some(
					function(product) {
						return product.product_id === "com.adobe.ex.brmxinidthph.1yr";
					}
				)
			) {
				for (var j = 0; j < offerGroup.products.length; j++) {
					var product = offerGroup.products[j];
					if (
						product.product_id === "com.adobe.ex.brmxinidthph.1yr"
					) {
						product.free_trial_consumed = true;
						product.purchase_info = {
							expiry_date: "2099-07-07T07:07:07.000+00:00",
							purchase_date: "2023-06-06T07:07:07.000+00:00",
							subscription_status: "Active"
						};
						break;
					}
				}
				break;
			}
		}
		break;
	case findUrl(/createpdf\/api\/users\/me\/subscriptions/):
		const newSubscription = {
		  "subscription_name": "PDFPack",
		  "subscription_state": "ACTIVE",
		  "biz_source": "",
		  "billing_term": null,
		  "sub_ref": "51A153B9A6026822F7FA",
		  "subscription_level": "Plus"
		};

		const existingSubscription = obj.subscriptions.find(subscription => subscription.subscription_name === newSubscription.subscription_name);

		if (!existingSubscription) {
		  obj.subscriptions.push(newSubscription);
		}
		break;
	case findUrl(/createpdf\/api\/users\/me\/limits\/acrobat/):
		obj.acrobat_pro = true;
		obj.acrobat_std = true;
		break;
	case findUrl(/a\/api\/users\/me\/limits/):
		obj.expiry_time = 4087091227000;
		break;
/*
	case findUrl(/users\/self\?fields=limit%2Fpdf_services/):
		replaceValueToAny(obj, "access", true);
		break;
	case findUrl(/users\/self\/limits\/pdf_services/):
		obj.access = true;
		break;
	case findUrl(/users\/self\/limits\/storage\/document_cloud/):
		replaceValueToAny(obj, "storage_quota", 2000);
		replaceValueToAny(obj, "storage_remaining", 2000);
		break;
	case findUrl(/users\/self\?fields=limit%2Fstorage%2Fdocument_cloud/):
		replaceValueToAny(obj, "storage_quota", 2000);
		replaceValueToAny(obj, "storage_remaining", 2000);
		break;
*/
}

$done({
	body: JSON.stringify(obj)
});