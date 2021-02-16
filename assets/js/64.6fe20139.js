(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{545:function(e,t,o){"use strict";o.r(t);var a=o(24),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("The alpha and beta releases are subject to major changes. The target audience is people with some knowledge of their devices, coding, installing python modules and basic stuff!")])]),e._v(" "),o("h1",{attrs:{id:"updating-to-b1-branch-or-above-from-a1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-to-b1-branch-or-above-from-a1"}},[e._v("#")]),e._v(" Updating to B1 branch or above from A1")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.projectalice.io/satsetup/",target:"_blank",rel:"noopener noreferrer"}},[e._v("See Satellite setup"),o("OutboundLink")],1),e._v(" if you don't already have A1 installed")])]),e._v(" "),o("p",[e._v("First double check your satellite is operational on A1")]),e._v(" "),o("p",[e._v("Then in the command line do the following")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("sudo systemctl stop ProjectAlice")])]),e._v(" "),o("li",[o("code",[e._v("git stash")])]),e._v(" "),o("li",[o("code",[e._v("git checkout 1.0.0-b1")])]),e._v(" "),o("li",[o("code",[e._v("sudo apt-get install portaudio19-dev")])]),e._v(" "),o("li",[o("code",[e._v("./venv/bin/pip install importlib_metadata")])]),e._v(" "),o("li",[o("code",[e._v("./venv/bin/pip install webrtcva")])]),e._v(" "),o("li",[o("code",[e._v("./venv/bin/pip install wheel")])]),e._v(" "),o("li",[o("code",[e._v("./venv/bin/pip install pyaudio")])]),e._v(" "),o("li",[o("code",[e._v("sudo systemctl start ProjectAlice")])])]),e._v(" "),o("p",[e._v("To check there are no errors ...")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("tail -f /var/log/syslog")])])]),e._v(" "),o("p",[e._v("If no errors")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("git stash clear")])])]),e._v(" "),o("p",[e._v("If everything goes fine, and you have a satellite displayed in My Home. The satellite icon should now be green showing it's connected.")]),e._v(" "),o("h4",{attrs:{id:"having-issues-with-alice-she-doesn-t-hear-you-doesn-t-seem-to-start"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#having-issues-with-alice-she-doesn-t-hear-you-doesn-t-seem-to-start"}},[e._v("#")]),e._v(" Having issues with Alice? She doesn't hear you? Doesn't seem to start?")]),e._v(" "),o("p",[e._v("Have a look at our "),o("a",{attrs:{href:"https://docs.projectalice.io/satsetup/troubleshooting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Troubleshooting guide"),o("OutboundLink")],1),e._v("!")])])}),[],!1,null,null,null);t.default=s.exports}}]);