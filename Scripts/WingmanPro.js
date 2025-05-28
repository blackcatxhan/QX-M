let obj = JSON.parse($response.body);
obj = [
    {
        "uuid": "12faf4fc-127a-4fe6-9ebf-513289658b22",
        "created_at": "2024-04-30T14:48:18.041318+00:00",
        "name": "Wingman Pro",
        "available": false,
        "appicon": "https://jsxfeosppbjbjkfixdeh.supabase.co/storage/v1/object/public/images/icons/1714488488777000.png",
        "slug": "wingman",
        "instructionslink": null,
        "instructionspassword": null,
        "ioslink": "https://testflight.apple.com/join/9KPf0BzM",
        "androidlink": null,
        "pwa": false,
        "adcopy": "<p>Wingman Pro: The Ultimate Shortcut Toolkit.</p>\n\n<p>Created by Joshua Riley and Mark Lemon, Wingman Pro is not a single-trick app it is a revolutionary shortcut toolkit designed to elevate your phone magic and mentalism. This powerful app unlocks the full potential of your iPhone, enabling you to create and perform incredible routines with ease.</p>\n\n<p>Key Features: &bull;&#8288; &#8288;Stealth Control: Secretly trigger actions with a simple swipe of your phone screen. &bull;&#8288; &#8288;Remote Integration: Utilize your favorite Bluetooth remotes for covert input. &bull;&#8288; &#8288;Masked Interfaces: Use fake lock screens and home screens to control your shortcuts. &bull;&#8288; &#8288;Advanced Input Methods: Easily incorporate voice control and NFC technology. &bull;&#8288; &#8288;Your personal stooge: Turn Siri into your personal assistant by tailoring its responses.</p>\n\n<p>With Wingman Pro, these once-impossible feats are within your reach. Now you can leverage the advanced features and functions of your iPhone using these new shortcut actions that have been custom-designed for our industry.</p>\n\n<p>Powerful Integrations: &bull;&#8288; &#8288;Seamless Partnerships: Combine Wingman Pro with industry-leading tools to extend the functions of the apps you already use. Including; Glyphs, iMiM, ChatGPT, and Elips. &bull;&#8288; &#8288;Comprehensive Tutorials: Learn at your own pace with in-depth video tutorials. &bull;&#8288; &#8288;Ready-to-Perform Routines: Dive straight into the action with the pre-built routines that are included.</p>\n\n<p>Whether you're a seasoned performer or just starting out, Wingman Pro is the perfect tool to take your magic &amp; mentalism to the next level. With its intuitive interface and powerful features, you'll be amazed at what you can make.</p>\n\n<p>Some prior Shortcut knowledge is recommended and your phone will need to be capable of running the Apple Shortcuts app. This product will not work on Android phones.</p>\n\n<p>If you want to start creating, unlock your phone and make it your Wingman.</p>",
        "domains": [
            "wingman.magicapps.co.uk",
            "localhost:3000"
        ],
        "author": "Joshua Riley & Mark Lemon",
        "price": 0,
        "createdBy": "cd92c43c-4957-446c-b6ec-527a683cd1b3",
        "trailer": "342717/c39e4578-1571-4149-8ca3-d98b56183be0",
        "purchasingOption": true,
        "currency": "GBP",
        "production": true,
        "usesPairing": false,
        "preOrder": false,
        "facebookGroup": ""
    }
];
$done({
	body: JSON.stringify(obj)
});
