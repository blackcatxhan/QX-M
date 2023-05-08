const obj = JSON.parse($response.body);
obj.result = JSON.parse(obj.result);

data.result.receipt = {
    "receipt_type": "Production",
    "adam_id": 1236567663,
    "app_item_id": 1236567663,
    "bundle_id": "es.produkt.app.panels",
    "application_version": "202304190914",
    "download_id": 502412593505880289,
    "version_external_identifier": 856499243,
    "receipt_creation_date": "2023-05-07 12:11:38 Etc/GMT",
    "receipt_creation_date_ms": "1683461498000",
    "receipt_creation_date_pst": "2023-05-07 05:11:38 America/Los_Angeles",
    "request_date": "2023-05-07 12:12:48 Etc/GMT",
    "request_date_ms": "1683461568170",
    "request_date_pst": "2023-05-07 05:12:48 America/Los_Angeles",
    "original_ ": "2023-05-07 08:49:21 Etc/GMT",
    "original_ _ms": "1683449361000",
    "original_ _pst": "2023-05-07 01:49:21 America/Los_Angeles",
    "original_application_version": "202304190914",
    "in_app": [
      {
        "quantity": "1",
        "product_id": "es.produkt.app.panels.sub.year",
        "transaction_id": "450001422255466",
        "original_transaction_id": "450001422255466",
        " ": "2023-05-07 12:11:37 Etc/GMT",
        " _ms": "1683461497000",
        " _pst": "2023-05-07 05:11:37 America/Los_Angeles",
        "original_ ": "2023-05-07 12:11:38 Etc/GMT",
        "original_ _ms": "1683461498000",
        "original_ _pst": "2023-05-07 05:11:38 America/Los_Angeles",
        "expires_date": "2099-07-07 12:12:12 Etc/GMT",
        "expires_date_ms": "4087084332000",
        "expires_date_pst": "2099-07-07 05:12:13 America/Los_Angeles",
        "web_order_line_item_id": "450000656643232",
        "is_trial_period": "true",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED"
      }
    ]
  };
data.result.latest_receipt_info[0] = {
      "quantity": "1",
      "product_id": "es.produkt.app.panels.sub.year",
      "transaction_id": "450001422255466",
      "original_transaction_id": "450001422255466",
      " ": "2023-05-07 12:11:37 Etc/GMT",
      " _ms": "1683461497000",
      " _pst": "2023-05-07 05:11:37 America/Los_Angeles",
      "original_ ": "2023-05-07 12:11:38 Etc/GMT",
      "original_ _ms": "1683461498000",
      "original_ _pst": "2023-05-07 05:11:38 America/Los_Angeles",
      "expires_date": "2099-07-07 12:12:12 Etc/GMT",
      "expires_date_ms": "4087084332000",
      "expires_date_pst": "2099-07-07 05:12:13 America/Los_Angeles",
      "web_order_line_item_id": "450000656643232",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20474778"
    };
data.result.pending_renewal_info[0] = {
      "auto_renew_product_id": "es.produkt.app.panels.sub.year",
      "product_id": "es.produkt.app.panels.sub.year",
      "original_transaction_id": "450001422255466",
      "auto_renew_status": "1"
    };
data.result.status = 0;

$done({body: JSON.stringify(obj)});