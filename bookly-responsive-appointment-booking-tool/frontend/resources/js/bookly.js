const booklyJsVersion = "23.2";
/*!*/
var bookly = (function ($$O) {
    'use strict';

    function _classApplyDescriptorGet(receiver, descriptor) {
        if (descriptor.get) {
            return descriptor.get.call(receiver);
        }
        return descriptor.value;
    }

    function _assertClassBrand(e, t, n) {
        if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
        throw new TypeError("Private element is not present on this object");
    }

    function _classPrivateFieldGet2(s, a) {
        return s.get(_assertClassBrand(s, a));
    }

    function _classPrivateFieldGet(receiver, privateMap) {
        var descriptor = _classPrivateFieldGet2(privateMap, receiver);
        return _classApplyDescriptorGet(receiver, descriptor);
    }

    function _classApplyDescriptorSet(receiver, descriptor, value) {
        if (descriptor.set) {
            descriptor.set.call(receiver, value);
        } else {
            if (!descriptor.writable) {
                throw new TypeError("attempted to set read only private field");
            }
            descriptor.value = value;
        }
    }

    function _classPrivateFieldSet(receiver, privateMap, value) {
        var descriptor = _classPrivateFieldGet2(privateMap, receiver);
        _classApplyDescriptorSet(receiver, descriptor, value);
        return value;
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    var check = function (it) {
        return it && it.Math === Math && it;
    };

    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global$u =
        // eslint-disable-next-line es/no-global-this -- safe
        check(typeof globalThis == 'object' && globalThis) ||
        check(typeof window == 'object' && window) ||
        // eslint-disable-next-line no-restricted-globals -- safe
        check(typeof self == 'object' && self) ||
        check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
        check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
        // eslint-disable-next-line no-new-func -- fallback
        (function () {
            return this;
        })() || Function('return this')();

    var fails$v = function (exec) {
        try {
            return !!exec();
        } catch (error) {
            return true;
        }
    };

    var fails$u = fails$v;

    var functionBindNative = !fails$u(function () {
        // eslint-disable-next-line es/no-function-prototype-bind -- safe
        var test = (function () { /* empty */
        }).bind();
        // eslint-disable-next-line no-prototype-builtins -- safe
        return typeof test != 'function' || test.hasOwnProperty('prototype');
    });

    var NATIVE_BIND$3 = functionBindNative;

    var FunctionPrototype$3 = Function.prototype;
    var apply$5 = FunctionPrototype$3.apply;
    var call$i = FunctionPrototype$3.call;

    // eslint-disable-next-line es/no-reflect -- safe
    var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$3 ? call$i.bind(apply$5) : function () {
        return call$i.apply(apply$5, arguments);
    });

    var NATIVE_BIND$2 = functionBindNative;

    var FunctionPrototype$2 = Function.prototype;
    var call$h = FunctionPrototype$2.call;
    var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$h, call$h);

    var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
        return function () {
            return call$h.apply(fn, arguments);
        };
    };

    var uncurryThis$x = functionUncurryThis;

    var toString$e = uncurryThis$x({}.toString);
    var stringSlice$1 = uncurryThis$x(''.slice);

    var classofRaw$2 = function (it) {
        return stringSlice$1(toString$e(it), 8, -1);
    };

    var classofRaw$1 = classofRaw$2;
    var uncurryThis$w = functionUncurryThis;

    var functionUncurryThisClause = function (fn) {
        // Nashorn bug:
        //   https://github.com/zloirock/core-js/issues/1128
        //   https://github.com/zloirock/core-js/issues/1130
        if (classofRaw$1(fn) === 'Function') return uncurryThis$w(fn);
    };

    // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
    var documentAll = typeof document == 'object' && document.all;

    // `IsCallable` abstract operation
    // https://tc39.es/ecma262/#sec-iscallable
    // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
    var isCallable$l = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
        return typeof argument == 'function' || argument === documentAll;
    } : function (argument) {
        return typeof argument == 'function';
    };

    var objectGetOwnPropertyDescriptor = {};

    var fails$t = fails$v;

    // Detect IE8's incomplete defineProperty implementation
    var descriptors = !fails$t(function () {
        // eslint-disable-next-line es/no-object-defineproperty -- required for testing
        return Object.defineProperty({}, 1, {
            get: function () {
                return 7;
            }
        })[1] !== 7;
    });

    var NATIVE_BIND$1 = functionBindNative;

    var call$g = Function.prototype.call;

    var functionCall = NATIVE_BIND$1 ? call$g.bind(call$g) : function () {
        return call$g.apply(call$g, arguments);
    };

    var objectPropertyIsEnumerable = {};

    var $propertyIsEnumerable$2 = {}.propertyIsEnumerable;
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

    // Nashorn ~ JDK8 bug
    var NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable$2.call({1: 2}, 1);

    // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
    objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor$3(this, V);
        return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable$2;

    var createPropertyDescriptor$7 = function (bitmap, value) {
        return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
        };
    };

    var uncurryThis$v = functionUncurryThis;
    var fails$s = fails$v;
    var classof$c = classofRaw$2;

    var $Object$5 = Object;
    var split = uncurryThis$v(''.split);

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var indexedObject = fails$s(function () {
        // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
        // eslint-disable-next-line no-prototype-builtins -- safe
        return !$Object$5('z').propertyIsEnumerable(0);
    }) ? function (it) {
        return classof$c(it) === 'String' ? split(it, '') : $Object$5(it);
    } : $Object$5;

    // we can't use just `it == null` since of `document.all` special case
    // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
    var isNullOrUndefined$7 = function (it) {
        return it === null || it === undefined;
    };

    var isNullOrUndefined$6 = isNullOrUndefined$7;

    var $TypeError$g = TypeError;

    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    var requireObjectCoercible$7 = function (it) {
        if (isNullOrUndefined$6(it)) throw new $TypeError$g("Can't call method on " + it);
        return it;
    };

    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject$1 = indexedObject;
    var requireObjectCoercible$6 = requireObjectCoercible$7;

    var toIndexedObject$9 = function (it) {
        return IndexedObject$1(requireObjectCoercible$6(it));
    };

    var isCallable$k = isCallable$l;

    var isObject$j = function (it) {
        return typeof it == 'object' ? it !== null : isCallable$k(it);
    };

    var path$j = {};

    var path$i = path$j;
    var global$t = global$u;
    var isCallable$j = isCallable$l;

    var aFunction = function (variable) {
        return isCallable$j(variable) ? variable : undefined;
    };

    var getBuiltIn$f = function (namespace, method) {
        return arguments.length < 2 ? aFunction(path$i[namespace]) || aFunction(global$t[namespace])
            : path$i[namespace] && path$i[namespace][method] || global$t[namespace] && global$t[namespace][method];
    };

    var uncurryThis$u = functionUncurryThis;

    var objectIsPrototypeOf = uncurryThis$u({}.isPrototypeOf);

    var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

    var global$s = global$u;
    var userAgent$5 = engineUserAgent;

    var process$3 = global$s.process;
    var Deno$1 = global$s.Deno;
    var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
    var v8 = versions && versions.v8;
    var match, version;

    if (v8) {
        match = v8.split('.');
        // in old Chrome, versions of V8 isn't V8 = Chrome / 10
        // but their correct versions are not interesting for us
        version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }

    // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
    // so check `userAgent` even if `.v8` exists, but 0
    if (!version && userAgent$5) {
        match = userAgent$5.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
            match = userAgent$5.match(/Chrome\/(\d+)/);
            if (match) version = +match[1];
        }
    }

    var engineV8Version = version;

    /* eslint-disable es/no-symbol -- required for testing */
    var V8_VERSION$3 = engineV8Version;
    var fails$r = fails$v;
    var global$r = global$u;

    var $String$5 = global$r.String;

    // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
    var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$r(function () {
        var symbol = Symbol('symbol detection');
        // Chrome 38 Symbol has incorrect toString conversion
        // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
        // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
        // of course, fail.
        return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
            // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
            !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
    });

    /* eslint-disable es/no-symbol -- required for testing */
    var NATIVE_SYMBOL$5 = symbolConstructorDetection;

    var useSymbolAsUid = NATIVE_SYMBOL$5
        && !Symbol.sham
        && typeof Symbol.iterator == 'symbol';

    var getBuiltIn$e = getBuiltIn$f;
    var isCallable$i = isCallable$l;
    var isPrototypeOf$i = objectIsPrototypeOf;
    var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

    var $Object$4 = Object;

    var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
        return typeof it == 'symbol';
    } : function (it) {
        var $Symbol = getBuiltIn$e('Symbol');
        return isCallable$i($Symbol) && isPrototypeOf$i($Symbol.prototype, $Object$4(it));
    };

    var $String$4 = String;

    var tryToString$6 = function (argument) {
        try {
            return $String$4(argument);
        } catch (error) {
            return 'Object';
        }
    };

    var isCallable$h = isCallable$l;
    var tryToString$5 = tryToString$6;

    var $TypeError$f = TypeError;

    // `Assert: IsCallable(argument) is true`
    var aCallable$c = function (argument) {
        if (isCallable$h(argument)) return argument;
        throw new $TypeError$f(tryToString$5(argument) + ' is not a function');
    };

    var aCallable$b = aCallable$c;
    var isNullOrUndefined$5 = isNullOrUndefined$7;

    // `GetMethod` abstract operation
    // https://tc39.es/ecma262/#sec-getmethod
    var getMethod$3 = function (V, P) {
        var func = V[P];
        return isNullOrUndefined$5(func) ? undefined : aCallable$b(func);
    };

    var call$f = functionCall;
    var isCallable$g = isCallable$l;
    var isObject$i = isObject$j;

    var $TypeError$e = TypeError;

    // `OrdinaryToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-ordinarytoprimitive
    var ordinaryToPrimitive$1 = function (input, pref) {
        var fn, val;
        if (pref === 'string' && isCallable$g(fn = input.toString) && !isObject$i(val = call$f(fn, input))) return val;
        if (isCallable$g(fn = input.valueOf) && !isObject$i(val = call$f(fn, input))) return val;
        if (pref !== 'string' && isCallable$g(fn = input.toString) && !isObject$i(val = call$f(fn, input))) return val;
        throw new $TypeError$e("Can't convert object to primitive value");
    };

    var shared$7 = {exports: {}};

    var isPure = true;

    var global$q = global$u;

    // eslint-disable-next-line es/no-object-defineproperty -- safe
    var defineProperty$d = Object.defineProperty;

    var defineGlobalProperty$1 = function (key, value) {
        try {
            defineProperty$d(global$q, key, {value: value, configurable: true, writable: true});
        } catch (error) {
            global$q[key] = value;
        }
        return value;
    };

    var global$p = global$u;
    var defineGlobalProperty = defineGlobalProperty$1;

    var SHARED = '__core-js_shared__';
    var store$3 = global$p[SHARED] || defineGlobalProperty(SHARED, {});

    var sharedStore = store$3;

    var store$2 = sharedStore;

    (shared$7.exports = function (key, value) {
        return store$2[key] || (store$2[key] = value !== undefined ? value : {});
    })('versions', []).push({
        version: '3.35.0',
        mode: 'pure',
        copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE',
        source: 'https://github.com/zloirock/core-js'
    });

    var sharedExports = shared$7.exports;

    var requireObjectCoercible$5 = requireObjectCoercible$7;

    var $Object$3 = Object;

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    var toObject$a = function (argument) {
        return $Object$3(requireObjectCoercible$5(argument));
    };

    var uncurryThis$t = functionUncurryThis;
    var toObject$9 = toObject$a;

    var hasOwnProperty = uncurryThis$t({}.hasOwnProperty);

    // `HasOwnProperty` abstract operation
    // https://tc39.es/ecma262/#sec-hasownproperty
    // eslint-disable-next-line es/no-object-hasown -- safe
    var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty(toObject$9(it), key);
    };

    var uncurryThis$s = functionUncurryThis;

    var id$2 = 0;
    var postfix = Math.random();
    var toString$d = uncurryThis$s(1.0.toString);

    var uid$4 = function (key) {
        return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$d(++id$2 + postfix, 36);
    };

    var global$o = global$u;
    var shared$6 = sharedExports;
    var hasOwn$g = hasOwnProperty_1;
    var uid$3 = uid$4;
    var NATIVE_SYMBOL$4 = symbolConstructorDetection;
    var USE_SYMBOL_AS_UID = useSymbolAsUid;

    var Symbol$5 = global$o.Symbol;
    var WellKnownSymbolsStore$2 = shared$6('wks');
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$5['for'] || Symbol$5 : Symbol$5 && Symbol$5.withoutSetter || uid$3;

    var wellKnownSymbol$o = function (name) {
        if (!hasOwn$g(WellKnownSymbolsStore$2, name)) {
            WellKnownSymbolsStore$2[name] = NATIVE_SYMBOL$4 && hasOwn$g(Symbol$5, name)
                ? Symbol$5[name]
                : createWellKnownSymbol('Symbol.' + name);
        }
        return WellKnownSymbolsStore$2[name];
    };

    var call$e = functionCall;
    var isObject$h = isObject$j;
    var isSymbol$4 = isSymbol$5;
    var getMethod$2 = getMethod$3;
    var ordinaryToPrimitive = ordinaryToPrimitive$1;
    var wellKnownSymbol$n = wellKnownSymbol$o;

    var $TypeError$d = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol$n('toPrimitive');

    // `ToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-toprimitive
    var toPrimitive$7 = function (input, pref) {
        if (!isObject$h(input) || isSymbol$4(input)) return input;
        var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
            if (pref === undefined) pref = 'default';
            result = call$e(exoticToPrim, input, pref);
            if (!isObject$h(result) || isSymbol$4(result)) return result;
            throw new $TypeError$d("Can't convert object to primitive value");
        }
        if (pref === undefined) pref = 'number';
        return ordinaryToPrimitive(input, pref);
    };

    var toPrimitive$6 = toPrimitive$7;
    var isSymbol$3 = isSymbol$5;

    // `ToPropertyKey` abstract operation
    // https://tc39.es/ecma262/#sec-topropertykey
    var toPropertyKey$5 = function (argument) {
        var key = toPrimitive$6(argument, 'string');
        return isSymbol$3(key) ? key : key + '';
    };

    var global$n = global$u;
    var isObject$g = isObject$j;

    var document$3 = global$n.document;
    // typeof document.createElement is 'object' in old IE
    var EXISTS$1 = isObject$g(document$3) && isObject$g(document$3.createElement);

    var documentCreateElement$1 = function (it) {
        return EXISTS$1 ? document$3.createElement(it) : {};
    };

    var DESCRIPTORS$f = descriptors;
    var fails$q = fails$v;
    var createElement$1 = documentCreateElement$1;

    // Thanks to IE8 for its funny defineProperty
    var ie8DomDefine = !DESCRIPTORS$f && !fails$q(function () {
        // eslint-disable-next-line es/no-object-defineproperty -- required for testing
        return Object.defineProperty(createElement$1('div'), 'a', {
            get: function () {
                return 7;
            }
        }).a !== 7;
    });

    var DESCRIPTORS$e = descriptors;
    var call$d = functionCall;
    var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
    var createPropertyDescriptor$6 = createPropertyDescriptor$7;
    var toIndexedObject$8 = toIndexedObject$9;
    var toPropertyKey$4 = toPropertyKey$5;
    var hasOwn$f = hasOwnProperty_1;
    var IE8_DOM_DEFINE$1 = ie8DomDefine;

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
    objectGetOwnPropertyDescriptor.f = DESCRIPTORS$e ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject$8(O);
        P = toPropertyKey$4(P);
        if (IE8_DOM_DEFINE$1) try {
            return $getOwnPropertyDescriptor$2(O, P);
        } catch (error) { /* empty */
        }
        if (hasOwn$f(O, P)) return createPropertyDescriptor$6(!call$d(propertyIsEnumerableModule$1.f, O, P), O[P]);
    };

    var fails$p = fails$v;
    var isCallable$f = isCallable$l;

    var replacement = /#|\.prototype\./;

    var isForced$2 = function (feature, detection) {
        var value = data[normalize(feature)];
        return value === POLYFILL ? true
            : value === NATIVE ? false
                : isCallable$f(detection) ? fails$p(detection)
                    : !!detection;
    };

    var normalize = isForced$2.normalize = function (string) {
        return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced$2.data = {};
    var NATIVE = isForced$2.NATIVE = 'N';
    var POLYFILL = isForced$2.POLYFILL = 'P';

    var isForced_1 = isForced$2;

    var uncurryThis$r = functionUncurryThisClause;
    var aCallable$a = aCallable$c;
    var NATIVE_BIND = functionBindNative;

    var bind$9 = uncurryThis$r(uncurryThis$r.bind);

    // optional / simple context binding
    var functionBindContext = function (fn, that) {
        aCallable$a(fn);
        return that === undefined ? fn : NATIVE_BIND ? bind$9(fn, that) : function (/* ...args */) {
            return fn.apply(that, arguments);
        };
    };

    var objectDefineProperty = {};

    var DESCRIPTORS$d = descriptors;
    var fails$o = fails$v;

    // V8 ~ Chrome 36-
    // https://bugs.chromium.org/p/v8/issues/detail?id=3334
    var v8PrototypeDefineBug = DESCRIPTORS$d && fails$o(function () {
        // eslint-disable-next-line es/no-object-defineproperty -- required for testing
        return Object.defineProperty(function () { /* empty */
        }, 'prototype', {
            value: 42,
            writable: false
        }).prototype !== 42;
    });

    var isObject$f = isObject$j;

    var $String$3 = String;
    var $TypeError$c = TypeError;

    // `Assert: Type(argument) is Object`
    var anObject$d = function (argument) {
        if (isObject$f(argument)) return argument;
        throw new $TypeError$c($String$3(argument) + ' is not an object');
    };

    var DESCRIPTORS$c = descriptors;
    var IE8_DOM_DEFINE = ie8DomDefine;
    var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
    var anObject$c = anObject$d;
    var toPropertyKey$3 = toPropertyKey$5;

    var $TypeError$b = TypeError;
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    var $defineProperty$1 = Object.defineProperty;
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = 'enumerable';
    var CONFIGURABLE$1 = 'configurable';
    var WRITABLE = 'writable';

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    objectDefineProperty.f = DESCRIPTORS$c ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
        anObject$c(O);
        P = toPropertyKey$3(P);
        anObject$c(Attributes);
        if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
            var current = $getOwnPropertyDescriptor$1(O, P);
            if (current && current[WRITABLE]) {
                O[P] = Attributes.value;
                Attributes = {
                    configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
                    enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                    writable: false
                };
            }
        }
        return $defineProperty$1(O, P, Attributes);
    } : $defineProperty$1 : function defineProperty(O, P, Attributes) {
        anObject$c(O);
        P = toPropertyKey$3(P);
        anObject$c(Attributes);
        if (IE8_DOM_DEFINE) try {
            return $defineProperty$1(O, P, Attributes);
        } catch (error) { /* empty */
        }
        if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$b('Accessors not supported');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
    };

    var DESCRIPTORS$b = descriptors;
    var definePropertyModule$4 = objectDefineProperty;
    var createPropertyDescriptor$5 = createPropertyDescriptor$7;

    var createNonEnumerableProperty$8 = DESCRIPTORS$b ? function (object, key, value) {
        return definePropertyModule$4.f(object, key, createPropertyDescriptor$5(1, value));
    } : function (object, key, value) {
        object[key] = value;
        return object;
    };

    var global$m = global$u;
    var apply$4 = functionApply;
    var uncurryThis$q = functionUncurryThisClause;
    var isCallable$e = isCallable$l;
    var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
    var isForced$1 = isForced_1;
    var path$h = path$j;
    var bind$8 = functionBindContext;
    var createNonEnumerableProperty$7 = createNonEnumerableProperty$8;
    var hasOwn$e = hasOwnProperty_1;

    var wrapConstructor = function (NativeConstructor) {
        var Wrapper = function (a, b, c) {
            if (this instanceof Wrapper) {
                switch (arguments.length) {
                    case 0:
                        return new NativeConstructor();
                    case 1:
                        return new NativeConstructor(a);
                    case 2:
                        return new NativeConstructor(a, b);
                }
                return new NativeConstructor(a, b, c);
            }
            return apply$4(NativeConstructor, this, arguments);
        };
        Wrapper.prototype = NativeConstructor.prototype;
        return Wrapper;
    };

    /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
    var _export = function (options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var PROTO = options.proto;

        var nativeSource = GLOBAL ? global$m : STATIC ? global$m[TARGET] : (global$m[TARGET] || {}).prototype;

        var target = GLOBAL ? path$h : path$h[TARGET] || createNonEnumerableProperty$7(path$h, TARGET, {})[TARGET];
        var targetPrototype = target.prototype;

        var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
        var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

        for (key in source) {
            FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
            // contains in native
            USE_NATIVE = !FORCED && nativeSource && hasOwn$e(nativeSource, key);

            targetProperty = target[key];

            if (USE_NATIVE) if (options.dontCallGetSet) {
                descriptor = getOwnPropertyDescriptor$2(nativeSource, key);
                nativeProperty = descriptor && descriptor.value;
            } else nativeProperty = nativeSource[key];

            // export native or implementation
            sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

            if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

            // bind methods to global for calling from export context
            if (options.bind && USE_NATIVE) resultProperty = bind$8(sourceProperty, global$m);
            // wrap global constructors for prevent changes in this version
            else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
            // make static versions for prototype methods
            else if (PROTO && isCallable$e(sourceProperty)) resultProperty = uncurryThis$q(sourceProperty);
            // default case
            else resultProperty = sourceProperty;

            // add a flag to not completely full polyfills
            if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
                createNonEnumerableProperty$7(resultProperty, 'sham', true);
            }

            createNonEnumerableProperty$7(target, key, resultProperty);

            if (PROTO) {
                VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
                if (!hasOwn$e(path$h, VIRTUAL_PROTOTYPE)) {
                    createNonEnumerableProperty$7(path$h, VIRTUAL_PROTOTYPE, {});
                }
                // export virtual prototype methods
                createNonEnumerableProperty$7(path$h[VIRTUAL_PROTOTYPE], key, sourceProperty);
                // export real prototype methods
                if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
                    createNonEnumerableProperty$7(targetPrototype, key, sourceProperty);
                }
            }
        }
    };

    var shared$5 = sharedExports;
    var uid$2 = uid$4;

    var keys$3 = shared$5('keys');

    var sharedKey$4 = function (key) {
        return keys$3[key] || (keys$3[key] = uid$2(key));
    };

    var fails$n = fails$v;

    var correctPrototypeGetter = !fails$n(function () {
        function F() { /* empty */
        }

        F.prototype.constructor = null;
        // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
        return Object.getPrototypeOf(new F()) !== F.prototype;
    });

    var hasOwn$d = hasOwnProperty_1;
    var isCallable$d = isCallable$l;
    var toObject$8 = toObject$a;
    var sharedKey$3 = sharedKey$4;
    var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

    var IE_PROTO$1 = sharedKey$3('IE_PROTO');
    var $Object$2 = Object;
    var ObjectPrototype$1 = $Object$2.prototype;

    // `Object.getPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.getprototypeof
    // eslint-disable-next-line es/no-object-getprototypeof -- safe
    var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER ? $Object$2.getPrototypeOf : function (O) {
        var object = toObject$8(O);
        if (hasOwn$d(object, IE_PROTO$1)) return object[IE_PROTO$1];
        var constructor = object.constructor;
        if (isCallable$d(constructor) && object instanceof constructor) {
            return constructor.prototype;
        }
        return object instanceof $Object$2 ? ObjectPrototype$1 : null;
    };

    var uncurryThis$p = functionUncurryThis;
    var aCallable$9 = aCallable$c;

    var functionUncurryThisAccessor = function (object, key, method) {
        try {
            // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
            return uncurryThis$p(aCallable$9(Object.getOwnPropertyDescriptor(object, key)[method]));
        } catch (error) { /* empty */
        }
    };

    var isObject$e = isObject$j;

    var isPossiblePrototype$1 = function (argument) {
        return isObject$e(argument) || argument === null;
    };

    var isPossiblePrototype = isPossiblePrototype$1;

    var $String$2 = String;
    var $TypeError$a = TypeError;

    var aPossiblePrototype$1 = function (argument) {
        if (isPossiblePrototype(argument)) return argument;
        throw new $TypeError$a("Can't set " + $String$2(argument) + ' as a prototype');
    };

    /* eslint-disable no-proto -- safe */
    var uncurryThisAccessor = functionUncurryThisAccessor;
    var anObject$b = anObject$d;
    var aPossiblePrototype = aPossiblePrototype$1;

    // `Object.setPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    // eslint-disable-next-line es/no-object-setprototypeof -- safe
    var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;
        try {
            setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
            setter(test, []);
            CORRECT_SETTER = test instanceof Array;
        } catch (error) { /* empty */
        }
        return function setPrototypeOf(O, proto) {
            anObject$b(O);
            aPossiblePrototype(proto);
            if (CORRECT_SETTER) setter(O, proto);
            else O.__proto__ = proto;
            return O;
        };
    }() : undefined);

    var objectGetOwnPropertyNames = {};

    var ceil = Math.ceil;
    var floor$1 = Math.floor;

    // `Math.trunc` method
    // https://tc39.es/ecma262/#sec-math.trunc
    // eslint-disable-next-line es/no-math-trunc -- safe
    var mathTrunc = Math.trunc || function trunc(x) {
        var n = +x;
        return (n > 0 ? floor$1 : ceil)(n);
    };

    var trunc = mathTrunc;

    // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity
    var toIntegerOrInfinity$5 = function (argument) {
        var number = +argument;
        // eslint-disable-next-line no-self-compare -- NaN check
        return number !== number || number === 0 ? 0 : trunc(number);
    };

    var toIntegerOrInfinity$4 = toIntegerOrInfinity$5;

    var max$2 = Math.max;
    var min$2 = Math.min;

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    var toAbsoluteIndex$4 = function (index, length) {
        var integer = toIntegerOrInfinity$4(index);
        return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
    };

    var toIntegerOrInfinity$3 = toIntegerOrInfinity$5;

    var min$1 = Math.min;

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    var toLength$1 = function (argument) {
        return argument > 0 ? min$1(toIntegerOrInfinity$3(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };

    var toLength = toLength$1;

    // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike
    var lengthOfArrayLike$9 = function (obj) {
        return toLength(obj.length);
    };

    var toIndexedObject$7 = toIndexedObject$9;
    var toAbsoluteIndex$3 = toAbsoluteIndex$4;
    var lengthOfArrayLike$8 = lengthOfArrayLike$9;

    // `Array.prototype.{ indexOf, includes }` methods implementation
    var createMethod$4 = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
            var O = toIndexedObject$7($this);
            var length = lengthOfArrayLike$8(O);
            var index = toAbsoluteIndex$3(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare -- NaN check
            if (IS_INCLUDES && el !== el) while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare -- NaN check
                if (value !== value) return true;
                // Array#indexOf ignores holes, Array#includes - not
            } else for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
            }
            return !IS_INCLUDES && -1;
        };
    };

    var arrayIncludes = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod$4(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod$4(false)
    };

    var hiddenKeys$6 = {};

    var uncurryThis$o = functionUncurryThis;
    var hasOwn$c = hasOwnProperty_1;
    var toIndexedObject$6 = toIndexedObject$9;
    var indexOf$4 = arrayIncludes.indexOf;
    var hiddenKeys$5 = hiddenKeys$6;

    var push$7 = uncurryThis$o([].push);

    var objectKeysInternal = function (object, names) {
        var O = toIndexedObject$6(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) !hasOwn$c(hiddenKeys$5, key) && hasOwn$c(O, key) && push$7(result, key);
        // Don't enum bug & hidden keys
        while (names.length > i) if (hasOwn$c(O, key = names[i++])) {
            ~indexOf$4(result, key) || push$7(result, key);
        }
        return result;
    };

    // IE8- don't enum bug keys
    var enumBugKeys$3 = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf'
    ];

    var internalObjectKeys$1 = objectKeysInternal;
    var enumBugKeys$2 = enumBugKeys$3;

    var hiddenKeys$4 = enumBugKeys$2.concat('length', 'prototype');

    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    // eslint-disable-next-line es/no-object-getownpropertynames -- safe
    objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys$1(O, hiddenKeys$4);
    };

    var objectGetOwnPropertySymbols = {};

    // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
    objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

    var getBuiltIn$d = getBuiltIn$f;
    var uncurryThis$n = functionUncurryThis;
    var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
    var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
    var anObject$a = anObject$d;

    var concat$4 = uncurryThis$n([].concat);

    // all object keys, includes non-enumerable and symbols
    var ownKeys$1 = getBuiltIn$d('Reflect', 'ownKeys') || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule$2.f(anObject$a(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
        return getOwnPropertySymbols ? concat$4(keys, getOwnPropertySymbols(it)) : keys;
    };

    var hasOwn$b = hasOwnProperty_1;
    var ownKeys = ownKeys$1;
    var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
    var definePropertyModule$3 = objectDefineProperty;

    var copyConstructorProperties$1 = function (target, source, exceptions) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule$3.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!hasOwn$b(target, key) && !(exceptions && hasOwn$b(exceptions, key))) {
                defineProperty(target, key, getOwnPropertyDescriptor(source, key));
            }
        }
    };

    var objectDefineProperties = {};

    var internalObjectKeys = objectKeysInternal;
    var enumBugKeys$1 = enumBugKeys$3;

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es/no-object-keys -- safe
    var objectKeys$3 = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys$1);
    };

    var DESCRIPTORS$a = descriptors;
    var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
    var definePropertyModule$2 = objectDefineProperty;
    var anObject$9 = anObject$d;
    var toIndexedObject$5 = toIndexedObject$9;
    var objectKeys$2 = objectKeys$3;

    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    // eslint-disable-next-line es/no-object-defineproperties -- safe
    objectDefineProperties.f = DESCRIPTORS$a && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject$9(O);
        var props = toIndexedObject$5(Properties);
        var keys = objectKeys$2(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
        return O;
    };

    var getBuiltIn$c = getBuiltIn$f;

    var html$2 = getBuiltIn$c('document', 'documentElement');

    /* global ActiveXObject -- old IE, WSH */
    var anObject$8 = anObject$d;
    var definePropertiesModule$1 = objectDefineProperties;
    var enumBugKeys = enumBugKeys$3;
    var hiddenKeys$3 = hiddenKeys$6;
    var html$1 = html$2;
    var documentCreateElement = documentCreateElement$1;
    var sharedKey$2 = sharedKey$4;

    var GT = '>';
    var LT = '<';
    var PROTOTYPE$1 = 'prototype';
    var SCRIPT = 'script';
    var IE_PROTO = sharedKey$2('IE_PROTO');

    var EmptyConstructor = function () { /* empty */
    };

    var scriptTag = function (content) {
        return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
    };

    // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
    var NullProtoObjectViaActiveX = function (activeXDocument) {
        activeXDocument.write(scriptTag(''));
        activeXDocument.close();
        var temp = activeXDocument.parentWindow.Object;
        activeXDocument = null; // avoid memory leak
        return temp;
    };

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var NullProtoObjectViaIFrame = function () {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = documentCreateElement('iframe');
        var JS = 'java' + SCRIPT + ':';
        var iframeDocument;
        iframe.style.display = 'none';
        html$1.appendChild(iframe);
        // https://github.com/zloirock/core-js/issues/475
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag('document.F=Object'));
        iframeDocument.close();
        return iframeDocument.F;
    };

    // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug
    var activeXDocument;
    var NullProtoObject = function () {
        try {
            activeXDocument = new ActiveXObject('htmlfile');
        } catch (error) { /* ignore */
        }
        NullProtoObject = typeof document != 'undefined'
            ? document.domain && activeXDocument
                ? NullProtoObjectViaActiveX(activeXDocument) // old IE
                : NullProtoObjectViaIFrame()
            : NullProtoObjectViaActiveX(activeXDocument); // WSH
        var length = enumBugKeys.length;
        while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
        return NullProtoObject();
    };

    hiddenKeys$3[IE_PROTO] = true;

    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    // eslint-disable-next-line es/no-object-create -- safe
    var objectCreate = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
            EmptyConstructor[PROTOTYPE$1] = anObject$8(O);
            result = new EmptyConstructor();
            EmptyConstructor[PROTOTYPE$1] = null;
            // add "__proto__" for Object.getPrototypeOf polyfill
            result[IE_PROTO] = O;
        } else result = NullProtoObject();
        return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
    };

    var isObject$d = isObject$j;
    var createNonEnumerableProperty$6 = createNonEnumerableProperty$8;

    // `InstallErrorCause` abstract operation
    // https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
    var installErrorCause$1 = function (O, options) {
        if (isObject$d(options) && 'cause' in options) {
            createNonEnumerableProperty$6(O, 'cause', options.cause);
        }
    };

    var uncurryThis$m = functionUncurryThis;

    var $Error$1 = Error;
    var replace$2 = uncurryThis$m(''.replace);

    var TEST = (function (arg) {
        return String(new $Error$1(arg).stack);
    })('zxcasd');
    // eslint-disable-next-line redos/no-vulnerable -- safe
    var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
    var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

    var errorStackClear = function (stack, dropEntries) {
        if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
            while (dropEntries--) stack = replace$2(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
        }
        return stack;
    };

    var fails$m = fails$v;
    var createPropertyDescriptor$4 = createPropertyDescriptor$7;

    var errorStackInstallable = !fails$m(function () {
        var error = new Error('a');
        if (!('stack' in error)) return true;
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty(error, 'stack', createPropertyDescriptor$4(1, 7));
        return error.stack !== 7;
    });

    var createNonEnumerableProperty$5 = createNonEnumerableProperty$8;
    var clearErrorStack = errorStackClear;
    var ERROR_STACK_INSTALLABLE = errorStackInstallable;

    // non-standard V8
    var captureStackTrace = Error.captureStackTrace;

    var errorStackInstall = function (error, C, stack, dropEntries) {
        if (ERROR_STACK_INSTALLABLE) {
            if (captureStackTrace) captureStackTrace(error, C);
            else createNonEnumerableProperty$5(error, 'stack', clearErrorStack(stack, dropEntries));
        }
    };

    var iterators = {};

    var wellKnownSymbol$m = wellKnownSymbol$o;
    var Iterators$5 = iterators;

    var ITERATOR$6 = wellKnownSymbol$m('iterator');
    var ArrayPrototype$c = Array.prototype;

    // check on default Array iterator
    var isArrayIteratorMethod$2 = function (it) {
        return it !== undefined && (Iterators$5.Array === it || ArrayPrototype$c[ITERATOR$6] === it);
    };

    var wellKnownSymbol$l = wellKnownSymbol$o;

    var TO_STRING_TAG$3 = wellKnownSymbol$l('toStringTag');
    var test$1 = {};

    test$1[TO_STRING_TAG$3] = 'z';

    var toStringTagSupport = String(test$1) === '[object z]';

    var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
    var isCallable$c = isCallable$l;
    var classofRaw = classofRaw$2;
    var wellKnownSymbol$k = wellKnownSymbol$o;

    var TO_STRING_TAG$2 = wellKnownSymbol$k('toStringTag');
    var $Object$1 = Object;

    // ES3 wrong here
    var CORRECT_ARGUMENTS = classofRaw(function () {
        return arguments;
    }()) === 'Arguments';

    // fallback for IE11 Script Access Denied error
    var tryGet = function (it, key) {
        try {
            return it[key];
        } catch (error) { /* empty */
        }
    };

    // getting tag from ES6+ `Object.prototype.toString`
    var classof$b = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
        var O, tag, result;
        return it === undefined ? 'Undefined' : it === null ? 'Null'
            // @@toStringTag case
            : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$2)) == 'string' ? tag
                // builtinTag case
                : CORRECT_ARGUMENTS ? classofRaw(O)
                    // ES3 arguments fallback
                    : (result = classofRaw(O)) === 'Object' && isCallable$c(O.callee) ? 'Arguments' : result;
    };

    var classof$a = classof$b;
    var getMethod$1 = getMethod$3;
    var isNullOrUndefined$4 = isNullOrUndefined$7;
    var Iterators$4 = iterators;
    var wellKnownSymbol$j = wellKnownSymbol$o;

    var ITERATOR$5 = wellKnownSymbol$j('iterator');

    var getIteratorMethod$3 = function (it) {
        if (!isNullOrUndefined$4(it)) return getMethod$1(it, ITERATOR$5)
            || getMethod$1(it, '@@iterator')
            || Iterators$4[classof$a(it)];
    };

    var call$c = functionCall;
    var aCallable$8 = aCallable$c;
    var anObject$7 = anObject$d;
    var tryToString$4 = tryToString$6;
    var getIteratorMethod$2 = getIteratorMethod$3;

    var $TypeError$9 = TypeError;

    var getIterator$2 = function (argument, usingIterator) {
        var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
        if (aCallable$8(iteratorMethod)) return anObject$7(call$c(iteratorMethod, argument));
        throw new $TypeError$9(tryToString$4(argument) + ' is not iterable');
    };

    var call$b = functionCall;
    var anObject$6 = anObject$d;
    var getMethod = getMethod$3;

    var iteratorClose$2 = function (iterator, kind, value) {
        var innerResult, innerError;
        anObject$6(iterator);
        try {
            innerResult = getMethod(iterator, 'return');
            if (!innerResult) {
                if (kind === 'throw') throw value;
                return value;
            }
            innerResult = call$b(innerResult, iterator);
        } catch (error) {
            innerError = true;
            innerResult = error;
        }
        if (kind === 'throw') throw value;
        if (innerError) throw innerResult;
        anObject$6(innerResult);
        return value;
    };

    var bind$7 = functionBindContext;
    var call$a = functionCall;
    var anObject$5 = anObject$d;
    var tryToString$3 = tryToString$6;
    var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
    var lengthOfArrayLike$7 = lengthOfArrayLike$9;
    var isPrototypeOf$h = objectIsPrototypeOf;
    var getIterator$1 = getIterator$2;
    var getIteratorMethod$1 = getIteratorMethod$3;
    var iteratorClose$1 = iteratorClose$2;

    var $TypeError$8 = TypeError;

    var Result = function (stopped, result) {
        this.stopped = stopped;
        this.result = result;
    };

    var ResultPrototype = Result.prototype;

    var iterate$9 = function (iterable, unboundFunction, options) {
        var that = options && options.that;
        var AS_ENTRIES = !!(options && options.AS_ENTRIES);
        var IS_RECORD = !!(options && options.IS_RECORD);
        var IS_ITERATOR = !!(options && options.IS_ITERATOR);
        var INTERRUPTED = !!(options && options.INTERRUPTED);
        var fn = bind$7(unboundFunction, that);
        var iterator, iterFn, index, length, result, next, step;

        var stop = function (condition) {
            if (iterator) iteratorClose$1(iterator, 'normal', condition);
            return new Result(true, condition);
        };

        var callFn = function (value) {
            if (AS_ENTRIES) {
                anObject$5(value);
                return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
            }
            return INTERRUPTED ? fn(value, stop) : fn(value);
        };

        if (IS_RECORD) {
            iterator = iterable.iterator;
        } else if (IS_ITERATOR) {
            iterator = iterable;
        } else {
            iterFn = getIteratorMethod$1(iterable);
            if (!iterFn) throw new $TypeError$8(tryToString$3(iterable) + ' is not iterable');
            // optimisation for array iterators
            if (isArrayIteratorMethod$1(iterFn)) {
                for (index = 0, length = lengthOfArrayLike$7(iterable); length > index; index++) {
                    result = callFn(iterable[index]);
                    if (result && isPrototypeOf$h(ResultPrototype, result)) return result;
                }
                return new Result(false);
            }
            iterator = getIterator$1(iterable, iterFn);
        }

        next = IS_RECORD ? iterable.next : iterator.next;
        while (!(step = call$a(next, iterator)).done) {
            try {
                result = callFn(step.value);
            } catch (error) {
                iteratorClose$1(iterator, 'throw', error);
            }
            if (typeof result == 'object' && result && isPrototypeOf$h(ResultPrototype, result)) return result;
        }
        return new Result(false);
    };

    var classof$9 = classof$b;

    var $String$1 = String;

    var toString$c = function (argument) {
        if (classof$9(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
        return $String$1(argument);
    };

    var toString$b = toString$c;

    var normalizeStringArgument$1 = function (argument, $default) {
        return argument === undefined ? arguments.length < 2 ? '' : $default : toString$b(argument);
    };

    var $$N = _export;
    var isPrototypeOf$g = objectIsPrototypeOf;
    var getPrototypeOf$2 = objectGetPrototypeOf$1;
    var setPrototypeOf = objectSetPrototypeOf;
    var copyConstructorProperties = copyConstructorProperties$1;
    var create$7 = objectCreate;
    var createNonEnumerableProperty$4 = createNonEnumerableProperty$8;
    var createPropertyDescriptor$3 = createPropertyDescriptor$7;
    var installErrorCause = installErrorCause$1;
    var installErrorStack = errorStackInstall;
    var iterate$8 = iterate$9;
    var normalizeStringArgument = normalizeStringArgument$1;
    var wellKnownSymbol$i = wellKnownSymbol$o;

    var TO_STRING_TAG$1 = wellKnownSymbol$i('toStringTag');
    var $Error = Error;
    var push$6 = [].push;

    var $AggregateError = function AggregateError(errors, message /* , options */) {
        var isInstance = isPrototypeOf$g(AggregateErrorPrototype, this);
        var that;
        if (setPrototypeOf) {
            that = setPrototypeOf(new $Error(), isInstance ? getPrototypeOf$2(this) : AggregateErrorPrototype);
        } else {
            that = isInstance ? this : create$7(AggregateErrorPrototype);
            createNonEnumerableProperty$4(that, TO_STRING_TAG$1, 'Error');
        }
        if (message !== undefined) createNonEnumerableProperty$4(that, 'message', normalizeStringArgument(message));
        installErrorStack(that, $AggregateError, that.stack, 1);
        if (arguments.length > 2) installErrorCause(that, arguments[2]);
        var errorsArray = [];
        iterate$8(errors, push$6, {that: errorsArray});
        createNonEnumerableProperty$4(that, 'errors', errorsArray);
        return that;
    };

    if (setPrototypeOf) setPrototypeOf($AggregateError, $Error);
    else copyConstructorProperties($AggregateError, $Error, {name: true});

    var AggregateErrorPrototype = $AggregateError.prototype = create$7($Error.prototype, {
        constructor: createPropertyDescriptor$3(1, $AggregateError),
        message: createPropertyDescriptor$3(1, ''),
        name: createPropertyDescriptor$3(1, 'AggregateError')
    });

    // `AggregateError` constructor
    // https://tc39.es/ecma262/#sec-aggregate-error-constructor
    $$N({global: true, constructor: true, arity: 2}, {
        AggregateError: $AggregateError
    });

    var global$l = global$u;
    var isCallable$b = isCallable$l;

    var WeakMap$1 = global$l.WeakMap;

    var weakMapBasicDetection = isCallable$b(WeakMap$1) && /native code/.test(String(WeakMap$1));

    var NATIVE_WEAK_MAP$1 = weakMapBasicDetection;
    var global$k = global$u;
    var isObject$c = isObject$j;
    var createNonEnumerableProperty$3 = createNonEnumerableProperty$8;
    var hasOwn$a = hasOwnProperty_1;
    var shared$4 = sharedStore;
    var sharedKey$1 = sharedKey$4;
    var hiddenKeys$2 = hiddenKeys$6;

    var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
    var TypeError$3 = global$k.TypeError;
    var WeakMap = global$k.WeakMap;
    var set$5, get$1, has$1;

    var enforce = function (it) {
        return has$1(it) ? get$1(it) : set$5(it, {});
    };

    var getterFor = function (TYPE) {
        return function (it) {
            var state;
            if (!isObject$c(it) || (state = get$1(it)).type !== TYPE) {
                throw new TypeError$3('Incompatible receiver, ' + TYPE + ' required');
            }
            return state;
        };
    };

    if (NATIVE_WEAK_MAP$1 || shared$4.state) {
        var store$1 = shared$4.state || (shared$4.state = new WeakMap());
        /* eslint-disable no-self-assign -- prototype methods protection */
        store$1.get = store$1.get;
        store$1.has = store$1.has;
        store$1.set = store$1.set;
        /* eslint-enable no-self-assign -- prototype methods protection */
        set$5 = function (it, metadata) {
            if (store$1.has(it)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            store$1.set(it, metadata);
            return metadata;
        };
        get$1 = function (it) {
            return store$1.get(it) || {};
        };
        has$1 = function (it) {
            return store$1.has(it);
        };
    } else {
        var STATE = sharedKey$1('state');
        hiddenKeys$2[STATE] = true;
        set$5 = function (it, metadata) {
            if (hasOwn$a(it, STATE)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            createNonEnumerableProperty$3(it, STATE, metadata);
            return metadata;
        };
        get$1 = function (it) {
            return hasOwn$a(it, STATE) ? it[STATE] : {};
        };
        has$1 = function (it) {
            return hasOwn$a(it, STATE);
        };
    }

    var internalState = {
        set: set$5,
        get: get$1,
        has: has$1,
        enforce: enforce,
        getterFor: getterFor
    };

    var DESCRIPTORS$9 = descriptors;
    var hasOwn$9 = hasOwnProperty_1;

    var FunctionPrototype$1 = Function.prototype;
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var getDescriptor = DESCRIPTORS$9 && Object.getOwnPropertyDescriptor;

    var EXISTS = hasOwn$9(FunctionPrototype$1, 'name');
    // additional protection from minified / mangled / dropped function names
    var PROPER = EXISTS && (function something() { /* empty */
    }).name === 'something';
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS$9 || (DESCRIPTORS$9 && getDescriptor(FunctionPrototype$1, 'name').configurable));

    var functionName = {
        EXISTS: EXISTS,
        PROPER: PROPER,
        CONFIGURABLE: CONFIGURABLE
    };

    var createNonEnumerableProperty$2 = createNonEnumerableProperty$8;

    var defineBuiltIn$6 = function (target, key, value, options) {
        if (options && options.enumerable) target[key] = value;
        else createNonEnumerableProperty$2(target, key, value);
        return target;
    };

    var fails$l = fails$v;
    var isCallable$a = isCallable$l;
    var isObject$b = isObject$j;
    var create$6 = objectCreate;
    var getPrototypeOf$1 = objectGetPrototypeOf$1;
    var defineBuiltIn$5 = defineBuiltIn$6;
    var wellKnownSymbol$h = wellKnownSymbol$o;

    var ITERATOR$4 = wellKnownSymbol$h('iterator');
    var BUGGY_SAFARI_ITERATORS$1 = false;

    // `%IteratorPrototype%` object
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
    var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;

    /* eslint-disable es/no-array-prototype-keys -- safe */
    if ([].keys) {
        arrayIterator = [].keys();
        // Safari 8 has buggy iterators w/o `next`
        if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
        else {
            PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
            if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
        }
    }

    var NEW_ITERATOR_PROTOTYPE = !isObject$b(IteratorPrototype$1) || fails$l(function () {
        var test = {};
        // FF44- legacy iterators case
        return IteratorPrototype$1[ITERATOR$4].call(test) !== test;
    });

    if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
    else IteratorPrototype$1 = create$6(IteratorPrototype$1);

    // `%IteratorPrototype%[@@iterator]()` method
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
    if (!isCallable$a(IteratorPrototype$1[ITERATOR$4])) {
        defineBuiltIn$5(IteratorPrototype$1, ITERATOR$4, function () {
            return this;
        });
    }

    var iteratorsCore = {
        IteratorPrototype: IteratorPrototype$1,
        BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
    };

    var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
    var classof$8 = classof$b;

    // `Object.prototype.toString` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
        return '[object ' + classof$8(this) + ']';
    };

    var TO_STRING_TAG_SUPPORT = toStringTagSupport;
    var defineProperty$c = objectDefineProperty.f;
    var createNonEnumerableProperty$1 = createNonEnumerableProperty$8;
    var hasOwn$8 = hasOwnProperty_1;
    var toString$a = objectToString;
    var wellKnownSymbol$g = wellKnownSymbol$o;

    var TO_STRING_TAG = wellKnownSymbol$g('toStringTag');

    var setToStringTag$8 = function (it, TAG, STATIC, SET_METHOD) {
        var target = STATIC ? it : it && it.prototype;
        if (target) {
            if (!hasOwn$8(target, TO_STRING_TAG)) {
                defineProperty$c(target, TO_STRING_TAG, {configurable: true, value: TAG});
            }
            if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
                createNonEnumerableProperty$1(target, 'toString', toString$a);
            }
        }
    };

    var IteratorPrototype = iteratorsCore.IteratorPrototype;
    var create$5 = objectCreate;
    var createPropertyDescriptor$2 = createPropertyDescriptor$7;
    var setToStringTag$7 = setToStringTag$8;
    var Iterators$3 = iterators;

    var returnThis$1 = function () {
        return this;
    };

    var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
        var TO_STRING_TAG = NAME + ' Iterator';
        IteratorConstructor.prototype = create$5(IteratorPrototype, {next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next)});
        setToStringTag$7(IteratorConstructor, TO_STRING_TAG, false, true);
        Iterators$3[TO_STRING_TAG] = returnThis$1;
        return IteratorConstructor;
    };

    var $$M = _export;
    var call$9 = functionCall;
    var FunctionName = functionName;
    var createIteratorConstructor = iteratorCreateConstructor;
    var getPrototypeOf = objectGetPrototypeOf$1;
    var setToStringTag$6 = setToStringTag$8;
    var defineBuiltIn$4 = defineBuiltIn$6;
    var wellKnownSymbol$f = wellKnownSymbol$o;
    var Iterators$2 = iterators;
    var IteratorsCore = iteratorsCore;

    var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
    FunctionName.CONFIGURABLE;
    IteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR$3 = wellKnownSymbol$f('iterator');
    var KEYS = 'keys';
    var VALUES = 'values';
    var ENTRIES = 'entries';

    var returnThis = function () {
        return this;
    };

    var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);

        var getIterationMethod = function (KIND) {
            if (KIND === DEFAULT && defaultIterator) return defaultIterator;
            if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

            switch (KIND) {
                case KEYS:
                    return function keys() {
                        return new IteratorConstructor(this, KIND);
                    };
                case VALUES:
                    return function values() {
                        return new IteratorConstructor(this, KIND);
                    };
                case ENTRIES:
                    return function entries() {
                        return new IteratorConstructor(this, KIND);
                    };
            }

            return function () {
                return new IteratorConstructor(this);
            };
        };

        var TO_STRING_TAG = NAME + ' Iterator';
        var INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        var nativeIterator = IterablePrototype[ITERATOR$3]
            || IterablePrototype['@@iterator']
            || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
        var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
        var CurrentIteratorPrototype, methods, KEY;

        // fix native
        if (anyNativeIterator) {
            CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
            if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                // Set @@toStringTag to native iterators
                setToStringTag$6(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                Iterators$2[TO_STRING_TAG] = returnThis;
            }
        }

        // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
        if (PROPER_FUNCTION_NAME$1 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
            {
                INCORRECT_VALUES_NAME = true;
                defaultIterator = function values() {
                    return call$9(nativeIterator, this);
                };
            }
        }

        // export additional methods
        if (DEFAULT) {
            methods = {
                values: getIterationMethod(VALUES),
                keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                entries: getIterationMethod(ENTRIES)
            };
            if (FORCED) for (KEY in methods) {
                if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                    defineBuiltIn$4(IterablePrototype, KEY, methods[KEY]);
                }
            } else $$M({target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME}, methods);
        }

        // define iterator
        if ((FORCED) && IterablePrototype[ITERATOR$3] !== defaultIterator) {
            defineBuiltIn$4(IterablePrototype, ITERATOR$3, defaultIterator, {name: DEFAULT});
        }
        Iterators$2[NAME] = defaultIterator;

        return methods;
    };

    // `CreateIterResultObject` abstract operation
    // https://tc39.es/ecma262/#sec-createiterresultobject
    var createIterResultObject$3 = function (value, done) {
        return {value: value, done: done};
    };

    var toIndexedObject$4 = toIndexedObject$9;
    var Iterators$1 = iterators;
    var InternalStateModule$6 = internalState;
    objectDefineProperty.f;
    var defineIterator$2 = iteratorDefine;
    var createIterResultObject$2 = createIterResultObject$3;

    var ARRAY_ITERATOR = 'Array Iterator';
    var setInternalState$6 = InternalStateModule$6.set;
    var getInternalState$2 = InternalStateModule$6.getterFor(ARRAY_ITERATOR);

    // `Array.prototype.entries` method
    // https://tc39.es/ecma262/#sec-array.prototype.entries
    // `Array.prototype.keys` method
    // https://tc39.es/ecma262/#sec-array.prototype.keys
    // `Array.prototype.values` method
    // https://tc39.es/ecma262/#sec-array.prototype.values
    // `Array.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
    // `CreateArrayIterator` internal method
    // https://tc39.es/ecma262/#sec-createarrayiterator
    defineIterator$2(Array, 'Array', function (iterated, kind) {
        setInternalState$6(this, {
            type: ARRAY_ITERATOR,
            target: toIndexedObject$4(iterated), // target
            index: 0,                          // next index
            kind: kind                         // kind
        });
        // `%ArrayIteratorPrototype%.next` method
        // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
    }, function () {
        var state = getInternalState$2(this);
        var target = state.target;
        var index = state.index++;
        if (!target || index >= target.length) {
            state.target = undefined;
            return createIterResultObject$2(undefined, true);
        }
        switch (state.kind) {
            case 'keys':
                return createIterResultObject$2(index, false);
            case 'values':
                return createIterResultObject$2(target[index], false);
        }
        return createIterResultObject$2([index, target[index]], false);
    }, 'values');

    // argumentsList[@@iterator] is %ArrayProto_values%
    // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
    // https://tc39.es/ecma262/#sec-createmappedargumentsobject
    Iterators$1.Arguments = Iterators$1.Array;

    var global$j = global$u;
    var classof$7 = classofRaw$2;

    var engineIsNode = classof$7(global$j.process) === 'process';

    var defineProperty$b = objectDefineProperty;

    var defineBuiltInAccessor$3 = function (target, name, descriptor) {
        return defineProperty$b.f(target, name, descriptor);
    };

    var getBuiltIn$b = getBuiltIn$f;
    var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
    var wellKnownSymbol$e = wellKnownSymbol$o;
    var DESCRIPTORS$8 = descriptors;

    var SPECIES$5 = wellKnownSymbol$e('species');

    var setSpecies$2 = function (CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn$b(CONSTRUCTOR_NAME);

        if (DESCRIPTORS$8 && Constructor && !Constructor[SPECIES$5]) {
            defineBuiltInAccessor$2(Constructor, SPECIES$5, {
                configurable: true,
                get: function () {
                    return this;
                }
            });
        }
    };

    var isPrototypeOf$f = objectIsPrototypeOf;

    var $TypeError$7 = TypeError;

    var anInstance$4 = function (it, Prototype) {
        if (isPrototypeOf$f(Prototype, it)) return it;
        throw new $TypeError$7('Incorrect invocation');
    };

    var uncurryThis$l = functionUncurryThis;
    var isCallable$9 = isCallable$l;
    var store = sharedStore;

    var functionToString = uncurryThis$l(Function.toString);

    // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
    if (!isCallable$9(store.inspectSource)) {
        store.inspectSource = function (it) {
            return functionToString(it);
        };
    }

    var inspectSource$2 = store.inspectSource;

    var uncurryThis$k = functionUncurryThis;
    var fails$k = fails$v;
    var isCallable$8 = isCallable$l;
    var classof$6 = classof$b;
    var getBuiltIn$a = getBuiltIn$f;
    var inspectSource$1 = inspectSource$2;

    var noop$1 = function () { /* empty */
    };
    var empty$1 = [];
    var construct = getBuiltIn$a('Reflect', 'construct');
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec$2 = uncurryThis$k(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.test(noop$1);

    var isConstructorModern = function isConstructor(argument) {
        if (!isCallable$8(argument)) return false;
        try {
            construct(noop$1, empty$1, argument);
            return true;
        } catch (error) {
            return false;
        }
    };

    var isConstructorLegacy = function isConstructor(argument) {
        if (!isCallable$8(argument)) return false;
        switch (classof$6(argument)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
                return false;
        }
        try {
            // we can't check .prototype since constructors produced by .bind haven't it
            // `Function#toString` throws on some built-it function in some legacy engines
            // (for example, `DOMQuad` and similar in FF41-)
            return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
        } catch (error) {
            return true;
        }
    };

    isConstructorLegacy.sham = true;

    // `IsConstructor` abstract operation
    // https://tc39.es/ecma262/#sec-isconstructor
    var isConstructor$4 = !construct || fails$k(function () {
        var called;
        return isConstructorModern(isConstructorModern.call)
            || !isConstructorModern(Object)
            || !isConstructorModern(function () {
                called = true;
            })
            || called;
    }) ? isConstructorLegacy : isConstructorModern;

    var isConstructor$3 = isConstructor$4;
    var tryToString$2 = tryToString$6;

    var $TypeError$6 = TypeError;

    // `Assert: IsConstructor(argument) is true`
    var aConstructor$1 = function (argument) {
        if (isConstructor$3(argument)) return argument;
        throw new $TypeError$6(tryToString$2(argument) + ' is not a constructor');
    };

    var anObject$4 = anObject$d;
    var aConstructor = aConstructor$1;
    var isNullOrUndefined$3 = isNullOrUndefined$7;
    var wellKnownSymbol$d = wellKnownSymbol$o;

    var SPECIES$4 = wellKnownSymbol$d('species');

    // `SpeciesConstructor` abstract operation
    // https://tc39.es/ecma262/#sec-speciesconstructor
    var speciesConstructor$2 = function (O, defaultConstructor) {
        var C = anObject$4(O).constructor;
        var S;
        return C === undefined || isNullOrUndefined$3(S = anObject$4(C)[SPECIES$4]) ? defaultConstructor : aConstructor(S);
    };

    var uncurryThis$j = functionUncurryThis;

    var arraySlice$5 = uncurryThis$j([].slice);

    var $TypeError$5 = TypeError;

    var validateArgumentsLength$2 = function (passed, required) {
        if (passed < required) throw new $TypeError$5('Not enough arguments');
        return passed;
    };

    var userAgent$4 = engineUserAgent;

    // eslint-disable-next-line redos/no-vulnerable -- safe
    var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);

    var global$i = global$u;
    var apply$3 = functionApply;
    var bind$6 = functionBindContext;
    var isCallable$7 = isCallable$l;
    var hasOwn$7 = hasOwnProperty_1;
    var fails$j = fails$v;
    var html = html$2;
    var arraySlice$4 = arraySlice$5;
    var createElement = documentCreateElement$1;
    var validateArgumentsLength$1 = validateArgumentsLength$2;
    var IS_IOS$1 = engineIsIos;
    var IS_NODE$3 = engineIsNode;

    var set$4 = global$i.setImmediate;
    var clear = global$i.clearImmediate;
    var process$2 = global$i.process;
    var Dispatch = global$i.Dispatch;
    var Function$2 = global$i.Function;
    var MessageChannel = global$i.MessageChannel;
    var String$1 = global$i.String;
    var counter = 0;
    var queue$2 = {};
    var ONREADYSTATECHANGE = 'onreadystatechange';
    var $location, defer, channel, port;

    fails$j(function () {
        // Deno throws a ReferenceError on `location` access without `--location` flag
        $location = global$i.location;
    });

    var run$1 = function (id) {
        if (hasOwn$7(queue$2, id)) {
            var fn = queue$2[id];
            delete queue$2[id];
            fn();
        }
    };

    var runner = function (id) {
        return function () {
            run$1(id);
        };
    };

    var eventListener = function (event) {
        run$1(event.data);
    };

    var globalPostMessageDefer = function (id) {
        // old engines have not location.origin
        global$i.postMessage(String$1(id), $location.protocol + '//' + $location.host);
    };

    // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    if (!set$4 || !clear) {
        set$4 = function setImmediate(handler) {
            validateArgumentsLength$1(arguments.length, 1);
            var fn = isCallable$7(handler) ? handler : Function$2(handler);
            var args = arraySlice$4(arguments, 1);
            queue$2[++counter] = function () {
                apply$3(fn, undefined, args);
            };
            defer(counter);
            return counter;
        };
        clear = function clearImmediate(id) {
            delete queue$2[id];
        };
        // Node.js 0.8-
        if (IS_NODE$3) {
            defer = function (id) {
                process$2.nextTick(runner(id));
            };
            // Sphere (JS game engine) Dispatch API
        } else if (Dispatch && Dispatch.now) {
            defer = function (id) {
                Dispatch.now(runner(id));
            };
            // Browsers with MessageChannel, includes WebWorkers
            // except iOS - https://github.com/zloirock/core-js/issues/624
        } else if (MessageChannel && !IS_IOS$1) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = eventListener;
            defer = bind$6(port.postMessage, port);
            // Browsers with postMessage, skip WebWorkers
            // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (
            global$i.addEventListener &&
            isCallable$7(global$i.postMessage) &&
            !global$i.importScripts &&
            $location && $location.protocol !== 'file:' &&
            !fails$j(globalPostMessageDefer)
        ) {
            defer = globalPostMessageDefer;
            global$i.addEventListener('message', eventListener, false);
            // IE8-
        } else if (ONREADYSTATECHANGE in createElement('script')) {
            defer = function (id) {
                html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
                    html.removeChild(this);
                    run$1(id);
                };
            };
            // Rest old browsers
        } else {
            defer = function (id) {
                setTimeout(runner(id), 0);
            };
        }
    }

    var task$1 = {
        set: set$4,
        clear: clear
    };

    var global$h = global$u;
    var DESCRIPTORS$7 = descriptors;

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

    // Avoid NodeJS experimental warning
    var safeGetBuiltIn$1 = function (name) {
        if (!DESCRIPTORS$7) return global$h[name];
        var descriptor = getOwnPropertyDescriptor$1(global$h, name);
        return descriptor && descriptor.value;
    };

    var Queue$2 = function () {
        this.head = null;
        this.tail = null;
    };

    Queue$2.prototype = {
        add: function (item) {
            var entry = {item: item, next: null};
            var tail = this.tail;
            if (tail) tail.next = entry;
            else this.head = entry;
            this.tail = entry;
        },
        get: function () {
            var entry = this.head;
            if (entry) {
                var next = this.head = entry.next;
                if (next === null) this.tail = null;
                return entry.item;
            }
        }
    };

    var queue$1 = Queue$2;

    var userAgent$3 = engineUserAgent;

    var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && typeof Pebble != 'undefined';

    var userAgent$2 = engineUserAgent;

    var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

    var global$g = global$u;
    var safeGetBuiltIn = safeGetBuiltIn$1;
    var bind$5 = functionBindContext;
    var macrotask = task$1.set;
    var Queue$1 = queue$1;
    var IS_IOS = engineIsIos;
    var IS_IOS_PEBBLE = engineIsIosPebble;
    var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
    var IS_NODE$2 = engineIsNode;

    var MutationObserver = global$g.MutationObserver || global$g.WebKitMutationObserver;
    var document$2 = global$g.document;
    var process$1 = global$g.process;
    var Promise$1 = global$g.Promise;
    var microtask$1 = safeGetBuiltIn('queueMicrotask');
    var notify$1, toggle, node, promise$4, then;

    // modern engines have queueMicrotask method
    if (!microtask$1) {
        var queue = new Queue$1();

        var flush$1 = function () {
            var parent, fn;
            if (IS_NODE$2 && (parent = process$1.domain)) parent.exit();
            while (fn = queue.get()) try {
                fn();
            } catch (error) {
                if (queue.head) notify$1();
                throw error;
            }
            if (parent) parent.enter();
        };

        // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
        // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
        if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
            toggle = true;
            node = document$2.createTextNode('');
            new MutationObserver(flush$1).observe(node, {characterData: true});
            notify$1 = function () {
                node.data = toggle = !toggle;
            };
            // environments with maybe non-completely correct, but existent Promise
        } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
            // Promise.resolve without an argument throws an error in LG WebOS 2
            promise$4 = Promise$1.resolve(undefined);
            // workaround of WebKit ~ iOS Safari 10.1 bug
            promise$4.constructor = Promise$1;
            then = bind$5(promise$4.then, promise$4);
            notify$1 = function () {
                then(flush$1);
            };
            // Node.js without promises
        } else if (IS_NODE$2) {
            notify$1 = function () {
                process$1.nextTick(flush$1);
            };
            // for other environments - macrotask based on:
            // - setImmediate
            // - MessageChannel
            // - window.postMessage
            // - onreadystatechange
            // - setTimeout
        } else {
            // `webpack` dev server bug on IE global methods - use bind(fn, global)
            macrotask = bind$5(macrotask, global$g);
            notify$1 = function () {
                macrotask(flush$1);
            };
        }

        microtask$1 = function (fn) {
            if (!queue.head) notify$1();
            queue.add(fn);
        };
    }

    var microtask_1 = microtask$1;

    var hostReportErrors$1 = function (a, b) {
        try {
            // eslint-disable-next-line no-console -- safe
            arguments.length === 1 ? console.error(a) : console.error(a, b);
        } catch (error) { /* empty */
        }
    };

    var perform$5 = function (exec) {
        try {
            return {error: false, value: exec()};
        } catch (error) {
            return {error: true, value: error};
        }
    };

    var global$f = global$u;

    var promiseNativeConstructor = global$f.Promise;

    /* global Deno -- Deno case */
    var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

    var IS_DENO$1 = engineIsDeno;
    var IS_NODE$1 = engineIsNode;

    var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
        && typeof window == 'object'
        && typeof document == 'object';

    var global$e = global$u;
    var NativePromiseConstructor$5 = promiseNativeConstructor;
    var isCallable$6 = isCallable$l;
    var isForced = isForced_1;
    var inspectSource = inspectSource$2;
    var wellKnownSymbol$c = wellKnownSymbol$o;
    var IS_BROWSER = engineIsBrowser;
    var IS_DENO = engineIsDeno;
    var V8_VERSION$2 = engineV8Version;

    var NativePromisePrototype$2 = NativePromiseConstructor$5 && NativePromiseConstructor$5.prototype;
    var SPECIES$3 = wellKnownSymbol$c('species');
    var SUBCLASSING = false;
    var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$6(global$e.PromiseRejectionEvent);

    var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
        var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$5);
        var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$5);
        // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
        // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
        // We can't detect it synchronously, so just check versions
        if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$2 === 66) return true;
        // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
        if (!(NativePromisePrototype$2['catch'] && NativePromisePrototype$2['finally'])) return true;
        // We can't use @@species feature detection in V8 since it causes
        // deoptimization and performance degradation
        // https://github.com/zloirock/core-js/issues/679
        if (!V8_VERSION$2 || V8_VERSION$2 < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
            // Detect correctness of subclassing with @@species support
            var promise = new NativePromiseConstructor$5(function (resolve) {
                resolve(1);
            });
            var FakePromise = function (exec) {
                exec(function () { /* empty */
                }, function () { /* empty */
                });
            };
            var constructor = promise.constructor = {};
            constructor[SPECIES$3] = FakePromise;
            SUBCLASSING = promise.then(function () { /* empty */
            }) instanceof FakePromise;
            if (!SUBCLASSING) return true;
            // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        }
        return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
    });

    var promiseConstructorDetection = {
        CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
        REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
        SUBCLASSING: SUBCLASSING
    };

    var newPromiseCapability$2 = {};

    var aCallable$7 = aCallable$c;

    var $TypeError$4 = TypeError;

    var PromiseCapability = function (C) {
        var resolve, reject;
        this.promise = new C(function ($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined) throw new $TypeError$4('Bad Promise constructor');
            resolve = $$resolve;
            reject = $$reject;
        });
        this.resolve = aCallable$7(resolve);
        this.reject = aCallable$7(reject);
    };

    // `NewPromiseCapability` abstract operation
    // https://tc39.es/ecma262/#sec-newpromisecapability
    newPromiseCapability$2.f = function (C) {
        return new PromiseCapability(C);
    };

    var $$L = _export;
    var IS_NODE = engineIsNode;
    var global$d = global$u;
    var call$8 = functionCall;
    var defineBuiltIn$3 = defineBuiltIn$6;
    var setToStringTag$5 = setToStringTag$8;
    var setSpecies$1 = setSpecies$2;
    var aCallable$6 = aCallable$c;
    var isCallable$5 = isCallable$l;
    var isObject$a = isObject$j;
    var anInstance$3 = anInstance$4;
    var speciesConstructor$1 = speciesConstructor$2;
    var task = task$1.set;
    var microtask = microtask_1;
    var hostReportErrors = hostReportErrors$1;
    var perform$4 = perform$5;
    var Queue = queue$1;
    var InternalStateModule$5 = internalState;
    var NativePromiseConstructor$4 = promiseNativeConstructor;
    var PromiseConstructorDetection = promiseConstructorDetection;
    var newPromiseCapabilityModule$6 = newPromiseCapability$2;

    var PROMISE = 'Promise';
    var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
    var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
    PromiseConstructorDetection.SUBCLASSING;
    var getInternalPromiseState = InternalStateModule$5.getterFor(PROMISE);
    var setInternalState$5 = InternalStateModule$5.set;
    var NativePromisePrototype$1 = NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
    var PromiseConstructor = NativePromiseConstructor$4;
    var PromisePrototype = NativePromisePrototype$1;
    var TypeError$2 = global$d.TypeError;
    var document$1 = global$d.document;
    var process = global$d.process;
    var newPromiseCapability$1 = newPromiseCapabilityModule$6.f;
    var newGenericPromiseCapability = newPromiseCapability$1;

    var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$d.dispatchEvent);
    var UNHANDLED_REJECTION = 'unhandledrejection';
    var REJECTION_HANDLED = 'rejectionhandled';
    var PENDING = 0;
    var FULFILLED = 1;
    var REJECTED = 2;
    var HANDLED = 1;
    var UNHANDLED = 2;

    var Internal, OwnPromiseCapability, PromiseWrapper;

    // helpers
    var isThenable = function (it) {
        var then;
        return isObject$a(it) && isCallable$5(then = it.then) ? then : false;
    };

    var callReaction = function (reaction, state) {
        var value = state.value;
        var ok = state.state === FULFILLED;
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;
        try {
            if (handler) {
                if (!ok) {
                    if (state.rejection === UNHANDLED) onHandleUnhandled(state);
                    state.rejection = HANDLED;
                }
                if (handler === true) result = value;
                else {
                    if (domain) domain.enter();
                    result = handler(value); // can throw
                    if (domain) {
                        domain.exit();
                        exited = true;
                    }
                }
                if (result === reaction.promise) {
                    reject(new TypeError$2('Promise-chain cycle'));
                } else if (then = isThenable(result)) {
                    call$8(then, result, resolve, reject);
                } else resolve(result);
            } else reject(value);
        } catch (error) {
            if (domain && !exited) domain.exit();
            reject(error);
        }
    };

    var notify = function (state, isReject) {
        if (state.notified) return;
        state.notified = true;
        microtask(function () {
            var reactions = state.reactions;
            var reaction;
            while (reaction = reactions.get()) {
                callReaction(reaction, state);
            }
            state.notified = false;
            if (isReject && !state.rejection) onUnhandled(state);
        });
    };

    var dispatchEvent = function (name, promise, reason) {
        var event, handler;
        if (DISPATCH_EVENT) {
            event = document$1.createEvent('Event');
            event.promise = promise;
            event.reason = reason;
            event.initEvent(name, false, true);
            global$d.dispatchEvent(event);
        } else event = {promise: promise, reason: reason};
        if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$d['on' + name])) handler(event);
        else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
    };

    var onUnhandled = function (state) {
        call$8(task, global$d, function () {
            var promise = state.facade;
            var value = state.value;
            var IS_UNHANDLED = isUnhandled(state);
            var result;
            if (IS_UNHANDLED) {
                result = perform$4(function () {
                    if (IS_NODE) {
                        process.emit('unhandledRejection', value, promise);
                    } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
                });
                // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
                state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
                if (result.error) throw result.value;
            }
        });
    };

    var isUnhandled = function (state) {
        return state.rejection !== HANDLED && !state.parent;
    };

    var onHandleUnhandled = function (state) {
        call$8(task, global$d, function () {
            var promise = state.facade;
            if (IS_NODE) {
                process.emit('rejectionHandled', promise);
            } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
        });
    };

    var bind$4 = function (fn, state, unwrap) {
        return function (value) {
            fn(state, value, unwrap);
        };
    };

    var internalReject = function (state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        state.value = value;
        state.state = REJECTED;
        notify(state, true);
    };

    var internalResolve = function (state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        try {
            if (state.facade === value) throw new TypeError$2("Promise can't be resolved itself");
            var then = isThenable(value);
            if (then) {
                microtask(function () {
                    var wrapper = {done: false};
                    try {
                        call$8(then, value,
                            bind$4(internalResolve, wrapper, state),
                            bind$4(internalReject, wrapper, state)
                        );
                    } catch (error) {
                        internalReject(wrapper, error, state);
                    }
                });
            } else {
                state.value = value;
                state.state = FULFILLED;
                notify(state, false);
            }
        } catch (error) {
            internalReject({done: false}, error, state);
        }
    };

    // constructor polyfill
    if (FORCED_PROMISE_CONSTRUCTOR$4) {
        // 25.4.3.1 Promise(executor)
        PromiseConstructor = function Promise(executor) {
            anInstance$3(this, PromisePrototype);
            aCallable$6(executor);
            call$8(Internal, this);
            var state = getInternalPromiseState(this);
            try {
                executor(bind$4(internalResolve, state), bind$4(internalReject, state));
            } catch (error) {
                internalReject(state, error);
            }
        };

        PromisePrototype = PromiseConstructor.prototype;

        // eslint-disable-next-line no-unused-vars -- required for `.length`
        Internal = function Promise(executor) {
            setInternalState$5(this, {
                type: PROMISE,
                done: false,
                notified: false,
                parent: false,
                reactions: new Queue(),
                rejection: false,
                state: PENDING,
                value: undefined
            });
        };

        // `Promise.prototype.then` method
        // https://tc39.es/ecma262/#sec-promise.prototype.then
        Internal.prototype = defineBuiltIn$3(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
            var state = getInternalPromiseState(this);
            var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
            state.parent = true;
            reaction.ok = isCallable$5(onFulfilled) ? onFulfilled : true;
            reaction.fail = isCallable$5(onRejected) && onRejected;
            reaction.domain = IS_NODE ? process.domain : undefined;
            if (state.state === PENDING) state.reactions.add(reaction);
            else microtask(function () {
                callReaction(reaction, state);
            });
            return reaction.promise;
        });

        OwnPromiseCapability = function () {
            var promise = new Internal();
            var state = getInternalPromiseState(promise);
            this.promise = promise;
            this.resolve = bind$4(internalResolve, state);
            this.reject = bind$4(internalReject, state);
        };

        newPromiseCapabilityModule$6.f = newPromiseCapability$1 = function (C) {
            return C === PromiseConstructor || C === PromiseWrapper
                ? new OwnPromiseCapability(C)
                : newGenericPromiseCapability(C);
        };
    }

    $$L({global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4}, {
        Promise: PromiseConstructor
    });

    setToStringTag$5(PromiseConstructor, PROMISE, false, true);
    setSpecies$1(PROMISE);

    var wellKnownSymbol$b = wellKnownSymbol$o;

    var ITERATOR$2 = wellKnownSymbol$b('iterator');
    var SAFE_CLOSING = false;

    try {
        var called = 0;
        var iteratorWithReturn = {
            next: function () {
                return {done: !!called++};
            },
            'return': function () {
                SAFE_CLOSING = true;
            }
        };
        iteratorWithReturn[ITERATOR$2] = function () {
            return this;
        };
        // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
        Array.from(iteratorWithReturn, function () {
            throw 2;
        });
    } catch (error) { /* empty */
    }

    var checkCorrectnessOfIteration$2 = function (exec, SKIP_CLOSING) {
        try {
            if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
        } catch (error) {
            return false;
        } // workaround of old WebKit + `eval` bug
        var ITERATION_SUPPORT = false;
        try {
            var object = {};
            object[ITERATOR$2] = function () {
                return {
                    next: function () {
                        return {done: ITERATION_SUPPORT = true};
                    }
                };
            };
            exec(object);
        } catch (error) { /* empty */
        }
        return ITERATION_SUPPORT;
    };

    var NativePromiseConstructor$3 = promiseNativeConstructor;
    var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;
    var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

    var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$1(function (iterable) {
        NativePromiseConstructor$3.all(iterable).then(undefined, function () { /* empty */
        });
    });

    var $$K = _export;
    var call$7 = functionCall;
    var aCallable$5 = aCallable$c;
    var newPromiseCapabilityModule$5 = newPromiseCapability$2;
    var perform$3 = perform$5;
    var iterate$7 = iterate$9;
    var PROMISE_STATICS_INCORRECT_ITERATION$3 = promiseStaticsIncorrectIteration;

    // `Promise.all` method
    // https://tc39.es/ecma262/#sec-promise.all
    $$K({target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$3}, {
        all: function all(iterable) {
            var C = this;
            var capability = newPromiseCapabilityModule$5.f(C);
            var resolve = capability.resolve;
            var reject = capability.reject;
            var result = perform$3(function () {
                var $promiseResolve = aCallable$5(C.resolve);
                var values = [];
                var counter = 0;
                var remaining = 1;
                iterate$7(iterable, function (promise) {
                    var index = counter++;
                    var alreadyCalled = false;
                    remaining++;
                    call$7($promiseResolve, C, promise).then(function (value) {
                        if (alreadyCalled) return;
                        alreadyCalled = true;
                        values[index] = value;
                        --remaining || resolve(values);
                    }, reject);
                });
                --remaining || resolve(values);
            });
            if (result.error) reject(result.value);
            return capability.promise;
        }
    });

    var $$J = _export;
    var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
    var NativePromiseConstructor$2 = promiseNativeConstructor;

    NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;

    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    $$J({target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true}, {
        'catch': function (onRejected) {
            return this.then(undefined, onRejected);
        }
    });

    var $$I = _export;
    var call$6 = functionCall;
    var aCallable$4 = aCallable$c;
    var newPromiseCapabilityModule$4 = newPromiseCapability$2;
    var perform$2 = perform$5;
    var iterate$6 = iterate$9;
    var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;

    // `Promise.race` method
    // https://tc39.es/ecma262/#sec-promise.race
    $$I({target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2}, {
        race: function race(iterable) {
            var C = this;
            var capability = newPromiseCapabilityModule$4.f(C);
            var reject = capability.reject;
            var result = perform$2(function () {
                var $promiseResolve = aCallable$4(C.resolve);
                iterate$6(iterable, function (promise) {
                    call$6($promiseResolve, C, promise).then(capability.resolve, reject);
                });
            });
            if (result.error) reject(result.value);
            return capability.promise;
        }
    });

    var $$H = _export;
    var newPromiseCapabilityModule$3 = newPromiseCapability$2;
    var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    $$H({target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1}, {
        reject: function reject(r) {
            var capability = newPromiseCapabilityModule$3.f(this);
            var capabilityReject = capability.reject;
            capabilityReject(r);
            return capability.promise;
        }
    });

    var anObject$3 = anObject$d;
    var isObject$9 = isObject$j;
    var newPromiseCapability = newPromiseCapability$2;

    var promiseResolve$2 = function (C, x) {
        anObject$3(C);
        if (isObject$9(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
    };

    var $$G = _export;
    var getBuiltIn$9 = getBuiltIn$f;
    var IS_PURE$1 = isPure;
    var NativePromiseConstructor$1 = promiseNativeConstructor;
    var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
    var promiseResolve$1 = promiseResolve$2;

    var PromiseConstructorWrapper = getBuiltIn$9('Promise');
    var CHECK_WRAPPER = !FORCED_PROMISE_CONSTRUCTOR;

    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    $$G({target: 'Promise', stat: true, forced: IS_PURE$1}, {
        resolve: function resolve(x) {
            return promiseResolve$1(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor$1 : this, x);
        }
    });

    var $$F = _export;
    var call$5 = functionCall;
    var aCallable$3 = aCallable$c;
    var newPromiseCapabilityModule$2 = newPromiseCapability$2;
    var perform$1 = perform$5;
    var iterate$5 = iterate$9;
    var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

    // `Promise.allSettled` method
    // https://tc39.es/ecma262/#sec-promise.allsettled
    $$F({target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1}, {
        allSettled: function allSettled(iterable) {
            var C = this;
            var capability = newPromiseCapabilityModule$2.f(C);
            var resolve = capability.resolve;
            var reject = capability.reject;
            var result = perform$1(function () {
                var promiseResolve = aCallable$3(C.resolve);
                var values = [];
                var counter = 0;
                var remaining = 1;
                iterate$5(iterable, function (promise) {
                    var index = counter++;
                    var alreadyCalled = false;
                    remaining++;
                    call$5(promiseResolve, C, promise).then(function (value) {
                        if (alreadyCalled) return;
                        alreadyCalled = true;
                        values[index] = {status: 'fulfilled', value: value};
                        --remaining || resolve(values);
                    }, function (error) {
                        if (alreadyCalled) return;
                        alreadyCalled = true;
                        values[index] = {status: 'rejected', reason: error};
                        --remaining || resolve(values);
                    });
                });
                --remaining || resolve(values);
            });
            if (result.error) reject(result.value);
            return capability.promise;
        }
    });

    var $$E = _export;
    var call$4 = functionCall;
    var aCallable$2 = aCallable$c;
    var getBuiltIn$8 = getBuiltIn$f;
    var newPromiseCapabilityModule$1 = newPromiseCapability$2;
    var perform = perform$5;
    var iterate$4 = iterate$9;
    var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

    var PROMISE_ANY_ERROR = 'No one promise resolved';

    // `Promise.any` method
    // https://tc39.es/ecma262/#sec-promise.any
    $$E({target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION}, {
        any: function any(iterable) {
            var C = this;
            var AggregateError = getBuiltIn$8('AggregateError');
            var capability = newPromiseCapabilityModule$1.f(C);
            var resolve = capability.resolve;
            var reject = capability.reject;
            var result = perform(function () {
                var promiseResolve = aCallable$2(C.resolve);
                var errors = [];
                var counter = 0;
                var remaining = 1;
                var alreadyResolved = false;
                iterate$4(iterable, function (promise) {
                    var index = counter++;
                    var alreadyRejected = false;
                    remaining++;
                    call$4(promiseResolve, C, promise).then(function (value) {
                        if (alreadyRejected || alreadyResolved) return;
                        alreadyResolved = true;
                        resolve(value);
                    }, function (error) {
                        if (alreadyRejected || alreadyResolved) return;
                        alreadyRejected = true;
                        errors[index] = error;
                        --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
                    });
                });
                --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
            });
            if (result.error) reject(result.value);
            return capability.promise;
        }
    });

    var $$D = _export;
    var newPromiseCapabilityModule = newPromiseCapability$2;

    // `Promise.withResolvers` method
    // https://github.com/tc39/proposal-promise-with-resolvers
    $$D({target: 'Promise', stat: true}, {
        withResolvers: function withResolvers() {
            var promiseCapability = newPromiseCapabilityModule.f(this);
            return {
                promise: promiseCapability.promise,
                resolve: promiseCapability.resolve,
                reject: promiseCapability.reject
            };
        }
    });

    var $$C = _export;
    var NativePromiseConstructor = promiseNativeConstructor;
    var fails$i = fails$v;
    var getBuiltIn$7 = getBuiltIn$f;
    var isCallable$4 = isCallable$l;
    var speciesConstructor = speciesConstructor$2;
    var promiseResolve = promiseResolve$2;

    var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

    // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
    var NON_GENERIC = !!NativePromiseConstructor && fails$i(function () {
        // eslint-disable-next-line unicorn/no-thenable -- required for testing
        NativePromisePrototype['finally'].call({
            then: function () { /* empty */
            }
        }, function () { /* empty */
        });
    });

    // `Promise.prototype.finally` method
    // https://tc39.es/ecma262/#sec-promise.prototype.finally
    $$C({target: 'Promise', proto: true, real: true, forced: NON_GENERIC}, {
        'finally': function (onFinally) {
            var C = speciesConstructor(this, getBuiltIn$7('Promise'));
            var isFunction = isCallable$4(onFinally);
            return this.then(
                isFunction ? function (x) {
                    return promiseResolve(C, onFinally()).then(function () {
                        return x;
                    });
                } : onFinally,
                isFunction ? function (e) {
                    return promiseResolve(C, onFinally()).then(function () {
                        throw e;
                    });
                } : onFinally
            );
        }
    });

    var uncurryThis$i = functionUncurryThis;
    var toIntegerOrInfinity$2 = toIntegerOrInfinity$5;
    var toString$9 = toString$c;
    var requireObjectCoercible$4 = requireObjectCoercible$7;

    var charAt$3 = uncurryThis$i(''.charAt);
    var charCodeAt$1 = uncurryThis$i(''.charCodeAt);
    var stringSlice = uncurryThis$i(''.slice);

    var createMethod$3 = function (CONVERT_TO_STRING) {
        return function ($this, pos) {
            var S = toString$9(requireObjectCoercible$4($this));
            var position = toIntegerOrInfinity$2(pos);
            var size = S.length;
            var first, second;
            if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
            first = charCodeAt$1(S, position);
            return first < 0xD800 || first > 0xDBFF || position + 1 === size
            || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
                ? CONVERT_TO_STRING
                    ? charAt$3(S, position)
                    : first
                : CONVERT_TO_STRING
                    ? stringSlice(S, position, position + 2)
                    : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
        };
    };

    var stringMultibyte = {
        // `String.prototype.codePointAt` method
        // https://tc39.es/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod$3(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod$3(true)
    };

    var charAt$2 = stringMultibyte.charAt;
    var toString$8 = toString$c;
    var InternalStateModule$4 = internalState;
    var defineIterator$1 = iteratorDefine;
    var createIterResultObject$1 = createIterResultObject$3;

    var STRING_ITERATOR = 'String Iterator';
    var setInternalState$4 = InternalStateModule$4.set;
    var getInternalState$1 = InternalStateModule$4.getterFor(STRING_ITERATOR);

    // `String.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
    defineIterator$1(String, 'String', function (iterated) {
        setInternalState$4(this, {
            type: STRING_ITERATOR,
            string: toString$8(iterated),
            index: 0
        });
        // `%StringIteratorPrototype%.next` method
        // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
    }, function next() {
        var state = getInternalState$1(this);
        var string = state.string;
        var index = state.index;
        var point;
        if (index >= string.length) return createIterResultObject$1(undefined, true);
        point = charAt$2(string, index);
        state.index += point.length;
        return createIterResultObject$1(point, false);
    });

    var path$g = path$j;

    var promise$3 = path$g.Promise;

    // iterable DOM collections
    // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
    var domIterables = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };

    var DOMIterables$1 = domIterables;
    var global$c = global$u;
    var setToStringTag$4 = setToStringTag$8;
    var Iterators = iterators;

    for (var COLLECTION_NAME in DOMIterables$1) {
        setToStringTag$4(global$c[COLLECTION_NAME], COLLECTION_NAME);
        Iterators[COLLECTION_NAME] = Iterators.Array;
    }

    var parent$E = promise$3;


    var promise$2 = parent$E;

    var promise$1 = promise$2;

    var _Promise = /*@__PURE__*/getDefaultExportFromCjs(promise$1);

    // a string of all valid unicode whitespaces
    var whitespaces$4 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
        '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

    var uncurryThis$h = functionUncurryThis;
    var requireObjectCoercible$3 = requireObjectCoercible$7;
    var toString$7 = toString$c;
    var whitespaces$3 = whitespaces$4;

    var replace$1 = uncurryThis$h(''.replace);
    var ltrim = RegExp('^[' + whitespaces$3 + ']+');
    var rtrim = RegExp('(^|[^' + whitespaces$3 + '])[' + whitespaces$3 + ']+$');

    // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
    var createMethod$2 = function (TYPE) {
        return function ($this) {
            var string = toString$7(requireObjectCoercible$3($this));
            if (TYPE & 1) string = replace$1(string, ltrim, '');
            if (TYPE & 2) string = replace$1(string, rtrim, '$1');
            return string;
        };
    };

    var stringTrim = {
        // `String.prototype.{ trimLeft, trimStart }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimstart
        start: createMethod$2(1),
        // `String.prototype.{ trimRight, trimEnd }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimend
        end: createMethod$2(2),
        // `String.prototype.trim` method
        // https://tc39.es/ecma262/#sec-string.prototype.trim
        trim: createMethod$2(3)
    };

    var global$b = global$u;
    var fails$h = fails$v;
    var uncurryThis$g = functionUncurryThis;
    var toString$6 = toString$c;
    var trim$5 = stringTrim.trim;
    var whitespaces$2 = whitespaces$4;

    var charAt$1 = uncurryThis$g(''.charAt);
    var $parseFloat$1 = global$b.parseFloat;
    var Symbol$4 = global$b.Symbol;
    var ITERATOR$1 = Symbol$4 && Symbol$4.iterator;
    var FORCED$5 = 1 / $parseFloat$1(whitespaces$2 + '-0') !== -Infinity
        // MS Edge 18- broken with boxed symbols
        || (ITERATOR$1 && !fails$h(function () {
            $parseFloat$1(Object(ITERATOR$1));
        }));

    // `parseFloat` method
    // https://tc39.es/ecma262/#sec-parsefloat-string
    var numberParseFloat = FORCED$5 ? function parseFloat(string) {
        var trimmedString = trim$5(toString$6(string));
        var result = $parseFloat$1(trimmedString);
        return result === 0 && charAt$1(trimmedString, 0) === '-' ? -0 : result;
    } : $parseFloat$1;

    var $$B = _export;
    var $parseFloat = numberParseFloat;

    // `parseFloat` method
    // https://tc39.es/ecma262/#sec-parsefloat-string
    $$B({global: true, forced: parseFloat !== $parseFloat}, {
        parseFloat: $parseFloat
    });

    var path$f = path$j;

    var _parseFloat$3 = path$f.parseFloat;

    var parent$D = _parseFloat$3;

    var _parseFloat$2 = parent$D;

    var _parseFloat = _parseFloat$2;

    var _parseFloat$1 = /*@__PURE__*/getDefaultExportFromCjs(_parseFloat);

    var global$a = global$u;
    var fails$g = fails$v;
    var uncurryThis$f = functionUncurryThis;
    var toString$5 = toString$c;
    var trim$4 = stringTrim.trim;
    var whitespaces$1 = whitespaces$4;

    var $parseInt$1 = global$a.parseInt;
    var Symbol$3 = global$a.Symbol;
    var ITERATOR = Symbol$3 && Symbol$3.iterator;
    var hex = /^[+-]?0x/i;
    var exec$1 = uncurryThis$f(hex.exec);
    var FORCED$4 = $parseInt$1(whitespaces$1 + '08') !== 8 || $parseInt$1(whitespaces$1 + '0x16') !== 22
        // MS Edge 18- broken with boxed symbols
        || (ITERATOR && !fails$g(function () {
            $parseInt$1(Object(ITERATOR));
        }));

    // `parseInt` method
    // https://tc39.es/ecma262/#sec-parseint-string-radix
    var numberParseInt = FORCED$4 ? function parseInt(string, radix) {
        var S = trim$4(toString$5(string));
        return $parseInt$1(S, (radix >>> 0) || (exec$1(hex, S) ? 16 : 10));
    } : $parseInt$1;

    var $$A = _export;
    var $parseInt = numberParseInt;

    // `parseInt` method
    // https://tc39.es/ecma262/#sec-parseint-string-radix
    $$A({global: true, forced: parseInt !== $parseInt}, {
        parseInt: $parseInt
    });

    var path$e = path$j;

    var _parseInt$3 = path$e.parseInt;

    var parent$C = _parseInt$3;

    var _parseInt$2 = parent$C;

    var _parseInt = _parseInt$2;

    var _parseInt$1 = /*@__PURE__*/getDefaultExportFromCjs(_parseInt);

    var classof$5 = classofRaw$2;

    // `IsArray` abstract operation
    // https://tc39.es/ecma262/#sec-isarray
    // eslint-disable-next-line es/no-array-isarray -- safe
    var isArray$6 = Array.isArray || function isArray(argument) {
        return classof$5(argument) === 'Array';
    };

    var toPropertyKey$2 = toPropertyKey$5;
    var definePropertyModule$1 = objectDefineProperty;
    var createPropertyDescriptor$1 = createPropertyDescriptor$7;

    var createProperty$4 = function (object, key, value) {
        var propertyKey = toPropertyKey$2(key);
        if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor$1(0, value));
        else object[propertyKey] = value;
    };

    var fails$f = fails$v;
    var wellKnownSymbol$a = wellKnownSymbol$o;
    var V8_VERSION$1 = engineV8Version;

    var SPECIES$2 = wellKnownSymbol$a('species');

    var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
        // We can't use this feature detection in V8 since it causes
        // deoptimization and serious performance degradation
        // https://github.com/zloirock/core-js/issues/677
        return V8_VERSION$1 >= 51 || !fails$f(function () {
            var array = [];
            var constructor = array.constructor = {};
            constructor[SPECIES$2] = function () {
                return {foo: 1};
            };
            return array[METHOD_NAME](Boolean).foo !== 1;
        });
    };

    var $$z = _export;
    var isArray$5 = isArray$6;
    var isConstructor$2 = isConstructor$4;
    var isObject$8 = isObject$j;
    var toAbsoluteIndex$2 = toAbsoluteIndex$4;
    var lengthOfArrayLike$6 = lengthOfArrayLike$9;
    var toIndexedObject$3 = toIndexedObject$9;
    var createProperty$3 = createProperty$4;
    var wellKnownSymbol$9 = wellKnownSymbol$o;
    var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
    var nativeSlice = arraySlice$5;

    var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$4('slice');

    var SPECIES$1 = wellKnownSymbol$9('species');
    var $Array$2 = Array;
    var max$1 = Math.max;

    // `Array.prototype.slice` method
    // https://tc39.es/ecma262/#sec-array.prototype.slice
    // fallback for not array-like ES3 strings and DOM objects
    $$z({target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3}, {
        slice: function slice(start, end) {
            var O = toIndexedObject$3(this);
            var length = lengthOfArrayLike$6(O);
            var k = toAbsoluteIndex$2(start, length);
            var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
            // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
            var Constructor, result, n;
            if (isArray$5(O)) {
                Constructor = O.constructor;
                // cross-realm fallback
                if (isConstructor$2(Constructor) && (Constructor === $Array$2 || isArray$5(Constructor.prototype))) {
                    Constructor = undefined;
                } else if (isObject$8(Constructor)) {
                    Constructor = Constructor[SPECIES$1];
                    if (Constructor === null) Constructor = undefined;
                }
                if (Constructor === $Array$2 || Constructor === undefined) {
                    return nativeSlice(O, k, fin);
                }
            }
            result = new (Constructor === undefined ? $Array$2 : Constructor)(max$1(fin - k, 0));
            for (n = 0; k < fin; k++, n++) if (k in O) createProperty$3(result, n, O[k]);
            result.length = n;
            return result;
        }
    });

    var global$9 = global$u;
    var path$d = path$j;

    var getBuiltInPrototypeMethod$f = function (CONSTRUCTOR, METHOD) {
        var Namespace = path$d[CONSTRUCTOR + 'Prototype'];
        var pureMethod = Namespace && Namespace[METHOD];
        if (pureMethod) return pureMethod;
        var NativeConstructor = global$9[CONSTRUCTOR];
        var NativePrototype = NativeConstructor && NativeConstructor.prototype;
        return NativePrototype && NativePrototype[METHOD];
    };

    var getBuiltInPrototypeMethod$e = getBuiltInPrototypeMethod$f;

    var slice$3 = getBuiltInPrototypeMethod$e('Array', 'slice');

    var isPrototypeOf$e = objectIsPrototypeOf;
    var method$c = slice$3;

    var ArrayPrototype$b = Array.prototype;

    var slice$2 = function (it) {
        var own = it.slice;
        return it === ArrayPrototype$b || (isPrototypeOf$e(ArrayPrototype$b, it) && own === ArrayPrototype$b.slice) ? method$c : own;
    };

    var parent$B = slice$2;

    var slice$1 = parent$B;

    var slice = slice$1;

    var _sliceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(slice);

    /* global Bun -- Bun case */
    var engineIsBun = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';

    var global$8 = global$u;
    var apply$2 = functionApply;
    var isCallable$3 = isCallable$l;
    var ENGINE_IS_BUN = engineIsBun;
    var USER_AGENT = engineUserAgent;
    var arraySlice$3 = arraySlice$5;
    var validateArgumentsLength = validateArgumentsLength$2;

    var Function$1 = global$8.Function;
    // dirty IE9- and Bun 0.3.0- checks
    var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && (function () {
        var version = global$8.Bun.version.split('.');
        return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
    })();

    // IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
    // https://github.com/oven-sh/bun/issues/1633
    var schedulersFix$2 = function (scheduler, hasTimeArg) {
        var firstParamIndex = hasTimeArg ? 2 : 1;
        return WRAP ? function (handler, timeout /* , ...arguments */) {
            var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
            var fn = isCallable$3(handler) ? handler : Function$1(handler);
            var params = boundArgs ? arraySlice$3(arguments, firstParamIndex) : [];
            var callback = boundArgs ? function () {
                apply$2(fn, this, params);
            } : fn;
            return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
        } : scheduler;
    };

    var $$y = _export;
    var global$7 = global$u;
    var schedulersFix$1 = schedulersFix$2;

    var setInterval = schedulersFix$1(global$7.setInterval, true);

    // Bun / IE9- setInterval additional parameters fix
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
    $$y({global: true, bind: true, forced: global$7.setInterval !== setInterval}, {
        setInterval: setInterval
    });

    var $$x = _export;
    var global$6 = global$u;
    var schedulersFix = schedulersFix$2;

    var setTimeout$3 = schedulersFix(global$6.setTimeout, true);

    // Bun / IE9- setTimeout additional parameters fix
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
    $$x({global: true, bind: true, forced: global$6.setTimeout !== setTimeout$3}, {
        setTimeout: setTimeout$3
    });

    var path$c = path$j;

    var setTimeout$2 = path$c.setTimeout;

    var setTimeout$1 = setTimeout$2;

    var _setTimeout = /*@__PURE__*/getDefaultExportFromCjs(setTimeout$1);

    var fails$e = fails$v;

    var freezing = !fails$e(function () {
        // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
        return Object.isExtensible(Object.preventExtensions({}));
    });

    var defineBuiltIn$2 = defineBuiltIn$6;

    var defineBuiltIns$3 = function (target, src, options) {
        for (var key in src) {
            if (options && options.unsafe && target[key]) target[key] = src[key];
            else defineBuiltIn$2(target, key, src[key], options);
        }
        return target;
    };

    var internalMetadata = {exports: {}};

    var objectGetOwnPropertyNamesExternal = {};

    /* eslint-disable es/no-object-getownpropertynames -- safe */
    var classof$4 = classofRaw$2;
    var toIndexedObject$2 = toIndexedObject$9;
    var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
    var arraySlice$2 = arraySlice$5;

    var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window) : [];

    var getWindowNames = function (it) {
        try {
            return $getOwnPropertyNames$1(it);
        } catch (error) {
            return arraySlice$2(windowNames);
        }
    };

    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
        return windowNames && classof$4(it) === 'Window'
            ? getWindowNames(it)
            : $getOwnPropertyNames$1(toIndexedObject$2(it));
    };

    // FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
    var fails$d = fails$v;

    var arrayBufferNonExtensible = fails$d(function () {
        if (typeof ArrayBuffer == 'function') {
            var buffer = new ArrayBuffer(8);
            // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
            if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {value: 8});
        }
    });

    var fails$c = fails$v;
    var isObject$7 = isObject$j;
    var classof$3 = classofRaw$2;
    var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

    // eslint-disable-next-line es/no-object-isextensible -- safe
    var $isExtensible = Object.isExtensible;
    var FAILS_ON_PRIMITIVES$1 = fails$c(function () {
        $isExtensible(1);
    });

    // `Object.isExtensible` method
    // https://tc39.es/ecma262/#sec-object.isextensible
    var objectIsExtensible = (FAILS_ON_PRIMITIVES$1 || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
        if (!isObject$7(it)) return false;
        if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$3(it) === 'ArrayBuffer') return false;
        return $isExtensible ? $isExtensible(it) : true;
    } : $isExtensible;

    var $$w = _export;
    var uncurryThis$e = functionUncurryThis;
    var hiddenKeys$1 = hiddenKeys$6;
    var isObject$6 = isObject$j;
    var hasOwn$6 = hasOwnProperty_1;
    var defineProperty$a = objectDefineProperty.f;
    var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
    var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
    var isExtensible$1 = objectIsExtensible;
    var uid$1 = uid$4;
    var FREEZING$1 = freezing;

    var REQUIRED = false;
    var METADATA$1 = uid$1('meta');
    var id$1 = 0;

    var setMetadata = function (it) {
        defineProperty$a(it, METADATA$1, {
            value: {
                objectID: 'O' + id$1++, // object ID
                weakData: {}          // weak collections IDs
            }
        });
    };

    var fastKey$1 = function (it, create) {
        // return a primitive with prefix
        if (!isObject$6(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
        if (!hasOwn$6(it, METADATA$1)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible$1(it)) return 'F';
            // not necessary to add metadata
            if (!create) return 'E';
            // add missing metadata
            setMetadata(it);
            // return object ID
        }
        return it[METADATA$1].objectID;
    };

    var getWeakData$1 = function (it, create) {
        if (!hasOwn$6(it, METADATA$1)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible$1(it)) return true;
            // not necessary to add metadata
            if (!create) return false;
            // add missing metadata
            setMetadata(it);
            // return the store of weak collections IDs
        }
        return it[METADATA$1].weakData;
    };

    // add metadata on freeze-family methods calling
    var onFreeze = function (it) {
        if (FREEZING$1 && REQUIRED && isExtensible$1(it) && !hasOwn$6(it, METADATA$1)) setMetadata(it);
        return it;
    };

    var enable = function () {
        meta.enable = function () { /* empty */
        };
        REQUIRED = true;
        var getOwnPropertyNames = getOwnPropertyNamesModule$1.f;
        var splice = uncurryThis$e([].splice);
        var test = {};
        test[METADATA$1] = 1;

        // prevent exposing of metadata key
        if (getOwnPropertyNames(test).length) {
            getOwnPropertyNamesModule$1.f = function (it) {
                var result = getOwnPropertyNames(it);
                for (var i = 0, length = result.length; i < length; i++) {
                    if (result[i] === METADATA$1) {
                        splice(result, i, 1);
                        break;
                    }
                }
                return result;
            };

            $$w({target: 'Object', stat: true, forced: true}, {
                getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
            });
        }
    };

    var meta = internalMetadata.exports = {
        enable: enable,
        fastKey: fastKey$1,
        getWeakData: getWeakData$1,
        onFreeze: onFreeze
    };

    hiddenKeys$1[METADATA$1] = true;

    var internalMetadataExports = internalMetadata.exports;

    var isArray$4 = isArray$6;
    var isConstructor$1 = isConstructor$4;
    var isObject$5 = isObject$j;
    var wellKnownSymbol$8 = wellKnownSymbol$o;

    var SPECIES = wellKnownSymbol$8('species');
    var $Array$1 = Array;

    // a part of `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    var arraySpeciesConstructor$1 = function (originalArray) {
        var C;
        if (isArray$4(originalArray)) {
            C = originalArray.constructor;
            // cross-realm fallback
            if (isConstructor$1(C) && (C === $Array$1 || isArray$4(C.prototype))) C = undefined;
            else if (isObject$5(C)) {
                C = C[SPECIES];
                if (C === null) C = undefined;
            }
        }
        return C === undefined ? $Array$1 : C;
    };

    var arraySpeciesConstructor = arraySpeciesConstructor$1;

    // `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    var arraySpeciesCreate$3 = function (originalArray, length) {
        return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };

    var bind$3 = functionBindContext;
    var uncurryThis$d = functionUncurryThis;
    var IndexedObject = indexedObject;
    var toObject$7 = toObject$a;
    var lengthOfArrayLike$5 = lengthOfArrayLike$9;
    var arraySpeciesCreate$2 = arraySpeciesCreate$3;

    var push$5 = uncurryThis$d([].push);

    // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
    var createMethod$1 = function (TYPE) {
        var IS_MAP = TYPE === 1;
        var IS_FILTER = TYPE === 2;
        var IS_SOME = TYPE === 3;
        var IS_EVERY = TYPE === 4;
        var IS_FIND_INDEX = TYPE === 6;
        var IS_FILTER_REJECT = TYPE === 7;
        var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
        return function ($this, callbackfn, that, specificCreate) {
            var O = toObject$7($this);
            var self = IndexedObject(O);
            var length = lengthOfArrayLike$5(self);
            var boundFunction = bind$3(callbackfn, that);
            var index = 0;
            var create = specificCreate || arraySpeciesCreate$2;
            var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
            var value, result;
            for (; length > index; index++) if (NO_HOLES || index in self) {
                value = self[index];
                result = boundFunction(value, index, O);
                if (TYPE) {
                    if (IS_MAP) target[index] = result; // map
                    else if (result) switch (TYPE) {
                        case 3:
                            return true;              // some
                        case 5:
                            return value;             // find
                        case 6:
                            return index;             // findIndex
                        case 2:
                            push$5(target, value);      // filter
                    } else switch (TYPE) {
                        case 4:
                            return false;             // every
                        case 7:
                            push$5(target, value);      // filterReject
                    }
                }
            }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
    };

    var arrayIteration = {
        // `Array.prototype.forEach` method
        // https://tc39.es/ecma262/#sec-array.prototype.foreach
        forEach: createMethod$1(0),
        // `Array.prototype.map` method
        // https://tc39.es/ecma262/#sec-array.prototype.map
        map: createMethod$1(1),
        // `Array.prototype.filter` method
        // https://tc39.es/ecma262/#sec-array.prototype.filter
        filter: createMethod$1(2),
        // `Array.prototype.some` method
        // https://tc39.es/ecma262/#sec-array.prototype.some
        some: createMethod$1(3),
        // `Array.prototype.every` method
        // https://tc39.es/ecma262/#sec-array.prototype.every
        every: createMethod$1(4),
        // `Array.prototype.find` method
        // https://tc39.es/ecma262/#sec-array.prototype.find
        find: createMethod$1(5),
        // `Array.prototype.findIndex` method
        // https://tc39.es/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod$1(6),
        // `Array.prototype.filterReject` method
        // https://github.com/tc39/proposal-array-filtering
        filterReject: createMethod$1(7)
    };

    var $$v = _export;
    var global$5 = global$u;
    var InternalMetadataModule$1 = internalMetadataExports;
    var fails$b = fails$v;
    var createNonEnumerableProperty = createNonEnumerableProperty$8;
    var iterate$3 = iterate$9;
    var anInstance$2 = anInstance$4;
    var isCallable$2 = isCallable$l;
    var isObject$4 = isObject$j;
    var isNullOrUndefined$2 = isNullOrUndefined$7;
    var setToStringTag$3 = setToStringTag$8;
    var defineProperty$9 = objectDefineProperty.f;
    var forEach$5 = arrayIteration.forEach;
    var DESCRIPTORS$6 = descriptors;
    var InternalStateModule$3 = internalState;

    var setInternalState$3 = InternalStateModule$3.set;
    var internalStateGetterFor$2 = InternalStateModule$3.getterFor;

    var collection$3 = function (CONSTRUCTOR_NAME, wrapper, common) {
        var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
        var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
        var ADDER = IS_MAP ? 'set' : 'add';
        var NativeConstructor = global$5[CONSTRUCTOR_NAME];
        var NativePrototype = NativeConstructor && NativeConstructor.prototype;
        var exported = {};
        var Constructor;

        if (!DESCRIPTORS$6 || !isCallable$2(NativeConstructor)
            || !(IS_WEAK || NativePrototype.forEach && !fails$b(function () {
                new NativeConstructor().entries().next();
            }))
        ) {
            // create collection constructor
            Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
            InternalMetadataModule$1.enable();
        } else {
            Constructor = wrapper(function (target, iterable) {
                setInternalState$3(anInstance$2(target, Prototype), {
                    type: CONSTRUCTOR_NAME,
                    collection: new NativeConstructor()
                });
                if (!isNullOrUndefined$2(iterable)) iterate$3(iterable, target[ADDER], {
                    that: target,
                    AS_ENTRIES: IS_MAP
                });
            });

            var Prototype = Constructor.prototype;

            var getInternalState = internalStateGetterFor$2(CONSTRUCTOR_NAME);

            forEach$5(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
                var IS_ADDER = KEY === 'add' || KEY === 'set';
                if (KEY in NativePrototype && !(IS_WEAK && KEY === 'clear')) {
                    createNonEnumerableProperty(Prototype, KEY, function (a, b) {
                        var collection = getInternalState(this).collection;
                        if (!IS_ADDER && IS_WEAK && !isObject$4(a)) return KEY === 'get' ? undefined : false;
                        var result = collection[KEY](a === 0 ? 0 : a, b);
                        return IS_ADDER ? this : result;
                    });
                }
            });

            IS_WEAK || defineProperty$9(Prototype, 'size', {
                configurable: true,
                get: function () {
                    return getInternalState(this).collection.size;
                }
            });
        }

        setToStringTag$3(Constructor, CONSTRUCTOR_NAME, false, true);

        exported[CONSTRUCTOR_NAME] = Constructor;
        $$v({global: true, forced: true}, exported);

        if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

        return Constructor;
    };

    var uncurryThis$c = functionUncurryThis;
    var defineBuiltIns$2 = defineBuiltIns$3;
    var getWeakData = internalMetadataExports.getWeakData;
    var anInstance$1 = anInstance$4;
    var anObject$2 = anObject$d;
    var isNullOrUndefined$1 = isNullOrUndefined$7;
    var isObject$3 = isObject$j;
    var iterate$2 = iterate$9;
    var ArrayIterationModule = arrayIteration;
    var hasOwn$5 = hasOwnProperty_1;
    var InternalStateModule$2 = internalState;

    var setInternalState$2 = InternalStateModule$2.set;
    var internalStateGetterFor$1 = InternalStateModule$2.getterFor;
    var find$4 = ArrayIterationModule.find;
    var findIndex = ArrayIterationModule.findIndex;
    var splice$4 = uncurryThis$c([].splice);
    var id = 0;

    // fallback for uncaught frozen keys
    var uncaughtFrozenStore = function (state) {
        return state.frozen || (state.frozen = new UncaughtFrozenStore());
    };

    var UncaughtFrozenStore = function () {
        this.entries = [];
    };

    var findUncaughtFrozen = function (store, key) {
        return find$4(store.entries, function (it) {
            return it[0] === key;
        });
    };

    UncaughtFrozenStore.prototype = {
        get: function (key) {
            var entry = findUncaughtFrozen(this, key);
            if (entry) return entry[1];
        },
        has: function (key) {
            return !!findUncaughtFrozen(this, key);
        },
        set: function (key, value) {
            var entry = findUncaughtFrozen(this, key);
            if (entry) entry[1] = value;
            else this.entries.push([key, value]);
        },
        'delete': function (key) {
            var index = findIndex(this.entries, function (it) {
                return it[0] === key;
            });
            if (~index) splice$4(this.entries, index, 1);
            return !!~index;
        }
    };

    var collectionWeak$1 = {
        getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
            var Constructor = wrapper(function (that, iterable) {
                anInstance$1(that, Prototype);
                setInternalState$2(that, {
                    type: CONSTRUCTOR_NAME,
                    id: id++,
                    frozen: undefined
                });
                if (!isNullOrUndefined$1(iterable)) iterate$2(iterable, that[ADDER], {that: that, AS_ENTRIES: IS_MAP});
            });

            var Prototype = Constructor.prototype;

            var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

            var define = function (that, key, value) {
                var state = getInternalState(that);
                var data = getWeakData(anObject$2(key), true);
                if (data === true) uncaughtFrozenStore(state).set(key, value);
                else data[state.id] = value;
                return that;
            };

            defineBuiltIns$2(Prototype, {
                // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
                // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
                // https://tc39.es/ecma262/#sec-weakset.prototype.delete
                'delete': function (key) {
                    var state = getInternalState(this);
                    if (!isObject$3(key)) return false;
                    var data = getWeakData(key);
                    if (data === true) return uncaughtFrozenStore(state)['delete'](key);
                    return data && hasOwn$5(data, state.id) && delete data[state.id];
                },
                // `{ WeakMap, WeakSet }.prototype.has(key)` methods
                // https://tc39.es/ecma262/#sec-weakmap.prototype.has
                // https://tc39.es/ecma262/#sec-weakset.prototype.has
                has: function has(key) {
                    var state = getInternalState(this);
                    if (!isObject$3(key)) return false;
                    var data = getWeakData(key);
                    if (data === true) return uncaughtFrozenStore(state).has(key);
                    return data && hasOwn$5(data, state.id);
                }
            });

            defineBuiltIns$2(Prototype, IS_MAP ? {
                // `WeakMap.prototype.get(key)` method
                // https://tc39.es/ecma262/#sec-weakmap.prototype.get
                get: function get(key) {
                    var state = getInternalState(this);
                    if (isObject$3(key)) {
                        var data = getWeakData(key);
                        if (data === true) return uncaughtFrozenStore(state).get(key);
                        return data ? data[state.id] : undefined;
                    }
                },
                // `WeakMap.prototype.set(key, value)` method
                // https://tc39.es/ecma262/#sec-weakmap.prototype.set
                set: function set(key, value) {
                    return define(this, key, value);
                }
            } : {
                // `WeakSet.prototype.add(value)` method
                // https://tc39.es/ecma262/#sec-weakset.prototype.add
                add: function add(value) {
                    return define(this, value, true);
                }
            });

            return Constructor;
        }
    };

    var FREEZING = freezing;
    var global$4 = global$u;
    var uncurryThis$b = functionUncurryThis;
    var defineBuiltIns$1 = defineBuiltIns$3;
    var InternalMetadataModule = internalMetadataExports;
    var collection$2 = collection$3;
    var collectionWeak = collectionWeak$1;
    var isObject$2 = isObject$j;
    var enforceInternalState = internalState.enforce;
    var fails$a = fails$v;
    var NATIVE_WEAK_MAP = weakMapBasicDetection;

    var $Object = Object;
    // eslint-disable-next-line es/no-array-isarray -- safe
    var isArray$3 = Array.isArray;
    // eslint-disable-next-line es/no-object-isextensible -- safe
    var isExtensible = $Object.isExtensible;
    // eslint-disable-next-line es/no-object-isfrozen -- safe
    var isFrozen = $Object.isFrozen;
    // eslint-disable-next-line es/no-object-issealed -- safe
    var isSealed = $Object.isSealed;
    // eslint-disable-next-line es/no-object-freeze -- safe
    var freeze = $Object.freeze;
    // eslint-disable-next-line es/no-object-seal -- safe
    var seal = $Object.seal;

    var IS_IE11 = !global$4.ActiveXObject && 'ActiveXObject' in global$4;
    var InternalWeakMap;

    var wrapper = function (init) {
        return function WeakMap() {
            return init(this, arguments.length ? arguments[0] : undefined);
        };
    };

    // `WeakMap` constructor
    // https://tc39.es/ecma262/#sec-weakmap-constructor
    var $WeakMap = collection$2('WeakMap', wrapper, collectionWeak);
    var WeakMapPrototype = $WeakMap.prototype;
    var nativeSet = uncurryThis$b(WeakMapPrototype.set);

    // Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
    var hasMSEdgeFreezingBug = function () {
        return FREEZING && fails$a(function () {
            var frozenArray = freeze([]);
            nativeSet(new $WeakMap(), frozenArray, 1);
            return !isFrozen(frozenArray);
        });
    };

    // IE11 WeakMap frozen keys fix
    // We can't use feature detection because it crash some old IE builds
    // https://github.com/zloirock/core-js/issues/485
    if (NATIVE_WEAK_MAP) if (IS_IE11) {
        InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
        InternalMetadataModule.enable();
        var nativeDelete = uncurryThis$b(WeakMapPrototype['delete']);
        var nativeHas = uncurryThis$b(WeakMapPrototype.has);
        var nativeGet = uncurryThis$b(WeakMapPrototype.get);
        defineBuiltIns$1(WeakMapPrototype, {
            'delete': function (key) {
                if (isObject$2(key) && !isExtensible(key)) {
                    var state = enforceInternalState(this);
                    if (!state.frozen) state.frozen = new InternalWeakMap();
                    return nativeDelete(this, key) || state.frozen['delete'](key);
                }
                return nativeDelete(this, key);
            },
            has: function has(key) {
                if (isObject$2(key) && !isExtensible(key)) {
                    var state = enforceInternalState(this);
                    if (!state.frozen) state.frozen = new InternalWeakMap();
                    return nativeHas(this, key) || state.frozen.has(key);
                }
                return nativeHas(this, key);
            },
            get: function get(key) {
                if (isObject$2(key) && !isExtensible(key)) {
                    var state = enforceInternalState(this);
                    if (!state.frozen) state.frozen = new InternalWeakMap();
                    return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
                }
                return nativeGet(this, key);
            },
            set: function set(key, value) {
                if (isObject$2(key) && !isExtensible(key)) {
                    var state = enforceInternalState(this);
                    if (!state.frozen) state.frozen = new InternalWeakMap();
                    nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
                } else nativeSet(this, key, value);
                return this;
            }
        });
        // Chakra Edge frozen keys fix
    } else if (hasMSEdgeFreezingBug()) {
        defineBuiltIns$1(WeakMapPrototype, {
            set: function set(key, value) {
                var arrayIntegrityLevel;
                if (isArray$3(key)) {
                    if (isFrozen(key)) arrayIntegrityLevel = freeze;
                    else if (isSealed(key)) arrayIntegrityLevel = seal;
                }
                nativeSet(this, key, value);
                if (arrayIntegrityLevel) arrayIntegrityLevel(key);
                return this;
            }
        });
    }

    var path$b = path$j;

    var weakMap$2 = path$b.WeakMap;

    var parent$A = weakMap$2;


    var weakMap$1 = parent$A;

    var weakMap = weakMap$1;

    var _WeakMap = /*@__PURE__*/getDefaultExportFromCjs(weakMap);

    function _classPrivateFieldInitSpec(obj, privateMap, value) {
        _checkPrivateRedeclaration(obj, privateMap);
        privateMap.set(obj, value);
    }

    function _checkPrivateRedeclaration(obj, privateCollection) {
        if (privateCollection.has(obj)) {
            throw new TypeError("Cannot initialize the same private elements twice on an object");
        }
    }

    var opt = {};

    /**
     * Start Ladda on given button.
     */
    function laddaStart(elem) {
        var ladda = Ladda.create(elem);
        ladda.start();
        return ladda;
    }

    /**
     * Scroll to element if it is not visible.
     *
     * @param $elem
     * @param formId
     */
    function scrollTo($elem, formId) {
        if (opt[formId].scroll) {
            if ($elem.length) {
                var elemTop = $elem.offset().top;
                var scrollTop = $$O(window).scrollTop();
                if (elemTop < $$O(window).scrollTop() || elemTop > scrollTop + window.innerHeight) {
                    $$O('html,body').animate({
                        scrollTop: elemTop - 50
                    }, 500);
                }
            }
        } else {
            opt[formId].scroll = true;
        }
    }

    function requestCancellable() {
        const request = {
            xhr: null,
            booklyAjax: () => {
            },
            cancel: () => {
            }
        };
        request.booklyAjax = options => {
            return new _Promise((resolve, reject) => {
                request.cancel = () => {
                    if (request.xhr != null) {
                        request.xhr.abort();
                        request.xhr = null;
                    }
                };
                request.xhr = ajax(options, resolve, reject);
            });
        };
        return request;
    }

    function booklyAjax(options) {
        return new _Promise((resolve, reject) => {
            ajax(options, resolve, reject);
        });
    }

    var _w = /*#__PURE__*/new _WeakMap();

    class Format {
        constructor(w) {
            _classPrivateFieldInitSpec(this, _w, {
                writable: true,
                value: void 0
            });
            _classPrivateFieldSet(this, _w, w);
        }

        price(amount) {
            let result = _classPrivateFieldGet(this, _w).format_price.format;
            amount = _parseFloat$1(amount);
            result = result.replace('{sign}', amount < 0 ? '-' : '');
            result = result.replace('{price}', this._formatNumber(Math.abs(amount), _classPrivateFieldGet(this, _w).format_price.decimals, _classPrivateFieldGet(this, _w).format_price.decimal_separator, _classPrivateFieldGet(this, _w).format_price.thousands_separator));
            return result;
        }

        _formatNumber(n, c, d, t) {
            var _context;
            n = Math.abs(Number(n) || 0).toFixed(c);
            c = isNaN(c = Math.abs(c)) ? 2 : c;
            d = d === undefined ? '.' : d;
            t = t === undefined ? ',' : t;
            let s = n < 0 ? '-' : '',
                i = String(_parseInt$1(n)),
                j = i.length > 3 ? i.length % 3 : 0;
            return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + _sliceInstanceProperty(_context = Math.abs(n - i).toFixed(c)).call(_context, 2) : '');
        }
    }

    function ajax(options, resolve, reject) {
        options.data.csrf_token = BooklyL10n.csrf_token;
        return $$O.ajax(jQuery.extend({
            url: BooklyL10n.ajaxurl,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: 'withCredentials' in new XMLHttpRequest(),
            beforeSend(jqXHR, settings) {
            }
        }, options)).always(response => {
            if (processSessionSaveResponse(response)) {
                if (response.success) {
                    resolve(response);
                } else {
                    reject(response);
                }
            }
        });
    }

    function processSessionSaveResponse(response) {
        if (!response.success && (response === null || response === void 0 ? void 0 : response.error) === 'session_error') {
            Ladda.stopAll();
            _setTimeout(function () {
                if (confirm(BooklyL10n.sessionHasExpired)) {
                    location.reload();
                }
            }, 100);
            return false;
        }
        return true;
    }

    var $$u = _export;
    var $find = arrayIteration.find;

    var FIND = 'find';
    var SKIPS_HOLES = true;

    // Shouldn't skip holes
    // eslint-disable-next-line es/no-array-prototype-find -- testing
    if (FIND in []) Array(1)[FIND](function () {
        SKIPS_HOLES = false;
    });

    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    $$u({target: 'Array', proto: true, forced: SKIPS_HOLES}, {
        find: function find(callbackfn /* , that = undefined */) {
            return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
    });

    var getBuiltInPrototypeMethod$d = getBuiltInPrototypeMethod$f;

    var find$3 = getBuiltInPrototypeMethod$d('Array', 'find');

    var isPrototypeOf$d = objectIsPrototypeOf;
    var method$b = find$3;

    var ArrayPrototype$a = Array.prototype;

    var find$2 = function (it) {
        var own = it.find;
        return it === ArrayPrototype$a || (isPrototypeOf$d(ArrayPrototype$a, it) && own === ArrayPrototype$a.find) ? method$b : own;
    };

    var parent$z = find$2;

    var find$1 = parent$z;

    var find = find$1;

    var _findInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(find);

    var uncurryThis$a = functionUncurryThis;
    var isArray$2 = isArray$6;
    var isCallable$1 = isCallable$l;
    var classof$2 = classofRaw$2;
    var toString$4 = toString$c;

    var push$4 = uncurryThis$a([].push);

    var getJsonReplacerFunction = function (replacer) {
        if (isCallable$1(replacer)) return replacer;
        if (!isArray$2(replacer)) return;
        var rawLength = replacer.length;
        var keys = [];
        for (var i = 0; i < rawLength; i++) {
            var element = replacer[i];
            if (typeof element == 'string') push$4(keys, element);
            else if (typeof element == 'number' || classof$2(element) === 'Number' || classof$2(element) === 'String') push$4(keys, toString$4(element));
        }
        var keysLength = keys.length;
        var root = true;
        return function (key, value) {
            if (root) {
                root = false;
                return value;
            }
            if (isArray$2(this)) return value;
            for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
        };
    };

    var $$t = _export;
    var getBuiltIn$6 = getBuiltIn$f;
    var apply$1 = functionApply;
    var call$3 = functionCall;
    var uncurryThis$9 = functionUncurryThis;
    var fails$9 = fails$v;
    var isCallable = isCallable$l;
    var isSymbol$2 = isSymbol$5;
    var arraySlice$1 = arraySlice$5;
    var getReplacerFunction = getJsonReplacerFunction;
    var NATIVE_SYMBOL$3 = symbolConstructorDetection;

    var $String = String;
    var $stringify = getBuiltIn$6('JSON', 'stringify');
    var exec = uncurryThis$9(/./.exec);
    var charAt = uncurryThis$9(''.charAt);
    var charCodeAt = uncurryThis$9(''.charCodeAt);
    var replace = uncurryThis$9(''.replace);
    var numberToString = uncurryThis$9(1.0.toString);

    var tester = /[\uD800-\uDFFF]/g;
    var low = /^[\uD800-\uDBFF]$/;
    var hi = /^[\uDC00-\uDFFF]$/;

    var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$3 || fails$9(function () {
        var symbol = getBuiltIn$6('Symbol')('stringify detection');
        // MS Edge converts symbol values to JSON as {}
        return $stringify([symbol]) !== '[null]'
            // WebKit converts symbol values to JSON as null
            || $stringify({a: symbol}) !== '{}'
            // V8 throws on boxed symbols
            || $stringify(Object(symbol)) !== '{}';
    });

    // https://github.com/tc39/proposal-well-formed-stringify
    var ILL_FORMED_UNICODE = fails$9(function () {
        return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
            || $stringify('\uDEAD') !== '"\\udead"';
    });

    var stringifyWithSymbolsFix = function (it, replacer) {
        var args = arraySlice$1(arguments);
        var $replacer = getReplacerFunction(replacer);
        if (!isCallable($replacer) && (it === undefined || isSymbol$2(it))) return; // IE8 returns string on undefined
        args[1] = function (key, value) {
            // some old implementations (like WebKit) could pass numbers as keys
            if (isCallable($replacer)) value = call$3($replacer, this, $String(key), value);
            if (!isSymbol$2(value)) return value;
        };
        return apply$1($stringify, null, args);
    };

    var fixIllFormed = function (match, offset, string) {
        var prev = charAt(string, offset - 1);
        var next = charAt(string, offset + 1);
        if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
            return '\\u' + numberToString(charCodeAt(match, 0), 16);
        }
        return match;
    };

    if ($stringify) {
        // `JSON.stringify` method
        // https://tc39.es/ecma262/#sec-json.stringify
        $$t({target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE}, {
            // eslint-disable-next-line no-unused-vars -- required for `.length`
            stringify: function stringify(it, replacer, space) {
                var args = arraySlice$1(arguments);
                var result = apply$1(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
                return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
            }
        });
    }

    var path$a = path$j;
    var apply = functionApply;

    // eslint-disable-next-line es/no-json -- safe
    if (!path$a.JSON) path$a.JSON = {stringify: JSON.stringify};

    // eslint-disable-next-line no-unused-vars -- required for `.length`
    var stringify$2 = function stringify(it, replacer, space) {
        return apply(path$a.JSON.stringify, null, arguments);
    };

    var parent$y = stringify$2;

    var stringify$1 = parent$y;

    var stringify = stringify$1;

    var _JSON$stringify = /*@__PURE__*/getDefaultExportFromCjs(stringify);

    var toIntegerOrInfinity$1 = toIntegerOrInfinity$5;
    var toString$3 = toString$c;
    var requireObjectCoercible$2 = requireObjectCoercible$7;

    var $RangeError = RangeError;

    // `String.prototype.repeat` method implementation
    // https://tc39.es/ecma262/#sec-string.prototype.repeat
    var stringRepeat = function repeat(count) {
        var str = toString$3(requireObjectCoercible$2(this));
        var result = '';
        var n = toIntegerOrInfinity$1(count);
        if (n < 0 || n === Infinity) throw new $RangeError('Wrong number of repetitions');
        for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
        return result;
    };

    var $$s = _export;
    var repeat$4 = stringRepeat;

    // `String.prototype.repeat` method
    // https://tc39.es/ecma262/#sec-string.prototype.repeat
    $$s({target: 'String', proto: true}, {
        repeat: repeat$4
    });

    var getBuiltInPrototypeMethod$c = getBuiltInPrototypeMethod$f;

    var repeat$3 = getBuiltInPrototypeMethod$c('String', 'repeat');

    var isPrototypeOf$c = objectIsPrototypeOf;
    var method$a = repeat$3;

    var StringPrototype$2 = String.prototype;

    var repeat$2 = function (it) {
        var own = it.repeat;
        return typeof it == 'string' || it === StringPrototype$2
        || (isPrototypeOf$c(StringPrototype$2, it) && own === StringPrototype$2.repeat) ? method$a : own;
    };

    var parent$x = repeat$2;

    var repeat$1 = parent$x;

    var repeat = repeat$1;

    var _repeatInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(repeat);

    var fails$8 = fails$v;

    var arrayMethodIsStrict$4 = function (METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails$8(function () {
            // eslint-disable-next-line no-useless-call -- required for testing
            method.call(null, argument || function () {
                return 1;
            }, 1);
        });
    };

    var $forEach$1 = arrayIteration.forEach;
    var arrayMethodIsStrict$3 = arrayMethodIsStrict$4;

    var STRICT_METHOD$2 = arrayMethodIsStrict$3('forEach');

    // `Array.prototype.forEach` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    var arrayForEach = !STRICT_METHOD$2 ? function forEach(callbackfn /* , thisArg */) {
        return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        // eslint-disable-next-line es/no-array-prototype-foreach -- safe
    } : [].forEach;

    var $$r = _export;
    var forEach$4 = arrayForEach;

    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    // eslint-disable-next-line es/no-array-prototype-foreach -- safe
    $$r({target: 'Array', proto: true, forced: [].forEach !== forEach$4}, {
        forEach: forEach$4
    });

    var getBuiltInPrototypeMethod$b = getBuiltInPrototypeMethod$f;

    var forEach$3 = getBuiltInPrototypeMethod$b('Array', 'forEach');

    var parent$w = forEach$3;

    var forEach$2 = parent$w;

    var classof$1 = classof$b;
    var hasOwn$4 = hasOwnProperty_1;
    var isPrototypeOf$b = objectIsPrototypeOf;
    var method$9 = forEach$2;


    var ArrayPrototype$9 = Array.prototype;

    var DOMIterables = {
        DOMTokenList: true,
        NodeList: true
    };

    var forEach$1 = function (it) {
        var own = it.forEach;
        return it === ArrayPrototype$9 || (isPrototypeOf$b(ArrayPrototype$9, it) && own === ArrayPrototype$9.forEach)
        || hasOwn$4(DOMIterables, classof$1(it)) ? method$9 : own;
    };

    var forEach = forEach$1;

    var _forEachInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(forEach);

    var DESCRIPTORS$5 = descriptors;
    var isArray$1 = isArray$6;

    var $TypeError$3 = TypeError;
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

    // Safari < 13 does not throw an error in this case
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$5 && !function () {
        // makes no sense without proper strict mode support
        if (this !== undefined) return true;
        try {
            // eslint-disable-next-line es/no-object-defineproperty -- safe
            Object.defineProperty([], 'length', {writable: false}).length = 1;
        } catch (error) {
            return error instanceof TypeError;
        }
    }();

    var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
        if (isArray$1(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
            throw new $TypeError$3('Cannot set read only .length');
        }
        return O.length = length;
    } : function (O, length) {
        return O.length = length;
    };

    var $TypeError$2 = TypeError;
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

    var doesNotExceedSafeInteger$2 = function (it) {
        if (it > MAX_SAFE_INTEGER) throw $TypeError$2('Maximum allowed index exceeded');
        return it;
    };

    var tryToString$1 = tryToString$6;

    var $TypeError$1 = TypeError;

    var deletePropertyOrThrow$2 = function (O, P) {
        if (!delete O[P]) throw new $TypeError$1('Cannot delete property ' + tryToString$1(P) + ' of ' + tryToString$1(O));
    };

    var $$q = _export;
    var toObject$6 = toObject$a;
    var toAbsoluteIndex$1 = toAbsoluteIndex$4;
    var toIntegerOrInfinity = toIntegerOrInfinity$5;
    var lengthOfArrayLike$4 = lengthOfArrayLike$9;
    var setArrayLength = arraySetLength;
    var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
    var arraySpeciesCreate$1 = arraySpeciesCreate$3;
    var createProperty$2 = createProperty$4;
    var deletePropertyOrThrow$1 = deletePropertyOrThrow$2;
    var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;

    var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$3('splice');

    var max = Math.max;
    var min = Math.min;

    // `Array.prototype.splice` method
    // https://tc39.es/ecma262/#sec-array.prototype.splice
    // with adding support of @@species
    $$q({target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2}, {
        splice: function splice(start, deleteCount /* , ...items */) {
            var O = toObject$6(this);
            var len = lengthOfArrayLike$4(O);
            var actualStart = toAbsoluteIndex$1(start, len);
            var argumentsLength = arguments.length;
            var insertCount, actualDeleteCount, A, k, from, to;
            if (argumentsLength === 0) {
                insertCount = actualDeleteCount = 0;
            } else if (argumentsLength === 1) {
                insertCount = 0;
                actualDeleteCount = len - actualStart;
            } else {
                insertCount = argumentsLength - 2;
                actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
            }
            doesNotExceedSafeInteger$1(len + insertCount - actualDeleteCount);
            A = arraySpeciesCreate$1(O, actualDeleteCount);
            for (k = 0; k < actualDeleteCount; k++) {
                from = actualStart + k;
                if (from in O) createProperty$2(A, k, O[from]);
            }
            A.length = actualDeleteCount;
            if (insertCount < actualDeleteCount) {
                for (k = actualStart; k < len - actualDeleteCount; k++) {
                    from = k + actualDeleteCount;
                    to = k + insertCount;
                    if (from in O) O[to] = O[from];
                    else deletePropertyOrThrow$1(O, to);
                }
                for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow$1(O, k - 1);
            } else if (insertCount > actualDeleteCount) {
                for (k = len - actualDeleteCount; k > actualStart; k--) {
                    from = k + actualDeleteCount - 1;
                    to = k + insertCount - 1;
                    if (from in O) O[to] = O[from];
                    else deletePropertyOrThrow$1(O, to);
                }
            }
            for (k = 0; k < insertCount; k++) {
                O[k + actualStart] = arguments[k + 2];
            }
            setArrayLength(O, len - actualDeleteCount + insertCount);
            return A;
        }
    });

    var getBuiltInPrototypeMethod$a = getBuiltInPrototypeMethod$f;

    var splice$3 = getBuiltInPrototypeMethod$a('Array', 'splice');

    var isPrototypeOf$a = objectIsPrototypeOf;
    var method$8 = splice$3;

    var ArrayPrototype$8 = Array.prototype;

    var splice$2 = function (it) {
        var own = it.splice;
        return it === ArrayPrototype$8 || (isPrototypeOf$a(ArrayPrototype$8, it) && own === ArrayPrototype$8.splice) ? method$8 : own;
    };

    var parent$v = splice$2;

    var splice$1 = parent$v;

    var splice = splice$1;

    var _spliceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(splice);

    var $$p = _export;
    var $every = arrayIteration.every;
    var arrayMethodIsStrict$2 = arrayMethodIsStrict$4;

    var STRICT_METHOD$1 = arrayMethodIsStrict$2('every');

    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    $$p({target: 'Array', proto: true, forced: !STRICT_METHOD$1}, {
        every: function every(callbackfn /* , thisArg */) {
            return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
    });

    var getBuiltInPrototypeMethod$9 = getBuiltInPrototypeMethod$f;

    var every$3 = getBuiltInPrototypeMethod$9('Array', 'every');

    var isPrototypeOf$9 = objectIsPrototypeOf;
    var method$7 = every$3;

    var ArrayPrototype$7 = Array.prototype;

    var every$2 = function (it) {
        var own = it.every;
        return it === ArrayPrototype$7 || (isPrototypeOf$9(ArrayPrototype$7, it) && own === ArrayPrototype$7.every) ? method$7 : own;
    };

    var parent$u = every$2;

    var every$1 = parent$u;

    var every = every$1;

    var _everyInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(every);

    var $$o = _export;
    var fails$7 = fails$v;
    var isArray = isArray$6;
    var isObject$1 = isObject$j;
    var toObject$5 = toObject$a;
    var lengthOfArrayLike$3 = lengthOfArrayLike$9;
    var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
    var createProperty$1 = createProperty$4;
    var arraySpeciesCreate = arraySpeciesCreate$3;
    var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;
    var wellKnownSymbol$7 = wellKnownSymbol$o;
    var V8_VERSION = engineV8Version;

    var IS_CONCAT_SPREADABLE = wellKnownSymbol$7('isConcatSpreadable');

    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/679
    var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$7(function () {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
    });

    var isConcatSpreadable = function (O) {
        if (!isObject$1(O)) return false;
        var spreadable = O[IS_CONCAT_SPREADABLE];
        return spreadable !== undefined ? !!spreadable : isArray(O);
    };

    var FORCED$3 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$2('concat');

    // `Array.prototype.concat` method
    // https://tc39.es/ecma262/#sec-array.prototype.concat
    // with adding support of @@isConcatSpreadable and @@species
    $$o({target: 'Array', proto: true, arity: 1, forced: FORCED$3}, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        concat: function concat(arg) {
            var O = toObject$5(this);
            var A = arraySpeciesCreate(O, 0);
            var n = 0;
            var i, k, length, len, E;
            for (i = -1, length = arguments.length; i < length; i++) {
                E = i === -1 ? O : arguments[i];
                if (isConcatSpreadable(E)) {
                    len = lengthOfArrayLike$3(E);
                    doesNotExceedSafeInteger(n + len);
                    for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
                } else {
                    doesNotExceedSafeInteger(n + 1);
                    createProperty$1(A, n++, E);
                }
            }
            A.length = n;
            return A;
        }
    });

    var getBuiltInPrototypeMethod$8 = getBuiltInPrototypeMethod$f;

    var concat$3 = getBuiltInPrototypeMethod$8('Array', 'concat');

    var isPrototypeOf$8 = objectIsPrototypeOf;
    var method$6 = concat$3;

    var ArrayPrototype$6 = Array.prototype;

    var concat$2 = function (it) {
        var own = it.concat;
        return it === ArrayPrototype$6 || (isPrototypeOf$8(ArrayPrototype$6, it) && own === ArrayPrototype$6.concat) ? method$6 : own;
    };

    var parent$t = concat$2;

    var concat$1 = parent$t;

    var concat = concat$1;

    var _concatInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(concat);

    var $$n = _export;
    var $map = arrayIteration.map;
    var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;

    var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('map');

    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    // with adding support of @@species
    $$n({target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1}, {
        map: function map(callbackfn /* , thisArg */) {
            return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
    });

    var getBuiltInPrototypeMethod$7 = getBuiltInPrototypeMethod$f;

    var map$6 = getBuiltInPrototypeMethod$7('Array', 'map');

    var isPrototypeOf$7 = objectIsPrototypeOf;
    var method$5 = map$6;

    var ArrayPrototype$5 = Array.prototype;

    var map$5 = function (it) {
        var own = it.map;
        return it === ArrayPrototype$5 || (isPrototypeOf$7(ArrayPrototype$5, it) && own === ArrayPrototype$5.map) ? method$5 : own;
    };

    var parent$s = map$5;

    var map$4 = parent$s;

    var map$3 = map$4;

    var _mapInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(map$3);

    var $$m = _export;
    var $filter = arrayIteration.filter;
    var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;

    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    // with adding support of @@species
    $$m({target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT}, {
        filter: function filter(callbackfn /* , thisArg */) {
            return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
    });

    var getBuiltInPrototypeMethod$6 = getBuiltInPrototypeMethod$f;

    var filter$3 = getBuiltInPrototypeMethod$6('Array', 'filter');

    var isPrototypeOf$6 = objectIsPrototypeOf;
    var method$4 = filter$3;

    var ArrayPrototype$4 = Array.prototype;

    var filter$2 = function (it) {
        var own = it.filter;
        return it === ArrayPrototype$4 || (isPrototypeOf$6(ArrayPrototype$4, it) && own === ArrayPrototype$4.filter) ? method$4 : own;
    };

    var parent$r = filter$2;

    var filter$1 = parent$r;

    var filter = filter$1;

    var _filterInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(filter);

    var $$l = _export;
    var $includes = arrayIncludes.includes;
    var fails$6 = fails$v;

    // FF99+ bug
    var BROKEN_ON_SPARSE = fails$6(function () {
        // eslint-disable-next-line es/no-array-prototype-includes -- detection
        return !Array(1).includes();
    });

    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    $$l({target: 'Array', proto: true, forced: BROKEN_ON_SPARSE}, {
        includes: function includes(el /* , fromIndex = 0 */) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
        }
    });

    var getBuiltInPrototypeMethod$5 = getBuiltInPrototypeMethod$f;

    var includes$4 = getBuiltInPrototypeMethod$5('Array', 'includes');

    var isObject = isObject$j;
    var classof = classofRaw$2;
    var wellKnownSymbol$6 = wellKnownSymbol$o;

    var MATCH$1 = wellKnownSymbol$6('match');

    // `IsRegExp` abstract operation
    // https://tc39.es/ecma262/#sec-isregexp
    var isRegexp = function (it) {
        var isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
    };

    var isRegExp = isRegexp;

    var $TypeError = TypeError;

    var notARegexp = function (it) {
        if (isRegExp(it)) {
            throw new $TypeError("The method doesn't accept regular expressions");
        }
        return it;
    };

    var wellKnownSymbol$5 = wellKnownSymbol$o;

    var MATCH = wellKnownSymbol$5('match');

    var correctIsRegexpLogic = function (METHOD_NAME) {
        var regexp = /./;
        try {
            '/./'[METHOD_NAME](regexp);
        } catch (error1) {
            try {
                regexp[MATCH] = false;
                return '/./'[METHOD_NAME](regexp);
            } catch (error2) { /* empty */
            }
        }
        return false;
    };

    var $$k = _export;
    var uncurryThis$8 = functionUncurryThis;
    var notARegExp = notARegexp;
    var requireObjectCoercible$1 = requireObjectCoercible$7;
    var toString$2 = toString$c;
    var correctIsRegExpLogic = correctIsRegexpLogic;

    var stringIndexOf = uncurryThis$8(''.indexOf);

    // `String.prototype.includes` method
    // https://tc39.es/ecma262/#sec-string.prototype.includes
    $$k({target: 'String', proto: true, forced: !correctIsRegExpLogic('includes')}, {
        includes: function includes(searchString /* , position = 0 */) {
            return !!~stringIndexOf(
                toString$2(requireObjectCoercible$1(this)),
                toString$2(notARegExp(searchString)),
                arguments.length > 1 ? arguments[1] : undefined
            );
        }
    });

    var getBuiltInPrototypeMethod$4 = getBuiltInPrototypeMethod$f;

    var includes$3 = getBuiltInPrototypeMethod$4('String', 'includes');

    var isPrototypeOf$5 = objectIsPrototypeOf;
    var arrayMethod = includes$4;
    var stringMethod = includes$3;

    var ArrayPrototype$3 = Array.prototype;
    var StringPrototype$1 = String.prototype;

    var includes$2 = function (it) {
        var own = it.includes;
        if (it === ArrayPrototype$3 || (isPrototypeOf$5(ArrayPrototype$3, it) && own === ArrayPrototype$3.includes)) return arrayMethod;
        if (typeof it == 'string' || it === StringPrototype$1 || (isPrototypeOf$5(StringPrototype$1, it) && own === StringPrototype$1.includes)) {
            return stringMethod;
        }
        return own;
    };

    var parent$q = includes$2;

    var includes$1 = parent$q;

    var includes = includes$1;

    var _includesInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(includes);

    var PROPER_FUNCTION_NAME = functionName.PROPER;
    var fails$5 = fails$v;
    var whitespaces = whitespaces$4;

    var non = '\u200B\u0085\u180E';

    // check that a method works with the correct list
    // of whitespaces and has a correct name
    var stringTrimForced = function (METHOD_NAME) {
        return fails$5(function () {
            return !!whitespaces[METHOD_NAME]()
                || non[METHOD_NAME]() !== non
                || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
        });
    };

    var $$j = _export;
    var $trim = stringTrim.trim;
    var forcedStringTrimMethod = stringTrimForced;

    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    $$j({target: 'String', proto: true, forced: forcedStringTrimMethod('trim')}, {
        trim: function trim() {
            return $trim(this);
        }
    });

    var getBuiltInPrototypeMethod$3 = getBuiltInPrototypeMethod$f;

    var trim$3 = getBuiltInPrototypeMethod$3('String', 'trim');

    var isPrototypeOf$4 = objectIsPrototypeOf;
    var method$3 = trim$3;

    var StringPrototype = String.prototype;

    var trim$2 = function (it) {
        var own = it.trim;
        return typeof it == 'string' || it === StringPrototype
        || (isPrototypeOf$4(StringPrototype, it) && own === StringPrototype.trim) ? method$3 : own;
    };

    var parent$p = trim$2;

    var trim$1 = parent$p;

    var trim = trim$1;

    var _trimInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(trim);

    /* eslint-disable es/no-array-prototype-indexof -- required for testing */
    var $$i = _export;
    var uncurryThis$7 = functionUncurryThisClause;
    var $indexOf = arrayIncludes.indexOf;
    var arrayMethodIsStrict$1 = arrayMethodIsStrict$4;

    var nativeIndexOf = uncurryThis$7([].indexOf);

    var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
    var FORCED$2 = NEGATIVE_ZERO || !arrayMethodIsStrict$1('indexOf');

    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    $$i({target: 'Array', proto: true, forced: FORCED$2}, {
        indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
            var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
            return NEGATIVE_ZERO
                // convert -0 to +0
                ? nativeIndexOf(this, searchElement, fromIndex) || 0
                : $indexOf(this, searchElement, fromIndex);
        }
    });

    var getBuiltInPrototypeMethod$2 = getBuiltInPrototypeMethod$f;

    var indexOf$3 = getBuiltInPrototypeMethod$2('Array', 'indexOf');

    var isPrototypeOf$3 = objectIsPrototypeOf;
    var method$2 = indexOf$3;

    var ArrayPrototype$2 = Array.prototype;

    var indexOf$2 = function (it) {
        var own = it.indexOf;
        return it === ArrayPrototype$2 || (isPrototypeOf$3(ArrayPrototype$2, it) && own === ArrayPrototype$2.indexOf) ? method$2 : own;
    };

    var parent$o = indexOf$2;

    var indexOf$1 = parent$o;

    var indexOf = indexOf$1;

    var _indexOfInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(indexOf);

    /**
     * Complete step.
     */
    function stepComplete(params) {
        let data = $$O.extend({
                action: 'bookly_render_complete'
            }, params),
            $container = opt[params.form_id].$container;
        booklyAjax({
            data
        }).then(response => {
            if (response.final_step_url && !data.error) {
                document.location.href = response.final_step_url;
            } else {
                var _context;
                $container.html(response.html);
                let $qc = $$O('.bookly-js-qr', $container),
                    url = BooklyL10n.ajaxurl + (_indexOfInstanceProperty(_context = BooklyL10n.ajaxurl).call(_context, '?') > 0 ? '&' : '?') + 'bookly_order=' + response.bookly_order + '&csrf_token=' + BooklyL10n.csrf_token;
                new QRCode($qc.get(0), {
                    text: response.qr,
                    width: 256,
                    height: 256,
                    useSVG: true,
                    correctLevel: 1
                });
                scrollTo($container, params.form_id);
                $$O('.bookly-js-start-over', $container).on('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    laddaStart(this);
                    stepService({
                        form_id: params.form_id,
                        reset_form: true,
                        new_chain: true
                    });
                });
                $$O('.bookly-js-download-ics', $container).on('click', function (e) {
                    let ladda = laddaStart(this);
                    window.location = url + '&action=bookly_add_to_calendar&calendar=ics';
                    _setTimeout(() => ladda.stop(), 1500);
                });
                $$O('.bookly-js-download-invoice', $container).on('click', function (e) {
                    let ladda = laddaStart(this);
                    window.location = url + '&action=bookly_invoices_download_invoice';
                    _setTimeout(() => ladda.stop(), 1500);
                });
                $$O('.bookly-js-add-to-calendar', $container).on('click', function (e) {
                    e.preventDefault();
                    let ladda = laddaStart(this);
                    window.open(url + '&action=bookly_add_to_calendar&calendar=' + $$O(this).data('calendar'), '_blank');
                    _setTimeout(() => ladda.stop(), 1500);
                });
            }
        });
    }

    /**
     * Payment step.
     */
    function stepPayment(params) {
        var $container = opt[params.form_id].$container;
        booklyAjax({
            type: 'POST',
            data: {
                action: 'bookly_render_payment',
                form_id: params.form_id,
                page_url: document.URL.split('#')[0]
            }
        }).then(response => {
            // If payment step is disabled.
            if (response.disabled) {
                save(params.form_id);
                return;
            }
            $container.html(response.html);
            scrollTo($container, params.form_id);
            if (opt[params.form_id].status.booking == 'cancelled') {
                opt[params.form_id].status.booking = 'ok';
            }
            const customJS = response.custom_js;
            let $stripe_card_field = $$O('#bookly-stripe-card-field', $container);

            // Init stripe intents form
            if ($stripe_card_field.length) {
                if (response.stripe_publishable_key) {
                    var stripe = Stripe(response.stripe_publishable_key, {
                        betas: ['payment_intent_beta_3']
                    });
                    var elements = stripe.elements();
                    var stripe_card = elements.create('cardNumber');
                    stripe_card.mount("#bookly-form-" + params.form_id + " #bookly-stripe-card-field");
                    var stripe_expiry = elements.create('cardExpiry');
                    stripe_expiry.mount("#bookly-form-" + params.form_id + " #bookly-stripe-card-expiry-field");
                    var stripe_cvc = elements.create('cardCvc');
                    stripe_cvc.mount("#bookly-form-" + params.form_id + " #bookly-stripe-card-cvc-field");
                } else {
                    $$O('.pay-card .bookly-js-next-step', $container).prop('disabled', true);
                    let $details = $stripe_card_field.closest('.bookly-js-details');
                    $$O('.bookly-form-group', $details).hide();
                    $$O('.bookly-js-card-error', $details).text('Please call Stripe() with your publishable key. You used an empty string.');
                }
            }
            var $payments = $$O('.bookly-js-payment', $container),
                $apply_coupon_button = $$O('.bookly-js-apply-coupon', $container),
                $coupon_input = $$O('input.bookly-user-coupon', $container),
                $apply_gift_card_button = $$O('.bookly-js-apply-gift-card', $container),
                $gift_card_input = $$O('input.bookly-user-gift', $container),
                $apply_tips_button = $$O('.bookly-js-apply-tips', $container),
                $applied_tips_button = $$O('.bookly-js-applied-tips', $container),
                $tips_input = $$O('input.bookly-user-tips', $container),
                $tips_error = $$O('.bookly-js-tips-error', $container),
                $deposit_mode = $$O('input[type=radio][name=bookly-full-payment]', $container),
                $coupon_info_text = $$O('.bookly-info-text-coupon', $container),
                $buttons = $$O('.bookly-gateway-buttons,.bookly-js-details', $container),
                $payment_details;
            $payments.on('click', function () {
                $buttons.hide();
                $$O('.bookly-gateway-buttons.pay-' + $$O(this).val(), $container).show();
                if ($$O(this).data('with-details') == 1) {
                    let $parent = $$O(this).closest('.bookly-list');
                    $payment_details = $$O('.bookly-js-details', $parent);
                    $$O('.bookly-js-details', $parent).show();
                } else {
                    $payment_details = null;
                }
            });
            $payments.eq(0).trigger('click');
            $deposit_mode.on('change', function () {
                let data = {
                    action: 'bookly_deposit_payments_apply_payment_method',
                    form_id: params.form_id,
                    deposit_full: $$O(this).val()
                };
                $$O(this).hide();
                $$O(this).prev().css('display', 'inline-block');
                booklyAjax({
                    type: 'POST',
                    data: data
                }).then(response => {
                    stepPayment({
                        form_id: params.form_id
                    });
                });
            });
            $apply_coupon_button.on('click', function (e) {
                var ladda = laddaStart(this);
                $coupon_input.removeClass('bookly-error');
                booklyAjax({
                    type: 'POST',
                    data: {
                        action: 'bookly_coupons_apply_coupon',
                        form_id: params.form_id,
                        coupon_code: $coupon_input.val()
                    },
                    error: function () {
                        ladda.stop();
                    }
                }).then(response => {
                    stepPayment({
                        form_id: params.form_id
                    });
                }).catch(response => {
                    $coupon_input.addClass('bookly-error');
                    $coupon_info_text.html(response.text);
                    $apply_coupon_button.next('.bookly-label-error').remove();
                    let $error = $$O('<div>', {
                        class: 'bookly-label-error',
                        text: (response === null || response === void 0 ? void 0 : response.error) || 'Error'
                    });
                    $error.insertAfter($apply_coupon_button);
                    scrollTo($error, params.form_id);
                }).finally(() => {
                    ladda.stop();
                });
            });
            $apply_gift_card_button.on('click', function (e) {
                var ladda = laddaStart(this);
                $gift_card_input.removeClass('bookly-error');
                booklyAjax({
                    type: 'POST',
                    data: {
                        action: 'bookly_pro_apply_gift_card',
                        form_id: params.form_id,
                        gift_card: $gift_card_input.val()
                    },
                    error: function () {
                        ladda.stop();
                    }
                }).then(response => {
                    stepPayment({
                        form_id: params.form_id
                    });
                }).catch(response => {
                    if ($$O('.bookly-js-payment[value!=free]', $container).length > 0) {
                        $gift_card_input.addClass('bookly-error');
                        $apply_gift_card_button.next('.bookly-label-error').remove();
                        let $error = $$O('<div>', {
                            class: 'bookly-label-error',
                            text: (response === null || response === void 0 ? void 0 : response.error) || 'Error'
                        });
                        $error.insertAfter($apply_gift_card_button);
                        scrollTo($error, params.form_id);
                    } else {
                        stepPayment({
                            form_id: params.form_id
                        });
                    }
                }).finally(() => {
                    ladda.stop();
                });
            });
            $tips_input.on('keyup', function () {
                $applied_tips_button.hide();
                $apply_tips_button.css('display', 'inline-block');
            });
            $apply_tips_button.on('click', function (e) {
                var ladda = laddaStart(this);
                $tips_error.text('');
                $tips_input.removeClass('bookly-error');
                booklyAjax({
                    type: 'POST',
                    data: {
                        action: 'bookly_pro_apply_tips',
                        form_id: params.form_id,
                        tips: $tips_input.val()
                    },
                    error: function () {
                        ladda.stop();
                    }
                }).then(response => {
                    stepPayment({
                        form_id: params.form_id
                    });
                }).catch(response => {
                    $tips_error.html(response.error);
                    $tips_input.addClass('bookly-error');
                    scrollTo($tips_error, params.form_id);
                    ladda.stop();
                });
            });
            $$O('.bookly-js-next-step', $container).on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                var ladda = laddaStart(this),
                    $gateway_checked = _filterInstanceProperty($payments).call($payments, ':checked');

                // Execute custom JavaScript
                if (customJS) {
                    try {
                        $$O.globalEval(customJS.next_button);
                    } catch (e) {
                        // Do nothing
                    }
                }
                if ($gateway_checked.val() === 'card') {
                    let gateway = $gateway_checked.data('gateway');
                    if (gateway === 'authorize_net') {
                        booklyAjax({
                            type: 'POST',
                            data: {
                                action: 'bookly_create_payment_intent',
                                card: {
                                    number: $$O('input[name="card_number"]', $payment_details).val(),
                                    cvc: $$O('input[name="card_cvc"]', $payment_details).val(),
                                    exp_month: $$O('select[name="card_exp_month"]', $payment_details).val(),
                                    exp_year: $$O('select[name="card_exp_year"]', $payment_details).val()
                                },
                                response_url: window.location.pathname + window.location.search.split('#')[0],
                                form_id: params.form_id,
                                gateway: gateway
                            }
                        }).then(response => {
                            retrieveRequest(response.data, params.form_id);
                        }).catch(response => {
                            handleBooklyAjaxError(response, params.form_id, $gateway_checked.closest('.bookly-list'));
                            ladda.stop();
                        });
                    } else if (gateway === 'stripe') {
                        booklyAjax({
                            type: 'POST',
                            data: {
                                action: 'bookly_create_payment_intent',
                                form_id: params.form_id,
                                response_url: window.location.pathname + window.location.search.split('#')[0],
                                gateway: gateway
                            }
                        }).then(response => {
                            stripe.confirmCardPayment(response.data.intent_secret, {
                                payment_method: {
                                    card: stripe_card
                                }
                            }).then(function (result) {
                                if (result.error) {
                                    booklyAjax({
                                        type: 'POST',
                                        data: {
                                            action: 'bookly_rollback_order',
                                            form_id: params.form_id,
                                            bookly_order: response.data.bookly_order
                                        }
                                    }).then(response => {
                                        ladda.stop();
                                        let $stripe_container = $gateway_checked.closest('.bookly-list');
                                        $$O('.bookly-label-error', $stripe_container).remove();
                                        $stripe_container.append($$O('<div>', {
                                            class: 'bookly-label-error',
                                            text: result.error.message || 'Error'
                                        }));
                                    });
                                } else {
                                    retrieveRequest(response.data, params.form_id);
                                }
                            });
                        }).catch(response => {
                            handleBooklyAjaxError(response, params.form_id, $gateway_checked.closest('.bookly-list'));
                            ladda.stop();
                        });
                    }
                } else {
                    booklyAjax({
                        type: 'POST',
                        data: {
                            action: 'bookly_create_payment_intent',
                            form_id: params.form_id,
                            gateway: $gateway_checked.val(),
                            response_url: window.location.pathname + window.location.search.split('#')[0]
                        }
                    }).then(response => {
                        retrieveRequest(response.data, params.form_id);
                    }).catch(response => {
                        handleBooklyAjaxError(response, params.form_id, $gateway_checked.closest('.bookly-list'));
                        ladda.stop();
                    });
                }
            });
            $$O('.bookly-js-back-step', $container).on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                laddaStart(this);
                stepDetails({
                    form_id: params.form_id
                });
            });
        });
    }

    /**
     * Save appointment.
     */
    function save(form_id) {
        booklyAjax({
            type: 'POST',
            data: {
                action: 'bookly_save_appointment',
                form_id: form_id
            }
        }).then(response => {
            stepComplete({
                form_id: form_id
            });
        }).catch(response => {
            if (response.error == 'cart_item_not_available') {
                handleErrorCartItemNotAvailable(response, form_id);
            }
        });
    }

    /**
     * Handle error with code 3 which means one of the cart item is not available anymore.
     *
     * @param response
     * @param form_id
     */
    function handleErrorCartItemNotAvailable(response, form_id) {
        if (!opt[form_id].skip_steps.cart) {
            stepCart({
                form_id: form_id
            }, {
                failed_key: response.failed_cart_key,
                message: opt[form_id].errors[response.error]
            });
        } else {
            stepTime({
                form_id: form_id
            }, opt[form_id].errors[response.error]);
        }
    }

    function handleBooklyAjaxError(response, form_id, $gateway_selector) {
        if (response.error == 'cart_item_not_available') {
            handleErrorCartItemNotAvailable(response, form_id);
        } else if (response.error) {
            $$O('.bookly-label-error', $gateway_selector).remove();
            $gateway_selector.append($$O('<div>', {
                class: 'bookly-label-error',
                text: (response === null || response === void 0 ? void 0 : response.error_message) || 'Error'
            }));
        }
    }

    function retrieveRequest(data, form_id) {
        if (data.on_site) {
            $$O.ajax({
                type: 'GET',
                url: data.target_url,
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: 'withCredentials' in new XMLHttpRequest()
            }).always(function () {
                stepComplete({
                    form_id
                });
            });
        } else {
            document.location.href = data.target_url;
        }
    }

    /**
     * Details step.
     */
    function stepDetails(params) {
        let data = $$O.extend({
                action: 'bookly_render_details'
            }, params),
            $container = opt[params.form_id].$container;
        booklyAjax({
            data
        }).then(response => {
            var _context, _context2;
            $container.html(response.html);
            scrollTo($container, params.form_id);
            let intlTelInput = response.intlTelInput,
                update_details_dialog = response.update_details_dialog,
                woocommerce = response.woocommerce,
                customJS = response.custom_js,
                custom_fields_conditions = response.custom_fields_conditions || [],
                terms_error = response.l10n.terms_error;
            if (opt[params.form_id].hasOwnProperty('google_maps') && opt[params.form_id].google_maps.enabled) {
                booklyInitGooglePlacesAutocomplete($container);
            }
            $$O(document.body).trigger('bookly.render.step_detail', [$container]);
            // Init.
            let phone_number = '',
                $guest_info = $$O('.bookly-js-guest', $container),
                $phone_field = $$O('.bookly-js-user-phone-input', $container),
                $email_field = $$O('.bookly-js-user-email', $container),
                $email_confirm_field = $$O('.bookly-js-user-email-confirm', $container),
                $birthday_day_field = $$O('.bookly-js-select-birthday-day', $container),
                $birthday_month_field = $$O('.bookly-js-select-birthday-month', $container),
                $birthday_year_field = $$O('.bookly-js-select-birthday-year', $container),
                $address_country_field = $$O('.bookly-js-address-country', $container),
                $address_state_field = $$O('.bookly-js-address-state', $container),
                $address_postcode_field = $$O('.bookly-js-address-postcode', $container),
                $address_city_field = $$O('.bookly-js-address-city', $container),
                $address_street_field = $$O('.bookly-js-address-street', $container),
                $address_street_number_field = $$O('.bookly-js-address-street_number', $container),
                $address_additional_field = $$O('.bookly-js-address-additional_address', $container),
                $address_country_error = $$O('.bookly-js-address-country-error', $container),
                $address_state_error = $$O('.bookly-js-address-state-error', $container),
                $address_postcode_error = $$O('.bookly-js-address-postcode-error', $container),
                $address_city_error = $$O('.bookly-js-address-city-error', $container),
                $address_street_error = $$O('.bookly-js-address-street-error', $container),
                $address_street_number_error = $$O('.bookly-js-address-street_number-error', $container),
                $address_additional_error = $$O('.bookly-js-address-additional_address-error', $container),
                $birthday_day_error = $$O('.bookly-js-select-birthday-day-error', $container),
                $birthday_month_error = $$O('.bookly-js-select-birthday-month-error', $container),
                $birthday_year_error = $$O('.bookly-js-select-birthday-year-error', $container),
                $full_name_field = $$O('.bookly-js-full-name', $container),
                $first_name_field = $$O('.bookly-js-first-name', $container),
                $last_name_field = $$O('.bookly-js-last-name', $container),
                $notes_field = $$O('.bookly-js-user-notes', $container),
                $custom_field = $$O('.bookly-js-custom-field', $container),
                $info_field = $$O('.bookly-js-info-field', $container),
                $phone_error = $$O('.bookly-js-user-phone-error', $container),
                $email_error = $$O('.bookly-js-user-email-error', $container),
                $email_confirm_error = $$O('.bookly-js-user-email-confirm-error', $container),
                $name_error = $$O('.bookly-js-full-name-error', $container),
                $first_name_error = $$O('.bookly-js-first-name-error', $container),
                $last_name_error = $$O('.bookly-js-last-name-error', $container),
                $captcha = $$O('.bookly-js-captcha-img', $container),
                $custom_error = $$O('.bookly-custom-field-error', $container),
                $info_error = $$O('.bookly-js-info-field-error', $container),
                $modals = $$O('.bookly-js-modal', $container),
                $login_modal = $$O('.bookly-js-login', $container),
                $cst_modal = $$O('.bookly-js-cst-duplicate', $container),
                $verification_modal = $$O('.bookly-js-verification-code', $container),
                $verification_code = $$O('#bookly-verification-code', $container),
                $next_btn = $$O('.bookly-js-next-step', $container),
                $errors = _mapInstanceProperty(_context = $$O([$birthday_day_error, $birthday_month_error, $birthday_year_error, $address_country_error, $address_state_error, $address_postcode_error, $address_city_error, $address_street_error, $address_street_number_error, $address_additional_error, $name_error, $first_name_error, $last_name_error, $phone_error, $email_error, $email_confirm_error, $custom_error, $info_error])).call(_context, $$O.fn.toArray),
                $fields = _mapInstanceProperty(_context2 = $$O([$birthday_day_field, $birthday_month_field, $birthday_year_field, $address_city_field, $address_country_field, $address_postcode_field, $address_state_field, $address_street_field, $address_street_number_field, $address_additional_field, $full_name_field, $first_name_field, $last_name_field, $phone_field, $email_field, $email_confirm_field, $custom_field, $info_field])).call(_context2, $$O.fn.toArray);

            // Populate form after login.
            var populateForm = function (response) {
                $full_name_field.val(response.data.full_name).removeClass('bookly-error');
                $first_name_field.val(response.data.first_name).removeClass('bookly-error');
                $last_name_field.val(response.data.last_name).removeClass('bookly-error');
                if (response.data.birthday) {
                    var dateParts = response.data.birthday.split('-'),
                        year = _parseInt$1(dateParts[0]),
                        month = _parseInt$1(dateParts[1]),
                        day = _parseInt$1(dateParts[2]);
                    $birthday_day_field.val(day).removeClass('bookly-error');
                    $birthday_month_field.val(month).removeClass('bookly-error');
                    $birthday_year_field.val(year).removeClass('bookly-error');
                }
                if (response.data.phone) {
                    $phone_field.removeClass('bookly-error');
                    if (intlTelInput.enabled) {
                        $phone_field.intlTelInput('setNumber', response.data.phone);
                    } else {
                        $phone_field.val(response.data.phone);
                    }
                }
                if (response.data.country) {
                    $address_country_field.val(response.data.country).removeClass('bookly-error');
                }
                if (response.data.state) {
                    $address_state_field.val(response.data.state).removeClass('bookly-error');
                }
                if (response.data.postcode) {
                    $address_postcode_field.val(response.data.postcode).removeClass('bookly-error');
                }
                if (response.data.city) {
                    $address_city_field.val(response.data.city).removeClass('bookly-error');
                }
                if (response.data.street) {
                    $address_street_field.val(response.data.street).removeClass('bookly-error');
                }
                if (response.data.street_number) {
                    $address_street_number_field.val(response.data.street_number).removeClass('bookly-error');
                }
                if (response.data.additional_address) {
                    $address_additional_field.val(response.data.additional_address).removeClass('bookly-error');
                }
                $email_field.val(response.data.email).removeClass('bookly-error');
                if (response.data.info_fields) {
                    var _context3;
                    _forEachInstanceProperty(_context3 = response.data.info_fields).call(_context3, function (field) {
                        var _context4, _context6;
                        var $info_field = _findInstanceProperty($container).call($container, '.bookly-js-info-field-row[data-id="' + field.id + '"]');
                        switch ($info_field.data('type')) {
                            case 'checkboxes':
                                _forEachInstanceProperty(_context4 = field.value).call(_context4, function (value) {
                                    var _context5;
                                    _filterInstanceProperty(_context5 = _findInstanceProperty($info_field).call($info_field, '.bookly-js-info-field')).call(_context5, function () {
                                        return this.value == value;
                                    }).prop('checked', true);
                                });
                                break;
                            case 'radio-buttons':
                                _filterInstanceProperty(_context6 = _findInstanceProperty($info_field).call($info_field, '.bookly-js-info-field')).call(_context6, function () {
                                    return this.value == field.value;
                                }).prop('checked', true);
                                break;
                            default:
                                _findInstanceProperty($info_field).call($info_field, '.bookly-js-info-field').val(field.value);
                                break;
                        }
                    });
                }
                _filterInstanceProperty($errors).call($errors, ':not(.bookly-custom-field-error)').html('');
            };
            let checkCustomFieldConditions = function ($row) {
                let id = $row.data('id'),
                    value = [];
                switch ($row.data('type')) {
                    case 'drop-down':
                        value.push(_findInstanceProperty($row).call($row, 'select').val());
                        break;
                    case 'radio-buttons':
                        value.push(_findInstanceProperty($row).call($row, 'input:checked').val());
                        break;
                    case 'checkboxes':
                        _findInstanceProperty($row).call($row, 'input').each(function () {
                            if ($$O(this).prop('checked')) {
                                value.push($$O(this).val());
                            }
                        });
                        break;
                }
                $$O.each(custom_fields_conditions, function (i, condition) {
                    let $target = $$O('.bookly-custom-field-row[data-id="' + condition.target + '"]'),
                        target_visibility = $target.is(':visible');
                    if (_parseInt$1(condition.source) === id) {
                        let show = false;
                        $$O.each(value, function (i, v) {
                            var _context7, _context8;
                            if ($row.is(':visible') && (_includesInstanceProperty(_context7 = condition.value).call(_context7, v) && condition.equal === '1' || !_includesInstanceProperty(_context8 = condition.value).call(_context8, v) && condition.equal !== '1')) {
                                show = true;
                            }
                        });
                        $target.toggle(show);
                        if ($target.is(':visible') !== target_visibility) {
                            checkCustomFieldConditions($target);
                        }
                    }
                });
            };
            // Conditional custom fields
            $$O('.bookly-custom-field-row').on('change', 'select, input[type="checkbox"], input[type="radio"]', function () {
                checkCustomFieldConditions($$O(this).closest('.bookly-custom-field-row'));
            });
            $$O('.bookly-custom-field-row').each(function () {
                var _context9;
                const _type = $$O(this).data('type');
                if (_includesInstanceProperty(_context9 = ['drop-down', 'radio-buttons', 'checkboxes']).call(_context9, _type)) {
                    if (_type === 'drop-down') {
                        var _context10;
                        _findInstanceProperty(_context10 = $$O(this)).call(_context10, 'select').trigger('change');
                    } else {
                        var _context11;
                        _findInstanceProperty(_context11 = $$O(this)).call(_context11, 'input:checked').trigger('change');
                    }
                }
            });
            // Custom fields date fields
            $$O('.bookly-js-cf-date', $container).each(function () {
                var _context12, _context13;
                let $cf_date = $$O(this);
                $cf_date.pickadate({
                    formatSubmit: 'yyyy-mm-dd',
                    format: opt[params.form_id].date_format,
                    min: $$O(this).data('min') !== '' ? _mapInstanceProperty(_context12 = $$O(this).data('min').split('-')).call(_context12, function (value, index) {
                        if (index === 1) return value - 1; else return _parseInt$1(value);
                    }) : false,
                    max: $$O(this).data('max') !== '' ? _mapInstanceProperty(_context13 = $$O(this).data('max').split('-')).call(_context13, function (value, index) {
                        if (index === 1) return value - 1; else return _parseInt$1(value);
                    }) : false,
                    clear: false,
                    close: false,
                    today: BooklyL10n.today,
                    monthsFull: BooklyL10n.months,
                    weekdaysFull: BooklyL10n.days,
                    weekdaysShort: BooklyL10n.daysShort,
                    labelMonthNext: BooklyL10n.nextMonth,
                    labelMonthPrev: BooklyL10n.prevMonth,
                    firstDay: opt[params.form_id].firstDay,
                    onClose: function () {
                        // Hide for skip tab navigations by days of the month when the calendar is closed
                        $$O('#' + $cf_date.attr('aria-owns')).hide();
                    }
                }).focusin(function () {
                    // Restore calendar visibility, changed on onClose
                    $$O('#' + $cf_date.attr('aria-owns')).show();
                });
            });
            if (intlTelInput.enabled) {
                $phone_field.intlTelInput({
                    preferredCountries: [intlTelInput.country],
                    initialCountry: intlTelInput.country,
                    geoIpLookup: function (callback) {
                        $$O.get('https://ipinfo.io', function () {
                        }, 'jsonp').always(function (resp) {
                            var countryCode = resp && resp.country ? resp.country : '';
                            callback(countryCode);
                        });
                    },
                    utilsScript: intlTelInput.utils
                });
            }
            // Init modals.
            _findInstanceProperty($container).call($container, '.bookly-js-modal.' + params.form_id).remove();
            $modals.addClass(params.form_id).appendTo($container).on('click', '.bookly-js-close', function (e) {
                var _context14, _context15, _context16;
                e.preventDefault();
                _findInstanceProperty(_context14 = _findInstanceProperty(_context15 = _findInstanceProperty(_context16 = $$O(e.delegateTarget).removeClass('bookly-in')).call(_context16, 'form').trigger('reset').end()).call(_context15, 'input').removeClass('bookly-error').end()).call(_context14, '.bookly-label-error').html('');
            });
            // Login modal.
            $$O('.bookly-js-login-show', $container).on('click', function (e) {
                e.preventDefault();
                $login_modal.addClass('bookly-in');
            });
            $$O('button:submit', $login_modal).on('click', function (e) {
                e.preventDefault();
                var ladda = Ladda.create(this);
                ladda.start();
                booklyAjax({
                    type: 'POST',
                    data: {
                        action: 'bookly_wp_user_login',
                        form_id: params.form_id,
                        log: _findInstanceProperty($login_modal).call($login_modal, '[name="log"]').val(),
                        pwd: _findInstanceProperty($login_modal).call($login_modal, '[name="pwd"]').val(),
                        rememberme: _findInstanceProperty($login_modal).call($login_modal, '[name="rememberme"]').prop('checked') ? 1 : 0
                    }
                }).then(response => {
                    BooklyL10n.csrf_token = response.data.csrf_token;
                    $guest_info.fadeOut('slow');
                    populateForm(response);
                    $login_modal.removeClass('bookly-in');
                }).catch(response => {
                    if (response.error == 'incorrect_username_password') {
                        _findInstanceProperty($login_modal).call($login_modal, 'input').addClass('bookly-error');
                        _findInstanceProperty($login_modal).call($login_modal, '.bookly-label-error').html(opt[params.form_id].errors[response.error]);
                    }
                }).finally(() => {
                    ladda.stop();
                });
            });
            // Customer duplicate modal.
            $$O('button:submit', $cst_modal).on('click', function (e) {
                e.preventDefault();
                $cst_modal.removeClass('bookly-in');
                $next_btn.trigger('click', [1]);
            });
            // Verification code modal.
            $$O('button:submit', $verification_modal).on('click', function (e) {
                e.preventDefault();
                $verification_modal.removeClass('bookly-in');
                $next_btn.trigger('click');
            });
            // Facebook login button.
            if (opt[params.form_id].hasOwnProperty('facebook') && opt[params.form_id].facebook.enabled && typeof FB !== 'undefined') {
                FB.XFBML.parse($$O('.bookly-js-fb-login-button', $container).parent().get(0));
                opt[params.form_id].facebook.onStatusChange = function (response) {
                    if (response.status === 'connected') {
                        opt[params.form_id].facebook.enabled = false;
                        opt[params.form_id].facebook.onStatusChange = undefined;
                        $guest_info.fadeOut('slow', function () {
                            // Hide buttons in all Bookly forms on the page.
                            $$O('.bookly-js-fb-login-button').hide();
                        });
                        FB.api('/me', {
                            fields: 'id,name,first_name,last_name,email'
                        }, function (userInfo) {
                            booklyAjax({
                                type: 'POST',
                                data: $$O.extend(userInfo, {
                                    action: 'bookly_pro_facebook_login',
                                    form_id: params.form_id
                                })
                            }).then(response => {
                                populateForm(response);
                            });
                        });
                    }
                };
            }
            $next_btn.on('click', function (e, force_update_customer) {
                e.stopPropagation();
                e.preventDefault();

                // Terms and conditions checkbox
                let $terms = $$O('.bookly-js-terms', $container),
                    $terms_error = $$O('.bookly-js-terms-error', $container);
                $terms_error.html('');
                if ($terms.length && !$terms.prop('checked')) {
                    $terms_error.html(terms_error);
                } else {
                    var _context17, _context18;
                    var info_fields = [],
                        custom_fields = {},
                        checkbox_values,
                        captcha_ids = [],
                        ladda = laddaStart(this);

                    // Execute custom JavaScript
                    if (customJS) {
                        try {
                            $$O.globalEval(customJS.next_button);
                        } catch (e) {
                            // Do nothing
                        }
                    }

                    // Customer information fields.
                    $$O('div.bookly-js-info-field-row', $container).each(function () {
                        var $this = $$O(this);
                        switch ($this.data('type')) {
                            case 'text-field':
                            case 'file':
                            case 'number':
                                info_fields.push({
                                    id: $this.data('id'),
                                    value: _findInstanceProperty($this).call($this, 'input.bookly-js-info-field').val()
                                });
                                break;
                            case 'textarea':
                                info_fields.push({
                                    id: $this.data('id'),
                                    value: _findInstanceProperty($this).call($this, 'textarea.bookly-js-info-field').val()
                                });
                                break;
                            case 'checkboxes':
                                checkbox_values = [];
                                _findInstanceProperty($this).call($this, 'input.bookly-js-info-field:checked').each(function () {
                                    checkbox_values.push(this.value);
                                });
                                info_fields.push({
                                    id: $this.data('id'),
                                    value: checkbox_values
                                });
                                break;
                            case 'radio-buttons':
                                info_fields.push({
                                    id: $this.data('id'),
                                    value: _findInstanceProperty($this).call($this, 'input.bookly-js-info-field:checked').val() || null
                                });
                                break;
                            case 'drop-down':
                            case 'time':
                                info_fields.push({
                                    id: $this.data('id'),
                                    value: _findInstanceProperty($this).call($this, 'select.bookly-js-info-field').val()
                                });
                                break;
                            case 'date':
                                info_fields.push({
                                    id: $this.data('id'),
                                    value: _findInstanceProperty($this).call($this, 'input.bookly-js-info-field').pickadate('picker').get('select', 'yyyy-mm-dd')
                                });
                                break;
                        }
                    });
                    // Custom fields.
                    $$O('.bookly-custom-fields-container', $container).each(function () {
                        let $cf_container = $$O(this),
                            key = $cf_container.data('key'),
                            custom_fields_data = [];
                        $$O('div.bookly-custom-field-row', $cf_container).each(function () {
                            var $this = $$O(this);
                            if ($this.css('display') !== 'none') {
                                switch ($this.data('type')) {
                                    case 'text-field':
                                    case 'file':
                                    case 'number':
                                        custom_fields_data.push({
                                            id: $this.data('id'),
                                            value: _findInstanceProperty($this).call($this, 'input.bookly-js-custom-field').val()
                                        });
                                        break;
                                    case 'textarea':
                                        custom_fields_data.push({
                                            id: $this.data('id'),
                                            value: _findInstanceProperty($this).call($this, 'textarea.bookly-js-custom-field').val()
                                        });
                                        break;
                                    case 'checkboxes':
                                        checkbox_values = [];
                                        _findInstanceProperty($this).call($this, 'input.bookly-js-custom-field:checked').each(function () {
                                            checkbox_values.push(this.value);
                                        });
                                        custom_fields_data.push({
                                            id: $this.data('id'),
                                            value: checkbox_values
                                        });
                                        break;
                                    case 'radio-buttons':
                                        custom_fields_data.push({
                                            id: $this.data('id'),
                                            value: _findInstanceProperty($this).call($this, 'input.bookly-js-custom-field:checked').val() || null
                                        });
                                        break;
                                    case 'drop-down':
                                    case 'time':
                                        custom_fields_data.push({
                                            id: $this.data('id'),
                                            value: _findInstanceProperty($this).call($this, 'select.bookly-js-custom-field').val()
                                        });
                                        break;
                                    case 'date':
                                        custom_fields_data.push({
                                            id: $this.data('id'),
                                            value: _findInstanceProperty($this).call($this, 'input.bookly-js-custom-field').pickadate('picker').get('select', 'yyyy-mm-dd')
                                        });
                                        break;
                                    case 'captcha':
                                        custom_fields_data.push({
                                            id: $this.data('id'),
                                            value: _findInstanceProperty($this).call($this, 'input.bookly-js-custom-field').val()
                                        });
                                        captcha_ids.push($this.data('id'));
                                        break;
                                }
                            }
                        });
                        custom_fields[key] = {
                            custom_fields: custom_fields_data
                        };
                    });
                    try {
                        phone_number = intlTelInput.enabled ? $phone_field.intlTelInput('getNumber') : $phone_field.val();
                        if (phone_number == '') {
                            phone_number = $phone_field.val();
                        }
                    } catch (error) {
                        // In case when intlTelInput can't return phone number.
                        phone_number = $phone_field.val();
                    }
                    var data = {
                        action: 'bookly_session_save',
                        form_id: params.form_id,
                        full_name: $full_name_field.val(),
                        first_name: $first_name_field.val(),
                        last_name: $last_name_field.val(),
                        phone: phone_number,
                        email: _trimInstanceProperty(_context17 = $email_field.val()).call(_context17),
                        email_confirm: $email_confirm_field.length === 1 ? _trimInstanceProperty(_context18 = $email_confirm_field.val()).call(_context18) : undefined,
                        birthday: {
                            day: $birthday_day_field.val(),
                            month: $birthday_month_field.val(),
                            year: $birthday_year_field.val()
                        },
                        country: $address_country_field.val(),
                        state: $address_state_field.val(),
                        postcode: $address_postcode_field.val(),
                        city: $address_city_field.val(),
                        street: $address_street_field.val(),
                        street_number: $address_street_number_field.val(),
                        additional_address: $address_additional_field.val(),
                        address_iso: {
                            country: $address_country_field.data('short'),
                            state: $address_state_field.data('short')
                        },
                        info_fields: info_fields,
                        notes: $notes_field.val(),
                        cart: custom_fields,
                        captcha_ids: _JSON$stringify(captcha_ids),
                        force_update_customer: !update_details_dialog || force_update_customer,
                        verification_code: $verification_code.val()
                    };
                    // Error messages
                    $errors.empty();
                    $fields.removeClass('bookly-error');
                    booklyAjax({
                        type: 'POST',
                        data: data
                    }).then(response => {
                        if (woocommerce.enabled) {
                            var data = {
                                action: 'bookly_pro_add_to_woocommerce_cart',
                                form_id: params.form_id
                            };
                            booklyAjax({
                                type: 'POST',
                                data: data
                            }).then(response => {
                                window.location.href = response.data.target_url;
                            }).catch(response => {
                                ladda.stop();
                                handleErrorCartItemNotAvailable(response.data, params.form_id);
                            });
                        } else {
                            stepPayment({
                                form_id: params.form_id
                            });
                        }
                    }).catch(response => {
                        var $scroll_to = null;
                        if (response.appointments_limit_reached) {
                            stepComplete({
                                form_id: params.form_id,
                                error: 'appointments_limit_reached'
                            });
                        } else if (response.hasOwnProperty('verify')) {
                            ladda.stop();
                            _findInstanceProperty($verification_modal).call($verification_modal, '#bookly-verification-code-text').html(response.verify_text).end().addClass('bookly-in');
                            let $error = _findInstanceProperty($verification_modal).call($verification_modal, '.bookly-js-verification-code-error');
                            if (response.success === false && $verification_code.val()) {
                                _findInstanceProperty($verification_modal).call($verification_modal, '#bookly-verification-code').addClass('bookly-error');
                                $error.html(response.incorrect_code_text).show();
                            } else {
                                $error.hide();
                            }
                        } else if (response.group_skip_payment) {
                            booklyAjax({
                                type: 'POST',
                                data: {
                                    action: 'bookly_save_appointment',
                                    form_id: params.form_id
                                }
                            }).then(response => {
                                stepComplete({
                                    form_id: params.form_id,
                                    error: 'group_skip_payment'
                                });
                            });
                        } else {
                            ladda.stop();
                            var invalidClass = 'bookly-error',
                                validateFields = [{
                                    name: 'full_name',
                                    errorElement: $name_error,
                                    formElement: $full_name_field
                                }, {
                                    name: 'first_name',
                                    errorElement: $first_name_error,
                                    formElement: $first_name_field
                                }, {
                                    name: 'last_name',
                                    errorElement: $last_name_error,
                                    formElement: $last_name_field
                                }, {
                                    name: 'phone',
                                    errorElement: $phone_error,
                                    formElement: $phone_field
                                }, {
                                    name: 'email',
                                    errorElement: $email_error,
                                    formElement: $email_field
                                }, {
                                    name: 'email_confirm',
                                    errorElement: $email_confirm_error,
                                    formElement: $email_confirm_field
                                }, {
                                    name: 'birthday_day',
                                    errorElement: $birthday_day_error,
                                    formElement: $birthday_day_field
                                }, {
                                    name: 'birthday_month',
                                    errorElement: $birthday_month_error,
                                    formElement: $birthday_month_field
                                }, {
                                    name: 'birthday_year',
                                    errorElement: $birthday_year_error,
                                    formElement: $birthday_year_field
                                }, {
                                    name: 'country',
                                    errorElement: $address_country_error,
                                    formElement: $address_country_field
                                }, {
                                    name: 'state',
                                    errorElement: $address_state_error,
                                    formElement: $address_state_field
                                }, {
                                    name: 'postcode',
                                    errorElement: $address_postcode_error,
                                    formElement: $address_postcode_field
                                }, {
                                    name: 'city',
                                    errorElement: $address_city_error,
                                    formElement: $address_city_field
                                }, {
                                    name: 'street',
                                    errorElement: $address_street_error,
                                    formElement: $address_street_field
                                }, {
                                    name: 'street_number',
                                    errorElement: $address_street_number_error,
                                    formElement: $address_street_number_field
                                }, {
                                    name: 'additional_address',
                                    errorElement: $address_additional_error,
                                    formElement: $address_additional_field
                                }];
                            _forEachInstanceProperty(validateFields).call(validateFields, function (field) {
                                if (!response[field.name]) {
                                    return;
                                }
                                field.errorElement.html(response[field.name]);
                                field.formElement.addClass(invalidClass);
                                if ($scroll_to === null) {
                                    $scroll_to = field.formElement;
                                }
                            });
                            if (response.info_fields) {
                                $$O.each(response.info_fields, function (field_id, message) {
                                    var $div = $$O('div.bookly-js-info-field-row[data-id="' + field_id + '"]', $container);
                                    _findInstanceProperty($div).call($div, '.bookly-js-info-field-error').html(message);
                                    _findInstanceProperty($div).call($div, '.bookly-js-info-field').addClass('bookly-error');
                                    if ($scroll_to === null) {
                                        $scroll_to = _findInstanceProperty($div).call($div, '.bookly-js-info-field');
                                    }
                                });
                            }
                            if (response.custom_fields) {
                                $$O.each(response.custom_fields, function (key, fields) {
                                    $$O.each(fields, function (field_id, message) {
                                        var $custom_fields_collector = $$O('.bookly-custom-fields-container[data-key="' + key + '"]', $container);
                                        var $div = $$O('[data-id="' + field_id + '"]', $custom_fields_collector);
                                        _findInstanceProperty($div).call($div, '.bookly-custom-field-error').html(message);
                                        _findInstanceProperty($div).call($div, '.bookly-js-custom-field').addClass('bookly-error');
                                        if ($scroll_to === null) {
                                            $scroll_to = _findInstanceProperty($div).call($div, '.bookly-js-custom-field');
                                        }
                                    });
                                });
                            }
                            if (response.customer) {
                                _findInstanceProperty($cst_modal).call($cst_modal, '.bookly-js-modal-body').html(response.customer).end().addClass('bookly-in');
                            }
                        }
                        if ($scroll_to !== null) {
                            scrollTo($scroll_to, params.form_id);
                        }
                    });
                }
            });
            $$O('.bookly-js-back-step', $container).on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                laddaStart(this);
                if (!opt[params.form_id].skip_steps.cart) {
                    stepCart({
                        form_id: params.form_id
                    });
                } else if (opt[params.form_id].no_time || opt[params.form_id].skip_steps.time) {
                    if (opt[params.form_id].no_extras || opt[params.form_id].skip_steps.extras) {
                        stepService({
                            form_id: params.form_id
                        });
                    } else {
                        stepExtras({
                            form_id: params.form_id
                        });
                    }
                } else if (!_repeatInstanceProperty(opt[params.form_id].skip_steps) && opt[params.form_id].recurrence_enabled) {
                    stepRepeat({
                        form_id: params.form_id
                    });
                } else if (!opt[params.form_id].skip_steps.extras && opt[params.form_id].step_extras == 'after_step_time' && !opt[params.form_id].no_extras) {
                    stepExtras({
                        form_id: params.form_id
                    });
                } else {
                    stepTime({
                        form_id: params.form_id
                    });
                }
            });
            $$O('.bookly-js-captcha-refresh', $container).on('click', function () {
                $captcha.css('opacity', '0.5');
                booklyAjax({
                    type: 'POST',
                    data: {
                        action: 'bookly_custom_fields_captcha_refresh',
                        form_id: params.form_id
                    }
                }).then(response => {
                    $captcha.attr('src', response.data.captcha_url).on('load', function () {
                        $captcha.css('opacity', '1');
                    });
                });
            });
        });

        /**
         * global function to init google places
         */
        function booklyInitGooglePlacesAutocomplete(bookly_forms) {
            bookly_forms = bookly_forms || $$O('.bookly-form .bookly-details-step');
            bookly_forms.each(function () {
                initGooglePlacesAutocomplete($$O(this));
            });
        }

        /**
         * Addon: Google Maps Address
         * @param {jQuery} [$container]
         * @returns {boolean}
         */
        function initGooglePlacesAutocomplete($container) {
            var autocompleteInput = _findInstanceProperty($container).call($container, '.bookly-js-cst-address-autocomplete');
            if (!autocompleteInput.length) {
                return false;
            }
            var autocomplete = new google.maps.places.Autocomplete(autocompleteInput[0], {
                    types: ['geocode']
                }),
                autocompleteFields = [{
                    selector: '.bookly-js-address-country',
                    val: function () {
                        return getFieldValueByType('country');
                    },
                    short: function () {
                        return getFieldValueByType('country', true);
                    }
                }, {
                    selector: '.bookly-js-address-postcode',
                    val: function () {
                        return getFieldValueByType('postal_code');
                    }
                }, {
                    selector: '.bookly-js-address-city',
                    val: function () {
                        return getFieldValueByType('locality') || getFieldValueByType('administrative_area_level_3') || getFieldValueByType('postal_town');
                    }
                }, {
                    selector: '.bookly-js-address-state',
                    val: function () {
                        return getFieldValueByType('administrative_area_level_1');
                    },
                    short: function () {
                        return getFieldValueByType('administrative_area_level_1', true);
                    }
                }, {
                    selector: '.bookly-js-address-street',
                    val: function () {
                        return getFieldValueByType('route');
                    }
                }, {
                    selector: '.bookly-js-address-street_number',
                    val: function () {
                        return getFieldValueByType('street_number');
                    }
                }, {
                    selector: '.bookly-js-address-additional_address',
                    val: function () {
                        return getFieldValueByType('subpremise') || getFieldValueByType('neighborhood') || getFieldValueByType('sublocality');
                    }
                }];
            var getFieldValueByType = function (type, useShortName) {
                var addressComponents = autocomplete.getPlace().address_components;
                for (var i = 0; i < addressComponents.length; i++) {
                    var addressType = addressComponents[i].types[0];
                    if (addressType === type) {
                        return useShortName ? addressComponents[i]['short_name'] : addressComponents[i]['long_name'];
                    }
                }
                return '';
            };
            autocomplete.addListener('place_changed', function () {
                _forEachInstanceProperty(autocompleteFields).call(autocompleteFields, function (field) {
                    var element = _findInstanceProperty($container).call($container, field.selector);
                    if (element.length === 0) {
                        return;
                    }
                    element.val(field.val());
                    if (typeof field.short == 'function') {
                        element.data('short', field.short());
                    }
                });
            });
        }
    }

    /**
     * Cart step.
     */
    function stepCart(params, error) {
        if (opt[params.form_id].skip_steps.cart) {
            stepDetails(params);
        } else {
            if (params && params.from_step) {
                // Record previous step if it was given in params.
                opt[params.form_id].cart_prev_step = params.from_step;
            }
            let data = $$O.extend({
                    action: 'bookly_render_cart'
                }, params),
                $container = opt[params.form_id].$container;
            booklyAjax({
                data
            }).then(response => {
                $container.html(response.html);
                if (error) {
                    $$O('.bookly-label-error', $container).html(error.message);
                    $$O('tr[data-cart-key="' + error.failed_key + '"]', $container).addClass('bookly-label-error');
                } else {
                    $$O('.bookly-label-error', $container).hide();
                }
                scrollTo($container, params.form_id);
                const customJS = response.custom_js;
                $$O('.bookly-js-next-step', $container).on('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    laddaStart(this);

                    // Execute custom JavaScript
                    if (customJS) {
                        try {
                            $$O.globalEval(customJS.next_button);
                        } catch (e) {
                            // Do nothing
                        }
                    }
                    stepDetails({
                        form_id: params.form_id
                    });
                });
                $$O('.bookly-add-item', $container).on('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    laddaStart(this);
                    stepService({
                        form_id: params.form_id,
                        new_chain: true
                    });
                });
                // 'BACK' button.
                $$O('.bookly-js-back-step', $container).on('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    laddaStart(this);
                    switch (opt[params.form_id].cart_prev_step) {
                        case 'service':
                            stepService({
                                form_id: params.form_id
                            });
                            break;
                        case 'extras':
                            stepExtras({
                                form_id: params.form_id
                            });
                            break;
                        case 'time':
                            stepTime({
                                form_id: params.form_id
                            });
                            break;
                        case 'repeat':
                            stepRepeat({
                                form_id: params.form_id
                            });
                            break;
                        default:
                            stepService({
                                form_id: params.form_id
                            });
                    }
                });
                $$O('.bookly-js-actions button', $container).on('click', function () {
                    laddaStart(this);
                    let $this = $$O(this),
                        $cart_item = $this.closest('tr');
                    switch ($this.data('action')) {
                        case 'drop':
                            booklyAjax({
                                data: {
                                    action: 'bookly_cart_drop_item',
                                    form_id: params.form_id,
                                    cart_key: $cart_item.data('cart-key')
                                }
                            }).then(response => {
                                let remove_cart_key = $cart_item.data('cart-key'),
                                    $trs_to_remove = $$O('tr[data-cart-key="' + remove_cart_key + '"]', $container);
                                $cart_item.delay(300).fadeOut(200, function () {
                                    if (response.data.total_waiting_list) {
                                        $$O('.bookly-js-waiting-list-price', $container).html(response.data.waiting_list_price);
                                        $$O('.bookly-js-waiting-list-deposit', $container).html(response.data.waiting_list_deposit);
                                    } else {
                                        $$O('.bookly-js-waiting-list-price', $container).closest('tr').remove();
                                    }
                                    $$O('.bookly-js-subtotal-price', $container).html(response.data.subtotal_price);
                                    $$O('.bookly-js-subtotal-deposit', $container).html(response.data.subtotal_deposit);
                                    $$O('.bookly-js-pay-now-deposit', $container).html(response.data.pay_now_deposit);
                                    $$O('.bookly-js-pay-now-tax', $container).html(response.data.pay_now_tax);
                                    $$O('.bookly-js-total-price', $container).html(response.data.total_price);
                                    $$O('.bookly-js-total-tax', $container).html(response.data.total_tax);
                                    $trs_to_remove.remove();
                                    if ($$O('tr[data-cart-key]').length == 0) {
                                        $$O('.bookly-js-back-step', $container).hide();
                                        $$O('.bookly-js-next-step', $container).hide();
                                    }
                                });
                            });
                            break;
                        case 'edit':
                            stepService({
                                form_id: params.form_id,
                                edit_cart_item: $cart_item.data('cart-key')
                            });
                            break;
                    }
                });
            });
        }
    }

    /**
     * Repeat step.
     */
    function stepRepeat(params, error) {
        if (_repeatInstanceProperty(opt[params.form_id].skip_steps)) {
            stepCart(params, error);
        } else {
            let data = $$O.extend({
                    action: 'bookly_render_repeat'
                }, params),
                $container = opt[params.form_id].$container;
            booklyAjax({
                data
            }).then(response => {
                var _context3;
                $container.html(response.html);
                scrollTo($container, params.form_id);
                let $repeat_enabled = $$O('.bookly-js-repeat-appointment-enabled', $container),
                    $next_step = $$O('.bookly-js-next-step', $container),
                    $repeat_container = $$O('.bookly-js-repeat-variants-container', $container),
                    $variants = $$O('[class^="bookly-js-variant"]', $repeat_container),
                    $repeat_variant = $$O('.bookly-js-repeat-variant', $repeat_container),
                    $button_get_schedule = $$O('.bookly-js-get-schedule', $repeat_container),
                    $variant_weekly = $$O('.bookly-js-variant-weekly', $repeat_container),
                    $variant_monthly = $$O('.bookly-js-repeat-variant-monthly', $repeat_container),
                    $date_until = $$O('.bookly-js-repeat-until', $repeat_container),
                    $repeat_times = $$O('.bookly-js-repeat-times', $repeat_container),
                    $monthly_specific_day = $$O('.bookly-js-monthly-specific-day', $repeat_container),
                    $monthly_week_day = $$O('.bookly-js-monthly-week-day', $repeat_container),
                    $repeat_every_day = $$O('.bookly-js-repeat-daily-every', $repeat_container),
                    $schedule_container = $$O('.bookly-js-schedule-container', $container),
                    $days_error = $$O('.bookly-js-days-error', $repeat_container),
                    $schedule_slots = $$O('.bookly-js-schedule-slots', $schedule_container),
                    $intersection_info = $$O('.bookly-js-intersection-info', $schedule_container),
                    $info_help = $$O('.bookly-js-schedule-help', $schedule_container),
                    $info_wells = $$O('.bookly-well', $schedule_container),
                    $pagination = $$O('.bookly-pagination', $schedule_container),
                    $schedule_row_template = $$O('.bookly-schedule-row-template .bookly-schedule-row', $schedule_container),
                    pages_warning_info = response.pages_warning_info,
                    short_date_format = response.short_date_format,
                    bound_date = {
                        min: response.date_min || true,
                        max: response.date_max || true
                    },
                    schedule = [],
                    customJS = response.custom_js;
                var repeat = {
                    prepareButtonNextState: function () {
                        // Disable/Enable next button
                        var is_disabled = $next_step.prop('disabled'),
                            new_prop_disabled = schedule.length == 0;
                        for (var i = 0; i < schedule.length; i++) {
                            if (is_disabled) {
                                if (!schedule[i].deleted) {
                                    new_prop_disabled = false;
                                    break;
                                }
                            } else if (schedule[i].deleted) {
                                new_prop_disabled = true;
                            } else {
                                new_prop_disabled = false;
                                break;
                            }
                        }
                        $next_step.prop('disabled', new_prop_disabled);
                    },
                    addTimeSlotControl: function ($schedule_row, options, preferred_time, selected_time) {
                        var $time = '';
                        if (options.length) {
                            var prefer;
                            $time = $$O('<select/>');
                            $$O.each(options, function (index, option) {
                                var $option = $$O('<option/>');
                                $option.text(option.title).val(option.value);
                                if (option.disabled) {
                                    $option.attr('disabled', 'disabled');
                                }
                                $time.append($option);
                                if (!prefer && !option.disabled) {
                                    if (option.title == preferred_time) {
                                        // Select by time title.
                                        $time.val(option.value);
                                        prefer = true;
                                    } else if (option.title == selected_time) {
                                        $time.val(option.value);
                                    }
                                }
                            });
                        }
                        _findInstanceProperty($schedule_row).call($schedule_row, '.bookly-js-schedule-time').html($time);
                        _findInstanceProperty($schedule_row).call($schedule_row, 'div.bookly-label-error').toggle(!options.length);
                    },
                    renderSchedulePage: function (page) {
                        let $row,
                            count = schedule.length,
                            rows_on_page = 5,
                            start = rows_on_page * page - rows_on_page,
                            warning_pages = [],
                            previousPage = function (e) {
                                e.preventDefault();
                                let page = _parseInt$1(_findInstanceProperty($pagination).call($pagination, '.active').data('page'));
                                if (page > 1) {
                                    repeat.renderSchedulePage(page - 1);
                                }
                            },
                            nextPage = function (e) {
                                e.preventDefault();
                                let page = _parseInt$1(_findInstanceProperty($pagination).call($pagination, '.active').data('page'));
                                if (page < count / rows_on_page) {
                                    repeat.renderSchedulePage(page + 1);
                                }
                            };
                        $schedule_slots.html('');
                        for (var i = start, j = 0; j < rows_on_page && i < count; i++, j++) {
                            $row = $schedule_row_template.clone();
                            $row.data('datetime', schedule[i].datetime);
                            $row.data('index', schedule[i].index);
                            $$O('> div:first-child', $row).html(schedule[i].index);
                            $$O('.bookly-schedule-date', $row).html(schedule[i].display_date);
                            if (schedule[i].all_day_service_time !== undefined) {
                                $$O('.bookly-js-schedule-time', $row).hide();
                                $$O('.bookly-js-schedule-all-day-time', $row).html(schedule[i].all_day_service_time).show();
                            } else {
                                $$O('.bookly-js-schedule-time', $row).html(schedule[i].display_time).show();
                                $$O('.bookly-js-schedule-all-day-time', $row).hide();
                            }
                            if (schedule[i].another_time) {
                                $$O('.bookly-schedule-intersect', $row).show();
                            }
                            if (schedule[i].deleted) {
                                _findInstanceProperty($row).call($row, '.bookly-schedule-appointment').addClass('bookly-appointment-hidden');
                            }
                            $schedule_slots.append($row);
                        }
                        if (count > rows_on_page) {
                            var $btn = $$O('<li/>').append($$O('<a>', {
                                href: '#',
                                text: '«'
                            }));
                            $btn.on('click', previousPage).keypress(function (e) {
                                e.preventDefault();
                                if (e.which == 13 || e.which == 32) {
                                    previousPage(e);
                                }
                            });
                            $pagination.html($btn);
                            for (i = 0, j = 1; i < count; i += 5, j++) {
                                $btn = $$O('<li/>', {
                                    'data-page': j
                                }).append($$O('<a>', {
                                    href: '#',
                                    text: j
                                }));
                                $pagination.append($btn);
                                $btn.on('click', function (e) {
                                    e.preventDefault();
                                    repeat.renderSchedulePage($$O(this).data('page'));
                                }).keypress(function (e) {
                                    e.preventDefault();
                                    if (e.which == 13 || e.which == 32) {
                                        repeat.renderSchedulePage($$O(this).data('page'));
                                    }
                                });
                            }
                            _findInstanceProperty($pagination).call($pagination, 'li:eq(' + page + ')').addClass('active');
                            $btn = $$O('<li/>').append($$O('<a>', {
                                href: '#',
                                text: '»'
                            }));
                            $btn.on('click', nextPage).keypress(function (e) {
                                e.preventDefault();
                                if (e.which == 13 || e.which == 32) {
                                    nextPage(e);
                                }
                            });
                            $pagination.append($btn).show();
                            for (i = 0; i < count; i++) {
                                if (schedule[i].another_time) {
                                    page = _parseInt$1(i / rows_on_page) + 1;
                                    warning_pages.push(page);
                                    i = page * rows_on_page - 1;
                                }
                            }
                            if (warning_pages.length > 0) {
                                $intersection_info.html(pages_warning_info.replace('{list}', warning_pages.join(', ')));
                            }
                            $info_wells.toggle(warning_pages.length > 0);
                            $pagination.toggle(count > rows_on_page);
                        } else {
                            $pagination.hide();
                            $info_wells.hide();
                            for (i = 0; i < count; i++) {
                                if (schedule[i].another_time) {
                                    $info_help.show();
                                    break;
                                }
                            }
                        }
                    },
                    renderFullSchedule: function (data) {
                        schedule = data; // it has global scope
                        // Prefer time is display time selected on step time.
                        var preferred_time = null;
                        $$O.each(schedule, function (index, item) {
                            if (!preferred_time && !item.another_time) {
                                preferred_time = item.display_time;
                            }
                        });
                        repeat.renderSchedulePage(1);
                        $schedule_container.show();
                        $next_step.prop('disabled', schedule.length == 0);
                        $schedule_slots.on('click', 'button[data-action]', function () {
                            var $schedule_row = $$O(this).closest('.bookly-schedule-row');
                            var row_index = $schedule_row.data('index') - 1;
                            switch ($$O(this).data('action')) {
                                case 'drop':
                                    schedule[row_index].deleted = true;
                                    _findInstanceProperty($schedule_row).call($schedule_row, '.bookly-schedule-appointment').addClass('bookly-appointment-hidden');
                                    repeat.prepareButtonNextState();
                                    break;
                                case 'restore':
                                    schedule[row_index].deleted = false;
                                    _findInstanceProperty($schedule_row).call($schedule_row, '.bookly-schedule-appointment').removeClass('bookly-appointment-hidden');
                                    $next_step.prop('disabled', false);
                                    break;
                                case 'edit':
                                    var $date = $$O('<input/>', {
                                            type: 'text'
                                        }),
                                        $edit_button = $$O(this),
                                        ladda_round = laddaStart(this);
                                    _findInstanceProperty($schedule_row).call($schedule_row, '.bookly-schedule-date').html($date);
                                    $date.pickadate({
                                        min: bound_date.min,
                                        max: bound_date.max,
                                        formatSubmit: 'yyyy-mm-dd',
                                        format: short_date_format,
                                        clear: false,
                                        close: false,
                                        today: BooklyL10n.today,
                                        monthsFull: BooklyL10n.months,
                                        monthsShort: BooklyL10n.monthsShort,
                                        weekdaysFull: BooklyL10n.days,
                                        weekdaysShort: BooklyL10n.daysShort,
                                        labelMonthNext: BooklyL10n.nextMonth,
                                        labelMonthPrev: BooklyL10n.prevMonth,
                                        firstDay: opt[params.form_id].firstDay,
                                        onSet: function () {
                                            var exclude = [];
                                            $$O.each(schedule, function (index, item) {
                                                if (row_index != index && !item.deleted) {
                                                    exclude.push(item.slots);
                                                }
                                            });
                                            booklyAjax({
                                                type: 'POST',
                                                data: {
                                                    action: 'bookly_recurring_appointments_get_daily_customer_schedule',
                                                    date: this.get('select', 'yyyy-mm-dd'),
                                                    form_id: params.form_id,
                                                    exclude: exclude
                                                }
                                            }).then(response => {
                                                $edit_button.hide();
                                                ladda_round.stop();
                                                if (response.data.length) {
                                                    repeat.addTimeSlotControl($schedule_row, response.data[0].options, preferred_time, schedule[row_index].display_time, response.data[0].all_day_service_time);
                                                    _findInstanceProperty($schedule_row).call($schedule_row, 'button[data-action="save"]').show();
                                                } else {
                                                    repeat.addTimeSlotControl($schedule_row, []);
                                                    _findInstanceProperty($schedule_row).call($schedule_row, 'button[data-action="save"]').hide();
                                                }
                                            });
                                        },
                                        onClose: function () {
                                            // Hide for skip tab navigations by days of the month when the calendar is closed
                                            $$O('#' + $date.attr('aria-owns')).hide();
                                        }
                                    }).focusin(function () {
                                        // Restore calendar visibility, changed on onClose
                                        $$O('#' + $date.attr('aria-owns')).show();
                                    });
                                    var slots = JSON.parse(schedule[row_index].slots);
                                    $date.pickadate('picker').set('select', new Date(slots[0][2]));
                                    break;
                                case 'save':
                                    $$O(this).hide();
                                    _findInstanceProperty($schedule_row).call($schedule_row, 'button[data-action="edit"]').show();
                                    var $date_container = _findInstanceProperty($schedule_row).call($schedule_row, '.bookly-schedule-date'),
                                        $time_container = _findInstanceProperty($schedule_row).call($schedule_row, '.bookly-js-schedule-time'),
                                        $select = _findInstanceProperty($time_container).call($time_container, 'select'),
                                        option = _findInstanceProperty($select).call($select, 'option:selected');
                                    schedule[row_index].slots = $select.val();
                                    schedule[row_index].display_date = _findInstanceProperty($date_container).call($date_container, 'input').val();
                                    schedule[row_index].display_time = option.text();
                                    $date_container.html(schedule[row_index].display_date);
                                    $time_container.html(schedule[row_index].display_time);
                                    break;
                            }
                        });
                    },
                    isDateMatchesSelections: function (current_date) {
                        switch ($repeat_variant.val()) {
                            case 'daily':
                                if (($repeat_every_day.val() > 6 || $$O.inArray(current_date.format('ddd').toLowerCase(), repeat.week_days) != -1) && current_date.diff(repeat.date_from, 'days') % $repeat_every_day.val() == 0) {
                                    return true;
                                }
                                break;
                            case 'weekly':
                            case 'biweekly':
                                if (($repeat_variant.val() == 'weekly' || current_date.diff(repeat.date_from.clone().startOf('isoWeek'), 'weeks') % 2 == 0) && $$O.inArray(current_date.format('ddd').toLowerCase(), repeat.checked_week_days) != -1) {
                                    return true;
                                }
                                break;
                            case 'monthly':
                                switch ($variant_monthly.val()) {
                                    case 'specific':
                                        if (current_date.format('D') == $monthly_specific_day.val()) {
                                            return true;
                                        }
                                        break;
                                    case 'last':
                                        if (current_date.format('ddd').toLowerCase() == $monthly_week_day.val() && current_date.clone().endOf('month').diff(current_date, 'days') < 7) {
                                            return true;
                                        }
                                        break;
                                    default:
                                        var month_diff = current_date.diff(current_date.clone().startOf('month'), 'days');
                                        if (current_date.format('ddd').toLowerCase() == $monthly_week_day.val() && month_diff >= ($variant_monthly.prop('selectedIndex') - 1) * 7 && month_diff < $variant_monthly.prop('selectedIndex') * 7) {
                                            return true;
                                        }
                                }
                                break;
                        }
                        return false;
                    },
                    updateRepeatDate: function () {
                        var _context;
                        var number_of_times = 0,
                            repeat_times = $repeat_times.val(),
                            date_from = _sliceInstanceProperty(_context = bound_date.min).call(_context),
                            date_until = $date_until.pickadate('picker').get('select'),
                            moment_until = moment().year(date_until.year).month(date_until.month).date(date_until.date).add(5, 'years');
                        date_from[1]++;
                        repeat.date_from = moment(date_from.join(','), 'YYYY,M,D');
                        repeat.week_days = [];
                        _findInstanceProperty($monthly_week_day).call($monthly_week_day, 'option').each(function () {
                            repeat.week_days.push($$O(this).val());
                        });
                        repeat.checked_week_days = [];
                        $$O('.bookly-js-week-days input:checked', $repeat_container).each(function () {
                            repeat.checked_week_days.push(this.value);
                        });
                        var current_date = repeat.date_from.clone();
                        do {
                            if (repeat.isDateMatchesSelections(current_date)) {
                                number_of_times++;
                            }
                            current_date.add(1, 'days');
                        } while (number_of_times < repeat_times && current_date.isBefore(moment_until));
                        $date_until.val(current_date.subtract(1, 'days').format('MMMM D, YYYY'));
                        $date_until.pickadate('picker').set('select', new Date(current_date.format('YYYY'), current_date.format('M') - 1, current_date.format('D')));
                    },
                    updateRepeatTimes: function () {
                        var _context2;
                        var number_of_times = 0,
                            date_from = _sliceInstanceProperty(_context2 = bound_date.min).call(_context2),
                            date_until = $date_until.pickadate('picker').get('select'),
                            moment_until = moment().year(date_until.year).month(date_until.month).date(date_until.date);
                        date_from[1]++;
                        repeat.date_from = moment(date_from.join(','), 'YYYY,M,D');
                        repeat.week_days = [];
                        _findInstanceProperty($monthly_week_day).call($monthly_week_day, 'option').each(function () {
                            repeat.week_days.push($$O(this).val());
                        });
                        repeat.checked_week_days = [];
                        $$O('.bookly-js-week-days input:checked', $repeat_container).each(function () {
                            repeat.checked_week_days.push(this.value);
                        });
                        var current_date = repeat.date_from.clone();
                        do {
                            if (repeat.isDateMatchesSelections(current_date)) {
                                number_of_times++;
                            }
                            current_date.add(1, 'days');
                        } while (current_date.isBefore(moment_until));
                        $repeat_times.val(number_of_times);
                    }
                };
                $date_until.pickadate({
                    formatSubmit: 'yyyy-mm-dd',
                    format: opt[params.form_id].date_format,
                    min: bound_date.min,
                    max: bound_date.max,
                    clear: false,
                    close: false,
                    today: BooklyL10n.today,
                    monthsFull: BooklyL10n.months,
                    weekdaysFull: BooklyL10n.days,
                    weekdaysShort: BooklyL10n.daysShort,
                    labelMonthNext: BooklyL10n.nextMonth,
                    labelMonthPrev: BooklyL10n.prevMonth,
                    firstDay: opt[params.form_id].firstDay,
                    onClose: function () {
                        // Hide for skip tab navigations by days of the month when the calendar is closed
                        $$O('#' + $date_until.attr('aria-owns')).hide();
                    }
                }).focusin(function () {
                    // Restore calendar visibility, changed on onClose
                    $$O('#' + $date_until.attr('aria-owns')).show();
                });
                var open_repeat_onchange = $repeat_enabled.on('change', function () {
                    $repeat_container.toggle($$O(this).prop('checked'));
                    if ($$O(this).prop('checked')) {
                        repeat.prepareButtonNextState();
                    } else {
                        $next_step.prop('disabled', false);
                    }
                });
                if (response.repeated) {
                    var repeat_data = response.repeat_data;
                    var repeat_params = repeat_data.params;
                    $repeat_enabled.prop('checked', true);
                    $repeat_variant.val(_repeatInstanceProperty(repeat_data));
                    var until = repeat_data.until.split('-');
                    $date_until.pickadate('set').set('select', new Date(until[0], until[1] - 1, until[2]));
                    switch (_repeatInstanceProperty(repeat_data)) {
                        case 'daily':
                            $repeat_every_day.val(_everyInstanceProperty(repeat_params));
                            break;
                        case 'weekly':
                        //break skipped
                        case 'biweekly':
                            $$O('.bookly-js-week-days input[type="checkbox"]', $repeat_container).prop('checked', false).parent().removeClass('active');
                            _forEachInstanceProperty(_context3 = repeat_params.on).call(_context3, function (val) {
                                $$O('.bookly-js-week-days input:checkbox[value=' + val + ']', $repeat_container).prop('checked', true);
                            });
                            break;
                        case 'monthly':
                            if (repeat_params.on === 'day') {
                                $variant_monthly.val('specific');
                                $$O('.bookly-js-monthly-specific-day[value=' + repeat_params.day + ']', $repeat_container).prop('checked', true);
                            } else {
                                $variant_monthly.val(repeat_params.on);
                                $monthly_week_day.val(repeat_params.weekday);
                            }
                            break;
                    }
                    repeat.renderFullSchedule(response.schedule);
                }
                open_repeat_onchange.trigger('change');
                if (!response.could_be_repeated) {
                    $repeat_enabled.attr('disabled', true);
                }
                $repeat_variant.on('change', function () {
                    $variants.hide();
                    _findInstanceProperty($repeat_container).call($repeat_container, '.bookly-js-variant-' + this.value).show();
                    repeat.updateRepeatTimes();
                }).trigger('change');
                $variant_monthly.on('change', function () {
                    $monthly_week_day.toggle(this.value != 'specific');
                    $monthly_specific_day.toggle(this.value == 'specific');
                    repeat.updateRepeatTimes();
                }).trigger('change');
                $$O('.bookly-js-week-days input', $repeat_container).on('change', function () {
                    repeat.updateRepeatTimes();
                });
                $monthly_specific_day.val(response.date_min[2]);
                $monthly_specific_day.on('change', function () {
                    repeat.updateRepeatTimes();
                });
                $monthly_week_day.on('change', function () {
                    repeat.updateRepeatTimes();
                });
                $date_until.on('change', function () {
                    repeat.updateRepeatTimes();
                });
                $repeat_every_day.on('change', function () {
                    repeat.updateRepeatTimes();
                });
                $repeat_times.on('change', function () {
                    repeat.updateRepeatDate();
                });
                $button_get_schedule.on('click', function () {
                    $schedule_container.hide();
                    let data = {
                            action: 'bookly_recurring_appointments_get_customer_schedule',
                            form_id: params.form_id,
                            repeat: $repeat_variant.val(),
                            until: $date_until.pickadate('picker').get('select', 'yyyy-mm-dd'),
                            params: {}
                        },
                        ladda = laddaStart(this);
                    switch (_repeatInstanceProperty(data)) {
                        case 'daily':
                            data.params = {
                                every: $repeat_every_day.val()
                            };
                            break;
                        case 'weekly':
                        case 'biweekly':
                            data.params.on = [];
                            $$O('.bookly-js-week-days input[type="checkbox"]:checked', $variant_weekly).each(function () {
                                data.params.on.push(this.value);
                            });
                            if (data.params.on.length == 0) {
                                $days_error.toggle(true);
                                ladda.stop();
                                return false;
                            } else {
                                $days_error.toggle(false);
                            }
                            break;
                        case 'monthly':
                            if ($variant_monthly.val() == 'specific') {
                                data.params = {
                                    on: 'day',
                                    day: $monthly_specific_day.val()
                                };
                            } else {
                                data.params = {
                                    on: $variant_monthly.val(),
                                    weekday: $monthly_week_day.val()
                                };
                            }
                            break;
                    }
                    $schedule_slots.off('click');
                    booklyAjax({
                        type: 'POST',
                        data: data
                    }).then(response => {
                        repeat.renderFullSchedule(response.data);
                        ladda.stop();
                    });
                });
                $$O('.bookly-js-back-step', $container).on('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    laddaStart(this);
                    booklyAjax({
                        type: 'POST',
                        data: {
                            action: 'bookly_session_save',
                            form_id: params.form_id,
                            unrepeat: 1
                        }
                    }).then(response => {
                        if (!opt[params.form_id].skip_steps.extras && opt[params.form_id].step_extras == 'after_step_time' && !opt[params.form_id].no_extras) {
                            stepExtras({
                                form_id: params.form_id
                            });
                        } else {
                            stepTime({
                                form_id: params.form_id
                            });
                        }
                    });
                });
                $$O('.bookly-js-go-to-cart', $container).on('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    laddaStart(this);
                    stepCart({
                        form_id: params.form_id,
                        from_step: 'repeat'
                    });
                });
                $$O('.bookly-js-next-step', $container).on('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    laddaStart(this);

                    // Execute custom JavaScript
                    if (customJS) {
                        try {
                            $$O.globalEval(customJS.next_button);
                        } catch (e) {
                            // Do nothing
                        }
                    }
                    if ($repeat_enabled.is(':checked')) {
                        var slots_to_send = [];
                        var repeat = 0;
                        _forEachInstanceProperty(schedule).call(schedule, function (item) {
                            if (!item.deleted) {
                                var slots = JSON.parse(item.slots);
                                slots_to_send = _concatInstanceProperty(slots_to_send).call(slots_to_send, slots);
                                repeat++;
                            }
                        });
                        booklyAjax({
                            type: 'POST',
                            data: {
                                action: 'bookly_session_save',
                                form_id: params.form_id,
                                slots: _JSON$stringify(slots_to_send),
                                repeat: repeat
                            }
                        }).then(response => {
                            stepCart({
                                form_id: params.form_id,
                                add_to_cart: true,
                                from_step: 'repeat'
                            });
                        });
                    } else {
                        booklyAjax({
                            type: 'POST',
                            data: {
                                action: 'bookly_session_save',
                                form_id: params.form_id,
                                unrepeat: 1
                            }
                        }).then(response => {
                            stepCart({
                                form_id: params.form_id,
                                add_to_cart: true,
                                from_step: 'repeat'
                            });
                        });
                    }
                });
            });
        }
    }

    /**
     * Time step.
     */
    function stepTime(params, error_message) {
        if (opt[params.form_id].no_time || opt[params.form_id].skip_steps.time) {
            if (!opt[params.form_id].skip_steps.extras && opt[params.form_id].step_extras == 'after_step_time' && !opt[params.form_id].no_extras) {
                stepExtras({
                    form_id: params.form_id
                });
            } else if (!opt[params.form_id].skip_steps.cart) {
                stepCart({
                    form_id: params.form_id,
                    add_to_cart: true,
                    from_step: params && params.prev_step ? params.prev_step : 'service'
                });
            } else {
                stepDetails({
                    form_id: params.form_id,
                    add_to_cart: true
                });
            }
            return;
        }
        var data = {
                action: 'bookly_render_time'
            },
            $container = opt[params.form_id].$container;
        if (opt[params.form_id].skip_steps.service && opt[params.form_id].use_client_time_zone) {
            // If Service step is skipped then we need to send time zone offset.
            data.time_zone = opt[params.form_id].timeZone;
            data.time_zone_offset = opt[params.form_id].timeZoneOffset;
        }
        $$O.extend(data, params);
        let columnizerObserver = false;
        let lastObserverTime = 0;
        let lastObserverWidth = 0;

        // Build slots html
        function prepareSlotsHtml(slots_data, selected_date) {
            var response = {};
            $$O.each(slots_data, function (group, group_slots) {
                var html = '<button class="bookly-day" value="' + group + '">' + group_slots.title + '</button>';
                $$O.each(group_slots.slots, function (id, slot) {
                    html += '<button value="' + _JSON$stringify(slot.data).replace(/"/g, '&quot;') + '" data-group="' + group + '" class="bookly-hour' + (slot.special_hour ? ' bookly-slot-in-special-hour' : '') + (slot.status == 'waiting-list' ? ' bookly-slot-in-waiting-list' : slot.status == 'booked' ? ' booked' : '') + '"' + (slot.status == 'booked' ? ' disabled' : '') + '>' + '<span class="ladda-label bookly-time-main' + (slot.data[0][2] == selected_date ? ' bookly-bold' : '') + '">' + '<i class="bookly-hour-icon"><span></span></i>' + slot.time_text + '</span>' + '<span class="bookly-time-additional' + (slot.status == 'waiting-list' ? ' bookly-waiting-list' : '') + '"> ' + slot.additional_text + '</span>' + '</button>';
                });
                response[group] = html;
            });
            return response;
        }

        let requestRenderTime = requestCancellable(),
            requestSessionSave = requestCancellable();
        requestRenderTime.booklyAjax({
            data
        }).then(response => {
            BooklyL10n.csrf_token = response.csrf_token;
            $container.html(response.html);
            var $columnizer_wrap = $$O('.bookly-columnizer-wrap', $container),
                $columnizer = $$O('.bookly-columnizer', $columnizer_wrap),
                $time_next_button = $$O('.bookly-time-next', $container),
                $time_prev_button = $$O('.bookly-time-prev', $container),
                $current_screen = null,
                slot_height = 36,
                column_width = response.time_slots_wide ? 205 : 127,
                column_class = response.time_slots_wide ? 'bookly-column bookly-column-wide' : 'bookly-column',
                columns = 0,
                screen_index = 0,
                has_more_slots = response.has_more_slots,
                show_calendar = response.show_calendar,
                is_rtl = response.is_rtl,
                $screens,
                slots_per_column,
                columns_per_screen,
                show_day_per_column = response.day_one_column,
                slots = prepareSlotsHtml(response.slots_data, response.selected_date),
                customJS = response.custom_js;
            // 'BACK' button.
            $$O('.bookly-js-back-step', $container).on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                laddaStart(this);
                if (!opt[params.form_id].skip_steps.extras && !opt[params.form_id].no_extras) {
                    if (opt[params.form_id].step_extras == 'before_step_time') {
                        stepExtras({
                            form_id: params.form_id
                        });
                    } else {
                        stepService({
                            form_id: params.form_id
                        });
                    }
                } else {
                    stepService({
                        form_id: params.form_id
                    });
                }
            }).toggle(!opt[params.form_id].skip_steps.service || !opt[params.form_id].skip_steps.extras);
            $$O('.bookly-js-go-to-cart', $container).on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                laddaStart(this);
                stepCart({
                    form_id: params.form_id,
                    from_step: 'time'
                });
            });

            // Time zone switcher.
            $$O('.bookly-js-time-zone-switcher', $container).on('change', function (e) {
                opt[params.form_id].timeZone = this.value;
                opt[params.form_id].timeZoneOffset = undefined;
                showSpinner();
                requestRenderTime.cancel();
                if (columnizerObserver) {
                    columnizerObserver.disconnect();
                }
                stepTime({
                    form_id: params.form_id,
                    time_zone: opt[params.form_id].timeZone
                });
            });
            if (show_calendar) {
                // Init calendar.
                var $input = $$O('.bookly-js-selected-date', $container);
                $input.pickadate({
                    formatSubmit: 'yyyy-mm-dd',
                    format: opt[params.form_id].date_format,
                    min: response.date_min || true,
                    max: response.date_max || true,
                    weekdaysFull: BooklyL10n.days,
                    weekdaysShort: BooklyL10n.daysShort,
                    monthsFull: BooklyL10n.months,
                    labelMonthNext: BooklyL10n.nextMonth,
                    labelMonthPrev: BooklyL10n.prevMonth,
                    firstDay: opt[params.form_id].firstDay,
                    clear: false,
                    close: false,
                    today: false,
                    disable: response.disabled_days,
                    closeOnSelect: false,
                    klass: {
                        picker: 'picker picker--opened picker--focused'
                    },
                    onSet: function (e) {
                        if (e.select) {
                            var date = this.get('select', 'yyyy-mm-dd');
                            if (slots[date]) {
                                // Get data from response.slots.
                                $columnizer.html(slots[date]).css('left', '0px');
                                columns = 0;
                                screen_index = 0;
                                $current_screen = null;
                                initSlots();
                                $time_prev_button.hide();
                                $time_next_button.toggle($screens.length != 1);
                            } else {
                                // Load new data from server.
                                requestRenderTime.cancel();
                                stepTime({
                                    form_id: params.form_id,
                                    selected_date: date
                                });
                                showSpinner();
                            }
                        }
                        this.open(); // Fix ultimate-member plugin
                    },
                    onClose: function () {
                        this.open(false);
                    },
                    onRender: function () {
                        var date = new Date(Date.UTC(this.get('view').year, this.get('view').month));
                        $$O('.picker__nav--next', $container).on('click', function (e) {
                            e.stopPropagation();
                            e.preventDefault();
                            date.setUTCMonth(date.getUTCMonth() + 1);
                            requestRenderTime.cancel();
                            stepTime({
                                form_id: params.form_id,
                                selected_date: date.toJSON().substr(0, 10)
                            });
                            showSpinner();
                        });
                        $$O('.picker__nav--prev', $container).on('click', function (e) {
                            e.stopPropagation();
                            e.preventDefault();
                            date.setUTCMonth(date.getUTCMonth() - 1);
                            requestRenderTime.cancel();
                            stepTime({
                                form_id: params.form_id,
                                selected_date: date.toJSON().substr(0, 10)
                            });
                            showSpinner();
                        });
                    }
                });
                // Insert slots for selected day.
                var date = $input.pickadate('picker').get('select', 'yyyy-mm-dd');
                $columnizer.html(slots[date]);
            } else {
                // Insert all slots.
                var slots_data = '';
                $$O.each(slots, function (group, group_slots) {
                    slots_data += group_slots;
                });
                $columnizer.html(slots_data);
            }
            if (response.has_slots) {
                if (error_message) {
                    _findInstanceProperty($container).call($container, '.bookly-label-error').html(error_message);
                } else {
                    _findInstanceProperty($container).call($container, '.bookly-label-error').hide();
                }

                // Calculate number of slots per column.
                slots_per_column = _parseInt$1($$O(window).height() / slot_height, 10);
                if (slots_per_column < 4) {
                    slots_per_column = 4;
                } else if (slots_per_column > 10) {
                    slots_per_column = 10;
                }
                var hammertime = $$O('.bookly-time-step', $container).hammer({
                    swipe_velocity: 0.1
                });
                hammertime.on('swipeleft', function () {
                    if ($time_next_button.is(':visible')) {
                        $time_next_button.trigger('click');
                    }
                });
                hammertime.on('swiperight', function () {
                    if ($time_prev_button.is(':visible')) {
                        $time_prev_button.trigger('click');
                    }
                });
                $time_next_button.on('click', function (e) {
                    $time_prev_button.show();
                    if ($screens.eq(screen_index + 1).length) {
                        $columnizer.animate({
                            left: (is_rtl ? '+' : '-') + (screen_index + 1) * $current_screen.width()
                        }, {
                            duration: 800
                        });
                        $current_screen = $screens.eq(++screen_index);
                        $columnizer_wrap.animate({
                            height: $current_screen.height()
                        }, {
                            duration: 800
                        });
                        if (screen_index + 1 === $screens.length && !has_more_slots) {
                            $time_next_button.hide();
                        }
                    } else if (has_more_slots) {
                        // Do ajax request when there are more slots.
                        var $button = $$O('> button:last', $columnizer);
                        if ($button.length === 0) {
                            $button = $$O('.bookly-column:hidden:last > button:last', $columnizer);
                            if ($button.length === 0) {
                                $button = $$O('.bookly-column:last > button:last', $columnizer);
                            }
                        }

                        // Render Next Time
                        var data = {
                                action: 'bookly_render_next_time',
                                form_id: params.form_id,
                                last_slot: $button.val()
                            },
                            ladda = laddaStart(this);
                        booklyAjax({
                            type: 'POST',
                            data: data
                        }).then(response => {
                            if (response.has_slots) {
                                // if there are available time
                                has_more_slots = response.has_more_slots;
                                var slots_data = '';
                                $$O.each(prepareSlotsHtml(response.slots_data, response.selected_date), function (group, group_slots) {
                                    slots_data += group_slots;
                                });
                                var $html = $$O(slots_data);
                                // The first slot is always a day slot.
                                // Check if such day slot already exists (this can happen
                                // because of time zone offset) and then remove the first slot.
                                var $first_day = $html.eq(0);
                                if ($$O('button.bookly-day[value="' + $first_day.attr('value') + '"]', $container).length) {
                                    $html = $html.not(':first');
                                }
                                $columnizer.append($html);
                                initSlots();
                                $time_next_button.trigger('click');
                            } else {
                                // no available time
                                $time_next_button.hide();
                            }
                            ladda.stop();
                        }).catch(response => {
                            $time_next_button.hide();
                            ladda.stop();
                        });
                    }
                });
                $time_prev_button.on('click', function () {
                    $time_next_button.show();
                    $current_screen = $screens.eq(--screen_index);
                    $columnizer.animate({
                        left: (is_rtl ? '+' : '-') + screen_index * $current_screen.width()
                    }, {
                        duration: 800
                    });
                    $columnizer_wrap.animate({
                        height: $current_screen.height()
                    }, {
                        duration: 800
                    });
                    if (screen_index === 0) {
                        $time_prev_button.hide();
                    }
                });
            }
            scrollTo($container, params.form_id);

            function showSpinner() {
                $$O('.bookly-time-screen,.bookly-not-time-screen', $container).addClass('bookly-spin-overlay');
                var opts = {
                    lines: 11,
                    // The number of lines to draw
                    length: 11,
                    // The length of each line
                    width: 4,
                    // The line thickness
                    radius: 5 // The radius of the inner circle
                };
                if ($screens) {
                    new Spinner(opts).spin($screens.eq(screen_index).get(0));
                } else {
                    // Calendar not available month.
                    new Spinner(opts).spin($$O('.bookly-not-time-screen', $container).get(0));
                }
            }

            function initSlots() {
                var $buttons = $$O('> button', $columnizer),
                    slots_count = 0,
                    max_slots = 0,
                    $button,
                    $column,
                    $screen;
                if (show_day_per_column) {
                    /**
                     * Create columns for 'Show each day in one column' mode.
                     */
                    while ($buttons.length > 0) {
                        // Create column.
                        if ($buttons.eq(0).hasClass('bookly-day')) {
                            slots_count = 1;
                            $column = $$O('<div class="' + column_class + '" />');
                            $button = $$O(_spliceInstanceProperty($buttons).call($buttons, 0, 1));
                            $button.addClass('bookly-js-first-child');
                            $column.append($button);
                        } else {
                            slots_count++;
                            $button = $$O(_spliceInstanceProperty($buttons).call($buttons, 0, 1));
                            // If it is last slot in the column.
                            if (!$buttons.length || $buttons.eq(0).hasClass('bookly-day')) {
                                $button.addClass('bookly-last-child');
                                $column.append($button);
                                $columnizer.append($column);
                            } else {
                                $column.append($button);
                            }
                        }
                        // Calculate max number of slots.
                        if (slots_count > max_slots) {
                            max_slots = slots_count;
                        }
                    }
                } else {
                    /**
                     * Create columns for normal mode.
                     */
                    while (has_more_slots ? $buttons.length > slots_per_column : $buttons.length) {
                        $column = $$O('<div class="' + column_class + '" />');
                        max_slots = slots_per_column;
                        if (columns % columns_per_screen == 0 && !$buttons.eq(0).hasClass('bookly-day')) {
                            // If this is the first column of a screen and the first slot in this column is not day
                            // then put 1 slot less in this column because createScreens adds 1 more
                            // slot to such columns.
                            --max_slots;
                        }
                        for (var i = 0; i < max_slots; ++i) {
                            if (i + 1 == max_slots && $buttons.eq(0).hasClass('bookly-day')) {
                                // Skip the last slot if it is day.
                                break;
                            }
                            $button = $$O(_spliceInstanceProperty($buttons).call($buttons, 0, 1));
                            if (i == 0) {
                                $button.addClass('bookly-js-first-child');
                            } else if (i + 1 == max_slots) {
                                $button.addClass('bookly-last-child');
                            }
                            $column.append($button);
                        }
                        $columnizer.append($column);
                        ++columns;
                    }
                }
                /**
                 * Create screens.
                 */
                var $columns = $$O('> .bookly-column', $columnizer);
                while (has_more_slots ? $columns.length >= columns_per_screen : $columns.length) {
                    $screen = $$O('<div class="bookly-time-screen"/>');
                    for (var i = 0; i < columns_per_screen; ++i) {
                        $column = $$O(_spliceInstanceProperty($columns).call($columns, 0, 1));
                        if (i == 0) {
                            $column.addClass('bookly-js-first-column');
                            var $first_slot = _findInstanceProperty($column).call($column, '.bookly-js-first-child');
                            // In the first column the first slot is time.
                            if (!$first_slot.hasClass('bookly-day')) {
                                var group = $first_slot.data('group'),
                                    $group_slot = $$O('button.bookly-day[value="' + group + '"]:last', $container);
                                // Copy group slot to the first column.
                                $column.prepend($group_slot.clone());
                            }
                        }
                        $screen.append($column);
                    }
                    $columnizer.append($screen);
                }
                $screens = $$O('.bookly-time-screen', $columnizer);
                if ($current_screen === null) {
                    $current_screen = $screens.eq(0);
                }
                $$O('button.bookly-time-skip', $container).off('click').on('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    laddaStart(this);
                    if (!opt[params.form_id].no_extras && opt[params.form_id].step_extras === 'after_step_time') {
                        stepExtras({
                            form_id: params.form_id
                        });
                    } else {
                        if (!opt[params.form_id].skip_steps.cart) {
                            stepCart({
                                form_id: params.form_id,
                                add_to_cart: true,
                                from_step: 'time'
                            });
                        } else {
                            stepDetails({
                                form_id: params.form_id,
                                add_to_cart: true
                            });
                        }
                    }
                });

                // On click on a slot.
                $$O('button.bookly-hour', $container).off('click').on('click', function (e) {
                    requestSessionSave.cancel();
                    e.stopPropagation();
                    e.preventDefault();
                    var $this = $$O(this),
                        data = {
                            action: 'bookly_session_save',
                            form_id: params.form_id,
                            slots: this.value
                        };
                    $this.attr({
                        'data-style': 'zoom-in',
                        'data-spinner-color': '#333',
                        'data-spinner-size': '40'
                    });
                    laddaStart(this);

                    // Execute custom JavaScript
                    if (customJS) {
                        try {
                            $$O.globalEval(customJS.next_button);
                        } catch (e) {
                            // Do nothing
                        }
                    }
                    requestSessionSave.booklyAjax({
                        type: 'POST',
                        data: data
                    }).then(response => {
                        if (!opt[params.form_id].skip_steps.extras && opt[params.form_id].step_extras == 'after_step_time' && !opt[params.form_id].no_extras) {
                            stepExtras({
                                form_id: params.form_id
                            });
                        } else if (!_repeatInstanceProperty(opt[params.form_id].skip_steps) && opt[params.form_id].recurrence_enabled) {
                            stepRepeat({
                                form_id: params.form_id
                            });
                        } else if (!opt[params.form_id].skip_steps.cart) {
                            stepCart({
                                form_id: params.form_id,
                                add_to_cart: true,
                                from_step: 'time'
                            });
                        } else {
                            stepDetails({
                                form_id: params.form_id,
                                add_to_cart: true
                            });
                        }
                    });
                });

                // Columnizer width & height.
                $$O('.bookly-time-step', $container).width(columns_per_screen * column_width);
                $columnizer_wrap.height($current_screen.height());
            }

            function observeResizeColumnizer() {
                if ($$O('.bookly-time-step', $container).length > 0) {
                    let time = new Date().getTime();
                    if (time - lastObserverTime > 200) {
                        let formWidth = $columnizer_wrap.closest('.bookly-form').width();
                        if (formWidth !== lastObserverWidth) {
                            resizeColumnizer();
                            lastObserverWidth = formWidth;
                            lastObserverTime = time;
                        }
                    }
                } else {
                    columnizerObserver.disconnect();
                }
            }

            function resizeColumnizer() {
                $columnizer.html(slots_data).css('left', '0px');
                columns = 0;
                screen_index = 0;
                $current_screen = null;
                if (column_width > 0) {
                    let formWidth = $columnizer_wrap.closest('.bookly-form').width();
                    if (show_calendar) {
                        let calendarWidth = $$O('.bookly-js-slot-calendar', $container).width();
                        if (formWidth > calendarWidth + column_width + 24) {
                            columns_per_screen = _parseInt$1((formWidth - calendarWidth - 24) / column_width, 10);
                        } else {
                            columns_per_screen = _parseInt$1(formWidth / column_width, 10);
                        }
                    } else {
                        columns_per_screen = _parseInt$1(formWidth / column_width, 10);
                    }
                }
                if (columns_per_screen > 10) {
                    columns_per_screen = 10;
                }
                columns_per_screen = Math.max(columns_per_screen, 1);
                initSlots();
                $time_prev_button.hide();
                if (!has_more_slots && $screens.length === 1) {
                    $time_next_button.hide();
                } else {
                    $time_next_button.show();
                }
            }

            if (typeof ResizeObserver === "undefined" || typeof ResizeObserver === undefined) {
                resizeColumnizer();
            } else {
                columnizerObserver = new ResizeObserver(observeResizeColumnizer);
                columnizerObserver.observe($container.get(0));
            }
        }).catch(response => {
            stepService({
                form_id: params.form_id
            });
        });
    }

    /**
     * Extras step.
     */
    function stepExtras(params) {
        var data = {
                action: 'bookly_render_extras'
            },
            $container = opt[params.form_id].$container;
        if (opt[params.form_id].skip_steps.service && opt[params.form_id].use_client_time_zone) {
            // If Service step is skipped then we need to send time zone offset.
            data.time_zone = opt[params.form_id].timeZone;
            data.time_zone_offset = opt[params.form_id].timeZoneOffset;
        }
        $$O.extend(data, params);
        booklyAjax({
            data
        }).then(response => {
            BooklyL10n.csrf_token = response.csrf_token;
            $container.html(response.html);
            scrollTo($container, params.form_id);
            let $next_step = $$O('.bookly-js-next-step', $container),
                $back_step = $$O('.bookly-js-back-step', $container),
                $goto_cart = $$O('.bookly-js-go-to-cart', $container),
                $extras_items = $$O('.bookly-js-extras-item', $container),
                $extras_summary = $$O('.bookly-js-extras-summary span', $container),
                customJS = response.custom_js,
                $this,
                $input,
                format = new Format(response);
            var extrasChanged = function ($extras_item, quantity) {
                var $input = _findInstanceProperty($extras_item).call($extras_item, 'input'),
                    $total = _findInstanceProperty($extras_item).call($extras_item, '.bookly-js-extras-total-price'),
                    total_price = quantity * _parseFloat$1($extras_item.data('price'));
                $total.text(format.price(total_price));
                $input.val(quantity);
                _findInstanceProperty($extras_item).call($extras_item, '.bookly-js-extras-thumb').toggleClass('bookly-extras-selected', quantity > 0);

                // Updating summary
                var amount = 0;
                $extras_items.each(function (index, elem) {
                    var $this = $$O(this),
                        multiplier = $this.closest('.bookly-js-extras-container').data('multiplier');
                    amount += _parseFloat$1($this.data('price')) * _findInstanceProperty($this).call($this, 'input').val() * multiplier;
                });
                if (amount) {
                    $extras_summary.html(' + ' + format.price(amount));
                } else {
                    $extras_summary.html('');
                }
            };
            $extras_items.each(function (index, elem) {
                var $this = $$O(this);
                var $input = _findInstanceProperty($this).call($this, 'input');
                $$O('.bookly-js-extras-thumb', $this).on('click', function () {
                    extrasChanged($this, $input.val() > $this.data('min_quantity') ? $this.data('min_quantity') : $this.data('min_quantity') == '0' ? 1 : $this.data('min_quantity'));
                }).keypress(function (e) {
                    e.preventDefault();
                    if (e.which == 13 || e.which == 32) {
                        extrasChanged($this, $input.val() > $this.data('min_quantity') ? $this.data('min_quantity') : $this.data('min_quantity') == '0' ? 1 : $this.data('min_quantity'));
                    }
                });
                _findInstanceProperty($this).call($this, '.bookly-js-count-control').on('click', function () {
                    var count = _parseInt$1($input.val());
                    count = $$O(this).hasClass('bookly-js-extras-increment') ? Math.min($this.data('max_quantity'), count + 1) : Math.max($this.data('min_quantity'), count - 1);
                    extrasChanged($this, count);
                });
                setInputFilter($input.get(0), function (value) {
                    let valid = /^\d*$/.test(value) && (value === '' || _parseInt$1(value) <= $this.data('max_quantity') && _parseInt$1(value) >= $this.data('min_quantity'));
                    if (valid) {
                        extrasChanged($this, value === '' ? $this.data('min_quantity') : _parseInt$1(value));
                    }
                    return valid;
                });
                extrasChanged($this, $input.val());
            });
            $goto_cart.on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                laddaStart(this);
                stepCart({
                    form_id: params.form_id,
                    from_step: 'extras'
                });
            });
            $next_step.on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                laddaStart(this);

                // Execute custom JavaScript
                if (customJS) {
                    try {
                        $$O.globalEval(customJS.next_button);
                    } catch (e) {
                        // Do nothing
                    }
                }
                var extras = {};
                $$O('.bookly-js-extras-container', $container).each(function () {
                    var $extras_container = $$O(this);
                    var chain_id = $extras_container.data('chain');
                    var chain_extras = {};
                    // Get checked extras for chain.
                    _findInstanceProperty($extras_container).call($extras_container, '.bookly-js-extras-item').each(function (index, elem) {
                        $this = $$O(this);
                        $input = _findInstanceProperty($this).call($this, 'input');
                        if ($input.val() > 0) {
                            chain_extras[$this.data('id')] = $input.val();
                        }
                    });
                    extras[chain_id] = _JSON$stringify(chain_extras);
                });
                booklyAjax({
                    type: 'POST',
                    data: {
                        action: 'bookly_session_save',
                        form_id: params.form_id,
                        extras: extras
                    }
                }).then(response => {
                    if (opt[params.form_id].step_extras == 'before_step_time' && !opt[params.form_id].skip_steps.time) {
                        stepTime({
                            form_id: params.form_id,
                            prev_step: 'extras'
                        });
                    } else if (!_repeatInstanceProperty(opt[params.form_id].skip_steps) && opt[params.form_id].recurrence_enabled) {
                        stepRepeat({
                            form_id: params.form_id
                        });
                    } else if (!opt[params.form_id].skip_steps.cart) {
                        stepCart({
                            form_id: params.form_id,
                            add_to_cart: true,
                            from_step: 'time'
                        });
                    } else {
                        stepDetails({
                            form_id: params.form_id,
                            add_to_cart: true
                        });
                    }
                });
            });
            $back_step.on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                laddaStart(this);
                if (opt[params.form_id].step_extras == 'after_step_time' && !opt[params.form_id].no_time) {
                    stepTime({
                        form_id: params.form_id,
                        prev_step: 'extras'
                    });
                } else {
                    stepService({
                        form_id: params.form_id
                    });
                }
            });
        });
    }

    function setInputFilter(textbox, inputFilter) {
        var _context;
        _forEachInstanceProperty(_context = ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"]).call(_context, function (event) {
            textbox.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty('oldValue')) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                } else {
                    this.value = '';
                }
            });
        });
    }

    var create$4 = objectCreate;
    var defineBuiltInAccessor$1 = defineBuiltInAccessor$3;
    var defineBuiltIns = defineBuiltIns$3;
    var bind$2 = functionBindContext;
    var anInstance = anInstance$4;
    var isNullOrUndefined = isNullOrUndefined$7;
    var iterate$1 = iterate$9;
    var defineIterator = iteratorDefine;
    var createIterResultObject = createIterResultObject$3;
    var setSpecies = setSpecies$2;
    var DESCRIPTORS$4 = descriptors;
    var fastKey = internalMetadataExports.fastKey;
    var InternalStateModule$1 = internalState;

    var setInternalState$1 = InternalStateModule$1.set;
    var internalStateGetterFor = InternalStateModule$1.getterFor;

    var collectionStrong$2 = {
        getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
            var Constructor = wrapper(function (that, iterable) {
                anInstance(that, Prototype);
                setInternalState$1(that, {
                    type: CONSTRUCTOR_NAME,
                    index: create$4(null),
                    first: undefined,
                    last: undefined,
                    size: 0
                });
                if (!DESCRIPTORS$4) that.size = 0;
                if (!isNullOrUndefined(iterable)) iterate$1(iterable, that[ADDER], {that: that, AS_ENTRIES: IS_MAP});
            });

            var Prototype = Constructor.prototype;

            var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

            var define = function (that, key, value) {
                var state = getInternalState(that);
                var entry = getEntry(that, key);
                var previous, index;
                // change existing entry
                if (entry) {
                    entry.value = value;
                    // create new entry
                } else {
                    state.last = entry = {
                        index: index = fastKey(key, true),
                        key: key,
                        value: value,
                        previous: previous = state.last,
                        next: undefined,
                        removed: false
                    };
                    if (!state.first) state.first = entry;
                    if (previous) previous.next = entry;
                    if (DESCRIPTORS$4) state.size++;
                    else that.size++;
                    // add to index
                    if (index !== 'F') state.index[index] = entry;
                }
                return that;
            };

            var getEntry = function (that, key) {
                var state = getInternalState(that);
                // fast case
                var index = fastKey(key);
                var entry;
                if (index !== 'F') return state.index[index];
                // frozen object case
                for (entry = state.first; entry; entry = entry.next) {
                    if (entry.key === key) return entry;
                }
            };

            defineBuiltIns(Prototype, {
                // `{ Map, Set }.prototype.clear()` methods
                // https://tc39.es/ecma262/#sec-map.prototype.clear
                // https://tc39.es/ecma262/#sec-set.prototype.clear
                clear: function clear() {
                    var that = this;
                    var state = getInternalState(that);
                    var entry = state.first;
                    while (entry) {
                        entry.removed = true;
                        if (entry.previous) entry.previous = entry.previous.next = undefined;
                        entry = entry.next;
                    }
                    state.first = state.last = undefined;
                    state.index = create$4(null);
                    if (DESCRIPTORS$4) state.size = 0;
                    else that.size = 0;
                },
                // `{ Map, Set }.prototype.delete(key)` methods
                // https://tc39.es/ecma262/#sec-map.prototype.delete
                // https://tc39.es/ecma262/#sec-set.prototype.delete
                'delete': function (key) {
                    var that = this;
                    var state = getInternalState(that);
                    var entry = getEntry(that, key);
                    if (entry) {
                        var next = entry.next;
                        var prev = entry.previous;
                        delete state.index[entry.index];
                        entry.removed = true;
                        if (prev) prev.next = next;
                        if (next) next.previous = prev;
                        if (state.first === entry) state.first = next;
                        if (state.last === entry) state.last = prev;
                        if (DESCRIPTORS$4) state.size--;
                        else that.size--;
                    }
                    return !!entry;
                },
                // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
                // https://tc39.es/ecma262/#sec-map.prototype.foreach
                // https://tc39.es/ecma262/#sec-set.prototype.foreach
                forEach: function forEach(callbackfn /* , that = undefined */) {
                    var state = getInternalState(this);
                    var boundFunction = bind$2(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                    var entry;
                    while (entry = entry ? entry.next : state.first) {
                        boundFunction(entry.value, entry.key, this);
                        // revert to the last existing entry
                        while (entry && entry.removed) entry = entry.previous;
                    }
                },
                // `{ Map, Set}.prototype.has(key)` methods
                // https://tc39.es/ecma262/#sec-map.prototype.has
                // https://tc39.es/ecma262/#sec-set.prototype.has
                has: function has(key) {
                    return !!getEntry(this, key);
                }
            });

            defineBuiltIns(Prototype, IS_MAP ? {
                // `Map.prototype.get(key)` method
                // https://tc39.es/ecma262/#sec-map.prototype.get
                get: function get(key) {
                    var entry = getEntry(this, key);
                    return entry && entry.value;
                },
                // `Map.prototype.set(key, value)` method
                // https://tc39.es/ecma262/#sec-map.prototype.set
                set: function set(key, value) {
                    return define(this, key === 0 ? 0 : key, value);
                }
            } : {
                // `Set.prototype.add(value)` method
                // https://tc39.es/ecma262/#sec-set.prototype.add
                add: function add(value) {
                    return define(this, value = value === 0 ? 0 : value, value);
                }
            });
            if (DESCRIPTORS$4) defineBuiltInAccessor$1(Prototype, 'size', {
                configurable: true,
                get: function () {
                    return getInternalState(this).size;
                }
            });
            return Constructor;
        },
        setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
            var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
            var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
            var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
            // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
            // https://tc39.es/ecma262/#sec-map.prototype.entries
            // https://tc39.es/ecma262/#sec-map.prototype.keys
            // https://tc39.es/ecma262/#sec-map.prototype.values
            // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
            // https://tc39.es/ecma262/#sec-set.prototype.entries
            // https://tc39.es/ecma262/#sec-set.prototype.keys
            // https://tc39.es/ecma262/#sec-set.prototype.values
            // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
            defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
                setInternalState$1(this, {
                    type: ITERATOR_NAME,
                    target: iterated,
                    state: getInternalCollectionState(iterated),
                    kind: kind,
                    last: undefined
                });
            }, function () {
                var state = getInternalIteratorState(this);
                var kind = state.kind;
                var entry = state.last;
                // revert to the last existing entry
                while (entry && entry.removed) entry = entry.previous;
                // get next entry
                if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                    // or finish the iteration
                    state.target = undefined;
                    return createIterResultObject(undefined, true);
                }
                // return step by kind
                if (kind === 'keys') return createIterResultObject(entry.key, false);
                if (kind === 'values') return createIterResultObject(entry.value, false);
                return createIterResultObject([entry.key, entry.value], false);
            }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

            // `{ Map, Set }.prototype[@@species]` accessors
            // https://tc39.es/ecma262/#sec-get-map-@@species
            // https://tc39.es/ecma262/#sec-get-set-@@species
            setSpecies(CONSTRUCTOR_NAME);
        }
    };

    var collection$1 = collection$3;
    var collectionStrong$1 = collectionStrong$2;

    // `Map` constructor
    // https://tc39.es/ecma262/#sec-map-objects
    collection$1('Map', function (init) {
        return function Map() {
            return init(this, arguments.length ? arguments[0] : undefined);
        };
    }, collectionStrong$1);

    var caller$1 = function (methodName, numArgs) {
        return numArgs === 1 ? function (object, arg) {
            return object[methodName](arg);
        } : function (object, arg1, arg2) {
            return object[methodName](arg1, arg2);
        };
    };

    var getBuiltIn$5 = getBuiltIn$f;
    var caller = caller$1;

    var Map$1 = getBuiltIn$5('Map');

    var mapHelpers = {
        Map: Map$1,
        set: caller('set', 2),
        get: caller('get', 1),
        has: caller('has', 1),
        remove: caller('delete', 1),
        proto: Map$1.prototype
    };

    var $$h = _export;
    var uncurryThis$6 = functionUncurryThis;
    var aCallable$1 = aCallable$c;
    var requireObjectCoercible = requireObjectCoercible$7;
    var iterate = iterate$9;
    var MapHelpers = mapHelpers;
    var IS_PURE = isPure;

    var Map = MapHelpers.Map;
    var has = MapHelpers.has;
    var get = MapHelpers.get;
    var set$3 = MapHelpers.set;
    var push$3 = uncurryThis$6([].push);

    // `Map.groupBy` method
    // https://github.com/tc39/proposal-array-grouping
    $$h({target: 'Map', stat: true, forced: IS_PURE}, {
        groupBy: function groupBy(items, callbackfn) {
            requireObjectCoercible(items);
            aCallable$1(callbackfn);
            var map = new Map();
            var k = 0;
            iterate(items, function (value) {
                var key = callbackfn(value, k++);
                if (!has(map, key)) set$3(map, key, [value]);
                else push$3(get(map, key), value);
            });
            return map;
        }
    });

    var path$9 = path$j;

    var map$2 = path$9.Map;

    var parent$n = map$2;


    var map$1 = parent$n;

    var map = map$1;

    var _Map = /*@__PURE__*/getDefaultExportFromCjs(map);

    // TODO: Remove from `core-js@4`
    var $$g = _export;
    var DESCRIPTORS$3 = descriptors;
    var create$3 = objectCreate;

    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    $$g({target: 'Object', stat: true, sham: !DESCRIPTORS$3}, {
        create: create$3
    });

    var path$8 = path$j;

    var Object$2 = path$8.Object;

    var create$2 = function create(P, D) {
        return Object$2.create(P, D);
    };

    var parent$m = create$2;

    var create$1 = parent$m;

    var create = create$1;

    var _Object$create = /*@__PURE__*/getDefaultExportFromCjs(create);

    var $$f = _export;
    var toObject$4 = toObject$a;
    var nativeKeys = objectKeys$3;
    var fails$4 = fails$v;

    var FAILS_ON_PRIMITIVES = fails$4(function () {
        nativeKeys(1);
    });

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    $$f({target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES}, {
        keys: function keys(it) {
            return nativeKeys(toObject$4(it));
        }
    });

    var path$7 = path$j;

    var keys$2 = path$7.Object.keys;

    var parent$l = keys$2;

    var keys$1 = parent$l;

    var keys = keys$1;

    var _Object$keys = /*@__PURE__*/getDefaultExportFromCjs(keys);

    var collection = collection$3;
    var collectionStrong = collectionStrong$2;

    // `Set` constructor
    // https://tc39.es/ecma262/#sec-set-objects
    collection('Set', function (init) {
        return function Set() {
            return init(this, arguments.length ? arguments[0] : undefined);
        };
    }, collectionStrong);

    var path$6 = path$j;

    var set$2 = path$6.Set;

    var parent$k = set$2;


    var set$1 = parent$k;

    var set = set$1;

    var _Set = /*@__PURE__*/getDefaultExportFromCjs(set);

    /** @returns {void} */
    function noop() {
    }

    const identity = x => x;

    /**
     * @template T
     * @template S
     * @param {T} tar
     * @param {S} src
     * @returns {T & S}
     */
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src) tar[k] = src[k];
        return /** @type {T & S} */tar;
    }

    function run(fn) {
        return fn();
    }

    function blank_object() {
        return _Object$create(null);
    }

    /**
     * @param {Function[]} fns
     * @returns {void}
     */
    function run_all(fns) {
        _forEachInstanceProperty(fns).call(fns, run);
    }

    /**
     * @param {any} thing
     * @returns {thing is Function}
     */
    function is_function(thing) {
        return typeof thing === 'function';
    }

    /** @returns {boolean} */
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
    }

    /** @returns {boolean} */
    function is_empty(obj) {
        return _Object$keys(obj).length === 0;
    }

    // TODO: Remove from `core-js@4`
    var $$e = _export;
    var uncurryThis$5 = functionUncurryThis;

    var $Date = Date;
    var thisTimeValue = uncurryThis$5($Date.prototype.getTime);

    // `Date.now` method
    // https://tc39.es/ecma262/#sec-date.now
    $$e({target: 'Date', stat: true}, {
        now: function now() {
            return thisTimeValue(new $Date());
        }
    });

    var path$5 = path$j;

    var now$3 = path$5.Date.now;

    var parent$j = now$3;

    var now$2 = parent$j;

    var now$1 = now$2;

    var _Date$now = /*@__PURE__*/getDefaultExportFromCjs(now$1);

    const is_client = typeof window !== 'undefined';

    /** @type {() => number} */
    let now = is_client ? () => window.performance.now() : () => _Date$now();
    let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

    const tasks = new _Set();

    /**
     * @param {number} now
     * @returns {void}
     */
    function run_tasks(now) {
        _forEachInstanceProperty(tasks).call(tasks, task => {
            if (!task.c(now)) {
                tasks.delete(task);
                task.f();
            }
        });
        if (tasks.size !== 0) raf(run_tasks);
    }

    /**
     * Creates a new task that runs on each raf frame
     * until it returns a falsy value or is aborted
     * @param {import('./private.js').TaskCallback} callback
     * @returns {import('./private.js').Task}
     */
    function loop(callback) {
        /** @type {import('./private.js').TaskEntry} */
        let task;
        if (tasks.size === 0) raf(run_tasks);
        return {
            promise: new _Promise(fulfill => {
                tasks.add(task = {
                    c: callback,
                    f: fulfill
                });
            }),
            abort() {
                tasks.delete(task);
            }
        };
    }

    var defineProperty$8 = {exports: {}};

    var $$d = _export;
    var DESCRIPTORS$2 = descriptors;
    var defineProperty$7 = objectDefineProperty.f;

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    $$d({target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$7, sham: !DESCRIPTORS$2}, {
        defineProperty: defineProperty$7
    });

    var path$4 = path$j;

    var Object$1 = path$4.Object;

    var defineProperty$6 = defineProperty$8.exports = function defineProperty(it, key, desc) {
        return Object$1.defineProperty(it, key, desc);
    };

    if (Object$1.defineProperty.sham) defineProperty$6.sham = true;

    var definePropertyExports = defineProperty$8.exports;

    var parent$i = definePropertyExports;

    var defineProperty$5 = parent$i;

    var parent$h = defineProperty$5;

    var defineProperty$4 = parent$h;

    var parent$g = defineProperty$4;

    var defineProperty$3 = parent$g;

    var defineProperty$2 = defineProperty$3;

    var _Object$defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$2);

    var wellKnownSymbolWrapped = {};

    var wellKnownSymbol$4 = wellKnownSymbol$o;

    wellKnownSymbolWrapped.f = wellKnownSymbol$4;

    var path$3 = path$j;
    var hasOwn$3 = hasOwnProperty_1;
    var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
    var defineProperty$1 = objectDefineProperty.f;

    var wellKnownSymbolDefine = function (NAME) {
        var Symbol = path$3.Symbol || (path$3.Symbol = {});
        if (!hasOwn$3(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
            value: wrappedWellKnownSymbolModule$1.f(NAME)
        });
    };

    var call$2 = functionCall;
    var getBuiltIn$4 = getBuiltIn$f;
    var wellKnownSymbol$3 = wellKnownSymbol$o;
    var defineBuiltIn$1 = defineBuiltIn$6;

    var symbolDefineToPrimitive = function () {
        var Symbol = getBuiltIn$4('Symbol');
        var SymbolPrototype = Symbol && Symbol.prototype;
        var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
        var TO_PRIMITIVE = wellKnownSymbol$3('toPrimitive');

        if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
            // `Symbol.prototype[@@toPrimitive]` method
            // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
            // eslint-disable-next-line no-unused-vars -- required for .length
            defineBuiltIn$1(SymbolPrototype, TO_PRIMITIVE, function (hint) {
                return call$2(valueOf, this);
            }, {arity: 1});
        }
    };

    var $$c = _export;
    var global$3 = global$u;
    var call$1 = functionCall;
    var uncurryThis$4 = functionUncurryThis;
    var DESCRIPTORS$1 = descriptors;
    var NATIVE_SYMBOL$2 = symbolConstructorDetection;
    var fails$3 = fails$v;
    var hasOwn$2 = hasOwnProperty_1;
    var isPrototypeOf$2 = objectIsPrototypeOf;
    var anObject$1 = anObject$d;
    var toIndexedObject$1 = toIndexedObject$9;
    var toPropertyKey$1 = toPropertyKey$5;
    var $toString = toString$c;
    var createPropertyDescriptor = createPropertyDescriptor$7;
    var nativeObjectCreate = objectCreate;
    var objectKeys$1 = objectKeys$3;
    var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
    var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
    var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
    var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
    var definePropertyModule = objectDefineProperty;
    var definePropertiesModule = objectDefineProperties;
    var propertyIsEnumerableModule = objectPropertyIsEnumerable;
    var defineBuiltIn = defineBuiltIn$6;
    var defineBuiltInAccessor = defineBuiltInAccessor$3;
    var shared$3 = sharedExports;
    var sharedKey = sharedKey$4;
    var hiddenKeys = hiddenKeys$6;
    var uid = uid$4;
    var wellKnownSymbol$2 = wellKnownSymbol$o;
    var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
    var defineWellKnownSymbol$l = wellKnownSymbolDefine;
    var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
    var setToStringTag$2 = setToStringTag$8;
    var InternalStateModule = internalState;
    var $forEach = arrayIteration.forEach;

    var HIDDEN = sharedKey('hidden');
    var SYMBOL = 'Symbol';
    var PROTOTYPE = 'prototype';

    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(SYMBOL);

    var ObjectPrototype = Object[PROTOTYPE];
    var $Symbol = global$3.Symbol;
    var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
    var RangeError$1 = global$3.RangeError;
    var TypeError$1 = global$3.TypeError;
    var QObject = global$3.QObject;
    var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var nativeDefineProperty = definePropertyModule.f;
    var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
    var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
    var push$2 = uncurryThis$4([].push);

    var AllSymbols = shared$3('symbols');
    var ObjectPrototypeSymbols = shared$3('op-symbols');
    var WellKnownSymbolsStore$1 = shared$3('wks');

    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    var fallbackDefineProperty = function (O, P, Attributes) {
        var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
        if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
        nativeDefineProperty(O, P, Attributes);
        if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
            nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
        }
    };

    var setSymbolDescriptor = DESCRIPTORS$1 && fails$3(function () {
        return nativeObjectCreate(nativeDefineProperty({}, 'a', {
            get: function () {
                return nativeDefineProperty(this, 'a', {value: 7}).a;
            }
        })).a !== 7;
    }) ? fallbackDefineProperty : nativeDefineProperty;

    var wrap = function (tag, description) {
        var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
        setInternalState(symbol, {
            type: SYMBOL,
            tag: tag,
            description: description
        });
        if (!DESCRIPTORS$1) symbol.description = description;
        return symbol;
    };

    var $defineProperty = function defineProperty(O, P, Attributes) {
        if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
        anObject$1(O);
        var key = toPropertyKey$1(P);
        anObject$1(Attributes);
        if (hasOwn$2(AllSymbols, key)) {
            if (!Attributes.enumerable) {
                if (!hasOwn$2(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
                O[HIDDEN][key] = true;
            } else {
                if (hasOwn$2(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
                Attributes = nativeObjectCreate(Attributes, {enumerable: createPropertyDescriptor(0, false)});
            }
            return setSymbolDescriptor(O, key, Attributes);
        }
        return nativeDefineProperty(O, key, Attributes);
    };

    var $defineProperties = function defineProperties(O, Properties) {
        anObject$1(O);
        var properties = toIndexedObject$1(Properties);
        var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
        $forEach(keys, function (key) {
            if (!DESCRIPTORS$1 || call$1($propertyIsEnumerable$1, properties, key)) $defineProperty(O, key, properties[key]);
        });
        return O;
    };

    var $create = function create(O, Properties) {
        return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
    };

    var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
        var P = toPropertyKey$1(V);
        var enumerable = call$1(nativePropertyIsEnumerable, this, P);
        if (this === ObjectPrototype && hasOwn$2(AllSymbols, P) && !hasOwn$2(ObjectPrototypeSymbols, P)) return false;
        return enumerable || !hasOwn$2(this, P) || !hasOwn$2(AllSymbols, P) || hasOwn$2(this, HIDDEN) && this[HIDDEN][P]
            ? enumerable : true;
    };

    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
        var it = toIndexedObject$1(O);
        var key = toPropertyKey$1(P);
        if (it === ObjectPrototype && hasOwn$2(AllSymbols, key) && !hasOwn$2(ObjectPrototypeSymbols, key)) return;
        var descriptor = nativeGetOwnPropertyDescriptor(it, key);
        if (descriptor && hasOwn$2(AllSymbols, key) && !(hasOwn$2(it, HIDDEN) && it[HIDDEN][key])) {
            descriptor.enumerable = true;
        }
        return descriptor;
    };

    var $getOwnPropertyNames = function getOwnPropertyNames(O) {
        var names = nativeGetOwnPropertyNames(toIndexedObject$1(O));
        var result = [];
        $forEach(names, function (key) {
            if (!hasOwn$2(AllSymbols, key) && !hasOwn$2(hiddenKeys, key)) push$2(result, key);
        });
        return result;
    };

    var $getOwnPropertySymbols = function (O) {
        var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
        var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$1(O));
        var result = [];
        $forEach(names, function (key) {
            if (hasOwn$2(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$2(ObjectPrototype, key))) {
                push$2(result, AllSymbols[key]);
            }
        });
        return result;
    };

    // `Symbol` constructor
    // https://tc39.es/ecma262/#sec-symbol-constructor
    if (!NATIVE_SYMBOL$2) {
        $Symbol = function Symbol() {
            if (isPrototypeOf$2(SymbolPrototype, this)) throw new TypeError$1('Symbol is not a constructor');
            var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
            var tag = uid(description);
            var setter = function (value) {
                var $this = this === undefined ? global$3 : this;
                if ($this === ObjectPrototype) call$1(setter, ObjectPrototypeSymbols, value);
                if (hasOwn$2($this, HIDDEN) && hasOwn$2($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
                var descriptor = createPropertyDescriptor(1, value);
                try {
                    setSymbolDescriptor($this, tag, descriptor);
                } catch (error) {
                    if (!(error instanceof RangeError$1)) throw error;
                    fallbackDefineProperty($this, tag, descriptor);
                }
            };
            if (DESCRIPTORS$1 && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
                configurable: true,
                set: setter
            });
            return wrap(tag, description);
        };

        SymbolPrototype = $Symbol[PROTOTYPE];

        defineBuiltIn(SymbolPrototype, 'toString', function toString() {
            return getInternalState(this).tag;
        });

        defineBuiltIn($Symbol, 'withoutSetter', function (description) {
            return wrap(uid(description), description);
        });

        propertyIsEnumerableModule.f = $propertyIsEnumerable$1;
        definePropertyModule.f = $defineProperty;
        definePropertiesModule.f = $defineProperties;
        getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
        getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
        getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;

        wrappedWellKnownSymbolModule.f = function (name) {
            return wrap(wellKnownSymbol$2(name), name);
        };

        if (DESCRIPTORS$1) {
            // https://github.com/tc39/proposal-Symbol-description
            defineBuiltInAccessor(SymbolPrototype, 'description', {
                configurable: true,
                get: function description() {
                    return getInternalState(this).description;
                }
            });
        }
    }

    $$c({global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$2, sham: !NATIVE_SYMBOL$2}, {
        Symbol: $Symbol
    });

    $forEach(objectKeys$1(WellKnownSymbolsStore$1), function (name) {
        defineWellKnownSymbol$l(name);
    });

    $$c({target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$2}, {
        useSetter: function () {
            USE_SETTER = true;
        },
        useSimple: function () {
            USE_SETTER = false;
        }
    });

    $$c({target: 'Object', stat: true, forced: !NATIVE_SYMBOL$2, sham: !DESCRIPTORS$1}, {
        // `Object.create` method
        // https://tc39.es/ecma262/#sec-object.create
        create: $create,
        // `Object.defineProperty` method
        // https://tc39.es/ecma262/#sec-object.defineproperty
        defineProperty: $defineProperty,
        // `Object.defineProperties` method
        // https://tc39.es/ecma262/#sec-object.defineproperties
        defineProperties: $defineProperties,
        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor
    });

    $$c({target: 'Object', stat: true, forced: !NATIVE_SYMBOL$2}, {
        // `Object.getOwnPropertyNames` method
        // https://tc39.es/ecma262/#sec-object.getownpropertynames
        getOwnPropertyNames: $getOwnPropertyNames
    });

    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    defineSymbolToPrimitive$1();

    // `Symbol.prototype[@@toStringTag]` property
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
    setToStringTag$2($Symbol, SYMBOL);

    hiddenKeys[HIDDEN] = true;

    var NATIVE_SYMBOL$1 = symbolConstructorDetection;

    /* eslint-disable es/no-symbol -- safe */
    var symbolRegistryDetection = NATIVE_SYMBOL$1 && !!Symbol['for'] && !!Symbol.keyFor;

    var $$b = _export;
    var getBuiltIn$3 = getBuiltIn$f;
    var hasOwn$1 = hasOwnProperty_1;
    var toString$1 = toString$c;
    var shared$2 = sharedExports;
    var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

    var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
    var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    $$b({target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1}, {
        'for': function (key) {
            var string = toString$1(key);
            if (hasOwn$1(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
            var symbol = getBuiltIn$3('Symbol')(string);
            StringToSymbolRegistry[string] = symbol;
            SymbolToStringRegistry$1[symbol] = string;
            return symbol;
        }
    });

    var $$a = _export;
    var hasOwn = hasOwnProperty_1;
    var isSymbol$1 = isSymbol$5;
    var tryToString = tryToString$6;
    var shared$1 = sharedExports;
    var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

    var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    $$a({target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY}, {
        keyFor: function keyFor(sym) {
            if (!isSymbol$1(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol');
            if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
        }
    });

    var $$9 = _export;
    var NATIVE_SYMBOL = symbolConstructorDetection;
    var fails$2 = fails$v;
    var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
    var toObject$3 = toObject$a;

    // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
    // https://bugs.chromium.org/p/v8/issues/detail?id=3443
    var FORCED$1 = !NATIVE_SYMBOL || fails$2(function () {
        getOwnPropertySymbolsModule.f(1);
    });

    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    $$9({target: 'Object', stat: true, forced: FORCED$1}, {
        getOwnPropertySymbols: function getOwnPropertySymbols(it) {
            var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$3(it)) : [];
        }
    });

    var defineWellKnownSymbol$k = wellKnownSymbolDefine;

    // `Symbol.asyncIterator` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.asynciterator
    defineWellKnownSymbol$k('asyncIterator');

    var defineWellKnownSymbol$j = wellKnownSymbolDefine;

    // `Symbol.hasInstance` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.hasinstance
    defineWellKnownSymbol$j('hasInstance');

    var defineWellKnownSymbol$i = wellKnownSymbolDefine;

    // `Symbol.isConcatSpreadable` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
    defineWellKnownSymbol$i('isConcatSpreadable');

    var defineWellKnownSymbol$h = wellKnownSymbolDefine;

    // `Symbol.iterator` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.iterator
    defineWellKnownSymbol$h('iterator');

    var defineWellKnownSymbol$g = wellKnownSymbolDefine;

    // `Symbol.match` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.match
    defineWellKnownSymbol$g('match');

    var defineWellKnownSymbol$f = wellKnownSymbolDefine;

    // `Symbol.matchAll` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.matchall
    defineWellKnownSymbol$f('matchAll');

    var defineWellKnownSymbol$e = wellKnownSymbolDefine;

    // `Symbol.replace` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.replace
    defineWellKnownSymbol$e('replace');

    var defineWellKnownSymbol$d = wellKnownSymbolDefine;

    // `Symbol.search` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.search
    defineWellKnownSymbol$d('search');

    var defineWellKnownSymbol$c = wellKnownSymbolDefine;

    // `Symbol.species` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.species
    defineWellKnownSymbol$c('species');

    var defineWellKnownSymbol$b = wellKnownSymbolDefine;

    // `Symbol.split` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.split
    defineWellKnownSymbol$b('split');

    var defineWellKnownSymbol$a = wellKnownSymbolDefine;
    var defineSymbolToPrimitive = symbolDefineToPrimitive;

    // `Symbol.toPrimitive` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.toprimitive
    defineWellKnownSymbol$a('toPrimitive');

    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    defineSymbolToPrimitive();

    var getBuiltIn$2 = getBuiltIn$f;
    var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
    var setToStringTag$1 = setToStringTag$8;

    // `Symbol.toStringTag` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.tostringtag
    defineWellKnownSymbol$9('toStringTag');

    // `Symbol.prototype[@@toStringTag]` property
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
    setToStringTag$1(getBuiltIn$2('Symbol'), 'Symbol');

    var defineWellKnownSymbol$8 = wellKnownSymbolDefine;

    // `Symbol.unscopables` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.unscopables
    defineWellKnownSymbol$8('unscopables');

    var global$2 = global$u;
    var setToStringTag = setToStringTag$8;

    // JSON[@@toStringTag] property
    // https://tc39.es/ecma262/#sec-json-@@tostringtag
    setToStringTag(global$2.JSON, 'JSON', true);

    var path$2 = path$j;

    var symbol$4 = path$2.Symbol;

    var parent$f = symbol$4;


    var symbol$3 = parent$f;

    var wellKnownSymbol$1 = wellKnownSymbol$o;
    var defineProperty = objectDefineProperty.f;

    var METADATA = wellKnownSymbol$1('metadata');
    var FunctionPrototype = Function.prototype;

    // Function.prototype[@@metadata]
    // https://github.com/tc39/proposal-decorator-metadata
    if (FunctionPrototype[METADATA] === undefined) {
        defineProperty(FunctionPrototype, METADATA, {
            value: null
        });
    }

    var defineWellKnownSymbol$7 = wellKnownSymbolDefine;

    // `Symbol.asyncDispose` well-known symbol
    // https://github.com/tc39/proposal-async-explicit-resource-management
    defineWellKnownSymbol$7('asyncDispose');

    var defineWellKnownSymbol$6 = wellKnownSymbolDefine;

    // `Symbol.dispose` well-known symbol
    // https://github.com/tc39/proposal-explicit-resource-management
    defineWellKnownSymbol$6('dispose');

    var defineWellKnownSymbol$5 = wellKnownSymbolDefine;

    // `Symbol.metadata` well-known symbol
    // https://github.com/tc39/proposal-decorators
    defineWellKnownSymbol$5('metadata');

    var parent$e = symbol$3;


    var symbol$2 = parent$e;

    var getBuiltIn$1 = getBuiltIn$f;
    var uncurryThis$3 = functionUncurryThis;

    var Symbol$2 = getBuiltIn$1('Symbol');
    var keyFor = Symbol$2.keyFor;
    var thisSymbolValue$1 = uncurryThis$3(Symbol$2.prototype.valueOf);

    // `Symbol.isRegisteredSymbol` method
    // https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
    var symbolIsRegistered = Symbol$2.isRegisteredSymbol || function isRegisteredSymbol(value) {
        try {
            return keyFor(thisSymbolValue$1(value)) !== undefined;
        } catch (error) {
            return false;
        }
    };

    var $$8 = _export;
    var isRegisteredSymbol$1 = symbolIsRegistered;

    // `Symbol.isRegisteredSymbol` method
    // https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
    $$8({target: 'Symbol', stat: true}, {
        isRegisteredSymbol: isRegisteredSymbol$1
    });

    var shared = sharedExports;
    var getBuiltIn = getBuiltIn$f;
    var uncurryThis$2 = functionUncurryThis;
    var isSymbol = isSymbol$5;
    var wellKnownSymbol = wellKnownSymbol$o;

    var Symbol$1 = getBuiltIn('Symbol');
    var $isWellKnownSymbol = Symbol$1.isWellKnownSymbol;
    var getOwnPropertyNames = getBuiltIn('Object', 'getOwnPropertyNames');
    var thisSymbolValue = uncurryThis$2(Symbol$1.prototype.valueOf);
    var WellKnownSymbolsStore = shared('wks');

    for (var i = 0, symbolKeys = getOwnPropertyNames(Symbol$1), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
        // some old engines throws on access to some keys like `arguments` or `caller`
        try {
            var symbolKey = symbolKeys[i];
            if (isSymbol(Symbol$1[symbolKey])) wellKnownSymbol(symbolKey);
        } catch (error) { /* empty */
        }
    }

    // `Symbol.isWellKnownSymbol` method
    // https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
    // We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
    var symbolIsWellKnown = function isWellKnownSymbol(value) {
        if ($isWellKnownSymbol && $isWellKnownSymbol(value)) return true;
        try {
            var symbol = thisSymbolValue(value);
            for (var j = 0, keys = getOwnPropertyNames(WellKnownSymbolsStore), keysLength = keys.length; j < keysLength; j++) {
                // eslint-disable-next-line eqeqeq -- polyfilled symbols case
                if (WellKnownSymbolsStore[keys[j]] == symbol) return true;
            }
        } catch (error) { /* empty */
        }
        return false;
    };

    var $$7 = _export;
    var isWellKnownSymbol$1 = symbolIsWellKnown;

    // `Symbol.isWellKnownSymbol` method
    // https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
    // We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
    $$7({target: 'Symbol', stat: true, forced: true}, {
        isWellKnownSymbol: isWellKnownSymbol$1
    });

    var defineWellKnownSymbol$4 = wellKnownSymbolDefine;

    // `Symbol.matcher` well-known symbol
    // https://github.com/tc39/proposal-pattern-matching
    defineWellKnownSymbol$4('matcher');

    var defineWellKnownSymbol$3 = wellKnownSymbolDefine;

    // `Symbol.observable` well-known symbol
    // https://github.com/tc39/proposal-observable
    defineWellKnownSymbol$3('observable');

    var $$6 = _export;
    var isRegisteredSymbol = symbolIsRegistered;

    // `Symbol.isRegistered` method
    // obsolete version of https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregisteredsymbol
    $$6({target: 'Symbol', stat: true, name: 'isRegisteredSymbol'}, {
        isRegistered: isRegisteredSymbol
    });

    var $$5 = _export;
    var isWellKnownSymbol = symbolIsWellKnown;

    // `Symbol.isWellKnown` method
    // obsolete version of https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknownsymbol
    // We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
    $$5({target: 'Symbol', stat: true, name: 'isWellKnownSymbol', forced: true}, {
        isWellKnown: isWellKnownSymbol
    });

    // TODO: Remove from `core-js@4`
    var defineWellKnownSymbol$2 = wellKnownSymbolDefine;

    // `Symbol.metadataKey` well-known symbol
    // https://github.com/tc39/proposal-decorator-metadata
    defineWellKnownSymbol$2('metadataKey');

    // TODO: remove from `core-js@4`
    var defineWellKnownSymbol$1 = wellKnownSymbolDefine;

    // `Symbol.patternMatch` well-known symbol
    // https://github.com/tc39/proposal-pattern-matching
    defineWellKnownSymbol$1('patternMatch');

    // TODO: remove from `core-js@4`
    var defineWellKnownSymbol = wellKnownSymbolDefine;

    defineWellKnownSymbol('replaceAll');

    var parent$d = symbol$2;


    // TODO: Remove from `core-js@4`


    var symbol$1 = parent$d;

    var symbol = symbol$1;

    var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol);

    var WrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;

    var iterator$4 = WrappedWellKnownSymbolModule$1.f('iterator');

    var parent$c = iterator$4;


    var iterator$3 = parent$c;

    var parent$b = iterator$3;

    var iterator$2 = parent$b;

    var parent$a = iterator$2;

    var iterator$1 = parent$a;

    var iterator = iterator$1;

    var _Symbol$iterator = /*@__PURE__*/getDefaultExportFromCjs(iterator);

    function _typeof(o) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (o) {
            return typeof o;
        } : function (o) {
            return o && "function" == typeof _Symbol && o.constructor === _Symbol && o !== _Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }

    var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;

    var toPrimitive$5 = WrappedWellKnownSymbolModule.f('toPrimitive');

    var parent$9 = toPrimitive$5;

    var toPrimitive$4 = parent$9;

    var parent$8 = toPrimitive$4;

    var toPrimitive$3 = parent$8;

    var parent$7 = toPrimitive$3;

    var toPrimitive$2 = parent$7;

    var toPrimitive$1 = toPrimitive$2;

    var _Symbol$toPrimitive = /*@__PURE__*/getDefaultExportFromCjs(toPrimitive$1);

    function toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t) return t;
        var e = t[_Symbol$toPrimitive];
        if (void 0 !== e) {
            var i = e.call(t, r || "default");
            if ("object" != _typeof(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
    }

    function toPropertyKey(t) {
        var i = toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : String(i);
    }

    function _defineProperty(obj, key, value) {
        key = toPropertyKey(key);
        if (key in obj) {
            _Object$defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }

    var arraySlice = arraySlice$5;

    var floor = Math.floor;

    var sort$4 = function (array, comparefn) {
        var length = array.length;

        if (length < 8) {
            // insertion sort
            var i = 1;
            var element, j;

            while (i < length) {
                j = i;
                element = array[i];
                while (j && comparefn(array[j - 1], element) > 0) {
                    array[j] = array[--j];
                }
                if (j !== i++) array[j] = element;
            }
        } else {
            // merge sort
            var middle = floor(length / 2);
            var left = sort$4(arraySlice(array, 0, middle), comparefn);
            var right = sort$4(arraySlice(array, middle), comparefn);
            var llength = left.length;
            var rlength = right.length;
            var lindex = 0;
            var rindex = 0;

            while (lindex < llength || rindex < rlength) {
                array[lindex + rindex] = (lindex < llength && rindex < rlength)
                    ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
                    : lindex < llength ? left[lindex++] : right[rindex++];
            }
        }

        return array;
    };

    var arraySort = sort$4;

    var userAgent$1 = engineUserAgent;

    var firefox = userAgent$1.match(/firefox\/(\d+)/i);

    var engineFfVersion = !!firefox && +firefox[1];

    var UA = engineUserAgent;

    var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

    var userAgent = engineUserAgent;

    var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

    var engineWebkitVersion = !!webkit && +webkit[1];

    var $$4 = _export;
    var uncurryThis$1 = functionUncurryThis;
    var aCallable = aCallable$c;
    var toObject$2 = toObject$a;
    var lengthOfArrayLike$2 = lengthOfArrayLike$9;
    var deletePropertyOrThrow = deletePropertyOrThrow$2;
    var toString = toString$c;
    var fails$1 = fails$v;
    var internalSort = arraySort;
    var arrayMethodIsStrict = arrayMethodIsStrict$4;
    var FF = engineFfVersion;
    var IE_OR_EDGE = engineIsIeOrEdge;
    var V8 = engineV8Version;
    var WEBKIT = engineWebkitVersion;

    var test = [];
    var nativeSort = uncurryThis$1(test.sort);
    var push$1 = uncurryThis$1(test.push);

    // IE8-
    var FAILS_ON_UNDEFINED = fails$1(function () {
        test.sort(undefined);
    });
    // V8 bug
    var FAILS_ON_NULL = fails$1(function () {
        test.sort(null);
    });
    // Old WebKit
    var STRICT_METHOD = arrayMethodIsStrict('sort');

    var STABLE_SORT = !fails$1(function () {
        // feature detection can be too slow, so check engines versions
        if (V8) return V8 < 70;
        if (FF && FF > 3) return;
        if (IE_OR_EDGE) return true;
        if (WEBKIT) return WEBKIT < 603;

        var result = '';
        var code, chr, value, index;

        // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
        for (code = 65; code < 76; code++) {
            chr = String.fromCharCode(code);

            switch (code) {
                case 66:
                case 69:
                case 70:
                case 72:
                    value = 3;
                    break;
                case 68:
                case 71:
                    value = 4;
                    break;
                default:
                    value = 2;
            }

            for (index = 0; index < 47; index++) {
                test.push({k: chr + index, v: value});
            }
        }

        test.sort(function (a, b) {
            return b.v - a.v;
        });

        for (index = 0; index < test.length; index++) {
            chr = test[index].k.charAt(0);
            if (result.charAt(result.length - 1) !== chr) result += chr;
        }

        return result !== 'DGBEFHACIJK';
    });

    var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

    var getSortCompare = function (comparefn) {
        return function (x, y) {
            if (y === undefined) return -1;
            if (x === undefined) return 1;
            if (comparefn !== undefined) return +comparefn(x, y) || 0;
            return toString(x) > toString(y) ? 1 : -1;
        };
    };

    // `Array.prototype.sort` method
    // https://tc39.es/ecma262/#sec-array.prototype.sort
    $$4({target: 'Array', proto: true, forced: FORCED}, {
        sort: function sort(comparefn) {
            if (comparefn !== undefined) aCallable(comparefn);

            var array = toObject$2(this);

            if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

            var items = [];
            var arrayLength = lengthOfArrayLike$2(array);
            var itemsLength, index;

            for (index = 0; index < arrayLength; index++) {
                if (index in array) push$1(items, array[index]);
            }

            internalSort(items, getSortCompare(comparefn));

            itemsLength = lengthOfArrayLike$2(items);
            index = 0;

            while (index < itemsLength) array[index] = items[index++];
            while (index < arrayLength) deletePropertyOrThrow(array, index++);

            return array;
        }
    });

    var getBuiltInPrototypeMethod$1 = getBuiltInPrototypeMethod$f;

    var sort$3 = getBuiltInPrototypeMethod$1('Array', 'sort');

    var isPrototypeOf$1 = objectIsPrototypeOf;
    var method$1 = sort$3;

    var ArrayPrototype$1 = Array.prototype;

    var sort$2 = function (it) {
        var own = it.sort;
        return it === ArrayPrototype$1 || (isPrototypeOf$1(ArrayPrototype$1, it) && own === ArrayPrototype$1.sort) ? method$1 : own;
    };

    var parent$6 = sort$2;

    var sort$1 = parent$6;

    var sort = sort$1;

    var _sortInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(sort);

    var anObject = anObject$d;
    var iteratorClose = iteratorClose$2;

    // call something on iterator step with safe closing on error
    var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
        try {
            return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (error) {
            iteratorClose(iterator, 'throw', error);
        }
    };

    var bind$1 = functionBindContext;
    var call = functionCall;
    var toObject$1 = toObject$a;
    var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
    var isArrayIteratorMethod = isArrayIteratorMethod$2;
    var isConstructor = isConstructor$4;
    var lengthOfArrayLike$1 = lengthOfArrayLike$9;
    var createProperty = createProperty$4;
    var getIterator = getIterator$2;
    var getIteratorMethod = getIteratorMethod$3;

    var $Array = Array;

    // `Array.from` method implementation
    // https://tc39.es/ecma262/#sec-array.from
    var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
        var O = toObject$1(arrayLike);
        var IS_CONSTRUCTOR = isConstructor(this);
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        if (mapping) mapfn = bind$1(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
        var iteratorMethod = getIteratorMethod(O);
        var index = 0;
        var length, result, step, iterator, next, value;
        // if the target is not iterable or it's an array with the default iterator - use a simple case
        if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
            iterator = getIterator(O, iteratorMethod);
            next = iterator.next;
            result = IS_CONSTRUCTOR ? new this() : [];
            for (; !(step = call(next, iterator)).done; index++) {
                value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
                createProperty(result, index, value);
            }
        } else {
            length = lengthOfArrayLike$1(O);
            result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
            for (; length > index; index++) {
                value = mapping ? mapfn(O[index], index) : O[index];
                createProperty(result, index, value);
            }
        }
        result.length = index;
        return result;
    };

    var $$3 = _export;
    var from$3 = arrayFrom;
    var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;

    var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
        // eslint-disable-next-line es/no-array-from -- required for testing
        Array.from(iterable);
    });

    // `Array.from` method
    // https://tc39.es/ecma262/#sec-array.from
    $$3({target: 'Array', stat: true, forced: INCORRECT_ITERATION}, {
        from: from$3
    });

    var path$1 = path$j;

    var from$2 = path$1.Array.from;

    var parent$5 = from$2;

    var from$1 = parent$5;

    var from = from$1;

    var _Array$from = /*@__PURE__*/getDefaultExportFromCjs(from);

    var $$2 = _export;
    var global$1 = global$u;

    // `globalThis` object
    // https://tc39.es/ecma262/#sec-globalthis
    $$2({global: true, forced: global$1.globalThis !== global$1}, {
        globalThis: global$1
    });

    var globalThis$6 = global$u;

    var parent$4 = globalThis$6;

    var globalThis$5 = parent$4;

    var parent$3 = globalThis$5;

    var globalThis$4 = parent$3;

    // TODO: remove from `core-js@4`


    var parent$2 = globalThis$4;

    var globalThis$3 = parent$2;

    var globalThis$2 = globalThis$3;

    var globalThis$1 = globalThis$2;

    var _globalThis = /*@__PURE__*/getDefaultExportFromCjs(globalThis$1);

    /** @type {typeof globalThis} */
    const globals = typeof window !== 'undefined' ? window : typeof _globalThis !== 'undefined' ? _globalThis :
        // @ts-ignore Node typings have this
        global;

    // Needs to be written like this to pass the tree-shake-test
    'WeakMap' in globals ? new _WeakMap() : undefined;

    /**
     * @param {Node} target
     * @param {Node} node
     * @returns {void}
     */
    function append(target, node) {
        target.appendChild(node);
    }

    /**
     * @param {Node} node
     * @returns {ShadowRoot | Document}
     */
    function get_root_for_style(node) {
        if (!node) return document;
        const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
        if (root && /** @type {ShadowRoot} */root.host) {
            return /** @type {ShadowRoot} */root;
        }
        return node.ownerDocument;
    }

    /**
     * @param {Node} node
     * @returns {CSSStyleSheet}
     */
    function append_empty_stylesheet(node) {
        const style_element = element('style');
        // For transitions to work without 'style-src: unsafe-inline' Content Security Policy,
        // these empty tags need to be allowed with a hash as a workaround until we move to the Web Animations API.
        // Using the hash for the empty string (for an empty tag) works in all browsers except Safari.
        // So as a workaround for the workaround, when we append empty style tags we set their content to /* empty */.
        // The hash 'sha256-9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=' will then work even in Safari.
        style_element.textContent = '/* empty */';
        append_stylesheet(get_root_for_style(node), style_element);
        return style_element.sheet;
    }

    /**
     * @param {ShadowRoot | Document} node
     * @param {HTMLStyleElement} style
     * @returns {CSSStyleSheet}
     */
    function append_stylesheet(node, style) {
        append( /** @type {Document} */node.head || node, style);
        return style.sheet;
    }

    /**
     * @param {Node} target
     * @param {Node} node
     * @param {Node} [anchor]
     * @returns {void}
     */
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }

    /**
     * @param {Node} node
     * @returns {void}
     */
    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }

    /**
     * @returns {void} */
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i]) iterations[i].d(detaching);
        }
    }

    /**
     * @template {keyof HTMLElementTagNameMap} K
     * @param {K} name
     * @returns {HTMLElementTagNameMap[K]}
     */
    function element(name) {
        return document.createElement(name);
    }

    /**
     * @param {string} data
     * @returns {Text}
     */
    function text(data) {
        return document.createTextNode(data);
    }

    /**
     * @returns {Text} */
    function space() {
        return text(' ');
    }

    /**
     * @returns {Text} */
    function empty() {
        return text('');
    }

    /**
     * @param {EventTarget} node
     * @param {string} event
     * @param {EventListenerOrEventListenerObject} handler
     * @param {boolean | AddEventListenerOptions | EventListenerOptions} [options]
     * @returns {() => void}
     */
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }

    /**
     * @param {Element} node
     * @param {string} attribute
     * @param {string} [value]
     * @returns {void}
     */
    function attr(node, attribute, value) {
        if (value == null) node.removeAttribute(attribute); else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
    }

    /**
     * @param {Element} element
     * @returns {ChildNode[]}
     */
    function children(element) {
        return _Array$from(element.childNodes);
    }

    /**
     * @param {Text} text
     * @param {unknown} data
     * @returns {void}
     */
    function set_data(text, data) {
        data = '' + data;
        if (text.data === data) return;
        text.data = /** @type {string} */data;
    }

    /**
     * @returns {void} */
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }

    /**
     * @returns {void} */
    function select_option(select, value, mounting) {
        for (let i = 0; i < select.options.length; i += 1) {
            const option = select.options[i];
            if (option.__value === value) {
                option.selected = true;
                return;
            }
        }
        if (!mounting || value !== undefined) {
            select.selectedIndex = -1; // no option should be selected
        }
    }

    function select_value(select) {
        const selected_option = select.querySelector(':checked');
        return selected_option && selected_option.__value;
    }

    /**
     * @template T
     * @param {string} type
     * @param {T} [detail]
     * @param {{ bubbles?: boolean, cancelable?: boolean }} [options]
     * @returns {CustomEvent<T>}
     */
    function custom_event(type, detail) {
        let {
            bubbles = false,
            cancelable = false
        } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return new CustomEvent(type, {
            detail,
            bubbles,
            cancelable
        });
    }

    /**
     * @typedef {Node & {
     *    claim_order?: number;
     *    hydrate_init?: true;
     *    actual_end_child?: NodeEx;
     *    childNodes: NodeListOf<NodeEx>;
     * }} NodeEx
     */

    /** @typedef {ChildNode & NodeEx} ChildNodeEx */

    /** @typedef {NodeEx & { claim_order: number }} NodeEx2 */

    /**
     * @typedef {ChildNodeEx[] & {
     *    claim_info?: {
     *        last_index: number;
     *        total_claimed: number;
     *    };
     * }} ChildNodeArray
     */

    // we need to store the information for multiple documents because a Svelte application could also contain iframes
    // https://github.com/sveltejs/svelte/issues/3624
    /** @type {Map<Document | ShadowRoot, import('./private.d.ts').StyleInformation>} */
    const managed_styles = new _Map();
    let active = 0;

    // https://github.com/darkskyapp/string-hash/blob/master/index.js
    /**
     * @param {string} str
     * @returns {number}
     */
    function hash(str) {
        let hash = 5381;
        let i = str.length;
        while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);
        return hash >>> 0;
    }

    /**
     * @param {Document | ShadowRoot} doc
     * @param {Element & ElementCSSInlineStyle} node
     * @returns {{ stylesheet: any; rules: {}; }}
     */
    function create_style_information(doc, node) {
        const info = {
            stylesheet: append_empty_stylesheet(node),
            rules: {}
        };
        managed_styles.set(doc, info);
        return info;
    }

    /**
     * @param {Element & ElementCSSInlineStyle} node
     * @param {number} a
     * @param {number} b
     * @param {number} duration
     * @param {number} delay
     * @param {(t: number) => number} ease
     * @param {(t: number, u: number) => string} fn
     * @param {number} uid
     * @returns {string}
     */
    function create_rule(node, a, b, duration, delay, ease, fn) {
        var _context, _context3, _context4, _context5;
        let uid = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
        const step = 16.666 / duration;
        let keyframes = '{\n';
        for (let p = 0; p <= 1; p += step) {
            const t = a + (b - a) * ease(p);
            keyframes += p * 100 + "%{".concat(fn(t, 1 - t), "}\n");
        }
        const rule = keyframes + "100% {".concat(fn(b, 1 - b), "}\n}");
        const name = _concatInstanceProperty(_context = "__svelte_".concat(hash(rule), "_")).call(_context, uid);
        const doc = get_root_for_style(node);
        const {
            stylesheet,
            rules
        } = managed_styles.get(doc) || create_style_information(doc, node);
        if (!rules[name]) {
            var _context2;
            rules[name] = true;
            stylesheet.insertRule(_concatInstanceProperty(_context2 = "@keyframes ".concat(name, " ")).call(_context2, rule), stylesheet.cssRules.length);
        }
        const animation = node.style.animation || '';
        node.style.animation = _concatInstanceProperty(_context3 = _concatInstanceProperty(_context4 = _concatInstanceProperty(_context5 = "".concat(animation ? "".concat(animation, ", ") : '')).call(_context5, name, " ")).call(_context4, duration, "ms linear ")).call(_context3, delay, "ms 1 both");
        active += 1;
        return name;
    }

    /**
     * @param {Element & ElementCSSInlineStyle} node
     * @param {string} [name]
     * @returns {void}
     */
    function delete_rule(node, name) {
        const previous = (node.style.animation || '').split(', ');
        const next = _filterInstanceProperty(previous).call(previous, name ? anim => _indexOfInstanceProperty(anim).call(anim, name) < 0 // remove specific animation
            : anim => _indexOfInstanceProperty(anim).call(anim, '__svelte') === -1 // remove all Svelte animations
        );
        const deleted = previous.length - next.length;
        if (deleted) {
            node.style.animation = next.join(', ');
            active -= deleted;
            if (!active) clear_rules();
        }
    }

    /** @returns {void} */
    function clear_rules() {
        raf(() => {
            if (active) return;
            _forEachInstanceProperty(managed_styles).call(managed_styles, info => {
                const {
                    ownerNode
                } = info.stylesheet;
                // there is no ownerNode if it runs on jsdom.
                if (ownerNode) detach(ownerNode);
            });
            managed_styles.clear();
        });
    }

    let current_component;

    /** @returns {void} */
    function set_current_component(component) {
        current_component = component;
    }

    function get_current_component() {
        if (!current_component) throw new Error('Function called outside component initialization');
        return current_component;
    }

    /**
     * Creates an event dispatcher that can be used to dispatch [component events](https://svelte.dev/docs#template-syntax-component-directives-on-eventname).
     * Event dispatchers are functions that can take two arguments: `name` and `detail`.
     *
     * Component events created with `createEventDispatcher` create a
     * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
     * These events do not [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).
     * The `detail` argument corresponds to the [CustomEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
     * property and can contain any type of data.
     *
     * The event dispatcher can be typed to narrow the allowed event names and the type of the `detail` argument:
     * ```ts
     * const dispatch = createEventDispatcher<{
     *  loaded: never; // does not take a detail argument
     *  change: string; // takes a detail argument of type string, which is required
     *  optional: number | null; // takes an optional detail argument of type number
     * }>();
     * ```
     *
     * https://svelte.dev/docs/svelte#createeventdispatcher
     * @template {Record<string, any>} [EventMap=any]
     * @returns {import('./public.js').EventDispatcher<EventMap>}
     */
    function createEventDispatcher() {
        const component = get_current_component();
        return function (type, detail) {
            let {
                cancelable = false
            } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            const callbacks = component.$$.callbacks[type];
            if (callbacks) {
                var _context;
                // TODO are there situations where events could be dispatched
                // in a server (non-DOM) environment?
                const event = custom_event( /** @type {string} */type, detail, {
                    cancelable
                });
                _forEachInstanceProperty(_context = _sliceInstanceProperty(callbacks).call(callbacks)).call(_context, fn => {
                    fn.call(component, event);
                });
                return !event.defaultPrevented;
            }
            return true;
        };
    }

    const dirty_components = [];
    const binding_callbacks = [];
    let render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = /* @__PURE__ */_Promise.resolve();
    let update_scheduled = false;

    /** @returns {void} */
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }

    /** @returns {Promise<void>} */
    function tick() {
        schedule_update();
        return resolved_promise;
    }

    /** @returns {void} */
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }

    /** @returns {void} */
    function add_flush_callback(fn) {
        flush_callbacks.push(fn);
    }

    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new _Set();
    let flushidx = 0; // Do *not* move this inside the flush() function

    /** @returns {void} */
    function flush() {
        // Do not reenter flush while dirty components are updated, as this can
        // result in an infinite loop. Instead, let the inner flush handle it.
        // Reentrancy is ok afterwards for bindings etc.
        if (flushidx !== 0) {
            return;
        }
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            try {
                while (flushidx < dirty_components.length) {
                    const component = dirty_components[flushidx];
                    flushidx++;
                    set_current_component(component);
                    update(component.$$);
                }
            } catch (e) {
                // reset dirty state to not end up in a deadlocked state and then rethrow
                dirty_components.length = 0;
                flushidx = 0;
                throw e;
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length) binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }

    /** @returns {void} */
    function update($$) {
        if ($$.fragment !== null) {
            var _context;
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            _forEachInstanceProperty(_context = $$.after_update).call(_context, add_render_callback);
        }
    }

    /**
     * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
     * @param {Function[]} fns
     * @returns {void}
     */
    function flush_render_callbacks(fns) {
        const filtered = [];
        const targets = [];
        _forEachInstanceProperty(render_callbacks).call(render_callbacks, c => _indexOfInstanceProperty(fns).call(fns, c) === -1 ? filtered.push(c) : targets.push(c));
        _forEachInstanceProperty(targets).call(targets, c => c());
        render_callbacks = filtered;
    }

    /**
     * @type {Promise<void> | null}
     */
    let promise;

    /**
     * @returns {Promise<void>}
     */
    function wait() {
        if (!promise) {
            promise = _Promise.resolve();
            promise.then(() => {
                promise = null;
            });
        }
        return promise;
    }

    /**
     * @param {Element} node
     * @param {INTRO | OUTRO | boolean} direction
     * @param {'start' | 'end'} kind
     * @returns {void}
     */
    function dispatch(node, direction, kind) {
        var _context;
        node.dispatchEvent(custom_event(_concatInstanceProperty(_context = "".concat(direction ? 'intro' : 'outro')).call(_context, kind)));
    }

    const outroing = new _Set();

    /**
     * @type {Outro}
     */
    let outros;

    /**
     * @returns {void} */
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }

    /**
     * @returns {void} */
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }

    /**
     * @param {import('./private.js').Fragment} block
     * @param {0 | 1} [local]
     * @returns {void}
     */
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }

    /**
     * @param {import('./private.js').Fragment} block
     * @param {0 | 1} local
     * @param {0 | 1} [detach]
     * @param {() => void} [callback]
     * @returns {void}
     */
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block)) return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach) block.d(1);
                    callback();
                }
            });
            block.o(local);
        } else if (callback) {
            callback();
        }
    }

    /**
     * @type {import('../transition/public.js').TransitionConfig}
     */
    const null_transition = {
        duration: 0
    };

    /**
     * @param {Element & ElementCSSInlineStyle} node
     * @param {TransitionFn} fn
     * @param {any} params
     * @param {boolean} intro
     * @returns {{ run(b: 0 | 1): void; end(): void; }}
     */
    function create_bidirectional_transition(node, fn, params, intro) {
        /**
         * @type {TransitionOptions} */
        const options = {
            direction: 'both'
        };
        let config = fn(node, params, options);
        let t = intro ? 0 : 1;

        /**
         * @type {Program | null} */
        let running_program = null;

        /**
         * @type {PendingProgram | null} */
        let pending_program = null;
        let animation_name = null;

        /** @type {boolean} */
        let original_inert_value;

        /**
         * @returns {void} */
        function clear_animation() {
            if (animation_name) delete_rule(node, animation_name);
        }

        /**
         * @param {PendingProgram} program
         * @param {number} duration
         * @returns {Program}
         */
        function init(program, duration) {
            const d = /** @type {Program['d']} */program.b - t;
            duration *= Math.abs(d);
            return {
                a: t,
                b: program.b,
                d,
                duration,
                start: program.start,
                end: program.start + duration,
                group: program.group
            };
        }

        /**
         * @param {INTRO | OUTRO} b
         * @returns {void}
         */
        function go(b) {
            const {
                delay = 0,
                duration = 300,
                easing = identity,
                tick = noop,
                css
            } = config || null_transition;

            /**
             * @type {PendingProgram} */
            const program = {
                start: now() + delay,
                b
            };
            if (!b) {
                // @ts-ignore todo: improve typings
                program.group = outros;
                outros.r += 1;
            }
            if ('inert' in node) {
                if (b) {
                    if (original_inert_value !== undefined) {
                        // aborted/reversed outro — restore previous inert value
                        node.inert = original_inert_value;
                    }
                } else {
                    original_inert_value = /** @type {HTMLElement} */node.inert;
                    node.inert = true;
                }
            }
            if (running_program || pending_program) {
                pending_program = program;
            } else {
                // if this is an intro, and there's a delay, we need to do
                // an initial tick and/or apply CSS animation immediately
                if (css) {
                    clear_animation();
                    animation_name = create_rule(node, t, b, duration, delay, easing, css);
                }
                if (b) tick(0, 1);
                running_program = init(program, duration);
                add_render_callback(() => dispatch(node, b, 'start'));
                loop(now => {
                    if (pending_program && now > pending_program.start) {
                        running_program = init(pending_program, duration);
                        pending_program = null;
                        dispatch(node, running_program.b, 'start');
                        if (css) {
                            clear_animation();
                            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                        }
                    }
                    if (running_program) {
                        if (now >= running_program.end) {
                            tick(t = running_program.b, 1 - t);
                            dispatch(node, running_program.b, 'end');
                            if (!pending_program) {
                                // we're done
                                if (running_program.b) {
                                    // intro — we can tidy up immediately
                                    clear_animation();
                                } else {
                                    // outro — needs to be coordinated
                                    if (!--running_program.group.r) run_all(running_program.group.c);
                                }
                            }
                            running_program = null;
                        } else if (now >= running_program.start) {
                            const p = now - running_program.start;
                            t = running_program.a + running_program.d * easing(p / running_program.duration);
                            tick(t, 1 - t);
                        }
                    }
                    return !!(running_program || pending_program);
                });
            }
        }

        return {
            run(b) {
                if (is_function(config)) {
                    wait().then(() => {
                        const opts = {
                            direction: b ? 'in' : 'out'
                        };
                        // @ts-ignore
                        config = config(opts);
                        go(b);
                    });
                } else {
                    go(b);
                }
            },
            end() {
                clear_animation();
                running_program = pending_program = null;
            }
        };
    }

    /** @typedef {1} INTRO */
    /** @typedef {0} OUTRO */
    /** @typedef {{ direction: 'in' | 'out' | 'both' }} TransitionOptions */
    /** @typedef {(node: Element, params: any, options: TransitionOptions) => import('../transition/public.js').TransitionConfig} TransitionFn */

    /**
     * @typedef {Object} Outro
     * @property {number} r
     * @property {Function[]} c
     * @property {Object} p
     */

    /**
     * @typedef {Object} PendingProgram
     * @property {number} start
     * @property {INTRO|OUTRO} b
     * @property {Outro} [group]
     */

    /**
     * @typedef {Object} Program
     * @property {number} a
     * @property {INTRO|OUTRO} b
     * @property {1|-1} d
     * @property {number} duration
     * @property {number} start
     * @property {number} end
     * @property {Outro} [group]
     */

    // general each functions:

    function ensure_array_like(array_like_or_iterator) {
        return (array_like_or_iterator === null || array_like_or_iterator === void 0 ? void 0 : array_like_or_iterator.length) !== undefined ? array_like_or_iterator : _Array$from(array_like_or_iterator);
    }

    /** @returns {void} */
    function outro_and_destroy_block(block, lookup) {
        transition_out(block, 1, 1, () => {
            lookup.delete(block.key);
        });
    }

    /** @returns {any[]} */
    function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
        let o = old_blocks.length;
        let n = list.length;
        let i = o;
        const old_indexes = {};
        while (i--) old_indexes[old_blocks[i].key] = i;
        const new_blocks = [];
        const new_lookup = new _Map();
        const deltas = new _Map();
        const updates = [];
        i = n;
        while (i--) {
            const child_ctx = get_context(ctx, list, i);
            const key = get_key(child_ctx);
            let block = lookup.get(key);
            if (!block) {
                block = create_each_block(key, child_ctx);
                block.c();
            } else if (dynamic) {
                // defer updates until all the DOM shuffling is done
                updates.push(() => block.p(child_ctx, dirty));
            }
            new_lookup.set(key, new_blocks[i] = block);
            if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
        }
        const will_move = new _Set();
        const did_move = new _Set();

        /** @returns {void} */
        function insert(block) {
            transition_in(block, 1);
            block.m(node, next);
            lookup.set(block.key, block);
            next = block.first;
            n--;
        }

        while (o && n) {
            const new_block = new_blocks[n - 1];
            const old_block = old_blocks[o - 1];
            const new_key = new_block.key;
            const old_key = old_block.key;
            if (new_block === old_block) {
                // do nothing
                next = new_block.first;
                o--;
                n--;
            } else if (!new_lookup.has(old_key)) {
                // remove old block
                destroy(old_block, lookup);
                o--;
            } else if (!lookup.has(new_key) || will_move.has(new_key)) {
                insert(new_block);
            } else if (did_move.has(old_key)) {
                o--;
            } else if (deltas.get(new_key) > deltas.get(old_key)) {
                did_move.add(new_key);
                insert(new_block);
            } else {
                will_move.add(old_key);
                o--;
            }
        }
        while (o--) {
            const old_block = old_blocks[o];
            if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
        }
        while (n) insert(new_blocks[n - 1]);
        run_all(updates);
        return new_blocks;
    }

    /** @returns {{}} */
    function get_spread_update(levels, updates) {
        const update = {};
        const to_null_out = {};
        const accounted_for = {
            $$scope: 1
        };
        let i = levels.length;
        while (i--) {
            const o = levels[i];
            const n = updates[i];
            if (n) {
                for (const key in o) {
                    if (!(key in n)) to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            } else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update)) update[key] = undefined;
        }
        return update;
    }

    function get_spread_object(spread_props) {
        return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
    }

    const _boolean_attributes = /** @type {const} */['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'inert', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected'];

    /**
     * List of HTML boolean attributes (e.g. `<input disabled>`).
     * Source: https://html.spec.whatwg.org/multipage/indices.html
     *
     * @type {Set<string>}
     */
    new _Set([..._boolean_attributes]);

    /** @typedef {typeof _boolean_attributes[number]} BooleanAttributes */

    var toObject = toObject$a;
    var toAbsoluteIndex = toAbsoluteIndex$4;
    var lengthOfArrayLike = lengthOfArrayLike$9;

    // `Array.prototype.fill` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.fill
    var arrayFill = function fill(value /* , start = 0, end = @length */) {
        var O = toObject(this);
        var length = lengthOfArrayLike(O);
        var argumentsLength = arguments.length;
        var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
        var end = argumentsLength > 2 ? arguments[2] : undefined;
        var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
        while (endPos > index) O[index++] = value;
        return O;
    };

    var $$1 = _export;
    var fill$4 = arrayFill;

    // `Array.prototype.fill` method
    // https://tc39.es/ecma262/#sec-array.prototype.fill
    $$1({target: 'Array', proto: true}, {
        fill: fill$4
    });

    var getBuiltInPrototypeMethod = getBuiltInPrototypeMethod$f;

    var fill$3 = getBuiltInPrototypeMethod('Array', 'fill');

    var isPrototypeOf = objectIsPrototypeOf;
    var method = fill$3;

    var ArrayPrototype = Array.prototype;

    var fill$2 = function (it) {
        var own = it.fill;
        return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.fill) ? method : own;
    };

    var parent$1 = fill$2;

    var fill$1 = parent$1;

    var fill = fill$1;

    var _fillInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(fill);

    /** @returns {void} */
    function bind(component, name, callback) {
        const index = component.$$.props[name];
        if (index !== undefined) {
            component.$$.bound[index] = callback;
            callback(component.$$.ctx[index]);
        }
    }

    /** @returns {void} */
    function create_component(block) {
        block && block.c();
    }

    /** @returns {void} */
    function mount_component(component, target, anchor) {
        const {
            fragment,
            after_update
        } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            var _context, _context2;
            const new_on_destroy = _filterInstanceProperty(_context = _mapInstanceProperty(_context2 = component.$$.on_mount).call(_context2, run)).call(_context, is_function);
            // if the component was destroyed immediately
            // it will update the `$$.on_destroy` reference to `null`.
            // the destructured on_destroy may still reference to the old array
            if (component.$$.on_destroy) {
                component.$$.on_destroy.push(...new_on_destroy);
            } else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        _forEachInstanceProperty(after_update).call(after_update, add_render_callback);
    }

    /** @returns {void} */
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            flush_render_callbacks($$.after_update);
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }

    /** @returns {void} */
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            var _context3;
            dirty_components.push(component);
            schedule_update();
            _fillInstanceProperty(_context3 = component.$$.dirty).call(_context3, 0);
        }
        component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
    }

    // TODO: Document the other params
    /**
     * @param {SvelteComponent} component
     * @param {import('./public.js').ComponentConstructorOptions} options
     *
     * @param {import('./utils.js')['not_equal']} not_equal Used to compare props and state values.
     * @param {(target: Element | ShadowRoot) => void} [append_styles] Function that appends styles to the DOM when the component is first initialised.
     * This will be the `add_css` function from the compiled component.
     *
     * @returns {void}
     */
    function init(component, options, instance, create_fragment, not_equal, props) {
        let append_styles = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        let dirty = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [-1];
        const parent_component = current_component;
        set_current_component(component);
        /** @type {import('./private.js').T$$} */
        const $$ = component.$$ = {
            fragment: null,
            ctx: [],
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new _Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance ? instance(component, options.props || {}, function (i, ret) {
            const value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
                if (ready) make_dirty(component, i);
            }
            return ret;
        }) : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                // TODO: what is the correct type here?
                // @ts-expect-error
                const nodes = children(options.target);
                $$.fragment && $$.fragment.l(nodes);
                _forEachInstanceProperty(nodes).call(nodes, detach);
            } else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro) transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }

    /**
     * Base class for Svelte components. Used when dev=false.
     *
     * @template {Record<string, any>} [Props=any]
     * @template {Record<string, any>} [Events=any]
     */
    class SvelteComponent {
        constructor() {
            /**
             * ### PRIVATE API
             *
             * Do not use, may change at any time
             *
             * @type {any}
             */
            _defineProperty(this, "$$", undefined);
            /**
             * ### PRIVATE API
             *
             * Do not use, may change at any time
             *
             * @type {any}
             */
            _defineProperty(this, "$$set", undefined);
        }

        /** @returns {void} */
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }

        /**
         * @template {Extract<keyof Events, string>} K
         * @param {K} type
         * @param {((e: Events[K]) => void) | null | undefined} callback
         * @returns {() => void}
         */
        $on(type, callback) {
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
            callbacks.push(callback);
            return () => {
                const index = _indexOfInstanceProperty(callbacks).call(callbacks, callback);
                if (index !== -1) _spliceInstanceProperty(callbacks).call(callbacks, index, 1);
            };
        }

        /**
         * @param {Partial<Props>} props
         * @returns {void}
         */
        $set(props) {
            if (this.$$set && !is_empty(props)) {
                this.$$.skip_bound = true;
                this.$$set(props);
                this.$$.skip_bound = false;
            }
        }
    }

    /**
     * @typedef {Object} CustomElementPropDefinition
     * @property {string} [attribute]
     * @property {boolean} [reflect]
     * @property {'String'|'Boolean'|'Number'|'Array'|'Object'} [type]
     */

        // generated during release, do not modify

    const PUBLIC_VERSION = '4';

    if (typeof window !== 'undefined')
        // @ts-ignore
        (window.__svelte || (window.__svelte = {
            v: new _Set()
        })).v.add(PUBLIC_VERSION);

    var DESCRIPTORS = descriptors;
    var fails = fails$v;
    var uncurryThis = functionUncurryThis;
    var objectGetPrototypeOf = objectGetPrototypeOf$1;
    var objectKeys = objectKeys$3;
    var toIndexedObject = toIndexedObject$9;
    var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

    var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
    var push = uncurryThis([].push);

    // in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
    // of `null` prototype objects
    var IE_BUG = DESCRIPTORS && fails(function () {
        // eslint-disable-next-line es/no-object-create -- safe
        var O = Object.create(null);
        O[2] = 2;
        return !propertyIsEnumerable(O, 2);
    });

    // `Object.{ entries, values }` methods implementation
    var createMethod = function (TO_ENTRIES) {
        return function (it) {
            var O = toIndexedObject(it);
            var keys = objectKeys(O);
            var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
            var length = keys.length;
            var i = 0;
            var result = [];
            var key;
            while (length > i) {
                key = keys[i++];
                if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
                    push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
                }
            }
            return result;
        };
    };

    var objectToArray = {
        // `Object.entries` method
        // https://tc39.es/ecma262/#sec-object.entries
        entries: createMethod(true),
        // `Object.values` method
        // https://tc39.es/ecma262/#sec-object.values
        values: createMethod(false)
    };

    var $ = _export;
    var $values = objectToArray.values;

    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    $({target: 'Object', stat: true}, {
        values: function values(O) {
            return $values(O);
        }
    });

    var path = path$j;

    var values$2 = path.Object.values;

    var parent = values$2;

    var values$1 = parent;

    var values = values$1;

    var _Object$values = /*@__PURE__*/getDefaultExportFromCjs(values);

    /*
  Adapted from https://github.com/mattdesl
  Distributed under MIT License https://github.com/mattdesl/eases/blob/master/LICENSE.md
  */

    /**
     * https://svelte.dev/docs/svelte-easing
     * @param {number} t
     * @returns {number}
     */
    function cubicOut(t) {
        const f = t - 1.0;
        return f * f * f + 1.0;
    }

    /**
     * Slides an element in and out.
     *
     * https://svelte.dev/docs/svelte-transition#slide
     * @param {Element} node
     * @param {import('./public').SlideParams} [params]
     * @returns {import('./public').TransitionConfig}
     */
    function slide(node) {
        let {
            delay = 0,
            duration = 400,
            easing = cubicOut,
            axis = 'y'
        } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const style = getComputedStyle(node);
        const opacity = +style.opacity;
        const primary_property = axis === 'y' ? 'height' : 'width';
        const primary_property_value = _parseFloat$1(style[primary_property]);
        const secondary_properties = axis === 'y' ? ['top', 'bottom'] : ['left', 'right'];
        const capitalized_secondary_properties = _mapInstanceProperty(secondary_properties).call(secondary_properties, e => {
            var _context9;
            return _concatInstanceProperty(_context9 = "".concat(e[0].toUpperCase())).call(_context9, _sliceInstanceProperty(e).call(e, 1));
        });
        const padding_start_value = _parseFloat$1(style["padding".concat(capitalized_secondary_properties[0])]);
        const padding_end_value = _parseFloat$1(style["padding".concat(capitalized_secondary_properties[1])]);
        const margin_start_value = _parseFloat$1(style["margin".concat(capitalized_secondary_properties[0])]);
        const margin_end_value = _parseFloat$1(style["margin".concat(capitalized_secondary_properties[1])]);
        const border_width_start_value = _parseFloat$1(style["border".concat(capitalized_secondary_properties[0], "Width")]);
        const border_width_end_value = _parseFloat$1(style["border".concat(capitalized_secondary_properties[1], "Width")]);
        return {
            delay,
            duration,
            easing,
            css: t => {
                var _context10, _context11, _context12, _context13, _context14, _context15, _context16;
                return 'overflow: hidden;' + "opacity: ".concat(Math.min(t * 20, 1) * opacity, ";") + _concatInstanceProperty(_context10 = "".concat(primary_property, ": ")).call(_context10, t * primary_property_value, "px;") + _concatInstanceProperty(_context11 = "padding-".concat(secondary_properties[0], ": ")).call(_context11, t * padding_start_value, "px;") + _concatInstanceProperty(_context12 = "padding-".concat(secondary_properties[1], ": ")).call(_context12, t * padding_end_value, "px;") + _concatInstanceProperty(_context13 = "margin-".concat(secondary_properties[0], ": ")).call(_context13, t * margin_start_value, "px;") + _concatInstanceProperty(_context14 = "margin-".concat(secondary_properties[1], ": ")).call(_context14, t * margin_end_value, "px;") + _concatInstanceProperty(_context15 = "border-".concat(secondary_properties[0], "-width: ")).call(_context15, t * border_width_start_value, "px;") + _concatInstanceProperty(_context16 = "border-".concat(secondary_properties[1], "-width: ")).call(_context16, t * border_width_end_value, "px;");
            }
        };
    }

    function get_each_context$1(ctx, list, i) {
        const child_ctx = _sliceInstanceProperty(ctx).call(ctx);
        child_ctx[11] = list[i];
        return child_ctx;
    }

    // (31:8) {#if placeholder}
    function create_if_block_2$1(ctx) {
        let option;
        let t_value = /*placeholder*/ctx[3].name + "";
        let t;
        let option_value_value;
        return {
            c() {
                option = element("option");
                t = text(t_value);
                option.__value = option_value_value = /*placeholder*/ctx[3].id;
                set_input_value(option, option.__value);
            },
            m(target, anchor) {
                insert(target, option, anchor);
                append(option, t);
            },
            p(ctx, dirty) {
                if (dirty & /*placeholder*/8 && t_value !== (t_value = /*placeholder*/ctx[3].name + "")) set_data(t, t_value);
                if (dirty & /*placeholder*/8 && option_value_value !== (option_value_value = /*placeholder*/ctx[3].id)) {
                    option.__value = option_value_value;
                    set_input_value(option, option.__value);
                }
            },
            d(detaching) {
                if (detaching) {
                    detach(option);
                }
            }
        };
    }

    // (35:12) {#if !item.hidden}
    function create_if_block_1$1(ctx) {
        let option;
        let t_value = /*item*/ctx[11].name + "";
        let t;
        let option_value_value;
        return {
            c() {
                option = element("option");
                t = text(t_value);
                option.__value = option_value_value = /*item*/ctx[11].id;
                set_input_value(option, option.__value);
            },
            m(target, anchor) {
                insert(target, option, anchor);
                append(option, t);
            },
            p(ctx, dirty) {
                if (dirty & /*items*/16 && t_value !== (t_value = /*item*/ctx[11].name + "")) set_data(t, t_value);
                if (dirty & /*items*/16 && option_value_value !== (option_value_value = /*item*/ctx[11].id)) {
                    option.__value = option_value_value;
                    set_input_value(option, option.__value);
                }
            },
            d(detaching) {
                if (detaching) {
                    detach(option);
                }
            }
        };
    }

    // (34:8) {#each items as item}
    function create_each_block$1(ctx) {
        let if_block_anchor;
        let if_block = ! /*item*/ctx[11].hidden && create_if_block_1$1(ctx);
        return {
            c() {
                if (if_block) if_block.c();
                if_block_anchor = empty();
            },
            m(target, anchor) {
                if (if_block) if_block.m(target, anchor);
                insert(target, if_block_anchor, anchor);
            },
            p(ctx, dirty) {
                if (! /*item*/ctx[11].hidden) {
                    if (if_block) {
                        if_block.p(ctx, dirty);
                    } else {
                        if_block = create_if_block_1$1(ctx);
                        if_block.c();
                        if_block.m(if_block_anchor.parentNode, if_block_anchor);
                    }
                } else if (if_block) {
                    if_block.d(1);
                    if_block = null;
                }
            },
            d(detaching) {
                if (detaching) {
                    detach(if_block_anchor);
                }
                if (if_block) if_block.d(detaching);
            }
        };
    }

    // (41:0) {#if error}
    function create_if_block$2(ctx) {
        let div;
        let t;
        return {
            c() {
                div = element("div");
                t = text( /*error*/ctx[5]);
                attr(div, "class", "bookly-label-error");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                append(div, t);
            },
            p(ctx, dirty) {
                if (dirty & /*error*/32) set_data(t, /*error*/ctx[5]);
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                }
            }
        };
    }

    function create_fragment$2(ctx) {
        let label_1;
        let t0;
        let t1;
        let div;
        let select;
        let if_block0_anchor;
        let t2;
        let if_block1_anchor;
        let mounted;
        let dispose;
        let if_block0 = /*placeholder*/ctx[3] && create_if_block_2$1(ctx);
        let each_value = ensure_array_like( /*items*/ctx[4]);
        let each_blocks = [];
        for (let i = 0; i < each_value.length; i += 1) {
            each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
        }
        let if_block1 = /*error*/ctx[5] && create_if_block$2(ctx);
        return {
            c() {
                label_1 = element("label");
                t0 = text( /*label*/ctx[2]);
                t1 = space();
                div = element("div");
                select = element("select");
                if (if_block0) if_block0.c();
                if_block0_anchor = empty();
                for (let i = 0; i < each_blocks.length; i += 1) {
                    each_blocks[i].c();
                }
                t2 = space();
                if (if_block1) if_block1.c();
                if_block1_anchor = empty();
                attr(label_1, "for", "bookly-rnd-" + /*id*/ctx[6]);
                attr(select, "id", "bookly-rnd-" + /*id*/ctx[6]);
                if ( /*selected*/ctx[1] === void 0) add_render_callback(() => /*select_change_handler*/ctx[9].call(select));
            },
            m(target, anchor) {
                insert(target, label_1, anchor);
                append(label_1, t0);
                /*label_1_binding*/
                ctx[8](label_1);
                insert(target, t1, anchor);
                insert(target, div, anchor);
                append(div, select);
                if (if_block0) if_block0.m(select, null);
                append(select, if_block0_anchor);
                for (let i = 0; i < each_blocks.length; i += 1) {
                    if (each_blocks[i]) {
                        each_blocks[i].m(select, null);
                    }
                }
                select_option(select, /*selected*/ctx[1], true);
                insert(target, t2, anchor);
                if (if_block1) if_block1.m(target, anchor);
                insert(target, if_block1_anchor, anchor);
                if (!mounted) {
                    dispose = [listen(select, "change", /*select_change_handler*/ctx[9]), listen(select, "change", /*onChange*/ctx[7])];
                    mounted = true;
                }
            },
            p(ctx, _ref) {
                let [dirty] = _ref;
                if (dirty & /*label*/4) set_data(t0, /*label*/ctx[2]);
                if ( /*placeholder*/ctx[3]) {
                    if (if_block0) {
                        if_block0.p(ctx, dirty);
                    } else {
                        if_block0 = create_if_block_2$1(ctx);
                        if_block0.c();
                        if_block0.m(select, if_block0_anchor);
                    }
                } else if (if_block0) {
                    if_block0.d(1);
                    if_block0 = null;
                }
                if (dirty & /*items*/16) {
                    each_value = ensure_array_like( /*items*/ctx[4]);
                    let i;
                    for (i = 0; i < each_value.length; i += 1) {
                        const child_ctx = get_each_context$1(ctx, each_value, i);
                        if (each_blocks[i]) {
                            each_blocks[i].p(child_ctx, dirty);
                        } else {
                            each_blocks[i] = create_each_block$1(child_ctx);
                            each_blocks[i].c();
                            each_blocks[i].m(select, null);
                        }
                    }
                    for (; i < each_blocks.length; i += 1) {
                        each_blocks[i].d(1);
                    }
                    each_blocks.length = each_value.length;
                }
                if (dirty & /*selected, items, placeholder*/26) {
                    select_option(select, /*selected*/ctx[1]);
                }
                if ( /*error*/ctx[5]) {
                    if (if_block1) {
                        if_block1.p(ctx, dirty);
                    } else {
                        if_block1 = create_if_block$2(ctx);
                        if_block1.c();
                        if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
                    }
                } else if (if_block1) {
                    if_block1.d(1);
                    if_block1 = null;
                }
            },
            i: noop,
            o: noop,
            d(detaching) {
                if (detaching) {
                    detach(label_1);
                    detach(t1);
                    detach(div);
                    detach(t2);
                    detach(if_block1_anchor);
                }

                /*label_1_binding*/
                ctx[8](null);
                if (if_block0) if_block0.d();
                destroy_each(each_blocks, detaching);
                if (if_block1) if_block1.d(detaching);
                mounted = false;
                run_all(dispose);
            }
        };
    }

    function compare(a, b) {
        if (a.pos < b.pos) return -1;
        if (a.pos > b.pos) return 1;
        return 0;
    }

    function instance$2($$self, $$props, $$invalidate) {
        let {
            el = null
        } = $$props;
        let {
            label = ''
        } = $$props;
        let {
            placeholder = null
        } = $$props;
        let {
            items = []
        } = $$props;
        let {
            selected = ''
        } = $$props;
        let {
            error = null
        } = $$props;
        let id = Math.random().toString(36).substr(2, 9);
        const dispatch = createEventDispatcher();

        function onChange() {
            dispatch('change', selected);
        }

        function label_1_binding($$value) {
            binding_callbacks[$$value ? 'unshift' : 'push'](() => {
                el = $$value;
                $$invalidate(0, el);
            });
        }

        function select_change_handler() {
            selected = select_value(this);
            $$invalidate(1, selected);
            $$invalidate(4, items);
            $$invalidate(3, placeholder);
        }

        $$self.$$set = $$props => {
            if ('el' in $$props) $$invalidate(0, el = $$props.el);
            if ('label' in $$props) $$invalidate(2, label = $$props.label);
            if ('placeholder' in $$props) $$invalidate(3, placeholder = $$props.placeholder);
            if ('items' in $$props) $$invalidate(4, items = $$props.items);
            if ('selected' in $$props) $$invalidate(1, selected = $$props.selected);
            if ('error' in $$props) $$invalidate(5, error = $$props.error);
        };
        $$self.$$.update = () => {
            if ($$self.$$.dirty & /*items*/16) {
                // Sort items by position
                _sortInstanceProperty(items).call(items, compare);
            }
        };
        return [el, selected, label, placeholder, items, error, id, onChange, label_1_binding, select_change_handler];
    }

    class Select extends SvelteComponent {
        constructor(options) {
            super();
            init(this, options, instance$2, create_fragment$2, safe_not_equal, {
                el: 0,
                label: 2,
                placeholder: 3,
                items: 4,
                selected: 1,
                error: 5
            });
        }
    }

    function create_if_block_14(ctx) {
        let div;
        let select;
        let updating_el;
        let current;

        function select_el_binding(value) {
            /*select_el_binding*/
            ctx[66](value);
        }

        let select_props = {
            label: /*l10n*/ctx[16].location_label,
            placeholder: /*locationPlaceholder*/ctx[30],
            items: _Object$values( /*locations*/ctx[0]),
            selected: /*locationId*/ctx[17],
            error: /*locationError*/ctx[34]
        };
        if ( /*locationEl*/ctx[35] !== void 0) {
            select_props.el = /*locationEl*/ctx[35];
        }
        select = new Select({
            props: select_props
        });
        binding_callbacks.push(() => bind(select, 'el', select_el_binding));
        select.$on("change", /*onLocationChange*/ctx[40]);
        return {
            c() {
                div = element("div");
                create_component(select.$$.fragment);
                attr(div, "class", "bookly-form-group");
                attr(div, "data-type", "location");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                mount_component(select, div, null);
                current = true;
            },
            p(ctx, dirty) {
                const select_changes = {};
                if (dirty[0] & /*l10n*/65536) select_changes.label = /*l10n*/ctx[16].location_label;
                if (dirty[0] & /*locationPlaceholder*/1073741824) select_changes.placeholder = /*locationPlaceholder*/ctx[30];
                if (dirty[0] & /*locations*/1) select_changes.items = _Object$values( /*locations*/ctx[0]);
                if (dirty[0] & /*locationId*/131072) select_changes.selected = /*locationId*/ctx[17];
                if (dirty[1] & /*locationError*/8) select_changes.error = /*locationError*/ctx[34];
                if (!updating_el && dirty[1] & /*locationEl*/16) {
                    updating_el = true;
                    select_changes.el = /*locationEl*/ctx[35];
                    add_flush_callback(() => updating_el = false);
                }
                select.$set(select_changes);
            },
            i(local) {
                if (current) return;
                transition_in(select.$$.fragment, local);
                current = true;
            },
            o(local) {
                transition_out(select.$$.fragment, local);
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                }
                destroy_component(select);
            }
        };
    }

    // (495:4) {#if hasCategorySelect}
    function create_if_block_12(ctx) {
        let div;
        let select;
        let t;
        let show_if = /*showCategoryInfo*/ctx[4] && /*categoryId*/ctx[18] && /*categories*/ctx[1][/*categoryId*/ctx[18]].hasOwnProperty('info') && /*categories*/ctx[1][/*categoryId*/ctx[18]].info !== '';
        let if_block_anchor;
        let current;
        select = new Select({
            props: {
                label: /*l10n*/ctx[16].category_label,
                placeholder: /*categoryPlaceholder*/ctx[31],
                items: _Object$values( /*categoryItems*/ctx[26]),
                selected: /*categoryId*/ctx[18]
            }
        });
        select.$on("change", /*onCategoryChange*/ctx[41]);
        let if_block = show_if && create_if_block_13(ctx);
        return {
            c() {
                div = element("div");
                create_component(select.$$.fragment);
                t = space();
                if (if_block) if_block.c();
                if_block_anchor = empty();
                attr(div, "class", "bookly-form-group");
                attr(div, "data-type", "category");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                mount_component(select, div, null);
                insert(target, t, anchor);
                if (if_block) if_block.m(target, anchor);
                insert(target, if_block_anchor, anchor);
                current = true;
            },
            p(ctx, dirty) {
                const select_changes = {};
                if (dirty[0] & /*l10n*/65536) select_changes.label = /*l10n*/ctx[16].category_label;
                if (dirty[1] & /*categoryPlaceholder*/1) select_changes.placeholder = /*categoryPlaceholder*/ctx[31];
                if (dirty[0] & /*categoryItems*/67108864) select_changes.items = _Object$values( /*categoryItems*/ctx[26]);
                if (dirty[0] & /*categoryId*/262144) select_changes.selected = /*categoryId*/ctx[18];
                select.$set(select_changes);
                if (dirty[0] & /*showCategoryInfo, categoryId, categories*/262162) show_if = /*showCategoryInfo*/ctx[4] && /*categoryId*/ctx[18] && /*categories*/ctx[1][/*categoryId*/ctx[18]].hasOwnProperty('info') && /*categories*/ctx[1][/*categoryId*/ctx[18]].info !== '';
                if (show_if) {
                    if (if_block) {
                        if_block.p(ctx, dirty);
                        if (dirty[0] & /*showCategoryInfo, categoryId, categories*/262162) {
                            transition_in(if_block, 1);
                        }
                    } else {
                        if_block = create_if_block_13(ctx);
                        if_block.c();
                        transition_in(if_block, 1);
                        if_block.m(if_block_anchor.parentNode, if_block_anchor);
                    }
                } else if (if_block) {
                    group_outros();
                    transition_out(if_block, 1, 1, () => {
                        if_block = null;
                    });
                    check_outros();
                }
            },
            i(local) {
                if (current) return;
                transition_in(select.$$.fragment, local);
                transition_in(if_block);
                current = true;
            },
            o(local) {
                transition_out(select.$$.fragment, local);
                transition_out(if_block);
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                    detach(t);
                    detach(if_block_anchor);
                }
                destroy_component(select);
                if (if_block) if_block.d(detaching);
            }
        };
    }

    // (505:8) {#if showCategoryInfo && categoryId && categories[categoryId].hasOwnProperty('info') && categories[categoryId].info !== ''}
    function create_if_block_13(ctx) {
        let div;
        let raw_value = /*categories*/ctx[1][/*categoryId*/ctx[18]].info + "";
        let div_transition;
        let current;
        return {
            c() {
                div = element("div");
                attr(div, "class", "bookly-box bookly-visible-sm bookly-category-info");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                div.innerHTML = raw_value;
                current = true;
            },
            p(ctx, dirty) {
                if ((!current || dirty[0] & /*categories, categoryId*/262146) && raw_value !== (raw_value = /*categories*/ctx[1][/*categoryId*/ctx[18]].info + "")) div.innerHTML = raw_value;
            },
            i(local) {
                if (current) return;
                if (local) {
                    add_render_callback(() => {
                        if (!current) return;
                        if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, true);
                        div_transition.run(1);
                    });
                }
                current = true;
            },
            o(local) {
                if (local) {
                    if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, false);
                    div_transition.run(0);
                }
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                }
                if (detaching && div_transition) div_transition.end();
            }
        };
    }

    // (511:4) {#if hasServiceSelect}
    function create_if_block_10(ctx) {
        let div;
        let select;
        let updating_el;
        let t;
        let show_if = /*showServiceInfo*/ctx[5] && /*serviceId*/ctx[19] && /*services*/ctx[2][/*serviceId*/ctx[19]].hasOwnProperty('info') && /*services*/ctx[2][/*serviceId*/ctx[19]].info !== '';
        let if_block_anchor;
        let current;

        function select_el_binding_1(value) {
            /*select_el_binding_1*/
            ctx[67](value);
        }

        let select_props = {
            label: /*l10n*/ctx[16].service_label,
            placeholder: /*servicePlaceholder*/ctx[32],
            items: _Object$values( /*serviceItems*/ctx[27]),
            selected: /*serviceId*/ctx[19],
            error: /*serviceError*/ctx[36]
        };
        if ( /*serviceEl*/ctx[37] !== void 0) {
            select_props.el = /*serviceEl*/ctx[37];
        }
        select = new Select({
            props: select_props
        });
        binding_callbacks.push(() => bind(select, 'el', select_el_binding_1));
        select.$on("change", /*onServiceChange*/ctx[42]);
        let if_block = show_if && create_if_block_11(ctx);
        return {
            c() {
                div = element("div");
                create_component(select.$$.fragment);
                t = space();
                if (if_block) if_block.c();
                if_block_anchor = empty();
                attr(div, "class", "bookly-form-group");
                attr(div, "data-type", "service");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                mount_component(select, div, null);
                insert(target, t, anchor);
                if (if_block) if_block.m(target, anchor);
                insert(target, if_block_anchor, anchor);
                current = true;
            },
            p(ctx, dirty) {
                const select_changes = {};
                if (dirty[0] & /*l10n*/65536) select_changes.label = /*l10n*/ctx[16].service_label;
                if (dirty[1] & /*servicePlaceholder*/2) select_changes.placeholder = /*servicePlaceholder*/ctx[32];
                if (dirty[0] & /*serviceItems*/134217728) select_changes.items = _Object$values( /*serviceItems*/ctx[27]);
                if (dirty[0] & /*serviceId*/524288) select_changes.selected = /*serviceId*/ctx[19];
                if (dirty[1] & /*serviceError*/32) select_changes.error = /*serviceError*/ctx[36];
                if (!updating_el && dirty[1] & /*serviceEl*/64) {
                    updating_el = true;
                    select_changes.el = /*serviceEl*/ctx[37];
                    add_flush_callback(() => updating_el = false);
                }
                select.$set(select_changes);
                if (dirty[0] & /*showServiceInfo, serviceId, services*/524324) show_if = /*showServiceInfo*/ctx[5] && /*serviceId*/ctx[19] && /*services*/ctx[2][/*serviceId*/ctx[19]].hasOwnProperty('info') && /*services*/ctx[2][/*serviceId*/ctx[19]].info !== '';
                if (show_if) {
                    if (if_block) {
                        if_block.p(ctx, dirty);
                        if (dirty[0] & /*showServiceInfo, serviceId, services*/524324) {
                            transition_in(if_block, 1);
                        }
                    } else {
                        if_block = create_if_block_11(ctx);
                        if_block.c();
                        transition_in(if_block, 1);
                        if_block.m(if_block_anchor.parentNode, if_block_anchor);
                    }
                } else if (if_block) {
                    group_outros();
                    transition_out(if_block, 1, 1, () => {
                        if_block = null;
                    });
                    check_outros();
                }
            },
            i(local) {
                if (current) return;
                transition_in(select.$$.fragment, local);
                transition_in(if_block);
                current = true;
            },
            o(local) {
                transition_out(select.$$.fragment, local);
                transition_out(if_block);
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                    detach(t);
                    detach(if_block_anchor);
                }
                destroy_component(select);
                if (if_block) if_block.d(detaching);
            }
        };
    }

    // (523:8) {#if showServiceInfo && serviceId && services[serviceId].hasOwnProperty('info') && services[serviceId].info !== ''}
    function create_if_block_11(ctx) {
        let div;
        let raw_value = /*services*/ctx[2][/*serviceId*/ctx[19]].info + "";
        let div_transition;
        let current;
        return {
            c() {
                div = element("div");
                attr(div, "class", "bookly-box bookly-visible-sm bookly-service-info");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                div.innerHTML = raw_value;
                current = true;
            },
            p(ctx, dirty) {
                if ((!current || dirty[0] & /*services, serviceId*/524292) && raw_value !== (raw_value = /*services*/ctx[2][/*serviceId*/ctx[19]].info + "")) div.innerHTML = raw_value;
            },
            i(local) {
                if (current) return;
                if (local) {
                    add_render_callback(() => {
                        if (!current) return;
                        if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, true);
                        div_transition.run(1);
                    });
                }
                current = true;
            },
            o(local) {
                if (local) {
                    if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, false);
                    div_transition.run(0);
                }
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                }
                if (detaching && div_transition) div_transition.end();
            }
        };
    }

    // (529:4) {#if hasStaffSelect}
    function create_if_block_8(ctx) {
        let div;
        let select;
        let updating_el;
        let t;
        let show_if = /*showStaffInfo*/ctx[6] && /*staffId*/ctx[20] && /*staff*/ctx[3][/*staffId*/ctx[20]].hasOwnProperty('info') && /*staff*/ctx[3][/*staffId*/ctx[20]].info !== '';
        let if_block_anchor;
        let current;

        function select_el_binding_2(value) {
            /*select_el_binding_2*/
            ctx[68](value);
        }

        let select_props = {
            label: /*l10n*/ctx[16].staff_label,
            placeholder: /*staffPlaceholder*/ctx[33],
            items: _Object$values( /*staffItems*/ctx[23]),
            selected: /*staffId*/ctx[20],
            error: /*staffError*/ctx[38]
        };
        if ( /*staffEl*/ctx[39] !== void 0) {
            select_props.el = /*staffEl*/ctx[39];
        }
        select = new Select({
            props: select_props
        });
        binding_callbacks.push(() => bind(select, 'el', select_el_binding_2));
        select.$on("change", /*onStaffChange*/ctx[43]);
        let if_block = show_if && create_if_block_9(ctx);
        return {
            c() {
                div = element("div");
                create_component(select.$$.fragment);
                t = space();
                if (if_block) if_block.c();
                if_block_anchor = empty();
                attr(div, "class", "bookly-form-group");
                attr(div, "data-type", "staff");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                mount_component(select, div, null);
                insert(target, t, anchor);
                if (if_block) if_block.m(target, anchor);
                insert(target, if_block_anchor, anchor);
                current = true;
            },
            p(ctx, dirty) {
                const select_changes = {};
                if (dirty[0] & /*l10n*/65536) select_changes.label = /*l10n*/ctx[16].staff_label;
                if (dirty[1] & /*staffPlaceholder*/4) select_changes.placeholder = /*staffPlaceholder*/ctx[33];
                if (dirty[0] & /*staffItems*/8388608) select_changes.items = _Object$values( /*staffItems*/ctx[23]);
                if (dirty[0] & /*staffId*/1048576) select_changes.selected = /*staffId*/ctx[20];
                if (dirty[1] & /*staffError*/128) select_changes.error = /*staffError*/ctx[38];
                if (!updating_el && dirty[1] & /*staffEl*/256) {
                    updating_el = true;
                    select_changes.el = /*staffEl*/ctx[39];
                    add_flush_callback(() => updating_el = false);
                }
                select.$set(select_changes);
                if (dirty[0] & /*showStaffInfo, staffId, staff*/1048648) show_if = /*showStaffInfo*/ctx[6] && /*staffId*/ctx[20] && /*staff*/ctx[3][/*staffId*/ctx[20]].hasOwnProperty('info') && /*staff*/ctx[3][/*staffId*/ctx[20]].info !== '';
                if (show_if) {
                    if (if_block) {
                        if_block.p(ctx, dirty);
                        if (dirty[0] & /*showStaffInfo, staffId, staff*/1048648) {
                            transition_in(if_block, 1);
                        }
                    } else {
                        if_block = create_if_block_9(ctx);
                        if_block.c();
                        transition_in(if_block, 1);
                        if_block.m(if_block_anchor.parentNode, if_block_anchor);
                    }
                } else if (if_block) {
                    group_outros();
                    transition_out(if_block, 1, 1, () => {
                        if_block = null;
                    });
                    check_outros();
                }
            },
            i(local) {
                if (current) return;
                transition_in(select.$$.fragment, local);
                transition_in(if_block);
                current = true;
            },
            o(local) {
                transition_out(select.$$.fragment, local);
                transition_out(if_block);
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                    detach(t);
                    detach(if_block_anchor);
                }
                destroy_component(select);
                if (if_block) if_block.d(detaching);
            }
        };
    }

    // (541:8) {#if showStaffInfo && staffId && staff[staffId].hasOwnProperty('info') && staff[staffId].info !== ''}
    function create_if_block_9(ctx) {
        let div;
        let raw_value = /*staff*/ctx[3][/*staffId*/ctx[20]].info + "";
        let div_transition;
        let current;
        return {
            c() {
                div = element("div");
                attr(div, "class", "bookly-box bookly-visible-sm bookly-staff-info");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                div.innerHTML = raw_value;
                current = true;
            },
            p(ctx, dirty) {
                if ((!current || dirty[0] & /*staff, staffId*/1048584) && raw_value !== (raw_value = /*staff*/ctx[3][/*staffId*/ctx[20]].info + "")) div.innerHTML = raw_value;
            },
            i(local) {
                if (current) return;
                if (local) {
                    add_render_callback(() => {
                        if (!current) return;
                        if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, true);
                        div_transition.run(1);
                    });
                }
                current = true;
            },
            o(local) {
                if (local) {
                    if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, false);
                    div_transition.run(0);
                }
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                }
                if (detaching && div_transition) div_transition.end();
            }
        };
    }

    // (547:4) {#if hasDurationSelect}
    function create_if_block_7(ctx) {
        let div;
        let select;
        let current;
        select = new Select({
            props: {
                label: /*l10n*/ctx[16].duration_label,
                items: _Object$values( /*durationItems*/ctx[24]),
                selected: /*duration*/ctx[21]
            }
        });
        select.$on("change", /*onDurationChange*/ctx[44]);
        return {
            c() {
                div = element("div");
                create_component(select.$$.fragment);
                attr(div, "class", "bookly-form-group");
                attr(div, "data-type", "duration");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                mount_component(select, div, null);
                current = true;
            },
            p(ctx, dirty) {
                const select_changes = {};
                if (dirty[0] & /*l10n*/65536) select_changes.label = /*l10n*/ctx[16].duration_label;
                if (dirty[0] & /*durationItems*/16777216) select_changes.items = _Object$values( /*durationItems*/ctx[24]);
                if (dirty[0] & /*duration*/2097152) select_changes.selected = /*duration*/ctx[21];
                select.$set(select_changes);
            },
            i(local) {
                if (current) return;
                transition_in(select.$$.fragment, local);
                current = true;
            },
            o(local) {
                transition_out(select.$$.fragment, local);
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                }
                destroy_component(select);
            }
        };
    }

    // (557:4) {#if hasNopSelect}
    function create_if_block_6(ctx) {
        let div;
        let select;
        let current;
        select = new Select({
            props: {
                label: /*l10n*/ctx[16].nop_label,
                items: _Object$values( /*nopItems*/ctx[28]),
                selected: /*nop*/ctx[22]
            }
        });
        select.$on("change", /*onNopChange*/ctx[45]);
        return {
            c() {
                div = element("div");
                create_component(select.$$.fragment);
                attr(div, "class", "bookly-form-group");
                attr(div, "data-type", "nop");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                mount_component(select, div, null);
                current = true;
            },
            p(ctx, dirty) {
                const select_changes = {};
                if (dirty[0] & /*l10n*/65536) select_changes.label = /*l10n*/ctx[16].nop_label;
                if (dirty[0] & /*nopItems*/268435456) select_changes.items = _Object$values( /*nopItems*/ctx[28]);
                if (dirty[0] & /*nop*/4194304) select_changes.selected = /*nop*/ctx[22];
                select.$set(select_changes);
            },
            i(local) {
                if (current) return;
                transition_in(select.$$.fragment, local);
                current = true;
            },
            o(local) {
                transition_out(select.$$.fragment, local);
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                }
                destroy_component(select);
            }
        };
    }

    // (567:4) {#if hasQuantitySelect}
    function create_if_block_5(ctx) {
        let div;
        let select;
        let current;
        select = new Select({
            props: {
                label: /*l10n*/ctx[16].quantity_label,
                items: _Object$values( /*quantityItems*/ctx[29]),
                selected: /*quantity*/ctx[25]
            }
        });
        select.$on("change", /*onQuantityChange*/ctx[46]);
        return {
            c() {
                div = element("div");
                create_component(select.$$.fragment);
                attr(div, "class", "bookly-form-group");
                attr(div, "data-type", "quantity");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                mount_component(select, div, null);
                current = true;
            },
            p(ctx, dirty) {
                const select_changes = {};
                if (dirty[0] & /*l10n*/65536) select_changes.label = /*l10n*/ctx[16].quantity_label;
                if (dirty[0] & /*quantityItems*/536870912) select_changes.items = _Object$values( /*quantityItems*/ctx[29]);
                if (dirty[0] & /*quantity*/33554432) select_changes.selected = /*quantity*/ctx[25];
                select.$set(select_changes);
            },
            i(local) {
                if (current) return;
                transition_in(select.$$.fragment, local);
                current = true;
            },
            o(local) {
                transition_out(select.$$.fragment, local);
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                }
                destroy_component(select);
            }
        };
    }

    // (577:4) {#if hasDropBtn}
    function create_if_block_3(ctx) {
        let div1;
        let label;
        let t;
        let div0;
        let if_block = /*showDropBtn*/ctx[15] && create_if_block_4(ctx);
        return {
            c() {
                div1 = element("div");
                label = element("label");
                t = space();
                div0 = element("div");
                if (if_block) if_block.c();
                attr(div1, "class", "bookly-form-group bookly-chain-actions");
            },
            m(target, anchor) {
                insert(target, div1, anchor);
                append(div1, label);
                append(div1, t);
                append(div1, div0);
                if (if_block) if_block.m(div0, null);
            },
            p(ctx, dirty) {
                if ( /*showDropBtn*/ctx[15]) {
                    if (if_block) {
                        if_block.p(ctx, dirty);
                    } else {
                        if_block = create_if_block_4(ctx);
                        if_block.c();
                        if_block.m(div0, null);
                    }
                } else if (if_block) {
                    if_block.d(1);
                    if_block = null;
                }
            },
            d(detaching) {
                if (detaching) {
                    detach(div1);
                }
                if (if_block) if_block.d();
            }
        };
    }

    // (581:16) {#if showDropBtn}
    function create_if_block_4(ctx) {
        let button;
        let mounted;
        let dispose;
        return {
            c() {
                button = element("button");
                button.innerHTML = "<i class=\"bookly-icon-sm bookly-icon-drop\"></i>";
                attr(button, "class", "bookly-round");
            },
            m(target, anchor) {
                insert(target, button, anchor);
                if (!mounted) {
                    dispose = listen(button, "click", /*onDropBtnClick*/ctx[47]);
                    mounted = true;
                }
            },
            p: noop,
            d(detaching) {
                if (detaching) {
                    detach(button);
                }
                mounted = false;
                dispose();
            }
        };
    }

    // (588:0) {#if showCategoryInfo && categoryId && categories[categoryId].hasOwnProperty('info') && categories[categoryId].info !== ''}
    function create_if_block_2(ctx) {
        let div;
        let raw_value = /*categories*/ctx[1][/*categoryId*/ctx[18]].info + "";
        let div_transition;
        let current;
        return {
            c() {
                div = element("div");
                attr(div, "class", "bookly-box bookly-visible-md bookly-category-info");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                div.innerHTML = raw_value;
                current = true;
            },
            p(ctx, dirty) {
                if ((!current || dirty[0] & /*categories, categoryId*/262146) && raw_value !== (raw_value = /*categories*/ctx[1][/*categoryId*/ctx[18]].info + "")) div.innerHTML = raw_value;
            },
            i(local) {
                if (current) return;
                if (local) {
                    add_render_callback(() => {
                        if (!current) return;
                        if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, true);
                        div_transition.run(1);
                    });
                }
                current = true;
            },
            o(local) {
                if (local) {
                    if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, false);
                    div_transition.run(0);
                }
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                }
                if (detaching && div_transition) div_transition.end();
            }
        };
    }

    // (593:0) {#if showServiceInfo && serviceId && services[serviceId].hasOwnProperty('info') && services[serviceId].info !== ''}
    function create_if_block_1(ctx) {
        let div;
        let raw_value = /*services*/ctx[2][/*serviceId*/ctx[19]].info + "";
        let div_transition;
        let current;
        return {
            c() {
                div = element("div");
                attr(div, "class", "bookly-box bookly-visible-md bookly-service-info");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                div.innerHTML = raw_value;
                current = true;
            },
            p(ctx, dirty) {
                if ((!current || dirty[0] & /*services, serviceId*/524292) && raw_value !== (raw_value = /*services*/ctx[2][/*serviceId*/ctx[19]].info + "")) div.innerHTML = raw_value;
            },
            i(local) {
                if (current) return;
                if (local) {
                    add_render_callback(() => {
                        if (!current) return;
                        if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, true);
                        div_transition.run(1);
                    });
                }
                current = true;
            },
            o(local) {
                if (local) {
                    if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, false);
                    div_transition.run(0);
                }
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                }
                if (detaching && div_transition) div_transition.end();
            }
        };
    }

    // (598:0) {#if showStaffInfo && staffId && staff[staffId].hasOwnProperty('info') && staff[staffId].info !== ''}
    function create_if_block$1(ctx) {
        let div;
        let raw_value = /*staff*/ctx[3][/*staffId*/ctx[20]].info + "";
        let div_transition;
        let current;
        return {
            c() {
                div = element("div");
                attr(div, "class", "bookly-box bookly-visible-md bookly-staff-info");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                div.innerHTML = raw_value;
                current = true;
            },
            p(ctx, dirty) {
                if ((!current || dirty[0] & /*staff, staffId*/1048584) && raw_value !== (raw_value = /*staff*/ctx[3][/*staffId*/ctx[20]].info + "")) div.innerHTML = raw_value;
            },
            i(local) {
                if (current) return;
                if (local) {
                    add_render_callback(() => {
                        if (!current) return;
                        if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, true);
                        div_transition.run(1);
                    });
                }
                current = true;
            },
            o(local) {
                if (local) {
                    if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, false);
                    div_transition.run(0);
                }
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                }
                if (detaching && div_transition) div_transition.end();
            }
        };
    }

    function create_fragment$1(ctx) {
        let div;
        let t0;
        let t1;
        let t2;
        let t3;
        let t4;
        let t5;
        let t6;
        let t7;
        let show_if_2 = /*showCategoryInfo*/ctx[4] && /*categoryId*/ctx[18] && /*categories*/ctx[1][/*categoryId*/ctx[18]].hasOwnProperty('info') && /*categories*/ctx[1][/*categoryId*/ctx[18]].info !== '';
        let t8;
        let show_if_1 = /*showServiceInfo*/ctx[5] && /*serviceId*/ctx[19] && /*services*/ctx[2][/*serviceId*/ctx[19]].hasOwnProperty('info') && /*services*/ctx[2][/*serviceId*/ctx[19]].info !== '';
        let t9;
        let show_if = /*showStaffInfo*/ctx[6] && /*staffId*/ctx[20] && /*staff*/ctx[3][/*staffId*/ctx[20]].hasOwnProperty('info') && /*staff*/ctx[3][/*staffId*/ctx[20]].info !== '';
        let if_block10_anchor;
        let current;
        let if_block0 = /*hasLocationSelect*/ctx[7] && create_if_block_14(ctx);
        let if_block1 = /*hasCategorySelect*/ctx[8] && create_if_block_12(ctx);
        let if_block2 = /*hasServiceSelect*/ctx[9] && create_if_block_10(ctx);
        let if_block3 = /*hasStaffSelect*/ctx[10] && create_if_block_8(ctx);
        let if_block4 = /*hasDurationSelect*/ctx[11] && create_if_block_7(ctx);
        let if_block5 = /*hasNopSelect*/ctx[12] && create_if_block_6(ctx);
        let if_block6 = /*hasQuantitySelect*/ctx[13] && create_if_block_5(ctx);
        let if_block7 = /*hasDropBtn*/ctx[14] && create_if_block_3(ctx);
        let if_block8 = show_if_2 && create_if_block_2(ctx);
        let if_block9 = show_if_1 && create_if_block_1(ctx);
        let if_block10 = show_if && create_if_block$1(ctx);
        return {
            c() {
                div = element("div");
                if (if_block0) if_block0.c();
                t0 = space();
                if (if_block1) if_block1.c();
                t1 = space();
                if (if_block2) if_block2.c();
                t2 = space();
                if (if_block3) if_block3.c();
                t3 = space();
                if (if_block4) if_block4.c();
                t4 = space();
                if (if_block5) if_block5.c();
                t5 = space();
                if (if_block6) if_block6.c();
                t6 = space();
                if (if_block7) if_block7.c();
                t7 = space();
                if (if_block8) if_block8.c();
                t8 = space();
                if (if_block9) if_block9.c();
                t9 = space();
                if (if_block10) if_block10.c();
                if_block10_anchor = empty();
                attr(div, "class", "bookly-table bookly-box");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                if (if_block0) if_block0.m(div, null);
                append(div, t0);
                if (if_block1) if_block1.m(div, null);
                append(div, t1);
                if (if_block2) if_block2.m(div, null);
                append(div, t2);
                if (if_block3) if_block3.m(div, null);
                append(div, t3);
                if (if_block4) if_block4.m(div, null);
                append(div, t4);
                if (if_block5) if_block5.m(div, null);
                append(div, t5);
                if (if_block6) if_block6.m(div, null);
                append(div, t6);
                if (if_block7) if_block7.m(div, null);
                insert(target, t7, anchor);
                if (if_block8) if_block8.m(target, anchor);
                insert(target, t8, anchor);
                if (if_block9) if_block9.m(target, anchor);
                insert(target, t9, anchor);
                if (if_block10) if_block10.m(target, anchor);
                insert(target, if_block10_anchor, anchor);
                current = true;
            },
            p(ctx, dirty) {
                if ( /*hasLocationSelect*/ctx[7]) {
                    if (if_block0) {
                        if_block0.p(ctx, dirty);
                        if (dirty[0] & /*hasLocationSelect*/128) {
                            transition_in(if_block0, 1);
                        }
                    } else {
                        if_block0 = create_if_block_14(ctx);
                        if_block0.c();
                        transition_in(if_block0, 1);
                        if_block0.m(div, t0);
                    }
                } else if (if_block0) {
                    group_outros();
                    transition_out(if_block0, 1, 1, () => {
                        if_block0 = null;
                    });
                    check_outros();
                }
                if ( /*hasCategorySelect*/ctx[8]) {
                    if (if_block1) {
                        if_block1.p(ctx, dirty);
                        if (dirty[0] & /*hasCategorySelect*/256) {
                            transition_in(if_block1, 1);
                        }
                    } else {
                        if_block1 = create_if_block_12(ctx);
                        if_block1.c();
                        transition_in(if_block1, 1);
                        if_block1.m(div, t1);
                    }
                } else if (if_block1) {
                    group_outros();
                    transition_out(if_block1, 1, 1, () => {
                        if_block1 = null;
                    });
                    check_outros();
                }
                if ( /*hasServiceSelect*/ctx[9]) {
                    if (if_block2) {
                        if_block2.p(ctx, dirty);
                        if (dirty[0] & /*hasServiceSelect*/512) {
                            transition_in(if_block2, 1);
                        }
                    } else {
                        if_block2 = create_if_block_10(ctx);
                        if_block2.c();
                        transition_in(if_block2, 1);
                        if_block2.m(div, t2);
                    }
                } else if (if_block2) {
                    group_outros();
                    transition_out(if_block2, 1, 1, () => {
                        if_block2 = null;
                    });
                    check_outros();
                }
                if ( /*hasStaffSelect*/ctx[10]) {
                    if (if_block3) {
                        if_block3.p(ctx, dirty);
                        if (dirty[0] & /*hasStaffSelect*/1024) {
                            transition_in(if_block3, 1);
                        }
                    } else {
                        if_block3 = create_if_block_8(ctx);
                        if_block3.c();
                        transition_in(if_block3, 1);
                        if_block3.m(div, t3);
                    }
                } else if (if_block3) {
                    group_outros();
                    transition_out(if_block3, 1, 1, () => {
                        if_block3 = null;
                    });
                    check_outros();
                }
                if ( /*hasDurationSelect*/ctx[11]) {
                    if (if_block4) {
                        if_block4.p(ctx, dirty);
                        if (dirty[0] & /*hasDurationSelect*/2048) {
                            transition_in(if_block4, 1);
                        }
                    } else {
                        if_block4 = create_if_block_7(ctx);
                        if_block4.c();
                        transition_in(if_block4, 1);
                        if_block4.m(div, t4);
                    }
                } else if (if_block4) {
                    group_outros();
                    transition_out(if_block4, 1, 1, () => {
                        if_block4 = null;
                    });
                    check_outros();
                }
                if ( /*hasNopSelect*/ctx[12]) {
                    if (if_block5) {
                        if_block5.p(ctx, dirty);
                        if (dirty[0] & /*hasNopSelect*/4096) {
                            transition_in(if_block5, 1);
                        }
                    } else {
                        if_block5 = create_if_block_6(ctx);
                        if_block5.c();
                        transition_in(if_block5, 1);
                        if_block5.m(div, t5);
                    }
                } else if (if_block5) {
                    group_outros();
                    transition_out(if_block5, 1, 1, () => {
                        if_block5 = null;
                    });
                    check_outros();
                }
                if ( /*hasQuantitySelect*/ctx[13]) {
                    if (if_block6) {
                        if_block6.p(ctx, dirty);
                        if (dirty[0] & /*hasQuantitySelect*/8192) {
                            transition_in(if_block6, 1);
                        }
                    } else {
                        if_block6 = create_if_block_5(ctx);
                        if_block6.c();
                        transition_in(if_block6, 1);
                        if_block6.m(div, t6);
                    }
                } else if (if_block6) {
                    group_outros();
                    transition_out(if_block6, 1, 1, () => {
                        if_block6 = null;
                    });
                    check_outros();
                }
                if ( /*hasDropBtn*/ctx[14]) {
                    if (if_block7) {
                        if_block7.p(ctx, dirty);
                    } else {
                        if_block7 = create_if_block_3(ctx);
                        if_block7.c();
                        if_block7.m(div, null);
                    }
                } else if (if_block7) {
                    if_block7.d(1);
                    if_block7 = null;
                }
                if (dirty[0] & /*showCategoryInfo, categoryId, categories*/262162) show_if_2 = /*showCategoryInfo*/ctx[4] && /*categoryId*/ctx[18] && /*categories*/ctx[1][/*categoryId*/ctx[18]].hasOwnProperty('info') && /*categories*/ctx[1][/*categoryId*/ctx[18]].info !== '';
                if (show_if_2) {
                    if (if_block8) {
                        if_block8.p(ctx, dirty);
                        if (dirty[0] & /*showCategoryInfo, categoryId, categories*/262162) {
                            transition_in(if_block8, 1);
                        }
                    } else {
                        if_block8 = create_if_block_2(ctx);
                        if_block8.c();
                        transition_in(if_block8, 1);
                        if_block8.m(t8.parentNode, t8);
                    }
                } else if (if_block8) {
                    group_outros();
                    transition_out(if_block8, 1, 1, () => {
                        if_block8 = null;
                    });
                    check_outros();
                }
                if (dirty[0] & /*showServiceInfo, serviceId, services*/524324) show_if_1 = /*showServiceInfo*/ctx[5] && /*serviceId*/ctx[19] && /*services*/ctx[2][/*serviceId*/ctx[19]].hasOwnProperty('info') && /*services*/ctx[2][/*serviceId*/ctx[19]].info !== '';
                if (show_if_1) {
                    if (if_block9) {
                        if_block9.p(ctx, dirty);
                        if (dirty[0] & /*showServiceInfo, serviceId, services*/524324) {
                            transition_in(if_block9, 1);
                        }
                    } else {
                        if_block9 = create_if_block_1(ctx);
                        if_block9.c();
                        transition_in(if_block9, 1);
                        if_block9.m(t9.parentNode, t9);
                    }
                } else if (if_block9) {
                    group_outros();
                    transition_out(if_block9, 1, 1, () => {
                        if_block9 = null;
                    });
                    check_outros();
                }
                if (dirty[0] & /*showStaffInfo, staffId, staff*/1048648) show_if = /*showStaffInfo*/ctx[6] && /*staffId*/ctx[20] && /*staff*/ctx[3][/*staffId*/ctx[20]].hasOwnProperty('info') && /*staff*/ctx[3][/*staffId*/ctx[20]].info !== '';
                if (show_if) {
                    if (if_block10) {
                        if_block10.p(ctx, dirty);
                        if (dirty[0] & /*showStaffInfo, staffId, staff*/1048648) {
                            transition_in(if_block10, 1);
                        }
                    } else {
                        if_block10 = create_if_block$1(ctx);
                        if_block10.c();
                        transition_in(if_block10, 1);
                        if_block10.m(if_block10_anchor.parentNode, if_block10_anchor);
                    }
                } else if (if_block10) {
                    group_outros();
                    transition_out(if_block10, 1, 1, () => {
                        if_block10 = null;
                    });
                    check_outros();
                }
            },
            i(local) {
                if (current) return;
                transition_in(if_block0);
                transition_in(if_block1);
                transition_in(if_block2);
                transition_in(if_block3);
                transition_in(if_block4);
                transition_in(if_block5);
                transition_in(if_block6);
                transition_in(if_block8);
                transition_in(if_block9);
                transition_in(if_block10);
                current = true;
            },
            o(local) {
                transition_out(if_block0);
                transition_out(if_block1);
                transition_out(if_block2);
                transition_out(if_block3);
                transition_out(if_block4);
                transition_out(if_block5);
                transition_out(if_block6);
                transition_out(if_block8);
                transition_out(if_block9);
                transition_out(if_block10);
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                    detach(t7);
                    detach(t8);
                    detach(t9);
                    detach(if_block10_anchor);
                }
                if (if_block0) if_block0.d();
                if (if_block1) if_block1.d();
                if (if_block2) if_block2.d();
                if (if_block3) if_block3.d();
                if (if_block4) if_block4.d();
                if (if_block5) if_block5.d();
                if (if_block6) if_block6.d();
                if (if_block7) if_block7.d();
                if (if_block8) if_block8.d(detaching);
                if (if_block9) if_block9.d(detaching);
                if (if_block10) if_block10.d(detaching);
            }
        };
    }

    function instance$1($$self, $$props, $$invalidate) {
        let {
            item = {}
        } = $$props;
        let {
            index = 0
        } = $$props;
        let {
            locations = []
        } = $$props;
        let {
            categories = []
        } = $$props;
        let {
            services = []
        } = $$props;
        let {
            staff = []
        } = $$props;
        let {
            defaults = {}
        } = $$props;
        let {
            required = {}
        } = $$props;
        let {
            servicesPerLocation = false
        } = $$props;
        let {
            staffNameWithPrice = false
        } = $$props;
        let {
            collaborativeHideStaff = false
        } = $$props;
        let {
            showRatings = false
        } = $$props;
        let {
            showCategoryInfo = false
        } = $$props;
        let {
            showServiceInfo = false
        } = $$props;
        let {
            showStaffInfo = false
        } = $$props;
        let {
            maxQuantity = 1
        } = $$props;
        let {
            hasLocationSelect = false
        } = $$props;
        let {
            hasCategorySelect = true
        } = $$props;
        let {
            hasServiceSelect = true
        } = $$props;
        let {
            hasStaffSelect = true
        } = $$props;
        let {
            hasDurationSelect = false
        } = $$props;
        let {
            hasNopSelect = false
        } = $$props;
        let {
            hasQuantitySelect = false
        } = $$props;
        let {
            hasDropBtn = false
        } = $$props;
        let {
            showDropBtn = false
        } = $$props;
        let {
            l10n = {}
        } = $$props;
        let {
            date_from_element = null
        } = $$props;
        const dispatch = createEventDispatcher();
        let locationId = 0;
        let categoryId = 0;
        let serviceId = 0;
        let staffId = 0;
        let duration = 1;
        let nop = 1;
        let quantity = 1;
        let categoryItems;
        let serviceItems;
        let staffItems;
        let durationItems;
        let nopItems;
        let quantityItems;
        let locationPlaceholder;
        let categoryPlaceholder;
        let servicePlaceholder;
        let staffPlaceholder;
        let locationError, locationEl;
        let serviceError, serviceEl;
        let staffError, staffEl;
        let lookupLocationId;
        let categorySelected;
        let maxCapacity;
        let minCapacity;
        let srvMaxCapacity;
        let srvMinCapacity;

        // Preselect values
        tick().then(() => {
            // Location
            let selected = item.location_id || defaults.location_id;
            if (selected) {
                onLocationChange({
                    detail: selected
                });
            }
        }).then(() => {
            // Category
            if (defaults.category_id) {
                onCategoryChange({
                    detail: defaults.category_id
                });
            }
        }).then(() => {
            // Service
            let selected = item.service_id || defaults.service_id;
            if (selected) {
                onServiceChange({
                    detail: selected
                });
            }
        }).then(() => {
            // Staff
            let selected;
            if (hasStaffSelect && item.staff_ids && item.staff_ids.length) {
                selected = item.staff_ids.length > 1 ? 0 : item.staff_ids[0];
            } else {
                selected = defaults.staff_id;
            }
            if (selected) {
                onStaffChange({
                    detail: selected
                });
            }
        }).then(() => {
            // Duration
            if (item.units > 1) {
                onDurationChange({
                    detail: item.units
                });
            }
        }).then(() => {
            // Nop
            if (item.number_of_persons > 1) {
                onNopChange({
                    detail: item.number_of_persons
                });
            }
        }).then(() => {
            // Quantity
            if (item.quantity > 1) {
                onQuantityChange({
                    detail: item.quantity
                });
            }
        });

        function onLocationChange(event) {
            $$invalidate(17, locationId = event.detail);

            // Validate value
            if (!(locationId in locations)) {
                $$invalidate(17, locationId = 0);
            }
            if (locationId != 0) {
                $$invalidate(34, locationError = null);
            }

            // Update related values
            if (locationId) {
                let lookupLocationId = servicesPerLocation ? locationId : 0;
                if (staffId) {
                    if (!(staffId in locations[locationId].staff)) {
                        $$invalidate(20, staffId = 0);
                    } else if (serviceId && !(lookupLocationId in staff[staffId].services[serviceId].locations)) {
                        $$invalidate(20, staffId = 0);
                    }
                }
                if (serviceId) {
                    let valid = false;
                    $$O.each(locations[locationId].staff, id => {
                        if (serviceId in staff[id].services && lookupLocationId in staff[id].services[serviceId].locations) {
                            valid = true;
                            return false;
                        }
                    });
                    if (!valid) {
                        $$invalidate(19, serviceId = 0);
                    }
                }
                if (categoryId) {
                    let valid = false;
                    $$O.each(locations[locationId].staff, id => {
                        $$O.each(staff[id].services, srvId => {
                            if (services[srvId].category_id === categoryId) {
                                valid = true;
                                return false;
                            }
                        });
                        if (valid) {
                            return false;
                        }
                    });
                    if (!valid) {
                        $$invalidate(18, categoryId = 0);
                    }
                }
            }
        }

        function onCategoryChange(event) {
            $$invalidate(18, categoryId = event.detail);

            // Validate value
            if (!(categoryId in categoryItems)) {
                $$invalidate(18, categoryId = 0);
            }

            // Update related values
            if (categoryId) {
                $$invalidate(61, categorySelected = true);
                if (serviceId) {
                    if (services[serviceId].category_id !== categoryId) {
                        $$invalidate(19, serviceId = 0);
                    }
                }
                if (staffId) {
                    let valid = false;
                    $$O.each(staff[staffId].services, id => {
                        if (services[id].category_id === categoryId) {
                            valid = true;
                            return false;
                        }
                    });
                    if (!valid) {
                        $$invalidate(20, staffId = 0);
                    }
                }
            } else {
                $$invalidate(61, categorySelected = false);
            }
        }

        function onServiceChange(event) {
            let dateMin = false;
            $$invalidate(65, srvMinCapacity = false);
            $$invalidate(64, srvMaxCapacity = false);
            $$invalidate(19, serviceId = event.detail);

            // Validate value
            if (!(serviceId in serviceItems)) {
                $$invalidate(19, serviceId = 0);
            }

            // Update related values
            if (serviceId) {
                $$invalidate(18, categoryId = services[serviceId].category_id);
                if (staffId && !(serviceId in staff[staffId].services)) {
                    $$invalidate(20, staffId = 0);
                }
                if (date_from_element[0]) {
                    dateMin = services[serviceId].hasOwnProperty('min_time_prior_booking') ? services[serviceId].min_time_prior_booking : date_from_element.data('date_min');
                }
                $$invalidate(36, serviceError = null);
            } else if (!categorySelected) {
                $$invalidate(18, categoryId = 0);
                if (date_from_element[0]) {
                    dateMin = date_from_element.data('date_min');
                }
            }
            if (date_from_element[0]) {
                date_from_element.pickadate('picker').set('min', dateMin);
                if (date_from_element.data('updated')) {
                    date_from_element.pickadate('picker').set('select', date_from_element.pickadate('picker').get('select'));
                } else {
                    date_from_element.pickadate('picker').set('select', dateMin);
                }
            }
        }

        function onStaffChange(event) {
            $$invalidate(20, staffId = event.detail);

            // Validate value
            if (!(staffId in staffItems)) {
                $$invalidate(20, staffId = 0);
            }
            if (staffId != 0) {
                $$invalidate(38, staffError = null);
            }
        }

        function onDurationChange(event) {
            $$invalidate(21, duration = event.detail);

            // Validate value
            if (!(duration in durationItems)) {
                $$invalidate(21, duration = 1);
            }
        }

        function onNopChange(event) {
            $$invalidate(22, nop = event.detail);

            // Validate value
            if (!(nop in nopItems)) {
                $$invalidate(22, nop = 1);
            }
        }

        function onQuantityChange(event) {
            $$invalidate(25, quantity = event.detail);

            // Validate value
            if (!(quantity in quantityItems)) {
                $$invalidate(25, quantity = 1);
            }
        }

        function onDropBtnClick() {
            dispatch('dropItem', index);
        }

        function validate() {
            let valid = true;
            let el = null;
            $$invalidate(38, staffError = $$invalidate(36, serviceError = $$invalidate(34, locationError = null)));
            if (required.staff && !staffId && (!collaborativeHideStaff || !serviceId || services[serviceId].type !== 'collaborative')) {
                valid = false;
                $$invalidate(38, staffError = l10n.staff_error);
                el = staffEl;
            }
            if (!serviceId) {
                valid = false;
                $$invalidate(36, serviceError = l10n.service_error);
                el = serviceEl;
            }
            if (required.location && !locationId) {
                valid = false;
                $$invalidate(34, locationError = l10n.location_error);
                el = locationEl;
            }
            return {
                valid,
                el
            };
        }

        function getValues() {
            return {
                locationId,
                categoryId,
                serviceId,
                staffIds: staffId ? [staffId] : _mapInstanceProperty($$O).call($$O, staffItems, item => item.id),
                duration,
                nop,
                quantity
            };
        }

        function select_el_binding(value) {
            locationEl = value;
            $$invalidate(35, locationEl);
        }

        function select_el_binding_1(value) {
            serviceEl = value;
            $$invalidate(37, serviceEl);
        }

        function select_el_binding_2(value) {
            staffEl = value;
            $$invalidate(39, staffEl);
        }

        $$self.$$set = $$props => {
            if ('item' in $$props) $$invalidate(48, item = $$props.item);
            if ('index' in $$props) $$invalidate(49, index = $$props.index);
            if ('locations' in $$props) $$invalidate(0, locations = $$props.locations);
            if ('categories' in $$props) $$invalidate(1, categories = $$props.categories);
            if ('services' in $$props) $$invalidate(2, services = $$props.services);
            if ('staff' in $$props) $$invalidate(3, staff = $$props.staff);
            if ('defaults' in $$props) $$invalidate(50, defaults = $$props.defaults);
            if ('required' in $$props) $$invalidate(51, required = $$props.required);
            if ('servicesPerLocation' in $$props) $$invalidate(52, servicesPerLocation = $$props.servicesPerLocation);
            if ('staffNameWithPrice' in $$props) $$invalidate(53, staffNameWithPrice = $$props.staffNameWithPrice);
            if ('collaborativeHideStaff' in $$props) $$invalidate(54, collaborativeHideStaff = $$props.collaborativeHideStaff);
            if ('showRatings' in $$props) $$invalidate(55, showRatings = $$props.showRatings);
            if ('showCategoryInfo' in $$props) $$invalidate(4, showCategoryInfo = $$props.showCategoryInfo);
            if ('showServiceInfo' in $$props) $$invalidate(5, showServiceInfo = $$props.showServiceInfo);
            if ('showStaffInfo' in $$props) $$invalidate(6, showStaffInfo = $$props.showStaffInfo);
            if ('maxQuantity' in $$props) $$invalidate(56, maxQuantity = $$props.maxQuantity);
            if ('hasLocationSelect' in $$props) $$invalidate(7, hasLocationSelect = $$props.hasLocationSelect);
            if ('hasCategorySelect' in $$props) $$invalidate(8, hasCategorySelect = $$props.hasCategorySelect);
            if ('hasServiceSelect' in $$props) $$invalidate(9, hasServiceSelect = $$props.hasServiceSelect);
            if ('hasStaffSelect' in $$props) $$invalidate(10, hasStaffSelect = $$props.hasStaffSelect);
            if ('hasDurationSelect' in $$props) $$invalidate(11, hasDurationSelect = $$props.hasDurationSelect);
            if ('hasNopSelect' in $$props) $$invalidate(12, hasNopSelect = $$props.hasNopSelect);
            if ('hasQuantitySelect' in $$props) $$invalidate(13, hasQuantitySelect = $$props.hasQuantitySelect);
            if ('hasDropBtn' in $$props) $$invalidate(14, hasDropBtn = $$props.hasDropBtn);
            if ('showDropBtn' in $$props) $$invalidate(15, showDropBtn = $$props.showDropBtn);
            if ('l10n' in $$props) $$invalidate(16, l10n = $$props.l10n);
            if ('date_from_element' in $$props) $$invalidate(57, date_from_element = $$props.date_from_element);
        };
        $$self.$$.update = () => {
            if ($$self.$$.dirty[0] & /*locationId, staff, locations, serviceId, categoryId, services, staffItems, categories, staffId, nop, hasNopSelect, duration, durationItems, l10n*/33493007 | $$self.$$.dirty[1] & /*servicesPerLocation, lookupLocationId, staffNameWithPrice, collaborativeHideStaff, showRatings, categorySelected, maxQuantity*/1675624448 | $$self.$$.dirty[2] & /*srvMinCapacity, srvMaxCapacity, minCapacity, maxCapacity*/15) {
                {
                    $$invalidate(60, lookupLocationId = servicesPerLocation && locationId ? locationId : 0);
                    $$invalidate(26, categoryItems = {});
                    $$invalidate(27, serviceItems = {});
                    $$invalidate(23, staffItems = {});
                    $$invalidate(28, nopItems = {});

                    // Staff
                    $$O.each(staff, (id, staffMember) => {
                        if (!locationId || id in locations[locationId].staff) {
                            if (!serviceId) {
                                if (!categoryId) {
                                    $$invalidate(23, staffItems[id] = $$O.extend({}, staffMember), staffItems);
                                } else {
                                    $$O.each(staffMember.services, srvId => {
                                        if (services[srvId].category_id === categoryId) {
                                            $$invalidate(23, staffItems[id] = $$O.extend({}, staffMember), staffItems);
                                            return false;
                                        }
                                    });
                                }
                            } else if (serviceId in staffMember.services) {
                                $$O.each(staffMember.services[serviceId].locations, (locId, locSrv) => {
                                    if (lookupLocationId && lookupLocationId !== _parseInt$1(locId)) {
                                        return true;
                                    }
                                    $$invalidate(65, srvMinCapacity = srvMinCapacity ? Math.min(srvMinCapacity, locSrv.min_capacity) : locSrv.min_capacity);
                                    $$invalidate(64, srvMaxCapacity = srvMaxCapacity ? Math.max(srvMaxCapacity, locSrv.max_capacity) : locSrv.max_capacity);
                                    $$invalidate(23, staffItems[id] = $$O.extend({}, staffMember, {
                                        name: staffMember.name + (staffNameWithPrice && locSrv.price !== null && (lookupLocationId || !servicesPerLocation) ? ' (' + locSrv.price + ')' : ''),
                                        hidden: collaborativeHideStaff && services[serviceId].type === 'collaborative'
                                    }), staffItems);
                                    if (collaborativeHideStaff && services[serviceId].type === 'collaborative') {
                                        $$invalidate(20, staffId = 0);
                                    }
                                });
                            }
                        }
                    });

                    // Add ratings to staff names
                    if (showRatings) {
                        $$O.each(staff, (id, staffMember) => {
                            if (staffMember.id in staffItems) {
                                if (serviceId) {
                                    if (serviceId in staffMember.services && staffMember.services[serviceId].rating) {
                                        $$invalidate(23, staffItems[staffMember.id].name = '★' + staffMember.services[serviceId].rating + ' ' + staffItems[staffMember.id].name, staffItems);
                                    }
                                } else if (staffMember.rating) {
                                    $$invalidate(23, staffItems[staffMember.id].name = '★' + staffMember.rating + ' ' + staffItems[staffMember.id].name, staffItems);
                                }
                            }
                        });
                    }

                    // Category & service
                    if (!locationId) {
                        $$invalidate(26, categoryItems = categories);
                        $$O.each(services, (id, service) => {
                            if (!categoryId || !categorySelected || service.category_id === categoryId) {
                                if (!staffId || id in staff[staffId].services) {
                                    $$invalidate(27, serviceItems[id] = service, serviceItems);
                                }
                            }
                        });
                    } else {
                        let categoryIds = [],
                            serviceIds = [];
                        if (servicesPerLocation) {
                            $$O.each(staff, stId => {
                                $$O.each(staff[stId].services, srvId => {
                                    if (lookupLocationId in staff[stId].services[srvId].locations) {
                                        categoryIds.push(services[srvId].category_id);
                                        serviceIds.push(srvId);
                                    }
                                });
                            });
                        } else {
                            $$O.each(locations[locationId].staff, stId => {
                                $$O.each(staff[stId].services, srvId => {
                                    categoryIds.push(services[srvId].category_id);
                                    serviceIds.push(srvId);
                                });
                            });
                        }
                        $$O.each(categories, (id, category) => {
                            if ($$O.inArray(_parseInt$1(id), categoryIds) > -1) {
                                $$invalidate(26, categoryItems[id] = category, categoryItems);
                            }
                        });
                        if (categoryId && $$O.inArray(categoryId, categoryIds) === -1) {
                            $$invalidate(18, categoryId = 0);
                            $$invalidate(61, categorySelected = false);
                        }
                        $$O.each(services, (id, service) => {
                            if ($$O.inArray(id, serviceIds) > -1) {
                                if (!categoryId || !categorySelected || service.category_id === categoryId) {
                                    if (!staffId || id in staff[staffId].services) {
                                        $$invalidate(27, serviceItems[id] = service, serviceItems);
                                    }
                                }
                            }
                        });
                    }

                    // Number of persons
                    $$invalidate(62, maxCapacity = serviceId ? staffId ? lookupLocationId in staff[staffId].services[serviceId].locations ? staff[staffId].services[serviceId].locations[lookupLocationId].max_capacity : 1 : srvMaxCapacity ? srvMaxCapacity : 1 : 1);
                    $$invalidate(63, minCapacity = serviceId ? staffId ? lookupLocationId in staff[staffId].services[serviceId].locations ? staff[staffId].services[serviceId].locations[lookupLocationId].min_capacity : 1 : srvMinCapacity ? srvMinCapacity : 1 : 1);
                    for (let i = minCapacity; i <= maxCapacity; ++i) {
                        $$invalidate(28, nopItems[i] = {
                            id: i,
                            name: i
                        }, nopItems);
                    }
                    if (nop > maxCapacity) {
                        $$invalidate(22, nop = maxCapacity);
                    }
                    if (nop < minCapacity || !hasNopSelect) {
                        $$invalidate(22, nop = minCapacity);
                    }

                    // Duration
                    $$invalidate(24, durationItems = {
                        1: {
                            id: 1,
                            name: '-'
                        }
                    });
                    if (serviceId) {
                        if (!staffId || servicesPerLocation && !locationId) {
                            if ('units' in services[serviceId]) {
                                $$invalidate(24, durationItems = services[serviceId].units);
                            }
                        } else {
                            let locId = locationId || 0;
                            let staffLocations = staff[staffId].services[serviceId].locations;
                            if (staffLocations) {
                                let staffLocation = locId in staffLocations ? staffLocations[locId] : staffLocations[0];
                                if ('units' in staffLocation) {
                                    $$invalidate(24, durationItems = staffLocation.units);
                                }
                            }
                        }
                    }
                    if (!(duration in durationItems)) {
                        if (_Object$keys(durationItems).length > 0) {
                            $$invalidate(21, duration = _Object$values(durationItems)[0].id);
                        } else {
                            $$invalidate(21, duration = 1);
                        }
                    }

                    // Quantity
                    $$invalidate(29, quantityItems = {});
                    for (let q = 1; q <= maxQuantity; ++q) {
                        $$invalidate(29, quantityItems[q] = {
                            id: q,
                            name: q
                        }, quantityItems);
                    }

                    // Placeholders
                    $$invalidate(30, locationPlaceholder = {
                        id: 0,
                        name: l10n.location_option
                    });
                    $$invalidate(31, categoryPlaceholder = {
                        id: 0,
                        name: l10n.category_option
                    });
                    $$invalidate(32, servicePlaceholder = {
                        id: 0,
                        name: l10n.service_option
                    });
                    $$invalidate(33, staffPlaceholder = {
                        id: 0,
                        name: l10n.staff_option
                    });
                }
            }
        };
        return [locations, categories, services, staff, showCategoryInfo, showServiceInfo, showStaffInfo, hasLocationSelect, hasCategorySelect, hasServiceSelect, hasStaffSelect, hasDurationSelect, hasNopSelect, hasQuantitySelect, hasDropBtn, showDropBtn, l10n, locationId, categoryId, serviceId, staffId, duration, nop, staffItems, durationItems, quantity, categoryItems, serviceItems, nopItems, quantityItems, locationPlaceholder, categoryPlaceholder, servicePlaceholder, staffPlaceholder, locationError, locationEl, serviceError, serviceEl, staffError, staffEl, onLocationChange, onCategoryChange, onServiceChange, onStaffChange, onDurationChange, onNopChange, onQuantityChange, onDropBtnClick, item, index, defaults, required, servicesPerLocation, staffNameWithPrice, collaborativeHideStaff, showRatings, maxQuantity, date_from_element, validate, getValues, lookupLocationId, categorySelected, maxCapacity, minCapacity, srvMaxCapacity, srvMinCapacity, select_el_binding, select_el_binding_1, select_el_binding_2];
    }

    class ChainItem extends SvelteComponent {
        constructor(options) {
            super();
            init(this, options, instance$1, create_fragment$1, safe_not_equal, {
                item: 48,
                index: 49,
                locations: 0,
                categories: 1,
                services: 2,
                staff: 3,
                defaults: 50,
                required: 51,
                servicesPerLocation: 52,
                staffNameWithPrice: 53,
                collaborativeHideStaff: 54,
                showRatings: 55,
                showCategoryInfo: 4,
                showServiceInfo: 5,
                showStaffInfo: 6,
                maxQuantity: 56,
                hasLocationSelect: 7,
                hasCategorySelect: 8,
                hasServiceSelect: 9,
                hasStaffSelect: 10,
                hasDurationSelect: 11,
                hasNopSelect: 12,
                hasQuantitySelect: 13,
                hasDropBtn: 14,
                showDropBtn: 15,
                l10n: 16,
                date_from_element: 57,
                validate: 58,
                getValues: 59
            }, null, [-1, -1, -1]);
        }

        get validate() {
            return this.$$.ctx[58];
        }

        get getValues() {
            return this.$$.ctx[59];
        }
    }

    function get_each_context(ctx, list, i) {
        const child_ctx = _sliceInstanceProperty(ctx).call(ctx);
        child_ctx[9] = list[i];
        child_ctx[10] = list;
        child_ctx[11] = i;
        return child_ctx;
    }

    // (30:0) {#each items as item, index (item)}
    function create_each_block(key_1, ctx) {
        let first;
        let chainitem;
        let index = /*index*/ctx[11];
        let current;
        const chainitem_spread_levels = [/*data*/ctx[1], {
            item: /*item*/ctx[9]
        }, {
            index: /*index*/ctx[11]
        }, {
            hasDropBtn: /*multiple*/ctx[2]
        }, {
            showDropBtn: /*index*/ctx[11] > 0
        }];
        const assign_chainitem = () => /*chainitem_binding*/ctx[8](chainitem, index);
        const unassign_chainitem = () => /*chainitem_binding*/ctx[8](null, index);
        let chainitem_props = {};
        for (let i = 0; i < chainitem_spread_levels.length; i += 1) {
            chainitem_props = assign(chainitem_props, chainitem_spread_levels[i]);
        }
        chainitem = new ChainItem({
            props: chainitem_props
        });
        assign_chainitem();
        chainitem.$on("dropItem", /*onDropItem*/ctx[5]);
        return {
            key: key_1,
            first: null,
            c() {
                first = empty();
                create_component(chainitem.$$.fragment);
                this.first = first;
            },
            m(target, anchor) {
                insert(target, first, anchor);
                mount_component(chainitem, target, anchor);
                current = true;
            },
            p(new_ctx, dirty) {
                ctx = new_ctx;
                if (index !== /*index*/ctx[11]) {
                    unassign_chainitem();
                    index = /*index*/ctx[11];
                    assign_chainitem();
                }
                const chainitem_changes = dirty & /*data, items, multiple*/7 ? get_spread_update(chainitem_spread_levels, [dirty & /*data*/2 && get_spread_object( /*data*/ctx[1]), dirty & /*items*/1 && {
                    item: /*item*/ctx[9]
                }, dirty & /*items*/1 && {
                    index: /*index*/ctx[11]
                }, dirty & /*multiple*/4 && {
                    hasDropBtn: /*multiple*/ctx[2]
                }, dirty & /*items*/1 && {
                    showDropBtn: /*index*/ctx[11] > 0
                }]) : {};
                chainitem.$set(chainitem_changes);
            },
            i(local) {
                if (current) return;
                transition_in(chainitem.$$.fragment, local);
                current = true;
            },
            o(local) {
                transition_out(chainitem.$$.fragment, local);
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(first);
                }
                unassign_chainitem();
                destroy_component(chainitem, detaching);
            }
        };
    }

    // (33:0) {#if multiple}
    function create_if_block(ctx) {
        let div;
        let button;
        let span;
        let t_value = /*data*/ctx[1].l10n.add_service + "";
        let t;
        let mounted;
        let dispose;
        return {
            c() {
                div = element("div");
                button = element("button");
                span = element("span");
                t = text(t_value);
                attr(span, "class", "ladda-label");
                attr(button, "class", "bookly-btn ladda-button");
                attr(button, "data-style", "zoom-in");
                attr(button, "data-spinner-size", "40");
                attr(div, "class", "bookly-box");
            },
            m(target, anchor) {
                insert(target, div, anchor);
                append(div, button);
                append(button, span);
                append(span, t);
                if (!mounted) {
                    dispose = listen(button, "click", /*onAddItem*/ctx[4]);
                    mounted = true;
                }
            },
            p(ctx, dirty) {
                if (dirty & /*data*/2 && t_value !== (t_value = /*data*/ctx[1].l10n.add_service + "")) set_data(t, t_value);
            },
            d(detaching) {
                if (detaching) {
                    detach(div);
                }
                mounted = false;
                dispose();
            }
        };
    }

    function create_fragment(ctx) {
        let each_blocks = [];
        let each_1_lookup = new _Map();
        let t;
        let if_block_anchor;
        let current;
        let each_value = ensure_array_like( /*items*/ctx[0]);
        const get_key = ctx => /*item*/ctx[9];
        for (let i = 0; i < each_value.length; i += 1) {
            let child_ctx = get_each_context(ctx, each_value, i);
            let key = get_key(child_ctx);
            each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
        }
        let if_block = /*multiple*/ctx[2] && create_if_block(ctx);
        return {
            c() {
                for (let i = 0; i < each_blocks.length; i += 1) {
                    each_blocks[i].c();
                }
                t = space();
                if (if_block) if_block.c();
                if_block_anchor = empty();
            },
            m(target, anchor) {
                for (let i = 0; i < each_blocks.length; i += 1) {
                    if (each_blocks[i]) {
                        each_blocks[i].m(target, anchor);
                    }
                }
                insert(target, t, anchor);
                if (if_block) if_block.m(target, anchor);
                insert(target, if_block_anchor, anchor);
                current = true;
            },
            p(ctx, _ref) {
                let [dirty] = _ref;
                if (dirty & /*data, items, multiple, els, onDropItem*/47) {
                    each_value = ensure_array_like( /*items*/ctx[0]);
                    group_outros();
                    each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, t.parentNode, outro_and_destroy_block, create_each_block, t, get_each_context);
                    check_outros();
                }
                if ( /*multiple*/ctx[2]) {
                    if (if_block) {
                        if_block.p(ctx, dirty);
                    } else {
                        if_block = create_if_block(ctx);
                        if_block.c();
                        if_block.m(if_block_anchor.parentNode, if_block_anchor);
                    }
                } else if (if_block) {
                    if_block.d(1);
                    if_block = null;
                }
            },
            i(local) {
                if (current) return;
                for (let i = 0; i < each_value.length; i += 1) {
                    transition_in(each_blocks[i]);
                }
                current = true;
            },
            o(local) {
                for (let i = 0; i < each_blocks.length; i += 1) {
                    transition_out(each_blocks[i]);
                }
                current = false;
            },
            d(detaching) {
                if (detaching) {
                    detach(t);
                    detach(if_block_anchor);
                }
                for (let i = 0; i < each_blocks.length; i += 1) {
                    each_blocks[i].d(detaching);
                }
                if (if_block) if_block.d(detaching);
            }
        };
    }

    function instance($$self, $$props, $$invalidate) {
        let {
            items = []
        } = $$props;
        let {
            data = {}
        } = $$props;
        let {
            multiple = false
        } = $$props;
        let els = [];

        function onAddItem() {
            items.push({});
            $$invalidate(0, items);
        }

        function onDropItem(event) {
            _spliceInstanceProperty(items).call(items, event.detail, 1);
            $$invalidate(0, items);
            _spliceInstanceProperty(els).call(els, event.detail, 1);
        }

        function validate() {
            var _context;
            return _mapInstanceProperty(_context = _filterInstanceProperty(els).call(els, el => !!el)).call(_context, el => el.validate());
        }

        function getValues() {
            var _context2;
            return _mapInstanceProperty(_context2 = _filterInstanceProperty(els).call(els, el => !!el)).call(_context2, el => el.getValues());
        }

        function chainitem_binding($$value, index) {
            binding_callbacks[$$value ? 'unshift' : 'push'](() => {
                els[index] = $$value;
                $$invalidate(3, els);
            });
        }

        $$self.$$set = $$props => {
            if ('items' in $$props) $$invalidate(0, items = $$props.items);
            if ('data' in $$props) $$invalidate(1, data = $$props.data);
            if ('multiple' in $$props) $$invalidate(2, multiple = $$props.multiple);
        };
        return [items, data, multiple, els, onAddItem, onDropItem, validate, getValues, chainitem_binding];
    }

    class Chain extends SvelteComponent {
        constructor(options) {
            super();
            init(this, options, instance, create_fragment, safe_not_equal, {
                items: 0,
                data: 1,
                multiple: 2,
                validate: 6,
                getValues: 7
            });
        }

        get validate() {
            return this.$$.ctx[6];
        }

        get getValues() {
            return this.$$.ctx[7];
        }
    }

    /**
     * Service step.
     */
    function stepService(params) {
        if (opt[params.form_id].skip_steps.service) {
            if (!opt[params.form_id].skip_steps.extras && opt[params.form_id].step_extras == 'before_step_time') {
                stepExtras(params);
            } else {
                stepTime(params);
            }
            return;
        }
        var data = {
                action: 'bookly_render_service'
            },
            $container = opt[params.form_id].$container;
        if (opt[params.form_id].use_client_time_zone) {
            data.time_zone = opt[params.form_id].timeZone;
            data.time_zone_offset = opt[params.form_id].timeZoneOffset;
        }
        $$O.extend(data, params);
        booklyAjax({
            data
        }).then(response => {
            BooklyL10n.csrf_token = response.csrf_token;
            $container.html(response.html);
            scrollTo($container, params.form_id);
            var $chain = $$O('.bookly-js-chain', $container),
                $date_from = $$O('.bookly-js-date-from', $container),
                $week_days = $$O('.bookly-js-week-days', $container),
                $select_time_from = $$O('.bookly-js-select-time-from', $container),
                $select_time_to = $$O('.bookly-js-select-time-to', $container),
                $next_step = $$O('.bookly-js-next-step', $container),
                $mobile_next_step = $$O('.bookly-js-mobile-next-step', $container),
                $mobile_prev_step = $$O('.bookly-js-mobile-prev-step', $container),
                locations = response.locations,
                categories = response.categories,
                services = response.services,
                staff = response.staff,
                chain = response.chain,
                required = response.required,
                defaults = opt[params.form_id].defaults,
                servicesPerLocation = response.services_per_location || false,
                serviceNameWithDuration = response.service_name_with_duration,
                staffNameWithPrice = response.staff_name_with_price,
                collaborativeHideStaff = response.collaborative_hide_staff,
                showRatings = response.show_ratings,
                showCategoryInfo = response.show_category_info,
                showServiceInfo = response.show_service_info,
                showStaffInfo = response.show_staff_info,
                maxQuantity = response.max_quantity || 1,
                multiple = response.multi_service || false,
                l10n = response.l10n,
                customJS = response.custom_js;

            // Set up selects.
            if (serviceNameWithDuration) {
                $$O.each(services, function (id, service) {
                    service.name = service.name + ' ( ' + service.duration + ' )';
                });
            }
            let c = new Chain({
                target: $chain.get(0),
                props: {
                    items: chain,
                    data: {
                        locations,
                        categories,
                        services,
                        staff,
                        defaults,
                        required,
                        servicesPerLocation,
                        staffNameWithPrice,
                        collaborativeHideStaff,
                        showRatings,
                        showCategoryInfo,
                        showServiceInfo,
                        showStaffInfo,
                        maxQuantity,
                        date_from_element: $date_from,
                        hasLocationSelect: !opt[params.form_id].form_attributes.hide_locations,
                        hasCategorySelect: !opt[params.form_id].form_attributes.hide_categories,
                        hasServiceSelect: !(opt[params.form_id].form_attributes.hide_services && defaults.service_id),
                        hasStaffSelect: !opt[params.form_id].form_attributes.hide_staff_members,
                        hasDurationSelect: !opt[params.form_id].form_attributes.hide_service_duration,
                        hasNopSelect: opt[params.form_id].form_attributes.show_number_of_persons,
                        hasQuantitySelect: !opt[params.form_id].form_attributes.hide_quantity,
                        l10n
                    },
                    multiple
                }
            });

            // Init Pickadate.
            $date_from.data('date_min', response.date_min || true);
            $date_from.pickadate({
                formatSubmit: 'yyyy-mm-dd',
                format: opt[params.form_id].date_format,
                min: response.date_min || true,
                max: response.date_max || true,
                clear: false,
                close: false,
                today: BooklyL10n.today,
                monthsFull: BooklyL10n.months,
                monthsShort: BooklyL10n.monthsShort,
                weekdaysFull: BooklyL10n.days,
                weekdaysShort: BooklyL10n.daysShort,
                labelMonthNext: BooklyL10n.nextMonth,
                labelMonthPrev: BooklyL10n.prevMonth,
                firstDay: opt[params.form_id].firstDay,
                onSet: function (timestamp) {
                    if ($$O.isNumeric(timestamp.select)) {
                        // Checks appropriate day of the week
                        var date = new Date(timestamp.select);
                        $$O('.bookly-js-week-days input:checkbox[value="' + (date.getDay() + 1) + '"]:not(:checked)', $container).attr('checked', true).trigger('change');
                    }
                },
                onClose: function () {
                    $date_from.data('updated', true);
                    // Hide for skip tab navigations by days of the month when the calendar is closed
                    $$O('#' + $date_from.attr('aria-owns')).hide();
                }
            }).focusin(function () {
                // Restore calendar visibility, changed on onClose
                $$O('#' + $date_from.attr('aria-owns')).show();
            });
            $$O('.bookly-js-go-to-cart', $container).on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                laddaStart(this);
                stepCart({
                    form_id: params.form_id,
                    from_step: 'service'
                });
            });
            if (opt[params.form_id].form_attributes.hide_date) {
                $$O('.bookly-js-available-date', $container).hide();
            }
            if (opt[params.form_id].form_attributes.hide_week_days) {
                $$O('.bookly-js-week-days', $container).hide();
            }
            if (opt[params.form_id].form_attributes.hide_time_range) {
                $$O('.bookly-js-time-range', $container).hide();
            }

            // time from
            $select_time_from.on('change', function () {
                var start_time = $$O(this).val(),
                    end_time = $select_time_to.val(),
                    $last_time_entry = $$O('option:last', $select_time_from);
                $select_time_to.empty();

                // case when we click on the not last time entry
                if ($select_time_from[0].selectedIndex < $last_time_entry.index()) {
                    // clone and append all next "time_from" time entries to "time_to" list
                    $$O('option', this).each(function () {
                        if ($$O(this).val() > start_time) {
                            $select_time_to.append($$O(this).clone());
                        }
                    });
                    // case when we click on the last time entry
                } else {
                    $select_time_to.append($last_time_entry.clone()).val($last_time_entry.val());
                }
                var first_value = $$O('option:first', $select_time_to).val();
                $select_time_to.val(end_time >= first_value ? end_time : first_value);
            });
            let stepServiceValidator = function () {
                let valid = true,
                    $scroll_to = null;
                $$O(c.validate()).each(function (_, status) {
                    if (!status.valid) {
                        valid = false;
                        let $el = $$O(status.el);
                        if ($el.is(':visible')) {
                            $scroll_to = $el;
                            return false;
                        }
                    }
                });
                $date_from.removeClass('bookly-error');
                // date validation
                if (!$date_from.val()) {
                    valid = false;
                    $date_from.addClass('bookly-error');
                    if ($scroll_to === null) {
                        $scroll_to = $date_from;
                    }
                }

                // week days
                if ($week_days.length && !$$O(':checked', $week_days).length) {
                    valid = false;
                    $week_days.addClass('bookly-error');
                    if ($scroll_to === null) {
                        $scroll_to = $week_days;
                    }
                } else {
                    $week_days.removeClass('bookly-error');
                }
                if ($scroll_to !== null) {
                    scrollTo($scroll_to, params.form_id);
                }
                return valid;
            };

            // "Next" click
            $next_step.on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (stepServiceValidator()) {
                    laddaStart(this);

                    // Execute custom JavaScript
                    if (customJS) {
                        try {
                            $$O.globalEval(customJS.next_button);
                        } catch (e) {
                            // Do nothing
                        }
                    }

                    // Prepare chain data.
                    let chain = [],
                        has_extras = 0,
                        time_requirements = 0,
                        recurrence_enabled = 1,
                        _time_requirements = {
                            'required': 2,
                            'optional': 1,
                            'off': 0
                        };
                    $$O.each(c.getValues(), function (_, values) {
                        let _service = services[values.serviceId];
                        chain.push({
                            location_id: values.locationId,
                            service_id: values.serviceId,
                            staff_ids: values.staffIds,
                            units: values.duration,
                            number_of_persons: values.nop,
                            quantity: values.quantity
                        });
                        time_requirements = Math.max(time_requirements, _time_requirements[_service.hasOwnProperty('time_requirements') ? _service.time_requirements : 'required']);
                        recurrence_enabled = Math.min(recurrence_enabled, _service.recurrence_enabled);
                        has_extras += _service.has_extras;
                    });

                    // Prepare days.
                    var days = [];
                    $$O('.bookly-js-week-days input:checked', $container).each(function () {
                        days.push(this.value);
                    });
                    booklyAjax({
                        type: 'POST',
                        data: {
                            action: 'bookly_session_save',
                            form_id: params.form_id,
                            chain: chain,
                            date_from: $date_from.pickadate('picker').get('select', 'yyyy-mm-dd'),
                            days: days,
                            time_from: opt[params.form_id].form_attributes.hide_time_range ? null : $select_time_from.val(),
                            time_to: opt[params.form_id].form_attributes.hide_time_range ? null : $select_time_to.val(),
                            no_extras: has_extras == 0
                        }
                    }).then(response => {
                        opt[params.form_id].no_time = time_requirements == 0;
                        opt[params.form_id].no_extras = has_extras == 0;
                        opt[params.form_id].recurrence_enabled = recurrence_enabled == 1;
                        if (opt[params.form_id].skip_steps.extras) {
                            stepTime({
                                form_id: params.form_id
                            });
                        } else {
                            if (has_extras == 0 || opt[params.form_id].step_extras == 'after_step_time') {
                                stepTime({
                                    form_id: params.form_id
                                });
                            } else {
                                stepExtras({
                                    form_id: params.form_id
                                });
                            }
                        }
                    });
                }
            });
            $mobile_next_step.on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (stepServiceValidator()) {
                    if (opt[params.form_id].skip_steps.service_part2) {
                        laddaStart(this);
                        $next_step.trigger('click');
                    } else {
                        $$O('.bookly-js-mobile-step-1', $container).hide();
                        $$O('.bookly-stepper li:eq(1)', $container).addClass('bookly-step-active');
                        $$O('.bookly-stepper li:eq(0)', $container).removeClass('bookly-step-active');
                        $$O('.bookly-js-mobile-step-2', $container).css('display', 'block');
                        scrollTo($container, params.form_id);
                    }
                }
                return false;
            });
            if (opt[params.form_id].skip_steps.service_part1) {
                // Skip scrolling
                // Timeout to let form set default values
                _setTimeout(function () {
                    opt[params.form_id].scroll = false;
                    $mobile_next_step.trigger('click');
                    $$O('.bookly-stepper li:eq(0)', $container).addClass('bookly-step-active');
                    $$O('.bookly-stepper li:eq(1)', $container).removeClass('bookly-step-active');
                }, 0);
                $mobile_prev_step.remove();
            } else {
                $mobile_prev_step.on('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $$O('.bookly-js-mobile-step-1', $container).show();
                    $$O('.bookly-js-mobile-step-2', $container).hide();
                    $$O('.bookly-stepper li:eq(0)', $container).addClass('bookly-step-active');
                    $$O('.bookly-stepper li:eq(1)', $container).removeClass('bookly-step-active');
                    return false;
                });
            }
        });
    }

    /**
     * Main Bookly function.
     *
     * @param options
     */
    function main(options) {
        let $container = $$O('#bookly-form-' + options.form_id);
        if (!$container.length) {
            return;
        }
        opt[options.form_id] = options;
        opt[options.form_id].$container = $container;
        opt[options.form_id].timeZone = typeof Intl === 'object' ? Intl.DateTimeFormat().resolvedOptions().timeZone : undefined;
        opt[options.form_id].timeZoneOffset = new Date().getTimezoneOffset();
        opt[options.form_id].skip_steps.service = options.skip_steps.service_part1 && options.skip_steps.service_part2;

        // initialize
        if (options.status.booking == 'finished') {
            opt[options.form_id].scroll = true;
            stepComplete({
                form_id: options.form_id
            });
        } else if (options.status.booking == 'cancelled') {
            opt[options.form_id].scroll = true;
            stepPayment({
                form_id: options.form_id
            });
        } else {
            opt[options.form_id].scroll = false;
            stepService({
                form_id: options.form_id,
                new_chain: true
            });
        }
        if (options.hasOwnProperty('facebook') && options.facebook.enabled) {
            initFacebookLogin(options);
        }

        // init google places

        if (options.hasOwnProperty('google_maps') && options.google_maps.enabled) {
            var apiKey = options.google_maps.api_key,
                src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&libraries=places';
            importScript(src, true);
        }
        if (options.hasOwnProperty('stripe') && options.stripe.enabled) {
            importScript('https://js.stripe.com/v3/', true);
        }
    }

    /**
     * Init Facebook login.
     */
    function initFacebookLogin(options) {
        if (typeof FB !== 'undefined') {
            FB.init({
                appId: options.facebook.appId,
                status: true,
                version: 'v2.12'
            });
            FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    options.facebook.enabled = false;
                    FB.api('/me', {
                        fields: 'id,name,first_name,last_name,email,link'
                    }, function (userInfo) {
                        booklyAjax({
                            type: 'POST',
                            data: $$O.extend(userInfo, {
                                action: 'bookly_pro_facebook_login',
                                form_id: options.form_id
                            })
                        });
                    });
                } else {
                    FB.Event.subscribe('auth.statusChange', function (response) {
                        if (options.facebook.onStatusChange) {
                            options.facebook.onStatusChange(response);
                        }
                    });
                }
            });
        }
    }

    function importScript(src, async, onLoad) {
        var script = document.createElement("script");
        script.type = "text\/javascript";
        if (async !== undefined) {
            script.async = async;
        }
        if (onLoad instanceof Function) {
            script.onload = onLoad;
        }
        document.head.appendChild(script);
        script.src = src;
    }

    return main;

})(jQuery);
