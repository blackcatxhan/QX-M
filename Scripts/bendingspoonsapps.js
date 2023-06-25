function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}

let obj = JSON.parse($response.body);

switch ($request.url) {
    case findUrl(/remini.oracle/):
        obj.transactions = {
			"300001475927460": {
			  "error_code": null,
			  "product_id": "com.bigwinepot.nwdn.international.1y_p99_99_pro"
			}
		};
		obj.me.active_subscriptions_ids = ["com.bigwinepot.nwdn.international.1y_p99_99_pro"];
		obj.me.available_consumable_credits = {
			"avatar_generations": 100000
		};
        break;
    case findUrl(/filmicpro.oracle/):
        obj.me.non_consumables_ids = ["com.cinegenix.filmic.pro.filmic_standard_t15"];
        break;
    case findUrl(/splice.oracle/):
        obj.me.non_consumables_ids =  ["com.path36.SpliceFree.lt_t73"];
        break;
    case findUrl(/thirtydayfitness.oracle/):
        obj.me.active_subscriptions_ids =  ["com.vigorapps.30DayFitness.1y_t130"];
        break;
    case findUrl(/sleep.oracle/):
        obj.me.active_subscriptions_ids =  ["com.bendingspoonsapps.SleepHelp.1y_t100"];
        break;
    case findUrl(/focos.oracle/):
        obj.me.non_consumables_ids =  ["com.focos.lifetime"];
        break;
    case findUrl(/focoslive.oracle/):
        obj.me.non_consumables_ids =  ["com.focoslive.lifetime"];
        break;
    case findUrl(/yoga.oracle/):
        obj.me.active_subscriptions_ids =  ["com.flyingnayeem.yoga.1w_t10"];
        break;
    case findUrl(/firstlight.oracle/):
        obj.me.active_subscriptions_ids =  ["com.filmicpro.firstlight.1y_t130_bundle_creator"];
        break;
    case findUrl(/doubletake.oracle/):
        obj.me.active_subscriptions_ids =  ["com.filmicpro.doubletake.1y_t130_bundle"];
        break;
    case findUrl(/alightmotion.oracle/):
        obj.me.active_subscriptions_ids =  ["alightcreative.motion.1y_t60"];
        obj.transactions = {
			"450001466527778": {
				"error_code": null,
				"product_id": "alightcreative.motion.1y_t60"
			}
		};
        break;
    case findUrl(/us-central1-alight-creative.cloudfunctions.net\/getAcccountStatusAndLicenses/):
        obj.result.msTime =  1687679011305;
        obj.result.licenses = [
            {
                "autoRenewing": true,
                "benefits": [
                    "RemoveWatermark",
                    "MemberEffects",
                    "ProjectPackageSharing",
                    "FutureMemberFeatures",
                    "AdvancedEasing",
                    "CameraObjects",
                    "LayerParenting"
                ],
                "details": null,
                "expires": 4087091227000,
                "label": null,
                "linkStatus": "linked-current",
                "orderNumber": "450001466527778",
                "period": "1y",
                "productId": "alightcreative.motion.1y_t60",
                "store": "apple_app_store",
                "type": "subscription",
                "valid": true
            }
        ];
        break;
}

$done({
    body: JSON.stringify(obj)
});