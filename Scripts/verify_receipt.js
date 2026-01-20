// Quantumult X compatible script
// rewrite-response-body

let obj = {
  "status": 0,
  "receipt": {
    "receipt_type": "Production",
    "app_item_id": 1247478067,
    "receipt_creation_date": "2024-02-11 16:06:26 Etc/GMT",
    "bundle_id": "com.floatcamellia.hfrslowmotion",
    "original_purchase_date": "2024-02-11 16:00:00 Etc/GMT",
    "in_app": [{
      "quantity": "1",
      "purchase_date_ms": "1694250549000",
      "expires_date": "2099-09-09 13:37:37 Etc/GMT",
      "expires_date_pst": "2099-09-09 06:06:06 America/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "490001314520000",
      "is_trial_period": "false",
      "original_transaction_id": "490001314520000",
      "purchase_date": "2024-02-11 09:09:09 Etc/GMT",
      "product_id": "com.floatcamellia.hfrslowmotion.yearly",
      "original_purchase_date_pst": "2024-02-11 02:09:10 America/Los_Angeles",
      "in_app_ownership_type": "PURCHASED",
      "original_purchase_date_ms": "1694250550000",
      "web_order_line_item_id": "490000123456789",
      "expires_date_ms": "4092599349000",
      "purchase_date_pst": "2024-02-11 02:09:09 America/Los_Angeles",
      "original_purchase_date": "2024-02-11 09:09:10 Etc/GMT"
    }],
    "adam_id": 1247478067,
    "receipt_creation_date_pst": "2024-02-11 06:06:26 America/Los_Angeles",
    "request_date": "2024-02-11 16:06:27 Etc/GMT",
    "request_date_pst": "2024-02-11 06:06:27 America/Los_Angeles",
    "version_external_identifier": 863314980,
    "request_date_ms": "1694273635000",
    "original_purchase_date_pst": "2024-02-11 06:00:00 America/Los_Angeles",
    "application_version": "275",
    "original_purchase_date_ms": "1694273430000",
    "receipt_creation_date_ms": "1694273634000",
    "original_application_version": "275",
    "download_id": 503226333846907953
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "purchase_date_ms": "1694250549000",
    "expires_date": "2099-09-09 13:37:37 Etc/GMT",
    "expires_date_pst": "2099-09-09 06:06:06 America/Los_Angeles",
    "is_in_intro_offer_period": "false",
    "transaction_id": "440001731320417",
    "is_trial_period": "false",
    "original_transaction_id": "440001731320417",
    "purchase_date": "2024-02-11 09:09:09 Etc/GMT",
    "product_id": "com.floatcamellia.hfrslowmotion.yearly",
    "original_purchase_date_pst": "2024-02-11 02:09:10 America/Los_Angeles",
    "in_app_ownership_type": "PURCHASED",
    "original_purchase_date_ms": "1694250550000",
    "web_order_line_item_id": "490000123456789",
    "expires_date_ms": "4092599349000",
    "purchase_date_pst": "2024-02-11 02:09:09 America/Los_Angeles",
    "original_purchase_date": "2024-02-11 09:09:10 Etc/GMT"
  }],
  "latest_receipt": "ClubMagic",
  "environment": "Production",
  "pending_renewal_info": [{
    "product_id": "com.floatcamellia.hfrslowmotion.yearly",
    "original_transaction_id": "490001314520000",
    "auto_renew_product_id": "com.floatcamellia.hfrslowmotion.yearly",
    "auto_renew_status": "1"
  }]
};

const ua = ($request.headers["User-Agent"] || $request.headers["user-agent"] || "").toString();

const list = {
  "TimeCut": { bid: "com.floatcamellia.hfrslowmotion", pid: "com.floatcamellia.hfrslowmotion.yearly" },
  "oldroll": { bid: "com.zijayrate.analogcam", pid: "com.zijayrate.analogcam.vipforever2" },
  "InstaShot": { bid: "com.camerasideas.InstaShot", pid: "com.camerasideas.InstaShot.InShotPro_monthly" },
  "Mp3ConverterNew": { bid: "com.hemin.mp42mp3", pid: "com.hemin.mp42mp3.upgradeYear1" },
  "MotionNinja": { bid: "com.floatcamellia.motionninja", pid: "com.floatcamellia.motionninja.yearpro" },
  "VRTX": { bid: "com.tulleb.vrtx", pid: "com.tulleb.vrtx.full" }
};

for (const key in list) {
  if (new RegExp(`^${key}`, "i").test(ua)) {
    obj.receipt.bundle_id = list[key].bid;
    obj.receipt.in_app[0].product_id = list[key].pid;
    obj.latest_receipt_info[0].product_id = list[key].pid;
    obj.pending_renewal_info[0].product_id = list[key].pid;
    obj.pending_renewal_info[0].auto_renew_product_id = list[key].pid;
    break;
  }
}

$done({ body: JSON.stringify(obj) });


/*
re('("expires_date"):"\\w{4}@("expires_date_pst"):"\\w{4}@("expires_date_ms"):"\\w+"@("is_trial_period"):"\\w+"','$1:"2099@$1:"2099@$1:"4096019658000"@$1:"false"');
function re() {
var body = $response.body;
if(!body){
$done({});
}
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done({body});
} 
*/