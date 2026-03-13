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
const $_1L = { hi: -1, lo: -1 };
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
const $9221120237041090561L = { hi: 2146959360, lo: 1 };
const $9218868437227405312L = { hi: 2146435072, lo: 0 };
const $2L = { hi: 0, lo: 2 };
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
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
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPC13ref3RefGiE(param0) {
  this.val = param0;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPC13ref3RefGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGRP38bobzhang8taskflow6shared7CommentE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGusE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGusE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGusE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGusE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEsE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponsesE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponsesE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponsesE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponsesE2Ok.prototype.$tag = 1;
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some.prototype.$tag = 1;
function _M0TPB12MutArrayViewGRP38bobzhang8taskflow6shared4TaskE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
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
function _M0TPC13ref3RefGORPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGORPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGORPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGORPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(param0) {
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
const $9218868437227405311L = { hi: 2146435071, lo: -1 };
const $_4503599627370497L = { hi: -1048577, lo: -1 };
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
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelERPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelERPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelERPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelERPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
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
function _M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
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
function _M0TPC15queue5QueueGRP38bobzhang8taskflow8frontend3MsgE(param0, param1, param2) {
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
function _M0TPC13ref3RefGRP38bobzhang8taskflow8frontend5ModelE(param0) {
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
function _M0TPC13ref3RefGOiE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared10DependencyRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared10DependencyRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared10DependencyRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared10DependencyRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang8taskflow6shared10Dependency(param0, param1) {
  this.task_id = param0;
  this.depends_on_id = param1;
}
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared9TaskLabelRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared9TaskLabelRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared9TaskLabelRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared9TaskLabelRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang8taskflow6shared9TaskLabel(param0, param1) {
  this.task_id = param0;
  this.label_id = param1;
}
function _M0TPC13ref3RefGOsE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared8ActivityRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared8ActivityRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared8ActivityRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared8ActivityRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang8taskflow6shared8Activity(param0, param1, param2, param3, param4, param5, param6) {
  this.id = param0;
  this.task_id = param1;
  this.task_title = param2;
  this.from_status = param3;
  this.to_status = param4;
  this.timestamp = param5;
  this.user_name = param6;
}
function _M0TPC13ref3RefGORPB5ArrayGRP38bobzhang8taskflow6shared4TaskEE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskEE4Some.prototype.$tag = 1;
function _M0TPC13ref3RefGORPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelEE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelEE4Some.prototype.$tag = 1;
function _M0TPC13ref3RefGORPB5ArrayGRP38bobzhang8taskflow6shared6MemberEE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberEE4Some.prototype.$tag = 1;
function _M0TPC13ref3RefGORPB5ArrayGRP38bobzhang8taskflow6shared5LabelEE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelEE4Some.prototype.$tag = 1;
function _M0TPC13ref3RefGORPB5ArrayGRP38bobzhang8taskflow6shared10DependencyEE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyEE4Some.prototype.$tag = 1;
function _M0TPC13ref3RefGORPB5ArrayGRP38bobzhang8taskflow6shared8ActivityEE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityEE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang8taskflow6shared5Board(param0, param1, param2, param3, param4, param5, param6) {
  this.tasks = param0;
  this.members = param1;
  this.activities = param2;
  this.dependencies = param3;
  this.labels = param4;
  this.task_labels = param5;
  this.today = param6;
}
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang8taskflow6shared4Task(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.title = param1;
  this.description = param2;
  this.status = param3;
  this.priority = param4;
  this.assignee_id = param5;
  this.due_date = param6;
  this.created_at = param7;
}
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5LabelRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5LabelRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5LabelRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5LabelRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang8taskflow6shared5Label(param0, param1, param2) {
  this.id = param0;
  this.name = param1;
  this.color = param2;
}
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UserRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UserRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UserRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UserRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang8taskflow6shared4User(param0, param1, param2) {
  this.id = param0;
  this.username = param1;
  this.color = param2;
}
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang8taskflow6shared7Comment(param0, param1, param2, param3, param4) {
  this.id = param0;
  this.task_id = param1;
  this.author = param2;
  this.text = param3;
  this.created_at = param4;
}
function _M0TPC13ref3RefGORP38bobzhang8taskflow6shared4UserE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponseRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponseRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponseRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponseRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang8taskflow6shared12AuthResponse(param0, param1) {
  this.user = param0;
  this.message = param1;
}
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared6MemberRPC14json15JsonDecodeErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared6MemberRPC14json15JsonDecodeErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared6MemberRPC14json15JsonDecodeErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared6MemberRPC14json15JsonDecodeErrorE2Ok.prototype.$tag = 1;
function _M0TP38bobzhang8taskflow6shared6Member(param0, param1, param2) {
  this.id = param0;
  this.name = param1;
  this.color = param2;
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
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__ctrl__key = (e) => e.ctrlKey;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__meta__key = (e) => e.metaKey;
const _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__to__keyboard__event = (e) => e instanceof KeyboardEvent ? e : null;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent3key = (e) => e.key;
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
const _M0FP319moonbit_2dcommunity7rabbita3dom20ffi__to__drag__event = (e) => e instanceof DragEvent ? e : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__element__set__attribute = (self,attr,value) => self.setAttribute(attr, value);
const _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__remove__attribute = (self,attr) => self.removeAttribute(attr);
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__set__property = (self,prop,value) => self[prop] = value;
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__get__property = (self,prop) => self[prop];
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__remove__property = (self,prop) => delete self[prop];
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__set__inner__html = (self,html) => self.innerHTML = html;
const _M0MP319moonbit_2dcommunity7rabbita3dom9DragEvent19get__data__transfer = (e) => e.dataTransfer;
const _M0MP319moonbit_2dcommunity7rabbita3dom12DataTransfer5items = (t) => t.items;
const _M0MP319moonbit_2dcommunity7rabbita3dom20DataTransferItemList3add = (l, d, t) => l.add(d, t);
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
function _M0TPC13ref3RefGRP319moonbit_2dcommunity7rabbita2js8NullableGRP319moonbit_2dcommunity7rabbita3dom4NodeEE(param0) {
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
function _M0TPC13ref3RefGORP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(param0) {
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
function _M0TP219moonbit_2dcommunity7rabbita3App(param0, param1) {
  this.sandbox = param0;
  this.init_cmd = param1;
}
function _M0TP219moonbit_2dcommunity7rabbita10DispatcherGRP38bobzhang8taskflow8frontend3MsgE(param0, param1) {
  this.id = param0;
  this.inbox = param1;
}
function _M0TP219moonbit_2dcommunity7rabbita9TypedCellGRP38bobzhang8taskflow8frontend5ModelRP38bobzhang8taskflow8frontend3MsgE(param0, param1, param2, param3, param4, param5) {
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
function _M0TP38bobzhang8taskflow8frontend5Theme(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  this.bg = param0;
  this.card_bg = param1;
  this.card_border = param2;
  this.text = param3;
  this.text_secondary = param4;
  this.text_muted = param5;
  this.input_bg = param6;
  this.input_border = param7;
  this.filter_bg = param8;
  this.filter_inactive = param9;
  this.column_bg = param10;
}
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared4UserE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared4UserE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared4UserE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared4UserE4Text.prototype.$tag = 1;
function _M0DTP38bobzhang8taskflow8frontend3Msg4Init() {}
_M0DTP38bobzhang8taskflow8frontend3Msg4Init.prototype.$tag = 0;
const _M0DTP38bobzhang8taskflow8frontend3Msg4Init__ = new _M0DTP38bobzhang8taskflow8frontend3Msg4Init();
function _M0DTP38bobzhang8taskflow8frontend3Msg5GotMe(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg5GotMe.prototype.$tag = 1;
function _M0DTP38bobzhang8taskflow8frontend3Msg8GotBoard(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg8GotBoard.prototype.$tag = 2;
function _M0DTP38bobzhang8taskflow8frontend3Msg9ShowLogin() {}
_M0DTP38bobzhang8taskflow8frontend3Msg9ShowLogin.prototype.$tag = 3;
const _M0DTP38bobzhang8taskflow8frontend3Msg9ShowLogin__ = new _M0DTP38bobzhang8taskflow8frontend3Msg9ShowLogin();
function _M0DTP38bobzhang8taskflow8frontend3Msg12ShowRegister() {}
_M0DTP38bobzhang8taskflow8frontend3Msg12ShowRegister.prototype.$tag = 4;
const _M0DTP38bobzhang8taskflow8frontend3Msg12ShowRegister__ = new _M0DTP38bobzhang8taskflow8frontend3Msg12ShowRegister();
function _M0DTP38bobzhang8taskflow8frontend3Msg19AuthUsernameChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg19AuthUsernameChanged.prototype.$tag = 5;
function _M0DTP38bobzhang8taskflow8frontend3Msg19AuthPasswordChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg19AuthPasswordChanged.prototype.$tag = 6;
function _M0DTP38bobzhang8taskflow8frontend3Msg11SubmitLogin() {}
_M0DTP38bobzhang8taskflow8frontend3Msg11SubmitLogin.prototype.$tag = 7;
const _M0DTP38bobzhang8taskflow8frontend3Msg11SubmitLogin__ = new _M0DTP38bobzhang8taskflow8frontend3Msg11SubmitLogin();
function _M0DTP38bobzhang8taskflow8frontend3Msg14SubmitRegister() {}
_M0DTP38bobzhang8taskflow8frontend3Msg14SubmitRegister.prototype.$tag = 8;
const _M0DTP38bobzhang8taskflow8frontend3Msg14SubmitRegister__ = new _M0DTP38bobzhang8taskflow8frontend3Msg14SubmitRegister();
function _M0DTP38bobzhang8taskflow8frontend3Msg10AuthResult(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg10AuthResult.prototype.$tag = 9;
function _M0DTP38bobzhang8taskflow8frontend3Msg6Logout() {}
_M0DTP38bobzhang8taskflow8frontend3Msg6Logout.prototype.$tag = 10;
const _M0DTP38bobzhang8taskflow8frontend3Msg6Logout__ = new _M0DTP38bobzhang8taskflow8frontend3Msg6Logout();
function _M0DTP38bobzhang8taskflow8frontend3Msg9LoggedOut() {}
_M0DTP38bobzhang8taskflow8frontend3Msg9LoggedOut.prototype.$tag = 11;
const _M0DTP38bobzhang8taskflow8frontend3Msg9LoggedOut__ = new _M0DTP38bobzhang8taskflow8frontend3Msg9LoggedOut();
function _M0DTP38bobzhang8taskflow8frontend3Msg15SetFilterStatus(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg15SetFilterStatus.prototype.$tag = 12;
function _M0DTP38bobzhang8taskflow8frontend3Msg17SetFilterAssignee(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg17SetFilterAssignee.prototype.$tag = 13;
function _M0DTP38bobzhang8taskflow8frontend3Msg17SetFilterPriority(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg17SetFilterPriority.prototype.$tag = 14;
function _M0DTP38bobzhang8taskflow8frontend3Msg13SearchChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg13SearchChanged.prototype.$tag = 15;
function _M0DTP38bobzhang8taskflow8frontend3Msg16SetFilterUrgency(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg16SetFilterUrgency.prototype.$tag = 16;
function _M0DTP38bobzhang8taskflow8frontend3Msg14SetFilterLabel(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg14SetFilterLabel.prototype.$tag = 17;
function _M0DTP38bobzhang8taskflow8frontend3Msg11SetViewMode(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg11SetViewMode.prototype.$tag = 18;
function _M0DTP38bobzhang8taskflow8frontend3Msg9SetSortBy(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg9SetSortBy.prototype.$tag = 19;
function _M0DTP38bobzhang8taskflow8frontend3Msg15ToggleSortOrder() {}
_M0DTP38bobzhang8taskflow8frontend3Msg15ToggleSortOrder.prototype.$tag = 20;
const _M0DTP38bobzhang8taskflow8frontend3Msg15ToggleSortOrder__ = new _M0DTP38bobzhang8taskflow8frontend3Msg15ToggleSortOrder();
function _M0DTP38bobzhang8taskflow8frontend3Msg14ToggleDarkMode() {}
_M0DTP38bobzhang8taskflow8frontend3Msg14ToggleDarkMode.prototype.$tag = 21;
const _M0DTP38bobzhang8taskflow8frontend3Msg14ToggleDarkMode__ = new _M0DTP38bobzhang8taskflow8frontend3Msg14ToggleDarkMode();
function _M0DTP38bobzhang8taskflow8frontend3Msg11ShowAddTask() {}
_M0DTP38bobzhang8taskflow8frontend3Msg11ShowAddTask.prototype.$tag = 22;
const _M0DTP38bobzhang8taskflow8frontend3Msg11ShowAddTask__ = new _M0DTP38bobzhang8taskflow8frontend3Msg11ShowAddTask();
function _M0DTP38bobzhang8taskflow8frontend3Msg11HideAddTask() {}
_M0DTP38bobzhang8taskflow8frontend3Msg11HideAddTask.prototype.$tag = 23;
const _M0DTP38bobzhang8taskflow8frontend3Msg11HideAddTask__ = new _M0DTP38bobzhang8taskflow8frontend3Msg11HideAddTask();
function _M0DTP38bobzhang8taskflow8frontend3Msg15NewTitleChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg15NewTitleChanged.prototype.$tag = 24;
function _M0DTP38bobzhang8taskflow8frontend3Msg14NewDescChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg14NewDescChanged.prototype.$tag = 25;
function _M0DTP38bobzhang8taskflow8frontend3Msg18NewPriorityChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg18NewPriorityChanged.prototype.$tag = 26;
function _M0DTP38bobzhang8taskflow8frontend3Msg18NewAssigneeChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg18NewAssigneeChanged.prototype.$tag = 27;
function _M0DTP38bobzhang8taskflow8frontend3Msg17NewDueDateChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg17NewDueDateChanged.prototype.$tag = 28;
function _M0DTP38bobzhang8taskflow8frontend3Msg7AddTask() {}
_M0DTP38bobzhang8taskflow8frontend3Msg7AddTask.prototype.$tag = 29;
const _M0DTP38bobzhang8taskflow8frontend3Msg7AddTask__ = new _M0DTP38bobzhang8taskflow8frontend3Msg7AddTask();
function _M0DTP38bobzhang8taskflow8frontend3Msg9TaskAdded(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg9TaskAdded.prototype.$tag = 30;
function _M0DTP38bobzhang8taskflow8frontend3Msg13StartEditTask(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg13StartEditTask.prototype.$tag = 31;
function _M0DTP38bobzhang8taskflow8frontend3Msg14CancelEditTask() {}
_M0DTP38bobzhang8taskflow8frontend3Msg14CancelEditTask.prototype.$tag = 32;
const _M0DTP38bobzhang8taskflow8frontend3Msg14CancelEditTask__ = new _M0DTP38bobzhang8taskflow8frontend3Msg14CancelEditTask();
function _M0DTP38bobzhang8taskflow8frontend3Msg16EditTitleChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg16EditTitleChanged.prototype.$tag = 33;
function _M0DTP38bobzhang8taskflow8frontend3Msg15EditDescChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg15EditDescChanged.prototype.$tag = 34;
function _M0DTP38bobzhang8taskflow8frontend3Msg19EditPriorityChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg19EditPriorityChanged.prototype.$tag = 35;
function _M0DTP38bobzhang8taskflow8frontend3Msg19EditAssigneeChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg19EditAssigneeChanged.prototype.$tag = 36;
function _M0DTP38bobzhang8taskflow8frontend3Msg18EditDueDateChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg18EditDueDateChanged.prototype.$tag = 37;
function _M0DTP38bobzhang8taskflow8frontend3Msg12SaveEditTask() {}
_M0DTP38bobzhang8taskflow8frontend3Msg12SaveEditTask.prototype.$tag = 38;
const _M0DTP38bobzhang8taskflow8frontend3Msg12SaveEditTask__ = new _M0DTP38bobzhang8taskflow8frontend3Msg12SaveEditTask();
function _M0DTP38bobzhang8taskflow8frontend3Msg11TaskUpdated() {}
_M0DTP38bobzhang8taskflow8frontend3Msg11TaskUpdated.prototype.$tag = 39;
const _M0DTP38bobzhang8taskflow8frontend3Msg11TaskUpdated__ = new _M0DTP38bobzhang8taskflow8frontend3Msg11TaskUpdated();
function _M0DTP38bobzhang8taskflow8frontend3Msg12ChangeStatus(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP38bobzhang8taskflow8frontend3Msg12ChangeStatus.prototype.$tag = 40;
function _M0DTP38bobzhang8taskflow8frontend3Msg13StatusChanged() {}
_M0DTP38bobzhang8taskflow8frontend3Msg13StatusChanged.prototype.$tag = 41;
const _M0DTP38bobzhang8taskflow8frontend3Msg13StatusChanged__ = new _M0DTP38bobzhang8taskflow8frontend3Msg13StatusChanged();
function _M0DTP38bobzhang8taskflow8frontend3Msg13RequestDelete(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg13RequestDelete.prototype.$tag = 42;
function _M0DTP38bobzhang8taskflow8frontend3Msg12CancelDelete() {}
_M0DTP38bobzhang8taskflow8frontend3Msg12CancelDelete.prototype.$tag = 43;
const _M0DTP38bobzhang8taskflow8frontend3Msg12CancelDelete__ = new _M0DTP38bobzhang8taskflow8frontend3Msg12CancelDelete();
function _M0DTP38bobzhang8taskflow8frontend3Msg13ConfirmDelete() {}
_M0DTP38bobzhang8taskflow8frontend3Msg13ConfirmDelete.prototype.$tag = 44;
const _M0DTP38bobzhang8taskflow8frontend3Msg13ConfirmDelete__ = new _M0DTP38bobzhang8taskflow8frontend3Msg13ConfirmDelete();
function _M0DTP38bobzhang8taskflow8frontend3Msg11TaskDeleted() {}
_M0DTP38bobzhang8taskflow8frontend3Msg11TaskDeleted.prototype.$tag = 45;
const _M0DTP38bobzhang8taskflow8frontend3Msg11TaskDeleted__ = new _M0DTP38bobzhang8taskflow8frontend3Msg11TaskDeleted();
function _M0DTP38bobzhang8taskflow8frontend3Msg6AddDep(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP38bobzhang8taskflow8frontend3Msg6AddDep.prototype.$tag = 46;
function _M0DTP38bobzhang8taskflow8frontend3Msg9RemoveDep(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP38bobzhang8taskflow8frontend3Msg9RemoveDep.prototype.$tag = 47;
function _M0DTP38bobzhang8taskflow8frontend3Msg10DepChanged() {}
_M0DTP38bobzhang8taskflow8frontend3Msg10DepChanged.prototype.$tag = 48;
const _M0DTP38bobzhang8taskflow8frontend3Msg10DepChanged__ = new _M0DTP38bobzhang8taskflow8frontend3Msg10DepChanged();
function _M0DTP38bobzhang8taskflow8frontend3Msg12ShowComments(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg12ShowComments.prototype.$tag = 49;
function _M0DTP38bobzhang8taskflow8frontend3Msg12HideComments() {}
_M0DTP38bobzhang8taskflow8frontend3Msg12HideComments.prototype.$tag = 50;
const _M0DTP38bobzhang8taskflow8frontend3Msg12HideComments__ = new _M0DTP38bobzhang8taskflow8frontend3Msg12HideComments();
function _M0DTP38bobzhang8taskflow8frontend3Msg11GotComments(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg11GotComments.prototype.$tag = 51;
function _M0DTP38bobzhang8taskflow8frontend3Msg17NewCommentChanged(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg17NewCommentChanged.prototype.$tag = 52;
function _M0DTP38bobzhang8taskflow8frontend3Msg10AddComment() {}
_M0DTP38bobzhang8taskflow8frontend3Msg10AddComment.prototype.$tag = 53;
const _M0DTP38bobzhang8taskflow8frontend3Msg10AddComment__ = new _M0DTP38bobzhang8taskflow8frontend3Msg10AddComment();
function _M0DTP38bobzhang8taskflow8frontend3Msg12CommentAdded(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg12CommentAdded.prototype.$tag = 54;
function _M0DTP38bobzhang8taskflow8frontend3Msg10KeyPressed(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg10KeyPressed.prototype.$tag = 55;
function _M0DTP38bobzhang8taskflow8frontend3Msg12DismissError() {}
_M0DTP38bobzhang8taskflow8frontend3Msg12DismissError.prototype.$tag = 56;
const _M0DTP38bobzhang8taskflow8frontend3Msg12DismissError__ = new _M0DTP38bobzhang8taskflow8frontend3Msg12DismissError();
function _M0DTP38bobzhang8taskflow8frontend3Msg7SetLang(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg7SetLang.prototype.$tag = 57;
function _M0DTP38bobzhang8taskflow8frontend3Msg11ExportTasks() {}
_M0DTP38bobzhang8taskflow8frontend3Msg11ExportTasks.prototype.$tag = 58;
const _M0DTP38bobzhang8taskflow8frontend3Msg11ExportTasks__ = new _M0DTP38bobzhang8taskflow8frontend3Msg11ExportTasks();
function _M0DTP38bobzhang8taskflow8frontend3Msg12AddTaskLabel(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP38bobzhang8taskflow8frontend3Msg12AddTaskLabel.prototype.$tag = 59;
function _M0DTP38bobzhang8taskflow8frontend3Msg15RemoveTaskLabel(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP38bobzhang8taskflow8frontend3Msg15RemoveTaskLabel.prototype.$tag = 60;
function _M0DTP38bobzhang8taskflow8frontend3Msg12LabelChanged() {}
_M0DTP38bobzhang8taskflow8frontend3Msg12LabelChanged.prototype.$tag = 61;
const _M0DTP38bobzhang8taskflow8frontend3Msg12LabelChanged__ = new _M0DTP38bobzhang8taskflow8frontend3Msg12LabelChanged();
function _M0DTP38bobzhang8taskflow8frontend3Msg13DragStartTask(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg13DragStartTask.prototype.$tag = 62;
function _M0DTP38bobzhang8taskflow8frontend3Msg14DragOverColumn(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg14DragOverColumn.prototype.$tag = 63;
function _M0DTP38bobzhang8taskflow8frontend3Msg12DropOnColumn(param0) {
  this._0 = param0;
}
_M0DTP38bobzhang8taskflow8frontend3Msg12DropOnColumn.prototype.$tag = 64;
function _M0DTP38bobzhang8taskflow8frontend3Msg7DragEnd() {}
_M0DTP38bobzhang8taskflow8frontend3Msg7DragEnd.prototype.$tag = 65;
const _M0DTP38bobzhang8taskflow8frontend3Msg7DragEnd__ = new _M0DTP38bobzhang8taskflow8frontend3Msg7DragEnd();
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UsersE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UsersE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UsersE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UsersE2Ok.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared5BoardE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared5BoardE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared5BoardE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared5BoardE4Text.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardsE2Ok.prototype.$tag = 1;
const _M0FP38bobzhang8taskflow8frontend14download__file = (content, filename, mime) => { const blob = new Blob([content], { type: mime }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url); };
function _M0TP38bobzhang8taskflow8frontend5Model(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19, param20, param21, param22, param23, param24, param25, param26, param27, param28, param29, param30, param31, param32, param33, param34, param35, param36, param37, param38, param39, param40, param41, param42, param43) {
  this.current_user = param0;
  this.auth_screen = param1;
  this.auth_username = param2;
  this.auth_password = param3;
  this.auth_error = param4;
  this.auth_loading = param5;
  this.tasks = param6;
  this.members = param7;
  this.activities = param8;
  this.dependencies = param9;
  this.labels = param10;
  this.task_labels = param11;
  this.today = param12;
  this.filter_status = param13;
  this.filter_assignee = param14;
  this.filter_priority = param15;
  this.search_query = param16;
  this.filter_urgency = param17;
  this.filter_label = param18;
  this.view_mode = param19;
  this.sort_by = param20;
  this.sort_asc = param21;
  this.dark_mode = param22;
  this.adding_task = param23;
  this.new_title = param24;
  this.new_desc = param25;
  this.new_priority = param26;
  this.new_assignee = param27;
  this.new_due_date = param28;
  this.editing_task = param29;
  this.edit_title = param30;
  this.edit_desc = param31;
  this.edit_priority = param32;
  this.edit_assignee = param33;
  this.edit_due_date = param34;
  this.viewing_comments = param35;
  this.comments = param36;
  this.new_comment = param37;
  this.confirm_delete = param38;
  this.error_msg = param39;
  this.loading = param40;
  this.lang = param41;
  this.dragging_task_id = param42;
  this.drag_over_status = param43;
}
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared12AuthResponseE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared12AuthResponseE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared12AuthResponseE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared12AuthResponseE4Text.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdsE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdsE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdsE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdsE4Text.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared4TaskE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared4TaskE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared4TaskE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared4TaskE4Text.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TasksE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TasksE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TasksE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TasksE2Ok.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared7CommentE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared7CommentE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared7CommentE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared7CommentE4Text.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentsE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentsE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentsE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentsE2Ok.prototype.$tag = 1;
function _M0TPC13ref3RefGsE(param0) {
  this.val = param0;
}
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE4Json(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE4Json.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE4Text(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE4Text.prototype.$tag = 1;
function _M0TPC13ref3RefGbE(param0) {
  this.val = param0;
}
const _M0FP38bobzhang8taskflow8frontend18enable__drag__drop = () => { const h = e => e.preventDefault(); document.addEventListener('dragover', h); document.addEventListener('drop', h); };
const _M0FP0197moonbit_2dcommunity_2frabbita_2fTypedCell_5bbobzhang_2ftaskflow_2ffrontend_2fModel_2c_20bobzhang_2ftaskflow_2ffrontend_2fMsg_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eIsCell = { method_0: _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4stepGRP38bobzhang8taskflow8frontend5ModelRP38bobzhang8taskflow8frontend3MsgE, method_1: _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4viewGRP38bobzhang8taskflow8frontend5ModelRP38bobzhang8taskflow8frontend3MsgE, method_2: _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell5flagsGRP38bobzhang8taskflow8frontend5ModelRP38bobzhang8taskflow8frontend3MsgE };
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char };
const _M0FP0133moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eScheduler = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler3add, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler17add__url__changed, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler17add__url__request };
const _M0FPB4null = _M0DTPB4Json4Null__;
const _M0FPB19wasm__helper__cache = new _M0TPB15WasmHelperCache(false, undefined);
const _M0FPC16uint6410max__value = $_1L;
const _M0FPC17strconv14base__err__str = "invalid base";
const _M0FPC17strconv15range__err__str = "value out of range";
const _M0FPC17strconv16syntax__err__str = "invalid syntax";
const _M0FPC17strconv20parse__int64_2einnerN7_2abindS543 = "";
const _M0FPC17strconv17min__19digit__int = $1000000000000000000L;
const _M0FPC17strconv17parse__scientificN8exp__numS241 = $0L;
const _M0FPC17strconv13parse__numberN11exp__numberS222 = $0L;
const _M0FPC17strconv12double__info = new _M0TPC17strconv9FloatInfo(52, 11, -1023);
const _M0FPC17strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2246 = { _0: 0, _1: "" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2247 = { _0: 1, _1: "5" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2248 = { _0: 1, _1: "25" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2249 = { _0: 1, _1: "125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2250 = { _0: 2, _1: "625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2251 = { _0: 2, _1: "3125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2252 = { _0: 2, _1: "15625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2253 = { _0: 3, _1: "78125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2254 = { _0: 3, _1: "390625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2255 = { _0: 3, _1: "1953125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2256 = { _0: 4, _1: "9765625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2257 = { _0: 4, _1: "48828125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2258 = { _0: 4, _1: "244140625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2259 = { _0: 4, _1: "1220703125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2260 = { _0: 5, _1: "6103515625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2261 = { _0: 5, _1: "30517578125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2262 = { _0: 5, _1: "152587890625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2263 = { _0: 6, _1: "762939453125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2264 = { _0: 6, _1: "3814697265625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2265 = { _0: 6, _1: "19073486328125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2266 = { _0: 7, _1: "95367431640625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2267 = { _0: 7, _1: "476837158203125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2268 = { _0: 7, _1: "2384185791015625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2269 = { _0: 7, _1: "11920928955078125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2270 = { _0: 8, _1: "59604644775390625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2271 = { _0: 8, _1: "298023223876953125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2272 = { _0: 8, _1: "1490116119384765625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2273 = { _0: 9, _1: "7450580596923828125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2274 = { _0: 9, _1: "37252902984619140625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2275 = { _0: 9, _1: "186264514923095703125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2276 = { _0: 10, _1: "931322574615478515625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2277 = { _0: 10, _1: "4656612873077392578125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2278 = { _0: 10, _1: "23283064365386962890625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2279 = { _0: 10, _1: "116415321826934814453125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2280 = { _0: 11, _1: "582076609134674072265625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2281 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2282 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2283 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2284 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2285 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2286 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2287 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2288 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2289 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2290 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2291 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2292 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2293 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2294 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2295 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2296 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2297 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2298 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2299 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2300 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2301 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2302 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2303 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2304 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2305 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FPC17strconv34left__shift__cheats_2etuple_2f2306 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FPC17strconv19left__shift__cheats = [_M0FPC17strconv34left__shift__cheats_2etuple_2f2246, _M0FPC17strconv34left__shift__cheats_2etuple_2f2247, _M0FPC17strconv34left__shift__cheats_2etuple_2f2248, _M0FPC17strconv34left__shift__cheats_2etuple_2f2249, _M0FPC17strconv34left__shift__cheats_2etuple_2f2250, _M0FPC17strconv34left__shift__cheats_2etuple_2f2251, _M0FPC17strconv34left__shift__cheats_2etuple_2f2252, _M0FPC17strconv34left__shift__cheats_2etuple_2f2253, _M0FPC17strconv34left__shift__cheats_2etuple_2f2254, _M0FPC17strconv34left__shift__cheats_2etuple_2f2255, _M0FPC17strconv34left__shift__cheats_2etuple_2f2256, _M0FPC17strconv34left__shift__cheats_2etuple_2f2257, _M0FPC17strconv34left__shift__cheats_2etuple_2f2258, _M0FPC17strconv34left__shift__cheats_2etuple_2f2259, _M0FPC17strconv34left__shift__cheats_2etuple_2f2260, _M0FPC17strconv34left__shift__cheats_2etuple_2f2261, _M0FPC17strconv34left__shift__cheats_2etuple_2f2262, _M0FPC17strconv34left__shift__cheats_2etuple_2f2263, _M0FPC17strconv34left__shift__cheats_2etuple_2f2264, _M0FPC17strconv34left__shift__cheats_2etuple_2f2265, _M0FPC17strconv34left__shift__cheats_2etuple_2f2266, _M0FPC17strconv34left__shift__cheats_2etuple_2f2267, _M0FPC17strconv34left__shift__cheats_2etuple_2f2268, _M0FPC17strconv34left__shift__cheats_2etuple_2f2269, _M0FPC17strconv34left__shift__cheats_2etuple_2f2270, _M0FPC17strconv34left__shift__cheats_2etuple_2f2271, _M0FPC17strconv34left__shift__cheats_2etuple_2f2272, _M0FPC17strconv34left__shift__cheats_2etuple_2f2273, _M0FPC17strconv34left__shift__cheats_2etuple_2f2274, _M0FPC17strconv34left__shift__cheats_2etuple_2f2275, _M0FPC17strconv34left__shift__cheats_2etuple_2f2276, _M0FPC17strconv34left__shift__cheats_2etuple_2f2277, _M0FPC17strconv34left__shift__cheats_2etuple_2f2278, _M0FPC17strconv34left__shift__cheats_2etuple_2f2279, _M0FPC17strconv34left__shift__cheats_2etuple_2f2280, _M0FPC17strconv34left__shift__cheats_2etuple_2f2281, _M0FPC17strconv34left__shift__cheats_2etuple_2f2282, _M0FPC17strconv34left__shift__cheats_2etuple_2f2283, _M0FPC17strconv34left__shift__cheats_2etuple_2f2284, _M0FPC17strconv34left__shift__cheats_2etuple_2f2285, _M0FPC17strconv34left__shift__cheats_2etuple_2f2286, _M0FPC17strconv34left__shift__cheats_2etuple_2f2287, _M0FPC17strconv34left__shift__cheats_2etuple_2f2288, _M0FPC17strconv34left__shift__cheats_2etuple_2f2289, _M0FPC17strconv34left__shift__cheats_2etuple_2f2290, _M0FPC17strconv34left__shift__cheats_2etuple_2f2291, _M0FPC17strconv34left__shift__cheats_2etuple_2f2292, _M0FPC17strconv34left__shift__cheats_2etuple_2f2293, _M0FPC17strconv34left__shift__cheats_2etuple_2f2294, _M0FPC17strconv34left__shift__cheats_2etuple_2f2295, _M0FPC17strconv34left__shift__cheats_2etuple_2f2296, _M0FPC17strconv34left__shift__cheats_2etuple_2f2297, _M0FPC17strconv34left__shift__cheats_2etuple_2f2298, _M0FPC17strconv34left__shift__cheats_2etuple_2f2299, _M0FPC17strconv34left__shift__cheats_2etuple_2f2300, _M0FPC17strconv34left__shift__cheats_2etuple_2f2301, _M0FPC17strconv34left__shift__cheats_2etuple_2f2302, _M0FPC17strconv34left__shift__cheats_2etuple_2f2303, _M0FPC17strconv34left__shift__cheats_2etuple_2f2304, _M0FPC17strconv34left__shift__cheats_2etuple_2f2305, _M0FPC17strconv34left__shift__cheats_2etuple_2f2306];
const _M0FPC17strconv10int__pow10 = [$1L, $10L, $100L, $1000L, $10000L, $100000L, $1000000L, $10000000L, $100000000L, $1000000000L, $10000000000L, $100000000000L, $1000000000000L, $10000000000000L, $100000000000000L, $1000000000000000L];
const _M0FPC17strconv25max__exponent__fast__path = $22L;
const _M0FPC17strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+12, 1e+13, 1e+14, 1e+15, 1e+16, 1e+17, 1e+18, 1e+19, 1e+20, 1e+21, 1e+22, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC17strconv36max__exponent__disguised__fast__path = $37L;
const _M0FPC17strconv25min__exponent__fast__path = $_22L;
const _M0MPC14json12ParseContext16lex__number__endN7_2abindS1058 = ".";
const _M0MPC14json12ParseContext16lex__number__endN7_2abindS1059 = "e";
const _M0MPC14json12ParseContext16lex__number__endN7_2abindS1060 = "E";
const _M0FP38bobzhang8taskflow6shared13min__username = 3;
const _M0FP38bobzhang8taskflow6shared13max__username = 30;
const _M0FP38bobzhang8taskflow6shared13min__password = 4;
const _M0FP38bobzhang8taskflow6shared13max__password = 100;
const _M0FP38bobzhang8taskflow6shared16max__task__title = 100;
const _M0FP38bobzhang8taskflow6shared18max__comment__text = 500;
const _M0FP38bobzhang8taskflow6shared15valid__statuses = ["todo", "in_progress", "review", "done", "blocked"];
const _M0FP38bobzhang8taskflow6shared17valid__priorities = ["low", "medium", "high", "urgent"];
const _M0FP38bobzhang8taskflow6shared13api__register = "/api/auth/register";
const _M0FP38bobzhang8taskflow6shared10api__login = "/api/auth/login";
const _M0FP38bobzhang8taskflow6shared11api__logout = "/api/auth/logout";
const _M0FP38bobzhang8taskflow6shared7api__me = "/api/auth/me";
const _M0FP38bobzhang8taskflow6shared10api__board = "/api/board";
const _M0FP38bobzhang8taskflow6shared10api__tasks = "/api/tasks";
const _M0FP38bobzhang8taskflow6shared13sort__options = ["priority", "due_date", "title", "created_at"];
const _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4none = _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd5Empty__;
const _M0FP419moonbit_2dcommunity7rabbita8internal7runtime17global__id__count = _M0FPC13ref3newGiE(0);
const _M0FPB33brute__force__find_2econstr_2f439 = 0;
const _M0FPB43boyer__moore__horspool__find_2econstr_2f425 = 0;
const _M0FPC16double13neg__infinity = _M0MPC15int645Int6423reinterpret__as__double($_4503599627370496L);
const _M0FPC16double14not__a__number = _M0MPC15int645Int6423reinterpret__as__double($9221120237041090561L);
const _M0FPC16double8infinity = _M0MPC15int645Int6423reinterpret__as__double($9218868437227405312L);
const _M0FPC17strconv25max__mantissa__fast__path = _M0IPC16uint646UInt64PB3Shl3shl($2L, 52);
const _M0FPC17strconv28checked__mul_2econstr_2f2726 = $0L;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP319moonbit_2dcommunity7rabbita3cmd4none = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4none;
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGiE(msg) {
  return $panic();
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
function _M0FPB5abortGiE(string, loc) {
  return _M0FPC15abort5abortGiE(`${_M0IPC16string6StringPB4Show10to__string(string)}\n  at ${_M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(loc)}\n`);
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
function _M0MPC16string6String20char__length_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length)) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_index = _tmp;
      const char_count = _tmp$2;
      if (utf16_index < end_offset$2) {
        const c1 = self.charCodeAt(utf16_index);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (utf16_index + 1 | 0) < end_offset$2) {
          const c2 = self.charCodeAt(utf16_index + 1 | 0);
          if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
            _tmp = utf16_index + 2 | 0;
            _tmp$2 = char_count + 1 | 0;
            continue;
          } else {
            _M0FPB5abortGuE("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:81:9-81:40");
          }
        }
        _tmp = utf16_index + 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        return char_count;
      }
    }
  } else {
    return _M0FPB5abortGiE("invalid start or end index for String::codepoint_length", "@moonbitlang/core/builtin:string.mbt:70:5-70:69");
  }
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
function _M0MPC15array5Array2atGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeEE(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
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
function _M0MPB6Hasher7combineGsE(self, value) {
  _M0IPC16string6StringPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, value) {
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime2IdPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdE(self, value) {
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdPB4Hash13hash__combine(value, self);
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(x, y) {
  return !_M0IP419moonbit_2dcommunity7rabbita8internal7runtime2IdPB2Eq5equal(x, y);
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
function _M0IP016_24default__implPB7Compare6op__ltGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) < 0;
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
function _M0IP016_24default__implPB7Compare6op__leGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__leGlE(x, y) {
  return _M0IPC15int645Int64PB7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__leGmE(x, y) {
  return _M0IPC16uint646UInt64PB7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) >= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGlE(x, y) {
  return _M0IPC15int645Int64PB7Compare7compare(x, y) >= 0;
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
function _M0IP016_24default__implPB4Hash4hashGsE(self) {
  const h = _M0MPB6Hasher3new(undefined);
  _M0MPB6Hasher7combineGsE(h, self);
  return _M0MPB6Hasher8finalize(h);
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
function _M0MPB4Iter4nextGRP38bobzhang8taskflow6shared7CommentE(self) {
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
function _M0MPB4Iter3newGRP38bobzhang8taskflow6shared7CommentE(f) {
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
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS3394(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder11new_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3394(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3394(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0IPC16string10StringViewPB4Show10to__string(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPC13ref3RefGiE(start);
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
function _M0MPB5Iter23newGicE(f) {
  return _M0MPB4Iter3newGRP38bobzhang8taskflow6shared7CommentE(f);
}
function _M0MPC16string10StringView5iter2(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPC13ref3RefGiE(start);
  const char_index = new _M0TPC13ref3RefGiE(0);
  return _M0MPB5Iter23newGicE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          const result = { _0: char_index.val, _1: _M0FPB32code__point__of__surrogate__pair(c1, c2) };
          index.val = index.val + 2 | 0;
          char_index.val = char_index.val + 1 | 0;
          return result;
        }
      }
      const result = { _0: char_index.val, _1: _M0MPC16uint166UInt1616unsafe__to__char(c1) };
      index.val = index.val + 1 | 0;
      char_index.val = char_index.val + 1 | 0;
      return result;
    } else {
      return undefined;
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
          _M0FPB5abortGuE("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:426:9-426:40");
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
          _M0FPB5abortGuE("invalid surrogate pair", "@moonbitlang/core/builtin:string.mbt:454:9-454:40");
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
  let char_count = 0;
  let utf16_offset = end_offset;
  while (true) {
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        utf16_offset = utf16_offset - 2 | 0;
      } else {
        utf16_offset = utf16_offset - 1 | 0;
      }
      char_count = char_count + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let utf16_offset = start_offset;
    let char_count = 0;
    while (true) {
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          utf16_offset = utf16_offset + 2 | 0;
        } else {
          utf16_offset = utf16_offset + 1 | 0;
        }
        char_count = char_count + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
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
function _M0MPB13StringBuilder11write__iter(self, iter) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(iter);
    if (_bind === -1) {
      return;
    } else {
      const _Some = _bind;
      const _ch = _Some;
      _M0IPB13StringBuilderPB6Logger11write__char(self, _ch);
      continue;
    }
  }
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
    return _M0FPB43boyer__moore__horspool__find_2econstr_2f425;
  }
}
function _M0FPB18brute__force__find(haystack, needle) {
  const haystack_len = _M0MPC16string10StringView6length(haystack);
  const needle_len = _M0MPC16string10StringView6length(needle);
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const needle_first = _M0MPC16string10StringView11unsafe__get(needle, 0);
      const forward_len = haystack_len - needle_len | 0;
      let i = 0;
      while (true) {
        if (i <= forward_len) {
          while (true) {
            if (i <= forward_len && _M0IPC16uint166UInt16PB2Eq10not__equal(_M0MPC16string10StringView11unsafe__get(haystack, i), needle_first)) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i <= forward_len) {
            let _tmp = 1;
            while (true) {
              const j = _tmp;
              if (j < needle_len) {
                if (_M0IPC16uint166UInt16PB2Eq10not__equal(_M0MPC16string10StringView11unsafe__get(haystack, i + j | 0), _M0MPC16string10StringView11unsafe__get(needle, j))) {
                  break;
                }
                _tmp = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            i = i + 1 | 0;
          }
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
    return _M0FPB33brute__force__find_2econstr_2f439;
  }
}
function _M0MPC16string10StringView4find(self, str) {
  return _M0MPC16string10StringView6length(str) <= 4 ? _M0FPB18brute__force__find(self, str) : _M0FPB28boyer__moore__horspool__find(self, str);
}
function _M0MPC16string6String4find(self, str) {
  return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
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
function _M0MPC16string10StringView8find__by(self, pred) {
  const _it = _M0MPC16string10StringView5iter2(self);
  while (true) {
    const _bind = _M0MPB5Iter24nextGicE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _i = _x._0;
      const _c = _x._1;
      if (pred(_c)) {
        return _i;
      }
      continue;
    }
  }
  return undefined;
}
function _M0MPC16string6String8find__by(self, pred) {
  return _M0MPC16string10StringView8find__by(new _M0TPC16string10StringView(self, 0, self.length), pred);
}
function _M0MPC15array5Array11new_2einnerGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(self, value) {
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
function _M0MPC16string6String8contains(self, str) {
  return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView9is__empty(self) {
  return _M0MPC16string10StringView6length(self) === 0;
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPC13ref3RefGiE(0);
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
    const _bind = _M0MPB4Iter4nextGRP38bobzhang8taskflow6shared7CommentE(self);
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
  const remaining = new _M0TPC13ref3RefGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGRP38bobzhang8taskflow6shared7CommentE(() => {
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
    const _bind = _M0MPB4Iter4nextGRP38bobzhang8taskflow6shared7CommentE(self);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC16string6String7replace(self, old, new_) {
  const _bind = _M0MPC16string6String4find(self, old);
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _end = _Some;
    const _self = _M0MPB13StringBuilder11new_2einner(0);
    _M0MPB13StringBuilder11write__iter(_self, _M0MPC16string10StringView4iter(_M0MPC16string6String12view_2einner(self, 0, _end)));
    _M0MPB13StringBuilder11write__iter(_self, _M0MPC16string10StringView4iter(new_));
    _M0MPB13StringBuilder11write__iter(_self, _M0MPC16string10StringView4iter(_M0MPC16string6String12view_2einner(self, _end + _M0MPC16string10StringView6length(old) | 0, undefined)));
    return _M0MPB13StringBuilder10to__string(_self);
  }
}
function _M0MPC14char4Char20is__ascii__uppercase(self) {
  return self >= 65 && self <= 90;
}
function _M0MPC16string6String9to__lower(self) {
  const _bind = _M0MPC16string6String8find__by(self, (x) => _M0MPC14char4Char20is__ascii__uppercase(x));
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder11new_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), _M0MPC16string10StringView6length(head));
    const _it = _M0MPC16string10StringView4iter(_M0MPC16string6String12view_2einner(self, _idx, undefined));
    while (true) {
      const _bind$2 = _M0MPB4Iter4nextGcE(_it);
      if (_bind$2 === -1) {
        break;
      } else {
        const _Some$2 = _bind$2;
        const _c = _Some$2;
        if (_M0MPC14char4Char20is__ascii__uppercase(_c)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _c + 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _c);
        }
        continue;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC16string6String9get__char(self, idx) {
  if (idx >= 0 && idx < self.length) {
    const c = self.charCodeAt(idx);
    if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
      if ((idx + 1 | 0) < self.length) {
        const next = self.charCodeAt(idx + 1 | 0);
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
function _M0IPC16string6StringPB7Compare7compare(self, other) {
  const len = self.length;
  const _bind = $compare_int(len, other.length);
  if (_bind === 0) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const order = _M0IPC16uint166UInt16PB7Compare7compare(self.charCodeAt(i), other.charCodeAt(i));
        if (order !== 0) {
          return order;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return 0;
  } else {
    return _bind;
  }
}
function _M0IPC13int3IntPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0MPC13int3Int18to__string_2einner(self, 10));
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC15array9ArrayView4iterGRP38bobzhang8taskflow6shared7CommentE(self) {
  const i = new _M0TPC13ref3RefGiE(0);
  return _M0MPB4Iter3newGRP38bobzhang8taskflow6shared7CommentE(() => {
    if (i.val < _M0MPC15array9ArrayView6lengthGUsRPB4JsonEE(self)) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  });
}
function _M0MPC15array5Array4iterGRP38bobzhang8taskflow6shared7CommentE(self) {
  return _M0MPC15array9ArrayView4iterGRP38bobzhang8taskflow6shared7CommentE(new _M0TPB9ArrayViewGRP38bobzhang8taskflow6shared7CommentE(self, 0, self.length));
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
function _M0MPC16result6Result4bindGRPB4JsonsRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(self, g) {
  if (self.$tag === 1) {
    const _Ok = self;
    const _value = _Ok._0;
    return g(_value);
  } else {
    const _Err = self;
    const _err = _Err._0;
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEsE3Err(_err);
  }
}
function _M0MPC16result6Result4bindGRPB4JsonsRP38bobzhang8taskflow6shared12AuthResponseE(self, g) {
  if (self.$tag === 1) {
    const _Ok = self;
    const _value = _Ok._0;
    return g(_value);
  } else {
    const _Err = self;
    const _err = _Err._0;
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponsesE3Err(_err);
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
function _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(self) {
  return self.end - self.start | 0;
}
function _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return _M0FPB5abortGRPB9ArrayViewGRPC16string10StringViewEE(`index out of bounds: the len is from 0 to ${_M0IP016_24default__implPB4Show10to__stringGiE(self.end - self.start | 0)} but the index is ${_M0IP016_24default__implPB4Show10to__stringGiE(index)}`, "@moonbitlang/core/builtin:mutarrayview.mbt:118:5-120:6");
  }
}
function _M0MPC15array12MutArrayView3setGRP38bobzhang8taskflow6shared4TaskE(self, index, value) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    _tmp[_tmp$2] = value;
    return;
  } else {
    _M0FPB5abortGuE(`index out of bounds: the len is from 0 to ${_M0IP016_24default__implPB4Show10to__stringGiE(self.end - self.start | 0)} but the index is ${_M0IP016_24default__implPB4Show10to__stringGiE(index)}`, "@moonbitlang/core/builtin:mutarrayview.mbt:182:5-184:6");
    return;
  }
}
function _M0MPC15array5Array17mut__view_2einnerGRP38bobzhang8taskflow6shared4TaskE(self, start, end) {
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
    return new _M0TPB12MutArrayViewGRP38bobzhang8taskflow6shared4TaskE(_bind, start$2, start$2 + _bind$2 | 0);
  } else {
    return _M0FPB5abortGRPB9ArrayViewGRPC16string10StringViewEE("View index out of bounds", "@moonbitlang/core/builtin:mutarrayview.mbt:258:5-258:38");
  }
}
function _M0MPC15array12MutArrayView17mut__view_2einnerGRP38bobzhang8taskflow6shared4TaskE(self, start, end) {
  const len = _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(self);
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
    const _bind = self.buf;
    const _bind$2 = self.start + start$2 | 0;
    const _bind$3 = end$2 - start$2 | 0;
    return new _M0TPB12MutArrayViewGRP38bobzhang8taskflow6shared4TaskE(_bind, _bind$2, _bind$2 + _bind$3 | 0);
  } else {
    return _M0FPB5abortGRPB9ArrayViewGRPC16string10StringViewEE("View index out of bounds", "@moonbitlang/core/builtin:mutarrayview.mbt:307:5-307:38");
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
  const curr_entry = new _M0TPC13ref3RefGORPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEE(self.head);
  return _M0MPB4Iter3newGRP38bobzhang8taskflow6shared7CommentE(() => {
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
  const curr_entry = new _M0TPC13ref3RefGORPB5EntryGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkEE(self.head);
  return _M0MPB4Iter3newGRP38bobzhang8taskflow6shared7CommentE(() => {
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
  const curr_entry = new _M0TPC13ref3RefGORPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self.head);
  return _M0MPB4Iter3newGRP38bobzhang8taskflow6shared7CommentE(() => {
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
  const curr_entry = new _M0TPC13ref3RefGORPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(self.head);
  return _M0MPB4Iter3newGRP38bobzhang8taskflow6shared7CommentE(() => {
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
function _M0IPC16double6DoublePB6ToJson8to__json(self) {
  return self !== self ? _M0MPC14json4Json6string("NaN") : self > _M0MPC15int645Int6423reinterpret__as__double($9218868437227405311L) ? _M0MPC14json4Json6string("Infinity") : self < _M0MPC15int645Int6423reinterpret__as__double($_4503599627370497L) ? _M0MPC14json4Json6string("-Infinity") : _M0MPC14json4Json6number(self, undefined);
}
function _M0MPC15array5Array3mapGRP38bobzhang8taskflow6shared4TaskRP38bobzhang8taskflow6shared4TaskE(self, f) {
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
function _M0MPC15array5Array3mapGRP38bobzhang8taskflow6shared4TaskRP319moonbit_2dcommunity7rabbita4html4HtmlE(self, f) {
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
function _M0MPC15array5Array3mapGRP38bobzhang8taskflow6shared5LabeliE(self, f) {
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
function _M0MPC15array5Array3mapGRP38bobzhang8taskflow6shared5LabelRP319moonbit_2dcommunity7rabbita4html4HtmlE(self, f) {
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
function _M0MPC15array5Array3mapGsRP319moonbit_2dcommunity7rabbita4html4HtmlE(self, f) {
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
function _M0MPB4Iter3anyGRP38bobzhang8taskflow6shared9TaskLabelE(self, f) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGRP38bobzhang8taskflow6shared7CommentE(self);
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (f(_x)) {
        return true;
      }
      continue;
    }
  }
}
function _M0MPB4Iter4join(self, sep) {
  const result = _M0MPB13StringBuilder11new_2einner(0);
  const _bind = _M0MPB4Iter4nextGRP38bobzhang8taskflow6shared7CommentE(self);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _x = _Some;
    _M0IPB13StringBuilderPB6Logger13write__string(result, _x);
    while (true) {
      const _bind$2 = _M0MPB4Iter4nextGRP38bobzhang8taskflow6shared7CommentE(self);
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
  return _M0MPB4Iter4nextGRP38bobzhang8taskflow6shared7CommentE(self);
}
function _M0MPB5Iter24nextGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self) {
  return _M0MPB4Iter4nextGRP38bobzhang8taskflow6shared7CommentE(self);
}
function _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self) {
  return _M0MPB4Iter4nextGRP38bobzhang8taskflow6shared7CommentE(self);
}
function _M0MPB5Iter24nextGicE(self) {
  return _M0MPB4Iter4nextGRP38bobzhang8taskflow6shared7CommentE(self);
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
    return _M0FPB5abortGRPB9ArrayViewGRPC16string10StringViewEE("View index out of bounds", "@moonbitlang/core/builtin:arrayview.mbt:263:5-263:38");
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
    let size_hint = _M0MPC16string10StringView6length(hd);
    const _bind = _x_end - _x_start | 0;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        size_hint = size_hint + (_M0MPC16string10StringView6length(_M0IPC16string6StringPB12ToStringView16to__string__view(s)) + _M0MPC16string10StringView6length(separator) | 0) | 0;
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    size_hint = size_hint << 1;
    const buf = _M0MPB13StringBuilder11new_2einner(size_hint);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if (_M0MPC16string6String24char__length__eq_2einner(separator.str, 0, separator.start, separator.end)) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array5Array11unsafe__popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self);
    return v;
  }
}
function _M0MPC15array5Array4copyGRP38bobzhang8taskflow6shared9TaskLabelE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0FPB7minimum(x, y) {
  return x > y ? y : x;
}
function _M0MPC15array12MutArrayView4swapGRP38bobzhang8taskflow6shared4TaskE(arr, i, j) {
  const temp = _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, i);
  _M0MPC15array12MutArrayView3setGRP38bobzhang8taskflow6shared4TaskE(arr, i, _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, j));
  _M0MPC15array12MutArrayView3setGRP38bobzhang8taskflow6shared4TaskE(arr, j, temp);
}
function _M0MPC15array12MutArrayView5sliceGRP38bobzhang8taskflow6shared4TaskE(arr, start, end) {
  return _M0MPC15array12MutArrayView17mut__view_2einnerGRP38bobzhang8taskflow6shared4TaskE(arr, start, end);
}
function _M0MPC15array12MutArrayView14rev__in__placeGRP38bobzhang8taskflow6shared4TaskE(arr) {
  const len = _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(arr);
  if (2 === 0) {
    $panic();
  }
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, i);
      _M0MPC15array12MutArrayView3setGRP38bobzhang8taskflow6shared4TaskE(arr, i, _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, j));
      _M0MPC15array12MutArrayView3setGRP38bobzhang8taskflow6shared4TaskE(arr, j, temp);
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let len$2 = len;
  let limit = 0;
  while (true) {
    if (len$2 > 0) {
      if (2 === 0) {
        $panic();
      }
      len$2 = len$2 / 2 | 0;
      limit = limit + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return limit;
}
function _M0FPB23fixed__bubble__sort__byGRP38bobzhang8taskflow6shared4TaskE(arr, cmp) {
  const _bind = _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(arr);
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(_M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, j - 1 | 0), _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, j)) > 0) {
          _M0MPC15array12MutArrayView4swapGRP38bobzhang8taskflow6shared4TaskE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB41fixed__choose__pivot__by_2esort__2_2f2005(_env, a, b) {
  const swaps = _env._2;
  const arr = _env._1;
  const cmp = _env._0;
  if (cmp(_M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, a), _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, b)) > 0) {
    _M0MPC15array12MutArrayView4swapGRP38bobzhang8taskflow6shared4TaskE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB41fixed__choose__pivot__by_2esort__3_2f2006(_env, a, b, c) {
  _M0FPB41fixed__choose__pivot__by_2esort__2_2f2005(_env, a, b);
  _M0FPB41fixed__choose__pivot__by_2esort__2_2f2005(_env, b, c);
  _M0FPB41fixed__choose__pivot__by_2esort__2_2f2005(_env, a, b);
}
function _M0FPB24fixed__choose__pivot__byGRP38bobzhang8taskflow6shared4TaskE(arr, cmp) {
  const len = _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(arr);
  const swaps = new _M0TPC13ref3RefGiE(0);
  if (4 === 0) {
    $panic();
  }
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    if (4 === 0) {
      $panic();
    }
    const a = Math.imul(len / 4 | 0, 1) | 0;
    if (4 === 0) {
      $panic();
    }
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: arr, _2: swaps };
    if (len > 50) {
      _M0FPB41fixed__choose__pivot__by_2esort__3_2f2006(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB41fixed__choose__pivot__by_2esort__3_2f2006(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB41fixed__choose__pivot__by_2esort__3_2f2006(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB41fixed__choose__pivot__by_2esort__3_2f2006(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGRP38bobzhang8taskflow6shared4TaskE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB21fixed__sift__down__byGRP38bobzhang8taskflow6shared4TaskE(arr, index, cmp) {
  let index$2 = index;
  const len = _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(arr);
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && cmp(_M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, child), _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, child + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      if (cmp(_M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, index$2), _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, child)) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGRP38bobzhang8taskflow6shared4TaskE(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGRP38bobzhang8taskflow6shared4TaskE(arr, cmp) {
  const len = _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(arr);
  if (2 === 0) {
    $panic();
  }
  const _bind = len / 2 | 0;
  let _tmp = _bind - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGRP38bobzhang8taskflow6shared4TaskE(arr, i, cmp);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGRP38bobzhang8taskflow6shared4TaskE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGRP38bobzhang8taskflow6shared4TaskE(_M0MPC15array12MutArrayView5sliceGRP38bobzhang8taskflow6shared4TaskE(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__partition__byGRP38bobzhang8taskflow6shared4TaskE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGRP38bobzhang8taskflow6shared4TaskE(arr, pivot_index, _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(arr) - 1 | 0);
  const pivot = _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(arr) - 1 | 0);
  let i = 0;
  let partitioned = true;
  const _bind = _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(arr) - 1 | 0;
  let _tmp = 0;
  while (true) {
    const j = _tmp;
    if (j < _bind) {
      if (cmp(_M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, j), pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGRP38bobzhang8taskflow6shared4TaskE(arr, i, j);
          partitioned = false;
        }
        i = i + 1 | 0;
      }
      _tmp = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array12MutArrayView4swapGRP38bobzhang8taskflow6shared4TaskE(arr, i, _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(arr) - 1 | 0);
  return { _0: i, _1: partitioned };
}
function _M0FPB28fixed__try__bubble__sort__byGRP38bobzhang8taskflow6shared4TaskE(arr, cmp) {
  let tries = 0;
  const _bind = _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(arr);
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      let sorted = true;
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(_M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, j - 1 | 0), _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr, j)) > 0) {
          sorted = false;
          _M0MPC15array12MutArrayView4swapGRP38bobzhang8taskflow6shared4TaskE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (!sorted) {
        tries = tries + 1 | 0;
        if (tries > 8) {
          return false;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB22fixed__quick__sort__byGRP38bobzhang8taskflow6shared4TaskE(arr, cmp, pred, limit) {
  let limit$2 = limit;
  let arr$2 = arr;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const len = _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(arr$2);
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB23fixed__bubble__sort__byGRP38bobzhang8taskflow6shared4TaskE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGRP38bobzhang8taskflow6shared4TaskE(arr$2, cmp);
      return undefined;
    }
    const _bind = _M0FPB24fixed__choose__pivot__byGRP38bobzhang8taskflow6shared4TaskE(arr$2, cmp);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGRP38bobzhang8taskflow6shared4TaskE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FPB20fixed__partition__byGRP38bobzhang8taskflow6shared4TaskE(arr$2, cmp, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    was_partitioned = _partitioned;
    const _tmp = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    balanced = _tmp >= (len / 8 | 0);
    if (!balanced) {
      limit$2 = limit$2 - 1 | 0;
    }
    const _bind$3 = pred$2;
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _pred = _Some;
      if (cmp(_pred, _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr$2, _pivot)) === 0) {
        let i = _pivot;
        while (true) {
          if (i < len && cmp(_pred, _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr$2, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = _M0MPC15array12MutArrayView5sliceGRP38bobzhang8taskflow6shared4TaskE(arr$2, i, len);
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGRP38bobzhang8taskflow6shared4TaskE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGRP38bobzhang8taskflow6shared4TaskE(arr$2, _pivot + 1 | 0, len);
    if (_M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(left) < _M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(right)) {
      _M0FPB22fixed__quick__sort__byGRP38bobzhang8taskflow6shared4TaskE(left, cmp, pred$2, limit$2);
      pred$2 = _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr$2, _pivot);
      arr$2 = right;
    } else {
      _M0FPB22fixed__quick__sort__byGRP38bobzhang8taskflow6shared4TaskE(right, cmp, _M0MPC15array12MutArrayView2atGRP38bobzhang8taskflow6shared4TaskE(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function _M0MPC15array12MutArrayView8sort__byGRP38bobzhang8taskflow6shared4TaskE(self, cmp) {
  _M0FPB22fixed__quick__sort__byGRP38bobzhang8taskflow6shared4TaskE(self, cmp, undefined, _M0FPB17fixed__get__limit(_M0MPC15array12MutArrayView6lengthGRP38bobzhang8taskflow6shared4TaskE(self)));
}
function _M0MPC15array5Array8sort__byGRP38bobzhang8taskflow6shared4TaskE(self, cmp) {
  _M0MPC15array12MutArrayView8sort__byGRP38bobzhang8taskflow6shared4TaskE(_M0MPC15array5Array17mut__view_2einnerGRP38bobzhang8taskflow6shared4TaskE(self, 0, undefined), cmp);
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
function _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared7CommentEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentERPC14json15JsonDecodeErrorE2Ok([]);
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
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared4TaskEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskERPC14json15JsonDecodeErrorE2Ok([]);
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
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared6MemberEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberERPC14json15JsonDecodeErrorE2Ok([]);
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
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared8ActivityEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityERPC14json15JsonDecodeErrorE2Ok([]);
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
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared10DependencyEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyERPC14json15JsonDecodeErrorE2Ok([]);
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
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared5LabelEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelERPC14json15JsonDecodeErrorE2Ok([]);
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
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared9TaskLabelEHRPC14json15JsonDecodeError(self, f) {
  if (self.length === 0) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelERPC14json15JsonDecodeErrorE2Ok([]);
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
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelERPC14json15JsonDecodeErrorE2Ok(arr);
}
function _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared9TaskLabelE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared10DependencyE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared4TaskE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared5LabelE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared8ActivityE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array9is__emptyGRPB4JsonE(self) {
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
function _M0MPC15array5Array8containsGiE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array10push__iterGRP38bobzhang8taskflow6shared7CommentE(self, iter) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGRP38bobzhang8taskflow6shared7CommentE(iter);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(self, _x);
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
        const _bind$2 = _M0EPC16string10StringViewPC17strconv12fold__digitsGmE(s$2, _M0FPC17strconv17parse__scientificN8exp__numS241, (digit, exp_num) => _M0IP016_24default__implPB7Compare6op__ltGlE(exp_num, $65536L) ? _M0IPC15int645Int64PB3Add3add(_M0IPC15int645Int64PB3Mul3mul($10L, exp_num), _M0MPC13int3Int9to__int64(digit)) : exp_num);
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
      exponent = _M0IPC15int645Int64PB3Add3add(exponent, _M0FPC17strconv13parse__numberN11exp__numberS222);
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
  let n = $0L;
  let i = 0;
  while (true) {
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp = _M0IPC15int645Int64PB3Mul3mul(n, $10L);
      const _tmp$2 = self.digits;
      const _tmp$3 = i;
      $bound_check(_tmp$2, _tmp$3);
      n = _M0IPC15int645Int64PB3Add3add(_tmp, _M0MPC14byte4Byte9to__int64(_tmp$2[_tmp$3]));
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (i < self.decimal_point) {
      n = _M0IPC15int645Int64PB3Mul3mul(n, $10L);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (_M0MPC17strconv7Decimal17should__round__up(self, self.decimal_point)) {
    n = _M0IPC15int645Int64PB3Add3add(n, $1L);
  }
  return n;
}
function _M0MPC17strconv7Decimal11new__digits(self, s) {
  const new_digits = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC17strconv19left__shift__cheats, s)._0;
  const cheat_num = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC17strconv19left__shift__cheats, s)._1;
  let less = false;
  const _bind = cheat_num.length;
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
    return _M0FPC17strconv28checked__mul_2econstr_2f2726;
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
  const quotient = _M0IPC16uint646UInt64PB3Div3div(_M0FPC16uint6410max__value, b);
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
  let line = 1;
  let column = 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < offset) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(_M0MPC16string10StringView11unsafe__get(input, i), 10)) {
        line = line + 1 | 0;
        column = 0;
      } else {
        column = column + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TPC14json8Position(line, column);
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(path, msg) {
  return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentERPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
}
function _M0FPC14json13decode__errorGsE(path, msg) {
  return new _M0DTPC16result6ResultGsRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
}
function _M0FPC14json13decode__errorGiE(path, msg) {
  return new _M0DTPC16result6ResultGiRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
}
function _M0FPC14json13decode__errorGuE(path, msg) {
  return new _M0DTPC16result6ResultGuRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: path, _1: msg }));
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
  if (!_M0MPC16string10StringView8contains(s, new _M0TPC16string10StringView(_M0MPC14json12ParseContext16lex__number__endN7_2abindS1058, 0, _M0MPC14json12ParseContext16lex__number__endN7_2abindS1058.length)) && (!_M0MPC16string10StringView8contains(s, new _M0TPC16string10StringView(_M0MPC14json12ParseContext16lex__number__endN7_2abindS1059, 0, _M0MPC14json12ParseContext16lex__number__endN7_2abindS1059.length)) && !_M0MPC16string10StringView8contains(s, new _M0TPC16string10StringView(_M0MPC14json12ParseContext16lex__number__endN7_2abindS1060, 0, _M0MPC14json12ParseContext16lex__number__endN7_2abindS1060.length)))) {
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
  let r = 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
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
          r = r << 4 | d;
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
            r = r << 4 | d;
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
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(r);
}
function _M0MPC14json12ParseContext11lex__stringN5flushS273(_env, end) {
  const start = _env._2;
  const ctx = _env._1;
  const buf = _env._0;
  if (start.val > 0 && end > start.val) {
    _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string10StringView11sub_2einner(ctx.input, start.val, end));
    return;
  } else {
    return;
  }
}
function _M0MPC14json12ParseContext11lex__string(ctx) {
  const buf = _M0MPB13StringBuilder11new_2einner(0);
  const start = new _M0TPC13ref3RefGiE(ctx.offset);
  const _env = { _0: buf, _1: ctx, _2: start };
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
              _M0MPC14json12ParseContext11lex__stringN5flushS273(_env, ctx.offset - 1 | 0);
              break _L;
            }
            case 10: {
              break _L$3;
            }
            case 13: {
              break _L$3;
            }
            case 92: {
              _M0MPC14json12ParseContext11lex__stringN5flushS273(_env, ctx.offset - 1 | 0);
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
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(vec, _tmp$4);
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
            const element = _M0MPC15array5Array2atGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeEE(_arr, _i);
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
          const _bind = _M0MPB4Iter4nextGRP38bobzhang8taskflow6shared7CommentE(_iterator);
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
              const _func = _replacer;
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
            _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_M0MPC15array5Array9is__emptyGRPB4JsonE(_arr)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
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
function _M0FPC14json18from__json_2einnerGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(json, path) {
  return _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared7CommentE(json, path);
}
function _M0FPC14json18from__json_2einnerGRP38bobzhang8taskflow6shared12AuthResponseE(json, path) {
  return _M0IP38bobzhang8taskflow6shared12AuthResponsePC14json8FromJson10from__json(json, path);
}
function _M0FPC14json18from__json_2einnerGRP38bobzhang8taskflow6shared4TaskE(json, path) {
  return _M0IP38bobzhang8taskflow6shared4TaskPC14json8FromJson10from__json(json, path);
}
function _M0FPC14json18from__json_2einnerGRP38bobzhang8taskflow6shared7CommentE(json, path) {
  return _M0IP38bobzhang8taskflow6shared7CommentPC14json8FromJson10from__json(json, path);
}
function _M0FPC14json18from__json_2einnerGRP38bobzhang8taskflow6shared5BoardE(json, path) {
  return _M0IP38bobzhang8taskflow6shared5BoardPC14json8FromJson10from__json(json, path);
}
function _M0FPC14json18from__json_2einnerGRP38bobzhang8taskflow6shared4UserE(json, path) {
  return _M0IP38bobzhang8taskflow6shared4UserPC14json8FromJson10from__json(json, path);
}
function _M0FPC14json10from__jsonGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = _M0DTPC14json8JsonPath4Root__;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FPC14json18from__json_2einnerGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(json, path);
}
function _M0FPC14json10from__jsonGRP38bobzhang8taskflow6shared12AuthResponseE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = _M0DTPC14json8JsonPath4Root__;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FPC14json18from__json_2einnerGRP38bobzhang8taskflow6shared12AuthResponseE(json, path);
}
function _M0FPC14json10from__jsonGRP38bobzhang8taskflow6shared4TaskE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = _M0DTPC14json8JsonPath4Root__;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FPC14json18from__json_2einnerGRP38bobzhang8taskflow6shared4TaskE(json, path);
}
function _M0FPC14json10from__jsonGRP38bobzhang8taskflow6shared7CommentE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = _M0DTPC14json8JsonPath4Root__;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FPC14json18from__json_2einnerGRP38bobzhang8taskflow6shared7CommentE(json, path);
}
function _M0FPC14json10from__jsonGRP38bobzhang8taskflow6shared5BoardE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = _M0DTPC14json8JsonPath4Root__;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FPC14json18from__json_2einnerGRP38bobzhang8taskflow6shared5BoardE(json, path);
}
function _M0FPC14json10from__jsonGRP38bobzhang8taskflow6shared4UserE(json, path$46$opt) {
  let path;
  if (path$46$opt === undefined) {
    path = _M0DTPC14json8JsonPath4Root__;
  } else {
    const _Some = path$46$opt;
    path = _Some;
  }
  return _M0FPC14json18from__json_2einnerGRP38bobzhang8taskflow6shared4UserE(json, path);
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
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared7CommentE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared7CommentEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IP38bobzhang8taskflow6shared7CommentPC14json8FromJson10from__json(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(path, "Array::from_json: expected array");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared4TaskE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared4TaskEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IP38bobzhang8taskflow6shared4TaskPC14json8FromJson10from__json(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(path, "Array::from_json: expected array");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared6MemberE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared6MemberEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IP38bobzhang8taskflow6shared6MemberPC14json8FromJson10from__json(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(path, "Array::from_json: expected array");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared8ActivityE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared8ActivityEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IP38bobzhang8taskflow6shared8ActivityPC14json8FromJson10from__json(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(path, "Array::from_json: expected array");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared10DependencyE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared10DependencyEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IP38bobzhang8taskflow6shared10DependencyPC14json8FromJson10from__json(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(path, "Array::from_json: expected array");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared5LabelE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared5LabelEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IP38bobzhang8taskflow6shared5LabelPC14json8FromJson10from__json(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(path, "Array::from_json: expected array");
  }
}
function _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared9TaskLabelE(json, path) {
  if (json.$tag === 5) {
    const _Array = json;
    const _a = _Array._0;
    const _bind = new _M0DTPC14json8JsonPath5Index(path, 0);
    if (_bind.$tag === 2) {
      const _Index = _bind;
      return _M0MPC15array5Array4mapiGRPB4JsonRP38bobzhang8taskflow6shared9TaskLabelEHRPC14json15JsonDecodeError(_a, (i, x) => {
        _Index._1 = i;
        return _M0IP38bobzhang8taskflow6shared9TaskLabelPC14json8FromJson10from__json(x, _Index);
      });
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelERPC14json15JsonDecodeErrorE2Ok($panic());
    }
  } else {
    return _M0FPC14json13decode__errorGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(path, "Array::from_json: expected array");
  }
}
function _M0MPC15queue5Queue3newGRP38bobzhang8taskflow8frontend3MsgE() {
  return new _M0TPC15queue5QueueGRP38bobzhang8taskflow8frontend3MsgE(0, undefined, undefined);
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
function _M0FPC13ref3newGRP38bobzhang8taskflow8frontend5ModelE(x) {
  return new _M0TPC13ref3RefGRP38bobzhang8taskflow8frontend5ModelE(x);
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
function _M0IP38bobzhang8taskflow6shared10DependencyPC14json8FromJson10from__json(_x_524, _x_525) {
  const _de_task_id_527 = new _M0TPC13ref3RefGOiE(undefined);
  const _de_depends_on_id_526 = new _M0TPC13ref3RefGOiE(undefined);
  let _map;
  _L: {
    if (_x_524.$tag === 6) {
      const _Object = _x_524;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared10DependencyRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_525, _1: "Expected object to deserialize Dependency" }));
    }
  }
  let _v;
  _L$2: {
    _L$3: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "task_id");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v = __v;
        break _L$3;
      }
      break _L$2;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v, _M0MPC14json8JsonPath8add__key(_x_525, "task_id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_task_id_527.val = _tmp;
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "depends_on_id");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v$2, _M0MPC14json8JsonPath8add__key(_x_525, "depends_on_id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_depends_on_id_526.val = _tmp;
  }
  let _de_task_id_527$2;
  const _bind = _de_task_id_527.val;
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared10DependencyRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_525, _1: "Missing field task_id" }));
  } else {
    const _Some = _bind;
    const _v$3 = _Some;
    _de_task_id_527$2 = _v$3;
  }
  let _de_depends_on_id_526$2;
  const _bind$2 = _de_depends_on_id_526.val;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared10DependencyRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_525, _1: "Missing field depends_on_id" }));
  } else {
    const _Some = _bind$2;
    const _v$3 = _Some;
    _de_depends_on_id_526$2 = _v$3;
  }
  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared10DependencyRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang8taskflow6shared10Dependency(_de_task_id_527$2, _de_depends_on_id_526$2));
}
function _M0IP38bobzhang8taskflow6shared4LangPB2Eq5equal(_x_512, _x_513) {
  if (_x_512 === 0) {
    if (_x_513 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_513 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function _M0IP38bobzhang8taskflow6shared9TaskLabelPC14json8FromJson10from__json(_x_480, _x_481) {
  const _de_task_id_483 = new _M0TPC13ref3RefGOiE(undefined);
  const _de_label_id_482 = new _M0TPC13ref3RefGOiE(undefined);
  let _map;
  _L: {
    if (_x_480.$tag === 6) {
      const _Object = _x_480;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared9TaskLabelRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_481, _1: "Expected object to deserialize TaskLabel" }));
    }
  }
  let _v;
  _L$2: {
    _L$3: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "task_id");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v = __v;
        break _L$3;
      }
      break _L$2;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v, _M0MPC14json8JsonPath8add__key(_x_481, "task_id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_task_id_483.val = _tmp;
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "label_id");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v$2, _M0MPC14json8JsonPath8add__key(_x_481, "label_id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_label_id_482.val = _tmp;
  }
  let _de_task_id_483$2;
  const _bind = _de_task_id_483.val;
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared9TaskLabelRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_481, _1: "Missing field task_id" }));
  } else {
    const _Some = _bind;
    const _v$3 = _Some;
    _de_task_id_483$2 = _v$3;
  }
  let _de_label_id_482$2;
  const _bind$2 = _de_label_id_482.val;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared9TaskLabelRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_481, _1: "Missing field label_id" }));
  } else {
    const _Some = _bind$2;
    const _v$3 = _Some;
    _de_label_id_482$2 = _v$3;
  }
  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared9TaskLabelRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang8taskflow6shared9TaskLabel(_de_task_id_483$2, _de_label_id_482$2));
}
function _M0IP38bobzhang8taskflow6shared8ActivityPC14json8FromJson10from__json(_x_429, _x_430) {
  const _de_user_name_437 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_to_status_436 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_timestamp_435 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_task_title_434 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_task_id_433 = new _M0TPC13ref3RefGOiE(undefined);
  const _de_id_432 = new _M0TPC13ref3RefGOiE(undefined);
  const _de_from_status_431 = new _M0TPC13ref3RefGOsE(undefined);
  let _map;
  _L: {
    if (_x_429.$tag === 6) {
      const _Object = _x_429;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared8ActivityRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_430, _1: "Expected object to deserialize Activity" }));
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
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v, _M0MPC14json8JsonPath8add__key(_x_430, "id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_id_432.val = _tmp;
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "task_id");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v$2, _M0MPC14json8JsonPath8add__key(_x_430, "task_id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_task_id_433.val = _tmp;
  }
  let _v$3;
  _L$4: {
    _L$5: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "task_title");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$3 = __v;
        break _L$5;
      }
      break _L$4;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$3, _M0MPC14json8JsonPath8add__key(_x_430, "task_title"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_task_title_434.val = _tmp;
  }
  let _v$4;
  _L$5: {
    _L$6: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "from_status");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$4 = __v;
        break _L$6;
      }
      break _L$5;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$4, _M0MPC14json8JsonPath8add__key(_x_430, "from_status"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_from_status_431.val = _tmp;
  }
  let _v$5;
  _L$6: {
    _L$7: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "to_status");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$5 = __v;
        break _L$7;
      }
      break _L$6;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$5, _M0MPC14json8JsonPath8add__key(_x_430, "to_status"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_to_status_436.val = _tmp;
  }
  let _v$6;
  _L$7: {
    _L$8: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "timestamp");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$6 = __v;
        break _L$8;
      }
      break _L$7;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$6, _M0MPC14json8JsonPath8add__key(_x_430, "timestamp"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_timestamp_435.val = _tmp;
  }
  let _v$7;
  _L$8: {
    _L$9: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "user_name");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$7 = __v;
        break _L$9;
      }
      break _L$8;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$7, _M0MPC14json8JsonPath8add__key(_x_430, "user_name"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_user_name_437.val = _tmp;
  }
  let _de_user_name_437$2;
  const _bind = _de_user_name_437.val;
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared8ActivityRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_430, _1: "Missing field user_name" }));
  } else {
    const _Some = _bind;
    const _v$8 = _Some;
    _de_user_name_437$2 = _v$8;
  }
  let _de_to_status_436$2;
  const _bind$2 = _de_to_status_436.val;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared8ActivityRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_430, _1: "Missing field to_status" }));
  } else {
    const _Some = _bind$2;
    const _v$8 = _Some;
    _de_to_status_436$2 = _v$8;
  }
  let _de_timestamp_435$2;
  const _bind$3 = _de_timestamp_435.val;
  if (_bind$3 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared8ActivityRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_430, _1: "Missing field timestamp" }));
  } else {
    const _Some = _bind$3;
    const _v$8 = _Some;
    _de_timestamp_435$2 = _v$8;
  }
  let _de_task_title_434$2;
  const _bind$4 = _de_task_title_434.val;
  if (_bind$4 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared8ActivityRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_430, _1: "Missing field task_title" }));
  } else {
    const _Some = _bind$4;
    const _v$8 = _Some;
    _de_task_title_434$2 = _v$8;
  }
  let _de_task_id_433$2;
  const _bind$5 = _de_task_id_433.val;
  if (_bind$5 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared8ActivityRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_430, _1: "Missing field task_id" }));
  } else {
    const _Some = _bind$5;
    const _v$8 = _Some;
    _de_task_id_433$2 = _v$8;
  }
  let _de_id_432$2;
  const _bind$6 = _de_id_432.val;
  if (_bind$6 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared8ActivityRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_430, _1: "Missing field id" }));
  } else {
    const _Some = _bind$6;
    const _v$8 = _Some;
    _de_id_432$2 = _v$8;
  }
  let _de_from_status_431$2;
  const _bind$7 = _de_from_status_431.val;
  if (_bind$7 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared8ActivityRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_430, _1: "Missing field from_status" }));
  } else {
    const _Some = _bind$7;
    const _v$8 = _Some;
    _de_from_status_431$2 = _v$8;
  }
  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared8ActivityRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang8taskflow6shared8Activity(_de_id_432$2, _de_task_id_433$2, _de_task_title_434$2, _de_from_status_431$2, _de_to_status_436$2, _de_timestamp_435$2, _de_user_name_437$2));
}
function _M0IP38bobzhang8taskflow6shared5BoardPC14json8FromJson10from__json(_x_378, _x_379) {
  const _de_today_386 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_tasks_385 = new _M0TPC13ref3RefGORPB5ArrayGRP38bobzhang8taskflow6shared4TaskEE(_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskEE4None__);
  const _de_task_labels_384 = new _M0TPC13ref3RefGORPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelEE(_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelEE4None__);
  const _de_members_383 = new _M0TPC13ref3RefGORPB5ArrayGRP38bobzhang8taskflow6shared6MemberEE(_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberEE4None__);
  const _de_labels_382 = new _M0TPC13ref3RefGORPB5ArrayGRP38bobzhang8taskflow6shared5LabelEE(_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelEE4None__);
  const _de_dependencies_381 = new _M0TPC13ref3RefGORPB5ArrayGRP38bobzhang8taskflow6shared10DependencyEE(_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyEE4None__);
  const _de_activities_380 = new _M0TPC13ref3RefGORPB5ArrayGRP38bobzhang8taskflow6shared8ActivityEE(_M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityEE4None__);
  let _map;
  _L: {
    if (_x_378.$tag === 6) {
      const _Object = _x_378;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_379, _1: "Expected object to deserialize Board" }));
    }
  }
  let _v;
  _L$2: {
    _L$3: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "tasks");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v = __v;
        break _L$3;
      }
      break _L$2;
    }
    const _bind = _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared4TaskE(_v, _M0MPC14json8JsonPath8add__key(_x_379, "tasks"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_tasks_385.val = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared4TaskEE4Some(_tmp);
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "members");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared6MemberE(_v$2, _M0MPC14json8JsonPath8add__key(_x_379, "members"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_members_383.val = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared6MemberEE4Some(_tmp);
  }
  let _v$3;
  _L$4: {
    _L$5: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "activities");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$3 = __v;
        break _L$5;
      }
      break _L$4;
    }
    const _bind = _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared8ActivityE(_v$3, _M0MPC14json8JsonPath8add__key(_x_379, "activities"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_activities_380.val = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared8ActivityEE4Some(_tmp);
  }
  let _v$4;
  _L$5: {
    _L$6: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "dependencies");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$4 = __v;
        break _L$6;
      }
      break _L$5;
    }
    const _bind = _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared10DependencyE(_v$4, _M0MPC14json8JsonPath8add__key(_x_379, "dependencies"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_dependencies_381.val = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared10DependencyEE4Some(_tmp);
  }
  let _v$5;
  _L$6: {
    _L$7: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "labels");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$5 = __v;
        break _L$7;
      }
      break _L$6;
    }
    const _bind = _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared5LabelE(_v$5, _M0MPC14json8JsonPath8add__key(_x_379, "labels"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_labels_382.val = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared5LabelEE4Some(_tmp);
  }
  let _v$6;
  _L$7: {
    _L$8: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "task_labels");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$6 = __v;
        break _L$8;
      }
      break _L$7;
    }
    const _bind = _M0IPC15array5ArrayPC14json8FromJson10from__jsonGRP38bobzhang8taskflow6shared9TaskLabelE(_v$6, _M0MPC14json8JsonPath8add__key(_x_379, "task_labels"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_task_labels_384.val = new _M0DTPC16option6OptionGRPB5ArrayGRP38bobzhang8taskflow6shared9TaskLabelEE4Some(_tmp);
  }
  let _v$7;
  _L$8: {
    _L$9: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "today");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$7 = __v;
        break _L$9;
      }
      break _L$8;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$7, _M0MPC14json8JsonPath8add__key(_x_379, "today"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_today_386.val = _tmp;
  }
  let _de_today_386$2;
  const _bind = _de_today_386.val;
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_379, _1: "Missing field today" }));
  } else {
    const _Some = _bind;
    const _v$8 = _Some;
    _de_today_386$2 = _v$8;
  }
  let _de_tasks_385$2;
  const _bind$2 = _de_tasks_385.val;
  if (_bind$2.$tag === 1) {
    const _Some = _bind$2;
    const _v$8 = _Some._0;
    _de_tasks_385$2 = _v$8;
  } else {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_379, _1: "Missing field tasks" }));
  }
  let _de_task_labels_384$2;
  const _bind$3 = _de_task_labels_384.val;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    const _v$8 = _Some._0;
    _de_task_labels_384$2 = _v$8;
  } else {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_379, _1: "Missing field task_labels" }));
  }
  let _de_members_383$2;
  const _bind$4 = _de_members_383.val;
  if (_bind$4.$tag === 1) {
    const _Some = _bind$4;
    const _v$8 = _Some._0;
    _de_members_383$2 = _v$8;
  } else {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_379, _1: "Missing field members" }));
  }
  let _de_labels_382$2;
  const _bind$5 = _de_labels_382.val;
  if (_bind$5.$tag === 1) {
    const _Some = _bind$5;
    const _v$8 = _Some._0;
    _de_labels_382$2 = _v$8;
  } else {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_379, _1: "Missing field labels" }));
  }
  let _de_dependencies_381$2;
  const _bind$6 = _de_dependencies_381.val;
  if (_bind$6.$tag === 1) {
    const _Some = _bind$6;
    const _v$8 = _Some._0;
    _de_dependencies_381$2 = _v$8;
  } else {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_379, _1: "Missing field dependencies" }));
  }
  let _de_activities_380$2;
  const _bind$7 = _de_activities_380.val;
  if (_bind$7.$tag === 1) {
    const _Some = _bind$7;
    const _v$8 = _Some._0;
    _de_activities_380$2 = _v$8;
  } else {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_379, _1: "Missing field activities" }));
  }
  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang8taskflow6shared5Board(_de_tasks_385$2, _de_members_383$2, _de_activities_380$2, _de_dependencies_381$2, _de_labels_382$2, _de_task_labels_384$2, _de_today_386$2));
}
function _M0IP38bobzhang8taskflow6shared4TaskPC14json8FromJson10from__json(_x_322, _x_323) {
  const _de_title_331 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_status_330 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_priority_329 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_id_328 = new _M0TPC13ref3RefGOiE(undefined);
  const _de_due_date_327 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_description_326 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_created_at_325 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_assignee_id_324 = new _M0TPC13ref3RefGOiE(undefined);
  let _map;
  _L: {
    if (_x_322.$tag === 6) {
      const _Object = _x_322;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_323, _1: "Expected object to deserialize Task" }));
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
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v, _M0MPC14json8JsonPath8add__key(_x_323, "id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_id_328.val = _tmp;
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "title");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$2, _M0MPC14json8JsonPath8add__key(_x_323, "title"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_title_331.val = _tmp;
  }
  let _v$3;
  _L$4: {
    _L$5: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "description");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$3 = __v;
        break _L$5;
      }
      break _L$4;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$3, _M0MPC14json8JsonPath8add__key(_x_323, "description"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_description_326.val = _tmp;
  }
  let _v$4;
  _L$5: {
    _L$6: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "status");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$4 = __v;
        break _L$6;
      }
      break _L$5;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$4, _M0MPC14json8JsonPath8add__key(_x_323, "status"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_status_330.val = _tmp;
  }
  let _v$5;
  _L$6: {
    _L$7: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "priority");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$5 = __v;
        break _L$7;
      }
      break _L$6;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$5, _M0MPC14json8JsonPath8add__key(_x_323, "priority"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_priority_329.val = _tmp;
  }
  let _v$6;
  _L$7: {
    _L$8: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "assignee_id");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$6 = __v;
        break _L$8;
      }
      break _L$7;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v$6, _M0MPC14json8JsonPath8add__key(_x_323, "assignee_id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_assignee_id_324.val = _tmp;
  }
  let _v$7;
  _L$8: {
    _L$9: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "due_date");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$7 = __v;
        break _L$9;
      }
      break _L$8;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$7, _M0MPC14json8JsonPath8add__key(_x_323, "due_date"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_due_date_327.val = _tmp;
  }
  let _v$8;
  _L$9: {
    _L$10: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "created_at");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$8 = __v;
        break _L$10;
      }
      break _L$9;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$8, _M0MPC14json8JsonPath8add__key(_x_323, "created_at"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_created_at_325.val = _tmp;
  }
  let _de_title_331$2;
  const _bind = _de_title_331.val;
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_323, _1: "Missing field title" }));
  } else {
    const _Some = _bind;
    const _v$9 = _Some;
    _de_title_331$2 = _v$9;
  }
  let _de_status_330$2;
  const _bind$2 = _de_status_330.val;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_323, _1: "Missing field status" }));
  } else {
    const _Some = _bind$2;
    const _v$9 = _Some;
    _de_status_330$2 = _v$9;
  }
  let _de_priority_329$2;
  const _bind$3 = _de_priority_329.val;
  if (_bind$3 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_323, _1: "Missing field priority" }));
  } else {
    const _Some = _bind$3;
    const _v$9 = _Some;
    _de_priority_329$2 = _v$9;
  }
  let _de_id_328$2;
  const _bind$4 = _de_id_328.val;
  if (_bind$4 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_323, _1: "Missing field id" }));
  } else {
    const _Some = _bind$4;
    const _v$9 = _Some;
    _de_id_328$2 = _v$9;
  }
  let _de_due_date_327$2;
  const _bind$5 = _de_due_date_327.val;
  if (_bind$5 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_323, _1: "Missing field due_date" }));
  } else {
    const _Some = _bind$5;
    const _v$9 = _Some;
    _de_due_date_327$2 = _v$9;
  }
  let _de_description_326$2;
  const _bind$6 = _de_description_326.val;
  if (_bind$6 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_323, _1: "Missing field description" }));
  } else {
    const _Some = _bind$6;
    const _v$9 = _Some;
    _de_description_326$2 = _v$9;
  }
  let _de_created_at_325$2;
  const _bind$7 = _de_created_at_325.val;
  if (_bind$7 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_323, _1: "Missing field created_at" }));
  } else {
    const _Some = _bind$7;
    const _v$9 = _Some;
    _de_created_at_325$2 = _v$9;
  }
  let _de_assignee_id_324$2;
  const _bind$8 = _de_assignee_id_324.val;
  if (_bind$8 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_323, _1: "Missing field assignee_id" }));
  } else {
    const _Some = _bind$8;
    const _v$9 = _Some;
    _de_assignee_id_324$2 = _v$9;
  }
  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TaskRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang8taskflow6shared4Task(_de_id_328$2, _de_title_331$2, _de_description_326$2, _de_status_330$2, _de_priority_329$2, _de_assignee_id_324$2, _de_due_date_327$2, _de_created_at_325$2));
}
function _M0IP38bobzhang8taskflow6shared5LabelPC14json8FromJson10from__json(_x_291, _x_292) {
  const _de_name_295 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_id_294 = new _M0TPC13ref3RefGOiE(undefined);
  const _de_color_293 = new _M0TPC13ref3RefGOsE(undefined);
  let _map;
  _L: {
    if (_x_291.$tag === 6) {
      const _Object = _x_291;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5LabelRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Expected object to deserialize Label" }));
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
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v, _M0MPC14json8JsonPath8add__key(_x_292, "id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_id_294.val = _tmp;
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
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$2, _M0MPC14json8JsonPath8add__key(_x_292, "name"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_name_295.val = _tmp;
  }
  let _v$3;
  _L$4: {
    _L$5: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "color");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$3 = __v;
        break _L$5;
      }
      break _L$4;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$3, _M0MPC14json8JsonPath8add__key(_x_292, "color"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_color_293.val = _tmp;
  }
  let _de_name_295$2;
  const _bind = _de_name_295.val;
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5LabelRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Missing field name" }));
  } else {
    const _Some = _bind;
    const _v$4 = _Some;
    _de_name_295$2 = _v$4;
  }
  let _de_id_294$2;
  const _bind$2 = _de_id_294.val;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5LabelRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Missing field id" }));
  } else {
    const _Some = _bind$2;
    const _v$4 = _Some;
    _de_id_294$2 = _v$4;
  }
  let _de_color_293$2;
  const _bind$3 = _de_color_293.val;
  if (_bind$3 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5LabelRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_292, _1: "Missing field color" }));
  } else {
    const _Some = _bind$3;
    const _v$4 = _Some;
    _de_color_293$2 = _v$4;
  }
  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5LabelRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang8taskflow6shared5Label(_de_id_294$2, _de_name_295$2, _de_color_293$2));
}
function _M0IP38bobzhang8taskflow6shared4UserPC14json8FromJson10from__json(_x_260, _x_261) {
  const _de_username_264 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_id_263 = new _M0TPC13ref3RefGOiE(undefined);
  const _de_color_262 = new _M0TPC13ref3RefGOsE(undefined);
  let _map;
  _L: {
    if (_x_260.$tag === 6) {
      const _Object = _x_260;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UserRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_261, _1: "Expected object to deserialize User" }));
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
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v, _M0MPC14json8JsonPath8add__key(_x_261, "id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_id_263.val = _tmp;
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "username");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$2, _M0MPC14json8JsonPath8add__key(_x_261, "username"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_username_264.val = _tmp;
  }
  let _v$3;
  _L$4: {
    _L$5: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "color");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$3 = __v;
        break _L$5;
      }
      break _L$4;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$3, _M0MPC14json8JsonPath8add__key(_x_261, "color"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_color_262.val = _tmp;
  }
  let _de_username_264$2;
  const _bind = _de_username_264.val;
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UserRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_261, _1: "Missing field username" }));
  } else {
    const _Some = _bind;
    const _v$4 = _Some;
    _de_username_264$2 = _v$4;
  }
  let _de_id_263$2;
  const _bind$2 = _de_id_263.val;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UserRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_261, _1: "Missing field id" }));
  } else {
    const _Some = _bind$2;
    const _v$4 = _Some;
    _de_id_263$2 = _v$4;
  }
  let _de_color_262$2;
  const _bind$3 = _de_color_262.val;
  if (_bind$3 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UserRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_261, _1: "Missing field color" }));
  } else {
    const _Some = _bind$3;
    const _v$4 = _Some;
    _de_color_262$2 = _v$4;
  }
  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UserRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang8taskflow6shared4User(_de_id_263$2, _de_username_264$2, _de_color_262$2));
}
function _M0IP38bobzhang8taskflow6shared7CommentPC14json8FromJson10from__json(_x_219, _x_220) {
  const _de_text_225 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_task_id_224 = new _M0TPC13ref3RefGOiE(undefined);
  const _de_id_223 = new _M0TPC13ref3RefGOiE(undefined);
  const _de_created_at_222 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_author_221 = new _M0TPC13ref3RefGOsE(undefined);
  let _map;
  _L: {
    if (_x_219.$tag === 6) {
      const _Object = _x_219;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_220, _1: "Expected object to deserialize Comment" }));
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
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v, _M0MPC14json8JsonPath8add__key(_x_220, "id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_id_223.val = _tmp;
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "task_id");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v$2, _M0MPC14json8JsonPath8add__key(_x_220, "task_id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_task_id_224.val = _tmp;
  }
  let _v$3;
  _L$4: {
    _L$5: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "author");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$3 = __v;
        break _L$5;
      }
      break _L$4;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$3, _M0MPC14json8JsonPath8add__key(_x_220, "author"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_author_221.val = _tmp;
  }
  let _v$4;
  _L$5: {
    _L$6: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "text");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$4 = __v;
        break _L$6;
      }
      break _L$5;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$4, _M0MPC14json8JsonPath8add__key(_x_220, "text"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_text_225.val = _tmp;
  }
  let _v$5;
  _L$6: {
    _L$7: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "created_at");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$5 = __v;
        break _L$7;
      }
      break _L$6;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$5, _M0MPC14json8JsonPath8add__key(_x_220, "created_at"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_created_at_222.val = _tmp;
  }
  let _de_text_225$2;
  const _bind = _de_text_225.val;
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_220, _1: "Missing field text" }));
  } else {
    const _Some = _bind;
    const _v$6 = _Some;
    _de_text_225$2 = _v$6;
  }
  let _de_task_id_224$2;
  const _bind$2 = _de_task_id_224.val;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_220, _1: "Missing field task_id" }));
  } else {
    const _Some = _bind$2;
    const _v$6 = _Some;
    _de_task_id_224$2 = _v$6;
  }
  let _de_id_223$2;
  const _bind$3 = _de_id_223.val;
  if (_bind$3 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_220, _1: "Missing field id" }));
  } else {
    const _Some = _bind$3;
    const _v$6 = _Some;
    _de_id_223$2 = _v$6;
  }
  let _de_created_at_222$2;
  const _bind$4 = _de_created_at_222.val;
  if (_bind$4 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_220, _1: "Missing field created_at" }));
  } else {
    const _Some = _bind$4;
    const _v$6 = _Some;
    _de_created_at_222$2 = _v$6;
  }
  let _de_author_221$2;
  const _bind$5 = _de_author_221.val;
  if (_bind$5 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_220, _1: "Missing field author" }));
  } else {
    const _Some = _bind$5;
    const _v$6 = _Some;
    _de_author_221$2 = _v$6;
  }
  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang8taskflow6shared7Comment(_de_id_223$2, _de_task_id_224$2, _de_author_221$2, _de_text_225$2, _de_created_at_222$2));
}
function _M0IP38bobzhang8taskflow6shared12AuthResponsePC14json8FromJson10from__json(_x_193, _x_194) {
  const _de_user_196 = new _M0TPC13ref3RefGORP38bobzhang8taskflow6shared4UserE(undefined);
  const _de_message_195 = new _M0TPC13ref3RefGOsE(undefined);
  let _map;
  _L: {
    if (_x_193.$tag === 6) {
      const _Object = _x_193;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponseRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_194, _1: "Expected object to deserialize AuthResponse" }));
    }
  }
  let _v;
  _L$2: {
    _L$3: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "user");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v = __v;
        break _L$3;
      }
      break _L$2;
    }
    const _bind = _M0IP38bobzhang8taskflow6shared4UserPC14json8FromJson10from__json(_v, _M0MPC14json8JsonPath8add__key(_x_194, "user"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_user_196.val = _tmp;
  }
  let _v$2;
  _L$3: {
    _L$4: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "message");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$2 = __v;
        break _L$4;
      }
      break _L$3;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$2, _M0MPC14json8JsonPath8add__key(_x_194, "message"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_message_195.val = _tmp;
  }
  let _de_user_196$2;
  const _bind = _de_user_196.val;
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponseRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_194, _1: "Missing field user" }));
  } else {
    const _Some = _bind;
    const _v$3 = _Some;
    _de_user_196$2 = _v$3;
  }
  let _de_message_195$2;
  const _bind$2 = _de_message_195.val;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponseRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_194, _1: "Missing field message" }));
  } else {
    const _Some = _bind$2;
    const _v$3 = _Some;
    _de_message_195$2 = _v$3;
  }
  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponseRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang8taskflow6shared12AuthResponse(_de_user_196$2, _de_message_195$2));
}
function _M0IP38bobzhang8taskflow6shared6MemberPC14json8FromJson10from__json(_x_162, _x_163) {
  const _de_name_166 = new _M0TPC13ref3RefGOsE(undefined);
  const _de_id_165 = new _M0TPC13ref3RefGOiE(undefined);
  const _de_color_164 = new _M0TPC13ref3RefGOsE(undefined);
  let _map;
  _L: {
    if (_x_162.$tag === 6) {
      const _Object = _x_162;
      const __map = _Object._0;
      _map = __map;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared6MemberRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_163, _1: "Expected object to deserialize Member" }));
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
    const _bind = _M0IPC13int3IntPC14json8FromJson10from__json(_v, _M0MPC14json8JsonPath8add__key(_x_163, "id"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_id_165.val = _tmp;
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
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$2, _M0MPC14json8JsonPath8add__key(_x_163, "name"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_name_166.val = _tmp;
  }
  let _v$3;
  _L$4: {
    _L$5: {
      const _bind = _M0MPB3Map3getGsRPB4JsonE(_map, "color");
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const __v = _Some;
        _v$3 = __v;
        break _L$5;
      }
      break _L$4;
    }
    const _bind = _M0IPC16string6StringPC14json8FromJson10from__json(_v$3, _M0MPC14json8JsonPath8add__key(_x_163, "color"));
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    _de_color_164.val = _tmp;
  }
  let _de_name_166$2;
  const _bind = _de_name_166.val;
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared6MemberRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_163, _1: "Missing field name" }));
  } else {
    const _Some = _bind;
    const _v$4 = _Some;
    _de_name_166$2 = _v$4;
  }
  let _de_id_165$2;
  const _bind$2 = _de_id_165.val;
  if (_bind$2 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared6MemberRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_163, _1: "Missing field id" }));
  } else {
    const _Some = _bind$2;
    const _v$4 = _Some;
    _de_id_165$2 = _v$4;
  }
  let _de_color_164$2;
  const _bind$3 = _de_color_164.val;
  if (_bind$3 === undefined) {
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared6MemberRPC14json15JsonDecodeErrorE3Err(new _M0DTPC15error5Error61moonbitlang_2fcore_2fjson_2eJsonDecodeError_2eJsonDecodeError({ _0: _x_163, _1: "Missing field color" }));
  } else {
    const _Some = _bind$3;
    const _v$4 = _Some;
    _de_color_164$2 = _v$4;
  }
  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared6MemberRPC14json15JsonDecodeErrorE2Ok(new _M0TP38bobzhang8taskflow6shared6Member(_de_id_165$2, _de_name_166$2, _de_color_164$2));
}
function _M0FP38bobzhang8taskflow6shared18validate__username(name) {
  const len = _M0MPC16string6String20char__length_2einner(name, 0, undefined);
  if (len < _M0FP38bobzhang8taskflow6shared13min__username || len > _M0FP38bobzhang8taskflow6shared13max__username) {
    return false;
  }
  const _it = _M0MPC16string6String4iter(name);
  while (true) {
    let c;
    _L: {
      const _bind = _M0MPB4Iter4nextGcE(_it);
      if (_bind === -1) {
        break;
      } else {
        const _Some = _bind;
        const _c = _Some;
        c = _c;
        break _L;
      }
    }
    if (!(c >= 97 && c <= 122 || (c >= 65 && c <= 90 || (c >= 48 && c <= 57 || c === 95)))) {
      return false;
    }
    continue;
  }
  return true;
}
function _M0FP38bobzhang8taskflow6shared18validate__password(pass) {
  const len = _M0MPC16string6String20char__length_2einner(pass, 0, undefined);
  return len >= _M0FP38bobzhang8taskflow6shared13min__password && len <= _M0FP38bobzhang8taskflow6shared13max__password;
}
function _M0FP38bobzhang8taskflow6shared21validate__task__title(title) {
  return _M0IP016_24default__implPB2Eq10not__equalGsE(title, "") && _M0MPC16string6String20char__length_2einner(title, 0, undefined) <= _M0FP38bobzhang8taskflow6shared16max__task__title;
}
function _M0FP38bobzhang8taskflow6shared23validate__comment__text(text) {
  return _M0IP016_24default__implPB2Eq10not__equalGsE(text, "") && _M0MPC16string6String20char__length_2einner(text, 0, undefined) <= _M0FP38bobzhang8taskflow6shared18max__comment__text;
}
function _M0FP38bobzhang8taskflow6shared20allowed__transitions(status) {
  switch (status) {
    case "todo": {
      return ["in_progress", "blocked"];
    }
    case "in_progress": {
      return ["review", "blocked", "todo"];
    }
    case "review": {
      return ["done", "in_progress"];
    }
    case "blocked": {
      return ["todo", "in_progress"];
    }
    case "done": {
      return ["todo"];
    }
    default: {
      return [];
    }
  }
}
function _M0FP38bobzhang8taskflow6shared21is__valid__transition(from, to) {
  const transitions = _M0FP38bobzhang8taskflow6shared20allowed__transitions(from);
  const _bind = transitions.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const t = transitions[_];
      if (t === to) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP38bobzhang8taskflow6shared13status__label(status) {
  switch (status) {
    case "todo": {
      return "To Do";
    }
    case "in_progress": {
      return "In Progress";
    }
    case "review": {
      return "Review";
    }
    case "done": {
      return "Done";
    }
    case "blocked": {
      return "Blocked";
    }
    default: {
      return status;
    }
  }
}
function _M0FP38bobzhang8taskflow6shared13status__color(status) {
  switch (status) {
    case "todo": {
      return "#94a3b8";
    }
    case "in_progress": {
      return "#3b82f6";
    }
    case "review": {
      return "#eab308";
    }
    case "done": {
      return "#22c55e";
    }
    case "blocked": {
      return "#ef4444";
    }
    default: {
      return "#94a3b8";
    }
  }
}
function _M0FP38bobzhang8taskflow6shared17transition__label(from, to) {
  _L: {
    switch (from) {
      case "todo": {
        switch (to) {
          case "in_progress": {
            return "Start";
          }
          case "blocked": {
            return "Block";
          }
          default: {
            break _L;
          }
        }
      }
      case "in_progress": {
        switch (to) {
          case "review": {
            return "Review";
          }
          case "blocked": {
            return "Block";
          }
          case "todo": {
            return "Pause";
          }
          default: {
            break _L;
          }
        }
      }
      case "review": {
        switch (to) {
          case "done": {
            return "Approve";
          }
          case "in_progress": {
            return "Rework";
          }
          default: {
            break _L;
          }
        }
      }
      case "blocked": {
        switch (to) {
          case "todo": {
            return "Unblock";
          }
          case "in_progress": {
            return "Resume";
          }
          default: {
            break _L;
          }
        }
      }
      case "done": {
        if (to === "todo") {
          return "Reopen";
        } else {
          break _L;
        }
      }
      default: {
        break _L;
      }
    }
  }
  return _M0FP38bobzhang8taskflow6shared13status__label(to);
}
function _M0FP38bobzhang8taskflow6shared9api__task(id) {
  return `/api/tasks/${_M0IP016_24default__implPB4Show10to__stringGiE(id)}`;
}
function _M0FP38bobzhang8taskflow6shared17api__task__status(id) {
  return `/api/tasks/${_M0IP016_24default__implPB4Show10to__stringGiE(id)}/status`;
}
function _M0FP38bobzhang8taskflow6shared19api__task__comments(id) {
  return `/api/tasks/${_M0IP016_24default__implPB4Show10to__stringGiE(id)}/comments`;
}
function _M0FP38bobzhang8taskflow6shared15api__task__deps(id) {
  return `/api/tasks/${_M0IP016_24default__implPB4Show10to__stringGiE(id)}/deps`;
}
function _M0FP38bobzhang8taskflow6shared23api__task__deps__remove(id) {
  return `/api/tasks/${_M0IP016_24default__implPB4Show10to__stringGiE(id)}/deps/remove`;
}
function _M0FP38bobzhang8taskflow6shared17api__task__labels(id) {
  return `/api/tasks/${_M0IP016_24default__implPB4Show10to__stringGiE(id)}/labels`;
}
function _M0FP38bobzhang8taskflow6shared25api__task__labels__remove(id) {
  return `/api/tasks/${_M0IP016_24default__implPB4Show10to__stringGiE(id)}/labels/remove`;
}
function _M0FP38bobzhang8taskflow6shared16priority__weight(priority) {
  switch (priority) {
    case "urgent": {
      return 0;
    }
    case "high": {
      return 1;
    }
    case "medium": {
      return 2;
    }
    case "low": {
      return 3;
    }
    default: {
      return 4;
    }
  }
}
function _M0FP38bobzhang8taskflow6shared15priority__label(priority) {
  switch (priority) {
    case "low": {
      return "Low";
    }
    case "medium": {
      return "Medium";
    }
    case "high": {
      return "High";
    }
    case "urgent": {
      return "Urgent";
    }
    default: {
      return priority;
    }
  }
}
function _M0FP38bobzhang8taskflow6shared15priority__color(priority) {
  switch (priority) {
    case "low": {
      return "#94a3b8";
    }
    case "medium": {
      return "#3b82f6";
    }
    case "high": {
      return "#f97316";
    }
    case "urgent": {
      return "#ef4444";
    }
    default: {
      return "#94a3b8";
    }
  }
}
function _M0FP38bobzhang8taskflow6shared13member__color(color) {
  switch (color) {
    case "red": {
      return "#ef4444";
    }
    case "orange": {
      return "#f97316";
    }
    case "yellow": {
      return "#eab308";
    }
    case "green": {
      return "#22c55e";
    }
    case "blue": {
      return "#3b82f6";
    }
    case "purple": {
      return "#a855f7";
    }
    default: {
      return "#94a3b8";
    }
  }
}
function _M0FP38bobzhang8taskflow6shared15member__initial(name) {
  let ch;
  _L: {
    const _bind = _M0MPC16string6String9get__char(name, 0);
    if (_bind === -1) {
      return "?";
    } else {
      const _Some = _bind;
      const _ch = _Some;
      ch = _ch;
      break _L;
    }
  }
  return _M0IPC14char4CharPB4Show10to__string(ch);
}
function _M0FP38bobzhang8taskflow6shared11is__overdue(due_date, today) {
  return _M0IP016_24default__implPB2Eq10not__equalGsE(due_date, "") && _M0IP016_24default__implPB7Compare6op__ltGsE(due_date, today);
}
function _M0FP38bobzhang8taskflow6shared14urgency__label(due_date, today) {
  if (due_date === "") {
    return "No deadline";
  }
  if (_M0IP016_24default__implPB7Compare6op__ltGsE(due_date, today)) {
    return "Overdue";
  }
  if (due_date === today) {
    return "Due today";
  }
  return "Upcoming";
}
function _M0FP38bobzhang8taskflow6shared17count__by__status(tasks, status) {
  const count = new _M0TPC13ref3RefGiE(0);
  const _bind = tasks.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const t = tasks[_];
      if (t.status === status) {
        count.val = count.val + 1 | 0;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return count.val;
}
function _M0FP38bobzhang8taskflow6shared19completion__percent(tasks) {
  const total = tasks.length;
  if (total === 0) {
    return 0;
  }
  if (total === 0) {
    $panic();
  }
  return (Math.imul(_M0FP38bobzhang8taskflow6shared17count__by__status(tasks, "done"), 100) | 0) / total | 0;
}
function _M0FP38bobzhang8taskflow6shared12find__member(members, id) {
  const _bind = members.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const m = members[_];
      if (m.id === id) {
        return m;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FP38bobzhang8taskflow6shared15sort__tasks__by(tasks, sort_by, ascending) {
  const result = _M0MPC15array5Array4copyGRP38bobzhang8taskflow6shared9TaskLabelE(tasks);
  _M0MPC15array5Array8sort__byGRP38bobzhang8taskflow6shared4TaskE(result, (a, b) => {
    let cmp;
    switch (sort_by) {
      case "title": {
        cmp = _M0IPC16string6StringPB7Compare7compare(_M0MPC16string6String9to__lower(a.title), _M0MPC16string6String9to__lower(b.title));
        break;
      }
      case "due_date": {
        cmp = a.due_date === "" && b.due_date === "" ? 0 : a.due_date === "" ? 1 : b.due_date === "" ? -1 : _M0IPC16string6StringPB7Compare7compare(a.due_date, b.due_date);
        break;
      }
      case "created_at": {
        cmp = _M0IPC16string6StringPB7Compare7compare(a.created_at, b.created_at);
        break;
      }
      default: {
        const pa = _M0FP38bobzhang8taskflow6shared16priority__weight(a.priority);
        const pb = _M0FP38bobzhang8taskflow6shared16priority__weight(b.priority);
        cmp = pa !== pb ? pa - pb | 0 : a.due_date === "" && b.due_date === "" ? 0 : a.due_date === "" ? 1 : b.due_date === "" ? -1 : _M0IPC16string6StringPB7Compare7compare(a.due_date, b.due_date);
      }
    }
    const directed = ascending ? cmp : -cmp | 0;
    return directed !== 0 ? directed : a.id - b.id | 0;
  });
  return result;
}
function _M0FP38bobzhang8taskflow6shared18recent__activities(activities, limit) {
  const result = [];
  const _bind = activities.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const act = activities[i];
      if (i >= limit) {
        break;
      }
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(result, act);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function _M0FP38bobzhang8taskflow6shared21activities__for__task(activities, task_id) {
  return _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared8ActivityE(activities, (a) => a.task_id === task_id);
}
function _M0FP38bobzhang8taskflow6shared16matches__urgency(task, urgency, today) {
  switch (urgency) {
    case "": {
      return true;
    }
    case "overdue": {
      return _M0FP38bobzhang8taskflow6shared11is__overdue(task.due_date, today);
    }
    case "due_today": {
      return task.due_date === today;
    }
    case "has_deadline": {
      return _M0IP016_24default__implPB2Eq10not__equalGsE(task.due_date, "");
    }
    case "no_deadline": {
      return task.due_date === "";
    }
    default: {
      return true;
    }
  }
}
function _M0FP38bobzhang8taskflow6shared15search__matches(task, query) {
  if (query === "") {
    return true;
  }
  const q = _M0MPC16string6String9to__lower(query);
  return _M0MPC16string6String8contains(_M0MPC16string6String9to__lower(task.title), new _M0TPC16string10StringView(q, 0, q.length)) || _M0MPC16string6String8contains(_M0MPC16string6String9to__lower(task.description), new _M0TPC16string10StringView(q, 0, q.length));
}
function _M0FP38bobzhang8taskflow6shared17get__dependencies(deps, task_id) {
  const result = [];
  const _bind = deps.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const d = deps[_];
      if (d.task_id === task_id) {
        _M0MPC15array5Array4pushGiE(result, d.depends_on_id);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function _M0FP38bobzhang8taskflow6shared21has__unresolved__deps(deps, tasks, task_id) {
  const dep_ids = _M0FP38bobzhang8taskflow6shared17get__dependencies(deps, task_id);
  const _bind = dep_ids.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const id = dep_ids[_];
      const _bind$2 = tasks.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$2) {
          const t = tasks[_$2];
          if (t.id === id && _M0IP016_24default__implPB2Eq10not__equalGsE(t.status, "done")) {
            return true;
          }
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP38bobzhang8taskflow6shared21filter__tasks_2einner(tasks, status, assignee_id, priority, query, urgency, today) {
  return _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared4TaskE(tasks, (t) => (status === "" || t.status === status) && ((assignee_id === 0 || t.assignee_id === assignee_id) && ((priority === "" || t.priority === priority) && (_M0FP38bobzhang8taskflow6shared15search__matches(t, query) && _M0FP38bobzhang8taskflow6shared16matches__urgency(t, urgency, today)))));
}
function _M0FP38bobzhang8taskflow6shared17labels__for__task(labels, task_labels, task_id) {
  const label_ids = [];
  const _bind = task_labels.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const tl = task_labels[_];
      if (tl.task_id === task_id) {
        _M0MPC15array5Array4pushGiE(label_ids, tl.label_id);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared5LabelE(labels, (l) => _M0MPC15array5Array8containsGiE(label_ids, l.id));
}
function _M0FP38bobzhang8taskflow6shared11csv__escape(s) {
  let _tmp;
  const _bind = ",";
  if (_M0MPC16string6String8contains(s, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
    _tmp = true;
  } else {
    let _tmp$2;
    const _bind$2 = "\"";
    if (_M0MPC16string6String8contains(s, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
      _tmp$2 = true;
    } else {
      const _bind$3 = "\n";
      _tmp$2 = _M0MPC16string6String8contains(s, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
    }
    _tmp = _tmp$2;
  }
  if (_tmp) {
    const _bind$2 = "\"";
    const _tmp$2 = new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length);
    const _bind$3 = "\"\"";
    return `\"${_M0MPC16string6String7replace(s, _tmp$2, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))}\"`;
  } else {
    return s;
  }
}
function _M0FP38bobzhang8taskflow6shared14tasks__to__csv(tasks, members) {
  const lines = ["id,title,description,status,priority,assignee,due_date,created_at"];
  const _bind = tasks.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const t = tasks[_];
      let assignee;
      let m;
      _L: {
        _L$2: {
          const _bind$2 = _M0FP38bobzhang8taskflow6shared12find__member(members, t.assignee_id);
          if (_bind$2 === undefined) {
            assignee = "";
          } else {
            const _Some = _bind$2;
            const _m = _Some;
            m = _m;
            break _L$2;
          }
          break _L;
        }
        assignee = m.name;
      }
      const _tmp$2 = [_M0MPC13int3Int18to__string_2einner(t.id, 10), _M0FP38bobzhang8taskflow6shared11csv__escape(t.title), _M0FP38bobzhang8taskflow6shared11csv__escape(t.description), t.status, t.priority, _M0FP38bobzhang8taskflow6shared11csv__escape(assignee), t.due_date, t.created_at];
      const _bind$2 = ",";
      const line = _M0MPC15array5Array4joinGsE(_tmp$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(lines, line);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = "\n";
  return _M0MPC15array5Array4joinGsE(lines, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
}
function _M0FP38bobzhang8taskflow6shared1t(lang, key) {
  if (lang === 1) {
    switch (key) {
      case "app_title": {
        return "任务流";
      }
      case "sign_in": {
        return "登录";
      }
      case "create_account": {
        return "创建账户";
      }
      case "register": {
        return "注册";
      }
      case "username": {
        return "用户名";
      }
      case "password": {
        return "密码";
      }
      case "enter_username": {
        return "请输入用户名";
      }
      case "enter_password": {
        return "请输入密码";
      }
      case "need_account": {
        return "没有账户？点此注册";
      }
      case "have_account": {
        return "已有账户？点此登录";
      }
      case "fill_all_fields": {
        return "请填写所有字段";
      }
      case "invalid_credentials": {
        return "用户名或密码错误";
      }
      case "registration_failed": {
        return "注册失败";
      }
      case "username_hint": {
        return "用户名：3-30个字母、数字或下划线";
      }
      case "password_hint": {
        return "密码：4-100个字符";
      }
      case "logout": {
        return "退出登录";
      }
      case "list": {
        return "列表";
      }
      case "board": {
        return "看板";
      }
      case "my_tasks": {
        return "我的任务";
      }
      case "light": {
        return "日间";
      }
      case "dark": {
        return "夜间";
      }
      case "new_task": {
        return "+ 新建任务";
      }
      case "sort": {
        return "排序：";
      }
      case "sort_priority": {
        return "优先级";
      }
      case "sort_due_date": {
        return "截止日期";
      }
      case "sort_title": {
        return "标题";
      }
      case "sort_created_at": {
        return "创建时间";
      }
      case "search": {
        return "搜索：";
      }
      case "search_placeholder": {
        return "搜索任务...";
      }
      case "status": {
        return "状态：";
      }
      case "priority_filter": {
        return "优先级：";
      }
      case "assignee_filter": {
        return "负责人：";
      }
      case "due_filter": {
        return "截止：";
      }
      case "all": {
        return "全部";
      }
      case "overdue": {
        return "已逾期";
      }
      case "today": {
        return "今天";
      }
      case "has_due": {
        return "有截止";
      }
      case "no_due": {
        return "无截止";
      }
      case "new_task_title": {
        return "新建任务";
      }
      case "task_title_placeholder": {
        return "任务标题";
      }
      case "desc_placeholder": {
        return "描述（可选）";
      }
      case "priority": {
        return "优先级";
      }
      case "assignee": {
        return "负责人";
      }
      case "due_date": {
        return "截止日期";
      }
      case "create_task": {
        return "创建任务";
      }
      case "cancel": {
        return "取消";
      }
      case "save": {
        return "保存";
      }
      case "notes": {
        return "备注";
      }
      case "edit": {
        return "编辑";
      }
      case "del": {
        return "删除";
      }
      case "blocked_by": {
        return "被阻塞";
      }
      case "depends_done": {
        return "依赖（已完成）";
      }
      case "no_tasks": {
        return "暂无任务";
      }
      case "recent_activity": {
        return "最近动态";
      }
      case "created": {
        return "创建";
      }
      case "delete_task": {
        return "确认删除任务？";
      }
      case "delete": {
        return "删除";
      }
      case "add_note_placeholder": {
        return "添加备注...";
      }
      case "add": {
        return "添加";
      }
      case "no_notes": {
        return "暂无备注";
      }
      case "dependencies": {
        return "依赖关系";
      }
      case "no_dependencies": {
        return "暂无依赖";
      }
      case "add_dependency": {
        return "添加依赖：";
      }
      case "history": {
        return "历史记录";
      }
      case "no_history": {
        return "暂无历史";
      }
      case "labels": {
        return "标签";
      }
      case "no_labels": {
        return "暂无标签";
      }
      case "add_label": {
        return "添加标签";
      }
      case "new_label": {
        return "新建标签";
      }
      case "label_name": {
        return "标签名称";
      }
      case "label_filter": {
        return "标签：";
      }
      case "export": {
        return "导出";
      }
      case "loading": {
        return "加载中...";
      }
      case "no_matches": {
        return "没有匹配的任务";
      }
      case "not_logged_in": {
        return "未登录";
      }
      case "keyboard_hints": {
        return "n: 新建 | l: 列表 | b: 看板 | d: 主题 | Esc: 关闭";
      }
      default: {
        return key;
      }
    }
  } else {
    switch (key) {
      case "app_title": {
        return "TaskFlow";
      }
      case "sign_in": {
        return "Sign In";
      }
      case "create_account": {
        return "Create Account";
      }
      case "register": {
        return "Register";
      }
      case "username": {
        return "Username";
      }
      case "password": {
        return "Password";
      }
      case "enter_username": {
        return "Enter username";
      }
      case "enter_password": {
        return "Enter password";
      }
      case "need_account": {
        return "Need an account? Register";
      }
      case "have_account": {
        return "Already have an account? Sign In";
      }
      case "fill_all_fields": {
        return "Please fill in all fields";
      }
      case "invalid_credentials": {
        return "Invalid username or password";
      }
      case "registration_failed": {
        return "Registration failed";
      }
      case "username_hint": {
        return "Username: 3-30 alphanumeric or underscore characters";
      }
      case "password_hint": {
        return "Password: 4-100 characters";
      }
      case "logout": {
        return "Logout";
      }
      case "list": {
        return "List";
      }
      case "board": {
        return "Board";
      }
      case "my_tasks": {
        return "My Tasks";
      }
      case "light": {
        return "Light";
      }
      case "dark": {
        return "Dark";
      }
      case "new_task": {
        return "+ New Task";
      }
      case "sort": {
        return "Sort:";
      }
      case "sort_priority": {
        return "Priority";
      }
      case "sort_due_date": {
        return "Due Date";
      }
      case "sort_title": {
        return "Title";
      }
      case "sort_created_at": {
        return "Created";
      }
      case "search": {
        return "Search:";
      }
      case "search_placeholder": {
        return "Filter tasks...";
      }
      case "status": {
        return "Status:";
      }
      case "priority_filter": {
        return "Priority:";
      }
      case "assignee_filter": {
        return "Assignee:";
      }
      case "due_filter": {
        return "Due:";
      }
      case "all": {
        return "All";
      }
      case "overdue": {
        return "Overdue";
      }
      case "today": {
        return "Today";
      }
      case "has_due": {
        return "Has Due";
      }
      case "no_due": {
        return "No Due";
      }
      case "new_task_title": {
        return "New Task";
      }
      case "task_title_placeholder": {
        return "Task title";
      }
      case "desc_placeholder": {
        return "Description (optional)";
      }
      case "priority": {
        return "Priority";
      }
      case "assignee": {
        return "Assignee";
      }
      case "due_date": {
        return "Due Date";
      }
      case "create_task": {
        return "Create Task";
      }
      case "cancel": {
        return "Cancel";
      }
      case "save": {
        return "Save";
      }
      case "notes": {
        return "Notes";
      }
      case "edit": {
        return "Edit";
      }
      case "del": {
        return "Del";
      }
      case "blocked_by": {
        return "Blocked by";
      }
      case "depends_done": {
        return "Depends on (done)";
      }
      case "no_tasks": {
        return "No tasks";
      }
      case "recent_activity": {
        return "Recent Activity";
      }
      case "created": {
        return "Created";
      }
      case "delete_task": {
        return "Delete Task?";
      }
      case "delete": {
        return "Delete";
      }
      case "add_note_placeholder": {
        return "Add a note...";
      }
      case "add": {
        return "Add";
      }
      case "no_notes": {
        return "No notes yet";
      }
      case "dependencies": {
        return "Dependencies";
      }
      case "no_dependencies": {
        return "No dependencies";
      }
      case "add_dependency": {
        return "Add dependency:";
      }
      case "history": {
        return "History";
      }
      case "no_history": {
        return "No history";
      }
      case "labels": {
        return "Labels";
      }
      case "no_labels": {
        return "No labels";
      }
      case "add_label": {
        return "Add label";
      }
      case "new_label": {
        return "New label";
      }
      case "label_name": {
        return "Label name";
      }
      case "label_filter": {
        return "Label:";
      }
      case "export": {
        return "Export";
      }
      case "loading": {
        return "Loading...";
      }
      case "no_matches": {
        return "No tasks match your filters";
      }
      case "not_logged_in": {
        return "Not logged in";
      }
      case "keyboard_hints": {
        return "n: new task | l: list | b: board | d: dark mode | Esc: close";
      }
      default: {
        return key;
      }
    }
  }
}
function _M0FP38bobzhang8taskflow6shared11t__complete(lang, pct) {
  if (lang === 1) {
    return `${_M0IP016_24default__implPB4Show10to__stringGiE(pct)}% 已完成`;
  } else {
    return `${_M0IP016_24default__implPB4Show10to__stringGiE(pct)}% complete`;
  }
}
function _M0FP38bobzhang8taskflow6shared14t__tasks__done(lang, done, total) {
  if (lang === 1) {
    return `${_M0IP016_24default__implPB4Show10to__stringGiE(done)}/${_M0IP016_24default__implPB4Show10to__stringGiE(total)} 已完成`;
  } else {
    return `${_M0IP016_24default__implPB4Show10to__stringGiE(done)}/${_M0IP016_24default__implPB4Show10to__stringGiE(total)} tasks done`;
  }
}
function _M0FP38bobzhang8taskflow6shared9t__status(lang, status) {
  if (lang === 1) {
    switch (status) {
      case "todo": {
        return "待办";
      }
      case "in_progress": {
        return "进行中";
      }
      case "review": {
        return "审核";
      }
      case "done": {
        return "完成";
      }
      case "blocked": {
        return "阻塞";
      }
      default: {
        return _M0FP38bobzhang8taskflow6shared13status__label(status);
      }
    }
  } else {
    return _M0FP38bobzhang8taskflow6shared13status__label(status);
  }
}
function _M0FP38bobzhang8taskflow6shared11t__priority(lang, priority) {
  if (lang === 1) {
    switch (priority) {
      case "low": {
        return "低";
      }
      case "medium": {
        return "中";
      }
      case "high": {
        return "高";
      }
      case "urgent": {
        return "紧急";
      }
      default: {
        return _M0FP38bobzhang8taskflow6shared15priority__label(priority);
      }
    }
  } else {
    return _M0FP38bobzhang8taskflow6shared15priority__label(priority);
  }
}
function _M0FP38bobzhang8taskflow6shared13t__transition(lang, from, to) {
  _L: {
    if (lang === 1) {
      switch (from) {
        case "todo": {
          switch (to) {
            case "in_progress": {
              return "开始";
            }
            case "blocked": {
              return "阻塞";
            }
            default: {
              break _L;
            }
          }
        }
        case "in_progress": {
          switch (to) {
            case "review": {
              return "提交审核";
            }
            case "blocked": {
              return "阻塞";
            }
            case "todo": {
              return "暂停";
            }
            default: {
              break _L;
            }
          }
        }
        case "review": {
          switch (to) {
            case "done": {
              return "通过";
            }
            case "in_progress": {
              return "返工";
            }
            default: {
              break _L;
            }
          }
        }
        case "blocked": {
          switch (to) {
            case "todo": {
              return "解除阻塞";
            }
            case "in_progress": {
              return "恢复";
            }
            default: {
              break _L;
            }
          }
        }
        case "done": {
          if (to === "todo") {
            return "重新打开";
          } else {
            break _L;
          }
        }
        default: {
          break _L;
        }
      }
    } else {
      return _M0FP38bobzhang8taskflow6shared17transition__label(from, to);
    }
  }
  return _M0FP38bobzhang8taskflow6shared17transition__label(from, to);
}
function _M0FP38bobzhang8taskflow6shared11t__activity(lang, act) {
  const from = _M0FP38bobzhang8taskflow6shared9t__status(lang, act.from_status);
  const to = _M0FP38bobzhang8taskflow6shared9t__status(lang, act.to_status);
  return _M0IP016_24default__implPB2Eq10not__equalGsE(act.user_name, "") ? `${_M0IPC16string6StringPB4Show10to__string(act.user_name)}: ${_M0IPC16string6StringPB4Show10to__string(act.task_title)}: ${_M0IPC16string6StringPB4Show10to__string(from)} → ${_M0IPC16string6StringPB4Show10to__string(to)}` : `${_M0IPC16string6StringPB4Show10to__string(act.task_title)}: ${_M0IPC16string6StringPB4Show10to__string(from)} → ${_M0IPC16string6StringPB4Show10to__string(to)}`;
}
function _M0FP38bobzhang8taskflow6shared16t__server__error(lang, msg) {
  _L: {
    if (lang === 1) {
      switch (msg) {
        case "Missing username": {
          return "缺少用户名";
        }
        case "Missing password": {
          return "缺少密码";
        }
        case "Username must be 3-30 alphanumeric characters or underscores": {
          return "用户名：3-30个字母、数字或下划线";
        }
        case "Password must be 4-100 characters": {
          return "密码：4-100个字符";
        }
        case "Username already taken": {
          return "用户名已被使用";
        }
        case "Invalid username or password": {
          return "用户名或密码错误";
        }
        default: {
          break _L;
        }
      }
    } else {
      break _L;
    }
  }
  return _M0FP38bobzhang8taskflow6shared1t(lang, msg);
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
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15to__drag__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom20ffi__to__drag__event(_M0FP319moonbit_2dcommunity7rabbita3dom12js__identityGRP319moonbit_2dcommunity7rabbita3dom7ElementRP319moonbit_2dcommunity7rabbita2js5ValueE(s));
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
      _bind = { _0: mid$3, _1: _M0MPB4Iter4join(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC15array9ArrayView4iterGRP38bobzhang8taskflow6shared7CommentE(paths), _M0IPC16string10StringViewPB4Show10to__string), "/") };
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
                  _M0MPC15array5Array10push__iterGRP38bobzhang8taskflow6shared7CommentE(tmp, _M0MPB3Map6valuesGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(mp));
                  break _L$8;
                }
                _M0MPC15array5Array10push__iterGRP38bobzhang8taskflow6shared7CommentE(tmp, _M0MPC15array5Array4iterGRP38bobzhang8taskflow6shared7CommentE(arr));
              }
            }
            break _L$4;
          }
          _M0MPC15array5Array10push__iterGRP38bobzhang8taskflow6shared7CommentE(tmp, _M0MPC15array5Array4iterGRP38bobzhang8taskflow6shared7CommentE(xs));
        }
        break _L$2;
      }
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(result, inst.link);
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
        _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(stack, c);
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
        _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(stack, c);
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
  const anchor = new _M0TPC13ref3RefGRP319moonbit_2dcommunity7rabbita2js8NullableGRP319moonbit_2dcommunity7rabbita3dom4NodeEE(before);
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
    const slot = _M0FPC13ref3newGRP38bobzhang8taskflow8frontend5ModelE(h);
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
          const slot$2 = _M0FPC13ref3newGRP38bobzhang8taskflow8frontend5ModelE(handler);
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
      const before = new _M0TPC13ref3RefGRP319moonbit_2dcommunity7rabbita2js8NullableGRP319moonbit_2dcommunity7rabbita3dom4NodeEE(anchor);
      const acc = [];
      let len;
      if (len1 > len2) {
        let _tmp = len1 - 1 | 0;
        while (true) {
          const i = _tmp;
          if (i >= len2) {
            _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(_M0MPC15array5Array2atGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeEE(old$3, i), sandbox, parent);
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
            const inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(_M0MPC15array5Array2atGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeEE(new$3, i), sandbox, parent_inst, parent, before.val);
            _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(acc, inode);
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
          const inode = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(_M0MPC15array5Array2atGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeEE(old$3, i), _M0MPC15array5Array2atGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeEE(new$3, i), sandbox, parent, before.val, parent_inst);
          _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(acc, inode);
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
    const before = new _M0TPC13ref3RefGRP319moonbit_2dcommunity7rabbita2js8NullableGRP319moonbit_2dcommunity7rabbita3dom4NodeEE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
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
          const _bind$3 = _M0MPC15array5Array2atGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeEE(order, i);
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
        _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(reversed, { _0: k, _1: inode });
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
  const sandbox = new _M0TPC13ref3RefGORP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(undefined);
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
  const _bind$10 = _M0MPC15queue5Queue3newGRP38bobzhang8taskflow8frontend3MsgE();
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
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags3new() {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Flags(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime2Id3new(), false, 0);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags11mark__dirty(s) {
  s.dirty = true;
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
function _M0FP319moonbit_2dcommunity7rabbita4html9push__for(value, attrs) {
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
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "for", v);
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
function _M0FP319moonbit_2dcommunity7rabbita4html10push__rows(value, attrs) {
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
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "rows", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__cols(value, attrs) {
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
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "cols", _M0MPC13int3Int18to__string_2einner(v, 10));
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
function _M0FP319moonbit_2dcommunity7rabbita4html10push__wrap(value, attrs) {
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
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "wrap", v);
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
function _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("p", attrs$2, children);
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
function _M0FP319moonbit_2dcommunity7rabbita4html4text(str) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4text(str);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, for_, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html9push__for(for_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("label", attrs$2, children);
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
function _M0FP319moonbit_2dcommunity7rabbita4html16textarea_2einnerGsE(style, id, class_, title, hidden, name, value, rows, cols, placeholder, read_only, disabled, maxlength, minlength, required, autofocus, wrap, on_change, on_input, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__name(name, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html25push__value__prop__string(value, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__rows(rows, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__cols(cols, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html17push__placeholder(placeholder, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__readonly(read_only, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(disabled, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__maxlength(maxlength, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__minlength(minlength, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__required(required, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(autofocus, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__wrap(wrap, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__change(on_change, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__input(on_input, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("textarea", attrs$2, children);
}
function _M0MP319moonbit_2dcommunity7rabbita4html8Keyboard3key(self) {
  return _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent3key(self);
}
function _M0IPC16string6StringP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(str) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array([_M0FP319moonbit_2dcommunity7rabbita4html4text(str)]);
}
function _M0IPC15array5ArrayP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(self) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array(_M0MPC15array5Array3mapGRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self, (x) => x));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs15on__drag__event(self, event, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, event, (event$2, scheduler) => {
    scheduler.method_table.method_0(scheduler.self, msg(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15to__drag__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event$2))));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__dragstart(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs15on__drag__event(self, "dragstart", msg);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs12on__dragover(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs15on__drag__event(self, "dragover", msg);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__dragend(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs15on__drag__event(self, "dragend", msg);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8on__drop(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs15on__drag__event(self, "drop", msg);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(self, name, value) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, `data-${name}`, value);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9draggable(self, value) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, "draggable", value);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8tabindex(self, value) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, "tabindex", _M0MPC13int3Int18to__string_2einner(value, 10));
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
function _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4stepGRP38bobzhang8taskflow8frontend5ModelRP38bobzhang8taskflow8frontend3MsgE(self, scheduler) {
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
function _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4viewGRP38bobzhang8taskflow8frontend5ModelRP38bobzhang8taskflow8frontend3MsgE(self) {
  const _func = self.view;
  return _func(self.dispatch, self.model.val);
}
function _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell5flagsGRP38bobzhang8taskflow8frontend5ModelRP38bobzhang8taskflow8frontend3MsgE(self) {
  return self.flags;
}
function _M0MP219moonbit_2dcommunity7rabbita10Dispatcher7messageGRP38bobzhang8taskflow8frontend3MsgE(self, msg) {
  return _M0FP419moonbit_2dcommunity7rabbita8internal7runtime7message(self.id, () => {
    _M0MPC15queue5Queue4pushGWRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self.inbox, msg);
  });
}
function _M0FP219moonbit_2dcommunity7rabbita20cell__with__dispatchGRP38bobzhang8taskflow8frontend5ModelRP38bobzhang8taskflow8frontend3MsgE(model, update, view) {
  const flags = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags3new();
  const dispatcher = new _M0TP219moonbit_2dcommunity7rabbita10DispatcherGRP38bobzhang8taskflow8frontend3MsgE(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags2id(flags), _M0MPC15queue5Queue3newGRP38bobzhang8taskflow8frontend3MsgE());
  const dispatch = (m) => _M0MP219moonbit_2dcommunity7rabbita10Dispatcher7messageGRP38bobzhang8taskflow8frontend3MsgE(dispatcher, m);
  const model$2 = _M0FPC13ref3newGRP38bobzhang8taskflow8frontend5ModelE(model);
  return { _0: dispatch, _1: { self: new _M0TP219moonbit_2dcommunity7rabbita9TypedCellGRP38bobzhang8taskflow8frontend5ModelRP38bobzhang8taskflow8frontend3MsgE(model$2, dispatcher, dispatch, update, view, flags), method_table: _M0FP0197moonbit_2dcommunity_2frabbita_2fTypedCell_5bbobzhang_2ftaskflow_2ffrontend_2fModel_2c_20bobzhang_2ftaskflow_2ffrontend_2fMsg_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eIsCell } };
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
function _M0FP319moonbit_2dcommunity7rabbita4http7requestGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(url, http_method, expect, body) {
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
        scheduler.method_table.method_0(scheduler.self, f$2(_M0MPC16result6Result4bindGRPB4JsonsRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(result, decoder)));
      }, (msg) => {
        scheduler.method_table.method_0(scheduler.self, f$2(new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEsE3Err(`Http request failed:${_M0IPC16string6StringPB4Show10to__string(msg)}`)));
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
function _M0FP319moonbit_2dcommunity7rabbita4http7requestGRP38bobzhang8taskflow6shared12AuthResponseE(url, http_method, expect, body) {
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
        scheduler.method_table.method_0(scheduler.self, f$2(_M0MPC16result6Result4bindGRPB4JsonsRP38bobzhang8taskflow6shared12AuthResponseE(result, decoder)));
      }, (msg) => {
        scheduler.method_table.method_0(scheduler.self, f$2(new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponsesE3Err(`Http request failed:${_M0IPC16string6StringPB4Show10to__string(msg)}`)));
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
function _M0FP319moonbit_2dcommunity7rabbita4http3getGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(url, expect) {
  return _M0FP319moonbit_2dcommunity7rabbita4http7requestGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(url, "GET", expect, _M0DTP319moonbit_2dcommunity7rabbita4http4Body5Empty__);
}
function _M0FP319moonbit_2dcommunity7rabbita4http3getGRP38bobzhang8taskflow6shared5BoardE(url, expect) {
  return _M0FP319moonbit_2dcommunity7rabbita4http7requestGRP38bobzhang8taskflow6shared12AuthResponseE(url, "GET", expect, _M0DTP319moonbit_2dcommunity7rabbita4http4Body5Empty__);
}
function _M0FP319moonbit_2dcommunity7rabbita4http6deleteGuE(url, expect) {
  return _M0FP319moonbit_2dcommunity7rabbita4http7requestGuE(url, "DELETE", expect, _M0DTP319moonbit_2dcommunity7rabbita4http4Body5Empty__);
}
function _M0FP319moonbit_2dcommunity7rabbita4http4postGuE(url, body, expect) {
  return _M0FP319moonbit_2dcommunity7rabbita4http7requestGuE(url, "POST", expect, body);
}
function _M0FP319moonbit_2dcommunity7rabbita4http4postGRP38bobzhang8taskflow6shared12AuthResponseE(url, body, expect) {
  return _M0FP319moonbit_2dcommunity7rabbita4http7requestGRP38bobzhang8taskflow6shared12AuthResponseE(url, "POST", expect, body);
}
function _M0FP38bobzhang8taskflow8frontend10get__theme(dark) {
  return dark ? new _M0TP38bobzhang8taskflow8frontend5Theme("#0f172a", "#1e293b", "#334155", "#f1f5f9", "#94a3b8", "#64748b", "#1e293b", "#475569", "#1e293b", "#334155", "#1e293b") : new _M0TP38bobzhang8taskflow8frontend5Theme("#f8fafc", "white", "#f0f0f5", "#1e293b", "#64748b", "#94a3b8", "white", "#e2e8f0", "white", "#f1f5f9", "#f8fafc");
}
function _M0FP38bobzhang8taskflow8frontend26find__member__id__by__name(members, name) {
  const _bind = members.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const m = members[_];
      if (m.name === name) {
        return m.id;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return 0;
}
function _M0FP38bobzhang8taskflow8frontend9fetch__me(dispatch) {
  return _M0FP319moonbit_2dcommunity7rabbita4http3getGRP38bobzhang8taskflow6shared5BoardE(_M0FP38bobzhang8taskflow6shared7api__me, new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared4UserE4Json((result) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg5GotMe(result)), (json) => {
    let _try_err;
    _L: {
      const _bind = _M0FPC14json10from__jsonGRP38bobzhang8taskflow6shared4UserE(json, undefined);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L;
      }
      return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UsersE2Ok(_tmp);
    }
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4UsersE3Err("Not logged in");
  }));
}
function _M0FP38bobzhang8taskflow8frontend12fetch__board(dispatch) {
  return _M0FP319moonbit_2dcommunity7rabbita4http3getGRP38bobzhang8taskflow6shared5BoardE(_M0FP38bobzhang8taskflow6shared10api__board, new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared5BoardE4Json((result) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg8GotBoard(result)), (json) => {
    let _try_err;
    _L: {
      const _bind = _M0FPC14json10from__jsonGRP38bobzhang8taskflow6shared5BoardE(json, undefined);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L;
      }
      return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardsE2Ok(_tmp);
    }
    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared5BoardsE3Err("Failed to decode board");
  }));
}
function _M0FP38bobzhang8taskflow8frontend6update(dispatch, msg, model) {
  let new_status;
  _L: {
    let status;
    _L$2: {
      let id;
      _L$3: {
        let l;
        _L$4: {
          let key;
          _L$5: {
            let e;
            _L$6: {
              let comment;
              _L$7: {
                let v;
                _L$8: {
                  let e$2;
                  _L$9: {
                    let comments;
                    _L$10: {
                      let task_id;
                      _L$11: {
                        let task_id$2;
                        let label_id;
                        _L$12: {
                          let task_id$3;
                          let label_id$2;
                          _L$13: {
                            let task_id$4;
                            let depends_on_id;
                            _L$14: {
                              let task_id$5;
                              let depends_on_id$2;
                              _L$15: {
                                let id$2;
                                _L$16: {
                                  let id$3;
                                  let new_status$2;
                                  _L$17: {
                                    let v$2;
                                    _L$18: {
                                      let id$4;
                                      _L$19: {
                                        let v$3;
                                        _L$20: {
                                          let v$4;
                                          _L$21: {
                                            let v$5;
                                            _L$22: {
                                              let task;
                                              _L$23: {
                                                let e$3;
                                                _L$24: {
                                                  let task$2;
                                                  _L$25: {
                                                    let v$6;
                                                    _L$26: {
                                                      let id$5;
                                                      _L$27: {
                                                        let v$7;
                                                        _L$28: {
                                                          let v$8;
                                                          _L$29: {
                                                            let v$9;
                                                            _L$30: {
                                                              let s;
                                                              _L$31: {
                                                                let m;
                                                                _L$32: {
                                                                  let id$6;
                                                                  _L$33: {
                                                                    let u;
                                                                    _L$34: {
                                                                      let q;
                                                                      _L$35: {
                                                                        let p;
                                                                        _L$36: {
                                                                          let id$7;
                                                                          _L$37: {
                                                                            let s$2;
                                                                            _L$38: {
                                                                              let e$4;
                                                                              _L$39: {
                                                                                let resp;
                                                                                _L$40: {
                                                                                  let v$10;
                                                                                  _L$41: {
                                                                                    let v$11;
                                                                                    _L$42: {
                                                                                      let e$5;
                                                                                      _L$43: {
                                                                                        let board;
                                                                                        _L$44: {
                                                                                          let user;
                                                                                          _L$45: {
                                                                                            switch (msg.$tag) {
                                                                                              case 0: {
                                                                                                return { _0: _M0FP38bobzhang8taskflow8frontend9fetch__me(dispatch), _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, true, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 1: {
                                                                                                const _GotMe = msg;
                                                                                                const _x = _GotMe._0;
                                                                                                if (_x.$tag === 1) {
                                                                                                  const _Ok = _x;
                                                                                                  const _user = _Ok._0;
                                                                                                  user = _user;
                                                                                                  break _L$45;
                                                                                                } else {
                                                                                                  return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, "login", model.auth_username, model.auth_password, model.auth_error, false, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, false, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                                }
                                                                                              }
                                                                                              case 2: {
                                                                                                const _GotBoard = msg;
                                                                                                const _x$2 = _GotBoard._0;
                                                                                                if (_x$2.$tag === 1) {
                                                                                                  const _Ok = _x$2;
                                                                                                  const _board = _Ok._0;
                                                                                                  board = _board;
                                                                                                  break _L$44;
                                                                                                } else {
                                                                                                  const _Err = _x$2;
                                                                                                  const _e = _Err._0;
                                                                                                  e$5 = _e;
                                                                                                  break _L$43;
                                                                                                }
                                                                                              }
                                                                                              case 3: {
                                                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, "login", "", "", "", model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 4: {
                                                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, "register", "", "", "", model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 5: {
                                                                                                const _AuthUsernameChanged = msg;
                                                                                                const _v = _AuthUsernameChanged._0;
                                                                                                v$11 = _v;
                                                                                                break _L$42;
                                                                                              }
                                                                                              case 6: {
                                                                                                const _AuthPasswordChanged = msg;
                                                                                                const _v$2 = _AuthPasswordChanged._0;
                                                                                                v$10 = _v$2;
                                                                                                break _L$41;
                                                                                              }
                                                                                              case 7: {
                                                                                                if (model.auth_username === "" || model.auth_password === "") {
                                                                                                  return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, _M0FP38bobzhang8taskflow6shared1t(model.lang, "fill_all_fields"), model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                                }
                                                                                                const username = model.auth_username;
                                                                                                const password = model.auth_password;
                                                                                                const _bind = [{ _0: "username", _1: _M0IPC16string6StringPB6ToJson8to__json(username) }, { _0: "password", _1: _M0IPC16string6StringPB6ToJson8to__json(password) }];
                                                                                                const cmd = _M0FP319moonbit_2dcommunity7rabbita4http4postGRP38bobzhang8taskflow6shared12AuthResponseE(_M0FP38bobzhang8taskflow6shared10api__login, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 2)))), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared12AuthResponseE4Json((result) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg10AuthResult(result)), (json) => {
                                                                                                  _L$46: {
                                                                                                    let msg$2;
                                                                                                    _L$47: {
                                                                                                      if (json.$tag === 6) {
                                                                                                        const _Object = json;
                                                                                                        const _x$3 = _Object._0;
                                                                                                        const _x$4 = _M0MPB3Map3getGsRPB4JsonE(_x$3, "error");
                                                                                                        if (_x$4 === undefined) {
                                                                                                          break _L$46;
                                                                                                        } else {
                                                                                                          const _Some = _x$4;
                                                                                                          const _x$5 = _Some;
                                                                                                          if (_x$5.$tag === 4) {
                                                                                                            const _String = _x$5;
                                                                                                            const _msg = _String._0;
                                                                                                            msg$2 = _msg;
                                                                                                            break _L$47;
                                                                                                          } else {
                                                                                                            break _L$46;
                                                                                                          }
                                                                                                        }
                                                                                                      } else {
                                                                                                        break _L$46;
                                                                                                      }
                                                                                                    }
                                                                                                    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponsesE3Err(msg$2);
                                                                                                  }
                                                                                                  let _try_err;
                                                                                                  _L$47: {
                                                                                                    const _bind$2 = _M0FPC14json10from__jsonGRP38bobzhang8taskflow6shared12AuthResponseE(json, undefined);
                                                                                                    let _tmp;
                                                                                                    if (_bind$2.$tag === 1) {
                                                                                                      const _ok = _bind$2;
                                                                                                      _tmp = _ok._0;
                                                                                                    } else {
                                                                                                      const _err = _bind$2;
                                                                                                      _try_err = _err._0;
                                                                                                      break _L$47;
                                                                                                    }
                                                                                                    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponsesE2Ok(_tmp);
                                                                                                  }
                                                                                                  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponsesE3Err("invalid_credentials");
                                                                                                }));
                                                                                                return { _0: cmd, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, "", true, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 8: {
                                                                                                if (!_M0FP38bobzhang8taskflow6shared18validate__username(model.auth_username)) {
                                                                                                  return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, _M0FP38bobzhang8taskflow6shared1t(model.lang, "username_hint"), model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                                }
                                                                                                if (!_M0FP38bobzhang8taskflow6shared18validate__password(model.auth_password)) {
                                                                                                  return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, _M0FP38bobzhang8taskflow6shared1t(model.lang, "password_hint"), model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                                }
                                                                                                const username$2 = model.auth_username;
                                                                                                const password$2 = model.auth_password;
                                                                                                const _bind$2 = [{ _0: "username", _1: _M0IPC16string6StringPB6ToJson8to__json(username$2) }, { _0: "password", _1: _M0IPC16string6StringPB6ToJson8to__json(password$2) }];
                                                                                                const cmd$2 = _M0FP319moonbit_2dcommunity7rabbita4http4postGRP38bobzhang8taskflow6shared12AuthResponseE(_M0FP38bobzhang8taskflow6shared13api__register, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 2)))), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared12AuthResponseE4Json((result) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg10AuthResult(result)), (json) => {
                                                                                                  _L$46: {
                                                                                                    let msg$2;
                                                                                                    _L$47: {
                                                                                                      if (json.$tag === 6) {
                                                                                                        const _Object = json;
                                                                                                        const _x$3 = _Object._0;
                                                                                                        const _x$4 = _M0MPB3Map3getGsRPB4JsonE(_x$3, "error");
                                                                                                        if (_x$4 === undefined) {
                                                                                                          break _L$46;
                                                                                                        } else {
                                                                                                          const _Some = _x$4;
                                                                                                          const _x$5 = _Some;
                                                                                                          if (_x$5.$tag === 4) {
                                                                                                            const _String = _x$5;
                                                                                                            const _msg = _String._0;
                                                                                                            msg$2 = _msg;
                                                                                                            break _L$47;
                                                                                                          } else {
                                                                                                            break _L$46;
                                                                                                          }
                                                                                                        }
                                                                                                      } else {
                                                                                                        break _L$46;
                                                                                                      }
                                                                                                    }
                                                                                                    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponsesE3Err(msg$2);
                                                                                                  }
                                                                                                  let _try_err;
                                                                                                  _L$47: {
                                                                                                    const _bind$3 = _M0FPC14json10from__jsonGRP38bobzhang8taskflow6shared12AuthResponseE(json, undefined);
                                                                                                    let _tmp;
                                                                                                    if (_bind$3.$tag === 1) {
                                                                                                      const _ok = _bind$3;
                                                                                                      _tmp = _ok._0;
                                                                                                    } else {
                                                                                                      const _err = _bind$3;
                                                                                                      _try_err = _err._0;
                                                                                                      break _L$47;
                                                                                                    }
                                                                                                    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponsesE2Ok(_tmp);
                                                                                                  }
                                                                                                  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared12AuthResponsesE3Err("registration_failed");
                                                                                                }));
                                                                                                return { _0: cmd$2, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, "", true, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 9: {
                                                                                                const _AuthResult = msg;
                                                                                                const _x$3 = _AuthResult._0;
                                                                                                if (_x$3.$tag === 1) {
                                                                                                  const _Ok = _x$3;
                                                                                                  const _resp = _Ok._0;
                                                                                                  resp = _resp;
                                                                                                  break _L$40;
                                                                                                } else {
                                                                                                  const _Err = _x$3;
                                                                                                  const _e = _Err._0;
                                                                                                  e$4 = _e;
                                                                                                  break _L$39;
                                                                                                }
                                                                                              }
                                                                                              case 10: {
                                                                                                const _bind$3 = [];
                                                                                                const cmd$3 = _M0FP319moonbit_2dcommunity7rabbita4http4postGRP38bobzhang8taskflow6shared12AuthResponseE(_M0FP38bobzhang8taskflow6shared11api__logout, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$3, 0, 0)))), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdsE4Json((_result) => dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg9LoggedOut__), (_json) => new _M0DTPC16result6ResultGssE2Ok("")));
                                                                                                return { _0: cmd$3, _1: model };
                                                                                              }
                                                                                              case 11: {
                                                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(undefined, "login", model.auth_username, model.auth_password, model.auth_error, model.auth_loading, [], [], [], [], [], [], model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 12: {
                                                                                                const _SetFilterStatus = msg;
                                                                                                const _s = _SetFilterStatus._0;
                                                                                                s$2 = _s;
                                                                                                break _L$38;
                                                                                              }
                                                                                              case 13: {
                                                                                                const _SetFilterAssignee = msg;
                                                                                                const _id = _SetFilterAssignee._0;
                                                                                                id$7 = _id;
                                                                                                break _L$37;
                                                                                              }
                                                                                              case 14: {
                                                                                                const _SetFilterPriority = msg;
                                                                                                const _p = _SetFilterPriority._0;
                                                                                                p = _p;
                                                                                                break _L$36;
                                                                                              }
                                                                                              case 15: {
                                                                                                const _SearchChanged = msg;
                                                                                                const _q = _SearchChanged._0;
                                                                                                q = _q;
                                                                                                break _L$35;
                                                                                              }
                                                                                              case 16: {
                                                                                                const _SetFilterUrgency = msg;
                                                                                                const _u = _SetFilterUrgency._0;
                                                                                                u = _u;
                                                                                                break _L$34;
                                                                                              }
                                                                                              case 17: {
                                                                                                const _SetFilterLabel = msg;
                                                                                                const _id$2 = _SetFilterLabel._0;
                                                                                                id$6 = _id$2;
                                                                                                break _L$33;
                                                                                              }
                                                                                              case 18: {
                                                                                                const _SetViewMode = msg;
                                                                                                const _m = _SetViewMode._0;
                                                                                                m = _m;
                                                                                                break _L$32;
                                                                                              }
                                                                                              case 19: {
                                                                                                const _SetSortBy = msg;
                                                                                                const _s$2 = _SetSortBy._0;
                                                                                                s = _s$2;
                                                                                                break _L$31;
                                                                                              }
                                                                                              case 20: {
                                                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, !model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 21: {
                                                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, !model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 22: {
                                                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, true, "", "", "medium", 0, "", model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 23: {
                                                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, false, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 24: {
                                                                                                const _NewTitleChanged = msg;
                                                                                                const _v$3 = _NewTitleChanged._0;
                                                                                                v$9 = _v$3;
                                                                                                break _L$30;
                                                                                              }
                                                                                              case 25: {
                                                                                                const _NewDescChanged = msg;
                                                                                                const _v$4 = _NewDescChanged._0;
                                                                                                v$8 = _v$4;
                                                                                                break _L$29;
                                                                                              }
                                                                                              case 26: {
                                                                                                const _NewPriorityChanged = msg;
                                                                                                const _v$5 = _NewPriorityChanged._0;
                                                                                                v$7 = _v$5;
                                                                                                break _L$28;
                                                                                              }
                                                                                              case 27: {
                                                                                                const _NewAssigneeChanged = msg;
                                                                                                const _id$3 = _NewAssigneeChanged._0;
                                                                                                id$5 = _id$3;
                                                                                                break _L$27;
                                                                                              }
                                                                                              case 28: {
                                                                                                const _NewDueDateChanged = msg;
                                                                                                const _v$6 = _NewDueDateChanged._0;
                                                                                                v$6 = _v$6;
                                                                                                break _L$26;
                                                                                              }
                                                                                              case 29: {
                                                                                                if (!_M0FP38bobzhang8taskflow6shared21validate__task__title(model.new_title)) {
                                                                                                  return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: model };
                                                                                                }
                                                                                                const title = model.new_title;
                                                                                                const desc = model.new_desc;
                                                                                                const priority = model.new_priority;
                                                                                                const assignee = model.new_assignee;
                                                                                                const due = model.new_due_date;
                                                                                                const _bind$4 = [{ _0: "title", _1: _M0IPC16string6StringPB6ToJson8to__json(title) }, { _0: "description", _1: _M0IPC16string6StringPB6ToJson8to__json(desc) }, { _0: "priority", _1: _M0IPC16string6StringPB6ToJson8to__json(priority) }, { _0: "assignee_id", _1: _M0IPC16double6DoublePB6ToJson8to__json(assignee + 0) }, { _0: "due_date", _1: _M0IPC16string6StringPB6ToJson8to__json(due) }];
                                                                                                const cmd$4 = _M0FP319moonbit_2dcommunity7rabbita4http4postGRP38bobzhang8taskflow6shared12AuthResponseE(_M0FP38bobzhang8taskflow6shared10api__tasks, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 5)))), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared4TaskE4Json((result) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg9TaskAdded(result)), (json) => {
                                                                                                  let _try_err;
                                                                                                  _L$46: {
                                                                                                    const _bind$5 = _M0FPC14json10from__jsonGRP38bobzhang8taskflow6shared4TaskE(json, undefined);
                                                                                                    let _tmp;
                                                                                                    if (_bind$5.$tag === 1) {
                                                                                                      const _ok = _bind$5;
                                                                                                      _tmp = _ok._0;
                                                                                                    } else {
                                                                                                      const _err = _bind$5;
                                                                                                      _try_err = _err._0;
                                                                                                      break _L$46;
                                                                                                    }
                                                                                                    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TasksE2Ok(_tmp);
                                                                                                  }
                                                                                                  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared4TasksE3Err("Failed to decode task");
                                                                                                }));
                                                                                                return { _0: cmd$4, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, false, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 30: {
                                                                                                const _TaskAdded = msg;
                                                                                                const _x$4 = _TaskAdded._0;
                                                                                                if (_x$4.$tag === 1) {
                                                                                                  const _Ok = _x$4;
                                                                                                  const _task = _Ok._0;
                                                                                                  task$2 = _task;
                                                                                                  break _L$25;
                                                                                                } else {
                                                                                                  const _Err = _x$4;
                                                                                                  const _e = _Err._0;
                                                                                                  e$3 = _e;
                                                                                                  break _L$24;
                                                                                                }
                                                                                              }
                                                                                              case 31: {
                                                                                                const _StartEditTask = msg;
                                                                                                const _task = _StartEditTask._0;
                                                                                                task = _task;
                                                                                                break _L$23;
                                                                                              }
                                                                                              case 32: {
                                                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, 0, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 33: {
                                                                                                const _EditTitleChanged = msg;
                                                                                                const _v$7 = _EditTitleChanged._0;
                                                                                                v$5 = _v$7;
                                                                                                break _L$22;
                                                                                              }
                                                                                              case 34: {
                                                                                                const _EditDescChanged = msg;
                                                                                                const _v$8 = _EditDescChanged._0;
                                                                                                v$4 = _v$8;
                                                                                                break _L$21;
                                                                                              }
                                                                                              case 35: {
                                                                                                const _EditPriorityChanged = msg;
                                                                                                const _v$9 = _EditPriorityChanged._0;
                                                                                                v$3 = _v$9;
                                                                                                break _L$20;
                                                                                              }
                                                                                              case 36: {
                                                                                                const _EditAssigneeChanged = msg;
                                                                                                const _id$4 = _EditAssigneeChanged._0;
                                                                                                id$4 = _id$4;
                                                                                                break _L$19;
                                                                                              }
                                                                                              case 37: {
                                                                                                const _EditDueDateChanged = msg;
                                                                                                const _v$10 = _EditDueDateChanged._0;
                                                                                                v$2 = _v$10;
                                                                                                break _L$18;
                                                                                              }
                                                                                              case 38: {
                                                                                                const id$8 = model.editing_task;
                                                                                                if (id$8 === 0 || !_M0FP38bobzhang8taskflow6shared21validate__task__title(model.edit_title)) {
                                                                                                  return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: model };
                                                                                                }
                                                                                                const title$2 = model.edit_title;
                                                                                                const desc$2 = model.edit_desc;
                                                                                                const priority$2 = model.edit_priority;
                                                                                                const assignee$2 = model.edit_assignee;
                                                                                                const due$2 = model.edit_due_date;
                                                                                                const expect = new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text((_result) => dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg11TaskUpdated__));
                                                                                                const _tmp = _M0FP38bobzhang8taskflow6shared9api__task(id$8);
                                                                                                const _bind$5 = [{ _0: "title", _1: _M0IPC16string6StringPB6ToJson8to__json(title$2) }, { _0: "description", _1: _M0IPC16string6StringPB6ToJson8to__json(desc$2) }, { _0: "priority", _1: _M0IPC16string6StringPB6ToJson8to__json(priority$2) }, { _0: "assignee_id", _1: _M0IPC16double6DoublePB6ToJson8to__json(assignee$2 + 0) }, { _0: "due_date", _1: _M0IPC16string6StringPB6ToJson8to__json(due$2) }];
                                                                                                const cmd$5 = _M0FP319moonbit_2dcommunity7rabbita4http4postGuE(_tmp, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$5, 0, 5)))), expect);
                                                                                                const tasks = _M0MPC15array5Array3mapGRP38bobzhang8taskflow6shared4TaskRP38bobzhang8taskflow6shared4TaskE(model.tasks, (t) => t.id === id$8 ? new _M0TP38bobzhang8taskflow6shared4Task(t.id, title$2, desc$2, t.status, priority$2, assignee$2, due$2, t.created_at) : t);
                                                                                                return { _0: cmd$5, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, 0, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 39: {
                                                                                                return { _0: _M0FP38bobzhang8taskflow8frontend12fetch__board(dispatch), _1: model };
                                                                                              }
                                                                                              case 40: {
                                                                                                const _ChangeStatus = msg;
                                                                                                const _id$5 = _ChangeStatus._0;
                                                                                                const _new_status = _ChangeStatus._1;
                                                                                                id$3 = _id$5;
                                                                                                new_status$2 = _new_status;
                                                                                                break _L$17;
                                                                                              }
                                                                                              case 41: {
                                                                                                return { _0: _M0FP38bobzhang8taskflow8frontend12fetch__board(dispatch), _1: model };
                                                                                              }
                                                                                              case 42: {
                                                                                                const _RequestDelete = msg;
                                                                                                const _id$6 = _RequestDelete._0;
                                                                                                id$2 = _id$6;
                                                                                                break _L$16;
                                                                                              }
                                                                                              case 43: {
                                                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, 0, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 44: {
                                                                                                const id$9 = model.confirm_delete;
                                                                                                if (id$9 === 0) {
                                                                                                  return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: model };
                                                                                                }
                                                                                                const expect$2 = new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text((_result) => dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg11TaskDeleted__));
                                                                                                const cmd$6 = _M0FP319moonbit_2dcommunity7rabbita4http6deleteGuE(_M0FP38bobzhang8taskflow6shared9api__task(id$9), expect$2);
                                                                                                const tasks$2 = _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared4TaskE(model.tasks, (t) => t.id !== id$9);
                                                                                                return { _0: cmd$6, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, tasks$2, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, 0, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 45: {
                                                                                                return { _0: _M0FP38bobzhang8taskflow8frontend12fetch__board(dispatch), _1: model };
                                                                                              }
                                                                                              case 46: {
                                                                                                const _AddDep = msg;
                                                                                                const _task_id = _AddDep._0;
                                                                                                const _depends_on_id = _AddDep._1;
                                                                                                task_id$5 = _task_id;
                                                                                                depends_on_id$2 = _depends_on_id;
                                                                                                break _L$15;
                                                                                              }
                                                                                              case 47: {
                                                                                                const _RemoveDep = msg;
                                                                                                const _task_id$2 = _RemoveDep._0;
                                                                                                const _depends_on_id$2 = _RemoveDep._1;
                                                                                                task_id$4 = _task_id$2;
                                                                                                depends_on_id = _depends_on_id$2;
                                                                                                break _L$14;
                                                                                              }
                                                                                              case 48: {
                                                                                                return { _0: _M0FP38bobzhang8taskflow8frontend12fetch__board(dispatch), _1: model };
                                                                                              }
                                                                                              case 58: {
                                                                                                const csv = _M0FP38bobzhang8taskflow6shared14tasks__to__csv(model.tasks, model.members);
                                                                                                _M0FP38bobzhang8taskflow8frontend14download__file(csv, "tasks.csv", "text/csv");
                                                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: model };
                                                                                              }
                                                                                              case 59: {
                                                                                                const _AddTaskLabel = msg;
                                                                                                const _task_id$3 = _AddTaskLabel._0;
                                                                                                const _label_id = _AddTaskLabel._1;
                                                                                                task_id$3 = _task_id$3;
                                                                                                label_id$2 = _label_id;
                                                                                                break _L$13;
                                                                                              }
                                                                                              case 60: {
                                                                                                const _RemoveTaskLabel = msg;
                                                                                                const _task_id$4 = _RemoveTaskLabel._0;
                                                                                                const _label_id$2 = _RemoveTaskLabel._1;
                                                                                                task_id$2 = _task_id$4;
                                                                                                label_id = _label_id$2;
                                                                                                break _L$12;
                                                                                              }
                                                                                              case 61: {
                                                                                                return { _0: _M0FP38bobzhang8taskflow8frontend12fetch__board(dispatch), _1: model };
                                                                                              }
                                                                                              case 49: {
                                                                                                const _ShowComments = msg;
                                                                                                const _task_id$5 = _ShowComments._0;
                                                                                                task_id = _task_id$5;
                                                                                                break _L$11;
                                                                                              }
                                                                                              case 50: {
                                                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, 0, [], model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 51: {
                                                                                                const _GotComments = msg;
                                                                                                const _x$5 = _GotComments._0;
                                                                                                if (_x$5.$tag === 1) {
                                                                                                  const _Ok = _x$5;
                                                                                                  const _comments = _Ok._0;
                                                                                                  comments = _comments;
                                                                                                  break _L$10;
                                                                                                } else {
                                                                                                  const _Err = _x$5;
                                                                                                  const _e = _Err._0;
                                                                                                  e$2 = _e;
                                                                                                  break _L$9;
                                                                                                }
                                                                                              }
                                                                                              case 52: {
                                                                                                const _NewCommentChanged = msg;
                                                                                                const _v$11 = _NewCommentChanged._0;
                                                                                                v = _v$11;
                                                                                                break _L$8;
                                                                                              }
                                                                                              case 53: {
                                                                                                const task_id$6 = model.viewing_comments;
                                                                                                if (task_id$6 === 0 || !_M0FP38bobzhang8taskflow6shared23validate__comment__text(model.new_comment)) {
                                                                                                  return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: model };
                                                                                                }
                                                                                                const text = model.new_comment;
                                                                                                const url = _M0FP38bobzhang8taskflow6shared19api__task__comments(task_id$6);
                                                                                                const _bind$6 = [{ _0: "text", _1: _M0IPC16string6StringPB6ToJson8to__json(text) }];
                                                                                                const cmd$7 = _M0FP319moonbit_2dcommunity7rabbita4http4postGRP38bobzhang8taskflow6shared12AuthResponseE(url, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$6, 0, 1)))), new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRP38bobzhang8taskflow6shared7CommentE4Json((result) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg12CommentAdded(result)), (json) => {
                                                                                                  let _try_err;
                                                                                                  _L$46: {
                                                                                                    const _bind$7 = _M0FPC14json10from__jsonGRP38bobzhang8taskflow6shared7CommentE(json, undefined);
                                                                                                    let _tmp$2;
                                                                                                    if (_bind$7.$tag === 1) {
                                                                                                      const _ok = _bind$7;
                                                                                                      _tmp$2 = _ok._0;
                                                                                                    } else {
                                                                                                      const _err = _bind$7;
                                                                                                      _try_err = _err._0;
                                                                                                      break _L$46;
                                                                                                    }
                                                                                                    return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentsE2Ok(_tmp$2);
                                                                                                  }
                                                                                                  return new _M0DTPC16result6ResultGRP38bobzhang8taskflow6shared7CommentsE3Err("Failed to decode comment");
                                                                                                }));
                                                                                                return { _0: cmd$7, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, "", model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 54: {
                                                                                                const _CommentAdded = msg;
                                                                                                const _x$6 = _CommentAdded._0;
                                                                                                if (_x$6.$tag === 1) {
                                                                                                  const _Ok = _x$6;
                                                                                                  const _comment = _Ok._0;
                                                                                                  comment = _comment;
                                                                                                  break _L$7;
                                                                                                } else {
                                                                                                  const _Err = _x$6;
                                                                                                  const _e = _Err._0;
                                                                                                  e = _e;
                                                                                                  break _L$6;
                                                                                                }
                                                                                              }
                                                                                              case 55: {
                                                                                                const _KeyPressed = msg;
                                                                                                const _key = _KeyPressed._0;
                                                                                                key = _key;
                                                                                                break _L$5;
                                                                                              }
                                                                                              case 56: {
                                                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, "", model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                              }
                                                                                              case 57: {
                                                                                                const _SetLang = msg;
                                                                                                const _l = _SetLang._0;
                                                                                                l = _l;
                                                                                                break _L$4;
                                                                                              }
                                                                                              case 62: {
                                                                                                const _DragStartTask = msg;
                                                                                                const _id$7 = _DragStartTask._0;
                                                                                                id = _id$7;
                                                                                                break _L$3;
                                                                                              }
                                                                                              case 63: {
                                                                                                const _DragOverColumn = msg;
                                                                                                const _status = _DragOverColumn._0;
                                                                                                status = _status;
                                                                                                break _L$2;
                                                                                              }
                                                                                              case 64: {
                                                                                                const _DropOnColumn = msg;
                                                                                                const _new_status$2 = _DropOnColumn._0;
                                                                                                new_status = _new_status$2;
                                                                                                break _L;
                                                                                              }
                                                                                              default: {
                                                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, 0, "") };
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                          return { _0: _M0FP38bobzhang8taskflow8frontend12fetch__board(dispatch), _1: new _M0TP38bobzhang8taskflow8frontend5Model(user, "", model.auth_username, model.auth_password, model.auth_error, false, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                        }
                                                                                        return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, board.tasks, board.members, board.activities, board.dependencies, board.labels, board.task_labels, board.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, false, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                      }
                                                                                      return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, e$5, false, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                    }
                                                                                    return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, v$11, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                  }
                                                                                  return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, v$10, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                                }
                                                                                return { _0: _M0FP38bobzhang8taskflow8frontend12fetch__board(dispatch), _1: new _M0TP38bobzhang8taskflow8frontend5Model(resp.user, "", "", "", "", false, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                              }
                                                                              const msg$2 = _M0FP38bobzhang8taskflow6shared16t__server__error(model.lang, e$4);
                                                                              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, msg$2, false, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                            }
                                                                            return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, s$2, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                          }
                                                                          return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, id$7, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                        }
                                                                        return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, p, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                      }
                                                                      return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, q, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                    }
                                                                    return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, u, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                  }
                                                                  return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, id$6, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                                }
                                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, m, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                              }
                                                              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, s, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                            }
                                                            return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, v$9, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                          }
                                                          return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, v$8, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                        }
                                                        return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, v$7, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                      }
                                                      return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, id$5, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                    }
                                                    return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, v$6, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                  }
                                                  const tasks = _M0MPC15array5Array4copyGRP38bobzhang8taskflow6shared9TaskLabelE(model.tasks);
                                                  _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(tasks, task$2);
                                                  return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                                }
                                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, e$3, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                              }
                                              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, task.id, task.title, task.description, task.priority, task.assignee_id, task.due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                            }
                                            return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, v$5, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                          }
                                          return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, v$4, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                        }
                                        return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, v$3, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                      }
                                      return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, id$4, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                    }
                                    return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, v$2, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                  }
                                  const current_status = new _M0TPC13ref3RefGsE("");
                                  const _bind = model.tasks;
                                  const _bind$2 = _bind.length;
                                  let _tmp = 0;
                                  while (true) {
                                    const _ = _tmp;
                                    if (_ < _bind$2) {
                                      const t = _bind[_];
                                      if (t.id === id$3) {
                                        current_status.val = t.status;
                                        break;
                                      }
                                      _tmp = _ + 1 | 0;
                                      continue;
                                    } else {
                                      break;
                                    }
                                  }
                                  if (!_M0FP38bobzhang8taskflow6shared21is__valid__transition(current_status.val, new_status$2)) {
                                    return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: model };
                                  }
                                  const expect = new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text((_result) => dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg13StatusChanged__));
                                  const _tmp$2 = _M0FP38bobzhang8taskflow6shared17api__task__status(id$3);
                                  const _bind$3 = [{ _0: "status", _1: _M0IPC16string6StringPB6ToJson8to__json(new_status$2) }];
                                  const cmd = _M0FP319moonbit_2dcommunity7rabbita4http4postGuE(_tmp$2, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$3, 0, 1)))), expect);
                                  const tasks = _M0MPC15array5Array3mapGRP38bobzhang8taskflow6shared4TaskRP38bobzhang8taskflow6shared4TaskE(model.tasks, (t) => t.id === id$3 ? new _M0TP38bobzhang8taskflow6shared4Task(t.id, t.title, t.description, new_status$2, t.priority, t.assignee_id, t.due_date, t.created_at) : t);
                                  return { _0: cmd, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                                }
                                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, id$2, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                              }
                              const url = _M0FP38bobzhang8taskflow6shared15api__task__deps(task_id$5);
                              const expect = new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text((_result) => dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg10DepChanged__));
                              const _bind = [{ _0: "depends_on_id", _1: _M0IPC16double6DoublePB6ToJson8to__json(depends_on_id$2 + 0) }];
                              const cmd = _M0FP319moonbit_2dcommunity7rabbita4http4postGuE(url, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 1)))), expect);
                              const deps = _M0MPC15array5Array4copyGRP38bobzhang8taskflow6shared9TaskLabelE(model.dependencies);
                              _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(deps, new _M0TP38bobzhang8taskflow6shared10Dependency(task_id$5, depends_on_id$2));
                              return { _0: cmd, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, deps, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                            }
                            const url = _M0FP38bobzhang8taskflow6shared23api__task__deps__remove(task_id$4);
                            const expect = new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text((_result) => dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg10DepChanged__));
                            const _bind = [{ _0: "depends_on_id", _1: _M0IPC16double6DoublePB6ToJson8to__json(depends_on_id + 0) }];
                            const cmd = _M0FP319moonbit_2dcommunity7rabbita4http4postGuE(url, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 1)))), expect);
                            const deps = _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared10DependencyE(model.dependencies, (d) => !(d.task_id === task_id$4 && d.depends_on_id === depends_on_id));
                            return { _0: cmd, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, deps, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                          }
                          const url = _M0FP38bobzhang8taskflow6shared17api__task__labels(task_id$3);
                          const expect = new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text((_result) => dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg12LabelChanged__));
                          const _bind = [{ _0: "label_id", _1: _M0IPC16double6DoublePB6ToJson8to__json(label_id$2 + 0) }];
                          const cmd = _M0FP319moonbit_2dcommunity7rabbita4http4postGuE(url, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 1)))), expect);
                          const tls = _M0MPC15array5Array4copyGRP38bobzhang8taskflow6shared9TaskLabelE(model.task_labels);
                          _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(tls, new _M0TP38bobzhang8taskflow6shared9TaskLabel(task_id$3, label_id$2));
                          return { _0: cmd, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, tls, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                        }
                        const url = _M0FP38bobzhang8taskflow6shared25api__task__labels__remove(task_id$2);
                        const expect = new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text((_result) => dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg12LabelChanged__));
                        const _bind = [{ _0: "label_id", _1: _M0IPC16double6DoublePB6ToJson8to__json(label_id + 0) }];
                        const cmd = _M0FP319moonbit_2dcommunity7rabbita4http4postGuE(url, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 1)))), expect);
                        const tls = _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared9TaskLabelE(model.task_labels, (tl) => !(tl.task_id === task_id$2 && tl.label_id === label_id));
                        return { _0: cmd, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, tls, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                      }
                      const url = _M0FP38bobzhang8taskflow6shared19api__task__comments(task_id);
                      const cmd = _M0FP319moonbit_2dcommunity7rabbita4http3getGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(url, new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmdRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE4Json((result) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg11GotComments(result)), (json) => {
                        let _try_err;
                        _L$12: {
                          const _bind = _M0FPC14json10from__jsonGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEE(json, undefined);
                          let _tmp;
                          if (_bind.$tag === 1) {
                            const _ok = _bind;
                            _tmp = _ok._0;
                          } else {
                            const _err = _bind;
                            _try_err = _err._0;
                            break _L$12;
                          }
                          return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEsE2Ok(_tmp);
                        }
                        return new _M0DTPC16result6ResultGRPB5ArrayGRP38bobzhang8taskflow6shared7CommentEsE3Err("Failed to decode comments");
                      }));
                      return { _0: cmd, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, task_id, [], "", model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                    }
                    return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                  }
                  return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, e$2, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
                }
                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, v, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
              }
              const _self = [];
              _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(_self, comment);
              _M0MPC15array5Array10push__iterGRP38bobzhang8taskflow6shared7CommentE(_self, _M0MPC15array5Array4iterGRP38bobzhang8taskflow6shared7CommentE(model.comments));
              const comments = _self;
              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
            }
            return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, e, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
          }
          if (model.adding_task || (model.editing_task !== 0 || model.viewing_comments !== 0)) {
            if (key === "Escape") {
              if (model.adding_task) {
                return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, false, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
              }
              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, 0, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
            }
            return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: model };
          }
          if (key === "Escape") {
            if (model.viewing_comments !== 0) {
              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, 0, [], model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
            }
            if (model.confirm_delete !== 0) {
              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, 0, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
            }
            if (_M0IP016_24default__implPB2Eq10not__equalGsE(model.error_msg, "")) {
              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, "", model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
            }
            return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: model };
          }
          switch (key) {
            case "n": {
              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, true, "", "", "medium", 0, "", model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
            }
            case "l": {
              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, "list", model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
            }
            case "b": {
              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, "kanban", model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
            }
            case "d": {
              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, !model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, model.drag_over_status) };
            }
            case "/": {
              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: model };
            }
            default: {
              return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: model };
            }
          }
        }
        return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, "", model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, l, model.dragging_task_id, model.drag_over_status) };
      }
      return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, id, model.drag_over_status) };
    }
    return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, model.dragging_task_id, status) };
  }
  const id = model.dragging_task_id;
  if (id === 0) {
    return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, 0, "") };
  }
  const model$2 = new _M0TP38bobzhang8taskflow8frontend5Model(model.current_user, model.auth_screen, model.auth_username, model.auth_password, model.auth_error, model.auth_loading, model.tasks, model.members, model.activities, model.dependencies, model.labels, model.task_labels, model.today, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.filter_label, model.view_mode, model.sort_by, model.sort_asc, model.dark_mode, model.adding_task, model.new_title, model.new_desc, model.new_priority, model.new_assignee, model.new_due_date, model.editing_task, model.edit_title, model.edit_desc, model.edit_priority, model.edit_assignee, model.edit_due_date, model.viewing_comments, model.comments, model.new_comment, model.confirm_delete, model.error_msg, model.loading, model.lang, 0, "");
  const current_status = new _M0TPC13ref3RefGsE("");
  const _bind = model$2.tasks;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const t = _bind[_];
      if (t.id === id) {
        current_status.val = t.status;
        break;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (current_status.val === new_status || !_M0FP38bobzhang8taskflow6shared21is__valid__transition(current_status.val, new_status)) {
    return { _0: _M0FP319moonbit_2dcommunity7rabbita3cmd4none, _1: model$2 };
  }
  const expect = new _M0DTP319moonbit_2dcommunity7rabbita4http9ExpectingGRP419moonbit_2dcommunity7rabbita8internal7runtime3CmduE4Text((_result) => dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg13StatusChanged__));
  const _tmp$2 = _M0FP38bobzhang8taskflow6shared17api__task__status(id);
  const _bind$3 = [{ _0: "status", _1: _M0IPC16string6StringPB6ToJson8to__json(new_status) }];
  const cmd = _M0FP319moonbit_2dcommunity7rabbita4http4postGuE(_tmp$2, new _M0DTP319moonbit_2dcommunity7rabbita4http4Body4Json(_M0MPC14json4Json6object(_M0MPB3Map11from__arrayGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$3, 0, 1)))), expect);
  const tasks = _M0MPC15array5Array3mapGRP38bobzhang8taskflow6shared4TaskRP38bobzhang8taskflow6shared4TaskE(model$2.tasks, (t) => t.id === id ? new _M0TP38bobzhang8taskflow6shared4Task(t.id, t.title, t.description, new_status, t.priority, t.assignee_id, t.due_date, t.created_at) : t);
  return { _0: cmd, _1: new _M0TP38bobzhang8taskflow8frontend5Model(model$2.current_user, model$2.auth_screen, model$2.auth_username, model$2.auth_password, model$2.auth_error, model$2.auth_loading, tasks, model$2.members, model$2.activities, model$2.dependencies, model$2.labels, model$2.task_labels, model$2.today, model$2.filter_status, model$2.filter_assignee, model$2.filter_priority, model$2.search_query, model$2.filter_urgency, model$2.filter_label, model$2.view_mode, model$2.sort_by, model$2.sort_asc, model$2.dark_mode, model$2.adding_task, model$2.new_title, model$2.new_desc, model$2.new_priority, model$2.new_assignee, model$2.new_due_date, model$2.editing_task, model$2.edit_title, model$2.edit_desc, model$2.edit_priority, model$2.edit_assignee, model$2.edit_due_date, model$2.viewing_comments, model$2.comments, model$2.new_comment, model$2.confirm_delete, model$2.error_msg, model$2.loading, model$2.lang, model$2.dragging_task_id, model$2.drag_over_status) };
}
function _M0FP38bobzhang8taskflow8frontend10view__auth(dispatch, model, theme) {
  const lang = model.lang;
  const is_login = model.auth_screen === "login";
  const title = is_login ? _M0FP38bobzhang8taskflow6shared1t(lang, "sign_in") : _M0FP38bobzhang8taskflow6shared1t(lang, "create_account");
  const submit_label = is_login ? _M0FP38bobzhang8taskflow6shared1t(lang, "sign_in") : _M0FP38bobzhang8taskflow6shared1t(lang, "register");
  const switch_label = is_login ? _M0FP38bobzhang8taskflow6shared1t(lang, "need_account") : _M0FP38bobzhang8taskflow6shared1t(lang, "have_account");
  const on_submit = is_login ? dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg11SubmitLogin__) : dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg14SubmitRegister__);
  const on_switch = is_login ? dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg12ShowRegister__) : dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg9ShowLogin__);
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["min-height: 100vh", "display: flex", "align-items: center", "justify-content: center", "background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([`background: ${_M0IPC16string6StringPB4Show10to__string(theme.card_bg)}`, "border-radius: 16px", "padding: 40px", "width: 380px", "box-shadow: 0 20px 60px rgba(0,0,0,0.3)"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html10h1_2einnerGsE([`color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`, "font-size: 24px", "font-weight: 700", "text-align: center", "margin-bottom: 8px"], undefined, undefined, undefined, -1, undefined, undefined, _M0FP38bobzhang8taskflow6shared1t(lang, "app_title")), _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([`color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`, "font-size: 14px", "text-align: center", "margin-bottom: 24px"], undefined, undefined, undefined, -1, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(title)]), _M0IP016_24default__implPB2Eq10not__equalGsE(model.auth_error, "") ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["background: #fef2f2", "color: #dc2626", "padding: 10px 14px", "border-radius: 8px", "font-size: 13px", "margin-bottom: 16px", "border: 1px solid #fecaca"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(model.auth_error)]) : _M0FP319moonbit_2dcommunity7rabbita4html4text(""), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["margin-bottom: 14px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: block", "font-size: 13px", "font-weight: 500", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`, "margin-bottom: 4px"], undefined, undefined, undefined, -1, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(lang, "username"))]), _M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, model.auth_username, -1, -1, -1, undefined, _M0FP38bobzhang8taskflow6shared1t(lang, "enter_username"), undefined, ["width: 100%", "padding: 10px 12px", "border-radius: 8px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(theme.input_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`, "font-size: 14px", "box-sizing: border-box", "outline: none"], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (v) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg19AuthUsernameChanged(v)), undefined, "")]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["margin-bottom: 20px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: block", "font-size: 13px", "font-weight: 500", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`, "margin-bottom: 4px"], undefined, undefined, undefined, -1, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(lang, "password"))]), _M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(11, undefined, model.auth_password, -1, -1, -1, undefined, _M0FP38bobzhang8taskflow6shared1t(lang, "enter_password"), undefined, ["width: 100%", "padding: 10px 12px", "border-radius: 8px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(theme.input_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`, "font-size: 14px", "box-sizing: border-box", "outline: none"], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (v) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg19AuthPasswordChanged(v)), undefined, "")]), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["width: 100%", "padding: 12px", "border: none", "border-radius: 8px", "cursor: pointer", "font-size: 14px", "font-weight: 600", "color: white", "background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)", "margin-bottom: 12px", model.auth_loading ? "opacity: 0.7" : "opacity: 1"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, on_submit, undefined, model.auth_loading ? "..." : submit_label), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["text-align: center"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["background: none", "border: none", "color: #6366f1", "cursor: pointer", "font-size: 13px", "padding: 0"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, on_switch, undefined, switch_label)]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["text-align: center", "margin-top: 16px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["background: none", "border: 1px solid #6366f1", "color: #6366f1", "cursor: pointer", "font-size: 12px", "padding: 4px 12px", "border-radius: 12px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg7SetLang(_M0IP38bobzhang8taskflow6shared4LangPB2Eq5equal(lang, 0) ? 1 : 0)), undefined, _M0IP38bobzhang8taskflow6shared4LangPB2Eq5equal(lang, 0) ? "中文" : "EN")])])]);
}
function _M0FP38bobzhang8taskflow8frontend12view__header(dispatch, model) {
  const pct = _M0FP38bobzhang8taskflow6shared19completion__percent(model.tasks);
  const total = model.tasks.length;
  const done = _M0FP38bobzhang8taskflow6shared17count__by__status(model.tasks, "done");
  const _tmp = ["background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)", "padding: 20px 32px", "margin-bottom: 16px", "border-radius: 12px", "display: flex", "justify-content: space-between", "align-items: center"];
  const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html10h1_2einnerGsE(["color: white", "font-size: 22px", "font-weight: 700", "letter-spacing: -0.3px", "margin-bottom: 4px"], undefined, undefined, undefined, -1, undefined, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "app_title")), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["color: rgba(255,255,255,0.8)", "font-size: 13px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared11t__complete(model.lang, pct)), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["margin-left: 12px", "color: rgba(255,255,255,0.6)"], undefined, undefined, undefined, -1, undefined, _M0FP38bobzhang8taskflow6shared14t__tasks__done(model.lang, done, total))])]);
  const _tmp$3 = ["display: flex", "align-items: center", "gap: 12px"];
  const _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["width: 120px", "height: 6px", "background: rgba(255,255,255,0.2)", "border-radius: 3px", "overflow: hidden"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([`width: ${_M0IP016_24default__implPB4Show10to__stringGiE(pct)}%`, "height: 100%", "background: #a5f3fc", "border-radius: 3px", "transition: width 0.3s"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text("")])]);
  const _tmp$5 = ["display: flex", "gap: 2px"];
  const is_list = model.view_mode === "list";
  const bg = is_list ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)";
  const _tmp$6 = _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 10px", "border: none", "cursor: pointer", "font-size: 12px", "color: white", "border-radius: 4px 0 0 4px", `background: ${_M0IPC16string6StringPB4Show10to__string(bg)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg11SetViewMode("list")), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "list"));
  const is_board = model.view_mode === "kanban";
  const bg$2 = is_board ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)";
  const _tmp$7 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$5, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$6, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 10px", "border: none", "cursor: pointer", "font-size: 12px", "color: white", "border-radius: 0 4px 4px 0", `background: ${_M0IPC16string6StringPB4Show10to__string(bg$2)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg11SetViewMode("kanban")), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "board"))]);
  let _tmp$8;
  let user;
  _L: {
    _L$2: {
      const _bind = model.current_user;
      if (_bind === undefined) {
        _tmp$8 = _M0FP319moonbit_2dcommunity7rabbita4html4text("");
      } else {
        const _Some = _bind;
        const _user = _Some;
        user = _user;
        break _L$2;
      }
      break _L;
    }
    const my_member_id = _M0FP38bobzhang8taskflow8frontend26find__member__id__by__name(model.members, user.username);
    const is_active = model.filter_assignee === my_member_id && my_member_id !== 0;
    const bg$3 = is_active ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.1)";
    const target = is_active ? 0 : my_member_id;
    _tmp$8 = _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 10px", "border: none", "cursor: pointer", "font-size: 12px", "color: white", "border-radius: 4px", `background: ${_M0IPC16string6StringPB4Show10to__string(bg$3)}`, "font-weight: 500"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg17SetFilterAssignee(target)), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "my_tasks"));
  }
  const _tmp$9 = _tmp$8;
  const icon = model.dark_mode ? _M0FP38bobzhang8taskflow6shared1t(model.lang, "light") : _M0FP38bobzhang8taskflow6shared1t(model.lang, "dark");
  const _tmp$10 = _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 10px", "border: none", "cursor: pointer", "font-size: 12px", "color: white", "border-radius: 4px", "background: rgba(255,255,255,0.15)"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg14ToggleDarkMode__), undefined, icon);
  let _tmp$11;
  let label;
  let target_lang;
  _L$2: {
    const _bind = model.lang;
    if (_bind === 0) {
      label = "中文";
      target_lang = 1;
      break _L$2;
    } else {
      label = "EN";
      target_lang = 0;
      break _L$2;
    }
  }
  _tmp$11 = _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 10px", "border: none", "cursor: pointer", "font-size: 12px", "color: white", "border-radius: 4px", "background: rgba(255,255,255,0.15)"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg7SetLang(target_lang)), undefined, label);
  const _tmp$12 = _tmp$11;
  const _tmp$13 = _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 10px", "border: none", "cursor: pointer", "font-size: 12px", "color: white", "border-radius: 4px", "background: rgba(255,255,255,0.15)"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg11ExportTasks__), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "export"));
  const _tmp$14 = model.adding_task ? _M0FP319moonbit_2dcommunity7rabbita4html4text("") : _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 8px 16px", "background: rgba(255,255,255,0.2)", "color: white", "border: 1px solid rgba(255,255,255,0.3)", "border-radius: 6px", "cursor: pointer", "font-size: 13px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg11ShowAddTask__), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "new_task"));
  let _tmp$15;
  let user$2;
  _L$3: {
    _L$4: {
      const _bind = model.current_user;
      if (_bind === undefined) {
        _tmp$15 = _M0FP319moonbit_2dcommunity7rabbita4html4text("");
      } else {
        const _Some = _bind;
        const _user = _Some;
        user$2 = _user;
        break _L$4;
      }
      break _L$3;
    }
    const color = _M0FP38bobzhang8taskflow6shared13member__color(user$2.color);
    const initial = _M0FP38bobzhang8taskflow6shared15member__initial(user$2.username);
    _tmp$15 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 8px", "margin-left: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["width: 28px", "height: 28px", "border-radius: 50%", "display: flex", "align-items: center", "justify-content: center", "font-size: 12px", "font-weight: 600", "color: white", `background: ${_M0IPC16string6StringPB4Show10to__string(color)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(initial)]), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["color: rgba(255,255,255,0.9)", "font-size: 13px", "font-weight: 500"], undefined, undefined, undefined, -1, undefined, user$2.username), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 4px 10px", "border: none", "cursor: pointer", "font-size: 11px", "color: rgba(255,255,255,0.8)", "border-radius: 4px", "background: rgba(255,255,255,0.1)"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg6Logout__), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "logout"))]);
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$3, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$4, _tmp$7, _tmp$9, _tmp$10, _tmp$12, _tmp$13, _tmp$14, _tmp$15])]);
}
function _M0FP38bobzhang8taskflow8frontend13view__filters(dispatch, model) {
  const theme = _M0FP38bobzhang8taskflow8frontend10get__theme(model.dark_mode);
  const _tmp = ["display: flex", "gap: 16px", "margin-bottom: 16px", "flex-wrap: wrap", "align-items: center", "padding: 12px 16px", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.filter_bg)}`, "border-radius: 10px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`];
  const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 6px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`], undefined, undefined, undefined, -1, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "search")), _M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, model.search_query, -1, -1, -1, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "search_placeholder"), undefined, ["padding: 4px 10px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, "border-radius: 6px", "font-size: 12px", "outline: none", "width: 150px", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.input_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (v) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg13SearchChanged(v)), undefined, "")]);
  const _tmp$3 = ["display: flex", "gap: 4px", "align-items: center"];
  const _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-right: 4px"], undefined, undefined, undefined, -1, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "status"));
  const is_sel = model.filter_status === "";
  const bg = is_sel ? "#4f46e5" : theme.filter_inactive;
  const fg = is_sel ? "white" : theme.text_secondary;
  const items = [_tmp$4, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 3px 10px", "border-radius: 12px", "border: none", "cursor: pointer", "font-size: 11px", `background: ${_M0IPC16string6StringPB4Show10to__string(bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(fg)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg15SetFilterStatus("")), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "all"))];
  const _bind = _M0FP38bobzhang8taskflow6shared15valid__statuses.length;
  let _tmp$5 = 0;
  while (true) {
    const _ = _tmp$5;
    if (_ < _bind) {
      const s = _M0FP38bobzhang8taskflow6shared15valid__statuses[_];
      const is_sel$2 = model.filter_status === s;
      const bg$2 = is_sel$2 ? _M0FP38bobzhang8taskflow6shared13status__color(s) : theme.filter_inactive;
      const fg$2 = is_sel$2 ? "white" : theme.text_secondary;
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 3px 10px", "border-radius: 12px", "border: none", "cursor: pointer", "font-size: 11px", `background: ${_M0IPC16string6StringPB4Show10to__string(bg$2)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(fg$2)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg15SetFilterStatus(s)), undefined, _M0FP38bobzhang8taskflow6shared9t__status(model.lang, s)));
      _tmp$5 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$6 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$3, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, items);
  const _tmp$7 = ["display: flex", "gap: 4px", "align-items: center"];
  const _tmp$8 = _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-right: 4px"], undefined, undefined, undefined, -1, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "priority_filter"));
  const is_sel$2 = model.filter_priority === "";
  const bg$2 = is_sel$2 ? "#4f46e5" : theme.filter_inactive;
  const fg$2 = is_sel$2 ? "white" : theme.text_secondary;
  const items$2 = [_tmp$8, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 3px 10px", "border-radius: 12px", "border: none", "cursor: pointer", "font-size: 11px", `background: ${_M0IPC16string6StringPB4Show10to__string(bg$2)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(fg$2)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg17SetFilterPriority("")), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "all"))];
  const _bind$2 = _M0FP38bobzhang8taskflow6shared17valid__priorities.length;
  let _tmp$9 = 0;
  while (true) {
    const _ = _tmp$9;
    if (_ < _bind$2) {
      const p = _M0FP38bobzhang8taskflow6shared17valid__priorities[_];
      const is_sel$3 = model.filter_priority === p;
      const bg$3 = is_sel$3 ? _M0FP38bobzhang8taskflow6shared15priority__color(p) : theme.filter_inactive;
      const fg$3 = is_sel$3 ? "white" : theme.text_secondary;
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items$2, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 3px 10px", "border-radius: 12px", "border: none", "cursor: pointer", "font-size: 11px", `background: ${_M0IPC16string6StringPB4Show10to__string(bg$3)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(fg$3)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg17SetFilterPriority(p)), undefined, _M0FP38bobzhang8taskflow6shared11t__priority(model.lang, p)));
      _tmp$9 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$10 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$7, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, items$2);
  const _tmp$11 = ["display: flex", "gap: 4px", "align-items: center"];
  const _tmp$12 = _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-right: 4px"], undefined, undefined, undefined, -1, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "assignee_filter"));
  const is_sel$3 = model.filter_assignee === 0;
  const border = is_sel$3 ? "2px solid #4f46e5" : "2px solid transparent";
  const items$3 = [_tmp$12, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["width: 26px", "height: 26px", "border-radius: 50%", "background: #e2e8f0", "cursor: pointer", "display: flex", "align-items: center", "justify-content: center", "font-size: 10px", "color: #94a3b8", `border: ${_M0IPC16string6StringPB4Show10to__string(border)}`], undefined, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg17SetFilterAssignee(0)), undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "all"))])];
  const _bind$3 = model.members;
  const _bind$4 = _bind$3.length;
  let _tmp$13 = 0;
  while (true) {
    const _ = _tmp$13;
    if (_ < _bind$4) {
      const m = _bind$3[_];
      const is_sel$4 = model.filter_assignee === m.id;
      const bg$3 = _M0FP38bobzhang8taskflow6shared13member__color(m.color);
      const border$2 = is_sel$4 ? "2px solid #4f46e5" : "2px solid transparent";
      const initial = _M0FP38bobzhang8taskflow6shared15member__initial(m.name);
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items$3, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["width: 26px", "height: 26px", "border-radius: 50%", "cursor: pointer", "display: flex", "align-items: center", "justify-content: center", "font-size: 11px", "color: white", "font-weight: 600", `background: ${_M0IPC16string6StringPB4Show10to__string(bg$3)}`, `border: ${_M0IPC16string6StringPB4Show10to__string(border$2)}`], undefined, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg17SetFilterAssignee(m.id)), undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(initial)]));
      _tmp$13 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$14 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$11, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, items$3);
  const _tmp$15 = ["display: flex", "gap: 4px", "align-items: center"];
  const urgency_options = [{ _0: "", _1: _M0FP38bobzhang8taskflow6shared1t(model.lang, "all") }, { _0: "overdue", _1: _M0FP38bobzhang8taskflow6shared1t(model.lang, "overdue") }, { _0: "due_today", _1: _M0FP38bobzhang8taskflow6shared1t(model.lang, "today") }, { _0: "has_deadline", _1: _M0FP38bobzhang8taskflow6shared1t(model.lang, "has_due") }, { _0: "no_deadline", _1: _M0FP38bobzhang8taskflow6shared1t(model.lang, "no_due") }];
  const items$4 = [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-right: 4px"], undefined, undefined, undefined, -1, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "due_filter"))];
  const _bind$5 = urgency_options.length;
  let _tmp$16 = 0;
  while (true) {
    const _ = _tmp$16;
    if (_ < _bind$5) {
      const opt = urgency_options[_];
      const is_sel$4 = model.filter_urgency === opt._0;
      const bg$3 = is_sel$4 ? "#4f46e5" : theme.filter_inactive;
      const fg$3 = is_sel$4 ? "white" : theme.text_secondary;
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items$4, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 3px 10px", "border-radius: 12px", "border: none", "cursor: pointer", "font-size: 11px", `background: ${_M0IPC16string6StringPB4Show10to__string(bg$3)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(fg$3)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg16SetFilterUrgency(opt._0)), undefined, opt._1));
      _tmp$16 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$17 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$15, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, items$4);
  let _tmp$18;
  if (model.labels.length > 0) {
    const _tmp$19 = ["display: flex", "gap: 4px", "align-items: center"];
    const _tmp$20 = _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-right: 4px"], undefined, undefined, undefined, -1, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "label_filter"));
    const is_sel$4 = model.filter_label === 0;
    const bg$3 = is_sel$4 ? "#4f46e5" : theme.filter_inactive;
    const fg$3 = is_sel$4 ? "white" : theme.text_secondary;
    const items$5 = [_tmp$20, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 3px 10px", "border-radius: 12px", "border: none", "cursor: pointer", "font-size: 11px", `background: ${_M0IPC16string6StringPB4Show10to__string(bg$3)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(fg$3)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg14SetFilterLabel(0)), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "all"))];
    const _bind$6 = model.labels;
    const _bind$7 = _bind$6.length;
    let _tmp$21 = 0;
    while (true) {
      const _ = _tmp$21;
      if (_ < _bind$7) {
        const l = _bind$6[_];
        const is_sel$5 = model.filter_label === l.id;
        const bg$4 = is_sel$5 ? l.color : theme.filter_inactive;
        const fg$4 = is_sel$5 ? "white" : theme.text_secondary;
        const lid = l.id;
        _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items$5, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 3px 10px", "border-radius: 12px", "border: none", "cursor: pointer", "font-size: 11px", `background: ${_M0IPC16string6StringPB4Show10to__string(bg$4)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(fg$4)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg14SetFilterLabel(lid)), undefined, l.name));
        _tmp$21 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _tmp$18 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$19, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, items$5);
  } else {
    _tmp$18 = _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  }
  const _tmp$19 = _tmp$18;
  const _tmp$20 = ["display: flex", "gap: 4px", "align-items: center"];
  const items$5 = [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-right: 4px"], undefined, undefined, undefined, -1, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "sort"))];
  const _bind$6 = _M0FP38bobzhang8taskflow6shared13sort__options.length;
  let _tmp$21 = 0;
  while (true) {
    const _ = _tmp$21;
    if (_ < _bind$6) {
      const opt = _M0FP38bobzhang8taskflow6shared13sort__options[_];
      const is_sel$4 = model.sort_by === opt;
      const bg$3 = is_sel$4 ? "#4f46e5" : theme.filter_inactive;
      const fg$3 = is_sel$4 ? "white" : theme.text_secondary;
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items$5, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 3px 10px", "border-radius: 12px", "border: none", "cursor: pointer", "font-size: 11px", `background: ${_M0IPC16string6StringPB4Show10to__string(bg$3)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(fg$3)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg9SetSortBy(opt)), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, `sort_${_M0IPC16string6StringPB4Show10to__string(opt)}`)));
      _tmp$21 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items$5, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 3px 8px", "border-radius: 12px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, "cursor: pointer", "font-size: 11px", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.filter_inactive)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg15ToggleSortOrder__), undefined, model.sort_asc ? "↑" : "↓"));
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _tmp$6, _tmp$10, _tmp$14, _tmp$17, _tmp$19, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$20, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, items$5)]);
}
function _M0FP38bobzhang8taskflow8frontend22view__assignee__picker(dispatch, members, current, on_change) {
  const _tmp = ["display: flex", "gap: 4px", "margin-bottom: 8px", "flex-wrap: wrap", "align-items: center"];
  const is_sel = current === 0;
  const border = is_sel ? "2px solid #1e293b" : "2px solid transparent";
  const items = [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["width: 28px", "height: 28px", "border-radius: 50%", "background: #e2e8f0", "cursor: pointer", "display: flex", "align-items: center", "justify-content: center", "font-size: 11px", "color: #94a3b8", `border: ${_M0IPC16string6StringPB4Show10to__string(border)}`], undefined, undefined, undefined, -1, dispatch(on_change(0)), undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text("—")])];
  const _bind = members.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind) {
      const m = members[_];
      const bg = _M0FP38bobzhang8taskflow6shared13member__color(m.color);
      const is_sel$2 = current === m.id;
      const border$2 = is_sel$2 ? "2px solid #1e293b" : "2px solid transparent";
      const initial = _M0FP38bobzhang8taskflow6shared15member__initial(m.name);
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["width: 28px", "height: 28px", "border-radius: 50%", "cursor: pointer", "display: flex", "align-items: center", "justify-content: center", "font-size: 11px", "color: white", "font-weight: 600", `background: ${_M0IPC16string6StringPB4Show10to__string(bg)}`, `border: ${_M0IPC16string6StringPB4Show10to__string(border$2)}`], undefined, undefined, undefined, -1, dispatch(on_change(m.id)), undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(initial)]));
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, items);
}
function _M0FP38bobzhang8taskflow8frontend30view__priority__picker_2einner(dispatch, current, on_change, lang) {
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 4px", "margin-bottom: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0MPC15array5Array3mapGsRP319moonbit_2dcommunity7rabbita4html4HtmlE(_M0FP38bobzhang8taskflow6shared17valid__priorities, (p) => {
    const is_sel = p === current;
    const bg = is_sel ? _M0FP38bobzhang8taskflow6shared15priority__color(p) : "#f1f5f9";
    const fg = is_sel ? "white" : "#64748b";
    return _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 4px 12px", "border-radius: 12px", "border: none", "cursor: pointer", "font-size: 12px", `background: ${_M0IPC16string6StringPB4Show10to__string(bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(fg)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(on_change(p)), undefined, _M0FP38bobzhang8taskflow6shared11t__priority(lang, p));
  }));
}
function _M0FP38bobzhang8taskflow8frontend21view__add__task__form(dispatch, model) {
  const theme = _M0FP38bobzhang8taskflow8frontend10get__theme(model.dark_mode);
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([`background: ${_M0IPC16string6StringPB4Show10to__string(theme.card_bg)}`, "border-radius: 10px", "padding: 16px", "border: 2px dashed #c7d2fe", "margin-bottom: 16px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 14px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`, "margin-bottom: 12px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "new_task_title"))]), _M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, model.new_title, -1, -1, -1, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "task_title_placeholder"), undefined, ["width: 100%", "padding: 8px 10px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, "border-radius: 6px", "font-size: 14px", "outline: none", "margin-bottom: 8px", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.input_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (v) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg15NewTitleChanged(v)), undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html16textarea_2einnerGsE(["width: 100%", "padding: 8px 10px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, "border-radius: 6px", "font-size: 13px", "outline: none", "resize: vertical", "font-family: inherit", "margin-bottom: 8px", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.input_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`], undefined, undefined, undefined, -1, undefined, model.new_desc, 2, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "desc_placeholder"), -1, -1, undefined, undefined, -1, -1, undefined, undefined, (v) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg14NewDescChanged(v)), undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 16px", "margin-bottom: 8px", "flex-wrap: wrap"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-bottom: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "priority"))]), _M0FP38bobzhang8taskflow8frontend30view__priority__picker_2einner(dispatch, model.new_priority, (p) => new _M0DTP38bobzhang8taskflow8frontend3Msg18NewPriorityChanged(p), model.lang)]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-bottom: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "assignee"))]), _M0FP38bobzhang8taskflow8frontend22view__assignee__picker(dispatch, model.members, model.new_assignee, (id) => new _M0DTP38bobzhang8taskflow8frontend3Msg18NewAssigneeChanged(id))]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-bottom: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "due_date"))]), _M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, model.new_due_date, -1, -1, -1, undefined, "YYYY-MM-DD", undefined, ["padding: 6px 10px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, "border-radius: 6px", "font-size: 13px", "outline: none", "width: 130px", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.input_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (v) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg17NewDueDateChanged(v)), undefined, "")])]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 6px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 14px", "background: #4f46e5", "color: white", "border: none", "border-radius: 6px", "cursor: pointer", "font-size: 13px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg7AddTask__), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "create_task")), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 14px", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.filter_inactive)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`, "border: none", "border-radius: 6px", "cursor: pointer", "font-size: 13px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg11HideAddTask__), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "cancel"))])]);
}
function _M0FP38bobzhang8taskflow8frontend22view__edit__task__form(dispatch, model) {
  const theme = _M0FP38bobzhang8taskflow8frontend10get__theme(model.dark_mode);
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([`background: ${_M0IPC16string6StringPB4Show10to__string(theme.card_bg)}`, "border-radius: 8px", "padding: 14px", "border: 1px solid #4f46e5", "margin-bottom: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, model.edit_title, -1, -1, -1, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "task_title_placeholder"), undefined, ["width: 100%", "padding: 6px 8px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, "border-radius: 4px", "font-size: 13px", "outline: none", "margin-bottom: 6px", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.input_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (v) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg16EditTitleChanged(v)), undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html16textarea_2einnerGsE(["width: 100%", "padding: 6px 8px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, "border-radius: 4px", "font-size: 12px", "outline: none", "resize: vertical", "font-family: inherit", "margin-bottom: 6px", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.input_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`], undefined, undefined, undefined, -1, undefined, model.edit_desc, 2, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "desc_placeholder"), -1, -1, undefined, undefined, -1, -1, undefined, undefined, (v) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg15EditDescChanged(v)), undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 12px", "margin-bottom: 6px", "flex-wrap: wrap"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 11px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-bottom: 2px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "priority"))]), _M0FP38bobzhang8taskflow8frontend30view__priority__picker_2einner(dispatch, model.edit_priority, (p) => new _M0DTP38bobzhang8taskflow8frontend3Msg19EditPriorityChanged(p), model.lang)]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 11px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-bottom: 2px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "assignee"))]), _M0FP38bobzhang8taskflow8frontend22view__assignee__picker(dispatch, model.members, model.edit_assignee, (id) => new _M0DTP38bobzhang8taskflow8frontend3Msg19EditAssigneeChanged(id))]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 11px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-bottom: 2px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "due_date"))]), _M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, model.edit_due_date, -1, -1, -1, undefined, "YYYY-MM-DD", undefined, ["padding: 4px 8px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, "border-radius: 4px", "font-size: 12px", "outline: none", "width: 120px", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.input_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (v) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg18EditDueDateChanged(v)), undefined, "")])]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 6px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 5px 12px", "background: #4f46e5", "color: white", "border: none", "border-radius: 4px", "cursor: pointer", "font-size: 12px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg12SaveEditTask__), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "save")), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 5px 12px", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.filter_inactive)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`, "border: none", "border-radius: 4px", "cursor: pointer", "font-size: 12px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg14CancelEditTask__), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "cancel"))])]);
}
function _M0FP38bobzhang8taskflow8frontend16view__task__item(dispatch, model, task) {
  if (model.editing_task === task.id) {
    return _M0FP38bobzhang8taskflow8frontend22view__edit__task__form(dispatch, model);
  }
  const theme = _M0FP38bobzhang8taskflow8frontend10get__theme(model.dark_mode);
  const border_color = _M0FP38bobzhang8taskflow6shared15priority__color(task.priority);
  const is_done = task.status === "done";
  const title_color = is_done ? theme.text_muted : theme.text;
  const title_decoration = is_done ? "line-through" : "none";
  const status_bg = _M0FP38bobzhang8taskflow6shared13status__color(task.status);
  const transitions = _M0FP38bobzhang8taskflow6shared20allowed__transitions(task.status);
  let assignee_html;
  let m;
  _L: {
    _L$2: {
      const _bind = _M0FP38bobzhang8taskflow6shared12find__member(model.members, task.assignee_id);
      if (_bind === undefined) {
        assignee_html = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["width: 24px", "height: 24px", "border-radius: 50%", "background: #e2e8f0", "display: flex", "align-items: center", "justify-content: center", "font-size: 10px", "color: #94a3b8"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text("—")]);
      } else {
        const _Some = _bind;
        const _m = _Some;
        m = _m;
        break _L$2;
      }
      break _L;
    }
    const bg = _M0FP38bobzhang8taskflow6shared13member__color(m.color);
    const initial = _M0FP38bobzhang8taskflow6shared15member__initial(m.name);
    assignee_html = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["width: 24px", "height: 24px", "border-radius: 50%", "display: flex", "align-items: center", "justify-content: center", "font-size: 10px", "color: white", "font-weight: 600", `background: ${_M0IPC16string6StringPB4Show10to__string(bg)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(initial)]);
  }
  let due_html;
  if (_M0IP016_24default__implPB2Eq10not__equalGsE(task.due_date, "")) {
    const urgency = _M0FP38bobzhang8taskflow6shared14urgency__label(task.due_date, model.today);
    let due_color;
    switch (urgency) {
      case "Overdue": {
        due_color = "#ef4444";
        break;
      }
      case "Due today": {
        due_color = "#f97316";
        break;
      }
      default: {
        due_color = theme.text_secondary;
      }
    }
    due_html = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 11px", `color: ${_M0IPC16string6StringPB4Show10to__string(due_color)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(task.due_date)]);
  } else {
    due_html = _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  }
  const dep_ids = _M0FP38bobzhang8taskflow6shared17get__dependencies(model.dependencies, task.id);
  const has_blocked = _M0FP38bobzhang8taskflow6shared21has__unresolved__deps(model.dependencies, model.tasks, task.id);
  let dep_html;
  if (dep_ids.length > 0) {
    const dep_names = [];
    const _bind = dep_ids.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const did = dep_ids[_];
        const _bind$2 = model.tasks;
        const _bind$3 = _bind$2.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$3) {
            const t = _bind$2[_$2];
            if (t.id === did) {
              _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(dep_names, t.title);
              break;
            }
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const color = has_blocked ? "#ef4444" : "#22c55e";
    const label = has_blocked ? _M0FP38bobzhang8taskflow6shared1t(model.lang, "blocked_by") : _M0FP38bobzhang8taskflow6shared1t(model.lang, "depends_done");
    const _bind$2 = ", ";
    const names = _M0MPC15array5Array4joinGsE(dep_names, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
    dep_html = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 10px", `color: ${_M0IPC16string6StringPB4Show10to__string(color)}`, "margin-top: 2px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(`${_M0IPC16string6StringPB4Show10to__string(label)}: ${_M0IPC16string6StringPB4Show10to__string(names)}`)]);
  } else {
    dep_html = _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  }
  const _tmp = [`background: ${_M0IPC16string6StringPB4Show10to__string(theme.card_bg)}`, "border-radius: 8px", "padding: 12px 16px", "margin-bottom: 8px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.card_border)}`, `border-left: 4px solid ${_M0IPC16string6StringPB4Show10to__string(border_color)}`, "transition: all 0.15s"];
  const _tmp$2 = ["display: flex", "justify-content: space-between", "align-items: flex-start", "margin-bottom: 6px"];
  const _tmp$3 = ["flex: 1"];
  const _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 14px", "font-weight: 500", `color: ${_M0IPC16string6StringPB4Show10to__string(title_color)}`, `text-decoration: ${_M0IPC16string6StringPB4Show10to__string(title_decoration)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(task.title)]);
  const _tmp$5 = _M0IP016_24default__implPB2Eq10not__equalGsE(task.description, "") ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`, "margin-top: 2px", "line-height: 1.4"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(task.description)]) : _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  const task_labels = _M0FP38bobzhang8taskflow6shared17labels__for__task(model.labels, model.task_labels, task.id);
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$2, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$3, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$4, _tmp$5, dep_html, task_labels.length > 0 ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 4px", "flex-wrap: wrap", "margin-top: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0MPC15array5Array3mapGRP38bobzhang8taskflow6shared5LabelRP319moonbit_2dcommunity7rabbita4html4HtmlE(task_labels, (l) => _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 10px", "padding: 1px 6px", "border-radius: 8px", "color: white", `background: ${_M0IPC16string6StringPB4Show10to__string(l.color)}`, "white-space: nowrap"], undefined, undefined, undefined, -1, undefined, l.name))) : _M0FP319moonbit_2dcommunity7rabbita4html4text("")]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 8px", "align-items: center", "margin-left: 12px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [assignee_html, _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["padding: 2px 8px", "border-radius: 10px", "font-size: 11px", "color: white", `background: ${_M0IPC16string6StringPB4Show10to__string(status_bg)}`], undefined, undefined, undefined, -1, undefined, _M0FP38bobzhang8taskflow6shared9t__status(model.lang, task.status)), due_html])]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 4px", "justify-content: space-between", "align-items: center"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 3px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0MPC15array5Array3mapGsRP319moonbit_2dcommunity7rabbita4html4HtmlE(transitions, (target) => {
    const label = _M0FP38bobzhang8taskflow6shared13t__transition(model.lang, task.status, target);
    const bg = _M0FP38bobzhang8taskflow6shared13status__color(target);
    return _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 2px 8px", "border-radius: 4px", "border: none", "cursor: pointer", "font-size: 10px", "color: white", `background: ${_M0IPC16string6StringPB4Show10to__string(bg)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg12ChangeStatus(task.id, target)), undefined, label);
  })), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 3px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 2px 8px", "font-size: 11px", "cursor: pointer", "border-radius: 4px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(theme.filter_inactive)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg12ShowComments(task.id)), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "notes")), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 2px 8px", "font-size: 11px", "cursor: pointer", "border-radius: 4px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(theme.filter_inactive)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg13StartEditTask(task)), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "edit")), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 2px 8px", "font-size: 11px", "cursor: pointer", "border-radius: 4px", "border: 1px solid #fecaca", "background: #fef2f2", "color: #dc2626"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg13RequestDelete(task.id)), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "del"))])])]);
}
function _M0FP38bobzhang8taskflow8frontend18view__kanban__card(dispatch, model, task) {
  if (model.editing_task === task.id) {
    return _M0FP38bobzhang8taskflow8frontend22view__edit__task__form(dispatch, model);
  }
  const theme = _M0FP38bobzhang8taskflow8frontend10get__theme(model.dark_mode);
  const border_color = _M0FP38bobzhang8taskflow6shared15priority__color(task.priority);
  const is_done = task.status === "done";
  const title_color = is_done ? theme.text_muted : theme.text;
  const title_decoration = is_done ? "line-through" : "none";
  const transitions = _M0FP38bobzhang8taskflow6shared20allowed__transitions(task.status);
  let assignee_html;
  let m;
  _L: {
    _L$2: {
      const _bind = _M0FP38bobzhang8taskflow6shared12find__member(model.members, task.assignee_id);
      if (_bind === undefined) {
        assignee_html = _M0FP319moonbit_2dcommunity7rabbita4html4text("");
      } else {
        const _Some = _bind;
        const _m = _Some;
        m = _m;
        break _L$2;
      }
      break _L;
    }
    const bg = _M0FP38bobzhang8taskflow6shared13member__color(m.color);
    const initial = _M0FP38bobzhang8taskflow6shared15member__initial(m.name);
    assignee_html = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["width: 20px", "height: 20px", "border-radius: 50%", "display: flex", "align-items: center", "justify-content: center", "font-size: 9px", "color: white", "font-weight: 600", `background: ${_M0IPC16string6StringPB4Show10to__string(bg)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(initial)]);
  }
  const dragging = model.dragging_task_id === task.id;
  const task_id = task.id;
  const _tmp = [`background: ${_M0IPC16string6StringPB4Show10to__string(theme.card_bg)}`, "border-radius: 6px", "padding: 10px", "margin-bottom: 6px", `border-left: 3px solid ${_M0IPC16string6StringPB4Show10to__string(border_color)}`, "box-shadow: 0 1px 2px rgba(0,0,0,0.05)", "cursor: grab", dragging ? "opacity: 0.4" : "opacity: 1", "transition: opacity 0.15s ease"];
  const _tmp$2 = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__dragend(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__dragstart(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs9draggable(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build(), "true"), (e) => {
    _M0MP319moonbit_2dcommunity7rabbita3dom20DataTransferItemList3add(_M0MP319moonbit_2dcommunity7rabbita3dom12DataTransfer5items(_M0MP319moonbit_2dcommunity7rabbita3dom9DragEvent19get__data__transfer(e)), _M0IP016_24default__implPB4Show10to__stringGiE(task_id), "text/plain");
    return dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg13DragStartTask(task_id));
  }), (_e) => dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg7DragEnd__));
  const _tmp$3 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "justify-content: space-between", "align-items: flex-start", "gap: 6px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 12px", "font-weight: 500", `color: ${_M0IPC16string6StringPB4Show10to__string(title_color)}`, `text-decoration: ${_M0IPC16string6StringPB4Show10to__string(title_decoration)}`, "flex: 1", "line-height: 1.4"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(task.title)]), assignee_html]);
  let _tmp$4;
  if (_M0IP016_24default__implPB2Eq10not__equalGsE(task.due_date, "")) {
    const urgency = _M0FP38bobzhang8taskflow6shared14urgency__label(task.due_date, model.today);
    let due_color;
    switch (urgency) {
      case "Overdue": {
        due_color = "#ef4444";
        break;
      }
      case "Due today": {
        due_color = "#f97316";
        break;
      }
      default: {
        due_color = "#94a3b8";
      }
    }
    _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 10px", `color: ${_M0IPC16string6StringPB4Show10to__string(due_color)}`, "margin-top: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(task.due_date)]);
  } else {
    _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  }
  const _tmp$5 = _tmp$4;
  const task_labels = _M0FP38bobzhang8taskflow6shared17labels__for__task(model.labels, model.task_labels, task.id);
  const _tmp$6 = task_labels.length > 0 ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 3px", "flex-wrap: wrap", "margin-top: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0MPC15array5Array3mapGRP38bobzhang8taskflow6shared5LabelRP319moonbit_2dcommunity7rabbita4html4HtmlE(task_labels, (l) => _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 9px", "padding: 0px 5px", "border-radius: 6px", "color: white", `background: ${_M0IPC16string6StringPB4Show10to__string(l.color)}`], undefined, undefined, undefined, -1, undefined, l.name))) : _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  const _tmp$7 = ["display: flex", "gap: 2px", "margin-top: 6px", "flex-wrap: wrap"];
  const buttons = _M0MPC15array5Array3mapGsRP319moonbit_2dcommunity7rabbita4html4HtmlE(transitions, (target) => {
    const label = _M0FP38bobzhang8taskflow6shared13t__transition(model.lang, task.status, target);
    const bg = _M0FP38bobzhang8taskflow6shared13status__color(target);
    return _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 1px 6px", "border-radius: 3px", "border: none", "cursor: pointer", "font-size: 9px", "color: white", `background: ${_M0IPC16string6StringPB4Show10to__string(bg)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg12ChangeStatus(task.id, target)), undefined, label);
  });
  _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(buttons, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 1px 6px", "font-size: 9px", "cursor: pointer", "border-radius: 3px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(theme.filter_inactive)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg12ShowComments(task.id)), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "notes")));
  _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(buttons, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 1px 6px", "font-size: 9px", "cursor: pointer", "border-radius: 3px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(theme.filter_inactive)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg13StartEditTask(task)), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "edit")));
  _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(buttons, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 1px 6px", "font-size: 9px", "cursor: pointer", "border-radius: 3px", "border: 1px solid #fecaca", "background: #fef2f2", "color: #dc2626"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg13RequestDelete(task.id)), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "del")));
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, _tmp$2, [_tmp$3, _tmp$5, _tmp$6, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$7, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, buttons)]);
}
function _M0FP38bobzhang8taskflow8frontend12view__kanban(dispatch, model, tasks) {
  const theme = _M0FP38bobzhang8taskflow8frontend10get__theme(model.dark_mode);
  const column_statuses = ["todo", "in_progress", "review", "done", "blocked"];
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 12px", "overflow-x: auto", "padding-bottom: 8px", "min-height: 400px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0MPC15array5Array3mapGsRP319moonbit_2dcommunity7rabbita4html4HtmlE(column_statuses, (status) => {
    const col_tasks = _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared4TaskE(tasks, (t) => t.status === status);
    const col_color = _M0FP38bobzhang8taskflow6shared13status__color(status);
    const count = col_tasks.length;
    const is_hover = model.drag_over_status === status;
    let drop_valid;
    if (model.dragging_task_id > 0 && is_hover) {
      const from = new _M0TPC13ref3RefGsE("");
      const _bind = model.tasks;
      const _bind$2 = _bind.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$2) {
          const t = _bind[_];
          if (t.id === model.dragging_task_id) {
            from.val = t.status;
            break;
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      drop_valid = _M0IP016_24default__implPB2Eq10not__equalGsE(from.val, status) && _M0FP38bobzhang8taskflow6shared21is__valid__transition(from.val, status);
    } else {
      drop_valid = false;
    }
    const outline = is_hover && drop_valid ? `outline: 2px dashed ${_M0IPC16string6StringPB4Show10to__string(col_color)}` : is_hover && model.dragging_task_id > 0 ? "outline: 2px dashed #ef4444" : "outline: 2px dashed transparent";
    const _tmp = ["min-width: 200px", "flex: 1", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.column_bg)}`, "border-radius: 8px", "padding: 10px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, outline, "transition: outline 0.15s ease"];
    const _tmp$2 = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8on__drop(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs12on__dragover(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs9data__set(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build(), "drop-zone", "true"), (_e) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg14DragOverColumn(status))), (_e) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg12DropOnColumn(status)));
    const items = [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 6px", "margin-bottom: 10px", "padding-bottom: 8px", `border-bottom: 2px solid ${_M0IPC16string6StringPB4Show10to__string(col_color)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`], undefined, undefined, undefined, -1, undefined, _M0FP38bobzhang8taskflow6shared9t__status(model.lang, status)), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 10px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(theme.filter_inactive)}`, "padding: 1px 6px", "border-radius: 8px"], undefined, undefined, undefined, -1, undefined, _M0IP016_24default__implPB4Show10to__stringGiE(count))])];
    const _bind = _M0FP38bobzhang8taskflow6shared15sort__tasks__by(col_tasks, model.sort_by, model.sort_asc);
    const _bind$2 = _bind.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$2) {
        const t = _bind[_];
        _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items, _M0FP38bobzhang8taskflow8frontend18view__kanban__card(dispatch, model, t));
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (count === 0) {
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["text-align: center", "padding: 20px 0", "color: #cbd5e1", "font-size: 11px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "no_tasks"))]));
    }
    return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, _tmp$2, items);
  }));
}
function _M0FP38bobzhang8taskflow8frontend20view__activity__feed(model) {
  const theme = _M0FP38bobzhang8taskflow8frontend10get__theme(model.dark_mode);
  const activities = _M0FP38bobzhang8taskflow6shared18recent__activities(model.activities, 10);
  if (activities.length === 0) {
    return _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  }
  const _tmp = [`background: ${_M0IPC16string6StringPB4Show10to__string(theme.card_bg)}`, "border-radius: 10px", "padding: 14px 16px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, "margin-top: 16px"];
  const items = [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 13px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`, "margin-bottom: 10px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "recent_activity"))])];
  const _bind = activities.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind) {
      const act = activities[_];
      const desc = _M0FP38bobzhang8taskflow6shared11t__activity(model.lang, act);
      const to_color = _M0FP38bobzhang8taskflow6shared13status__color(act.to_status);
      const label = act.from_status === "" ? _M0FP38bobzhang8taskflow6shared1t(model.lang, "created") : _M0FP38bobzhang8taskflow6shared13t__transition(model.lang, act.from_status, act.to_status);
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 8px", "padding: 4px 0", `border-bottom: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.card_border)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["padding: 1px 6px", "border-radius: 4px", "font-size: 10px", "color: white", `background: ${_M0IPC16string6StringPB4Show10to__string(to_color)}`, "white-space: nowrap"], undefined, undefined, undefined, -1, undefined, label), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`, "flex: 1"], undefined, undefined, undefined, -1, undefined, desc), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 10px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "white-space: nowrap"], undefined, undefined, undefined, -1, undefined, act.timestamp)]));
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, items);
}
function _M0FP38bobzhang8taskflow8frontend21view__delete__confirm(dispatch, model) {
  if (model.confirm_delete === 0) {
    return _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  }
  const theme = _M0FP38bobzhang8taskflow8frontend10get__theme(model.dark_mode);
  const task_title = new _M0TPC13ref3RefGsE("this task");
  const _bind = model.tasks;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const t = _bind[_];
      if (t.id === model.confirm_delete) {
        task_title.val = t.title;
        break;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["position: fixed", "top: 0", "left: 0", "right: 0", "bottom: 0", "background: rgba(0,0,0,0.4)", "display: flex", "align-items: center", "justify-content: center", "z-index: 1000"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([`background: ${_M0IPC16string6StringPB4Show10to__string(theme.card_bg)}`, "border-radius: 12px", "padding: 24px", "max-width: 400px", "width: 90%", "box-shadow: 0 20px 60px rgba(0,0,0,0.2)"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 16px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`, "margin-bottom: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "delete_task"))]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 13px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`, "margin-bottom: 20px", "line-height: 1.5"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(task_title.val)]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 8px", "justify-content: flex-end"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 8px 16px", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.filter_inactive)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`, "border: none", "border-radius: 6px", "cursor: pointer", "font-size: 13px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg12CancelDelete__), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "cancel")), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 8px 16px", "background: #dc2626", "color: white", "border: none", "border-radius: 6px", "cursor: pointer", "font-size: 13px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg13ConfirmDelete__), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "delete"))])])]);
}
function _M0FP38bobzhang8taskflow8frontend21view__comments__panel(dispatch, model) {
  if (model.viewing_comments === 0) {
    return _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  }
  const theme = _M0FP38bobzhang8taskflow8frontend10get__theme(model.dark_mode);
  const task_title = new _M0TPC13ref3RefGsE("Task");
  const _bind = model.tasks;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const t = _bind[_];
      if (t.id === model.viewing_comments) {
        task_title.val = t.title;
        break;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$2 = ["position: fixed", "top: 0", "left: 0", "right: 0", "bottom: 0", "background: rgba(0,0,0,0.4)", "display: flex", "align-items: center", "justify-content: center", "z-index: 1000"];
  const _tmp$3 = [`background: ${_M0IPC16string6StringPB4Show10to__string(theme.card_bg)}`, "border-radius: 12px", "padding: 20px", "max-width: 500px", "width: 90%", "max-height: 80vh", "overflow-y: auto", "box-shadow: 0 20px 60px rgba(0,0,0,0.2)"];
  const items = [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "justify-content: space-between", "align-items: center", "margin-bottom: 16px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 15px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "notes"))]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-top: 2px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(task_title.val)])]), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["background: none", "border: none", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "cursor: pointer", "font-size: 18px", "padding: 0 4px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg12HideComments__), undefined, "×")]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 8px", "margin-bottom: 16px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, model.new_comment, -1, -1, -1, undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "add_note_placeholder"), undefined, ["flex: 1", "padding: 8px 10px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, "border-radius: 6px", "font-size: 13px", "outline: none", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.input_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (v) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg17NewCommentChanged(v)), undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 8px 14px", "background: #4f46e5", "color: white", "border: none", "border-radius: 6px", "cursor: pointer", "font-size: 13px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg10AddComment__), undefined, _M0FP38bobzhang8taskflow6shared1t(model.lang, "add"))])];
  if (model.comments.length === 0) {
    _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["text-align: center", "padding: 20px 0", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "font-size: 13px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "no_notes"))]));
  }
  const _bind$3 = model.comments;
  const _bind$4 = _bind$3.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$4) {
      const c = _bind$3[_];
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["padding: 10px 0", `border-bottom: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.card_border)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "justify-content: space-between", "margin-bottom: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`], undefined, undefined, undefined, -1, undefined, c.author), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 11px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`], undefined, undefined, undefined, -1, undefined, c.created_at)]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 13px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`, "line-height: 1.5"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(c.text)])]));
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const task_id = model.viewing_comments;
  const dep_ids = _M0FP38bobzhang8taskflow6shared17get__dependencies(model.dependencies, task_id);
  const _tmp$5 = ["margin-top: 16px", "padding-top: 12px", `border-top: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.card_border)}`];
  const dep_items = [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 13px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`, "margin-bottom: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "dependencies"))])];
  const _bind$5 = dep_ids.length;
  let _tmp$6 = 0;
  while (true) {
    const _ = _tmp$6;
    if (_ < _bind$5) {
      const did = dep_ids[_];
      const dep_name = new _M0TPC13ref3RefGsE("");
      const dep_done = new _M0TPC13ref3RefGbE(false);
      const _bind$6 = model.tasks;
      const _bind$7 = _bind$6.length;
      let _tmp$7 = 0;
      while (true) {
        const _$2 = _tmp$7;
        if (_$2 < _bind$7) {
          const t = _bind$6[_$2];
          if (t.id === did) {
            dep_name.val = t.title;
            dep_done.val = t.status === "done";
            break;
          }
          _tmp$7 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const color = dep_done.val ? "#22c55e" : "#ef4444";
      const status_text = dep_done.val ? " (done)" : "";
      const dep_id = did;
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(dep_items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 6px", "padding: 3px 0"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["width: 6px", "height: 6px", "border-radius: 50%", `background: ${_M0IPC16string6StringPB4Show10to__string(color)}`], undefined, undefined, undefined, -1, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`, "flex: 1"], undefined, undefined, undefined, -1, undefined, `${_M0IPC16string6StringPB4Show10to__string(dep_name.val)}${_M0IPC16string6StringPB4Show10to__string(status_text)}`), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["background: none", "border: none", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "cursor: pointer", "font-size: 14px", "padding: 0 2px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg9RemoveDep(task_id, dep_id)), undefined, "×")]));
      _tmp$6 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (dep_ids.length === 0) {
    _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(dep_items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "padding: 4px 0"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "no_dependencies"))]));
  }
  const other_tasks = _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared4TaskE(model.tasks, (t) => t.id !== task_id && !_M0MPC15array5Array8containsGiE(dep_ids, t.id));
  if (other_tasks.length > 0) {
    _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(dep_items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 11px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-top: 8px", "margin-bottom: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "add_dependency"))]));
    _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(dep_items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-wrap: wrap", "gap: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0MPC15array5Array3mapGRP38bobzhang8taskflow6shared4TaskRP319moonbit_2dcommunity7rabbita4html4HtmlE(other_tasks, (t) => _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 2px 8px", "font-size: 11px", "cursor: pointer", "border-radius: 4px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.input_border)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(theme.filter_inactive)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_secondary)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg6AddDep(task_id, t.id)), undefined, t.title))));
  }
  _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$5, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, dep_items));
  const current_labels = _M0FP38bobzhang8taskflow6shared17labels__for__task(model.labels, model.task_labels, task_id);
  const current_label_ids = _M0MPC15array5Array3mapGRP38bobzhang8taskflow6shared5LabeliE(current_labels, (l) => l.id);
  const _tmp$7 = ["margin-top: 16px", "padding-top: 12px", `border-top: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.card_border)}`];
  const label_items = [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 13px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`, "margin-bottom: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "labels"))])];
  if (current_labels.length === 0) {
    _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(label_items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "padding: 4px 0"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "no_labels"))]));
  }
  const _bind$6 = current_labels.length;
  let _tmp$8 = 0;
  while (true) {
    const _ = _tmp$8;
    if (_ < _bind$6) {
      const l = current_labels[_];
      const lid = l.id;
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(label_items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: inline-flex", "align-items: center", "gap: 4px", "margin: 0 4px 4px 0", "padding: 2px 8px", "border-radius: 10px", "font-size: 11px", "color: white", `background: ${_M0IPC16string6StringPB4Show10to__string(l.color)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([], undefined, undefined, undefined, -1, undefined, l.name), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["background: none", "border: none", "color: rgba(255,255,255,0.7)", "cursor: pointer", "font-size: 12px", "padding: 0 1px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg15RemoveTaskLabel(task_id, lid)), undefined, "×")]));
      _tmp$8 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const avail = _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared5LabelE(model.labels, (l) => !_M0MPC15array5Array8containsGiE(current_label_ids, l.id));
  if (avail.length > 0) {
    _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(label_items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 11px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "margin-top: 8px", "margin-bottom: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "add_label"))]));
    _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(label_items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-wrap: wrap", "gap: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0MPC15array5Array3mapGRP38bobzhang8taskflow6shared5LabelRP319moonbit_2dcommunity7rabbita4html4HtmlE(avail, (l) => {
      const lid = l.id;
      return _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 2px 8px", "font-size: 11px", "cursor: pointer", "border-radius: 10px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(l.color)}`, "background: transparent", `color: ${_M0IPC16string6StringPB4Show10to__string(l.color)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg12AddTaskLabel(task_id, lid)), undefined, l.name);
    })));
  }
  _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$7, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, label_items));
  const task_acts = _M0FP38bobzhang8taskflow6shared21activities__for__task(model.activities, task_id);
  const _tmp$9 = ["margin-top: 16px", "padding-top: 12px", `border-top: 1px solid ${_M0IPC16string6StringPB4Show10to__string(theme.card_border)}`];
  const hist_items = [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 13px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`, "margin-bottom: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "history"))])];
  if (task_acts.length === 0) {
    _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(hist_items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "padding: 4px 0"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "no_history"))]));
  }
  const _bind$7 = task_acts.length;
  let _tmp$10 = 0;
  while (true) {
    const _ = _tmp$10;
    if (_ < _bind$7) {
      const act = task_acts[_];
      const to_color = _M0FP38bobzhang8taskflow6shared13status__color(act.to_status);
      const label = act.from_status === "" ? _M0FP38bobzhang8taskflow6shared1t(model.lang, "created") : _M0FP38bobzhang8taskflow6shared13t__transition(model.lang, act.from_status, act.to_status);
      const _tmp$11 = ["display: flex", "align-items: center", "gap: 8px", "padding: 3px 0"];
      const _tmp$12 = _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["padding: 1px 6px", "border-radius: 4px", "font-size: 10px", "color: white", `background: ${_M0IPC16string6StringPB4Show10to__string(to_color)}`, "white-space: nowrap"], undefined, undefined, undefined, -1, undefined, label);
      const _tmp$13 = ["font-size: 11px", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "flex: 1"];
      const name = _M0IP016_24default__implPB2Eq10not__equalGsE(act.user_name, "") ? `${act.user_name} · ` : "";
      _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(hist_items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$11, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$12, _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(_tmp$13, undefined, undefined, undefined, -1, undefined, `${_M0IPC16string6StringPB4Show10to__string(name)}${_M0IPC16string6StringPB4Show10to__string(act.timestamp)}`)]));
      _tmp$10 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGRP38bobzhang8taskflow6shared7CommentE(items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$9, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, hist_items));
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$2, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$3, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, items)]);
}
function _M0FP38bobzhang8taskflow8frontend18view__error__toast(dispatch, model) {
  if (model.error_msg === "") {
    return _M0FP319moonbit_2dcommunity7rabbita4html4text("");
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["position: fixed", "top: 16px", "right: 16px", "z-index: 1001", "background: #fef2f2", "border: 1px solid #fecaca", "border-radius: 8px", "padding: 12px 16px", "display: flex", "align-items: center", "gap: 10px", "box-shadow: 0 4px 12px rgba(0,0,0,0.1)", "max-width: 400px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["font-size: 13px", "color: #dc2626", "flex: 1"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(model.error_msg)]), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["background: none", "border: none", "color: #94a3b8", "cursor: pointer", "font-size: 16px", "padding: 0 4px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg12DismissError__), undefined, "×")]);
}
function _M0FP38bobzhang8taskflow8frontend4view(dispatch, model) {
  const theme = _M0FP38bobzhang8taskflow8frontend10get__theme(model.dark_mode);
  if (_M0IP016_24default__implPB2Eq10not__equalGsE(model.auth_screen, "")) {
    return _M0FP38bobzhang8taskflow8frontend10view__auth(dispatch, model, theme);
  }
  const filtered = _M0FP38bobzhang8taskflow6shared21filter__tasks_2einner(model.tasks, model.filter_status, model.filter_assignee, model.filter_priority, model.search_query, model.filter_urgency, model.today);
  const filtered$2 = model.filter_label > 0 ? _M0MPC15array5Array6filterGRP38bobzhang8taskflow6shared4TaskE(filtered, (t) => _M0MPB4Iter3anyGRP38bobzhang8taskflow6shared9TaskLabelE(_M0MPC15array5Array4iterGRP38bobzhang8taskflow6shared7CommentE(model.task_labels), (tl) => tl.task_id === t.id && tl.label_id === model.filter_label)) : filtered;
  const sorted = _M0FP38bobzhang8taskflow6shared15sort__tasks__by(filtered$2, model.sort_by, model.sort_asc);
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["padding: 16px 24px", "min-height: 100vh", "max-width: 900px", "margin: 0 auto", "outline: none", `background: ${_M0IPC16string6StringPB4Show10to__string(theme.bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, (kb) => dispatch(new _M0DTP38bobzhang8taskflow8frontend3Msg10KeyPressed(_M0MP319moonbit_2dcommunity7rabbita4html8Keyboard3key(kb))), undefined, _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8tabindex(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build(), 0), [_M0FP38bobzhang8taskflow8frontend18view__error__toast(dispatch, model), _M0FP38bobzhang8taskflow8frontend21view__comments__panel(dispatch, model), _M0FP38bobzhang8taskflow8frontend21view__delete__confirm(dispatch, model), _M0FP38bobzhang8taskflow8frontend12view__header(dispatch, model), model.loading ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["text-align: center", "padding: 60px 0", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "font-size: 15px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "loading"))]) : _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP38bobzhang8taskflow8frontend13view__filters(dispatch, model), model.adding_task ? _M0FP38bobzhang8taskflow8frontend21view__add__task__form(dispatch, model) : _M0FP319moonbit_2dcommunity7rabbita4html4text(""), model.view_mode === "kanban" ? _M0FP38bobzhang8taskflow8frontend12view__kanban(dispatch, model, sorted) : sorted.length === 0 ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["text-align: center", "padding: 40px 0", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "font-size: 14px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "no_matches"))]) : _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0MPC15array5Array3mapGRP38bobzhang8taskflow6shared4TaskRP319moonbit_2dcommunity7rabbita4html4HtmlE(sorted, (task) => _M0FP38bobzhang8taskflow8frontend16view__task__item(dispatch, model, task))), _M0FP38bobzhang8taskflow8frontend20view__activity__feed(model), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["text-align: center", "padding: 12px 0", `color: ${_M0IPC16string6StringPB4Show10to__string(theme.text_muted)}`, "font-size: 11px", "margin-top: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html4text(_M0FP38bobzhang8taskflow6shared1t(model.lang, "keyboard_hints"))])])]);
}
(() => {
  _M0FP38bobzhang8taskflow8frontend18enable__drag__drop();
  let dispatch;
  let app_cell;
  _L: {
    const _bind = undefined;
    const _bind$2 = "login";
    const _bind$3 = "";
    const _bind$4 = "";
    const _bind$5 = "";
    const _bind$6 = false;
    const _bind$7 = [];
    const _bind$8 = [];
    const _bind$9 = [];
    const _bind$10 = [];
    const _bind$11 = [];
    const _bind$12 = [];
    const _bind$13 = "";
    const _bind$14 = "";
    const _bind$15 = 0;
    const _bind$16 = "";
    const _bind$17 = "";
    const _bind$18 = "";
    const _bind$19 = 0;
    const _bind$20 = "list";
    const _bind$21 = "priority";
    const _bind$22 = true;
    const _bind$23 = false;
    const _bind$24 = "";
    const _bind$25 = "";
    const _bind$26 = "medium";
    const _bind$27 = 0;
    const _bind$28 = "";
    const _bind$29 = 0;
    const _bind$30 = "";
    const _bind$31 = "";
    const _bind$32 = "";
    const _bind$33 = 0;
    const _bind$34 = "";
    const _bind$35 = false;
    const _bind$36 = 0;
    const _bind$37 = [];
    const _bind$38 = "";
    const _bind$39 = 0;
    const _bind$40 = "";
    const _bind$41 = false;
    const _bind$42 = 0;
    const _bind$43 = 0;
    const _bind$44 = "";
    const _bind$45 = _M0FP219moonbit_2dcommunity7rabbita20cell__with__dispatchGRP38bobzhang8taskflow8frontend5ModelRP38bobzhang8taskflow8frontend3MsgE(new _M0TP38bobzhang8taskflow8frontend5Model(_bind, _bind$2, _bind$3, _bind$4, _bind$5, _bind$6, _bind$7, _bind$8, _bind$9, _bind$10, _bind$11, _bind$12, _bind$13, _bind$14, _bind$15, _bind$16, _bind$17, _bind$18, _bind$19, _bind$20, _bind$21, _bind$22, _bind$35, _bind$23, _bind$24, _bind$25, _bind$26, _bind$27, _bind$28, _bind$29, _bind$30, _bind$31, _bind$32, _bind$33, _bind$34, _bind$36, _bind$37, _bind$38, _bind$39, _bind$40, _bind$41, _bind$42, _bind$43, _bind$44), _M0FP38bobzhang8taskflow8frontend6update, _M0FP38bobzhang8taskflow8frontend4view);
    const _dispatch = _bind$45._0;
    const _app_cell = _bind$45._1;
    dispatch = _dispatch;
    app_cell = _app_cell;
    break _L;
  }
  const app = _M0FP219moonbit_2dcommunity7rabbita3new(app_cell);
  _M0MP219moonbit_2dcommunity7rabbita3App10with__init(app, dispatch(_M0DTP38bobzhang8taskflow8frontend3Msg4Init__));
  _M0MP219moonbit_2dcommunity7rabbita3App5mount(app, "app");
})();
//# sourceMappingURL=frontend.js.map
