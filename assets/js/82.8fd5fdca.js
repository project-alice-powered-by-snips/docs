(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{484:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("link",{attrs:{rel:"stylesheet",href:"/css/speechbubbles.css"}}),t._v(" "),a("h1",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),a("p",[t._v("Sometimes you need more information than what the user provided...")]),t._v(" "),a("h2",{attrs:{id:"study-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#study-case"}},[t._v("#")]),t._v(" Study case")]),t._v(" "),a("p",[t._v("Let's take an intent with a few slots, highlighted in the example.")]),t._v(" "),a("div",{staticClass:"userSpeech male"},[t._v("Hey Alice?")]),t._v(" "),a("div",{staticClass:"aliceSpeech female"},[t._v("Yes?")]),t._v(" "),a("div",{staticClass:"userSpeech male"},[t._v("Can you book me a flight from "),a("strong",{staticClass:"slotWord"},[t._v("Geneva")]),t._v(" to "),a("strong",{staticClass:"slotWord"},[t._v("New York")]),t._v(" for "),a("strong",{staticClass:"slotWord"},[t._v("tuesday 23 third of april around midday")]),t._v(" please?")]),t._v(" "),a("div",{staticClass:"aliceSpeech female"},[t._v("Of course, let me check that!")]),t._v(" "),a("p",[t._v("For this example (and also in reality) a flight can only be booked if")]),t._v(" "),a("ul",[a("li",[t._v("The user has the intention to book a ticket, which requires the "),a("code",[t._v("intent")]),t._v(" to be correctly detected")]),t._v(" "),a("li",[t._v("The user provided the following information, aka "),a("code",[t._v("slots")]),t._v(":\n"),a("ul",[a("li",[a("code",[t._v("origin")]),t._v(": Where the user wants to depart from")]),t._v(" "),a("li",[a("code",[t._v("destination")]),t._v(": Where the user wants to travel to")]),t._v(" "),a("li",[a("code",[t._v("date")]),t._v(": A date and possibly a time at which the user wants to leave")])])])]),t._v(" "),a("h2",{attrs:{id:"the-potential-problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-potential-problem"}},[t._v("#")]),t._v(" The potential problem")]),t._v(" "),a("p",[t._v("Now, let's imagine the following:")]),t._v(" "),a("div",{staticClass:"userSpeech male"},[t._v("Hey Alice?")]),t._v(" "),a("div",{staticClass:"aliceSpeech female"},[t._v("Yes?")]),t._v(" "),a("div",{staticClass:"userSpeech male"},[t._v("Can you book me a flight from "),a("strong",{staticClass:"slotWord"},[t._v("Geneva")]),t._v(" please?")]),t._v(" "),a("p",[t._v("The problem is that the user did not provide a "),a("code",[t._v("destination")]),t._v(" or a "),a("code",[t._v("date")]),t._v(", for which Alice will have to query the user for details.")]),t._v(" "),a("h2",{attrs:{id:"the-bad-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-bad-solution"}},[t._v("#")]),t._v(" The bad solution")]),t._v(" "),a("p",[t._v("You could use the classic "),a("code",[t._v("intent")]),t._v(" decorators with 4 separate methods, which is not recommended but written here to demonstrate:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@IntentHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerFrom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("answerFrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DialogSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@IntentHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerTo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("answerTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DialogSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\t\n\t\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@IntentHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerDate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("answerDate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DialogSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@IntentHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BookFlight'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bookFlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DialogSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n")])])]),a("p",[t._v("Well, not that effective, is it? lots of writing only to declare the methods, imagine the work in each of the methods to finally get to book the ticket.")]),t._v(" "),a("h2",{attrs:{id:"the-good-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-good-solution"}},[t._v("#")]),t._v(" The good solution")]),t._v(" "),a("p",[t._v("This is what I call the "),a("code",[t._v("Fill the glass")]),t._v(" method, because we come always at the same method until everything is filled.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@IntentHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerFrom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@IntentHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerTo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@IntentHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerDate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@IntentHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BookFlight'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bookFlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DialogSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'From'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("continueDialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\tsessionId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\ttext"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WhereFrom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tintentFilter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerFrom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tslot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'From'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'To'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("continueDialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\tsessionId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\ttext"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WhereTo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tintentFilter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerTo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Date'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slots"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("continueDialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\tsessionId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\ttext"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WhatDate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tintentFilter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerDate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If we got here, we are sure to have all three required information!")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# So we can continue and proceed to the booking!")]),t._v("\n")])])]),a("p",[t._v("What we did here is link our 4 "),a("code",[t._v("intents")]),t._v(" to the same method "),a("code",[t._v("bookFlight")]),t._v(" and we check if all our slots are filled. If not, we ask the user for the information and limit the NLU on the intent that interests us using "),a("code",[t._v("intentFilter")]),t._v(". In the first if condition I even mentioned the "),a("code",[t._v("slot")]),t._v(" the NLU should focus on extracting!")]),t._v(" "),a("p",[t._v("As the answer will come back to the same method, the checks will naturally continue until all three are False and we can proceed to the booking!")]),t._v(" "),a("p",[t._v("Make sure to read "),a("RouterLink",{attrs:{to:"/skill-development/builtin-intents.html"}},[t._v("builtin intents")]),t._v(" to understand dialogue state or you will end up having collisions with other skills!")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);