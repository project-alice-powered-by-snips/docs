(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{456:function(t,s,e){"use strict";e.r(s);var n=e(18),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("link",{attrs:{rel:"stylesheet",href:"/css/speechbubbles.css"}}),t._v(" "),e("h1",{attrs:{id:"intro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),e("p",[t._v("There are "),e("Term",{attrs:{term:"intent",show:"intents"}}),t._v(" that are already available for you to use due to the fact the "),e("code",[t._v("AliceCore")]),t._v(" "),e("Term",{attrs:{term:"skill"}}),t._v(" needs to be loaded and run for Alice to start. You should "),e("strong",[t._v("always check")]),t._v(" if the intents you are creating do not already exist. Those intents are usually used for answering to missing information and are "),e("strong",[t._v("disabled by default")]),t._v(". They take advantage of our built-in "),e("Term",{attrs:{term:"slot",show:"slots"}}),t._v(". Let's list those intents here:")],1),t._v(" "),e("h2",{attrs:{id:"listing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listing"}},[t._v("#")]),t._v(" Listing")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("UserRandomAnswer")]),t._v(" The user answers with random words.\n"),e("ul",[e("li",[t._v("Type: "),e("em",[t._v("Alice/RandomWords")])]),t._v(" "),e("li",[t._v("SlotName: "),e("em",[t._v("RandomWord")])])])]),t._v(" "),e("li",[e("code",[t._v("AnswerYesOrNo")]),t._v(" User answers yes or no.\n"),e("ul",[e("li",[t._v("Type: "),e("em",[t._v("Alice/AnswerYesNo")])]),t._v(" "),e("li",[t._v("SlotName: "),e("em",[t._v("Answer")])]),t._v(" "),e("li",[t._v("Note: Did you know you can use "),e("code",[t._v("self.Commons.isYes(session)")]),t._v("?")])])]),t._v(" "),e("li",[e("code",[t._v("AnswerRoom")]),t._v(" User answers with a room name.\n"),e("ul",[e("li",[t._v("Type: "),e("em",[t._v("Alice/Rooms")])]),t._v(" "),e("li",[t._v("SlotName: "),e("em",[t._v("Room")])])])]),t._v(" "),e("li",[e("code",[t._v("AnswerName")]),t._v(" User answers with a name.\n"),e("ul",[e("li",[t._v("Type: "),e("em",[t._v("Alice/Name")])]),t._v(" "),e("li",[t._v("SlotName: "),e("em",[t._v("Name")])])])]),t._v(" "),e("li",[e("code",[t._v("AnswerNumber")]),t._v(" User answers with a name.\n"),e("ul",[e("li",[t._v("Type: "),e("em",[t._v("snips/number")])]),t._v(" "),e("li",[t._v("SlotName: "),e("em",[t._v("Number")])])])]),t._v(" "),e("li",[e("code",[t._v("SpellWord")]),t._v(" User answers with a name.\n"),e("ul",[e("li",[t._v("Type: "),e("em",[t._v("Alice/Letter")])]),t._v(" "),e("li",[t._v("SlotName: "),e("em",[t._v("Letters")])]),t._v(" "),e("li",[t._v("Notes:\n"),e("ul",[e("li",[t._v("You can use "),e("code",[t._v("self.Commons.isSpelledWord(TheString)")]),t._v(" to check if a string is a spelled word")]),t._v(" "),e("li",[t._v("You can build a string from "),e("em",[t._v("Letters")]),t._v(" slots with "),e("code",[t._v("string = ''.join([slot.value['value'] for slot in session.slotsAsObjects['Letters']])")])])])])])]),t._v(" "),e("li",[e("code",[t._v("AnswerAccessLevel")]),t._v(" User answers with access level\n"),e("ul",[e("li",[t._v("Type: "),e("em",[t._v("Alice/UserAccessLevel")])]),t._v(" "),e("li",[t._v("SlotName: "),e("em",[t._v("UserAccessLevel")])])])]),t._v(" "),e("li",[e("code",[t._v("AnswerPercent")]),t._v(" User answers with access level\n"),e("ul",[e("li",[t._v("Type: "),e("em",[t._v("snips/number")])]),t._v(" "),e("li",[t._v("SlotName: "),e("em",[t._v("Percent")])])])])]),t._v(" "),e("p",[t._v("We will implement more inbuilt intents over time, such as answering with time, dates etc.")]),t._v(" "),e("h2",{attrs:{id:"how-to-use-these-intents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-these-intents"}},[t._v("#")]),t._v(" How to use these intents")]),t._v(" "),e("p",[t._v("Now comes the very important part, understanding the problematic behind using those intents and how to overcome those limitations")]),t._v(" "),e("h3",{attrs:{id:"the-problem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-problem"}},[t._v("#")]),t._v(" The problem")]),t._v(" "),e("p",[t._v("Let's imagine you are building a skill that gives the user the ability to add reminders. At some point, you might want to ask the user if the reminder can be deleted, to which, the user is going to answer with either yes or no:")]),t._v(" "),e("div",{staticClass:"aliceSpeech female"},[t._v("Hey, you told me to remind you this: Buy some beer before weekend.")]),t._v(" "),e("div",{staticClass:"aliceSpeech female"},[t._v("Can I now delete this reminder?")]),t._v(" "),e("div",{staticClass:"userSpeech male"},[e("strong",{staticClass:"slotWord"},[t._v("Yes")]),t._v(" thank you")]),t._v(" "),e("div",{staticClass:"aliceSpeech female"},[t._v("Ok, deleted")]),t._v(" "),e("p",[t._v("To this point, nothing big or hard. What if I told you that the "),e("code",[t._v("AnswerYesOrNo")]),t._v(" intent is already used by many skills? So if you have a little chance, your skill might by the first one to catch the intent but what if the "),e("code",[t._v("Yes")]),t._v(" the user is answering is not meant for your skill? See where I'm going? You need to make sure the "),e("code",[t._v("AnswerYesOrNo")]),t._v(" is actually meant for your skill at this moment. It is important to understand that Alice doesn't lock a skill while in dialogue. You could hypothetically answer "),e("code",[t._v("What time is it")]),t._v(" instead of "),e("code",[t._v("Yes")]),t._v(" and she'd answer you, forgetting about the reminder question.")]),t._v(" "),e("h3",{attrs:{id:"the-solutions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-solutions"}},[t._v("#")]),t._v(" The solutions")]),t._v(" "),e("p",[t._v("To solve these collision issues, we have implemented what we call "),e("code",[t._v("dialogStates")]),t._v(". You can either do the mapping in the "),e("code",[t._v("__init__")]),t._v(" method, or you can use the "),e("code",[t._v("IntentHandler")]),t._v(" decorator for easier cases.")]),t._v(" "),e("h4",{attrs:{id:"the-decorator-way"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-decorator-way"}},[t._v("#")]),t._v(" The decorator way")]),t._v(" "),e("p",[t._v("First thing, add your method for Alice to ask if the reminder can be safely deleted. I'd imagine this method to be triggered if a reminder was just spoken.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("askDeleteReminder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" siteId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ask"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tsiteId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("siteId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\ttext"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CanTheReminderBeDeleted'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tintentFilter"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerYesOrNo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tcurrentDialogState"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'askingToDeleteReminder'")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Two important things here:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("intentFilter")]),t._v(": This is used to limit the NLU on parsing the user answer on the specified intent. You don't want the user to answer with "),e("code",[t._v("What time is it")]),t._v(", but only with yes or no.")]),t._v(" "),e("li",[e("code",[t._v("currentDialogState")]),t._v(": This is the "),e("strong",[t._v("very")]),t._v(" important part! It tells Alice that she is in dialogue with the user and that the "),e("code",[t._v("state")]),t._v(" or "),e("code",[t._v("next turn")]),t._v(", is "),e("code",[t._v("askingToDeleteReminder")]),t._v(". You can use literally whatever you want here, as long as you remember what you've declared.")])]),t._v(" "),e("p",[t._v("Ok, so the user is going to answer with "),e("code",[t._v("Yes!")]),t._v(". Now we need an intent handler to take care of that!")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@IntentHandler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerYesOrNo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" requiredState"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'askingToDeleteReminder'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("answerDeleteReminder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DialogSession"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Commons"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isYes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endDialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\tsessionId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\ttext"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'okDeleted'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endDialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\tsessionId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\ttext"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'okKeepingIt'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("The important part here is that our "),e("code",[t._v("IntentHandler")]),t._v(" decorator took one more important argument, the "),e("code",[t._v("requiredState")]),t._v(". This means that your skill supports the "),e("code",[t._v("AnswerYesOrNo")]),t._v(" intent "),e("strong",[t._v("only")]),t._v(" if the current dialog state is "),e("code",[t._v("askingToDeleteReminder")]),t._v("! No more collision with other skills!")]),t._v(" "),e("h4",{attrs:{id:"manual-mapping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manual-mapping"}},[t._v("#")]),t._v(" Manual mapping")]),t._v(" "),e("p",[t._v("We call "),e("code",[t._v("mapping")]),t._v(" the declaration of intents vs dialog states. Same example as above, but not by using decorators and adding another intent. It is useful when you have a more complex structure of intents or skill.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AliceSkill "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AliceSkill\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Intent "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Intent\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DialogSession "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" DialogSession\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Reminder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AliceSkill"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Declare our intents")]),t._v("\n\t_INTENT_ANSWER_YES_OR_NO "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Intent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerYesOrNo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t_INTENT_ANSWER_ROOM "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Intent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerRoom'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t_INTENT_ADD_REMINDER "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Intent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NewReminder'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Declare the skill's supported intents")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The two first ones have no direct mapping, the last one directly declares its mapping")]),t._v("\n\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_INTENTS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_INTENT_ANSWER_YES_OR_NO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_INTENT_ANSWER_ROOM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_INTENT_ADD_REMINDER"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addReminder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create a mapping for the intent YES_OR_NO")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Depending on the dialogue state, either answerDeleteReminder or answerReminderIsCorrect will be called")]),t._v("\n\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_INTENT_ANSWER_YES_OR_NO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialogMapping "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'askingToDeleteReminder'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("answerDeleteReminder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'askingIfCorrect'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("answerReminderIsCorrect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create a mapping for the intent AnswerRoom")]),t._v("\n\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_INTENT_ANSWER_ROOM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialogMapping "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'askingWhereToRemind'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addReminder\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t\t"),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_INTENTS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is called directly by the mapping for intents AddReminder and AnswerRoom on lines 18 and 19")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addReminder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DialogSession"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Room'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slots"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("continueDialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t\tsessionId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\ttext"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inWhichRoom'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\tintentFilter"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerRoom'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\tcurrentDialogState"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'askingWhereToRemind'")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("continueDialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\tsessionId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\ttext"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'isItCorrect'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" replace"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slots"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reminder'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tintentFilter"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerYesOrNo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tcurrentDialogState"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'askingIfCorrect'")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This would be called after you've read out loud a reminder")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# It asks if the reminder can be deleted and sets the dialogue state to 'askingToDeleteReminder'")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("askDeleteReminder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" siteId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ask"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\tsiteId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("siteId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\ttext"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CanTheReminderBeDeleted'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tintentFilter"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AnswerYesOrNo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tcurrentDialogState"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'askingToDeleteReminder'")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is called by the intent YesOrNo ONLY if the current dialogue state is 'askingToDeleteReminder'")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# As declared in our mapping on line 25")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("answerDeleteReminder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DialogSession"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Commons"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isYes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endDialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t\tsessionId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\ttext"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'okDeleted'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endDialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t\tsessionId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\ttext"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'okKeepingIt'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is called by the intent YesOrNo ONLY if the current dialogue state is 'askingIfCorrect'")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# As declared in our mapping on line 26")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("answerReminderIsCorrect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DialogSession"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Commons"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isYes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endDialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t\tsessionId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\ttext"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'okAdded'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("continueDialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t\tsessionId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\ttext"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sorryWhatIsItThen'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),e("p",[t._v("The important parts here are how we declare our mappings. You can add as many routes as you wish, just take a look at "),e("a",{attrs:{href:"https://github.com/project-alice-assistant/skill_AliceCore/blob/master/AliceCore.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("AliceCore skill"),e("OutboundLink")],1),t._v(". We are still declaring dialogue states the same in "),e("code",[t._v("continueDialog")]),t._v(". Keep in mind this manual approach is useful for complex structures, and you should take advantage of the decorator approach first!")])])}),[],!1,null,null,null);s.default=a.exports}}]);