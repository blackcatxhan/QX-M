function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}

let obj = JSON.parse($response.body);

let id = obj.data.id;
let customer_user_id = obj.data.attributes.customer_user_id;
let profile_id = obj.data.attributes.profile_id;

obj = {
  "data" : {
	"type" : "adapty_analytics_profile",
	"id" : id,
	"attributes" : {
	  "app_id" : "dc4f233a-4ffa-4c6a-b6b8-468c9eb78f2b",
	  "total_revenue_usd" : 0,
	  "customer_user_id" : customer_user_id,
	  "subscriptions" : {
		"photoapp_weekly_trial_3d_sub" : {
		  "vendor_transaction_id" : "450001430823891",
		  "billing_issue_detected_at" : null,
		  "is_lifetime" : false,
		  "store" : "app_store",
		  "vendor_product_id" : "photoapp_weekly_trial_3d_sub",
		  "vendor_original_transaction_id" : "450001430823891",
		  "will_renew" : false,
		  "renewed_at" : "2023-05-17T07:22:34.000000+0000",
		  "cancellation_reason" : null,
		  "active_promotional_offer_id" : null,
		  "active_promotional_offer_type" : null,
		  "unsubscribed_at" : "2023-05-17T07:23:13.778761+0000",
		  "is_active" : true,
		  "activated_at" : "2023-05-17T07:22:35.000000+0000",
		  "is_refund" : false,
		  "is_in_grace_period" : false,
		  "active_introductory_offer_type" : "free_trial",
		  "expires_at" : "2099-07-07T07:07:07.000000+0000",
		  "starts_at" : null,
		  "is_sandbox" : false
		}
	  },
	  "promotional_offer_eligibility" : false,
	  "custom_attributes" : {
		"design" : "6",
		"app_instance_id_1" : "9CA9916DC6CC4531",
		"offerId" : "offer_1",
		"closeSecs" : "0",
		"app_instance_id_2" : "B9149864097FBED0",
		"paywallType" : "session_start_paywall",
		"packagePaymentTrigger" : "false",
		"isActive" : "true"
	  },
	  "profile_id" : profile_id,
	  "paid_access_levels" : {
		"premium" : {
		  "id" : "premium",
		  "is_lifetime" : false,
		  "vendor_product_id" : "photoapp_weekly_trial_3d_sub",
		  "active_promotional_offer_type" : null,
		  "cancellation_reason" : null,
		  "billing_issue_detected_at" : null,
		  "unsubscribed_at" : "2023-05-17T07:23:13.782150+0000",
		  "expires_at" : "2099-07-07T07:07:07.000000+0000",
		  "will_renew" : false,
		  "is_active" : true,
		  "active_promotional_offer_id" : null,
		  "is_in_grace_period" : false,
		  "activated_at" : "2023-05-17T07:22:35.000000+0000",
		  "renewed_at" : "2023-05-17T07:22:34.000000+0000",
		  "is_refund" : false,
		  "active_introductory_offer_type" : "free_trial",
		  "store" : "app_store",
		  "starts_at" : null
		}
	  },
	  "introductory_offer_eligibility" : false,
	  "non_subscriptions" : null
	}
  }
};

