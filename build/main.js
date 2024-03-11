var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => {
  return (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);

// node_modules/@create-figma-plugin/utilities/lib/ui.js
function showUI(options, data) {
  if (typeof __html__ === "undefined") {
    throw new Error("No UI defined");
  }
  const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}</script>`;
  figma.showUI(html, __spreadProps(__spreadValues({}, options), {
    themeColors: typeof options.themeColors === "undefined" ? true : options.themeColors
  }));
}
var init_ui = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
  }
});

// node_modules/@create-figma-plugin/utilities/lib/index.js
var init_lib = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
    init_ui();
  }
});

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map2) {
        var index = -1, result = Array(map2.size);
        map2.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _2.defaults(root.Object(), context, _2.pick(root, contextProps));
        var Array2 = context.Array, Date = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes3 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes3 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes3 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes3(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes3 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes3(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes3(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes3 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes3 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes3 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes3(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map3, key) {
          var data = map3.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq2(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter2(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map2(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes2(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map2(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape2(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter2;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map2;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq2;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes2;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape2;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _2 = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _2;
        define(function() {
          return _2;
        });
      } else if (freeModule) {
        (freeModule.exports = _2)._ = _2;
        freeExports._ = _2;
      } else {
        root._ = _2;
      }
    }).call(exports);
  }
});

// node_modules/lodash/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash/index.js"(exports, module) {
    module.exports = require_lodash();
  }
});

// node_modules/chroma-js/src/utils/limit.js
var require_limit = __commonJS({
  "node_modules/chroma-js/src/utils/limit.js"(exports, module) {
    module.exports = (x, min = 0, max = 1) => {
      return x < min ? min : x > max ? max : x;
    };
  }
});

// node_modules/chroma-js/src/utils/clip_rgb.js
var require_clip_rgb = __commonJS({
  "node_modules/chroma-js/src/utils/clip_rgb.js"(exports, module) {
    var limit = require_limit();
    module.exports = (rgb) => {
      rgb._clipped = false;
      rgb._unclipped = rgb.slice(0);
      for (let i = 0; i <= 3; i++) {
        if (i < 3) {
          if (rgb[i] < 0 || rgb[i] > 255)
            rgb._clipped = true;
          rgb[i] = limit(rgb[i], 0, 255);
        } else if (i === 3) {
          rgb[i] = limit(rgb[i], 0, 1);
        }
      }
      return rgb;
    };
  }
});

// node_modules/chroma-js/src/utils/type.js
var require_type = __commonJS({
  "node_modules/chroma-js/src/utils/type.js"(exports, module) {
    var classToType = {};
    for (let name of ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]) {
      classToType[`[object ${name}]`] = name.toLowerCase();
    }
    module.exports = function(obj) {
      return classToType[Object.prototype.toString.call(obj)] || "object";
    };
  }
});

// node_modules/chroma-js/src/utils/unpack.js
var require_unpack = __commonJS({
  "node_modules/chroma-js/src/utils/unpack.js"(exports, module) {
    var type = require_type();
    module.exports = (args, keyOrder = null) => {
      if (args.length >= 3)
        return Array.prototype.slice.call(args);
      if (type(args[0]) == "object" && keyOrder) {
        return keyOrder.split("").filter((k) => args[0][k] !== void 0).map((k) => args[0][k]);
      }
      return args[0];
    };
  }
});

// node_modules/chroma-js/src/utils/last.js
var require_last = __commonJS({
  "node_modules/chroma-js/src/utils/last.js"(exports, module) {
    var type = require_type();
    module.exports = (args) => {
      if (args.length < 2)
        return null;
      const l = args.length - 1;
      if (type(args[l]) == "string")
        return args[l].toLowerCase();
      return null;
    };
  }
});

// node_modules/chroma-js/src/utils/index.js
var require_utils = __commonJS({
  "node_modules/chroma-js/src/utils/index.js"(exports, module) {
    var PI = Math.PI;
    module.exports = {
      clip_rgb: require_clip_rgb(),
      limit: require_limit(),
      type: require_type(),
      unpack: require_unpack(),
      last: require_last(),
      PI,
      TWOPI: PI * 2,
      PITHIRD: PI / 3,
      DEG2RAD: PI / 180,
      RAD2DEG: 180 / PI
    };
  }
});

// node_modules/chroma-js/src/io/input.js
var require_input = __commonJS({
  "node_modules/chroma-js/src/io/input.js"(exports, module) {
    module.exports = {
      format: {},
      autodetect: []
    };
  }
});

// node_modules/chroma-js/src/Color.js
var require_Color = __commonJS({
  "node_modules/chroma-js/src/Color.js"(exports, module) {
    var { last, clip_rgb, type } = require_utils();
    var _input = require_input();
    var Color = class {
      constructor(...args) {
        const me = this;
        if (type(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) {
          return args[0];
        }
        let mode = last(args);
        let autodetect = false;
        if (!mode) {
          autodetect = true;
          if (!_input.sorted) {
            _input.autodetect = _input.autodetect.sort((a, b) => b.p - a.p);
            _input.sorted = true;
          }
          for (let chk of _input.autodetect) {
            mode = chk.test(...args);
            if (mode)
              break;
          }
        }
        if (_input.format[mode]) {
          const rgb = _input.format[mode].apply(null, autodetect ? args : args.slice(0, -1));
          me._rgb = clip_rgb(rgb);
        } else {
          throw new Error("unknown format: " + args);
        }
        if (me._rgb.length === 3)
          me._rgb.push(1);
      }
      toString() {
        if (type(this.hex) == "function")
          return this.hex();
        return `[${this._rgb.join(",")}]`;
      }
    };
    module.exports = Color;
  }
});

// node_modules/chroma-js/src/chroma.js
var require_chroma = __commonJS({
  "node_modules/chroma-js/src/chroma.js"(exports, module) {
    var chroma3 = (...args) => {
      return new chroma3.Color(...args);
    };
    chroma3.Color = require_Color();
    chroma3.version = "@@version";
    module.exports = chroma3;
  }
});

// node_modules/chroma-js/src/io/cmyk/rgb2cmyk.js
var require_rgb2cmyk = __commonJS({
  "node_modules/chroma-js/src/io/cmyk/rgb2cmyk.js"(exports, module) {
    var { unpack } = require_utils();
    var { max } = Math;
    var rgb2cmyk = (...args) => {
      let [r, g, b] = unpack(args, "rgb");
      r = r / 255;
      g = g / 255;
      b = b / 255;
      const k = 1 - max(r, max(g, b));
      const f = k < 1 ? 1 / (1 - k) : 0;
      const c = (1 - r - k) * f;
      const m = (1 - g - k) * f;
      const y = (1 - b - k) * f;
      return [c, m, y, k];
    };
    module.exports = rgb2cmyk;
  }
});

// node_modules/chroma-js/src/io/cmyk/cmyk2rgb.js
var require_cmyk2rgb = __commonJS({
  "node_modules/chroma-js/src/io/cmyk/cmyk2rgb.js"(exports, module) {
    var { unpack } = require_utils();
    var cmyk2rgb = (...args) => {
      args = unpack(args, "cmyk");
      const [c, m, y, k] = args;
      const alpha = args.length > 4 ? args[4] : 1;
      if (k === 1)
        return [0, 0, 0, alpha];
      return [
        c >= 1 ? 0 : 255 * (1 - c) * (1 - k),
        // r
        m >= 1 ? 0 : 255 * (1 - m) * (1 - k),
        // g
        y >= 1 ? 0 : 255 * (1 - y) * (1 - k),
        // b
        alpha
      ];
    };
    module.exports = cmyk2rgb;
  }
});

// node_modules/chroma-js/src/io/cmyk/index.js
var require_cmyk = __commonJS({
  "node_modules/chroma-js/src/io/cmyk/index.js"() {
    var chroma3 = require_chroma();
    var Color = require_Color();
    var input = require_input();
    var { unpack, type } = require_utils();
    var rgb2cmyk = require_rgb2cmyk();
    Color.prototype.cmyk = function() {
      return rgb2cmyk(this._rgb);
    };
    chroma3.cmyk = (...args) => new Color(...args, "cmyk");
    input.format.cmyk = require_cmyk2rgb();
    input.autodetect.push({
      p: 2,
      test: (...args) => {
        args = unpack(args, "cmyk");
        if (type(args) === "array" && args.length === 4) {
          return "cmyk";
        }
      }
    });
  }
});

// node_modules/chroma-js/src/io/css/hsl2css.js
var require_hsl2css = __commonJS({
  "node_modules/chroma-js/src/io/css/hsl2css.js"(exports, module) {
    var { unpack, last } = require_utils();
    var rnd = (a) => Math.round(a * 100) / 100;
    var hsl2css = (...args) => {
      const hsla = unpack(args, "hsla");
      let mode = last(args) || "lsa";
      hsla[0] = rnd(hsla[0] || 0);
      hsla[1] = rnd(hsla[1] * 100) + "%";
      hsla[2] = rnd(hsla[2] * 100) + "%";
      if (mode === "hsla" || hsla.length > 3 && hsla[3] < 1) {
        hsla[3] = hsla.length > 3 ? hsla[3] : 1;
        mode = "hsla";
      } else {
        hsla.length = 3;
      }
      return `${mode}(${hsla.join(",")})`;
    };
    module.exports = hsl2css;
  }
});

// node_modules/chroma-js/src/io/hsl/rgb2hsl.js
var require_rgb2hsl = __commonJS({
  "node_modules/chroma-js/src/io/hsl/rgb2hsl.js"(exports, module) {
    var { unpack } = require_utils();
    var rgb2hsl = (...args) => {
      args = unpack(args, "rgba");
      let [r, g, b] = args;
      r /= 255;
      g /= 255;
      b /= 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const l = (max + min) / 2;
      let s, h;
      if (max === min) {
        s = 0;
        h = Number.NaN;
      } else {
        s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
      }
      if (r == max)
        h = (g - b) / (max - min);
      else if (g == max)
        h = 2 + (b - r) / (max - min);
      else if (b == max)
        h = 4 + (r - g) / (max - min);
      h *= 60;
      if (h < 0)
        h += 360;
      if (args.length > 3 && args[3] !== void 0)
        return [h, s, l, args[3]];
      return [h, s, l];
    };
    module.exports = rgb2hsl;
  }
});

// node_modules/chroma-js/src/io/css/rgb2css.js
var require_rgb2css = __commonJS({
  "node_modules/chroma-js/src/io/css/rgb2css.js"(exports, module) {
    var { unpack, last } = require_utils();
    var hsl2css = require_hsl2css();
    var rgb2hsl = require_rgb2hsl();
    var { round } = Math;
    var rgb2css = (...args) => {
      const rgba = unpack(args, "rgba");
      let mode = last(args) || "rgb";
      if (mode.substr(0, 3) == "hsl") {
        return hsl2css(rgb2hsl(rgba), mode);
      }
      rgba[0] = round(rgba[0]);
      rgba[1] = round(rgba[1]);
      rgba[2] = round(rgba[2]);
      if (mode === "rgba" || rgba.length > 3 && rgba[3] < 1) {
        rgba[3] = rgba.length > 3 ? rgba[3] : 1;
        mode = "rgba";
      }
      return `${mode}(${rgba.slice(0, mode === "rgb" ? 3 : 4).join(",")})`;
    };
    module.exports = rgb2css;
  }
});

// node_modules/chroma-js/src/io/hsl/hsl2rgb.js
var require_hsl2rgb = __commonJS({
  "node_modules/chroma-js/src/io/hsl/hsl2rgb.js"(exports, module) {
    var { unpack } = require_utils();
    var { round } = Math;
    var hsl2rgb = (...args) => {
      args = unpack(args, "hsl");
      const [h, s, l] = args;
      let r, g, b;
      if (s === 0) {
        r = g = b = l * 255;
      } else {
        const t3 = [0, 0, 0];
        const c = [0, 0, 0];
        const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const t1 = 2 * l - t2;
        const h_ = h / 360;
        t3[0] = h_ + 1 / 3;
        t3[1] = h_;
        t3[2] = h_ - 1 / 3;
        for (let i = 0; i < 3; i++) {
          if (t3[i] < 0)
            t3[i] += 1;
          if (t3[i] > 1)
            t3[i] -= 1;
          if (6 * t3[i] < 1)
            c[i] = t1 + (t2 - t1) * 6 * t3[i];
          else if (2 * t3[i] < 1)
            c[i] = t2;
          else if (3 * t3[i] < 2)
            c[i] = t1 + (t2 - t1) * (2 / 3 - t3[i]) * 6;
          else
            c[i] = t1;
        }
        [r, g, b] = [round(c[0] * 255), round(c[1] * 255), round(c[2] * 255)];
      }
      if (args.length > 3) {
        return [r, g, b, args[3]];
      }
      return [r, g, b, 1];
    };
    module.exports = hsl2rgb;
  }
});

// node_modules/chroma-js/src/io/css/css2rgb.js
var require_css2rgb = __commonJS({
  "node_modules/chroma-js/src/io/css/css2rgb.js"(exports, module) {
    var hsl2rgb = require_hsl2rgb();
    var input = require_input();
    var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
    var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var { round } = Math;
    var css2rgb = (css) => {
      css = css.toLowerCase().trim();
      let m;
      if (input.format.named) {
        try {
          return input.format.named(css);
        } catch (e) {
        }
      }
      if (m = css.match(RE_RGB)) {
        const rgb = m.slice(1, 4);
        for (let i = 0; i < 3; i++) {
          rgb[i] = +rgb[i];
        }
        rgb[3] = 1;
        return rgb;
      }
      if (m = css.match(RE_RGBA)) {
        const rgb = m.slice(1, 5);
        for (let i = 0; i < 4; i++) {
          rgb[i] = +rgb[i];
        }
        return rgb;
      }
      if (m = css.match(RE_RGB_PCT)) {
        const rgb = m.slice(1, 4);
        for (let i = 0; i < 3; i++) {
          rgb[i] = round(rgb[i] * 2.55);
        }
        rgb[3] = 1;
        return rgb;
      }
      if (m = css.match(RE_RGBA_PCT)) {
        const rgb = m.slice(1, 5);
        for (let i = 0; i < 3; i++) {
          rgb[i] = round(rgb[i] * 2.55);
        }
        rgb[3] = +rgb[3];
        return rgb;
      }
      if (m = css.match(RE_HSL)) {
        const hsl = m.slice(1, 4);
        hsl[1] *= 0.01;
        hsl[2] *= 0.01;
        const rgb = hsl2rgb(hsl);
        rgb[3] = 1;
        return rgb;
      }
      if (m = css.match(RE_HSLA)) {
        const hsl = m.slice(1, 4);
        hsl[1] *= 0.01;
        hsl[2] *= 0.01;
        const rgb = hsl2rgb(hsl);
        rgb[3] = +m[4];
        return rgb;
      }
    };
    css2rgb.test = (s) => {
      return RE_RGB.test(s) || RE_RGBA.test(s) || RE_RGB_PCT.test(s) || RE_RGBA_PCT.test(s) || RE_HSL.test(s) || RE_HSLA.test(s);
    };
    module.exports = css2rgb;
  }
});

// node_modules/chroma-js/src/io/css/index.js
var require_css = __commonJS({
  "node_modules/chroma-js/src/io/css/index.js"() {
    var chroma3 = require_chroma();
    var Color = require_Color();
    var input = require_input();
    var { type } = require_utils();
    var rgb2css = require_rgb2css();
    var css2rgb = require_css2rgb();
    Color.prototype.css = function(mode) {
      return rgb2css(this._rgb, mode);
    };
    chroma3.css = (...args) => new Color(...args, "css");
    input.format.css = css2rgb;
    input.autodetect.push({
      p: 5,
      test: (h, ...rest) => {
        if (!rest.length && type(h) === "string" && css2rgb.test(h)) {
          return "css";
        }
      }
    });
  }
});

// node_modules/chroma-js/src/io/gl/index.js
var require_gl = __commonJS({
  "node_modules/chroma-js/src/io/gl/index.js"() {
    var Color = require_Color();
    var chroma3 = require_chroma();
    var input = require_input();
    var { unpack } = require_utils();
    input.format.gl = (...args) => {
      const rgb = unpack(args, "rgba");
      rgb[0] *= 255;
      rgb[1] *= 255;
      rgb[2] *= 255;
      return rgb;
    };
    chroma3.gl = (...args) => new Color(...args, "gl");
    Color.prototype.gl = function() {
      const rgb = this._rgb;
      return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
    };
  }
});

// node_modules/chroma-js/src/io/hcg/rgb2hcg.js
var require_rgb2hcg = __commonJS({
  "node_modules/chroma-js/src/io/hcg/rgb2hcg.js"(exports, module) {
    var { unpack } = require_utils();
    var rgb2hcg = (...args) => {
      const [r, g, b] = unpack(args, "rgb");
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      const c = delta * 100 / 255;
      const _g = min / (255 - delta) * 100;
      let h;
      if (delta === 0) {
        h = Number.NaN;
      } else {
        if (r === max)
          h = (g - b) / delta;
        if (g === max)
          h = 2 + (b - r) / delta;
        if (b === max)
          h = 4 + (r - g) / delta;
        h *= 60;
        if (h < 0)
          h += 360;
      }
      return [h, c, _g];
    };
    module.exports = rgb2hcg;
  }
});

// node_modules/chroma-js/src/io/hcg/hcg2rgb.js
var require_hcg2rgb = __commonJS({
  "node_modules/chroma-js/src/io/hcg/hcg2rgb.js"(exports, module) {
    var { unpack } = require_utils();
    var { floor } = Math;
    var hcg2rgb = (...args) => {
      args = unpack(args, "hcg");
      let [h, c, _g] = args;
      let r, g, b;
      _g = _g * 255;
      const _c = c * 255;
      if (c === 0) {
        r = g = b = _g;
      } else {
        if (h === 360)
          h = 0;
        if (h > 360)
          h -= 360;
        if (h < 0)
          h += 360;
        h /= 60;
        const i = floor(h);
        const f = h - i;
        const p = _g * (1 - c);
        const q = p + _c * (1 - f);
        const t = p + _c * f;
        const v = p + _c;
        switch (i) {
          case 0:
            [r, g, b] = [v, t, p];
            break;
          case 1:
            [r, g, b] = [q, v, p];
            break;
          case 2:
            [r, g, b] = [p, v, t];
            break;
          case 3:
            [r, g, b] = [p, q, v];
            break;
          case 4:
            [r, g, b] = [t, p, v];
            break;
          case 5:
            [r, g, b] = [v, p, q];
            break;
        }
      }
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
    module.exports = hcg2rgb;
  }
});

// node_modules/chroma-js/src/io/hcg/index.js
var require_hcg = __commonJS({
  "node_modules/chroma-js/src/io/hcg/index.js"() {
    var { unpack, type } = require_utils();
    var chroma3 = require_chroma();
    var Color = require_Color();
    var input = require_input();
    var rgb2hcg = require_rgb2hcg();
    Color.prototype.hcg = function() {
      return rgb2hcg(this._rgb);
    };
    chroma3.hcg = (...args) => new Color(...args, "hcg");
    input.format.hcg = require_hcg2rgb();
    input.autodetect.push({
      p: 1,
      test: (...args) => {
        args = unpack(args, "hcg");
        if (type(args) === "array" && args.length === 3) {
          return "hcg";
        }
      }
    });
  }
});

// node_modules/chroma-js/src/io/hex/rgb2hex.js
var require_rgb2hex = __commonJS({
  "node_modules/chroma-js/src/io/hex/rgb2hex.js"(exports, module) {
    var { unpack, last } = require_utils();
    var { round } = Math;
    var rgb2hex = (...args) => {
      let [r, g, b, a] = unpack(args, "rgba");
      let mode = last(args) || "auto";
      if (a === void 0)
        a = 1;
      if (mode === "auto") {
        mode = a < 1 ? "rgba" : "rgb";
      }
      r = round(r);
      g = round(g);
      b = round(b);
      const u = r << 16 | g << 8 | b;
      let str = "000000" + u.toString(16);
      str = str.substr(str.length - 6);
      let hxa = "0" + round(a * 255).toString(16);
      hxa = hxa.substr(hxa.length - 2);
      switch (mode.toLowerCase()) {
        case "rgba":
          return `#${str}${hxa}`;
        case "argb":
          return `#${hxa}${str}`;
        default:
          return `#${str}`;
      }
    };
    module.exports = rgb2hex;
  }
});

