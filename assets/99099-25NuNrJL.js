import { I as withCtx, M as openBlock, P as resolveComponent, _ as createTextVNode, f as createBaseVNode, g as createStaticVNode, h as createElementBlock, t as _plugin_vue_export_helper_default, v as createVNode } from "./app-DUIAj6gi.js";
//#region docs/devices/99099.md
var _pageData = JSON.parse("{\"path\":\"/devices/99099.html\",\"title\":\"EGLO 99099 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"EGLO 99099 control via MQTT\",\"description\":\"Integrate your EGLO 99099 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-06-27T19:46:17.000Z\"},\"git\":{\"updatedTime\":1767898843000,\"contributors\":[{\"name\":\"Kacper Sobek\",\"username\":\"\",\"email\":\"kontakt.9mrcookie9@gmail.com\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":7},{\"name\":\"Andrew Berry\",\"username\":\"\",\"email\":\"andrew@furrypaws.ca\",\"commits\":1},{\"name\":\"Dennis Jung\",\"username\":\"\",\"email\":\"dennis.max.jung@gmail.com\",\"commits\":1},{\"name\":\"koenkk\",\"username\":\"koenkk\",\"email\":\"koenkanters94@gmail.com\",\"commits\":1,\"url\":\"https://github.com/koenkk\"},{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Nerivec\"},{\"name\":\"MagelanM\",\"username\":\"MagelanM\",\"email\":\"60119223+MagelanM@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/MagelanM\"}],\"changelog\":[{\"hash\":\"4cea0d93da467367ca7a0fab036011ff6552848e\",\"time\":1767898843000,\"email\":\"60119223+MagelanM@users.noreply.github.com\",\"author\":\"MagelanM\",\"message\":\"Additional note for unusable buttons (#4684)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"da1b874af22327b333a32aac7682e2e1d8f498f4\",\"time\":1739891375000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"fix: Update to new ZHC API (#3527)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"707d7e54d6545ef4745398da456aeb2977174d54\",\"time\":1738441259000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 21.27.1\"},{\"hash\":\"e41c3889eb10d18e610e33d6a064e0ff0a08b3c9\",\"time\":1707249617000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.28.3\"},{\"hash\":\"83ee67637c7837288e205bcd8ea2e144b9bd9386\",\"time\":1688061691000,\"email\":\"dennis.max.jung@gmail.com\",\"author\":\"Dennis Jung\",\"message\":\"Update zigbee-herdsman-converters to 15.32.0 (#2108)\"},{\"hash\":\"231d94d1da6c274f385dc0a286a574e3a3c43605\",\"time\":1684960025000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Generate some device notes (#2054)\"},{\"hash\":\"1451bd918b172c40d2d57b7b8b2999957233b9fe\",\"time\":1669912138000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 14.0.680\"},{\"hash\":\"c142abdf3c5317f50b268dff51faa50d4dff89fb\",\"time\":1668967366000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Run docgen\"},{\"hash\":\"1a2c58075413d0c1faea1d5fee0e72c4afec0653\",\"time\":1646670307000,\"email\":\"andrew@furrypaws.ca\",\"author\":\"Andrew Berry\",\"message\":\"Add missing apostrophe in posessive (#1277)\"},{\"hash\":\"391b9d16aab2929260aac5d4a953f20568788a9c\",\"time\":1646150005000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 14.0.438\"},{\"hash\":\"2aee3ab75f79c41e8f554506f443215145316e9d\",\"time\":1644763182000,\"email\":\"kontakt.9mrcookie9@gmail.com\",\"author\":\"Kacper Sobek\",\"message\":\"Prepared documentation for Awox 33952 (#1232)\"}]},\"filePathRelative\":\"devices/99099.md\"}");
var _sfc_main = { name: "99099.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "eglo-99099",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#eglo-99099"
		}, [createBaseVNode("span", null, "EGLO 99099")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "99099")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=EGLO" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("EGLO", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "3 groups remote controller")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action, action_group")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/99099.png",
				alt: "EGLO 99099"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createBaseVNode("h3", {
			id: "unsupported-buttons",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#unsupported-buttons"
		}, [createBaseVNode("span", null, "Unsupported buttons")])], -1)),
		_cache[10] || (_cache[10] = createBaseVNode("p", null, "The group buttons 1, 2, or 3 and the buttons for the two favorite buttons (heart) cannot be used via a Zigbee network, as the remote control only sends the events directly to the light when directly paired with an EGLO light.", -1)),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[12] || (_cache[12] = createStaticVNode("<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>red</code>, <code>refresh</code>, <code>refresh_colored</code>, <code>blue</code>, <code>yellow</code>, <code>green</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>recall_1</code>, <code>color_temperature_step_up</code>, <code>color_temperature_step_down</code>.</p><h3 id=\"action-group-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-group-numeric\"><span>Action group (numeric)</span></a></h3><p>Value can be found in the published state on the <code>action_group</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>", 7))
	]);
}
var _99099_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _99099_default as default };
