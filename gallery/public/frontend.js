function _M0TPB15WasmHelperCache(param0, param1) {
  this.tried = param0;
  this.exports = param1;
}
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
function _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError.prototype.$tag = 1;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 0;
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
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some.prototype.$tag = 1;
function _M0TPB12MutArrayViewGRP48bobzhang7gallery8frontend3app8TableRowE(param0, param1, param2) {
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
function _M0TPB3MapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(param0, param1, param2, param3, param4, param5, param6) {
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
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray3pop = (arr) => arr.pop();
const _M0MPB7JSArray6splice = (arr, idx, cnt) => arr.splice(idx, cnt);
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
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $10L = { hi: 0, lo: 10 };
const $1L = { hi: 0, lo: 1 };
const $16L = { hi: 0, lo: 16 };
const $_9223372036854775808L = { hi: -2147483648, lo: 0 };
const $0L = { hi: 0, lo: 0 };
function _M0TPC15queue5QueueGRP48bobzhang7gallery8frontend3app3MsgE(param0, param1, param2) {
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
function _M0TPC13ref3RefGRP48bobzhang7gallery8frontend3app5ModelE(param0) {
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
const _M0FP319moonbit_2dcommunity7rabbita3cmd12set__timeout = (f,ms) => setTimeout(f, ms);
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
function _M0TP219moonbit_2dcommunity7rabbita10DispatcherGRP48bobzhang7gallery8frontend3app3MsgE(param0, param1) {
  this.id = param0;
  this.inbox = param1;
}
function _M0TP219moonbit_2dcommunity7rabbita9TypedCellGRP48bobzhang7gallery8frontend3app5ModelRP48bobzhang7gallery8frontend3app3MsgE(param0, param1, param2, param3, param4, param5) {
  this.model = param0;
  this.dispatcher = param1;
  this.dispatch = param2;
  this.update = param3;
  this.view = param4;
  this.flags = param5;
}
function _M0DTP48bobzhang7gallery8frontend3app3Msg13ChangeSection(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg13ChangeSection.prototype.$tag = 0;
function _M0DTP48bobzhang7gallery8frontend3app3Msg15ChangeComponent(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg15ChangeComponent.prototype.$tag = 1;
function _M0DTP48bobzhang7gallery8frontend3app3Msg16TextInputChanged(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg16TextInputChanged.prototype.$tag = 2;
function _M0DTP48bobzhang7gallery8frontend3app3Msg15TextAreaChanged(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg15TextAreaChanged.prototype.$tag = 3;
function _M0DTP48bobzhang7gallery8frontend3app3Msg15CheckboxToggled(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg15CheckboxToggled.prototype.$tag = 4;
function _M0DTP48bobzhang7gallery8frontend3app3Msg13RadioSelected(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg13RadioSelected.prototype.$tag = 5;
function _M0DTP48bobzhang7gallery8frontend3app3Msg13SelectChanged(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg13SelectChanged.prototype.$tag = 6;
function _M0DTP48bobzhang7gallery8frontend3app3Msg14ToggleSwitched(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg14ToggleSwitched.prototype.$tag = 7;
function _M0DTP48bobzhang7gallery8frontend3app3Msg13SliderChanged(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg13SliderChanged.prototype.$tag = 8;
function _M0DTP48bobzhang7gallery8frontend3app3Msg18ColorSwatchClicked(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg18ColorSwatchClicked.prototype.$tag = 9;
function _M0DTP48bobzhang7gallery8frontend3app3Msg15ColorHexChanged(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg15ColorHexChanged.prototype.$tag = 10;
function _M0DTP48bobzhang7gallery8frontend3app3Msg15ProgressChanged(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg15ProgressChanged.prototype.$tag = 11;
function _M0DTP48bobzhang7gallery8frontend3app3Msg11TooltipShow(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg11TooltipShow.prototype.$tag = 12;
function _M0DTP48bobzhang7gallery8frontend3app3Msg11TooltipHide() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg11TooltipHide.prototype.$tag = 13;
const _M0DTP48bobzhang7gallery8frontend3app3Msg11TooltipHide__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg11TooltipHide();
function _M0DTP48bobzhang7gallery8frontend3app3Msg6TagAdd() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg6TagAdd.prototype.$tag = 14;
const _M0DTP48bobzhang7gallery8frontend3app3Msg6TagAdd__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg6TagAdd();
function _M0DTP48bobzhang7gallery8frontend3app3Msg9TagRemove(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg9TagRemove.prototype.$tag = 15;
function _M0DTP48bobzhang7gallery8frontend3app3Msg15TagInputChanged(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg15TagInputChanged.prototype.$tag = 16;
function _M0DTP48bobzhang7gallery8frontend3app3Msg15AccordionToggle(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg15AccordionToggle.prototype.$tag = 17;
function _M0DTP48bobzhang7gallery8frontend3app3Msg11TabSelected(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg11TabSelected.prototype.$tag = 18;
function _M0DTP48bobzhang7gallery8frontend3app3Msg18BreadcrumbNavigate(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg18BreadcrumbNavigate.prototype.$tag = 19;
function _M0DTP48bobzhang7gallery8frontend3app3Msg10TreeToggle(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg10TreeToggle.prototype.$tag = 20;
function _M0DTP48bobzhang7gallery8frontend3app3Msg9TableSort(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg9TableSort.prototype.$tag = 21;
function _M0DTP48bobzhang7gallery8frontend3app3Msg9TablePage(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg9TablePage.prototype.$tag = 22;
function _M0DTP48bobzhang7gallery8frontend3app3Msg14TableToggleRow(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg14TableToggleRow.prototype.$tag = 23;
function _M0DTP48bobzhang7gallery8frontend3app3Msg14TableSelectAll() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg14TableSelectAll.prototype.$tag = 24;
function _M0DTP48bobzhang7gallery8frontend3app3Msg17CalendarPrevMonth() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg17CalendarPrevMonth.prototype.$tag = 25;
const _M0DTP48bobzhang7gallery8frontend3app3Msg17CalendarPrevMonth__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg17CalendarPrevMonth();
function _M0DTP48bobzhang7gallery8frontend3app3Msg17CalendarNextMonth() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg17CalendarNextMonth.prototype.$tag = 26;
const _M0DTP48bobzhang7gallery8frontend3app3Msg17CalendarNextMonth__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg17CalendarNextMonth();
function _M0DTP48bobzhang7gallery8frontend3app3Msg17CalendarSelectDay(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg17CalendarSelectDay.prototype.$tag = 27;
function _M0DTP48bobzhang7gallery8frontend3app3Msg14KanbanMoveCard(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg14KanbanMoveCard.prototype.$tag = 28;
function _M0DTP48bobzhang7gallery8frontend3app3Msg9ShowToast(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg9ShowToast.prototype.$tag = 29;
function _M0DTP48bobzhang7gallery8frontend3app3Msg12DismissToast(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg12DismissToast.prototype.$tag = 30;
function _M0DTP48bobzhang7gallery8frontend3app3Msg9ModalOpen() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg9ModalOpen.prototype.$tag = 31;
const _M0DTP48bobzhang7gallery8frontend3app3Msg9ModalOpen__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg9ModalOpen();
function _M0DTP48bobzhang7gallery8frontend3app3Msg10ModalClose() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg10ModalClose.prototype.$tag = 32;
const _M0DTP48bobzhang7gallery8frontend3app3Msg10ModalClose__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg10ModalClose();
function _M0DTP48bobzhang7gallery8frontend3app3Msg12ModalConfirm() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg12ModalConfirm.prototype.$tag = 33;
const _M0DTP48bobzhang7gallery8frontend3app3Msg12ModalConfirm__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg12ModalConfirm();
function _M0DTP48bobzhang7gallery8frontend3app3Msg14SkeletonToggle() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg14SkeletonToggle.prototype.$tag = 34;
const _M0DTP48bobzhang7gallery8frontend3app3Msg14SkeletonToggle__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg14SkeletonToggle();
function _M0DTP48bobzhang7gallery8frontend3app3Msg16EmptyStateToggle() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg16EmptyStateToggle.prototype.$tag = 35;
const _M0DTP48bobzhang7gallery8frontend3app3Msg16EmptyStateToggle__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg16EmptyStateToggle();
function _M0DTP48bobzhang7gallery8frontend3app3Msg22SearchableQueryChanged(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg22SearchableQueryChanged.prototype.$tag = 36;
function _M0DTP48bobzhang7gallery8frontend3app3Msg18SearchableSelect__(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg18SearchableSelect__.prototype.$tag = 37;
function _M0DTP48bobzhang7gallery8frontend3app3Msg20SearchableToggleOpen() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg20SearchableToggleOpen.prototype.$tag = 38;
const _M0DTP48bobzhang7gallery8frontend3app3Msg20SearchableToggleOpen__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg20SearchableToggleOpen();
function _M0DTP48bobzhang7gallery8frontend3app3Msg15SearchableFocus(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg15SearchableFocus.prototype.$tag = 39;
function _M0DTP48bobzhang7gallery8frontend3app3Msg19DateRangeSetPicking(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg19DateRangeSetPicking.prototype.$tag = 40;
function _M0DTP48bobzhang7gallery8frontend3app3Msg18DateRangeSelectDay(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg18DateRangeSelectDay.prototype.$tag = 41;
function _M0DTP48bobzhang7gallery8frontend3app3Msg18DateRangePrevMonth() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg18DateRangePrevMonth.prototype.$tag = 42;
const _M0DTP48bobzhang7gallery8frontend3app3Msg18DateRangePrevMonth__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg18DateRangePrevMonth();
function _M0DTP48bobzhang7gallery8frontend3app3Msg18DateRangeNextMonth() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg18DateRangeNextMonth.prototype.$tag = 43;
const _M0DTP48bobzhang7gallery8frontend3app3Msg18DateRangeNextMonth__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg18DateRangeNextMonth();
function _M0DTP48bobzhang7gallery8frontend3app3Msg20CommandPaletteToggle() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg20CommandPaletteToggle.prototype.$tag = 44;
const _M0DTP48bobzhang7gallery8frontend3app3Msg20CommandPaletteToggle__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg20CommandPaletteToggle();
function _M0DTP48bobzhang7gallery8frontend3app3Msg20CommandPaletteSearch(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg20CommandPaletteSearch.prototype.$tag = 45;
function _M0DTP48bobzhang7gallery8frontend3app3Msg19CommandPaletteFocus(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg19CommandPaletteFocus.prototype.$tag = 46;
function _M0DTP48bobzhang7gallery8frontend3app3Msg20CommandPaletteSelect(param0) {
  this._0 = param0;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg20CommandPaletteSelect.prototype.$tag = 47;
function _M0DTP48bobzhang7gallery8frontend3app3Msg10WizardNext() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg10WizardNext.prototype.$tag = 48;
const _M0DTP48bobzhang7gallery8frontend3app3Msg10WizardNext__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg10WizardNext();
function _M0DTP48bobzhang7gallery8frontend3app3Msg10WizardPrev() {}
_M0DTP48bobzhang7gallery8frontend3app3Msg10WizardPrev.prototype.$tag = 49;
const _M0DTP48bobzhang7gallery8frontend3app3Msg10WizardPrev__ = new _M0DTP48bobzhang7gallery8frontend3app3Msg10WizardPrev();
function _M0DTP48bobzhang7gallery8frontend3app3Msg18WizardFieldChanged(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP48bobzhang7gallery8frontend3app3Msg18WizardFieldChanged.prototype.$tag = 50;
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0TP48bobzhang7gallery8frontend3app5Model(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19, param20, param21, param22, param23, param24, param25, param26, param27, param28, param29, param30, param31) {
  this.section = param0;
  this.component = param1;
  this.text_input = param2;
  this.text_area = param3;
  this.checkbox = param4;
  this.radio = param5;
  this.select = param6;
  this.toggle = param7;
  this.slider = param8;
  this.color_picker = param9;
  this.avatar = param10;
  this.badge = param11;
  this.progress = param12;
  this.tooltip = param13;
  this.tag = param14;
  this.skeleton = param15;
  this.empty_state = param16;
  this.accordion = param17;
  this.tabs = param18;
  this.breadcrumb = param19;
  this.tree_view = param20;
  this.data_table = param21;
  this.calendar = param22;
  this.timeline = param23;
  this.chart = param24;
  this.toast = param25;
  this.modal = param26;
  this.command_palette = param27;
  this.kanban = param28;
  this.searchable_select = param29;
  this.date_range = param30;
  this.form_wizard = param31;
}
function _M0TP48bobzhang7gallery8frontend3app14TextInputState(param0, param1) {
  this.value = param0;
  this.error = param1;
}
function _M0TP48bobzhang7gallery8frontend3app13TextAreaState(param0, param1) {
  this.value = param0;
  this.max_chars = param1;
}
function _M0TP48bobzhang7gallery8frontend3app13CheckboxState(param0) {
  this.items = param0;
}
function _M0TP48bobzhang7gallery8frontend3app10RadioState(param0, param1) {
  this.options = param0;
  this.selected = param1;
}
function _M0TP48bobzhang7gallery8frontend3app11SelectState(param0, param1) {
  this.options = param0;
  this.selected = param1;
}
function _M0TP48bobzhang7gallery8frontend3app11ToggleState(param0) {
  this.items = param0;
}
function _M0TP48bobzhang7gallery8frontend3app11SliderState(param0, param1, param2) {
  this.value = param0;
  this.min = param1;
  this.max = param2;
}
function _M0TP48bobzhang7gallery8frontend3app16ColorPickerState(param0, param1, param2) {
  this.selected = param0;
  this.hex_input = param1;
  this.swatches = param2;
}
function _M0TP48bobzhang7gallery8frontend3app11AvatarState(param0) {
  this.users = param0;
}
function _M0TP48bobzhang7gallery8frontend3app10BadgeState(param0) {
  this.counts = param0;
}
function _M0TP48bobzhang7gallery8frontend3app13ProgressState(param0, param1) {
  this.value = param0;
  this.animating = param1;
}
function _M0TP48bobzhang7gallery8frontend3app12TooltipState(param0) {
  this.active_index = param0;
}
function _M0TP48bobzhang7gallery8frontend3app8TagState(param0, param1) {
  this.tags = param0;
  this.input = param1;
}
function _M0TP48bobzhang7gallery8frontend3app13SkeletonState(param0) {
  this.loading = param0;
}
function _M0TP48bobzhang7gallery8frontend3app15EmptyStateState(param0) {
  this.has_data = param0;
}
function _M0TP48bobzhang7gallery8frontend3app14AccordionState(param0, param1) {
  this.items = param0;
  this.open_index = param1;
}
function _M0TP48bobzhang7gallery8frontend3app9TabsState(param0, param1) {
  this.tabs = param0;
  this.active = param1;
}
function _M0TP48bobzhang7gallery8frontend3app15BreadcrumbState(param0) {
  this.path = param0;
}
function _M0TP48bobzhang7gallery8frontend3app13TreeViewState(param0, param1) {
  this.roots = param0;
  this.expanded = param1;
}
function _M0TP48bobzhang7gallery8frontend3app8TreeNode(param0, param1, param2) {
  this.id = param0;
  this.label = param1;
  this.children = param2;
}
function _M0TP48bobzhang7gallery8frontend3app14DataTableState(param0, param1, param2, param3, param4, param5) {
  this.rows = param0;
  this.sort_col = param1;
  this.sort_asc = param2;
  this.page = param3;
  this.page_size = param4;
  this.selected = param5;
}
function _M0TP48bobzhang7gallery8frontend3app8TableRow(param0, param1, param2, param3) {
  this.name = param0;
  this.email = param1;
  this.role = param2;
  this.status = param3;
}
function _M0TP48bobzhang7gallery8frontend3app13CalendarState(param0, param1, param2, param3, param4, param5) {
  this.year = param0;
  this.month = param1;
  this.selected_day = param2;
  this.today_year = param3;
  this.today_month = param4;
  this.today_day = param5;
}
function _M0TP48bobzhang7gallery8frontend3app13TimelineState(param0) {
  this.events = param0;
}
function _M0TP48bobzhang7gallery8frontend3app13TimelineEvent(param0, param1, param2, param3) {
  this.title = param0;
  this.description = param1;
  this.time = param2;
  this.color = param3;
}
function _M0TP48bobzhang7gallery8frontend3app10ChartState(param0, param1) {
  this.bars = param0;
  this.max_value = param1;
}
function _M0TP48bobzhang7gallery8frontend3app8ChartBar(param0, param1, param2) {
  this.label = param0;
  this.value = param1;
  this.color = param2;
}
function _M0TP48bobzhang7gallery8frontend3app10ToastState(param0, param1) {
  this.items = param0;
  this.next_id = param1;
}
function _M0TP48bobzhang7gallery8frontend3app10ModalState(param0, param1, param2, param3) {
  this.open = param0;
  this.title = param1;
  this.message = param2;
  this.confirmed = param3;
}
function _M0TP48bobzhang7gallery8frontend3app19CommandPaletteState(param0, param1, param2, param3) {
  this.open = param0;
  this.query = param1;
  this.actions = param2;
  this.focus_index = param3;
}
function _M0TP48bobzhang7gallery8frontend3app13CommandAction(param0, param1, param2, param3) {
  this.id = param0;
  this.label = param1;
  this.shortcut = param2;
  this.category = param3;
}
function _M0TP48bobzhang7gallery8frontend3app11KanbanState(param0) {
  this.columns = param0;
}
function _M0TP48bobzhang7gallery8frontend3app10KanbanCard(param0, param1, param2) {
  this.id = param0;
  this.title = param1;
  this.color = param2;
}
function _M0TP48bobzhang7gallery8frontend3app21SearchableSelectState(param0, param1, param2, param3, param4) {
  this.options = param0;
  this.query = param1;
  this.selected = param2;
  this.open = param3;
  this.focus_index = param4;
}
function _M0TP48bobzhang7gallery8frontend3app12SelectOption(param0, param1) {
  this.label = param0;
  this.value = param1;
}
function _M0TP48bobzhang7gallery8frontend3app14DateRangeState(param0, param1, param2, param3, param4, param5, param6) {
  this.start_year = param0;
  this.start_month = param1;
  this.start_day = param2;
  this.end_year = param3;
  this.end_month = param4;
  this.end_day = param5;
  this.picking = param6;
}
function _M0TP48bobzhang7gallery8frontend3app15FormWizardState(param0, param1, param2) {
  this.steps = param0;
  this.current = param1;
  this.completed = param2;
}
function _M0TP48bobzhang7gallery8frontend3app10WizardStep(param0, param1) {
  this.title = param0;
  this.fields = param1;
}
function _M0TP48bobzhang7gallery8frontend3app11WizardField(param0, param1, param2) {
  this.label = param0;
  this.value = param1;
  this.error = param2;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORP48bobzhang7gallery8frontend3app10KanbanCardE(param0) {
  this.val = param0;
}
function _M0TP48bobzhang7gallery8frontend3app9ToastItem(param0, param1, param2, param3) {
  this.id = param0;
  this.title = param1;
  this.message = param2;
  this.kind = param3;
}
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char };
const _M0FP0133moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eScheduler = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler3add, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler17add__url__changed, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP419moonbit_2dcommunity7rabbita8internal7runtime9Scheduler17add__url__request };
const _M0FP0207moonbit_2dcommunity_2frabbita_2fTypedCell_5bbobzhang_2fgallery_2ffrontend_2fapp_2fModel_2c_20bobzhang_2fgallery_2ffrontend_2fapp_2fMsg_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eIsCell = { method_0: _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4stepGRP48bobzhang7gallery8frontend3app5ModelRP48bobzhang7gallery8frontend3app3MsgE, method_1: _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4viewGRP48bobzhang7gallery8frontend3app5ModelRP48bobzhang7gallery8frontend3app3MsgE, method_2: _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell5flagsGRP48bobzhang7gallery8frontend3app5ModelRP48bobzhang7gallery8frontend3app3MsgE };
const _M0FPB19wasm__helper__cache = new _M0TPB15WasmHelperCache(false, undefined);
const _M0FPC17strconv14base__err__str = "invalid base";
const _M0FPC17strconv15range__err__str = "value out of range";
const _M0FPC17strconv16syntax__err__str = "invalid syntax";
const _M0FPC17strconv20parse__int64_2einnerN7_2abindS543 = "";
const _M0FP319moonbit_2dcommunity7rabbita3dom14namespace__svg = "http://www.w3.org/2000/svg";
const _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4none = _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime3Cmd5Empty__;
const _M0FP48bobzhang7gallery8frontend3app10btn__style = ["padding: 8px 16px", "border: none", "border-radius: 8px", "cursor: pointer", "font-size: 14px", "font-weight: 500", "color: white", "background: #6366f1"];
const _M0FP48bobzhang7gallery8frontend3app6danger = "#ef4444";
const _M0FP48bobzhang7gallery8frontend3app12label__style = ["display: block", "font-size: 13px", "font-weight: 500", "color: #64748b", "margin-bottom: 6px"];
const _M0FP48bobzhang7gallery8frontend3app6radius = "8px";
const _M0FP48bobzhang7gallery8frontend3app7success = "#22c55e";
const _M0FP48bobzhang7gallery8frontend3app11text__muted = "#94a3b8";
const _M0FP48bobzhang7gallery8frontend3app7warning = "#f59e0b";
const _M0FP48bobzhang7gallery8frontend3app7primary = "#6366f1";
const _M0FP48bobzhang7gallery8frontend3app7surface = "#ffffff";
const _M0FP48bobzhang7gallery8frontend3app13text__primary = "#1e293b";
const _M0FP48bobzhang7gallery8frontend3app15text__secondary = "#64748b";
const _M0FP48bobzhang7gallery8frontend3app19btn__outline__style = ["padding: 8px 16px", "border: 1px solid #e2e8f0", "border-radius: 8px", "cursor: pointer", "font-size: 14px", "font-weight: 500", "color: #64748b", "background: white"];
const _M0FP48bobzhang7gallery8frontend3app6border = "#e2e8f0";
const _M0FP48bobzhang7gallery8frontend3app14primary__light = "#e0e7ff";
const _M0FP48bobzhang7gallery8frontend3app12input__style = ["width: 100%", "padding: 8px 12px", "border: 1px solid #e2e8f0", "border-radius: 8px", "font-size: 14px", "outline: none", "color: #1e293b", "background: white", "box-sizing: border-box"];
const _M0FP48bobzhang7gallery8frontend3app10radius__sm = "4px";
const _M0FP48bobzhang7gallery8frontend3app12radius__full = "9999px";
const _M0FP48bobzhang7gallery8frontend3app12surface__alt = "#f8fafc";
const _M0FP48bobzhang7gallery8frontend3app14btn__sm__style = ["padding: 4px 10px", "border: none", "border-radius: 6px", "cursor: pointer", "font-size: 12px", "font-weight: 500", "color: white", "background: #6366f1"];
const _M0FP48bobzhang7gallery8frontend3app13layout__style = ["display: flex", "min-height: 100vh"];
const _M0FP48bobzhang7gallery8frontend3app11card__style = ["background: white", "border-radius: 12px", "padding: 24px", "box-shadow: 0 1px 3px rgba(0,0,0,0.08)", "margin-bottom: 24px", "border: 1px solid #e2e8f0"];
const _M0FP48bobzhang7gallery8frontend3app22component__desc__style = ["font-size: 14px", "color: #64748b", "margin-bottom: 20px", "line-height: 1.5"];
const _M0FP48bobzhang7gallery8frontend3app23component__title__style = ["font-size: 24px", "font-weight: 700", "color: #1e293b", "margin-bottom: 8px"];
const _M0FP48bobzhang7gallery8frontend3app14content__style = ["margin-left: 240px", "flex: 1", "padding: 32px", "max-width: 960px"];
const _M0FP48bobzhang7gallery8frontend3app20demo__section__style = ["padding: 20px", "border: 1px solid #e2e8f0", "border-radius: 8px", "background: #f8fafc", "margin-bottom: 16px"];
const _M0FP48bobzhang7gallery8frontend3app22sidebar__header__style = ["padding: 20px 16px", "font-size: 18px", "font-weight: 700", "border-bottom: 1px solid #334155", "color: #e0e7ff"];
const _M0FP48bobzhang7gallery8frontend3app23sidebar__section__style = ["padding: 12px 16px 4px", "font-size: 11px", "font-weight: 600", "text-transform: uppercase", "letter-spacing: 1px", "color: #94a3b8"];
const _M0FP48bobzhang7gallery8frontend3app14sidebar__style = ["width: 240px", "background: #1e293b", "color: white", "padding: 0", "position: fixed", "top: 0", "left: 0", "bottom: 0", "overflow-y: auto"];
const _M0FP419moonbit_2dcommunity7rabbita8internal7runtime17global__id__count = _M0FPC13ref3newGiE(0);
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP319moonbit_2dcommunity7rabbita4html7nothing = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode8fragment([]);
const _M0FPB33brute__force__find_2econstr_2f404 = 0;
const _M0FPB43boyer__moore__horspool__find_2econstr_2f390 = 0;
const _M0FP319moonbit_2dcommunity7rabbita3cmd4none = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4none;
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGsE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGiE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
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
function _M0FPB5abortGsE(string, loc) {
  return _M0FPC15abort5abortGsE(`${_M0IPC16string6StringPB4Show10to__string(string)}\n  at ${_M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(loc)}\n`);
}
function _M0FPB5abortGiE(string, loc) {
  return _M0FPC15abort5abortGiE(`${_M0IPC16string6StringPB4Show10to__string(string)}\n  at ${_M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(loc)}\n`);
}
function _M0FPB5abortGOiE(string, loc) {
  return _M0FPC15abort5abortGOiE(`${_M0IPC16string6StringPB4Show10to__string(string)}\n  at ${_M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(loc)}\n`);
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
function _M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(self, index) {
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
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPB7MyInt647to__int(self) {
  return self.lo;
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
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(x, y) {
  return !_M0IP419moonbit_2dcommunity7rabbita8internal7runtime2IdPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOsE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGsE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP319moonbit_2dcommunity7rabbita7variant7VariantE(x, y) {
  return !_M0IP319moonbit_2dcommunity7rabbita7variant7VariantPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB7Compare6op__ltGlE(x, y) {
  return _M0IPC15int645Int64PB7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implPB7Compare6op__ltGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implPB7Compare6op__gtGlE(x, y) {
  return _M0IPC15int645Int64PB7Compare7compare(x, y) > 0;
}
function _M0IP016_24default__implPB7Compare6op__gtGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) > 0;
}
function _M0IP016_24default__implPB7Compare6op__leGlE(x, y) {
  return _M0IPC15int645Int64PB7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__leGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGlE(x, y) {
  return _M0IPC15int645Int64PB7Compare7compare(x, y) >= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) >= 0;
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
function _M0MPB4Iter4nextGsE(self) {
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
function _M0MPB4Iter3newGsE(f) {
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
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= _M0MPC16string10StringView6length(self)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPB5abortGsE("Invalid index for View", "@moonbitlang/core/builtin:stringview.mbt:113:5-113:36");
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
function _M0MPB5Iter23newGicE(f) {
  return _M0MPB4Iter3newGsE(f);
}
function _M0MPC16string10StringView5iter2(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  const char_index = new _M0TPB8MutLocalGiE(0);
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
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPB5abortGsE("Invalid index for View", "@moonbitlang/core/builtin:stringview.mbt:399:5-399:36");
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
function _M0MPC15array9ArrayView6lengthGURP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(self) {
  return self.end - self.start | 0;
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
    return _M0FPB43boyer__moore__horspool__find_2econstr_2f390;
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
    return _M0FPB33brute__force__find_2econstr_2f404;
  }
}
function _M0MPC16string10StringView4find(self, str) {
  return _M0MPC16string10StringView6length(str) <= 4 ? _M0FPB18brute__force__find(self, str) : _M0FPB28boyer__moore__horspool__find(self, str);
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
function _M0MPC16string10StringView11has__prefix(self, str) {
  const _bind = _M0MPC16string10StringView4find(self, str);
  if (_bind === undefined) {
    return false;
  } else {
    const _Some = _bind;
    const _i = _Some;
    return _i === 0;
  }
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC15array5Array11new_2einnerGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdE(self, value) {
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
function _M0MPB4Iter3mapGRPC16string10StringViewsE(self, f) {
  return () => {
    const _bind = _M0MPB4Iter4nextGsE(self);
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
  return _M0MPB4Iter3newGsE(() => {
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
function _M0MPB4Iter9to__arrayGsE(self) {
  const result = [];
  while (true) {
    const _bind = _M0MPB4Iter4nextGsE(self);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(result, _x);
      continue;
    }
  }
  return result;
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
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0MPC16string6String17substring_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    end$2 = _Some;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
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
function _M0MPC15array9ArrayView4iterGsE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGsE(() => {
    if (i.val < _M0MPC15array9ArrayView6lengthGURP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(self)) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  });
}
function _M0MPC15array5Array4iterGsE(self) {
  return _M0MPC15array9ArrayView4iterGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length));
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
function _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(self) {
  return self.end - self.start | 0;
}
function _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(self, index) {
  if (index >= 0 && index < (self.end - self.start | 0)) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return _M0FPB5abortGsE(`index out of bounds: the len is from 0 to ${_M0IP016_24default__implPB4Show10to__stringGiE(self.end - self.start | 0)} but the index is ${_M0IP016_24default__implPB4Show10to__stringGiE(index)}`, "@moonbitlang/core/builtin:mutarrayview.mbt:118:5-120:6");
  }
}
function _M0MPC15array12MutArrayView3setGRP48bobzhang7gallery8frontend3app8TableRowE(self, index, value) {
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
function _M0MPC15array5Array17mut__view_2einnerGRP48bobzhang7gallery8frontend3app8TableRowE(self, start, end) {
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
    return new _M0TPB12MutArrayViewGRP48bobzhang7gallery8frontend3app8TableRowE(_bind, start$2, start$2 + _bind$2 | 0);
  } else {
    return _M0FPB5abortGsE("View index out of bounds", "@moonbitlang/core/builtin:mutarrayview.mbt:258:5-258:38");
  }
}
function _M0MPC15array12MutArrayView17mut__view_2einnerGRP48bobzhang7gallery8frontend3app8TableRowE(self, start, end) {
  const len = _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(self);
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
    return new _M0TPB12MutArrayViewGRP48bobzhang7gallery8frontend3app8TableRowE(_bind, _bind$2, _bind$2 + _bind$3 | 0);
  } else {
    return _M0FPB5abortGsE("View index out of bounds", "@moonbitlang/core/builtin:mutarrayview.mbt:307:5-307:38");
  }
}
function _M0MPC15array5Array3setGRP48bobzhang7gallery8frontend3app11WizardFieldE(self, index, value) {
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
function _M0MPB3Map11new_2einnerGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
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
function _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, entry) {
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
function _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, entry, new_idx) {
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
function _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, entry) {
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
      _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, entry$2, idx$2);
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
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, entry);
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
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, entry);
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
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, entry);
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
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, entry);
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
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, entry);
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
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, entry);
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
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, entry);
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
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, entry);
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
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, entry);
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
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuEE(self, idx, entry);
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
function _M0MPB3Map11from__arrayGRP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGURP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
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
  const length = _M0MPC15array9ArrayView6lengthGURP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
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
  const length = _M0MPC15array9ArrayView6lengthGURP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
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
  const length = _M0MPC15array9ArrayView6lengthGURP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity);
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
  const length = _M0MPC15array9ArrayView6lengthGURP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity);
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
  const length = _M0MPC15array9ArrayView6lengthGURP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity);
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
  const length = _M0MPC15array9ArrayView6lengthGURP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity);
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
  const length = _M0MPC15array9ArrayView6lengthGURP419moonbit_2dcommunity7rabbita8internal7runtime2IdURP419moonbit_2dcommunity7rabbita8internal7runtime6IsCellRPB3MapGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity);
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
  return _M0MPB4Iter3newGsE(() => {
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
  return _M0MPB4Iter3newGsE(() => {
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
  return _M0MPB4Iter3newGsE(() => {
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
  return _M0MPB4Iter3newGsE(() => {
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
  const _bind = _M0MPB4Iter4nextGsE(self);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _x = _Some;
    _M0IPB13StringBuilderPB6Logger13write__string(result, _x);
    while (true) {
      const _bind$2 = _M0MPB4Iter4nextGsE(self);
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
function _M0MPB4Iter4takeGsE(self, n) {
  const remaining = new _M0TPB8MutLocalGiE(n);
  return () => {
    if (remaining.val > 0) {
      const result = _M0MPB4Iter4nextGsE(self);
      if (result === undefined) {
      } else {
        remaining.val = remaining.val - 1 | 0;
      }
      return result;
    } else {
      return undefined;
    }
  };
}
function _M0MPB5Iter24nextGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime4LinkE(self) {
  return _M0MPB4Iter4nextGsE(self);
}
function _M0MPB5Iter24nextGRP419moonbit_2dcommunity7rabbita8internal7runtime6InstIdRP419moonbit_2dcommunity7rabbita8internal7runtime8InstanceE(self) {
  return _M0MPB4Iter4nextGsE(self);
}
function _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self) {
  return _M0MPB4Iter4nextGsE(self);
}
function _M0MPB5Iter24nextGicE(self) {
  return _M0MPB4Iter4nextGsE(self);
}
function _M0MPC16string6String20unsafe__charcode__at(self, idx) {
  return self.charCodeAt(idx);
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
function _M0IPC15int645Int64PB7Compare7compare(self, other) {
  return _M0MPB7MyInt647compare(self, other);
}
function _M0MPC15int645Int647to__int(self) {
  return _M0MPB7MyInt647to__int(self);
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
    return _M0FPB5abortGsE("View index out of bounds", "@moonbitlang/core/builtin:arrayview.mbt:266:5-266:38");
  }
}
function _M0MPC15array5Array5makeiGiE(length, f) {
  if (length <= 0) {
    return [];
  } else {
    const array = new Array(length);
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < length) {
        array[i] = f(i);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
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
function _M0MPC15array5Array6removeGsE(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check(self, index);
    const value = self[index];
    _M0MPB7JSArray6splice(self, index, 1);
    return value;
  } else {
    return _M0FPB5abortGsE(`index out of bounds: the len is from 0 to ${_M0IP016_24default__implPB4Show10to__stringGiE(self.length)} but the index is ${_M0IP016_24default__implPB4Show10to__stringGiE(index)}`, "@moonbitlang/core/builtin:arraycore_js.mbt:251:5-253:6");
  }
}
function _M0MPC15array5Array4copyGRP48bobzhang7gallery8frontend3app10WizardStepE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array4copyGiE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0FPB7minimum(x, y) {
  return x > y ? y : x;
}
function _M0MPC15array12MutArrayView4swapGRP48bobzhang7gallery8frontend3app8TableRowE(arr, i, j) {
  const temp = _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, i);
  _M0MPC15array12MutArrayView3setGRP48bobzhang7gallery8frontend3app8TableRowE(arr, i, _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, j));
  _M0MPC15array12MutArrayView3setGRP48bobzhang7gallery8frontend3app8TableRowE(arr, j, temp);
}
function _M0MPC15array12MutArrayView5sliceGRP48bobzhang7gallery8frontend3app8TableRowE(arr, start, end) {
  return _M0MPC15array12MutArrayView17mut__view_2einnerGRP48bobzhang7gallery8frontend3app8TableRowE(arr, start, end);
}
function _M0MPC15array12MutArrayView14rev__in__placeGRP48bobzhang7gallery8frontend3app8TableRowE(arr) {
  const len = _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(arr);
  if (2 === 0) {
    $panic();
  }
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, i);
      _M0MPC15array12MutArrayView3setGRP48bobzhang7gallery8frontend3app8TableRowE(arr, i, _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, j));
      _M0MPC15array12MutArrayView3setGRP48bobzhang7gallery8frontend3app8TableRowE(arr, j, temp);
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
function _M0FPB23fixed__bubble__sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(arr, cmp) {
  const _bind = _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(arr);
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(_M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, j - 1 | 0), _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, j)) > 0) {
          _M0MPC15array12MutArrayView4swapGRP48bobzhang7gallery8frontend3app8TableRowE(arr, j, j - 1 | 0);
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
function _M0FPB41fixed__choose__pivot__by_2esort__2_2f1698(_env, a, b) {
  const arr = _env._2;
  const cmp = _env._1;
  const swaps = _env._0;
  if (cmp(_M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, a), _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, b)) > 0) {
    _M0MPC15array12MutArrayView4swapGRP48bobzhang7gallery8frontend3app8TableRowE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB41fixed__choose__pivot__by_2esort__3_2f1699(_env, a, b, c) {
  _M0FPB41fixed__choose__pivot__by_2esort__2_2f1698(_env, a, b);
  _M0FPB41fixed__choose__pivot__by_2esort__2_2f1698(_env, b, c);
  _M0FPB41fixed__choose__pivot__by_2esort__2_2f1698(_env, a, b);
}
function _M0FPB24fixed__choose__pivot__byGRP48bobzhang7gallery8frontend3app8TableRowE(arr, cmp) {
  const len = _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(arr);
  const swaps = new _M0TPB8MutLocalGiE(0);
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
    const _env = { _0: swaps, _1: cmp, _2: arr };
    if (len > 50) {
      _M0FPB41fixed__choose__pivot__by_2esort__3_2f1699(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB41fixed__choose__pivot__by_2esort__3_2f1699(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB41fixed__choose__pivot__by_2esort__3_2f1699(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB41fixed__choose__pivot__by_2esort__3_2f1699(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGRP48bobzhang7gallery8frontend3app8TableRowE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB21fixed__sift__down__byGRP48bobzhang7gallery8frontend3app8TableRowE(arr, index, cmp) {
  let index$2 = index;
  const len = _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(arr);
  let child = (Math.imul(index$2, 2) | 0) + 1 | 0;
  while (true) {
    if (child < len) {
      if ((child + 1 | 0) < len && cmp(_M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, child), _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, child + 1 | 0)) < 0) {
        child = child + 1 | 0;
      }
      if (cmp(_M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, index$2), _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, child)) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGRP48bobzhang7gallery8frontend3app8TableRowE(arr, index$2, child);
      index$2 = child;
      child = (Math.imul(index$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(arr, cmp) {
  const len = _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(arr);
  if (2 === 0) {
    $panic();
  }
  const _bind = len / 2 | 0;
  let _tmp = _bind - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGRP48bobzhang7gallery8frontend3app8TableRowE(arr, i, cmp);
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
      _M0MPC15array12MutArrayView4swapGRP48bobzhang7gallery8frontend3app8TableRowE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGRP48bobzhang7gallery8frontend3app8TableRowE(_M0MPC15array12MutArrayView5sliceGRP48bobzhang7gallery8frontend3app8TableRowE(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__partition__byGRP48bobzhang7gallery8frontend3app8TableRowE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGRP48bobzhang7gallery8frontend3app8TableRowE(arr, pivot_index, _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(arr) - 1 | 0);
  const pivot = _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(arr) - 1 | 0);
  const _bind = _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(arr) - 1 | 0;
  let _bind$2;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind) {
      if (cmp(_M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, j), pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGRP48bobzhang7gallery8frontend3app8TableRowE(arr, i, j);
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          _tmp$3 = false;
          continue;
        } else {
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp = j + 1 | 0;
        continue;
      }
    } else {
      _bind$2 = { _0: i, _1: partitioned };
      break;
    }
  }
  const _i = _bind$2._0;
  const _partitioned = _bind$2._1;
  _M0MPC15array12MutArrayView4swapGRP48bobzhang7gallery8frontend3app8TableRowE(arr, _i, _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(arr) - 1 | 0);
  return { _0: _i, _1: _partitioned };
}
function _M0FPB28fixed__try__bubble__sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(arr, cmp) {
  const _bind = _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(arr);
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind) {
      let sorted = true;
      let _tmp$3 = i;
      while (true) {
        const j = _tmp$3;
        if (j > 0 && cmp(_M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, j - 1 | 0), _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr, j)) > 0) {
          sorted = false;
          _M0MPC15array12MutArrayView4swapGRP48bobzhang7gallery8frontend3app8TableRowE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp = i + 1 | 0;
        _tmp$2 = tries$2;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB22fixed__quick__sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(arr, cmp, pred, limit) {
  let limit$2 = limit;
  let arr$2 = arr;
  let pred$2 = pred;
  let was_partitioned = true;
  let balanced = true;
  while (true) {
    const len = _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(arr$2);
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB23fixed__bubble__sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(arr$2, cmp);
      return undefined;
    }
    const _bind = _M0FPB24fixed__choose__pivot__byGRP48bobzhang7gallery8frontend3app8TableRowE(arr$2, cmp);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FPB20fixed__partition__byGRP48bobzhang7gallery8frontend3app8TableRowE(arr$2, cmp, _pivot_index);
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
      if (cmp(_pred, _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr$2, _pivot)) === 0) {
        let i = _pivot;
        while (true) {
          if (i < len && cmp(_pred, _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr$2, i)) === 0) {
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        arr$2 = _M0MPC15array12MutArrayView5sliceGRP48bobzhang7gallery8frontend3app8TableRowE(arr$2, i, len);
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGRP48bobzhang7gallery8frontend3app8TableRowE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGRP48bobzhang7gallery8frontend3app8TableRowE(arr$2, _pivot + 1 | 0, len);
    if (_M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(left) < _M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(right)) {
      _M0FPB22fixed__quick__sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(left, cmp, pred$2, limit$2);
      pred$2 = _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr$2, _pivot);
      arr$2 = right;
    } else {
      _M0FPB22fixed__quick__sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(right, cmp, _M0MPC15array12MutArrayView2atGRP48bobzhang7gallery8frontend3app8TableRowE(arr$2, _pivot), limit$2);
      arr$2 = left;
    }
    continue;
  }
}
function _M0MPC15array12MutArrayView8sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(self, cmp) {
  _M0FPB22fixed__quick__sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(self, cmp, undefined, _M0FPB17fixed__get__limit(_M0MPC15array12MutArrayView6lengthGRP48bobzhang7gallery8frontend3app8TableRowE(self)));
}
function _M0MPC15array5Array8sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(self, cmp) {
  _M0MPC15array12MutArrayView8sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(_M0MPC15array5Array17mut__view_2einnerGRP48bobzhang7gallery8frontend3app8TableRowE(self, 0, undefined), cmp);
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
function _M0MPC15array5Array4mapiGUsRPB5ArrayGRP48bobzhang7gallery8frontend3app10KanbanCardEEUsRPB5ArrayGRP48bobzhang7gallery8frontend3app10KanbanCardEEE(self, f) {
  if (self.length === 0) {
    return [];
  }
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(i, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array4mapiGUsbEUsbEE(self, f) {
  if (self.length === 0) {
    return [];
  }
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(i, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array4mapiGRP48bobzhang7gallery8frontend3app11WizardFieldRP48bobzhang7gallery8frontend3app11WizardFieldE(self, f) {
  if (self.length === 0) {
    return [];
  }
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(i, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGRP48bobzhang7gallery8frontend3app9ToastItemE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGRP48bobzhang7gallery8frontend3app10KanbanCardE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGiE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGiE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
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
function _M0MPC15array5Array10push__iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, iter) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGsE(iter);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(self, _x);
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
function _M0MPC15queue5Queue3newGRP48bobzhang7gallery8frontend3app3MsgE() {
  return new _M0TPC15queue5QueueGRP48bobzhang7gallery8frontend3app3MsgE(0, undefined, undefined);
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
function _M0FPC13ref3newGRP48bobzhang7gallery8frontend3app5ModelE(x) {
  return new _M0TPC13ref3RefGRP48bobzhang7gallery8frontend3app5ModelE(x);
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
                    const _bind$3 = _M0MPB4Iter9to__arrayGsE(_M0MPC16string6String5split(url, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
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
            const _bind$3 = _M0MPB4Iter9to__arrayGsE(_M0MPC16string10StringView5split(remain, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
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
            const _bind$3 = _M0MPB4Iter9to__arrayGsE(_M0MPC16string10StringView5split(mid, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
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
            const _bind$3 = _M0MPB4Iter9to__arrayGsE(_M0MPC16string10StringView5split(mid_part, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
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
      _bind = { _0: mid$3, _1: _M0MPB4Iter4join(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC15array9ArrayView4iterGsE(paths), _M0IPC16string10StringViewPB4Show10to__string), "/") };
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
            const _bind$3 = _M0MPB4Iter9to__arrayGsE(_M0MPC16string10StringView5split(mid$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
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
            const _bind$3 = _M0MPB4Iter9to__arrayGsE(_M0MPC16string10StringView5split(query_and_fragment, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
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
                _M0MPC15array5Array10push__iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(tmp, _M0MPC15array5Array4iterGsE(arr));
              }
            }
            break _L$4;
          }
          _M0MPC15array5Array10push__iterGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(tmp, _M0MPC15array5Array4iterGsE(xs));
        }
        break _L$2;
      }
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(result, inst.link);
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
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(stack, c);
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
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(stack, c);
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
    const slot = _M0FPC13ref3newGRP48bobzhang7gallery8frontend3app5ModelE(h);
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
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode8fragment(childs) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Frag(childs);
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
          const slot$2 = _M0FPC13ref3newGRP48bobzhang7gallery8frontend3app5ModelE(handler);
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
            _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(_M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(old$3, i), sandbox, parent);
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
            const inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(_M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(new$3, i), sandbox, parent_inst, parent, before.val);
            _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(acc, inode);
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
          const inode = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(_M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(old$3, i), _M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(new$3, i), sandbox, parent, before.val, parent_inst);
          _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(acc, inode);
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
          const _bind$3 = _M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(order, i);
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
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(reversed, { _0: k, _1: inode });
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
  const _bind$10 = _M0MPC15queue5Queue3newGRP48bobzhang7gallery8frontend3app3MsgE();
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
function _M0FP319moonbit_2dcommunity7rabbita3cmd19raw__effect_2einner(callback, kind) {
  return _M0FP419moonbit_2dcommunity7rabbita8internal7runtime6effect(callback, kind);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd11raw__effect(callback, kind$46$opt) {
  let kind;
  if (kind$46$opt === undefined) {
    kind = 0;
  } else {
    const _Some = kind$46$opt;
    kind = _Some;
  }
  return _M0FP319moonbit_2dcommunity7rabbita3cmd19raw__effect_2einner(callback, kind);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd5delay(cmd, ms) {
  return _M0FP319moonbit_2dcommunity7rabbita3cmd11raw__effect((scheduler) => {
    _M0FP319moonbit_2dcommunity7rabbita3cmd12set__timeout(() => {
      scheduler.method_table.method_0(scheduler.self, cmd);
    }, ms);
  }, undefined);
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
function _M0FP319moonbit_2dcommunity7rabbita4html11push__label(value, attrs) {
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
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "label", v);
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
function _M0FP319moonbit_2dcommunity7rabbita4html13push__colspan(value, attrs) {
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
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "colspan", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__rowspan(value, attrs) {
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
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "rowspan", _M0MPC13int3Int18to__string_2einner(v, 10));
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__headers(value, attrs) {
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
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "headers", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__abbr(value, attrs) {
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
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "abbr", v);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__scope(value, attrs) {
  let scope;
  _L: {
    if (value === undefined) {
      return;
    } else {
      const _Some = value;
      const _scope = _Some;
      scope = _scope;
      break _L;
    }
  }
  let s;
  switch (scope) {
    case 0: {
      s = "row";
      break;
    }
    case 1: {
      s = "col";
      break;
    }
    case 2: {
      s = "rowgroup";
      break;
    }
    default: {
      s = "colgroup";
    }
  }
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "scope", s);
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
function _M0FP319moonbit_2dcommunity7rabbita4html10h2_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("h2", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10h3_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("h3", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10h4_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("h4", attrs$2, children);
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
function _M0FP319moonbit_2dcommunity7rabbita4html1pGsE(style$46$opt, id, class_, title, hidden, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(style, id, class_, title, hidden, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11nav_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("nav", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14main___2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("main", attrs$2, children);
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
function _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(style, id, class_, title, hidden, for_, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html9push__for(for_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("label", attrs$2, children);
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
function _M0FP319moonbit_2dcommunity7rabbita4html14select_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, disabled, name, multiple, size, required, autofocus, on_change, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(disabled, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__name(name, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__multiple(multiple, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__size(size, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__required(required, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(autofocus, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__change(on_change, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("select", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14option_2einnerGsE(style, id, class_, title, hidden, label, disabled, value, selected, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__label(label, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(disabled, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html25push__value__attr__string(value, attrs$2);
  _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs$2, "selected", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(selected));
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("option", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html6optionGsE(style$46$opt, id, class_, title, hidden, label, disabled, value, selected$46$opt, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  const selected = selected$46$opt === -1 ? false : selected$46$opt;
  return _M0FP319moonbit_2dcommunity7rabbita4html14option_2einnerGsE(style, id, class_, title, hidden, label, disabled, value, selected, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13table_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("table", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13thead_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("thead", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13tbody_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("tbody", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10tr_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("tr", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10td_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, colspan, rowspan, headers, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__colspan(colspan, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__rowspan(rowspan, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__headers(headers, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("td", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10td_2einnerGsE(style, id, colspan, rowspan, headers, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__colspan(colspan, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__rowspan(rowspan, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__headers(headers, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("td", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10th_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, abbr, colspan, rowspan, headers, scope, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__colspan(colspan, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__rowspan(rowspan, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__headers(headers, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__abbr(abbr, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__scope(scope, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("th", attrs$2, children);
}
function _M0IPC16string6StringP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(str) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array([_M0FP319moonbit_2dcommunity7rabbita4html4text(str)]);
}
function _M0IPC15array5ArrayP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(self) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array(_M0MPC15array5Array3mapGRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self, (x) => x));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs14on__mouseenter(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "mouseenter", msg);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs14on__mouseleave(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "mouseleave", msg);
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
function _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4stepGRP48bobzhang7gallery8frontend3app5ModelRP48bobzhang7gallery8frontend3app3MsgE(self, scheduler) {
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
function _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell4viewGRP48bobzhang7gallery8frontend3app5ModelRP48bobzhang7gallery8frontend3app3MsgE(self) {
  const _func = self.view;
  return _func(self.dispatch, self.model.val);
}
function _M0IP219moonbit_2dcommunity7rabbita9TypedCellP419moonbit_2dcommunity7rabbita8internal7runtime6IsCell5flagsGRP48bobzhang7gallery8frontend3app5ModelRP48bobzhang7gallery8frontend3app3MsgE(self) {
  return self.flags;
}
function _M0MP219moonbit_2dcommunity7rabbita10Dispatcher7messageGRP48bobzhang7gallery8frontend3app3MsgE(self, msg) {
  return _M0FP419moonbit_2dcommunity7rabbita8internal7runtime7message(self.id, () => {
    _M0MPC15queue5Queue4pushGWRP419moonbit_2dcommunity7rabbita8internal7runtime9SchedulerEuE(self.inbox, msg);
  });
}
function _M0FP219moonbit_2dcommunity7rabbita20cell__with__dispatchGRP48bobzhang7gallery8frontend3app5ModelRP48bobzhang7gallery8frontend3app3MsgE(model, update, view) {
  const flags = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags3new();
  const dispatcher = new _M0TP219moonbit_2dcommunity7rabbita10DispatcherGRP48bobzhang7gallery8frontend3app3MsgE(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Flags2id(flags), _M0MPC15queue5Queue3newGRP48bobzhang7gallery8frontend3app3MsgE());
  const dispatch = (m) => _M0MP219moonbit_2dcommunity7rabbita10Dispatcher7messageGRP48bobzhang7gallery8frontend3app3MsgE(dispatcher, m);
  const model$2 = _M0FPC13ref3newGRP48bobzhang7gallery8frontend3app5ModelE(model);
  return { _0: dispatch, _1: { self: new _M0TP219moonbit_2dcommunity7rabbita9TypedCellGRP48bobzhang7gallery8frontend3app5ModelRP48bobzhang7gallery8frontend3app3MsgE(model$2, dispatcher, dispatch, update, view, flags), method_table: _M0FP0207moonbit_2dcommunity_2frabbita_2fTypedCell_5bbobzhang_2fgallery_2ffrontend_2fapp_2fModel_2c_20bobzhang_2fgallery_2ffrontend_2fapp_2fMsg_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eIsCell } };
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
function _M0FP319moonbit_2dcommunity7rabbita3svg7push__x(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__attr__int("x", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg7push__y(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__attr__int("y", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg8push__rx(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__attr__int("rx", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg8push__ry(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__attr__int("ry", value, attrs);
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
function _M0FP319moonbit_2dcommunity7rabbita3svg8push__dx(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__attr__int("dx", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg8push__dy(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__attr__int("dy", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg12push__rotate(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string("rotate", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg20push__length__adjust(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string("lengthAdjust", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg18push__text__length(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__attr__int("textLength", value, attrs);
}
function _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs8property(self, key, value) {
  _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self.props, key, value);
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita3svg19push__text__content(value, attrs) {
  _M0MP319moonbit_2dcommunity7rabbita3svg5Attrs8property(attrs, "textContent", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String(value));
}
function _M0FP319moonbit_2dcommunity7rabbita3svg15push__transform(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string("transform", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg13push__opacity(value, attrs) {
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__attr__string("opacity", value, attrs);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg4rect(id, class_, style, x, y, width, height, rx, ry, fill, stroke, stroke_width, transform, opacity, attrs) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita3svg14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita3svg7push__x(x, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg7push__y(y, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg11push__width(width, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg12push__height(height, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg8push__rx(rx, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg8push__ry(ry, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg10push__fill(fill, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg12push__stroke(stroke, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg19push__stroke__width(stroke_width, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__transform(transform, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg13push__opacity(opacity, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg8push__id(id, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg11push__style(style, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita3svg4node("rect", attrs$2, [], undefined);
}
function _M0FP319moonbit_2dcommunity7rabbita3svg9svg__text(id, class_, style, x, y, text, dx, dy, rotate, length_adjust, text_length, fill, stroke, stroke_width, transform, opacity, attrs) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita3svg14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita3svg7push__x(x, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg7push__y(y, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg19push__text__content(text, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg8push__dx(dx, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg8push__dy(dy, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg12push__rotate(rotate, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg20push__length__adjust(length_adjust, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg18push__text__length(text_length, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg10push__fill(fill, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg12push__stroke(stroke, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg19push__stroke__width(stroke_width, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg15push__transform(transform, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg13push__opacity(opacity, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg8push__id(id, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita3svg11push__style(style, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita3svg4node("text", attrs$2, [], undefined);
}
function _M0IP48bobzhang7gallery8frontend3app7SectionPB2Eq5equal(_x_706, _x_707) {
  switch (_x_706) {
    case 0: {
      if (_x_707 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_707 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_707 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_707 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_707 === 4) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_707 === 5) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0MP48bobzhang7gallery8frontend3app5Model11view__toast(self, dispatch) {
  const _tmp = ["display: flex", "flex-direction: column", "gap: 12px"];
  const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Toast Notifications");
  const _tmp$3 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-wrap: wrap", "gap: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 8px 16px", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7success)}`, "color: white", "border: none", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "cursor: pointer", "font-size: 14px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg9ShowToast("Success", "Operation completed.", "success")), undefined, "Success"), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 8px 16px", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7warning)}`, "color: white", "border: none", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "cursor: pointer", "font-size: 14px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg9ShowToast("Warning", "Please review.", "warning")), undefined, "Warning"), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 8px 16px", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6danger)}`, "color: white", "border: none", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "cursor: pointer", "font-size: 14px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg9ShowToast("Error", "Something went wrong.", "error")), undefined, "Error"), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app10btn__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg9ShowToast("Info", "Here is some info.", "info")), undefined, "Info")]);
  let _tmp$4;
  if (self.toast.items.length > 0) {
    const n = self.toast.items.length;
    _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 13px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`], undefined, undefined, undefined, -1, undefined, `${_M0IP016_24default__implPB4Show10to__stringGiE(n)} toast(s) active`);
  } else {
    _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 13px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`], undefined, undefined, undefined, -1, undefined, "Click a button to show a toast");
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _tmp$3, _tmp$4]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model22view__toast__container(self, dispatch) {
  if (self.toast.items.length === 0) {
    return _M0FP319moonbit_2dcommunity7rabbita4html7nothing;
  }
  const _tmp = ["position: fixed", "top: 20px", "right: 20px", "z-index: 9999", "display: flex", "flex-direction: column", "gap: 10px"];
  const toast_els = [];
  const _bind = self.toast.items;
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$2) {
      const item = _bind[_];
      const _bind$3 = item.kind;
      let border_color;
      switch (_bind$3) {
        case "success": {
          border_color = _M0FP48bobzhang7gallery8frontend3app7success;
          break;
        }
        case "warning": {
          border_color = _M0FP48bobzhang7gallery8frontend3app7warning;
          break;
        }
        case "error": {
          border_color = _M0FP48bobzhang7gallery8frontend3app6danger;
          break;
        }
        default: {
          border_color = _M0FP48bobzhang7gallery8frontend3app7primary;
        }
      }
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(toast_els, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([`background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7surface)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "box-shadow: 0 4px 20px rgba(0,0,0,0.12)", `border-left: 4px solid ${_M0IPC16string6StringPB4Show10to__string(border_color)}`, "padding: 12px 16px", "min-width: 260px", "display: flex", "align-items: flex-start", "gap: 10px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["flex: 1"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(["margin: 0 0 2px", "font-weight: 600", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, item.title), _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(["margin: 0", "font-size: 13px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app15text__secondary)}`], undefined, undefined, undefined, -1, undefined, item.message)]), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["background: none", "border: none", "cursor: pointer", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`, "font-size: 16px", "padding: 0"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg12DismissToast(item.id)), undefined, "x")]));
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, toast_els);
}
function _M0MP48bobzhang7gallery8frontend3app5Model11view__modal(self, dispatch) {
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "gap: 12px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Modal Dialog"), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app10btn__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg9ModalOpen__), undefined, "Open Modal"), self.modal.confirmed ? _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7success)}`, "font-weight: 600"], undefined, undefined, undefined, -1, undefined, "Action confirmed!") : _M0FP319moonbit_2dcommunity7rabbita4html7nothing]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model20view__modal__overlay(self, dispatch) {
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["position: fixed", "inset: 0", "background: rgba(0,0,0,0.5)", "z-index: 8000", "display: flex", "align-items: center", "justify-content: center"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([`background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7surface)}`, "border-radius: 12px", "box-shadow: 0 8px 40px rgba(0,0,0,0.2)", "padding: 28px 32px", "max-width: 400px", "width: 90%", "display: flex", "flex-direction: column", "gap: 16px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html10h2_2einnerGsE(["margin: 0", "font-size: 18px", "font-weight: 700", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, self.modal.title), _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(["margin: 0", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app15text__secondary)}`, "line-height: 1.6"], undefined, undefined, undefined, -1, undefined, self.modal.message), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "justify-content: flex-end", "gap: 10px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app19btn__outline__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg10ModalClose__), undefined, "Cancel"), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 8px 16px", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6danger)}`, "color: white", "border: none", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "cursor: pointer", "font-size: 14px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg12ModalConfirm__), undefined, "Confirm")])])]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model22view__command__palette(self, dispatch) {
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "gap: 12px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Command Palette"), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app19btn__outline__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg20CommandPaletteToggle__), undefined, "Open Command Palette"), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`], undefined, undefined, undefined, -1, undefined, "Click to open, type to search actions")]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model31view__command__palette__overlay(self, dispatch) {
  const cp = self.command_palette;
  const filtered = [];
  const _bind = cp.actions;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const action = _bind[_];
      const q = _M0MPC16string6String9to__lower(cp.query);
      if (q === "" || (_M0MPC16string6String8contains(_M0MPC16string6String9to__lower(action.label), new _M0TPC16string10StringView(q, 0, q.length)) || _M0MPC16string6String8contains(_M0MPC16string6String9to__lower(action.category), new _M0TPC16string10StringView(q, 0, q.length)))) {
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(filtered, action);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$2 = ["position: fixed", "inset: 0", "background: rgba(0,0,0,0.5)", "z-index: 8500", "display: flex", "align-items: flex-start", "justify-content: center", "padding-top: 80px"];
  const _tmp$3 = [`background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7surface)}`, "border-radius: 12px", "box-shadow: 0 12px 48px rgba(0,0,0,0.2)", "width: 90%", "max-width: 520px", "overflow: hidden"];
  const _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["padding: 12px 16px", `border-bottom: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, "display: flex", "align-items: center", "gap: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([`color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`, "font-size: 14px"], undefined, undefined, undefined, -1, undefined, "Search"), _M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, cp.query, -1, -1, -1, undefined, "Search actions...", undefined, ["flex: 1", "border: none", "outline: none", "font-size: 15px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`, "background: transparent"], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (s) => dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg20CommandPaletteSearch(s)), undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["background: none", "border: none", "cursor: pointer", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`, "font-size: 14px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg20CommandPaletteToggle__), undefined, "Close")]);
  const _tmp$5 = ["max-height: 320px", "overflow-y: auto"];
  const action_els = [];
  if (filtered.length === 0) {
    _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(action_els, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["padding: 20px", "text-align: center", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`, "font-size: 14px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "No actions found"));
  } else {
    const _bind$3 = filtered.length;
    let _tmp$6 = 0;
    while (true) {
      const i = _tmp$6;
      if (i < _bind$3) {
        const action = filtered[i];
        const is_focused = i === cp.focus_index;
        const item_bg = is_focused ? _M0FP48bobzhang7gallery8frontend3app14primary__light : _M0FP48bobzhang7gallery8frontend3app7surface;
        const item_fg = is_focused ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app13text__primary;
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(action_els, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["display: flex", "align-items: center", "justify-content: space-between", "width: 100%", "padding: 10px 16px", "border: none", `background: ${_M0IPC16string6StringPB4Show10to__string(item_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(item_fg)}`, "font-size: 14px", "cursor: pointer", "text-align: left"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg20CommandPaletteSelect(action.id)), undefined, action.label));
        _tmp$6 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$2, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$3, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$4, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$5, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, action_els)])]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model10view__tabs(self, dispatch) {
  const _tmp = [`border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "overflow: hidden"];
  const _tmp$2 = ["display: flex", `border-bottom: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7surface)}`];
  const headers = [];
  const _bind = self.tabs.tabs;
  const _bind$2 = _bind.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$2) {
      const tab = _bind[i];
      const is_active = i === self.tabs.active;
      const bb = is_active ? _M0FP48bobzhang7gallery8frontend3app7primary : "transparent";
      const fg = is_active ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app15text__secondary;
      const fw = is_active ? "600" : "400";
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(headers, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 10px 20px", "cursor: pointer", "border: none", `border-bottom: 3px solid ${_M0IPC16string6StringPB4Show10to__string(bb)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7surface)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(fg)}`, `font-weight: ${_M0IPC16string6StringPB4Show10to__string(fw)}`, "font-size: 14px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg11TabSelected(i)), undefined, tab._0));
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$2, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, headers), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["padding: 20px", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7surface)}`, "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`, "line-height: 1.6"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, self.tabs.active < self.tabs.tabs.length ? _M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(self.tabs.tabs, self.tabs.active)._1 : "")]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model15view__accordion(self, dispatch) {
  const _tmp = [`border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "overflow: hidden"];
  const acc_items = [];
  const _bind = self.accordion.items;
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$2) {
      const item = _bind[i];
      const is_open = i === self.accordion.open_index;
      if (i > 0) {
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(acc_items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE([`border-top: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""));
      }
      const hdr_bg = is_open ? _M0FP48bobzhang7gallery8frontend3app14primary__light : _M0FP48bobzhang7gallery8frontend3app7surface;
      const hdr_color = is_open ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app13text__primary;
      const hdr_fw = is_open ? "600" : "400";
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(acc_items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["display: flex", "justify-content: space-between", "align-items: center", "width: 100%", "padding: 14px 18px", "cursor: pointer", `background: ${_M0IPC16string6StringPB4Show10to__string(hdr_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(hdr_color)}`, `font-weight: ${_M0IPC16string6StringPB4Show10to__string(hdr_fw)}`, "font-size: 14px", "border: none", "text-align: left"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg15AccordionToggle(i)), undefined, item._0), is_open ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["padding: 14px 18px", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7surface)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app15text__secondary)}`, "font-size: 14px", "line-height: 1.6", `border-top: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, item._1) : _M0FP319moonbit_2dcommunity7rabbita4html7nothing]));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, acc_items);
}
function _M0MP48bobzhang7gallery8frontend3app5Model16view__breadcrumb(self, dispatch) {
  const _tmp = ["padding: 12px 16px", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7surface)}`, `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`];
  const _tmp$2 = ["display: flex", "align-items: center", "gap: 4px", "flex-wrap: wrap"];
  const crumbs = [];
  const path = self.breadcrumb.path;
  const _bind = path.length;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind) {
      const segment = path[i];
      const is_last = i === (path.length - 1 | 0);
      if (i > 0) {
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(crumbs, _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([`color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`, "font-size: 14px"], undefined, undefined, undefined, -1, undefined, "/"));
      }
      if (is_last) {
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(crumbs, _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 14px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, segment));
      } else {
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(crumbs, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["background: none", "border: none", "padding: 0", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7primary)}`, "cursor: pointer", "text-decoration: underline"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg18BreadcrumbNavigate(i)), undefined, segment));
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11nav_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$2, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, crumbs)]);
}
function _M0FP48bobzhang7gallery8frontend3app16view__tree__node(node, expanded, dispatch, depth) {
  const is_expanded = _M0MPC15array5Array8containsGiE(expanded, node.id);
  const has_children = node.children.length > 0;
  const indent = Math.imul(depth, 20) | 0;
  const icon = !has_children ? "." : is_expanded ? "v" : ">";
  const _tmp = [`padding-left: ${_M0IP016_24default__implPB4Show10to__stringGiE(indent)}px`];
  const _tmp$2 = has_children ? _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["display: flex", "align-items: center", "gap: 6px", "background: none", "border: none", "padding: 4px 8px", "cursor: pointer", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`, "width: 100%", "text-align: left"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg10TreeToggle(node.id)), undefined, `${_M0IPC16string6StringPB4Show10to__string(icon)} ${_M0IPC16string6StringPB4Show10to__string(node.label)}`) : _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["display: flex", "align-items: center", "gap: 6px", "padding: 4px 8px", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app15text__secondary)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `${_M0IPC16string6StringPB4Show10to__string(icon)} ${_M0IPC16string6StringPB4Show10to__string(node.label)}`);
  let _tmp$3;
  if (has_children && is_expanded) {
    const _tmp$4 = [];
    const child_els = [];
    const _bind = node.children;
    const _bind$2 = _bind.length;
    let _tmp$5 = 0;
    while (true) {
      const _ = _tmp$5;
      if (_ < _bind$2) {
        const child = _bind[_];
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(child_els, _M0FP48bobzhang7gallery8frontend3app16view__tree__node(child, expanded, dispatch, depth + 1 | 0));
        _tmp$5 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _tmp$3 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$4, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, child_els);
  } else {
    _tmp$3 = _M0FP319moonbit_2dcommunity7rabbita4html7nothing;
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _tmp$3]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model16view__tree__view(self, dispatch) {
  const _tmp = [`border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "padding: 8px", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7surface)}`];
  const roots = [];
  const _bind = self.tree_view.roots;
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$2) {
      const root = _bind[_];
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(roots, _M0FP48bobzhang7gallery8frontend3app16view__tree__node(root, self.tree_view.expanded, dispatch, 0));
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, roots);
}
function _M0MP48bobzhang7gallery8frontend3app5Model17view__text__input(self, dispatch) {
  const _tmp = ["display: flex", "flex-direction: column", "gap: 8px"];
  const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Text Input");
  const _tmp$3 = _M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, self.text_input.value, -1, -1, -1, undefined, "Type something...", undefined, _M0FP48bobzhang7gallery8frontend3app12input__style, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (s) => dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg16TextInputChanged(s)), undefined, "");
  let _tmp$4;
  if (_M0IP016_24default__implPB2Eq10not__equalGsE(self.text_input.error, "")) {
    _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([`color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6danger)}`, "font-size: 12px"], undefined, undefined, undefined, -1, undefined, self.text_input.error);
  } else {
    const n = _M0MPC16string6String20char__length_2einner(self.text_input.value, 0, undefined);
    _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([`color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`, "font-size: 12px"], undefined, undefined, undefined, -1, undefined, `${_M0IP016_24default__implPB4Show10to__stringGiE(n)} chars`);
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _tmp$3, _tmp$4]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model16view__text__area(self, dispatch) {
  const remaining = self.text_area.max_chars - _M0MPC16string6String20char__length_2einner(self.text_area.value, 0, undefined) | 0;
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "gap: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Text Area"), _M0FP319moonbit_2dcommunity7rabbita4html16textarea_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12input__style, undefined, undefined, undefined, -1, undefined, self.text_area.value, 4, undefined, undefined, -1, -1, undefined, undefined, -1, -1, undefined, undefined, (s) => dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg15TextAreaChanged(s)), undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([`color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`, "font-size: 12px", "text-align: right"], undefined, undefined, undefined, -1, undefined, `${_M0IP016_24default__implPB4Show10to__stringGiE(remaining)} characters remaining`)]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model14view__checkbox(self, dispatch) {
  const _tmp = ["display: flex", "flex-direction: column", "gap: 12px"];
  const items = [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Checkboxes")];
  const _bind = self.checkbox.items;
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$2) {
      const pair = _bind[i];
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(items, _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 8px", "cursor: pointer", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(1, undefined, undefined, pair._1, -1, -1, undefined, undefined, undefined, ["cursor: pointer"], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, (_discard_) => dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg15CheckboxToggled(i)), undefined, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([], undefined, undefined, undefined, -1, undefined, pair._0)]));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, items);
}
function _M0MP48bobzhang7gallery8frontend3app5Model11view__radio(self, dispatch) {
  const _tmp = ["display: flex", "flex-direction: column", "gap: 12px"];
  const items = [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Radio Group")];
  const _bind = self.radio.options;
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$2) {
      const opt = _bind[_];
      const is_sel = opt === self.radio.selected;
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(items, _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 8px", "cursor: pointer", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(12, undefined, undefined, is_sel, -1, -1, undefined, undefined, undefined, ["cursor: pointer"], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, (_discard_) => dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg13RadioSelected(opt)), undefined, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([], undefined, undefined, undefined, -1, undefined, opt)]));
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, items);
}
function _M0MP48bobzhang7gallery8frontend3app5Model12view__select(self, dispatch) {
  const _tmp = ["display: flex", "flex-direction: column", "gap: 8px"];
  const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Select");
  const opts = [_M0FP319moonbit_2dcommunity7rabbita4html6optionGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, -1, "", self.select.selected === "", undefined, "-- Choose --")];
  const _bind = self.select.options;
  const _bind$2 = _bind.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$2) {
      const opt = _bind[_];
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(opts, _M0FP319moonbit_2dcommunity7rabbita4html6optionGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, -1, opt, opt === self.select.selected, undefined, opt));
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _M0FP319moonbit_2dcommunity7rabbita4html14select_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0FP48bobzhang7gallery8frontend3app12input__style, undefined, undefined, undefined, -1, -1, undefined, -1, undefined, -1, -1, (v) => dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg13SelectChanged(v)), undefined, opts), _M0IP016_24default__implPB2Eq10not__equalGsE(self.select.selected, "") ? _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([`color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app15text__secondary)}`, "font-size: 13px"], undefined, undefined, undefined, -1, undefined, `Selected: ${_M0IPC16string6StringPB4Show10to__string(self.select.selected)}`) : _M0FP319moonbit_2dcommunity7rabbita4html7nothing]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model12view__toggle(self, dispatch) {
  const _tmp = ["display: flex", "flex-direction: column", "gap: 12px"];
  const items = [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Toggle Switches")];
  const _bind = self.toggle.items;
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$2) {
      const pair = _bind[i];
      const on = pair._1;
      const track_color = on ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app6border;
      const label = on ? "ON" : "OFF";
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "justify-content: space-between", "padding: 8px 0"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, pair._0), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["width: 44px", "height: 24px", "border-radius: 12px", "border: none", "cursor: pointer", "font-size: 10px", "color: white", `background: ${_M0IPC16string6StringPB4Show10to__string(track_color)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg14ToggleSwitched(i)), undefined, label)]));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, items);
}
function _M0MP48bobzhang7gallery8frontend3app5Model12view__slider(self, dispatch) {
  const v = self.slider.value;
  const lo = self.slider.min;
  const hi = self.slider.max;
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "gap: 12px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Slider"), _M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(13, undefined, _M0IP016_24default__implPB4Show10to__stringGiE(v), -1, -1, -1, undefined, undefined, undefined, ["width: 100%", "cursor: pointer"], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (s) => dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg13SliderChanged(s)), undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "justify-content: space-between", "font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([], undefined, undefined, undefined, -1, undefined, _M0IP016_24default__implPB4Show10to__stringGiE(lo)), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7primary)}`], undefined, undefined, undefined, -1, undefined, _M0IP016_24default__implPB4Show10to__stringGiE(v)), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([], undefined, undefined, undefined, -1, undefined, _M0IP016_24default__implPB4Show10to__stringGiE(hi))])]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model19view__color__picker(self, dispatch) {
  const _tmp = ["display: flex", "flex-direction: column", "gap: 12px"];
  const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Color Picker");
  const _tmp$3 = ["display: flex", "flex-wrap: wrap", "gap: 8px"];
  const swatches = [];
  const _bind = self.color_picker.swatches;
  const _bind$2 = _bind.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$2) {
      const c = _bind[_];
      const bw = c === self.color_picker.selected ? "3" : "1";
      const bc = c === self.color_picker.selected ? _M0FP48bobzhang7gallery8frontend3app13text__primary : "transparent";
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(swatches, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["width: 32px", "height: 32px", "border-radius: 50%", "cursor: pointer", `border: ${_M0IPC16string6StringPB4Show10to__string(bw)}px solid ${_M0IPC16string6StringPB4Show10to__string(bc)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(c)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg18ColorSwatchClicked(c)), undefined, ""));
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$3, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, swatches), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["width: 32px", "height: 32px", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app10radius__sm)}`, `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(self.color_picker.selected)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, self.color_picker.hex_input, -1, -1, -1, undefined, undefined, undefined, ["width: 120px", "padding: 6px 10px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app10radius__sm)}`, "font-size: 13px", "font-family: monospace"], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (s) => dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg15ColorHexChanged(s)), undefined, "")])]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model12view__avatar(self, dispatch) {
  const _tmp = ["display: flex", "flex-direction: column", "gap: 16px"];
  const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Avatars");
  const _tmp$3 = ["display: flex", "gap: 12px", "flex-wrap: wrap", "align-items: center"];
  const avatars = [];
  const _bind = self.avatar.users;
  const _bind$2 = _bind.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$2) {
      const user = _bind[_];
      const name = user._0;
      const color = user._1;
      const online = user._2;
      const initial = _M0MPC16string6String17substring_2einner(name, 0, 1);
      const status_color = online ? _M0FP48bobzhang7gallery8frontend3app7success : "#9ca3af";
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(avatars, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "align-items: center", "gap: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["position: relative", "display: inline-block"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["width: 48px", "height: 48px", "border-radius: 50%", `background: ${_M0IPC16string6StringPB4Show10to__string(color)}`, "display: flex", "align-items: center", "justify-content: center", "font-size: 18px", "font-weight: 700", "color: white"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, initial), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["position: absolute", "bottom: 2px", "right: 2px", "width: 12px", "height: 12px", "border-radius: 50%", `background: ${_M0IPC16string6StringPB4Show10to__string(status_color)}`, "border: 2px solid white"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "")]), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 11px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`], undefined, undefined, undefined, -1, undefined, name)]));
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$3, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, avatars)]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model11view__badge(self, dispatch) {
  const _tmp = ["display: flex", "flex-direction: column", "gap: 16px"];
  const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Badges");
  const _tmp$3 = ["display: flex", "gap: 16px", "flex-wrap: wrap", "align-items: flex-start"];
  const badges = [];
  const _bind = self.badge.counts;
  const _bind$2 = _bind.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$2) {
      const pair = _bind[_];
      const lbl = pair._0;
      const count = pair._1;
      const count_str = count > 99 ? "99+" : _M0IP016_24default__implPB4Show10to__stringGiE(count);
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(badges, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["position: relative", "display: inline-block"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 8px 16px", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7surface)}`, `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`, "cursor: pointer"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, undefined, undefined, lbl), count > 0 ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["position: absolute", "top: -8px", "right: -8px", "min-width: 20px", "height: 20px", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app12radius__full)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6danger)}`, "color: white", "font-size: 11px", "font-weight: 700", "display: flex", "align-items: center", "justify-content: center", "padding: 0 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, count_str) : _M0FP319moonbit_2dcommunity7rabbita4html7nothing]));
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$3, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, badges)]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model14view__progress(self, dispatch) {
  const pct = self.progress.value;
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "gap: 12px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "justify-content: space-between", "align-items: center"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Progress Bar"), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 14px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7primary)}`], undefined, undefined, undefined, -1, undefined, `${_M0IP016_24default__implPB4Show10to__stringGiE(pct)}%`)]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["width: 100%", "height: 10px", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app12radius__full)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app12surface__alt)}`, "overflow: hidden", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["height: 100%", `width: ${_M0IP016_24default__implPB4Show10to__stringGiE(pct)}%`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app12radius__full)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7primary)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "")]), _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Adjust:"), _M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(13, undefined, _M0IP016_24default__implPB4Show10to__stringGiE(pct), -1, -1, -1, undefined, undefined, undefined, ["width: 100%", "cursor: pointer"], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (s) => dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg15ProgressChanged(s)), undefined, "")]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model13view__tooltip(self, dispatch) {
  const tips = [{ _0: "Copy", _1: "Copy to clipboard" }, { _0: "Share", _1: "Share this link" }, { _0: "Save", _1: "Save for later" }, { _0: "Delete", _1: "Remove this item" }];
  const _tmp = ["display: flex", "flex-direction: column", "gap: 16px"];
  const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Tooltips (hover)");
  const _tmp$3 = ["display: flex", "gap: 12px", "flex-wrap: wrap"];
  const tooltip_items = [];
  const _bind = tips.length;
  let _tmp$4 = 0;
  while (true) {
    const i = _tmp$4;
    if (i < _bind) {
      const tip = tips[i];
      const lbl = tip._0;
      const text = tip._1;
      const active = self.tooltip.active_index === i;
      const btn_bg = active ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app7surface;
      const btn_color = active ? "white" : _M0FP48bobzhang7gallery8frontend3app13text__primary;
      const btn_border = active ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app6border;
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(tooltip_items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["position: relative", "display: inline-block"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, _M0MP319moonbit_2dcommunity7rabbita4html5Attrs14on__mouseleave(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs14on__mouseenter(_M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build(), (_discard_) => dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg11TooltipShow(i))), (_discard_) => dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg11TooltipHide__)), [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 8px 16px", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(btn_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(btn_color)}`, `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(btn_border)}`, "font-size: 14px", "cursor: pointer"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, undefined, undefined, lbl)]), active ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["position: absolute", "bottom: calc(100% + 8px)", "left: 50%", "transform: translateX(-50%)", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`, "color: white", "font-size: 12px", "padding: 6px 10px", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app10radius__sm)}`, "white-space: nowrap", "z-index: 100"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, text) : _M0FP319moonbit_2dcommunity7rabbita4html7nothing]));
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$3, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, tooltip_items)]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model9view__tag(self, dispatch) {
  const _tmp = ["display: flex", "flex-direction: column", "gap: 12px"];
  const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Tags");
  const _tmp$3 = ["display: flex", "flex-wrap: wrap", "gap: 8px", "min-height: 32px"];
  const tag_els = [];
  const _bind = self.tag.tags;
  const _bind$2 = _bind.length;
  let _tmp$4 = 0;
  while (true) {
    const i = _tmp$4;
    if (i < _bind$2) {
      const t = _bind[i];
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(tag_els, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: inline-flex", "align-items: center", "gap: 6px", "padding: 4px 10px", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app12radius__full)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app14primary__light)}`, `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7primary)}`, "font-size: 13px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7primary)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([], undefined, undefined, undefined, -1, undefined, t), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["background: none", "border: none", "padding: 0 2px", "cursor: pointer", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7primary)}`, "font-size: 14px", "line-height: 1"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg9TagRemove(i)), undefined, "x")]));
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$3, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, tag_els), _M0FP319moonbit_2dcommunity7rabbita4html12form_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 8px"], undefined, undefined, undefined, -1, undefined, undefined, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg6TagAdd__), undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, self.tag.input, -1, -1, -1, undefined, "New tag...", undefined, _M0FP48bobzhang7gallery8frontend3app12input__style, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (s) => dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg15TagInputChanged(s)), undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app10btn__style, undefined, undefined, undefined, -1, "submit", -1, undefined, undefined, -1, undefined, undefined, "Add")])]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model14view__skeleton(self, dispatch) {
  const btn_label = self.skeleton.loading ? "Show Content" : "Show Skeleton";
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "gap: 16px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "justify-content: space-between"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Skeleton Loading"), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app14btn__sm__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg14SkeletonToggle__), undefined, btn_label)]), self.skeleton.loading ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "gap: 12px", "padding: 16px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 12px", "align-items: center"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["width: 48px", "height: 48px", "border-radius: 50%", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, "flex-shrink: 0"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["flex: 1", "display: flex", "flex-direction: column", "gap: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["height: 14px", "width: 60%", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app10radius__sm)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["height: 12px", "width: 40%", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app10radius__sm)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "")])]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["height: 14px", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app10radius__sm)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["height: 14px", "width: 85%", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app10radius__sm)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["height: 14px", "width: 70%", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app10radius__sm)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "")]) : _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["padding: 16px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 12px", "align-items: center", "margin-bottom: 12px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["width: 48px", "height: 48px", "border-radius: 50%", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7primary)}`, "display: flex", "align-items: center", "justify-content: center", "color: white", "font-weight: 700", "font-size: 18px", "flex-shrink: 0"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "A"), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["flex: 1"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(["margin: 0 0 4px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, "Alice Johnson"), _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(["margin: 0", "font-size: 13px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`], undefined, undefined, undefined, -1, undefined, "Software Engineer")])]), _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(["margin: 0", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app15text__secondary)}`, "line-height: 1.6"], undefined, undefined, undefined, -1, undefined, "Building great user experiences with MoonBit and Rabbita.")])]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model18view__empty__state(self, dispatch) {
  const btn_label = self.empty_state.has_data ? "Clear Data" : "Load Data";
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "gap: 16px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "justify-content: space-between"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Empty State"), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app14btn__sm__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg16EmptyStateToggle__), undefined, btn_label)]), !self.empty_state.has_data ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "align-items: center", "padding: 40px 24px", `border: 2px dashed ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "text-align: center", "gap: 12px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-size: 48px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "📭"), _M0FP319moonbit_2dcommunity7rabbita4html10h3_2einnerGsE(["margin: 0", "font-size: 18px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, "Nothing here yet"), _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(["margin: 0", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`], undefined, undefined, undefined, -1, undefined, "Add items to get started."), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app10btn__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg16EmptyStateToggle__), undefined, "Add Item")]) : _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "gap: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["padding: 12px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Item 1"), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["padding: 12px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Item 2"), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["padding: 12px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Item 3")])]);
}
function _M0FP48bobzhang7gallery8frontend3app15days__in__month(year, month) {
  switch (month) {
    case 1: {
      return 31;
    }
    case 3: {
      return 31;
    }
    case 5: {
      return 31;
    }
    case 7: {
      return 31;
    }
    case 8: {
      return 31;
    }
    case 10: {
      return 31;
    }
    case 12: {
      return 31;
    }
    case 4: {
      return 30;
    }
    case 6: {
      return 30;
    }
    case 9: {
      return 30;
    }
    case 11: {
      return 30;
    }
    case 2: {
      let _tmp;
      if (4 === 0) {
        $panic();
      }
      if ((year % 4 | 0) === 0) {
        let _tmp$2;
        if (100 === 0) {
          $panic();
        }
        if ((year % 100 | 0) !== 0) {
          _tmp$2 = true;
        } else {
          if (400 === 0) {
            $panic();
          }
          _tmp$2 = (year % 400 | 0) === 0;
        }
        _tmp = _tmp$2;
      } else {
        _tmp = false;
      }
      if (_tmp) {
        return 29;
      } else {
        return 28;
      }
    }
    default: {
      return 30;
    }
  }
}
function _M0FP48bobzhang7gallery8frontend3app13day__of__week(year, month, day) {
  const m = month < 3 ? month + 12 | 0 : month;
  const y = month < 3 ? year - 1 | 0 : year;
  if (100 === 0) {
    $panic();
  }
  const k = y % 100 | 0;
  if (100 === 0) {
    $panic();
  }
  const j = y / 100 | 0;
  if (5 === 0) {
    $panic();
  }
  const _tmp = (day + ((Math.imul(13, m + 1 | 0) | 0) / 5 | 0) | 0) + k | 0;
  if (4 === 0) {
    $panic();
  }
  const _tmp$2 = _tmp + (k / 4 | 0) | 0;
  if (4 === 0) {
    $panic();
  }
  if (7 === 0) {
    $panic();
  }
  const h = ((_tmp$2 + (j / 4 | 0) | 0) - (Math.imul(2, j) | 0) | 0) % 7 | 0;
  if (7 === 0) {
    $panic();
  }
  return (h + 5 | 0) % 7 | 0;
}
function _M0FP48bobzhang7gallery8frontend3app21compare__row__by__col(a, b, col) {
  return col === "name" ? (_M0IP016_24default__implPB7Compare6op__ltGsE(a.name, b.name) ? -1 : _M0IP016_24default__implPB7Compare6op__gtGsE(a.name, b.name) ? 1 : 0) : col === "email" ? (_M0IP016_24default__implPB7Compare6op__ltGsE(a.email, b.email) ? -1 : _M0IP016_24default__implPB7Compare6op__gtGsE(a.email, b.email) ? 1 : 0) : col === "role" ? (_M0IP016_24default__implPB7Compare6op__ltGsE(a.role, b.role) ? -1 : _M0IP016_24default__implPB7Compare6op__gtGsE(a.role, b.role) ? 1 : 0) : col === "status" ? (_M0IP016_24default__implPB7Compare6op__ltGsE(a.status, b.status) ? -1 : _M0IP016_24default__implPB7Compare6op__gtGsE(a.status, b.status) ? 1 : 0) : 0;
}
function _M0MP48bobzhang7gallery8frontend3app5Model17view__data__table(self, dispatch) {
  const dt = self.data_table;
  const sorted = _M0MPC15array5Array4copyGRP48bobzhang7gallery8frontend3app10WizardStepE(dt.rows);
  _M0MPC15array5Array8sort__byGRP48bobzhang7gallery8frontend3app8TableRowE(sorted, (a, b) => {
    const cmp = _M0FP48bobzhang7gallery8frontend3app21compare__row__by__col(a, b, dt.sort_col);
    return dt.sort_asc ? cmp : -cmp | 0;
  });
  const total = sorted.length;
  if (dt.page_size === 0) {
    $panic();
  }
  const total_pages = ((total + dt.page_size | 0) - 1 | 0) / dt.page_size | 0;
  const page_start = Math.imul(dt.page, dt.page_size) | 0;
  const page_end = (page_start + dt.page_size | 0) < total ? page_start + dt.page_size | 0 : total;
  const page_rows = _M0MPC15array5Array12view_2einnerGRPC16string10StringViewE(sorted, page_start, page_end);
  const cols = [{ _0: "name", _1: "Name" }, { _0: "email", _1: "Email" }, { _0: "role", _1: "Role" }, { _0: "status", _1: "Status" }];
  const th_style = ["padding: 10px 14px", "text-align: left", "font-size: 12px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app15text__secondary)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app12surface__alt)}`, `border-bottom: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`];
  const th_btn_style = ["background: none", "border: none", "cursor: pointer", "font-size: 12px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app15text__secondary)}`, "padding: 0", "width: 100%", "text-align: left"];
  const td_style = ["padding: 10px 14px", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`, `border-bottom: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`];
  const _tmp = ["display: flex", "flex-direction: column", "gap: 12px"];
  const _tmp$2 = [`border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "overflow: hidden"];
  const _tmp$3 = ["width: 100%", "border-collapse: collapse"];
  const _tmp$4 = [];
  const _tmp$5 = [];
  const headers = [];
  const _bind = cols.length;
  let _tmp$6 = 0;
  while (true) {
    const _ = _tmp$6;
    if (_ < _bind) {
      const col = cols[_];
      const key = col._0;
      const lbl = col._1;
      const arrow = dt.sort_col === key ? (dt.sort_asc ? " ^" : " v") : "";
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(headers, _M0FP319moonbit_2dcommunity7rabbita4html10th_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(th_style, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(th_btn_style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg9TableSort(key)), undefined, `${_M0IPC16string6StringPB4Show10to__string(lbl)}${_M0IPC16string6StringPB4Show10to__string(arrow)}`)]));
      _tmp$6 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$7 = _M0FP319moonbit_2dcommunity7rabbita4html13thead_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$4, undefined, undefined, undefined, -1, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html10tr_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$5, undefined, undefined, undefined, -1, undefined, headers)]);
  const _tmp$8 = [];
  const rows_el = [];
  const _bind$2 = page_rows.end - page_rows.start | 0;
  let _tmp$9 = 0;
  while (true) {
    const i = _tmp$9;
    if (i < _bind$2) {
      const row = page_rows.buf[page_rows.start + i | 0];
      const idx = page_start + i | 0;
      const is_sel = _M0MPC15array5Array8containsGiE(dt.selected, idx);
      const row_bg = is_sel ? _M0FP48bobzhang7gallery8frontend3app14primary__light : _M0FP48bobzhang7gallery8frontend3app7surface;
      const status_color = row.status === "Active" ? _M0FP48bobzhang7gallery8frontend3app7success : _M0FP48bobzhang7gallery8frontend3app6danger;
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(rows_el, _M0FP319moonbit_2dcommunity7rabbita4html10tr_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([`background: ${_M0IPC16string6StringPB4Show10to__string(row_bg)}`], undefined, undefined, undefined, -1, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html10td_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(td_style, undefined, undefined, undefined, undefined, undefined, undefined, -1, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["background: none", "border: none", "cursor: pointer", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`, "padding: 0", "text-align: left"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg14TableToggleRow(idx)), undefined, row.name)]), _M0FP319moonbit_2dcommunity7rabbita4html10td_2einnerGsE(td_style, undefined, undefined, undefined, undefined, undefined, undefined, -1, undefined, row.email), _M0FP319moonbit_2dcommunity7rabbita4html10td_2einnerGsE(td_style, undefined, undefined, undefined, undefined, undefined, undefined, -1, undefined, row.role), _M0FP319moonbit_2dcommunity7rabbita4html10td_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(td_style, undefined, undefined, undefined, undefined, undefined, undefined, -1, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["padding: 2px 8px", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app12radius__full)}`, "font-size: 12px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(status_color)}`], undefined, undefined, undefined, -1, undefined, row.status)])]));
      _tmp$9 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$2, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13table_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$3, undefined, undefined, undefined, -1, undefined, [_tmp$7, _M0FP319moonbit_2dcommunity7rabbita4html13tbody_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$8, undefined, undefined, undefined, -1, undefined, rows_el)])]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "justify-content: space-between", "font-size: 13px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app15text__secondary)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE([], undefined, undefined, undefined, -1, undefined, `Showing ${_M0IP016_24default__implPB4Show10to__stringGiE(page_start + 1 | 0)}-${_M0IP016_24default__implPB4Show10to__stringGiE(page_end)} of ${_M0IP016_24default__implPB4Show10to__stringGiE(total)}`), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app19btn__outline__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg9TablePage(dt.page - 1 | 0)), undefined, "Prev"), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["padding: 6px 12px"], undefined, undefined, undefined, -1, undefined, `Page ${_M0IP016_24default__implPB4Show10to__stringGiE(dt.page + 1 | 0)} / ${_M0IP016_24default__implPB4Show10to__stringGiE(total_pages)}`), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app19btn__outline__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg9TablePage(dt.page + 1 | 0)), undefined, "Next")])])]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model14view__calendar(self, dispatch) {
  const cal = self.calendar;
  const month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month_name = _M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(month_names, cal.month - 1 | 0);
  const first_dow = _M0FP48bobzhang7gallery8frontend3app13day__of__week(cal.year, cal.month, 1);
  const num_days = _M0FP48bobzhang7gallery8frontend3app15days__in__month(cal.year, cal.month);
  const day_labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const _tmp = ["display: flex", "flex-direction: column", "gap: 12px", "max-width: 320px"];
  const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "justify-content: space-between"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app19btn__outline__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg17CalendarPrevMonth__), undefined, "<"), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 16px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, `${_M0IPC16string6StringPB4Show10to__string(month_name)} ${_M0IP016_24default__implPB4Show10to__stringGiE(cal.year)}`), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app19btn__outline__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg17CalendarNextMonth__), undefined, ">")]);
  const _tmp$3 = ["display: grid", "grid-template-columns: repeat(7, 1fr)", "gap: 2px"];
  const cells = [];
  const _bind = day_labels.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind) {
      const dl = day_labels[_];
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(cells, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["text-align: center", "font-size: 11px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`, "padding: 4px 0"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, dl));
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = 0;
  let _tmp$5 = _bind$2;
  while (true) {
    const _ = _tmp$5;
    if (_ < first_dow) {
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(cells, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["padding: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""));
      _tmp$5 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$6 = 1;
  while (true) {
    const day = _tmp$6;
    if (day <= num_days) {
      const is_today = cal.year === cal.today_year && (cal.month === cal.today_month && day === cal.today_day);
      const is_sel = day === cal.selected_day;
      const d = day;
      const btn_bg = is_sel ? _M0FP48bobzhang7gallery8frontend3app7primary : is_today ? _M0FP48bobzhang7gallery8frontend3app14primary__light : "transparent";
      const btn_fg = is_sel ? "white" : is_today ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app13text__primary;
      const btn_fw = is_sel || is_today ? "700" : "400";
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(cells, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["text-align: center", "padding: 6px 0", "border: none", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app10radius__sm)}`, "cursor: pointer", "font-size: 14px", `background: ${_M0IPC16string6StringPB4Show10to__string(btn_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(btn_fg)}`, `font-weight: ${_M0IPC16string6StringPB4Show10to__string(btn_fw)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg17CalendarSelectDay(d)), undefined, _M0IP016_24default__implPB4Show10to__stringGiE(d)));
      _tmp$6 = day + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$3, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, cells), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 13px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app15text__secondary)}`], undefined, undefined, undefined, -1, undefined, `Selected: ${_M0IPC16string6StringPB4Show10to__string(month_name)} ${_M0IP016_24default__implPB4Show10to__stringGiE(cal.selected_day)}, ${_M0IP016_24default__implPB4Show10to__stringGiE(cal.year)}`)]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model14view__timeline(self, dispatch) {
  const _tmp = ["display: flex", "flex-direction: column", "gap: 0"];
  const event_els = [];
  const _bind = self.timeline.events;
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$2) {
      const evt = _bind[i];
      const is_last = i === (self.timeline.events.length - 1 | 0);
      const pb = is_last ? "0" : "24";
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(event_els, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 16px", `padding-bottom: ${_M0IPC16string6StringPB4Show10to__string(pb)}px`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "align-items: center"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["width: 14px", "height: 14px", "border-radius: 50%", `background: ${_M0IPC16string6StringPB4Show10to__string(evt.color)}`, "flex-shrink: 0"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""), !is_last ? _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["width: 2px", "flex: 1", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, "margin-top: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "") : _M0FP319moonbit_2dcommunity7rabbita4html7nothing]), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["flex: 1", "padding-bottom: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: baseline", "gap: 8px", "margin-bottom: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 15px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, evt.title), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`], undefined, undefined, undefined, -1, undefined, evt.time)]), _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(["margin: 0", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app15text__secondary)}`, "line-height: 1.5"], undefined, undefined, undefined, -1, undefined, evt.description)])]));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, event_els);
}
function _M0MP48bobzhang7gallery8frontend3app5Model11view__chart(self, dispatch) {
  const chart = self.chart;
  const w = 400;
  const h = 200;
  const pad_left = 10;
  const pad_bottom = 30;
  const pad_top = 10;
  const pad_right = 10;
  const chart_w = (w - pad_left | 0) - pad_right | 0;
  const chart_h = (h - pad_top | 0) - pad_bottom | 0;
  const n = chart.bars.length;
  let bar_group;
  if (n > 0) {
    if (n === 0) {
      $panic();
    }
    bar_group = chart_w / n | 0;
  } else {
    bar_group = 1;
  }
  if (10 === 0) {
    $panic();
  }
  const bar_w = (Math.imul(bar_group, 6) | 0) / 10 | 0;
  const svg_children = [];
  const _bind = chart.bars;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const bar = _bind[i];
      let bar_h;
      if (chart.max_value > 0) {
        if (chart.max_value === 0) {
          $panic();
        }
        bar_h = (Math.imul(chart_h, bar.value) | 0) / chart.max_value | 0;
      } else {
        bar_h = 0;
      }
      const _tmp$2 = pad_left + (Math.imul(i, bar_group) | 0) | 0;
      if (2 === 0) {
        $panic();
      }
      const bx = _tmp$2 + ((bar_group - bar_w | 0) / 2 | 0) | 0;
      const by = (pad_top + chart_h | 0) - bar_h | 0;
      if (2 === 0) {
        $panic();
      }
      const lx = bx + (bar_w / 2 | 0) | 0;
      const ly = (h - pad_bottom | 0) + 14 | 0;
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(svg_children, _M0FP319moonbit_2dcommunity7rabbita3svg4rect(undefined, undefined, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__, bx, by, bar_w, bar_h, undefined, undefined, bar.color, undefined, undefined, undefined, undefined, undefined));
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(svg_children, _M0FP319moonbit_2dcommunity7rabbita3svg9svg__text(undefined, undefined, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__, lx, ly, bar.label, undefined, undefined, undefined, undefined, undefined, _M0FP48bobzhang7gallery8frontend3app15text__secondary, undefined, undefined, undefined, undefined, undefined));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "gap: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Bar Chart"), _M0FP319moonbit_2dcommunity7rabbita3svg3svg(undefined, undefined, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__, w, h, `0 0 ${_M0IP016_24default__implPB4Show10to__stringGiE(w)} ${_M0IP016_24default__implPB4Show10to__stringGiE(h)}`, undefined, undefined, svg_children)]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model12view__kanban(self, dispatch) {
  const ks = self.kanban;
  const _tmp = ["display: flex", "gap: 16px", "align-items: flex-start"];
  const col_els = [];
  const _bind = ks.columns;
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const col_idx = _tmp$2;
    if (col_idx < _bind$2) {
      const col = _bind[col_idx];
      const col_name = col._0;
      const cards = col._1;
      const num_cols = ks.columns.length;
      const _tmp$3 = ["flex: 1", "min-width: 0", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app12surface__alt)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "padding: 16px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`];
      const _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-size: 13px", "font-weight: 700", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app15text__secondary)}`, "margin-bottom: 12px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `${_M0IPC16string6StringPB4Show10to__string(col_name)} (${_M0IP016_24default__implPB4Show10to__stringGiE(cards.length)})`);
      const _tmp$5 = ["display: flex", "flex-direction: column", "gap: 10px"];
      const card_els = [];
      const _bind$3 = cards.length;
      let _tmp$6 = 0;
      while (true) {
        const _ = _tmp$6;
        if (_ < _bind$3) {
          const card = cards[_];
          _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(card_els, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE([`background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7surface)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "padding: 12px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-left: 4px solid ${_M0IPC16string6StringPB4Show10to__string(card.color)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 14px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`, "display: block", "margin-bottom: 8px"], undefined, undefined, undefined, -1, undefined, card.title), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 6px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [col_idx > 0 ? _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app14btn__sm__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg14KanbanMoveCard(card.id, col_idx, col_idx - 1 | 0)), undefined, "< Back") : _M0FP319moonbit_2dcommunity7rabbita4html7nothing, col_idx < (num_cols - 1 | 0) ? _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app14btn__sm__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg14KanbanMoveCard(card.id, col_idx, col_idx + 1 | 0)), undefined, "Forward >") : _M0FP319moonbit_2dcommunity7rabbita4html7nothing])]));
          _tmp$6 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(col_els, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$3, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$4, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$5, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, card_els)]));
      _tmp$2 = col_idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, col_els);
}
function _M0MP48bobzhang7gallery8frontend3app5Model24view__searchable__select(self, dispatch) {
  const ss = self.searchable_select;
  const filtered = [];
  const _bind = ss.options;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const opt = _bind[_];
      let _tmp$2;
      if (ss.query === "") {
        _tmp$2 = true;
      } else {
        const _tmp$3 = _M0MPC16string6String9to__lower(opt.label);
        const _bind$3 = _M0MPC16string6String9to__lower(ss.query);
        _tmp$2 = _M0MPC16string6String8contains(_tmp$3, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
      }
      if (_tmp$2) {
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(filtered, opt);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let selected_label;
  if (ss.selected === "") {
    selected_label = "Select an option...";
  } else {
    const found = new _M0TPB8MutLocalGsE(ss.selected);
    const _bind$3 = ss.options;
    const _bind$4 = _bind$3.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$4) {
        const opt = _bind$3[_];
        if (opt.value === ss.selected) {
          found.val = opt.label;
        }
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    selected_label = found.val;
  }
  const open_border = ss.open ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app6border;
  const arrow = ss.open ? "^" : "v";
  const _tmp$2 = ["display: flex", "flex-direction: column", "gap: 8px", "max-width: 340px"];
  const _tmp$3 = _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Searchable Select");
  const _tmp$4 = ["position: relative"];
  const _tmp$5 = _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["display: flex", "align-items: center", "justify-content: space-between", "width: 100%", "padding: 9px 14px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(open_border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7surface)}`, "cursor: pointer", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg20SearchableToggleOpen__), undefined, `${_M0IPC16string6StringPB4Show10to__string(selected_label)} ${_M0IPC16string6StringPB4Show10to__string(arrow)}`);
  let _tmp$6;
  if (ss.open) {
    const _tmp$7 = ["position: absolute", "top: calc(100% + 4px)", "left: 0", "right: 0", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app7surface)}`, `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "box-shadow: 0 8px 24px rgba(0,0,0,0.1)", "z-index: 100", "overflow: hidden"];
    const _tmp$8 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["padding: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, ss.query, -1, -1, -1, undefined, "Search...", undefined, _M0FP48bobzhang7gallery8frontend3app12input__style, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (s) => dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg22SearchableQueryChanged(s)), undefined, "")]);
    const _tmp$9 = ["max-height: 200px", "overflow-y: auto"];
    const opt_els = [];
    if (filtered.length === 0) {
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(opt_els, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["padding: 10px 14px", "font-size: 14px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "No results"));
    } else {
      const _bind$3 = filtered.length;
      let _tmp$10 = 0;
      while (true) {
        const i = _tmp$10;
        if (i < _bind$3) {
          const opt = filtered[i];
          const is_sel = opt.value === ss.selected;
          const is_focused = i === ss.focus_index;
          const opt_bg = is_sel ? _M0FP48bobzhang7gallery8frontend3app14primary__light : is_focused ? _M0FP48bobzhang7gallery8frontend3app12surface__alt : _M0FP48bobzhang7gallery8frontend3app7surface;
          const opt_fg = is_sel ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app13text__primary;
          const opt_fw = is_sel ? "600" : "400";
          _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(opt_els, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["display: block", "width: 100%", "padding: 9px 14px", "border: none", "cursor: pointer", "font-size: 14px", "text-align: left", `background: ${_M0IPC16string6StringPB4Show10to__string(opt_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(opt_fg)}`, `font-weight: ${_M0IPC16string6StringPB4Show10to__string(opt_fw)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg18SearchableSelect__(opt.value)), undefined, opt.label));
          _tmp$10 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    _tmp$6 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$7, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$8, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$9, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, opt_els)]);
  } else {
    _tmp$6 = _M0FP319moonbit_2dcommunity7rabbita4html7nothing;
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$2, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$3, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$4, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$5, _tmp$6])]);
}
function _M0FP48bobzhang7gallery8frontend3app19dr__days__in__month(year, month) {
  switch (month) {
    case 1: {
      return 31;
    }
    case 3: {
      return 31;
    }
    case 5: {
      return 31;
    }
    case 7: {
      return 31;
    }
    case 8: {
      return 31;
    }
    case 10: {
      return 31;
    }
    case 12: {
      return 31;
    }
    case 4: {
      return 30;
    }
    case 6: {
      return 30;
    }
    case 9: {
      return 30;
    }
    case 11: {
      return 30;
    }
    case 2: {
      let _tmp;
      if (400 === 0) {
        $panic();
      }
      if ((year % 400 | 0) === 0) {
        _tmp = true;
      } else {
        let _tmp$2;
        if (4 === 0) {
          $panic();
        }
        if ((year % 4 | 0) === 0) {
          if (100 === 0) {
            $panic();
          }
          _tmp$2 = (year % 100 | 0) !== 0;
        } else {
          _tmp$2 = false;
        }
        _tmp = _tmp$2;
      }
      if (_tmp) {
        return 29;
      } else {
        return 28;
      }
    }
    default: {
      return 30;
    }
  }
}
function _M0FP48bobzhang7gallery8frontend3app17dr__day__of__week(year, month, day) {
  const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  const y = month < 3 ? year - 1 | 0 : year;
  if (4 === 0) {
    $panic();
  }
  const _tmp = y + (y / 4 | 0) | 0;
  if (100 === 0) {
    $panic();
  }
  const _tmp$2 = _tmp - (y / 100 | 0) | 0;
  if (400 === 0) {
    $panic();
  }
  if (7 === 0) {
    $panic();
  }
  return (((_tmp$2 + (y / 400 | 0) | 0) + _M0MPC15array5Array2atGiE(t, month - 1 | 0) | 0) + day | 0) % 7 | 0;
}
function _M0MP48bobzhang7gallery8frontend3app5Model17view__date__range(self, dispatch) {
  const dr = self.date_range;
  const year = dr.start_year;
  const month = dr.start_month;
  const num_days = _M0FP48bobzhang7gallery8frontend3app19dr__days__in__month(year, month);
  const first_dow = _M0FP48bobzhang7gallery8frontend3app17dr__day__of__week(year, month, 1);
  const month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month_name = month >= 1 && month <= 12 ? _M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(month_names, month - 1 | 0) : "Month";
  const day_labels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const start_btn_bg = dr.picking === "start" ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app7surface;
  const start_btn_fg = dr.picking === "start" ? "white" : _M0FP48bobzhang7gallery8frontend3app13text__primary;
  const start_btn_border = dr.picking === "start" ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app6border;
  const end_btn_bg = dr.picking === "end" ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app7surface;
  const end_btn_fg = dr.picking === "end" ? "white" : _M0FP48bobzhang7gallery8frontend3app13text__primary;
  const end_btn_border = dr.picking === "end" ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app6border;
  const start_label = dr.start_day > 0 ? `Start: ${_M0IP016_24default__implPB4Show10to__stringGiE(dr.start_day)}` : "Start: ?";
  const end_label = dr.end_day > 0 ? `End: ${_M0IP016_24default__implPB4Show10to__stringGiE(dr.end_day)}` : "End: ?";
  const _tmp = ["display: flex", "flex-direction: column", "gap: 12px", "max-width: 320px"];
  const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, "Date Range Picker");
  const _tmp$3 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "gap: 8px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 12px", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(start_btn_border)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(start_btn_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(start_btn_fg)}`, "cursor: pointer", "font-size: 13px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg19DateRangeSetPicking("start")), undefined, start_label), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["padding: 6px 12px", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(end_btn_border)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(end_btn_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(end_btn_fg)}`, "cursor: pointer", "font-size: 13px"], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg19DateRangeSetPicking("end")), undefined, end_label)]);
  const _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "justify-content: space-between"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app19btn__outline__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg18DateRangePrevMonth__), undefined, "<"), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 14px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, `${_M0IPC16string6StringPB4Show10to__string(month_name)} ${_M0IP016_24default__implPB4Show10to__stringGiE(year)}`), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app19btn__outline__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg18DateRangeNextMonth__), undefined, ">")]);
  const _tmp$5 = ["display: grid", "grid-template-columns: repeat(7, 1fr)", "gap: 2px"];
  const cells = [];
  const _bind = day_labels.length;
  let _tmp$6 = 0;
  while (true) {
    const _ = _tmp$6;
    if (_ < _bind) {
      const dl = day_labels[_];
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(cells, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["text-align: center", "font-size: 11px", "font-weight: 600", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`, "padding: 4px 0"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, dl));
      _tmp$6 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = 0;
  let _tmp$7 = _bind$2;
  while (true) {
    const _ = _tmp$7;
    if (_ < first_dow) {
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(cells, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["padding: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""));
      _tmp$7 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$8 = 1;
  while (true) {
    const d = _tmp$8;
    if (d <= num_days) {
      const lo = dr.start_day < dr.end_day ? dr.start_day : dr.end_day;
      const hi = dr.start_day > dr.end_day ? dr.start_day : dr.end_day;
      const is_start = d === dr.start_day;
      const is_end = d === dr.end_day;
      const in_range = d >= lo && (d <= hi && (lo > 0 && hi > 0));
      const dd = d;
      const day_bg = is_start || is_end ? _M0FP48bobzhang7gallery8frontend3app7primary : in_range ? _M0FP48bobzhang7gallery8frontend3app14primary__light : "transparent";
      const day_fg = is_start || is_end ? "white" : in_range ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app13text__primary;
      const day_fw = is_start || is_end ? "700" : "400";
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(cells, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(["text-align: center", "padding: 6px 0", "border: none", "cursor: pointer", "font-size: 13px", `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app10radius__sm)}`, `background: ${_M0IPC16string6StringPB4Show10to__string(day_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(day_fg)}`, `font-weight: ${_M0IPC16string6StringPB4Show10to__string(day_fw)}`], undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg18DateRangeSelectDay(dd)), undefined, _M0IP016_24default__implPB4Show10to__stringGiE(dd)));
      _tmp$8 = d + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _tmp$3, _tmp$4, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$5, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, cells)]);
}
function _M0MP48bobzhang7gallery8frontend3app5Model18view__form__wizard(self, dispatch) {
  const fw = self.form_wizard;
  const total = fw.steps.length;
  if (fw.completed) {
    return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "align-items: center", "padding: 40px 24px", "text-align: center", "gap: 12px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["font-size: 48px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""), _M0FP319moonbit_2dcommunity7rabbita4html10h3_2einnerGsE(["margin: 0", "font-size: 20px", "font-weight: 700", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, "All Done!"), _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(["margin: 0", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app15text__secondary)}`], undefined, undefined, undefined, -1, undefined, "Form submitted successfully.")]);
  }
  const current_step = _M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(fw.steps, fw.current);
  const next_label = fw.current === (total - 1 | 0) ? "Submit" : "Next";
  const _tmp = ["display: flex", "flex-direction: column", "gap: 20px", "max-width: 480px"];
  const _tmp$2 = ["display: flex", "align-items: center", "gap: 8px"];
  const indicators = [];
  const _bind = fw.steps;
  const _bind$2 = _bind.length;
  let _tmp$3 = 0;
  while (true) {
    const idx = _tmp$3;
    if (idx < _bind$2) {
      const step = _bind[idx];
      const is_done = idx < fw.current;
      const is_cur = idx === fw.current;
      const circle_bg = is_done ? _M0FP48bobzhang7gallery8frontend3app7success : is_cur ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app6border;
      const circle_fg = is_done || is_cur ? "white" : _M0FP48bobzhang7gallery8frontend3app11text__muted;
      const step_label = is_done ? "" : _M0IP016_24default__implPB4Show10to__stringGiE(idx + 1 | 0);
      const title_color = is_cur ? _M0FP48bobzhang7gallery8frontend3app7primary : _M0FP48bobzhang7gallery8frontend3app11text__muted;
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(indicators, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["width: 28px", "height: 28px", "border-radius: 50%", "display: flex", "align-items: center", "justify-content: center", "font-size: 13px", "font-weight: 700", `background: ${_M0IPC16string6StringPB4Show10to__string(circle_bg)}`, `color: ${_M0IPC16string6StringPB4Show10to__string(circle_fg)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, step_label), _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(title_color)}`], undefined, undefined, undefined, -1, undefined, step.title)]));
      if (idx < (total - 1 | 0)) {
        _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(indicators, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(["flex: 1", "height: 1px", `background: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6border)}`], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ""));
      }
      _tmp$3 = idx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$2, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, indicators);
  const _tmp$5 = _M0FP319moonbit_2dcommunity7rabbita4html10h4_2einnerGsE(["margin: 0", "font-size: 16px", "font-weight: 700", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`], undefined, undefined, undefined, -1, undefined, current_step.title);
  const _tmp$6 = ["display: flex", "flex-direction: column", "gap: 12px"];
  const field_els = [];
  const _bind$3 = current_step.fields;
  const _bind$4 = _bind$3.length;
  let _tmp$7 = 0;
  while (true) {
    const fidx = _tmp$7;
    if (fidx < _bind$4) {
      const field = _bind$3[fidx];
      const inp_border = _M0IP016_24default__implPB2Eq10not__equalGsE(field.error, "") ? _M0FP48bobzhang7gallery8frontend3app6danger : _M0FP48bobzhang7gallery8frontend3app6border;
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(field_els, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "flex-direction: column", "gap: 4px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html13label_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app12label__style, undefined, undefined, undefined, -1, undefined, undefined, field.label), _M0FP319moonbit_2dcommunity7rabbita4html13input_2einnerGsE(18, undefined, field.value, -1, -1, -1, undefined, field.label, undefined, ["width: 100%", "padding: 8px 12px", `border: 1px solid ${_M0IPC16string6StringPB4Show10to__string(inp_border)}`, `border-radius: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6radius)}`, "font-size: 14px", "outline: none", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app13text__primary)}`, "background: white", "box-sizing: border-box"], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, -1, -1, -1, undefined, undefined, undefined, (v) => dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg18WizardFieldChanged(fidx, v)), undefined, ""), _M0IP016_24default__implPB2Eq10not__equalGsE(field.error, "") ? _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 12px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app6danger)}`], undefined, undefined, undefined, -1, undefined, field.error) : _M0FP319moonbit_2dcommunity7rabbita4html7nothing]));
      _tmp$7 = fidx + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$4, _tmp$5, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp$6, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, field_els), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "justify-content: space-between", "align-items: center"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [fw.current > 0 ? _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app19btn__outline__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg10WizardPrev__), undefined, "Previous") : _M0FP319moonbit_2dcommunity7rabbita4html7nothing, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(["display: flex", "align-items: center", "gap: 12px"], undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(["font-size: 13px", `color: ${_M0IPC16string6StringPB4Show10to__string(_M0FP48bobzhang7gallery8frontend3app11text__muted)}`], undefined, undefined, undefined, -1, undefined, `Step ${_M0IP016_24default__implPB4Show10to__stringGiE(fw.current + 1 | 0)} of ${_M0IP016_24default__implPB4Show10to__stringGiE(total)}`), _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app10btn__style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, dispatch(_M0DTP48bobzhang7gallery8frontend3app3Msg10WizardNext__), undefined, next_label)])])]);
}
function _M0FP48bobzhang7gallery8frontend3app22component__description(section, index) {
  switch (section) {
    case 0: {
      switch (index) {
        case 0: {
          return "A single-line text input with real-time validation feedback.";
        }
        case 1: {
          return "A multi-line text area with character count and limit.";
        }
        case 2: {
          return "Checkboxes for toggling multiple independent options.";
        }
        case 3: {
          return "Radio buttons for selecting one option from a group.";
        }
        case 4: {
          return "A dropdown select for choosing from a list of options.";
        }
        case 5: {
          return "Toggle switches for binary on/off settings.";
        }
        case 6: {
          return "A range slider for selecting a numeric value.";
        }
        case 7: {
          return "A color picker with preset swatches and hex input.";
        }
        default: {
          return "";
        }
      }
    }
    case 1: {
      switch (index) {
        case 0: {
          return "User avatars with initials and online/offline status indicators.";
        }
        case 1: {
          return "Notification badges showing count bubbles.";
        }
        case 2: {
          return "A progress bar showing completion percentage.";
        }
        case 3: {
          return "Tooltips that appear on hover with additional information.";
        }
        case 4: {
          return "Tags/chips that can be added and removed.";
        }
        case 5: {
          return "Skeleton loading placeholders with shimmer animation.";
        }
        case 6: {
          return "Empty state display with call-to-action.";
        }
        default: {
          return "";
        }
      }
    }
    case 2: {
      switch (index) {
        case 0: {
          return "Tabbed navigation for switching between content panels.";
        }
        case 1: {
          return "Collapsible accordion sections for organizing content.";
        }
        case 2: {
          return "Breadcrumb navigation showing the current path.";
        }
        case 3: {
          return "A tree view for hierarchical data with expand/collapse.";
        }
        default: {
          return "";
        }
      }
    }
    case 3: {
      switch (index) {
        case 0: {
          return "A data table with sortable columns, pagination, and row selection.";
        }
        case 1: {
          return "A calendar with month navigation and day selection.";
        }
        case 2: {
          return "A vertical timeline showing events in chronological order.";
        }
        case 3: {
          return "A bar chart visualized with SVG.";
        }
        default: {
          return "";
        }
      }
    }
    case 4: {
      switch (index) {
        case 0: {
          return "Toast notifications that auto-dismiss after 3 seconds.";
        }
        case 1: {
          return "A modal dialog with confirm and cancel actions.";
        }
        case 2: {
          return "A command palette for keyboard-driven navigation (Cmd+K style).";
        }
        default: {
          return "";
        }
      }
    }
    default: {
      switch (index) {
        case 0: {
          return "A kanban board with cards movable between columns.";
        }
        case 1: {
          return "A searchable select with filtering and keyboard navigation.";
        }
        case 2: {
          return "A date range picker with start and end date selection.";
        }
        case 3: {
          return "A multi-step form wizard with validation per step.";
        }
        default: {
          return "";
        }
      }
    }
  }
}
function _M0FP48bobzhang7gallery8frontend3app19section__components(section) {
  switch (section) {
    case 0: {
      return ["TextInput", "TextArea", "Checkbox", "RadioGroup", "Select", "Toggle", "Slider", "ColorPicker"];
    }
    case 1: {
      return ["Avatar", "Badge", "ProgressBar", "Tooltip", "Tag", "Skeleton", "EmptyState"];
    }
    case 2: {
      return ["Tabs", "Accordion", "Breadcrumb", "TreeView"];
    }
    case 3: {
      return ["DataTable", "Calendar", "Timeline", "Chart"];
    }
    case 4: {
      return ["Toast", "Modal", "CommandPalette"];
    }
    default: {
      return ["KanbanBoard", "SearchableSelect", "DateRangePicker", "FormWizard"];
    }
  }
}
function _M0MP48bobzhang7gallery8frontend3app5Model17render__component(self, dispatch) {
  _L: {
    const _bind = self.section;
    const _bind$2 = self.component;
    switch (_bind) {
      case 0: {
        switch (_bind$2) {
          case 0: {
            return _M0MP48bobzhang7gallery8frontend3app5Model17view__text__input(self, dispatch);
          }
          case 1: {
            return _M0MP48bobzhang7gallery8frontend3app5Model16view__text__area(self, dispatch);
          }
          case 2: {
            return _M0MP48bobzhang7gallery8frontend3app5Model14view__checkbox(self, dispatch);
          }
          case 3: {
            return _M0MP48bobzhang7gallery8frontend3app5Model11view__radio(self, dispatch);
          }
          case 4: {
            return _M0MP48bobzhang7gallery8frontend3app5Model12view__select(self, dispatch);
          }
          case 5: {
            return _M0MP48bobzhang7gallery8frontend3app5Model12view__toggle(self, dispatch);
          }
          case 6: {
            return _M0MP48bobzhang7gallery8frontend3app5Model12view__slider(self, dispatch);
          }
          case 7: {
            return _M0MP48bobzhang7gallery8frontend3app5Model19view__color__picker(self, dispatch);
          }
          default: {
            break _L;
          }
        }
      }
      case 1: {
        switch (_bind$2) {
          case 0: {
            return _M0MP48bobzhang7gallery8frontend3app5Model12view__avatar(self, dispatch);
          }
          case 1: {
            return _M0MP48bobzhang7gallery8frontend3app5Model11view__badge(self, dispatch);
          }
          case 2: {
            return _M0MP48bobzhang7gallery8frontend3app5Model14view__progress(self, dispatch);
          }
          case 3: {
            return _M0MP48bobzhang7gallery8frontend3app5Model13view__tooltip(self, dispatch);
          }
          case 4: {
            return _M0MP48bobzhang7gallery8frontend3app5Model9view__tag(self, dispatch);
          }
          case 5: {
            return _M0MP48bobzhang7gallery8frontend3app5Model14view__skeleton(self, dispatch);
          }
          case 6: {
            return _M0MP48bobzhang7gallery8frontend3app5Model18view__empty__state(self, dispatch);
          }
          default: {
            break _L;
          }
        }
      }
      case 2: {
        switch (_bind$2) {
          case 0: {
            return _M0MP48bobzhang7gallery8frontend3app5Model10view__tabs(self, dispatch);
          }
          case 1: {
            return _M0MP48bobzhang7gallery8frontend3app5Model15view__accordion(self, dispatch);
          }
          case 2: {
            return _M0MP48bobzhang7gallery8frontend3app5Model16view__breadcrumb(self, dispatch);
          }
          case 3: {
            return _M0MP48bobzhang7gallery8frontend3app5Model16view__tree__view(self, dispatch);
          }
          default: {
            break _L;
          }
        }
      }
      case 3: {
        switch (_bind$2) {
          case 0: {
            return _M0MP48bobzhang7gallery8frontend3app5Model17view__data__table(self, dispatch);
          }
          case 1: {
            return _M0MP48bobzhang7gallery8frontend3app5Model14view__calendar(self, dispatch);
          }
          case 2: {
            return _M0MP48bobzhang7gallery8frontend3app5Model14view__timeline(self, dispatch);
          }
          case 3: {
            return _M0MP48bobzhang7gallery8frontend3app5Model11view__chart(self, dispatch);
          }
          default: {
            break _L;
          }
        }
      }
      case 4: {
        switch (_bind$2) {
          case 0: {
            return _M0MP48bobzhang7gallery8frontend3app5Model11view__toast(self, dispatch);
          }
          case 1: {
            return _M0MP48bobzhang7gallery8frontend3app5Model11view__modal(self, dispatch);
          }
          case 2: {
            return _M0MP48bobzhang7gallery8frontend3app5Model22view__command__palette(self, dispatch);
          }
          default: {
            break _L;
          }
        }
      }
      default: {
        switch (_bind$2) {
          case 0: {
            return _M0MP48bobzhang7gallery8frontend3app5Model12view__kanban(self, dispatch);
          }
          case 1: {
            return _M0MP48bobzhang7gallery8frontend3app5Model24view__searchable__select(self, dispatch);
          }
          case 2: {
            return _M0MP48bobzhang7gallery8frontend3app5Model17view__date__range(self, dispatch);
          }
          case 3: {
            return _M0MP48bobzhang7gallery8frontend3app5Model18view__form__wizard(self, dispatch);
          }
          default: {
            break _L;
          }
        }
      }
    }
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html1pGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, "Component not found");
}
function _M0MP48bobzhang7gallery8frontend3app5Model13view__content(self, dispatch) {
  const components = _M0FP48bobzhang7gallery8frontend3app19section__components(self.section);
  const name = self.component < components.length ? _M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(components, self.component) : "Unknown";
  return _M0FP319moonbit_2dcommunity7rabbita4html14main___2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0FP48bobzhang7gallery8frontend3app14content__style, undefined, undefined, undefined, -1, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0FP48bobzhang7gallery8frontend3app11card__style, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html10h1_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app23component__title__style, undefined, undefined, undefined, -1, undefined, undefined, name), _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app22component__desc__style, undefined, undefined, undefined, -1, undefined, _M0FP48bobzhang7gallery8frontend3app22component__description(self.section, self.component)), _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0FP48bobzhang7gallery8frontend3app20demo__section__style, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0MP48bobzhang7gallery8frontend3app5Model17render__component(self, dispatch)])])]);
}
function _M0FP48bobzhang7gallery8frontend3app13all__sections() {
  return [0, 1, 2, 3, 4, 5];
}
function _M0FP48bobzhang7gallery8frontend3app14section__label(section) {
  switch (section) {
    case 0: {
      return "Inputs";
    }
    case 1: {
      return "Display";
    }
    case 2: {
      return "Navigation";
    }
    case 3: {
      return "Data";
    }
    case 4: {
      return "Overlay";
    }
    default: {
      return "Composite";
    }
  }
}
function _M0MP48bobzhang7gallery8frontend3app5Model13view__sidebar(self, dispatch) {
  const items = [_M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app22sidebar__header__style, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Gallery")];
  const _bind = _M0FP48bobzhang7gallery8frontend3app13all__sections();
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const section = _bind[_];
      const components = _M0FP48bobzhang7gallery8frontend3app19section__components(section);
      _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(items, _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(_M0FP48bobzhang7gallery8frontend3app23sidebar__section__style, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0FP48bobzhang7gallery8frontend3app14section__label(section)));
      const _bind$3 = components.length;
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i < _bind$3) {
          const comp = components[i];
          const is_active = _M0IP48bobzhang7gallery8frontend3app7SectionPB2Eq5equal(self.section, section) && self.component === i;
          const item_style = is_active ? ["display: block", "padding: 8px 16px", "cursor: pointer", "font-size: 13px", "color: white", "background: #6366f1", "border: none", "width: 100%", "text-align: left", "border-left: 3px solid #818cf8"] : ["display: block", "padding: 8px 16px", "cursor: pointer", "font-size: 13px", "color: #cbd5e1", "background: transparent", "border: none", "width: 100%", "text-align: left", "border-left: 3px solid transparent"];
          _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(items, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(item_style, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, _M0FP319moonbit_2dcommunity7rabbita3cmd5batch([dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg13ChangeSection(section)), dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg15ChangeComponent(i))]), undefined, comp));
          _tmp$2 = i + 1 | 0;
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
  return _M0FP319moonbit_2dcommunity7rabbita4html11nav_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0FP48bobzhang7gallery8frontend3app14sidebar__style, undefined, undefined, undefined, -1, undefined, items);
}
function _M0MP48bobzhang7gallery8frontend3app5Model4view(self, dispatch) {
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0FP48bobzhang7gallery8frontend3app13layout__style, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0MP48bobzhang7gallery8frontend3app5Model13view__sidebar(self, dispatch), _M0MP48bobzhang7gallery8frontend3app5Model13view__content(self, dispatch), _M0MP48bobzhang7gallery8frontend3app5Model22view__toast__container(self, dispatch), self.modal.open ? _M0MP48bobzhang7gallery8frontend3app5Model20view__modal__overlay(self, dispatch) : _M0FP319moonbit_2dcommunity7rabbita4html7nothing, self.command_palette.open ? _M0MP48bobzhang7gallery8frontend3app5Model31view__command__palette__overlay(self, dispatch) : _M0FP319moonbit_2dcommunity7rabbita4html7nothing]);
}
function _M0FP48bobzhang7gallery8frontend3app14initial__model() {
  return new _M0TP48bobzhang7gallery8frontend3app5Model(0, 0, new _M0TP48bobzhang7gallery8frontend3app14TextInputState("", ""), new _M0TP48bobzhang7gallery8frontend3app13TextAreaState("", 200), new _M0TP48bobzhang7gallery8frontend3app13CheckboxState([{ _0: "Enable notifications", _1: true }, { _0: "Dark mode", _1: false }, { _0: "Auto-save", _1: true }, { _0: "Show line numbers", _1: false }]), new _M0TP48bobzhang7gallery8frontend3app10RadioState(["Small", "Medium", "Large", "Extra Large"], "Medium"), new _M0TP48bobzhang7gallery8frontend3app11SelectState(["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig"], ""), new _M0TP48bobzhang7gallery8frontend3app11ToggleState([{ _0: "Wi-Fi", _1: true }, { _0: "Bluetooth", _1: false }, { _0: "Airplane Mode", _1: false }, { _0: "Do Not Disturb", _1: true }]), new _M0TP48bobzhang7gallery8frontend3app11SliderState(50, 0, 100), new _M0TP48bobzhang7gallery8frontend3app16ColorPickerState("#6366f1", "#6366f1", ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#6366f1", "#a855f7", "#ec4899", "#14b8a6", "#f97316", "#64748b"]), new _M0TP48bobzhang7gallery8frontend3app11AvatarState([{ _0: "Alice", _1: "#6366f1", _2: true }, { _0: "Bob", _1: "#22c55e", _2: false }, { _0: "Carol", _1: "#f59e0b", _2: true }, { _0: "Dave", _1: "#ef4444", _2: false }, { _0: "Eve", _1: "#a855f7", _2: true }]), new _M0TP48bobzhang7gallery8frontend3app10BadgeState([{ _0: "Messages", _1: 3 }, { _0: "Notifications", _1: 12 }, { _0: "Tasks", _1: 0 }, { _0: "Alerts", _1: 99 }]), new _M0TP48bobzhang7gallery8frontend3app13ProgressState(65, false), new _M0TP48bobzhang7gallery8frontend3app12TooltipState(-1), new _M0TP48bobzhang7gallery8frontend3app8TagState(["MoonBit", "Rabbita", "MVU", "Frontend"], ""), new _M0TP48bobzhang7gallery8frontend3app13SkeletonState(true), new _M0TP48bobzhang7gallery8frontend3app15EmptyStateState(false), new _M0TP48bobzhang7gallery8frontend3app14AccordionState([{ _0: "What is MoonBit?", _1: "MoonBit is a modern programming language designed for cloud and edge computing with a focus on performance and developer experience." }, { _0: "What is the Elm Architecture?", _1: "The Elm Architecture (MVU) is a pattern for building web apps with three parts: Model (state), View (render), and Update (state transitions)." }, { _0: "How does Rabbita work?", _1: "Rabbita is a MoonBit framework that implements the Elm Architecture with virtual DOM diffing for efficient browser rendering." }], -1), new _M0TP48bobzhang7gallery8frontend3app9TabsState([{ _0: "Overview", _1: "This component gallery showcases 30 UI components built with the Rabbita MVU framework in MoonBit." }, { _0: "Usage", _1: "Each component demonstrates a specific MVU pattern: pure state updates, command side effects, or component composition." }, { _0: "API", _1: "Components are functions that take (Model, Dispatch[Msg]) -> Html. State lives in the Model, events dispatch Msg values." }], 0), new _M0TP48bobzhang7gallery8frontend3app15BreadcrumbState(["Home", "Components", "Navigation", "Breadcrumb"]), new _M0TP48bobzhang7gallery8frontend3app13TreeViewState([new _M0TP48bobzhang7gallery8frontend3app8TreeNode(1, "src", [new _M0TP48bobzhang7gallery8frontend3app8TreeNode(2, "frontend", [new _M0TP48bobzhang7gallery8frontend3app8TreeNode(3, "main.mbt", []), new _M0TP48bobzhang7gallery8frontend3app8TreeNode(4, "app", [new _M0TP48bobzhang7gallery8frontend3app8TreeNode(5, "types.mbt", []), new _M0TP48bobzhang7gallery8frontend3app8TreeNode(6, "update.mbt", []), new _M0TP48bobzhang7gallery8frontend3app8TreeNode(7, "view.mbt", [])])]), new _M0TP48bobzhang7gallery8frontend3app8TreeNode(8, "shared", [new _M0TP48bobzhang7gallery8frontend3app8TreeNode(9, "types.mbt", [])])]), new _M0TP48bobzhang7gallery8frontend3app8TreeNode(10, "public", [new _M0TP48bobzhang7gallery8frontend3app8TreeNode(11, "index.html", []), new _M0TP48bobzhang7gallery8frontend3app8TreeNode(12, "frontend.js", [])])], [1, 2]), new _M0TP48bobzhang7gallery8frontend3app14DataTableState([new _M0TP48bobzhang7gallery8frontend3app8TableRow("Alice Johnson", "alice@example.com", "Admin", "Active"), new _M0TP48bobzhang7gallery8frontend3app8TableRow("Bob Smith", "bob@example.com", "Editor", "Active"), new _M0TP48bobzhang7gallery8frontend3app8TableRow("Carol White", "carol@example.com", "Viewer", "Inactive"), new _M0TP48bobzhang7gallery8frontend3app8TableRow("Dave Brown", "dave@example.com", "Editor", "Active"), new _M0TP48bobzhang7gallery8frontend3app8TableRow("Eve Davis", "eve@example.com", "Admin", "Active"), new _M0TP48bobzhang7gallery8frontend3app8TableRow("Frank Miller", "frank@example.com", "Viewer", "Inactive"), new _M0TP48bobzhang7gallery8frontend3app8TableRow("Grace Lee", "grace@example.com", "Editor", "Active"), new _M0TP48bobzhang7gallery8frontend3app8TableRow("Hank Wilson", "hank@example.com", "Viewer", "Active")], "name", true, 0, 5, []), new _M0TP48bobzhang7gallery8frontend3app13CalendarState(2026, 3, 14, 2026, 3, 14), new _M0TP48bobzhang7gallery8frontend3app13TimelineState([new _M0TP48bobzhang7gallery8frontend3app13TimelineEvent("Project Started", "Initial commit and project setup", "Jan 2026", "#6366f1"), new _M0TP48bobzhang7gallery8frontend3app13TimelineEvent("MVP Released", "First working version with core features", "Feb 2026", "#22c55e"), new _M0TP48bobzhang7gallery8frontend3app13TimelineEvent("Component Gallery", "30 UI components showcasing MVU patterns", "Mar 2026", "#f59e0b"), new _M0TP48bobzhang7gallery8frontend3app13TimelineEvent("v1.0 Launch", "Production-ready release with full docs", "Apr 2026", "#ef4444")]), new _M0TP48bobzhang7gallery8frontend3app10ChartState([new _M0TP48bobzhang7gallery8frontend3app8ChartBar("Mon", 45, "#6366f1"), new _M0TP48bobzhang7gallery8frontend3app8ChartBar("Tue", 72, "#6366f1"), new _M0TP48bobzhang7gallery8frontend3app8ChartBar("Wed", 58, "#6366f1"), new _M0TP48bobzhang7gallery8frontend3app8ChartBar("Thu", 90, "#6366f1"), new _M0TP48bobzhang7gallery8frontend3app8ChartBar("Fri", 35, "#6366f1"), new _M0TP48bobzhang7gallery8frontend3app8ChartBar("Sat", 20, "#94a3b8"), new _M0TP48bobzhang7gallery8frontend3app8ChartBar("Sun", 15, "#94a3b8")], 100), new _M0TP48bobzhang7gallery8frontend3app10ToastState([], 1), new _M0TP48bobzhang7gallery8frontend3app10ModalState(false, "Confirm Action", "Are you sure you want to proceed? This action cannot be undone.", false), new _M0TP48bobzhang7gallery8frontend3app19CommandPaletteState(false, "", [new _M0TP48bobzhang7gallery8frontend3app13CommandAction(1, "Go to Inputs", "G I", "Navigation"), new _M0TP48bobzhang7gallery8frontend3app13CommandAction(2, "Go to Display", "G D", "Navigation"), new _M0TP48bobzhang7gallery8frontend3app13CommandAction(3, "Go to Data", "G A", "Navigation"), new _M0TP48bobzhang7gallery8frontend3app13CommandAction(4, "Toggle Dark Mode", "Ctrl+D", "Settings"), new _M0TP48bobzhang7gallery8frontend3app13CommandAction(5, "Show Toast", "Ctrl+T", "Actions"), new _M0TP48bobzhang7gallery8frontend3app13CommandAction(6, "Open Modal", "Ctrl+M", "Actions"), new _M0TP48bobzhang7gallery8frontend3app13CommandAction(7, "Reset All", "Ctrl+R", "Actions"), new _M0TP48bobzhang7gallery8frontend3app13CommandAction(8, "Go to Overlay", "G O", "Navigation")], 0), new _M0TP48bobzhang7gallery8frontend3app11KanbanState([{ _0: "To Do", _1: [new _M0TP48bobzhang7gallery8frontend3app10KanbanCard(1, "Design system tokens", "#6366f1"), new _M0TP48bobzhang7gallery8frontend3app10KanbanCard(2, "Write unit tests", "#22c55e")] }, { _0: "In Progress", _1: [new _M0TP48bobzhang7gallery8frontend3app10KanbanCard(3, "Build gallery layout", "#f59e0b")] }, { _0: "Done", _1: [new _M0TP48bobzhang7gallery8frontend3app10KanbanCard(4, "Set up project", "#94a3b8"), new _M0TP48bobzhang7gallery8frontend3app10KanbanCard(5, "Choose framework", "#94a3b8")] }]), new _M0TP48bobzhang7gallery8frontend3app21SearchableSelectState([new _M0TP48bobzhang7gallery8frontend3app12SelectOption("United States", "us"), new _M0TP48bobzhang7gallery8frontend3app12SelectOption("United Kingdom", "uk"), new _M0TP48bobzhang7gallery8frontend3app12SelectOption("Germany", "de"), new _M0TP48bobzhang7gallery8frontend3app12SelectOption("France", "fr"), new _M0TP48bobzhang7gallery8frontend3app12SelectOption("Japan", "jp"), new _M0TP48bobzhang7gallery8frontend3app12SelectOption("Australia", "au"), new _M0TP48bobzhang7gallery8frontend3app12SelectOption("Canada", "ca"), new _M0TP48bobzhang7gallery8frontend3app12SelectOption("Brazil", "br"), new _M0TP48bobzhang7gallery8frontend3app12SelectOption("India", "in"), new _M0TP48bobzhang7gallery8frontend3app12SelectOption("South Korea", "kr")], "", "", false, 0), new _M0TP48bobzhang7gallery8frontend3app14DateRangeState(2026, 3, 10, 2026, 3, 20, ""), new _M0TP48bobzhang7gallery8frontend3app15FormWizardState([new _M0TP48bobzhang7gallery8frontend3app10WizardStep("Personal Info", [new _M0TP48bobzhang7gallery8frontend3app11WizardField("Full Name", "", ""), new _M0TP48bobzhang7gallery8frontend3app11WizardField("Email", "", "")]), new _M0TP48bobzhang7gallery8frontend3app10WizardStep("Account Setup", [new _M0TP48bobzhang7gallery8frontend3app11WizardField("Username", "", ""), new _M0TP48bobzhang7gallery8frontend3app11WizardField("Password", "", "")]), new _M0TP48bobzhang7gallery8frontend3app10WizardStep("Preferences", [new _M0TP48bobzhang7gallery8frontend3app11WizardField("Language", "", ""), new _M0TP48bobzhang7gallery8frontend3app11WizardField("Timezone", "", "")])], 0, false));
}
function _M0MP48bobzhang7gallery8frontend3app5Model6update(self, msg, dispatch) {
  let field_idx;
  let val;
  _L: {
    let i;
    _L$2: {
      let q;
      _L$3: {
        let d;
        _L$4: {
          let which;
          _L$5: {
            let i$2;
            _L$6: {
              let v;
              _L$7: {
                let v$2;
                _L$8: {
                  let id;
                  _L$9: {
                    let message;
                    let title;
                    let kind;
                    _L$10: {
                      let _from_col;
                      let card_id;
                      let to_col;
                      _L$11: {
                        let d$2;
                        _L$12: {
                          let i$3;
                          _L$13: {
                            let p;
                            _L$14: {
                              let col;
                              _L$15: {
                                let id$2;
                                _L$16: {
                                  let i$4;
                                  _L$17: {
                                    let i$5;
                                    _L$18: {
                                      let i$6;
                                      _L$19: {
                                        let i$7;
                                        _L$20: {
                                          let v$3;
                                          _L$21: {
                                            let i$8;
                                            _L$22: {
                                              let v$4;
                                              _L$23: {
                                                let v$5;
                                                _L$24: {
                                                  let c;
                                                  _L$25: {
                                                    let v$6;
                                                    _L$26: {
                                                      let i$9;
                                                      _L$27: {
                                                        let v$7;
                                                        _L$28: {
                                                          let v$8;
                                                          _L$29: {
                                                            let i$10;
                                                            _L$30: {
                                                              let v$9;
                                                              _L$31: {
                                                                let v$10;
                                                                _L$32: {
                                                                  let i$11;
                                                                  _L$33: {
                                                                    let s;
                                                                    _L$34: {
                                                                      switch (msg.$tag) {
                                                                        case 0: {
                                                                          const _ChangeSection = msg;
                                                                          const _s = _ChangeSection._0;
                                                                          s = _s;
                                                                          break _L$34;
                                                                        }
                                                                        case 1: {
                                                                          const _ChangeComponent = msg;
                                                                          const _i = _ChangeComponent._0;
                                                                          i$11 = _i;
                                                                          break _L$33;
                                                                        }
                                                                        case 2: {
                                                                          const _TextInputChanged = msg;
                                                                          const _v = _TextInputChanged._0;
                                                                          v$10 = _v;
                                                                          break _L$32;
                                                                        }
                                                                        case 3: {
                                                                          const _TextAreaChanged = msg;
                                                                          const _v$2 = _TextAreaChanged._0;
                                                                          v$9 = _v$2;
                                                                          break _L$31;
                                                                        }
                                                                        case 4: {
                                                                          const _CheckboxToggled = msg;
                                                                          const _i$2 = _CheckboxToggled._0;
                                                                          i$10 = _i$2;
                                                                          break _L$30;
                                                                        }
                                                                        case 5: {
                                                                          const _RadioSelected = msg;
                                                                          const _v$3 = _RadioSelected._0;
                                                                          v$8 = _v$3;
                                                                          break _L$29;
                                                                        }
                                                                        case 6: {
                                                                          const _SelectChanged = msg;
                                                                          const _v$4 = _SelectChanged._0;
                                                                          v$7 = _v$4;
                                                                          break _L$28;
                                                                        }
                                                                        case 7: {
                                                                          const _ToggleSwitched = msg;
                                                                          const _i$3 = _ToggleSwitched._0;
                                                                          i$9 = _i$3;
                                                                          break _L$27;
                                                                        }
                                                                        case 8: {
                                                                          const _SliderChanged = msg;
                                                                          const _v$5 = _SliderChanged._0;
                                                                          v$6 = _v$5;
                                                                          break _L$26;
                                                                        }
                                                                        case 9: {
                                                                          const _ColorSwatchClicked = msg;
                                                                          const _c = _ColorSwatchClicked._0;
                                                                          c = _c;
                                                                          break _L$25;
                                                                        }
                                                                        case 10: {
                                                                          const _ColorHexChanged = msg;
                                                                          const _v$6 = _ColorHexChanged._0;
                                                                          v$5 = _v$6;
                                                                          break _L$24;
                                                                        }
                                                                        case 11: {
                                                                          const _ProgressChanged = msg;
                                                                          const _v$7 = _ProgressChanged._0;
                                                                          v$4 = _v$7;
                                                                          break _L$23;
                                                                        }
                                                                        case 12: {
                                                                          const _TooltipShow = msg;
                                                                          const _i$4 = _TooltipShow._0;
                                                                          i$8 = _i$4;
                                                                          break _L$22;
                                                                        }
                                                                        case 13: {
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, new _M0TP48bobzhang7gallery8frontend3app12TooltipState(-1), self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 16: {
                                                                          const _TagInputChanged = msg;
                                                                          const _v$8 = _TagInputChanged._0;
                                                                          v$3 = _v$8;
                                                                          break _L$21;
                                                                        }
                                                                        case 14: {
                                                                          const t = self.tag.input;
                                                                          if (t === "") {
                                                                            return { _0: self, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                          }
                                                                          const tags = _M0MPC15array5Array4copyGRP48bobzhang7gallery8frontend3app10WizardStepE(self.tag.tags);
                                                                          _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(tags, t);
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, new _M0TP48bobzhang7gallery8frontend3app8TagState(tags, ""), self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 15: {
                                                                          const _TagRemove = msg;
                                                                          const _i$5 = _TagRemove._0;
                                                                          i$7 = _i$5;
                                                                          break _L$20;
                                                                        }
                                                                        case 17: {
                                                                          const _AccordionToggle = msg;
                                                                          const _i$6 = _AccordionToggle._0;
                                                                          i$6 = _i$6;
                                                                          break _L$19;
                                                                        }
                                                                        case 18: {
                                                                          const _TabSelected = msg;
                                                                          const _i$7 = _TabSelected._0;
                                                                          i$5 = _i$7;
                                                                          break _L$18;
                                                                        }
                                                                        case 19: {
                                                                          const _BreadcrumbNavigate = msg;
                                                                          const _i$8 = _BreadcrumbNavigate._0;
                                                                          i$4 = _i$8;
                                                                          break _L$17;
                                                                        }
                                                                        case 20: {
                                                                          const _TreeToggle = msg;
                                                                          const _id = _TreeToggle._0;
                                                                          id$2 = _id;
                                                                          break _L$16;
                                                                        }
                                                                        case 21: {
                                                                          const _TableSort = msg;
                                                                          const _col = _TableSort._0;
                                                                          col = _col;
                                                                          break _L$15;
                                                                        }
                                                                        case 22: {
                                                                          const _TablePage = msg;
                                                                          const _p = _TablePage._0;
                                                                          p = _p;
                                                                          break _L$14;
                                                                        }
                                                                        case 23: {
                                                                          const _TableToggleRow = msg;
                                                                          const _i$9 = _TableToggleRow._0;
                                                                          i$3 = _i$9;
                                                                          break _L$13;
                                                                        }
                                                                        case 24: {
                                                                          const total = self.data_table.rows.length;
                                                                          const selected = self.data_table.selected.length === total ? [] : _M0MPC15array5Array5makeiGiE(total, (i$12) => i$12);
                                                                          const _bind = self.data_table;
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, new _M0TP48bobzhang7gallery8frontend3app14DataTableState(_bind.rows, _bind.sort_col, _bind.sort_asc, _bind.page, _bind.page_size, selected), self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 25: {
                                                                          const m = new _M0TPB8MutLocalGiE(self.calendar.month - 1 | 0);
                                                                          const y = new _M0TPB8MutLocalGiE(self.calendar.year);
                                                                          if (m.val < 1) {
                                                                            m.val = 12;
                                                                            y.val = y.val - 1 | 0;
                                                                          }
                                                                          const _bind$2 = self.calendar;
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, new _M0TP48bobzhang7gallery8frontend3app13CalendarState(y.val, m.val, _bind$2.selected_day, _bind$2.today_year, _bind$2.today_month, _bind$2.today_day), self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 26: {
                                                                          const m$2 = new _M0TPB8MutLocalGiE(self.calendar.month + 1 | 0);
                                                                          const y$2 = new _M0TPB8MutLocalGiE(self.calendar.year);
                                                                          if (m$2.val > 12) {
                                                                            m$2.val = 1;
                                                                            y$2.val = y$2.val + 1 | 0;
                                                                          }
                                                                          const _bind$3 = self.calendar;
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, new _M0TP48bobzhang7gallery8frontend3app13CalendarState(y$2.val, m$2.val, _bind$3.selected_day, _bind$3.today_year, _bind$3.today_month, _bind$3.today_day), self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 27: {
                                                                          const _CalendarSelectDay = msg;
                                                                          const _d = _CalendarSelectDay._0;
                                                                          d$2 = _d;
                                                                          break _L$12;
                                                                        }
                                                                        case 28: {
                                                                          const _KanbanMoveCard = msg;
                                                                          const _card_id = _KanbanMoveCard._0;
                                                                          const __from_col = _KanbanMoveCard._1;
                                                                          const _to_col = _KanbanMoveCard._2;
                                                                          _from_col = __from_col;
                                                                          card_id = _card_id;
                                                                          to_col = _to_col;
                                                                          break _L$11;
                                                                        }
                                                                        case 29: {
                                                                          const _ShowToast = msg;
                                                                          const _title = _ShowToast._0;
                                                                          const _message = _ShowToast._1;
                                                                          const _kind = _ShowToast._2;
                                                                          message = _message;
                                                                          title = _title;
                                                                          kind = _kind;
                                                                          break _L$10;
                                                                        }
                                                                        case 30: {
                                                                          const _DismissToast = msg;
                                                                          const _id$2 = _DismissToast._0;
                                                                          id = _id$2;
                                                                          break _L$9;
                                                                        }
                                                                        case 31: {
                                                                          const _bind$4 = self.modal;
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, new _M0TP48bobzhang7gallery8frontend3app10ModalState(true, _bind$4.title, _bind$4.message, false), self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 32: {
                                                                          const _bind$5 = self.modal;
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, new _M0TP48bobzhang7gallery8frontend3app10ModalState(false, _bind$5.title, _bind$5.message, _bind$5.confirmed), self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 33: {
                                                                          const _bind$6 = self.modal;
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, new _M0TP48bobzhang7gallery8frontend3app10ModalState(false, _bind$6.title, _bind$6.message, true), self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 34: {
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, new _M0TP48bobzhang7gallery8frontend3app13SkeletonState(!self.skeleton.loading), self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 35: {
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, new _M0TP48bobzhang7gallery8frontend3app15EmptyStateState(!self.empty_state.has_data), self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 36: {
                                                                          const _SearchableQueryChanged = msg;
                                                                          const _v$9 = _SearchableQueryChanged._0;
                                                                          v$2 = _v$9;
                                                                          break _L$8;
                                                                        }
                                                                        case 37: {
                                                                          const _SearchableSelect_ = msg;
                                                                          const _v$10 = _SearchableSelect_._0;
                                                                          v = _v$10;
                                                                          break _L$7;
                                                                        }
                                                                        case 38: {
                                                                          const _bind$7 = self.searchable_select;
                                                                          const _bind$8 = !self.searchable_select.open;
                                                                          const _bind$9 = "";
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, new _M0TP48bobzhang7gallery8frontend3app21SearchableSelectState(_bind$7.options, _bind$9, _bind$7.selected, _bind$8, _bind$7.focus_index), self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 39: {
                                                                          const _SearchableFocus = msg;
                                                                          const _i$10 = _SearchableFocus._0;
                                                                          i$2 = _i$10;
                                                                          break _L$6;
                                                                        }
                                                                        case 40: {
                                                                          const _DateRangeSetPicking = msg;
                                                                          const _which = _DateRangeSetPicking._0;
                                                                          which = _which;
                                                                          break _L$5;
                                                                        }
                                                                        case 41: {
                                                                          const _DateRangeSelectDay = msg;
                                                                          const _d$2 = _DateRangeSelectDay._0;
                                                                          d = _d$2;
                                                                          break _L$4;
                                                                        }
                                                                        case 42: {
                                                                          const dr = self.date_range;
                                                                          const m$3 = new _M0TPB8MutLocalGiE(dr.start_month - 1 | 0);
                                                                          const y$3 = new _M0TPB8MutLocalGiE(dr.start_year);
                                                                          if (m$3.val < 1) {
                                                                            m$3.val = 12;
                                                                            y$3.val = y$3.val - 1 | 0;
                                                                          }
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, new _M0TP48bobzhang7gallery8frontend3app14DateRangeState(y$3.val, m$3.val, dr.start_day, y$3.val, m$3.val, dr.end_day, dr.picking), self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 43: {
                                                                          const dr$2 = self.date_range;
                                                                          const m$4 = new _M0TPB8MutLocalGiE(dr$2.start_month + 1 | 0);
                                                                          const y$4 = new _M0TPB8MutLocalGiE(dr$2.start_year);
                                                                          if (m$4.val > 12) {
                                                                            m$4.val = 1;
                                                                            y$4.val = y$4.val + 1 | 0;
                                                                          }
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, new _M0TP48bobzhang7gallery8frontend3app14DateRangeState(y$4.val, m$4.val, dr$2.start_day, y$4.val, m$4.val, dr$2.end_day, dr$2.picking), self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 44: {
                                                                          const _bind$10 = self.command_palette;
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, new _M0TP48bobzhang7gallery8frontend3app19CommandPaletteState(!self.command_palette.open, "", _bind$10.actions, 0), self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 45: {
                                                                          const _CommandPaletteSearch = msg;
                                                                          const _q = _CommandPaletteSearch._0;
                                                                          q = _q;
                                                                          break _L$3;
                                                                        }
                                                                        case 46: {
                                                                          const _CommandPaletteFocus = msg;
                                                                          const _i$11 = _CommandPaletteFocus._0;
                                                                          i = _i$11;
                                                                          break _L$2;
                                                                        }
                                                                        case 47: {
                                                                          const _bind$11 = self.command_palette;
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, new _M0TP48bobzhang7gallery8frontend3app19CommandPaletteState(false, "", _bind$11.actions, _bind$11.focus_index), self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        case 50: {
                                                                          const _WizardFieldChanged = msg;
                                                                          const _field_idx = _WizardFieldChanged._0;
                                                                          const _val = _WizardFieldChanged._1;
                                                                          field_idx = _field_idx;
                                                                          val = _val;
                                                                          break _L;
                                                                        }
                                                                        case 48: {
                                                                          const fw = self.form_wizard;
                                                                          const step = _M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(fw.steps, fw.current);
                                                                          const has_error = new _M0TPB8MutLocalGbE(false);
                                                                          const fields = _M0MPC15array5Array4mapiGRP48bobzhang7gallery8frontend3app11WizardFieldRP48bobzhang7gallery8frontend3app11WizardFieldE(step.fields, (_discard_, f) => {
                                                                            if (f.value === "") {
                                                                              has_error.val = true;
                                                                              return new _M0TP48bobzhang7gallery8frontend3app11WizardField(f.label, f.value, `${_M0IPC16string6StringPB4Show10to__string(f.label)} is required`);
                                                                            } else {
                                                                              return f;
                                                                            }
                                                                          });
                                                                          if (has_error.val) {
                                                                            const steps = _M0MPC15array5Array4copyGRP48bobzhang7gallery8frontend3app10WizardStepE(fw.steps);
                                                                            _M0MPC15array5Array3setGRP48bobzhang7gallery8frontend3app11WizardFieldE(steps, fw.current, new _M0TP48bobzhang7gallery8frontend3app10WizardStep(step.title, fields));
                                                                            return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, new _M0TP48bobzhang7gallery8frontend3app15FormWizardState(steps, fw.current, fw.completed)), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                          }
                                                                          if (fw.current >= (fw.steps.length - 1 | 0)) {
                                                                            return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, new _M0TP48bobzhang7gallery8frontend3app15FormWizardState(fw.steps, fw.current, true)), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                          }
                                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, new _M0TP48bobzhang7gallery8frontend3app15FormWizardState(fw.steps, fw.current + 1 | 0, fw.completed)), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                        }
                                                                        default: {
                                                                          const c$2 = self.form_wizard.current;
                                                                          if (c$2 > 0) {
                                                                            const _bind$12 = self.form_wizard;
                                                                            return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, new _M0TP48bobzhang7gallery8frontend3app15FormWizardState(_bind$12.steps, c$2 - 1 | 0, _bind$12.completed)), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                          } else {
                                                                            return { _0: self, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(s, 0, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                  }
                                                                  return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, i$11, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                                }
                                                                const error = _M0MPC16string6String20char__length_2einner(v$10, 0, undefined) > 50 ? "Maximum 50 characters" : _M0IP016_24default__implPB2Eq10not__equalGsE(v$10, "") && _M0MPC16string6String20char__length_2einner(v$10, 0, undefined) < 3 ? "Minimum 3 characters" : "";
                                                                return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, new _M0TP48bobzhang7gallery8frontend3app14TextInputState(v$10, error), self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                              }
                                                              const trimmed = _M0MPC16string6String20char__length_2einner(v$9, 0, undefined) > self.text_area.max_chars ? _M0MPC16string6String17substring_2einner(v$9, 0, self.text_area.max_chars) : v$9;
                                                              const _bind = self.text_area;
                                                              return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, new _M0TP48bobzhang7gallery8frontend3app13TextAreaState(trimmed, _bind.max_chars), self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                            }
                                                            const items = _M0MPC15array5Array4mapiGUsbEUsbEE(self.checkbox.items, (idx, pair) => idx === i$10 ? { _0: pair._0, _1: !pair._1 } : pair);
                                                            return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, new _M0TP48bobzhang7gallery8frontend3app13CheckboxState(items), self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                          }
                                                          const _bind = self.radio;
                                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, new _M0TP48bobzhang7gallery8frontend3app10RadioState(_bind.options, v$8), self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                        }
                                                        const _bind = self.select;
                                                        return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, new _M0TP48bobzhang7gallery8frontend3app11SelectState(_bind.options, v$7), self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                      }
                                                      const items = _M0MPC15array5Array4mapiGUsbEUsbEE(self.toggle.items, (idx, pair) => idx === i$9 ? { _0: pair._0, _1: !pair._1 } : pair);
                                                      return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, new _M0TP48bobzhang7gallery8frontend3app11ToggleState(items), self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                    }
                                                    let n;
                                                    let _try_err;
                                                    _L$27: {
                                                      _L$28: {
                                                        const _bind = _M0FPC17strconv18parse__int_2einner(new _M0TPC16string10StringView(v$6, 0, v$6.length), 0);
                                                        if (_bind.$tag === 1) {
                                                          const _ok = _bind;
                                                          n = _ok._0;
                                                        } else {
                                                          const _err = _bind;
                                                          _try_err = _err._0;
                                                          break _L$28;
                                                        }
                                                        break _L$27;
                                                      }
                                                      n = self.slider.value;
                                                    }
                                                    const _bind = self.slider;
                                                    return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, new _M0TP48bobzhang7gallery8frontend3app11SliderState(n, _bind.min, _bind.max), self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                  }
                                                  const _bind = self.color_picker;
                                                  return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, new _M0TP48bobzhang7gallery8frontend3app16ColorPickerState(c, c, _bind.swatches), self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                                }
                                                let selected;
                                                let _tmp;
                                                const _bind = "#";
                                                if (_M0MPC16string6String11has__prefix(v$5, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
                                                  _tmp = _M0MPC16string6String20char__length_2einner(v$5, 0, undefined) === 7;
                                                } else {
                                                  _tmp = false;
                                                }
                                                if (_tmp) {
                                                  selected = v$5;
                                                } else {
                                                  selected = self.color_picker.selected;
                                                }
                                                const _bind$2 = self.color_picker;
                                                return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, new _M0TP48bobzhang7gallery8frontend3app16ColorPickerState(selected, v$5, _bind$2.swatches), self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                              }
                                              let n;
                                              let _try_err;
                                              _L$24: {
                                                _L$25: {
                                                  const _bind = _M0FPC17strconv18parse__int_2einner(new _M0TPC16string10StringView(v$4, 0, v$4.length), 0);
                                                  if (_bind.$tag === 1) {
                                                    const _ok = _bind;
                                                    n = _ok._0;
                                                  } else {
                                                    const _err = _bind;
                                                    _try_err = _err._0;
                                                    break _L$25;
                                                  }
                                                  break _L$24;
                                                }
                                                n = self.progress.value;
                                              }
                                              const clamped = n < 0 ? 0 : n > 100 ? 100 : n;
                                              const _bind = self.progress;
                                              return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, new _M0TP48bobzhang7gallery8frontend3app13ProgressState(clamped, _bind.animating), self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                            }
                                            return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, new _M0TP48bobzhang7gallery8frontend3app12TooltipState(i$8), self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                          }
                                          const _bind = self.tag;
                                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, new _M0TP48bobzhang7gallery8frontend3app8TagState(_bind.tags, v$3), self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                        }
                                        const tags = _M0MPC15array5Array4copyGRP48bobzhang7gallery8frontend3app10WizardStepE(self.tag.tags);
                                        _M0MPC15array5Array6removeGsE(tags, i$7);
                                        const _bind = self.tag;
                                        return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, new _M0TP48bobzhang7gallery8frontend3app8TagState(tags, _bind.input), self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                      }
                                      const idx = self.accordion.open_index === i$6 ? -1 : i$6;
                                      const _bind = self.accordion;
                                      return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, new _M0TP48bobzhang7gallery8frontend3app14AccordionState(_bind.items, idx), self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                    }
                                    const _bind = self.tabs;
                                    return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, new _M0TP48bobzhang7gallery8frontend3app9TabsState(_bind.tabs, i$5), self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                  }
                                  const path = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter4takeGsE(_M0MPC15array5Array4iterGsE(self.breadcrumb.path), i$4 + 1 | 0));
                                  return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, new _M0TP48bobzhang7gallery8frontend3app15BreadcrumbState(path), self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                                }
                                let expanded;
                                if (_M0MPC15array5Array8containsGiE(self.tree_view.expanded, id$2)) {
                                  expanded = _M0MPC15array5Array6filterGiE(self.tree_view.expanded, (x) => x !== id$2);
                                } else {
                                  const e = _M0MPC15array5Array4copyGiE(self.tree_view.expanded);
                                  _M0MPC15array5Array4pushGiE(e, id$2);
                                  expanded = e;
                                }
                                const _bind = self.tree_view;
                                return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, new _M0TP48bobzhang7gallery8frontend3app13TreeViewState(_bind.roots, expanded), self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                              }
                              const asc = self.data_table.sort_col === col ? !self.data_table.sort_asc : true;
                              const _bind = self.data_table;
                              return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, new _M0TP48bobzhang7gallery8frontend3app14DataTableState(_bind.rows, col, asc, 0, _bind.page_size, _bind.selected), self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                            }
                            const _bind = self.data_table;
                            return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, new _M0TP48bobzhang7gallery8frontend3app14DataTableState(_bind.rows, _bind.sort_col, _bind.sort_asc, p, _bind.page_size, _bind.selected), self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                          }
                          let selected;
                          if (_M0MPC15array5Array8containsGiE(self.data_table.selected, i$3)) {
                            selected = _M0MPC15array5Array6filterGiE(self.data_table.selected, (x) => x !== i$3);
                          } else {
                            const s = _M0MPC15array5Array4copyGiE(self.data_table.selected);
                            _M0MPC15array5Array4pushGiE(s, i$3);
                            selected = s;
                          }
                          const _bind = self.data_table;
                          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, new _M0TP48bobzhang7gallery8frontend3app14DataTableState(_bind.rows, _bind.sort_col, _bind.sort_asc, _bind.page, _bind.page_size, selected), self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                        }
                        const _bind = self.calendar;
                        return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, new _M0TP48bobzhang7gallery8frontend3app13CalendarState(_bind.year, _bind.month, d$2, _bind.today_year, _bind.today_month, _bind.today_day), self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                      }
                      const card = new _M0TPB8MutLocalGORP48bobzhang7gallery8frontend3app10KanbanCardE(undefined);
                      const columns = _M0MPC15array5Array4mapiGUsRPB5ArrayGRP48bobzhang7gallery8frontend3app10KanbanCardEEUsRPB5ArrayGRP48bobzhang7gallery8frontend3app10KanbanCardEEE(self.kanban.columns, (_discard_, col) => {
                        const filtered = _M0MPC15array5Array6filterGRP48bobzhang7gallery8frontend3app10KanbanCardE(col._1, (c) => {
                          if (c.id === card_id) {
                            card.val = c;
                            return false;
                          } else {
                            return true;
                          }
                        });
                        return { _0: col._0, _1: filtered };
                      });
                      let c;
                      _L$12: {
                        const _bind = card.val;
                        if (_bind === undefined) {
                          return { _0: self, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                        } else {
                          const _Some = _bind;
                          const _c = _Some;
                          c = _c;
                          break _L$12;
                        }
                      }
                      const columns2 = _M0MPC15array5Array4mapiGUsRPB5ArrayGRP48bobzhang7gallery8frontend3app10KanbanCardEEUsRPB5ArrayGRP48bobzhang7gallery8frontend3app10KanbanCardEEE(columns, (idx, col) => {
                        if (idx === to_col) {
                          const cards = _M0MPC15array5Array4copyGRP48bobzhang7gallery8frontend3app10WizardStepE(col._1);
                          _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(cards, c);
                          return { _0: col._0, _1: cards };
                        } else {
                          return col;
                        }
                      });
                      return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, new _M0TP48bobzhang7gallery8frontend3app11KanbanState(columns2), self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                    }
                    const id$2 = self.toast.next_id;
                    const item = new _M0TP48bobzhang7gallery8frontend3app9ToastItem(id$2, title, message, kind);
                    const items = _M0MPC15array5Array4copyGRP48bobzhang7gallery8frontend3app10WizardStepE(self.toast.items);
                    _M0MPC15array5Array4pushGRP48bobzhang7gallery8frontend3app9ToastItemE(items, item);
                    const cmd = _M0FP319moonbit_2dcommunity7rabbita3cmd5delay(dispatch(new _M0DTP48bobzhang7gallery8frontend3app3Msg12DismissToast(id$2)), 3000);
                    return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, new _M0TP48bobzhang7gallery8frontend3app10ToastState(items, id$2 + 1 | 0), self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: cmd };
                  }
                  const items = _M0MPC15array5Array6filterGRP48bobzhang7gallery8frontend3app9ToastItemE(self.toast.items, (t) => t.id !== id);
                  const _bind = self.toast;
                  return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, new _M0TP48bobzhang7gallery8frontend3app10ToastState(items, _bind.next_id), self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
                }
                const _bind = self.searchable_select;
                return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, new _M0TP48bobzhang7gallery8frontend3app21SearchableSelectState(_bind.options, v$2, _bind.selected, _bind.open, 0), self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
              }
              const _bind = self.searchable_select;
              const _bind$2 = false;
              const _bind$3 = "";
              return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, new _M0TP48bobzhang7gallery8frontend3app21SearchableSelectState(_bind.options, _bind$3, v, _bind$2, _bind.focus_index), self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
            }
            const _bind = self.searchable_select;
            return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, new _M0TP48bobzhang7gallery8frontend3app21SearchableSelectState(_bind.options, _bind.query, _bind.selected, _bind.open, i$2), self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
          }
          const _tmp = self.date_range;
          return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, new _M0TP48bobzhang7gallery8frontend3app14DateRangeState(_tmp.start_year, _tmp.start_month, _tmp.start_day, _tmp.end_year, _tmp.end_month, _tmp.end_day, which), self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
        }
        const dr = self.date_range;
        return dr.picking === "start" ? { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, new _M0TP48bobzhang7gallery8frontend3app14DateRangeState(dr.start_year, dr.start_month, d, dr.end_year, dr.end_month, dr.end_day, ""), self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none } : dr.picking === "end" ? { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, new _M0TP48bobzhang7gallery8frontend3app14DateRangeState(dr.start_year, dr.start_month, dr.start_day, dr.end_year, dr.end_month, d, ""), self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none } : { _0: self, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
      }
      const _bind = self.command_palette;
      return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, new _M0TP48bobzhang7gallery8frontend3app19CommandPaletteState(_bind.open, q, _bind.actions, 0), self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
    }
    const _bind = self.command_palette;
    return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, new _M0TP48bobzhang7gallery8frontend3app19CommandPaletteState(_bind.open, _bind.query, _bind.actions, i), self.kanban, self.searchable_select, self.date_range, self.form_wizard), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
  }
  const steps = _M0MPC15array5Array4copyGRP48bobzhang7gallery8frontend3app10WizardStepE(self.form_wizard.steps);
  const step = _M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(steps, self.form_wizard.current);
  const fields = _M0MPC15array5Array4copyGRP48bobzhang7gallery8frontend3app10WizardStepE(step.fields);
  const f = _M0MPC15array5Array2atGRP48bobzhang7gallery8frontend3app10WizardStepE(fields, field_idx);
  _M0MPC15array5Array3setGRP48bobzhang7gallery8frontend3app11WizardFieldE(fields, field_idx, new _M0TP48bobzhang7gallery8frontend3app11WizardField(f.label, val, ""));
  _M0MPC15array5Array3setGRP48bobzhang7gallery8frontend3app11WizardFieldE(steps, self.form_wizard.current, new _M0TP48bobzhang7gallery8frontend3app10WizardStep(step.title, fields));
  const _bind = self.form_wizard;
  return { _0: new _M0TP48bobzhang7gallery8frontend3app5Model(self.section, self.component, self.text_input, self.text_area, self.checkbox, self.radio, self.select, self.toggle, self.slider, self.color_picker, self.avatar, self.badge, self.progress, self.tooltip, self.tag, self.skeleton, self.empty_state, self.accordion, self.tabs, self.breadcrumb, self.tree_view, self.data_table, self.calendar, self.timeline, self.chart, self.toast, self.modal, self.command_palette, self.kanban, self.searchable_select, self.date_range, new _M0TP48bobzhang7gallery8frontend3app15FormWizardState(steps, _bind.current, _bind.completed)), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none };
}
(() => {
  let dispatch;
  let app_cell;
  _L: {
    const _bind = _M0FP219moonbit_2dcommunity7rabbita20cell__with__dispatchGRP48bobzhang7gallery8frontend3app5ModelRP48bobzhang7gallery8frontend3app3MsgE(_M0FP48bobzhang7gallery8frontend3app14initial__model(), (dispatch$2, msg, model) => {
      let model$2;
      let cmd;
      _L$2: {
        const _bind$2 = _M0MP48bobzhang7gallery8frontend3app5Model6update(model, msg, dispatch$2);
        const _model = _bind$2._0;
        const _cmd = _bind$2._1;
        model$2 = _model;
        cmd = _cmd;
        break _L$2;
      }
      return { _0: cmd, _1: model$2 };
    }, (dispatch$2, model) => _M0MP48bobzhang7gallery8frontend3app5Model4view(model, dispatch$2));
    const _dispatch = _bind._0;
    const _app_cell = _bind._1;
    dispatch = _dispatch;
    app_cell = _app_cell;
    break _L;
  }
  const app = _M0FP219moonbit_2dcommunity7rabbita3new(app_cell);
  _M0MP219moonbit_2dcommunity7rabbita3App5mount(app, "app");
})();
//# sourceMappingURL=frontend.js.map