// node_modules/chroma-js/src/io/hex/hex2rgb.js
var require_hex2rgb = __commonJS({
  "node_modules/chroma-js/src/io/hex/hex2rgb.js"(exports, module) {
    var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
    var hex2rgb = (hex) => {
      if (hex.match(RE_HEX)) {
        if (hex.length === 4 || hex.length === 7) {
          hex = hex.substr(1);
        }
        if (hex.length === 3) {
          hex = hex.split("");
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        const u = parseInt(hex, 16);
        const r = u >> 16;
        const g = u >> 8 & 255;
        const b = u & 255;
        return [r, g, b, 1];
      }
      if (hex.match(RE_HEXA)) {
        if (hex.length === 5 || hex.length === 9) {
          hex = hex.substr(1);
        }
        if (hex.length === 4) {
          hex = hex.split("");
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
        }
        const u = parseInt(hex, 16);
        const r = u >> 24 & 255;
        const g = u >> 16 & 255;
        const b = u >> 8 & 255;
        const a = Math.round((u & 255) / 255 * 100) / 100;
        return [r, g, b, a];
      }
      throw new Error(`unknown hex color: ${hex}`);
    };
    module.exports = hex2rgb;
  }
});

// node_modules/chroma-js/src/io/hex/index.js
var require_hex = __commonJS({
  "node_modules/chroma-js/src/io/hex/index.js"() {
    var chroma3 = require_chroma();
    var Color = require_Color();
    var { type } = require_utils();
    var input = require_input();
    var rgb2hex = require_rgb2hex();
    Color.prototype.hex = function(mode) {
      return rgb2hex(this._rgb, mode);
    };
    chroma3.hex = (...args) => new Color(...args, "hex");
    input.format.hex = require_hex2rgb();
    input.autodetect.push({
      p: 4,
      test: (h, ...rest) => {
        if (!rest.length && type(h) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(h.length) >= 0) {
          return "hex";
        }
      }
    });
  }
});

// node_modules/chroma-js/src/io/hsi/rgb2hsi.js
var require_rgb2hsi = __commonJS({
  "node_modules/chroma-js/src/io/hsi/rgb2hsi.js"(exports, module) {
    var { unpack, TWOPI } = require_utils();
    var { min, sqrt, acos } = Math;
    var rgb2hsi = (...args) => {
      let [r, g, b] = unpack(args, "rgb");
      r /= 255;
      g /= 255;
      b /= 255;
      let h;
      const min_ = min(r, g, b);
      const i = (r + g + b) / 3;
      const s = i > 0 ? 1 - min_ / i : 0;
      if (s === 0) {
        h = NaN;
      } else {
        h = (r - g + (r - b)) / 2;
        h /= sqrt((r - g) * (r - g) + (r - b) * (g - b));
        h = acos(h);
        if (b > g) {
          h = TWOPI - h;
        }
        h /= TWOPI;
      }
      return [h * 360, s, i];
    };
    module.exports = rgb2hsi;
  }
});

// node_modules/chroma-js/src/io/hsi/hsi2rgb.js
var require_hsi2rgb = __commonJS({
  "node_modules/chroma-js/src/io/hsi/hsi2rgb.js"(exports, module) {
    var { unpack, limit, TWOPI, PITHIRD } = require_utils();
    var { cos } = Math;
    var hsi2rgb = (...args) => {
      args = unpack(args, "hsi");
      let [h, s, i] = args;
      let r, g, b;
      if (isNaN(h))
        h = 0;
      if (isNaN(s))
        s = 0;
      if (h > 360)
        h -= 360;
      if (h < 0)
        h += 360;
      h /= 360;
      if (h < 1 / 3) {
        b = (1 - s) / 3;
        r = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
        g = 1 - (b + r);
      } else if (h < 2 / 3) {
        h -= 1 / 3;
        r = (1 - s) / 3;
        g = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
        b = 1 - (r + g);
      } else {
        h -= 2 / 3;
        g = (1 - s) / 3;
        b = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
        r = 1 - (g + b);
      }
      r = limit(i * r * 3);
      g = limit(i * g * 3);
      b = limit(i * b * 3);
      return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
    };
    module.exports = hsi2rgb;
  }
});

// node_modules/chroma-js/src/io/hsi/index.js
var require_hsi = __commonJS({
  "node_modules/chroma-js/src/io/hsi/index.js"() {
    var { unpack, type } = require_utils();
    var chroma3 = require_chroma();
    var Color = require_Color();
    var input = require_input();
    var rgb2hsi = require_rgb2hsi();
    Color.prototype.hsi = function() {
      return rgb2hsi(this._rgb);
    };
    chroma3.hsi = (...args) => new Color(...args, "hsi");
    input.format.hsi = require_hsi2rgb();
    input.autodetect.push({
      p: 2,
      test: (...args) => {
        args = unpack(args, "hsi");
        if (type(args) === "array" && args.length === 3) {
          return "hsi";
        }
      }
    });
  }
});

// node_modules/chroma-js/src/io/hsl/index.js
var require_hsl = __commonJS({
  "node_modules/chroma-js/src/io/hsl/index.js"() {
    var { unpack, type } = require_utils();
    var chroma3 = require_chroma();
    var Color = require_Color();
    var input = require_input();
    var rgb2hsl = require_rgb2hsl();
    Color.prototype.hsl = function() {
      return rgb2hsl(this._rgb);
    };
    chroma3.hsl = (...args) => new Color(...args, "hsl");
    input.format.hsl = require_hsl2rgb();
    input.autodetect.push({
      p: 2,
      test: (...args) => {
        args = unpack(args, "hsl");
        if (type(args) === "array" && args.length === 3) {
          return "hsl";
        }
      }
    });
  }
});

// node_modules/chroma-js/src/io/hsv/rgb2hsv.js
var require_rgb2hsv = __commonJS({
  "node_modules/chroma-js/src/io/hsv/rgb2hsv.js"(exports, module) {
    var { unpack } = require_utils();
    var { min, max } = Math;
    var rgb2hsl = (...args) => {
      args = unpack(args, "rgb");
      let [r, g, b] = args;
      const min_ = min(r, g, b);
      const max_ = max(r, g, b);
      const delta = max_ - min_;
      let h, s, v;
      v = max_ / 255;
      if (max_ === 0) {
        h = Number.NaN;
        s = 0;
      } else {
        s = delta / max_;
        if (r === max_)
          h = (g - b) / delta;
        if (g === max_)
          h = 2 + (b - r) / delta;
        if (b === max_)
          h = 4 + (r - g) / delta;
        h *= 60;
        if (h < 0)
          h += 360;
      }
      return [h, s, v];
    };
    module.exports = rgb2hsl;
  }
});

// node_modules/chroma-js/src/io/hsv/hsv2rgb.js
var require_hsv2rgb = __commonJS({
  "node_modules/chroma-js/src/io/hsv/hsv2rgb.js"(exports, module) {
    var { unpack } = require_utils();
    var { floor } = Math;
    var hsv2rgb = (...args) => {
      args = unpack(args, "hsv");
      let [h, s, v] = args;
      let r, g, b;
      v *= 255;
      if (s === 0) {
        r = g = b = v;
      } else {
        if (h === 360)
          h = 0;
        if (h > 360)
          h -= 360;
        if (h < 0)
          h += 360;
        h /= 60;
        const i = floor(h);
        const f = h - i;
        const p = v * (1 - s);
        const q = v * (1 - s * f);
        const t = v * (1 - s * (1 - f));
        switch (i) {
          case 0:
            [r, g, b] = [v, t, p];
            break;
          case 1:
            [r, g, b] = [q, v, p];
            break;
          case 2:
            [r, g, b] = [p, v, t];
            break;
          case 3:
            [r, g, b] = [p, q, v];
            break;
          case 4:
            [r, g, b] = [t, p, v];
            break;
          case 5:
            [r, g, b] = [v, p, q];
            break;
        }
      }
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
    module.exports = hsv2rgb;
  }
});

// node_modules/chroma-js/src/io/hsv/index.js
var require_hsv = __commonJS({
  "node_modules/chroma-js/src/io/hsv/index.js"() {
    var { unpack, type } = require_utils();
    var chroma3 = require_chroma();
    var Color = require_Color();
    var input = require_input();
    var rgb2hsv = require_rgb2hsv();
    Color.prototype.hsv = function() {
      return rgb2hsv(this._rgb);
    };
    chroma3.hsv = (...args) => new Color(...args, "hsv");
    input.format.hsv = require_hsv2rgb();
    input.autodetect.push({
      p: 2,
      test: (...args) => {
        args = unpack(args, "hsv");
        if (type(args) === "array" && args.length === 3) {
          return "hsv";
        }
      }
    });
  }
});

// node_modules/chroma-js/src/io/lab/lab-constants.js
var require_lab_constants = __commonJS({
  "node_modules/chroma-js/src/io/lab/lab-constants.js"(exports, module) {
    module.exports = {
      // Corresponds roughly to RGB brighter/darker
      Kn: 18,
      // D65 standard referent
      Xn: 0.95047,
      Yn: 1,
      Zn: 1.08883,
      t0: 0.137931034,
      // 4 / 29
      t1: 0.206896552,
      // 6 / 29
      t2: 0.12841855,
      // 3 * t1 * t1
      t3: 8856452e-9
      // t1 * t1 * t1
    };
  }
});

// node_modules/chroma-js/src/io/lab/rgb2lab.js
var require_rgb2lab = __commonJS({
  "node_modules/chroma-js/src/io/lab/rgb2lab.js"(exports, module) {
    var LAB_CONSTANTS = require_lab_constants();
    var { unpack } = require_utils();
    var { pow } = Math;
    var rgb2lab = (...args) => {
      const [r, g, b] = unpack(args, "rgb");
      const [x, y, z] = rgb2xyz(r, g, b);
      const l = 116 * y - 16;
      return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
    };
    var rgb_xyz = (r) => {
      if ((r /= 255) <= 0.04045)
        return r / 12.92;
      return pow((r + 0.055) / 1.055, 2.4);
    };
    var xyz_lab = (t) => {
      if (t > LAB_CONSTANTS.t3)
        return pow(t, 1 / 3);
      return t / LAB_CONSTANTS.t2 + LAB_CONSTANTS.t0;
    };
    var rgb2xyz = (r, g, b) => {
      r = rgb_xyz(r);
      g = rgb_xyz(g);
      b = rgb_xyz(b);
      const x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS.Xn);
      const y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.072175 * b) / LAB_CONSTANTS.Yn);
      const z = xyz_lab((0.0193339 * r + 0.119192 * g + 0.9503041 * b) / LAB_CONSTANTS.Zn);
      return [x, y, z];
    };
    module.exports = rgb2lab;
  }
});

