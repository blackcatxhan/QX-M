function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}

let obj;

switch ($request.url) {
    case findUrl(/models/):
        obj = {
  "categories" : [
    {
      "category" : "gpt_3.5",
      "subscription_level" : "free",
      "browsing_model" : null,
      "code_interpreter_model" : null,
      "default_model" : "text-davinci-002-render-sha-mobile",
      "human_category_name" : "GPT-3.5",
      "plugins_model" : null
    },
    {
      "category" : "gpt_4",
      "subscription_level" : "plus",
      "browsing_model" : "gpt-4-browsing",
      "code_interpreter_model" : "gpt-4-code-interpreter",
      "default_model" : "gpt-4-mobile",
      "human_category_name" : "GPT-4",
      "plugins_model" : "gpt-4-plugins"
    }
  ],
  "models" : [
    {
      "tags" : [
        "mobile"
      ],
      "slug" : "text-davinci-002-render-sha-mobile",
      "title" : "Default (GPT-3.5) (Mobile)",
      "description" : "Our fastest model, great for most everyday tasks.",
      "max_tokens" : 8191,
      "qualitative_properties" : {
        "speed" : [
          5,
          5
        ],
        "reasoning" : [
          3,
          5
        ],
        "conciseness" : [
          2,
          5
        ]
      }
    },
    {
      "tags" : [
        "mobile"
      ],
      "slug" : "gpt-4-mobile",
      "title" : "GPT-4 (Mobile, V2)",
      "description" : "Our most capable model, great for tasks that require creativity and advanced reasoning.",
      "max_tokens" : 4095,
      "qualitative_properties" : {
        "speed" : [
          2,
          5
        ],
        "reasoning" : [
          5,
          5
        ],
        "conciseness" : [
          4,
          5
        ]
      }
    },
    {
      "tags" : [

      ],
      "slug" : "text-davinci-002-render-sha",
      "title" : "Default (GPT-3.5)",
      "description" : "Our fastest model, great for most everyday tasks.",
      "max_tokens" : 8191,
      "qualitative_properties" : {
        "speed" : [
          5,
          5
        ],
        "reasoning" : [
          3,
          5
        ],
        "conciseness" : [
          2,
          5
        ]
      }
    },
    {
      "tags" : [

      ],
      "slug" : "gpt-4",
      "title" : "GPT-4",
      "description" : "Our most capable model, great for tasks that require creativity and advanced reasoning.",
      "max_tokens" : 4095,
      "qualitative_properties" : {
        "speed" : [
          2,
          5
        ],
        "reasoning" : [
          5,
          5
        ],
        "conciseness" : [
          4,
          5
        ]
      }
    },
    {
      "slug" : "gpt-4-browsing",
      "qualitative_properties" : {

      },
      "title" : "Web Browsing",
      "enabled_tools" : [
        "tools"
      ],
      "max_tokens" : 4095,
      "description" : "An experimental model that knows when and how to browse the internet",
      "tags" : [
        "beta"
      ]
    },
    {
      "slug" : "gpt-4-plugins",
      "qualitative_properties" : {

      },
      "title" : "Plugins",
      "enabled_tools" : [
        "tools3"
      ],
      "max_tokens" : 8195,
      "description" : "An experimental model that knows when and how to use plugins",
      "tags" : [
        "beta"
      ]
    }
  ]
};
$done({
    body: JSON.stringify(obj)
});
        break;
    case findUrl(/conversation/):
       obj = $response.body;
var result = obj.replace(/^(?!.*davinci-002-render-sha-mobile).*text-davinci-002-render-sha.*$/g, function(match) {
  return match.replace("text-davinci-002-render-sha", "gpt-4-mobile");
});
        break;
    case findUrl(/accounts\/check\//):
        obj = JSON.parse($response.body);
obj.accounts.default.account.has_previously_paid_subscription = true
obj.accounts.default.account.processor = {
    "a001": {
        "has_customer_object": true
    },
    "b001": {
        "has_transaction_history": true
    }
};
obj.accounts.default.entitlement = {
	"expires_at": "2099-07-07T07:07:07Z",
	"subscription_id": null,
	"subscription_plan": "chatgptplusplan",
	"has_active_subscription": true
};
obj.accounts.default.last_active_subscription = {
	"subscription_id": null,
	"will_renew": true,
	"purchase_origin_platform": "openai"
};
$done({
    body: JSON.stringify(obj)
});
        break;
}