switch ($request.url) {
    // case findUrl(/analytics\/profiles\//):
        // break;
	case findUrl(/in-apps\/apple\/receipt\/validate/):
        obj.data.attributes.apple_validation_result = {
			"environment" : "Production",
			"receipt" : {
			  "receipt_type" : "Production",
			  "app_item_id" : 1596089614,
			  "receipt_creation_date" : "2023-05-17 07:22:35 Etc/GMT",
			  "bundle_id" : "com.scaleup.photofx",
			  "original_purchase_date" : "2023-05-17 06:53:33 Etc/GMT",
			  "in_app" : [
				{
				  "quantity" : "1",
				  "purchase_date_ms" : "1684308154000",
				  "expires_date" : "2099-07-07 07:07:07 Etc/GMT",
				  "expires_date_pst" : "2099-07-07 00:07:07 America/Los_Angeles",
				  "is_in_intro_offer_period" : "false",
				  "transaction_id" : "450001430823891",
				  "is_trial_period" : "true",
				  "original_transaction_id" : "450001430823891",
				  "purchase_date" : "2023-05-17 07:22:34 Etc/GMT",
				  "product_id" : "photoapp_weekly_trial_3d_sub",
				  "original_purchase_date_pst" : "2023-05-17 00:22:35 America/Los_Angeles",
				  "in_app_ownership_type" : "PURCHASED",
				  "original_purchase_date_ms" : "1684308155000",
				  "web_order_line_item_id" : "450000661114892",
				  "expires_date_ms" : "4087091227000",
				  "purchase_date_pst" : "2023-05-17 00:22:34 America/Los_Angeles",
				  "original_purchase_date" : "2023-05-17 07:22:35 Etc/GMT"
				}
			  ],
			  "adam_id" : 1596089614,
			  "receipt_creation_date_pst" : "2023-05-17 00:22:35 America/Los_Angeles",
			  "request_date" : "2023-05-17 07:33:02 Etc/GMT",
			  "request_date_pst" : "2023-05-17 00:33:02 America/Los_Angeles",
			  "version_external_identifier" : 856865071,
			  "request_date_ms" : "1684308782494",
			  "original_purchase_date_pst" : "2023-05-16 23:53:33 America/Los_Angeles",
			  "application_version" : "79",
			  "original_purchase_date_ms" : "1684306413000",
			  "receipt_creation_date_ms" : "1684308155000",
			  "original_application_version" : "79",
			  "download_id" : 502440676886428152
			},
			"pending_renewal_info" : [
			  {
				"product_id" : "photoapp_weekly_trial_3d_sub",
				"original_transaction_id" : "450001430823891",
				"auto_renew_product_id" : "photoapp_weekly_trial_3d_sub",
				"auto_renew_status" : "0"
			  }
			],
			"status" : 0,
			"latest_receipt_info" : [
			  {
				"quantity" : "1",
				"purchase_date_ms" : "1684308154000",
				"expires_date" : "2099-07-07 07:07:07 Etc/GMT",
				"expires_date_pst" : "2099-07-07 00:07:07 America/Los_Angeles",
				"is_in_intro_offer_period" : "false",
				"transaction_id" : "450001430823891",
				"is_trial_period" : "true",
				"original_transaction_id" : "450001430823891",
				"purchase_date" : "2023-05-17 07:22:34 Etc/GMT",
				"product_id" : "photoapp_weekly_trial_3d_sub",
				"original_purchase_date_pst" : "2023-05-17 00:22:35 America/Los_Angeles",
				"in_app_ownership_type" : "PURCHASED",
				"subscription_group_identifier" : "20926298",
				"original_purchase_date_ms" : "1684308155000",
				"web_order_line_item_id" : "450000661114892",
				"expires_date_ms" : "4087091227000",
				"purchase_date_pst" : "2023-05-17 00:22:34 America/Los_Angeles",
				"original_purchase_date" : "2023-05-17 07:22:35 Etc/GMT"
			  }
			],
			"latest_receipt" : "MIIUhAYJKoZIhvcNAQcCoIIUdTCCFHECAQExCzAJBgUrDgMCGgUAMIIDwgYJKoZIhvcNAQcBoIIDswSCA68xggOrMAoCARQCAQEEAgwAMAsCARkCAQEEAwIBAzAMAgEDAgEBBAQMAjc5MAwCAQoCAQEEBBYCNCswDAIBDgIBAQQEAgIA/TAMAgETAgEBBAQMAjc5MA0CAQ0CAQEEBQIDAnKRMA4CAQECAQEEBgIEXyJlDjAOAgEJAgEBBAYCBFAyNjMwDgIBCwIBAQQGAgQHXipWMA4CARACAQEEBgIEMxK5LzASAgEPAgEBBAoCCAb5ByIyhbn4MBQCAQACAQEEDAwKUHJvZHVjdGlvbjAYAgEEAgECBBDubN71KtpqIfHZE4DeKoQZMBwCAQUCAQEEFLdsXzSV5eKql3iTEheRmeIBmJipMB0CAQICAQEEFQwTY29tLnNjYWxldXAucGhvdG9meDAeAgEIAgEBBBYWFDIwMjMtMDUtMTdUMDc6MjI6MzVaMB4CAQwCAQEEFhYUMjAyMy0wNS0xN1QwNzozMzowMlowHgIBEgIBAQQWFhQyMDIzLTA1LTE3VDA2OjUzOjMzWjA3AgEHAgEBBC9EWim/2GVg16ayAuiAIbVMpkSZYOuE0qqE+GXxZ9fmqd5b2449n5b5eUrOswPMVjBTAgEGAgEBBEuGsDSZyuu1smQqRrGjq7GTOy4NahGglB3bgnAKxV8d7j+8FWManmGgIK2WfLieWlr0+CIBg0oyCdSSZf5PsB41T7E9BR/7Qv+Isq4wggGYAgERAgEBBIIBjjGCAYowCwICBq0CAQEEAgwAMAsCAgawAgEBBAIWADALAgIGsgIBAQQCDAAwCwICBrMCAQEEAgwAMAsCAga0AgEBBAIMADALAgIGtQIBAQQCDAAwCwICBrYCAQEEAgwAMAwCAgalAgEBBAMCAQEwDAICBqsCAQEEAwIBAzAMAgIGsQIBAQQDAgEBMAwCAga3AgEBBAMCAQAwDAICBroCAQEEAwIBADAPAgIGrgIBAQQGAgRiFR11MBICAgavAgEBBAkCBwGZRfGN8AwwGgICBqcCAQEEEQwPNDUwMDAxNDMwODIzODkxMBoCAgapAgEBBBEMDzQ1MDAwMTQzMDgyMzg5MTAfAgIGqAIBAQQWFhQyMDIzLTA1LTE3VDA3OjIyOjM0WjAfAgIGqgIBAQQWFhQyMDIzLTA1LTE3VDA3OjIyOjM1WjAfAgIGrAIBAQQWFhQyMDIzLTA1LTIwVDA3OjIyOjM0WjAnAgIGpgIBAQQeDBxwaG90b2FwcF93ZWVrbHlfdHJpYWxfM2Rfc3VioIIO4jCCBcYwggSuoAMCAQICEC2rAxu91mVz0gcpeTxEl8QwDQYJKoZIhvcNAQEFBQAwdTELMAkGA1UEBhMCVVMxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAsMAkc3MUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTAeFw0yMjEyMDIyMTQ2MDRaFw0yMzExMTcyMDQwNTJaMIGJMTcwNQYDVQQDDC5NYWMgQXBwIFN0b3JlIGFuZCBpVHVuZXMgU3RvcmUgUmVjZWlwdCBTaWduaW5nMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczETMBEGA1UECgwKQXBwbGUgSW5jLjELMAkGA1UEBhMCVVMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDA3cautOi8bevBfbXOmFn2UFi2QtyV4xrF9c9kqn/SzGFM1hTjd4HEWTG3GcdNS6udJ6YcPlRyUCIePTAdSg5G5dgmKRVL4yCcrtXzJWPQmNRx+G6W846gCsUENek496v4O5TaB+VbOYX/nXlA9BoKrpVZmNMcXIpsBX2aHzRFwQTN1cmSpUYXBqykhfN3XB+F96NB5tsTEG9t8CHqrCamZj1eghXHXJsplk1+ik6OeLtXyTWUe7YAzhgKi3WVm+nDFD7BEDQEbbc8NzPfzRQ+YgzA3y9yu+1Kv+PIaQ1+lm0dTxA3btP8PRoGfWwBFMjEXzFqUvEzBchg48YDzSaBAgMBAAGjggI7MIICNzAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFF1CEGwbu8dSl05EvRMnuToSd4MrMHAGCCsGAQUFBwEBBGQwYjAtBggrBgEFBQcwAoYhaHR0cDovL2NlcnRzLmFwcGxlLmNvbS93d2RyZzcuZGVyMDEGCCsGAQUFBzABhiVodHRwOi8vb2NzcC5hcHBsZS5jb20vb2NzcDAzLXd3ZHJnNzAxMIIBHwYDVR0gBIIBFjCCARIwggEOBgoqhkiG92NkBQYBMIH/MDcGCCsGAQUFBwIBFitodHRwczovL3d3dy5hcHBsZS5jb20vY2VydGlmaWNhdGVhdXRob3JpdHkvMIHDBggrBgEFBQcCAjCBtgyBs1JlbGlhbmNlIG9uIHRoaXMgY2VydGlmaWNhdGUgYnkgYW55IHBhcnR5IGFzc3VtZXMgYWNjZXB0YW5jZSBvZiB0aGUgdGhlbiBhcHBsaWNhYmxlIHN0YW5kYXJkIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHVzZSwgY2VydGlmaWNhdGUgcG9saWN5IGFuZCBjZXJ0aWZpY2F0aW9uIHByYWN0aWNlIHN0YXRlbWVudHMuMDAGA1UdHwQpMCcwJaAjoCGGH2h0dHA6Ly9jcmwuYXBwbGUuY29tL3d3ZHJnNy5jcmwwHQYDVR0OBBYEFLJFfcNEimtMSa9uUd4XyVFG7/s0MA4GA1UdDwEB/wQEAwIHgDAQBgoqhkiG92NkBgsBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEAd4oC3aSykKWsn4edfl23vGkEoxr/ZHHT0comoYt48xUpPnDM61VwJJtTIgm4qzEslnj4is4Wi88oPhK14Xp0v0FMWQ1vgFYpRoGP7BWUD1D3mbeWf4Vzp5nsPiakVOzHvv9+JH/GxOZQFfFZG+T3hAcrFZSzlunYnoVdRHSuRdGo7/ml7h1WGVpt6isbohE0DTdAFODr8aPHdpVmDNvNXxtif+UqYPY5XY4tLqHFAblHXdHKW6VV6X6jexDzA6SCv8m0VaGIWCIF+v15a2FoEP+40e5e5KzMcoRsswIVK6o5r7AF5ldbD6QopimkS4d3naMQ32LYeWhg5/pOyshkyzCCBFUwggM9oAMCAQICFDQYWP8B/gY/jvGfH+k8AbTBRv/JMA0GCSqGSIb3DQEBBQUAMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTAeFw0yMjExMTcyMDQwNTNaFw0yMzExMTcyMDQwNTJaMHUxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQLDAJHNzFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCsrtHTtoqxGyiVrd5RUUw/M+FOXK+z/ALSZU8q1HRojHUXZc8o5EgJmHFSMiwWTniOklZkqd2LzeLUxzuiEkU3AhliZC9/YcbTWSK/q/kUo+22npm6L/Gx3DBCT7a2ssZ0qmJWu+1ENg/R5SB0k1c6XZ7cAfx4b2kWNcNuAcKectRxNrF2CXq+DSqX8bBeCxsSrSurB99jLfWI6TISolVYQ3Y8PReAHynbsamfq5YFnRXc3dtOD+cTfForLgJB9u56arZzYPeXGRSLlTM4k9oAJTauVVp8n/n0YgQHdOkdp5VXI6wrJNpkTyhy6ZawCDyIGxRjQ9eJrpjB8i2O41ElAgMBAAGjge8wgewwEgYDVR0TAQH/BAgwBgEB/wIBADAfBgNVHSMEGDAWgBQr0GlHlHYJ/vRrjS5ApvdHTX8IXjBEBggrBgEFBQcBAQQ4MDYwNAYIKwYBBQUHMAGGKGh0dHA6Ly9vY3NwLmFwcGxlLmNvbS9vY3NwMDMtYXBwbGVyb290Y2EwLgYDVR0fBCcwJTAjoCGgH4YdaHR0cDovL2NybC5hcHBsZS5jb20vcm9vdC5jcmwwHQYDVR0OBBYEFF1CEGwbu8dSl05EvRMnuToSd4MrMA4GA1UdDwEB/wQEAwIBBjAQBgoqhkiG92NkBgIBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEAUqMIKRNlt7Uf5jQD7fYYd7w9yie1cOzsbDNL9pkllAeeITMDavV9Ci4r3wipgt5Kf+HnC0sFuCeYSd3BDIbXgWSugpzERfHqjxwiMOOiJWFEif6FelbwcpJ8DERUJLe1pJ8m8DL5V51qeWxA7Q80BgZC/9gOMWVt5i4B2Qa/xcoNrkfUBReIPOmc5BlkbYqUrRHcAfbleK+t6HDXDV2BPkYqLK4kocfS4H2/HfU2a8XeqQqagLERXrJkfrPBV8zCbFmZt/Sw3THaSNZqge6yi1A1FubnXHFibrDyUeKobfgqy2hzxqbEGkNJAT6pqQCKhmyDiNJccFd62vh2zBnVsDCCBLswggOjoAMCAQICAQIwDQYJKoZIhvcNAQEFBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTA2MDQyNTIxNDAzNloXDTM1MDIwOTIxNDAzNlowYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5JGpCR+R2x5HUOsF7V55hC3rNqJXTFXsixmJ3vlLbPUHqyIwAugYPvhQCdN/QaiY+dHKZpwkaxHQo7vkGyrDH5WeegykR4tb1BY3M8vED03OFGnRyRly9V0O1X9fm/IlA7pVj01dDfFkNSMVSxVZHbOU9/acns9QusFYUGePCLQg98usLCBvcLY/ATCMt0PPD5098ytJKBrI/s61uQ7ZXhzWyz21Oq30Dw4AkguxIRYudNU8DdtiFqujcZJHU1XBry9Bs/j743DN5qNMRX4fTGtQlkGJxHRiCxCDQYczioGxMFjsWgQyjGizjx3eZXP/Z15lvEnYdp8zFGWhd5TJLQIDAQABo4IBejCCAXYwDgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFCvQaUeUdgn+9GuNLkCm90dNfwheMB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMIIBEQYDVR0gBIIBCDCCAQQwggEABgkqhkiG92NkBQEwgfIwKgYIKwYBBQUHAgEWHmh0dHBzOi8vd3d3LmFwcGxlLmNvbS9hcHBsZWNhLzCBwwYIKwYBBQUHAgIwgbYagbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjANBgkqhkiG9w0BAQUFAAOCAQEAXDaZTC14t+2Mm9zzd5vydtJ3ME/BH4WDhRuZPUc38qmbQI4s1LGQEti+9HOb7tJkD8t5TzTYoj75eP9ryAfsfTmDi1Mg0zjEsb+aTwpr/yv8WacFCXwXQFYRHnTTt4sjO0ej1W8k4uvRt3DfD0XhJ8rxbXjt57UXF6jcfiI1yiXV2Q/Wa9SiJCMR96Gsj3OBYMYbWwkvkrL4REjwYDieFfU9JmcgijNq9w2Cz97roy/5U2pbZMBjM3f3OgcsVuvaDyEO2rpzGU+12TZ/wYdV2aeZuTJC+9jVcZ5+oVK3G72TQiQSKscPHbZNnF5jyEuAF1CqitXa5PzQCQc3sHV1ITGCAbEwggGtAgEBMIGJMHUxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQLDAJHNzFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkCEC2rAxu91mVz0gcpeTxEl8QwCQYFKw4DAhoFADANBgkqhkiG9w0BAQEFAASCAQC4ajhydx5sAvLl6MrT4RvgGEfD35UXVjEKY65HHv2Q5/HwFVa6GaPRi0wJCKfCgTS9V7l2ojyYxJ1MwbmycN4LGt+FvDU/QkaIRAA9JxY2FJbQkomgiqSf7fMtn5OOr9lkkt9irsEPpLu1w/uxIOpTMVWlsV7H8WcmCOHHOJzkKulWXIMq14TGA9ejSZZ+imtwqo0hZ1x5GDWHvWqWzLk59/KBD1FypWpSbmkjij+Yfj83BSvOICx0fKlbrCN7b2cwimuv0YzqvVZDNIaquNNr6djZWzpXtTTs+vktlDBROrwnycPDjE29TKVQE4OpiCzItTJeWRtrde6TUzZMKPMe"
		};
        break;
}
$done({body: JSON.stringify(obj)});