// node_modules/chroma-js/src/io/lab/lab2rgb.js
var require_lab2rgb = __commonJS({
  "node_modules/chroma-js/src/io/lab/lab2rgb.js"(exports, module) {
    var LAB_CONSTANTS = require_lab_constants();
    var { unpack } = require_utils();
    var { pow } = Math;
    var lab2rgb = (...args) => {
      args = unpack(args, "lab");
      const [l, a, b] = args;
      let x, y, z, r, g, b_;
      y = (l + 16) / 116;
      x = isNaN(a) ? y : y + a / 500;
      z = isNaN(b) ? y : y - b / 200;
      y = LAB_CONSTANTS.Yn * lab_xyz(y);
      x = LAB_CONSTANTS.Xn * lab_xyz(x);
      z = LAB_CONSTANTS.Zn * lab_xyz(z);
      r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
      g = xyz_rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z);
      b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
      return [r, g, b_, args.length > 3 ? args[3] : 1];
    };
    var xyz_rgb = (r) => {
      return 255 * (r <= 304e-5 ? 12.92 * r : 1.055 * pow(r, 1 / 2.4) - 0.055);
    };
    var lab_xyz = (t) => {
      return t > LAB_CONSTANTS.t1 ? t * t * t : LAB_CONSTANTS.t2 * (t - LAB_CONSTANTS.t0);
    };
    module.exports = lab2rgb;
  }
});

// node_modules/chroma-js/src/io/lab/index.js
var require_lab = __commonJS({
  "node_modules/chroma-js/src/io/lab/index.js"() {
    var { unpack, type } = require_utils();
    var chroma3 = require_chroma();
    var Color = require_Color();
    var input = require_input();
    var rgb2lab = require_rgb2lab();
    Color.prototype.lab = function() {
      return rgb2lab(this._rgb);
    };
    chroma3.lab = (...args) => new Color(...args, "lab");
    input.format.lab = require_lab2rgb();
    input.autodetect.push({
      p: 2,
      test: (...args) => {
        args = unpack(args, "lab");
        if (type(args) === "array" && args.length === 3) {
          return "lab";
        }
      }
    });
  }
});

// node_modules/chroma-js/src/io/lch/lab2lch.js
var require_lab2lch = __commonJS({
  "node_modules/chroma-js/src/io/lch/lab2lch.js"(exports, module) {
    var { unpack, RAD2DEG } = require_utils();
    var { sqrt, atan2, round } = Math;
    var lab2lch = (...args) => {
      const [l, a, b] = unpack(args, "lab");
      const c = sqrt(a * a + b * b);
      let h = (atan2(b, a) * RAD2DEG + 360) % 360;
      if (round(c * 1e4) === 0)
        h = Number.NaN;
      return [l, c, h];
    };
    module.exports = lab2lch;
  }
});

// node_modules/chroma-js/src/io/lch/rgb2lch.js
var require_rgb2lch = __commonJS({
  "node_modules/chroma-js/src/io/lch/rgb2lch.js"(exports, module) {
    var { unpack } = require_utils();
    var rgb2lab = require_rgb2lab();
    var lab2lch = require_lab2lch();
    var rgb2lch = (...args) => {
      const [r, g, b] = unpack(args, "rgb");
      const [l, a, b_] = rgb2lab(r, g, b);
      return lab2lch(l, a, b_);
    };
    module.exports = rgb2lch;
  }
});

// node_modules/chroma-js/src/io/lch/lch2lab.js
var require_lch2lab = __commonJS({
  "node_modules/chroma-js/src/io/lch/lch2lab.js"(exports, module) {
    var { unpack, DEG2RAD } = require_utils();
    var { sin, cos } = Math;
    var lch2lab = (...args) => {
      let [l, c, h] = unpack(args, "lch");
      if (isNaN(h))
        h = 0;
      h = h * DEG2RAD;
      return [l, cos(h) * c, sin(h) * c];
    };
    module.exports = lch2lab;
  }
});

// node_modules/chroma-js/src/io/lch/lch2rgb.js
var require_lch2rgb = __commonJS({
  "node_modules/chroma-js/src/io/lch/lch2rgb.js"(exports, module) {
    var { unpack } = require_utils();
    var lch2lab = require_lch2lab();
    var lab2rgb = require_lab2rgb();
    var lch2rgb = (...args) => {
      args = unpack(args, "lch");
      const [l, c, h] = args;
      const [L, a, b_] = lch2lab(l, c, h);
      const [r, g, b] = lab2rgb(L, a, b_);
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
    module.exports = lch2rgb;
  }
});

// node_modules/chroma-js/src/io/lch/hcl2rgb.js
var require_hcl2rgb = __commonJS({
  "node_modules/chroma-js/src/io/lch/hcl2rgb.js"(exports, module) {
    var { unpack } = require_utils();
    var lch2rgb = require_lch2rgb();
    var hcl2rgb = (...args) => {
      const hcl = unpack(args, "hcl").reverse();
      return lch2rgb(...hcl);
    };
    module.exports = hcl2rgb;
  }
});

// node_modules/chroma-js/src/io/lch/index.js
var require_lch = __commonJS({
  "node_modules/chroma-js/src/io/lch/index.js"() {
    var { unpack, type } = require_utils();
    var chroma3 = require_chroma();
    var Color = require_Color();
    var input = require_input();
    var rgb2lch = require_rgb2lch();
    Color.prototype.lch = function() {
      return rgb2lch(this._rgb);
    };
    Color.prototype.hcl = function() {
      return rgb2lch(this._rgb).reverse();
    };
    chroma3.lch = (...args) => new Color(...args, "lch");
    chroma3.hcl = (...args) => new Color(...args, "hcl");
    input.format.lch = require_lch2rgb();
    input.format.hcl = require_hcl2rgb();
    ["lch", "hcl"].forEach((m) => input.autodetect.push({
      p: 2,
      test: (...args) => {
        args = unpack(args, m);
        if (type(args) === "array" && args.length === 3) {
          return m;
        }
      }
    }));
  }
});

// node_modules/chroma-js/src/colors/w3cx11.js
var require_w3cx11 = __commonJS({
  "node_modules/chroma-js/src/colors/w3cx11.js"(exports, module) {
    var w3cx11 = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflower: "#6495ed",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    };
    module.exports = w3cx11;
  }
});

// node_modules/chroma-js/src/io/named/index.js
var require_named = __commonJS({
  "node_modules/chroma-js/src/io/named/index.js"() {
    var Color = require_Color();
    var input = require_input();
    var { type } = require_utils();
    var w3cx11 = require_w3cx11();
    var hex2rgb = require_hex2rgb();
    var rgb2hex = require_rgb2hex();
    Color.prototype.name = function() {
      const hex = rgb2hex(this._rgb, "rgb");
      for (let n of Object.keys(w3cx11)) {
        if (w3cx11[n] === hex)
          return n.toLowerCase();
      }
      return hex;
    };
    input.format.named = (name) => {
      name = name.toLowerCase();
      if (w3cx11[name])
        return hex2rgb(w3cx11[name]);
      throw new Error("unknown color name: " + name);
    };
    input.autodetect.push({
      p: 5,
      test: (h, ...rest) => {
        if (!rest.length && type(h) === "string" && w3cx11[h.toLowerCase()]) {
          return "named";
        }
      }
    });
  }
});

// node_modules/chroma-js/src/io/num/rgb2num.js
var require_rgb2num = __commonJS({
  "node_modules/chroma-js/src/io/num/rgb2num.js"(exports, module) {
    var { unpack } = require_utils();
    var rgb2num = (...args) => {
      const [r, g, b] = unpack(args, "rgb");
      return (r << 16) + (g << 8) + b;
    };
    module.exports = rgb2num;
  }
});

// node_modules/chroma-js/src/io/num/num2rgb.js
var require_num2rgb = __commonJS({
  "node_modules/chroma-js/src/io/num/num2rgb.js"(exports, module) {
    var { type } = require_utils();
    var num2rgb = (num) => {
      if (type(num) == "number" && num >= 0 && num <= 16777215) {
        const r = num >> 16;
        const g = num >> 8 & 255;
        const b = num & 255;
        return [r, g, b, 1];
      }
      throw new Error("unknown num color: " + num);
    };
    module.exports = num2rgb;
  }
});

// node_modules/chroma-js/src/io/num/index.js
var require_num = __commonJS({
  "node_modules/chroma-js/src/io/num/index.js"() {
    var chroma3 = require_chroma();
    var Color = require_Color();
    var input = require_input();
    var { type } = require_utils();
    var rgb2num = require_rgb2num();
    Color.prototype.num = function() {
      return rgb2num(this._rgb);
    };
    chroma3.num = (...args) => new Color(...args, "num");
    input.format.num = require_num2rgb();
    input.autodetect.push({
      p: 5,
      test: (...args) => {
        if (args.length === 1 && type(args[0]) === "number" && args[0] >= 0 && args[0] <= 16777215) {
          return "num";
        }
      }
    });
  }
});

