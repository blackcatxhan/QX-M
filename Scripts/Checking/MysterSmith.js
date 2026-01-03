// ===== Utils =====
function parseForm(body) {
    return Object.fromEntries(
        body.split("&")
            .map(i => i.split("="))
            .filter(i => i.length === 2)
            .map(([k, v]) => [decodeURIComponent(k), decodeURIComponent(v)])
    );
}

// ===== Main =====
const url = $request.url;
let obj = JSON.parse($response.body);

// -------- activate.php --------
if (url.includes("/activate/activate.php")) {
    obj.siker = 1;
}

// -------- sync_account_data.php --------
if (url.includes("/api/sync_account_data.php")) {

    // Parse POST form
    const params = parseForm($request.body || "");
    const appid = params.appid || "";

    // Check appid
    if (appid === "mystersmith") {
        obj.siker = 1;
		obj.credits = 9999;
		obj.allow_secret_hardware = 1;
		obj.mystersmith_sub = 1;
		obj.mystersmith_sub_type = "basic";
		obj.mystersmith_sub_id = "P-81S44269VD7462810M6MJSGY";
		obj.mystersmith_sub_valid = "2099-12-30";
		obj.wonderpocket = 1;
		obj.allow_nfcreaders = 1;
		obj.allow_godice = 1;
		obj.barmit_vett = 1;
		obj.multidisplay = "PSD123MYSTER";
		obj.multidisplay_activated = 1;
		obj.audioassistant = "AUD123MYSTER";
		obj.audioassistant_activated = 1;
		obj.externaldisplays = "EXT123MYSTER";
		obj.externaldisplays_activated = 1;
		obj.sendtoapi = "API123MYSTER";
		obj.sendtoapi_activated = 1;
		obj.voicerecorder = "REC123MYSTER";
		obj.voicerecorder_activated = 1;
		obj.imgbuffer_addon = "IMG123MYSTER";
		obj.imgbuffer_addon_activated = 1;
		obj.printers_addon = "PRT123MYSTER";
		obj.printers_addon_activated = 1;
		obj.input_addon = "INP123MYSTER";
		obj.input_addon_activated = 1;
		obj.transformer_addon = "TRAN123MYSTER";
		obj.transformer_addon_activated = 1;
		obj.offline_textrec_addon = "OFF123MYSTER";
		obj.offline_textrec_addon_activated = 1;
		obj.webdoodle = "WDL123MYSTER";
		obj.webdoodle_activated = 1;
		obj.otherboards = 1;
		obj.jovahagyas_folyamatban = 0;
		obj.dictionary_api = "DIC123MYSTER";
		obj.dictionary_api_activated = 1;
		obj.dictionary_api = "DIC123MYSTER";
		obj.aw_board = "AW123MYSTER";
		obj.aw_board_activated = 1;
    }

    if (appid === "timesmith") {
		obj.multiwatch = "yes";
		obj.aw_board_activated = 1;
		obj.mystersmith_sub_valid = "2099-12-30";
		obj.sbwatch_used_5days = 0;
		obj.full_version = "";
		obj.pitata_watch = 1;
		obj.doodle_colors = null;
		obj.sbwatch_used_lately = 0;
		obj.upgrade_lehet = 1;
		obj.mystersmith_sub_id = "P-81S44269VD7462810M6MJSGY";
		obj.wonderpocket = 1;
		obj.full_version_activated = 1;
		obj.full_sb_deactivated = "";
		obj.allow_secret_hardware = 1;
		obj.siker = 1;
		obj.barmit_vett = 1;
		obj.otatoken = "91d749927a2a905248d2669e5c66b2c25c4697ca352348e83937708f44302a20";
		obj.mystersmith_sub = 1;
		obj.allow_nfcreaders = 1;
		obj.credits = 9999;
		obj.show_licence_info = 1;
		obj.hasznalhat_mas_orat = 0;
		obj.jovahagyas_folyamatban = 0;
		obj.aw_board = "";
		obj.can_use_otherwatch = 1;
		obj.token = "POP6571TIQ";
		obj.mystersmith_sub_type = "basic";
		obj.allow_godice = 1;
		obj.account_message = "Account ID; username and PIN all OK.";
    }

    if (appid === "dicesmith") {
        obj.ts_full_version = "";
		obj.doodle_colors = null;
		obj.allow_godice = 1;
		obj.wonderpocket = 1;
		obj.barmit_vett = 1;
		obj.full_version_code = "DS123MYSTER";
		obj.mystersmith_sub_type = "basic";
		obj.full_version_feature = "full_version";
		obj.otatoken = "b4995bdb895306eee9938609873923af44d5fba3f62ac99349a6cb384dd554f9";
		obj.account_message = "Username and PIN restored from database.";
		obj.mystersmith_sub_id = "P-81S44269VD7462810M6MJSGY";
		obj.jovahagyas_folyamatban = 0;
		obj.mystersmith_sub = 1;
		obj.token = "HAG6991DIW";
		obj.allow_nfcreaders = 1;
		obj.ts_full_version_activated = 1;
		obj.full_version_activated = 1;
		obj.full_version = "TURGUzQxczJLM05NW1lMUyVUbEVUUg==";
		obj.siker = 1;
		obj.credits = 9999;
		obj.allow_secret_hardware = 1;
		obj.mystersmith_sub_valid = "2099-12-30";
    }

    if (appid === "acaan") {
        obj.doodle_colors = null;
		obj.allow_godice = 1;
		obj.wonderpocket = 1;
		obj.barmit_vett = 1;
		obj.full_version_code = "AC123MYSTER";
		obj.mystersmith_sub_type = "basic";
		obj.otatoken = "1cc93f2b407bf7af9cd7f83b4ea2d42bbccfadb825e64c9e37705df0d4ed7b10";
		obj.account_message = "Username and PIN restored from database.";
		obj.mystersmith_sub_id = "P-81S44269VD7462810M6MJSGY";
		obj.jovahagyas_folyamatban = 0;
		obj.mystersmith_sub = 1;
		obj.token = "YAC9957ACY";
		obj.allow_nfcreaders = 1;
		obj.full_version_activated = 1;
		obj.full_version = "I0FkQ0YxezIyM1VNSFlJU3hUdkVkUg==";
		obj.siker = 1;
		obj.credits = 9999;
		obj.allow_secret_hardware = 1;
		obj.mystersmith_sub_valid = "2099-12-30";
    }

    if (appid === "peeksmith") {
        obj.aw_board_activated = 1;
		obj.mystersmith_sub_valid = "2099-12-30";
		obj.doodle_colors = null;
		obj.mystersmith_sub_id = "P-81S44269VD7462810M6MJSGY";
		obj.audioassistant_activated = 1;
		obj.webdoodle = "WDL123MYSTER";
		obj.wonderpocket = 1;
		obj.otherboards = 1;
		obj.audioassistant = "AUD123MYSTER";
		obj.sendtoapi = "API123MYSTER";
		obj.dictionary_api = "";
		obj.allow_secret_hardware = 1;
		obj.siker = 1;
		obj.barmit_vett = 1;
		obj.otatoken = "c6876ab6710bfd768f97441dd936ba8bae539b8910f7491550b16b831de092af";
		obj.mystersmith_sub = 1;
		obj.allow_nfcreaders = 1;
		obj.credits = 9999;
		obj.sendtoapi_activated = 1;
		obj.voicerecorder = "REC123MYSTER";
		obj.voicerecorder_activated = 1;
		obj.dictionary_api_activated = 1;
		obj.jovahagyas_folyamatban = 0;
		obj.aw_board = "";
		obj.multidisplay = "PSD123MYSTER";
		obj.externaldisplays = "EXT123MYSTER";
		obj.multidisplay_activated = 1;
		obj.token = "DYS9783PEC";
		obj.mystersmith_sub_type = "basic";
		obj.allow_godice = 1;
		obj.webdoodle_activated = 1;
		obj.externaldisplays_activated = 1;
		obj.account_message = "Username and PIN restored from database."
    }
}

$done({
    body: JSON.stringify(obj)
});
