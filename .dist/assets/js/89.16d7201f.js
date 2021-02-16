(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{570:function(t,e,s){"use strict";s.r(e);var a=s(24),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"your-first-skill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#your-first-skill"}},[t._v("#")]),t._v(" Your first skill")]),t._v(" "),s("p",[t._v("Ready to create your first skill? See how easy it is to get a new skill up and\nrunning, then we will step through the basic anatomy of a Alice skill.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("This describes functions that are not fully implemented yet")]),t._v(" "),s("ul",[s("li",[t._v("the talk directory has a different structure right now, but will be changed to the one described here")])])]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("p",[t._v("If you haven't already, check out our "),s("RouterLink",{attrs:{to:"/skill-development/"}},[t._v("Introduction to Skill Development")]),t._v(". This walk through assumes you:")],1),t._v(" "),s("ul",[s("li",[t._v("Know some basic knowledge of "),s("a",{attrs:{href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python programming"),s("OutboundLink")],1),t._v(",")]),t._v(" "),s("li",[t._v("have an account on "),s("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github.com"),s("OutboundLink")],1),t._v(", and")]),t._v(" "),s("li",[t._v("have a working version of ProjectAlice.")])]),t._v(" "),s("h2",{attrs:{id:"understand-the-flow-of-your-skill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#understand-the-flow-of-your-skill"}},[t._v("#")]),t._v(" Understand the flow of your skill")]),t._v(" "),s("p",[t._v("It's a good idea to start by writing down how your skill will work, including")]),t._v(" "),s("ul",[s("li",[t._v("What words will the user speak to activate the skill?")]),t._v(" "),s("li",[t._v("What will Alice speak in response?")]),t._v(" "),s("li",[t._v("What data will you need to deliver the skill?")]),t._v(" "),s("li",[t._v("Will you need any additional packages or dependencies?")])]),t._v(" "),s("p",[t._v("Once you've given these some thought, you can get started.")]),t._v(" "),s("h2",{attrs:{id:"structure-of-a-skill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#structure-of-a-skill"}},[t._v("#")]),t._v(" Structure of a skill")]),t._v(" "),s("p",[t._v("If we now navigate to our new skill, we can see that it created the following structure")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├─ dialogTemplate\n│  └─ en.json\n├─ talks\n│  └─ en\n│     └─ talk.json\n├─ HelloWorldSkill.install\n├─ HelloWorldSkill.py\n└─ README.md\n")])])]),s("p",[t._v("We will look at each of these in turn.")]),t._v(" "),s("h3",{attrs:{id:"talks-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#talks-directory"}},[t._v("#")]),t._v(" "),s("code",[t._v("Talks")]),t._v(" directory")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("talks")]),t._v(" directories contains a subdirectory for each spoken language the skill supports. The subdirectories are named using the "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISO639-1 Language Codes"),s("OutboundLink")],1),t._v(" for the language. For example, German is 'de', and English is 'en'.")]),t._v(" "),s("p",[t._v("There will be a subdirectory for each language you selected when creating the skill using the skill Kit.")]),t._v(" "),s("p",[t._v("Each of these subdirectories can include two files. The first one is called "),s("code",[t._v("talk.json")]),t._v(" and the second one "),s("code",[t._v("engine.py")]),t._v(".\nThe "),s("code",[t._v("engine.py")]),t._v(" is intended for more complex use cases where a simple string is not enough for the answer and is not created by default. That's why we will only describe how to create the "),s("code",[t._v("talk.json")]),t._v(" file here, while more information on the topic can be found in the chapter "),s("RouterLink",{attrs:{to:"/skill-development/your-first-skill.html"}},[t._v("Talks")]),t._v(".")],1),t._v(" "),s("p",[t._v("The File created by the skill Kit does only contain some dummy answers that show the structure of the file:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dummy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example sentence"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"another example sentence"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("When instructed to use a particular dialog, Alice will choose one of these sentences at random. This is closer to natural speech. That is, many similar phrases mean the same thing.")]),t._v(" "),s("h3",{attrs:{id:"dialogtemplate-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dialogtemplate-directory"}},[t._v("#")]),t._v(" "),s("code",[t._v("DialogTemplate")]),t._v(" directory")]),t._v(" "),s("p",[t._v("Each skill defines one or more Intents. Intents are defined in the "),s("code",[t._v("dialogTemplate")]),t._v(" directory. The "),s("code",[t._v("dialogTemplate")]),t._v(" directory is organized by language as well, however there is just one json file for each language like "),s("code",[t._v("en.json")]),t._v(" for english.")]),t._v(" "),s("p",[t._v("We will learn about Intents in more detail shortly.")]),t._v(" "),s("h3",{attrs:{id:"helloworldskill-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helloworldskill-py"}},[t._v("#")]),t._v(" HelloWorldSkill.py")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("HelloWorldSkill.py")]),t._v(" file is where most of the skill is defined using Python code. We will learn more about the contents of this file in the next section.")]),t._v(" "),s("p",[t._v("Let's take a look:")]),t._v(" "),s("h4",{attrs:{id:"importing-libraries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#importing-libraries"}},[t._v("#")]),t._v(" Importing libraries")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AliceSkill "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AliceSkill\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DialogSession "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" DialogSession\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Decorators "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" IntentHandler\n")])])]),s("p",[t._v("This section of code imports the required "),s("em",[t._v("libraries")]),t._v(". Some libraries will be required on every skill, and your skill may need to import additional libraries.")]),t._v(" "),s("h4",{attrs:{id:"class-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-definition"}},[t._v("#")]),t._v(" Class definition")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("class")]),t._v(" definition extends the "),s("code",[t._v("AliceSkill")]),t._v(" class:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorldSkill")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AliceSkill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),s("p",[t._v('The class should be named logically, for example "TimeSkill", "WeatherSkill", "NewsSkill", "IPaddressSkill". If you would like guidance on what to call your skill, please join the '),s("a",{attrs:{href:"https://discord.gg/MgJNR9c",target:"_blank",rel:"noopener noreferrer"}},[t._v("skills Channel on our Discord chat"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Inside the class, methods are then defined.")]),t._v(" "),s("h4",{attrs:{id:"init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[t._v("#")]),t._v(" __init__()")]),t._v(" "),s("p",[t._v("This method is the "),s("em",[t._v("constructor")]),t._v(". It is called when the skill is first constructed. It is often used to declare state variables or perform setup actions. You don't have to include the constructor.")]),t._v(" "),s("p",[t._v("An example "),s("code",[t._v("__init__")]),t._v(" method might be:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_offline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n")])])]),s("h4",{attrs:{id:"intent-handlers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intent-handlers"}},[t._v("#")]),t._v(" Intent handlers")]),t._v(" "),s("p",[t._v("Previously the "),s("code",[t._v("__init__")]),t._v(" function was used to register intents, however our new "),s("code",[t._v("@IntentHandler")]),t._v(" decorator is a cleaner way to achieve this.\nIn our current HelloWorldSkill this could be implemented in the following way.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@IntentHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HelloWorldIntent'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("helloWorldIntent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DialogSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endDialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'helloWorld'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("The function receives two "),s("em",[t._v("parameters")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("self")]),t._v(" - a reference to the HelloWorldSkill object itself")]),t._v(" "),s("li",[s("code",[t._v("session")]),t._v(" - an "),s("code",[t._v("DialogSession")]),t._v(" object, that includes information like the "),s("code",[t._v("slots")]),t._v(" an intent was called with")])]),t._v(" "),s("p",[t._v("The intent handler then calls the "),s("code",[t._v("self.endDialog()")]),t._v(" method passing the session to end, and the answer to say. In this case the type of the answer is "),s("code",[t._v("helloWorld")])]),t._v(" "),s("h3",{attrs:{id:"helloworldskill-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helloworldskill-install"}},[t._v("#")]),t._v(" HelloWorldSkill.install")]),t._v(" "),s("p",[t._v("This file defines what is required to get the skill up and running. It includes parameters like the "),s("code",[t._v("version number")]),t._v(", a "),s("code",[t._v("description")]),t._v(", "),s("code",[t._v("supported languages")]),t._v(" and "),s("code",[t._v("conditions")]),t._v(" for your skill to be started.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Pro tip")]),t._v(" "),s("p",[t._v("If you are using an IDE able to handle json schema, it is highly recommended using our "),s("a",{attrs:{href:"https://raw.githubusercontent.com/project-alice-assistant/ProjectAliceSkillKit/master/ProjectAliceSK/validate/src/schemas/install-schema.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install file Schema"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Let's take a look at a basic install file:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloWorldSkill"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icon"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fab fa-battle-net"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"category"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"entertainment"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyGithubUsername"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maintainers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Psycho"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jierka"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"maxbachmann"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"desc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is my first skill for Project Alice"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aliceMinVersion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0-a4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"systemRequirements"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pipRequirements"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"conditions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lang"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"de"')]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" "),s("code",[t._v("name")])]),t._v(" "),s("p",[t._v("Defines the name of the skill. Everything should carry the same name and yes, it is case sensitive!")]),t._v(" "),s("h4",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" "),s("code",[t._v("version")])]),t._v(" "),s("p",[t._v("Defines the current version of your skill, in a 3 positions versioning system, like X.X.X. The first position is used for major releases, the second is used for improved or added functions to current release, and the third one is commonly used for hotfixes.")]),t._v(" "),s("h4",{attrs:{id:"icon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icon"}},[t._v("#")]),t._v(" "),s("code",[t._v("icon")])]),t._v(" "),s("p",[t._v("This is the icon that will be displayed for your skill on the skill store. It supports "),s("a",{attrs:{href:"https://fontawesome.com/icons?d=gallery&m=free",target:"_blank",rel:"noopener noreferrer"}},[t._v("any free Font Awesome icons"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"category"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#category"}},[t._v("#")]),t._v(" "),s("code",[t._v("category")])]),t._v(" "),s("p",[t._v("Defines a category your skill belongs to. This helps categorize your skill to better search results on the store. Available categories:")]),t._v(" "),s("ul",[s("li",[t._v("weather")]),t._v(" "),s("li",[t._v("information")]),t._v(" "),s("li",[t._v("entertainment")]),t._v(" "),s("li",[t._v("music")]),t._v(" "),s("li",[t._v("game")]),t._v(" "),s("li",[t._v("kid")]),t._v(" "),s("li",[t._v("automation")]),t._v(" "),s("li",[t._v("assistance")]),t._v(" "),s("li",[t._v("security")]),t._v(" "),s("li",[t._v("planning")]),t._v(" "),s("li",[t._v("shopping")]),t._v(" "),s("li",[t._v("organisation")]),t._v(" "),s("li",[t._v("household")]),t._v(" "),s("li",[t._v("health")])]),t._v(" "),s("h4",{attrs:{id:"author"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[t._v("#")]),t._v(" "),s("code",[t._v("author")])]),t._v(" "),s("p",[t._v("This is you! Make sure to use the same github username!")]),t._v(" "),s("h4",{attrs:{id:"maintainers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maintainers"}},[t._v("#")]),t._v(" "),s("code",[t._v("maintainers")])]),t._v(" "),s("p",[t._v("We believe in sharing, and people helping you should also be rewarded for their input. If you improve a skill that isn't yours, add yourself into the maintainers list!")]),t._v(" "),s("h4",{attrs:{id:"desc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#desc"}},[t._v("#")]),t._v(" "),s("code",[t._v("desc")])]),t._v(" "),s("p",[t._v("A description of what your skill does")]),t._v(" "),s("h4",{attrs:{id:"aliceminversion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliceminversion"}},[t._v("#")]),t._v(" "),s("code",[t._v("aliceMinVersion")])]),t._v(" "),s("p",[t._v("The minimum ALICE version other users must be running for this skill to be usable. This is useful if your skill is using alpha or beta functions not yet available to everyone")]),t._v(" "),s("h4",{attrs:{id:"systemrequirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#systemrequirements"}},[t._v("#")]),t._v(" "),s("code",[t._v("systemRequirements")])]),t._v(" "),s("p",[t._v("Whatever you add here will be installed using "),s("code",[t._v("apt install")])]),t._v(" "),s("h4",{attrs:{id:"piprequirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#piprequirements"}},[t._v("#")]),t._v(" "),s("code",[t._v("pipRequirements")])]),t._v(" "),s("p",[t._v("Whatever you add here will be installed using "),s("code",[t._v("pip install --no-cache")])]),t._v(" "),s("h4",{attrs:{id:"script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script"}},[t._v("#")]),t._v(" "),s("code",[t._v("script")])]),t._v(" "),s("p",[t._v("By specifying a shell script name here, the script will be run after installation. The script must be placed in your skill root directory. It is very usefull for a skill that needs to git clone a repo per exemple!")]),t._v(" "),s("h4",{attrs:{id:"conditions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conditions"}},[t._v("#")]),t._v(" "),s("code",[t._v("conditions")])]),t._v(" "),s("p",[t._v("This is where you define conditions for your skill to run. Let's say your skill is only english, german users won't be able to use it. There's quite a few conditions you can use:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("lang")]),t._v(" "),s("td",[t._v("Define the languages that are supported. User running languages not listed here won't be able to use your skill")])]),t._v(" "),s("tr",[s("td",[t._v("online")]),t._v(" "),s("td",[t._v("If set to true, your skill will only be usable for users not enforcing offline only for Alice")])]),t._v(" "),s("tr",[s("td",[t._v("skill")]),t._v(" "),s("td",[t._v("This lists other skills needed for your to run. The skill must be installed and activated! In case the skill is missing, it will be automatically downloaded")])]),t._v(" "),s("tr",[s("td",[t._v("notSkill")]),t._v(" "),s("td",[t._v("Add any skills here that are known to conflict with yours. If any of the listed skills are detected, your skill won't install")])]),t._v(" "),s("tr",[s("td",[t._v("asrArbitraryCapture")]),t._v(" "),s("td",[t._v("If set to true, the user must use an ASR that is able to capture any text spoken to it and not only intent trained text")])]),t._v(" "),s("tr",[s("td",[t._v("activeManager")]),t._v(" "),s("td",[t._v("List managers here that need to be active for your skill to run. This only concerns managers that can be deactivated, such as "),s("code",[t._v("InterfaceManager")])])])])]),t._v(" "),s("h3",{attrs:{id:"readme-md"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#readme-md"}},[t._v("#")]),t._v(" README.md")]),t._v(" "),s("p",[t._v("The README file contains human readable information about your skill.")]),t._v(" "),s("h3",{attrs:{id:"instructions-md"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instructions-md"}},[t._v("#")]),t._v(" instructions.md")]),t._v(" "),s("p",[t._v("Your skill requires some extra steps to run, like activating an API, setting up another system, modifying the hardware of that awesome remote?")]),t._v(" "),s("ul",[s("li",[t._v("Create a directory at your skill root")]),t._v(" "),s("li",[t._v("Name it "),s("code",[t._v("instructions")])]),t._v(" "),s("li",[t._v("Create a file in that "),s("code",[t._v("instructions")]),t._v(" directory, name it "),s("code",[t._v("en.md")]),t._v(", or the language code it is written in, as per example "),s("code",[t._v("fr.md")]),t._v(".")]),t._v(" "),s("li",[t._v("Put all your instructions into that file.")])]),t._v(" "),s("p",[t._v("The content of this file is accessible on the interface on the skills page, and will automatically pop up whenever the skill is installed and/or updated.")]),t._v(" "),s("h2",{attrs:{id:"what-have-we-learned"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-have-we-learned"}},[t._v("#")]),t._v(" What have we learned")]),t._v(" "),s("p",[t._v("You have now successfully created a new skill and have an understanding of the basic components that make up an Alice skill. Next we will dive into each component in more detail.")])])}),[],!1,null,null,null);e.default=n.exports}}]);