// node_modules/chroma-js/src/io/rgb/index.js
var require_rgb = __commonJS({
  "node_modules/chroma-js/src/io/rgb/index.js"() {
    var chroma3 = require_chroma();
    var Color = require_Color();
    var input = require_input();
    var { unpack, type } = require_utils();
    var { round } = Math;
    Color.prototype.rgb = function(rnd = true) {
      if (rnd === false)
        return this._rgb.slice(0, 3);
      return this._rgb.slice(0, 3).map(round);
    };
    Color.prototype.rgba = function(rnd = true) {
      return this._rgb.slice(0, 4).map((v, i) => {
        return i < 3 ? rnd === false ? v : round(v) : v;
      });
    };
    chroma3.rgb = (...args) => new Color(...args, "rgb");
    input.format.rgb = (...args) => {
      const rgba = unpack(args, "rgba");
      if (rgba[3] === void 0)
        rgba[3] = 1;
      return rgba;
    };
    input.autodetect.push({
      p: 3,
      test: (...args) => {
        args = unpack(args, "rgba");
        if (type(args) === "array" && (args.length === 3 || args.length === 4 && type(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) {
          return "rgb";
        }
      }
    });
  }
});

// node_modules/chroma-js/src/io/temp/temperature2rgb.js
var require_temperature2rgb = __commonJS({
  "node_modules/chroma-js/src/io/temp/temperature2rgb.js"(exports, module) {
    var { log } = Math;
    var temperature2rgb = (kelvin) => {
      const temp = kelvin / 100;
      let r, g, b;
      if (temp < 66) {
        r = 255;
        g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
        b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
      } else {
        r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
        g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
        b = 255;
      }
      return [r, g, b, 1];
    };
    module.exports = temperature2rgb;
  }
});

// node_modules/chroma-js/src/io/temp/rgb2temperature.js
var require_rgb2temperature = __commonJS({
  "node_modules/chroma-js/src/io/temp/rgb2temperature.js"(exports, module) {
    var temperature2rgb = require_temperature2rgb();
    var { unpack } = require_utils();
    var { round } = Math;
    var rgb2temperature = (...args) => {
      const rgb = unpack(args, "rgb");
      const r = rgb[0], b = rgb[2];
      let minTemp = 1e3;
      let maxTemp = 4e4;
      const eps = 0.4;
      let temp;
      while (maxTemp - minTemp > eps) {
        temp = (maxTemp + minTemp) * 0.5;
        const rgb2 = temperature2rgb(temp);
        if (rgb2[2] / rgb2[0] >= b / r) {
          maxTemp = temp;
        } else {
          minTemp = temp;
        }
      }
      return round(temp);
    };
    module.exports = rgb2temperature;
  }
});

// node_modules/chroma-js/src/io/temp/index.js
var require_temp = __commonJS({
  "node_modules/chroma-js/src/io/temp/index.js"() {
    var chroma3 = require_chroma();
    var Color = require_Color();
    var input = require_input();
    var rgb2temperature = require_rgb2temperature();
    Color.prototype.temp = Color.prototype.kelvin = Color.prototype.temperature = function() {
      return rgb2temperature(this._rgb);
    };
    chroma3.temp = chroma3.kelvin = chroma3.temperature = (...args) => new Color(...args, "temp");
    input.format.temp = input.format.kelvin = input.format.temperature = require_temperature2rgb();
  }
});

// node_modules/chroma-js/src/io/oklab/rgb2oklab.js
var require_rgb2oklab = __commonJS({
  "node_modules/chroma-js/src/io/oklab/rgb2oklab.js"(exports, module) {
    var { unpack } = require_utils();
    var { cbrt, pow, sign } = Math;
    var rgb2oklab = (...args) => {
      const [r, g, b] = unpack(args, "rgb");
      const [lr, lg, lb] = [rgb2lrgb(r / 255), rgb2lrgb(g / 255), rgb2lrgb(b / 255)];
      const l = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
      const m = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
      const s = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
      return [
        0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
        1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
        0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
      ];
    };
    module.exports = rgb2oklab;
    function rgb2lrgb(c) {
      const abs = Math.abs(c);
      if (abs < 0.04045) {
        return c / 12.92;
      }
      return (sign(c) || 1) * pow((abs + 0.055) / 1.055, 2.4);
    }
  }
});

// node_modules/chroma-js/src/io/oklab/oklab2rgb.js
var require_oklab2rgb = __commonJS({
  "node_modules/chroma-js/src/io/oklab/oklab2rgb.js"(exports, module) {
    var { unpack } = require_utils();
    var { pow, sign } = Math;
    var oklab2rgb = (...args) => {
      args = unpack(args, "lab");
      const [L, a, b] = args;
      const l = pow(L + 0.3963377774 * a + 0.2158037573 * b, 3);
      const m = pow(L - 0.1055613458 * a - 0.0638541728 * b, 3);
      const s = pow(L - 0.0894841775 * a - 1.291485548 * b, 3);
      return [
        255 * lrgb2rgb(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
        255 * lrgb2rgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
        255 * lrgb2rgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
        args.length > 3 ? args[3] : 1
      ];
    };
    module.exports = oklab2rgb;
    function lrgb2rgb(c) {
      const abs = Math.abs(c);
      if (abs > 31308e-7) {
        return (sign(c) || 1) * (1.055 * pow(abs, 1 / 2.4) - 0.055);
      }
      return c * 12.92;
    }
  }
});

// node_modules/chroma-js/src/io/oklab/index.js
var require_oklab = __commonJS({
  "node_modules/chroma-js/src/io/oklab/index.js"() {
    var { unpack, type } = require_utils();
    var chroma3 = require_chroma();
    var Color = require_Color();
    var input = require_input();
    var rgb2oklab = require_rgb2oklab();
    Color.prototype.oklab = function() {
      return rgb2oklab(this._rgb);
    };
    chroma3.oklab = (...args) => new Color(...args, "oklab");
    input.format.oklab = require_oklab2rgb();
    input.autodetect.push({
      p: 3,
      test: (...args) => {
        args = unpack(args, "oklab");
        if (type(args) === "array" && args.length === 3) {
          return "oklab";
        }
      }
    });
  }
});

// node_modules/chroma-js/src/io/oklch/rgb2oklch.js
var require_rgb2oklch = __commonJS({
  "node_modules/chroma-js/src/io/oklch/rgb2oklch.js"(exports, module) {
    var { unpack } = require_utils();
    var rgb2oklab = require_rgb2oklab();
    var lab2lch = require_lab2lch();
    var rgb2oklch = (...args) => {
      const [r, g, b] = unpack(args, "rgb");
      const [l, a, b_] = rgb2oklab(r, g, b);
      return lab2lch(l, a, b_);
    };
    module.exports = rgb2oklch;
  }
});

// node_modules/chroma-js/src/io/oklch/oklch2rgb.js
var require_oklch2rgb = __commonJS({
  "node_modules/chroma-js/src/io/oklch/oklch2rgb.js"(exports, module) {
    var { unpack } = require_utils();
    var lch2lab = require_lch2lab();
    var oklab2rgb = require_oklab2rgb();
    var oklch2rgb = (...args) => {
      args = unpack(args, "lch");
      const [l, c, h] = args;
      const [L, a, b_] = lch2lab(l, c, h);
      const [r, g, b] = oklab2rgb(L, a, b_);
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
    module.exports = oklch2rgb;
  }
});

// node_modules/chroma-js/src/io/oklch/index.js
var require_oklch = __commonJS({
  "node_modules/chroma-js/src/io/oklch/index.js"() {
    var { unpack, type } = require_utils();
    var chroma3 = require_chroma();
    var Color = require_Color();
    var input = require_input();
    var rgb2oklch = require_rgb2oklch();
    Color.prototype.oklch = function() {
      return rgb2oklch(this._rgb);
    };
    chroma3.oklch = (...args) => new Color(...args, "oklch");
    input.format.oklch = require_oklch2rgb();
    input.autodetect.push({
      p: 3,
      test: (...args) => {
        args = unpack(args, "oklch");
        if (type(args) === "array" && args.length === 3) {
          return "oklch";
        }
      }
    });
  }
});

// node_modules/chroma-js/src/ops/alpha.js
var require_alpha = __commonJS({
  "node_modules/chroma-js/src/ops/alpha.js"() {
    var Color = require_Color();
    var { type } = require_utils();
    Color.prototype.alpha = function(a, mutate = false) {
      if (a !== void 0 && type(a) === "number") {
        if (mutate) {
          this._rgb[3] = a;
          return this;
        }
        return new Color([this._rgb[0], this._rgb[1], this._rgb[2], a], "rgb");
      }
      return this._rgb[3];
    };
  }
});

// node_modules/chroma-js/src/ops/clipped.js
var require_clipped = __commonJS({
  "node_modules/chroma-js/src/ops/clipped.js"() {
    var Color = require_Color();
    Color.prototype.clipped = function() {
      return this._rgb._clipped || false;
    };
  }
});

// node_modules/chroma-js/src/ops/darken.js
var require_darken = __commonJS({
  "node_modules/chroma-js/src/ops/darken.js"() {
    require_lab();
    var Color = require_Color();
    var LAB_CONSTANTS = require_lab_constants();
    Color.prototype.darken = function(amount = 1) {
      const me = this;
      const lab = me.lab();
      lab[0] -= LAB_CONSTANTS.Kn * amount;
      return new Color(lab, "lab").alpha(me.alpha(), true);
    };
    Color.prototype.brighten = function(amount = 1) {
      return this.darken(-amount);
    };
    Color.prototype.darker = Color.prototype.darken;
    Color.prototype.brighter = Color.prototype.brighten;
  }
});

// node_modules/chroma-js/src/ops/get.js
var require_get = __commonJS({
  "node_modules/chroma-js/src/ops/get.js"() {
    var Color = require_Color();
    Color.prototype.get = function(mc) {
      const [mode, channel] = mc.split(".");
      const src = this[mode]();
      if (channel) {
        const i = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
        if (i > -1)
          return src[i];
        throw new Error(`unknown channel ${channel} in mode ${mode}`);
      } else {
        return src;
      }
    };
  }
});

// node_modules/chroma-js/src/ops/luminance.js
var require_luminance = __commonJS({
  "node_modules/chroma-js/src/ops/luminance.js"() {
    var Color = require_Color();
    var { type } = require_utils();
    var { pow } = Math;
    var EPS = 1e-7;
    var MAX_ITER = 20;
    Color.prototype.luminance = function(lum) {
      if (lum !== void 0 && type(lum) === "number") {
        if (lum === 0) {
          return new Color([0, 0, 0, this._rgb[3]], "rgb");
        }
        if (lum === 1) {
          return new Color([255, 255, 255, this._rgb[3]], "rgb");
        }
        let cur_lum = this.luminance();
        let mode = "rgb";
        let max_iter = MAX_ITER;
        const test = (low, high) => {
          const mid = low.interpolate(high, 0.5, mode);
          const lm = mid.luminance();
          if (Math.abs(lum - lm) < EPS || !max_iter--) {
            return mid;
          }
          return lm > lum ? test(low, mid) : test(mid, high);
        };
        const rgb = (cur_lum > lum ? test(new Color([0, 0, 0]), this) : test(this, new Color([255, 255, 255]))).rgb();
        return new Color([...rgb, this._rgb[3]]);
      }
      return rgb2luminance(...this._rgb.slice(0, 3));
    };
    var rgb2luminance = (r, g, b) => {
      r = luminance_x(r);
      g = luminance_x(g);
      b = luminance_x(b);
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    var luminance_x = (x) => {
      x /= 255;
      return x <= 0.03928 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
    };
  }
});

// node_modules/chroma-js/src/interpolator/index.js
var require_interpolator = __commonJS({
  "node_modules/chroma-js/src/interpolator/index.js"(exports, module) {
    module.exports = {};
  }
});

// node_modules/chroma-js/src/generator/mix.js
var require_mix = __commonJS({
  "node_modules/chroma-js/src/generator/mix.js"(exports, module) {
    var Color = require_Color();
    var { type } = require_utils();
    var interpolator = require_interpolator();
    module.exports = (col1, col2, f = 0.5, ...rest) => {
      let mode = rest[0] || "lrgb";
      if (!interpolator[mode] && !rest.length) {
        mode = Object.keys(interpolator)[0];
      }
      if (!interpolator[mode]) {
        throw new Error(`interpolation mode ${mode} is not defined`);
      }
      if (type(col1) !== "object")
        col1 = new Color(col1);
      if (type(col2) !== "object")
        col2 = new Color(col2);
      return interpolator[mode](col1, col2, f).alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
    };
  }
});

// node_modules/chroma-js/src/ops/mix.js
var require_mix2 = __commonJS({
  "node_modules/chroma-js/src/ops/mix.js"() {
    var Color = require_Color();
    var mix = require_mix();
    Color.prototype.mix = Color.prototype.interpolate = function(col2, f = 0.5, ...rest) {
      return mix(this, col2, f, ...rest);
    };
  }
});

// node_modules/chroma-js/src/ops/premultiply.js
var require_premultiply = __commonJS({
  "node_modules/chroma-js/src/ops/premultiply.js"() {
    var Color = require_Color();
    Color.prototype.premultiply = function(mutate = false) {
      const rgb = this._rgb;
      const a = rgb[3];
      if (mutate) {
        this._rgb = [rgb[0] * a, rgb[1] * a, rgb[2] * a, a];
        return this;
      } else {
        return new Color([rgb[0] * a, rgb[1] * a, rgb[2] * a, a], "rgb");
      }
    };
  }
});

// node_modules/chroma-js/src/ops/saturate.js
var require_saturate = __commonJS({
  "node_modules/chroma-js/src/ops/saturate.js"() {
    require_lch();
    var Color = require_Color();
    var LAB_CONSTANTS = require_lab_constants();
    Color.prototype.saturate = function(amount = 1) {
      const me = this;
      const lch = me.lch();
      lch[1] += LAB_CONSTANTS.Kn * amount;
      if (lch[1] < 0)
        lch[1] = 0;
      return new Color(lch, "lch").alpha(me.alpha(), true);
    };
    Color.prototype.desaturate = function(amount = 1) {
      return this.saturate(-amount);
    };
  }
});

// node_modules/chroma-js/src/ops/set.js
var require_set = __commonJS({
  "node_modules/chroma-js/src/ops/set.js"() {
    var Color = require_Color();
    var { type } = require_utils();
    Color.prototype.set = function(mc, value, mutate = false) {
      const [mode, channel] = mc.split(".");
      const src = this[mode]();
      if (channel) {
        const i = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
        if (i > -1) {
          if (type(value) == "string") {
            switch (value.charAt(0)) {
              case "+":
                src[i] += +value;
                break;
              case "-":
                src[i] += +value;
                break;
              case "*":
                src[i] *= +value.substr(1);
                break;
              case "/":
                src[i] /= +value.substr(1);
                break;
              default:
                src[i] = +value;
            }
          } else if (type(value) === "number") {
            src[i] = value;
          } else {
            throw new Error(`unsupported value for Color.set`);
          }
          const out = new Color(src, mode);
          if (mutate) {
            this._rgb = out._rgb;
            return this;
          }
          return out;
        }
        throw new Error(`unknown channel ${channel} in mode ${mode}`);
      } else {
        return src;
      }
    };
  }
});

// node_modules/chroma-js/src/interpolator/rgb.js
var require_rgb2 = __commonJS({
  "node_modules/chroma-js/src/interpolator/rgb.js"(exports, module) {
    var Color = require_Color();
    var rgb = (col1, col2, f) => {
      const xyz0 = col1._rgb;
      const xyz1 = col2._rgb;
      return new Color(
        xyz0[0] + f * (xyz1[0] - xyz0[0]),
        xyz0[1] + f * (xyz1[1] - xyz0[1]),
        xyz0[2] + f * (xyz1[2] - xyz0[2]),
        "rgb"
      );
    };
    require_interpolator().rgb = rgb;
    module.exports = rgb;
  }
});

// node_modules/chroma-js/src/interpolator/lrgb.js
var require_lrgb = __commonJS({
  "node_modules/chroma-js/src/interpolator/lrgb.js"(exports, module) {
    var Color = require_Color();
    var { sqrt, pow } = Math;
    var lrgb = (col1, col2, f) => {
      const [x1, y1, z1] = col1._rgb;
      const [x2, y2, z2] = col2._rgb;
      return new Color(
        sqrt(pow(x1, 2) * (1 - f) + pow(x2, 2) * f),
        sqrt(pow(y1, 2) * (1 - f) + pow(y2, 2) * f),
        sqrt(pow(z1, 2) * (1 - f) + pow(z2, 2) * f),
        "rgb"
      );
    };
    require_interpolator().lrgb = lrgb;
    module.exports = lrgb;
  }
});

// node_modules/chroma-js/src/interpolator/lab.js
var require_lab2 = __commonJS({
  "node_modules/chroma-js/src/interpolator/lab.js"(exports, module) {
    require_lab();
    var Color = require_Color();
    var lab = (col1, col2, f) => {
      const xyz0 = col1.lab();
      const xyz1 = col2.lab();
      return new Color(
        xyz0[0] + f * (xyz1[0] - xyz0[0]),
        xyz0[1] + f * (xyz1[1] - xyz0[1]),
        xyz0[2] + f * (xyz1[2] - xyz0[2]),
        "lab"
      );
    };
    require_interpolator().lab = lab;
    module.exports = lab;
  }
});

// node_modules/chroma-js/src/interpolator/_hsx.js
var require_hsx = __commonJS({
  "node_modules/chroma-js/src/interpolator/_hsx.js"(exports, module) {
    var Color = require_Color();
    module.exports = (col1, col2, f, m) => {
      let xyz0, xyz1;
      if (m === "hsl") {
        xyz0 = col1.hsl();
        xyz1 = col2.hsl();
      } else if (m === "hsv") {
        xyz0 = col1.hsv();
        xyz1 = col2.hsv();
      } else if (m === "hcg") {
        xyz0 = col1.hcg();
        xyz1 = col2.hcg();
      } else if (m === "hsi") {
        xyz0 = col1.hsi();
        xyz1 = col2.hsi();
      } else if (m === "lch" || m === "hcl") {
        m = "hcl";
        xyz0 = col1.hcl();
        xyz1 = col2.hcl();
      } else if (m === "oklch") {
        xyz0 = col1.oklch().reverse();
        xyz1 = col2.oklch().reverse();
      }
      let hue0, hue1, sat0, sat1, lbv0, lbv1;
      if (m.substr(0, 1) === "h" || m === "oklch") {
        [hue0, sat0, lbv0] = xyz0;
        [hue1, sat1, lbv1] = xyz1;
      }
      let sat, hue, lbv, dh;
      if (!isNaN(hue0) && !isNaN(hue1)) {
        if (hue1 > hue0 && hue1 - hue0 > 180) {
          dh = hue1 - (hue0 + 360);
        } else if (hue1 < hue0 && hue0 - hue1 > 180) {
          dh = hue1 + 360 - hue0;
        } else {
          dh = hue1 - hue0;
        }
        hue = hue0 + f * dh;
      } else if (!isNaN(hue0)) {
        hue = hue0;
        if ((lbv1 == 1 || lbv1 == 0) && m != "hsv")
          sat = sat0;
      } else if (!isNaN(hue1)) {
        hue = hue1;
        if ((lbv0 == 1 || lbv0 == 0) && m != "hsv")
          sat = sat1;
      } else {
        hue = Number.NaN;
      }
      if (sat === void 0)
        sat = sat0 + f * (sat1 - sat0);
      lbv = lbv0 + f * (lbv1 - lbv0);
      return m === "oklch" ? new Color([lbv, sat, hue], m) : new Color([hue, sat, lbv], m);
    };
  }
});

// node_modules/chroma-js/src/interpolator/lch.js
var require_lch2 = __commonJS({
  "node_modules/chroma-js/src/interpolator/lch.js"(exports, module) {
    require_lch();
    var interpolate_hsx = require_hsx();
    var lch = (col1, col2, f) => {
      return interpolate_hsx(col1, col2, f, "lch");
    };
    require_interpolator().lch = lch;
    require_interpolator().hcl = lch;
    module.exports = lch;
  }
});

// node_modules/chroma-js/src/interpolator/num.js
var require_num2 = __commonJS({
  "node_modules/chroma-js/src/interpolator/num.js"(exports, module) {
    require_num();
    var Color = require_Color();
    var num = (col1, col2, f) => {
      const c1 = col1.num();
      const c2 = col2.num();
      return new Color(c1 + f * (c2 - c1), "num");
    };
    require_interpolator().num = num;
    module.exports = num;
  }
});

// node_modules/chroma-js/src/interpolator/hcg.js
var require_hcg2 = __commonJS({
  "node_modules/chroma-js/src/interpolator/hcg.js"(exports, module) {
    require_hcg();
    var interpolate_hsx = require_hsx();
    var hcg = (col1, col2, f) => {
      return interpolate_hsx(col1, col2, f, "hcg");
    };
    require_interpolator().hcg = hcg;
    module.exports = hcg;
  }
});

// node_modules/chroma-js/src/interpolator/hsi.js
var require_hsi2 = __commonJS({
  "node_modules/chroma-js/src/interpolator/hsi.js"(exports, module) {
    require_hsi();
    var interpolate_hsx = require_hsx();
    var hsi = (col1, col2, f) => {
      return interpolate_hsx(col1, col2, f, "hsi");
    };
    require_interpolator().hsi = hsi;
    module.exports = hsi;
  }
});

// node_modules/chroma-js/src/interpolator/hsl.js
var require_hsl2 = __commonJS({
  "node_modules/chroma-js/src/interpolator/hsl.js"(exports, module) {
    require_hsl();
    var interpolate_hsx = require_hsx();
    var hsl = (col1, col2, f) => {
      return interpolate_hsx(col1, col2, f, "hsl");
    };
    require_interpolator().hsl = hsl;
    module.exports = hsl;
  }
});

// node_modules/chroma-js/src/interpolator/hsv.js
var require_hsv2 = __commonJS({
  "node_modules/chroma-js/src/interpolator/hsv.js"(exports, module) {
    require_hsv();
    var interpolate_hsx = require_hsx();
    var hsv = (col1, col2, f) => {
      return interpolate_hsx(col1, col2, f, "hsv");
    };
    require_interpolator().hsv = hsv;
    module.exports = hsv;
  }
});

// node_modules/chroma-js/src/interpolator/oklab.js
var require_oklab2 = __commonJS({
  "node_modules/chroma-js/src/interpolator/oklab.js"(exports, module) {
    require_oklab();
    var Color = require_Color();
    var oklab = (col1, col2, f) => {
      const xyz0 = col1.oklab();
      const xyz1 = col2.oklab();
      return new Color(
        xyz0[0] + f * (xyz1[0] - xyz0[0]),
        xyz0[1] + f * (xyz1[1] - xyz0[1]),
        xyz0[2] + f * (xyz1[2] - xyz0[2]),
        "oklab"
      );
    };
    require_interpolator().oklab = oklab;
    module.exports = oklab;
  }
});

// node_modules/chroma-js/src/interpolator/oklch.js
var require_oklch2 = __commonJS({
  "node_modules/chroma-js/src/interpolator/oklch.js"(exports, module) {
    require_lch();
    var interpolate_hsx = require_hsx();
    var oklch = (col1, col2, f) => {
      return interpolate_hsx(col1, col2, f, "oklch");
    };
    require_interpolator().oklch = oklch;
    module.exports = oklch;
  }
});

// node_modules/chroma-js/src/generator/average.js
var require_average = __commonJS({
  "node_modules/chroma-js/src/generator/average.js"(exports, module) {
    var Color = require_Color();
    var { clip_rgb } = require_utils();
    var { pow, sqrt, PI, cos, sin, atan2 } = Math;
    module.exports = (colors, mode = "lrgb", weights = null) => {
      const l = colors.length;
      if (!weights)
        weights = Array.from(new Array(l)).map(() => 1);
      const k = l / weights.reduce(function(a, b) {
        return a + b;
      });
      weights.forEach((w, i) => {
        weights[i] *= k;
      });
      colors = colors.map((c) => new Color(c));
      if (mode === "lrgb") {
        return _average_lrgb(colors, weights);
      }
      const first = colors.shift();
      const xyz = first.get(mode);
      const cnt = [];
      let dx = 0;
      let dy = 0;
      for (let i = 0; i < xyz.length; i++) {
        xyz[i] = (xyz[i] || 0) * weights[0];
        cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
        if (mode.charAt(i) === "h" && !isNaN(xyz[i])) {
          const A2 = xyz[i] / 180 * PI;
          dx += cos(A2) * weights[0];
          dy += sin(A2) * weights[0];
        }
      }
      let alpha = first.alpha() * weights[0];
      colors.forEach((c, ci) => {
        const xyz2 = c.get(mode);
        alpha += c.alpha() * weights[ci + 1];
        for (let i = 0; i < xyz.length; i++) {
          if (!isNaN(xyz2[i])) {
            cnt[i] += weights[ci + 1];
            if (mode.charAt(i) === "h") {
              const A2 = xyz2[i] / 180 * PI;
              dx += cos(A2) * weights[ci + 1];
              dy += sin(A2) * weights[ci + 1];
            } else {
              xyz[i] += xyz2[i] * weights[ci + 1];
            }
          }
        }
      });
      for (let i = 0; i < xyz.length; i++) {
        if (mode.charAt(i) === "h") {
          let A2 = atan2(dy / cnt[i], dx / cnt[i]) / PI * 180;
          while (A2 < 0)
            A2 += 360;
          while (A2 >= 360)
            A2 -= 360;
          xyz[i] = A2;
        } else {
          xyz[i] = xyz[i] / cnt[i];
        }
      }
      alpha /= l;
      return new Color(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
    };
    var _average_lrgb = (colors, weights) => {
      const l = colors.length;
      const xyz = [0, 0, 0, 0];
      for (let i = 0; i < colors.length; i++) {
        const col = colors[i];
        const f = weights[i] / l;
        const rgb = col._rgb;
        xyz[0] += pow(rgb[0], 2) * f;
        xyz[1] += pow(rgb[1], 2) * f;
        xyz[2] += pow(rgb[2], 2) * f;
        xyz[3] += rgb[3] * f;
      }
      xyz[0] = sqrt(xyz[0]);
      xyz[1] = sqrt(xyz[1]);
      xyz[2] = sqrt(xyz[2]);
      if (xyz[3] > 0.9999999)
        xyz[3] = 1;
      return new Color(clip_rgb(xyz));
    };
  }
});

// node_modules/chroma-js/src/generator/scale.js
var require_scale = __commonJS({
  "node_modules/chroma-js/src/generator/scale.js"(exports, module) {
    var chroma3 = require_chroma();
    var { type } = require_utils();
    var { pow } = Math;
    module.exports = function(colors) {
      let _mode = "rgb";
      let _nacol = chroma3("#ccc");
      let _spread = 0;
      let _domain = [0, 1];
      let _pos = [];
      let _padding = [0, 0];
      let _classes = false;
      let _colors = [];
      let _out = false;
      let _min = 0;
      let _max = 1;
      let _correctLightness = false;
      let _colorCache = {};
      let _useCache = true;
      let _gamma = 1;
      const setColors = function(colors2) {
        colors2 = colors2 || ["#fff", "#000"];
        if (colors2 && type(colors2) === "string" && chroma3.brewer && chroma3.brewer[colors2.toLowerCase()]) {
          colors2 = chroma3.brewer[colors2.toLowerCase()];
        }
        if (type(colors2) === "array") {
          if (colors2.length === 1) {
            colors2 = [colors2[0], colors2[0]];
          }
          colors2 = colors2.slice(0);
          for (let c = 0; c < colors2.length; c++) {
            colors2[c] = chroma3(colors2[c]);
          }
          _pos.length = 0;
          for (let c = 0; c < colors2.length; c++) {
            _pos.push(c / (colors2.length - 1));
          }
        }
        resetCache();
        return _colors = colors2;
      };
      const getClass = function(value) {
        if (_classes != null) {
          const n = _classes.length - 1;
          let i = 0;
          while (i < n && value >= _classes[i]) {
            i++;
          }
          return i - 1;
        }
        return 0;
      };
      let tMapLightness = (t) => t;
      let tMapDomain = (t) => t;
      const getColor = function(val, bypassMap) {
        let col, t;
        if (bypassMap == null) {
          bypassMap = false;
        }
        if (isNaN(val) || val === null) {
          return _nacol;
        }
        if (!bypassMap) {
          if (_classes && _classes.length > 2) {
            const c = getClass(val);
            t = c / (_classes.length - 2);
          } else if (_max !== _min) {
            t = (val - _min) / (_max - _min);
          } else {
            t = 1;
          }
        } else {
          t = val;
        }
        t = tMapDomain(t);
        if (!bypassMap) {
          t = tMapLightness(t);
        }
        if (_gamma !== 1) {
          t = pow(t, _gamma);
        }
        t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
        t = Math.min(1, Math.max(0, t));
        const k = Math.floor(t * 1e4);
        if (_useCache && _colorCache[k]) {
          col = _colorCache[k];
        } else {
          if (type(_colors) === "array") {
            for (let i = 0; i < _pos.length; i++) {
              const p = _pos[i];
              if (t <= p) {
                col = _colors[i];
                break;
              }
              if (t >= p && i === _pos.length - 1) {
                col = _colors[i];
                break;
              }
              if (t > p && t < _pos[i + 1]) {
                t = (t - p) / (_pos[i + 1] - p);
                col = chroma3.interpolate(_colors[i], _colors[i + 1], t, _mode);
                break;
              }
            }
          } else if (type(_colors) === "function") {
            col = _colors(t);
          }
          if (_useCache) {
            _colorCache[k] = col;
          }
        }
        return col;
      };
      var resetCache = () => _colorCache = {};
      setColors(colors);
      const f = function(v) {
        const c = chroma3(getColor(v));
        if (_out && c[_out]) {
          return c[_out]();
        } else {
          return c;
        }
      };
      f.classes = function(classes) {
        if (classes != null) {
          if (type(classes) === "array") {
            _classes = classes;
            _domain = [classes[0], classes[classes.length - 1]];
          } else {
            const d = chroma3.analyze(_domain);
            if (classes === 0) {
              _classes = [d.min, d.max];
            } else {
              _classes = chroma3.limits(d, "e", classes);
            }
          }
          return f;
        }
        return _classes;
      };
      f.domain = function(domain) {
        if (!arguments.length) {
          return _domain;
        }
        _min = domain[0];
        _max = domain[domain.length - 1];
        _pos = [];
        const k = _colors.length;
        if (domain.length === k && _min !== _max) {
          for (let d of Array.from(domain)) {
            _pos.push((d - _min) / (_max - _min));
          }
        } else {
          for (let c = 0; c < k; c++) {
            _pos.push(c / (k - 1));
          }
          if (domain.length > 2) {
            const tOut = domain.map((d, i) => i / (domain.length - 1));
            const tBreaks = domain.map((d) => (d - _min) / (_max - _min));
            if (!tBreaks.every((val, i) => tOut[i] === val)) {
              tMapDomain = (t) => {
                if (t <= 0 || t >= 1)
                  return t;
                let i = 0;
                while (t >= tBreaks[i + 1])
                  i++;
                const f2 = (t - tBreaks[i]) / (tBreaks[i + 1] - tBreaks[i]);
                const out = tOut[i] + f2 * (tOut[i + 1] - tOut[i]);
                return out;
              };
            }
          }
        }
        _domain = [_min, _max];
        return f;
      };
      f.mode = function(_m) {
        if (!arguments.length) {
          return _mode;
        }
        _mode = _m;
        resetCache();
        return f;
      };
      f.range = function(colors2, _pos2) {
        setColors(colors2, _pos2);
        return f;
      };
      f.out = function(_o) {
        _out = _o;
        return f;
      };
      f.spread = function(val) {
        if (!arguments.length) {
          return _spread;
        }
        _spread = val;
        return f;
      };
      f.correctLightness = function(v) {
        if (v == null) {
          v = true;
        }
        _correctLightness = v;
        resetCache();
        if (_correctLightness) {
          tMapLightness = function(t) {
            const L0 = getColor(0, true).lab()[0];
            const L1 = getColor(1, true).lab()[0];
            const pol = L0 > L1;
            let L_actual = getColor(t, true).lab()[0];
            const L_ideal = L0 + (L1 - L0) * t;
            let L_diff = L_actual - L_ideal;
            let t0 = 0;
            let t1 = 1;
            let max_iter = 20;
            while (Math.abs(L_diff) > 0.01 && max_iter-- > 0) {
              (function() {
                if (pol) {
                  L_diff *= -1;
                }
                if (L_diff < 0) {
                  t0 = t;
                  t += (t1 - t) * 0.5;
                } else {
                  t1 = t;
                  t += (t0 - t) * 0.5;
                }
                L_actual = getColor(t, true).lab()[0];
                return L_diff = L_actual - L_ideal;
              })();
            }
            return t;
          };
        } else {
          tMapLightness = (t) => t;
        }
        return f;
      };
      f.padding = function(p) {
        if (p != null) {
          if (type(p) === "number") {
            p = [p, p];
          }
          _padding = p;
          return f;
        } else {
          return _padding;
        }
      };
      f.colors = function(numColors, out) {
        if (arguments.length < 2) {
          out = "hex";
        }
        let result = [];
        if (arguments.length === 0) {
          result = _colors.slice(0);
        } else if (numColors === 1) {
          result = [f(0.5)];
        } else if (numColors > 1) {
          const dm = _domain[0];
          const dd = _domain[1] - dm;
          result = __range__(0, numColors, false).map((i) => f(dm + i / (numColors - 1) * dd));
        } else {
          colors = [];
          let samples = [];
          if (_classes && _classes.length > 2) {
            for (let i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
              samples.push((_classes[i - 1] + _classes[i]) * 0.5);
            }
          } else {
            samples = _domain;
          }
          result = samples.map((v) => f(v));
        }
        if (chroma3[out]) {
          result = result.map((c) => c[out]());
        }
        return result;
      };
      f.cache = function(c) {
        if (c != null) {
          _useCache = c;
          return f;
        } else {
          return _useCache;
        }
      };
      f.gamma = function(g) {
        if (g != null) {
          _gamma = g;
          return f;
        } else {
          return _gamma;
        }
      };
      f.nodata = function(d) {
        if (d != null) {
          _nacol = chroma3(d);
          return f;
        } else {
          return _nacol;
        }
      };
      return f;
    };
    function __range__(left, right, inclusive) {
      let range = [];
      let ascending = left < right;
      let end = !inclusive ? right : ascending ? right + 1 : right - 1;
      for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
        range.push(i);
      }
      return range;
    }
  }
});

// node_modules/chroma-js/src/generator/bezier.js
var require_bezier = __commonJS({
  "node_modules/chroma-js/src/generator/bezier.js"(exports, module) {
    var Color = require_Color();
    require_lab();
    var scale = require_scale();
    var binom_row = function(n) {
      let row = [1, 1];
      for (let i = 1; i < n; i++) {
        let newrow = [1];
        for (let j = 1; j <= row.length; j++) {
          newrow[j] = (row[j] || 0) + row[j - 1];
        }
        row = newrow;
      }
      return row;
    };
    var bezier2 = function(colors) {
      let I, lab0, lab1, lab2;
      colors = colors.map((c) => new Color(c));
      if (colors.length === 2) {
        [lab0, lab1] = colors.map((c) => c.lab());
        I = function(t) {
          const lab = [0, 1, 2].map((i) => lab0[i] + t * (lab1[i] - lab0[i]));
          return new Color(lab, "lab");
        };
      } else if (colors.length === 3) {
        [lab0, lab1, lab2] = colors.map((c) => c.lab());
        I = function(t) {
          const lab = [0, 1, 2].map((i) => (1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]);
          return new Color(lab, "lab");
        };
      } else if (colors.length === 4) {
        let lab3;
        [lab0, lab1, lab2, lab3] = colors.map((c) => c.lab());
        I = function(t) {
          const lab = [0, 1, 2].map((i) => (1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]);
          return new Color(lab, "lab");
        };
      } else if (colors.length >= 5) {
        let labs, row, n;
        labs = colors.map((c) => c.lab());
        n = colors.length - 1;
        row = binom_row(n);
        I = function(t) {
          const u = 1 - t;
          const lab = [0, 1, 2].map((i) => labs.reduce((sum, el, j) => sum + row[j] * u ** (n - j) * t ** j * el[i], 0));
          return new Color(lab, "lab");
        };
      } else {
        throw new RangeError("No point in running bezier with only one color.");
      }
      return I;
    };
    module.exports = (colors) => {
      const f = bezier2(colors);
      f.scale = () => scale(f);
      return f;
    };
  }
});

// node_modules/chroma-js/src/generator/blend.js
var require_blend = __commonJS({
  "node_modules/chroma-js/src/generator/blend.js"(exports, module) {
    require_rgb();
    var chroma3 = require_chroma();
    var blend = (bottom, top, mode) => {
      if (!blend[mode]) {
        throw new Error("unknown blend mode " + mode);
      }
      return blend[mode](bottom, top);
    };
    var blend_f = (f) => (bottom, top) => {
      const c0 = chroma3(top).rgb();
      const c1 = chroma3(bottom).rgb();
      return chroma3.rgb(f(c0, c1));
    };
    var each2 = (f) => (c0, c1) => {
      const out = [];
      out[0] = f(c0[0], c1[0]);
      out[1] = f(c0[1], c1[1]);
      out[2] = f(c0[2], c1[2]);
      return out;
    };
    var normal = (a) => a;
    var multiply = (a, b) => a * b / 255;
    var darken = (a, b) => a > b ? b : a;
    var lighten = (a, b) => a > b ? a : b;
    var screen = (a, b) => 255 * (1 - (1 - a / 255) * (1 - b / 255));
    var overlay = (a, b) => b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
    var burn = (a, b) => 255 * (1 - (1 - b / 255) / (a / 255));
    var dodge = (a, b) => {
      if (a === 255)
        return 255;
      a = 255 * (b / 255) / (1 - a / 255);
      return a > 255 ? 255 : a;
    };
    blend.normal = blend_f(each2(normal));
    blend.multiply = blend_f(each2(multiply));
    blend.screen = blend_f(each2(screen));
    blend.overlay = blend_f(each2(overlay));
    blend.darken = blend_f(each2(darken));
    blend.lighten = blend_f(each2(lighten));
    blend.dodge = blend_f(each2(dodge));
    blend.burn = blend_f(each2(burn));
    module.exports = blend;
  }
});

// node_modules/chroma-js/src/generator/cubehelix.js
var require_cubehelix = __commonJS({
  "node_modules/chroma-js/src/generator/cubehelix.js"(exports, module) {
    var { type, clip_rgb, TWOPI } = require_utils();
    var { pow, sin, cos } = Math;
    var chroma3 = require_chroma();
    module.exports = function(start = 300, rotations = -1.5, hue = 1, gamma = 1, lightness = [0, 1]) {
      let dh = 0, dl;
      if (type(lightness) === "array") {
        dl = lightness[1] - lightness[0];
      } else {
        dl = 0;
        lightness = [lightness, lightness];
      }
      const f = function(fract) {
        const a = TWOPI * ((start + 120) / 360 + rotations * fract);
        const l = pow(lightness[0] + dl * fract, gamma);
        const h = dh !== 0 ? hue[0] + fract * dh : hue;
        const amp = h * l * (1 - l) / 2;
        const cos_a = cos(a);
        const sin_a = sin(a);
        const r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
        const g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
        const b = l + amp * (1.97294 * cos_a);
        return chroma3(clip_rgb([r * 255, g * 255, b * 255, 1]));
      };
      f.start = function(s) {
        if (s == null) {
          return start;
        }
        start = s;
        return f;
      };
      f.rotations = function(r) {
        if (r == null) {
          return rotations;
        }
        rotations = r;
        return f;
      };
      f.gamma = function(g) {
        if (g == null) {
          return gamma;
        }
        gamma = g;
        return f;
      };
      f.hue = function(h) {
        if (h == null) {
          return hue;
        }
        hue = h;
        if (type(hue) === "array") {
          dh = hue[1] - hue[0];
          if (dh === 0) {
            hue = hue[1];
          }
        } else {
          dh = 0;
        }
        return f;
      };
      f.lightness = function(h) {
        if (h == null) {
          return lightness;
        }
        if (type(h) === "array") {
          lightness = h;
          dl = h[1] - h[0];
        } else {
          lightness = [h, h];
          dl = 0;
        }
        return f;
      };
      f.scale = () => chroma3.scale(f);
      f.hue(hue);
      return f;
    };
  }
});

// node_modules/chroma-js/src/generator/random.js
var require_random = __commonJS({
  "node_modules/chroma-js/src/generator/random.js"(exports, module) {
    var Color = require_Color();
    var digits = "0123456789abcdef";
    var { floor, random } = Math;
    module.exports = () => {
      let code = "#";
      for (let i = 0; i < 6; i++) {
        code += digits.charAt(floor(random() * 16));
      }
      return new Color(code, "hex");
    };
  }
});

// node_modules/chroma-js/src/utils/analyze.js
var require_analyze = __commonJS({
  "node_modules/chroma-js/src/utils/analyze.js"(exports, module) {
    var type = require_type();
    var { log, pow, floor, abs } = Math;
    var analyze = (data, key = null) => {
      const r = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      if (type(data) === "object") {
        data = Object.values(data);
      }
      data.forEach((val) => {
        if (key && type(val) === "object")
          val = val[key];
        if (val !== void 0 && val !== null && !isNaN(val)) {
          r.values.push(val);
          r.sum += val;
          if (val < r.min)
            r.min = val;
          if (val > r.max)
            r.max = val;
          r.count += 1;
        }
      });
      r.domain = [r.min, r.max];
      r.limits = (mode, num) => limits(r, mode, num);
      return r;
    };
    var limits = (data, mode = "equal", num = 7) => {
      if (type(data) == "array") {
        data = analyze(data);
      }
      const { min, max } = data;
      const values = data.values.sort((a, b) => a - b);
      if (num === 1) {
        return [min, max];
      }
      const limits2 = [];
      if (mode.substr(0, 1) === "c") {
        limits2.push(min);
        limits2.push(max);
      }
      if (mode.substr(0, 1) === "e") {
        limits2.push(min);
        for (let i = 1; i < num; i++) {
          limits2.push(min + i / num * (max - min));
        }
        limits2.push(max);
      } else if (mode.substr(0, 1) === "l") {
        if (min <= 0) {
          throw new Error("Logarithmic scales are only possible for values > 0");
        }
        const min_log = Math.LOG10E * log(min);
        const max_log = Math.LOG10E * log(max);
        limits2.push(min);
        for (let i = 1; i < num; i++) {
          limits2.push(pow(10, min_log + i / num * (max_log - min_log)));
        }
        limits2.push(max);
      } else if (mode.substr(0, 1) === "q") {
        limits2.push(min);
        for (let i = 1; i < num; i++) {
          const p = (values.length - 1) * i / num;
          const pb = floor(p);
          if (pb === p) {
            limits2.push(values[pb]);
          } else {
            const pr = p - pb;
            limits2.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
          }
        }
        limits2.push(max);
      } else if (mode.substr(0, 1) === "k") {
        let cluster;
        const n = values.length;
        const assignments = new Array(n);
        const clusterSizes = new Array(num);
        let repeat = true;
        let nb_iters = 0;
        let centroids = null;
        centroids = [];
        centroids.push(min);
        for (let i = 1; i < num; i++) {
          centroids.push(min + i / num * (max - min));
        }
        centroids.push(max);
        while (repeat) {
          for (let j = 0; j < num; j++) {
            clusterSizes[j] = 0;
          }
          for (let i = 0; i < n; i++) {
            const value = values[i];
            let mindist = Number.MAX_VALUE;
            let best;
            for (let j = 0; j < num; j++) {
              const dist = abs(centroids[j] - value);
              if (dist < mindist) {
                mindist = dist;
                best = j;
              }
              clusterSizes[best]++;
              assignments[i] = best;
            }
          }
          const newCentroids = new Array(num);
          for (let j = 0; j < num; j++) {
            newCentroids[j] = null;
          }
          for (let i = 0; i < n; i++) {
            cluster = assignments[i];
            if (newCentroids[cluster] === null) {
              newCentroids[cluster] = values[i];
            } else {
              newCentroids[cluster] += values[i];
            }
          }
          for (let j = 0; j < num; j++) {
            newCentroids[j] *= 1 / clusterSizes[j];
          }
          repeat = false;
          for (let j = 0; j < num; j++) {
            if (newCentroids[j] !== centroids[j]) {
              repeat = true;
              break;
            }
          }
          centroids = newCentroids;
          nb_iters++;
          if (nb_iters > 200) {
            repeat = false;
          }
        }
        const kClusters = {};
        for (let j = 0; j < num; j++) {
          kClusters[j] = [];
        }
        for (let i = 0; i < n; i++) {
          cluster = assignments[i];
          kClusters[cluster].push(values[i]);
        }
        let tmpKMeansBreaks = [];
        for (let j = 0; j < num; j++) {
          tmpKMeansBreaks.push(kClusters[j][0]);
          tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
        }
        tmpKMeansBreaks = tmpKMeansBreaks.sort((a, b) => a - b);
        limits2.push(tmpKMeansBreaks[0]);
        for (let i = 1; i < tmpKMeansBreaks.length; i += 2) {
          const v = tmpKMeansBreaks[i];
          if (!isNaN(v) && limits2.indexOf(v) === -1) {
            limits2.push(v);
          }
        }
      }
      return limits2;
    };
    module.exports = { analyze, limits };
  }
});

// node_modules/chroma-js/src/utils/contrast.js
var require_contrast = __commonJS({
  "node_modules/chroma-js/src/utils/contrast.js"(exports, module) {
    var Color = require_Color();
    require_luminance();
    module.exports = (a, b) => {
      a = new Color(a);
      b = new Color(b);
      const l1 = a.luminance();
      const l2 = b.luminance();
      return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    };
  }
});

// node_modules/chroma-js/src/utils/delta-e.js
var require_delta_e = __commonJS({
  "node_modules/chroma-js/src/utils/delta-e.js"(exports, module) {
    var Color = require_Color();
    var { sqrt, pow, min, max, atan2, abs, cos, sin, exp, PI } = Math;
    module.exports = function(a, b, Kl = 1, Kc = 1, Kh = 1) {
      var rad2deg = function(rad) {
        return 360 * rad / (2 * PI);
      };
      var deg2rad = function(deg) {
        return 2 * PI * deg / 360;
      };
      a = new Color(a);
      b = new Color(b);
      const [L1, a1, b1] = Array.from(a.lab());
      const [L2, a2, b2] = Array.from(b.lab());
      const avgL = (L1 + L2) / 2;
      const C1 = sqrt(pow(a1, 2) + pow(b1, 2));
      const C2 = sqrt(pow(a2, 2) + pow(b2, 2));
      const avgC = (C1 + C2) / 2;
      const G = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
      const a1p = a1 * (1 + G);
      const a2p = a2 * (1 + G);
      const C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
      const C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
      const avgCp = (C1p + C2p) / 2;
      const arctan1 = rad2deg(atan2(b1, a1p));
      const arctan2 = rad2deg(atan2(b2, a2p));
      const h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
      const h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
      const avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
      const T = 1 - 0.17 * cos(deg2rad(avgHp - 30)) + 0.24 * cos(deg2rad(2 * avgHp)) + 0.32 * cos(deg2rad(3 * avgHp + 6)) - 0.2 * cos(deg2rad(4 * avgHp - 63));
      let deltaHp = h2p - h1p;
      deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
      deltaHp = 2 * sqrt(C1p * C2p) * sin(deg2rad(deltaHp) / 2);
      const deltaL = L2 - L1;
      const deltaCp = C2p - C1p;
      const sl = 1 + 0.015 * pow(avgL - 50, 2) / sqrt(20 + pow(avgL - 50, 2));
      const sc = 1 + 0.045 * avgCp;
      const sh = 1 + 0.015 * avgCp * T;
      const deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
      const Rc = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
      const Rt = -Rc * sin(2 * deg2rad(deltaTheta));
      const result = sqrt(pow(deltaL / (Kl * sl), 2) + pow(deltaCp / (Kc * sc), 2) + pow(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh)));
      return max(0, min(100, result));
    };
  }
});

// node_modules/chroma-js/src/utils/distance.js
var require_distance = __commonJS({
  "node_modules/chroma-js/src/utils/distance.js"(exports, module) {
    var Color = require_Color();
    module.exports = function(a, b, mode = "lab") {
      a = new Color(a);
      b = new Color(b);
      const l1 = a.get(mode);
      const l2 = b.get(mode);
      let sum_sq = 0;
      for (let i in l1) {
        const d = (l1[i] || 0) - (l2[i] || 0);
        sum_sq += d * d;
      }
      return Math.sqrt(sum_sq);
    };
  }
});

// node_modules/chroma-js/src/utils/valid.js
var require_valid = __commonJS({
  "node_modules/chroma-js/src/utils/valid.js"(exports, module) {
    var Color = require_Color();
    module.exports = (...args) => {
      try {
        new Color(...args);
        return true;
      } catch (e) {
        return false;
      }
    };
  }
});

// node_modules/chroma-js/src/utils/scales.js
var require_scales = __commonJS({
  "node_modules/chroma-js/src/utils/scales.js"(exports, module) {
    var chroma3 = require_chroma();
    require_hsl();
    var scale = require_scale();
    module.exports = {
      cool() {
        return scale([chroma3.hsl(180, 1, 0.9), chroma3.hsl(250, 0.7, 0.4)]);
      },
      hot() {
        return scale(["#000", "#f00", "#ff0", "#fff"], [0, 0.25, 0.75, 1]).mode("rgb");
      }
    };
  }
});

// node_modules/chroma-js/src/colors/colorbrewer.js
var require_colorbrewer = __commonJS({
  "node_modules/chroma-js/src/colors/colorbrewer.js"(exports, module) {
    var colorbrewer = {
      // sequential
      OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
      PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
      BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
      Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
      BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
      YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
      YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
      Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
      RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
      Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
      YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
      Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
      GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
      Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
      YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
      PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
      Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
      PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
      Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
      // diverging
      Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
      RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
      RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
      PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
      PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
      RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
      RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
      PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
      // qualitative
      Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
      Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
      Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
      Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
      Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
      Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
      Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
      Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    };
    for (let key of Object.keys(colorbrewer)) {
      colorbrewer[key.toLowerCase()] = colorbrewer[key];
    }
    module.exports = colorbrewer;
  }
});

// node_modules/chroma-js/index.js
var require_chroma_js = __commonJS({
  "node_modules/chroma-js/index.js"(exports, module) {
    var chroma3 = require_chroma();
    require_cmyk();
    require_css();
    require_gl();
    require_hcg();
    require_hex();
    require_hsi();
    require_hsl();
    require_hsv();
    require_lab();
    require_lch();
    require_named();
    require_num();
    require_rgb();
    require_temp();
    require_oklab();
    require_oklch();
    require_alpha();
    require_clipped();
    require_darken();
    require_get();
    require_luminance();
    require_mix2();
    require_premultiply();
    require_saturate();
    require_set();
    require_rgb2();
    require_lrgb();
    require_lab2();
    require_lch2();
    require_num2();
    require_hcg2();
    require_hsi2();
    require_hsl2();
    require_hsv2();
    require_oklab2();
    require_oklch2();
    chroma3.average = require_average();
    chroma3.bezier = require_bezier();
    chroma3.blend = require_blend();
    chroma3.cubehelix = require_cubehelix();
    chroma3.mix = chroma3.interpolate = require_mix();
    chroma3.random = require_random();
    chroma3.scale = require_scale();
    chroma3.analyze = require_analyze().analyze;
    chroma3.contrast = require_contrast();
    chroma3.deltaE = require_delta_e();
    chroma3.distance = require_distance();
    chroma3.limits = require_analyze().limits;
    chroma3.valid = require_valid();
    chroma3.scales = require_scales();
    chroma3.colors = require_w3cx11();
    chroma3.brewer = require_colorbrewer();
    module.exports = chroma3;
  }
});

// node_modules/uuid/dist/esm-browser/regex.js
var regex_default;
var init_regex = __esm({
  "node_modules/uuid/dist/esm-browser/regex.js"() {
    regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  }
});

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default;
var init_validate = __esm({
  "node_modules/uuid/dist/esm-browser/validate.js"() {
    init_regex();
    validate_default = validate;
  }
});

// node_modules/uuid/dist/esm-browser/stringify.js
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
var byteToHex;
var init_stringify = __esm({
  "node_modules/uuid/dist/esm-browser/stringify.js"() {
    byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).slice(1));
    }
  }
});

// node_modules/uuid/dist/esm-browser/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  let v;
  const arr = new Uint8Array(16);
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 255;
  arr[2] = v >>> 8 & 255;
  arr[3] = v & 255;
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 255;
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 255;
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 255;
  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v / 4294967296 & 255;
  arr[12] = v >>> 24 & 255;
  arr[13] = v >>> 16 & 255;
  arr[14] = v >>> 8 & 255;
  arr[15] = v & 255;
  return arr;
}
var parse_default;
var init_parse = __esm({
  "node_modules/uuid/dist/esm-browser/parse.js"() {
    init_validate();
    parse_default = parse;
  }
});

