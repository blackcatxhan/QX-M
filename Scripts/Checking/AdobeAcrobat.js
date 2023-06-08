function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}

function replaceValueToAny(obj, key, value) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      replaceValueToAny(obj[prop], key, value);
    } else if (prop === key) {
      obj[prop] = value;
    }
  }
}

let obj = JSON.parse($response.body);
var EndTimestamp = new Date().getTime() + (3 * 60 * 60 * 1000);
switch ($request.url){
	case findUrl(/mobile_profile\/nul\/v2/):
		obj.mobileProfile.profileStatus =  "PROFILE_AVAILABLE";
		obj.mobileProfile.legacyProfile =  "{\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseType\":3,\"licenseVersion\":\"91.0\",\"effectiveEndTimestamp\":"+EndTimestamp+",\"graceTime\":0,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":118,\"serialKey\":\"719594172484074650698776\",\"clearSerialKey\":\"90970938077827684226\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":1184999,\"customerId\":0,\"deliveryMethod\":3,\"pc\":false,\"rb\":false}}";
		obj.mobileProfile.relationshipProfile =  "[{\"profileGenerationTimestamp\":1686045287707,\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseExpiryTimestamp\":"+EndTimestamp+",\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1685526873385,\"warningInterval\":0}}]";
		break;
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
	case findUrl(/users\/self\?fields=limit%2Fpdf_services/):
		replaceValueToAny(obj, "access", true);
		break;
	case findUrl(/users\/self\/limits\/storage\/document_cloud/):
		replaceValueToAny(obj, "storage_quota", 2000);
		replaceValueToAny(obj, "storage_remaining", 2000);
		break;
	case findUrl(/users\/self\?fields=limit%2Fstorage%2Fdocument_cloud/):
		replaceValueToAny(obj, "storage_quota", 2000);
		replaceValueToAny(obj, "storage_remaining", 2000);
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
							expiry_date: "2023-06-13T09:54:19.000+00:00",
							purchase_date: "2023-06-06T09:54:20.000+00:00",
							subscription_status: "Active"
						};
						break;
					}
				}
				break;
			}
		}
		break;
	case findUrl(/ais\/v3\/products\?/):
		replaceValueToAny(obj, 'is_free', true);
		break;
}

$done({
	body: JSON.stringify(obj)
});