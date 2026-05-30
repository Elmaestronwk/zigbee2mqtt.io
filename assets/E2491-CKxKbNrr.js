import { I as withCtx, M as openBlock, P as resolveComponent, _ as createTextVNode, f as createBaseVNode, g as createStaticVNode, h as createElementBlock, t as _plugin_vue_export_helper_default, v as createVNode } from "./app-DUIAj6gi.js";
//#region docs/devices/E2491.md
var _pageData = JSON.parse("{\"path\":\"/devices/E2491.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"keepRedirect\":true,\"head\":[[\"meta\",{\"http-equiv\":\"refresh\",\"content\":\"0; URL=https://www.zigbee2mqtt.io/devices/E2435_E2491.html\"}],[\"link\",{\"rel\":\"canonical\",\"href\":\"https://www.zigbee2mqtt.io/devices/E2435_E2491.html\"}]]},\"git\":{\"updatedTime\":1775458437000,\"contributors\":[{\"name\":\"Andrei LAZAROV\",\"username\":\"\",\"email\":\"andrei_lazarov@yahoo.com\",\"commits\":2},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":1},{\"name\":\"Wayne Shih\",\"username\":\"\",\"email\":\"0x26@wayneshih.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"7a885a7a3faaeca5320abb03a311372cfd770e8f\",\"time\":1775458437000,\"email\":\"0x26@wayneshih.com\",\"author\":\"Wayne Shih\",\"message\":\"fix: clarify pairing instructions for E2491 (#4996)\"},{\"hash\":\"8293ffc260c4f74bb6e39d81eb418259c73e6e04\",\"time\":1775072473000,\"email\":\"andrei_lazarov@yahoo.com\",\"author\":\"Andrei LAZAROV\",\"message\":\"Add IKEA TOFSMYGGA plug (#4973)\"},{\"hash\":\"934b222f1a779f20231d23c8d061cac3bbfec767\",\"time\":1774984782000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc to 26.27.0\"},{\"hash\":\"b0281c7cde989fb7122134f6fc7c1b58e550cebd\",\"time\":1774198415000,\"email\":\"andrei_lazarov@yahoo.com\",\"author\":\"Andrei LAZAROV\",\"message\":\"Add E2491 IKEA GRILLPLATS plug (#4947)\"}]},\"filePathRelative\":\"devices/E2491.md\"}");
var _sfc_main = { name: "E2491.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[3] || (_cache[3] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>You must go through this sequence to pair the plug:</p><ol><li><strong>Hold the button until the LED flashes red and then stops (~10 seconds) to perform a factory reset.</strong><br> The plug is now in Thread pairing mode</li><li><strong>Press the button 4 times</strong></li><li><strong>Press the button 8 times.</strong><br> The plug is now in Zigbee pairing mode</li></ol>", 4)),
		createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createTextVNode("Alternatively, reset it with ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Touchlink", -1)])]),
				_: 1
			}),
			_cache[2] || (_cache[2] = createTextVNode(".", -1))
		]),
		_cache[4] || (_cache[4] = createStaticVNode("<h3 id=\"firmware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#firmware\"><span>Firmware</span></a></h3><ul><li>Initial batches come with v1.3.11 (20250827) preinstalled</li><li>Updates are provided over Matter.<br> Move the device to a Thread hub to update</li><li>See the available versions <a href=\"https://webui.dcl.csa-iot.org/models\" target=\"_blank\" rel=\"noopener noreferrer\">here</a> (search <em>GRILLPLATS</em> or <em>4476</em>)</li></ul>", 2))
	]);
}
var E2491_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, E2491_default as default };