// node_modules/uuid/dist/esm-browser/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = parse_default(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return unsafeStringify(bytes);
  }
  try {
    generateUUID.name = name;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
var DNS, URL;
var init_v35 = __esm({
  "node_modules/uuid/dist/esm-browser/v35.js"() {
    init_stringify();
    init_parse();
    DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  }
});

// node_modules/uuid/dist/esm-browser/md5.js
function md5(bytes) {
  if (typeof bytes === "string") {
    const msg = unescape(encodeURIComponent(bytes));
    bytes = new Uint8Array(msg.length);
    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = "0123456789abcdef";
  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 255;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
    output.push(hex);
  }
  return output;
}
function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
function wordsToMd5(x, len) {
  x[len >> 5] |= 128 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}
function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));
  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 255) << i % 32;
  }
  return output;
}
function safeAdd(x, y) {
  const lsw = (x & 65535) + (y & 65535);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
var md5_default;
var init_md5 = __esm({
  "node_modules/uuid/dist/esm-browser/md5.js"() {
    md5_default = md5;
  }
});

// node_modules/uuid/dist/esm-browser/v3.js
var v3, v3_default;
var init_v3 = __esm({
  "node_modules/uuid/dist/esm-browser/v3.js"() {
    init_v35();
    init_md5();
    v3 = v35("v3", 48, md5_default);
    v3_default = v3;
  }
});

// node_modules/uuid/dist/esm-browser/index.js
var init_esm_browser = __esm({
  "node_modules/uuid/dist/esm-browser/index.js"() {
    init_v3();
  }
});

// utils/bezier.ts
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    var intervalStart = 0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(
        aX,
        intervalStart,
        intervalStart + kSampleStepSize,
        mX1,
        mX2
      );
    }
  }
  return function BezierEasing(x) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}
