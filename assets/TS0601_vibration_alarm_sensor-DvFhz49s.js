import { I as withCtx, M as openBlock, P as resolveComponent, _ as createTextVNode, f as createBaseVNode, g as createStaticVNode, h as createElementBlock, t as _plugin_vue_export_helper_default, v as createVNode } from "./app-DUIAj6gi.js";
//#region docs/devices/TS0601_vibration_alarm_sensor.md
var _pageData = JSON.parse("{\"path\":\"/devices/TS0601_vibration_alarm_sensor.html\",\"title\":\"Tuya TS0601_vibration_alarm_sensor control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya TS0601_vibration_alarm_sensor control via MQTT\",\"description\":\"Integrate your Tuya TS0601_vibration_alarm_sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-04-30T19:57:27.000Z\"},\"git\":{\"updatedTime\":1777579890000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"c6635419f9d2bcbfb7d60bdc6f1dd80d5d988029\",\"time\":1777579890000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"3849d031e5d90cb5023b0027a9cbc582961c61ed\",\"time\":1769866618000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"}]},\"filePathRelative\":\"devices/TS0601_vibration_alarm_sensor.md\"}");
var _sfc_main = { name: "TS0601_vibration_alarm_sensor.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "tuya-ts0601-vibration-alarm-sensor",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-ts0601-vibration-alarm-sensor"
		}, [createBaseVNode("span", null, "Tuya TS0601_vibration_alarm_sensor")])], -1)),
		createBaseVNode("table", null, [_cache[7] || (_cache[7] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "TS0601_vibration_alarm_sensor")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Vibration alarm sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "alarm_status, sensitivity, disarm, silence_mode, battery_state")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/TS0601_vibration_alarm_sensor.png",
				alt: "Tuya TS0601_vibration_alarm_sensor"
			})])], -1)),
			_cache[6] || (_cache[6] = createBaseVNode("tr", null, [createBaseVNode("td", null, "White-label"), createBaseVNode("td", null, "Lincukoo V04-Z20T, Nous E14")], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"alarm-status-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#alarm-status-enum\"><span>Alarm status (enum)</span></a></h3><p>device alarm status. Value can be found in the published state on the <code>alarm_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>normal</code>, <code>alarm</code>.</p><h3 id=\"sensitivity-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#sensitivity-enum\"><span>Sensitivity (enum)</span></a></h3><p>Sensitivity of the sensor. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>middle</code>, <code>high</code>.</p><h3 id=\"disarm-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#disarm-enum\"><span>Disarm (enum)</span></a></h3><p>Disarm the current alarm. Value can be found in the published state on the <code>disarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;disarm&quot;: NEW_VALUE}</code>. The possible values are: <code>normal</code>.</p><h3 id=\"silence-mode-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#silence-mode-binary\"><span>Silence mode (binary)</span></a></h3><p>enable/disable alarm. Value can be found in the published state on the <code>silence_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence_mode&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> silence mode is ON, if <code>OFF</code> OFF.</p><h3 id=\"battery-state-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-state-enum\"><span>Battery state (enum)</span></a></h3><p>battery state of the sensor. Value can be found in the published state on the <code>battery_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>middle</code>, <code>high</code>.</p>", 11))
	]);
}
var TS0601_vibration_alarm_sensor_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, TS0601_vibration_alarm_sensor_default as default };
