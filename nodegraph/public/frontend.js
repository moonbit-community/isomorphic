function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
const _M0DTPB4Json4Null__ = new _M0DTPB4Json4Null();
function _M0DTPB4Json4True() {}
_M0DTPB4Json4True.prototype.$tag = 1;
const _M0DTPB4Json4True__ = new _M0DTPB4Json4True();
function _M0DTPB4Json5False() {}
_M0DTPB4Json5False.prototype.$tag = 2;
const _M0DTPB4Json5False__ = new _M0DTPB4Json5False();
function _M0DTPB4Json6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPB4Json6Number.prototype.$tag = 3;
function _M0DTPB4Json6String(param0) {
  this._0 = param0;
}
_M0DTPB4Json6String.prototype.$tag = 4;
function _M0DTPB4Json5Array(param0) {
  this._0 = param0;
}
_M0DTPB4Json5Array.prototype.$tag = 5;
function _M0DTPB4Json6Object(param0) {
  this._0 = param0;
}
_M0DTPB4Json6Object.prototype.$tag = 6;
function _M0TPB15WasmHelperCache(param0, param1) {
  this.tried = param0;
  this.exports = param1;
}
const $1000000000000000000L = { hi: 232830643, lo: -1486618624 };
const $0L = { hi: 0, lo: 0 };
function _M0TPC17strconv9FloatInfo(param0, param1, param2) {
  this.mantissa_bits = param0;
  this.exponent_bits = param1;
  this.bias = param2;
}
const $1L = { hi: 0, lo: 1 };
const $10L = { hi: 0, lo: 10 };
const $100L = { hi: 0, lo: 100 };
const $1000L = { hi: 0, lo: 1000 };
const $10000L = { hi: 0, lo: 10000 };
const $100000L = { hi: 0, lo: 100000 };
const $1000000L = { hi: 0, lo: 1000000 };
const $10000000L = { hi: 0, lo: 10000000 };
const $100000000L = { hi: 0, lo: 100000000 };
const $1000000000L = { hi: 0, lo: 1000000000 };
const $10000000000L = { hi: 2, lo: 1410065408 };
const $100000000000L = { hi: 23, lo: 1215752192 };
const $1000000000000L = { hi: 232, lo: -727379968 };
const $10000000000000L = { hi: 2328, lo: 1316134912 };
const $100000000000000L = { hi: 23283, lo: 276447232 };
const $1000000000000000L = { hi: 232830, lo: -1530494976 };
const $22L = { hi: 0, lo: 22 };
const $37L = { hi: 0, lo: 37 };
const $_22L = { hi: -1, lo: -22 };
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd6Effect(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd6Effect.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd7Message(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd7Message.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd5Batch(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd5Batch.prototype.$tag = 2;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd5Empty() {}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd5Empty.prototype.$tag = 3;
const _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd5Empty__ = new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd5Empty();
const $_4503599627370496L = { hi: -1048576, lo: 0 };
const $9218868437227405312L = { hi: 2146435072, lo: 0 };
const $9221120237041090561L = { hi: 2146959360, lo: 1 };
const $2L = { hi: 0, lo: 2 };
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB13SourceLocRepr(param0, param1, param2, param3, param4, param5) {
  this.pkg = param0;
  this.filename = param1;
  this.start_line = param2;
  this.start_column = param3;
  this.end_line = param4;
  this.end_column = param5;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function _M0TPB7MyInt64(param0, param1) {
  this.hi = param0;
  this.lo = param1;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function _M0TPB6Hasher(param0) {
  this.acc = param0;
}
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0DTPC16result6ResultGUOsORPC16string10StringViewERPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUOsORPC16string10StringViewERPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUOsORPC16string10StringViewERPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUOsORPC16string10StringViewERPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar.prototype.$tag = 7;
function _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof() {}
_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof.prototype.$tag = 6;
const _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__ = new _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof();
function _M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber.prototype.$tag = 5;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape.prototype.$tag = 4;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded() {}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded.prototype.$tag = 3;
const _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__ = new _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded();
function _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError.prototype.$tag = 2;
function _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError.prototype.$tag = 1;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 0;
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGisE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGisE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGisE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGisE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGusE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGusE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGusE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGusE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionsE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEsE2Ok.prototype.$tag = 1;
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some.prototype.$tag = 1;
function _M0TPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsRPB4JsonE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(param0) {
  this.val = param0;
}
function _M0TPB3MapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
const _M0MPB7MyInt6422convert__to__double__u = (a) => (a.hi >>> 0) * 4294967296.0 + (a.lo >>> 0);
const _M0MPB7MyInt6423reinterpret__as__double = function f(a) {
  let view = f._view;
  if (view === undefined) {
    view = f._view = new DataView(new ArrayBuffer(8));
  }
  view.setUint32(0, a.hi);
  view.setUint32(4, a.lo);
  return view.getFloat64(0);
};
const _M0FPB23try__init__wasm__helper = function() {
  try {
    return new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
  } catch (e) {
    return undefined;
  }
};
const _M0MPB7MyInt6411div__bigint = (a, b) => {
  const aVal = (BigInt(a.hi) << 32n) | BigInt(a.lo >>> 0);
  const bVal = (BigInt(b.hi) << 32n) | BigInt(b.lo >>> 0);
  const result = aVal / bVal;
  const lo = Number(result & 0xFFFFFFFFn);
  const hi = Number((result >> 32n) & 0xFFFFFFFFn);
  return { hi: hi | 0, lo: lo | 0 };
};
const _M0MPB7MyInt6414div__u__bigint = (a, b) => {
  const aVal = (BigInt(a.hi >>> 0) << 32n) | BigInt(a.lo >>> 0);
  const bVal = (BigInt(b.hi >>> 0) << 32n) | BigInt(b.lo >>> 0);
  const result = aVal / bVal;
  const lo = Number(result & 0xFFFFFFFFn);
  const hi = Number((result >> 32n) & 0xFFFFFFFFn);
  return { hi: hi | 0, lo: lo | 0 };
};
const _M0MPB7MyInt647compare = (a, b) => {
  const ahi = a.hi;
  const bhi = b.hi;
  if (ahi < bhi) {
    return -1;
  }
  if (ahi > bhi) {
    return 1;
  }
  const alo = a.lo >>> 0;
  const blo = b.lo >>> 0;
  if (alo < blo) {
    return -1;
  }
  if (alo > blo) {
    return 1;
  }
  return 0;
};
const _M0MPB7MyInt6410compare__u = (a, b) => {
  const ahi = a.hi >>> 0;
  const bhi = b.hi >>> 0;
  if (ahi < bhi) {
    return -1;
  }
  if (ahi > bhi) {
    return 1;
  }
  const alo = a.lo >>> 0;
  const blo = b.lo >>> 0;
  if (alo < blo) {
    return -1;
  }
  if (alo > blo) {
    return 1;
  }
  return 0;
};
const _M0MPB7MyInt6419convert__to__double = (a) => a.hi * 4294967296.0 + (a.lo >>> 0);
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
const _M0FPB15ryu__to__string = (number) => number.toString();
function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGUisEERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUisEERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGUisEERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUisEERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGiERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGiERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGiERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGiERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC17strconv12StrConvErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC17strconv12StrConvErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC17strconv12StrConvErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC17strconv12StrConvErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC17strconv12StrConvErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC17strconv12StrConvErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC17strconv12StrConvErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC17strconv12StrConvErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGdRPC17strconv12StrConvErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC17strconv12StrConvErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPC17strconv12StrConvErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC17strconv12StrConvErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC17strconv6NumberRPC17strconv12StrConvErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC17strconv6NumberRPC17strconv12StrConvErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC17strconv6NumberRPC17strconv12StrConvErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC17strconv6NumberRPC17strconv12StrConvErrorE2Ok.prototype.$tag = 1;
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $16L = { hi: 0, lo: 16 };
const $_9223372036854775808L = { hi: -2147483648, lo: 0 };
function _M0TPC17strconv7Decimal(param0, param1, param2, param3, param4) {
  this.digits = param0;
  this.digits_num = param1;
  this.decimal_point = param2;
  this.negative = param3;
  this.truncated = param4;
}
function _M0DTPC16result6ResultGRPC17strconv7DecimalRPC17strconv12StrConvErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC17strconv7DecimalRPC17strconv12StrConvErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC17strconv7DecimalRPC17strconv12StrConvErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC17strconv7DecimalRPC17strconv12StrConvErrorE2Ok.prototype.$tag = 1;
const $65536L = { hi: 0, lo: 65536 };
function _M0TPC17strconv6Number(param0, param1, param2, param3) {
  this.exponent = param0;
  this.mantissa = param1;
  this.negative = param2;
  this.many_digits = param3;
}
const $_1L = { hi: -1, lo: -1 };
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPC14json8Position(param0, param1) {
  this.line = param0;
  this.column = param1;
}
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC14json8JsonPath4Root() {}
_M0DTPC14json8JsonPath4Root.prototype.$tag = 0;
const _M0DTPC14json8JsonPath4Root__ = new _M0DTPC14json8JsonPath4Root();
function _M0DTPC14json8JsonPath3Key(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json8JsonPath3Key.prototype.$tag = 1;
function _M0DTPC14json8JsonPath5Index(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json8JsonPath5Index.prototype.$tag = 2;
function _M0DTPC16result6ResultGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGUisERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUisERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUisERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUisERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TPC14json12ParseContext(param0, param1, param2, param3) {
  this.offset = param0;
  this.input = param1;
  this.end_offset = param2;
  this.remaining_available_depth = param3;
}
const $9007199254740991L = { hi: 2097151, lo: -1 };
const $_9007199254740991L = { hi: -2097152, lo: 1 };
function _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC14json5Token4Null() {}
_M0DTPC14json5Token4Null.prototype.$tag = 0;
const _M0DTPC14json5Token4Null__ = new _M0DTPC14json5Token4Null();
function _M0DTPC14json5Token4True() {}
_M0DTPC14json5Token4True.prototype.$tag = 1;
const _M0DTPC14json5Token4True__ = new _M0DTPC14json5Token4True();
function _M0DTPC14json5Token5False() {}
_M0DTPC14json5Token5False.prototype.$tag = 2;
const _M0DTPC14json5Token5False__ = new _M0DTPC14json5Token5False();
function _M0DTPC14json5Token6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json5Token6Number.prototype.$tag = 3;
function _M0DTPC14json5Token6String(param0) {
  this._0 = param0;
}
_M0DTPC14json5Token6String.prototype.$tag = 4;
function _M0DTPC14json5Token6LBrace() {}
_M0DTPC14json5Token6LBrace.prototype.$tag = 5;
const _M0DTPC14json5Token6LBrace__ = new _M0DTPC14json5Token6LBrace();
function _M0DTPC14json5Token6RBrace() {}
_M0DTPC14json5Token6RBrace.prototype.$tag = 6;
const _M0DTPC14json5Token6RBrace__ = new _M0DTPC14json5Token6RBrace();
function _M0DTPC14json5Token8LBracket() {}
_M0DTPC14json5Token8LBracket.prototype.$tag = 7;
const _M0DTPC14json5Token8LBracket__ = new _M0DTPC14json5Token8LBracket();
function _M0DTPC14json5Token8RBracket() {}
_M0DTPC14json5Token8RBracket.prototype.$tag = 8;
const _M0DTPC14json5Token8RBracket__ = new _M0DTPC14json5Token8RBracket();
function _M0DTPC14json5Token5Comma() {}
_M0DTPC14json5Token5Comma.prototype.$tag = 9;
const _M0DTPC14json5Token5Comma__ = new _M0DTPC14json5Token5Comma();
function _M0DTPC14json10WriteFrame5Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame5Array.prototype.$tag = 0;
function _M0DTPC14json10WriteFrame6Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame6Object.prototype.$tag = 1;
function _M0TPC15queue5QueueGRP48bobzhang9nodegraph8frontend3app3MsgE(param0, param1, param2) {
  this.length = param0;
  this.first = param1;
  this.last = param2;
}
function _M0TPC15queue5QueueGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(param0, param1, param2) {
  this.length = param0;
  this.first = param1;
  this.last = param2;
}
function _M0TPC15queue4ConsGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(param0, param1) {
  this.content = param0;
  this.next = param1;
}
function _M0TPC15queue4ConsGWRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(param0, param1) {
  this.content = param0;
  this.next = param1;
}
function _M0TPC13ref3RefGRP48bobzhang9nodegraph8frontend3app5ModelE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGiE(param0) {
  this.val = param0;
}
function _M0TPC13set3SetGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(param0, param1, param2, param3, param4) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
}
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGOsE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGOiE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang9nodegraph6shared10SavedGraph(param0, param1) {
  this.id = param0;
  this.name = param1;
}
function _M0TPB8MutLocalGORPB5ArrayGRP38bobzhang9nodegraph6shared4NodeEE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGORPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionEE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionEE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang9nodegraph6shared5Graph(param0, param1) {
  this.nodes = param0;
  this.connections = param1;
}
function _M0TPB8MutLocalGORP38bobzhang9nodegraph6shared8NodeKindE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodeRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodeRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodeRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodeRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang9nodegraph6shared4Node(param0, param1, param2, param3, param4, param5) {
  this.id = param0;
  this.kind = param1;
  this.x = param2;
  this.y = param3;
  this.label = param4;
  this.config = param5;
}
function _M0TPB8MutLocalGORPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEEE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGObE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORPB5ArrayGiEE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRPB5ArrayGiEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGiEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGiEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGiEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGiEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGiEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGORPB5ArrayGUisEEE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRPB5ArrayGUisEEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGUisEEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGUisEEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGUisEEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGUisEEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGUisEEE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang9nodegraph6shared10EvalResult(param0, param1, param2, param3) {
  this.node_outputs = param0;
  this.errors = param1;
  this.eval_order = param2;
  this.has_cycle = param3;
}
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTP38bobzhang9nodegraph6shared5Value7VNumber(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang9nodegraph6shared5Value7VNumber.prototype.$tag = 0;
function _M0DTP38bobzhang9nodegraph6shared5Value7VString(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang9nodegraph6shared5Value7VString.prototype.$tag = 1;
function _M0DTP38bobzhang9nodegraph6shared5Value5VBool(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang9nodegraph6shared5Value5VBool.prototype.$tag = 2;
function _M0DTP38bobzhang9nodegraph6shared5Value6VColor(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang9nodegraph6shared5Value6VColor.prototype.$tag = 3;
function _M0DTP38bobzhang9nodegraph6shared5Value6VError(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang9nodegraph6shared5Value6VError.prototype.$tag = 4;
function _M0DTP38bobzhang9nodegraph6shared5Value5VNone() {}
_M0DTP38bobzhang9nodegraph6shared5Value5VNone.prototype.$tag = 5;
const _M0DTP38bobzhang9nodegraph6shared5Value5VNone__ = new _M0DTP38bobzhang9nodegraph6shared5Value5VNone();
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang9nodegraph6shared10Connection(param0, param1, param2, param3, param4) {
  this.id = param0;
  this.from_node_id = param1;
  this.from_port = param2;
  this.to_node_id = param3;
  this.to_port = param4;
}
function _M0TP38bobzhang9nodegraph6shared7PortDef(param0, param1) {
  this.name = param0;
  this.port_type = param1;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORP38bobzhang9nodegraph6shared4NodeE(param0) {
  this.val = param0;
}
const _M0MP319moonbit_2dcommunity7rabbita2js5Value4null = () => null;
const _M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null = (n) => Object.is(n, null);
const _M0MP319moonbit_2dcommunity7rabbita2js5Value13is__undefined = (n) => Object.is(n, undefined);
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4Some.prototype.$tag = 1;
const _M0MP319moonbit_2dcommunity7rabbita3dom6Window12current__url = (self) => { return self.location.href; };
const _M0MP319moonbit_2dcommunity7rabbita3dom6Window25request__animation__frame = (self,f) => self.requestAnimationFrame(f);
const _M0FP319moonbit_2dcommunity7rabbita3dom6window = () => window;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__to__ui__event = (x) => x instanceof UIEvent ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__svg__element = (x) => x instanceof SVGElement ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom10get__style = (self) => self.style;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__set__node__value = (x,v) => x.nodeValue = v;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__next__sibling = (x) => x.nextSibling;
const _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__previous__sibling = (x) => x.previousSibling;
const _M0FP319moonbit_2dcommunity7rabbita3dom17ffi__parent__node = (x) => x.parentNode;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__append__child = (p,c) => p.appendChild(c);
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__remove__child = (p,c) => p.removeChild(c);
const _M0FP319moonbit_2dcommunity7rabbita3dom14insert__before = (p,value,before) => p.insertBefore(value,before);
const _M0FP319moonbit_2dcommunity7rabbita3dom19ffi__is__same__node = (x, other) => x === other;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__mouse__event = (e) => e instanceof MouseEvent ? e : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__x = (e) => e.clientX;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__y = (e) => e.clientY;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__ctrl__key = (e) => e.ctrlKey;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__meta__key = (e) => e.metaKey;
const _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__to__keyboard__event = (e) => e instanceof KeyboardEvent ? e : null;
const _M0MP319moonbit_2dcommunity7rabbita3dom17HTMLSelectElement5value = (self) => self.value;
const _M0FP319moonbit_2dcommunity7rabbita3dom29ffi__to__html__input__element = (x) => x instanceof HTMLInputElement ? x : null;
const _M0MP319moonbit_2dcommunity7rabbita3dom16HTMLInputElement5value = (self) => self.value;
const _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__to__html__element = (x) => x instanceof HTMLElement ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__html__element__get__style = (s) => s.style;
const _M0FP319moonbit_2dcommunity7rabbita3dom12console__log = (x) => console.log(x);
const _M0FP319moonbit_2dcommunity7rabbita3dom25ffi__add__event__listener = (target, type, listener) => target.addEventListener(type, listener);
const _M0FP319moonbit_2dcommunity7rabbita3dom16ffi__to__element = (x) => x.nodeType===1 ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__to__html__select__element = (x) => x instanceof HTMLSelectElement ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__event__target = (self) => self.target;
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__event__current__target = (self) => self.currentTarget;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__event__prevent__default = (self) => self.preventDefault();
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__element__set__attribute = (self,attr,value) => self.setAttribute(attr, value);
const _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__remove__attribute = (self,attr) => self.removeAttribute(attr);
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__set__property = (self,prop,value) => self[prop] = value;
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__get__property = (self,prop) => self[prop];
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__remove__property = (self,prop) => delete self[prop];
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__set__inner__html = (self,html) => self.innerHTML = html;
const _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property = (self, property, value) => self.setProperty(property, value);
const _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration16remove__property = (self, property) => self.removeProperty(property);
const _M0FP319moonbit_2dcommunity7rabbita3dom8document = () => document;
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__element = (doc,tag) => doc.createElement(tag);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document27create__element__ns_2einner = (doc,namespace,qualifiedName) => doc.createElementNS(namespace, qualifiedName);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document18create__text__node = (doc,str) => doc.createTextNode(str);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment = (doc,str) => doc.createComment(str);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document26create__document__fragment = (doc) => doc.createDocumentFragment();
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document20get__element__by__id = (doc,id) => doc.getElementById(id);
function _M0DTP319moonbit_2dcommunity7rabbita3url8Protocol4Http() {}
_M0DTP319moonbit_2dcommunity7rabbita3url8Protocol4Http.prototype.$tag = 0;
const _M0DTP319moonbit_2dcommunity7rabbita3url8Protocol4Http__ = new _M0DTP319moonbit_2dcommunity7rabbita3url8Protocol4Http();
function _M0DTP319moonbit_2dcommunity7rabbita3url8Protocol5Https() {}
_M0DTP319moonbit_2dcommunity7rabbita3url8Protocol5Https.prototype.$tag = 1;
const _M0DTP319moonbit_2dcommunity7rabbita3url8Protocol5Https__ = new _M0DTP319moonbit_2dcommunity7rabbita3url8Protocol5Https();
function _M0DTP319moonbit_2dcommunity7rabbita3url8Protocol5Other(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita3url8Protocol5Other.prototype.$tag = 2;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3url3UrlRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3url3UrlRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3url3UrlRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3url3UrlRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TP319moonbit_2dcommunity7rabbita3url3Url(param0, param1, param2, param3, param4, param5) {
  this.protocol = param0;
  this.host = param1;
  this.port = param2;
  this.path = param3;
  this.query = param4;
  this.fragment = param5;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime8Instance(param0, param1, param2, param3, param4, param5) {
  this.cell = param0;
  this.inode = param1;
  this.link = param2;
  this.old_childs = param3;
  this.new_childs = param4;
  this.id = param5;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime4Link(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4None.prototype.$tag = 0;
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGRP319moonbit_2dcommunity7rabbita2js8NullableGRP319moonbit_2dcommunity7rabbita3dom4NodeEE(param0) {
  this.val = param0;
}
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Elem(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Elem.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Text(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Text.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Frag(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Frag.prototype.$tag = 2;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Slot(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Slot.prototype.$tag = 3;
function _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Elem(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Elem.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Text(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Text.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Frag(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Frag.prototype.$tag = 2;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Slot(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Slot.prototype.$tag = 3;
function _M0TPB9ArrayViewGUsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Props(param0, param1, param2, param3, param4) {
  this.slots = param0;
  this.handlers = param1;
  this.attrs = param2;
  this.props = param3;
  this.styles = param4;
}
function _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE3Map(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE3Map.prototype.$tag = 1;
function _M0TPB8MutLocalGORP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(param0) {
  this.val = param0;
}
function _M0DTP319moonbit_2dcommunity7rabbita3url10UrlRequest8Internal(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita3url10UrlRequest8Internal.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita3url10UrlRequest8External(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita3url10UrlRequest8External.prototype.$tag = 1;
function _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  this.live_map = param0;
  this.msg_queue = param1;
  this.after_render_queue = param2;
  this.drain_scheduled = param3;
  this.dirty_set = param4;
  this.paint_scheduled = param5;
  this.root = param6;
  this.captured_link_listener = param7;
  this.mount = param8;
  this.on_url_changed = param9;
  this.on_url_request = param10;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Flags(param0, param1, param2) {
  this.id = param0;
  this.dirty = param1;
  this.attach_count = param2;
}
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Integer(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Integer.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant8Floating(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant8Floating.prototype.$tag = 2;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String.prototype.$tag = 3;
function _M0TP319moonbit_2dcommunity7rabbita4html3Pos(param0, param1) {
  this.x = param0;
  this.y = param1;
}
function _M0TP219moonbit_2dcommunity7rabbita3App(param0, param1) {
  this.sandbox = param0;
  this.init_cmd = param1;
}
function _M0TP219moonbit_2dcommunity7rabbita10DispatcherGRP48bobzhang9nodegraph8frontend3app3MsgE(param0, param1) {
  this.id = param0;
  this.inbox = param1;
}
function _M0TP219moonbit_2dcommunity7rabbita9TypedCellGRP48bobzhang9nodegraph8frontend3app5ModelRP48bobzhang9nodegraph8frontend3app3MsgE(param0, param1, param2, param3, param4, param5) {
  this.model = param0;
  this.dispatcher = param1;
  this.dispatch = param2;
  this.update = param3;
  this.view = param4;
  this.flags = param5;
}
const _M0FP319moonbit_2dcommunity7rabbita4http11js__request = (url,method,contentType,body,hasBody,succeed,failed) => {
   var config = { method: method, headers: { 'Content-Type': contentType } }; 
   if (hasBody) { config.body = body };
   fetch(url, config)
     .then(response => response.text())
     .then(json => succeed(json))
     .catch(error => {
       failed(error.toString())
     })
 };
function _M0DTPC16result6ResultGRPB4JsonsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonsE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGssE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGssE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGssE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGssE2Ok.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http4Body4Text.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita4http4Body5Empty() {}
_M0DTP319moonbit_2dcommunity7rabbita4http4Body5Empty.prototype.$tag = 2;
const _M0DTP319moonbit_2dcommunity7rabbita4http4Body5Empty__ = new _M0DTP319moonbit_2dcommunity7rabbita4http4Body5Empty();
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg4Init() {}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg4Init.prototype.$tag = 0;
const _M0DTP48bobzhang9nodegraph8frontend3app3Msg4Init__ = new _M0DTP48bobzhang9nodegraph8frontend3app3Msg4Init();
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg8GoToList() {}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg8GoToList.prototype.$tag = 1;
const _M0DTP48bobzhang9nodegraph8frontend3app3Msg8GoToList__ = new _M0DTP48bobzhang9nodegraph8frontend3app3Msg8GoToList();
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg10GoToEditor(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg10GoToEditor.prototype.$tag = 2;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg9GotGraphs(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg9GotGraphs.prototype.$tag = 3;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg12SetGraphName(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg12SetGraphName.prototype.$tag = 4;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg11CreateGraph() {}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg11CreateGraph.prototype.$tag = 5;
const _M0DTP48bobzhang9nodegraph8frontend3app3Msg11CreateGraph__ = new _M0DTP48bobzhang9nodegraph8frontend3app3Msg11CreateGraph();
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg12GraphCreated(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg12GraphCreated.prototype.$tag = 6;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg11DeleteGraph(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg11DeleteGraph.prototype.$tag = 7;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg12GraphDeleted(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg12GraphDeleted.prototype.$tag = 8;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg8GotGraph(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg8GotGraph.prototype.$tag = 9;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg13TogglePalette() {}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg13TogglePalette.prototype.$tag = 10;
const _M0DTP48bobzhang9nodegraph8frontend3app3Msg13TogglePalette__ = new _M0DTP48bobzhang9nodegraph8frontend3app3Msg13TogglePalette();
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg13SetPaletteCat(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg13SetPaletteCat.prototype.$tag = 11;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg7AddNode(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg7AddNode.prototype.$tag = 12;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg9NodeAdded(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg9NodeAdded.prototype.$tag = 13;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg10DeleteNode(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg10DeleteNode.prototype.$tag = 14;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg11NodeDeleted(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg11NodeDeleted.prototype.$tag = 15;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg15StartEditConfig(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg15StartEditConfig.prototype.$tag = 16;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg14SetConfigValue(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg14SetConfigValue.prototype.$tag = 17;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg10SaveConfig() {}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg10SaveConfig.prototype.$tag = 18;
const _M0DTP48bobzhang9nodegraph8frontend3app3Msg10SaveConfig__ = new _M0DTP48bobzhang9nodegraph8frontend3app3Msg10SaveConfig();
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg16CancelEditConfig() {}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg16CancelEditConfig.prototype.$tag = 19;
const _M0DTP48bobzhang9nodegraph8frontend3app3Msg16CancelEditConfig__ = new _M0DTP48bobzhang9nodegraph8frontend3app3Msg16CancelEditConfig();
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg11ConfigSaved(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg11ConfigSaved.prototype.$tag = 20;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg9StartDrag(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg9StartDrag.prototype.$tag = 21;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg4Drag(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg4Drag.prototype.$tag = 22;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg7EndDrag() {}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg7EndDrag.prototype.$tag = 23;
const _M0DTP48bobzhang9nodegraph8frontend3app3Msg7EndDrag__ = new _M0DTP48bobzhang9nodegraph8frontend3app3Msg7EndDrag();
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg17NodePositionSaved(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg17NodePositionSaved.prototype.$tag = 24;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg12StartConnect(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg12StartConnect.prototype.$tag = 25;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg8WireMove(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg8WireMove.prototype.$tag = 26;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg15CompleteConnect(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg15CompleteConnect.prototype.$tag = 27;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg13CancelConnect() {}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg13CancelConnect.prototype.$tag = 28;
const _M0DTP48bobzhang9nodegraph8frontend3app3Msg13CancelConnect__ = new _M0DTP48bobzhang9nodegraph8frontend3app3Msg13CancelConnect();
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg15ConnectionAdded(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg15ConnectionAdded.prototype.$tag = 29;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg16DeleteConnection(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg16DeleteConnection.prototype.$tag = 30;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg17ConnectionDeleted(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg17ConnectionDeleted.prototype.$tag = 31;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg8Evaluate() {}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg8Evaluate.prototype.$tag = 32;
const _M0DTP48bobzhang9nodegraph8frontend3app3Msg8Evaluate__ = new _M0DTP48bobzhang9nodegraph8frontend3app3Msg8Evaluate();
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg13GotEvalResult(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg13GotEvalResult.prototype.$tag = 33;
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg14ToggleAutoEval() {}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg14ToggleAutoEval.prototype.$tag = 34;
const _M0DTP48bobzhang9nodegraph8frontend3app3Msg14ToggleAutoEval__ = new _M0DTP48bobzhang9nodegraph8frontend3app3Msg14ToggleAutoEval();
function _M0DTP48bobzhang9nodegraph8frontend3app3Msg10ClearError() {}
_M0DTP48bobzhang9nodegraph8frontend3app3Msg10ClearError.prototype.$tag = 35;
const _M0DTP48bobzhang9nodegraph8frontend3app3Msg10ClearError__ = new _M0DTP48bobzhang9nodegraph8frontend3app3Msg10ClearError();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGRP38bobzhang9nodegraph6shared8NodeKindE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE4Text.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared5GraphE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared5GraphE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared5GraphE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared5GraphE4Text.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphsE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10EvalResultE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10EvalResultE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10EvalResultE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10EvalResultE4Text.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultsE2Ok.prototype.$tag = 1;
function _M0TP48bobzhang9nodegraph8frontend3app5Model(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19, param20, param21, param22, param23, param24, param25) {
  this.page = param0;
  this.graphs = param1;
  this.current_graph_id = param2;
  this.nodes = param3;
  this.connections = param4;
  this.eval_result = param5;
  this.auto_eval = param6;
  this.dragging_node = param7;
  this.drag_offset_x = param8;
  this.drag_offset_y = param9;
  this.connecting_from_node = param10;
  this.connecting_from_port = param11;
  this.wire_mouse_x = param12;
  this.wire_mouse_y = param13;
  this.wire_start_cx = param14;
  this.wire_start_cy = param15;
  this.wire_origin_x = param16;
  this.wire_origin_y = param17;
  this.editing_node = param18;
  this.config_value = param19;
  this.new_graph_name = param20;
  this.show_palette = param21;
  this.palette_cat = param22;
  this.first_load = param23;
  this.loading = param24;
  this.error = param25;
}
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10SavedGraphE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10SavedGraphE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10SavedGraphE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10SavedGraphE4Text.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphsE2Ok.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB4JsonE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB4JsonE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB4JsonE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB4JsonE4Text.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared4NodeE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared4NodeE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared4NodeE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared4NodeE4Text.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodesE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodesE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodesE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodesE2Ok.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10ConnectionE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10ConnectionE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10ConnectionE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10ConnectionE4Text.prototype.$tag = 1;
const _M0FP0211moonbit_2dcommunity_2frabbita_2fTypedCell_5bbobzhang_2fnodegraph_2ffrontend_2fapp_2fModel_2c_20bobzhang_2fnodegraph_2ffrontend_2fapp_2fMsg_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eIsCell = { method_0: _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4stepGRP48bobzhang9nodegraph8frontend3app5ModelRP48bobzhang9nodegraph8frontend3app3MsgE, method_1: _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4viewGRP48bobzhang9nodegraph8frontend3app5ModelRP48bobzhang9nodegraph8frontend3app3MsgE, method_2: _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell5flagsGRP48bobzhang9nodegraph8frontend3app5ModelRP48bobzhang9nodegraph8frontend3app3MsgE };
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char };
const _M0FP0133moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eScheduler = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler3add, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler17add__url__changed, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler17add__url__request };
const _M0FPB4null = _M0DTPB4Json4Null__;
const _M0FPB19wasm__helper__cache = new _M0TPB15WasmHelperCache(false, undefined);
const _M0FPC17strconv14base__err__str = "invalid base";
const _M0FPC17strconv15range__err__str = "value out of range";
const _M0FPC17strconv16syntax__err__str = "invalid syntax";
const _M0FPC17strconv20parse__int64_2einnerN7_2abindS543 = "";
const _M0FPC17strconv17min__19digit__int = $1000000000000000000L;
const _M0FPC17strconv17parse__scientificN8exp__numS244 = $0L;
const _M0FPC17strconv13parse__numberN11exp__numberS225 = $0L;
const _M0FPC17strconv12double__info = new _M0TPC17strconv9FloatInfo(52, 11, -1023);
const _M0FPC17strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2056 = { _0: 0, _1: "" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2057 = { _0: 1, _1: "5" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2058 = { _0: 1, _1: "25" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2059 = { _0: 1, _1: "125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2060 = { _0: 2, _1: "625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2061 = { _0: 2, _1: "3125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2062 = { _0: 2, _1: "15625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2063 = { _0: 3, _1: "78125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2064 = { _0: 3, _1: "390625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2065 = { _0: 3, _1: "1953125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2066 = { _0: 4, _1: "9765625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2067 = { _0: 4, _1: "48828125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2068 = { _0: 4, _1: "244140625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2069 = { _0: 4, _1: "1220703125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2070 = { _0: 5, _1: "6103515625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2071 = { _0: 5, _1: "30517578125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2072 = { _0: 5, _1: "152587890625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2073 = { _0: 6, _1: "762939453125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2074 = { _0: 6, _1: "3814697265625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2075 = { _0: 6, _1: "19073486328125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2076 = { _0: 7, _1: "95367431640625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2077 = { _0: 7, _1: "476837158203125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2078 = { _0: 7, _1: "2384185791015625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2079 = { _0: 7, _1: "11920928955078125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2080 = { _0: 8, _1: "59604644775390625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2081 = { _0: 8, _1: "298023223876953125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2082 = { _0: 8, _1: "1490116119384765625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2083 = { _0: 9, _1: "7450580596923828125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2084 = { _0: 9, _1: "37252902984619140625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2085 = { _0: 9, _1: "186264514923095703125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2086 = { _0: 10, _1: "931322574615478515625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2087 = { _0: 10, _1: "4656612873077392578125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2088 = { _0: 10, _1: "23283064365386962890625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2089 = { _0: 10, _1: "116415321826934814453125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2090 = { _0: 11, _1: "582076609134674072265625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2091 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2092 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2093 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2094 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2095 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2096 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2097 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2098 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2099 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2100 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2101 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2102 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2103 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2104 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2105 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2106 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2107 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2108 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2109 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2110 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2111 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2112 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2113 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2114 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2115 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2116 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FPC17strconv19left__shift__cheats = [_M0FPC17strconv34left__shift__cheats_2etuple_2f2056, _M0FPC17strconv34left__shift__cheats_2etuple_2f2057, _M0FPC17strconv34left__shift__cheats_2etuple_2f2058, _M0FPC17strconv34left__shift__cheats_2etuple_2f2059, _M0FPC17strconv34left__shift__cheats_2etuple_2f2060, _M0FPC17strconv34left__shift__cheats_2etuple_2f2061, _M0FPC17strconv34left__shift__cheats_2etuple_2f2062, _M0FPC17strconv34left__shift__cheats_2etuple_2f2063, _M0FPC17strconv34left__shift__cheats_2etuple_2f2064, _M0FPC17strconv34left__shift__cheats_2etuple_2f2065, _M0FPC17strconv34left__shift__cheats_2etuple_2f2066, _M0FPC17strconv34left__shift__cheats_2etuple_2f2067, _M0FPC17strconv34left__shift__cheats_2etuple_2f2068, _M0FPC17strconv34left__shift__cheats_2etuple_2f2069, _M0FPC17strconv34left__shift__cheats_2etuple_2f2070, _M0FPC17strconv34left__shift__cheats_2etuple_2f2071, _M0FPC17strconv34left__shift__cheats_2etuple_2f2072, _M0FPC17strconv34left__shift__cheats_2etuple_2f2073, _M0FPC17strconv34left__shift__cheats_2etuple_2f2074, _M0FPC17strconv34left__shift__cheats_2etuple_2f2075, _M0FPC17strconv34left__shift__cheats_2etuple_2f2076, _M0FPC17strconv34left__shift__cheats_2etuple_2f2077, _M0FPC17strconv34left__shift__cheats_2etuple_2f2078, _M0FPC17strconv34left__shift__cheats_2etuple_2f2079, _M0FPC17strconv34left__shift__cheats_2etuple_2f2080, _M0FPC17strconv34left__shift__cheats_2etuple_2f2081, _M0FPC17strconv34left__shift__cheats_2etuple_2f2082, _M0FPC17strconv34left__shift__cheats_2etuple_2f2083, _M0FPC17strconv34left__shift__cheats_2etuple_2f2084, _M0FPC17strconv34left__shift__cheats_2etuple_2f2085, _M0FPC17strconv34left__shift__cheats_2etuple_2f2086, _M0FPC17strconv34left__shift__cheats_2etuple_2f2087, _M0FPC17strconv34left__shift__cheats_2etuple_2f2088, _M0FPC17strconv34left__shift__cheats_2etuple_2f2089, _M0FPC17strconv34left__shift__cheats_2etuple_2f2090, _M0FPC17strconv34left__shift__cheats_2etuple_2f2091, _M0FPC17strconv34left__shift__cheats_2etuple_2f2092, _M0FPC17strconv34left__shift__cheats_2etuple_2f2093, _M0FPC17strconv34left__shift__cheats_2etuple_2f2094, _M0FPC17strconv34left__shift__cheats_2etuple_2f2095, _M0FPC17strconv34left__shift__cheats_2etuple_2f2096, _M0FPC17strconv34left__shift__cheats_2etuple_2f2097, _M0FPC17strconv34left__shift__cheats_2etuple_2f2098, _M0FPC17strconv34left__shift__cheats_2etuple_2f2099, _M0FPC17strconv34left__shift__cheats_2etuple_2f2100, _M0FPC17strconv34left__shift__cheats_2etuple_2f2101, _M0FPC17strconv34left__shift__cheats_2etuple_2f2102, _M0FPC17strconv34left__shift__cheats_2etuple_2f2103, _M0FPC17strconv34left__shift__cheats_2etuple_2f2104, _M0FPC17strconv34left__shift__cheats_2etuple_2f2105, _M0FPC17strconv34left__shift__cheats_2etuple_2f2106, _M0FPC17strconv34left__shift__cheats_2etuple_2f2107, _M0FPC17strconv34left__shift__cheats_2etuple_2f2108, _M0FPC17strconv34left__shift__cheats_2etuple_2f2109, _M0FPC17strconv34left__shift__cheats_2etuple_2f2110, _M0FPC17strconv34left__shift__cheats_2etuple_2f2111, _M0FPC17strconv34left__shift__cheats_2etuple_2f2112, _M0FPC17strconv34left__shift__cheats_2etuple_2f2113, _M0FPC17strconv34left__shift__cheats_2etuple_2f2114, _M0FPC17strconv34left__shift__cheats_2etuple_2f2115, _M0FPC17strconv34left__shift__cheats_2etuple_2f2116];
const _M0FPC17strconv10int__pow10 = [$1L, $10L, $100L, $1000L, $10000L, $100000L, $1000000L, $10000000L, $100000000L, $1000000000L, $10000000000L, $100000000000L, $1000000000000L, $10000000000000L, $100000000000000L, $1000000000000000L];
const _M0FPC17strconv25max__exponent__fast__path = $22L;
const _M0FPC17strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+12, 1e+13, 1e+14, 1e+15, 1e+16, 1e+17, 1e+18, 1e+19, 1e+20, 1e+21, 1e+22, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC17strconv36max__exponent__disguised__fast__path = $37L;
const _M0FPC17strconv25min__exponent__fast__path = $_22L;
const _M0MPC14json12ParseContext16lex__number__endN7_2abindS1059 = ".";
const _M0MPC14json12ParseContext16lex__number__endN7_2abindS1060 = "e";
const _M0MPC14json12ParseContext16lex__number__endN7_2abindS1061 = "E";
const _M0FP38bobzhang9nodegraph6shared11api__graphs = "/api/graphs";
const _M0FP38bobzhang9nodegraph6shared10all__kinds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const _M0FP319moonbit_2dcommunity7rabbita3dom14namespace__svg = "http://www.w3.org/2000/svg";
const _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4none = _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd5Empty__;
const _M0FP48bobzhang9nodegraph8frontend3app15node__stride__y = 210;
const _M0FP48bobzhang9nodegraph8frontend3app7node__w = 220;
const _M0FP48bobzhang9nodegraph8frontend3app6pad__x = 20;
const _M0FP48bobzhang9nodegraph8frontend3app15node__stride__x = 280;
const _M0FP48bobzhang9nodegraph8frontend3app6pad__y = 20;
const _M0FP48bobzhang9nodegraph8frontend3app9header__h = 35;
const _M0FP48bobzhang9nodegraph8frontend3app12port__stride = 28;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP319moonbit_2dcommunity7rabbita3cmd4none = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4none;
const _M0FPC16double13neg__infinity = _M0MPC15int645Int6423reinterpret__as__double($_4503599627370496L);
const _M0FPC16double8infinity = _M0MPC15int645Int6423reinterpret__as__double($9218868437227405312L);
const _M0FPB33brute__force__find_2econstr_2f385 = 0;
const _M0FPB43boyer__moore__horspool__find_2econstr_2f371 = 0;
const _M0FPC16double14not__a__number = _M0MPC15int645Int6423reinterpret__as__double($9221120237041090561L);
const _M0FPC17strconv25max__mantissa__fast__path = _M0IPC16uint646UInt64PB3Shl3shl($2L, 52);
const _M0FPC17strconv28checked__mul_2econstr_2f2542 = $0L;
const _M0FP419moonbit_2dcommunity7rabbita8internal7runtime17global__id__count = _M0FPC13ref3newGiE(0);
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGRPB9ArrayViewGRPC16string10StringViewEE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0MPC14json4Json5array(array) {
  return new _M0DTPB4Json5Array(array);
}
function _M0IPC16string6StringPB6ToJson8to__json(self) {
  return new _M0DTPB4Json6String(self);
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0MPB6Hasher8consume4(self, input) {
  self.acc = Math.imul(_M0FPB4rotl((self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPB6Hasher13combine__uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  _M0MPB6Hasher8consume4(self, value);
}
function _M0FPB5abortGuE(string, loc) {
  _M0FPC15abort5abortGuE(`${_M0IPC16string6StringPB4Show10to__string(string)}\n  at ${_M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(loc)}\n`);
}
function _M0FPB5abortGRPB9ArrayViewGRPC16string10StringViewEE(string, loc) {
  return _M0FPC15abort5abortGRPB9ArrayViewGRPC16string10StringViewEE(`${_M0IPC16string6StringPB4Show10to__string(string)}\n  at ${_M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(loc)}\n`);
}
function _M0FPB5abortGOiE(string, loc) {
  return _M0FPC15abort5abortGOiE(`${_M0IPC16string6StringPB4Show10to__string(string)}\n  at ${_M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(loc)}\n`);
}
function _M0MPC14byte4Byte8to__char(self) {
  return self;
}
function _M0MPB13StringBuilder11new_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return _M0IP016_24default__implPB7Compare6op__geGkE(self, 55296) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 56319);
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return _M0IP016_24default__implPB7Compare6op__geGkE(self, 56320) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 57343);
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MPC16uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0IPC14byte4BytePB3Add3add(self, that) {
  return (self + that | 0) & 255;
}
function _M0IPC14byte4BytePB3Div3div(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self / that | 0) & 255;
}
function _M0IPC14byte4BytePB3Mod3mod(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self % that | 0) & 255;
}
function _M0IPC14byte4BytePB3Sub3sub(self, that) {
  return (self - that | 0) & 255;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS3447(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder11new_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3447(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3447(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0MPB13SourceLocRepr5parse(repr) {
  const _bind = new _M0TPC16string10StringView(repr, 0, repr.length);
  const _data = _M0MPC16string10StringView4data(_bind);
  const _start = _M0MPC16string10StringView13start__offset(_bind);
  const _end = _start + _M0MPC16string10StringView6length(_bind) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  let match_tag_saver_0 = -1;
  let match_tag_saver_1 = -1;
  let match_tag_saver_2 = -1;
  let match_tag_saver_3 = -1;
  let match_tag_saver_4 = -1;
  let tag_0 = -1;
  let tag_1 = -1;
  let tag_1_1 = -1;
  let tag_1_2 = -1;
  let tag_3 = -1;
  let tag_2 = -1;
  let tag_2_1 = -1;
  let tag_4 = -1;
  _L: {
    if (_cursor < _end) {
      if (_M0MPC16string6String20unsafe__charcode__at(_data, _cursor) === 64) {
        _cursor = _cursor + 1 | 0;
        _L$2: while (true) {
          tag_0 = _cursor;
          if (_cursor < _end) {
            const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char === 58) {
              if (_cursor < _end) {
                _cursor = _cursor + 1 | 0;
                let _tmp = 0;
                _L$3: while (true) {
                  const dispatch_15 = _tmp;
                  _L$4: {
                    _L$5: {
                      switch (dispatch_15) {
                        case 3: {
                          tag_1_2 = tag_1_1;
                          tag_1_1 = tag_1;
                          tag_1 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$2 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$2 < 58) {
                                if (next_char$2 < 48) {
                                  break _L$6;
                                } else {
                                  tag_1 = _cursor;
                                  tag_2_1 = tag_2;
                                  tag_2 = _cursor;
                                  tag_3 = _cursor;
                                  if (_cursor < _end) {
                                    _L$7: {
                                      const next_char$3 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                                      _cursor = _cursor + 1 | 0;
                                      if (next_char$3 < 48) {
                                        if (next_char$3 === 45) {
                                          break _L$4;
                                        } else {
                                          break _L$7;
                                        }
                                      } else {
                                        if (next_char$3 > 57) {
                                          if (next_char$3 < 59) {
                                            _tmp = 3;
                                            continue _L$3;
                                          } else {
                                            break _L$7;
                                          }
                                        } else {
                                          _tmp = 6;
                                          continue _L$3;
                                        }
                                      }
                                    }
                                    _tmp = 0;
                                    continue _L$3;
                                  } else {
                                    break _L;
                                  }
                                }
                              } else {
                                if (next_char$2 > 58) {
                                  break _L$6;
                                } else {
                                  _tmp = 1;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        case 2: {
                          tag_1 = _cursor;
                          tag_2 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$2 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$2 < 58) {
                                if (next_char$2 < 48) {
                                  break _L$6;
                                } else {
                                  _tmp = 2;
                                  continue _L$3;
                                }
                              } else {
                                if (next_char$2 > 58) {
                                  break _L$6;
                                } else {
                                  _tmp = 3;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        case 0: {
                          tag_1 = _cursor;
                          if (_cursor < _end) {
                            const next_char$2 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                            _cursor = _cursor + 1 | 0;
                            if (next_char$2 === 58) {
                              _tmp = 1;
                              continue _L$3;
                            } else {
                              _tmp = 0;
                              continue _L$3;
                            }
                          } else {
                            break _L;
                          }
                        }
                        case 4: {
                          tag_1 = _cursor;
                          tag_4 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$2 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$2 < 58) {
                                if (next_char$2 < 48) {
                                  break _L$6;
                                } else {
                                  _tmp = 4;
                                  continue _L$3;
                                }
                              } else {
                                if (next_char$2 > 58) {
                                  break _L$6;
                                } else {
                                  tag_1_2 = tag_1_1;
                                  tag_1_1 = tag_1;
                                  tag_1 = _cursor;
                                  if (_cursor < _end) {
                                    _L$7: {
                                      const next_char$3 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                                      _cursor = _cursor + 1 | 0;
                                      if (next_char$3 < 58) {
                                        if (next_char$3 < 48) {
                                          break _L$7;
                                        } else {
                                          tag_1 = _cursor;
                                          tag_2_1 = tag_2;
                                          tag_2 = _cursor;
                                          if (_cursor < _end) {
                                            _L$8: {
                                              const next_char$4 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                                              _cursor = _cursor + 1 | 0;
                                              if (next_char$4 < 58) {
                                                if (next_char$4 < 48) {
                                                  break _L$8;
                                                } else {
                                                  _tmp = 5;
                                                  continue _L$3;
                                                }
                                              } else {
                                                if (next_char$4 > 58) {
                                                  break _L$8;
                                                } else {
                                                  _tmp = 3;
                                                  continue _L$3;
                                                }
                                              }
                                            }
                                            _tmp = 0;
                                            continue _L$3;
                                          } else {
                                            break _L$5;
                                          }
                                        }
                                      } else {
                                        if (next_char$3 > 58) {
                                          break _L$7;
                                        } else {
                                          _tmp = 1;
                                          continue _L$3;
                                        }
                                      }
                                    }
                                    _tmp = 0;
                                    continue _L$3;
                                  } else {
                                    break _L;
                                  }
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        case 5: {
                          tag_1 = _cursor;
                          tag_2 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$2 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$2 < 58) {
                                if (next_char$2 < 48) {
                                  break _L$6;
                                } else {
                                  _tmp = 5;
                                  continue _L$3;
                                }
                              } else {
                                if (next_char$2 > 58) {
                                  break _L$6;
                                } else {
                                  _tmp = 3;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L$5;
                          }
                        }
                        case 6: {
                          tag_1 = _cursor;
                          tag_2 = _cursor;
                          tag_3 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$2 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$2 < 48) {
                                if (next_char$2 === 45) {
                                  break _L$4;
                                } else {
                                  break _L$6;
                                }
                              } else {
                                if (next_char$2 > 57) {
                                  if (next_char$2 < 59) {
                                    _tmp = 3;
                                    continue _L$3;
                                  } else {
                                    break _L$6;
                                  }
                                } else {
                                  _tmp = 6;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        case 1: {
                          tag_1_1 = tag_1;
                          tag_1 = _cursor;
                          if (_cursor < _end) {
                            _L$6: {
                              const next_char$2 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                              _cursor = _cursor + 1 | 0;
                              if (next_char$2 < 58) {
                                if (next_char$2 < 48) {
                                  break _L$6;
                                } else {
                                  _tmp = 2;
                                  continue _L$3;
                                }
                              } else {
                                if (next_char$2 > 58) {
                                  break _L$6;
                                } else {
                                  _tmp = 1;
                                  continue _L$3;
                                }
                              }
                            }
                            _tmp = 0;
                            continue _L$3;
                          } else {
                            break _L;
                          }
                        }
                        default: {
                          break _L;
                        }
                      }
                    }
                    tag_1 = tag_1_2;
                    tag_2 = tag_2_1;
                    match_tag_saver_0 = tag_0;
                    match_tag_saver_1 = tag_1;
                    match_tag_saver_2 = tag_2;
                    match_tag_saver_3 = tag_3;
                    match_tag_saver_4 = tag_4;
                    accept_state = 0;
                    match_end = _cursor;
                    break _L;
                  }
                  tag_1_1 = tag_1_2;
                  tag_1 = _cursor;
                  tag_2 = tag_2_1;
                  if (_cursor < _end) {
                    _L$5: {
                      const next_char$2 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                      _cursor = _cursor + 1 | 0;
                      if (next_char$2 < 58) {
                        if (next_char$2 < 48) {
                          break _L$5;
                        } else {
                          _tmp = 4;
                          continue;
                        }
                      } else {
                        if (next_char$2 > 58) {
                          break _L$5;
                        } else {
                          _tmp = 1;
                          continue;
                        }
                      }
                    }
                    _tmp = 0;
                    continue;
                  } else {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              continue;
            }
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  if (accept_state === 0) {
    const start_line = _M0MPC16string6String4view(_data, match_tag_saver_1 + 1 | 0, match_tag_saver_2);
    const start_column = _M0MPC16string6String4view(_data, match_tag_saver_2 + 1 | 0, match_tag_saver_3);
    const pkg = _M0MPC16string6String4view(_data, _start + 1 | 0, match_tag_saver_0);
    const filename = _M0MPC16string6String4view(_data, match_tag_saver_0 + 1 | 0, match_tag_saver_1);
    const end_line = _M0MPC16string6String4view(_data, match_tag_saver_3 + 1 | 0, match_tag_saver_4);
    const end_column = _M0MPC16string6String4view(_data, match_tag_saver_4 + 1 | 0, match_end);
    return new _M0TPB13SourceLocRepr(pkg, filename, start_line, start_column, end_line, end_column);
  } else {
    return $panic();
  }
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IPC16double6DoublePB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPB7MyInt647to__int(self) {
  return self.lo;
}
function _M0MPC16uint646UInt647to__int(self) {
  return _M0MPB7MyInt647to__int(self);
}
function _M0MPC16uint646UInt648to__byte(self) {
  return _M0MPC16uint646UInt647to__int(self) & 255;
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0IPC16uint166UInt16PB7Compare7compare(self, that) {
  return $compare_int(self, that);
}
function _M0MPB6Hasher12combine__int(self, value) {
  _M0MPB6Hasher13combine__uint(self, value);
}
function _M0MPC14json4Json6number(number, repr) {
  return new _M0DTPB4Json6Number(number, repr);
}
function _M0MPB7MyInt649from__int(value) {
  return new _M0TPB7MyInt64(value >> 31 & -1, value | 0);
}
function _M0MPC13int3Int9to__int64(self) {
  return _M0MPB7MyInt649from__int(self);
}
function _M0MPB6Hasher7combineGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, value) {
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime2IdPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdE(self, value) {
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGsE(self, value) {
  _M0IPC16string6StringPB4Hash13hash__combine(value, self);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(x, y) {
  return !_M0IP419moonbit_2dcommunity7rabbita8internal7runtime2IdPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOsE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGsE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP319moonbit_2dcommunity7rabbita7variant7VariantE(x, y) {
  return !_M0IP319moonbit_2dcommunity7rabbita7variant7VariantPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB7Compare6op__ltGlE(x, y) {
  return _M0IPC15int645Int64PB7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implPB7Compare6op__ltGmE(x, y) {
  return _M0IPC16uint646UInt64PB7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implPB7Compare6op__gtGlE(x, y) {
  return _M0IPC15int645Int64PB7Compare7compare(x, y) > 0;
}
function _M0IP016_24default__implPB7Compare6op__gtGmE(x, y) {
  return _M0IPC16uint646UInt64PB7Compare7compare(x, y) > 0;
}
function _M0IP016_24default__implPB7Compare6op__leGlE(x, y) {
  return _M0IPC15int645Int64PB7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__leGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__leGmE(x, y) {
  return _M0IPC16uint646UInt64PB7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGlE(x, y) {
  return _M0IPC15int645Int64PB7Compare7compare(x, y) >= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) >= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGmE(x, y) {
  return _M0IPC16uint646UInt64PB7Compare7compare(x, y) >= 0;
}
function _M0MPB6Hasher9avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function _M0MPB6Hasher8finalize(self) {
  return _M0MPB6Hasher9avalanche(self);
}
function _M0MPB6Hasher11new_2einner(seed) {
  return new _M0TPB6Hasher((seed >>> 0) + (374761393 >>> 0) | 0);
}
function _M0MPB6Hasher3new(seed$46$opt) {
  let seed;
  if (seed$46$opt === undefined) {
    seed = _M0FPB4seed;
  } else {
    const _Some = seed$46$opt;
    seed = _Some;
  }
  return _M0MPB6Hasher11new_2einner(seed);
}
function _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self) {
  const h = _M0MPB6Hasher3new(undefined);
  _M0MPB6Hasher7combineGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdE(self) {
  const h = _M0MPB6Hasher3new(undefined);
  _M0MPB6Hasher7combineGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB4Hash4hashGsE(self) {
  const h = _M0MPB6Hasher3new(undefined);
  _M0MPB6Hasher7combineGsE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    if (start$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start$2))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start$2, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView6length(self) {
  return self.end - self.start | 0;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implPB4Show10to__stringGiE(self) {
  const logger = _M0MPB13StringBuilder11new_2einner(0);
  _M0IPC13int3IntPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(self) {
  const logger = _M0MPB13StringBuilder11new_2einner(0);
  _M0IPB9SourceLocPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPB4Iter4nextGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self) {
  const _func = self;
  return _func();
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self;
  return _func();
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0FPB4failGUOsORPC16string10StringViewEE(msg, loc) {
  return new _M0DTPC16result6ResultGUOsORPC16string10StringViewERPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(`${_M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(loc)} FAILED: ${_M0IPC16string6StringPB4Show10to__string(msg)}`));
}
function _M0MPC16string10StringView11unsafe__get(self, index) {
  return self.str.charCodeAt(self.start + index | 0);
}
function _M0MPB4Iter3newGRPC16string10StringViewE(f) {
  return f;
}
function _M0MPB4Iter3newGcE(f) {
  return f;
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = _M0MPC16string10StringView6length(self);
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= _M0MPC16string10StringView6length(self)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPB5abortGRPB9ArrayViewGRPC16string10StringViewEE("Invalid index for View", "@moonbitlang/core/builtin:stringview.mbt:113:5-113:36");
}
function _M0IPC14byte4BytePB7Default7default() {
  return 0;
}
function _M0IPC16string10StringViewPB4Show10to__string(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  });
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = _M0MPC16string10StringView6length(self);
  if (len === _M0MPC16string10StringView6length(other)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), other.str.charCodeAt(other.start + i | 0))) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  } else {
    return false;
  }
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPB5abortGRPB9ArrayViewGRPC16string10StringViewEE("Invalid index for View", "@moonbitlang/core/builtin:stringview.mbt:399:5-399:36");
}
function _M0MPC16string6String4view(self, start_offset$46$opt, end_offset) {
  let start_offset;
  if (start_offset$46$opt === undefined) {
    start_offset = 0;
  } else {
    const _Some = start_offset$46$opt;
    start_offset = _Some;
  }
  return _M0MPC16string6String12view_2einner(self, start_offset, end_offset);
}
function _M0MPC15array9ArrayView6lengthGUsRPB4JsonEE(self) {
  return self.end - self.start | 0;
}
function _M0MPC16string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = _end < 0 ? self.end + _end | 0 : self.start + _end | 0;
  }
  const abs_start = start < 0 ? self.end + start | 0 : self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_start))) {
      } else {
        $panic();
      }
    }
    if (abs_end < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_end))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self.str, abs_start, abs_end);
  } else {
    return $panic();
  }
}
function _M0MPC16string6String24char__length__eq_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          _M0FPB5abortGuE("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:429:9-429:40");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count === len && index === end_offset$2;
    }
  }
}
function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          _M0FPB5abortGuE("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:457:9-457:40");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _bind;
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      _bind = { _0: utf16_offset, _1: char_count };
      break;
    }
  }
  const _utf16_offset = _bind._0;
  const _char_count = _bind._1;
  return _char_count < n || _utf16_offset < start_offset ? undefined : _utf16_offset;
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _bind;
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        _bind = { _0: utf16_offset, _1: char_count };
        break;
      }
    }
    const _utf16_offset = _bind._0;
    const _char_count = _bind._1;
    return _char_count < n || _utf16_offset >= end_offset ? undefined : _utf16_offset;
  } else {
    return _M0FPB5abortGOiE("Invalid start index", "@moonbitlang/core/builtin:string.mbt:329:5-329:33");
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0IPC16string10StringViewPB4Show10to__string(str)}`;
}
function _M0FPB28boyer__moore__horspool__find(haystack, needle) {
  const haystack_len = _M0MPC16string10StringView6length(haystack);
  const needle_len = _M0MPC16string10StringView6length(needle);
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      const _bind = needle_len - 1 | 0;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _bind) {
          const _tmp$2 = _M0MPC16string10StringView11unsafe__get(needle, i) & 255;
          $bound_check(skip_table, _tmp$2);
          skip_table[_tmp$2] = (needle_len - 1 | 0) - i | 0;
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i <= (haystack_len - needle_len | 0)) {
          const _bind$2 = needle_len - 1 | 0;
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j <= _bind$2) {
              if (_M0IPC16uint166UInt16PB2Eq10not__equal(_M0MPC16string10StringView11unsafe__get(haystack, i + j | 0), _M0MPC16string10StringView11unsafe__get(needle, j))) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _tmp$4 = _M0MPC16string10StringView11unsafe__get(haystack, (i + needle_len | 0) - 1 | 0) & 255;
          $bound_check(skip_table, _tmp$4);
          _tmp$2 = i + skip_table[_tmp$4] | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return _M0FPB43boyer__moore__horspool__find_2econstr_2f371;
  }
}
function _M0FPB18brute__force__find(haystack, needle) {
  const haystack_len = _M0MPC16string10StringView6length(haystack);
  const needle_len = _M0MPC16string10StringView6length(needle);
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const needle_first = _M0MPC16string10StringView11unsafe__get(needle, 0);
      const forward_len = haystack_len - needle_len | 0;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i <= forward_len) {
          if (_M0IPC16uint166UInt16PB2Eq10not__equal(_M0MPC16string10StringView11unsafe__get(haystack, i), needle_first)) {
            _tmp = i + 1 | 0;
            continue;
          }
          let _tmp$2 = 1;
          while (true) {
            const j = _tmp$2;
            if (j < needle_len) {
              if (_M0IPC16uint166UInt16PB2Eq10not__equal(_M0MPC16string10StringView11unsafe__get(haystack, i + j | 0), _M0MPC16string10StringView11unsafe__get(needle, j))) {
                break;
              }
              _tmp$2 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return _M0FPB33brute__force__find_2econstr_2f385;
  }
}
function _M0MPC16string10StringView4find(self, str) {
  return _M0MPC16string10StringView6length(str) <= 4 ? _M0FPB18brute__force__find(self, str) : _M0FPB28boyer__moore__horspool__find(self, str);
}
function _M0MPC16string6String6repeat(self, n) {
  if (n <= 0) {
    return "";
  } else {
    if (n === 1) {
      return self;
    } else {
      const len = self.length;
      const buf = _M0MPB13StringBuilder11new_2einner(Math.imul(len, n) | 0);
      const str = self;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < n) {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return _M0MPB13StringBuilder10to__string(buf);
    }
  }
}
function _M0MPC15array5Array11new_2einnerGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC16string10StringView8contains(self, str) {
  const _bind = _M0MPC16string10StringView4find(self, str);
  return !(_bind === undefined);
}
function _M0MPC16string10StringView9is__empty(self) {
  return _M0MPC16string10StringView6length(self) === 0;
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  });
}
function _M0MPB4Iter3mapGRPC16string10StringViewsE(self, f) {
  return () => {
    const _bind = _M0MPB4Iter4nextGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  };
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return () => {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  };
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = _M0MPC16string10StringView6length(sep);
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  });
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPB4Iter9to__arrayGRPC16string10StringViewE(self) {
  const result = [];
  while (true) {
    const _bind = _M0MPB4Iter4nextGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC16string10StringView9get__char(self, idx) {
  if (idx >= 0 && idx < _M0MPC16string10StringView6length(self)) {
    const c = _M0MPC16string10StringView11unsafe__get(self, idx);
    if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
      if ((idx + 1 | 0) < _M0MPC16string10StringView6length(self)) {
        const next = _M0MPC16string10StringView11unsafe__get(self, idx + 1 | 0);
        return _M0MPC16uint166UInt1623is__trailing__surrogate(next) ? _M0FPB32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return _M0MPC16uint166UInt1623is__trailing__surrogate(c) ? -1 : _M0MPC16uint166UInt1616unsafe__to__char(c);
    }
  } else {
    return -1;
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC13int3IntPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0MPC13int3Int18to__string_2einner(self, 10));
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC15array9ArrayView4iterGRPC16string10StringViewE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    if (i.val < _M0MPC15array9ArrayView6lengthGUsRPB4JsonEE(self)) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  });
}
function _M0MPC15array5Array4iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  return _M0MPC15array9ArrayView4iterGRPC16string10StringViewE(new _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, 0, self.length));
}
function _M0MPC16result6Result3mapGssiE(self, f) {
  if (self.$tag === 1) {
    const _Ok = self;
    const _value = _Ok._0;
    return new _M0DTPC16result6ResultGisE2Ok(f(_value));
  } else {
    const _Err = self;
    const _err = _Err._0;
    return new _M0DTPC16result6ResultGisE3Err(_err);
  }
}
function _M0MPC16result6Result3mapGRPB4JsonsuE(self, f) {
  if (self.$tag === 1) {
    const _Ok = self;
    const _value = _Ok._0;
    return new _M0DTPC16result6ResultGusE2Ok(f(_value));
  } else {
    const _Err = self;
    const _err = _Err._0;
    return new _M0DTPC16result6ResultGusE3Err(_err);
  }
}
function _M0MPC16result6Result4bindGRPB4JsonsuE(self, g) {
  if (self.$tag === 1) {
    const _Ok = self;
    const _value = _Ok._0;
    return g(_value);
  } else {
    const _Err = self;
    const _err = _Err._0;
    return new _M0DTPC16result6ResultGusE3Err(_err);
  }
}
function _M0MPC16result6Result4bindGRPB4JsonsRP38bobzhang9nodegraph6shared10ConnectionE(self, g) {
  if (self.$tag === 1) {
    const _Ok = self;
    const _value = _Ok._0;
    return g(_value);
  } else {
    const _Err = self;
    const _err = _Err._0;
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionsE3Err(_err);
  }
}
function _M0MPC16result6Result4bindGRPB4JsonsRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(self, g) {
  if (self.$tag === 1) {
    const _Ok = self;
    const _value = _Ok._0;
    return g(_value);
  } else {
    const _Err = self;
    const _err = _Err._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEsE3Err(_err);
  }
}
function _M0MPC15array13ReadOnlyArray2atGmE(self, index) {
  $bound_check(self, index);
  return self[index];
}
function _M0MPC15array13ReadOnlyArray2atGiE(self, index) {
  $bound_check(self, index);
  return self[index];
}
function _M0MPC15array13ReadOnlyArray2atGdE(self, index) {
  $bound_check(self, index);
  return self[index];
}
function _M0MPC15array13ReadOnlyArray6lengthGiE(self) {
  return self.length;
}
function _M0IPC16option6OptionPB2Eq5equalGiE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0IPC16option6OptionPB2Eq5equalGsE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option6unwrapGiE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGcE(self, default_) {
  return self === -1 ? default_ : self;
}
function _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(self, default_) {
  if (self.$tag === 0) {
    return default_();
  } else {
    const _Some = self;
    const _t = _Some._0;
    return _t;
  }
}
function _M0MPC16option6Option3mapGsRP319moonbit_2dcommunity7rabbita2js5ValueE(self, f) {
  if (self === undefined) {
    return _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__;
  } else {
    const _Some = self;
    const _t = _Some;
    return new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(f(_t));
  }
}
function _M0MPC16option6Option3mapGRP319moonbit_2dcommunity7rabbita3dom4NodeRP319moonbit_2dcommunity7rabbita2js5ValueE(self, f) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(f(_t));
  } else {
    return _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__;
  }
}
function _M0MPC16option6Option3mapGRPC16string10StringViewsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MPC15array5Array4makeGiE(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3setGiE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0MPB3Map11new_2einnerGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map11new_2einnerGsRPB4JsonE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPB4JsonE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map11new_2einnerGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map11new_2einnerGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPB3Map20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGsRPB4JsonE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10push__awayGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map15set__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _M0IP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdPB2Eq5equal(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _M0IP419moonbit_2dcommunity7rabbita8internal7runtime2IdPB2Eq5equal(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _M0IP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdPB2Eq5equal(_curr_entry.key, key)) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGssE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGssE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map4growGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPB4JsonE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGsRPB4JsonE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGssE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGssE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPB3Map3setGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, key, value) {
  _M0MPB3Map15set__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self, key, value, _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdE(key));
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map3setGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key, value) {
  _M0MPB3Map15set__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key, value, _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(key));
}
function _M0MPB3Map3setGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, key, value) {
  _M0MPB3Map15set__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, key, value, _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdE(key));
}
function _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self, key, value) {
  _M0MPB3Map15set__with__hashGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map11from__arrayGsRPB4JsonE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGUsRPB4JsonEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRPB4JsonE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB4JsonE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGUsRPB4JsonEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGUsRPB4JsonEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGUsRPB4JsonEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGUsRPB4JsonEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRPB4JsonE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGssE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGUsRPB4JsonEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRPB4JsonE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGssE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGUsRPB4JsonEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRPB4JsonE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGUsRPB4JsonEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRPB4JsonE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGUsRPB4JsonEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRPB4JsonE(capacity);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _M0IP419moonbit_2dcommunity7rabbita8internal7runtime2IdPB2Eq5equal(_entry.key, key)) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGssE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB4JsonE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGssE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map13remove__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, entry) {
  const _bind = entry.prev;
  if (_bind === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry.next;
  }
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map13remove__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, entry) {
  const _bind = entry.prev;
  if (_bind === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry.next;
  }
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map11shift__backGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = (idx$2 + 1 | 0) & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind = _tmp$2[next];
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function _M0MPB3Map11shift__backGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = (idx$2 + 1 | 0) & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind = _tmp$2[next];
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function _M0MPB3Map18remove__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _M0IP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdPB2Eq5equal(_entry.key, key)) {
        _M0MPB3Map13remove__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, _entry);
        _M0MPB3Map11shift__backGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map18remove__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _M0IP419moonbit_2dcommunity7rabbita8internal7runtime2IdPB2Eq5equal(_entry.key, key)) {
        _M0MPB3Map13remove__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, _entry);
        _M0MPB3Map11shift__backGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map6removeGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, key) {
  _M0MPB3Map18remove__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self, key, _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdE(key));
}
function _M0MPB3Map6removeGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key) {
  _M0MPB3Map18remove__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self, key, _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(key));
}
function _M0MPB3Map9is__emptyGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self) {
  return self.size === 0;
}
function _M0MPB3Map9is__emptyGsRPB4JsonE(self) {
  return self.size === 0;
}
function _M0MPB3Map4eachGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, f) {
  let _tmp = self.head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      f(_key, _value);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPC15array10FixedArray12fill_2einnerGORPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdEE(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function _M0MPB3Map4iterGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(self.head);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = curr_entry.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  });
}
function _M0MPB3Map4iterGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self.head);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = curr_entry.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  });
}
function _M0MPB3Map4iterGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self.head);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = curr_entry.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return { _0: _key, _1: _value };
    }
  });
}
function _M0MPB3Map5iter2GRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self) {
  return _M0MPB3Map4iterGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self);
}
function _M0MPB3Map5iter2GRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self) {
  return _M0MPB3Map4iterGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self);
}
function _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self) {
  return _M0MPB3Map4iterGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self);
}
function _M0MPB3Map6valuesGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(self.head);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = curr_entry.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _value = _x.value;
      const _next = _x.next;
      curr_entry.val = _next;
      return _value;
    }
  });
}
function _M0MPB3Map9to__arrayGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self) {
  const arr = new Array(self.size);
  let i = 0;
  let _tmp = self.head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      break;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      arr[i] = { _0: _key, _1: _value };
      i = i + 1 | 0;
      _tmp = _next;
      continue;
    }
  }
  return arr;
}
function _M0MPB3Map3mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, f) {
  const _bind = self.capacity;
  const _bind$2 = $make_array_len_and_init(self.capacity, undefined);
  const _bind$3 = self.size;
  const _bind$4 = self.capacity_mask;
  const _bind$5 = self.grow_at;
  const _bind$6 = undefined;
  const _bind$7 = self.tail;
  const other = new _M0TPB3MapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_bind$2, _bind$3, _bind, _bind$4, _bind$5, _bind$6, _bind$7);
  if (self.size === 0) {
    return other;
  }
  const _tmp = self.entries;
  const _tmp$2 = self.tail;
  $bound_check(_tmp, _tmp$2);
  const _bind$8 = _tmp[_tmp$2];
  if (_bind$8 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$8;
    const _last = _Some;
    let _tmp$3 = _last;
    let _tmp$4 = self.tail;
    let _tmp$5 = undefined;
    while (true) {
      const _param_0 = _tmp$3;
      const _param_1 = _tmp$4;
      const _param_2 = _tmp$5;
      const _prev = _param_0.prev;
      const _psl = _param_0.psl;
      const _hash = _param_0.hash;
      const _key = _param_0.key;
      const _value = _param_0.value;
      const new_value = f(_key, _value);
      const new_entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_prev, _param_2, _psl, _hash, _key, new_value);
      const _tmp$6 = other.entries;
      $bound_check(_tmp$6, _param_1);
      _tmp$6[_param_1] = new_entry;
      if (_prev !== -1) {
        const _tmp$7 = self.entries;
        $bound_check(_tmp$7, _prev);
        _tmp$3 = _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp$7[_prev]);
        _tmp$4 = _prev;
        _tmp$5 = new_entry;
        continue;
      } else {
        other.head = new_entry;
        break;
      }
    }
    return other;
  }
}
function _M0IPC14byte4BytePB2Eq5equal(self, that) {
  return self === that;
}
function _M0MPC14json4Json6string(string) {
  return new _M0DTPB4Json6String(string);
}
function _M0MPC14json4Json7boolean(boolean) {
  return boolean ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
}
function _M0MPC14json4Json6object(object) {
  return new _M0DTPB4Json6Object(object);
}
function _M0IPC13int3IntPB6ToJson8to__json(self) {
  return _M0MPC14json4Json6number(self + 0, undefined);
}
function _M0MPB7MyInt6414extend__i32__u(value) {
  return new _M0TPB7MyInt64(0, value);
}
function _M0MPC16uint646UInt6412extend__uint(value) {
  return _M0MPB7MyInt6414extend__i32__u(value);
}
function _M0MPC16double6Double15convert__uint64(value) {
  return _M0MPB7MyInt6422convert__to__double__u(value);
}
function _M0MPC15int645Int6423reinterpret__as__double(self) {
  return _M0MPB7MyInt6423reinterpret__as__double(self);
}
function _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared4NodeRP38bobzhang9nodegraph6shared4NodeE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared10SavedGraphRP319moonbit_2dcommunity7rabbita4html4HtmlE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGUisEsE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared4NodeUiiiEE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared4NodeRP319moonbit_2dcommunity7rabbita4html4HtmlE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared10ConnectionRP319moonbit_2dcommunity7rabbita4html4HtmlE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared4NodeiE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared5ValueRP319moonbit_2dcommunity7rabbita4html4HtmlE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP319moonbit_2dcommunity7rabbita3svg3SvgRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPB4Iter4join(self, sep) {
  const result = _M0MPB13StringBuilder11new_2einner(0);
  const _bind = _M0MPB4Iter4nextGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _x = _Some;
    _M0IPB13StringBuilderPB6Logger13write__string(result, _x);
    while (true) {
      const _bind$2 = _M0MPB4Iter4nextGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some$2 = _bind$2;
        const _x$2 = _Some$2;
        _M0IPB13StringBuilderPB6Logger13write__string(result, sep);
        _M0IPB13StringBuilderPB6Logger13write__string(result, _x$2);
        continue;
      }
    }
  }
  return _M0MPB13StringBuilder10to__string(result);
}
function _M0MPB5Iter24nextGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self) {
  return _M0MPB4Iter4nextGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self);
}
function _M0MPB5Iter24nextGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self) {
  return _M0MPB4Iter4nextGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self);
}
function _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self) {
  return _M0MPB4Iter4nextGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self);
}
function _M0MPC16string6String20unsafe__charcode__at(self, idx) {
  return self.charCodeAt(idx);
}
function _M0MPC14byte4Byte9to__int64(self) {
  return _M0MPC13int3Int9to__int64(self);
}
function _M0IPB7MyInt64PB3Neg3neg(self) {
  return self.lo === 0 ? new _M0TPB7MyInt64(~self.hi + 1 | 0, 0) : new _M0TPB7MyInt64(~self.hi, ~self.lo + 1 | 0);
}
function _M0MPB7MyInt6411add__hi__lo(self, bhi, blo) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const lo = _alo + blo | 0;
  const s = lo >> 31;
  const as_ = _alo >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_ahi + bhi | 0) + c | 0;
  return new _M0TPB7MyInt64(hi, lo);
}
function _M0IPB7MyInt64PB3Add3add(self, other) {
  return _M0MPB7MyInt6411add__hi__lo(self, other.hi, other.lo);
}
function _M0IPB7MyInt64PB3Sub3sub(self, other) {
  return other.lo === 0 ? new _M0TPB7MyInt64(self.hi - other.hi | 0, self.lo) : _M0MPB7MyInt6411add__hi__lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function _M0IPB7MyInt64PB3Mul3mul(self, other) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const ahi = _ahi;
  const alo = _alo;
  const bhi = _bhi;
  const blo = _blo;
  const a48 = ahi >>> 16 | 0;
  const a32 = ahi & 65535;
  const a16 = alo >>> 16 | 0;
  const a00 = alo & 65535;
  const b48 = bhi >>> 16 | 0;
  const b32 = bhi & 65535;
  const b16 = blo >>> 16 | 0;
  const b00 = blo & 65535;
  const c00 = Math.imul(a00, b00) | 0;
  const c16 = c00 >>> 16 | 0;
  const c00$2 = c00 & 65535;
  const c16$2 = (c16 >>> 0) + ((Math.imul(a16, b00) | 0) >>> 0) | 0;
  const c32 = c16$2 >>> 16 | 0;
  const c16$3 = c16$2 & 65535;
  const c16$4 = (c16$3 >>> 0) + ((Math.imul(a00, b16) | 0) >>> 0) | 0;
  const c32$2 = (c32 >>> 0) + ((c16$4 >>> 16 | 0) >>> 0) | 0;
  const c16$5 = c16$4 & 65535;
  const c32$3 = (c32$2 >>> 0) + ((Math.imul(a32, b00) | 0) >>> 0) | 0;
  const c48 = c32$3 >>> 16 | 0;
  const c32$4 = c32$3 & 65535;
  const c32$5 = (c32$4 >>> 0) + ((Math.imul(a16, b16) | 0) >>> 0) | 0;
  const c48$2 = (c48 >>> 0) + ((c32$5 >>> 16 | 0) >>> 0) | 0;
  const c32$6 = c32$5 & 65535;
  const c32$7 = (c32$6 >>> 0) + ((Math.imul(a00, b32) | 0) >>> 0) | 0;
  const c48$3 = (c48$2 >>> 0) + ((c32$7 >>> 16 | 0) >>> 0) | 0;
  const c32$8 = c32$7 & 65535;
  const c48$4 = (((((((c48$3 >>> 0) + ((Math.imul(a48, b00) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a32, b16) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a16, b32) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a00, b48) | 0) >>> 0) | 0;
  const c48$5 = c48$4 & 65535;
  return new _M0TPB7MyInt64(c48$5 << 16 | c32$8, c16$5 << 16 | c00$2);
}
function _M0FPB29try__get__int64__wasm__helper() {
  if (_M0FPB19wasm__helper__cache.tried) {
    const _bind = _M0FPB19wasm__helper__cache.exports;
    return !(_bind === undefined);
  }
  _M0FPB19wasm__helper__cache.tried = true;
  _M0FPB19wasm__helper__cache.exports = _M0FPB23try__init__wasm__helper();
  const _bind = _M0FPB19wasm__helper__cache.exports;
  return !(_bind === undefined);
}
function _M0IPB7MyInt64PB3Div3div(self, other) {
  if (!(other.hi === 0 && other.lo === 0)) {
    if (!_M0FPB29try__get__int64__wasm__helper()) {
      return _M0MPB7MyInt6411div__bigint(self, other);
    }
    const _bind = _M0FPB19wasm__helper__cache.exports;
    if (_bind === undefined) {
      return $panic();
    } else {
      const _Some = _bind;
      const _exports = _Some;
      const _ahi = self.hi;
      const _alo = self.lo;
      const _bhi = other.hi;
      const _blo = other.lo;
      const _func = _exports.div_s;
      const lo = _func(_alo, _ahi, _blo, _bhi);
      const _func$2 = _exports.get_high;
      const hi = _func$2();
      return new _M0TPB7MyInt64(hi, lo);
    }
  } else {
    return $panic();
  }
}
function _M0MPB7MyInt646div__u(self, other) {
  if (!(other.hi === 0 && other.lo === 0)) {
    if (!_M0FPB29try__get__int64__wasm__helper()) {
      return _M0MPB7MyInt6414div__u__bigint(self, other);
    }
    const _bind = _M0FPB19wasm__helper__cache.exports;
    if (_bind === undefined) {
      return $panic();
    } else {
      const _Some = _bind;
      const _exports = _Some;
      const _ahi = self.hi;
      const _alo = self.lo;
      const _bhi = other.hi;
      const _blo = other.lo;
      const _func = _exports.div_u;
      const lo = _func(_alo, _ahi, _blo, _bhi);
      const _func$2 = _exports.get_high;
      const hi = _func$2();
      return new _M0TPB7MyInt64(hi, lo);
    }
  } else {
    return $panic();
  }
}
function _M0MPB7MyInt644land(self, other) {
  return new _M0TPB7MyInt64(self.hi & other.hi, self.lo & other.lo);
}
function _M0MPB7MyInt643lor(self, other) {
  return new _M0TPB7MyInt64(self.hi | other.hi, self.lo | other.lo);
}
function _M0MPB7MyInt643lsl(self, shift) {
  const shift$2 = shift & 63;
  if (shift$2 === 0) {
    return self;
  } else {
    if (shift$2 < 32) {
      const _hi = self.hi;
      const _lo = self.lo;
      const hi = _hi;
      const lo = _lo;
      const hi$2 = hi << shift$2 | (lo >>> (32 - shift$2 | 0) | 0);
      const lo$2 = lo << shift$2;
      return new _M0TPB7MyInt64(hi$2, lo$2);
    } else {
      return new _M0TPB7MyInt64(self.lo << (shift$2 - 32 | 0), 0);
    }
  }
}
function _M0MPB7MyInt643lsr(self, shift) {
  const shift$2 = shift & 63;
  return shift$2 === 0 ? self : shift$2 < 32 ? new _M0TPB7MyInt64(self.hi >>> shift$2 | 0, self.lo >>> shift$2 | 0 | self.hi << (32 - shift$2 | 0)) : new _M0TPB7MyInt64(0, self.hi >>> (shift$2 - 32 | 0) | 0);
}
function _M0MPB7MyInt643asr(self, shift) {
  const shift$2 = shift & 63;
  return shift$2 === 0 ? self : shift$2 < 32 ? new _M0TPB7MyInt64(self.hi >> shift$2, self.lo >>> shift$2 | 0 | self.hi << (32 - shift$2 | 0)) : new _M0TPB7MyInt64(self.hi >> 31, self.hi >> (shift$2 - 32 | 0));
}
function _M0MPB7MyInt643clz(self) {
  return self.hi !== 0 ? Math.clz32(self.hi) : 32 + Math.clz32(self.lo) | 0;
}
function _M0IPB7MyInt64PB2Eq5equal(self, other) {
  return self.hi === other.hi && self.lo === other.lo;
}
function _M0IPC15int645Int64PB3Neg3neg(self) {
  return _M0IPB7MyInt64PB3Neg3neg(self);
}
function _M0IPC15int645Int64PB3Add3add(self, other) {
  return _M0IPB7MyInt64PB3Add3add(self, other);
}
function _M0IPC15int645Int64PB3Sub3sub(self, other) {
  return _M0IPB7MyInt64PB3Sub3sub(self, other);
}
function _M0IPC15int645Int64PB3Mul3mul(self, other) {
  return _M0IPB7MyInt64PB3Mul3mul(self, other);
}
function _M0IPC15int645Int64PB3Div3div(self, other) {
  return _M0IPB7MyInt64PB3Div3div(self, other);
}
function _M0IPC15int645Int64PB6BitAnd4land(self, other) {
  return _M0MPB7MyInt644land(self, other);
}
function _M0IPC15int645Int64PB5BitOr3lor(self, other) {
  return _M0MPB7MyInt643lor(self, other);
}
function _M0IPC15int645Int64PB3Shr3shr(self, other) {
  return _M0MPB7MyInt643asr(self, other);
}
function _M0IPC15int645Int64PB3Shl3shl(self, other) {
  return _M0MPB7MyInt643lsl(self, other);
}
function _M0IPC15int645Int64PB2Eq5equal(self, other) {
  return _M0IPB7MyInt64PB2Eq5equal(self, other);
}
function _M0IPC15int645Int64PB7Compare7compare(self, other) {
  return _M0MPB7MyInt647compare(self, other);
}
function _M0MPC15int645Int647to__int(self) {
  return _M0MPB7MyInt647to__int(self);
}
function _M0MPC16double6Double14convert__int64(value) {
  return _M0MPB7MyInt6419convert__to__double(value);
}
function _M0MPC15int645Int6410to__double(self) {
  return _M0MPC16double6Double14convert__int64(self);
}
function _M0IPC16uint646UInt64PB3Add3add(self, other) {
  return _M0IPB7MyInt64PB3Add3add(self, other);
}
function _M0IPC16uint646UInt64PB3Sub3sub(self, other) {
  return _M0IPB7MyInt64PB3Sub3sub(self, other);
}
function _M0IPC16uint646UInt64PB3Mul3mul(self, other) {
  return _M0IPB7MyInt64PB3Mul3mul(self, other);
}
function _M0IPC16uint646UInt64PB3Div3div(self, other) {
  return _M0MPB7MyInt646div__u(self, other);
}
function _M0IPC16uint646UInt64PB7Compare7compare(self, other) {
  return _M0MPB7MyInt6410compare__u(self, other);
}
function _M0IPC16uint646UInt64PB2Eq5equal(self, other) {
  return _M0IPB7MyInt64PB2Eq5equal(self, other);
}
function _M0IPC16uint646UInt64PB6BitAnd4land(self, other) {
  return _M0MPB7MyInt644land(self, other);
}
function _M0IPC16uint646UInt64PB3Shl3shl(self, shift) {
  return _M0MPB7MyInt643lsl(self, shift);
}
function _M0IPC16uint646UInt64PB3Shr3shr(self, shift) {
  return _M0MPB7MyInt643lsr(self, shift);
}
function _M0MPC16uint646UInt643clz(self) {
  return _M0MPB7MyInt643clz(self);
}
function _M0MPB6Hasher15combine__string(self, value) {
  const _bind = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      _M0MPB6Hasher13combine__uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IPC16string6StringPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher15combine__string(hasher, self);
}
function _M0IPC13int3IntPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher12combine__int(hasher, self);
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC16double6Double10to__string(self) {
  return _M0FPB15ryu__to__string(self);
}
function _M0IPC16double6DoublePB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0MPC16double6Double10to__string(self));
}
function _M0MPC14char4Char10utf16__len(self) {
  const code = self;
  return code <= 65535 ? 1 : 2;
}
function _M0IPB13SourceLocReprPB4Show6output(self, logger) {
  const pkg = self.pkg;
  const _data = _M0MPC16string10StringView4data(pkg);
  const _start = _M0MPC16string10StringView13start__offset(pkg);
  const _end = _start + _M0MPC16string10StringView6length(pkg) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  let match_tag_saver_0 = -1;
  let tag_0 = -1;
  let _bind;
  _L: {
    _L$2: {
      _L$3: while (true) {
        if (_cursor < _end) {
          const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
          _cursor = _cursor + 1 | 0;
          if (next_char === 47) {
            _L$4: while (true) {
              tag_0 = _cursor;
              if (_cursor < _end) {
                const next_char$2 = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
                _cursor = _cursor + 1 | 0;
                if (next_char$2 === 47) {
                  while (true) {
                    if (_cursor < _end) {
                      _cursor = _cursor + 1 | 0;
                      continue;
                    } else {
                      match_tag_saver_0 = tag_0;
                      accept_state = 0;
                      match_end = _cursor;
                      break _L$2;
                    }
                  }
                } else {
                  continue;
                }
              } else {
                break _L$2;
              }
            }
          } else {
            continue;
          }
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    if (accept_state === 0) {
      const package_name = _M0MPC16string6String4view(_data, match_tag_saver_0 + 1 | 0, match_end);
      const module_name = _M0MPC16string6String4view(_data, _start, match_tag_saver_0);
      _bind = { _0: module_name, _1: package_name };
    } else {
      _bind = { _0: pkg, _1: undefined };
    }
  }
  const _module_name = _bind._0;
  const _package_name = _bind._1;
  if (_package_name === undefined) {
  } else {
    const _Some = _package_name;
    const _pkg_name = _Some;
    logger.method_table.method_2(logger.self, _pkg_name);
    logger.method_table.method_3(logger.self, 47);
  }
  logger.method_table.method_2(logger.self, self.filename);
  logger.method_table.method_3(logger.self, 58);
  logger.method_table.method_2(logger.self, self.start_line);
  logger.method_table.method_3(logger.self, 58);
  logger.method_table.method_2(logger.self, self.start_column);
  logger.method_table.method_3(logger.self, 45);
  logger.method_table.method_2(logger.self, self.end_line);
  logger.method_table.method_3(logger.self, 58);
  logger.method_table.method_2(logger.self, self.end_column);
  logger.method_table.method_3(logger.self, 64);
  logger.method_table.method_2(logger.self, _module_name);
}
function _M0IPB9SourceLocPB4Show6output(self, logger) {
  _M0IPB13SourceLocReprPB4Show6output(_M0MPB13SourceLocRepr5parse(self), logger);
}
function _M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    const _bind = self;
    const _bind$2 = end$2 - start$2 | 0;
    return new _M0TPB9ArrayViewGRPC16string10StringViewE(_bind, start$2, start$2 + _bind$2 | 0);
  } else {
    return _M0FPB5abortGRPB9ArrayViewGRPC16string10StringViewEE("View index out of bounds", "@moonbitlang/core/builtin:arrayview.mbt:266:5-266:38");
  }
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = _M0MPC16string10StringView6length(hd);
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        _tmp$2 = (size_hint$2 + _M0MPC16string10StringView6length(_M0IPC16string6StringPB12ToStringView16to__string__view(s)) | 0) + _M0MPC16string10StringView6length(separator) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder11new_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if (_M0MPC16string6String24char__length__eq_2einner(separator.str, 0, separator.start, separator.end)) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array5Array11unsafe__popGiE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array11unsafe__popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGiE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGiE(self);
    return v;
  }
}
function _M0MPC15array5Array3popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self);
    return v;
  }
}
function _M0MPC15array5Array4copyGRP38bobzhang9nodegraph6shared10ConnectionE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function _M0MPC15array5Array3getGRPB4JsonE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : undefined;
}
function _M0MPC15array5Array4eachGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdE(self, f) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      f(v);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC15array5Array4eachGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, f) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      f(v);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang9nodegraph6shared10SavedGraphEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphERPC14json15JsonDecodeErrorE2Ok([]);
  }
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(i, v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang9nodegraph6shared4NodeEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeERPC14json15JsonDecodeErrorE2Ok([]);
  }
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(i, v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang9nodegraph6shared10ConnectionEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionERPC14json15JsonDecodeErrorE2Ok([]);
  }
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(i, v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array4mapiGRPB4JsonUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEERPC14json15JsonDecodeErrorE2Ok([]);
  }
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(i, v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array4mapiGRPB4JsonUisEEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGUisEERPC14json15JsonDecodeErrorE2Ok([]);
  }
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(i, v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGUisEERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array4mapiGRPB4JsoniEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGiERPC14json15JsonDecodeErrorE2Ok([]);
  }
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(i, v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGiERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang9nodegraph6shared5ValueEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueERPC14json15JsonDecodeErrorE2Ok([]);
  }
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(i, v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array6filterGRP38bobzhang9nodegraph6shared10ConnectionE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGRP38bobzhang9nodegraph6shared4NodeE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGRP38bobzhang9nodegraph6shared10SavedGraphE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array9is__emptyGRP38bobzhang9nodegraph6shared10SavedGraphE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array3revGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  const len = self.length;
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = self[(len - i | 0) - 1 | 0];
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array10push__iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, iter) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(iter);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0FPC17strconv9base__errGUiRPC16string10StringViewbEE() {
  return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(_M0FPC17strconv14base__err__str));
}
function _M0FPC17strconv25check__and__consume__base(view, base) {
  if (base === 0) {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (_M0MPC16string6String24char__length__ge_2einner(view.str, 2, view.start, view.end)) {
              const _x = _M0MPC16string6String16unsafe__char__at(view.str, _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = _M0MPC16string6String16unsafe__char__at(view.str, _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind;
                      _tmp$2 = _Some;
                    }
                    const _x$3 = new _M0TPC16string10StringView(_tmp, _tmp$2, view.end);
                    rest$3 = _x$3;
                    break _L$4;
                  }
                  case 88: {
                    const _tmp$3 = view.str;
                    const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$4;
                    if (_bind$2 === undefined) {
                      _tmp$4 = view.end;
                    } else {
                      const _Some = _bind$2;
                      _tmp$4 = _Some;
                    }
                    const _x$4 = new _M0TPC16string10StringView(_tmp$3, _tmp$4, view.end);
                    rest$3 = _x$4;
                    break _L$4;
                  }
                  case 111: {
                    const _tmp$5 = view.str;
                    const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$6;
                    if (_bind$3 === undefined) {
                      _tmp$6 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$6 = _Some;
                    }
                    const _x$5 = new _M0TPC16string10StringView(_tmp$5, _tmp$6, view.end);
                    rest$2 = _x$5;
                    break _L$3;
                  }
                  case 79: {
                    const _tmp$7 = view.str;
                    const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$4 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$8 = _Some;
                    }
                    const _x$6 = new _M0TPC16string10StringView(_tmp$7, _tmp$8, view.end);
                    rest$2 = _x$6;
                    break _L$3;
                  }
                  case 98: {
                    const _tmp$9 = view.str;
                    const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$10;
                    if (_bind$5 === undefined) {
                      _tmp$10 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$10 = _Some;
                    }
                    const _x$7 = new _M0TPC16string10StringView(_tmp$9, _tmp$10, view.end);
                    rest = _x$7;
                    break _L$2;
                  }
                  case 66: {
                    const _tmp$11 = view.str;
                    const _bind$6 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$12;
                    if (_bind$6 === undefined) {
                      _tmp$12 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$12 = _Some;
                    }
                    const _x$8 = new _M0TPC16string10StringView(_tmp$11, _tmp$12, view.end);
                    rest = _x$8;
                    break _L$2;
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 2, _1: rest, _2: true });
    }
    return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 10, _1: view, _2: false });
  } else {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (_M0MPC16string6String24char__length__ge_2einner(view.str, 2, view.start, view.end)) {
              const _x = _M0MPC16string6String16unsafe__char__at(view.str, _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = _M0MPC16string6String16unsafe__char__at(view.str, _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind;
                      _tmp$2 = _Some;
                    }
                    const _x$3 = new _M0TPC16string10StringView(_tmp, _tmp$2, view.end);
                    if (base === 16) {
                      rest$3 = _x$3;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 88: {
                    const _tmp$3 = view.str;
                    const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$4;
                    if (_bind$2 === undefined) {
                      _tmp$4 = view.end;
                    } else {
                      const _Some = _bind$2;
                      _tmp$4 = _Some;
                    }
                    const _x$4 = new _M0TPC16string10StringView(_tmp$3, _tmp$4, view.end);
                    if (base === 16) {
                      rest$3 = _x$4;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 111: {
                    const _tmp$5 = view.str;
                    const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$6;
                    if (_bind$3 === undefined) {
                      _tmp$6 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$6 = _Some;
                    }
                    const _x$5 = new _M0TPC16string10StringView(_tmp$5, _tmp$6, view.end);
                    if (base === 8) {
                      rest$2 = _x$5;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 79: {
                    const _tmp$7 = view.str;
                    const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$4 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$8 = _Some;
                    }
                    const _x$6 = new _M0TPC16string10StringView(_tmp$7, _tmp$8, view.end);
                    if (base === 8) {
                      rest$2 = _x$6;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 98: {
                    const _tmp$9 = view.str;
                    const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$10;
                    if (_bind$5 === undefined) {
                      _tmp$10 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$10 = _Some;
                    }
                    const _x$7 = new _M0TPC16string10StringView(_tmp$9, _tmp$10, view.end);
                    if (base === 2) {
                      rest = _x$7;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  case 66: {
                    const _tmp$11 = view.str;
                    const _bind$6 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$12;
                    if (_bind$6 === undefined) {
                      _tmp$12 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$12 = _Some;
                    }
                    const _x$8 = new _M0TPC16string10StringView(_tmp$11, _tmp$12, view.end);
                    if (base === 2) {
                      rest = _x$8;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 2, _1: rest, _2: true });
    }
    return base >= 2 && base <= 36 ? new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: base, _1: view, _2: false }) : _M0FPC17strconv9base__errGUiRPC16string10StringViewbEE();
  }
}
function _M0FPC17strconv10range__errGuE() {
  return new _M0DTPC16result6ResultGuRPC17strconv12StrConvErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(_M0FPC17strconv15range__err__str));
}
function _M0FPC17strconv10range__errGlE() {
  return new _M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(_M0FPC17strconv15range__err__str));
}
function _M0FPC17strconv11syntax__errGiE() {
  return new _M0DTPC16result6ResultGiRPC17strconv12StrConvErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(_M0FPC17strconv16syntax__err__str));
}
function _M0FPC17strconv11syntax__errGlE() {
  return new _M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(_M0FPC17strconv16syntax__err__str));
}
function _M0FPC17strconv11syntax__errGdE() {
  return new _M0DTPC16result6ResultGdRPC17strconv12StrConvErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(_M0FPC17strconv16syntax__err__str));
}
function _M0FPC17strconv11syntax__errGORPC17strconv6NumberE() {
  return new _M0DTPC16result6ResultGORPC17strconv6NumberRPC17strconv12StrConvErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(_M0FPC17strconv16syntax__err__str));
}
function _M0FPC17strconv19overflow__threshold(base, neg) {
  return !neg ? (base === 10 ? _M0IPC15int645Int64PB3Add3add(_M0IPC15int645Int64PB3Div3div($9223372036854775807L, $10L), $1L) : base === 16 ? _M0IPC15int645Int64PB3Add3add(_M0IPC15int645Int64PB3Div3div($9223372036854775807L, $16L), $1L) : _M0IPC15int645Int64PB3Add3add(_M0IPC15int645Int64PB3Div3div($9223372036854775807L, _M0MPC13int3Int9to__int64(base)), $1L)) : base === 10 ? _M0IPC15int645Int64PB3Div3div($_9223372036854775808L, $10L) : base === 16 ? _M0IPC15int645Int64PB3Div3div($_9223372036854775808L, $16L) : _M0IPC15int645Int64PB3Div3div($_9223372036854775808L, _M0MPC13int3Int9to__int64(base));
}
function _M0FPC17strconv20parse__int64_2einner(str, base) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(str, new _M0TPC16string10StringView(_M0FPC17strconv20parse__int64_2einnerN7_2abindS543, 0, _M0FPC17strconv20parse__int64_2einnerN7_2abindS543.length))) {
    let _bind;
    let rest;
    _L: {
      _L$2: {
        const _bind$2 = _M0MPC16string10StringView12view_2einner(str, 0, undefined);
        if (_M0MPC16string6String24char__length__ge_2einner(_bind$2.str, 1, _bind$2.start, _bind$2.end)) {
          const _x = _M0MPC16string6String16unsafe__char__at(_bind$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(_bind$2.str, 0, _bind$2.start, _bind$2.end));
          switch (_x) {
            case 43: {
              const _tmp = _bind$2.str;
              const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$2;
              if (_bind$3 === undefined) {
                _tmp$2 = _bind$2.end;
              } else {
                const _Some = _bind$3;
                _tmp$2 = _Some;
              }
              const _x$2 = new _M0TPC16string10StringView(_tmp, _tmp$2, _bind$2.end);
              _bind = { _0: false, _1: _x$2 };
              break;
            }
            case 45: {
              const _tmp$3 = _bind$2.str;
              const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$4;
              if (_bind$4 === undefined) {
                _tmp$4 = _bind$2.end;
              } else {
                const _Some = _bind$4;
                _tmp$4 = _Some;
              }
              const _x$3 = new _M0TPC16string10StringView(_tmp$3, _tmp$4, _bind$2.end);
              _bind = { _0: true, _1: _x$3 };
              break;
            }
            default: {
              rest = _bind$2;
              break _L$2;
            }
          }
        } else {
          rest = _bind$2;
          break _L$2;
        }
        break _L;
      }
      _bind = { _0: false, _1: rest };
    }
    const _neg = _bind._0;
    const _rest = _bind._1;
    const _bind$2 = _M0FPC17strconv25check__and__consume__base(_rest, base);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    const _num_base = _bind$3._0;
    const _rest$2 = _bind$3._1;
    const _allow_underscore = _bind$3._2;
    const overflow_threshold = _M0FPC17strconv19overflow__threshold(_num_base, _neg);
    let has_digit;
    if (_M0MPC16string6String24char__length__ge_2einner(_rest$2.str, 1, _rest$2.start, _rest$2.end)) {
      const _x = _M0MPC16string6String16unsafe__char__at(_rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(_rest$2.str, 0, _rest$2.start, _rest$2.end));
      if (_x >= 48 && _x <= 57) {
        has_digit = true;
      } else {
        if (_x >= 97 && _x <= 122) {
          has_digit = true;
        } else {
          if (_x >= 65 && _x <= 90) {
            has_digit = true;
          } else {
            if (_M0MPC16string6String24char__length__ge_2einner(_rest$2.str, 2, _rest$2.start, _rest$2.end)) {
              if (_x === 95) {
                const _x$2 = _M0MPC16string6String16unsafe__char__at(_rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(_rest$2.str, 1, _rest$2.start, _rest$2.end));
                has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _tmp;
      let _tmp$2 = _rest$2;
      let _tmp$3 = $0L;
      let _tmp$4 = _allow_underscore;
      while (true) {
        const _param_0 = _tmp$2;
        const _param_1 = _tmp$3;
        const _param_2 = _tmp$4;
        let acc;
        let rest$2;
        let c;
        _L$2: {
          if (_M0MPC16string6String24char__length__eq_2einner(_param_0.str, 1, _param_0.start, _param_0.end)) {
            const _x = _M0MPC16string6String16unsafe__char__at(_param_0.str, _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 0, _param_0.start, _param_0.end));
            if (_x === 95) {
              const _bind$4 = _M0FPC17strconv11syntax__errGlE();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            } else {
              const _tmp$5 = _param_0.str;
              const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
              let _tmp$6;
              if (_bind$4 === undefined) {
                _tmp$6 = _param_0.end;
              } else {
                const _Some = _bind$4;
                _tmp$6 = _Some;
              }
              const _x$2 = new _M0TPC16string10StringView(_tmp$5, _tmp$6, _param_0.end);
              acc = _param_1;
              rest$2 = _x$2;
              c = _x;
              break _L$2;
            }
          } else {
            if (_M0MPC16string6String24char__length__ge_2einner(_param_0.str, 1, _param_0.start, _param_0.end)) {
              const _x = _M0MPC16string6String16unsafe__char__at(_param_0.str, _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 0, _param_0.start, _param_0.end));
              if (_x === 95) {
                if (_param_2 === false) {
                  const _bind$4 = _M0FPC17strconv11syntax__errGlE();
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _tmp = _ok._0;
                    break;
                  } else {
                    return _bind$4;
                  }
                } else {
                  const _tmp$5 = _param_0.str;
                  const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
                  let _tmp$6;
                  if (_bind$4 === undefined) {
                    _tmp$6 = _param_0.end;
                  } else {
                    const _Some = _bind$4;
                    _tmp$6 = _Some;
                  }
                  const _x$2 = new _M0TPC16string10StringView(_tmp$5, _tmp$6, _param_0.end);
                  _tmp$2 = _x$2;
                  _tmp$4 = false;
                  continue;
                }
              } else {
                const _tmp$5 = _param_0.str;
                const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
                let _tmp$6;
                if (_bind$4 === undefined) {
                  _tmp$6 = _param_0.end;
                } else {
                  const _Some = _bind$4;
                  _tmp$6 = _Some;
                }
                const _x$2 = new _M0TPC16string10StringView(_tmp$5, _tmp$6, _param_0.end);
                acc = _param_1;
                rest$2 = _x$2;
                c = _x;
                break _L$2;
              }
            } else {
              _tmp = _param_1;
              break;
            }
          }
        }
        const c$2 = c;
        let d;
        if (c$2 >= 48 && c$2 <= 57) {
          d = c$2 - 48 | 0;
        } else {
          if (c$2 >= 97 && c$2 <= 122) {
            d = c$2 + -87 | 0;
          } else {
            if (c$2 >= 65 && c$2 <= 90) {
              d = c$2 + -55 | 0;
            } else {
              const _bind$4 = _M0FPC17strconv11syntax__errGiE();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                d = _ok._0;
              } else {
                return _bind$4;
              }
            }
          }
        }
        if (d < _num_base) {
          if (_neg) {
            if (_M0IP016_24default__implPB7Compare6op__geGlE(acc, overflow_threshold)) {
              const next_acc = _M0IPC15int645Int64PB3Sub3sub(_M0IPC15int645Int64PB3Mul3mul(acc, _M0MPC13int3Int9to__int64(_num_base)), _M0MPC13int3Int9to__int64(d));
              if (_M0IP016_24default__implPB7Compare6op__leGlE(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = _M0FPC17strconv10range__errGlE();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = _M0FPC17strconv10range__errGlE();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          } else {
            if (_M0IP016_24default__implPB7Compare6op__ltGlE(acc, overflow_threshold)) {
              const next_acc = _M0IPC15int645Int64PB3Add3add(_M0IPC15int645Int64PB3Mul3mul(acc, _M0MPC13int3Int9to__int64(_num_base)), _M0MPC13int3Int9to__int64(d));
              if (_M0IP016_24default__implPB7Compare6op__geGlE(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = _M0FPC17strconv10range__errGlE();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = _M0FPC17strconv10range__errGlE();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          }
        } else {
          const _bind$4 = _M0FPC17strconv11syntax__errGlE();
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp = _ok._0;
            break;
          } else {
            return _bind$4;
          }
        }
      }
      return new _M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE2Ok(_tmp);
    } else {
      return _M0FPC17strconv11syntax__errGlE();
    }
  } else {
    return _M0FPC17strconv11syntax__errGlE();
  }
}
function _M0FPC17strconv18parse__int_2einner(str, base) {
  const _bind = _M0FPC17strconv20parse__int64_2einner(str, base);
  let n;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    n = _ok._0;
  } else {
    return _bind;
  }
  if (_M0IP016_24default__implPB7Compare6op__ltGlE(n, _M0MPC13int3Int9to__int64(-2147483648)) || _M0IP016_24default__implPB7Compare6op__gtGlE(n, _M0MPC13int3Int9to__int64(2147483647))) {
    const _bind$2 = _M0FPC17strconv10range__errGuE();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  return new _M0DTPC16result6ResultGiRPC17strconv12StrConvErrorE2Ok(_M0MPC15int645Int647to__int(n));
}
function _M0FPC17strconv17check__underscore(str) {
  let rest;
  if (_M0MPC16string6String24char__length__ge_2einner(str.str, 1, str.start, str.end)) {
    const _x = _M0MPC16string6String16unsafe__char__at(str.str, _M0MPC16string6String29offset__of__nth__char_2einner(str.str, 0, str.start, str.end));
    switch (_x) {
      case 43: {
        const _tmp = str.str;
        const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(str.str, 1, str.start, str.end);
        let _tmp$2;
        if (_bind === undefined) {
          _tmp$2 = str.end;
        } else {
          const _Some = _bind;
          _tmp$2 = _Some;
        }
        const _x$2 = new _M0TPC16string10StringView(_tmp, _tmp$2, str.end);
        rest = _x$2;
        break;
      }
      case 45: {
        const _tmp$3 = str.str;
        const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(str.str, 1, str.start, str.end);
        let _tmp$4;
        if (_bind$2 === undefined) {
          _tmp$4 = str.end;
        } else {
          const _Some = _bind$2;
          _tmp$4 = _Some;
        }
        const _x$3 = new _M0TPC16string10StringView(_tmp$3, _tmp$4, str.end);
        rest = _x$3;
        break;
      }
      default: {
        rest = str;
      }
    }
  } else {
    rest = str;
  }
  const _data = _M0MPC16string10StringView4data(rest);
  const _start = _M0MPC16string10StringView13start__offset(rest);
  const _end = _start + _M0MPC16string10StringView6length(rest) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  let _bind;
  _L: {
    if ((_cursor + 1 | 0) < _end) {
      if (_M0MPC16string6String20unsafe__charcode__at(_data, _cursor) === 48) {
        _cursor = _cursor + 1 | 0;
        _L$2: {
          _L$3: {
            _L$4: {
              const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char < 89) {
                if (next_char < 79) {
                  if (next_char === 66) {
                    break _L$2;
                  } else {
                    break _L;
                  }
                } else {
                  if (next_char > 79) {
                    if (next_char < 88) {
                      break _L;
                    } else {
                      break _L$4;
                    }
                  } else {
                    break _L$3;
                  }
                }
              } else {
                if (next_char > 97) {
                  if (next_char < 112) {
                    if (next_char < 99) {
                      break _L$2;
                    } else {
                      if (next_char > 110) {
                        break _L$3;
                      } else {
                        break _L;
                      }
                    }
                  } else {
                    if (next_char > 119) {
                      if (next_char < 121) {
                        break _L$4;
                      } else {
                        break _L;
                      }
                    } else {
                      break _L;
                    }
                  }
                } else {
                  break _L;
                }
              }
            }
            accept_state = 2;
            match_end = _cursor;
            break _L;
          }
          accept_state = 1;
          match_end = _cursor;
          break _L;
        }
        accept_state = 0;
        match_end = _cursor;
        break _L;
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  switch (accept_state) {
    case 2: {
      const rest$2 = _M0MPC16string6String4view(_data, match_end, _end);
      _bind = { _0: rest$2, _1: true, _2: true };
      break;
    }
    case 1: {
      const rest$3 = _M0MPC16string6String4view(_data, match_end, _end);
      _bind = { _0: rest$3, _1: true, _2: false };
      break;
    }
    case 0: {
      const rest$4 = _M0MPC16string6String4view(_data, match_end, _end);
      _bind = { _0: rest$4, _1: true, _2: false };
      break;
    }
    default: {
      _bind = { _0: rest, _1: false, _2: false };
    }
  }
  const _rest = _bind._0;
  const _allow_underscore = _bind._1;
  const _hex = _bind._2;
  let _tmp = _rest;
  let _tmp$2 = _allow_underscore;
  let _tmp$3 = false;
  while (true) {
    const _param_0 = _tmp;
    const _param_1 = _tmp$2;
    const _param_2 = _tmp$3;
    let rest$5;
    let c;
    let follow_underscore;
    _L$2: {
      if (_M0MPC16string6String24char__length__eq_2einner(_param_0.str, 0, _param_0.start, _param_0.end)) {
        return true;
      } else {
        if (_M0MPC16string6String24char__length__eq_2einner(_param_0.str, 1, _param_0.start, _param_0.end)) {
          const _x = _M0MPC16string6String16unsafe__char__at(_param_0.str, _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 0, _param_0.start, _param_0.end));
          if (_x === 95) {
            return false;
          } else {
            const _tmp$4 = _param_0.str;
            const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
            let _tmp$5;
            if (_bind$2 === undefined) {
              _tmp$5 = _param_0.end;
            } else {
              const _Some = _bind$2;
              _tmp$5 = _Some;
            }
            const _x$2 = new _M0TPC16string10StringView(_tmp$4, _tmp$5, _param_0.end);
            rest$5 = _x$2;
            c = _x;
            follow_underscore = _param_2;
            break _L$2;
          }
        } else {
          const _x = _M0MPC16string6String16unsafe__char__at(_param_0.str, _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 0, _param_0.start, _param_0.end));
          if (_x === 95) {
            if (_param_1 === false) {
              return false;
            } else {
              const _tmp$4 = _param_0.str;
              const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
              let _tmp$5;
              if (_bind$2 === undefined) {
                _tmp$5 = _param_0.end;
              } else {
                const _Some = _bind$2;
                _tmp$5 = _Some;
              }
              const _x$2 = new _M0TPC16string10StringView(_tmp$4, _tmp$5, _param_0.end);
              _tmp = _x$2;
              _tmp$2 = false;
              _tmp$3 = true;
              continue;
            }
          } else {
            const _tmp$4 = _param_0.str;
            const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
            let _tmp$5;
            if (_bind$2 === undefined) {
              _tmp$5 = _param_0.end;
            } else {
              const _Some = _bind$2;
              _tmp$5 = _Some;
            }
            const _x$2 = new _M0TPC16string10StringView(_tmp$4, _tmp$5, _param_0.end);
            rest$5 = _x$2;
            c = _x;
            follow_underscore = _param_2;
            break _L$2;
          }
        }
      }
    }
    if (c >= 48 && c <= 57 ? true : _hex && (c >= 97 && c <= 102 ? true : c >= 65 && c <= 70)) {
      _tmp = rest$5;
      _tmp$2 = true;
      _tmp$3 = false;
      continue;
    } else {
      if (follow_underscore) {
        return false;
      } else {
        _tmp = rest$5;
        _tmp$2 = false;
        _tmp$3 = false;
        continue;
      }
    }
  }
}
function _M0MPC17strconv7Decimal9new__priv() {
  return new _M0TPC17strconv7Decimal($makebytes(800, _M0IPC14byte4BytePB7Default7default()), 0, 0, false, false);
}
function _M0MPC17strconv7Decimal4trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      $bound_check(_tmp$2, _tmp$3);
      _tmp = _M0IPC14byte4BytePB2Eq5equal(_tmp$2[_tmp$3], 0);
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function _M0FPC17strconv26parse__decimal__from__view(str) {
  const d = _M0MPC17strconv7Decimal9new__priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if (_M0MPC16string6String24char__length__ge_2einner(str.str, 1, str.start, str.end)) {
        const _x = _M0MPC16string6String16unsafe__char__at(str.str, _M0MPC16string6String29offset__of__nth__char_2einner(str.str, 0, str.start, str.end));
        switch (_x) {
          case 45: {
            const _tmp = str.str;
            const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(str.str, 1, str.start, str.end);
            let _tmp$2;
            if (_bind === undefined) {
              _tmp$2 = str.end;
            } else {
              const _Some = _bind;
              _tmp$2 = _Some;
            }
            const _x$2 = new _M0TPC16string10StringView(_tmp, _tmp$2, str.end);
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            const _tmp$3 = str.str;
            const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(str.str, 1, str.start, str.end);
            let _tmp$4;
            if (_bind$2 === undefined) {
              _tmp$4 = str.end;
            } else {
              const _Some = _bind$2;
              _tmp$4 = _Some;
            }
            rest = new _M0TPC16string10StringView(_tmp$3, _tmp$4, str.end);
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  while (true) {
    const _param = _tmp;
    if (_M0MPC16string6String24char__length__ge_2einner(_param.str, 1, _param.start, _param.end)) {
      const _x = _M0MPC16string6String16unsafe__char__at(_param.str, _M0MPC16string6String29offset__of__nth__char_2einner(_param.str, 0, _param.start, _param.end));
      if (_x === 95) {
        const _tmp$2 = _param.str;
        const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
        let _tmp$3;
        if (_bind === undefined) {
          _tmp$3 = _param.end;
        } else {
          const _Some = _bind;
          _tmp$3 = _Some;
        }
        const _x$2 = new _M0TPC16string10StringView(_tmp$2, _tmp$3, _param.end);
        _tmp = _x$2;
        continue;
      } else {
        if (_x === 46) {
          const _tmp$2 = _param.str;
          const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
          let _tmp$3;
          if (_bind === undefined) {
            _tmp$3 = _param.end;
          } else {
            const _Some = _bind;
            _tmp$3 = _Some;
          }
          const _x$2 = new _M0TPC16string10StringView(_tmp$2, _tmp$3, _param.end);
          if (!has_dp) {
            has_dp = true;
            d.decimal_point = d.digits_num;
            _tmp = _x$2;
            continue;
          } else {
            const _bind$2 = _M0FPC17strconv11syntax__errGlE();
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              rest$2 = _ok._0;
              break;
            } else {
              return _bind$2;
            }
          }
        } else {
          if (_x >= 48 && _x <= 57) {
            const _tmp$2 = _param.str;
            const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
            let _tmp$3;
            if (_bind === undefined) {
              _tmp$3 = _param.end;
            } else {
              const _Some = _bind;
              _tmp$3 = _Some;
            }
            const _x$2 = new _M0TPC16string10StringView(_tmp$2, _tmp$3, _param.end);
            has_digits = true;
            if (_x === 48 && d.digits_num === 0) {
              d.decimal_point = d.decimal_point - 1 | 0;
              _tmp = _x$2;
              continue;
            }
            if (d.digits_num < d.digits.length) {
              const _tmp$4 = d.digits;
              const _tmp$5 = d.digits_num;
              $bound_check(_tmp$4, _tmp$5);
              _tmp$4[_tmp$5] = (_x - 48 | 0) & 255;
              d.digits_num = d.digits_num + 1 | 0;
            } else {
              if (_x !== 48) {
                d.truncated = true;
              }
            }
            _tmp = _x$2;
            continue;
          } else {
            rest$2 = _param;
            break;
          }
        }
      }
    } else {
      rest$2 = _param;
      break;
    }
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if (_M0MPC16string6String24char__length__ge_2einner(rest$2.str, 1, rest$2.start, rest$2.end)) {
          const _x = _M0MPC16string6String16unsafe__char__at(rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
          switch (_x) {
            case 101: {
              const _tmp$2 = rest$2.str;
              const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
              let _tmp$3;
              if (_bind === undefined) {
                _tmp$3 = rest$2.end;
              } else {
                const _Some = _bind;
                _tmp$3 = _Some;
              }
              const _x$2 = new _M0TPC16string10StringView(_tmp$2, _tmp$3, rest$2.end);
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _tmp$4 = rest$2.str;
              const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
              let _tmp$5;
              if (_bind$2 === undefined) {
                _tmp$5 = rest$2.end;
              } else {
                const _Some = _bind$2;
                _tmp$5 = _Some;
              }
              const _x$3 = new _M0TPC16string10StringView(_tmp$4, _tmp$5, rest$2.end);
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if (_M0MPC16string6String24char__length__ge_2einner(rest$4.str, 1, rest$4.start, rest$4.end)) {
        const _x = _M0MPC16string6String16unsafe__char__at(rest$4.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$4.str, 0, rest$4.start, rest$4.end));
        switch (_x) {
          case 43: {
            const _tmp$2 = rest$4.str;
            const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest$4.str, 1, rest$4.start, rest$4.end);
            let _tmp$3;
            if (_bind === undefined) {
              _tmp$3 = rest$4.end;
            } else {
              const _Some = _bind;
              _tmp$3 = _Some;
            }
            rest$5 = new _M0TPC16string10StringView(_tmp$2, _tmp$3, rest$4.end);
            break;
          }
          case 45: {
            const _tmp$4 = rest$4.str;
            const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$4.str, 1, rest$4.start, rest$4.end);
            let _tmp$5;
            if (_bind$2 === undefined) {
              _tmp$5 = rest$4.end;
            } else {
              const _Some = _bind$2;
              _tmp$5 = _Some;
            }
            const _x$2 = new _M0TPC16string10StringView(_tmp$4, _tmp$5, rest$4.end);
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if (_M0MPC16string6String24char__length__ge_2einner(rest$5.str, 1, rest$5.start, rest$5.end)) {
            const _x = _M0MPC16string6String16unsafe__char__at(rest$5.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$5.str, 0, rest$5.start, rest$5.end));
            if (_x >= 48 && _x <= 57) {
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const _param = _tmp$2;
                if (_M0MPC16string6String24char__length__ge_2einner(_param.str, 1, _param.start, _param.end)) {
                  const _x$2 = _M0MPC16string6String16unsafe__char__at(_param.str, _M0MPC16string6String29offset__of__nth__char_2einner(_param.str, 0, _param.start, _param.end));
                  if (_x$2 === 95) {
                    const _tmp$3 = _param.str;
                    const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
                    let _tmp$4;
                    if (_bind === undefined) {
                      _tmp$4 = _param.end;
                    } else {
                      const _Some = _bind;
                      _tmp$4 = _Some;
                    }
                    const _x$3 = new _M0TPC16string10StringView(_tmp$3, _tmp$4, _param.end);
                    _tmp$2 = _x$3;
                    continue;
                  } else {
                    if (_x$2 >= 48 && _x$2 <= 57) {
                      const _tmp$3 = _param.str;
                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
                      let _tmp$4;
                      if (_bind === undefined) {
                        _tmp$4 = _param.end;
                      } else {
                        const _Some = _bind;
                        _tmp$4 = _Some;
                      }
                      const _x$3 = new _M0TPC16string10StringView(_tmp$3, _tmp$4, _param.end);
                      exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      rest$6 = _param;
                      break;
                    }
                  }
                } else {
                  rest$6 = _param;
                  break;
                }
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind = _M0FPC17strconv11syntax__errGlE();
        if (_bind.$tag === 1) {
          const _ok = _bind;
          rest$3 = _ok._0;
        } else {
          return _bind;
        }
      }
    }
    if (_M0MPC16string6String24char__length__eq_2einner(rest$3.str, 0, rest$3.start, rest$3.end)) {
      _M0MPC17strconv7Decimal4trim(d);
      return new _M0DTPC16result6ResultGRPC17strconv7DecimalRPC17strconv12StrConvErrorE2Ok(d);
    } else {
      return _M0FPC17strconv11syntax__errGlE();
    }
  } else {
    return _M0FPC17strconv11syntax__errGlE();
  }
}
function _M0FPC17strconv20parse__decimal__priv(str) {
  return _M0FPC17strconv26parse__decimal__from__view(str);
}
function _M0FPC17strconv15parse__inf__nan(rest) {
  let _bind;
  let rest$2;
  _L: {
    _L$2: {
      if (_M0MPC16string6String24char__length__ge_2einner(rest.str, 1, rest.start, rest.end)) {
        const _x = _M0MPC16string6String16unsafe__char__at(rest.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest.str, 0, rest.start, rest.end));
        switch (_x) {
          case 45: {
            const _tmp = rest.str;
            const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(rest.str, 1, rest.start, rest.end);
            let _tmp$2;
            if (_bind$2 === undefined) {
              _tmp$2 = rest.end;
            } else {
              const _Some = _bind$2;
              _tmp$2 = _Some;
            }
            const _x$2 = new _M0TPC16string10StringView(_tmp, _tmp$2, rest.end);
            _bind = { _0: false, _1: _x$2 };
            break;
          }
          case 43: {
            const _tmp$3 = rest.str;
            const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(rest.str, 1, rest.start, rest.end);
            let _tmp$4;
            if (_bind$3 === undefined) {
              _tmp$4 = rest.end;
            } else {
              const _Some = _bind$3;
              _tmp$4 = _Some;
            }
            const _x$3 = new _M0TPC16string10StringView(_tmp$3, _tmp$4, rest.end);
            rest$2 = _x$3;
            break _L$2;
          }
          default: {
            rest$2 = rest;
            break _L$2;
          }
        }
      } else {
        rest$2 = rest;
        break _L$2;
      }
      break _L;
    }
    _bind = { _0: true, _1: rest$2 };
  }
  const _pos = _bind._0;
  const _rest = _bind._1;
  const _data = _M0MPC16string10StringView4data(_rest);
  const _start = _M0MPC16string10StringView13start__offset(_rest);
  const _end = _start + _M0MPC16string10StringView6length(_rest) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  _L$2: {
    _L$3: {
      if ((_cursor + 2 | 0) < _end) {
        _L$4: {
          _L$5: {
            const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char < 79) {
              if (next_char < 74) {
                if (next_char < 73) {
                  break _L$2;
                } else {
                  break _L$4;
                }
              } else {
                if (next_char > 77) {
                  break _L$5;
                } else {
                  break _L$2;
                }
              }
            } else {
              if (next_char > 104) {
                if (next_char < 110) {
                  if (next_char < 106) {
                    break _L$4;
                  } else {
                    break _L$2;
                  }
                } else {
                  if (next_char > 110) {
                    break _L$2;
                  } else {
                    break _L$5;
                  }
                }
              } else {
                break _L$2;
              }
            }
          }
          _L$6: {
            const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char < 66) {
              if (next_char < 65) {
                break _L$2;
              } else {
                break _L$6;
              }
            } else {
              if (next_char > 96) {
                if (next_char < 98) {
                  break _L$6;
                } else {
                  break _L$2;
                }
              } else {
                break _L$2;
              }
            }
          }
          _L$7: {
            const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char < 79) {
              if (next_char < 78) {
                break _L$2;
              } else {
                break _L$7;
              }
            } else {
              if (next_char > 109) {
                if (next_char < 111) {
                  break _L$7;
                } else {
                  break _L$2;
                }
              } else {
                break _L$2;
              }
            }
          }
          if (_cursor < _end) {
            break _L$2;
          } else {
            accept_state = 0;
            match_end = _cursor;
            break _L$2;
          }
        }
        _L$5: {
          const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
          _cursor = _cursor + 1 | 0;
          if (next_char < 79) {
            if (next_char < 78) {
              break _L$2;
            } else {
              break _L$5;
            }
          } else {
            if (next_char > 109) {
              if (next_char < 111) {
                break _L$5;
              } else {
                break _L$2;
              }
            } else {
              break _L$2;
            }
          }
        }
        _L$6: {
          const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
          _cursor = _cursor + 1 | 0;
          if (next_char < 71) {
            if (next_char < 70) {
              break _L$2;
            } else {
              break _L$6;
            }
          } else {
            if (next_char > 101) {
              if (next_char < 103) {
                break _L$6;
              } else {
                break _L$2;
              }
            } else {
              break _L$2;
            }
          }
        }
        if (_cursor < _end) {
          _L$7: {
            const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char < 74) {
              if (next_char < 73) {
                break _L$2;
              } else {
                break _L$7;
              }
            } else {
              if (next_char > 104) {
                if (next_char < 106) {
                  break _L$7;
                } else {
                  break _L$2;
                }
              } else {
                break _L$2;
              }
            }
          }
          if ((_cursor + 3 | 0) < _end) {
            _L$8: {
              const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char < 79) {
                if (next_char < 78) {
                  break _L$2;
                } else {
                  break _L$8;
                }
              } else {
                if (next_char > 109) {
                  if (next_char < 111) {
                    break _L$8;
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
              }
            }
            _L$9: {
              const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char < 74) {
                if (next_char < 73) {
                  break _L$2;
                } else {
                  break _L$9;
                }
              } else {
                if (next_char > 104) {
                  if (next_char < 106) {
                    break _L$9;
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
              }
            }
            _L$10: {
              const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char < 85) {
                if (next_char < 84) {
                  break _L$2;
                } else {
                  break _L$10;
                }
              } else {
                if (next_char > 115) {
                  if (next_char < 117) {
                    break _L$10;
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
              }
            }
            _L$11: {
              const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
              _cursor = _cursor + 1 | 0;
              if (next_char < 90) {
                if (next_char < 89) {
                  break _L$2;
                } else {
                  break _L$11;
                }
              } else {
                if (next_char > 120) {
                  if (next_char < 122) {
                    break _L$11;
                  } else {
                    break _L$2;
                  }
                } else {
                  break _L$2;
                }
              }
            }
            if (_cursor < _end) {
              break _L$2;
            } else {
              break _L$3;
            }
          } else {
            break _L$2;
          }
        } else {
          break _L$3;
        }
      } else {
        break _L$2;
      }
    }
    accept_state = 1;
    match_end = _cursor;
    break _L$2;
  }
  switch (accept_state) {
    case 0: {
      return new _M0DTPC16result6ResultGdRPC17strconv12StrConvErrorE2Ok(_M0FPC16double14not__a__number);
    }
    case 1: {
      return _pos ? new _M0DTPC16result6ResultGdRPC17strconv12StrConvErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC17strconv12StrConvErrorE2Ok(_M0FPC16double13neg__infinity);
    }
    default: {
      return _M0FPC17strconv11syntax__errGdE();
    }
  }
}
function _M0EPC16string10StringViewPC17strconv12fold__digitsGmE(self, init, f) {
  let ret = init;
  let len = 0;
  let str = self;
  while (true) {
    const _bind = str;
    if (_M0MPC16string6String24char__length__ge_2einner(_bind.str, 1, _bind.start, _bind.end)) {
      const _ch = _M0MPC16string6String16unsafe__char__at(_bind.str, _M0MPC16string6String29offset__of__nth__char_2einner(_bind.str, 0, _bind.start, _bind.end));
      const _tmp = _bind.str;
      const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(_bind.str, 1, _bind.start, _bind.end);
      let _tmp$2;
      if (_bind$2 === undefined) {
        _tmp$2 = _bind.end;
      } else {
        const _Some = _bind$2;
        _tmp$2 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp, _tmp$2, _bind.end);
      if (_ch >= 48 && _ch <= 57) {
        len = len + 1 | 0;
        ret = f(_ch - 48 | 0, ret);
      } else {
        if (_ch !== 95) {
          break;
        }
      }
      str = _x;
      continue;
    } else {
      break;
    }
  }
  return { _0: str, _1: ret, _2: len };
}
function _M0FPC17strconv13parse__digits(s, x) {
  return _M0EPC16string10StringViewPC17strconv12fold__digitsGmE(s, x, (digit, acc) => _M0IPC16uint646UInt64PB3Add3add(_M0IPC16uint646UInt64PB3Mul3mul(acc, $10L), _M0MPC16uint646UInt6412extend__uint(digit)));
}
function _M0FPC17strconv17parse__scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind = s$2;
      if (_M0MPC16string6String24char__length__ge_2einner(_bind.str, 1, _bind.start, _bind.end)) {
        const _x = _M0MPC16string6String16unsafe__char__at(_bind.str, _M0MPC16string6String29offset__of__nth__char_2einner(_bind.str, 0, _bind.start, _bind.end));
        switch (_x) {
          case 43: {
            const _tmp = _bind.str;
            const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(_bind.str, 1, _bind.start, _bind.end);
            let _tmp$2;
            if (_bind$2 === undefined) {
              _tmp$2 = _bind.end;
            } else {
              const _Some = _bind$2;
              _tmp$2 = _Some;
            }
            const _x$2 = new _M0TPC16string10StringView(_tmp, _tmp$2, _bind.end);
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _tmp$3 = _bind.str;
            const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(_bind.str, 1, _bind.start, _bind.end);
            let _tmp$4;
            if (_bind$3 === undefined) {
              _tmp$4 = _bind.end;
            } else {
              const _Some = _bind$3;
              _tmp$4 = _Some;
            }
            const _x$3 = new _M0TPC16string10StringView(_tmp$3, _tmp$4, _bind.end);
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind = s$2;
    if (_M0MPC16string6String24char__length__ge_2einner(_bind.str, 1, _bind.start, _bind.end)) {
      const _x = _M0MPC16string6String16unsafe__char__at(_bind.str, _M0MPC16string6String29offset__of__nth__char_2einner(_bind.str, 0, _bind.start, _bind.end));
      if (_x >= 48 && _x <= 57) {
        const _bind$2 = _M0EPC16string10StringViewPC17strconv12fold__digitsGmE(s$2, _M0FPC17strconv17parse__scientificN8exp__numS244, (digit, exp_num) => _M0IP016_24default__implPB7Compare6op__ltGlE(exp_num, $65536L) ? _M0IPC15int645Int64PB3Add3add(_M0IPC15int645Int64PB3Mul3mul($10L, exp_num), _M0MPC13int3Int9to__int64(digit)) : exp_num);
        const _s = _bind$2._0;
        const _exp_num = _bind$2._1;
        return neg_exp ? { _0: _s, _1: _M0IPC15int645Int64PB3Neg3neg(_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function _M0FPC17strconv20try__parse__19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp = s;
  while (true) {
    const _param = _tmp;
    let s$2;
    _L: {
      if (_M0MPC16string6String24char__length__ge_2einner(_param.str, 1, _param.start, _param.end)) {
        const _x = _M0MPC16string6String16unsafe__char__at(_param.str, _M0MPC16string6String29offset__of__nth__char_2einner(_param.str, 0, _param.start, _param.end));
        if (_x >= 48 && _x <= 57) {
          const _tmp$2 = _param.str;
          const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
          let _tmp$3;
          if (_bind === undefined) {
            _tmp$3 = _param.end;
          } else {
            const _Some = _bind;
            _tmp$3 = _Some;
          }
          const _x$2 = new _M0TPC16string10StringView(_tmp$2, _tmp$3, _param.end);
          if (_M0IP016_24default__implPB7Compare6op__ltGmE(x$2, _M0FPC17strconv17min__19digit__int)) {
            len = len + 1 | 0;
            x$2 = _M0IPC16uint646UInt64PB3Add3add(_M0IPC16uint646UInt64PB3Mul3mul(x$2, $10L), _M0MPC16uint646UInt6412extend__uint(_x - 48 | 0));
            _tmp = _x$2;
            continue;
          } else {
            s$2 = _param;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _tmp$2 = _param.str;
            const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(_param.str, 1, _param.start, _param.end);
            let _tmp$3;
            if (_bind === undefined) {
              _tmp$3 = _param.end;
            } else {
              const _Some = _bind;
              _tmp$3 = _Some;
            }
            const _x$2 = new _M0TPC16string10StringView(_tmp$2, _tmp$3, _param.end);
            _tmp = _x$2;
            continue;
          } else {
            s$2 = _param;
            break _L;
          }
        }
      } else {
        s$2 = _param;
        break _L;
      }
    }
    return { _0: s$2, _1: x$2, _2: len };
  }
}
function _M0FPC17strconv13parse__number(s) {
  let _bind;
  let rest;
  _L: {
    _L$2: {
      if (_M0MPC16string6String24char__length__ge_2einner(s.str, 1, s.start, s.end)) {
        const _x = _M0MPC16string6String16unsafe__char__at(s.str, _M0MPC16string6String29offset__of__nth__char_2einner(s.str, 0, s.start, s.end));
        switch (_x) {
          case 45: {
            const _tmp = s.str;
            const _bind$2 = _M0MPC16string6String29offset__of__nth__char_2einner(s.str, 1, s.start, s.end);
            let _tmp$2;
            if (_bind$2 === undefined) {
              _tmp$2 = s.end;
            } else {
              const _Some = _bind$2;
              _tmp$2 = _Some;
            }
            const _x$2 = new _M0TPC16string10StringView(_tmp, _tmp$2, s.end);
            _bind = { _0: _x$2, _1: true };
            break;
          }
          case 43: {
            const _tmp$3 = s.str;
            const _bind$3 = _M0MPC16string6String29offset__of__nth__char_2einner(s.str, 1, s.start, s.end);
            let _tmp$4;
            if (_bind$3 === undefined) {
              _tmp$4 = s.end;
            } else {
              const _Some = _bind$3;
              _tmp$4 = _Some;
            }
            const _x$3 = new _M0TPC16string10StringView(_tmp$3, _tmp$4, s.end);
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
      break _L;
    }
    _bind = { _0: rest, _1: false };
  }
  const _s = _bind._0;
  const _negative = _bind._1;
  if (_M0MPC16string10StringView9is__empty(_s)) {
    return new _M0DTPC16result6ResultGORPC17strconv6NumberRPC17strconv12StrConvErrorE2Ok(undefined);
  }
  const _bind$2 = _M0FPC17strconv13parse__digits(_s, $0L);
  const _s$2 = _bind$2._0;
  const _mantissa = _bind$2._1;
  const _consumed = _bind$2._2;
  let mantissa = _mantissa;
  let s$2 = _s$2;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = $0L;
  const _bind$3 = s$2;
  if (_M0MPC16string6String24char__length__ge_2einner(_bind$3.str, 1, _bind$3.start, _bind$3.end)) {
    const _x = _M0MPC16string6String16unsafe__char__at(_bind$3.str, _M0MPC16string6String29offset__of__nth__char_2einner(_bind$3.str, 0, _bind$3.start, _bind$3.end));
    if (_x === 46) {
      const _tmp = _bind$3.str;
      const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(_bind$3.str, 1, _bind$3.start, _bind$3.end);
      let _tmp$2;
      if (_bind$4 === undefined) {
        _tmp$2 = _bind$3.end;
      } else {
        const _Some = _bind$4;
        _tmp$2 = _Some;
      }
      const _x$2 = new _M0TPC16string10StringView(_tmp, _tmp$2, _bind$3.end);
      s$2 = _x$2;
      const _bind$5 = _M0FPC17strconv13parse__digits(s$2, mantissa);
      const _new_s = _bind$5._0;
      const _new_mantissa = _bind$5._1;
      const _consumed_digit = _bind$5._2;
      s$2 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = _M0IPC15int645Int64PB3Neg3neg(_M0MPC13int3Int9to__int64(n_after_dot));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new _M0DTPC16result6ResultGORPC17strconv6NumberRPC17strconv12StrConvErrorE2Ok(undefined);
  }
  let rest$2;
  _L$2: {
    _L$3: {
      const _bind$4 = s$2;
      if (_M0MPC16string6String24char__length__ge_2einner(_bind$4.str, 1, _bind$4.start, _bind$4.end)) {
        const _x = _M0MPC16string6String16unsafe__char__at(_bind$4.str, _M0MPC16string6String29offset__of__nth__char_2einner(_bind$4.str, 0, _bind$4.start, _bind$4.end));
        switch (_x) {
          case 101: {
            const _tmp = _bind$4.str;
            const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(_bind$4.str, 1, _bind$4.start, _bind$4.end);
            let _tmp$2;
            if (_bind$5 === undefined) {
              _tmp$2 = _bind$4.end;
            } else {
              const _Some = _bind$5;
              _tmp$2 = _Some;
            }
            const _x$2 = new _M0TPC16string10StringView(_tmp, _tmp$2, _bind$4.end);
            rest$2 = _x$2;
            break _L$3;
          }
          case 69: {
            const _tmp$3 = _bind$4.str;
            const _bind$6 = _M0MPC16string6String29offset__of__nth__char_2einner(_bind$4.str, 1, _bind$4.start, _bind$4.end);
            let _tmp$4;
            if (_bind$6 === undefined) {
              _tmp$4 = _bind$4.end;
            } else {
              const _Some = _bind$6;
              _tmp$4 = _Some;
            }
            const _x$3 = new _M0TPC16string10StringView(_tmp$3, _tmp$4, _bind$4.end);
            rest$2 = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$4 = _M0FPC17strconv17parse__scientific(rest$2);
    let _bind$5;
    if (_bind$4 === undefined) {
      return new _M0DTPC16result6ResultGORPC17strconv6NumberRPC17strconv12StrConvErrorE2Ok(undefined);
    } else {
      const _Some = _bind$4;
      _bind$5 = _Some;
    }
    const _new_s = _bind$5._0;
    const _exp_number = _bind$5._1;
    s$2 = _new_s;
    exponent = _M0IPC15int645Int64PB3Add3add(exponent, _exp_number);
  }
  const _bind$4 = s$2;
  if (_M0MPC16string6String24char__length__eq_2einner(_bind$4.str, 0, _bind$4.start, _bind$4.end)) {
    if (n_digits <= 19) {
      return new _M0DTPC16result6ResultGORPC17strconv6NumberRPC17strconv12StrConvErrorE2Ok(new _M0TPC17strconv6Number(exponent, mantissa, _negative, false));
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp = s.str;
    let _tmp$2 = s.start;
    let _tmp$3 = s.end;
    _L$3: while (true) {
      const _param_str = _tmp;
      const _param_start = _tmp$2;
      const _param_end = _tmp$3;
      let rest$3;
      let ch;
      _L$4: {
        if (_M0MPC16string6String24char__length__ge_2einner(_param_str, 1, _param_start, _param_end)) {
          const _x = _M0MPC16string6String16unsafe__char__at(_param_str, _M0MPC16string6String29offset__of__nth__char_2einner(_param_str, 0, _param_start, _param_end));
          switch (_x) {
            case 48: {
              const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(_param_str, 1, _param_start, _param_end);
              let _tmp$4;
              if (_bind$5 === undefined) {
                _tmp$4 = _param_end;
              } else {
                const _Some = _bind$5;
                _tmp$4 = _Some;
              }
              const _x$2 = new _M0TPC16string10StringView(_param_str, _tmp$4, _param_end);
              rest$3 = _x$2;
              ch = _x;
              break _L$4;
            }
            case 46: {
              const _bind$6 = _M0MPC16string6String29offset__of__nth__char_2einner(_param_str, 1, _param_start, _param_end);
              let _tmp$5;
              if (_bind$6 === undefined) {
                _tmp$5 = _param_end;
              } else {
                const _Some = _bind$6;
                _tmp$5 = _Some;
              }
              const _x$3 = new _M0TPC16string10StringView(_param_str, _tmp$5, _param_end);
              rest$3 = _x$3;
              ch = _x;
              break _L$4;
            }
            default: {
              break _L$3;
            }
          }
        } else {
          break;
        }
      }
      const _tmp$4 = n_digits;
      if (2 === 0) {
        $panic();
      }
      n_digits = _tmp$4 - ((ch - 46 | 0) / 2 | 0) | 0;
      _tmp = rest$3.str;
      _tmp$2 = rest$3.start;
      _tmp$3 = rest$3.end;
      continue;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = $0L;
      const _bind$5 = _M0FPC17strconv20try__parse__19digits(s, mantissa$2);
      const _s$3 = _bind$5._0;
      const _new_mantissa = _bind$5._1;
      const _consumed_digit = _bind$5._2;
      mantissa$2 = _new_mantissa;
      let _tmp$4;
      if (_M0IP016_24default__implPB7Compare6op__geGmE(mantissa$2, _M0FPC17strconv17min__19digit__int)) {
        _tmp$4 = _consumed_digit;
      } else {
        if (_M0MPC16string6String24char__length__ge_2einner(_s$3.str, 1, _s$3.start, _s$3.end)) {
          const _tmp$5 = _s$3.str;
          const _bind$6 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$3.str, 1, _s$3.start, _s$3.end);
          let _tmp$6;
          if (_bind$6 === undefined) {
            _tmp$6 = _s$3.end;
          } else {
            const _Some = _bind$6;
            _tmp$6 = _Some;
          }
          const _x = new _M0TPC16string10StringView(_tmp$5, _tmp$6, _s$3.end);
          const _bind$7 = _M0FPC17strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$7._1;
          const _consumed_digit$2 = _bind$7._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$4 = _consumed_digit$2;
        } else {
          return new _M0DTPC16result6ResultGORPC17strconv6NumberRPC17strconv12StrConvErrorE2Ok(undefined);
        }
      }
      exponent = _M0MPC13int3Int9to__int64(_tmp$4);
      exponent = _M0IPC15int645Int64PB3Add3add(exponent, _M0FPC17strconv13parse__numberN11exp__numberS225);
    }
    return new _M0DTPC16result6ResultGORPC17strconv6NumberRPC17strconv12StrConvErrorE2Ok(new _M0TPC17strconv6Number(exponent, mantissa$2, _negative, many_digits));
  } else {
    return _M0FPC17strconv11syntax__errGORPC17strconv6NumberE();
  }
}
function _M0FPC17strconv14assemble__bits(mantissa, exponent, negative) {
  const biased_exp = exponent - _M0FPC17strconv12double__info.bias | 0;
  let bits = _M0IPC15int645Int64PB6BitAnd4land(mantissa, _M0IPC15int645Int64PB3Sub3sub(_M0IPC15int645Int64PB3Shl3shl($1L, _M0FPC17strconv12double__info.mantissa_bits), $1L));
  const exp_bits = _M0MPC13int3Int9to__int64(biased_exp & ((1 << _M0FPC17strconv12double__info.exponent_bits) - 1 | 0));
  bits = _M0IPC15int645Int64PB5BitOr3lor(bits, _M0IPC15int645Int64PB3Shl3shl(exp_bits, _M0FPC17strconv12double__info.mantissa_bits));
  if (negative) {
    bits = _M0IPC15int645Int64PB5BitOr3lor(bits, _M0IPC15int645Int64PB3Shl3shl(_M0IPC15int645Int64PB3Shl3shl($1L, _M0FPC17strconv12double__info.mantissa_bits), _M0FPC17strconv12double__info.exponent_bits));
  }
  return bits;
}
function _M0MPC17strconv7Decimal17should__round__up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  $bound_check(_tmp$2, d);
  if (_tmp$2[d] === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      $bound_check(_tmp$4, _tmp$5);
      if (2 === 0) {
        $panic();
      }
      _tmp$3 = (_tmp$4[_tmp$5] % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  $bound_check(_tmp$3, d);
  return _tmp$3[d] >= 5;
}
function _M0MPC17strconv7Decimal16rounded__integer(self) {
  if (self.decimal_point > 20) {
    return $_1L;
  }
  let _bind;
  let _tmp = $0L;
  let _tmp$2 = 0;
  while (true) {
    const n = _tmp;
    const i = _tmp$2;
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp$3 = _M0IPC15int645Int64PB3Mul3mul(n, $10L);
      const _tmp$4 = self.digits;
      $bound_check(_tmp$4, i);
      _tmp = _M0IPC15int645Int64PB3Add3add(_tmp$3, _M0MPC14byte4Byte9to__int64(_tmp$4[i]));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      _bind = { _0: n, _1: i };
      break;
    }
  }
  const _n = _bind._0;
  const _i = _bind._1;
  let n;
  let _tmp$3 = _n;
  let _tmp$4 = _i;
  while (true) {
    const n$2 = _tmp$3;
    const i = _tmp$4;
    if (i < self.decimal_point) {
      _tmp$3 = _M0IPC15int645Int64PB3Mul3mul(n$2, $10L);
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      n = n$2;
      break;
    }
  }
  return _M0MPC17strconv7Decimal17should__round__up(self, self.decimal_point) ? _M0IPC15int645Int64PB3Add3add(n, $1L) : n;
}
function _M0MPC17strconv7Decimal11new__digits(self, s) {
  const new_digits = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC17strconv19left__shift__cheats, s)._0;
  const cheat_num = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC17strconv19left__shift__cheats, s)._1;
  const _bind = cheat_num.length;
  let less;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = cheat_num.charCodeAt(i) - 48 | 0;
      const _tmp$2 = self.digits;
      $bound_check(_tmp$2, i);
      if (_tmp$2[i] !== d) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, i);
        less = _tmp$3[i] < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      less = false;
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function _M0MPC17strconv7Decimal11left__shift(self, s) {
  const new_digits = _M0MPC17strconv7Decimal11new__digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = $0L;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const d = _M0MPC14byte4Byte9to__int64(_tmp[_tmp$2]);
      acc = _M0IPC15int645Int64PB3Add3add(acc, _M0IPC15int645Int64PB3Shl3shl(d, s));
      const quo = _M0IPC15int645Int64PB3Div3div(acc, $10L);
      const rem = _M0MPC15int645Int647to__int(_M0IPC15int645Int64PB3Sub3sub(acc, _M0IPC15int645Int64PB3Mul3mul(quo, $10L)));
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        $bound_check(_tmp$3, _tmp$4);
        _tmp$3[_tmp$4] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (_M0IP016_24default__implPB7Compare6op__gtGlE(acc, $0L)) {
      const quo = _M0IPC15int645Int64PB3Div3div(acc, $10L);
      const rem = _M0MPC15int645Int647to__int(_M0IPC15int645Int64PB3Sub3sub(acc, _M0IPC15int645Int64PB3Mul3mul($10L, quo)));
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  _M0MPC17strconv7Decimal4trim(self);
}
function _M0MPC17strconv7Decimal12right__shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = $0L;
  while (true) {
    if (_M0IPC16uint646UInt64PB2Eq5equal(_M0IPC16uint646UInt64PB3Shr3shr(acc, s), $0L)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (_M0IPC16uint646UInt64PB2Eq5equal(_M0IPC16uint646UInt64PB3Shr3shr(acc, s), $0L)) {
            acc = _M0IPC16uint646UInt64PB3Mul3mul(acc, $10L);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const d = _tmp[_tmp$2];
      acc = _M0IPC16uint646UInt64PB3Add3add(_M0IPC16uint646UInt64PB3Mul3mul(acc, $10L), _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = _M0IPC16uint646UInt64PB3Sub3sub(_M0IPC16uint646UInt64PB3Shl3shl($1L, s), $1L);
  while (true) {
    if (read_index < self.digits_num) {
      const out = _M0IPC16uint646UInt64PB3Shr3shr(acc, s);
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      $bound_check(_tmp, _tmp$2);
      _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
      write_index = write_index + 1 | 0;
      acc = _M0IPC16uint646UInt64PB6BitAnd4land(acc, mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      $bound_check(_tmp$3, _tmp$4);
      const d = _tmp$3[_tmp$4];
      acc = _M0IPC16uint646UInt64PB3Add3add(_M0IPC16uint646UInt64PB3Mul3mul(acc, $10L), _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (_M0IP016_24default__implPB7Compare6op__gtGmE(acc, $0L)) {
      const out = _M0IPC16uint646UInt64PB3Shr3shr(acc, s);
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
        write_index = write_index + 1 | 0;
      } else {
        if (_M0IP016_24default__implPB7Compare6op__gtGmE(out, $0L)) {
          self.truncated = true;
        }
      }
      acc = _M0IPC16uint646UInt64PB6BitAnd4land(acc, mask);
      acc = _M0IPC16uint646UInt64PB3Mul3mul(acc, $10L);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  _M0MPC17strconv7Decimal4trim(self);
}
function _M0MPC17strconv7Decimal11shift__priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        _M0MPC17strconv7Decimal11left__shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC17strconv7Decimal11left__shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        _M0MPC17strconv7Decimal12right__shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC17strconv7Decimal12right__shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function _M0MPC17strconv7Decimal16to__double__priv(self) {
  let exponent = 0;
  let mantissa = $0L;
  if (self.digits_num === 0 || self.decimal_point < -330) {
    mantissa = $0L;
    exponent = _M0FPC17strconv12double__info.bias;
    const bits = _M0FPC17strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC17strconv12StrConvErrorE2Ok(_M0MPC15int645Int6423reinterpret__as__double(bits));
  }
  if (self.decimal_point > 310) {
    const _bind = _M0FPC17strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC17strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC17strconv6powtab, self.decimal_point);
      }
      _M0MPC17strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, 0);
        _tmp$2 = _tmp$3[0] < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if ((-self.decimal_point | 0) >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC17strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC17strconv6powtab, -self.decimal_point | 0);
      }
      _M0MPC17strconv7Decimal11shift__priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (_M0FPC17strconv12double__info.bias + 1 | 0)) {
    const n = (_M0FPC17strconv12double__info.bias + 1 | 0) - exponent | 0;
    _M0MPC17strconv7Decimal11shift__priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - _M0FPC17strconv12double__info.bias | 0) >= ((1 << _M0FPC17strconv12double__info.exponent_bits) - 1 | 0)) {
    const _bind = _M0FPC17strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  _M0MPC17strconv7Decimal11shift__priv(self, _M0FPC17strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MPC17strconv7Decimal16rounded__integer(self);
  if (_M0IPC15int645Int64PB2Eq5equal(mantissa, _M0IPC15int645Int64PB3Shl3shl($2L, _M0FPC17strconv12double__info.mantissa_bits))) {
    mantissa = _M0IPC15int645Int64PB3Shr3shr(mantissa, 1);
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FPC17strconv12double__info.bias | 0) >= ((1 << _M0FPC17strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind = _M0FPC17strconv10range__errGuE();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
  }
  if (_M0IPC15int645Int64PB2Eq5equal(_M0IPC15int645Int64PB6BitAnd4land(mantissa, _M0IPC15int645Int64PB3Shl3shl($1L, _M0FPC17strconv12double__info.mantissa_bits)), $0L)) {
    exponent = _M0FPC17strconv12double__info.bias;
  }
  const bits = _M0FPC17strconv14assemble__bits(mantissa, exponent, self.negative);
  return new _M0DTPC16result6ResultGdRPC17strconv12StrConvErrorE2Ok(_M0MPC15int645Int6423reinterpret__as__double(bits));
}
function _M0FPC17strconv12checked__mul(a, b) {
  if (_M0IPC16uint646UInt64PB2Eq5equal(a, $0L) || _M0IPC16uint646UInt64PB2Eq5equal(b, $0L)) {
    return _M0FPC17strconv28checked__mul_2econstr_2f2542;
  }
  if (_M0IPC16uint646UInt64PB2Eq5equal(a, $1L)) {
    return b;
  }
  if (_M0IPC16uint646UInt64PB2Eq5equal(b, $1L)) {
    return a;
  }
  if (_M0MPC16uint646UInt643clz(b) === 0 || _M0MPC16uint646UInt643clz(a) === 0) {
    return undefined;
  }
  const quotient = _M0IPC16uint646UInt64PB3Div3div($_1L, b);
  if (_M0IP016_24default__implPB7Compare6op__gtGmE(a, quotient)) {
    return undefined;
  }
  return _M0IPC16uint646UInt64PB3Mul3mul(a, b);
}
function _M0FPC17strconv17pow10__fast__path(exponent) {
  return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC17strconv5table, exponent & 31);
}
function _M0MPC17strconv6Number14is__fast__path(self) {
  return _M0IP016_24default__implPB7Compare6op__leGlE(_M0FPC17strconv25min__exponent__fast__path, self.exponent) && (_M0IP016_24default__implPB7Compare6op__leGlE(self.exponent, _M0FPC17strconv36max__exponent__disguised__fast__path) && (_M0IP016_24default__implPB7Compare6op__leGmE(self.mantissa, _M0FPC17strconv25max__mantissa__fast__path) && !self.many_digits));
}
function _M0MPC17strconv6Number15try__fast__path(self) {
  if (_M0MPC17strconv6Number14is__fast__path(self)) {
    let value;
    if (_M0IP016_24default__implPB7Compare6op__leGlE(self.exponent, _M0FPC17strconv25max__exponent__fast__path)) {
      const value$2 = _M0MPC16double6Double15convert__uint64(self.mantissa);
      value = _M0IP016_24default__implPB7Compare6op__ltGlE(self.exponent, $0L) ? value$2 / _M0FPC17strconv17pow10__fast__path(-_M0MPC15int645Int647to__int(self.exponent) | 0) : value$2 * _M0FPC17strconv17pow10__fast__path(_M0MPC15int645Int647to__int(self.exponent));
    } else {
      const shift = _M0IPC15int645Int64PB3Sub3sub(self.exponent, _M0FPC17strconv25max__exponent__fast__path);
      const _bind = _M0FPC17strconv12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC17strconv10int__pow10, _M0MPC15int645Int647to__int(shift)));
      let mantissa;
      if (_bind === undefined) {
        return _M0DTPC16option6OptionGdE4None__;
      } else {
        const _Some = _bind;
        mantissa = _Some;
      }
      if (_M0IP016_24default__implPB7Compare6op__gtGmE(mantissa, _M0FPC17strconv25max__mantissa__fast__path)) {
        return _M0DTPC16option6OptionGdE4None__;
      }
      value = _M0MPC16double6Double15convert__uint64(mantissa) * _M0FPC17strconv17pow10__fast__path(_M0MPC15int645Int647to__int(_M0FPC17strconv25max__exponent__fast__path));
    }
    if (self.negative) {
      value = -value;
    }
    return new _M0DTPC16option6OptionGdE4Some(value);
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0FPC17strconv13parse__double(str) {
  if (_M0MPC16string10StringView6length(str) > 0) {
    if (_M0FPC17strconv17check__underscore(str)) {
      const _bind = _M0FPC17strconv13parse__number(str);
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        return _bind;
      }
      if (_bind$2 === undefined) {
        return _M0FPC17strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$2;
        const _num = _Some;
        const _bind$3 = _M0MPC17strconv6Number15try__fast__path(_num);
        if (_bind$3.$tag === 1) {
          const _Some$2 = _bind$3;
          const _value = _Some$2._0;
          return new _M0DTPC16result6ResultGdRPC17strconv12StrConvErrorE2Ok(_value);
        } else {
          const _bind$4 = _M0FPC17strconv20parse__decimal__priv(str);
          let _tmp;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp = _ok._0;
          } else {
            return _bind$4;
          }
          return _M0MPC17strconv7Decimal16to__double__priv(_tmp);
        }
      }
    } else {
      return _M0FPC17strconv11syntax__errGdE();
    }
  } else {
    return _M0FPC17strconv11syntax__errGdE();
  }
}
function _M0FPC14json20offset__to__position(input, offset) {
  let _tmp = 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp;
    const line = _tmp$2;
    const column = _tmp$3;
    if (i < offset) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(_M0MPC16string10StringView11unsafe__get(input, i), 10)) {
        _tmp = i + 1 | 0;
        _tmp$2 = line + 1 | 0;
        _tmp$3 = 0;
        continue;
      } else {
        _tmp = i + 1 | 0;
        _tmp$3 = column + 1 | 0;
        continue;
      }
    } else {
      return new _M0TPC14json8Position(line, column);
    }
  }
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0FPC14json13decode__errorGiE(path, msg) {
  return new _M0DTPC16result6ResultGiRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
}
function _M0FPC14json13decode__errorGuE(path, msg) {
  return new _M0DTPC16result6ResultGuRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
}
function _M0FPC14json13decode__errorGsE(path, msg) {
  return new _M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
}
function _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(path, msg) {
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphERPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
}
function _M0FPC14json13decode__errorGbE(path, msg) {
  return new _M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
}
function _M0MPC14json8JsonPath10add__index(self, index) {
  return new _M0DTPC14json8JsonPath5Index(self, index);
}
function _M0IPC15tuple6Tuple2PC14json8FromJson10from__jsonGiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEE(json, path) {
  _L: {
    if (json.$tag === 5) {
      const _Array = json;
      const _x = _Array._0;
      if (_x.length === 2) {
        const _a = _x[0];
        const _b = _x[1];
        const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_a, _M0MPC14json8JsonPath10add__index(path, 0));
        let a;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          a = _ok._0;
        } else {
          return _bind;
        }
        const _bind$2 = _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang9nodegraph6shared5ValueE(_b, _M0MPC14json8JsonPath10add__index(path, 1));
        let b;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          b = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEERPC14json15JsonDecodeErrorE2Ok({ _0: a, _1: b });
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return _M0FPC14json13decode__errorGsE(path, "expected tuple of size 2");
}
function _M0IPC15tuple6Tuple2PC14json8FromJson10from__jsonGisE(json, path) {
  _L: {
    if (json.$tag === 5) {
      const _Array = json;
      const _x = _Array._0;
      if (_x.length === 2) {
        const _a = _x[0];
        const _b = _x[1];
        const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_a, _M0MPC14json8JsonPath10add__index(path, 0));
        let a;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          a = _ok._0;
        } else {
          return _bind;
        }
        const _bind$2 = _M0IPC16string6StringPC14json8FromJson10from__json(_b, _M0MPC14json8JsonPath10add__index(path, 1));
        let b;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          b = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGUisERPC14json15JsonDecodeErrorE2Ok({ _0: a, _1: b });
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return _M0FPC14json13decode__errorGsE(path, "expected tuple of size 2");
}
function _M0MPC14json12ParseContext21lex__skip__whitespace(ctx) {
  const rest = _M0MPC16string10StringView12view_2einner(ctx.input, ctx.offset, ctx.end_offset);
  const _data = _M0MPC16string10StringView4data(rest);
  const _start = _M0MPC16string10StringView13start__offset(rest);
  const _end = _start + _M0MPC16string10StringView6length(rest) | 0;
  let _cursor = _start;
  let accept_state = -1;
  let match_end = -1;
  _L: {
    if (_cursor < _end) {
      _L$2: {
        const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
        _cursor = _cursor + 1 | 0;
        if (next_char < 13) {
          if (next_char >= 9 && next_char <= 10) {
            break _L$2;
          } else {
            break _L;
          }
        } else {
          if (next_char > 13) {
            if (next_char === 32) {
              break _L$2;
            } else {
              break _L;
            }
          } else {
            break _L$2;
          }
        }
      }
      while (true) {
        accept_state = 0;
        match_end = _cursor;
        if (_cursor < _end) {
          _L$3: {
            const next_char = _M0MPC16string6String20unsafe__charcode__at(_data, _cursor);
            _cursor = _cursor + 1 | 0;
            if (next_char < 13) {
              if (next_char >= 9 && next_char <= 10) {
                break _L$3;
              } else {
                break _L;
              }
            } else {
              if (next_char > 13) {
                if (next_char === 32) {
                  break _L$3;
                } else {
                  break _L;
                }
              } else {
                break _L$3;
              }
            }
          }
          continue;
        } else {
          break _L;
        }
      }
    } else {
      break _L;
    }
  }
  if (accept_state === 0) {
    const next = _M0MPC16string6String4view(_data, match_end, _end);
    ctx.offset = ctx.end_offset - _M0MPC16string10StringView6length(next) | 0;
    return;
  } else {
    return;
  }
}
function _M0MPC14json12ParseContext4make(input, max_nesting_depth) {
  return new _M0TPC14json12ParseContext(0, input, _M0MPC16string10StringView6length(input), max_nesting_depth);
}
function _M0MPC14json12ParseContext19expect__ascii__char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const c1 = _M0MPC16string10StringView11unsafe__get(ctx.input, ctx.offset);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1) : new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
  } else {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  }
}
function _M0MPC14json12ParseContext16lex__number__end(ctx, start, end) {
  const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
  if (!_M0MPC16string10StringView8contains(s, new _M0TPC16string10StringView(_M0MPC14json12ParseContext16lex__number__endN7_2abindS1059, 0, _M0MPC14json12ParseContext16lex__number__endN7_2abindS1059.length)) && (!_M0MPC16string10StringView8contains(s, new _M0TPC16string10StringView(_M0MPC14json12ParseContext16lex__number__endN7_2abindS1060, 0, _M0MPC14json12ParseContext16lex__number__endN7_2abindS1060.length)) && !_M0MPC16string10StringView8contains(s, new _M0TPC16string10StringView(_M0MPC14json12ParseContext16lex__number__endN7_2abindS1061, 0, _M0MPC14json12ParseContext16lex__number__endN7_2abindS1061.length)))) {
    let parsed_int;
    let _try_err;
    _L: {
      _L$2: {
        const _bind = _M0FPC17strconv20parse__int64_2einner(s, 0);
        let _tmp;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp = _ok._0;
        } else {
          const _err = _bind;
          _try_err = _err._0;
          break _L$2;
        }
        parsed_int = new _M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE2Ok(_tmp);
        break _L;
      }
      parsed_int = new _M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE3Err(_try_err);
    }
    _L$2: {
      if (parsed_int.$tag === 1) {
        const _Ok = parsed_int;
        const _i = _Ok._0;
        if (_M0IP016_24default__implPB7Compare6op__leGlE(_i, $9007199254740991L) && _M0IP016_24default__implPB7Compare6op__geGlE(_i, $_9007199254740991L)) {
          return { _0: _M0MPC15int645Int6410to__double(_i), _1: undefined };
        } else {
          break _L$2;
        }
      } else {
        break _L$2;
      }
    }
    _L$3: {
      if (_M0MPC16string6String24char__length__ge_2einner(s.str, 1, s.start, s.end)) {
        const _x = _M0MPC16string6String16unsafe__char__at(s.str, _M0MPC16string6String29offset__of__nth__char_2einner(s.str, 0, s.start, s.end));
        if (_x === 45) {
          return { _0: _M0FPC16double13neg__infinity, _1: s };
        } else {
          break _L$3;
        }
      } else {
        break _L$3;
      }
    }
    return { _0: _M0FPC16double8infinity, _1: s };
  } else {
    let parsed_double;
    let _try_err;
    _L: {
      _L$2: {
        const _bind = _M0FPC17strconv13parse__double(s);
        let _tmp;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp = _ok._0;
        } else {
          const _err = _bind;
          _try_err = _err._0;
          break _L$2;
        }
        parsed_double = new _M0DTPC16result6ResultGdRPC17strconv12StrConvErrorE2Ok(_tmp);
        break _L;
      }
      parsed_double = new _M0DTPC16result6ResultGdRPC17strconv12StrConvErrorE3Err(_try_err);
    }
    if (parsed_double.$tag === 1) {
      const _Ok = parsed_double;
      const _d = _Ok._0;
      return { _0: _d, _1: undefined };
    } else {
      _L$2: {
        if (_M0MPC16string6String24char__length__ge_2einner(s.str, 1, s.start, s.end)) {
          const _x = _M0MPC16string6String16unsafe__char__at(s.str, _M0MPC16string6String29offset__of__nth__char_2einner(s.str, 0, s.start, s.end));
          if (_x === 45) {
            return { _0: _M0FPC16double13neg__infinity, _1: s };
          } else {
            break _L$2;
          }
        } else {
          break _L$2;
        }
      }
      return { _0: _M0FPC16double8infinity, _1: s };
    }
  }
}
function _M0MPC14json12ParseContext10read__char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const c1 = _M0MPC16string10StringView11unsafe__get(ctx.input, ctx.offset);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const c2 = _M0MPC16string10StringView11unsafe__get(ctx.input, ctx.offset);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function _M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start) {
  while (true) {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
    } else {
      const _Some = _bind;
      const _c = _Some;
      if (_c >= 48 && _c <= 57) {
        continue;
      }
      ctx.offset = ctx.offset - 1 | 0;
      return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
    }
  }
}
function _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start) {
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _c = _Some;
    if (_c >= 48 && _c <= 57) {
      return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
    }
    ctx.offset = ctx.offset - 1 | 0;
    return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
  }
}
function _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start) {
  _L: {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 43: {
          break _L;
        }
        case 45: {
          break _L;
        }
        default: {
          if (_x >= 48 && _x <= 57) {
            return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
          }
          ctx.offset = ctx.offset - 1 | 0;
          return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
        }
      }
    }
  }
  const _bind = _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) {
  let _tmp;
  _L: while (true) {
    _L$2: {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 101: {
            break _L$2;
          }
          case 69: {
            break _L$2;
          }
          default: {
            if (_x >= 48 && _x <= 57) {
              continue _L;
            }
            ctx.offset = ctx.offset - 1 | 0;
            return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
          }
        }
      }
    }
    const _bind = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp$2;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp$2 = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_tmp$2);
  }
  return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext19lex__decimal__point(ctx, start) {
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _c = _Some;
    return _c >= 48 && _c <= 57 ? _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
  }
}
function _M0MPC14json12ParseContext21lex__decimal__integer(ctx, start) {
  let _tmp;
  _L: while (true) {
    _L$2: {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case 46: {
            const _bind$2 = _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
            let _tmp$2;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp$2 = _ok._0;
            } else {
              return _bind$2;
            }
            return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_tmp$2);
          }
          case 101: {
            break _L$2;
          }
          case 69: {
            break _L$2;
          }
          default: {
            if (_x >= 48 && _x <= 57) {
              continue _L;
            }
            ctx.offset = ctx.offset - 1 | 0;
            return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
          }
        }
      }
    }
    const _bind = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp$2;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp$2 = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_tmp$2);
  }
  return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext16lex__hex__digits(ctx, n) {
  let _tmp;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$2;
    const r = _tmp$3;
    if (_ < n) {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c >= 65) {
          const d = ((_c & ~32) - 65 | 0) + 10 | 0;
          if (d > 15) {
            const _bind$2 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
          _tmp$2 = _ + 1 | 0;
          _tmp$3 = r << 4 | d;
          continue;
        } else {
          if (_c >= 48) {
            const d = _c - 48 | 0;
            if (d > 9) {
              const _bind$2 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
            }
            _tmp$2 = _ + 1 | 0;
            _tmp$3 = r << 4 | d;
            continue;
          } else {
            const _bind$2 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      _tmp = r;
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext11lex__stringN5flushS274(_env, end) {
  const buf = _env._2;
  const start = _env._1;
  const ctx = _env._0;
  if (start.val > 0 && end > start.val) {
    _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string10StringView11sub_2einner(ctx.input, start.val, end));
    return;
  } else {
    return;
  }
}
function _M0MPC14json12ParseContext11lex__string(ctx) {
  const buf = _M0MPB13StringBuilder11new_2einner(0);
  const start = new _M0TPB8MutLocalGiE(ctx.offset);
  const _env = { _0: ctx, _1: start, _2: buf };
  _L: while (true) {
    _L$2: {
      _L$3: {
        const _bind = _M0MPC14json12ParseContext10read__char(ctx);
        if (_bind === -1) {
          return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 34: {
              _M0MPC14json12ParseContext11lex__stringN5flushS274(_env, ctx.offset - 1 | 0);
              break _L;
            }
            case 10: {
              break _L$3;
            }
            case 13: {
              break _L$3;
            }
            case 92: {
              _M0MPC14json12ParseContext11lex__stringN5flushS274(_env, ctx.offset - 1 | 0);
              const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
              if (_bind$2 === -1) {
                return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
              } else {
                const _Some$2 = _bind$2;
                const _x$2 = _Some$2;
                switch (_x$2) {
                  case 98: {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, 8);
                    break;
                  }
                  case 102: {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, 12);
                    break;
                  }
                  case 110: {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, 10);
                    break;
                  }
                  case 114: {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, 13);
                    break;
                  }
                  case 116: {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, 9);
                    break;
                  }
                  case 34: {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
                    break;
                  }
                  case 92: {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, 92);
                    break;
                  }
                  case 47: {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
                    break;
                  }
                  case 117: {
                    const _bind$3 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                    let c;
                    if (_bind$3.$tag === 1) {
                      const _ok = _bind$3;
                      c = _ok._0;
                    } else {
                      return _bind$3;
                    }
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
                    break;
                  }
                  default: {
                    const _bind$4 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
                    if (_bind$4.$tag === 1) {
                      const _ok = _bind$4;
                      _ok._0;
                    } else {
                      return _bind$4;
                    }
                  }
                }
              }
              start.val = ctx.offset;
              break;
            }
            default: {
              if (_x < 32) {
                const _bind$3 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _ok._0;
                } else {
                  return _bind$3;
                }
              } else {
                continue _L;
              }
            }
          }
        }
        break _L$2;
      }
      const _bind = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPB13StringBuilder10to__string(buf));
}
function _M0MPC14json12ParseContext9lex__zero(ctx, start) {
  _L: {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 46: {
          return _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
        }
        case 101: {
          break _L;
        }
        case 69: {
          break _L;
        }
        default: {
          if (_x >= 48 && _x <= 57) {
            ctx.offset = ctx.offset - 1 | 0;
            const _bind$2 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, 0);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
          ctx.offset = ctx.offset - 1 | 0;
          return new _M0DTPC16result6ResultGUdORPC16string10StringViewERPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
        }
      }
    }
  }
  return _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
}
function _M0MPC14json12ParseContext10lex__value(ctx, allow_rbracket) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 123) {
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6LBrace__);
    } else {
      if (_x === 91) {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8LBracket__);
      } else {
        if (_x === 93) {
          if (allow_rbracket) {
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
          } else {
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
          }
        } else {
          if (_x === 110) {
            const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
            const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4Null__);
          } else {
            if (_x === 116) {
              const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 114);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
              const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4True__);
            } else {
              if (_x === 102) {
                const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 97);
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
                const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _ok._0;
                } else {
                  return _bind$3;
                }
                const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 115);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5False__);
              } else {
                if (_x === 45) {
                  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$2 === -1) {
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$2 = _bind$2;
                    const _x$2 = _Some$2;
                    if (_x$2 === 48) {
                      const _bind$3 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 2 | 0);
                      let _bind$4;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _bind$4 = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      const _n = _bind$4._0;
                      const _repr = _bind$4._1;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0IPC16string10StringViewPB4Show10to__string(repr))));
                    } else {
                      if (_x$2 >= 49 && _x$2 <= 57) {
                        const _bind$3 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 2 | 0);
                        let _bind$4;
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _bind$4 = _ok._0;
                        } else {
                          return _bind$3;
                        }
                        const _n = _bind$4._0;
                        const _repr = _bind$4._1;
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0IPC16string10StringViewPB4Show10to__string(repr))));
                      }
                      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
                    }
                  }
                } else {
                  if (_x === 48) {
                    const _bind$2 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 1 | 0);
                    let _bind$3;
                    if (_bind$2.$tag === 1) {
                      const _ok = _bind$2;
                      _bind$3 = _ok._0;
                    } else {
                      return _bind$2;
                    }
                    const _n = _bind$3._0;
                    const _repr = _bind$3._1;
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0IPC16string10StringViewPB4Show10to__string(repr))));
                  } else {
                    if (_x >= 49 && _x <= 57) {
                      const _bind$2 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 1 | 0);
                      let _bind$3;
                      if (_bind$2.$tag === 1) {
                        const _ok = _bind$2;
                        _bind$3 = _ok._0;
                      } else {
                        return _bind$2;
                      }
                      const _n = _bind$3._0;
                      const _repr = _bind$3._1;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0IPC16string10StringViewPB4Show10to__string(repr))));
                    } else {
                      if (_x === 34) {
                        const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
                        let s;
                        if (_bind$2.$tag === 1) {
                          const _ok = _bind$2;
                          s = _ok._0;
                        } else {
                          return _bind$2;
                        }
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
                      } else {
                        const shift = -_M0MPC14char4Char10utf16__len(_x) | 0;
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0MPC14json12ParseContext24lex__after__array__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext25lex__after__object__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext26lex__after__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 58) {
      return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext19lex__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 34: {
        const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
        let s;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          s = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext20lex__property__name2(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 34) {
      const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
      let s;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        s = _ok._0;
      } else {
        return _bind$2;
      }
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext12parse__value(ctx) {
  const _bind = _M0MPC14json12ParseContext10lex__value(ctx, false);
  let tok;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    tok = _ok._0;
  } else {
    return _bind;
  }
  return _M0MPC14json12ParseContext13parse__value2(ctx, tok);
}
function _M0MPC14json12ParseContext13parse__value2(ctx, tok) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPB4null);
      }
      case 1: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(true));
      }
      case 2: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(false));
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        const _repr = _Number._1;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6number(_n, _repr));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6string(_s));
      }
      case 5: {
        return _M0MPC14json12ParseContext13parse__object(ctx);
      }
      case 7: {
        return _M0MPC14json12ParseContext12parse__array(ctx);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPB5abortGRPB9ArrayViewGRPC16string10StringViewEE("unreachable", "@moonbitlang/core/json:parse.mbt:62:34-62:54"));
}
function _M0MPC14json12ParseContext12parse__array(ctx) {
  if (ctx.remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  ctx.remaining_available_depth = ctx.remaining_available_depth - 1 | 0;
  const vec = [];
  let _tmp;
  const _bind = _M0MPC14json12ParseContext10lex__value(ctx, true);
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const _param = _tmp$3;
    if (_param.$tag === 8) {
      ctx.remaining_available_depth = ctx.remaining_available_depth + 1 | 0;
      _tmp = _M0MPC14json4Json5array(vec);
      break;
    } else {
      const _bind$2 = _M0MPC14json12ParseContext13parse__value2(ctx, _param);
      let _tmp$4;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$4 = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(vec, _tmp$4);
      const _bind$3 = _M0MPC14json12ParseContext24lex__after__array__value(ctx);
      let tok2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        tok2 = _ok._0;
      } else {
        return _bind$3;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$4 = _M0MPC14json12ParseContext10lex__value(ctx, false);
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$3 = _ok._0;
          } else {
            return _bind$4;
          }
          continue _L;
        }
        case 8: {
          ctx.remaining_available_depth = ctx.remaining_available_depth + 1 | 0;
          _tmp = _M0MPC14json4Json5array(vec);
          break _L;
        }
        default: {
          _tmp = _M0FPB5abortGRPB9ArrayViewGRPC16string10StringViewEE("unreachable", "@moonbitlang/core/json:parse.mbt:115:14-115:34");
          break _L;
        }
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext13parse__object(ctx) {
  if (ctx.remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  ctx.remaining_available_depth = ctx.remaining_available_depth - 1 | 0;
  const map = _M0MPB3Map11new_2einnerGsRPB4JsonE(8);
  let _tmp;
  const _bind = _M0MPC14json12ParseContext19lex__property__name(ctx);
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const _param = _tmp$3;
    switch (_param.$tag) {
      case 6: {
        ctx.remaining_available_depth = ctx.remaining_available_depth + 1 | 0;
        _tmp = _M0MPC14json4Json6object(map);
        break _L;
      }
      case 4: {
        const _String = _param;
        const _name = _String._0;
        const _bind$2 = _M0MPC14json12ParseContext26lex__after__property__name(ctx);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
        }
        const _bind$3 = _M0MPC14json12ParseContext12parse__value(ctx);
        let _tmp$4;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$4 = _ok._0;
        } else {
          return _bind$3;
        }
        _M0MPB3Map3setGsRPB4JsonE(map, _name, _tmp$4);
        const _bind$4 = _M0MPC14json12ParseContext25lex__after__object__value(ctx);
        let _bind$5;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _bind$5 = _ok._0;
        } else {
          return _bind$4;
        }
        switch (_bind$5.$tag) {
          case 9: {
            const _bind$6 = _M0MPC14json12ParseContext20lex__property__name2(ctx);
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _tmp$3 = _ok._0;
            } else {
              return _bind$6;
            }
            continue _L;
          }
          case 6: {
            ctx.remaining_available_depth = ctx.remaining_available_depth + 1 | 0;
            _tmp = _M0MPC14json4Json6object(map);
            break _L;
          }
          default: {
            _tmp = _M0FPB5abortGRPB9ArrayViewGRPC16string10StringViewEE("unreachable", "@moonbitlang/core/json:parse.mbt:87:14-87:34");
            break _L;
          }
        }
      }
      default: {
        _tmp = _M0FPB5abortGRPB9ArrayViewGRPC16string10StringViewEE("unreachable", "@moonbitlang/core/json:parse.mbt:90:10-90:30");
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0FPC14json13parse_2einner(input, max_nesting_depth) {
  const ctx = _M0MPC14json12ParseContext4make(input, max_nesting_depth);
  const _bind = _M0MPC14json12ParseContext12parse__value(ctx);
  let val;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    val = _ok._0;
  } else {
    return _bind;
  }
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(val) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
}
function _M0FPC14json6escape(str, escape_slash) {
  const buf = _M0MPB13StringBuilder11new_2einner(str.length);
  const _it = _M0MPC16string6String4iter(str);
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(_it);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _c = _Some;
      switch (_c) {
        case 34: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\"");
          break;
        }
        case 92: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\\");
          break;
        }
        case 47: {
          if (escape_slash) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\/");
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
          }
          break;
        }
        case 10: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\n");
          break;
        }
        case 13: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\r");
          break;
        }
        case 8: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\b");
          break;
        }
        case 9: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\t");
          break;
        }
        default: {
          const code = _c;
          if (code === 12) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\f");
          } else {
            if (code < 32) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\u00");
              _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC14byte4Byte7to__hex(code & 255));
            } else {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
            }
          }
        }
      }
      continue;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0FPC14json11indent__str(level, indent) {
  if (indent === 0) {
    return "";
  } else {
    const spaces = Math.imul(indent, level) | 0;
    switch (spaces) {
      case 0: {
        return "\n";
      }
      case 1: {
        return "\n ";
      }
      case 2: {
        return "\n  ";
      }
      case 3: {
        return "\n   ";
      }
      case 4: {
        return "\n    ";
      }
      case 5: {
        return "\n     ";
      }
      case 6: {
        return "\n      ";
      }
      case 7: {
        return "\n       ";
      }
      case 8: {
        return "\n        ";
      }
      default: {
        return `\n${_M0MPC16string6String6repeat(" ", spaces)}`;
      }
    }
  }
}
function _M0MPC14json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MPB13StringBuilder11new_2einner(0);
  const stack = [];
  let depth = 0;
  let _tmp = self;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      if (stack.length === 0) {
        break;
      } else {
        const _x = stack[stack.length - 1 | 0];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.length) {
            const element = _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(_arr, _i);
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            }
            _tmp = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(stack);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
            _tmp = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind = _M0MPB4Iter4nextGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(_iterator);
          if (_bind === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(stack);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$2 = _func(_k, _v);
              if (_bind$2 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$2;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json6escape(_k, escape_slash));
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 58);
            if (indent > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = _param;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_M0MPB3Map9is__emptyGsRPB4JsonE(_members)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 123);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_M0MPC15array5Array9is__emptyGRP38bobzhang9nodegraph6shared10SavedGraphE(_arr)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json6escape(_s, escape_slash));
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            _M0MPB13StringBuilder13write__objectGdE(buf, _n);
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
        }
      }
      _tmp = undefined;
      continue;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC14json8JsonPath8add__key(self, key) {
  return new _M0DTPC14json8JsonPath3Key(self, key);
}
function _M0FPC14json18from__json_2einnerGRP38bobzhang9nodegraph6shared10ConnectionE(json, path) {
  return _M0IP38bobzhang9nodegraph6shared10ConnectionPC14json8FromJson10from__json(json, path);
}
function _M0FPC14json18from__json_2einnerGRP38bobzhang9nodegraph6shared4NodeE(json, path) {
  return _M0IP38bobzhang9nodegraph6shared4NodePC14json8FromJson10from__json(json, path);
}
function _M0FPC14json18from__json_2einnerGRP38bobzhang9nodegraph6shared10SavedGraphE(json, path) {
  return _M0IP38bobzhang9nodegraph6shared10SavedGraphPC14json8FromJson10from__json(json, path);
}
function _M0FPC14json18from__json_2einnerGRP38bobzhang9nodegraph6shared5GraphE(json, path) {
  return _M0IP38bobzhang9nodegraph6shared5GraphPC14json8FromJson10from__json(json, path);
}
function _M0FPC14json18from__json_2einnerGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(json, path) {
  return _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang9nodegraph6shared10SavedGraphE(json, path);
}
function _M0FPC14json18from__json_2einnerGRP38bobzhang9nodegraph6shared10EvalResultE(json, path) {
  return _M0IP38bobzhang9nodegraph6shared10EvalResultPC14json8FromJson10from__json(json, path);
}
function _M0FPC14json10from__jsonGRP38bobzhang9nodegraph6shared10ConnectionE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = _M0DTPC14json8JsonPath4Root__;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FPC14json18from__json_2einnerGRP38bobzhang9nodegraph6shared10ConnectionE(json, path);
}
function _M0FPC14json10from__jsonGRP38bobzhang9nodegraph6shared4NodeE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = _M0DTPC14json8JsonPath4Root__;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FPC14json18from__json_2einnerGRP38bobzhang9nodegraph6shared4NodeE(json, path);
}
function _M0FPC14json10from__jsonGRP38bobzhang9nodegraph6shared10SavedGraphE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = _M0DTPC14json8JsonPath4Root__;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FPC14json18from__json_2einnerGRP38bobzhang9nodegraph6shared10SavedGraphE(json, path);
}
function _M0FPC14json10from__jsonGRP38bobzhang9nodegraph6shared5GraphE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = _M0DTPC14json8JsonPath4Root__;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FPC14json18from__json_2einnerGRP38bobzhang9nodegraph6shared5GraphE(json, path);
}
function _M0FPC14json10from__jsonGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = _M0DTPC14json8JsonPath4Root__;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FPC14json18from__json_2einnerGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(json, path);
}
function _M0FPC14json10from__jsonGRP38bobzhang9nodegraph6shared10EvalResultE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = _M0DTPC14json8JsonPath4Root__;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FPC14json18from__json_2einnerGRP38bobzhang9nodegraph6shared10EvalResultE(json, path);
}
function _M0IPC14bool4BoolPC14json8FromJson10from__json(json, path) {
  switch (json.$tag) {
    case 1: {
      return new _M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE2Ok(true);
    }
    case 2: {
      return new _M0DTPC16result6ResultGbRPC14json15JsonDecodeErrorE2Ok(false);
    }
    default: {
      return _M0FPC14json13decode__errorGbE(path, "Bool::from_json: expected boolean");
    }
  }
}
function _M0IPC13int3IntPC14json8FromJson10from__json(json, path) {
  _L: {
    if (json.$tag === 3) {
      const _Number = json;
      const _n = _Number._0;
      if (_n !== _M0FPC16double8infinity) {
        if (_n !== _M0FPC16double13neg__infinity) {
          if (_n > 2147483647 || _n < -2147483648) {
            const _bind = _M0FPC14json13decode__errorGuE(path, "Int::from_json: overflow");
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _ok._0;
            } else {
              return _bind;
            }
          }
          return new _M0DTPC16result6ResultGiRPC14json15JsonDecodeErrorE2Ok(_M0MPC16double6Double7to__int(_n));
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return _M0FPC14json13decode__errorGiE(path, "Int::from_json: expected number");
}
function _M0IPC16string6StringPC14json8FromJson10from__json(json, path) {
  if (json.$tag === 4) {
    const _String = json;
    const _a = _String._0;
    return new _M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE2Ok(_a);
  } else {
    return _M0FPC14json13decode__errorGsE(path, "String::from_json: expected string");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang9nodegraph6shared10SavedGraphE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang9nodegraph6shared10SavedGraphEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IP38bobzhang9nodegraph6shared10SavedGraphPC14json8FromJson10from__json(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(path, "Array::from_json: expected array");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang9nodegraph6shared4NodeE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang9nodegraph6shared4NodeEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IP38bobzhang9nodegraph6shared4NodePC14json8FromJson10from__json(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(path, "Array::from_json: expected array");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang9nodegraph6shared10ConnectionE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang9nodegraph6shared10ConnectionEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IP38bobzhang9nodegraph6shared10ConnectionPC14json8FromJson10from__json(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(path, "Array::from_json: expected array");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsonUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IPC15tuple6Tuple2PC14json8FromJson10from__jsonGiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEE(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(path, "Array::from_json: expected array");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGUisEE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsonUisEEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IPC15tuple6Tuple2PC14json8FromJson10from__jsonGisE(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGUisEERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(path, "Array::from_json: expected array");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGiE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsoniEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IPC13int3IntPC14json8FromJson10from__json(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGiERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(path, "Array::from_json: expected array");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang9nodegraph6shared5ValueE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang9nodegraph6shared5ValueEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IP38bobzhang9nodegraph6shared5ValuePC14json8FromJson10from__json(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(path, "Array::from_json: expected array");
  }
}
function _M0MPC15queue5Queue3newGRP48bobzhang9nodegraph8frontend3app3MsgE() {
  return new _M0TPC15queue5QueueGRP48bobzhang9nodegraph8frontend3app3MsgE(0, undefined, undefined);
}
function _M0MPC15queue5Queue3newGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE() {
  return new _M0TPC15queue5QueueGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(0, undefined, undefined);
}
function _M0MPC15queue5Queue5clearGWRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self) {
  self.length = 0;
  self.first = undefined;
  self.last = undefined;
}
function _M0MPC15queue5Queue5clearGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self) {
  self.length = 0;
  self.first = undefined;
  self.last = undefined;
}
function _M0MPC15queue5Queue4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, x) {
  const cell = new _M0TPC15queue4ConsGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(x, undefined);
  const _bind = self.last;
  if (_bind === undefined) {
    self.length = 1;
    self.first = cell;
    self.last = cell;
    return;
  } else {
    const _Some = _bind;
    const _last = _Some;
    _last.next = cell;
    self.length = self.length + 1 | 0;
    self.last = cell;
    return;
  }
}
function _M0MPC15queue5Queue4pushGWRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self, x) {
  const cell = new _M0TPC15queue4ConsGWRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(x, undefined);
  const _bind = self.last;
  if (_bind === undefined) {
    self.length = 1;
    self.first = cell;
    self.last = cell;
    return;
  } else {
    const _Some = _bind;
    const _last = _Some;
    _last.next = cell;
    self.length = self.length + 1 | 0;
    self.last = cell;
    return;
  }
}
function _M0MPC15queue5Queue3popGWRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self) {
  const _bind = self.first;
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _content = _x.content;
    const _x$2 = _x.next;
    if (_x$2 === undefined) {
      _M0MPC15queue5Queue5clearGWRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self);
      return _content;
    } else {
      self.length = self.length - 1 | 0;
      self.first = _x$2;
      return _content;
    }
  }
}
function _M0MPC15queue5Queue3popGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self) {
  const _bind = self.first;
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _content = _x.content;
    const _x$2 = _x.next;
    if (_x$2 === undefined) {
      _M0MPC15queue5Queue5clearGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self);
      return _content;
    } else {
      self.length = self.length - 1 | 0;
      self.first = _x$2;
      return _content;
    }
  }
}
function _M0FPC13ref3newGRP48bobzhang9nodegraph8frontend3app5ModelE(x) {
  return new _M0TPC13ref3RefGRP48bobzhang9nodegraph8frontend3app5ModelE(x);
}
function _M0FPC13ref3newGiE(x) {
  return new _M0TPC13ref3RefGiE(x);
}
function _M0FPC13set21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13set3Set11new_2einnerGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPC13set21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPC13set3SetGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPC13set3Set10push__awayGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set15add__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC13set3Set4growGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self);
  }
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _M0IP419moonbit_2dcommunity7rabbita8internal7runtime2IdPB2Eq5equal(_curr_entry.key, key)) {
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        _M0MPC13set3Set10push__awayGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = new _M0TPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(_bind$2, _bind$3, _psl, hash, key);
  _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, _idx, entry);
}
function _M0MPC13set3Set4growGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPC13set21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _hash = _x.hash;
      _M0MPC13set3Set15add__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, _key, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function _M0MPC13set3Set3addGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, key) {
  _M0MPC13set3Set15add__with__hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, key, _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(key));
}
function _M0MPC13set3Set13remove__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, entry) {
  const _bind = entry.prev;
  if (_bind === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(_tmp[_bind]).next = entry.next;
  }
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPC13set3Set11shift__backGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, idx) {
  let _tmp = idx;
  while (true) {
    const idx$2 = _tmp;
    const next = (idx$2 + 1 | 0) & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind = _tmp$2[next];
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, _x, idx$2);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, idx$2);
    _tmp$2[idx$2] = undefined;
    return;
  }
}
function _M0MPC13set3Set6removeGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _M0IP419moonbit_2dcommunity7rabbita8internal7runtime2IdPB2Eq5equal(_entry.key, key)) {
        _M0MPC13set3Set13remove__entryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, _entry);
        _M0MPC13set3Set11shift__backGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC13set3Set5clearGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self) {
  _M0MPC15array10FixedArray12fill_2einnerGORPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdEE(self.entries, undefined, 0, undefined);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
}
function _M0MPC13set3Set9to__arrayGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self) {
  const arr = _M0MPC15array5Array11new_2einnerGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self.size);
  let _tmp = self.head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      break;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _key = _x.key;
      const _next = _x.next;
      _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(arr, _key);
      _tmp = _next;
      continue;
    }
  }
  return arr;
}
function _M0IP38bobzhang9nodegraph6shared8NodeKindPC14json8FromJson10from__json(_x_471, _x_472) {
  let tag;
  _L: {
    let _bind;
    let arr;
    _L$2: {
      _L$3: {
        switch (_x_471.$tag) {
          case 4: {
            const _String = _x_471;
            const _tag = _String._0;
            _bind = _tag;
            break;
          }
          case 5: {
            const _Array = _x_471;
            const _arr = _Array._0;
            arr = _arr;
            break _L$3;
          }
          default: {
            return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_472, _1: "Expected string or array for tag in enum when derserializing NodeKind" }));
          }
        }
        break _L$2;
      }
      const _bind$2 = _M0MPC15array5Array3getGRPB4JsonE(arr, 0);
      if (_bind$2 === undefined) {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_472, _1: "Missing tag in array[0] when derserializing NodeKind" }));
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x.$tag === 4) {
          const _String = _x;
          const _tag = _String._0;
          _bind = _tag;
        } else {
          return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_472, _1: "Expected string tag at array[0] when derserializing NodeKind" }));
        }
      }
    }
    switch (_bind) {
      case "MathAdd": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(0);
      }
      case "MathSubtract": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(1);
      }
      case "MathMultiply": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(2);
      }
      case "MathDivide": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(3);
      }
      case "MathAbs": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(4);
      }
      case "StringConcat": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(5);
      }
      case "StringLength": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(6);
      }
      case "StringUpper": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(7);
      }
      case "StringLower": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(8);
      }
      case "LogicAnd": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(9);
      }
      case "LogicOr": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(10);
      }
      case "LogicNot": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(11);
      }
      case "LogicGreaterThan": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(12);
      }
      case "LogicEquals": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(13);
      }
      case "ColorRGB": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(14);
      }
      case "ColorMix": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(15);
      }
      case "ColorBrightness": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(16);
      }
      case "ConstNumber": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(17);
      }
      case "ConstString": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(18);
      }
      case "ConstBool": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(19);
      }
      case "ConstColor": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(20);
      }
      case "DisplayNumber": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(21);
      }
      case "DisplayText": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE2Ok(22);
      }
      default: {
        tag = _bind;
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared8NodeKindRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_472, _1: `Unknown enum constructor ${tag} when deserializing NodeKind` }));
}
function _M0IP38bobzhang9nodegraph6shared10SavedGraphPC14json8FromJson10from__json(_x_447, _x_448) {
  const _de_name_450 = new _M0TPB8MutLocalGOsE(undefined);
  const _de_id_449 = new _M0TPB8MutLocalGOiE(undefined);
  let _map;
  _L: {
    if (_x_447.$tag === 6) {
      const _Object = _x_447;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_448, _1: "Expected object to deserialize SavedGraph" }));
    }
  }
  let _v;
  _L$2: {
    _L$3: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "id");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v = __v;
        break _L$3;
      }
      break _L$2;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v, _M0MPC14json8JsonPath8add__key(_x_448, "id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_id_449.val = _tmp;
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "name");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$2, _M0MPC14json8JsonPath8add__key(_x_448, "name"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_name_450.val = _tmp;
  }
  let _de_name_450$2;
  const _bind = _de_name_450.val;
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_448, _1: "Missing field name" }));
  } else {
    const _Some = _bind;
    const _v$3 = _Some;
    _de_name_450$2 = _v$3;
  }
  let _de_id_449$2;
  const _bind$2 = _de_id_449.val;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_448, _1: "Missing field id" }));
  } else {
    const _Some = _bind$2;
    const _v$3 = _Some;
    _de_id_449$2 = _v$3;
  }
  return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang9nodegraph6shared10SavedGraph(_de_id_449$2, _de_name_450$2));
}
function _M0IP38bobzhang9nodegraph6shared5GraphPC14json8FromJson10from__json(_x_427, _x_428) {
  const _de_nodes_430 = new _M0TPB8MutLocalGORPB5ArrayGRP38bobzhang9nodegraph6shared4NodeEE(_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeEE4None__);
  const _de_connections_429 = new _M0TPB8MutLocalGORPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionEE(_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionEE4None__);
  let _map;
  _L: {
    if (_x_427.$tag === 6) {
      const _Object = _x_427;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_428, _1: "Expected object to deserialize Graph" }));
    }
  }
  let _v;
  _L$2: {
    _L$3: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "nodes");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v = __v;
        break _L$3;
      }
      break _L$2;
    }
    const _bind = _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang9nodegraph6shared4NodeE(_v, _M0MPC14json8JsonPath8add__key(_x_428, "nodes"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_nodes_430.val = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared4NodeEE4Some(_tmp);
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "connections");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang9nodegraph6shared10ConnectionE(_v$2, _M0MPC14json8JsonPath8add__key(_x_428, "connections"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_connections_429.val = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang9nodegraph6shared10ConnectionEE4Some(_tmp);
  }
  let _de_nodes_430$2;
  const _bind = _de_nodes_430.val;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _v$3 = _Some._0;
    _de_nodes_430$2 = _v$3;
  } else {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_428, _1: "Missing field nodes" }));
  }
  let _de_connections_429$2;
  const _bind$2 = _de_connections_429.val;
  if (_bind$2.$tag === 1) {
    const _Some = _bind$2;
    const _v$3 = _Some._0;
    _de_connections_429$2 = _v$3;
  } else {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_428, _1: "Missing field connections" }));
  }
  return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang9nodegraph6shared5Graph(_de_nodes_430$2, _de_connections_429$2));
}
function _M0IP38bobzhang9nodegraph6shared4NodePC14json8FromJson10from__json(_x_387, _x_388) {
  const _de_y_394 = new _M0TPB8MutLocalGOiE(undefined);
  const _de_x_393 = new _M0TPB8MutLocalGOiE(undefined);
  const _de_label_392 = new _M0TPB8MutLocalGOsE(undefined);
  const _de_kind_391 = new _M0TPB8MutLocalGORP38bobzhang9nodegraph6shared8NodeKindE(undefined);
  const _de_id_390 = new _M0TPB8MutLocalGOiE(undefined);
  const _de_config_389 = new _M0TPB8MutLocalGOsE(undefined);
  let _map;
  _L: {
    if (_x_387.$tag === 6) {
      const _Object = _x_387;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodeRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_388, _1: "Expected object to deserialize Node" }));
    }
  }
  let _v;
  _L$2: {
    _L$3: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "id");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v = __v;
        break _L$3;
      }
      break _L$2;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v, _M0MPC14json8JsonPath8add__key(_x_388, "id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_id_390.val = _tmp;
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "kind");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IP38bobzhang9nodegraph6shared8NodeKindPC14json8FromJson10from__json(_v$2, _M0MPC14json8JsonPath8add__key(_x_388, "kind"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_kind_391.val = _tmp;
  }
  let _v$3;
  _L$4: {
    _L$5: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "x");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$3 = __v;
        break _L$5;
      }
      break _L$4;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v$3, _M0MPC14json8JsonPath8add__key(_x_388, "x"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_x_393.val = _tmp;
  }
  let _v$4;
  _L$5: {
    _L$6: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "y");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$4 = __v;
        break _L$6;
      }
      break _L$5;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v$4, _M0MPC14json8JsonPath8add__key(_x_388, "y"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_y_394.val = _tmp;
  }
  let _v$5;
  _L$6: {
    _L$7: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "label");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$5 = __v;
        break _L$7;
      }
      break _L$6;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$5, _M0MPC14json8JsonPath8add__key(_x_388, "label"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_label_392.val = _tmp;
  }
  let _v$6;
  _L$7: {
    _L$8: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "config");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$6 = __v;
        break _L$8;
      }
      break _L$7;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$6, _M0MPC14json8JsonPath8add__key(_x_388, "config"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_config_389.val = _tmp;
  }
  let _de_y_394$2;
  const _bind = _de_y_394.val;
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodeRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_388, _1: "Missing field y" }));
  } else {
    const _Some = _bind;
    const _v$7 = _Some;
    _de_y_394$2 = _v$7;
  }
  let _de_x_393$2;
  const _bind$2 = _de_x_393.val;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodeRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_388, _1: "Missing field x" }));
  } else {
    const _Some = _bind$2;
    const _v$7 = _Some;
    _de_x_393$2 = _v$7;
  }
  let _de_label_392$2;
  const _bind$3 = _de_label_392.val;
  if (_bind$3 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodeRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_388, _1: "Missing field label" }));
  } else {
    const _Some = _bind$3;
    const _v$7 = _Some;
    _de_label_392$2 = _v$7;
  }
  let _de_kind_391$2;
  const _bind$4 = _de_kind_391.val;
  if (_bind$4 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodeRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_388, _1: "Missing field kind" }));
  } else {
    const _Some = _bind$4;
    const _v$7 = _Some;
    _de_kind_391$2 = _v$7;
  }
  let _de_id_390$2;
  const _bind$5 = _de_id_390.val;
  if (_bind$5 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodeRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_388, _1: "Missing field id" }));
  } else {
    const _Some = _bind$5;
    const _v$7 = _Some;
    _de_id_390$2 = _v$7;
  }
  let _de_config_389$2;
  const _bind$6 = _de_config_389.val;
  if (_bind$6 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodeRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_388, _1: "Missing field config" }));
  } else {
    const _Some = _bind$6;
    const _v$7 = _Some;
    _de_config_389$2 = _v$7;
  }
  return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodeRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang9nodegraph6shared4Node(_de_id_390$2, _de_kind_391$2, _de_x_393$2, _de_y_394$2, _de_label_392$2, _de_config_389$2));
}
function _M0IP38bobzhang9nodegraph6shared10EvalResultPC14json8FromJson10from__json(_x_353, _x_354) {
  const _de_node_outputs_358 = new _M0TPB8MutLocalGORPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEEE(_M0DTPC16option6OptionGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEEE4None__);
  const _de_has_cycle_357 = new _M0TPB8MutLocalGObE(-1);
  const _de_eval_order_356 = new _M0TPB8MutLocalGORPB5ArrayGiEE(_M0DTPC16option6OptionGRPB5ArrayGiEE4None__);
  const _de_errors_355 = new _M0TPB8MutLocalGORPB5ArrayGUisEEE(_M0DTPC16option6OptionGRPB5ArrayGUisEEE4None__);
  let _map;
  _L: {
    if (_x_353.$tag === 6) {
      const _Object = _x_353;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_354, _1: "Expected object to deserialize EvalResult" }));
    }
  }
  let _v;
  _L$2: {
    _L$3: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "node_outputs");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v = __v;
        break _L$3;
      }
      break _L$2;
    }
    const _bind = _M0IPC15array5ArrayPC14json8FromJson10from__jsonGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEE(_v, _M0MPC14json8JsonPath8add__key(_x_354, "node_outputs"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_node_outputs_358.val = new _M0DTPC16option6OptionGRPB5ArrayGUiRPB5ArrayGRP38bobzhang9nodegraph6shared5ValueEEEE4Some(_tmp);
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "errors");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IPC15array5ArrayPC14json8FromJson10from__jsonGUisEE(_v$2, _M0MPC14json8JsonPath8add__key(_x_354, "errors"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_errors_355.val = new _M0DTPC16option6OptionGRPB5ArrayGUisEEE4Some(_tmp);
  }
  let _v$3;
  _L$4: {
    _L$5: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "eval_order");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$3 = __v;
        break _L$5;
      }
      break _L$4;
    }
    const _bind = _M0IPC15array5ArrayPC14json8FromJson10from__jsonGiE(_v$3, _M0MPC14json8JsonPath8add__key(_x_354, "eval_order"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_eval_order_356.val = new _M0DTPC16option6OptionGRPB5ArrayGiEE4Some(_tmp);
  }
  let _v$4;
  _L$5: {
    _L$6: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "has_cycle");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$4 = __v;
        break _L$6;
      }
      break _L$5;
    }
    const _bind = _M0IPC14bool4BoolPC14json8FromJson10from__json(_v$4, _M0MPC14json8JsonPath8add__key(_x_354, "has_cycle"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_has_cycle_357.val = _tmp;
  }
  let _de_node_outputs_358$2;
  const _bind = _de_node_outputs_358.val;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _v$5 = _Some._0;
    _de_node_outputs_358$2 = _v$5;
  } else {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_354, _1: "Missing field node_outputs" }));
  }
  let _de_has_cycle_357$2;
  const _bind$2 = _de_has_cycle_357.val;
  if (_bind$2 === -1) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_354, _1: "Missing field has_cycle" }));
  } else {
    const _Some = _bind$2;
    const _v$5 = _Some;
    _de_has_cycle_357$2 = _v$5;
  }
  let _de_eval_order_356$2;
  const _bind$3 = _de_eval_order_356.val;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    const _v$5 = _Some._0;
    _de_eval_order_356$2 = _v$5;
  } else {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_354, _1: "Missing field eval_order" }));
  }
  let _de_errors_355$2;
  const _bind$4 = _de_errors_355.val;
  if (_bind$4.$tag === 1) {
    const _Some = _bind$4;
    const _v$5 = _Some._0;
    _de_errors_355$2 = _v$5;
  } else {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_354, _1: "Missing field errors" }));
  }
  return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang9nodegraph6shared10EvalResult(_de_node_outputs_358$2, _de_errors_355$2, _de_eval_order_356$2, _de_has_cycle_357$2));
}
function _M0IP38bobzhang9nodegraph6shared5ValuePC14json8FromJson10from__json(_x_291, _x_292) {
  let tag;
  _L: {
    let _bind;
    let arr;
    _L$2: {
      _L$3: {
        switch (_x_291.$tag) {
          case 4: {
            const _String = _x_291;
            const _tag = _String._0;
            _bind = _tag;
            break;
          }
          case 5: {
            const _Array = _x_291;
            const _arr = _Array._0;
            arr = _arr;
            break _L$3;
          }
          default: {
            return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Expected string or array for tag in enum when derserializing Value" }));
          }
        }
        break _L$2;
      }
      const _bind$2 = _M0MPC15array5Array3getGRPB4JsonE(arr, 0);
      if (_bind$2 === undefined) {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Missing tag in array[0] when derserializing Value" }));
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x.$tag === 4) {
          const _String = _x;
          const _tag = _String._0;
          _bind = _tag;
        } else {
          return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Expected string tag at array[0] when derserializing Value" }));
        }
      }
    }
    switch (_bind) {
      case "VNumber": {
        const _de_arg_293 = new _M0TPB8MutLocalGOiE(undefined);
        _L$3: {
          _L$4: {
            let _arg_294;
            let _arg_295;
            _L$5: {
              if (_x_291.$tag === 5) {
                const _Array = _x_291;
                const _x = _Array._0;
                if (_x.length === 2) {
                  const _$42$arg_294 = _x[0];
                  const _$42$arg_295 = _x[1];
                  _arg_294 = _$42$arg_294;
                  _arg_295 = _$42$arg_295;
                  break _L$5;
                } else {
                  break _L$4;
                }
              } else {
                break _L$4;
              }
            }
            const _bind$2 = _M0IPC13int3IntPC14json8FromJson10from__json(_arg_295, _M0MPC14json8JsonPath10add__index(_x_292, 1));
            let _tmp;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _tmp = _ok._0;
            } else {
              return _bind$2;
            }
            _de_arg_293.val = _tmp;
            break _L$3;
          }
          return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Expected array to deserialize enum Value constructor VNumber when derserializing Value" }));
        }
        let _de_arg_293$2;
        const _bind$2 = _de_arg_293.val;
        if (_bind$2 === undefined) {
          return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Missing positional field 0 when derserializing Value" }));
        } else {
          const _Some = _bind$2;
          const _v = _Some;
          _de_arg_293$2 = _v;
        }
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE2Ok(new _M0DTP38bobzhang9nodegraph6shared5Value7VNumber(_de_arg_293$2));
      }
      case "VString": {
        const _de_arg_296 = new _M0TPB8MutLocalGOsE(undefined);
        _L$4: {
          _L$5: {
            let _arg_297;
            let _arg_298;
            _L$6: {
              if (_x_291.$tag === 5) {
                const _Array = _x_291;
                const _x = _Array._0;
                if (_x.length === 2) {
                  const _$42$arg_297 = _x[0];
                  const _$42$arg_298 = _x[1];
                  _arg_297 = _$42$arg_297;
                  _arg_298 = _$42$arg_298;
                  break _L$6;
                } else {
                  break _L$5;
                }
              } else {
                break _L$5;
              }
            }
            const _bind$3 = _M0IPC16string6StringPC14json8FromJson10from__json(_arg_298, _M0MPC14json8JsonPath10add__index(_x_292, 1));
            let _tmp;
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _tmp = _ok._0;
            } else {
              return _bind$3;
            }
            _de_arg_296.val = _tmp;
            break _L$4;
          }
          return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Expected array to deserialize enum Value constructor VString when derserializing Value" }));
        }
        let _de_arg_296$2;
        const _bind$3 = _de_arg_296.val;
        if (_bind$3 === undefined) {
          return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Missing positional field 0 when derserializing Value" }));
        } else {
          const _Some = _bind$3;
          const _v = _Some;
          _de_arg_296$2 = _v;
        }
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE2Ok(new _M0DTP38bobzhang9nodegraph6shared5Value7VString(_de_arg_296$2));
      }
      case "VBool": {
        const _de_arg_299 = new _M0TPB8MutLocalGObE(-1);
        _L$5: {
          _L$6: {
            let _arg_300;
            let _arg_301;
            _L$7: {
              if (_x_291.$tag === 5) {
                const _Array = _x_291;
                const _x = _Array._0;
                if (_x.length === 2) {
                  const _$42$arg_300 = _x[0];
                  const _$42$arg_301 = _x[1];
                  _arg_300 = _$42$arg_300;
                  _arg_301 = _$42$arg_301;
                  break _L$7;
                } else {
                  break _L$6;
                }
              } else {
                break _L$6;
              }
            }
            const _bind$4 = _M0IPC14bool4BoolPC14json8FromJson10from__json(_arg_301, _M0MPC14json8JsonPath10add__index(_x_292, 1));
            let _tmp;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _tmp = _ok._0;
            } else {
              return _bind$4;
            }
            _de_arg_299.val = _tmp;
            break _L$5;
          }
          return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Expected array to deserialize enum Value constructor VBool when derserializing Value" }));
        }
        let _de_arg_299$2;
        const _bind$4 = _de_arg_299.val;
        if (_bind$4 === -1) {
          return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Missing positional field 0 when derserializing Value" }));
        } else {
          const _Some = _bind$4;
          const _v = _Some;
          _de_arg_299$2 = _v;
        }
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE2Ok(new _M0DTP38bobzhang9nodegraph6shared5Value5VBool(_de_arg_299$2));
      }
      case "VColor": {
        const _de_arg_302 = new _M0TPB8MutLocalGOsE(undefined);
        _L$6: {
          _L$7: {
            let _arg_303;
            let _arg_304;
            _L$8: {
              if (_x_291.$tag === 5) {
                const _Array = _x_291;
                const _x = _Array._0;
                if (_x.length === 2) {
                  const _$42$arg_303 = _x[0];
                  const _$42$arg_304 = _x[1];
                  _arg_303 = _$42$arg_303;
                  _arg_304 = _$42$arg_304;
                  break _L$8;
                } else {
                  break _L$7;
                }
              } else {
                break _L$7;
              }
            }
            const _bind$5 = _M0IPC16string6StringPC14json8FromJson10from__json(_arg_304, _M0MPC14json8JsonPath10add__index(_x_292, 1));
            let _tmp;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _tmp = _ok._0;
            } else {
              return _bind$5;
            }
            _de_arg_302.val = _tmp;
            break _L$6;
          }
          return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Expected array to deserialize enum Value constructor VColor when derserializing Value" }));
        }
        let _de_arg_302$2;
        const _bind$5 = _de_arg_302.val;
        if (_bind$5 === undefined) {
          return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Missing positional field 0 when derserializing Value" }));
        } else {
          const _Some = _bind$5;
          const _v = _Some;
          _de_arg_302$2 = _v;
        }
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE2Ok(new _M0DTP38bobzhang9nodegraph6shared5Value6VColor(_de_arg_302$2));
      }
      case "VError": {
        const _de_arg_305 = new _M0TPB8MutLocalGOsE(undefined);
        _L$7: {
          _L$8: {
            let _arg_306;
            let _arg_307;
            _L$9: {
              if (_x_291.$tag === 5) {
                const _Array = _x_291;
                const _x = _Array._0;
                if (_x.length === 2) {
                  const _$42$arg_306 = _x[0];
                  const _$42$arg_307 = _x[1];
                  _arg_306 = _$42$arg_306;
                  _arg_307 = _$42$arg_307;
                  break _L$9;
                } else {
                  break _L$8;
                }
              } else {
                break _L$8;
              }
            }
            const _bind$6 = _M0IPC16string6StringPC14json8FromJson10from__json(_arg_307, _M0MPC14json8JsonPath10add__index(_x_292, 1));
            let _tmp;
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _tmp = _ok._0;
            } else {
              return _bind$6;
            }
            _de_arg_305.val = _tmp;
            break _L$7;
          }
          return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Expected array to deserialize enum Value constructor VError when derserializing Value" }));
        }
        let _de_arg_305$2;
        const _bind$6 = _de_arg_305.val;
        if (_bind$6 === undefined) {
          return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Missing positional field 0 when derserializing Value" }));
        } else {
          const _Some = _bind$6;
          const _v = _Some;
          _de_arg_305$2 = _v;
        }
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE2Ok(new _M0DTP38bobzhang9nodegraph6shared5Value6VError(_de_arg_305$2));
      }
      case "VNone": {
        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE2Ok(_M0DTP38bobzhang9nodegraph6shared5Value5VNone__);
      }
      default: {
        tag = _bind;
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5ValueRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: `Unknown enum constructor ${tag} when deserializing Value` }));
}
function _M0IP38bobzhang9nodegraph6shared10ConnectionPC14json8FromJson10from__json(_x_198, _x_199) {
  const _de_to_port_204 = new _M0TPB8MutLocalGOiE(undefined);
  const _de_to_node_id_203 = new _M0TPB8MutLocalGOiE(undefined);
  const _de_id_202 = new _M0TPB8MutLocalGOiE(undefined);
  const _de_from_port_201 = new _M0TPB8MutLocalGOiE(undefined);
  const _de_from_node_id_200 = new _M0TPB8MutLocalGOiE(undefined);
  let _map;
  _L: {
    if (_x_198.$tag === 6) {
      const _Object = _x_198;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_199, _1: "Expected object to deserialize Connection" }));
    }
  }
  let _v;
  _L$2: {
    _L$3: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "id");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v = __v;
        break _L$3;
      }
      break _L$2;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v, _M0MPC14json8JsonPath8add__key(_x_199, "id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_id_202.val = _tmp;
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "from_node_id");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v$2, _M0MPC14json8JsonPath8add__key(_x_199, "from_node_id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_from_node_id_200.val = _tmp;
  }
  let _v$3;
  _L$4: {
    _L$5: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "from_port");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$3 = __v;
        break _L$5;
      }
      break _L$4;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v$3, _M0MPC14json8JsonPath8add__key(_x_199, "from_port"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_from_port_201.val = _tmp;
  }
  let _v$4;
  _L$5: {
    _L$6: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "to_node_id");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$4 = __v;
        break _L$6;
      }
      break _L$5;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v$4, _M0MPC14json8JsonPath8add__key(_x_199, "to_node_id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_to_node_id_203.val = _tmp;
  }
  let _v$5;
  _L$6: {
    _L$7: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "to_port");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$5 = __v;
        break _L$7;
      }
      break _L$6;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v$5, _M0MPC14json8JsonPath8add__key(_x_199, "to_port"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_to_port_204.val = _tmp;
  }
  let _de_to_port_204$2;
  const _bind = _de_to_port_204.val;
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_199, _1: "Missing field to_port" }));
  } else {
    const _Some = _bind;
    const _v$6 = _Some;
    _de_to_port_204$2 = _v$6;
  }
  let _de_to_node_id_203$2;
  const _bind$2 = _de_to_node_id_203.val;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_199, _1: "Missing field to_node_id" }));
  } else {
    const _Some = _bind$2;
    const _v$6 = _Some;
    _de_to_node_id_203$2 = _v$6;
  }
  let _de_id_202$2;
  const _bind$3 = _de_id_202.val;
  if (_bind$3 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_199, _1: "Missing field id" }));
  } else {
    const _Some = _bind$3;
    const _v$6 = _Some;
    _de_id_202$2 = _v$6;
  }
  let _de_from_port_201$2;
  const _bind$4 = _de_from_port_201.val;
  if (_bind$4 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_199, _1: "Missing field from_port" }));
  } else {
    const _Some = _bind$4;
    const _v$6 = _Some;
    _de_from_port_201$2 = _v$6;
  }
  let _de_from_node_id_200$2;
  const _bind$5 = _de_from_node_id_200.val;
  if (_bind$5 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_199, _1: "Missing field from_node_id" }));
  } else {
    const _Some = _bind$5;
    const _v$6 = _Some;
    _de_from_node_id_200$2 = _v$6;
  }
  return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang9nodegraph6shared10Connection(_de_id_202$2, _de_from_node_id_200$2, _de_from_port_201$2, _de_to_node_id_203$2, _de_to_port_204$2));
}
function _M0IP38bobzhang9nodegraph6shared8PortTypePB2Eq5equal(_x_176, _x_177) {
  switch (_x_176) {
    case 0: {
      if (_x_177 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_177 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_177 === 2) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_177 === 3) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0FP38bobzhang9nodegraph6shared17types__compatible(from, to) {
  return _M0IP38bobzhang9nodegraph6shared8PortTypePB2Eq5equal(from, to);
}
function _M0FP38bobzhang9nodegraph6shared12input__ports(kind) {
  _L: {
    switch (kind) {
      case 0: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("A", 0), new _M0TP38bobzhang9nodegraph6shared7PortDef("B", 0)];
      }
      case 1: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("A", 0), new _M0TP38bobzhang9nodegraph6shared7PortDef("B", 0)];
      }
      case 2: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("A", 0), new _M0TP38bobzhang9nodegraph6shared7PortDef("B", 0)];
      }
      case 3: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("A", 0), new _M0TP38bobzhang9nodegraph6shared7PortDef("B", 0)];
      }
      case 4: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Value", 0)];
      }
      case 5: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("A", 1), new _M0TP38bobzhang9nodegraph6shared7PortDef("B", 1)];
      }
      case 6: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Text", 1)];
      }
      case 7: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Text", 1)];
      }
      case 8: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Text", 1)];
      }
      case 9: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("A", 2), new _M0TP38bobzhang9nodegraph6shared7PortDef("B", 2)];
      }
      case 10: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("A", 2), new _M0TP38bobzhang9nodegraph6shared7PortDef("B", 2)];
      }
      case 11: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Value", 2)];
      }
      case 12: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("A", 0), new _M0TP38bobzhang9nodegraph6shared7PortDef("B", 0)];
      }
      case 13: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("A", 0), new _M0TP38bobzhang9nodegraph6shared7PortDef("B", 0)];
      }
      case 14: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("R", 0), new _M0TP38bobzhang9nodegraph6shared7PortDef("G", 0), new _M0TP38bobzhang9nodegraph6shared7PortDef("B", 0)];
      }
      case 15: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("A", 3), new _M0TP38bobzhang9nodegraph6shared7PortDef("B", 3)];
      }
      case 16: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Color", 3)];
      }
      case 17: {
        break _L;
      }
      case 18: {
        break _L;
      }
      case 19: {
        break _L;
      }
      case 20: {
        break _L;
      }
      case 21: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Value", 0)];
      }
      default: {
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Text", 1)];
      }
    }
  }
  return [];
}
function _M0FP38bobzhang9nodegraph6shared13output__ports(kind) {
  _L: {
    _L$2: {
      _L$3: {
        _L$4: {
          switch (kind) {
            case 0: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Sum", 0)];
            }
            case 1: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Diff", 0)];
            }
            case 2: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Product", 0)];
            }
            case 3: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Quotient", 0)];
            }
            case 4: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Result", 0)];
            }
            case 5: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Result", 1)];
            }
            case 6: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Length", 0)];
            }
            case 7: {
              break _L$4;
            }
            case 8: {
              break _L$4;
            }
            case 9: {
              break _L$3;
            }
            case 10: {
              break _L$3;
            }
            case 11: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Result", 2)];
            }
            case 12: {
              break _L$2;
            }
            case 13: {
              break _L$2;
            }
            case 14: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Color", 3)];
            }
            case 15: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Result", 3)];
            }
            case 16: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Brightness", 0)];
            }
            case 17: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Value", 0)];
            }
            case 18: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Value", 1)];
            }
            case 19: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Value", 2)];
            }
            case 20: {
              return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Value", 3)];
            }
            case 21: {
              break _L;
            }
            default: {
              break _L;
            }
          }
        }
        return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Result", 1)];
      }
      return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Result", 2)];
    }
    return [new _M0TP38bobzhang9nodegraph6shared7PortDef("Result", 2)];
  }
  return [];
}
function _M0FP38bobzhang9nodegraph6shared17port__type__label(pt) {
  switch (pt) {
    case 0: {
      return "Num";
    }
    case 1: {
      return "Str";
    }
    case 2: {
      return "Bool";
    }
    default: {
      return "Color";
    }
  }
}
function _M0FP38bobzhang9nodegraph6shared20would__create__cycle(connections, from_id, to_id) {
  const visited = [];
  const stack = [to_id];
  while (true) {
    if (stack.length > 0) {
      const current = _M0MPC16option6Option6unwrapGiE(_M0MPC15array5Array3popGiE(stack));
      if (current === from_id) {
        return true;
      }
      const already_visited = new _M0TPB8MutLocalGbE(false);
      const _bind = visited.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const v = visited[_];
          if (v === current) {
            already_visited.val = true;
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (already_visited.val) {
        continue;
      }
      _M0MPC15array5Array4pushGiE(visited, current);
      const _bind$2 = connections.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$2) {
          const conn = connections[_];
          if (conn.from_node_id === current) {
            _M0MPC15array5Array4pushGiE(stack, conn.to_node_id);
          }
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP38bobzhang9nodegraph6shared20validate__connection(graph, from_node_id, from_port, to_node_id, to_port) {
  if (from_node_id === to_node_id) {
    return "Cannot connect a node to itself";
  }
  const from_node = new _M0TPB8MutLocalGORP38bobzhang9nodegraph6shared4NodeE(undefined);
  const to_node = new _M0TPB8MutLocalGORP38bobzhang9nodegraph6shared4NodeE(undefined);
  const _bind = graph.nodes;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const n = _bind[_];
      if (n.id === from_node_id) {
        from_node.val = n;
      }
      if (n.id === to_node_id) {
        to_node.val = n;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let from_n;
  const _bind$3 = from_node.val;
  if (_bind$3 === undefined) {
    return "Source node not found";
  } else {
    const _Some = _bind$3;
    const _n = _Some;
    from_n = _n;
  }
  let to_n;
  const _bind$4 = to_node.val;
  if (_bind$4 === undefined) {
    return "Target node not found";
  } else {
    const _Some = _bind$4;
    const _n = _Some;
    to_n = _n;
  }
  const out_ports = _M0FP38bobzhang9nodegraph6shared13output__ports(from_n.kind);
  if (from_port < 0 || from_port >= out_ports.length) {
    return "Invalid output port index";
  }
  const in_ports = _M0FP38bobzhang9nodegraph6shared12input__ports(to_n.kind);
  if (to_port < 0 || to_port >= in_ports.length) {
    return "Invalid input port index";
  }
  const from_type = _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(out_ports, from_port).port_type;
  const to_type = _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(in_ports, to_port).port_type;
  if (!_M0FP38bobzhang9nodegraph6shared17types__compatible(from_type, to_type)) {
    return `Type mismatch: ${_M0IPC16string6StringPB4Show10to__string(_M0FP38bobzhang9nodegraph6shared17port__type__label(from_type))} → ${_M0IPC16string6StringPB4Show10to__string(_M0FP38bobzhang9nodegraph6shared17port__type__label(to_type))}`;
  }
  const _bind$5 = graph.connections;
  const _bind$6 = _bind$5.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$6) {
      const c = _bind$5[_];
      if (c.to_node_id === to_node_id && c.to_port === to_port) {
        return "Input port already connected";
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (_M0FP38bobzhang9nodegraph6shared20would__create__cycle(graph.connections, from_node_id, to_node_id)) {
    return "Connection would create a cycle";
  }
  return undefined;
}
function _M0FP38bobzhang9nodegraph6shared21validate__graph__name(name) {
  return name.length > 0 && name.length <= 100;
}
function _M0FP38bobzhang9nodegraph6shared10api__graph(id) {
  return `/api/graphs/${_M0IP016_24default__implPB4Show10to__stringGiE(id)}`;
}
function _M0FP38bobzhang9nodegraph6shared17api__graph__nodes(id) {
  return `/api/graphs/${_M0IP016_24default__implPB4Show10to__stringGiE(id)}/nodes`;
}
function _M0FP38bobzhang9nodegraph6shared16api__graph__node(graph_id, node_id) {
  return `/api/graphs/${_M0IP016_24default__implPB4Show10to__stringGiE(graph_id)}/nodes/${_M0IP016_24default__implPB4Show10to__stringGiE(node_id)}`;
}
function _M0FP38bobzhang9nodegraph6shared23api__graph__connections(id) {
  return `/api/graphs/${_M0IP016_24default__implPB4Show10to__stringGiE(id)}/connections`;
}
function _M0FP38bobzhang9nodegraph6shared22api__graph__connection(graph_id, conn_id) {
  return `/api/graphs/${_M0IP016_24default__implPB4Show10to__stringGiE(graph_id)}/connections/${_M0IP016_24default__implPB4Show10to__stringGiE(conn_id)}`;
}
function _M0FP38bobzhang9nodegraph6shared20api__graph__evaluate(id) {
  return `/api/graphs/${_M0IP016_24default__implPB4Show10to__stringGiE(id)}/evaluate`;
}
function _M0FP38bobzhang9nodegraph6shared11node__label(kind) {
  switch (kind) {
    case 0: {
      return "Add";
    }
    case 1: {
      return "Subtract";
    }
    case 2: {
      return "Multiply";
    }
    case 3: {
      return "Divide";
    }
    case 4: {
      return "Abs";
    }
    case 5: {
      return "Concat";
    }
    case 6: {
      return "Length";
    }
    case 7: {
      return "Upper";
    }
    case 8: {
      return "Lower";
    }
    case 9: {
      return "AND";
    }
    case 10: {
      return "OR";
    }
    case 11: {
      return "NOT";
    }
    case 12: {
      return "A > B";
    }
    case 13: {
      return "A = B";
    }
    case 14: {
      return "RGB";
    }
    case 15: {
      return "Mix";
    }
    case 16: {
      return "Brightness";
    }
    case 17: {
      return "Number";
    }
    case 18: {
      return "String";
    }
    case 19: {
      return "Bool";
    }
    case 20: {
      return "Color";
    }
    case 21: {
      return "Display #";
    }
    default: {
      return "Display T";
    }
  }
}
function _M0FP38bobzhang9nodegraph6shared14node__category(kind) {
  switch (kind) {
    case 0: {
      return "math";
    }
    case 1: {
      return "math";
    }
    case 2: {
      return "math";
    }
    case 3: {
      return "math";
    }
    case 4: {
      return "math";
    }
    case 5: {
      return "string";
    }
    case 6: {
      return "string";
    }
    case 7: {
      return "string";
    }
    case 8: {
      return "string";
    }
    case 9: {
      return "logic";
    }
    case 10: {
      return "logic";
    }
    case 11: {
      return "logic";
    }
    case 12: {
      return "logic";
    }
    case 13: {
      return "logic";
    }
    case 14: {
      return "color";
    }
    case 15: {
      return "color";
    }
    case 16: {
      return "color";
    }
    case 17: {
      return "constant";
    }
    case 18: {
      return "constant";
    }
    case 19: {
      return "constant";
    }
    case 20: {
      return "constant";
    }
    case 21: {
      return "display";
    }
    default: {
      return "display";
    }
  }
}
function _M0FP38bobzhang9nodegraph6shared17port__type__color(pt) {
  switch (pt) {
    case 0: {
      return "#4CAF50";
    }
    case 1: {
      return "#FF9800";
    }
    case 2: {
      return "#2196F3";
    }
    default: {
      return "#E91E63";
    }
  }
}
function _M0FP38bobzhang9nodegraph6shared16kind__to__string(kind) {
  switch (kind) {
    case 0: {
      return "MathAdd";
    }
    case 1: {
      return "MathSubtract";
    }
    case 2: {
      return "MathMultiply";
    }
    case 3: {
      return "MathDivide";
    }
    case 4: {
      return "MathAbs";
    }
    case 5: {
      return "StringConcat";
    }
    case 6: {
      return "StringLength";
    }
    case 7: {
      return "StringUpper";
    }
    case 8: {
      return "StringLower";
    }
    case 9: {
      return "LogicAnd";
    }
    case 10: {
      return "LogicOr";
    }
    case 11: {
      return "LogicNot";
    }
    case 12: {
      return "LogicGreaterThan";
    }
    case 13: {
      return "LogicEquals";
    }
    case 14: {
      return "ColorRGB";
    }
    case 15: {
      return "ColorMix";
    }
    case 16: {
      return "ColorBrightness";
    }
    case 17: {
      return "ConstNumber";
    }
    case 18: {
      return "ConstString";
    }
    case 19: {
      return "ConstBool";
    }
    case 20: {
      return "ConstColor";
    }
    case 21: {
      return "DisplayNumber";
    }
    default: {
      return "DisplayText";
    }
  }
}
function _M0FP38bobzhang9nodegraph6shared18get__node__outputs(result, node_id) {
  const _bind = result.node_outputs;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const out = _bind[_];
      let id;
      let vals;
      _L: {
        const _id = out._0;
        const _vals = out._1;
        id = _id;
        vals = _vals;
        break _L;
      }
      if (id === node_id) {
        return vals;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return [];
}
function _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGsE(value) {
  return value;
}
function _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGRP319moonbit_2dcommunity7rabbita3dom4NodeE(value) {
  return value;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Optional13is__undefinedGsE(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value13is__undefined(self);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Optional6unwrapGsE(self) {
  if (_M0MP319moonbit_2dcommunity7rabbita2js8Optional13is__undefinedGsE(self)) {
    _M0FPB5abortGuE("Cannot unwrap an undefined value", "@moonbit-community/rabbita/js:optional.mbt:26:5-26:46");
  }
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Optional10to__optionGsE(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value13is__undefined(self) ? undefined : _M0MP319moonbit_2dcommunity7rabbita2js8Optional6unwrapGsE(self);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable8is__nullGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null(self);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  if (_M0MP319moonbit_2dcommunity7rabbita2js8Nullable8is__nullGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self)) {
    _M0FPB5abortGuE("Cannot unwrap a null value", "@moonbit-community/rabbita/js:null.mbt:22:5-22:40");
  }
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  return !_M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null(self) ? new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4Some(_M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self)) : _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None__;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value4null();
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGsE(value) {
  return _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(_M0MPC16option6Option3mapGsRP319moonbit_2dcommunity7rabbita2js5ValueE(value, _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGsE), _M0MP319moonbit_2dcommunity7rabbita2js5Value4null);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGRP319moonbit_2dcommunity7rabbita3dom4NodeE(value) {
  return _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(_M0MPC16option6Option3mapGRP319moonbit_2dcommunity7rabbita3dom4NodeRP319moonbit_2dcommunity7rabbita2js5ValueE(value, _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGRP319moonbit_2dcommunity7rabbita3dom4NodeE), _M0MP319moonbit_2dcommunity7rabbita2js5Value4null);
}
function _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(a) {
  return a;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom10get__style(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode16set__node__valueGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, v) {
  _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__set__node__value(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), v);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__next__sibling(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode22get__previous__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__previous__sibling(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom17ffi__parent__node(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom17ffi__parent__node(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(s, child) {
  _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__append__child(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), child);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, child) {
  _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__remove__child(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), child);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, value, before) {
  _M0FP319moonbit_2dcommunity7rabbita3dom14insert__before(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), value, before);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(s, value, before) {
  _M0FP319moonbit_2dcommunity7rabbita3dom14insert__before(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), value, before);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, other) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom19ffi__is__same__node(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), other);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__x(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__y(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__ctrl__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__ctrl__key(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__meta__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__meta__key(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement17as__html__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__html__element__get__style(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement17as__html__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s));
}
function _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE(exception) {
  _M0FP319moonbit_2dcommunity7rabbita3dom12console__log(exception);
  return $panic();
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, type_, callback) {
  _M0FP319moonbit_2dcommunity7rabbita3dom25ffi__add__event__listener(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), type_, callback);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom16ffi__to__element(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__to__html__element(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget24to__html__input__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom29ffi__to__html__input__element(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget25to__html__select__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__to__html__select__element(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__svg__element(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom7UIEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__event__target(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__event__target(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15current__targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__event__current__target(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16prevent__defaultGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__event__prevent__default(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent9as__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent9as__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent13to__ui__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__to__ui__event(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__mouse__event(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent19to__keyboard__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__to__keyboard__event(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
  const y = _lhs;
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(y);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, attr, value) {
  _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__element__set__attribute(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), attr, value);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17remove__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, attr) {
  _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__remove__attribute(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), attr);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, prop, value) {
  _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__set__property(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), prop, value);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13get__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, prop) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__get__property(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), prop);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16remove__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, prop) {
  _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__remove__property(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), prop);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, html) {
  _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__set__inner__html(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s), html);
}
function _M0MP319moonbit_2dcommunity7rabbita3dom8Document19create__element__ns(self, namespace_uri, qualified_name, on_namespace_error$46$opt, on_invalid_character_error$46$opt) {
  let on_namespace_error;
  if (on_namespace_error$46$opt === undefined) {
    on_namespace_error = _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE;
  } else {
    const _Some = on_namespace_error$46$opt;
    on_namespace_error = _Some;
  }
  let on_invalid_character_error;
  if (on_invalid_character_error$46$opt === undefined) {
    on_invalid_character_error = _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE;
  } else {
    const _Some = on_invalid_character_error$46$opt;
    on_invalid_character_error = _Some;
  }
  return _M0MP319moonbit_2dcommunity7rabbita3dom8Document27create__element__ns_2einner(self, namespace_uri, qualified_name, on_namespace_error, on_invalid_character_error);
}
function _M0IP319moonbit_2dcommunity7rabbita3url8ProtocolPB2Eq5equal(_x_111, _x_112) {
  let _x0_113;
  let _y0_114;
  _L: {
    switch (_x_111.$tag) {
      case 0: {
        if (_x_112.$tag === 0) {
          return true;
        } else {
          return false;
        }
      }
      case 1: {
        if (_x_112.$tag === 1) {
          return true;
        } else {
          return false;
        }
      }
      default: {
        const _Other = _x_111;
        const _$42$x0_113 = _Other._0;
        if (_x_112.$tag === 2) {
          const _Other$2 = _x_112;
          const _$42$y0_114 = _Other$2._0;
          _x0_113 = _$42$x0_113;
          _y0_114 = _$42$y0_114;
          break _L;
        } else {
          return false;
        }
      }
    }
  }
  return _x0_113 === _y0_114;
}
function _M0FP319moonbit_2dcommunity7rabbita3url5parse(url) {
  let protocol;
  let remain;
  _L: {
    let _bind;
    let remain$2;
    _L$2: {
      _L$3: {
        let x;
        let remain$3;
        _L$4: {
          _L$5: {
            let remain$4;
            _L$6: {
              _L$7: {
                let remain$5;
                _L$8: {
                  _L$9: {
                    const _bind$2 = "://";
                    const _bind$3 = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string6String5split(url, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
                    if (_bind$3.length === 2) {
                      const _x = _bind$3[0];
                      if (_M0MPC16string6String24char__length__eq_2einner(_x.str, 4, _x.start, _x.end)) {
                        const _x$2 = _M0MPC16string6String16unsafe__char__at(_x.str, _M0MPC16string6String29offset__of__nth__char_2einner(_x.str, 0, _x.start, _x.end));
                        if (_x$2 === 104) {
                          const _x$3 = _M0MPC16string6String16unsafe__char__at(_x.str, _M0MPC16string6String29offset__of__nth__char_2einner(_x.str, 1, _x.start, _x.end));
                          if (_x$3 === 116) {
                            const _x$4 = _M0MPC16string6String16unsafe__char__at(_x.str, _M0MPC16string6String29offset__of__nth__char_2einner(_x.str, 2, _x.start, _x.end));
                            if (_x$4 === 116) {
                              const _x$5 = _M0MPC16string6String16unsafe__char__at(_x.str, _M0MPC16string6String29offset__of__nth__char_2einner(_x.str, 3, _x.start, _x.end));
                              if (_x$5 === 112) {
                                const _remain = _bind$3[1];
                                remain$5 = _remain;
                                break _L$9;
                              } else {
                                const _remain = _bind$3[1];
                                x = _x;
                                remain$3 = _remain;
                                break _L$5;
                              }
                            } else {
                              const _remain = _bind$3[1];
                              x = _x;
                              remain$3 = _remain;
                              break _L$5;
                            }
                          } else {
                            const _remain = _bind$3[1];
                            x = _x;
                            remain$3 = _remain;
                            break _L$5;
                          }
                        } else {
                          const _remain = _bind$3[1];
                          x = _x;
                          remain$3 = _remain;
                          break _L$5;
                        }
                      } else {
                        if (_M0MPC16string6String24char__length__eq_2einner(_x.str, 5, _x.start, _x.end)) {
                          const _x$2 = _M0MPC16string6String16unsafe__char__at(_x.str, _M0MPC16string6String29offset__of__nth__char_2einner(_x.str, 0, _x.start, _x.end));
                          if (_x$2 === 104) {
                            const _x$3 = _M0MPC16string6String16unsafe__char__at(_x.str, _M0MPC16string6String29offset__of__nth__char_2einner(_x.str, 1, _x.start, _x.end));
                            if (_x$3 === 116) {
                              const _x$4 = _M0MPC16string6String16unsafe__char__at(_x.str, _M0MPC16string6String29offset__of__nth__char_2einner(_x.str, 2, _x.start, _x.end));
                              if (_x$4 === 116) {
                                const _x$5 = _M0MPC16string6String16unsafe__char__at(_x.str, _M0MPC16string6String29offset__of__nth__char_2einner(_x.str, 3, _x.start, _x.end));
                                if (_x$5 === 112) {
                                  const _x$6 = _M0MPC16string6String16unsafe__char__at(_x.str, _M0MPC16string6String29offset__of__nth__char_2einner(_x.str, 4, _x.start, _x.end));
                                  if (_x$6 === 115) {
                                    const _remain = _bind$3[1];
                                    remain$4 = _remain;
                                    break _L$7;
                                  } else {
                                    const _remain = _bind$3[1];
                                    x = _x;
                                    remain$3 = _remain;
                                    break _L$5;
                                  }
                                } else {
                                  const _remain = _bind$3[1];
                                  x = _x;
                                  remain$3 = _remain;
                                  break _L$5;
                                }
                              } else {
                                const _remain = _bind$3[1];
                                x = _x;
                                remain$3 = _remain;
                                break _L$5;
                              }
                            } else {
                              const _remain = _bind$3[1];
                              x = _x;
                              remain$3 = _remain;
                              break _L$5;
                            }
                          } else {
                            const _remain = _bind$3[1];
                            x = _x;
                            remain$3 = _remain;
                            break _L$5;
                          }
                        } else {
                          const _remain = _bind$3[1];
                          x = _x;
                          remain$3 = _remain;
                          break _L$5;
                        }
                      }
                    } else {
                      if (_bind$3.length === 1) {
                        const _remain = _bind$3[0];
                        remain$2 = _remain;
                        break _L$3;
                      } else {
                        const _bind$4 = _M0FPB4failGUOsORPC16string10StringViewEE("Invalid protocol", "@moonbit-community/rabbita/url:url.mbt:66:10-66:34");
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          _bind = _ok._0;
                        } else {
                          return _bind$4;
                        }
                      }
                    }
                    break _L$8;
                  }
                  _bind = { _0: _M0DTP319moonbit_2dcommunity7rabbita3url8Protocol4Http__, _1: remain$5 };
                }
                break _L$6;
              }
              _bind = { _0: _M0DTP319moonbit_2dcommunity7rabbita3url8Protocol5Https__, _1: remain$4 };
            }
            break _L$4;
          }
          _bind = { _0: new _M0DTP319moonbit_2dcommunity7rabbita3url8Protocol5Other(_M0IPC16string10StringViewPB4Show10to__string(x)), _1: remain$3 };
        }
        break _L$2;
      }
      _bind = { _0: new _M0DTP319moonbit_2dcommunity7rabbita3url8Protocol5Other(""), _1: remain$2 };
    }
    const _protocol = _bind._0;
    const _remain = _bind._1;
    protocol = _protocol;
    remain = _remain;
    break _L;
  }
  let mid;
  let query_and_fragment;
  _L$2: {
    let _bind;
    let mid$2;
    _L$3: {
      _L$4: {
        let mid$3;
        let remain$2;
        _L$5: {
          _L$6: {
            const _bind$2 = "?";
            const _bind$3 = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(remain, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
            if (_bind$3.length === 2) {
              const _mid = _bind$3[0];
              const _remain = _bind$3[1];
              mid$3 = _mid;
              remain$2 = _remain;
              break _L$6;
            } else {
              if (_bind$3.length === 1) {
                const _mid = _bind$3[0];
                mid$2 = _mid;
                break _L$4;
              } else {
                const _bind$4 = _M0FPB4failGUOsORPC16string10StringViewEE("Invalid host", "@moonbit-community/rabbita/url:url.mbt:71:10-71:30");
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind = _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
            break _L$5;
          }
          _bind = { _0: mid$3, _1: remain$2 };
        }
        break _L$3;
      }
      const _bind$2 = "";
      _bind = { _0: mid$2, _1: new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length) };
    }
    const _mid = _bind._0;
    const _query_and_fragment = _bind._1;
    mid = _mid;
    query_and_fragment = _query_and_fragment;
    break _L$2;
  }
  let mid_part;
  let fragment1;
  _L$3: {
    let _bind;
    let mid$2;
    _L$4: {
      _L$5: {
        let mid$3;
        let fragment;
        _L$6: {
          _L$7: {
            const _bind$2 = "#";
            const _bind$3 = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(mid, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
            if (_bind$3.length === 2) {
              const _mid = _bind$3[0];
              const _fragment = _bind$3[1];
              mid$3 = _mid;
              fragment = _fragment;
              break _L$7;
            } else {
              if (_bind$3.length === 1) {
                const _mid = _bind$3[0];
                mid$2 = _mid;
                break _L$5;
              } else {
                const _bind$4 = _M0FPB4failGUOsORPC16string10StringViewEE("Invalid fragment", "@moonbit-community/rabbita/url:url.mbt:76:10-76:34");
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind = _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
            break _L$6;
          }
          _bind = { _0: mid$3, _1: fragment };
        }
        break _L$4;
      }
      _bind = { _0: mid$2, _1: undefined };
    }
    const _mid_part = _bind._0;
    const _fragment1 = _bind._1;
    mid_part = _mid_part;
    fragment1 = _fragment1;
    break _L$3;
  }
  let mid$2;
  let path;
  _L$4: {
    let _bind;
    let paths;
    let mid$3;
    _L$5: {
      _L$6: {
        let mid$4;
        _L$7: {
          _L$8: {
            const _bind$2 = "/";
            const _bind$3 = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(mid_part, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
            if (_bind$3.length === 1) {
              const _mid = _bind$3[0];
              mid$4 = _mid;
              break _L$8;
            } else {
              if (_bind$3.length >= 1) {
                const _mid = _bind$3[0];
                const _x = _M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(_bind$3, 1, _bind$3.length);
                paths = _x;
                mid$3 = _mid;
                break _L$6;
              } else {
                const _bind$4 = _M0FPB4failGUOsORPC16string10StringViewEE("Invalid host", "@moonbit-community/rabbita/url:url.mbt:81:10-81:30");
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind = _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
            break _L$7;
          }
          _bind = { _0: mid$4, _1: "" };
        }
        break _L$5;
      }
      _bind = { _0: mid$3, _1: _M0MPB4Iter4join(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC15array9ArrayView4iterGRPC16string10StringViewE(paths), _M0IPC16string10StringViewPB4Show10to__string), "/") };
    }
    const _mid = _bind._0;
    const _path = _bind._1;
    mid$2 = _mid;
    path = _path;
    break _L$4;
  }
  let host;
  let port;
  _L$5: {
    let _bind;
    let host$2;
    _L$6: {
      _L$7: {
        let host$3;
        let port$2;
        _L$8: {
          _L$9: {
            const _bind$2 = ":";
            const _bind$3 = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(mid$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
            if (_bind$3.length === 2) {
              const _host = _bind$3[0];
              const _port = _bind$3[1];
              host$3 = _host;
              port$2 = _port;
              break _L$9;
            } else {
              if (_bind$3.length === 1) {
                const _host = _bind$3[0];
                host$2 = _host;
                break _L$7;
              } else {
                const _bind$4 = _M0FPB4failGUOsORPC16string10StringViewEE("Invalid host", "@moonbit-community/rabbita/url:url.mbt:93:10-93:30");
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind = _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
            break _L$8;
          }
          let port$3;
          let _try_err;
          _L$10: {
            _L$11: {
              const _bind$2 = _M0IPC16string10StringViewPB4Show10to__string(port$2);
              const _bind$3 = _M0FPC17strconv18parse__int_2einner(new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length), 0);
              let _bind$4;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _bind$4 = _ok._0;
              } else {
                const _err = _bind$3;
                _try_err = _err._0;
                break _L$11;
              }
              const number = _bind$4;
              port$3 = number;
              break _L$10;
            }
            port$3 = undefined;
          }
          _bind = { _0: _M0IPC16string10StringViewPB4Show10to__string(host$3), _1: port$3 };
        }
        break _L$6;
      }
      _bind = { _0: _M0IPC16string10StringViewPB4Show10to__string(host$2), _1: undefined };
    }
    const _host = _bind._0;
    const _port = _bind._1;
    host = _host;
    port = _port;
    break _L$5;
  }
  let query;
  let fragment2;
  _L$6: {
    let _bind;
    let query$2;
    _L$7: {
      _L$8: {
        let query$3;
        let fragment;
        _L$9: {
          _L$10: {
            const _bind$2 = "#";
            const _bind$3 = _M0MPB4Iter9to__arrayGRPC16string10StringViewE(_M0MPC16string10StringView5split(query_and_fragment, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
            if (_bind$3.length === 2) {
              const _query = _bind$3[0];
              const _fragment = _bind$3[1];
              query$3 = _query;
              fragment = _fragment;
              break _L$10;
            } else {
              if (_bind$3.length === 1) {
                const _query = _bind$3[0];
                query$2 = _query;
                break _L$8;
              } else {
                if (_bind$3.length === 0) {
                  _bind = { _0: undefined, _1: undefined };
                } else {
                  const _bind$4 = _M0FPB4failGUOsORPC16string10StringViewEE("Invalid query", "@moonbit-community/rabbita/url:url.mbt:104:10-104:31");
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _bind = _ok._0;
                  } else {
                    return _bind$4;
                  }
                }
              }
            }
            break _L$9;
          }
          _bind = { _0: _M0IPC16string10StringViewPB4Show10to__string(query$3), _1: fragment };
        }
        break _L$7;
      }
      _bind = _M0MPC16string10StringView9is__empty(query$2) ? { _0: undefined, _1: undefined } : { _0: _M0IPC16string10StringViewPB4Show10to__string(query$2), _1: undefined };
    }
    const _query = _bind._0;
    const _fragment2 = _bind._1;
    query = _query;
    fragment2 = _fragment2;
    break _L$6;
  }
  let fragment;
  let f;
  _L$7: {
    _L$8: {
      let f$2;
      _L$9: {
        _L$10: {
          let f1;
          let f2;
          _L$11: {
            _L$12: {
              if (fragment1 === undefined) {
                if (fragment2 === undefined) {
                  fragment = undefined;
                } else {
                  const _Some = fragment2;
                  const _f = _Some;
                  f = _f;
                  break _L$8;
                }
              } else {
                const _Some = fragment1;
                const _f1 = _Some;
                if (fragment2 === undefined) {
                  f$2 = _f1;
                  break _L$10;
                } else {
                  const _Some$2 = fragment2;
                  const _f2 = _Some$2;
                  f1 = _f1;
                  f2 = _f2;
                  break _L$12;
                }
              }
              break _L$11;
            }
            fragment = `${_M0IPC16string10StringViewPB4Show10to__string(f1)}#${_M0IPC16string10StringViewPB4Show10to__string(f2)}`;
          }
          break _L$9;
        }
        fragment = _M0IPC16string10StringViewPB4Show10to__string(f$2);
      }
      break _L$7;
    }
    fragment = _M0IPC16string10StringViewPB4Show10to__string(f);
  }
  return new _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3url3UrlRPC15error5ErrorE2Ok(new _M0TP319moonbit_2dcommunity7rabbita3url3Url(protocol, host, port, path, query, fragment));
}
function _M0IP319moonbit_2dcommunity7rabbita7variant7VariantPB2Eq5equal(_x_33, _x_34) {
  let _x0_41;
  let _y0_42;
  _L: {
    let _x0_39;
    let _y0_40;
    _L$2: {
      let _x0_37;
      let _y0_38;
      _L$3: {
        let _x0_35;
        let _y0_36;
        _L$4: {
          switch (_x_33.$tag) {
            case 0: {
              const _Boolean = _x_33;
              const _$42$x0_35 = _Boolean._0;
              if (_x_34.$tag === 0) {
                const _Boolean$2 = _x_34;
                const _$42$y0_36 = _Boolean$2._0;
                _x0_35 = _$42$x0_35;
                _y0_36 = _$42$y0_36;
                break _L$4;
              } else {
                return false;
              }
            }
            case 1: {
              const _Integer = _x_33;
              const _$42$x0_37 = _Integer._0;
              if (_x_34.$tag === 1) {
                const _Integer$2 = _x_34;
                const _$42$y0_38 = _Integer$2._0;
                _x0_37 = _$42$x0_37;
                _y0_38 = _$42$y0_38;
                break _L$3;
              } else {
                return false;
              }
            }
            case 2: {
              const _Floating = _x_33;
              const _$42$x0_39 = _Floating._0;
              if (_x_34.$tag === 2) {
                const _Floating$2 = _x_34;
                const _$42$y0_40 = _Floating$2._0;
                _x0_39 = _$42$x0_39;
                _y0_40 = _$42$y0_40;
                break _L$2;
              } else {
                return false;
              }
            }
            default: {
              const _String = _x_33;
              const _$42$x0_41 = _String._0;
              if (_x_34.$tag === 3) {
                const _String$2 = _x_34;
                const _$42$y0_42 = _String$2._0;
                _x0_41 = _$42$x0_41;
                _y0_42 = _$42$y0_42;
                break _L;
              } else {
                return false;
              }
            }
          }
        }
        return _x0_35 === _y0_36;
      }
      return _x0_37 === _y0_38;
    }
    return _x0_39 === _y0_40;
  }
  return _x0_41 === _y0_42;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdPB2Eq5equal(_x_388, _x_389) {
  return _x_388 === _x_389;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdPB4Hash13hash__combine(_x_384, _x_385) {
  _M0IPC13int3IntPB4Hash13hash__combine(_x_384, _x_385);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime2IdPB2Eq5equal(_x_370, _x_371) {
  return _x_370 === _x_371;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime2IdPB4Hash13hash__combine(_x_366, _x_367) {
  _M0IPC13int3IntPB4Hash13hash__combine(_x_366, _x_367);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8next__id() {
  const id = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime17global__id__count.val;
  _M0FP419moonbit_2dcommunity7rabbita8internal7runtime17global__id__count.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime17global__id__count.val + 1 | 0;
  return id;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime6InstId3new() {
  return _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8next__id();
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime8Instance3new(cell) {
  const _tmp = new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime4Link(undefined);
  const _bind = [];
  const _tmp$2 = _M0MPB3Map11from__arrayGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(new _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(_bind, 0, 0));
  const _bind$2 = [];
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime8Instance(cell, undefined, _tmp, _tmp$2, _M0MPB3Map11from__arrayGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(new _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(_bind$2, 0, 0)), _M0MP419moonbit_2dcommunity7rabbita8internal7runtime6InstId3new());
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode20scan__direct__childs(s) {
  const tmp = [s];
  const result = [];
  while (true) {
    let inode;
    _L: {
      const _bind = _M0MPC15array5Array3popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(tmp);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _inode = _Some;
        inode = _inode;
        break _L;
      }
    }
    let inst;
    _L$2: {
      _L$3: {
        let xs;
        _L$4: {
          _L$5: {
            let cs;
            _L$6: {
              _L$7: {
                switch (inode.$tag) {
                  case 1: {
                    break;
                  }
                  case 0: {
                    const _Elem = inode;
                    const _cs = _Elem._2;
                    cs = _cs;
                    break _L$7;
                  }
                  case 2: {
                    const _Frag = inode;
                    const _xs = _Frag._0;
                    xs = _xs;
                    break _L$5;
                  }
                  default: {
                    const _Slot = inode;
                    const _inst = _Slot._0;
                    inst = _inst;
                    break _L$3;
                  }
                }
                break _L$6;
              }
              let arr;
              _L$8: {
                _L$9: {
                  let mp;
                  _L$10: {
                    if (cs.$tag === 1) {
                      const _Map = cs;
                      const _mp = _Map._0;
                      mp = _mp;
                      break _L$10;
                    } else {
                      const _Array = cs;
                      const _arr = _Array._0;
                      arr = _arr;
                      break _L$9;
                    }
                  }
                  _M0MPC15array5Array10push__iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(tmp, _M0MPB3Map6valuesGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(mp));
                  break _L$8;
                }
                _M0MPC15array5Array10push__iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(tmp, _M0MPC15array5Array4iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(arr));
              }
            }
            break _L$4;
          }
          _M0MPC15array5Array10push__iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(tmp, _M0MPC15array5Array4iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(xs));
        }
        break _L$2;
      }
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(result, inst.link);
    }
    continue;
  }
  return result;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode5start(s) {
  let s$2;
  _L: {
    let e;
    _L$2: {
      switch (s.$tag) {
        case 0: {
          const _Elem = s;
          const _e = _Elem._4;
          e = _e;
          break _L$2;
        }
        case 1: {
          const _Text = s;
          const _e$2 = _Text._1;
          e = _e$2;
          break _L$2;
        }
        case 2: {
          const _Frag = s;
          const _s = _Frag._1;
          s$2 = _s;
          break _L;
        }
        default: {
          const _Slot = s;
          const _s$2 = _Slot._1;
          s$2 = _s$2;
          break _L;
        }
      }
    }
    return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e);
  }
  return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s$2);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode3end(s) {
  let e;
  _L: {
    let e$2;
    _L$2: {
      switch (s.$tag) {
        case 0: {
          const _Elem = s;
          const _e = _Elem._4;
          e$2 = _e;
          break _L$2;
        }
        case 1: {
          const _Text = s;
          const _e$2 = _Text._1;
          e$2 = _e$2;
          break _L$2;
        }
        case 2: {
          const _Frag = s;
          const _e$3 = _Frag._2;
          e = _e$3;
          break _L;
        }
        default: {
          const _Slot = s;
          const _e$4 = _Slot._2;
          e = _e$4;
          break _L;
        }
      }
    }
    return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e$2);
  }
  return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(e);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime4Link6detach(s) {
  s.val = undefined;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags2id(s) {
  return s.id;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox19drop__live__subtree(self, root) {
  const stack = [root];
  while (true) {
    let inst;
    _L: {
      const _bind = _M0MPC15array5Array3popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(stack);
      if (_bind === undefined) {
        return;
      } else {
        const _Some = _bind;
        const _inst = _Some;
        inst = _inst;
        break _L;
      }
    }
    const _tmp = inst.cell;
    const flags = _tmp.method_table.method_2(_tmp.self);
    flags.attach_count = flags.attach_count - 1 | 0;
    let insts;
    _L$2: {
      _L$3: {
        const _bind = _M0MPB3Map3getGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self.live_map, _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags2id(flags));
        if (_bind === undefined) {
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _insts = _x._1;
          insts = _insts;
          break _L$3;
        }
        break _L$2;
      }
      _M0MPB3Map6removeGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(insts, inst.id);
      if (_M0MPB3Map9is__emptyGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(insts)) {
        _M0MPB3Map6removeGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self.live_map, _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags2id(flags));
        _M0MPC13set3Set6removeGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self.dirty_set, _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags2id(flags));
      }
    }
    const _it = _M0MPB3Map5iter2GRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(inst.old_childs);
    while (true) {
      let link;
      _L$3: {
        const _bind = _M0MPB5Iter24nextGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(_it);
        if (_bind === undefined) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _link = _x._1;
          link = _link;
          break _L$3;
        }
      }
      let c;
      _L$4: {
        _L$5: {
          const _bind = link.val;
          if (_bind === undefined) {
          } else {
            const _Some = _bind;
            const _c = _Some;
            c = _c;
            break _L$5;
          }
          break _L$4;
        }
        _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(stack, c);
      }
      continue;
    }
    const _it$2 = _M0MPB3Map5iter2GRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(inst.new_childs);
    while (true) {
      let link;
      _L$3: {
        const _bind = _M0MPB5Iter24nextGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(_it$2);
        if (_bind === undefined) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _link = _x._1;
          link = _link;
          break _L$3;
        }
      }
      let c;
      _L$4: {
        _L$5: {
          const _bind = link.val;
          if (_bind === undefined) {
          } else {
            const _Some = _bind;
            const _c = _Some;
            c = _c;
            break _L$5;
          }
          break _L$4;
        }
        _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(stack, c);
      }
      continue;
    }
    continue;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(self, sandbox, parent) {
  const _bind = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode20scan__direct__childs(self);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const link = _bind[_];
      let inst;
      _L: {
        _L$2: {
          const _bind$3 = link.val;
          if (_bind$3 === undefined) {
          } else {
            const _Some = _bind$3;
            const _inst = _Some;
            inst = _inst;
            break _L$2;
          }
          break _L;
        }
        _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox19drop__live__subtree(sandbox, inst);
      }
      _M0MP419moonbit_2dcommunity7rabbita8internal7runtime4Link6detach(link);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let e;
  let s;
  _L: {
    let e$2;
    _L$2: {
      switch (self.$tag) {
        case 0: {
          const _Elem = self;
          const _e = _Elem._4;
          e$2 = _e;
          break _L$2;
        }
        case 1: {
          const _Text = self;
          const _e$2 = _Text._1;
          e$2 = _e$2;
          break _L$2;
        }
        case 2: {
          const _Frag = self;
          const _s = _Frag._1;
          const _e$3 = _Frag._2;
          e = _e$3;
          s = _s;
          break _L;
        }
        default: {
          const _Slot = self;
          const _s$2 = _Slot._1;
          const _e$4 = _Slot._2;
          e = _e$4;
          s = _s$2;
          break _L;
        }
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e$2));
    return;
  }
  const s$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s);
  const e$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(e);
  while (true) {
    let n;
    _L$2: {
      const _bind$3 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s$2));
      if (_bind$3.$tag === 1) {
        const _Some = _bind$3;
        const _n = _Some._0;
        n = _n;
        break _L$2;
      } else {
        break;
      }
    }
    if (!_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(n, e$2)) {
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, n);
      continue;
    } else {
      break;
    }
  }
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, s$2);
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, e$2);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(x) {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGRP319moonbit_2dcommunity7rabbita3dom4NodeE(new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some(x));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode8relocate(self, parent, before) {
  let e;
  let s;
  _L: {
    let e$2;
    _L$2: {
      switch (self.$tag) {
        case 0: {
          const _Elem = self;
          const _e = _Elem._4;
          e$2 = _e;
          break _L$2;
        }
        case 1: {
          const _Text = self;
          const _e$2 = _Text._1;
          e$2 = _e$2;
          break _L$2;
        }
        case 2: {
          const _Frag = self;
          const _s = _Frag._1;
          const _e$3 = _Frag._2;
          e = _e$3;
          s = _s;
          break _L;
        }
        default: {
          const _Slot = self;
          const _s$2 = _Slot._1;
          const _e$4 = _Slot._2;
          e = _e$4;
          s = _s$2;
          break _L;
        }
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e$2), before);
    return;
  }
  let a;
  _L$2: {
    _L$3: {
      const _bind = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s));
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _a = _Some._0;
        a = _a;
        break _L$3;
      } else {
        $panic();
      }
      break _L$2;
    }
    let b;
    _L$4: {
      _L$5: {
        const _bind = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(e));
        if (_bind.$tag === 1) {
          const _Some = _bind;
          const _b = _Some._0;
          b = _b;
          break _L$5;
        } else {
          $panic();
        }
        break _L$4;
      }
      if (_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(a, b)) {
      } else {
        $panic();
      }
    }
  }
  const s$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s);
  const e$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(e);
  const anchor = new _M0TPB8MutLocalGRP319moonbit_2dcommunity7rabbita2js8NullableGRP319moonbit_2dcommunity7rabbita3dom4NodeEE(before);
  while (true) {
    let n;
    _L$3: {
      const _bind = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode22get__previous__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(e$2));
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _n = _Some._0;
        n = _n;
        break _L$3;
      } else {
        break;
      }
    }
    if (!_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(n, s$2)) {
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, n, anchor.val);
      anchor.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(n);
      continue;
    } else {
      break;
    }
  }
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, e$2, before);
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, s$2, anchor.val);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE();
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22variant__to__js__value(value) {
  let value$2;
  _L: {
    let value$3;
    _L$2: {
      let value$4;
      _L$3: {
        let value$5;
        _L$4: {
          switch (value.$tag) {
            case 3: {
              const _String = value;
              const _value = _String._0;
              value$5 = _value;
              break _L$4;
            }
            case 2: {
              const _Floating = value;
              const _value$2 = _Floating._0;
              value$4 = _value$2;
              break _L$3;
            }
            case 1: {
              const _Integer = value;
              const _value$3 = _Integer._0;
              value$3 = _value$3;
              break _L$2;
            }
            default: {
              const _Boolean = value;
              const _value$4 = _Boolean._0;
              value$2 = _value$4;
              break _L;
            }
          }
        }
        return value$5;
      }
      return value$4;
    }
    return value$3;
  }
  return value$2;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(self, sandbox, parent_inst, parent, before) {
  let childs;
  let tag;
  let properties;
  let namespace_uri;
  _L: {
    let childs$2;
    _L$2: {
      let cell;
      _L$3: {
        let s;
        _L$4: {
          switch (self.$tag) {
            case 1: {
              const _Text = self;
              const _s = _Text._0;
              s = _s;
              break _L$4;
            }
            case 3: {
              const _Slot = self;
              const _cell = _Slot._0;
              cell = _cell;
              break _L$3;
            }
            case 2: {
              const _Frag = self;
              const _childs = _Frag._0;
              childs$2 = _childs;
              break _L$2;
            }
            default: {
              const _Elem = self;
              const _tag = _Elem._0;
              const _properties = _Elem._1;
              const _childs$2 = _Elem._2;
              const _namespace_uri = _Elem._3;
              childs = _childs$2;
              tag = _tag;
              properties = _properties;
              namespace_uri = _namespace_uri;
              break _L;
            }
          }
        }
        const e = _M0MP319moonbit_2dcommunity7rabbita3dom8Document18create__text__node(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), s);
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e), before);
        return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Text(s, e);
      }
      const flags = cell.method_table.method_2(cell.self);
      flags.attach_count = flags.attach_count + 1 | 0;
      const start = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), "");
      const end = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), "");
      const fragment = _M0MP319moonbit_2dcommunity7rabbita3dom8Document26create__document__fragment(_M0FP319moonbit_2dcommunity7rabbita3dom8document());
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(start), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
      const inst = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime8Instance3new(cell);
      const inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(cell.method_table.method_1(cell.self), sandbox, inst, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
      inst.inode = inode;
      let map;
      _L$4: {
        _L$5: {
          const _bind = _M0MPB3Map3getGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(sandbox.live_map, flags.id);
          if (_bind === undefined) {
            const _tmp = sandbox.live_map;
            const _tmp$2 = flags.id;
            const _tmp$3 = inst.cell;
            const _bind$2 = [{ _0: inst.id, _1: inst }];
            _M0MPB3Map3setGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(_tmp, _tmp$2, { _0: _tmp$3, _1: _M0MPB3Map11from__arrayGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(new _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(_bind$2, 0, 1)) });
          } else {
            const _Some = _bind;
            const _x = _Some;
            const _map = _x._1;
            map = _map;
            break _L$5;
          }
          break _L$4;
        }
        _M0MPB3Map3setGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(map, inst.id, inst);
      }
      inst.link.val = inst;
      _M0MPB3Map3setGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(parent_inst.new_childs, inst.id, inst.link);
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(end), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Slot(inst, start, end);
    }
    const doc = _M0FP319moonbit_2dcommunity7rabbita3dom8document();
    const fragment = _M0MP319moonbit_2dcommunity7rabbita3dom8Document26create__document__fragment(doc);
    const start = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(doc, "start");
    const end = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(doc, "end");
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(start));
    const childs$3 = _M0MPC15array5Array3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(childs$2, (x) => _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(x, sandbox, parent_inst, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE()));
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(end));
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), before);
    return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Frag(childs$3, start, end);
  }
  const s = tag === "RABBITA_CAPTURED_LINK" ? "a" : tag;
  const doc = _M0FP319moonbit_2dcommunity7rabbita3dom8document();
  let element;
  let ns;
  _L$2: {
    _L$3: {
      if (namespace_uri === undefined) {
        element = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__element(doc, s);
      } else {
        const _Some = namespace_uri;
        const _ns = _Some;
        ns = _ns;
        break _L$3;
      }
      break _L$2;
    }
    element = _M0MP319moonbit_2dcommunity7rabbita3dom8Document19create__element__ns(doc, ns, s, undefined, undefined);
  }
  let props;
  let handlers;
  let slots;
  let attrs;
  let styles;
  _L$3: {
    const _slots = properties.slots;
    const _handlers = properties.handlers;
    const _attrs = properties.attrs;
    const _props = properties.props;
    const _styles = properties.styles;
    props = _props;
    handlers = _handlers;
    slots = _slots;
    attrs = _attrs;
    styles = _styles;
    break _L$3;
  }
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(handlers);
  while (true) {
    let e;
    let h;
    _L$4: {
      const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _e = _x._0;
        const _h = _x._1;
        e = _e;
        h = _h;
        break _L$4;
      }
    }
    const slot = _M0FPC13ref3newGRP48bobzhang9nodegraph8frontend3app5ModelE(h);
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, e, (x) => {
      const _func = slot.val;
      _func(x, { self: sandbox, method_table: _M0FP0133moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eScheduler });
    });
    _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(slots, e, slot);
    continue;
  }
  if (tag === "RABBITA_CAPTURED_LINK") {
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, "click", sandbox.captured_link_listener);
  }
  const _it$2 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(attrs);
  while (true) {
    let n;
    let val;
    _L$4: {
      const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it$2);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _n = _x._0;
        const _val = _x._1;
        n = _n;
        val = _val;
        break _L$4;
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, n, val);
    continue;
  }
  const _it$3 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(props);
  while (true) {
    let n;
    let val;
    _L$4: {
      const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it$3);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _n = _x._0;
        const _val = _x._1;
        n = _n;
        val = _val;
        break _L$4;
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, n, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22variant__to__js__value(val));
    continue;
  }
  let sheet;
  let html;
  _L$4: {
    _L$5: {
      const _bind = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _html = _Some._0;
        html = _html;
        break _L$5;
      } else {
        let svg;
        _L$6: {
          _L$7: {
            const _bind$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _svg = _Some._0;
              svg = _svg;
              break _L$7;
            } else {
              sheet = $panic();
            }
            break _L$6;
          }
          sheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(svg);
        }
      }
      break _L$4;
    }
    sheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(html);
  }
  const _it$4 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(styles);
  while (true) {
    let n;
    let val;
    _L$5: {
      const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it$4);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _n = _x._0;
        const _val = _x._1;
        n = _n;
        val = _val;
        break _L$5;
      }
    }
    _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(sheet, n, val);
    continue;
  }
  const n = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
  let childs$2;
  let mp;
  _L$5: {
    _L$6: {
      let xs;
      _L$7: {
        if (childs.$tag === 0) {
          const _Array = childs;
          const _xs = _Array._0;
          xs = _xs;
          break _L$7;
        } else {
          const _Map = childs;
          const _mp = _Map._0;
          mp = _mp;
          break _L$6;
        }
      }
      childs$2 = new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(_M0MPC15array5Array3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(xs, (x) => _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(x, sandbox, parent_inst, n, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE())));
      break _L$5;
    }
    const _bind = [];
    const imp = _M0MPB3Map11from__arrayGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(new _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(_bind, 0, 0));
    const _it$5 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(mp);
    while (true) {
      let k;
      let v;
      _L$7: {
        const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it$5);
        if (_bind$2 === undefined) {
          break;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _k = _x._0;
          const _v = _x._1;
          k = _k;
          v = _v;
          break _L$7;
        }
      }
      _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(imp, k, _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(v, sandbox, parent_inst, n, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE()));
      continue;
    }
    childs$2 = new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map(imp);
  }
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, n, before);
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Elem(tag, properties, childs$2, namespace_uri, element);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4elem(tag, props, children, namespace_uri) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Elem(tag, props, children, namespace_uri);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4text(s) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Text(s);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Props3new(attrs, props, styles, handlers) {
  const _bind = [];
  const _bind$2 = _M0MPB3Map11from__arrayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(new _M0TPB9ArrayViewGUsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEEE(_bind, 0, 0));
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Props(_bind$2, handlers, attrs, props, styles);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(src) {
  const _bind = [];
  const dst = _M0MPB3Map11from__arrayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(new _M0TPB9ArrayViewGUsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEEE(_bind, 0, 0));
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(src);
  while (true) {
    let k;
    let v;
    _L: {
      const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _k = _x._0;
        const _v = _x._1;
        k = _k;
        v = _v;
        break _L;
      }
    }
    _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(dst, k, v);
    continue;
  }
  return dst;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(src) {
  const _bind = [];
  const dst = _M0MPB3Map11from__arrayGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(new _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(_bind, 0, 0));
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(src);
  while (true) {
    let k;
    let v;
    _L: {
      const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _k = _x._0;
        const _v = _x._1;
        k = _k;
        v = _v;
        break _L;
      }
    }
    _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(dst, k, v);
    continue;
  }
  return dst;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGssE(src) {
  const _bind = [];
  const dst = _M0MPB3Map11from__arrayGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0));
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(src);
  while (true) {
    let k;
    let v;
    _L: {
      const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _k = _x._0;
        const _v = _x._1;
        k = _k;
        v = _v;
        break _L;
      }
    }
    _M0MPB3Map3setGssE(dst, k, v);
    continue;
  }
  return dst;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(src) {
  const _bind = [];
  const dst = _M0MPB3Map11from__arrayGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(_bind, 0, 0));
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(src);
  while (true) {
    let k;
    let v;
    _L: {
      const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        const _k = _x._0;
        const _v = _x._1;
        k = _k;
        v = _v;
        break _L;
      }
    }
    _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(dst, k, v);
    continue;
  }
  return dst;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Props4copy(self) {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Props(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self.slots), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self.handlers), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGssE(self.attrs), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self.props), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGssE(self.styles));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime8Children3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(c, f) {
  let mp;
  _L: {
    let arr;
    _L$2: {
      if (c.$tag === 0) {
        const _Array = c;
        const _arr = _Array._0;
        arr = _arr;
        break _L$2;
      } else {
        const _Map = c;
        const _mp = _Map._0;
        mp = _mp;
        break _L;
      }
    }
    return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(_M0MPC15array5Array3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(arr, f));
  }
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map(_M0MPB3Map3mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(mp, (_discard_, v) => f(v)));
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime11diff__props(old, new_, sandbox, parent) {
  const slots = old.slots;
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(slots);
  while (true) {
    let event;
    let slot;
    _L: {
      const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _event = _x._0;
        const _slot = _x._1;
        event = _event;
        slot = _slot;
        break _L;
      }
    }
    if (!_M0MPB3Map8containsGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(new_.handlers, event)) {
      slot.val = (_discard_, _discard_$2) => {
      };
    }
    continue;
  }
  const _it$2 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(new_.handlers);
  while (true) {
    let event;
    let handler;
    _L: {
      const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it$2);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _event = _x._0;
        const _handler = _x._1;
        event = _event;
        handler = _handler;
        break _L;
      }
    }
    let slot;
    _L$2: {
      _L$3: {
        const _bind = _M0MPB3Map3getGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(slots, event);
        if (_bind === undefined) {
          const slot$2 = _M0FPC13ref3newGRP48bobzhang9nodegraph8frontend3app5ModelE(handler);
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, event, (e) => {
            const _func = slot$2.val;
            _func(e, { self: sandbox, method_table: _M0FP0133moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eScheduler });
          });
          _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(slots, event, slot$2);
        } else {
          const _Some = _bind;
          const _slot = _Some;
          slot = _slot;
          break _L$3;
        }
        break _L$2;
      }
      slot.val = handler;
    }
    continue;
  }
  new_.slots = slots;
  const _it$3 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(old.attrs);
  while (true) {
    let k;
    _L: {
      const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it$3);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _k = _x._0;
        k = _k;
        break _L;
      }
    }
    if (!_M0MPB3Map8containsGssE(new_.attrs, k)) {
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17remove__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, k);
    }
    continue;
  }
  const _it$4 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(new_.attrs);
  while (true) {
    let k;
    let v2;
    _L: {
      const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it$4);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _k = _x._0;
        const _v2 = _x._1;
        k = _k;
        v2 = _v2;
        break _L;
      }
    }
    let v1;
    _L$2: {
      _L$3: {
        const _bind = _M0MPB3Map3getGssE(old.attrs, k);
        if (_bind === undefined) {
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, k, v2);
        } else {
          const _Some = _bind;
          const _v1 = _Some;
          v1 = _v1;
          break _L$3;
        }
        break _L$2;
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGsE(v1, v2)) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, k, v2);
      }
    }
    continue;
  }
  const _it$5 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(old.props);
  while (true) {
    let k;
    _L: {
      const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it$5);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _k = _x._0;
        k = _k;
        break _L;
      }
    }
    if (!_M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new_.props, k)) {
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16remove__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, k);
    }
    continue;
  }
  const _it$6 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(new_.props);
  while (true) {
    let k;
    let v2;
    _L: {
      const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it$6);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _k = _x._0;
        const _v2 = _x._1;
        k = _k;
        v2 = _v2;
        break _L;
      }
    }
    let v1;
    _L$2: {
      _L$3: {
        const _bind = _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(old.props, k);
        if (_bind === undefined) {
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, k, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22variant__to__js__value(v2));
        } else {
          const _Some = _bind;
          const _v1 = _Some;
          v1 = _v1;
          break _L$3;
        }
        break _L$2;
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGRP319moonbit_2dcommunity7rabbita7variant7VariantE(v1, v2)) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, k, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22variant__to__js__value(v2));
      }
    }
    continue;
  }
  let stylesheet;
  let html;
  _L: {
    _L$2: {
      const _bind = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent);
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _html = _Some._0;
        html = _html;
        break _L$2;
      } else {
        let svg;
        _L$3: {
          _L$4: {
            const _bind$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent);
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _svg = _Some._0;
              svg = _svg;
              break _L$4;
            } else {
              stylesheet = $panic();
            }
            break _L$3;
          }
          stylesheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(svg);
        }
      }
      break _L;
    }
    stylesheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(html);
  }
  const _it$7 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(old.styles);
  while (true) {
    let k;
    _L$2: {
      const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it$7);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _k = _x._0;
        k = _k;
        break _L$2;
      }
    }
    if (!_M0MPB3Map8containsGssE(new_.styles, k)) {
      _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration16remove__property(stylesheet, k);
    }
    continue;
  }
  const _it$8 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(new_.styles);
  while (true) {
    let k;
    let v2;
    _L$2: {
      const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it$8);
      if (_bind === undefined) {
        return;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _k = _x._0;
        const _v2 = _x._1;
        k = _k;
        v2 = _v2;
        break _L$2;
      }
    }
    let v1;
    _L$3: {
      _L$4: {
        const _bind = _M0MPB3Map3getGssE(old.styles, k);
        if (_bind === undefined) {
          _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(stylesheet, k, v2);
        } else {
          const _Some = _bind;
          const _v1 = _Some;
          v1 = _v1;
          break _L$4;
        }
        break _L$3;
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGsE(v1, v2)) {
        _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(stylesheet, k, v2);
      }
    }
    continue;
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(old, new_, sandbox, parent, anchor, parent_inst) {
  _L: {
    let _e;
    let inst;
    let _s;
    let c2;
    _L$2: {
      let e;
      let childs1;
      let s;
      let childs2;
      _L$3: {
        let e$2;
        let s1;
        let s2;
        _L$4: {
          let e$3;
          let childs1$2;
          let tag1;
          let props1;
          let ns1;
          let childs2$2;
          let tag2;
          let props2;
          let ns2;
          _L$5: {
            switch (old.$tag) {
              case 0: {
                const _Elem = old;
                const _tag1 = _Elem._0;
                const _props1 = _Elem._1;
                const _childs1 = _Elem._2;
                const _ns1 = _Elem._3;
                const _e$2 = _Elem._4;
                if (new_.$tag === 0) {
                  const _Elem$2 = new_;
                  const _tag2 = _Elem$2._0;
                  const _props2 = _Elem$2._1;
                  const _childs2 = _Elem$2._2;
                  const _ns2 = _Elem$2._3;
                  e$3 = _e$2;
                  childs1$2 = _childs1;
                  tag1 = _tag1;
                  props1 = _props1;
                  ns1 = _ns1;
                  childs2$2 = _childs2;
                  tag2 = _tag2;
                  props2 = _props2;
                  ns2 = _ns2;
                  break _L$5;
                } else {
                  break _L;
                }
              }
              case 1: {
                const _Text = old;
                const _s1 = _Text._0;
                const _e$3 = _Text._1;
                if (new_.$tag === 1) {
                  const _Text$2 = new_;
                  const _s2 = _Text$2._0;
                  e$2 = _e$3;
                  s1 = _s1;
                  s2 = _s2;
                  break _L$4;
                } else {
                  break _L;
                }
              }
              case 2: {
                const _Frag = old;
                const _childs1$2 = _Frag._0;
                const _s$2 = _Frag._1;
                const _e$4 = _Frag._2;
                if (new_.$tag === 2) {
                  const _Frag$2 = new_;
                  const _childs2 = _Frag$2._0;
                  e = _e$4;
                  childs1 = _childs1$2;
                  s = _s$2;
                  childs2 = _childs2;
                  break _L$3;
                } else {
                  break _L;
                }
              }
              default: {
                const _Slot = old;
                const _inst = _Slot._0;
                const __s = _Slot._1;
                const __e = _Slot._2;
                if (new_.$tag === 3) {
                  const _Slot$2 = new_;
                  const _c2 = _Slot$2._0;
                  _e = __e;
                  inst = _inst;
                  _s = __s;
                  c2 = _c2;
                  break _L$2;
                } else {
                  break _L;
                }
              }
            }
          }
          if (_M0IP016_24default__implPB2Eq10not__equalGsE(tag1, tag2) || _M0IP016_24default__implPB2Eq10not__equalGOsE(ns1, ns2)) {
            _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(old, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent));
            return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(new_, sandbox, parent_inst, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent), anchor);
          } else {
            _M0FP419moonbit_2dcommunity7rabbita8internal7runtime11diff__props(props1, props2, sandbox, e$3);
            const childs = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14diff__children(childs1$2, childs2$2, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e$3), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE(), parent_inst);
            return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Elem(tag2, props2, childs, ns2, e$3);
          }
        }
        if (_M0IP016_24default__implPB2Eq10not__equalGsE(s1, s2)) {
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode16set__node__valueGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e$2, _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGsE(s2));
        }
        return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Text(s2, e$2);
      }
      const childs = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14diff__children(new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(childs1), new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array(childs2), sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(e)), parent_inst);
      let childs$2;
      _L$4: {
        if (childs.$tag === 0) {
          const _Array = childs;
          const _childs = _Array._0;
          childs$2 = _childs;
          break _L$4;
        } else {
          return $panic();
        }
      }
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Frag(childs$2, s, e);
    }
    const _tmp = inst.cell;
    if (_M0IP016_24default__implPB2Eq10not__equalGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(_tmp.method_table.method_2(_tmp.self).id, c2.method_table.method_2(c2.self).id)) {
      _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(old, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent));
      return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(new_, sandbox, parent_inst, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent), anchor);
    } else {
      return old;
    }
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(old, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent));
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(new_, sandbox, parent_inst, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent), anchor);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14diff__children(old, new_, sandbox, parent, anchor, parent_inst) {
  _L: {
    let old$2;
    let new$2;
    _L$2: {
      let old$3;
      let new$3;
      _L$3: {
        if (old.$tag === 0) {
          const _Array = old;
          const _old = _Array._0;
          if (new_.$tag === 0) {
            const _Array$2 = new_;
            const _new = _Array$2._0;
            old$3 = _old;
            new$3 = _new;
            break _L$3;
          } else {
            break _L;
          }
        } else {
          const _Map = old;
          const _old = _Map._0;
          if (new_.$tag === 1) {
            const _Map$2 = new_;
            const _new = _Map$2._0;
            old$2 = _old;
            new$2 = _new;
            break _L$2;
          } else {
            break _L;
          }
        }
      }
      const len1 = old$3.length;
      const len2 = new$3.length;
      const before = new _M0TPB8MutLocalGRP319moonbit_2dcommunity7rabbita2js8NullableGRP319moonbit_2dcommunity7rabbita3dom4NodeEE(anchor);
      const acc = [];
      let len;
      if (len1 > len2) {
        let _tmp = len1 - 1 | 0;
        while (true) {
          const i = _tmp;
          if (i >= len2) {
            _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(_M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(old$3, i), sandbox, parent);
            _tmp = i - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        len = len2;
      } else {
        let _tmp = len2 - 1 | 0;
        while (true) {
          const i = _tmp;
          if (i >= len1) {
            const inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(_M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(new$3, i), sandbox, parent_inst, parent, before.val);
            _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(acc, inode);
            before.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode5start(inode));
            _tmp = i - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        len = len1;
      }
      const _bind = 0;
      let _tmp = len - 1 | 0;
      while (true) {
        const i = _tmp;
        if (i >= _bind) {
          const inode = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(_M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(old$3, i), _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(new$3, i), sandbox, parent, before.val, parent_inst);
          _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(acc, inode);
          before.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode5start(inode));
          _tmp = i - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(_M0MPC15array5Array3revGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(acc));
    }
    const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(old$2);
    while (true) {
      let k;
      let v1;
      _L$3: {
        const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_it);
        if (_bind === undefined) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _k = _x._0;
          const _v1 = _x._1;
          k = _k;
          v1 = _v1;
          break _L$3;
        }
      }
      if (!_M0MPB3Map8containsGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(new$2, k)) {
        _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(v1, sandbox, parent);
      }
      continue;
    }
    const order = _M0MPB3Map9to__arrayGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(new$2);
    const before = new _M0TPB8MutLocalGRP319moonbit_2dcommunity7rabbita2js8NullableGRP319moonbit_2dcommunity7rabbita3dom4NodeEE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
    const reversed = [];
    const _bind = order.length;
    const _bind$2 = 0;
    let _tmp = _bind - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= _bind$2) {
        let k;
        let v2;
        _L$3: {
          const _bind$3 = _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(order, i);
          const _k = _bind$3._0;
          const _v2 = _bind$3._1;
          k = _k;
          v2 = _v2;
          break _L$3;
        }
        let inode;
        let v1;
        _L$4: {
          _L$5: {
            const _bind$3 = _M0MPB3Map3getGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(old$2, k);
            if (_bind$3 === undefined) {
              inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(v2, sandbox, parent_inst, parent, before.val);
            } else {
              const _Some = _bind$3;
              const _v1 = _Some;
              v1 = _v1;
              break _L$5;
            }
            break _L$4;
          }
          const inode$2 = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(v1, v2, sandbox, parent, before.val, parent_inst);
          _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode8relocate(inode$2, parent, before.val);
          inode = inode$2;
        }
        _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(reversed, { _0: k, _1: inode });
        before.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode5start(inode));
        _tmp = i - 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map(_M0MPB3Map11from__arrayGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(new _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(reversed, 0, reversed.length)));
  }
  let xs;
  _L$2: {
    _L$3: {
      let xs$2;
      _L$4: {
        if (old.$tag === 1) {
          const _Map = old;
          const _xs = _Map._0;
          xs$2 = _xs;
          break _L$4;
        } else {
          const _Array = old;
          const _xs = _Array._0;
          xs = _xs;
          break _L$3;
        }
      }
      _M0MPB3Map4eachGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(xs$2, (_discard_, x) => {
        _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(x, sandbox, parent);
      });
      break _L$2;
    }
    _M0MPC15array5Array4eachGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(xs, (x) => {
      _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(x, sandbox, parent);
    });
  }
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime8Children3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(new_, (y) => _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(y, sandbox, parent_inst, parent, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE()));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox5flush(self) {
  if (!self.paint_scheduled) {
    self.paint_scheduled = true;
    _M0MP319moonbit_2dcommunity7rabbita3dom6Window25request__animation__frame(_M0FP319moonbit_2dcommunity7rabbita3dom6window(), (_discard_) => {
      const dirty = _M0MPC13set3Set9to__arrayGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self.dirty_set);
      const _bind = dirty.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const id = dirty[_];
          _L: {
            let cell;
            let insts;
            _L$2: {
              const _bind$2 = _M0MPB3Map3getGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self.live_map, id);
              if (_bind$2 === undefined) {
                break _L;
              } else {
                const _Some = _bind$2;
                const _x = _Some;
                const _cell = _x._0;
                const _insts = _x._1;
                cell = _cell;
                insts = _insts;
                break _L$2;
              }
            }
            if (cell.method_table.method_2(cell.self).dirty) {
              const flags = cell.method_table.method_2(cell.self);
              const _it = _M0MPB3Map5iter2GRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(insts);
              while (true) {
                let inst;
                _L$3: {
                  const _bind$2 = _M0MPB5Iter24nextGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(_it);
                  if (_bind$2 === undefined) {
                    break;
                  } else {
                    const _Some = _bind$2;
                    const _x = _Some;
                    const _inst = _x._1;
                    inst = _inst;
                    break _L$3;
                  }
                }
                const _tmp$2 = inst.cell;
                const vnode = _tmp$2.method_table.method_1(_tmp$2.self);
                let inode;
                _L$4: {
                  _L$5: {
                    const _bind$2 = inst.inode;
                    if (_bind$2 === undefined) {
                      $panic();
                    } else {
                      const _Some = _bind$2;
                      const _inode = _Some;
                      inode = _inode;
                      break _L$5;
                    }
                    break _L$4;
                  }
                  const end = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode3end(inode);
                  const parent = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(end));
                  const next_sibling = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(end);
                  const inode$2 = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(inode, vnode, self, parent, next_sibling, inst);
                  inst.inode = inode$2;
                  const _it$2 = _M0MPB3Map5iter2GRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(inst.old_childs);
                  while (true) {
                    let id$2;
                    let link;
                    _L$6: {
                      const _bind$2 = _M0MPB5Iter24nextGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(_it$2);
                      if (_bind$2 === undefined) {
                        break;
                      } else {
                        const _Some = _bind$2;
                        const _x = _Some;
                        const _id = _x._0;
                        const _link = _x._1;
                        id$2 = _id;
                        link = _link;
                        break _L$6;
                      }
                    }
                    const _bind$2 = link.val;
                    if (_bind$2 === undefined) {
                    } else {
                      _M0MPB3Map3setGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(inst.new_childs, id$2, link);
                    }
                    continue;
                  }
                  inst.old_childs = inst.new_childs;
                  inst.new_childs = _M0MPB3Map11new_2einnerGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(8);
                }
                continue;
              }
              flags.dirty = false;
            } else {
              break _L;
            }
            break _L;
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC13set3Set5clearGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self.dirty_set);
      self.paint_scheduled = false;
      while (true) {
        let effect;
        _L: {
          const _bind$2 = _M0MPC15queue5Queue3popGWRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self.after_render_queue);
          if (_bind$2 === undefined) {
            return;
          } else {
            const _Some = _bind$2;
            const _effect = _Some;
            effect = _effect;
            break _L;
          }
        }
        effect({ self: self, method_table: _M0FP0133moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eScheduler });
        continue;
      }
    });
    return;
  } else {
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox5drain(self) {
  if (!self.drain_scheduled) {
    self.drain_scheduled = true;
    while (true) {
      let id;
      _L: {
        const _bind = _M0MPC15queue5Queue3popGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self.msg_queue);
        if (_bind === undefined) {
          break;
        } else {
          const _Some = _bind;
          const _id = _Some;
          id = _id;
          break _L;
        }
      }
      let cell;
      _L$2: {
        _L$3: {
          const _bind = _M0MPB3Map3getGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(self.live_map, id);
          if (_bind === undefined) {
          } else {
            const _Some = _bind;
            const _x = _Some;
            const _cell = _x._0;
            cell = _cell;
            break _L$3;
          }
          break _L$2;
        }
        cell.method_table.method_0(cell.self, { self: self, method_table: _M0FP0133moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eScheduler });
        _M0MPC13set3Set3addGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self.dirty_set, id);
      }
      continue;
    }
    self.drain_scheduled = false;
    _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox5flush(self);
    return;
  } else {
    return;
  }
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler3add(self, cmd) {
  let id;
  let send_message;
  _L: {
    _L$2: {
      let effect;
      _L$3: {
        _L$4: {
          let effect$2;
          _L$5: {
            _L$6: {
              let xs;
              _L$7: {
                _L$8: {
                  switch (cmd.$tag) {
                    case 3: {
                      break;
                    }
                    case 2: {
                      const _Batch = cmd;
                      const _xs = _Batch._0;
                      xs = _xs;
                      break _L$8;
                    }
                    case 0: {
                      const _Effect = cmd;
                      const _effect = _Effect._0;
                      const _x = _Effect._1;
                      if (_x === 0) {
                        effect$2 = _effect;
                        break _L$6;
                      } else {
                        effect = _effect;
                        break _L$4;
                      }
                    }
                    default: {
                      const _Message = cmd;
                      const _id = _Message._0;
                      const _send_message = _Message._1;
                      id = _id;
                      send_message = _send_message;
                      break _L$2;
                    }
                  }
                  break _L$7;
                }
                _M0MPC15array5Array4eachGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdE(xs, (x) => {
                  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler3add(self, x);
                });
              }
              break _L$5;
            }
            effect$2({ self: self, method_table: _M0FP0133moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eScheduler });
          }
          break _L$3;
        }
        _M0MPC15queue5Queue4pushGWRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self.after_render_queue, effect);
      }
      break _L;
    }
    send_message();
    _M0MPC15queue5Queue4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self.msg_queue, id);
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox5drain(self);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler17add__url__request(self, request) {
  let f;
  _L: {
    const _bind = self.on_url_request;
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _f = _Some;
      f = _f;
      break _L;
    }
  }
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler3add(self, f(request));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox3new(root) {
  const root$2 = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime8Instance3new(root);
  const sandbox = new _M0TPB8MutLocalGORP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(undefined);
  const captured_link_listener = (event) => {
    let mouse_event;
    _L: {
      const _bind = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _mouse_event = _Some._0;
        mouse_event = _mouse_event;
        break _L;
      } else {
        return;
      }
    }
    let sandbox$2;
    _L$2: {
      const _bind = sandbox.val;
      if (_bind === undefined) {
        return;
      } else {
        const _Some = _bind;
        const _sandbox = _Some;
        sandbox$2 = _sandbox;
        break _L$2;
      }
    }
    const _bind = sandbox$2.on_url_request;
    if (_bind === undefined) {
      return;
    } else {
      if (!(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__meta__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(mouse_event) || _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__ctrl__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(mouse_event))) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16prevent__defaultGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
        const href = _M0MP319moonbit_2dcommunity7rabbita2js8Optional6unwrapGsE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13get__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(_M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15current__targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(event)))), "href"));
        let curr;
        let _try_err;
        _L$3: {
          _L$4: {
            const _bind$2 = _M0FP319moonbit_2dcommunity7rabbita3url5parse(_M0MP319moonbit_2dcommunity7rabbita3dom6Window12current__url(_M0FP319moonbit_2dcommunity7rabbita3dom6window()));
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              curr = _ok._0;
            } else {
              const _err = _bind$2;
              _try_err = _err._0;
              break _L$4;
            }
            break _L$3;
          }
          curr = $panic();
        }
        let next;
        let _try_err$2;
        _L$4: {
          _L$5: {
            const _bind$2 = _M0FP319moonbit_2dcommunity7rabbita3url5parse(href);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              next = _ok._0;
            } else {
              const _err = _bind$2;
              _try_err$2 = _err._0;
              break _L$5;
            }
            break _L$4;
          }
          next = $panic();
        }
        const request = _M0IP319moonbit_2dcommunity7rabbita3url8ProtocolPB2Eq5equal(curr.protocol, next.protocol) && (curr.host === next.host && _M0IPC16option6OptionPB2Eq5equalGiE(curr.port, next.port)) ? new _M0DTP319moonbit_2dcommunity7rabbita3url10UrlRequest8Internal(next) : new _M0DTP319moonbit_2dcommunity7rabbita3url10UrlRequest8External(href);
        _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler17add__url__request(sandbox$2, request);
        return;
      } else {
        return;
      }
    }
  };
  const _tmp = root$2.cell;
  const _tmp$2 = _tmp.method_table.method_2(_tmp.self).id;
  const _tmp$3 = root$2.cell;
  const _bind = [{ _0: root$2.id, _1: root$2 }];
  const _bind$2 = [{ _0: _tmp$2, _1: { _0: _tmp$3, _1: _M0MPB3Map11from__arrayGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(new _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(_bind, 0, 1)) } }];
  const live_map = _M0MPB3Map11from__arrayGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(new _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(_bind$2, 0, 1));
  const _bind$3 = _M0MPC15queue5Queue3newGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE();
  const _bind$4 = _M0MPC13set3Set11new_2einnerGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(8);
  const _bind$5 = undefined;
  const _bind$6 = undefined;
  const _bind$7 = false;
  const _bind$8 = false;
  const _bind$9 = "";
  const _bind$10 = _M0MPC15queue5Queue3newGRP48bobzhang9nodegraph8frontend3app3MsgE();
  sandbox.val = new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox(live_map, _bind$3, _bind$10, _bind$8, _bind$4, _bind$7, root$2, captured_link_listener, _bind$9, _bind$5, _bind$6);
  return _M0MPC16option6Option6unwrapGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(sandbox.val);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox10initialize(self) {
  const root = self.root;
  const element = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document20get__element__by__id(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), self.mount));
  const _tmp = self.dirty_set;
  const _tmp$2 = root.cell;
  _M0MPC13set3Set3addGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(_tmp, _tmp$2.method_table.method_2(_tmp$2.self).id);
  const _tmp$3 = root.cell;
  const vnode = _tmp$3.method_table.method_1(_tmp$3.self);
  const inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(vnode, self, root, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
  self.root.inode = inode;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler17add__url__changed(self, url) {
  let f;
  _L: {
    const _bind = self.on_url_changed;
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _f = _Some;
      f = _f;
      break _L;
    }
  }
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler3add(self, f(url));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime2Id3new() {
  return _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8next__id();
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime7message(id, f) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd7Message(id, f);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime6effect(f, kind) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd6Effect(f, kind);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime5batch(xs) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd5Batch(xs);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags3new() {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Flags(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime2Id3new(), false, 0);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags11mark__dirty(s) {
  s.dirty = true;
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd5batch(cmds) {
  return _M0FP419moonbit_2dcommunity7rabbita8internal7runtime5batch(cmds);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, key, value) {
  _M0MPB3Map3setGssE(self.attrs, key, value);
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs) {
  if (style.length > 0) {
    const _bind = ";";
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "style", _M0MPC15array5Array4joinGsE(style, new _M0TPC16string10StringView(_bind, 0, _bind.length)));
    return;
  } else {
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html8push__id(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "id", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__class(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "class", v);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, key, value) {
  _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self.handlers, key, value);
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, event, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, event, (event$2, scheduler) => {
    scheduler.method_table.method_0(scheduler.self, msg(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event$2))));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__click(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "click", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__click(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__click(attrs, (_discard_) => v);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__mousedown(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "mousedown", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__mousedown(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__mousedown(attrs, (event) => v(event));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__mouseup(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "mouseup", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__mouseup(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__mouseup(attrs, (event) => v(event));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs10on__scroll(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, "scroll", (event, scheduler) => {
    scheduler.method_table.method_0(scheduler.self, msg(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent13to__ui__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event))));
  });
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__scroll(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs10on__scroll(attrs, (event) => {
    const element = _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom7UIEventE(event)));
    return v(element);
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, event, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, event, (event$2, scheduler) => {
    scheduler.method_table.method_0(scheduler.self, msg(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent19to__keyboard__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event$2))));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__keydown(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, "keydown", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__keydown(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__keydown(attrs, (event) => v(event));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__keyup(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, "keyup", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__keyup(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__keyup(attrs, (event) => v(event));
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__submit(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(attrs, "submit", (event, scheduler) => {
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16prevent__defaultGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
    scheduler.method_table.method_0(scheduler.self, v);
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(self, key, value) {
  _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self.props, key, value);
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita4html25push__value__attr__string(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "value", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html25push__value__prop__string(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "value", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__title(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "title", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__width(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "width", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__height(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "height", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__action(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "action", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__name(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "name", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(value, attrs) {
  let v;
  _L: {
    if (value === -1) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "disabled", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html17push__placeholder(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "placeholder", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14push__readonly(value, attrs) {
  let v;
  _L: {
    if (value === -1) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "readonly", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__checked(value, attrs) {
  let v;
  _L: {
    if (value === -1) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "checked", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html14push__multiple(value, attrs) {
  let v;
  _L: {
    if (value === -1) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "multiple", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__accept(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "accept", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html9push__max(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "max", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html9push__min(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "min", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__step(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "step", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__maxlength(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "maxlength", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__minlength(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "minlength", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__pattern(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "pattern", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__size(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "size", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html18form__event__value(event) {
  let target;
  const _bind = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15current__targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(event));
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _target = _Some._0;
    target = _target;
  } else {
    target = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
  }
  let input;
  _L: {
    const _bind$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget24to__html__input__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(target);
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      const _input = _Some._0;
      input = _input;
      break _L;
    } else {
      let select;
      _L$2: {
        const _bind$3 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget25to__html__select__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(target);
        if (_bind$3.$tag === 1) {
          const _Some = _bind$3;
          const _select = _Some._0;
          select = _select;
          break _L$2;
        } else {
          let element;
          _L$3: {
            const _bind$4 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(target);
            if (_bind$4.$tag === 1) {
              const _Some = _bind$4;
              const _element = _Some._0;
              element = _element;
              break _L$3;
            } else {
              return $panic();
            }
          }
          const _bind$4 = _M0MP319moonbit_2dcommunity7rabbita2js8Optional10to__optionGsE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13get__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, "value"));
          if (_bind$4 === undefined) {
            return $panic();
          } else {
            const _Some = _bind$4;
            const _value = _Some;
            return _value;
          }
        }
      }
      return _M0MP319moonbit_2dcommunity7rabbita3dom17HTMLSelectElement5value(select);
    }
  }
  return _M0MP319moonbit_2dcommunity7rabbita3dom16HTMLInputElement5value(input);
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__change(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(attrs, "change", (event, scheduler) => {
    scheduler.method_table.method_0(scheduler.self, v(_M0FP319moonbit_2dcommunity7rabbita4html18form__event__value(event)));
  });
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__input(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(attrs, "input", (event, scheduler) => {
    scheduler.method_table.method_0(scheduler.self, v(_M0FP319moonbit_2dcommunity7rabbita4html18form__event__value(event)));
  });
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(value, attrs) {
  let v;
  _L: {
    if (value === -1) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "hidden", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__type(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "type", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14push__required(value, attrs) {
  let v;
  _L: {
    if (value === -1) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "required", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(value, attrs) {
  let v;
  _L: {
    if (value === -1) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "autofocus", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(v));
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__list(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "list", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__inputmode(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "inputmode", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__cite(value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "cite", v);
}
function _M0MP319moonbit_2dcommunity7rabbita4html4Html11from__vnode(vdom) {
  return vdom;
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9to__props(self) {
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(tag, attrs, children) {
  const props = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9to__props(attrs);
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4elem(tag, props, _M0IPC15array5ArrayP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(children), undefined);
}
function _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE(tag, attrs, children) {
  const props = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9to__props(attrs);
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4elem(tag, props, _M0IPC16string6StringP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(children), undefined);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build() {
  const _bind = [];
  const _tmp = _M0MPB3Map11from__arrayGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0));
  const _bind$2 = [];
  const _tmp$2 = _M0MPB3Map11from__arrayGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(_bind$2, 0, 0));
  const _bind$3 = [];
  const _tmp$3 = _M0MPB3Map11from__arrayGssE(new _M0TPB9ArrayViewGUssEE(_bind$3, 0, 0));
  const _bind$4 = [];
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Props3new(_tmp, _tmp$2, _tmp$3, _M0MPB3Map11from__arrayGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(new _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(_bind$4, 0, 0)));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs4copy(self) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Props4copy(self);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs) {
  let a;
  _L: {
    if (attrs === undefined) {
      return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build();
    } else {
      const _Some = attrs;
      const _a = _Some;
      a = _a;
      break _L;
    }
  }
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs4copy(a);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(style, id, class_, title, hidden, type_, disabled, name, value, autofocus, on_click, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__type(type_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(disabled, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__name(name, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html25push__value__attr__string(value, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(autofocus, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("button", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, type_, disabled, name, value, autofocus, on_click, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__type(type_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(disabled, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__name(name, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html25push__value__attr__string(value, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(autofocus, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("button", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10h1_2einnerGsE(style, id, class_, title, hidden, cite, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__cite(cite, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("h1", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__mousedown(on_mousedown, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__mouseup(on_mouseup, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__scroll(on_scroll, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__keydown(on_keydown, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__keyup(on_keyup, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("div", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(style, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__mousedown(on_mousedown, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__mouseup(on_mouseup, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__scroll(on_scroll, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__keydown(on_keydown, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__keyup(on_keyup, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("div", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style$46$opt, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("p", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("span", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html4spanGsE(style$46$opt, id, class_, title, hidden, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(style, id, class_, title, hidden, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html4text(str) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4text(str);
}
function _M0FP319moonbit_2dcommunity7rabbita4html12form_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, action, name, on_submit, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__action(action, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__name(name, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__submit(on_submit, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("form", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(input_type, name, value, checked, read_only, multiple, accept, placeholder, auto_complete, style, max, min, step, maxlength, minlength, pattern, size, width, height, id, class_, title, hidden, required, autofocus, list, inputmode, on_change, on_input, attrs, children) {
  let input_type$2;
  switch (input_type) {
    case 0: {
      input_type$2 = "button";
      break;
    }
    case 1: {
      input_type$2 = "checkbox";
      break;
    }
    case 2: {
      input_type$2 = "color";
      break;
    }
    case 3: {
      input_type$2 = "date";
      break;
    }
    case 4: {
      input_type$2 = "datetime-local";
      break;
    }
    case 5: {
      input_type$2 = "email";
      break;
    }
    case 6: {
      input_type$2 = "file";
      break;
    }
    case 7: {
      input_type$2 = "hidden";
      break;
    }
    case 8: {
      input_type$2 = "image";
      break;
    }
    case 9: {
      input_type$2 = "month";
      break;
    }
    case 10: {
      input_type$2 = "number";
      break;
    }
    case 11: {
      input_type$2 = "password";
      break;
    }
    case 12: {
      input_type$2 = "radio";
      break;
    }
    case 13: {
      input_type$2 = "range";
      break;
    }
    case 14: {
      input_type$2 = "reset";
      break;
    }
    case 15: {
      input_type$2 = "search";
      break;
    }
    case 16: {
      input_type$2 = "submit";
      break;
    }
    case 17: {
      input_type$2 = "tel";
      break;
    }
    case 18: {
      input_type$2 = "text";
      break;
    }
    case 19: {
      input_type$2 = "time";
      break;
    }
    case 20: {
      input_type$2 = "url";
      break;
    }
    default: {
      input_type$2 = "week";
    }
  }
  let auto_complete$2;
  if (auto_complete === undefined) {
    auto_complete$2 = "off";
  } else {
    const _Some = auto_complete;
    const _x = _Some;
    if (_x === 0) {
      auto_complete$2 = "on";
    } else {
      auto_complete$2 = "off";
    }
  }
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__required(required, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(autofocus, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__list(list, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__inputmode(inputmode, attrs$2);
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs$2, "type", input_type$2);
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs$2, "autocomplete", auto_complete$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__name(name, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html25push__value__prop__string(value, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__checked(checked, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__readonly(read_only, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__multiple(multiple, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__accept(accept, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html9push__max(max, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html9push__min(min, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__step(step, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__maxlength(maxlength, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__minlength(minlength, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__pattern(pattern, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__size(size, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__width(width, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__height(height, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html17push__placeholder(placeholder, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__change(on_change, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__input(on_input, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("input", attrs$2, children);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Mouse11client__pos(self) {
  return new _M0TP319moonbit_2dcommunity7rabbita4html3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(self), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(self));
}
function _M0IPC16string6StringP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(str) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array([_M0FP319moonbit_2dcommunity7rabbita4html4text(str)]);
}
function _M0IPC15array5ArrayP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(self) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array(_M0MPC15array5Array3mapGRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self, (x) => x));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__mousemove(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "mousemove", msg);
}
function _M0FP219moonbit_2dcommunity7rabbita3new(root) {
  const sandbox = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox3new(root);
  return new _M0TP219moonbit_2dcommunity7rabbita3App(sandbox, undefined);
}
function _M0MP219moonbit_2dcommunity7rabbita3App30trigger__initial__url__changed(self) {
  const _bind = self.sandbox.on_url_changed;
  if (_bind === undefined) {
    return;
  } else {
    let url;
    _L: {
      let _bind$2;
      let _try_err;
      _L$2: {
        _L$3: {
          const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita3url5parse(_M0MP319moonbit_2dcommunity7rabbita3dom6Window12current__url(_M0FP319moonbit_2dcommunity7rabbita3dom6window()));
          let _tmp;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp = _ok._0;
          } else {
            const _err = _bind$3;
            _try_err = _err._0;
            break _L$3;
          }
          _bind$2 = new _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3url3UrlRPC15error5ErrorE2Ok(_tmp);
          break _L$2;
        }
        _bind$2 = new _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3url3UrlRPC15error5ErrorE3Err(_try_err);
      }
      if (_bind$2.$tag === 1) {
        const _Ok = _bind$2;
        const _url = _Ok._0;
        url = _url;
        break _L;
      } else {
        $panic();
        return;
      }
    }
    _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler17add__url__changed(self.sandbox, url);
    return;
  }
}
function _M0MP219moonbit_2dcommunity7rabbita3App10with__init(self, cmd) {
  self.init_cmd = cmd;
}
function _M0MP219moonbit_2dcommunity7rabbita3App5mount(self, element_id) {
  self.sandbox.mount = element_id;
  _M0MP219moonbit_2dcommunity7rabbita3App30trigger__initial__url__changed(self);
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document20get__element__by__id(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), element_id)), "<div></div>");
  let cmd;
  _L: {
    _L$2: {
      const _bind = self.init_cmd;
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _cmd = _Some;
        cmd = _cmd;
        break _L$2;
      }
      break _L;
    }
    _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler3add(self.sandbox, cmd);
    self.init_cmd = undefined;
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox10initialize(self.sandbox);
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox5flush(self.sandbox);
}
function _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4stepGRP48bobzhang9nodegraph8frontend3app5ModelRP48bobzhang9nodegraph8frontend3app3MsgE(self, scheduler) {
  let msg;
  _L: {
    const _bind = _M0MPC15queue5Queue3popGWRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self.dispatcher.inbox);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _msg = _Some;
      msg = _msg;
      break _L;
    }
  }
  let cmd;
  let model;
  _L$2: {
    const _func = self.update;
    const _bind = _func(self.dispatch, msg, self.model.val);
    const _cmd = _bind._0;
    const _model = _bind._1;
    cmd = _cmd;
    model = _model;
    break _L$2;
  }
  self.model.val = model;
  scheduler.method_table.method_0(scheduler.self, cmd);
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags11mark__dirty(self.flags);
}
function _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4viewGRP48bobzhang9nodegraph8frontend3app5ModelRP48bobzhang9nodegraph8frontend3app3MsgE(self) {
  const _func = self.view;
  return _func(self.dispatch, self.model.val);
}
function _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell5flagsGRP48bobzhang9nodegraph8frontend3app5ModelRP48bobzhang9nodegraph8frontend3app3MsgE(self) {
  return self.flags;
}
function _M0MP219moonbit_2dcommunity7rabbita10Dispatcher7messageGRP48bobzhang9nodegraph8frontend3app3MsgE(self, msg) {
  return _M0FP419moonbit_2dcommunity7rabbita8internal7runtime7message(self.id, () => {
    _M0MPC15queue5Queue4pushGWRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self.inbox, msg);
  });
}
function _M0FP219moonbit_2dcommunity7rabbita20cell__with__dispatchGRP48bobzhang9nodegraph8frontend3app5ModelRP48bobzhang9nodegraph8frontend3app3MsgE(model, update, view) {
  const flags = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags3new();
  const dispatcher = new _M0TP219moonbit_2dcommunity7rabbita10DispatcherGRP48bobzhang9nodegraph8frontend3app3MsgE(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags2id(flags), _M0MPC15queue5Queue3newGRP48bobzhang9nodegraph8frontend3app3MsgE());
  const dispatch = (m) => _M0MP219moonbit_2dcommunity7rabbita10Dispatcher7messageGRP48bobzhang9nodegraph8frontend3app3MsgE(dispatcher, m);
  const model$2 = _M0FPC13ref3newGRP48bobzhang9nodegraph8frontend3app5ModelE(model);
  return { _0: dispatch, _1: { self: new _M0TP219moonbit_2dcommunity7rabbita9TypedCellGRP48bobzhang9nodegraph8frontend3app5ModelRP48bobzhang9nodegraph8frontend3app3MsgE(model$2, dispatcher, dispatch, update, view, flags), method_table: _M0FP0211moonbit_2dcommunity_2frabbita_2fTypedCell_5bbobzhang_2fnodegraph_2ffrontend_2fapp_2fModel_2c_20bobzhang_2fnodegraph_2ffrontend_2fapp_2fMsg_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eIsCell } };
}
function _M0MP319moonbit_2dcommunity7rabbita4http4Body13content__type(self) {
  switch (self.$tag) {
    case 0: {
      return "application/json";
    }
    case 1: {
      return "text/plain";
    }
    default: {
      return "text/plain";
    }
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4http4Body9stringfiy(self) {
  let json;
  _L: {
    switch (self.$tag) {
      case 0: {
        const _Json = self;
        const _json = _Json._0;
        json = _json;
        break _L;
      }
      case 1: {
        const _Text = self;
        const _text = _Text._0;
        return _text;
      }
      default: {
        return "";
      }
    }
  }
  return _M0MPC14json4Json17stringify_2einner(json, false, 0, undefined);
}
function _M0FP319moonbit_2dcommunity7rabbita4http7requestGuE(url, http_method, expect, body) {
  const launch = (scheduler) => {
    let has_body;
    if (body.$tag === 2) {
      has_body = false;
    } else {
      has_body = true;
    }
    const content_type = _M0MP319moonbit_2dcommunity7rabbita4http4Body13content__type(body);
    const body$2 = _M0MP319moonbit_2dcommunity7rabbita4http4Body9stringfiy(body);
    let f;
    _L: {
      let f$2;
      let decoder;
      _L$2: {
        if (expect.$tag === 0) {
          const _Json = expect;
          const _f = _Json._0;
          const _decoder = _Json._1;
          f$2 = _f;
          decoder = _decoder;
          break _L$2;
        } else {
          const _Text = expect;
          const _f = _Text._0;
          f = _f;
          break _L;
        }
      }
      _M0FP319moonbit_2dcommunity7rabbita4http11js__request(url, http_method, content_type, body$2, has_body, (str) => {
        let result;
        let _try_err;
        _L$3: {
          _L$4: {
            const _bind = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(str, 0, str.length), 1024);
            let _tmp;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _tmp = _ok._0;
            } else {
              const _err = _bind;
              _try_err = _err._0;
              break _L$4;
            }
            result = new _M0DTPC16result6ResultGRPB4JsonsE2Ok(_tmp);
            break _L$3;
          }
          result = new _M0DTPC16result6ResultGRPB4JsonsE3Err("Json parse error");
        }
        scheduler.method_table.method_0(scheduler.self, f$2(_M0MPC16result6Result4bindGRPB4JsonsuE(result, decoder)));
      }, (msg) => {
        scheduler.method_table.method_0(scheduler.self, f$2(new _M0DTPC16result6ResultGusE3Err(`Http request failed:${_M0IPC16string6StringPB4Show10to__string(msg)}`)));
      });
      return;
    }
    _M0FP319moonbit_2dcommunity7rabbita4http11js__request(url, http_method, content_type, body$2, has_body, (str) => {
      scheduler.method_table.method_0(scheduler.self, f(new _M0DTPC16result6ResultGssE2Ok(str)));
    }, (msg) => {
      scheduler.method_table.method_0(scheduler.self, f(new _M0DTPC16result6ResultGssE3Err(`Http request failed:${_M0IPC16string6StringPB4Show10to__string(msg)}`)));
    });
  };
  return _M0FP419moonbit_2dcommunity7rabbita8internal7runtime6effect(launch, 0);
}
function _M0FP319moonbit_2dcommunity7rabbita4http7requestGRP38bobzhang9nodegraph6shared10ConnectionE(url, http_method, expect, body) {
  const launch = (scheduler) => {
    let has_body;
    if (body.$tag === 2) {
      has_body = false;
    } else {
      has_body = true;
    }
    const content_type = _M0MP319moonbit_2dcommunity7rabbita4http4Body13content__type(body);
    const body$2 = _M0MP319moonbit_2dcommunity7rabbita4http4Body9stringfiy(body);
    let f;
    _L: {
      let f$2;
      let decoder;
      _L$2: {
        if (expect.$tag === 0) {
          const _Json = expect;
          const _f = _Json._0;
          const _decoder = _Json._1;
          f$2 = _f;
          decoder = _decoder;
          break _L$2;
        } else {
          const _Text = expect;
          const _f = _Text._0;
          f = _f;
          break _L;
        }
      }
      _M0FP319moonbit_2dcommunity7rabbita4http11js__request(url, http_method, content_type, body$2, has_body, (str) => {
        let result;
        let _try_err;
        _L$3: {
          _L$4: {
            const _bind = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(str, 0, str.length), 1024);
            let _tmp;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _tmp = _ok._0;
            } else {
              const _err = _bind;
              _try_err = _err._0;
              break _L$4;
            }
            result = new _M0DTPC16result6ResultGRPB4JsonsE2Ok(_tmp);
            break _L$3;
          }
          result = new _M0DTPC16result6ResultGRPB4JsonsE3Err("Json parse error");
        }
        scheduler.method_table.method_0(scheduler.self, f$2(_M0MPC16result6Result4bindGRPB4JsonsRP38bobzhang9nodegraph6shared10ConnectionE(result, decoder)));
      }, (msg) => {
        scheduler.method_table.method_0(scheduler.self, f$2(new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionsE3Err(`Http request failed:${_M0IPC16string6StringPB4Show10to__string(msg)}`)));
      });
      return;
    }
    _M0FP319moonbit_2dcommunity7rabbita4http11js__request(url, http_method, content_type, body$2, has_body, (str) => {
      scheduler.method_table.method_0(scheduler.self, f(new _M0DTPC16result6ResultGssE2Ok(str)));
    }, (msg) => {
      scheduler.method_table.method_0(scheduler.self, f(new _M0DTPC16result6ResultGssE3Err(`Http request failed:${_M0IPC16string6StringPB4Show10to__string(msg)}`)));
    });
  };
  return _M0FP419moonbit_2dcommunity7rabbita8internal7runtime6effect(launch, 0);
}
function _M0FP319moonbit_2dcommunity7rabbita4http7requestGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(url, http_method, expect, body) {
  const launch = (scheduler) => {
    let has_body;
    if (body.$tag === 2) {
      has_body = false;
    } else {
      has_body = true;
    }
    const content_type = _M0MP319moonbit_2dcommunity7rabbita4http4Body13content__type(body);
    const body$2 = _M0MP319moonbit_2dcommunity7rabbita4http4Body9stringfiy(body);
    let f;
    _L: {
      let f$2;
      let decoder;
      _L$2: {
        if (expect.$tag === 0) {
          const _Json = expect;
          const _f = _Json._0;
          const _decoder = _Json._1;
          f$2 = _f;
          decoder = _decoder;
          break _L$2;
        } else {
          const _Text = expect;
          const _f = _Text._0;
          f = _f;
          break _L;
        }
      }
      _M0FP319moonbit_2dcommunity7rabbita4http11js__request(url, http_method, content_type, body$2, has_body, (str) => {
        let result;
        let _try_err;
        _L$3: {
          _L$4: {
            const _bind = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(str, 0, str.length), 1024);
            let _tmp;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _tmp = _ok._0;
            } else {
              const _err = _bind;
              _try_err = _err._0;
              break _L$4;
            }
            result = new _M0DTPC16result6ResultGRPB4JsonsE2Ok(_tmp);
            break _L$3;
          }
          result = new _M0DTPC16result6ResultGRPB4JsonsE3Err("Json parse error");
        }
        scheduler.method_table.method_0(scheduler.self, f$2(_M0MPC16result6Result4bindGRPB4JsonsRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(result, decoder)));
      }, (msg) => {
        scheduler.method_table.method_0(scheduler.self, f$2(new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEsE3Err(`Http request failed:${_M0IPC16string6StringPB4Show10to__string(msg)}`)));
      });
      return;
    }
    _M0FP319moonbit_2dcommunity7rabbita4http11js__request(url, http_method, content_type, body$2, has_body, (str) => {
      scheduler.method_table.method_0(scheduler.self, f(new _M0DTPC16result6ResultGssE2Ok(str)));
    }, (msg) => {
      scheduler.method_table.method_0(scheduler.self, f(new _M0DTPC16result6ResultGssE3Err(`Http request failed:${_M0IPC16string6StringPB4Show10to__string(msg)}`)));
    });
  };
  return _M0FP419moonbit_2dcommunity7rabbita8internal7runtime6effect(launch, 0);
}
function _M0FP319moonbit_2dcommunity7rabbita4http3getGRP38bobzhang9nodegraph6shared5GraphE(url, expect) {
  return _M0FP319moonbit_2dcommunity7rabbita4http7requestGRP38bobzhang9nodegraph6shared10ConnectionE(url, "GET", expect, _M0DTP319moonbit_2dcommunity7rabbita4http4Body5Empty__);
}
function _M0FP319moonbit_2dcommunity7rabbita4http3getGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(url, expect) {
  return _M0FP319moonbit_2dcommunity7rabbita4http7requestGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(url, "GET", expect, _M0DTP319moonbit_2dcommunity7rabbita4http4Body5Empty__);
}
function _M0FP319moonbit_2dcommunity7rabbita4http6deleteGuE(url, expect) {
  return _M0FP319moonbit_2dcommunity7rabbita4http7requestGuE(url, "DELETE", expect, _M0DTP319moonbit_2dcommunity7rabbita4http4Body5Empty__);
}
function _M0FP319moonbit_2dcommunity7rabbita4http4postGRP38bobzhang9nodegraph6shared10ConnectionE(url, body, expect) {
  return _M0FP319moonbit_2dcommunity7rabbita4http7requestGRP38bobzhang9nodegraph6shared10ConnectionE(url, "POST", expect, body);
}
function _M0MP319moonbit_2dcommunity7rabbita3svg3Svg8to__html(self) {
  return _M0MP319moonbit_2dcommunity7rabbita4html4Html11from__vnode(self);
}
function _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs9to__props(self) {
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita3svg12node_2einner(tag, attrs, children, ns) {
  const vnode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4elem(tag, _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs9to__props(attrs), new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array(_M0MPC15array5Array3mapGRP319moonbit_2dcommunity7rabbita3svg3SvgRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(children, (x) => x)), ns);
  return vnode;
}
function _M0FP319moonbit_2dcommunity7rabbita3svg4node(tag, attrs, children, ns$46$opt) {
  let ns;
  if (ns$46$opt === undefined) {
    ns = _M0FP319moonbit_2dcommunity7rabbita3dom14namespace__svg;
  } else {
    const _Some = ns$46$opt;
    ns = _Some;
  }
  return _M0FP319moonbit_2dcommunity7rabbita3svg12node_2einner(tag, attrs, children, ns);
}
function _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs5build() {
  const _bind = [];
  const _tmp = _M0MPB3Map11from__arrayGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0));
  const _bind$2 = [];
  const _tmp$2 = _M0MPB3Map11from__arrayGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(_bind$2, 0, 0));
  const _bind$3 = [];
  const _tmp$3 = _M0MPB3Map11from__arrayGssE(new _M0TPB9ArrayViewGUssEE(_bind$3, 0, 0));
  const _bind$4 = [];
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Props3new(_tmp, _tmp$2, _tmp$3, _M0MPB3Map11from__arrayGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(new _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(_bind$4, 0, 0)));
}
function _M0FP319moonbit_2dcommunity7rabbita3svg14resolve__attrs(attrs) {
  if (attrs === undefined) {
    return _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs5build();
  } else {
    const _Some = attrs;
    const _a = _Some;
    return _a;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs9attribute(self, key, value) {
  _M0MPB3Map3setGssE(self.attrs, key, value);
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string(name, value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs9attribute(attrs, name, v);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg11push__class(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string("class", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg15push__attr__int(name, value, attrs) {
  let v;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs9attribute(attrs, name, _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita3svg12push__height(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__attr__int("height", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg8push__id(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string("id", value, attrs);
}
function _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs11style__attr(self, value) {
  _M0MPB3Map3setGssE(self.attrs, "style", value);
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita3svg11push__style(value, attrs) {
  let v;
  _L: {
    if (value.$tag === 1) {
      const _Some = value;
      const _v = _Some._0;
      v = _v;
      break _L;
    } else {
      return;
    }
  }
  const _bind = ";";
  _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs11style__attr(attrs, _M0MPC15array5Array4joinGsE(v, new _M0TPC16string10StringView(_bind, 0, _bind.length)));
}
function _M0FP319moonbit_2dcommunity7rabbita3svg15push__view__box(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string("viewBox", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg11push__width(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__attr__int("width", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg11push__xmlns(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string("xmlns", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg3svg(id, class_, style, width, height, view_box, xmlns, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita3svg14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita3svg11push__width(width, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg12push__height(height, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__view__box(view_box, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg11push__xmlns(xmlns, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg8push__id(id, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg11push__style(style, attrs$2);
  return _M0MP319moonbit_2dcommunity7rabbita3svg3Svg8to__html(_M0FP319moonbit_2dcommunity7rabbita3svg4node("svg", attrs$2, children, undefined));
}
function _M0FP319moonbit_2dcommunity7rabbita3svg10push__fill(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string("fill", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg12push__stroke(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string("stroke", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg19push__stroke__width(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__attr__int("stroke-width", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg7push__d(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string("d", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg15push__transform(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string("transform", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg13push__opacity(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string("opacity", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg4path(id, class_, style, d, fill, stroke, stroke_width, transform, opacity, attrs) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita3svg14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita3svg7push__d(d, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg10push__fill(fill, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg12push__stroke(stroke, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg19push__stroke__width(stroke_width, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__transform(transform, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg13push__opacity(opacity, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg8push__id(id, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg11push__style(style, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita3svg4node("path", attrs$2, [], undefined);
}
function _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs17stroke__dasharray(self, value) {
  _M0MPB3Map3setGssE(self.attrs, "stroke-dasharray", value);
  return self;
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model13view__palette(self, dispatch) {
  const categories = ["math", "string", "logic", "color", "constant", "display"];
  const cat_labels = ["Math", "String", "Logic", "Color", "Const", "Display"];
  const cat_colors = ["#4CAF50", "#FF9800", "#2196F3", "#E91E63", "#9C27B0", "#607D8B"];
  const tabs = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < categories.length) {
      const cat = _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(categories, i);
      const active = self.palette_cat === cat || self.palette_cat === "" && i === 0;
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(tabs, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 5px 12px", "border: none", "border-radius: 4px", "cursor: pointer", "font-size: 0.75em", "font-weight: 600", active ? `background: ${_M0IPC16string6StringPB4Show10to__string(_M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(cat_colors, i))}; color: #fff` : "background: #222; color: #888"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg13SetPaletteCat(cat)), undefined, _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(cat_labels, i)));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const active_cat = self.palette_cat === "" ? "math" : self.palette_cat;
  const node_buttons = [];
  const _bind = _M0FP38bobzhang9nodegraph6shared10all__kinds.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind) {
      const kind = _M0FP38bobzhang9nodegraph6shared10all__kinds[_];
      if (_M0FP38bobzhang9nodegraph6shared14node__category(kind) === active_cat) {
        const ins = _M0FP38bobzhang9nodegraph6shared12input__ports(kind);
        const outs = _M0FP38bobzhang9nodegraph6shared13output__ports(kind);
        const port_info = [];
        const _bind$2 = ins.length;
        let _tmp$3 = 0;
        while (true) {
          const _$2 = _tmp$3;
          if (_$2 < _bind$2) {
            const p = ins[_$2];
            _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(port_info, _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 0.6em", "padding: 1px 4px", "border-radius: 3px", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP38bobzhang9nodegraph6shared17port__type__color(p.port_type))}30`, `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP38bobzhang9nodegraph6shared17port__type__color(p.port_type))}`], undefined, undefined, undefined, -1, undefined, `→${_M0IPC16string6StringPB4Show10to__string(_M0FP38bobzhang9nodegraph6shared17port__type__label(p.port_type))}`));
            _tmp$3 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _bind$3 = outs.length;
        let _tmp$4 = 0;
        while (true) {
          const _$2 = _tmp$4;
          if (_$2 < _bind$3) {
            const p = outs[_$2];
            _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(port_info, _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 0.6em", "padding: 1px 4px", "border-radius: 3px", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP38bobzhang9nodegraph6shared17port__type__color(p.port_type))}30`, `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP38bobzhang9nodegraph6shared17port__type__color(p.port_type))}`], undefined, undefined, undefined, -1, undefined, `${_M0IPC16string6StringPB4Show10to__string(_M0FP38bobzhang9nodegraph6shared17port__type__label(p.port_type))}→`));
            _tmp$4 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(node_buttons, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "align-items: flex-start", "padding: 8px 12px", "background: #16213e", "border: 1px solid #0f3460", "border-radius: 6px", "cursor: pointer", "color: #eee", "font-family: inherit", "gap: 3px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg7AddNode(kind)), undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-weight: 600", "font-size: 0.85em"], undefined, undefined, undefined, -1, undefined, _M0FP38bobzhang9nodegraph6shared11node__label(kind)), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 3px", "flex-wrap: wrap"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, port_info)]));
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["background: #0d1b2a", "padding: 12px", "border-radius: 8px", "margin-bottom: 12px", "border: 1px solid #1b2838"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 4px", "margin-bottom: 8px", "flex-wrap: wrap"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, tabs), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 6px", "flex-wrap: wrap"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, node_buttons)]);
}
function _M0FP48bobzhang9nodegraph8frontend3app12canvas__size(layout) {
  const max_x = new _M0TPB8MutLocalGiE(600);
  const max_y = new _M0TPB8MutLocalGiE(400);
  const _bind = layout.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const entry = layout[_];
      let x;
      let y;
      _L: {
        const _x = entry._1;
        const _y = entry._2;
        x = _x;
        y = _y;
        break _L;
      }
      if (((x + _M0FP48bobzhang9nodegraph8frontend3app7node__w | 0) + _M0FP48bobzhang9nodegraph8frontend3app6pad__x | 0) > max_x.val) {
        max_x.val = (x + _M0FP48bobzhang9nodegraph8frontend3app7node__w | 0) + _M0FP48bobzhang9nodegraph8frontend3app6pad__x | 0;
      }
      if ((y + _M0FP48bobzhang9nodegraph8frontend3app15node__stride__y | 0) > max_y.val) {
        max_y.val = y + _M0FP48bobzhang9nodegraph8frontend3app15node__stride__y | 0;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: max_x.val, _1: max_y.val };
}
function _M0FP48bobzhang9nodegraph8frontend3app9find__idx(ids, id) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < ids.length) {
      if (_M0MPC15array5Array2atGiE(ids, i) === id) {
        return i;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return -1;
}
function _M0FP48bobzhang9nodegraph8frontend3app15compute__layout(nodes, connections) {
  if (_M0MPC15array5Array9is__emptyGRP38bobzhang9nodegraph6shared10SavedGraphE(nodes)) {
    return [];
  }
  const n = nodes.length;
  const ids = _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared4NodeiE(nodes, (nd) => nd.id);
  const layers = _M0MPC15array5Array4makeGiE(n, 0);
  let _tmp = 0;
  while (true) {
    const _pass = _tmp;
    if (_pass < n) {
      const _bind = connections.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind) {
          const c = connections[_];
          const from_idx = _M0FP48bobzhang9nodegraph8frontend3app9find__idx(ids, c.from_node_id);
          const to_idx = _M0FP48bobzhang9nodegraph8frontend3app9find__idx(ids, c.to_node_id);
          if (from_idx >= 0 && to_idx >= 0) {
            const new_layer = _M0MPC15array5Array2atGiE(layers, from_idx) + 1 | 0;
            if (new_layer > _M0MPC15array5Array2atGiE(layers, to_idx)) {
              _M0MPC15array5Array3setGiE(layers, to_idx, new_layer);
            }
          }
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _pass + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const max_layer = new _M0TPB8MutLocalGiE(0);
  const _bind = layers.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind) {
      const l = layers[_];
      if (l > max_layer.val) {
        max_layer.val = l;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const positions = [];
  let _tmp$3 = 0;
  while (true) {
    const layer = _tmp$3;
    if (layer <= max_layer.val) {
      const row = new _M0TPB8MutLocalGiE(0);
      let _tmp$4 = 0;
      while (true) {
        const i = _tmp$4;
        if (i < n) {
          if (_M0MPC15array5Array2atGiE(layers, i) === layer) {
            const x = _M0FP48bobzhang9nodegraph8frontend3app6pad__x + (Math.imul(layer, _M0FP48bobzhang9nodegraph8frontend3app15node__stride__x) | 0) | 0;
            const y = _M0FP48bobzhang9nodegraph8frontend3app6pad__y + (Math.imul(row.val, _M0FP48bobzhang9nodegraph8frontend3app15node__stride__y) | 0) | 0;
            _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(positions, { _0: _M0MPC15array5Array2atGiE(ids, i), _1: x, _2: y });
            row.val = row.val + 1 | 0;
          }
          _tmp$4 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$3 = layer + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return positions;
}
function _M0FP48bobzhang9nodegraph8frontend3app8get__pos(layout, node_id) {
  const _bind = layout.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const entry = layout[_];
      let x;
      let id;
      let y;
      _L: {
        const _id = entry._0;
        const _x = entry._1;
        const _y = entry._2;
        x = _x;
        id = _id;
        y = _y;
        break _L;
      }
      if (id === node_id) {
        return { _0: x, _1: y };
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: 0, _1: 0 };
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model19view__const__config(self, node, dispatch) {
  return self.editing_node === node.id ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 4px", "margin-bottom: 6px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, self.config_value, -1, -1, -1, undefined, undefined, undefined, ["flex: 1", "padding: 4px 6px", "background: #0d1b2a", "border: 1px solid #e94560", "border-radius: 3px", "color: #eee", "font-family: inherit", "font-size: 0.8em"], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (v) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg14SetConfigValue(v)), undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 4px 8px", "background: #4CAF50", "color: #fff", "border: none", "border-radius: 3px", "cursor: pointer", "font-size: 0.7em"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang9nodegraph8frontend3app3Msg10SaveConfig__), undefined, "✓"), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 4px 8px", "background: #555", "color: #ccc", "border: none", "border-radius: 3px", "cursor: pointer", "font-size: 0.7em"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang9nodegraph8frontend3app3Msg16CancelEditConfig__), undefined, "✕")]) : _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["margin-bottom: 6px", "cursor: pointer", "padding: 4px 6px", "background: #0d1b2a", "border-radius: 3px", "font-size: 0.8em", "color: #ccc", "text-align: center"], undefined, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg15StartEditConfig(node.id, node.config)), undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4spanGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, node.config.length > 0 ? node.config : "(click to set)")]);
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model18view__input__ports(self, node, ports, dispatch) {
  if (_M0MPC15array5Array9is__emptyGRP38bobzhang9nodegraph6shared10SavedGraphE(ports)) {
    return _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  }
  const items = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < ports.length) {
      const p = _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(ports, i);
      const color = _M0FP38bobzhang9nodegraph6shared17port__type__color(p.port_type);
      const connected = new _M0TPB8MutLocalGbE(false);
      const _bind = self.connections;
      const _bind$2 = _bind.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$2) {
          const c = _bind[_];
          if (c.to_node_id === node.id && c.to_port === i) {
            connected.val = true;
          }
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const in_connect_mode = self.connecting_from_node !== 0 && self.connecting_from_node !== node.id;
      const compatible = new _M0TPB8MutLocalGbE(false);
      const incompatible = new _M0TPB8MutLocalGbE(false);
      if (in_connect_mode && !connected.val) {
        const compat = new _M0TPB8MutLocalGbE(false);
        const _bind$3 = self.nodes;
        const _bind$4 = _bind$3.length;
        let _tmp$3 = 0;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind$4) {
            const n = _bind$3[_];
            if (n.id === self.connecting_from_node) {
              const out_ports = _M0FP38bobzhang9nodegraph6shared13output__ports(n.kind);
              if (self.connecting_from_port < out_ports.length) {
                compat.val = _M0FP38bobzhang9nodegraph6shared17types__compatible(_M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(out_ports, self.connecting_from_port).port_type, p.port_type);
              }
            }
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        compatible.val = compat.val;
        incompatible.val = !compat.val;
      }
      const dot_style = compatible.val ? `width: 14px; height: 14px; border-radius: 50%; background: ${_M0IPC16string6StringPB4Show10to__string(color)}; flex-shrink: 0; box-shadow: 0 0 10px ${_M0IPC16string6StringPB4Show10to__string(color)}; border: 2px solid #fff; animation: pulseGlow 1s infinite` : incompatible.val ? "width: 10px; height: 10px; border-radius: 50%; background: #333; flex-shrink: 0; border: 2px solid #f44336; opacity: 0.4" : connected.val ? `width: 10px; height: 10px; border-radius: 50%; background: ${_M0IPC16string6StringPB4Show10to__string(color)}; flex-shrink: 0; box-shadow: 0 0 8px ${_M0IPC16string6StringPB4Show10to__string(color)}; border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(color)}` : `width: 10px; height: 10px; border-radius: 50%; background: ${_M0IPC16string6StringPB4Show10to__string(color)}; flex-shrink: 0; opacity: 0.6; border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(color)}50`;
      const name_style = incompatible.val ? "font-size: 0.7em; color: #555; flex: 1; text-decoration: line-through" : "font-size: 0.7em; color: #aaa; flex: 1";
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 4px", "margin-bottom: 3px", incompatible.val ? "opacity: 0.5" : ""], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE([dot_style], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([name_style], undefined, undefined, undefined, -1, undefined, p.name), compatible.val ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["padding: 3px 8px", `background: ${_M0IPC16string6StringPB4Show10to__string(color)}`, "color: #fff", "border: none", "border-radius: 4px", "cursor: crosshair", "font-size: 0.65em", "font-weight: 700", "animation: breathe 1.5s infinite"], undefined, undefined, undefined, -1, undefined, undefined, (_m) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg15CompleteConnect(node.id, i)), undefined, undefined, undefined, undefined, "→ drop here") : incompatible.val ? _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 0.6em", "color: #f44336"], undefined, undefined, undefined, -1, undefined, "✕") : _M0FP319moonbit_2dcommunity7rabbita4html4text("")]));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const children = [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-size: 0.6em", "color: #666", "margin-bottom: 2px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "INPUTS")];
  const _bind = items.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind) {
      const item = items[_];
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(children, item);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["margin-bottom: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, children);
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model18view__node__values(self, _node, vals) {
  if (_M0MPC15array5Array9is__emptyGRP38bobzhang9nodegraph6shared10SavedGraphE(vals)) {
    return _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  }
  const items = _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared5ValueRP319moonbit_2dcommunity7rabbita4html4HtmlE(vals, (v) => {
    let e;
    _L: {
      let s;
      _L$2: {
        let n;
        _L$3: {
          let b;
          _L$4: {
            let hex;
            _L$5: {
              switch (v.$tag) {
                case 3: {
                  const _VColor = v;
                  const _hex = _VColor._0;
                  hex = _hex;
                  break _L$5;
                }
                case 2: {
                  const _VBool = v;
                  const _b = _VBool._0;
                  b = _b;
                  break _L$4;
                }
                case 0: {
                  const _VNumber = v;
                  const _n = _VNumber._0;
                  n = _n;
                  break _L$3;
                }
                case 1: {
                  const _VString = v;
                  const _s = _VString._0;
                  s = _s;
                  break _L$2;
                }
                case 4: {
                  const _VError = v;
                  const _e = _VError._0;
                  e = _e;
                  break _L;
                }
                default: {
                  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-size: 0.7em", "color: #555"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "(none)");
                }
              }
            }
            return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 8px", "padding: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["width: 40px", "height: 40px", "border-radius: 6px", `background: ${_M0IPC16string6StringPB4Show10to__string(hex)}`, "border: 2px solid #555", `box-shadow: 0 0 12px ${_M0IPC16string6StringPB4Show10to__string(hex)}60`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 0.75em", "color: #ccc", "font-family: monospace"], undefined, undefined, undefined, -1, undefined, hex)]);
          }
          return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["display: inline-block", "padding: 3px 10px", "border-radius: 12px", "font-size: 0.75em", "font-weight: 700", b ? "background: #4CAF5030; color: #76FF03; border: 1px solid #4CAF50" : "background: #f4433630; color: #ff5252; border: 1px solid #f44336"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, b ? "true" : "false");
        }
        return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-size: 1.1em", "color: #76FF03", "font-family: monospace", "font-weight: 700", "text-shadow: 0 0 8px #76FF0340"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0MPC13int3Int18to__string_2einner(n, 10));
      }
      return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-size: 0.8em", "color: #FF9800", "font-family: monospace", "padding: 2px 6px", "background: #FF980010", "border-radius: 3px", "border: 1px solid #FF980030"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `\"${_M0IPC16string6StringPB4Show10to__string(s)}\"`);
    }
    return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-size: 0.7em", "color: #ff5252", "padding: 2px 6px", "background: #ff525210", "border-radius: 3px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `⚠ ${_M0IPC16string6StringPB4Show10to__string(e)}`);
  });
  const result_children = [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-size: 0.55em", "color: #555", "margin-bottom: 3px", "letter-spacing: 1px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "RESULT")];
  const _bind = items.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const item = items[_];
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(result_children, item);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["margin-top: 6px", "padding-top: 6px", "border-top: 1px solid #ffffff10"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, result_children);
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model19view__output__ports(self, node, ports, dispatch) {
  if (_M0MPC15array5Array9is__emptyGRP38bobzhang9nodegraph6shared10SavedGraphE(ports)) {
    return _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  }
  const items = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < ports.length) {
      const p = _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(ports, i);
      const color = _M0FP38bobzhang9nodegraph6shared17port__type__color(p.port_type);
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 4px", "margin-bottom: 3px", "justify-content: flex-end"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["padding: 2px 6px", `background: ${_M0IPC16string6StringPB4Show10to__string(color)}30`, `color: ${_M0IPC16string6StringPB4Show10to__string(color)}`, `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(color)}`, "border-radius: 3px", "cursor: crosshair", "font-size: 0.6em", "font-weight: 700", "user-select: none"], undefined, undefined, undefined, -1, undefined, (m) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg12StartConnect(node.id, i)), undefined, undefined, undefined, undefined, undefined, "● drag →"), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 0.7em", "color: #aaa"], undefined, undefined, undefined, -1, undefined, p.name), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["width: 10px", "height: 10px", "border-radius: 50%", `background: ${_M0IPC16string6StringPB4Show10to__string(color)}`, "flex-shrink: 0", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(color)}50`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "")]));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const children2 = [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-size: 0.6em", "color: #666", "margin-bottom: 2px", "text-align: right"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "OUTPUTS")];
  const _bind = items.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind) {
      const item = items[_];
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(children2, item);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, children2);
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model18view__single__node(self, node, dispatch) {
  const cat = _M0FP38bobzhang9nodegraph6shared14node__category(node.kind);
  let cat_color;
  switch (cat) {
    case "math": {
      cat_color = "#4CAF50";
      break;
    }
    case "string": {
      cat_color = "#FF9800";
      break;
    }
    case "logic": {
      cat_color = "#2196F3";
      break;
    }
    case "color": {
      cat_color = "#E91E63";
      break;
    }
    case "constant": {
      cat_color = "#9C27B0";
      break;
    }
    default: {
      cat_color = "#607D8B";
    }
  }
  const in_ports = _M0FP38bobzhang9nodegraph6shared12input__ports(node.kind);
  const out_ports = _M0FP38bobzhang9nodegraph6shared13output__ports(node.kind);
  let node_vals;
  let r;
  _L: {
    _L$2: {
      const _bind = self.eval_result;
      if (_bind === undefined) {
        node_vals = [];
      } else {
        const _Some = _bind;
        const _r = _Some;
        r = _r;
        break _L$2;
      }
      break _L;
    }
    node_vals = _M0FP38bobzhang9nodegraph6shared18get__node__outputs(r, node.id);
  }
  const _bind = node.kind;
  let is_const;
  switch (_bind) {
    case 17: {
      is_const = true;
      break;
    }
    case 18: {
      is_const = true;
      break;
    }
    case 19: {
      is_const = true;
      break;
    }
    case 20: {
      is_const = true;
      break;
    }
    default: {
      is_const = false;
    }
  }
  const has_output = node_vals.length > 0;
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["min-width: 190px", "max-width: 250px", "background: #16213e", `border: 2px solid ${_M0IPC16string6StringPB4Show10to__string(cat_color)}`, "border-radius: 10px", "overflow: hidden", "animation: fadeIn 0.3s ease", has_output ? `box-shadow: 0 0 12px ${_M0IPC16string6StringPB4Show10to__string(cat_color)}40` : "box-shadow: 0 2px 8px rgba(0,0,0,0.4)"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([`background: linear-gradient(135deg, ${_M0IPC16string6StringPB4Show10to__string(cat_color)}, ${_M0IPC16string6StringPB4Show10to__string(cat_color)}bb)`, "padding: 7px 12px", "display: flex", "justify-content: space-between", "align-items: center", "cursor: grab", "user-select: none"], undefined, undefined, undefined, -1, undefined, (m) => {
    const pos = _M0MP319moonbit_2dcommunity7rabbita4html5Mouse11client__pos(m);
    return dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg9StartDrag(node.id, pos.x, pos.y));
  }, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-weight: 700", "font-size: 0.85em", "color: #fff", "text-shadow: 0 1px 2px rgba(0,0,0,0.3)", "pointer-events: none"], undefined, undefined, undefined, -1, undefined, node.label), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["background: rgba(0,0,0,0.2)", "border: none", "color: rgba(255,255,255,0.8)", "cursor: pointer", "font-size: 0.75em", "width: 20px", "height: 20px", "border-radius: 50%", "display: flex", "align-items: center", "justify-content: center"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg10DeleteNode(node.id)), undefined, "✕")]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["padding: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [is_const ? _M0MP48bobzhang9nodegraph8frontend3app5Model19view__const__config(self, node, dispatch) : _M0FP319moonbit_2dcommunity7rabbita4html4text(""), _M0MP48bobzhang9nodegraph8frontend3app5Model18view__input__ports(self, node, in_ports, dispatch), _M0MP48bobzhang9nodegraph8frontend3app5Model19view__output__ports(self, node, out_ports, dispatch), _M0MP48bobzhang9nodegraph8frontend3app5Model18view__node__values(self, node, node_vals)])]);
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model16view__svg__wires(self, layout, w, h) {
  const paths = [];
  const _bind = self.connections;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const c = _bind[_];
      let from_x;
      let from_y;
      _L: {
        const _bind$3 = _M0FP48bobzhang9nodegraph8frontend3app8get__pos(layout, c.from_node_id);
        const _from_x = _bind$3._0;
        const _from_y = _bind$3._1;
        from_x = _from_x;
        from_y = _from_y;
        break _L;
      }
      let to_x;
      let to_y;
      _L$2: {
        const _bind$3 = _M0FP48bobzhang9nodegraph8frontend3app8get__pos(layout, c.to_node_id);
        const _to_x = _bind$3._0;
        const _to_y = _bind$3._1;
        to_x = _to_x;
        to_y = _to_y;
        break _L$2;
      }
      const from_kind = new _M0TPB8MutLocalGRP38bobzhang9nodegraph6shared8NodeKindE(17);
      const to_kind = new _M0TPB8MutLocalGRP38bobzhang9nodegraph6shared8NodeKindE(17);
      const _bind$3 = self.nodes;
      const _bind$4 = _bind$3.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$4) {
          const n = _bind$3[_$2];
          if (n.id === c.from_node_id) {
            from_kind.val = n.kind;
          }
          if (n.id === c.to_node_id) {
            to_kind.val = n.kind;
          }
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const from_in_count = _M0FP38bobzhang9nodegraph6shared12input__ports(from_kind.val).length;
      const _bind$5 = from_kind.val;
      let from_has_config;
      switch (_bind$5) {
        case 17: {
          from_has_config = true;
          break;
        }
        case 18: {
          from_has_config = true;
          break;
        }
        case 19: {
          from_has_config = true;
          break;
        }
        case 20: {
          from_has_config = true;
          break;
        }
        default: {
          from_has_config = false;
        }
      }
      const from_config_h = from_has_config ? 32 : 0;
      const from_inputs_h = from_in_count > 0 ? 16 + (Math.imul(from_in_count, _M0FP48bobzhang9nodegraph8frontend3app12port__stride) | 0) | 0 : 0;
      const x1 = from_x + _M0FP48bobzhang9nodegraph8frontend3app7node__w | 0;
      const y1 = (((((from_y + _M0FP48bobzhang9nodegraph8frontend3app9header__h | 0) + from_config_h | 0) + from_inputs_h | 0) + 16 | 0) + (Math.imul(c.from_port, _M0FP48bobzhang9nodegraph8frontend3app12port__stride) | 0) | 0) + 8 | 0;
      const _bind$6 = to_kind.val;
      let to_has_config;
      switch (_bind$6) {
        case 17: {
          to_has_config = true;
          break;
        }
        case 18: {
          to_has_config = true;
          break;
        }
        case 19: {
          to_has_config = true;
          break;
        }
        case 20: {
          to_has_config = true;
          break;
        }
        default: {
          to_has_config = false;
        }
      }
      const to_config_h = to_has_config ? 32 : 0;
      const x2 = to_x;
      const y2 = ((((to_y + _M0FP48bobzhang9nodegraph8frontend3app9header__h | 0) + to_config_h | 0) + 16 | 0) + (Math.imul(c.to_port, _M0FP48bobzhang9nodegraph8frontend3app12port__stride) | 0) | 0) + 8 | 0;
      const color = new _M0TPB8MutLocalGsE("#888");
      const _bind$7 = self.nodes;
      const _bind$8 = _bind$7.length;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$8) {
          const n = _bind$7[_$2];
          if (n.id === c.from_node_id) {
            const ports = _M0FP38bobzhang9nodegraph6shared13output__ports(n.kind);
            if (c.from_port < ports.length) {
              color.val = _M0FP38bobzhang9nodegraph6shared17port__type__color(_M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(ports, c.from_port).port_type);
            }
          }
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const diff = x2 - x1 | 0;
      const abs_diff = diff < 0 ? -diff | 0 : diff;
      let dx;
      if (abs_diff < 100) {
        dx = 60;
      } else {
        if (2 === 0) {
          $panic();
        }
        dx = abs_diff / 2 | 0;
      }
      const path_d = `M ${_M0IP016_24default__implPB4Show10to__stringGiE(x1)} ${_M0IP016_24default__implPB4Show10to__stringGiE(y1)} C ${_M0IP016_24default__implPB4Show10to__stringGiE(x1 + dx | 0)} ${_M0IP016_24default__implPB4Show10to__stringGiE(y1)}, ${_M0IP016_24default__implPB4Show10to__stringGiE(x2 - dx | 0)} ${_M0IP016_24default__implPB4Show10to__stringGiE(y2)}, ${_M0IP016_24default__implPB4Show10to__stringGiE(x2)} ${_M0IP016_24default__implPB4Show10to__stringGiE(y2)}`;
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(paths, _M0FP319moonbit_2dcommunity7rabbita3svg4path(undefined, undefined, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__, path_d, "none", `${_M0IPC16string6StringPB4Show10to__string(color.val)}30`, 6, undefined, undefined, undefined));
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(paths, _M0FP319moonbit_2dcommunity7rabbita3svg4path(undefined, undefined, new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(["animation: flowDash 1s linear infinite"]), path_d, "none", color.val, 2, undefined, undefined, _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs17stroke__dasharray(_M0MP319moonbit_2dcommunity7rabbita3svg5Attrs5build(), "6 4")));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita3svg3svg(undefined, undefined, new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(["position: absolute", "top: 0", "left: 0", "pointer-events: none"]), w, h, undefined, undefined, undefined, paths);
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model16view__temp__wire(self, layout, w, h) {
  if (self.connecting_from_node === 0 || self.wire_mouse_x === 0 && self.wire_mouse_y === 0) {
    return _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  }
  let from_x;
  let from_y;
  _L: {
    const _bind = _M0FP48bobzhang9nodegraph8frontend3app8get__pos(layout, self.connecting_from_node);
    const _from_x = _bind._0;
    const _from_y = _bind._1;
    from_x = _from_x;
    from_y = _from_y;
    break _L;
  }
  const from_kind = new _M0TPB8MutLocalGRP38bobzhang9nodegraph6shared8NodeKindE(17);
  const _bind = self.nodes;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const n = _bind[_];
      if (n.id === self.connecting_from_node) {
        from_kind.val = n.kind;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const from_in_count = _M0FP38bobzhang9nodegraph6shared12input__ports(from_kind.val).length;
  const _bind$3 = from_kind.val;
  let from_has_config;
  switch (_bind$3) {
    case 17: {
      from_has_config = true;
      break;
    }
    case 18: {
      from_has_config = true;
      break;
    }
    case 19: {
      from_has_config = true;
      break;
    }
    case 20: {
      from_has_config = true;
      break;
    }
    default: {
      from_has_config = false;
    }
  }
  const from_config_h = from_has_config ? 32 : 0;
  const from_inputs_h = from_in_count > 0 ? 16 + (Math.imul(from_in_count, _M0FP48bobzhang9nodegraph8frontend3app12port__stride) | 0) | 0 : 0;
  const x1 = from_x + _M0FP48bobzhang9nodegraph8frontend3app7node__w | 0;
  const y1 = (((((from_y + _M0FP48bobzhang9nodegraph8frontend3app9header__h | 0) + from_config_h | 0) + from_inputs_h | 0) + 16 | 0) + (Math.imul(self.connecting_from_port, _M0FP48bobzhang9nodegraph8frontend3app12port__stride) | 0) | 0) + 8 | 0;
  const x2 = self.wire_mouse_x;
  const y2 = self.wire_mouse_y;
  const diff = x2 - x1 | 0;
  const abs_diff = diff < 0 ? -diff | 0 : diff;
  let dx;
  if (abs_diff < 80) {
    dx = 50;
  } else {
    if (2 === 0) {
      $panic();
    }
    dx = abs_diff / 2 | 0;
  }
  const path_d = `M ${_M0IP016_24default__implPB4Show10to__stringGiE(x1)} ${_M0IP016_24default__implPB4Show10to__stringGiE(y1)} C ${_M0IP016_24default__implPB4Show10to__stringGiE(x1 + dx | 0)} ${_M0IP016_24default__implPB4Show10to__stringGiE(y1)}, ${_M0IP016_24default__implPB4Show10to__stringGiE(x2 - dx | 0)} ${_M0IP016_24default__implPB4Show10to__stringGiE(y2)}, ${_M0IP016_24default__implPB4Show10to__stringGiE(x2)} ${_M0IP016_24default__implPB4Show10to__stringGiE(y2)}`;
  return _M0FP319moonbit_2dcommunity7rabbita3svg3svg(undefined, undefined, new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(["position: absolute", "top: 0", "left: 0", "pointer-events: none"]), w, h, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita3svg4path(undefined, undefined, new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(["animation: flowDash 0.5s linear infinite"]), path_d, "none", "#e94560", 2, undefined, undefined, _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs17stroke__dasharray(_M0MP319moonbit_2dcommunity7rabbita3svg5Attrs5build(), "8 4"))]);
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model11view__nodes(self, dispatch) {
  if (_M0MPC15array5Array9is__emptyGRP38bobzhang9nodegraph6shared10SavedGraphE(self.nodes)) {
    return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["text-align: center", "color: #555", "padding: 40px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "No nodes yet. Open the palette to add some!");
  }
  const auto = _M0FP48bobzhang9nodegraph8frontend3app15compute__layout(self.nodes, self.connections);
  const layout = _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared4NodeUiiiEE(self.nodes, (n) => {
    if (n.x !== 0 || n.y !== 0) {
      return { _0: n.id, _1: n.x, _2: n.y };
    } else {
      let ax;
      let ay;
      _L: {
        const _bind = _M0FP48bobzhang9nodegraph8frontend3app8get__pos(auto, n.id);
        const _ax = _bind._0;
        const _ay = _bind._1;
        ax = _ax;
        ay = _ay;
        break _L;
      }
      return { _0: n.id, _1: ax, _2: ay };
    }
  });
  let cw;
  let ch;
  _L: {
    const _bind = _M0FP48bobzhang9nodegraph8frontend3app12canvas__size(layout);
    const _cw = _bind._0;
    const _ch = _bind._1;
    cw = _cw;
    ch = _ch;
    break _L;
  }
  const cards = _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared4NodeRP319moonbit_2dcommunity7rabbita4html4HtmlE(self.nodes, (n) => {
    let x;
    let y;
    _L$2: {
      const _bind = _M0FP48bobzhang9nodegraph8frontend3app8get__pos(layout, n.id);
      const _x = _bind._0;
      const _y = _bind._1;
      x = _x;
      y = _y;
      break _L$2;
    }
    return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["position: absolute", `left: ${_M0IP016_24default__implPB4Show10to__stringGiE(x)}px`, `top: ${_M0IP016_24default__implPB4Show10to__stringGiE(y)}px`, `width: ${_M0IP016_24default__implPB4Show10to__stringGiE(_M0FP48bobzhang9nodegraph8frontend3app7node__w)}px`, self.dragging_node === n.id ? "z-index: 100; opacity: 0.9" : "z-index: 1"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0MP48bobzhang9nodegraph8frontend3app5Model18view__single__node(self, n, dispatch)]);
  });
  const wires = _M0MP48bobzhang9nodegraph8frontend3app5Model16view__svg__wires(self, layout, cw, ch);
  const temp_wire = _M0MP48bobzhang9nodegraph8frontend3app5Model16view__temp__wire(self, layout, cw, ch);
  const children = [wires, temp_wire];
  const _bind = cards.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const card = cards[_];
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(children, card);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["overflow: auto", "margin-bottom: 16px", "border-radius: 8px", "border: 1px solid #1b2838", "max-height: 600px", self.dragging_node !== 0 ? "cursor: grabbing" : ""], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["position: relative", `min-height: ${_M0IP016_24default__implPB4Show10to__stringGiE(ch)}px`, `min-width: ${_M0IP016_24default__implPB4Show10to__stringGiE(cw)}px`, "background: #0a0a1a"], undefined, undefined, undefined, -1, undefined, (_m) => _M0FP319moonbit_2dcommunity7rabbita3cmd4none, (_m) => self.dragging_node !== 0 ? dispatch(_M0DTP48bobzhang9nodegraph8frontend3app3Msg7EndDrag__) : self.connecting_from_node !== 0 ? dispatch(_M0DTP48bobzhang9nodegraph8frontend3app3Msg13CancelConnect__) : _M0FP319moonbit_2dcommunity7rabbita3cmd4none, undefined, undefined, undefined, _M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__mousemove(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build(), (ev) => {
    const cx = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(ev);
    const cy = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(ev);
    return self.dragging_node !== 0 ? dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg4Drag(cx, cy)) : self.connecting_from_node !== 0 ? dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg8WireMove(cx, cy)) : _M0FP319moonbit_2dcommunity7rabbita3cmd4none;
  }), children)]);
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model21view__connect__banner(self, dispatch) {
  const from_label = new _M0TPB8MutLocalGsE("?");
  const port_label = new _M0TPB8MutLocalGsE("?");
  const port_color = new _M0TPB8MutLocalGsE("#888");
  const type_label = new _M0TPB8MutLocalGsE("?");
  const _bind = self.nodes;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const n = _bind[_];
      if (n.id === self.connecting_from_node) {
        from_label.val = n.label;
        const ports = _M0FP38bobzhang9nodegraph6shared13output__ports(n.kind);
        if (self.connecting_from_port < ports.length) {
          port_label.val = _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(ports, self.connecting_from_port).name;
          port_color.val = _M0FP38bobzhang9nodegraph6shared17port__type__color(_M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(ports, self.connecting_from_port).port_type);
          type_label.val = _M0FP38bobzhang9nodegraph6shared17port__type__label(_M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(ports, self.connecting_from_port).port_type);
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["background: #0f3460", "padding: 10px 16px", "border-radius: 6px", "margin-bottom: 10px", "display: flex", "justify-content: space-between", "align-items: center", `border: 2px solid ${_M0IPC16string6StringPB4Show10to__string(port_color.val)}`, "animation: fadeIn 0.2s ease"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["width: 12px", "height: 12px", "border-radius: 50%", `background: ${_M0IPC16string6StringPB4Show10to__string(port_color.val)}`, "animation: pulseGlow 1s infinite"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html4spanGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, `Connecting ${_M0IPC16string6StringPB4Show10to__string(type_label.val)} from ${_M0IPC16string6StringPB4Show10to__string(from_label.val)}.${_M0IPC16string6StringPB4Show10to__string(port_label.val)} → click a compatible input port`)]), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 4px 12px", "background: #e94560", "color: #fff", "border: none", "border-radius: 4px", "cursor: pointer"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang9nodegraph8frontend3app3Msg13CancelConnect__), undefined, "Cancel")]);
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model17view__connections(self, dispatch) {
  if (_M0MPC15array5Array9is__emptyGRP38bobzhang9nodegraph6shared10SavedGraphE(self.connections)) {
    return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["text-align: center", "color: #444", "padding: 12px", "font-size: 0.8em"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "No connections. Click \"Connect →\" on an output port to start wiring.");
  }
  const rows = _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared10ConnectionRP319moonbit_2dcommunity7rabbita4html4HtmlE(self.connections, (c) => {
    const from_label = new _M0TPB8MutLocalGsE(`#${_M0IP016_24default__implPB4Show10to__stringGiE(c.from_node_id)}`);
    const from_port_name = new _M0TPB8MutLocalGsE(`[${_M0IP016_24default__implPB4Show10to__stringGiE(c.from_port)}]`);
    const from_color = new _M0TPB8MutLocalGsE("#888");
    const to_label = new _M0TPB8MutLocalGsE(`#${_M0IP016_24default__implPB4Show10to__stringGiE(c.to_node_id)}`);
    const to_port_name = new _M0TPB8MutLocalGsE(`[${_M0IP016_24default__implPB4Show10to__stringGiE(c.to_port)}]`);
    const to_color = new _M0TPB8MutLocalGsE("#888");
    const _bind = self.nodes;
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const n = _bind[_];
        if (n.id === c.from_node_id) {
          from_label.val = n.label;
          const ports = _M0FP38bobzhang9nodegraph6shared13output__ports(n.kind);
          if (c.from_port < ports.length) {
            from_port_name.val = _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(ports, c.from_port).name;
            from_color.val = _M0FP38bobzhang9nodegraph6shared17port__type__color(_M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(ports, c.from_port).port_type);
          }
        }
        if (n.id === c.to_node_id) {
          to_label.val = n.label;
          const ports = _M0FP38bobzhang9nodegraph6shared12input__ports(n.kind);
          if (c.to_port < ports.length) {
            to_port_name.val = _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(ports, c.to_port).name;
            to_color.val = _M0FP38bobzhang9nodegraph6shared17port__type__color(_M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(ports, c.to_port).port_type);
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 6px", "padding: 6px 10px", "background: #16213e", "border-radius: 4px", "margin-bottom: 4px", "font-size: 0.8em"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([`color: ${_M0IPC16string6StringPB4Show10to__string(from_color.val)}`, "font-weight: 600"], undefined, undefined, undefined, -1, undefined, from_label.val), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["color: #666"], undefined, undefined, undefined, -1, undefined, `.${_M0IPC16string6StringPB4Show10to__string(from_port_name.val)}`), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["color: #e94560"], undefined, undefined, undefined, -1, undefined, "→"), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([`color: ${_M0IPC16string6StringPB4Show10to__string(to_color.val)}`, "font-weight: 600"], undefined, undefined, undefined, -1, undefined, to_label.val), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["color: #666"], undefined, undefined, undefined, -1, undefined, `.${_M0IPC16string6StringPB4Show10to__string(to_port_name.val)}`), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["flex: 1"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 2px 8px", "background: #333", "color: #888", "border: none", "border-radius: 3px", "cursor: pointer", "font-size: 0.75em"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg16DeleteConnection(c.id)), undefined, "✕")]);
  });
  const children = [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-size: 0.75em", "color: #666", "margin-bottom: 6px", "letter-spacing: 1px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `CONNECTIONS (${_M0IP016_24default__implPB4Show10to__stringGiE(self.connections.length)})`)];
  const _bind = rows.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const row = rows[_];
      _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(children, row);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["border-top: 1px solid #333", "padding-top: 12px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, children);
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model18view__eval__status(self) {
  let result;
  _L: {
    const _bind = self.eval_result;
    if (_bind === undefined) {
      return _M0FP319moonbit_2dcommunity7rabbita4html4text("");
    } else {
      const _Some = _bind;
      const _result = _Some;
      result = _result;
      break _L;
    }
  }
  if (result.has_cycle) {
    return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["background: #ff5252", "color: #fff", "padding: 8px 14px", "border-radius: 6px", "margin-bottom: 10px", "font-size: 0.85em"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "⚠ Cycle detected! Acyclic nodes evaluated, but cyclic nodes are skipped.");
  } else {
    if (result.errors.length > 0) {
      const msg = _M0MPC15array5Array3mapGUisEsE(result.errors, (e) => {
        let id;
        let err;
        _L$2: {
          const _id = e._0;
          const _err = e._1;
          id = _id;
          err = _err;
          break _L$2;
        }
        return `Node #${_M0IP016_24default__implPB4Show10to__stringGiE(id)}: ${_M0IPC16string6StringPB4Show10to__string(err)}`;
      });
      return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["background: #ff9800", "color: #000", "padding: 8px 14px", "border-radius: 6px", "margin-bottom: 10px", "font-size: 0.85em"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `⚠ ${_M0IP016_24default__implPB4Show10to__stringGiE(msg.length)} error(s) during evaluation`);
    } else {
      return _M0FP319moonbit_2dcommunity7rabbita4html4text("");
    }
  }
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model12view__editor(self, dispatch) {
  return _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 10px", "margin-bottom: 12px", "padding: 10px 14px", "background: linear-gradient(135deg, #16213e, #0f3460)", "border-radius: 8px", "border: 1px solid #1b2838"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 14px", "background: rgba(255,255,255,0.08)", "color: #ccc", "border: 1px solid #ffffff15", "border-radius: 6px", "cursor: pointer"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang9nodegraph8frontend3app3Msg8GoToList__), undefined, "← Back"), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["flex: 1", "font-weight: 700", "font-size: 1.1em", "letter-spacing: 2px", "color: #e94560"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "EDITOR"), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 14px", "border: none", "border-radius: 4px", "cursor: pointer", "font-weight: 600", self.auto_eval ? "background: #4CAF50; color: #fff" : "background: #333; color: #888"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang9nodegraph8frontend3app3Msg14ToggleAutoEval__), undefined, self.auto_eval ? "Auto: ON" : "Auto: OFF"), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 14px", "background: #e94560", "color: #fff", "border: none", "border-radius: 4px", "cursor: pointer", "font-weight: 600"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang9nodegraph8frontend3app3Msg8Evaluate__), undefined, "▶ Evaluate"), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 14px", "border: none", "border-radius: 4px", "cursor: pointer", self.show_palette ? "background: #0f3460; color: #e94560" : "background: #e94560; color: #fff"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang9nodegraph8frontend3app3Msg13TogglePalette__), undefined, self.show_palette ? "Close Palette" : "+ Add Node")]), self.connecting_from_node !== 0 ? _M0MP48bobzhang9nodegraph8frontend3app5Model21view__connect__banner(self, dispatch) : _M0FP319moonbit_2dcommunity7rabbita4html4text(""), self.show_palette ? _M0MP48bobzhang9nodegraph8frontend3app5Model13view__palette(self, dispatch) : _M0FP319moonbit_2dcommunity7rabbita4html4text(""), _M0MP48bobzhang9nodegraph8frontend3app5Model18view__eval__status(self), _M0MP48bobzhang9nodegraph8frontend3app5Model11view__nodes(self, dispatch), _M0MP48bobzhang9nodegraph8frontend3app5Model17view__connections(self, dispatch), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["text-align: center", "padding: 12px", "margin-top: 8px", "font-size: 0.65em", "color: #444", "letter-spacing: 1px", "border-top: 1px solid #1b2838"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Built with MoonBit + TEA · Type-safe visual dataflow · Same validation runs on frontend & backend")]);
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model11view__error(self, dispatch) {
  if (self.error.length === 0) {
    return _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["background: #ff5252", "color: #fff", "padding: 10px 16px", "border-radius: 6px", "margin-bottom: 12px", "display: flex", "justify-content: space-between", "align-items: center"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4spanGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, self.error), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["background: none", "border: none", "color: #fff", "cursor: pointer", "font-size: 1.1em"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang9nodegraph8frontend3app3Msg10ClearError__), undefined, "✕")]);
}
function _M0FP48bobzhang9nodegraph8frontend3app17port__legend__dot(color, label) {
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["width: 8px", "height: 8px", "border-radius: 50%", `background: ${_M0IPC16string6StringPB4Show10to__string(color)}`, `box-shadow: 0 0 6px ${_M0IPC16string6StringPB4Show10to__string(color)}60`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 0.7em", `color: ${_M0IPC16string6StringPB4Show10to__string(color)}`], undefined, undefined, undefined, -1, undefined, label)]);
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model17view__graph__list(self, dispatch) {
  const cards = _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared10SavedGraphRP319moonbit_2dcommunity7rabbita4html4HtmlE(self.graphs, (g) => _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "padding: 14px", "background: #16213e", "border-radius: 8px", "gap: 12px", "margin-bottom: 8px", "border: 1px solid #0f3460"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-size: 1.3em"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "📊"), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["flex: 1"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-weight: 600", "font-size: 0.95em"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, g.name), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-size: 0.7em", "color: #888"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `Graph #${_M0IP016_24default__implPB4Show10to__stringGiE(g.id)}`)]), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 8px 16px", "background: #e94560", "color: #fff", "border: none", "border-radius: 6px", "cursor: pointer", "font-weight: 600"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg10GoToEditor(g.id)), undefined, "Open"), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 8px 12px", "background: #333", "color: #999", "border: none", "border-radius: 6px", "cursor: pointer"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg11DeleteGraph(g.id)), undefined, "✕")]));
  return _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["text-align: center", "padding: 32px 20px 24px", "background: linear-gradient(135deg, #16213e, #0f3460, #1a1a2e)", "border-radius: 12px", "margin-bottom: 20px", "border: 1px solid #e9456030"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html10h1_2einnerGsE(["font-size: 1.8em", "letter-spacing: 4px", "color: #e94560", "margin-bottom: 6px"], undefined, undefined, undefined, -1, undefined, undefined, "NODE GRAPH"), _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(["color: #888", "font-size: 0.85em", "letter-spacing: 1px"], undefined, undefined, undefined, -1, undefined, "Type-safe visual dataflow · Powered by MoonBit"), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 16px", "justify-content: center", "margin-top: 14px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP48bobzhang9nodegraph8frontend3app17port__legend__dot("#4CAF50", "Number"), _M0FP48bobzhang9nodegraph8frontend3app17port__legend__dot("#FF9800", "String"), _M0FP48bobzhang9nodegraph8frontend3app17port__legend__dot("#2196F3", "Bool"), _M0FP48bobzhang9nodegraph8frontend3app17port__legend__dot("#E91E63", "Color")])]), _M0FP319moonbit_2dcommunity7rabbita4html12form_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 8px", "margin-bottom: 20px"], undefined, undefined, undefined, -1, undefined, undefined, dispatch(_M0DTP48bobzhang9nodegraph8frontend3app3Msg11CreateGraph__), undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, self.new_graph_name, -1, -1, -1, undefined, "New graph name...", undefined, ["flex: 1", "padding: 10px", "background: #16213e", "border: 1px solid #0f3460", "border-radius: 6px", "color: #eee", "font-family: inherit"], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (v) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg12SetGraphName(v)), undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 10px 20px", "background: #e94560", "color: #fff", "border: none", "border-radius: 6px", "cursor: pointer", "font-weight: 600"], undefined, undefined, undefined, -1, "submit", -1, undefined, undefined, -1, undefined, undefined, "+ Create")]), _M0MPC15array5Array9is__emptyGRP38bobzhang9nodegraph6shared10SavedGraphE(self.graphs) ? _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(["color: #666", "text-align: center", "padding: 40px"], undefined, undefined, undefined, -1, undefined, "No graphs yet. Create one to start building!") : _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, cards)]);
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model4view(self, dispatch) {
  const _tmp = ["max-width: 1100px", "margin: 0 auto", "padding: 16px", "font-family: 'SF Mono', 'Fira Code', monospace", "color: #e0e0e0"];
  const _tmp$2 = _M0MP48bobzhang9nodegraph8frontend3app5Model11view__error(self, dispatch);
  const _bind = self.page;
  let _tmp$3;
  if (_bind === 0) {
    _tmp$3 = _M0MP48bobzhang9nodegraph8frontend3app5Model17view__graph__list(self, dispatch);
  } else {
    _tmp$3 = _M0MP48bobzhang9nodegraph8frontend3app5Model12view__editor(self, dispatch);
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _tmp$3]);
}
function _M0FP48bobzhang9nodegraph8frontend3app3api(path) {
  return path;
}
function _M0FP48bobzhang9nodegraph8frontend3app13fetch__graphs(dispatch) {
  return _M0FP319moonbit_2dcommunity7rabbita4http3getGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(_M0FP48bobzhang9nodegraph8frontend3app3api(_M0FP38bobzhang9nodegraph6shared11api__graphs), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE4Json((r) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg9GotGraphs(r)), (json) => {
    let _try_err;
    _L: {
      const _bind = _M0FPC14json10from__jsonGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEE(json, undefined);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L;
      }
      return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEsE2Ok(_tmp);
    }
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang9nodegraph6shared10SavedGraphEsE3Err("decode error");
  }));
}
function _M0FP48bobzhang9nodegraph8frontend3app12fetch__graph(dispatch, id) {
  return _M0FP319moonbit_2dcommunity7rabbita4http3getGRP38bobzhang9nodegraph6shared5GraphE(_M0FP48bobzhang9nodegraph8frontend3app3api(_M0FP38bobzhang9nodegraph6shared10api__graph(id)), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared5GraphE4Json((r) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg8GotGraph(r)), (json) => {
    let _try_err;
    _L: {
      const _bind = _M0FPC14json10from__jsonGRP38bobzhang9nodegraph6shared5GraphE(json, undefined);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L;
      }
      return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphsE2Ok(_tmp);
    }
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared5GraphsE3Err("decode error");
  }));
}
function _M0FP48bobzhang9nodegraph8frontend3app12do__evaluate(dispatch, graph_id) {
  const _tmp = _M0FP48bobzhang9nodegraph8frontend3app3api(_M0FP38bobzhang9nodegraph6shared20api__graph__evaluate(graph_id));
  const _bind = [];
  return _M0FP319moonbit_2dcommunity7rabbita4http4postGRP38bobzhang9nodegraph6shared10ConnectionE(_tmp, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0)))), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10EvalResultE4Json((r) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg13GotEvalResult(r)), (json) => {
    let _try_err;
    _L: {
      const _bind$2 = _M0FPC14json10from__jsonGRP38bobzhang9nodegraph6shared10EvalResultE(json, undefined);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L;
      }
      return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultsE2Ok(_tmp$2);
    }
    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10EvalResultsE3Err("decode error");
  }));
}
function _M0FP48bobzhang9nodegraph8frontend3app15auto__eval__cmd(model, dispatch) {
  return model.auto_eval && model.current_graph_id > 0 ? _M0FP48bobzhang9nodegraph8frontend3app12do__evaluate(dispatch, model.current_graph_id) : _M0FP319moonbit_2dcommunity7rabbita3cmd4none;
}
function _M0MP48bobzhang9nodegraph8frontend3app5Model6update(self, msg, dispatch) {
  let e;
  _L: {
    let result;
    _L$2: {
      let id;
      _L$3: {
        let id$2;
        _L$4: {
          let e$2;
          _L$5: {
            let c;
            _L$6: {
              let to_node;
              let to_port;
              _L$7: {
                let client_x;
                let client_y;
                _L$8: {
                  let node_id;
                  let port;
                  _L$9: {
                    let v;
                    _L$10: {
                      let node_id$2;
                      let current;
                      _L$11: {
                        let client_x$2;
                        let client_y$2;
                        _L$12: {
                          let client_x$3;
                          let node_id$3;
                          let client_y$3;
                          _L$13: {
                            let id$3;
                            _L$14: {
                              let id$4;
                              _L$15: {
                                let e$3;
                                _L$16: {
                                  let node;
                                  _L$17: {
                                    let kind;
                                    _L$18: {
                                      let c$2;
                                      _L$19: {
                                        let e$4;
                                        _L$20: {
                                          let graph;
                                          _L$21: {
                                            let id$5;
                                            _L$22: {
                                              let id$6;
                                              _L$23: {
                                                let e$5;
                                                _L$24: {
                                                  let g;
                                                  _L$25: {
                                                    let v$2;
                                                    _L$26: {
                                                      let e$6;
                                                      _L$27: {
                                                        let graphs;
                                                        _L$28: {
                                                          let id$7;
                                                          _L$29: {
                                                            switch (msg.$tag) {
                                                              case 0: {
                                                                return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, true, self.error), _1: _M0FP48bobzhang9nodegraph8frontend3app13fetch__graphs(dispatch) };
                                                              }
                                                              case 1: {
                                                                return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(0, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, 0, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, 0, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP48bobzhang9nodegraph8frontend3app13fetch__graphs(dispatch) };
                                                              }
                                                              case 2: {
                                                                const _GoToEditor = msg;
                                                                const _id = _GoToEditor._0;
                                                                id$7 = _id;
                                                                break _L$29;
                                                              }
                                                              case 3: {
                                                                const _GotGraphs = msg;
                                                                const _x = _GotGraphs._0;
                                                                if (_x.$tag === 1) {
                                                                  const _Ok = _x;
                                                                  const _graphs = _Ok._0;
                                                                  graphs = _graphs;
                                                                  break _L$28;
                                                                } else {
                                                                  const _Err = _x;
                                                                  const _e = _Err._0;
                                                                  e$6 = _e;
                                                                  break _L$27;
                                                                }
                                                              }
                                                              case 4: {
                                                                const _SetGraphName = msg;
                                                                const _v = _SetGraphName._0;
                                                                v$2 = _v;
                                                                break _L$26;
                                                              }
                                                              case 5: {
                                                                if (!_M0FP38bobzhang9nodegraph6shared21validate__graph__name(self.new_graph_name)) {
                                                                  return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, "Name required"), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                }
                                                                const _tmp = _M0FP48bobzhang9nodegraph8frontend3app3api(_M0FP38bobzhang9nodegraph6shared11api__graphs);
                                                                const _bind = [{ _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(self.new_graph_name) }];
                                                                const cmd = _M0FP319moonbit_2dcommunity7rabbita4http4postGRP38bobzhang9nodegraph6shared10ConnectionE(_tmp, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 1)))), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10SavedGraphE4Json((r) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg12GraphCreated(r)), (json) => {
                                                                  let _try_err;
                                                                  _L$30: {
                                                                    const _bind$2 = _M0FPC14json10from__jsonGRP38bobzhang9nodegraph6shared10SavedGraphE(json, undefined);
                                                                    let _tmp$2;
                                                                    if (_bind$2.$tag === 1) {
                                                                      const _ok = _bind$2;
                                                                      _tmp$2 = _ok._0;
                                                                    } else {
                                                                      const _err = _bind$2;
                                                                      _try_err = _err._0;
                                                                      break _L$30;
                                                                    }
                                                                    return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphsE2Ok(_tmp$2);
                                                                  }
                                                                  return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10SavedGraphsE3Err("decode error");
                                                                }));
                                                                return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, ""), _1: cmd };
                                                              }
                                                              case 6: {
                                                                const _GraphCreated = msg;
                                                                const _x$2 = _GraphCreated._0;
                                                                if (_x$2.$tag === 1) {
                                                                  const _Ok = _x$2;
                                                                  const _g = _Ok._0;
                                                                  g = _g;
                                                                  break _L$25;
                                                                } else {
                                                                  const _Err = _x$2;
                                                                  const _e = _Err._0;
                                                                  e$5 = _e;
                                                                  break _L$24;
                                                                }
                                                              }
                                                              case 7: {
                                                                const _DeleteGraph = msg;
                                                                const _id$2 = _DeleteGraph._0;
                                                                id$6 = _id$2;
                                                                break _L$23;
                                                              }
                                                              case 8: {
                                                                const _GraphDeleted = msg;
                                                                const _x$3 = _GraphDeleted._0;
                                                                if (_x$3.$tag === 1) {
                                                                  const _Ok = _x$3;
                                                                  const _id$3 = _Ok._0;
                                                                  id$5 = _id$3;
                                                                  break _L$22;
                                                                } else {
                                                                  return { _0: self, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                }
                                                              }
                                                              case 9: {
                                                                const _GotGraph = msg;
                                                                const _x$4 = _GotGraph._0;
                                                                if (_x$4.$tag === 1) {
                                                                  const _Ok = _x$4;
                                                                  const _graph = _Ok._0;
                                                                  graph = _graph;
                                                                  break _L$21;
                                                                } else {
                                                                  const _Err = _x$4;
                                                                  const _e = _Err._0;
                                                                  e$4 = _e;
                                                                  break _L$20;
                                                                }
                                                              }
                                                              case 10: {
                                                                return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, !self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                              }
                                                              case 11: {
                                                                const _SetPaletteCat = msg;
                                                                const _c = _SetPaletteCat._0;
                                                                c$2 = _c;
                                                                break _L$19;
                                                              }
                                                              case 12: {
                                                                const _AddNode = msg;
                                                                const _kind = _AddNode._0;
                                                                kind = _kind;
                                                                break _L$18;
                                                              }
                                                              case 13: {
                                                                const _NodeAdded = msg;
                                                                const _x$5 = _NodeAdded._0;
                                                                if (_x$5.$tag === 1) {
                                                                  const _Ok = _x$5;
                                                                  const _node = _Ok._0;
                                                                  node = _node;
                                                                  break _L$17;
                                                                } else {
                                                                  const _Err = _x$5;
                                                                  const _e = _Err._0;
                                                                  e$3 = _e;
                                                                  break _L$16;
                                                                }
                                                              }
                                                              case 14: {
                                                                const _DeleteNode = msg;
                                                                const _id$3 = _DeleteNode._0;
                                                                id$4 = _id$3;
                                                                break _L$15;
                                                              }
                                                              case 15: {
                                                                const _NodeDeleted = msg;
                                                                const _x$6 = _NodeDeleted._0;
                                                                if (_x$6.$tag === 1) {
                                                                  const _Ok = _x$6;
                                                                  const _id$4 = _Ok._0;
                                                                  id$3 = _id$4;
                                                                  break _L$14;
                                                                } else {
                                                                  return { _0: self, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                }
                                                              }
                                                              case 21: {
                                                                const _StartDrag = msg;
                                                                const _node_id = _StartDrag._0;
                                                                const _client_x = _StartDrag._1;
                                                                const _client_y = _StartDrag._2;
                                                                client_x$3 = _client_x;
                                                                node_id$3 = _node_id;
                                                                client_y$3 = _client_y;
                                                                break _L$13;
                                                              }
                                                              case 22: {
                                                                const _Drag = msg;
                                                                const _client_x$2 = _Drag._0;
                                                                const _client_y$2 = _Drag._1;
                                                                client_x$2 = _client_x$2;
                                                                client_y$2 = _client_y$2;
                                                                break _L$12;
                                                              }
                                                              case 23: {
                                                                if (self.dragging_node === 0) {
                                                                  return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, 0, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                }
                                                                const node_id$4 = self.dragging_node;
                                                                const nx = new _M0TPB8MutLocalGiE(0);
                                                                const ny = new _M0TPB8MutLocalGiE(0);
                                                                const _bind$2 = self.nodes;
                                                                const _bind$3 = _bind$2.length;
                                                                let _tmp$2 = 0;
                                                                while (true) {
                                                                  const _ = _tmp$2;
                                                                  if (_ < _bind$3) {
                                                                    const n = _bind$2[_];
                                                                    if (n.id === node_id$4) {
                                                                      nx.val = n.x;
                                                                      ny.val = n.y;
                                                                    }
                                                                    _tmp$2 = _ + 1 | 0;
                                                                    continue;
                                                                  } else {
                                                                    break;
                                                                  }
                                                                }
                                                                const _tmp$3 = _M0FP48bobzhang9nodegraph8frontend3app3api(_M0FP38bobzhang9nodegraph6shared16api__graph__node(self.current_graph_id, node_id$4));
                                                                const _bind$4 = [{ _0: "config", _1: _M0IPC16string6StringPB6ToJson8to__json("") }, { _0: "label", _1: _M0IPC16string6StringPB6ToJson8to__json("") }, { _0: "x", _1: _M0IPC13int3IntPB6ToJson8to__json(nx.val) }, { _0: "y", _1: _M0IPC13int3IntPB6ToJson8to__json(ny.val) }];
                                                                const cmd$2 = _M0FP319moonbit_2dcommunity7rabbita4http4postGRP38bobzhang9nodegraph6shared10ConnectionE(_tmp$3, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 4)))), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB4JsonE4Json((r) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg17NodePositionSaved(_M0MPC16result6Result3mapGRPB4JsonsuE(r, (_j) => {
                                                                }))), (json) => new _M0DTPC16result6ResultGRPB4JsonsE2Ok(json)));
                                                                return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, 0, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: cmd$2 };
                                                              }
                                                              case 24: {
                                                                return { _0: self, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                              }
                                                              case 16: {
                                                                const _StartEditConfig = msg;
                                                                const _node_id$2 = _StartEditConfig._0;
                                                                const _current = _StartEditConfig._1;
                                                                node_id$2 = _node_id$2;
                                                                current = _current;
                                                                break _L$11;
                                                              }
                                                              case 17: {
                                                                const _SetConfigValue = msg;
                                                                const _v$2 = _SetConfigValue._0;
                                                                v = _v$2;
                                                                break _L$10;
                                                              }
                                                              case 19: {
                                                                return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, 0, "", self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                              }
                                                              case 18: {
                                                                if (self.editing_node === 0) {
                                                                  return { _0: self, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                }
                                                                const _tmp$4 = _M0FP48bobzhang9nodegraph8frontend3app3api(_M0FP38bobzhang9nodegraph6shared16api__graph__node(self.current_graph_id, self.editing_node));
                                                                const _bind$5 = [{ _0: "config", _1: _M0IPC16string6StringPB6ToJson8to__json(self.config_value) }, { _0: "label", _1: _M0IPC16string6StringPB6ToJson8to__json(self.config_value) }];
                                                                const cmd$3 = _M0FP319moonbit_2dcommunity7rabbita4http4postGRP38bobzhang9nodegraph6shared10ConnectionE(_tmp$4, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$5, 0, 2)))), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB4JsonE4Json((r) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg11ConfigSaved(_M0MPC16result6Result3mapGRPB4JsonsuE(r, (_json) => {
                                                                }))), (json) => new _M0DTPC16result6ResultGRPB4JsonsE2Ok(json)));
                                                                const nodes = _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared4NodeRP38bobzhang9nodegraph6shared4NodeE(self.nodes, (n) => {
                                                                  if (n.id === self.editing_node) {
                                                                    const _bind$6 = self.config_value;
                                                                    const _bind$7 = self.config_value;
                                                                    return new _M0TP38bobzhang9nodegraph6shared4Node(n.id, n.kind, n.x, n.y, _bind$7, _bind$6);
                                                                  } else {
                                                                    return n;
                                                                  }
                                                                });
                                                                const m = new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, 0, "", self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error);
                                                                return { _0: m, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd5batch([cmd$3, _M0FP48bobzhang9nodegraph8frontend3app15auto__eval__cmd(m, dispatch)]) };
                                                              }
                                                              case 20: {
                                                                return { _0: self, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                              }
                                                              case 25: {
                                                                const _StartConnect = msg;
                                                                const _node_id$3 = _StartConnect._0;
                                                                const _port = _StartConnect._1;
                                                                node_id = _node_id$3;
                                                                port = _port;
                                                                break _L$9;
                                                              }
                                                              case 26: {
                                                                const _WireMove = msg;
                                                                const _client_x$3 = _WireMove._0;
                                                                const _client_y$3 = _WireMove._1;
                                                                client_x = _client_x$3;
                                                                client_y = _client_y$3;
                                                                break _L$8;
                                                              }
                                                              case 28: {
                                                                return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, 0, 0, 0, 0, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                              }
                                                              case 27: {
                                                                const _CompleteConnect = msg;
                                                                const _to_node = _CompleteConnect._0;
                                                                const _to_port = _CompleteConnect._1;
                                                                to_node = _to_node;
                                                                to_port = _to_port;
                                                                break _L$7;
                                                              }
                                                              case 29: {
                                                                const _ConnectionAdded = msg;
                                                                const _x$7 = _ConnectionAdded._0;
                                                                if (_x$7.$tag === 1) {
                                                                  const _Ok = _x$7;
                                                                  const _c$2 = _Ok._0;
                                                                  c = _c$2;
                                                                  break _L$6;
                                                                } else {
                                                                  const _Err = _x$7;
                                                                  const _e = _Err._0;
                                                                  e$2 = _e;
                                                                  break _L$5;
                                                                }
                                                              }
                                                              case 30: {
                                                                const _DeleteConnection = msg;
                                                                const _id$4 = _DeleteConnection._0;
                                                                id$2 = _id$4;
                                                                break _L$4;
                                                              }
                                                              case 31: {
                                                                const _ConnectionDeleted = msg;
                                                                const _x$8 = _ConnectionDeleted._0;
                                                                if (_x$8.$tag === 1) {
                                                                  const _Ok = _x$8;
                                                                  const _id$5 = _Ok._0;
                                                                  id = _id$5;
                                                                  break _L$3;
                                                                } else {
                                                                  return { _0: self, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                }
                                                              }
                                                              case 32: {
                                                                return { _0: self, _1: _M0FP48bobzhang9nodegraph8frontend3app12do__evaluate(dispatch, self.current_graph_id) };
                                                              }
                                                              case 33: {
                                                                const _GotEvalResult = msg;
                                                                const _x$9 = _GotEvalResult._0;
                                                                if (_x$9.$tag === 1) {
                                                                  const _Ok = _x$9;
                                                                  const _result = _Ok._0;
                                                                  result = _result;
                                                                  break _L$2;
                                                                } else {
                                                                  const _Err = _x$9;
                                                                  const _e = _Err._0;
                                                                  e = _e;
                                                                  break _L;
                                                                }
                                                              }
                                                              case 34: {
                                                                const m$2 = new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, !self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error);
                                                                return { _0: m$2, _1: m$2.auto_eval ? _M0FP48bobzhang9nodegraph8frontend3app15auto__eval__cmd(m$2, dispatch) : _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                              }
                                                              default: {
                                                                return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, ""), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                              }
                                                            }
                                                          }
                                                          return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(1, self.graphs, id$7, self.nodes, self.connections, undefined, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, true, self.error), _1: _M0FP48bobzhang9nodegraph8frontend3app12fetch__graph(dispatch, id$7) };
                                                        }
                                                        return self.first_load && graphs.length > 0 ? { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(1, graphs, _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(graphs, 0).id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, false, true, self.error), _1: _M0FP48bobzhang9nodegraph8frontend3app12fetch__graph(dispatch, _M0MPC15array5Array2atGRP38bobzhang9nodegraph6shared10SavedGraphE(graphs, 0).id) } : { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, false, false, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                      }
                                                      return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, false, e$6), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                    }
                                                    return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, v$2, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                  }
                                                  const graphs = _M0MPC15array5Array4copyGRP38bobzhang9nodegraph6shared10ConnectionE(self.graphs);
                                                  _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(graphs, g);
                                                  return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, "", self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                }
                                                return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, e$5), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                              }
                                              const cmd = _M0FP319moonbit_2dcommunity7rabbita4http6deleteGuE(_M0FP48bobzhang9nodegraph8frontend3app3api(_M0FP38bobzhang9nodegraph6shared10api__graph(id$6)), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text((r) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg12GraphDeleted(_M0MPC16result6Result3mapGssiE(r, (_discard_) => id$6)))));
                                              return { _0: self, _1: cmd };
                                            }
                                            const graphs = _M0MPC15array5Array6filterGRP38bobzhang9nodegraph6shared10SavedGraphE(self.graphs, (g) => g.id !== id$5);
                                            return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                          }
                                          const m = new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, graph.nodes, graph.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, false, self.error);
                                          return { _0: m, _1: _M0FP48bobzhang9nodegraph8frontend3app15auto__eval__cmd(m, dispatch) };
                                        }
                                        return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, false, e$4), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                      }
                                      return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, c$2, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                    }
                                    const label = _M0FP38bobzhang9nodegraph6shared11node__label(kind);
                                    let config;
                                    switch (kind) {
                                      case 17: {
                                        config = "0";
                                        break;
                                      }
                                      case 18: {
                                        config = "hello";
                                        break;
                                      }
                                      case 19: {
                                        config = "true";
                                        break;
                                      }
                                      case 20: {
                                        config = "#ff0000";
                                        break;
                                      }
                                      default: {
                                        config = "";
                                      }
                                    }
                                    const _tmp = _M0FP48bobzhang9nodegraph8frontend3app3api(_M0FP38bobzhang9nodegraph6shared17api__graph__nodes(self.current_graph_id));
                                    const _bind = [{ _0: "kind", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0FP38bobzhang9nodegraph6shared16kind__to__string(kind)) }, { _0: "label", _1: _M0IPC16string6StringPB6ToJson8to__json(label) }, { _0: "config", _1: _M0IPC16string6StringPB6ToJson8to__json(config) }];
                                    const cmd = _M0FP319moonbit_2dcommunity7rabbita4http4postGRP38bobzhang9nodegraph6shared10ConnectionE(_tmp, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 3)))), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared4NodeE4Json((r) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg9NodeAdded(r)), (json) => {
                                      let _try_err;
                                      _L$19: {
                                        const _bind$2 = _M0FPC14json10from__jsonGRP38bobzhang9nodegraph6shared4NodeE(json, undefined);
                                        let _tmp$2;
                                        if (_bind$2.$tag === 1) {
                                          const _ok = _bind$2;
                                          _tmp$2 = _ok._0;
                                        } else {
                                          const _err = _bind$2;
                                          _try_err = _err._0;
                                          break _L$19;
                                        }
                                        return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodesE2Ok(_tmp$2);
                                      }
                                      return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared4NodesE3Err("decode error");
                                    }));
                                    return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, false, self.palette_cat, self.first_load, self.loading, ""), _1: cmd };
                                  }
                                  const nodes = _M0MPC15array5Array4copyGRP38bobzhang9nodegraph6shared10ConnectionE(self.nodes);
                                  _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(nodes, node);
                                  const m = new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error);
                                  return { _0: m, _1: _M0FP48bobzhang9nodegraph8frontend3app15auto__eval__cmd(m, dispatch) };
                                }
                                return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, e$3), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                              }
                              const cmd = _M0FP319moonbit_2dcommunity7rabbita4http6deleteGuE(_M0FP48bobzhang9nodegraph8frontend3app3api(_M0FP38bobzhang9nodegraph6shared16api__graph__node(self.current_graph_id, id$4)), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text((r) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg11NodeDeleted(_M0MPC16result6Result3mapGssiE(r, (_discard_) => id$4)))));
                              return { _0: self, _1: cmd };
                            }
                            const nodes = _M0MPC15array5Array6filterGRP38bobzhang9nodegraph6shared4NodeE(self.nodes, (n) => n.id !== id$3);
                            const connections = _M0MPC15array5Array6filterGRP38bobzhang9nodegraph6shared10ConnectionE(self.connections, (c$2) => c$2.from_node_id !== id$3 && c$2.to_node_id !== id$3);
                            const m = new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, nodes, connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, 0, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error);
                            return { _0: m, _1: _M0FP48bobzhang9nodegraph8frontend3app15auto__eval__cmd(m, dispatch) };
                          }
                          const nx = new _M0TPB8MutLocalGiE(0);
                          const ny = new _M0TPB8MutLocalGiE(0);
                          const _bind = self.nodes;
                          const _bind$2 = _bind.length;
                          let _tmp = 0;
                          while (true) {
                            const _ = _tmp;
                            if (_ < _bind$2) {
                              const n = _bind[_];
                              if (n.id === node_id$3) {
                                nx.val = n.x;
                                ny.val = n.y;
                              }
                              _tmp = _ + 1 | 0;
                              continue;
                            } else {
                              break;
                            }
                          }
                          return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, node_id$3, client_x$3 - nx.val | 0, client_y$3 - ny.val | 0, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                        }
                        if (self.dragging_node === 0) {
                          return { _0: self, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                        }
                        const new_x = client_x$2 - self.drag_offset_x | 0;
                        const new_y = client_y$2 - self.drag_offset_y | 0;
                        const nodes = _M0MPC15array5Array3mapGRP38bobzhang9nodegraph6shared4NodeRP38bobzhang9nodegraph6shared4NodeE(self.nodes, (n) => n.id === self.dragging_node ? new _M0TP38bobzhang9nodegraph6shared4Node(n.id, n.kind, new_x, new_y, n.label, n.config) : n);
                        return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                      }
                      return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, node_id$2, current, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                    }
                    return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, v, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                  }
                  return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, node_id, port, 0, 0, 0, 0, 0, 0, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                }
                if (self.wire_start_cx === 0 && self.wire_start_cy === 0) {
                  const ox = new _M0TPB8MutLocalGiE(0);
                  const oy = new _M0TPB8MutLocalGiE(0);
                  const _bind = self.nodes;
                  const _bind$2 = _bind.length;
                  let _tmp = 0;
                  while (true) {
                    const _ = _tmp;
                    if (_ < _bind$2) {
                      const n = _bind[_];
                      if (n.id === self.connecting_from_node) {
                        ox.val = n.x + _M0FP48bobzhang9nodegraph8frontend3app7node__w | 0;
                        const in_count = _M0FP38bobzhang9nodegraph6shared12input__ports(n.kind).length;
                        const _bind$3 = n.kind;
                        let has_cfg;
                        switch (_bind$3) {
                          case 17: {
                            has_cfg = true;
                            break;
                          }
                          case 18: {
                            has_cfg = true;
                            break;
                          }
                          case 19: {
                            has_cfg = true;
                            break;
                          }
                          case 20: {
                            has_cfg = true;
                            break;
                          }
                          default: {
                            has_cfg = false;
                          }
                        }
                        const cfg_h = has_cfg ? 32 : 0;
                        const ins_h = in_count > 0 ? 16 + (Math.imul(in_count, _M0FP48bobzhang9nodegraph8frontend3app12port__stride) | 0) | 0 : 0;
                        oy.val = (((((n.y + _M0FP48bobzhang9nodegraph8frontend3app9header__h | 0) + cfg_h | 0) + ins_h | 0) + 16 | 0) + (Math.imul(self.connecting_from_port, _M0FP48bobzhang9nodegraph8frontend3app12port__stride) | 0) | 0) + 8 | 0;
                      }
                      _tmp = _ + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, ox.val, oy.val, client_x, client_y, ox.val, oy.val, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                } else {
                  const wx = self.wire_origin_x + (client_x - self.wire_start_cx | 0) | 0;
                  const wy = self.wire_origin_y + (client_y - self.wire_start_cy | 0) | 0;
                  return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, wx, wy, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                }
              }
              const from_node = self.connecting_from_node;
              const from_port = self.connecting_from_port;
              const graph = new _M0TP38bobzhang9nodegraph6shared5Graph(self.nodes, self.connections);
              let err;
              _L$8: {
                _L$9: {
                  const _bind = _M0FP38bobzhang9nodegraph6shared20validate__connection(graph, from_node, from_port, to_node, to_port);
                  if (_bind === undefined) {
                  } else {
                    const _Some = _bind;
                    const _err = _Some;
                    err = _err;
                    break _L$9;
                  }
                  break _L$8;
                }
                return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, 0, 0, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, err), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
              }
              const _tmp = _M0FP48bobzhang9nodegraph8frontend3app3api(_M0FP38bobzhang9nodegraph6shared23api__graph__connections(self.current_graph_id));
              const _bind = [{ _0: "from_node_id", _1: _M0IPC13int3IntPB6ToJson8to__json(from_node) }, { _0: "from_port", _1: _M0IPC13int3IntPB6ToJson8to__json(from_port) }, { _0: "to_node_id", _1: _M0IPC13int3IntPB6ToJson8to__json(to_node) }, { _0: "to_port", _1: _M0IPC13int3IntPB6ToJson8to__json(to_port) }];
              const cmd = _M0FP319moonbit_2dcommunity7rabbita4http4postGRP38bobzhang9nodegraph6shared10ConnectionE(_tmp, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 4)))), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang9nodegraph6shared10ConnectionE4Json((r) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg15ConnectionAdded(r)), (json) => {
                let _try_err;
                _L$9: {
                  const _bind$2 = _M0FPC14json10from__jsonGRP38bobzhang9nodegraph6shared10ConnectionE(json, undefined);
                  let _tmp$2;
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _tmp$2 = _ok._0;
                  } else {
                    const _err = _bind$2;
                    _try_err = _err._0;
                    break _L$9;
                  }
                  return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionsE2Ok(_tmp$2);
                }
                return new _M0DTPC16result6ResultGRP38bobzhang9nodegraph6shared10ConnectionsE3Err("decode error");
              }));
              return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, 0, 0, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, ""), _1: cmd };
            }
            const connections = _M0MPC15array5Array4copyGRP38bobzhang9nodegraph6shared10ConnectionE(self.connections);
            _M0MPC15array5Array4pushGRP38bobzhang9nodegraph6shared10ConnectionE(connections, c);
            const m = new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error);
            return { _0: m, _1: _M0FP48bobzhang9nodegraph8frontend3app15auto__eval__cmd(m, dispatch) };
          }
          return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, e$2), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
        }
        const cmd = _M0FP319moonbit_2dcommunity7rabbita4http6deleteGuE(_M0FP48bobzhang9nodegraph8frontend3app3api(_M0FP38bobzhang9nodegraph6shared22api__graph__connection(self.current_graph_id, id$2)), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text((r) => dispatch(new _M0DTP48bobzhang9nodegraph8frontend3app3Msg17ConnectionDeleted(_M0MPC16result6Result3mapGssiE(r, (_discard_) => id$2)))));
        return { _0: self, _1: cmd };
      }
      const connections = _M0MPC15array5Array6filterGRP38bobzhang9nodegraph6shared10ConnectionE(self.connections, (c) => c.id !== id);
      const m = new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error);
      return { _0: m, _1: _M0FP48bobzhang9nodegraph8frontend3app15auto__eval__cmd(m, dispatch) };
    }
    return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, self.error), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
  }
  return { _0: new _M0TP48bobzhang9nodegraph8frontend3app5Model(self.page, self.graphs, self.current_graph_id, self.nodes, self.connections, self.eval_result, self.auto_eval, self.dragging_node, self.drag_offset_x, self.drag_offset_y, self.connecting_from_node, self.connecting_from_port, self.wire_mouse_x, self.wire_mouse_y, self.wire_start_cx, self.wire_start_cy, self.wire_origin_x, self.wire_origin_y, self.editing_node, self.config_value, self.new_graph_name, self.show_palette, self.palette_cat, self.first_load, self.loading, e), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
}
(() => {
  let dispatch;
  let app_cell;
  _L: {
    const _bind = _M0FP219moonbit_2dcommunity7rabbita20cell__with__dispatchGRP48bobzhang9nodegraph8frontend3app5ModelRP48bobzhang9nodegraph8frontend3app3MsgE(new _M0TP48bobzhang9nodegraph8frontend3app5Model(0, [], 0, [], [], undefined, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", "", false, "", true, false, ""), (dispatch$2, msg, model) => {
      let model$2;
      let cmd;
      _L$2: {
        const _bind$2 = _M0MP48bobzhang9nodegraph8frontend3app5Model6update(model, msg, dispatch$2);
        const _model = _bind$2._0;
        const _cmd = _bind$2._1;
        model$2 = _model;
        cmd = _cmd;
        break _L$2;
      }
      return { _0: cmd, _1: model$2 };
    }, (dispatch$2, model) => _M0MP48bobzhang9nodegraph8frontend3app5Model4view(model, dispatch$2));
    const _dispatch = _bind._0;
    const _app_cell = _bind._1;
    dispatch = _dispatch;
    app_cell = _app_cell;
    break _L;
  }
  const app = _M0FP219moonbit_2dcommunity7rabbita3new(app_cell);
  _M0MP219moonbit_2dcommunity7rabbita3App10with__init(app, dispatch(_M0DTP48bobzhang9nodegraph8frontend3app3Msg4Init__));
  _M0MP219moonbit_2dcommunity7rabbita3App5mount(app, "app");
})();
//# sourceMappingURL=frontend.js.map