var NEWTON_ITERATIONS, NEWTON_MIN_SLOPE, SUBDIVISION_PRECISION, SUBDIVISION_MAX_ITERATIONS, kSplineTableSize, kSampleStepSize, float32ArraySupported;
var init_bezier = __esm({
  "utils/bezier.ts"() {
    "use strict";
    NEWTON_ITERATIONS = 4;
    NEWTON_MIN_SLOPE = 1e-3;
    SUBDIVISION_PRECISION = 1e-7;
    SUBDIVISION_MAX_ITERATIONS = 10;
    kSplineTableSize = 11;
    kSampleStepSize = 1 / (kSplineTableSize - 1);
    float32ArraySupported = typeof Float32Array === "function";
  }
});

// utils/curves.ts
var easeInOutCustom;
var init_curves = __esm({
  "utils/curves.ts"() {
    "use strict";
    init_bezier();
    easeInOutCustom = bezier(0.85, 0, 0.85, 1);
  }
});

// utils/crayolaColors.ts
var crayolaColors, crayolaColors_default;
var init_crayolaColors = __esm({
  "utils/crayolaColors.ts"() {
    "use strict";
    crayolaColors = [
      {
        hex: "#EFDECD",
        name: "Almond",
        rgb: "(239, 222, 205)"
      },
      {
        hex: "#CD9575",
        name: "Antique Brass",
        rgb: "(205, 149, 117)"
      },
      {
        hex: "#FDD9B5",
        name: "Apricot",
        rgb: "(253, 217, 181)"
      },
      {
        hex: "#78DBE2",
        name: "Aquamarine",
        rgb: "(120, 219, 226)"
      },
      {
        hex: "#87A96B",
        name: "Asparagus",
        rgb: "(135, 169, 107)"
      },
      {
        hex: "#FFA474",
        name: "Atomic Tangerine",
        rgb: "(255, 164, 116)"
      },
      {
        hex: "#FAE7B5",
        name: "Banana Mania",
        rgb: "(250, 231, 181)"
      },
      {
        hex: "#9F8170",
        name: "Beaver",
        rgb: "(159, 129, 112)"
      },
      {
        hex: "#FD7C6E",
        name: "Bittersweet",
        rgb: "(253, 124, 110)"
      },
      {
        hex: "#000000",
        name: "Black",
        rgb: "(0,0,0)"
      },
      {
        hex: "#ACE5EE",
        name: "Blizzard Blue",
        rgb: "(172, 229, 238)"
      },
      {
        hex: "#1F75FE",
        name: "Blue",
        rgb: "(31, 117, 254)"
      },
      {
        hex: "#A2A2D0",
        name: "Blue Bell",
        rgb: "(162, 162, 208)"
      },
      {
        hex: "#6699CC",
        name: "Blue Gray",
        rgb: "(102, 153, 204)"
      },
      {
        hex: "#0D98BA",
        name: "Blue Green",
        rgb: "(13, 152, 186)"
      },
      {
        hex: "#7366BD",
        name: "Blue Violet",
        rgb: "(115, 102, 189)"
      },
      {
        hex: "#DE5D83",
        name: "Blush",
        rgb: "(222, 93, 131)"
      },
      {
        hex: "#CB4154",
        name: "Brick Red",
        rgb: "(203, 65, 84)"
      },
      {
        hex: "#B4674D",
        name: "Brown",
        rgb: "(180, 103, 77)"
      },
      {
        hex: "#FF7F49",
        name: "Burnt Orange",
        rgb: "(255, 127, 73)"
      },
      {
        hex: "#EA7E5D",
        name: "Burnt Sienna",
        rgb: "(234, 126, 93)"
      },
      {
        hex: "#B0B7C6",
        name: "Cadet Blue",
        rgb: "(176, 183, 198)"
      },
      {
        hex: "#FFFF99",
        name: "Canary",
        rgb: "(255, 255, 153)"
      },
      {
        hex: "#1CD3A2",
        name: "Caribbean Green",
        rgb: "(28, 211, 162)"
      },
      {
        hex: "#FFAACC",
        name: "Carnation Pink",
        rgb: "(255, 170, 204)"
      },
      {
        hex: "#DD4492",
        name: "Cerise",
        rgb: "(221, 68, 146)"
      },
      {
        hex: "#1DACD6",
        name: "Cerulean",
        rgb: "(29, 172, 214)"
      },
      {
        hex: "#BC5D58",
        name: "Chestnut",
        rgb: "(188, 93, 88)"
      },
      {
        hex: "#DD9475",
        name: "Copper",
        rgb: "(221, 148, 117)"
      },
      {
        hex: "#9ACEEB",
        name: "Cornflower",
        rgb: "(154, 206, 235)"
      },
      {
        hex: "#FFBCD9",
        name: "Cotton Candy",
        rgb: "(255, 188, 217)"
      },
      {
        hex: "#FDDB6D",
        name: "Dandelion",
        rgb: "(253, 219, 109)"
      },
      {
        hex: "#2B6CC4",
        name: "Denim",
        rgb: "(43, 108, 196)"
      },
      {
        hex: "#EFCDB8",
        name: "Desert Sand",
        rgb: "(239, 205, 184)"
      },
      {
        hex: "#6E5160",
        name: "Eggplant",
        rgb: "(110, 81, 96)"
      },
      {
        hex: "#CEFF1D",
        name: "Electric Lime",
        rgb: "(206, 255, 29)"
      },
      {
        hex: "#71BC78",
        name: "Fern",
        rgb: "(113, 188, 120)"
      },
      {
        hex: "#6DAE81",
        name: "Forest Green",
        rgb: "(109, 174, 129)"
      },
      {
        hex: "#C364C5",
        name: "Fuchsia",
        rgb: "(195, 100, 197)"
      },
      {
        hex: "#CC6666",
        name: "Fuzzy Wuzzy",
        rgb: "(204, 102, 102)"
      },
      {
        hex: "#E7C697",
        name: "Gold",
        rgb: "(231, 198, 151)"
      },
      {
        hex: "#FCD975",
        name: "Goldenrod",
        rgb: "(252, 217, 117)"
      },
      {
        hex: "#A8E4A0",
        name: "Granny Smith Apple",
        rgb: "(168, 228, 160)"
      },
      {
        hex: "#95918C",
        name: "Gray",
        rgb: "(149, 145, 140)"
      },
      {
        hex: "#1CAC78",
        name: "Green",
        rgb: "(28, 172, 120)"
      },
      {
        hex: "#1164B4",
        name: "Green Blue",
        rgb: "(17, 100, 180)"
      },
      {
        hex: "#F0E891",
        name: "Green Yellow",
        rgb: "(240, 232, 145)"
      },
      {
        hex: "#FF1DCE",
        name: "Hot Magenta",
        rgb: "(255, 29, 206)"
      },
      {
        hex: "#B2EC5D",
        name: "Inchworm",
        rgb: "(178, 236, 93)"
      },
      {
        hex: "#5D76CB",
        name: "Indigo",
        rgb: "(93, 118, 203)"
      },
      {
        hex: "#CA3767",
        name: "Jazzberry Jam",
        rgb: "(202, 55, 103)"
      },
      {
        hex: "#3BB08F",
        name: "Jungle Green",
        rgb: "(59, 176, 143)"
      },
      {
        hex: "#FEFE22",
        name: "Laser Lemon",
        rgb: "(254, 254, 34)"
      },
      {
        hex: "#FCB4D5",
        name: "Lavender",
        rgb: "(252, 180, 213)"
      },
      {
        hex: "#FFF44F",
        name: "Lemon Yellow",
        rgb: "(255, 244, 79)"
      },
      {
        hex: "#FFBD88",
        name: "Macaroni and Cheese",
        rgb: "(255, 189, 136)"
      },
      {
        hex: "#F664AF",
        name: "Magenta",
        rgb: "(246, 100, 175)"
      },
      {
        hex: "#AAF0D1",
        name: "Magic Mint",
        rgb: "(170, 240, 209)"
      },
      {
        hex: "#CD4A4C",
        name: "Mahogany",
        rgb: "(205, 74, 76)"
      },
      {
        hex: "#EDD19C",
        name: "Maize",
        rgb: "(237, 209, 156)"
      },
      {
        hex: "#979AAA",
        name: "Manatee",
        rgb: "(151, 154, 170)"
      },
      {
        hex: "#FF8243",
        name: "Mango Tango",
        rgb: "(255, 130, 67)"
      },
      {
        hex: "#C8385A",
        name: "Maroon",
        rgb: "(200, 56, 90)"
      },
      {
        hex: "#EF98AA",
        name: "Mauvelous",
        rgb: "(239, 152, 170)"
      },
      {
        hex: "#FDBCB4",
        name: "Melon",
        rgb: "(253, 188, 180)"
      },
      {
        hex: "#1A4876",
        name: "Midnight Blue",
        rgb: "(26, 72, 118)"
      },
      {
        hex: "#30BA8F",
        name: "Mountain Meadow",
        rgb: "(48, 186, 143)"
      },
      {
        hex: "#C54B8C",
        name: "Mulberry",
        rgb: "(197, 75, 140)"
      },
      {
        hex: "#1974D2",
        name: "Navy Blue",
        rgb: "(25, 116, 210)"
      },
      {
        hex: "#FFA343",
        name: "Neon Carrot",
        rgb: "(255, 163, 67)"
      },
      {
        hex: "#BAB86C",
        name: "Olive Green",
        rgb: "(186, 184, 108)"
      },
      {
        hex: "#FF7538",
        name: "Orange",
        rgb: "(255, 117, 56)"
      },
      {
        hex: "#FF2B2B",
        name: "Orange Red",
        rgb: "(255, 43, 43)"
      },
      {
        hex: "#F8D568",
        name: "Orange Yellow",
        rgb: "(248, 213, 104)"
      },
      {
        hex: "#E6A8D7",
        name: "Orchid",
        rgb: "(230, 168, 215)"
      },
      {
        hex: "#414A4C",
        name: "Outer Space",
        rgb: "(65, 74, 76)"
      },
      {
        hex: "#FF6E4A",
        name: "Outrageous Orange",
        rgb: "(255, 110, 74)"
      },
      {
        hex: "#1CA9C9",
        name: "Pacific Blue",
        rgb: "(28, 169, 201)"
      },
      {
        hex: "#FFCFAB",
        name: "Peach",
        rgb: "(255, 207, 171)"
      },
      {
        hex: "#C5D0E6",
        name: "Periwinkle",
        rgb: "(197, 208, 230)"
      },
      {
        hex: "#FDDDE6",
        name: "Piggy Pink",
        rgb: "(253, 221, 230)"
      },
      {
        hex: "#158078",
        name: "Pine Green",
        rgb: "(21, 128, 120)"
      },
      {
        hex: "#FC74FD",
        name: "Pink Flamingo",
        rgb: "(252, 116, 253)"
      },
      {
        hex: "#F78FA7",
        name: "Pink Sherbet",
        rgb: "(247, 143, 167)"
      },
      {
        hex: "#8E4585",
        name: "Plum",
        rgb: "(142, 69, 133)"
      },
      {
        hex: "#7442C8",
        name: "Purple Heart",
        rgb: "(116, 66, 200)"
      },
      {
        hex: "#9D81BA",
        name: "Purple Mountain's Majesty",
        rgb: "(157, 129, 186)"
      },
      {
        hex: "#FE4EDA",
        name: "Purple Pizzazz",
        rgb: "(254, 78, 218)"
      },
      {
        hex: "#FF496C",
        name: "Radical Red",
        rgb: "(255, 73, 108)"
      },
      {
        hex: "#D68A59",
        name: "Raw Sienna",
        rgb: "(214, 138, 89)"
      },
      {
        hex: "#714B23",
        name: "Raw Umber",
        rgb: "(113, 75, 35)"
      },
      {
        hex: "#FF48D0",
        name: "Razzle Dazzle Rose",
        rgb: "(255, 72, 208)"
      },
      {
        hex: "#E3256B",
        name: "Razzmatazz",
        rgb: "(227, 37, 107)"
      },
      {
        hex: "#EE204D",
        name: "Red",
        rgb: "(238,32 ,77 )"
      },
      {
        hex: "#FF5349",
        name: "Red Orange",
        rgb: "(255, 83, 73)"
      },
      {
        hex: "#C0448F",
        name: "Red Violet",
        rgb: "(192, 68, 143)"
      },
      {
        hex: "#1FCECB",
        name: "Robin's Egg Blue",
        rgb: "(31, 206, 203)"
      },
      {
        hex: "#7851A9",
        name: "Royal Purple",
        rgb: "(120, 81, 169)"
      },
      {
        hex: "#FF9BAA",
        name: "Salmon",
        rgb: "(255, 155, 170)"
      },
      {
        hex: "#FC2847",
        name: "Scarlet",
        rgb: "(252, 40, 71)"
      },
      {
        hex: "#76FF7A",
        name: "Screamin' Green",
        rgb: "(118, 255, 122)"
      },
      {
        hex: "#9FE2BF",
        name: "Sea Green",
        rgb: "(159, 226, 191)"
      },
      {
        hex: "#A5694F",
        name: "Sepia",
        rgb: "(165, 105, 79)"
      },
      {
        hex: "#8A795D",
        name: "Shadow",
        rgb: "(138, 121, 93)"
      },
      {
        hex: "#45CEA2",
        name: "Shamrock",
        rgb: "(69, 206, 162)"
      },
      {
        hex: "#FB7EFD",
        name: "Shocking Pink",
        rgb: "(251, 126, 253)"
      },
      {
        hex: "#CDC5C2",
        name: "Silver",
        rgb: "(205, 197, 194)"
      },
      {
        hex: "#80DAEB",
        name: "Sky Blue",
        rgb: "(128, 218, 235)"
      },
      {
        hex: "#ECEABE",
        name: "Spring Green",
        rgb: "(236, 234, 190)"
      },
      {
        hex: "#FFCF48",
        name: "Sunglow",
        rgb: "(255, 207, 72)"
      },
      {
        hex: "#FD5E53",
        name: "Sunset Orange",
        rgb: "(253, 94, 83)"
      },
      {
        hex: "#FAA76C",
        name: "Tan",
        rgb: "(250, 167, 108)"
      },
      {
        hex: "#18A7B5",
        name: "Teal Blue",
        rgb: "(24, 167, 181)"
      },
      {
        hex: "#EBC7DF",
        name: "Thistle",
        rgb: "(235, 199, 223)"
      },
      {
        hex: "#FC89AC",
        name: "Tickle Me Pink",
        rgb: "(252, 137, 172)"
      },
      {
        hex: "#DBD7D2",
        name: "Timberwolf",
        rgb: "(219, 215, 210)"
      },
      {
        hex: "#17806D",
        name: "Tropical Rain Forest",
        rgb: "(23, 128, 109)"
      },
      {
        hex: "#DEAA88",
        name: "Tumbleweed",
        rgb: "(222, 170, 136)"
      },
      {
        hex: "#77DDE7",
        name: "Turquoise Blue",
        rgb: "(119, 221, 231)"
      },
      {
        hex: "#FFFF66",
        name: "Unmellow Yellow",
        rgb: "(255, 255, 102)"
      },
      {
        hex: "#926EAE",
        name: "Violet (Purple)",
        rgb: "(146, 110, 174)"
      },
      {
        hex: "#324AB2",
        name: "Violet Blue",
        rgb: "(50, 74, 178)"
      },
      {
        hex: "#F75394",
        name: "Violet Red",
        rgb: "(247, 83, 148)"
      },
      {
        hex: "#FFA089",
        name: "Vivid Tangerine",
        rgb: "(255, 160, 137)"
      },
      {
        hex: "#8F509D",
        name: "Vivid Violet",
        rgb: "(143, 80, 157)"
      },
      {
        hex: "#FFFFFF",
        name: "White",
        rgb: "(255, 255, 255)"
      },
      {
        hex: "#A2ADD0",
        name: "Wild Blue Yonder",
        rgb: "(162, 173, 208)"
      },
      {
        hex: "#FF43A4",
        name: "Wild Strawberry",
        rgb: "(255, 67, 164)"
      },
      {
        hex: "#FC6C85",
        name: "Wild Watermelon",
        rgb: "(252, 108, 133)"
      },
      {
        hex: "#CDA4DE",
        name: "Wisteria",
        rgb: "(205, 164, 222)"
      },
      {
        hex: "#FCE883",
        name: "Yellow",
        rgb: "(252, 232, 131)"
      },
      {
        hex: "#C5E384",
        name: "Yellow Green",
        rgb: "(197, 227, 132)"
      },
      {
        hex: "#FFAE42",
        name: "Yellow Orange",
        rgb: "(255, 174, 66)"
      }
    ];
    crayolaColors_default = crayolaColors;
  }
});

// utils/generateColors.ts
var import_lodash, import_chroma_js, UUID_NAMESPACE, generateColors, generateColors_default;
var init_generateColors = __esm({
  "utils/generateColors.ts"() {
    "use strict";
    init_esm_browser();
    import_lodash = __toESM(require_lodash2());
    import_chroma_js = __toESM(require_chroma_js());
    init_curves();
    init_crayolaColors();
    UUID_NAMESPACE = "a712f960-32ec-11ee-be56-0242ac120002";
    generateColors = async (sourceColor, steps = 16, customName) => {
      if (!sourceColor)
        return true;
      let contrastRange = new Array(0.2, 19.8);
      let contrastDistribution = import_lodash.default.times(steps, (index) => {
        let curveStep = easeInOutCustom(index / (steps - 1));
        let range = contrastRange[1] - contrastRange[0];
        return curveStep * range + contrastRange[0];
      });
      let sourceContrast = import_chroma_js.default.contrast(sourceColor, "white");
      let closestContrastValue = import_lodash.default.first(
        import_lodash.default.sortBy(contrastDistribution, (contrastStep) => {
          return Math.abs(import_lodash.default.subtract(sourceContrast, contrastStep));
        })
      );
      let sourceColorIndex = import_lodash.default.findIndex(contrastDistribution, (o) => {
        return o === closestContrastValue;
      });
      let confine = (number) => {
        return Math.max(Math.min(number, 1), 0);
      };
      let lowContrast = 1.01;
      let highContrast = 19;
      let contrastRangeX = highContrast - lowContrast;
      let targetContrastArray = import_lodash.default.map(import_lodash.default.range(steps), (step) => {
        let output = easeInOutCustom((step + 1) / steps) * contrastRangeX + lowContrast;
        return output;
      });
      let colorOptionsArray = new Array(sourceColor);
      let hueRate = 0.02;
      let satRate = 6e-3;
      let lumRate = 0.02;
      let changeFactor = 0.25;
      let loops = 400;
      let loopCount = 1;
      const colorOptionLoop = async () => {
        let sourceChroma = (0, import_chroma_js.default)(sourceColor);
        let firstColorOption = import_lodash.default.first(colorOptionsArray);
        let lastColorOption = import_lodash.default.last(colorOptionsArray);
        if (import_chroma_js.default.contrast(
          firstColorOption ? firstColorOption : sourceColor,
          "white"
        ) < highContrast) {
          let darkerColor = import_chroma_js.default.hsl(
            sourceChroma.get("hsl.h") - loopCount * hueRate * changeFactor,
            sourceChroma.get("hsl.s") + loopCount * satRate * changeFactor,
            sourceChroma.get("hsl.l") - loopCount * lumRate * changeFactor
          ).hex();
          colorOptionsArray = new Array(darkerColor).concat(colorOptionsArray);
        }
        if (import_chroma_js.default.contrast(
          lastColorOption ? lastColorOption : sourceColor,
          "white"
        ) > lowContrast) {
          let lighterColor = import_chroma_js.default.hsl(
            sourceChroma.get("hsl.h") + loopCount * hueRate * changeFactor,
            sourceChroma.get("hsl.s") - loopCount * satRate * changeFactor,
            sourceChroma.get("hsl.l") + loopCount * lumRate * changeFactor
          ).hex();
          colorOptionsArray.push(lighterColor);
        }
        if (loopCount < loops) {
          loopCount++;
          await colorOptionLoop();
        }
      };
      await colorOptionLoop();
      let contrastMatchedColors = import_lodash.default.map(
        targetContrastArray,
        (targetContrastValue) => {
          let selectedColor = import_lodash.default.first(
            import_lodash.default.sortBy(colorOptionsArray, (candidateColor) => {
              let contrastDifference = Math.abs(
                import_chroma_js.default.contrast(candidateColor, "white") - targetContrastValue
              );
              return contrastDifference;
            })
          );
          return selectedColor;
        }
      );
      let swatchList = import_lodash.default.map(
        contrastMatchedColors,
        (color, index) => {
          if (index === sourceColorIndex) {
            color = sourceColor;
          }
          const contrastWhite = import_chroma_js.default.contrast(color, "white");
          const contrastBlack = import_chroma_js.default.contrast(color, "black");
          var displayColor = "";
          if (contrastWhite >= 4.5) {
            displayColor = "white";
          } else {
            displayColor = "black";
          }
          return {
            hex: (0, import_chroma_js.default)(color).hex(),
            hue: (0, import_chroma_js.default)(color).get("hsl.h"),
            sat: (0, import_chroma_js.default)(color).get("hsl.s"),
            lum: (0, import_chroma_js.default)(color).get("hsl.l"),
            rgb: (0, import_chroma_js.default)(color).rgb(),
            contrastBlack,
            contrastWhite,
            displayColor,
            sourceColorIndex,
            steps,
            name: ""
          };
        }
      );
      var swatchName = "";
      if (customName === "") {
        let colorsByDistance = import_lodash.default.sortBy(
          crayolaColors_default,
          (crayolaColor) => {
            return import_chroma_js.default.distance(crayolaColor.hex, sourceColor);
          },
          "asc"
        );
        let matchingCrayolaColor = import_lodash.default.first(colorsByDistance);
        swatchName = matchingCrayolaColor ? matchingCrayolaColor.name : sourceColor;
      } else {
        swatchName = customName;
      }
      let swatchNameFormatted = swatchName.trim().replace(/\s/g, "-").toLowerCase();
      import_lodash.default.each(swatchList, (swatch, i) => {
        swatch.name = `${swatchNameFormatted}-${i}`;
      });
      return {
        id: v3_default(sourceColor, UUID_NAMESPACE),
        name: swatchName,
        swatches: swatchList,
        sourceColorIndex,
        colorOptionsArray
      };
    };
    generateColors_default = generateColors;
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
function main_default() {
  showUI({ width: 900, height: 640 });
  const paletteCollectionName = "Paletteer Palettes";
  const rgbToHex = async (rgbObject) => {
    let multipliedRgb = {
      r: rgbObject.r * 255,
      g: rgbObject.g * 255,
      b: rgbObject.b * 255
    };
    let hexString = await (0, import_chroma_js2.default)(multipliedRgb).hex();
    return hexString;
  };
  let selectionColors = [];
  let deepColorSample = false;
  const getColors = async (selection) => {
    for (var i = 0; i < selection.length; i++) {
      let object = selection[i];
      if (object.children && deepColorSample) {
        getColors(object.children);
      }
      if (object && object.fills) {
        for (var f = 0; f < object.fills.length; f++) {
          let fill = object.fills[f];
          if (fill.color) {
            selectionColors.push(await rgbToHex(fill.color));
          }
          if (fill.gradientStops) {
            for (var s = 0; s < fill.gradientStops.length; s++) {
              let stop = fill.gradientStops[s];
              selectionColors.push(await rgbToHex(stop.color));
            }
          }
        }
      }
    }
    return (0, import_lodash2.uniq)(selectionColors);
  };
  const hexColorIsSaved = async (hex) => {
    let palettesToCompare = await getData("savedPaletteList");
    let seedColorsToCompare = (0, import_lodash2.map)(palettesToCompare, (palette) => {
      return palette.swatches[palette.sourceColorIndex].hex;
    });
    return (0, import_lodash2.includes)(seedColorsToCompare, hex);
  };
  const getData = async (string) => {
    let stringData = await figma.root.getPluginData(string);
    let parsedData = string != "" ? await JSON.parse(stringData).data : { test: "test" };
    return parsedData;
  };
  const setData = async (name, data) => {
    let stringifiedData = await JSON.stringify({ data });
    await figma.root.setPluginData(name, stringifiedData);
  };
  const getConfig = async () => {
    let configData = await getData("paletteerConfig");
    return configData;
  };
  const setConfig = async (key, value) => {
    let configData = await getData("paletteerConfig");
    if (configData === "") {
      configData = {};
    }
    configData[key] = value;
    await setData("paletteerConfig", configData);
    getConfig();
  };
  const getPaletteCollection = async () => {
    let configData = await getConfig();
    let paletteCollectionId = configData.paletteCollectionId ? configData.paletteCollectionId : "";
    let paletteCollection = await figma.variables.getVariableCollectionById(
      paletteCollectionId
    );
    if (paletteCollection === null) {
      paletteCollection = await figma.variables.createVariableCollection(
        paletteCollectionName
      );
      await setConfig("paletteCollectionId", paletteCollection.id);
    }
    return paletteCollection;
  };
  const getDefaultModeId = async () => {
    let { defaultModeId } = await getPaletteCollection();
    return defaultModeId;
  };
  const colorVariableFactory = async (index, paletteCollection, paletteName) => {
    let colorVariable = await figma.variables.createVariable(
      `${paletteName}/${(index + 1).toFixed(0).padStart(2, "0")}`,
      // Name variables upon creation, ex. 'palette name/01'
      paletteCollection,
      "COLOR"
    );
    return colorVariable;
  };
  const getVariableColorById = async (variableId) => {
    let colorVariableData = await figma.variables.getVariableById(variableId);
    let defaultModeId = await getDefaultModeId();
    let variableRgba = colorVariableData == null ? void 0 : colorVariableData.valuesByMode[defaultModeId];
    return rgbToHex(variableRgba);
  };
  const mapVariablesToPalettes = async () => {
    let currentPalettes = await getData("savedPaletteList");
    let paletteIndex = 0;
    try {
      for (var iter2 = __forAwait(currentPalettes), more2, temp2, error2; more2 = !(temp2 = await iter2.next()).done; more2 = false) {
        let palette = temp2.value;
        let swatchIndex = 0;
        try {
          for (var iter = __forAwait(palette.swatches), more, temp, error; more = !(temp = await iter.next()).done; more = false) {
            let swatch = temp.value;
            let variableColor = await getVariableColorById(swatch.colorVariableId);
            currentPalettes[paletteIndex].swatches[swatchIndex].variableColor = variableColor;
            swatchIndex++;
          }
        } catch (temp) {
          error = [temp];
        } finally {
          try {
            more && (temp = iter.return) && await temp.call(iter);
          } finally {
            if (error)
              throw error[0];
          }
        }
        paletteIndex++;
      }
    } catch (temp2) {
      error2 = [temp2];
    } finally {
      try {
        more2 && (temp2 = iter2.return) && await temp2.call(iter2);
      } finally {
        if (error2)
          throw error2[0];
      }
    }
    return currentPalettes;
  };
  const postPalettesToUI = async () => {
    let currentPalettes = await mapVariablesToPalettes();
    figma.ui.postMessage({
      type: "receive-palettes",
      palettes: currentPalettes
    });
  };
  const postConfigToUI = async () => {
    let configData = await getConfig();
    figma.ui.postMessage({
      type: "receive-config",
      configData
    });
  };
  const newColorFromHex = async (hex) => {
    let configData = await getConfig();
    let stepCount = configData != "" ? configData.stepCount : 16;
    let isSavedAlready = await hexColorIsSaved(hex);
    if (!isSavedAlready) {
      let newPalette = await generateColors_default(hex, stepCount, "");
      let paletteCollection = await getPaletteCollection();
      if (paletteCollection != null) {
        let modeId = paletteCollection.defaultModeId;
        for (let step = 0; step < newPalette.swatches.length; step++) {
          let colorVariable = await colorVariableFactory(
            step,
            paletteCollection,
            newPalette.name
          );
          let swatch = newPalette.swatches[step];
          colorVariable.setValueForMode(modeId, {
            r: swatch.rgb[0] / 255,
            g: swatch.rgb[1] / 255,
            b: swatch.rgb[2] / 255
          });
          newPalette.swatches[step].colorVariableId = colorVariable.id;
        }
        let existingPalette = await getData("savedPaletteList");
        let updatedPaletteList = [...existingPalette, newPalette];
        await setData("savedPaletteList", updatedPaletteList);
        await setConfig("paletteCollectionId", paletteCollection.id);
        await setConfig("paletteCollection", paletteCollection);
      }
    }
  };
  const removeColorByHex = async (hex) => {
    let existingPaletteList = await getData("savedPaletteList");
    (0, import_lodash2.each)(existingPaletteList, (palette) => {
      let hexList = (0, import_lodash2.map)(palette.swatches, (swatch) => {
        return swatch.hex;
      });
      if ((0, import_lodash2.includes)(hexList, hex)) {
        (0, import_lodash2.each)(palette.swatches, (swatch) => {
          var _a;
          (_a = figma.variables.getVariableById(swatch.colorVariableId)) == null ? void 0 : _a.remove();
        });
      }
    });
    let newPaletteList = (0, import_lodash2.filter)(existingPaletteList, (palette) => {
      return !(0, import_lodash2.includes)(
        (0, import_lodash2.map)(palette.swatches, (swatch) => {
          return swatch.hex;
        }),
        hex
      );
    });
    await setData("savedPaletteList", newPaletteList);
  };
  const initPlugin = async () => {
    await figma.ui.postMessage({
      type: "init-plugin",
      selectionColors: await getColors(figma.currentPage.selection),
      pageColors: await getColors(figma.currentPage.children),
      fileName: figma.root.name
    });
    await postConfigToUI();
    await postPalettesToUI();
  };
  initPlugin();
  figma.ui.onmessage = async (msg) => {
    switch (msg.type) {
      case "reset-data":
        await setData("savedSeedColorList", "");
        await setData("savedPaletteList", "");
        await setData("paletteerConfig", "");
        postPalettesToUI();
        postConfigToUI();
        break;
      case "add-color":
        await newColorFromHex(msg.hex);
        postPalettesToUI();
        break;
      case "remove-color":
        await removeColorByHex(msg.hex);
        postPalettesToUI();
        break;
      case "get-config":
        await getConfig();
        break;
      case "set-config":
        let configData = await setConfig(msg.key, msg.value);
        break;
      case "generate-style-guide":
        figma.notify(
          "Paletteer has generated swatches and example components to help get you started!"
        );
        break;
      case "close-plugin":
        figma.closePlugin();
        break;
      default:
    }
  };
}
var import_lodash2, import_chroma_js2, colorNames;
var init_main = __esm({
  "src/main.ts"() {
    "use strict";
    init_lib();
    import_lodash2 = __toESM(require_lodash2());
    import_chroma_js2 = __toESM(require_chroma_js());
    init_generateColors();
    init_crayolaColors();
    colorNames = new Array();
    if (crayolaColors_default) {
      colorNames = crayolaColors_default;
    }
  }
});

// <stdin>
var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
var commandId = true ? "src/main.ts--default" : figma.command;
modules[commandId]();
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
