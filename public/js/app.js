/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

    /***/
    "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
    /*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {


        var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./all.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;


        var options = {"hmr": true};

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

        if (content.locals) module.exports = content.locals;

        if (false) {
        }

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot":
    /*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot ***!
  \*******************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.eot?5063b105c7646c8043d58c5289f02cca";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg":
    /*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg ***!
  \*******************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.svg?a9c4bb7348f42626454c988dbde1d0a0";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf":
    /*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf ***!
  \*******************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.ttf?06147b6cd88c7346cecd1edd060cd5de";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff":
    /*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff ***!
  \********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.woff?c5e0f14f88a828261ba01558ce2bf26f";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2":
    /*!*********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2 ***!
  \*********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-brands-400.woff2?cccc9d29470e879e40eb70249d9a2705";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot":
    /*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot ***!
  \********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-regular-400.eot?c1a866ec0e04a5e1915b41fcf261457c";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg":
    /*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg ***!
  \********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-regular-400.svg?7b9568e6389b1f8ae0902cd39665fc1e";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf":
    /*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf ***!
  \********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-regular-400.ttf?65b286af947c0d982ca01b40e1fcab38";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff":
    /*!*********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff ***!
  \*********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-regular-400.woff?c4f508e7c4f01a9eeba7f08155cde04e";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2":
    /*!**********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2 ***!
  \**********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-regular-400.woff2?f5f2566b93e89391da4db79462b8078b";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot":
    /*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot ***!
  \******************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.eot?8e4a6dcc692b3887f9f542cd6894d6d4";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg":
    /*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg ***!
  \******************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.svg?c2801fb415f03c7b170934769d7b5397";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf":
    /*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf ***!
  \******************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.ttf?0bff33a5fd7ec390235476b4859747a0";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff":
    /*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff ***!
  \*******************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.woff?333bae208dc363746961b234ff6c2500";

        /***/
    }),

    /***/
    "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2":
    /*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2 ***!
  \********************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = "/fonts/vendor/@fortawesome/fontawesome-free/webfa-solid-900.woff2?44d537ab79f921fde5a28b2c1636f397";

        /***/
    }),

    /***/
    "./node_modules/bootstrap/dist/css/bootstrap.min.css":
    /*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {


        var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./bootstrap.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap/dist/css/bootstrap.min.css");

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;


        var options = {"hmr": true};

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

        if (content.locals) module.exports = content.locals;

        if (false) {
        }

        /***/
    }),

    /***/
    "./node_modules/bootstrap/dist/js/bootstrap.min.js":
    /*!*********************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
        !function (t, e) {
            true ? e(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) : undefined
        }(this, function (t, g, u) {
            "use strict";

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function s(t, e, n) {
                return e && i(t.prototype, e), n && i(t, n), t
            }

            function l(o) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {}, e = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), e.forEach(function (t) {
                        var e, n, i;
                        e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = i
                    })
                }
                return o
            }

            g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u;
            var e = "transitionend";

            function n(t) {
                var e = this, n = !1;
                return g(this).one(_.TRANSITION_END, function () {
                    n = !0
                }), setTimeout(function () {
                    n || _.triggerTransitionEnd(e)
                }, t), this
            }

            var _ = {
                TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
                    for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) ;
                    return t
                }, getSelectorFromElement: function (t) {
                    var e = t.getAttribute("data-target");
                    if (!e || "#" === e) {
                        var n = t.getAttribute("href");
                        e = n && "#" !== n ? n.trim() : ""
                    }
                    try {
                        return document.querySelector(e) ? e : null
                    } catch (t) {
                        return null
                    }
                }, getTransitionDurationFromElement: function (t) {
                    if (!t) return 0;
                    var e = g(t).css("transition-duration"), n = g(t).css("transition-delay"), i = parseFloat(e),
                        o = parseFloat(n);
                    return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
                }, reflow: function (t) {
                    return t.offsetHeight
                }, triggerTransitionEnd: function (t) {
                    g(t).trigger(e)
                }, supportsTransitionEnd: function () {
                    return Boolean(e)
                }, isElement: function (t) {
                    return (t[0] || t).nodeType
                }, typeCheckConfig: function (t, e, n) {
                    for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var o = n[i], r = e[i],
                            s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                    }
                    var a
                }, findShadowRoot: function (t) {
                    if (!document.documentElement.attachShadow) return null;
                    if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
                    var e = t.getRootNode();
                    return e instanceof ShadowRoot ? e : null
                }
            };
            g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = {
                bindType: e,
                delegateType: e,
                handle: function (t) {
                    if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            };
            var o = "alert", r = "bs.alert", a = "." + r, c = g.fn[o],
                h = {CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api"}, f = "alert",
                d = "fade", m = "show", p = function () {
                    function i(t) {
                        this._element = t
                    }

                    var t = i.prototype;
                    return t.close = function (t) {
                        var e = this._element;
                        t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                    }, t.dispose = function () {
                        g.removeData(this._element, r), this._element = null
                    }, t._getRootElement = function (t) {
                        var e = _.getSelectorFromElement(t), n = !1;
                        return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n
                    }, t._triggerCloseEvent = function (t) {
                        var e = g.Event(h.CLOSE);
                        return g(t).trigger(e), e
                    }, t._removeElement = function (e) {
                        var n = this;
                        if (g(e).removeClass(m), g(e).hasClass(d)) {
                            var t = _.getTransitionDurationFromElement(e);
                            g(e).one(_.TRANSITION_END, function (t) {
                                return n._destroyElement(e, t)
                            }).emulateTransitionEnd(t)
                        } else this._destroyElement(e)
                    }, t._destroyElement = function (t) {
                        g(t).detach().trigger(h.CLOSED).remove()
                    }, i._jQueryInterface = function (n) {
                        return this.each(function () {
                            var t = g(this), e = t.data(r);
                            e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this)
                        })
                    }, i._handleDismiss = function (e) {
                        return function (t) {
                            t && t.preventDefault(), e.close(this)
                        }
                    }, s(i, null, [{
                        key: "VERSION", get: function () {
                            return "4.3.1"
                        }
                    }]), i
                }();
            g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function () {
                return g.fn[o] = c, p._jQueryInterface
            };
            var v = "button", y = "bs.button", E = "." + y, C = ".data-api", T = g.fn[v], S = "active", b = "btn",
                I = "focus", D = '[data-toggle^="button"]', w = '[data-toggle="buttons"]',
                A = 'input:not([type="hidden"])', N = ".active", O = ".btn",
                k = {CLICK_DATA_API: "click" + E + C, FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C},
                P = function () {
                    function n(t) {
                        this._element = t
                    }

                    var t = n.prototype;
                    return t.toggle = function () {
                        var t = !0, e = !0, n = g(this._element).closest(w)[0];
                        if (n) {
                            var i = this._element.querySelector(A);
                            if (i) {
                                if ("radio" === i.type) if (i.checked && this._element.classList.contains(S)) t = !1; else {
                                    var o = n.querySelector(N);
                                    o && g(o).removeClass(S)
                                }
                                if (t) {
                                    if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                    i.checked = !this._element.classList.contains(S), g(i).trigger("change")
                                }
                                i.focus(), e = !1
                            }
                        }
                        e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S)
                    }, t.dispose = function () {
                        g.removeData(this._element, y), this._element = null
                    }, n._jQueryInterface = function (e) {
                        return this.each(function () {
                            var t = g(this).data(y);
                            t || (t = new n(this), g(this).data(y, t)), "toggle" === e && t[e]()
                        })
                    }, s(n, null, [{
                        key: "VERSION", get: function () {
                            return "4.3.1"
                        }
                    }]), n
                }();
            g(document).on(k.CLICK_DATA_API, D, function (t) {
                t.preventDefault();
                var e = t.target;
                g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle")
            }).on(k.FOCUS_BLUR_DATA_API, D, function (t) {
                var e = g(t.target).closest(O)[0];
                g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
            }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function () {
                return g.fn[v] = T, P._jQueryInterface
            };
            var L = "carousel", j = "bs.carousel", H = "." + j, R = ".data-api", x = g.fn[L],
                F = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, U = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean",
                    touch: "boolean"
                }, W = "next", q = "prev", M = "left", K = "right", Q = {
                    SLIDE: "slide" + H,
                    SLID: "slid" + H,
                    KEYDOWN: "keydown" + H,
                    MOUSEENTER: "mouseenter" + H,
                    MOUSELEAVE: "mouseleave" + H,
                    TOUCHSTART: "touchstart" + H,
                    TOUCHMOVE: "touchmove" + H,
                    TOUCHEND: "touchend" + H,
                    POINTERDOWN: "pointerdown" + H,
                    POINTERUP: "pointerup" + H,
                    DRAG_START: "dragstart" + H,
                    LOAD_DATA_API: "load" + H + R,
                    CLICK_DATA_API: "click" + H + R
                }, B = "carousel", V = "active", Y = "slide", z = "carousel-item-right", X = "carousel-item-left",
                $ = "carousel-item-next", G = "carousel-item-prev", J = "pointer-event", Z = ".active",
                tt = ".active.carousel-item", et = ".carousel-item", nt = ".carousel-item img",
                it = ".carousel-item-next, .carousel-item-prev", ot = ".carousel-indicators",
                rt = "[data-slide], [data-slide-to]", st = '[data-ride="carousel"]', at = {TOUCH: "touch", PEN: "pen"},
                lt = function () {
                    function r(t, e) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                    }

                    var t = r.prototype;
                    return t.next = function () {
                        this._isSliding || this._slide(W)
                    }, t.nextWhenVisible = function () {
                        !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
                    }, t.prev = function () {
                        this._isSliding || this._slide(q)
                    }, t.pause = function (t) {
                        t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, t.cycle = function (t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, t.to = function (t) {
                        var e = this;
                        this._activeElement = this._element.querySelector(tt);
                        var n = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Q.SLID, function () {
                            return e.to(t)
                        }); else {
                            if (n === t) return this.pause(), void this.cycle();
                            var i = n < t ? W : q;
                            this._slide(i, this._items[t])
                        }
                    }, t.dispose = function () {
                        g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, t._getConfig = function (t) {
                        return t = l({}, F, t), _.typeCheckConfig(L, t, U), t
                    }, t._handleSwipe = function () {
                        var t = Math.abs(this.touchDeltaX);
                        if (!(t <= 40)) {
                            var e = t / this.touchDeltaX;
                            0 < e && this.prev(), e < 0 && this.next()
                        }
                    }, t._addEventListeners = function () {
                        var e = this;
                        this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) {
                            return e._keydown(t)
                        }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function (t) {
                            return e.pause(t)
                        }).on(Q.MOUSELEAVE, function (t) {
                            return e.cycle(t)
                        }), this._config.touch && this._addTouchEventListeners()
                    }, t._addTouchEventListeners = function () {
                        var n = this;
                        if (this._touchSupported) {
                            var e = function (t) {
                                n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                            }, i = function (t) {
                                n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
                                    return n.cycle(t)
                                }, 500 + n._config.interval))
                            };
                            g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
                                return t.preventDefault()
                            }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) {
                                return e(t)
                            }), g(this._element).on(Q.POINTERUP, function (t) {
                                return i(t)
                            }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function (t) {
                                return e(t)
                            }), g(this._element).on(Q.TOUCHMOVE, function (t) {
                                var e;
                                (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                            }), g(this._element).on(Q.TOUCHEND, function (t) {
                                return i(t)
                            }))
                        }
                    }, t._keydown = function (t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next()
                        }
                    }, t._getItemIndex = function (t) {
                        return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t)
                    }, t._getItemByDirection = function (t, e) {
                        var n = t === W, i = t === q, o = this._getItemIndex(e), r = this._items.length - 1;
                        if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                        var s = (o + (t === q ? -1 : 1)) % this._items.length;
                        return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                    }, t._triggerSlideEvent = function (t, e) {
                        var n = this._getItemIndex(t), i = this._getItemIndex(this._element.querySelector(tt)),
                            o = g.Event(Q.SLIDE, {relatedTarget: t, direction: e, from: i, to: n});
                        return g(this._element).trigger(o), o
                    }, t._setActiveIndicatorElement = function (t) {
                        if (this._indicatorsElement) {
                            var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                            g(e).removeClass(V);
                            var n = this._indicatorsElement.children[this._getItemIndex(t)];
                            n && g(n).addClass(V)
                        }
                    }, t._slide = function (t, e) {
                        var n, i, o, r = this, s = this._element.querySelector(tt), a = this._getItemIndex(s),
                            l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l),
                            h = Boolean(this._interval);
                        if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                            this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                            var u = g.Event(Q.SLID, {relatedTarget: l, direction: o, from: a, to: c});
                            if (g(this._element).hasClass(Y)) {
                                g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
                                var f = parseInt(l.getAttribute("data-interval"), 10);
                                this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
                                var d = _.getTransitionDurationFromElement(s);
                                g(s).one(_.TRANSITION_END, function () {
                                    g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
                                        return g(r._element).trigger(u)
                                    }, 0)
                                }).emulateTransitionEnd(d)
                            } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);
                            h && this.cycle()
                        }
                    }, r._jQueryInterface = function (i) {
                        return this.each(function () {
                            var t = g(this).data(j), e = l({}, F, g(this).data());
                            "object" == typeof i && (e = l({}, e, i));
                            var n = "string" == typeof i ? i : e.slide;
                            if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) {
                                if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                                t[n]()
                            } else e.interval && e.ride && (t.pause(), t.cycle())
                        })
                    }, r._dataApiClickHandler = function (t) {
                        var e = _.getSelectorFromElement(this);
                        if (e) {
                            var n = g(e)[0];
                            if (n && g(n).hasClass(B)) {
                                var i = l({}, g(n).data(), g(this).data()), o = this.getAttribute("data-slide-to");
                                o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault()
                            }
                        }
                    }, s(r, null, [{
                        key: "VERSION", get: function () {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default", get: function () {
                            return F
                        }
                    }]), r
                }();
            g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function () {
                for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
                    var i = g(t[e]);
                    lt._jQueryInterface.call(i, i.data())
                }
            }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function () {
                return g.fn[L] = x, lt._jQueryInterface
            };
            var ct = "collapse", ht = "bs.collapse", ut = "." + ht, ft = g.fn[ct], dt = {toggle: !0, parent: ""},
                gt = {toggle: "boolean", parent: "(string|element)"}, _t = {
                    SHOW: "show" + ut,
                    SHOWN: "shown" + ut,
                    HIDE: "hide" + ut,
                    HIDDEN: "hidden" + ut,
                    CLICK_DATA_API: "click" + ut + ".data-api"
                }, mt = "show", pt = "collapse", vt = "collapsing", yt = "collapsed", Et = "width", Ct = "height",
                Tt = ".show, .collapsing", St = '[data-toggle="collapse"]', bt = function () {
                    function a(e, t) {
                        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                        for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                            var r = n[i], s = _.getSelectorFromElement(r),
                                a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                                    return t === e
                                });
                            null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }

                    var t = a.prototype;
                    return t.toggle = function () {
                        g(this._element).hasClass(mt) ? this.hide() : this.show()
                    }, t.show = function () {
                        var t, e, n = this;
                        if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
                            return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt)
                        })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
                            var i = g.Event(_t.SHOW);
                            if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
                                t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));
                                var o = this._getDimension();
                                g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                                    s = _.getTransitionDurationFromElement(this._element);
                                g(this._element).one(_.TRANSITION_END, function () {
                                    g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN)
                                }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px"
                            }
                        }
                    }, t.hide = function () {
                        var t = this;
                        if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                            var e = g.Event(_t.HIDE);
                            if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                                var n = this._getDimension();
                                this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                                var i = this._triggerArray.length;
                                if (0 < i) for (var o = 0; o < i; o++) {
                                    var r = this._triggerArray[o], s = _.getSelectorFromElement(r);
                                    if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1)
                                }
                                this.setTransitioning(!0);
                                this._element.style[n] = "";
                                var a = _.getTransitionDurationFromElement(this._element);
                                g(this._element).one(_.TRANSITION_END, function () {
                                    t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)
                                }).emulateTransitionEnd(a)
                            }
                        }
                    }, t.setTransitioning = function (t) {
                        this._isTransitioning = t
                    }, t.dispose = function () {
                        g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, t._getConfig = function (t) {
                        return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t
                    }, t._getDimension = function () {
                        return g(this._element).hasClass(Et) ? Et : Ct
                    }, t._getParent = function () {
                        var t, n = this;
                        _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                        var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                            i = [].slice.call(t.querySelectorAll(e));
                        return g(i).each(function (t, e) {
                            n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                        }), t
                    }, t._addAriaAndCollapsedClass = function (t, e) {
                        var n = g(t).hasClass(mt);
                        e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n)
                    }, a._getTargetFromElement = function (t) {
                        var e = _.getSelectorFromElement(t);
                        return e ? document.querySelector(e) : null
                    }, a._jQueryInterface = function (i) {
                        return this.each(function () {
                            var t = g(this), e = t.data(ht), n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                            if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) {
                                if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                                e[i]()
                            }
                        })
                    }, s(a, null, [{
                        key: "VERSION", get: function () {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default", get: function () {
                            return dt
                        }
                    }]), a
                }();
            g(document).on(_t.CLICK_DATA_API, St, function (t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var n = g(this), e = _.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(e));
                g(i).each(function () {
                    var t = g(this), e = t.data(ht) ? "toggle" : n.data();
                    bt._jQueryInterface.call(t, e)
                })
            }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function () {
                return g.fn[ct] = ft, bt._jQueryInterface
            };
            var It = "dropdown", Dt = "bs.dropdown", wt = "." + Dt, At = ".data-api", Nt = g.fn[It],
                Ot = new RegExp("38|40|27"), kt = {
                    HIDE: "hide" + wt,
                    HIDDEN: "hidden" + wt,
                    SHOW: "show" + wt,
                    SHOWN: "shown" + wt,
                    CLICK: "click" + wt,
                    CLICK_DATA_API: "click" + wt + At,
                    KEYDOWN_DATA_API: "keydown" + wt + At,
                    KEYUP_DATA_API: "keyup" + wt + At
                }, Pt = "disabled", Lt = "show", jt = "dropup", Ht = "dropright", Rt = "dropleft",
                xt = "dropdown-menu-right", Ft = "position-static", Ut = '[data-toggle="dropdown"]',
                Wt = ".dropdown form", qt = ".dropdown-menu", Mt = ".navbar-nav",
                Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Qt = "top-start", Bt = "top-end",
                Vt = "bottom-start", Yt = "bottom-end", zt = "right-start", Xt = "left-start",
                $t = {offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic"}, Gt = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)",
                    reference: "(string|element)",
                    display: "string"
                }, Jt = function () {
                    function c(t, e) {
                        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }

                    var t = c.prototype;
                    return t.toggle = function () {
                        if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                            var t = c._getParentFromElement(this._element), e = g(this._menu).hasClass(Lt);
                            if (c._clearMenus(), !e) {
                                var n = {relatedTarget: this._element}, i = g.Event(kt.SHOW, n);
                                if (g(t).trigger(i), !i.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                        var o = this._element;
                                        "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n))
                                }
                            }
                        }
                    }, t.show = function () {
                        if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                            var t = {relatedTarget: this._element}, e = g.Event(kt.SHOW, t),
                                n = c._getParentFromElement(this._element);
                            g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)))
                        }
                    }, t.hide = function () {
                        if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                            var t = {relatedTarget: this._element}, e = g.Event(kt.HIDE, t),
                                n = c._getParentFromElement(this._element);
                            g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)))
                        }
                    }, t.dispose = function () {
                        g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
                    }, t.update = function () {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, t._addEventListeners = function () {
                        var e = this;
                        g(this._element).on(kt.CLICK, function (t) {
                            t.preventDefault(), t.stopPropagation(), e.toggle()
                        })
                    }, t._getConfig = function (t) {
                        return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t
                    }, t._getMenuElement = function () {
                        if (!this._menu) {
                            var t = c._getParentFromElement(this._element);
                            t && (this._menu = t.querySelector(qt))
                        }
                        return this._menu
                    }, t._getPlacement = function () {
                        var t = g(this._element.parentNode), e = Vt;
                        return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e
                    }, t._detectNavbar = function () {
                        return 0 < g(this._element).closest(".navbar").length
                    }, t._getOffset = function () {
                        var e = this, t = {};
                        return "function" == typeof this._config.offset ? t.fn = function (t) {
                            return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                        } : t.offset = this._config.offset, t
                    }, t._getPopperConfig = function () {
                        var t = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {enabled: this._config.flip},
                                preventOverflow: {boundariesElement: this._config.boundary}
                            }
                        };
                        return "static" === this._config.display && (t.modifiers.applyStyle = {enabled: !1}), t
                    }, c._jQueryInterface = function (e) {
                        return this.each(function () {
                            var t = g(this).data(Dt);
                            if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Dt, t)), "string" == typeof e) {
                                if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                                t[e]()
                            }
                        })
                    }, c._clearMenus = function (t) {
                        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
                            var o = c._getParentFromElement(e[n]), r = g(e[n]).data(Dt), s = {relatedTarget: e[n]};
                            if (t && "click" === t.type && (s.clickEvent = t), r) {
                                var a = r._menu;
                                if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                                    var l = g.Event(kt.HIDE, s);
                                    g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)))
                                }
                            }
                        }
                    }, c._getParentFromElement = function (t) {
                        var e, n = _.getSelectorFromElement(t);
                        return n && (e = document.querySelector(n)), e || t.parentNode
                    }, c._dataApiKeydownHandler = function (t) {
                        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
                            var e = c._getParentFromElement(this), n = g(e).hasClass(Lt);
                            if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                                var i = [].slice.call(e.querySelectorAll(Kt));
                                if (0 !== i.length) {
                                    var o = i.indexOf(t.target);
                                    38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                                }
                            } else {
                                if (27 === t.which) {
                                    var r = e.querySelector(Ut);
                                    g(r).trigger("focus")
                                }
                                g(this).trigger("click")
                            }
                        }
                    }, s(c, null, [{
                        key: "VERSION", get: function () {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default", get: function () {
                            return $t
                        }
                    }, {
                        key: "DefaultType", get: function () {
                            return Gt
                        }
                    }]), c
                }();
            g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function (t) {
                t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle")
            }).on(kt.CLICK_DATA_API, Wt, function (t) {
                t.stopPropagation()
            }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function () {
                return g.fn[It] = Nt, Jt._jQueryInterface
            };
            var Zt = "modal", te = "bs.modal", ee = "." + te, ne = g.fn[Zt],
                ie = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
                oe = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, re = {
                    HIDE: "hide" + ee,
                    HIDDEN: "hidden" + ee,
                    SHOW: "show" + ee,
                    SHOWN: "shown" + ee,
                    FOCUSIN: "focusin" + ee,
                    RESIZE: "resize" + ee,
                    CLICK_DISMISS: "click.dismiss" + ee,
                    KEYDOWN_DISMISS: "keydown.dismiss" + ee,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
                    CLICK_DATA_API: "click" + ee + ".data-api"
                }, se = "modal-dialog-scrollable", ae = "modal-scrollbar-measure", le = "modal-backdrop", ce = "modal-open",
                he = "fade", ue = "show", fe = ".modal-dialog", de = ".modal-body", ge = '[data-toggle="modal"]',
                _e = '[data-dismiss="modal"]', me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                pe = ".sticky-top", ve = function () {
                    function o(t, e) {
                        this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                    }

                    var t = o.prototype;
                    return t.toggle = function (t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, t.show = function (t) {
                        var e = this;
                        if (!this._isShown && !this._isTransitioning) {
                            g(this._element).hasClass(he) && (this._isTransitioning = !0);
                            var n = g.Event(re.SHOW, {relatedTarget: t});
                            g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
                                return e.hide(t)
                            }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
                                g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
                                    g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function () {
                                return e._showElement(t)
                            }))
                        }
                    }, t.hide = function (t) {
                        var e = this;
                        if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                            var n = g.Event(re.HIDE);
                            if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                                this._isShown = !1;
                                var i = g(this._element).hasClass(he);
                                if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
                                    var o = _.getTransitionDurationFromElement(this._element);
                                    g(this._element).one(_.TRANSITION_END, function (t) {
                                        return e._hideModal(t)
                                    }).emulateTransitionEnd(o)
                                } else this._hideModal()
                            }
                        }
                    }, t.dispose = function () {
                        [window, this._element, this._dialog].forEach(function (t) {
                            return g(t).off(ee)
                        }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                    }, t.handleUpdate = function () {
                        this._adjustDialog()
                    }, t._getConfig = function (t) {
                        return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t
                    }, t._showElement = function (t) {
                        var e = this, n = g(this._element).hasClass(he);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus();
                        var i = g.Event(re.SHOWN, {relatedTarget: t}), o = function () {
                            e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i)
                        };
                        if (n) {
                            var r = _.getTransitionDurationFromElement(this._dialog);
                            g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                        } else o()
                    }, t._enforceFocus = function () {
                        var e = this;
                        g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) {
                            document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
                        })
                    }, t._setEscapeEvent = function () {
                        var e = this;
                        this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
                            27 === t.which && (t.preventDefault(), e.hide())
                        }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS)
                    }, t._setResizeEvent = function () {
                        var e = this;
                        this._isShown ? g(window).on(re.RESIZE, function (t) {
                            return e.handleUpdate(t)
                        }) : g(window).off(re.RESIZE)
                    }, t._hideModal = function () {
                        var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
                            g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN)
                        })
                    }, t._removeBackdrop = function () {
                        this._backdrop && (g(this._backdrop).remove(), this._backdrop = null)
                    }, t._showBackdrop = function (t) {
                        var e = this, n = g(this._element).hasClass(he) ? he : "";
                        if (this._isShown && this._config.backdrop) {
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function (t) {
                                e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                            }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return;
                            if (!n) return void t();
                            var i = _.getTransitionDurationFromElement(this._backdrop);
                            g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
                        } else if (!this._isShown && this._backdrop) {
                            g(this._backdrop).removeClass(ue);
                            var o = function () {
                                e._removeBackdrop(), t && t()
                            };
                            if (g(this._element).hasClass(he)) {
                                var r = _.getTransitionDurationFromElement(this._backdrop);
                                g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                            } else o()
                        } else t && t()
                    }, t._adjustDialog = function () {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, t._resetAdjustments = function () {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, t._checkScrollbar = function () {
                        var t = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, t._setScrollbar = function () {
                        var o = this;
                        if (this._isBodyOverflowing) {
                            var t = [].slice.call(document.querySelectorAll(me)),
                                e = [].slice.call(document.querySelectorAll(pe));
                            g(t).each(function (t, e) {
                                var n = e.style.paddingRight, i = g(e).css("padding-right");
                                g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                            }), g(e).each(function (t, e) {
                                var n = e.style.marginRight, i = g(e).css("margin-right");
                                g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                            });
                            var n = document.body.style.paddingRight, i = g(document.body).css("padding-right");
                            g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                        }
                        g(document.body).addClass(ce)
                    }, t._resetScrollbar = function () {
                        var t = [].slice.call(document.querySelectorAll(me));
                        g(t).each(function (t, e) {
                            var n = g(e).data("padding-right");
                            g(e).removeData("padding-right"), e.style.paddingRight = n || ""
                        });
                        var e = [].slice.call(document.querySelectorAll("" + pe));
                        g(e).each(function (t, e) {
                            var n = g(e).data("margin-right");
                            "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
                        });
                        var n = g(document.body).data("padding-right");
                        g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
                    }, t._getScrollbarWidth = function () {
                        var t = document.createElement("div");
                        t.className = ae, document.body.appendChild(t);
                        var e = t.getBoundingClientRect().width - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, o._jQueryInterface = function (n, i) {
                        return this.each(function () {
                            var t = g(this).data(te), e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                            if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) {
                                if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                                t[n](i)
                            } else e.show && t.show(i)
                        })
                    }, s(o, null, [{
                        key: "VERSION", get: function () {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default", get: function () {
                            return ie
                        }
                    }]), o
                }();
            g(document).on(re.CLICK_DATA_API, ge, function (t) {
                var e, n = this, i = _.getSelectorFromElement(this);
                i && (e = document.querySelector(i));
                var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                var r = g(e).one(re.SHOW, function (t) {
                    t.isDefaultPrevented() || r.one(re.HIDDEN, function () {
                        g(n).is(":visible") && n.focus()
                    })
                });
                ve._jQueryInterface.call(g(e), o, this)
            }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function () {
                return g.fn[Zt] = ne, ve._jQueryInterface
            };
            var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], Ee = {
                    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: []
                }, Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

            function Se(t, s, e) {
                if (0 === t.length) return t;
                if (e && "function" == typeof e) return e(t);
                for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function (t, e) {
                    var n = l[t], i = n.nodeName.toLowerCase();
                    if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                    var o = [].slice.call(n.attributes), r = [].concat(s["*"] || [], s[i] || []);
                    o.forEach(function (t) {
                        (function (t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));
                            for (var i = e.filter(function (t) {
                                return t instanceof RegExp
                            }), o = 0, r = i.length; o < r; o++) if (n.match(i[o])) return !0;
                            return !1
                        })(t, r) || n.removeAttribute(t.nodeName)
                    })
                }, o = 0, r = l.length; o < r; o++) i(o);
                return n.body.innerHTML
            }

            var be = "tooltip", Ie = "bs.tooltip", De = "." + Ie, we = g.fn[be], Ae = "bs-tooltip",
                Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"), Oe = ["sanitize", "whiteList", "sanitizeFn"], ke = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string|function)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    whiteList: "object"
                }, Pe = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, Le = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent",
                    sanitize: !0,
                    sanitizeFn: null,
                    whiteList: Ee
                }, je = "show", He = "out", Re = {
                    HIDE: "hide" + De,
                    HIDDEN: "hidden" + De,
                    SHOW: "show" + De,
                    SHOWN: "shown" + De,
                    INSERTED: "inserted" + De,
                    CLICK: "click" + De,
                    FOCUSIN: "focusin" + De,
                    FOCUSOUT: "focusout" + De,
                    MOUSEENTER: "mouseenter" + De,
                    MOUSELEAVE: "mouseleave" + De
                }, xe = "fade", Fe = "show", Ue = ".tooltip-inner", We = ".arrow", qe = "hover", Me = "focus", Ke = "click",
                Qe = "manual", Be = function () {
                    function i(t, e) {
                        if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }

                    var t = i.prototype;
                    return t.enable = function () {
                        this._isEnabled = !0
                    }, t.disable = function () {
                        this._isEnabled = !1
                    }, t.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled
                    }, t.toggle = function (t) {
                        if (this._isEnabled) if (t) {
                            var e = this.constructor.DATA_KEY, n = g(t.currentTarget).data(e);
                            n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, t.dispose = function () {
                        clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, t.show = function () {
                        var e = this;
                        if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var t = g.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            g(this.element).trigger(t);
                            var n = _.findShadowRoot(this.element),
                                i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                            if (t.isDefaultPrevented() || !i) return;
                            var o = this.getTipElement(), r = _.getUID(this.constructor.NAME);
                            o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe);
                            var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                a = this._getAttachment(s);
                            this.addAttachmentClass(a);
                            var l = this._getContainer();
                            g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, {
                                placement: a,
                                modifiers: {
                                    offset: this._getOffset(),
                                    flip: {behavior: this.config.fallbackPlacement},
                                    arrow: {element: We},
                                    preventOverflow: {boundariesElement: this.config.boundary}
                                },
                                onCreate: function (t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                },
                                onUpdate: function (t) {
                                    return e._handlePopperPlacementChange(t)
                                }
                            }), g(o).addClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                            var c = function () {
                                e.config.animation && e._fixTransition();
                                var t = e._hoverState;
                                e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e)
                            };
                            if (g(this.tip).hasClass(xe)) {
                                var h = _.getTransitionDurationFromElement(this.tip);
                                g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                            } else c()
                        }
                    }, t.hide = function (t) {
                        var e = this, n = this.getTipElement(), i = g.Event(this.constructor.Event.HIDE), o = function () {
                            e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                        };
                        if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
                            if (g(n).removeClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) {
                                var r = _.getTransitionDurationFromElement(n);
                                g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                            } else o();
                            this._hoverState = ""
                        }
                    }, t.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, t.isWithContent = function () {
                        return Boolean(this.getTitle())
                    }, t.addAttachmentClass = function (t) {
                        g(this.getTipElement()).addClass(Ae + "-" + t)
                    }, t.getTipElement = function () {
                        return this.tip = this.tip || g(this.config.template)[0], this.tip
                    }, t.setContent = function () {
                        var t = this.getTipElement();
                        this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe)
                    }, t.setElementContent = function (t, e) {
                        "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
                    }, t.getTitle = function () {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, t._getOffset = function () {
                        var e = this, t = {};
                        return "function" == typeof this.config.offset ? t.fn = function (t) {
                            return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                        } : t.offset = this.config.offset, t
                    }, t._getContainer = function () {
                        return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
                    }, t._getAttachment = function (t) {
                        return Pe[t.toUpperCase()]
                    }, t._setListeners = function () {
                        var i = this;
                        this.config.trigger.split(" ").forEach(function (t) {
                            if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
                                return i.toggle(t)
                            }); else if (t !== Qe) {
                                var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                                    n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                                g(i.element).on(e, i.config.selector, function (t) {
                                    return i._enter(t)
                                }).on(n, i.config.selector, function (t) {
                                    return i._leave(t)
                                })
                            }
                        }), g(this.element).closest(".modal").on("hide.bs.modal", function () {
                            i.element && i.hide()
                        }), this.config.selector ? this.config = l({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, t._fixTitle = function () {
                        var t = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, t._enter = function (t, e) {
                        var n = this.constructor.DATA_KEY;
                        (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
                            e._hoverState === je && e.show()
                        }, e.config.delay.show) : e.show())
                    }, t._leave = function (t, e) {
                        var n = this.constructor.DATA_KEY;
                        (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
                            e._hoverState === He && e.hide()
                        }, e.config.delay.hide) : e.hide())
                    }, t._isWithActiveTrigger = function () {
                        for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                        return !1
                    }, t._getConfig = function (t) {
                        var e = g(this.element).data();
                        return Object.keys(e).forEach(function (t) {
                            -1 !== Oe.indexOf(t) && delete e[t]
                        }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                            show: t.delay,
                            hide: t.delay
                        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t
                    }, t._getDelegateConfig = function () {
                        var t = {};
                        if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, t._cleanTipClass = function () {
                        var t = g(this.getTipElement()), e = t.attr("class").match(Ne);
                        null !== e && e.length && t.removeClass(e.join(""))
                    }, t._handlePopperPlacementChange = function (t) {
                        var e = t.instance;
                        this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                    }, t._fixTransition = function () {
                        var t = this.getTipElement(), e = this.config.animation;
                        null === t.getAttribute("x-placement") && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
                    }, i._jQueryInterface = function (n) {
                        return this.each(function () {
                            var t = g(this).data(Ie), e = "object" == typeof n && n;
                            if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), "string" == typeof n)) {
                                if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                                t[n]()
                            }
                        })
                    }, s(i, null, [{
                        key: "VERSION", get: function () {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default", get: function () {
                            return Le
                        }
                    }, {
                        key: "NAME", get: function () {
                            return be
                        }
                    }, {
                        key: "DATA_KEY", get: function () {
                            return Ie
                        }
                    }, {
                        key: "Event", get: function () {
                            return Re
                        }
                    }, {
                        key: "EVENT_KEY", get: function () {
                            return De
                        }
                    }, {
                        key: "DefaultType", get: function () {
                            return ke
                        }
                    }]), i
                }();
            g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function () {
                return g.fn[be] = we, Be._jQueryInterface
            };
            var Ve = "popover", Ye = "bs.popover", ze = "." + Ye, Xe = g.fn[Ve], $e = "bs-popover",
                Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"), Je = l({}, Be.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }), Ze = l({}, Be.DefaultType, {content: "(string|element|function)"}), tn = "fade", en = "show",
                nn = ".popover-header", on = ".popover-body", rn = {
                    HIDE: "hide" + ze,
                    HIDDEN: "hidden" + ze,
                    SHOW: "show" + ze,
                    SHOWN: "shown" + ze,
                    INSERTED: "inserted" + ze,
                    CLICK: "click" + ze,
                    FOCUSIN: "focusin" + ze,
                    FOCUSOUT: "focusout" + ze,
                    MOUSEENTER: "mouseenter" + ze,
                    MOUSELEAVE: "mouseleave" + ze
                }, sn = function (t) {
                    var e, n;

                    function i() {
                        return t.apply(this, arguments) || this
                    }

                    n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
                    var o = i.prototype;
                    return o.isWithContent = function () {
                        return this.getTitle() || this._getContent()
                    }, o.addAttachmentClass = function (t) {
                        g(this.getTipElement()).addClass($e + "-" + t)
                    }, o.getTipElement = function () {
                        return this.tip = this.tip || g(this.config.template)[0], this.tip
                    }, o.setContent = function () {
                        var t = g(this.getTipElement());
                        this.setElementContent(t.find(nn), this.getTitle());
                        var e = this._getContent();
                        "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en)
                    }, o._getContent = function () {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, o._cleanTipClass = function () {
                        var t = g(this.getTipElement()), e = t.attr("class").match(Ge);
                        null !== e && 0 < e.length && t.removeClass(e.join(""))
                    }, i._jQueryInterface = function (n) {
                        return this.each(function () {
                            var t = g(this).data(Ye), e = "object" == typeof n ? n : null;
                            if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), "string" == typeof n)) {
                                if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                                t[n]()
                            }
                        })
                    }, s(i, null, [{
                        key: "VERSION", get: function () {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default", get: function () {
                            return Je
                        }
                    }, {
                        key: "NAME", get: function () {
                            return Ve
                        }
                    }, {
                        key: "DATA_KEY", get: function () {
                            return Ye
                        }
                    }, {
                        key: "Event", get: function () {
                            return rn
                        }
                    }, {
                        key: "EVENT_KEY", get: function () {
                            return ze
                        }
                    }, {
                        key: "DefaultType", get: function () {
                            return Ze
                        }
                    }]), i
                }(Be);
            g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function () {
                return g.fn[Ve] = Xe, sn._jQueryInterface
            };
            var an = "scrollspy", ln = "bs.scrollspy", cn = "." + ln, hn = g.fn[an],
                un = {offset: 10, method: "auto", target: ""},
                fn = {offset: "number", method: "string", target: "(string|element)"},
                dn = {ACTIVATE: "activate" + cn, SCROLL: "scroll" + cn, LOAD_DATA_API: "load" + cn + ".data-api"},
                gn = "dropdown-item", _n = "active", mn = '[data-spy="scroll"]', pn = ".nav, .list-group",
                vn = ".nav-link", yn = ".nav-item", En = ".list-group-item", Cn = ".dropdown", Tn = ".dropdown-item",
                Sn = ".dropdown-toggle", bn = "offset", In = "position", Dn = function () {
                    function n(t, e) {
                        var n = this;
                        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function (t) {
                            return n._process(t)
                        }), this.refresh(), this._process()
                    }

                    var t = n.prototype;
                    return t.refresh = function () {
                        var e = this, t = this._scrollElement === this._scrollElement.window ? bn : In,
                            o = "auto" === this._config.method ? t : this._config.method,
                            r = o === In ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
                            var e, n = _.getSelectorFromElement(t);
                            if (n && (e = document.querySelector(n)), e) {
                                var i = e.getBoundingClientRect();
                                if (i.width || i.height) return [g(e)[o]().top + r, n]
                            }
                            return null
                        }).filter(function (t) {
                            return t
                        }).sort(function (t, e) {
                            return t[0] - e[0]
                        }).forEach(function (t) {
                            e._offsets.push(t[0]), e._targets.push(t[1])
                        })
                    }, t.dispose = function () {
                        g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, t._getConfig = function (t) {
                        if ("string" != typeof (t = l({}, un, "object" == typeof t && t ? t : {})).target) {
                            var e = g(t.target).attr("id");
                            e || (e = _.getUID(an), g(t.target).attr("id", e)), t.target = "#" + e
                        }
                        return _.typeCheckConfig(an, t, fn), t
                    }, t._getScrollTop = function () {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, t._getScrollHeight = function () {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, t._getOffsetHeight = function () {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, t._process = function () {
                        var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), n <= t) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                            for (var o = this._offsets.length; o--;) {
                                this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                            }
                        }
                    }, t._activate = function (e) {
                        this._activeTarget = e, this._clear();
                        var t = this._selector.split(",").map(function (t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        }), n = g([].slice.call(document.querySelectorAll(t.join(","))));
                        n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ", " + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, {relatedTarget: e})
                    }, t._clear = function () {
                        [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
                            return t.classList.contains(_n)
                        }).forEach(function (t) {
                            return t.classList.remove(_n)
                        })
                    }, n._jQueryInterface = function (e) {
                        return this.each(function () {
                            var t = g(this).data(ln);
                            if (t || (t = new n(this, "object" == typeof e && e), g(this).data(ln, t)), "string" == typeof e) {
                                if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                                t[e]()
                            }
                        })
                    }, s(n, null, [{
                        key: "VERSION", get: function () {
                            return "4.3.1"
                        }
                    }, {
                        key: "Default", get: function () {
                            return un
                        }
                    }]), n
                }();
            g(window).on(dn.LOAD_DATA_API, function () {
                for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) {
                    var n = g(t[e]);
                    Dn._jQueryInterface.call(n, n.data())
                }
            }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function () {
                return g.fn[an] = hn, Dn._jQueryInterface
            };
            var wn = "bs.tab", An = "." + wn, Nn = g.fn.tab, On = {
                    HIDE: "hide" + An,
                    HIDDEN: "hidden" + An,
                    SHOW: "show" + An,
                    SHOWN: "shown" + An,
                    CLICK_DATA_API: "click" + An + ".data-api"
                }, kn = "dropdown-menu", Pn = "active", Ln = "disabled", jn = "fade", Hn = "show", Rn = ".dropdown",
                xn = ".nav, .list-group", Fn = ".active", Un = "> li > .active",
                Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', qn = ".dropdown-toggle",
                Mn = "> .dropdown-menu .active", Kn = function () {
                    function i(t) {
                        this._element = t
                    }

                    var t = i.prototype;
                    return t.show = function () {
                        var n = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
                            var t, i, e = g(this._element).closest(xn)[0], o = _.getSelectorFromElement(this._element);
                            if (e) {
                                var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
                                i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                            }
                            var s = g.Event(On.HIDE, {relatedTarget: this._element}),
                                a = g.Event(On.SHOW, {relatedTarget: i});
                            if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                                o && (t = document.querySelector(o)), this._activate(this._element, e);
                                var l = function () {
                                    var t = g.Event(On.HIDDEN, {relatedTarget: n._element}),
                                        e = g.Event(On.SHOWN, {relatedTarget: i});
                                    g(i).trigger(t), g(n._element).trigger(e)
                                };
                                t ? this._activate(t, t.parentNode, l) : l()
                            }
                        }
                    }, t.dispose = function () {
                        g.removeData(this._element, wn), this._element = null
                    }, t._activate = function (t, e, n) {
                        var i = this,
                            o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0],
                            r = n && o && g(o).hasClass(jn), s = function () {
                                return i._transitionComplete(t, o, n)
                            };
                        if (o && r) {
                            var a = _.getTransitionDurationFromElement(o);
                            g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a)
                        } else s()
                    }, t._transitionComplete = function (t, e, n) {
                        if (e) {
                            g(e).removeClass(Pn);
                            var i = g(e.parentNode).find(Mn)[0];
                            i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                        }
                        if (g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) {
                            var o = g(t).closest(Rn)[0];
                            if (o) {
                                var r = [].slice.call(o.querySelectorAll(qn));
                                g(r).addClass(Pn)
                            }
                            t.setAttribute("aria-expanded", !0)
                        }
                        n && n()
                    }, i._jQueryInterface = function (n) {
                        return this.each(function () {
                            var t = g(this), e = t.data(wn);
                            if (e || (e = new i(this), t.data(wn, e)), "string" == typeof n) {
                                if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                                e[n]()
                            }
                        })
                    }, s(i, null, [{
                        key: "VERSION", get: function () {
                            return "4.3.1"
                        }
                    }]), i
                }();
            g(document).on(On.CLICK_DATA_API, Wn, function (t) {
                t.preventDefault(), Kn._jQueryInterface.call(g(this), "show")
            }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function () {
                return g.fn.tab = Nn, Kn._jQueryInterface
            };
            var Qn = "toast", Bn = "bs.toast", Vn = "." + Bn, Yn = g.fn[Qn], zn = {
                    CLICK_DISMISS: "click.dismiss" + Vn,
                    HIDE: "hide" + Vn,
                    HIDDEN: "hidden" + Vn,
                    SHOW: "show" + Vn,
                    SHOWN: "shown" + Vn
                }, Xn = "fade", $n = "hide", Gn = "show", Jn = "showing",
                Zn = {animation: "boolean", autohide: "boolean", delay: "number"},
                ti = {animation: !0, autohide: !0, delay: 500}, ei = '[data-dismiss="toast"]', ni = function () {
                    function i(t, e) {
                        this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
                    }

                    var t = i.prototype;
                    return t.show = function () {
                        var t = this;
                        g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);
                        var e = function () {
                            t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide()
                        };
                        if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) {
                            var n = _.getTransitionDurationFromElement(this._element);
                            g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
                        } else e()
                    }, t.hide = function (t) {
                        var e = this;
                        this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
                            e._close()
                        }, this._config.delay))
                    }, t.dispose = function () {
                        clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null
                    }, t._getConfig = function (t) {
                        return t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t
                    }, t._setListeners = function () {
                        var t = this;
                        g(this._element).on(zn.CLICK_DISMISS, ei, function () {
                            return t.hide(!0)
                        })
                    }, t._close = function () {
                        var t = this, e = function () {
                            t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN)
                        };
                        if (this._element.classList.remove(Gn), this._config.animation) {
                            var n = _.getTransitionDurationFromElement(this._element);
                            g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
                        } else e()
                    }, i._jQueryInterface = function (n) {
                        return this.each(function () {
                            var t = g(this), e = t.data(Bn);
                            if (e || (e = new i(this, "object" == typeof n && n), t.data(Bn, e)), "string" == typeof n) {
                                if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                                e[n](this)
                            }
                        })
                    }, s(i, null, [{
                        key: "VERSION", get: function () {
                            return "4.3.1"
                        }
                    }, {
                        key: "DefaultType", get: function () {
                            return Zn
                        }
                    }, {
                        key: "Default", get: function () {
                            return ti
                        }
                    }]), i
                }();
            g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function () {
                return g.fn[Qn] = Yn, ni._jQueryInterface
            }, function () {
                if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var t = g.fn.jquery.split(" ")[0].split(".");
                if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, "__esModule", {value: !0})
        });
//# sourceMappingURL=bootstrap.min.js.map

        /***/
    }),

    /***/
    "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
    /*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \****************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        var escape = __webpack_require__(/*! ../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
        exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
        exports.push([module.i, "/*!\n * Font Awesome Free 5.11.2 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n.fa,.fab,.fad,.fal,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-500px:before{content:\"\\F26E\"}.fa-accessible-icon:before{content:\"\\F368\"}.fa-accusoft:before{content:\"\\F369\"}.fa-acquisitions-incorporated:before{content:\"\\F6AF\"}.fa-ad:before{content:\"\\F641\"}.fa-address-book:before{content:\"\\F2B9\"}.fa-address-card:before{content:\"\\F2BB\"}.fa-adjust:before{content:\"\\F042\"}.fa-adn:before{content:\"\\F170\"}.fa-adobe:before{content:\"\\F778\"}.fa-adversal:before{content:\"\\F36A\"}.fa-affiliatetheme:before{content:\"\\F36B\"}.fa-air-freshener:before{content:\"\\F5D0\"}.fa-airbnb:before{content:\"\\F834\"}.fa-algolia:before{content:\"\\F36C\"}.fa-align-center:before{content:\"\\F037\"}.fa-align-justify:before{content:\"\\F039\"}.fa-align-left:before{content:\"\\F036\"}.fa-align-right:before{content:\"\\F038\"}.fa-alipay:before{content:\"\\F642\"}.fa-allergies:before{content:\"\\F461\"}.fa-amazon:before{content:\"\\F270\"}.fa-amazon-pay:before{content:\"\\F42C\"}.fa-ambulance:before{content:\"\\F0F9\"}.fa-american-sign-language-interpreting:before{content:\"\\F2A3\"}.fa-amilia:before{content:\"\\F36D\"}.fa-anchor:before{content:\"\\F13D\"}.fa-android:before{content:\"\\F17B\"}.fa-angellist:before{content:\"\\F209\"}.fa-angle-double-down:before{content:\"\\F103\"}.fa-angle-double-left:before{content:\"\\F100\"}.fa-angle-double-right:before{content:\"\\F101\"}.fa-angle-double-up:before{content:\"\\F102\"}.fa-angle-down:before{content:\"\\F107\"}.fa-angle-left:before{content:\"\\F104\"}.fa-angle-right:before{content:\"\\F105\"}.fa-angle-up:before{content:\"\\F106\"}.fa-angry:before{content:\"\\F556\"}.fa-angrycreative:before{content:\"\\F36E\"}.fa-angular:before{content:\"\\F420\"}.fa-ankh:before{content:\"\\F644\"}.fa-app-store:before{content:\"\\F36F\"}.fa-app-store-ios:before{content:\"\\F370\"}.fa-apper:before{content:\"\\F371\"}.fa-apple:before{content:\"\\F179\"}.fa-apple-alt:before{content:\"\\F5D1\"}.fa-apple-pay:before{content:\"\\F415\"}.fa-archive:before{content:\"\\F187\"}.fa-archway:before{content:\"\\F557\"}.fa-arrow-alt-circle-down:before{content:\"\\F358\"}.fa-arrow-alt-circle-left:before{content:\"\\F359\"}.fa-arrow-alt-circle-right:before{content:\"\\F35A\"}.fa-arrow-alt-circle-up:before{content:\"\\F35B\"}.fa-arrow-circle-down:before{content:\"\\F0AB\"}.fa-arrow-circle-left:before{content:\"\\F0A8\"}.fa-arrow-circle-right:before{content:\"\\F0A9\"}.fa-arrow-circle-up:before{content:\"\\F0AA\"}.fa-arrow-down:before{content:\"\\F063\"}.fa-arrow-left:before{content:\"\\F060\"}.fa-arrow-right:before{content:\"\\F061\"}.fa-arrow-up:before{content:\"\\F062\"}.fa-arrows-alt:before{content:\"\\F0B2\"}.fa-arrows-alt-h:before{content:\"\\F337\"}.fa-arrows-alt-v:before{content:\"\\F338\"}.fa-artstation:before{content:\"\\F77A\"}.fa-assistive-listening-systems:before{content:\"\\F2A2\"}.fa-asterisk:before{content:\"\\F069\"}.fa-asymmetrik:before{content:\"\\F372\"}.fa-at:before{content:\"\\F1FA\"}.fa-atlas:before{content:\"\\F558\"}.fa-atlassian:before{content:\"\\F77B\"}.fa-atom:before{content:\"\\F5D2\"}.fa-audible:before{content:\"\\F373\"}.fa-audio-description:before{content:\"\\F29E\"}.fa-autoprefixer:before{content:\"\\F41C\"}.fa-avianex:before{content:\"\\F374\"}.fa-aviato:before{content:\"\\F421\"}.fa-award:before{content:\"\\F559\"}.fa-aws:before{content:\"\\F375\"}.fa-baby:before{content:\"\\F77C\"}.fa-baby-carriage:before{content:\"\\F77D\"}.fa-backspace:before{content:\"\\F55A\"}.fa-backward:before{content:\"\\F04A\"}.fa-bacon:before{content:\"\\F7E5\"}.fa-balance-scale:before{content:\"\\F24E\"}.fa-balance-scale-left:before{content:\"\\F515\"}.fa-balance-scale-right:before{content:\"\\F516\"}.fa-ban:before{content:\"\\F05E\"}.fa-band-aid:before{content:\"\\F462\"}.fa-bandcamp:before{content:\"\\F2D5\"}.fa-barcode:before{content:\"\\F02A\"}.fa-bars:before{content:\"\\F0C9\"}.fa-baseball-ball:before{content:\"\\F433\"}.fa-basketball-ball:before{content:\"\\F434\"}.fa-bath:before{content:\"\\F2CD\"}.fa-battery-empty:before{content:\"\\F244\"}.fa-battery-full:before{content:\"\\F240\"}.fa-battery-half:before{content:\"\\F242\"}.fa-battery-quarter:before{content:\"\\F243\"}.fa-battery-three-quarters:before{content:\"\\F241\"}.fa-battle-net:before{content:\"\\F835\"}.fa-bed:before{content:\"\\F236\"}.fa-beer:before{content:\"\\F0FC\"}.fa-behance:before{content:\"\\F1B4\"}.fa-behance-square:before{content:\"\\F1B5\"}.fa-bell:before{content:\"\\F0F3\"}.fa-bell-slash:before{content:\"\\F1F6\"}.fa-bezier-curve:before{content:\"\\F55B\"}.fa-bible:before{content:\"\\F647\"}.fa-bicycle:before{content:\"\\F206\"}.fa-biking:before{content:\"\\F84A\"}.fa-bimobject:before{content:\"\\F378\"}.fa-binoculars:before{content:\"\\F1E5\"}.fa-biohazard:before{content:\"\\F780\"}.fa-birthday-cake:before{content:\"\\F1FD\"}.fa-bitbucket:before{content:\"\\F171\"}.fa-bitcoin:before{content:\"\\F379\"}.fa-bity:before{content:\"\\F37A\"}.fa-black-tie:before{content:\"\\F27E\"}.fa-blackberry:before{content:\"\\F37B\"}.fa-blender:before{content:\"\\F517\"}.fa-blender-phone:before{content:\"\\F6B6\"}.fa-blind:before{content:\"\\F29D\"}.fa-blog:before{content:\"\\F781\"}.fa-blogger:before{content:\"\\F37C\"}.fa-blogger-b:before{content:\"\\F37D\"}.fa-bluetooth:before{content:\"\\F293\"}.fa-bluetooth-b:before{content:\"\\F294\"}.fa-bold:before{content:\"\\F032\"}.fa-bolt:before{content:\"\\F0E7\"}.fa-bomb:before{content:\"\\F1E2\"}.fa-bone:before{content:\"\\F5D7\"}.fa-bong:before{content:\"\\F55C\"}.fa-book:before{content:\"\\F02D\"}.fa-book-dead:before{content:\"\\F6B7\"}.fa-book-medical:before{content:\"\\F7E6\"}.fa-book-open:before{content:\"\\F518\"}.fa-book-reader:before{content:\"\\F5DA\"}.fa-bookmark:before{content:\"\\F02E\"}.fa-bootstrap:before{content:\"\\F836\"}.fa-border-all:before{content:\"\\F84C\"}.fa-border-none:before{content:\"\\F850\"}.fa-border-style:before{content:\"\\F853\"}.fa-bowling-ball:before{content:\"\\F436\"}.fa-box:before{content:\"\\F466\"}.fa-box-open:before{content:\"\\F49E\"}.fa-boxes:before{content:\"\\F468\"}.fa-braille:before{content:\"\\F2A1\"}.fa-brain:before{content:\"\\F5DC\"}.fa-bread-slice:before{content:\"\\F7EC\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-briefcase-medical:before{content:\"\\F469\"}.fa-broadcast-tower:before{content:\"\\F519\"}.fa-broom:before{content:\"\\F51A\"}.fa-brush:before{content:\"\\F55D\"}.fa-btc:before{content:\"\\F15A\"}.fa-buffer:before{content:\"\\F837\"}.fa-bug:before{content:\"\\F188\"}.fa-building:before{content:\"\\F1AD\"}.fa-bullhorn:before{content:\"\\F0A1\"}.fa-bullseye:before{content:\"\\F140\"}.fa-burn:before{content:\"\\F46A\"}.fa-buromobelexperte:before{content:\"\\F37F\"}.fa-bus:before{content:\"\\F207\"}.fa-bus-alt:before{content:\"\\F55E\"}.fa-business-time:before{content:\"\\F64A\"}.fa-buy-n-large:before{content:\"\\F8A6\"}.fa-buysellads:before{content:\"\\F20D\"}.fa-calculator:before{content:\"\\F1EC\"}.fa-calendar:before{content:\"\\F133\"}.fa-calendar-alt:before{content:\"\\F073\"}.fa-calendar-check:before{content:\"\\F274\"}.fa-calendar-day:before{content:\"\\F783\"}.fa-calendar-minus:before{content:\"\\F272\"}.fa-calendar-plus:before{content:\"\\F271\"}.fa-calendar-times:before{content:\"\\F273\"}.fa-calendar-week:before{content:\"\\F784\"}.fa-camera:before{content:\"\\F030\"}.fa-camera-retro:before{content:\"\\F083\"}.fa-campground:before{content:\"\\F6BB\"}.fa-canadian-maple-leaf:before{content:\"\\F785\"}.fa-candy-cane:before{content:\"\\F786\"}.fa-cannabis:before{content:\"\\F55F\"}.fa-capsules:before{content:\"\\F46B\"}.fa-car:before{content:\"\\F1B9\"}.fa-car-alt:before{content:\"\\F5DE\"}.fa-car-battery:before{content:\"\\F5DF\"}.fa-car-crash:before{content:\"\\F5E1\"}.fa-car-side:before{content:\"\\F5E4\"}.fa-caret-down:before{content:\"\\F0D7\"}.fa-caret-left:before{content:\"\\F0D9\"}.fa-caret-right:before{content:\"\\F0DA\"}.fa-caret-square-down:before{content:\"\\F150\"}.fa-caret-square-left:before{content:\"\\F191\"}.fa-caret-square-right:before{content:\"\\F152\"}.fa-caret-square-up:before{content:\"\\F151\"}.fa-caret-up:before{content:\"\\F0D8\"}.fa-carrot:before{content:\"\\F787\"}.fa-cart-arrow-down:before{content:\"\\F218\"}.fa-cart-plus:before{content:\"\\F217\"}.fa-cash-register:before{content:\"\\F788\"}.fa-cat:before{content:\"\\F6BE\"}.fa-cc-amazon-pay:before{content:\"\\F42D\"}.fa-cc-amex:before{content:\"\\F1F3\"}.fa-cc-apple-pay:before{content:\"\\F416\"}.fa-cc-diners-club:before{content:\"\\F24C\"}.fa-cc-discover:before{content:\"\\F1F2\"}.fa-cc-jcb:before{content:\"\\F24B\"}.fa-cc-mastercard:before{content:\"\\F1F1\"}.fa-cc-paypal:before{content:\"\\F1F4\"}.fa-cc-stripe:before{content:\"\\F1F5\"}.fa-cc-visa:before{content:\"\\F1F0\"}.fa-centercode:before{content:\"\\F380\"}.fa-centos:before{content:\"\\F789\"}.fa-certificate:before{content:\"\\F0A3\"}.fa-chair:before{content:\"\\F6C0\"}.fa-chalkboard:before{content:\"\\F51B\"}.fa-chalkboard-teacher:before{content:\"\\F51C\"}.fa-charging-station:before{content:\"\\F5E7\"}.fa-chart-area:before{content:\"\\F1FE\"}.fa-chart-bar:before{content:\"\\F080\"}.fa-chart-line:before{content:\"\\F201\"}.fa-chart-pie:before{content:\"\\F200\"}.fa-check:before{content:\"\\F00C\"}.fa-check-circle:before{content:\"\\F058\"}.fa-check-double:before{content:\"\\F560\"}.fa-check-square:before{content:\"\\F14A\"}.fa-cheese:before{content:\"\\F7EF\"}.fa-chess:before{content:\"\\F439\"}.fa-chess-bishop:before{content:\"\\F43A\"}.fa-chess-board:before{content:\"\\F43C\"}.fa-chess-king:before{content:\"\\F43F\"}.fa-chess-knight:before{content:\"\\F441\"}.fa-chess-pawn:before{content:\"\\F443\"}.fa-chess-queen:before{content:\"\\F445\"}.fa-chess-rook:before{content:\"\\F447\"}.fa-chevron-circle-down:before{content:\"\\F13A\"}.fa-chevron-circle-left:before{content:\"\\F137\"}.fa-chevron-circle-right:before{content:\"\\F138\"}.fa-chevron-circle-up:before{content:\"\\F139\"}.fa-chevron-down:before{content:\"\\F078\"}.fa-chevron-left:before{content:\"\\F053\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-chevron-up:before{content:\"\\F077\"}.fa-child:before{content:\"\\F1AE\"}.fa-chrome:before{content:\"\\F268\"}.fa-chromecast:before{content:\"\\F838\"}.fa-church:before{content:\"\\F51D\"}.fa-circle:before{content:\"\\F111\"}.fa-circle-notch:before{content:\"\\F1CE\"}.fa-city:before{content:\"\\F64F\"}.fa-clinic-medical:before{content:\"\\F7F2\"}.fa-clipboard:before{content:\"\\F328\"}.fa-clipboard-check:before{content:\"\\F46C\"}.fa-clipboard-list:before{content:\"\\F46D\"}.fa-clock:before{content:\"\\F017\"}.fa-clone:before{content:\"\\F24D\"}.fa-closed-captioning:before{content:\"\\F20A\"}.fa-cloud:before{content:\"\\F0C2\"}.fa-cloud-download-alt:before{content:\"\\F381\"}.fa-cloud-meatball:before{content:\"\\F73B\"}.fa-cloud-moon:before{content:\"\\F6C3\"}.fa-cloud-moon-rain:before{content:\"\\F73C\"}.fa-cloud-rain:before{content:\"\\F73D\"}.fa-cloud-showers-heavy:before{content:\"\\F740\"}.fa-cloud-sun:before{content:\"\\F6C4\"}.fa-cloud-sun-rain:before{content:\"\\F743\"}.fa-cloud-upload-alt:before{content:\"\\F382\"}.fa-cloudscale:before{content:\"\\F383\"}.fa-cloudsmith:before{content:\"\\F384\"}.fa-cloudversify:before{content:\"\\F385\"}.fa-cocktail:before{content:\"\\F561\"}.fa-code:before{content:\"\\F121\"}.fa-code-branch:before{content:\"\\F126\"}.fa-codepen:before{content:\"\\F1CB\"}.fa-codiepie:before{content:\"\\F284\"}.fa-coffee:before{content:\"\\F0F4\"}.fa-cog:before{content:\"\\F013\"}.fa-cogs:before{content:\"\\F085\"}.fa-coins:before{content:\"\\F51E\"}.fa-columns:before{content:\"\\F0DB\"}.fa-comment:before{content:\"\\F075\"}.fa-comment-alt:before{content:\"\\F27A\"}.fa-comment-dollar:before{content:\"\\F651\"}.fa-comment-dots:before{content:\"\\F4AD\"}.fa-comment-medical:before{content:\"\\F7F5\"}.fa-comment-slash:before{content:\"\\F4B3\"}.fa-comments:before{content:\"\\F086\"}.fa-comments-dollar:before{content:\"\\F653\"}.fa-compact-disc:before{content:\"\\F51F\"}.fa-compass:before{content:\"\\F14E\"}.fa-compress:before{content:\"\\F066\"}.fa-compress-arrows-alt:before{content:\"\\F78C\"}.fa-concierge-bell:before{content:\"\\F562\"}.fa-confluence:before{content:\"\\F78D\"}.fa-connectdevelop:before{content:\"\\F20E\"}.fa-contao:before{content:\"\\F26D\"}.fa-cookie:before{content:\"\\F563\"}.fa-cookie-bite:before{content:\"\\F564\"}.fa-copy:before{content:\"\\F0C5\"}.fa-copyright:before{content:\"\\F1F9\"}.fa-cotton-bureau:before{content:\"\\F89E\"}.fa-couch:before{content:\"\\F4B8\"}.fa-cpanel:before{content:\"\\F388\"}.fa-creative-commons:before{content:\"\\F25E\"}.fa-creative-commons-by:before{content:\"\\F4E7\"}.fa-creative-commons-nc:before{content:\"\\F4E8\"}.fa-creative-commons-nc-eu:before{content:\"\\F4E9\"}.fa-creative-commons-nc-jp:before{content:\"\\F4EA\"}.fa-creative-commons-nd:before{content:\"\\F4EB\"}.fa-creative-commons-pd:before{content:\"\\F4EC\"}.fa-creative-commons-pd-alt:before{content:\"\\F4ED\"}.fa-creative-commons-remix:before{content:\"\\F4EE\"}.fa-creative-commons-sa:before{content:\"\\F4EF\"}.fa-creative-commons-sampling:before{content:\"\\F4F0\"}.fa-creative-commons-sampling-plus:before{content:\"\\F4F1\"}.fa-creative-commons-share:before{content:\"\\F4F2\"}.fa-creative-commons-zero:before{content:\"\\F4F3\"}.fa-credit-card:before{content:\"\\F09D\"}.fa-critical-role:before{content:\"\\F6C9\"}.fa-crop:before{content:\"\\F125\"}.fa-crop-alt:before{content:\"\\F565\"}.fa-cross:before{content:\"\\F654\"}.fa-crosshairs:before{content:\"\\F05B\"}.fa-crow:before{content:\"\\F520\"}.fa-crown:before{content:\"\\F521\"}.fa-crutch:before{content:\"\\F7F7\"}.fa-css3:before{content:\"\\F13C\"}.fa-css3-alt:before{content:\"\\F38B\"}.fa-cube:before{content:\"\\F1B2\"}.fa-cubes:before{content:\"\\F1B3\"}.fa-cut:before{content:\"\\F0C4\"}.fa-cuttlefish:before{content:\"\\F38C\"}.fa-d-and-d:before{content:\"\\F38D\"}.fa-d-and-d-beyond:before{content:\"\\F6CA\"}.fa-dashcube:before{content:\"\\F210\"}.fa-database:before{content:\"\\F1C0\"}.fa-deaf:before{content:\"\\F2A4\"}.fa-delicious:before{content:\"\\F1A5\"}.fa-democrat:before{content:\"\\F747\"}.fa-deploydog:before{content:\"\\F38E\"}.fa-deskpro:before{content:\"\\F38F\"}.fa-desktop:before{content:\"\\F108\"}.fa-dev:before{content:\"\\F6CC\"}.fa-deviantart:before{content:\"\\F1BD\"}.fa-dharmachakra:before{content:\"\\F655\"}.fa-dhl:before{content:\"\\F790\"}.fa-diagnoses:before{content:\"\\F470\"}.fa-diaspora:before{content:\"\\F791\"}.fa-dice:before{content:\"\\F522\"}.fa-dice-d20:before{content:\"\\F6CF\"}.fa-dice-d6:before{content:\"\\F6D1\"}.fa-dice-five:before{content:\"\\F523\"}.fa-dice-four:before{content:\"\\F524\"}.fa-dice-one:before{content:\"\\F525\"}.fa-dice-six:before{content:\"\\F526\"}.fa-dice-three:before{content:\"\\F527\"}.fa-dice-two:before{content:\"\\F528\"}.fa-digg:before{content:\"\\F1A6\"}.fa-digital-ocean:before{content:\"\\F391\"}.fa-digital-tachograph:before{content:\"\\F566\"}.fa-directions:before{content:\"\\F5EB\"}.fa-discord:before{content:\"\\F392\"}.fa-discourse:before{content:\"\\F393\"}.fa-divide:before{content:\"\\F529\"}.fa-dizzy:before{content:\"\\F567\"}.fa-dna:before{content:\"\\F471\"}.fa-dochub:before{content:\"\\F394\"}.fa-docker:before{content:\"\\F395\"}.fa-dog:before{content:\"\\F6D3\"}.fa-dollar-sign:before{content:\"\\F155\"}.fa-dolly:before{content:\"\\F472\"}.fa-dolly-flatbed:before{content:\"\\F474\"}.fa-donate:before{content:\"\\F4B9\"}.fa-door-closed:before{content:\"\\F52A\"}.fa-door-open:before{content:\"\\F52B\"}.fa-dot-circle:before{content:\"\\F192\"}.fa-dove:before{content:\"\\F4BA\"}.fa-download:before{content:\"\\F019\"}.fa-draft2digital:before{content:\"\\F396\"}.fa-drafting-compass:before{content:\"\\F568\"}.fa-dragon:before{content:\"\\F6D5\"}.fa-draw-polygon:before{content:\"\\F5EE\"}.fa-dribbble:before{content:\"\\F17D\"}.fa-dribbble-square:before{content:\"\\F397\"}.fa-dropbox:before{content:\"\\F16B\"}.fa-drum:before{content:\"\\F569\"}.fa-drum-steelpan:before{content:\"\\F56A\"}.fa-drumstick-bite:before{content:\"\\F6D7\"}.fa-drupal:before{content:\"\\F1A9\"}.fa-dumbbell:before{content:\"\\F44B\"}.fa-dumpster:before{content:\"\\F793\"}.fa-dumpster-fire:before{content:\"\\F794\"}.fa-dungeon:before{content:\"\\F6D9\"}.fa-dyalog:before{content:\"\\F399\"}.fa-earlybirds:before{content:\"\\F39A\"}.fa-ebay:before{content:\"\\F4F4\"}.fa-edge:before{content:\"\\F282\"}.fa-edit:before{content:\"\\F044\"}.fa-egg:before{content:\"\\F7FB\"}.fa-eject:before{content:\"\\F052\"}.fa-elementor:before{content:\"\\F430\"}.fa-ellipsis-h:before{content:\"\\F141\"}.fa-ellipsis-v:before{content:\"\\F142\"}.fa-ello:before{content:\"\\F5F1\"}.fa-ember:before{content:\"\\F423\"}.fa-empire:before{content:\"\\F1D1\"}.fa-envelope:before{content:\"\\F0E0\"}.fa-envelope-open:before{content:\"\\F2B6\"}.fa-envelope-open-text:before{content:\"\\F658\"}.fa-envelope-square:before{content:\"\\F199\"}.fa-envira:before{content:\"\\F299\"}.fa-equals:before{content:\"\\F52C\"}.fa-eraser:before{content:\"\\F12D\"}.fa-erlang:before{content:\"\\F39D\"}.fa-ethereum:before{content:\"\\F42E\"}.fa-ethernet:before{content:\"\\F796\"}.fa-etsy:before{content:\"\\F2D7\"}.fa-euro-sign:before{content:\"\\F153\"}.fa-evernote:before{content:\"\\F839\"}.fa-exchange-alt:before{content:\"\\F362\"}.fa-exclamation:before{content:\"\\F12A\"}.fa-exclamation-circle:before{content:\"\\F06A\"}.fa-exclamation-triangle:before{content:\"\\F071\"}.fa-expand:before{content:\"\\F065\"}.fa-expand-arrows-alt:before{content:\"\\F31E\"}.fa-expeditedssl:before{content:\"\\F23E\"}.fa-external-link-alt:before{content:\"\\F35D\"}.fa-external-link-square-alt:before{content:\"\\F360\"}.fa-eye:before{content:\"\\F06E\"}.fa-eye-dropper:before{content:\"\\F1FB\"}.fa-eye-slash:before{content:\"\\F070\"}.fa-facebook:before{content:\"\\F09A\"}.fa-facebook-f:before{content:\"\\F39E\"}.fa-facebook-messenger:before{content:\"\\F39F\"}.fa-facebook-square:before{content:\"\\F082\"}.fa-fan:before{content:\"\\F863\"}.fa-fantasy-flight-games:before{content:\"\\F6DC\"}.fa-fast-backward:before{content:\"\\F049\"}.fa-fast-forward:before{content:\"\\F050\"}.fa-fax:before{content:\"\\F1AC\"}.fa-feather:before{content:\"\\F52D\"}.fa-feather-alt:before{content:\"\\F56B\"}.fa-fedex:before{content:\"\\F797\"}.fa-fedora:before{content:\"\\F798\"}.fa-female:before{content:\"\\F182\"}.fa-fighter-jet:before{content:\"\\F0FB\"}.fa-figma:before{content:\"\\F799\"}.fa-file:before{content:\"\\F15B\"}.fa-file-alt:before{content:\"\\F15C\"}.fa-file-archive:before{content:\"\\F1C6\"}.fa-file-audio:before{content:\"\\F1C7\"}.fa-file-code:before{content:\"\\F1C9\"}.fa-file-contract:before{content:\"\\F56C\"}.fa-file-csv:before{content:\"\\F6DD\"}.fa-file-download:before{content:\"\\F56D\"}.fa-file-excel:before{content:\"\\F1C3\"}.fa-file-export:before{content:\"\\F56E\"}.fa-file-image:before{content:\"\\F1C5\"}.fa-file-import:before{content:\"\\F56F\"}.fa-file-invoice:before{content:\"\\F570\"}.fa-file-invoice-dollar:before{content:\"\\F571\"}.fa-file-medical:before{content:\"\\F477\"}.fa-file-medical-alt:before{content:\"\\F478\"}.fa-file-pdf:before{content:\"\\F1C1\"}.fa-file-powerpoint:before{content:\"\\F1C4\"}.fa-file-prescription:before{content:\"\\F572\"}.fa-file-signature:before{content:\"\\F573\"}.fa-file-upload:before{content:\"\\F574\"}.fa-file-video:before{content:\"\\F1C8\"}.fa-file-word:before{content:\"\\F1C2\"}.fa-fill:before{content:\"\\F575\"}.fa-fill-drip:before{content:\"\\F576\"}.fa-film:before{content:\"\\F008\"}.fa-filter:before{content:\"\\F0B0\"}.fa-fingerprint:before{content:\"\\F577\"}.fa-fire:before{content:\"\\F06D\"}.fa-fire-alt:before{content:\"\\F7E4\"}.fa-fire-extinguisher:before{content:\"\\F134\"}.fa-firefox:before{content:\"\\F269\"}.fa-first-aid:before{content:\"\\F479\"}.fa-first-order:before{content:\"\\F2B0\"}.fa-first-order-alt:before{content:\"\\F50A\"}.fa-firstdraft:before{content:\"\\F3A1\"}.fa-fish:before{content:\"\\F578\"}.fa-fist-raised:before{content:\"\\F6DE\"}.fa-flag:before{content:\"\\F024\"}.fa-flag-checkered:before{content:\"\\F11E\"}.fa-flag-usa:before{content:\"\\F74D\"}.fa-flask:before{content:\"\\F0C3\"}.fa-flickr:before{content:\"\\F16E\"}.fa-flipboard:before{content:\"\\F44D\"}.fa-flushed:before{content:\"\\F579\"}.fa-fly:before{content:\"\\F417\"}.fa-folder:before{content:\"\\F07B\"}.fa-folder-minus:before{content:\"\\F65D\"}.fa-folder-open:before{content:\"\\F07C\"}.fa-folder-plus:before{content:\"\\F65E\"}.fa-font:before{content:\"\\F031\"}.fa-font-awesome:before{content:\"\\F2B4\"}.fa-font-awesome-alt:before{content:\"\\F35C\"}.fa-font-awesome-flag:before{content:\"\\F425\"}.fa-font-awesome-logo-full:before{content:\"\\F4E6\"}.fa-fonticons:before{content:\"\\F280\"}.fa-fonticons-fi:before{content:\"\\F3A2\"}.fa-football-ball:before{content:\"\\F44E\"}.fa-fort-awesome:before{content:\"\\F286\"}.fa-fort-awesome-alt:before{content:\"\\F3A3\"}.fa-forumbee:before{content:\"\\F211\"}.fa-forward:before{content:\"\\F04E\"}.fa-foursquare:before{content:\"\\F180\"}.fa-free-code-camp:before{content:\"\\F2C5\"}.fa-freebsd:before{content:\"\\F3A4\"}.fa-frog:before{content:\"\\F52E\"}.fa-frown:before{content:\"\\F119\"}.fa-frown-open:before{content:\"\\F57A\"}.fa-fulcrum:before{content:\"\\F50B\"}.fa-funnel-dollar:before{content:\"\\F662\"}.fa-futbol:before{content:\"\\F1E3\"}.fa-galactic-republic:before{content:\"\\F50C\"}.fa-galactic-senate:before{content:\"\\F50D\"}.fa-gamepad:before{content:\"\\F11B\"}.fa-gas-pump:before{content:\"\\F52F\"}.fa-gavel:before{content:\"\\F0E3\"}.fa-gem:before{content:\"\\F3A5\"}.fa-genderless:before{content:\"\\F22D\"}.fa-get-pocket:before{content:\"\\F265\"}.fa-gg:before{content:\"\\F260\"}.fa-gg-circle:before{content:\"\\F261\"}.fa-ghost:before{content:\"\\F6E2\"}.fa-gift:before{content:\"\\F06B\"}.fa-gifts:before{content:\"\\F79C\"}.fa-git:before{content:\"\\F1D3\"}.fa-git-alt:before{content:\"\\F841\"}.fa-git-square:before{content:\"\\F1D2\"}.fa-github:before{content:\"\\F09B\"}.fa-github-alt:before{content:\"\\F113\"}.fa-github-square:before{content:\"\\F092\"}.fa-gitkraken:before{content:\"\\F3A6\"}.fa-gitlab:before{content:\"\\F296\"}.fa-gitter:before{content:\"\\F426\"}.fa-glass-cheers:before{content:\"\\F79F\"}.fa-glass-martini:before{content:\"\\F000\"}.fa-glass-martini-alt:before{content:\"\\F57B\"}.fa-glass-whiskey:before{content:\"\\F7A0\"}.fa-glasses:before{content:\"\\F530\"}.fa-glide:before{content:\"\\F2A5\"}.fa-glide-g:before{content:\"\\F2A6\"}.fa-globe:before{content:\"\\F0AC\"}.fa-globe-africa:before{content:\"\\F57C\"}.fa-globe-americas:before{content:\"\\F57D\"}.fa-globe-asia:before{content:\"\\F57E\"}.fa-globe-europe:before{content:\"\\F7A2\"}.fa-gofore:before{content:\"\\F3A7\"}.fa-golf-ball:before{content:\"\\F450\"}.fa-goodreads:before{content:\"\\F3A8\"}.fa-goodreads-g:before{content:\"\\F3A9\"}.fa-google:before{content:\"\\F1A0\"}.fa-google-drive:before{content:\"\\F3AA\"}.fa-google-play:before{content:\"\\F3AB\"}.fa-google-plus:before{content:\"\\F2B3\"}.fa-google-plus-g:before{content:\"\\F0D5\"}.fa-google-plus-square:before{content:\"\\F0D4\"}.fa-google-wallet:before{content:\"\\F1EE\"}.fa-gopuram:before{content:\"\\F664\"}.fa-graduation-cap:before{content:\"\\F19D\"}.fa-gratipay:before{content:\"\\F184\"}.fa-grav:before{content:\"\\F2D6\"}.fa-greater-than:before{content:\"\\F531\"}.fa-greater-than-equal:before{content:\"\\F532\"}.fa-grimace:before{content:\"\\F57F\"}.fa-grin:before{content:\"\\F580\"}.fa-grin-alt:before{content:\"\\F581\"}.fa-grin-beam:before{content:\"\\F582\"}.fa-grin-beam-sweat:before{content:\"\\F583\"}.fa-grin-hearts:before{content:\"\\F584\"}.fa-grin-squint:before{content:\"\\F585\"}.fa-grin-squint-tears:before{content:\"\\F586\"}.fa-grin-stars:before{content:\"\\F587\"}.fa-grin-tears:before{content:\"\\F588\"}.fa-grin-tongue:before{content:\"\\F589\"}.fa-grin-tongue-squint:before{content:\"\\F58A\"}.fa-grin-tongue-wink:before{content:\"\\F58B\"}.fa-grin-wink:before{content:\"\\F58C\"}.fa-grip-horizontal:before{content:\"\\F58D\"}.fa-grip-lines:before{content:\"\\F7A4\"}.fa-grip-lines-vertical:before{content:\"\\F7A5\"}.fa-grip-vertical:before{content:\"\\F58E\"}.fa-gripfire:before{content:\"\\F3AC\"}.fa-grunt:before{content:\"\\F3AD\"}.fa-guitar:before{content:\"\\F7A6\"}.fa-gulp:before{content:\"\\F3AE\"}.fa-h-square:before{content:\"\\F0FD\"}.fa-hacker-news:before{content:\"\\F1D4\"}.fa-hacker-news-square:before{content:\"\\F3AF\"}.fa-hackerrank:before{content:\"\\F5F7\"}.fa-hamburger:before{content:\"\\F805\"}.fa-hammer:before{content:\"\\F6E3\"}.fa-hamsa:before{content:\"\\F665\"}.fa-hand-holding:before{content:\"\\F4BD\"}.fa-hand-holding-heart:before{content:\"\\F4BE\"}.fa-hand-holding-usd:before{content:\"\\F4C0\"}.fa-hand-lizard:before{content:\"\\F258\"}.fa-hand-middle-finger:before{content:\"\\F806\"}.fa-hand-paper:before{content:\"\\F256\"}.fa-hand-peace:before{content:\"\\F25B\"}.fa-hand-point-down:before{content:\"\\F0A7\"}.fa-hand-point-left:before{content:\"\\F0A5\"}.fa-hand-point-right:before{content:\"\\F0A4\"}.fa-hand-point-up:before{content:\"\\F0A6\"}.fa-hand-pointer:before{content:\"\\F25A\"}.fa-hand-rock:before{content:\"\\F255\"}.fa-hand-scissors:before{content:\"\\F257\"}.fa-hand-spock:before{content:\"\\F259\"}.fa-hands:before{content:\"\\F4C2\"}.fa-hands-helping:before{content:\"\\F4C4\"}.fa-handshake:before{content:\"\\F2B5\"}.fa-hanukiah:before{content:\"\\F6E6\"}.fa-hard-hat:before{content:\"\\F807\"}.fa-hashtag:before{content:\"\\F292\"}.fa-hat-cowboy:before{content:\"\\F8C0\"}.fa-hat-cowboy-side:before{content:\"\\F8C1\"}.fa-hat-wizard:before{content:\"\\F6E8\"}.fa-haykal:before{content:\"\\F666\"}.fa-hdd:before{content:\"\\F0A0\"}.fa-heading:before{content:\"\\F1DC\"}.fa-headphones:before{content:\"\\F025\"}.fa-headphones-alt:before{content:\"\\F58F\"}.fa-headset:before{content:\"\\F590\"}.fa-heart:before{content:\"\\F004\"}.fa-heart-broken:before{content:\"\\F7A9\"}.fa-heartbeat:before{content:\"\\F21E\"}.fa-helicopter:before{content:\"\\F533\"}.fa-highlighter:before{content:\"\\F591\"}.fa-hiking:before{content:\"\\F6EC\"}.fa-hippo:before{content:\"\\F6ED\"}.fa-hips:before{content:\"\\F452\"}.fa-hire-a-helper:before{content:\"\\F3B0\"}.fa-history:before{content:\"\\F1DA\"}.fa-hockey-puck:before{content:\"\\F453\"}.fa-holly-berry:before{content:\"\\F7AA\"}.fa-home:before{content:\"\\F015\"}.fa-hooli:before{content:\"\\F427\"}.fa-hornbill:before{content:\"\\F592\"}.fa-horse:before{content:\"\\F6F0\"}.fa-horse-head:before{content:\"\\F7AB\"}.fa-hospital:before{content:\"\\F0F8\"}.fa-hospital-alt:before{content:\"\\F47D\"}.fa-hospital-symbol:before{content:\"\\F47E\"}.fa-hot-tub:before{content:\"\\F593\"}.fa-hotdog:before{content:\"\\F80F\"}.fa-hotel:before{content:\"\\F594\"}.fa-hotjar:before{content:\"\\F3B1\"}.fa-hourglass:before{content:\"\\F254\"}.fa-hourglass-end:before{content:\"\\F253\"}.fa-hourglass-half:before{content:\"\\F252\"}.fa-hourglass-start:before{content:\"\\F251\"}.fa-house-damage:before{content:\"\\F6F1\"}.fa-houzz:before{content:\"\\F27C\"}.fa-hryvnia:before{content:\"\\F6F2\"}.fa-html5:before{content:\"\\F13B\"}.fa-hubspot:before{content:\"\\F3B2\"}.fa-i-cursor:before{content:\"\\F246\"}.fa-ice-cream:before{content:\"\\F810\"}.fa-icicles:before{content:\"\\F7AD\"}.fa-icons:before{content:\"\\F86D\"}.fa-id-badge:before{content:\"\\F2C1\"}.fa-id-card:before{content:\"\\F2C2\"}.fa-id-card-alt:before{content:\"\\F47F\"}.fa-igloo:before{content:\"\\F7AE\"}.fa-image:before{content:\"\\F03E\"}.fa-images:before{content:\"\\F302\"}.fa-imdb:before{content:\"\\F2D8\"}.fa-inbox:before{content:\"\\F01C\"}.fa-indent:before{content:\"\\F03C\"}.fa-industry:before{content:\"\\F275\"}.fa-infinity:before{content:\"\\F534\"}.fa-info:before{content:\"\\F129\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-instagram:before{content:\"\\F16D\"}.fa-intercom:before{content:\"\\F7AF\"}.fa-internet-explorer:before{content:\"\\F26B\"}.fa-invision:before{content:\"\\F7B0\"}.fa-ioxhost:before{content:\"\\F208\"}.fa-italic:before{content:\"\\F033\"}.fa-itch-io:before{content:\"\\F83A\"}.fa-itunes:before{content:\"\\F3B4\"}.fa-itunes-note:before{content:\"\\F3B5\"}.fa-java:before{content:\"\\F4E4\"}.fa-jedi:before{content:\"\\F669\"}.fa-jedi-order:before{content:\"\\F50E\"}.fa-jenkins:before{content:\"\\F3B6\"}.fa-jira:before{content:\"\\F7B1\"}.fa-joget:before{content:\"\\F3B7\"}.fa-joint:before{content:\"\\F595\"}.fa-joomla:before{content:\"\\F1AA\"}.fa-journal-whills:before{content:\"\\F66A\"}.fa-js:before{content:\"\\F3B8\"}.fa-js-square:before{content:\"\\F3B9\"}.fa-jsfiddle:before{content:\"\\F1CC\"}.fa-kaaba:before{content:\"\\F66B\"}.fa-kaggle:before{content:\"\\F5FA\"}.fa-key:before{content:\"\\F084\"}.fa-keybase:before{content:\"\\F4F5\"}.fa-keyboard:before{content:\"\\F11C\"}.fa-keycdn:before{content:\"\\F3BA\"}.fa-khanda:before{content:\"\\F66D\"}.fa-kickstarter:before{content:\"\\F3BB\"}.fa-kickstarter-k:before{content:\"\\F3BC\"}.fa-kiss:before{content:\"\\F596\"}.fa-kiss-beam:before{content:\"\\F597\"}.fa-kiss-wink-heart:before{content:\"\\F598\"}.fa-kiwi-bird:before{content:\"\\F535\"}.fa-korvue:before{content:\"\\F42F\"}.fa-landmark:before{content:\"\\F66F\"}.fa-language:before{content:\"\\F1AB\"}.fa-laptop:before{content:\"\\F109\"}.fa-laptop-code:before{content:\"\\F5FC\"}.fa-laptop-medical:before{content:\"\\F812\"}.fa-laravel:before{content:\"\\F3BD\"}.fa-lastfm:before{content:\"\\F202\"}.fa-lastfm-square:before{content:\"\\F203\"}.fa-laugh:before{content:\"\\F599\"}.fa-laugh-beam:before{content:\"\\F59A\"}.fa-laugh-squint:before{content:\"\\F59B\"}.fa-laugh-wink:before{content:\"\\F59C\"}.fa-layer-group:before{content:\"\\F5FD\"}.fa-leaf:before{content:\"\\F06C\"}.fa-leanpub:before{content:\"\\F212\"}.fa-lemon:before{content:\"\\F094\"}.fa-less:before{content:\"\\F41D\"}.fa-less-than:before{content:\"\\F536\"}.fa-less-than-equal:before{content:\"\\F537\"}.fa-level-down-alt:before{content:\"\\F3BE\"}.fa-level-up-alt:before{content:\"\\F3BF\"}.fa-life-ring:before{content:\"\\F1CD\"}.fa-lightbulb:before{content:\"\\F0EB\"}.fa-line:before{content:\"\\F3C0\"}.fa-link:before{content:\"\\F0C1\"}.fa-linkedin:before{content:\"\\F08C\"}.fa-linkedin-in:before{content:\"\\F0E1\"}.fa-linode:before{content:\"\\F2B8\"}.fa-linux:before{content:\"\\F17C\"}.fa-lira-sign:before{content:\"\\F195\"}.fa-list:before{content:\"\\F03A\"}.fa-list-alt:before{content:\"\\F022\"}.fa-list-ol:before{content:\"\\F0CB\"}.fa-list-ul:before{content:\"\\F0CA\"}.fa-location-arrow:before{content:\"\\F124\"}.fa-lock:before{content:\"\\F023\"}.fa-lock-open:before{content:\"\\F3C1\"}.fa-long-arrow-alt-down:before{content:\"\\F309\"}.fa-long-arrow-alt-left:before{content:\"\\F30A\"}.fa-long-arrow-alt-right:before{content:\"\\F30B\"}.fa-long-arrow-alt-up:before{content:\"\\F30C\"}.fa-low-vision:before{content:\"\\F2A8\"}.fa-luggage-cart:before{content:\"\\F59D\"}.fa-lyft:before{content:\"\\F3C3\"}.fa-magento:before{content:\"\\F3C4\"}.fa-magic:before{content:\"\\F0D0\"}.fa-magnet:before{content:\"\\F076\"}.fa-mail-bulk:before{content:\"\\F674\"}.fa-mailchimp:before{content:\"\\F59E\"}.fa-male:before{content:\"\\F183\"}.fa-mandalorian:before{content:\"\\F50F\"}.fa-map:before{content:\"\\F279\"}.fa-map-marked:before{content:\"\\F59F\"}.fa-map-marked-alt:before{content:\"\\F5A0\"}.fa-map-marker:before{content:\"\\F041\"}.fa-map-marker-alt:before{content:\"\\F3C5\"}.fa-map-pin:before{content:\"\\F276\"}.fa-map-signs:before{content:\"\\F277\"}.fa-markdown:before{content:\"\\F60F\"}.fa-marker:before{content:\"\\F5A1\"}.fa-mars:before{content:\"\\F222\"}.fa-mars-double:before{content:\"\\F227\"}.fa-mars-stroke:before{content:\"\\F229\"}.fa-mars-stroke-h:before{content:\"\\F22B\"}.fa-mars-stroke-v:before{content:\"\\F22A\"}.fa-mask:before{content:\"\\F6FA\"}.fa-mastodon:before{content:\"\\F4F6\"}.fa-maxcdn:before{content:\"\\F136\"}.fa-mdb:before{content:\"\\F8CA\"}.fa-medal:before{content:\"\\F5A2\"}.fa-medapps:before{content:\"\\F3C6\"}.fa-medium:before{content:\"\\F23A\"}.fa-medium-m:before{content:\"\\F3C7\"}.fa-medkit:before{content:\"\\F0FA\"}.fa-medrt:before{content:\"\\F3C8\"}.fa-meetup:before{content:\"\\F2E0\"}.fa-megaport:before{content:\"\\F5A3\"}.fa-meh:before{content:\"\\F11A\"}.fa-meh-blank:before{content:\"\\F5A4\"}.fa-meh-rolling-eyes:before{content:\"\\F5A5\"}.fa-memory:before{content:\"\\F538\"}.fa-mendeley:before{content:\"\\F7B3\"}.fa-menorah:before{content:\"\\F676\"}.fa-mercury:before{content:\"\\F223\"}.fa-meteor:before{content:\"\\F753\"}.fa-microchip:before{content:\"\\F2DB\"}.fa-microphone:before{content:\"\\F130\"}.fa-microphone-alt:before{content:\"\\F3C9\"}.fa-microphone-alt-slash:before{content:\"\\F539\"}.fa-microphone-slash:before{content:\"\\F131\"}.fa-microscope:before{content:\"\\F610\"}.fa-microsoft:before{content:\"\\F3CA\"}.fa-minus:before{content:\"\\F068\"}.fa-minus-circle:before{content:\"\\F056\"}.fa-minus-square:before{content:\"\\F146\"}.fa-mitten:before{content:\"\\F7B5\"}.fa-mix:before{content:\"\\F3CB\"}.fa-mixcloud:before{content:\"\\F289\"}.fa-mizuni:before{content:\"\\F3CC\"}.fa-mobile:before{content:\"\\F10B\"}.fa-mobile-alt:before{content:\"\\F3CD\"}.fa-modx:before{content:\"\\F285\"}.fa-monero:before{content:\"\\F3D0\"}.fa-money-bill:before{content:\"\\F0D6\"}.fa-money-bill-alt:before{content:\"\\F3D1\"}.fa-money-bill-wave:before{content:\"\\F53A\"}.fa-money-bill-wave-alt:before{content:\"\\F53B\"}.fa-money-check:before{content:\"\\F53C\"}.fa-money-check-alt:before{content:\"\\F53D\"}.fa-monument:before{content:\"\\F5A6\"}.fa-moon:before{content:\"\\F186\"}.fa-mortar-pestle:before{content:\"\\F5A7\"}.fa-mosque:before{content:\"\\F678\"}.fa-motorcycle:before{content:\"\\F21C\"}.fa-mountain:before{content:\"\\F6FC\"}.fa-mouse:before{content:\"\\F8CC\"}.fa-mouse-pointer:before{content:\"\\F245\"}.fa-mug-hot:before{content:\"\\F7B6\"}.fa-music:before{content:\"\\F001\"}.fa-napster:before{content:\"\\F3D2\"}.fa-neos:before{content:\"\\F612\"}.fa-network-wired:before{content:\"\\F6FF\"}.fa-neuter:before{content:\"\\F22C\"}.fa-newspaper:before{content:\"\\F1EA\"}.fa-nimblr:before{content:\"\\F5A8\"}.fa-node:before{content:\"\\F419\"}.fa-node-js:before{content:\"\\F3D3\"}.fa-not-equal:before{content:\"\\F53E\"}.fa-notes-medical:before{content:\"\\F481\"}.fa-npm:before{content:\"\\F3D4\"}.fa-ns8:before{content:\"\\F3D5\"}.fa-nutritionix:before{content:\"\\F3D6\"}.fa-object-group:before{content:\"\\F247\"}.fa-object-ungroup:before{content:\"\\F248\"}.fa-odnoklassniki:before{content:\"\\F263\"}.fa-odnoklassniki-square:before{content:\"\\F264\"}.fa-oil-can:before{content:\"\\F613\"}.fa-old-republic:before{content:\"\\F510\"}.fa-om:before{content:\"\\F679\"}.fa-opencart:before{content:\"\\F23D\"}.fa-openid:before{content:\"\\F19B\"}.fa-opera:before{content:\"\\F26A\"}.fa-optin-monster:before{content:\"\\F23C\"}.fa-orcid:before{content:\"\\F8D2\"}.fa-osi:before{content:\"\\F41A\"}.fa-otter:before{content:\"\\F700\"}.fa-outdent:before{content:\"\\F03B\"}.fa-page4:before{content:\"\\F3D7\"}.fa-pagelines:before{content:\"\\F18C\"}.fa-pager:before{content:\"\\F815\"}.fa-paint-brush:before{content:\"\\F1FC\"}.fa-paint-roller:before{content:\"\\F5AA\"}.fa-palette:before{content:\"\\F53F\"}.fa-palfed:before{content:\"\\F3D8\"}.fa-pallet:before{content:\"\\F482\"}.fa-paper-plane:before{content:\"\\F1D8\"}.fa-paperclip:before{content:\"\\F0C6\"}.fa-parachute-box:before{content:\"\\F4CD\"}.fa-paragraph:before{content:\"\\F1DD\"}.fa-parking:before{content:\"\\F540\"}.fa-passport:before{content:\"\\F5AB\"}.fa-pastafarianism:before{content:\"\\F67B\"}.fa-paste:before{content:\"\\F0EA\"}.fa-patreon:before{content:\"\\F3D9\"}.fa-pause:before{content:\"\\F04C\"}.fa-pause-circle:before{content:\"\\F28B\"}.fa-paw:before{content:\"\\F1B0\"}.fa-paypal:before{content:\"\\F1ED\"}.fa-peace:before{content:\"\\F67C\"}.fa-pen:before{content:\"\\F304\"}.fa-pen-alt:before{content:\"\\F305\"}.fa-pen-fancy:before{content:\"\\F5AC\"}.fa-pen-nib:before{content:\"\\F5AD\"}.fa-pen-square:before{content:\"\\F14B\"}.fa-pencil-alt:before{content:\"\\F303\"}.fa-pencil-ruler:before{content:\"\\F5AE\"}.fa-penny-arcade:before{content:\"\\F704\"}.fa-people-carry:before{content:\"\\F4CE\"}.fa-pepper-hot:before{content:\"\\F816\"}.fa-percent:before{content:\"\\F295\"}.fa-percentage:before{content:\"\\F541\"}.fa-periscope:before{content:\"\\F3DA\"}.fa-person-booth:before{content:\"\\F756\"}.fa-phabricator:before{content:\"\\F3DB\"}.fa-phoenix-framework:before{content:\"\\F3DC\"}.fa-phoenix-squadron:before{content:\"\\F511\"}.fa-phone:before{content:\"\\F095\"}.fa-phone-alt:before{content:\"\\F879\"}.fa-phone-slash:before{content:\"\\F3DD\"}.fa-phone-square:before{content:\"\\F098\"}.fa-phone-square-alt:before{content:\"\\F87B\"}.fa-phone-volume:before{content:\"\\F2A0\"}.fa-photo-video:before{content:\"\\F87C\"}.fa-php:before{content:\"\\F457\"}.fa-pied-piper:before{content:\"\\F2AE\"}.fa-pied-piper-alt:before{content:\"\\F1A8\"}.fa-pied-piper-hat:before{content:\"\\F4E5\"}.fa-pied-piper-pp:before{content:\"\\F1A7\"}.fa-piggy-bank:before{content:\"\\F4D3\"}.fa-pills:before{content:\"\\F484\"}.fa-pinterest:before{content:\"\\F0D2\"}.fa-pinterest-p:before{content:\"\\F231\"}.fa-pinterest-square:before{content:\"\\F0D3\"}.fa-pizza-slice:before{content:\"\\F818\"}.fa-place-of-worship:before{content:\"\\F67F\"}.fa-plane:before{content:\"\\F072\"}.fa-plane-arrival:before{content:\"\\F5AF\"}.fa-plane-departure:before{content:\"\\F5B0\"}.fa-play:before{content:\"\\F04B\"}.fa-play-circle:before{content:\"\\F144\"}.fa-playstation:before{content:\"\\F3DF\"}.fa-plug:before{content:\"\\F1E6\"}.fa-plus:before{content:\"\\F067\"}.fa-plus-circle:before{content:\"\\F055\"}.fa-plus-square:before{content:\"\\F0FE\"}.fa-podcast:before{content:\"\\F2CE\"}.fa-poll:before{content:\"\\F681\"}.fa-poll-h:before{content:\"\\F682\"}.fa-poo:before{content:\"\\F2FE\"}.fa-poo-storm:before{content:\"\\F75A\"}.fa-poop:before{content:\"\\F619\"}.fa-portrait:before{content:\"\\F3E0\"}.fa-pound-sign:before{content:\"\\F154\"}.fa-power-off:before{content:\"\\F011\"}.fa-pray:before{content:\"\\F683\"}.fa-praying-hands:before{content:\"\\F684\"}.fa-prescription:before{content:\"\\F5B1\"}.fa-prescription-bottle:before{content:\"\\F485\"}.fa-prescription-bottle-alt:before{content:\"\\F486\"}.fa-print:before{content:\"\\F02F\"}.fa-procedures:before{content:\"\\F487\"}.fa-product-hunt:before{content:\"\\F288\"}.fa-project-diagram:before{content:\"\\F542\"}.fa-pushed:before{content:\"\\F3E1\"}.fa-puzzle-piece:before{content:\"\\F12E\"}.fa-python:before{content:\"\\F3E2\"}.fa-qq:before{content:\"\\F1D6\"}.fa-qrcode:before{content:\"\\F029\"}.fa-question:before{content:\"\\F128\"}.fa-question-circle:before{content:\"\\F059\"}.fa-quidditch:before{content:\"\\F458\"}.fa-quinscape:before{content:\"\\F459\"}.fa-quora:before{content:\"\\F2C4\"}.fa-quote-left:before{content:\"\\F10D\"}.fa-quote-right:before{content:\"\\F10E\"}.fa-quran:before{content:\"\\F687\"}.fa-r-project:before{content:\"\\F4F7\"}.fa-radiation:before{content:\"\\F7B9\"}.fa-radiation-alt:before{content:\"\\F7BA\"}.fa-rainbow:before{content:\"\\F75B\"}.fa-random:before{content:\"\\F074\"}.fa-raspberry-pi:before{content:\"\\F7BB\"}.fa-ravelry:before{content:\"\\F2D9\"}.fa-react:before{content:\"\\F41B\"}.fa-reacteurope:before{content:\"\\F75D\"}.fa-readme:before{content:\"\\F4D5\"}.fa-rebel:before{content:\"\\F1D0\"}.fa-receipt:before{content:\"\\F543\"}.fa-record-vinyl:before{content:\"\\F8D9\"}.fa-recycle:before{content:\"\\F1B8\"}.fa-red-river:before{content:\"\\F3E3\"}.fa-reddit:before{content:\"\\F1A1\"}.fa-reddit-alien:before{content:\"\\F281\"}.fa-reddit-square:before{content:\"\\F1A2\"}.fa-redhat:before{content:\"\\F7BC\"}.fa-redo:before{content:\"\\F01E\"}.fa-redo-alt:before{content:\"\\F2F9\"}.fa-registered:before{content:\"\\F25D\"}.fa-remove-format:before{content:\"\\F87D\"}.fa-renren:before{content:\"\\F18B\"}.fa-reply:before{content:\"\\F3E5\"}.fa-reply-all:before{content:\"\\F122\"}.fa-replyd:before{content:\"\\F3E6\"}.fa-republican:before{content:\"\\F75E\"}.fa-researchgate:before{content:\"\\F4F8\"}.fa-resolving:before{content:\"\\F3E7\"}.fa-restroom:before{content:\"\\F7BD\"}.fa-retweet:before{content:\"\\F079\"}.fa-rev:before{content:\"\\F5B2\"}.fa-ribbon:before{content:\"\\F4D6\"}.fa-ring:before{content:\"\\F70B\"}.fa-road:before{content:\"\\F018\"}.fa-robot:before{content:\"\\F544\"}.fa-rocket:before{content:\"\\F135\"}.fa-rocketchat:before{content:\"\\F3E8\"}.fa-rockrms:before{content:\"\\F3E9\"}.fa-route:before{content:\"\\F4D7\"}.fa-rss:before{content:\"\\F09E\"}.fa-rss-square:before{content:\"\\F143\"}.fa-ruble-sign:before{content:\"\\F158\"}.fa-ruler:before{content:\"\\F545\"}.fa-ruler-combined:before{content:\"\\F546\"}.fa-ruler-horizontal:before{content:\"\\F547\"}.fa-ruler-vertical:before{content:\"\\F548\"}.fa-running:before{content:\"\\F70C\"}.fa-rupee-sign:before{content:\"\\F156\"}.fa-sad-cry:before{content:\"\\F5B3\"}.fa-sad-tear:before{content:\"\\F5B4\"}.fa-safari:before{content:\"\\F267\"}.fa-salesforce:before{content:\"\\F83B\"}.fa-sass:before{content:\"\\F41E\"}.fa-satellite:before{content:\"\\F7BF\"}.fa-satellite-dish:before{content:\"\\F7C0\"}.fa-save:before{content:\"\\F0C7\"}.fa-schlix:before{content:\"\\F3EA\"}.fa-school:before{content:\"\\F549\"}.fa-screwdriver:before{content:\"\\F54A\"}.fa-scribd:before{content:\"\\F28A\"}.fa-scroll:before{content:\"\\F70E\"}.fa-sd-card:before{content:\"\\F7C2\"}.fa-search:before{content:\"\\F002\"}.fa-search-dollar:before{content:\"\\F688\"}.fa-search-location:before{content:\"\\F689\"}.fa-search-minus:before{content:\"\\F010\"}.fa-search-plus:before{content:\"\\F00E\"}.fa-searchengin:before{content:\"\\F3EB\"}.fa-seedling:before{content:\"\\F4D8\"}.fa-sellcast:before{content:\"\\F2DA\"}.fa-sellsy:before{content:\"\\F213\"}.fa-server:before{content:\"\\F233\"}.fa-servicestack:before{content:\"\\F3EC\"}.fa-shapes:before{content:\"\\F61F\"}.fa-share:before{content:\"\\F064\"}.fa-share-alt:before{content:\"\\F1E0\"}.fa-share-alt-square:before{content:\"\\F1E1\"}.fa-share-square:before{content:\"\\F14D\"}.fa-shekel-sign:before{content:\"\\F20B\"}.fa-shield-alt:before{content:\"\\F3ED\"}.fa-ship:before{content:\"\\F21A\"}.fa-shipping-fast:before{content:\"\\F48B\"}.fa-shirtsinbulk:before{content:\"\\F214\"}.fa-shoe-prints:before{content:\"\\F54B\"}.fa-shopping-bag:before{content:\"\\F290\"}.fa-shopping-basket:before{content:\"\\F291\"}.fa-shopping-cart:before{content:\"\\F07A\"}.fa-shopware:before{content:\"\\F5B5\"}.fa-shower:before{content:\"\\F2CC\"}.fa-shuttle-van:before{content:\"\\F5B6\"}.fa-sign:before{content:\"\\F4D9\"}.fa-sign-in-alt:before{content:\"\\F2F6\"}.fa-sign-language:before{content:\"\\F2A7\"}.fa-sign-out-alt:before{content:\"\\F2F5\"}.fa-signal:before{content:\"\\F012\"}.fa-signature:before{content:\"\\F5B7\"}.fa-sim-card:before{content:\"\\F7C4\"}.fa-simplybuilt:before{content:\"\\F215\"}.fa-sistrix:before{content:\"\\F3EE\"}.fa-sitemap:before{content:\"\\F0E8\"}.fa-sith:before{content:\"\\F512\"}.fa-skating:before{content:\"\\F7C5\"}.fa-sketch:before{content:\"\\F7C6\"}.fa-skiing:before{content:\"\\F7C9\"}.fa-skiing-nordic:before{content:\"\\F7CA\"}.fa-skull:before{content:\"\\F54C\"}.fa-skull-crossbones:before{content:\"\\F714\"}.fa-skyatlas:before{content:\"\\F216\"}.fa-skype:before{content:\"\\F17E\"}.fa-slack:before{content:\"\\F198\"}.fa-slack-hash:before{content:\"\\F3EF\"}.fa-slash:before{content:\"\\F715\"}.fa-sleigh:before{content:\"\\F7CC\"}.fa-sliders-h:before{content:\"\\F1DE\"}.fa-slideshare:before{content:\"\\F1E7\"}.fa-smile:before{content:\"\\F118\"}.fa-smile-beam:before{content:\"\\F5B8\"}.fa-smile-wink:before{content:\"\\F4DA\"}.fa-smog:before{content:\"\\F75F\"}.fa-smoking:before{content:\"\\F48D\"}.fa-smoking-ban:before{content:\"\\F54D\"}.fa-sms:before{content:\"\\F7CD\"}.fa-snapchat:before{content:\"\\F2AB\"}.fa-snapchat-ghost:before{content:\"\\F2AC\"}.fa-snapchat-square:before{content:\"\\F2AD\"}.fa-snowboarding:before{content:\"\\F7CE\"}.fa-snowflake:before{content:\"\\F2DC\"}.fa-snowman:before{content:\"\\F7D0\"}.fa-snowplow:before{content:\"\\F7D2\"}.fa-socks:before{content:\"\\F696\"}.fa-solar-panel:before{content:\"\\F5BA\"}.fa-sort:before{content:\"\\F0DC\"}.fa-sort-alpha-down:before{content:\"\\F15D\"}.fa-sort-alpha-down-alt:before{content:\"\\F881\"}.fa-sort-alpha-up:before{content:\"\\F15E\"}.fa-sort-alpha-up-alt:before{content:\"\\F882\"}.fa-sort-amount-down:before{content:\"\\F160\"}.fa-sort-amount-down-alt:before{content:\"\\F884\"}.fa-sort-amount-up:before{content:\"\\F161\"}.fa-sort-amount-up-alt:before{content:\"\\F885\"}.fa-sort-down:before{content:\"\\F0DD\"}.fa-sort-numeric-down:before{content:\"\\F162\"}.fa-sort-numeric-down-alt:before{content:\"\\F886\"}.fa-sort-numeric-up:before{content:\"\\F163\"}.fa-sort-numeric-up-alt:before{content:\"\\F887\"}.fa-sort-up:before{content:\"\\F0DE\"}.fa-soundcloud:before{content:\"\\F1BE\"}.fa-sourcetree:before{content:\"\\F7D3\"}.fa-spa:before{content:\"\\F5BB\"}.fa-space-shuttle:before{content:\"\\F197\"}.fa-speakap:before{content:\"\\F3F3\"}.fa-speaker-deck:before{content:\"\\F83C\"}.fa-spell-check:before{content:\"\\F891\"}.fa-spider:before{content:\"\\F717\"}.fa-spinner:before{content:\"\\F110\"}.fa-splotch:before{content:\"\\F5BC\"}.fa-spotify:before{content:\"\\F1BC\"}.fa-spray-can:before{content:\"\\F5BD\"}.fa-square:before{content:\"\\F0C8\"}.fa-square-full:before{content:\"\\F45C\"}.fa-square-root-alt:before{content:\"\\F698\"}.fa-squarespace:before{content:\"\\F5BE\"}.fa-stack-exchange:before{content:\"\\F18D\"}.fa-stack-overflow:before{content:\"\\F16C\"}.fa-stackpath:before{content:\"\\F842\"}.fa-stamp:before{content:\"\\F5BF\"}.fa-star:before{content:\"\\F005\"}.fa-star-and-crescent:before{content:\"\\F699\"}.fa-star-half:before{content:\"\\F089\"}.fa-star-half-alt:before{content:\"\\F5C0\"}.fa-star-of-david:before{content:\"\\F69A\"}.fa-star-of-life:before{content:\"\\F621\"}.fa-staylinked:before{content:\"\\F3F5\"}.fa-steam:before{content:\"\\F1B6\"}.fa-steam-square:before{content:\"\\F1B7\"}.fa-steam-symbol:before{content:\"\\F3F6\"}.fa-step-backward:before{content:\"\\F048\"}.fa-step-forward:before{content:\"\\F051\"}.fa-stethoscope:before{content:\"\\F0F1\"}.fa-sticker-mule:before{content:\"\\F3F7\"}.fa-sticky-note:before{content:\"\\F249\"}.fa-stop:before{content:\"\\F04D\"}.fa-stop-circle:before{content:\"\\F28D\"}.fa-stopwatch:before{content:\"\\F2F2\"}.fa-store:before{content:\"\\F54E\"}.fa-store-alt:before{content:\"\\F54F\"}.fa-strava:before{content:\"\\F428\"}.fa-stream:before{content:\"\\F550\"}.fa-street-view:before{content:\"\\F21D\"}.fa-strikethrough:before{content:\"\\F0CC\"}.fa-stripe:before{content:\"\\F429\"}.fa-stripe-s:before{content:\"\\F42A\"}.fa-stroopwafel:before{content:\"\\F551\"}.fa-studiovinari:before{content:\"\\F3F8\"}.fa-stumbleupon:before{content:\"\\F1A4\"}.fa-stumbleupon-circle:before{content:\"\\F1A3\"}.fa-subscript:before{content:\"\\F12C\"}.fa-subway:before{content:\"\\F239\"}.fa-suitcase:before{content:\"\\F0F2\"}.fa-suitcase-rolling:before{content:\"\\F5C1\"}.fa-sun:before{content:\"\\F185\"}.fa-superpowers:before{content:\"\\F2DD\"}.fa-superscript:before{content:\"\\F12B\"}.fa-supple:before{content:\"\\F3F9\"}.fa-surprise:before{content:\"\\F5C2\"}.fa-suse:before{content:\"\\F7D6\"}.fa-swatchbook:before{content:\"\\F5C3\"}.fa-swift:before{content:\"\\F8E1\"}.fa-swimmer:before{content:\"\\F5C4\"}.fa-swimming-pool:before{content:\"\\F5C5\"}.fa-symfony:before{content:\"\\F83D\"}.fa-synagogue:before{content:\"\\F69B\"}.fa-sync:before{content:\"\\F021\"}.fa-sync-alt:before{content:\"\\F2F1\"}.fa-syringe:before{content:\"\\F48E\"}.fa-table:before{content:\"\\F0CE\"}.fa-table-tennis:before{content:\"\\F45D\"}.fa-tablet:before{content:\"\\F10A\"}.fa-tablet-alt:before{content:\"\\F3FA\"}.fa-tablets:before{content:\"\\F490\"}.fa-tachometer-alt:before{content:\"\\F3FD\"}.fa-tag:before{content:\"\\F02B\"}.fa-tags:before{content:\"\\F02C\"}.fa-tape:before{content:\"\\F4DB\"}.fa-tasks:before{content:\"\\F0AE\"}.fa-taxi:before{content:\"\\F1BA\"}.fa-teamspeak:before{content:\"\\F4F9\"}.fa-teeth:before{content:\"\\F62E\"}.fa-teeth-open:before{content:\"\\F62F\"}.fa-telegram:before{content:\"\\F2C6\"}.fa-telegram-plane:before{content:\"\\F3FE\"}.fa-temperature-high:before{content:\"\\F769\"}.fa-temperature-low:before{content:\"\\F76B\"}.fa-tencent-weibo:before{content:\"\\F1D5\"}.fa-tenge:before{content:\"\\F7D7\"}.fa-terminal:before{content:\"\\F120\"}.fa-text-height:before{content:\"\\F034\"}.fa-text-width:before{content:\"\\F035\"}.fa-th:before{content:\"\\F00A\"}.fa-th-large:before{content:\"\\F009\"}.fa-th-list:before{content:\"\\F00B\"}.fa-the-red-yeti:before{content:\"\\F69D\"}.fa-theater-masks:before{content:\"\\F630\"}.fa-themeco:before{content:\"\\F5C6\"}.fa-themeisle:before{content:\"\\F2B2\"}.fa-thermometer:before{content:\"\\F491\"}.fa-thermometer-empty:before{content:\"\\F2CB\"}.fa-thermometer-full:before{content:\"\\F2C7\"}.fa-thermometer-half:before{content:\"\\F2C9\"}.fa-thermometer-quarter:before{content:\"\\F2CA\"}.fa-thermometer-three-quarters:before{content:\"\\F2C8\"}.fa-think-peaks:before{content:\"\\F731\"}.fa-thumbs-down:before{content:\"\\F165\"}.fa-thumbs-up:before{content:\"\\F164\"}.fa-thumbtack:before{content:\"\\F08D\"}.fa-ticket-alt:before{content:\"\\F3FF\"}.fa-times:before{content:\"\\F00D\"}.fa-times-circle:before{content:\"\\F057\"}.fa-tint:before{content:\"\\F043\"}.fa-tint-slash:before{content:\"\\F5C7\"}.fa-tired:before{content:\"\\F5C8\"}.fa-toggle-off:before{content:\"\\F204\"}.fa-toggle-on:before{content:\"\\F205\"}.fa-toilet:before{content:\"\\F7D8\"}.fa-toilet-paper:before{content:\"\\F71E\"}.fa-toolbox:before{content:\"\\F552\"}.fa-tools:before{content:\"\\F7D9\"}.fa-tooth:before{content:\"\\F5C9\"}.fa-torah:before{content:\"\\F6A0\"}.fa-torii-gate:before{content:\"\\F6A1\"}.fa-tractor:before{content:\"\\F722\"}.fa-trade-federation:before{content:\"\\F513\"}.fa-trademark:before{content:\"\\F25C\"}.fa-traffic-light:before{content:\"\\F637\"}.fa-train:before{content:\"\\F238\"}.fa-tram:before{content:\"\\F7DA\"}.fa-transgender:before{content:\"\\F224\"}.fa-transgender-alt:before{content:\"\\F225\"}.fa-trash:before{content:\"\\F1F8\"}.fa-trash-alt:before{content:\"\\F2ED\"}.fa-trash-restore:before{content:\"\\F829\"}.fa-trash-restore-alt:before{content:\"\\F82A\"}.fa-tree:before{content:\"\\F1BB\"}.fa-trello:before{content:\"\\F181\"}.fa-tripadvisor:before{content:\"\\F262\"}.fa-trophy:before{content:\"\\F091\"}.fa-truck:before{content:\"\\F0D1\"}.fa-truck-loading:before{content:\"\\F4DE\"}.fa-truck-monster:before{content:\"\\F63B\"}.fa-truck-moving:before{content:\"\\F4DF\"}.fa-truck-pickup:before{content:\"\\F63C\"}.fa-tshirt:before{content:\"\\F553\"}.fa-tty:before{content:\"\\F1E4\"}.fa-tumblr:before{content:\"\\F173\"}.fa-tumblr-square:before{content:\"\\F174\"}.fa-tv:before{content:\"\\F26C\"}.fa-twitch:before{content:\"\\F1E8\"}.fa-twitter:before{content:\"\\F099\"}.fa-twitter-square:before{content:\"\\F081\"}.fa-typo3:before{content:\"\\F42B\"}.fa-uber:before{content:\"\\F402\"}.fa-ubuntu:before{content:\"\\F7DF\"}.fa-uikit:before{content:\"\\F403\"}.fa-umbraco:before{content:\"\\F8E8\"}.fa-umbrella:before{content:\"\\F0E9\"}.fa-umbrella-beach:before{content:\"\\F5CA\"}.fa-underline:before{content:\"\\F0CD\"}.fa-undo:before{content:\"\\F0E2\"}.fa-undo-alt:before{content:\"\\F2EA\"}.fa-uniregistry:before{content:\"\\F404\"}.fa-universal-access:before{content:\"\\F29A\"}.fa-university:before{content:\"\\F19C\"}.fa-unlink:before{content:\"\\F127\"}.fa-unlock:before{content:\"\\F09C\"}.fa-unlock-alt:before{content:\"\\F13E\"}.fa-untappd:before{content:\"\\F405\"}.fa-upload:before{content:\"\\F093\"}.fa-ups:before{content:\"\\F7E0\"}.fa-usb:before{content:\"\\F287\"}.fa-user:before{content:\"\\F007\"}.fa-user-alt:before{content:\"\\F406\"}.fa-user-alt-slash:before{content:\"\\F4FA\"}.fa-user-astronaut:before{content:\"\\F4FB\"}.fa-user-check:before{content:\"\\F4FC\"}.fa-user-circle:before{content:\"\\F2BD\"}.fa-user-clock:before{content:\"\\F4FD\"}.fa-user-cog:before{content:\"\\F4FE\"}.fa-user-edit:before{content:\"\\F4FF\"}.fa-user-friends:before{content:\"\\F500\"}.fa-user-graduate:before{content:\"\\F501\"}.fa-user-injured:before{content:\"\\F728\"}.fa-user-lock:before{content:\"\\F502\"}.fa-user-md:before{content:\"\\F0F0\"}.fa-user-minus:before{content:\"\\F503\"}.fa-user-ninja:before{content:\"\\F504\"}.fa-user-nurse:before{content:\"\\F82F\"}.fa-user-plus:before{content:\"\\F234\"}.fa-user-secret:before{content:\"\\F21B\"}.fa-user-shield:before{content:\"\\F505\"}.fa-user-slash:before{content:\"\\F506\"}.fa-user-tag:before{content:\"\\F507\"}.fa-user-tie:before{content:\"\\F508\"}.fa-user-times:before{content:\"\\F235\"}.fa-users:before{content:\"\\F0C0\"}.fa-users-cog:before{content:\"\\F509\"}.fa-usps:before{content:\"\\F7E1\"}.fa-ussunnah:before{content:\"\\F407\"}.fa-utensil-spoon:before{content:\"\\F2E5\"}.fa-utensils:before{content:\"\\F2E7\"}.fa-vaadin:before{content:\"\\F408\"}.fa-vector-square:before{content:\"\\F5CB\"}.fa-venus:before{content:\"\\F221\"}.fa-venus-double:before{content:\"\\F226\"}.fa-venus-mars:before{content:\"\\F228\"}.fa-viacoin:before{content:\"\\F237\"}.fa-viadeo:before{content:\"\\F2A9\"}.fa-viadeo-square:before{content:\"\\F2AA\"}.fa-vial:before{content:\"\\F492\"}.fa-vials:before{content:\"\\F493\"}.fa-viber:before{content:\"\\F409\"}.fa-video:before{content:\"\\F03D\"}.fa-video-slash:before{content:\"\\F4E2\"}.fa-vihara:before{content:\"\\F6A7\"}.fa-vimeo:before{content:\"\\F40A\"}.fa-vimeo-square:before{content:\"\\F194\"}.fa-vimeo-v:before{content:\"\\F27D\"}.fa-vine:before{content:\"\\F1CA\"}.fa-vk:before{content:\"\\F189\"}.fa-vnv:before{content:\"\\F40B\"}.fa-voicemail:before{content:\"\\F897\"}.fa-volleyball-ball:before{content:\"\\F45F\"}.fa-volume-down:before{content:\"\\F027\"}.fa-volume-mute:before{content:\"\\F6A9\"}.fa-volume-off:before{content:\"\\F026\"}.fa-volume-up:before{content:\"\\F028\"}.fa-vote-yea:before{content:\"\\F772\"}.fa-vr-cardboard:before{content:\"\\F729\"}.fa-vuejs:before{content:\"\\F41F\"}.fa-walking:before{content:\"\\F554\"}.fa-wallet:before{content:\"\\F555\"}.fa-warehouse:before{content:\"\\F494\"}.fa-water:before{content:\"\\F773\"}.fa-wave-square:before{content:\"\\F83E\"}.fa-waze:before{content:\"\\F83F\"}.fa-weebly:before{content:\"\\F5CC\"}.fa-weibo:before{content:\"\\F18A\"}.fa-weight:before{content:\"\\F496\"}.fa-weight-hanging:before{content:\"\\F5CD\"}.fa-weixin:before{content:\"\\F1D7\"}.fa-whatsapp:before{content:\"\\F232\"}.fa-whatsapp-square:before{content:\"\\F40C\"}.fa-wheelchair:before{content:\"\\F193\"}.fa-whmcs:before{content:\"\\F40D\"}.fa-wifi:before{content:\"\\F1EB\"}.fa-wikipedia-w:before{content:\"\\F266\"}.fa-wind:before{content:\"\\F72E\"}.fa-window-close:before{content:\"\\F410\"}.fa-window-maximize:before{content:\"\\F2D0\"}.fa-window-minimize:before{content:\"\\F2D1\"}.fa-window-restore:before{content:\"\\F2D2\"}.fa-windows:before{content:\"\\F17A\"}.fa-wine-bottle:before{content:\"\\F72F\"}.fa-wine-glass:before{content:\"\\F4E3\"}.fa-wine-glass-alt:before{content:\"\\F5CE\"}.fa-wix:before{content:\"\\F5CF\"}.fa-wizards-of-the-coast:before{content:\"\\F730\"}.fa-wolf-pack-battalion:before{content:\"\\F514\"}.fa-won-sign:before{content:\"\\F159\"}.fa-wordpress:before{content:\"\\F19A\"}.fa-wordpress-simple:before{content:\"\\F411\"}.fa-wpbeginner:before{content:\"\\F297\"}.fa-wpexplorer:before{content:\"\\F2DE\"}.fa-wpforms:before{content:\"\\F298\"}.fa-wpressr:before{content:\"\\F3E4\"}.fa-wrench:before{content:\"\\F0AD\"}.fa-x-ray:before{content:\"\\F497\"}.fa-xbox:before{content:\"\\F412\"}.fa-xing:before{content:\"\\F168\"}.fa-xing-square:before{content:\"\\F169\"}.fa-y-combinator:before{content:\"\\F23B\"}.fa-yahoo:before{content:\"\\F19E\"}.fa-yammer:before{content:\"\\F840\"}.fa-yandex:before{content:\"\\F413\"}.fa-yandex-international:before{content:\"\\F414\"}.fa-yarn:before{content:\"\\F7E3\"}.fa-yelp:before{content:\"\\F1E9\"}.fa-yen-sign:before{content:\"\\F157\"}.fa-yin-yang:before{content:\"\\F6AD\"}.fa-yoast:before{content:\"\\F2B1\"}.fa-youtube:before{content:\"\\F167\"}.fa-youtube-square:before{content:\"\\F431\"}.fa-zhihu:before{content:\"\\F63F\"}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-family:\"Font Awesome 5 Brands\";font-style:normal;font-weight:normal;font-display:auto;src:url(" + escape(__webpack_require__(/*! ../webfonts/fa-brands-400.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot")) + ");src:url(" + escape(__webpack_require__(/*! ../webfonts/fa-brands-400.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot")) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-brands-400.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-brands-400.woff */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-brands-400.ttf */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf")) + ") format(\"truetype\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-brands-400.svg */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg")) + "#fontawesome) format(\"svg\")}.fab{font-family:\"Font Awesome 5 Brands\"}@font-face{font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:400;font-display:auto;src:url(" + escape(__webpack_require__(/*! ../webfonts/fa-regular-400.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot")) + ");src:url(" + escape(__webpack_require__(/*! ../webfonts/fa-regular-400.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot")) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-regular-400.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-regular-400.woff */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-regular-400.ttf */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf")) + ") format(\"truetype\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-regular-400.svg */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg")) + "#fontawesome) format(\"svg\")}.far{font-weight:400}@font-face{font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:900;font-display:auto;src:url(" + escape(__webpack_require__(/*! ../webfonts/fa-solid-900.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot")) + ");src:url(" + escape(__webpack_require__(/*! ../webfonts/fa-solid-900.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot")) + "?#iefix) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-solid-900.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2")) + ") format(\"woff2\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-solid-900.woff */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-solid-900.ttf */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf")) + ") format(\"truetype\"),url(" + escape(__webpack_require__(/*! ../webfonts/fa-solid-900.svg */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg")) + "#fontawesome) format(\"svg\")}.fa,.far,.fas{font-family:\"Font Awesome 5 Free\"}.fa,.fas{font-weight:900}", ""]);

// exports


        /***/
    }),

    /***/
    "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap/dist/css/bootstrap.min.css":
    /*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \*******************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
        exports.push([module.i, "/*!\n * Bootstrap v4.3.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus{outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer::before{content:\"\\2014\\A0\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-break:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:-webkit-box;display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-auto{-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:100%}.col-1{-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-4{-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-7{-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-10{-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.order-first{-webkit-box-ordinal-group:0;order:-1}.order-last{-webkit-box-ordinal-group:14;order:13}.order-0{-webkit-box-ordinal-group:1;order:0}.order-1{-webkit-box-ordinal-group:2;order:1}.order-2{-webkit-box-ordinal-group:3;order:2}.order-3{-webkit-box-ordinal-group:4;order:3}.order-4{-webkit-box-ordinal-group:5;order:4}.order-5{-webkit-box-ordinal-group:6;order:5}.order-6{-webkit-box-ordinal-group:7;order:6}.order-7{-webkit-box-ordinal-group:8;order:7}.order-8{-webkit-box-ordinal-group:9;order:8}.order-9{-webkit-box-ordinal-group:10;order:9}.order-10{-webkit-box-ordinal-group:11;order:10}.order-11{-webkit-box-ordinal-group:12;order:11}.order-12{-webkit-box-ordinal-group:13;order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{flex-basis:0;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-sm-auto{-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-sm-4{-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-sm-7{-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-sm-10{-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.order-sm-first{-webkit-box-ordinal-group:0;order:-1}.order-sm-last{-webkit-box-ordinal-group:14;order:13}.order-sm-0{-webkit-box-ordinal-group:1;order:0}.order-sm-1{-webkit-box-ordinal-group:2;order:1}.order-sm-2{-webkit-box-ordinal-group:3;order:2}.order-sm-3{-webkit-box-ordinal-group:4;order:3}.order-sm-4{-webkit-box-ordinal-group:5;order:4}.order-sm-5{-webkit-box-ordinal-group:6;order:5}.order-sm-6{-webkit-box-ordinal-group:7;order:6}.order-sm-7{-webkit-box-ordinal-group:8;order:7}.order-sm-8{-webkit-box-ordinal-group:9;order:8}.order-sm-9{-webkit-box-ordinal-group:10;order:9}.order-sm-10{-webkit-box-ordinal-group:11;order:10}.order-sm-11{-webkit-box-ordinal-group:12;order:11}.order-sm-12{-webkit-box-ordinal-group:13;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{flex-basis:0;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-md-auto{-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:100%}.col-md-1{-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-md-4{-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-md-7{-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-md-10{-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.order-md-first{-webkit-box-ordinal-group:0;order:-1}.order-md-last{-webkit-box-ordinal-group:14;order:13}.order-md-0{-webkit-box-ordinal-group:1;order:0}.order-md-1{-webkit-box-ordinal-group:2;order:1}.order-md-2{-webkit-box-ordinal-group:3;order:2}.order-md-3{-webkit-box-ordinal-group:4;order:3}.order-md-4{-webkit-box-ordinal-group:5;order:4}.order-md-5{-webkit-box-ordinal-group:6;order:5}.order-md-6{-webkit-box-ordinal-group:7;order:6}.order-md-7{-webkit-box-ordinal-group:8;order:7}.order-md-8{-webkit-box-ordinal-group:9;order:8}.order-md-9{-webkit-box-ordinal-group:10;order:9}.order-md-10{-webkit-box-ordinal-group:11;order:10}.order-md-11{-webkit-box-ordinal-group:12;order:11}.order-md-12{-webkit-box-ordinal-group:13;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{flex-basis:0;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-lg-auto{-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-lg-4{-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-lg-7{-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-lg-10{-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.order-lg-first{-webkit-box-ordinal-group:0;order:-1}.order-lg-last{-webkit-box-ordinal-group:14;order:13}.order-lg-0{-webkit-box-ordinal-group:1;order:0}.order-lg-1{-webkit-box-ordinal-group:2;order:1}.order-lg-2{-webkit-box-ordinal-group:3;order:2}.order-lg-3{-webkit-box-ordinal-group:4;order:3}.order-lg-4{-webkit-box-ordinal-group:5;order:4}.order-lg-5{-webkit-box-ordinal-group:6;order:5}.order-lg-6{-webkit-box-ordinal-group:7;order:6}.order-lg-7{-webkit-box-ordinal-group:8;order:7}.order-lg-8{-webkit-box-ordinal-group:9;order:8}.order-lg-9{-webkit-box-ordinal-group:10;order:9}.order-lg-10{-webkit-box-ordinal-group:11;order:10}.order-lg-11{-webkit-box-ordinal-group:12;order:11}.order-lg-12{-webkit-box-ordinal-group:13;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{flex-basis:0;-webkit-box-flex:1;flex-grow:1;max-width:100%}.col-xl-auto{-webkit-box-flex:0;flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{-webkit-box-flex:0;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-webkit-box-flex:0;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.col-xl-4{-webkit-box-flex:0;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-webkit-box-flex:0;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.col-xl-7{-webkit-box-flex:0;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-webkit-box-flex:0;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.col-xl-10{-webkit-box-flex:0;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-webkit-box-flex:0;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-webkit-box-flex:0;flex:0 0 100%;max-width:100%}.order-xl-first{-webkit-box-ordinal-group:0;order:-1}.order-xl-last{-webkit-box-ordinal-group:14;order:13}.order-xl-0{-webkit-box-ordinal-group:1;order:0}.order-xl-1{-webkit-box-ordinal-group:2;order:1}.order-xl-2{-webkit-box-ordinal-group:3;order:2}.order-xl-3{-webkit-box-ordinal-group:4;order:3}.order-xl-4{-webkit-box-ordinal-group:5;order:4}.order-xl-5{-webkit-box-ordinal-group:6;order:5}.order-xl-6{-webkit-box-ordinal-group:7;order:6}.order-xl-7{-webkit-box-ordinal-group:8;order:7}.order-xl-8{-webkit-box-ordinal-group:9;order:8}.order-xl-9{-webkit-box-ordinal-group:10;order:9}.order-xl-10{-webkit-box-ordinal-group:11;order:10}.order-xl-11{-webkit-box-ordinal-group:12;order:11}.order-xl-12{-webkit-box-ordinal-group:13;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark td,.table-dark th,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;-webkit-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{-webkit-transition:none;transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple],select.form-control[size]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:-webkit-box;display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.form-control.is-valid,.was-validated .form-control:valid{border-color:#28a745;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip{display:block}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#28a745;padding-right:calc((1em + .75rem) * 3 / 4 + 1.75rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip{display:block}.form-control-file.is-valid~.valid-feedback,.form-control-file.is-valid~.valid-tooltip,.was-validated .form-control-file:valid~.valid-feedback,.was-validated .form-control-file:valid~.valid-tooltip{display:block}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before{border-color:#28a745}.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before{border-color:#34ce57;background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before{border-color:#28a745}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip{display:block}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\");background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip{display:block}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#dc3545;padding-right:calc((1em + .75rem) * 3 / 4 + 1.75rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip{display:block}.form-control-file.is-invalid~.invalid-feedback,.form-control-file.is-invalid~.invalid-tooltip,.was-validated .form-control-file:invalid~.invalid-feedback,.was-validated .form-control-file:invalid~.invalid-tooltip{display:block}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before{border-color:#dc3545}.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before{border-color:#e4606d;background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before{border-color:#dc3545}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip{display:block}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-webkit-box;display:flex;-webkit-box-flex:0;flex:0 0 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{-webkit-transition:none;transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3;text-decoration:underline}.btn-link.focus,.btn-link:focus{text-decoration:underline;box-shadow:none}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{-webkit-transition:none;transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{-webkit-transition:none;transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:-webkit-inline-box;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-webkit-box-flex:1;flex:1 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:1}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:1}.btn-toolbar{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:center;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:stretch;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;-webkit-box-flex:1;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append,.input-group-prepend{display:-webkit-box;display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 1rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.5em + .5rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:-webkit-inline-box;display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label::before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label::before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:#adb5bd solid 1px}.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background:no-repeat 50%/50% 50%}.custom-checkbox .custom-control-label::before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label::after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label::after{-webkit-transition:none;transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#fff;-webkit-transform:translateX(.75rem);transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select-sm{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + .75rem + 2px);margin:0;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:disabled~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label::after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);padding:.375rem .75rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:calc(1rem + .4rem);padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label::before,.custom-file-label,.custom-select{-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label::before,.custom-file-label,.custom-select{-webkit-transition:none;transition:none}}.nav{display:-webkit-box;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{-webkit-box-flex:1;flex:1 1 auto;text-align:center}.nav-justified .nav-item{flex-basis:0;-webkit-box-flex:1;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}.navbar>.container,.navbar>.container-fluid{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;-webkit-box-flex:1;flex-grow:1;-webkit-box-align:center;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-pack:start;justify-content:flex-start}.navbar-expand-sm .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:-webkit-box!important;display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-pack:start;justify-content:flex-start}.navbar-expand-md .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:-webkit-box!important;display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:-webkit-box!important;display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-pack:start;justify-content:flex-start}.navbar-expand-xl .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:-webkit-box!important;display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-pack:start;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid{flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:-webkit-box!important;display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{-webkit-box-flex:1;flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 0 0%;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap}.card-group>.card{-webkit-box-flex:1;flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion>.card{overflow:hidden}.accordion>.card:not(:first-of-type) .card-header:first-child{border-radius:0}.accordion>.card:not(:first-of-type):not(:last-of-type){border-bottom:0;border-radius:0}.accordion>.card:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:last-of-type{border-top-left-radius:0;border-top-right-radius:0}.accordion>.card .card-header{margin-bottom:-1px}.breadcrumb{display:-webkit-box;display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:-webkit-box;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:2;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{-webkit-transition:none;transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0062cc}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#545b62}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#1e7e34}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#117a8b}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:focus,a.badge-warning:hover{color:#212529;background-color:#d39e00}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#bd2130}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:focus,a.badge-light:hover{color:#212529;background-color:#dae0e5}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#1d2124}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:-webkit-box;display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;-webkit-transition:width .6s ease;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{-webkit-transition:none;transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:-webkit-box;display:flex;-webkit-box-align:start;align-items:flex-start}.media-body{-webkit-box-flex:1;flex:1}.list-group{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-horizontal{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.list-group-horizontal .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}@media (min-width:576px){.list-group-horizontal-sm{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.list-group-horizontal-sm .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-sm .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width:768px){.list-group-horizontal-md{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.list-group-horizontal-md .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-md .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width:992px){.list-group-horizontal-lg{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.list-group-horizontal-lg .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-lg .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width:1200px){.list-group-horizontal-xl{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.list-group-horizontal-xl .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-xl .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush .list-group-item:last-child{margin-bottom:-1px}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{margin-bottom:0;border-bottom:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}a.close.disabled{pointer-events:none}.toast{max-width:350px;overflow:hidden;font-size:.875rem;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;-webkit-transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0,-50px);transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{-webkit-transition:none;transition:none}}.modal.show .modal-dialog{-webkit-transform:none;transform:none}.modal-dialog-scrollable{display:-webkit-box;display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-webkit-box;display:flex;-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:justify;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-webkit-box-flex:1;flex:1 1 auto;padding:1rem}.modal-footer{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end;padding:1rem;border-top:1px solid #dee2e6;border-bottom-right-radius:.3rem;border-bottom-left-radius:.3rem}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=top]>.arrow::before,.bs-popover-top>.arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow::after,.bs-popover-top>.arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow::before,.bs-popover-right>.arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow::after,.bs-popover-right>.arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=bottom]>.arrow::before,.bs-popover-bottom>.arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow::after,.bs-popover-bottom>.arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow::before,.bs-popover-left>.arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow::after,.bs-popover-left>.arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:-webkit-transform .6s ease-in-out;-webkit-transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out, -webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{-webkit-transition:none;transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){-webkit-transform:translateX(100%);transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){-webkit-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transform:none;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;-webkit-transition:0s .6s opacity;transition:0s .6s opacity}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{-webkit-transition:none;transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;-webkit-transition:opacity .15s ease;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{-webkit-transition:none;transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50%/100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;-webkit-box-flex:0;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;-webkit-transition:opacity .6s ease;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{-webkit-transition:none;transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}@keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-right{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:-webkit-box!important;display:flex!important}.d-inline-flex{display:-webkit-inline-box!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-webkit-box!important;display:flex!important}.d-sm-inline-flex{display:-webkit-inline-box!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-webkit-box!important;display:flex!important}.d-md-inline-flex{display:-webkit-inline-box!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-webkit-box!important;display:flex!important}.d-lg-inline-flex{display:-webkit-inline-box!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-webkit-box!important;display:flex!important}.d-xl-inline-flex{display:-webkit-inline-box!important;display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:-webkit-box!important;display:flex!important}.d-print-inline-flex{display:-webkit-inline-box!important;display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important}.flex-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important}.flex-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{-webkit-box-flex:1!important;flex:1 1 auto!important}.flex-grow-0{-webkit-box-flex:0!important;flex-grow:0!important}.flex-grow-1{-webkit-box-flex:1!important;flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{-webkit-box-pack:start!important;justify-content:flex-start!important}.justify-content-end{-webkit-box-pack:end!important;justify-content:flex-end!important}.justify-content-center{-webkit-box-pack:center!important;justify-content:center!important}.justify-content-between{-webkit-box-pack:justify!important;justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{-webkit-box-align:start!important;align-items:flex-start!important}.align-items-end{-webkit-box-align:end!important;align-items:flex-end!important}.align-items-center{-webkit-box-align:center!important;align-items:center!important}.align-items-baseline{-webkit-box-align:baseline!important;align-items:baseline!important}.align-items-stretch{-webkit-box-align:stretch!important;align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:576px){.flex-sm-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important}.flex-sm-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important}.flex-sm-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{-webkit-box-flex:1!important;flex:1 1 auto!important}.flex-sm-grow-0{-webkit-box-flex:0!important;flex-grow:0!important}.flex-sm-grow-1{-webkit-box-flex:1!important;flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{-webkit-box-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-webkit-box-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-webkit-box-pack:center!important;justify-content:center!important}.justify-content-sm-between{-webkit-box-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{-webkit-box-align:start!important;align-items:flex-start!important}.align-items-sm-end{-webkit-box-align:end!important;align-items:flex-end!important}.align-items-sm-center{-webkit-box-align:center!important;align-items:center!important}.align-items-sm-baseline{-webkit-box-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-webkit-box-align:stretch!important;align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:768px){.flex-md-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important}.flex-md-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important}.flex-md-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{-webkit-box-flex:1!important;flex:1 1 auto!important}.flex-md-grow-0{-webkit-box-flex:0!important;flex-grow:0!important}.flex-md-grow-1{-webkit-box-flex:1!important;flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{-webkit-box-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-webkit-box-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-webkit-box-pack:center!important;justify-content:center!important}.justify-content-md-between{-webkit-box-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{-webkit-box-align:start!important;align-items:flex-start!important}.align-items-md-end{-webkit-box-align:end!important;align-items:flex-end!important}.align-items-md-center{-webkit-box-align:center!important;align-items:center!important}.align-items-md-baseline{-webkit-box-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-webkit-box-align:stretch!important;align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important}.flex-lg-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important}.flex-lg-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{-webkit-box-flex:1!important;flex:1 1 auto!important}.flex-lg-grow-0{-webkit-box-flex:0!important;flex-grow:0!important}.flex-lg-grow-1{-webkit-box-flex:1!important;flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{-webkit-box-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-webkit-box-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-webkit-box-pack:center!important;justify-content:center!important}.justify-content-lg-between{-webkit-box-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{-webkit-box-align:start!important;align-items:flex-start!important}.align-items-lg-end{-webkit-box-align:end!important;align-items:flex-end!important}.align-items-lg-center{-webkit-box-align:center!important;align-items:center!important}.align-items-lg-baseline{-webkit-box-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-webkit-box-align:stretch!important;align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;flex-direction:row!important}.flex-xl-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;flex-direction:column!important}.flex-xl-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{-webkit-box-flex:1!important;flex:1 1 auto!important}.flex-xl-grow-0{-webkit-box-flex:0!important;flex-grow:0!important}.flex-xl-grow-1{-webkit-box-flex:1!important;flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{-webkit-box-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-webkit-box-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-webkit-box-pack:center!important;justify-content:center!important}.justify-content-xl-between{-webkit-box-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{-webkit-box-align:start!important;align-items:flex-start!important}.align-items-xl-end{-webkit-box-align:end!important;align-items:flex-end!important}.align-items-xl-center{-webkit-box-align:center!important;align-items:center!important}.align-items-xl-baseline{-webkit-box-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-webkit-box-align:stretch!important;align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position: -webkit-sticky) or (position: sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;overflow-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px!important}.container{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}", ""]);

// exports


        /***/
    }),

    /***/
    "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/shards-ui/dist/css/shards.min.css":
    /*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/shards-ui/dist/css/shards.min.css ***!
  \****************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
        exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600|Roboto+Mono);", ""]);

// module
        exports.push([module.i, ":root{--blue:#007bff;--indigo:#674eec;--purple:#8445f7;--pink:#ff4169;--red:#c4183c;--orange:#fb7906;--yellow:#ffb400;--green:#17c671;--teal:#1adba2;--cyan:#00b8d8;--white:#fff;--gray:#868e96;--gray-dark:#343a40;--primary:#007bff;--secondary:#5A6169;--success:#17c671;--info:#00b8d8;--warning:#ffb400;--danger:#c4183c;--light:#e9ecef;--dark:#212529;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;--font-family-monospace:\"Roboto Mono\",Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}@media (max-width:575.98px){html{font-size:15px}}body{font-size:1rem;font-weight:300;color:#5a6169;background-color:#fff}a{color:#007bff;text-decoration:none}a:hover{color:#0056b3;text-decoration:underline}b,strong{font-weight:500}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}.h1,.h2,.h3,.h4,.h5,.h6{display:block}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.75rem;font-family:Poppins,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-weight:400;color:#212529}.h1,h1{font-size:3.052rem;letter-spacing:-.0625rem;line-height:3rem}.h2,h2{font-size:2.441rem;letter-spacing:-.0625rem;line-height:2.25rem}.h3,h3{font-size:1.953rem;line-height:2.25rem}.h4,h4{font-size:1.563rem;line-height:2rem}.h5,h5{font-size:1.25rem;line-height:1.5rem}.h6,h6{font-size:1rem;line-height:1.5rem}.lead{line-height:1.875rem}.display-1,.display-2,.display-3,.display-4{margin-bottom:.75rem}.display-1{font-size:7.451rem;line-height:1}.display-2{font-size:5.96rem;line-height:1}.display-3{font-size:4.768rem;line-height:1}.display-4{font-size:3.815rem;line-height:1}p{margin-bottom:1.75rem}hr{margin-top:1.125rem;margin-bottom:1.125rem;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:300}.mark,mark{padding:.2em;background-color:#fff09e}.blockquote{margin-bottom:.75rem;font-size:1.5rem}.blockquote-footer{font-size:1.125rem}.img-thumbnail{padding:0;border:none;background-color:#fff;border-radius:.375rem;box-shadow:none}.figure-img{margin-bottom:.75rem}.figure-caption{font-size:1rem;color:#868e96}code,kbd,pre,samp{font-family:\"Roboto Mono\",Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}code{font-size:.75rem;padding:.1875rem .8125rem}kbd{padding:.1875rem .8125rem;font-size:.75rem;color:#fff;background-color:#212529;border-radius:.625rem;box-shadow:none}kbd kbd{font-weight:500}pre{margin-bottom:.75rem;font-size:.75rem;color:#212529;line-height:1.375rem}.pre-scrollable{max-height:340px}.table{background-color:transparent}.table td,.table th{padding:.75rem}.table .table{background-color:#fff}.table-sm td,.table-sm th{padding:.3rem}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d1d3d5}.table-hover .table-secondary:hover{background-color:#c4c6c9}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c4c6c9}.table-success,.table-success>td,.table-success>th{background-color:#beefd7}.table-hover .table-success:hover{background-color:#aaeaca}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#aaeaca}.table-info,.table-info>td,.table-info>th{background-color:#b8ebf4}.table-hover .table-info:hover{background-color:#a2e5f1}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#a2e5f1}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeab8}.table-hover .table-warning:hover{background-color:#ffe29f}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe29f}.table-danger,.table-danger>td,.table-danger>th{background-color:#eebec8}.table-hover .table-danger:hover{background-color:#e9aab7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#e9aab7}.table-light,.table-light>td,.table-light>th{background-color:#f9fafb}.table-hover .table-light:hover{background-color:#eaedf1}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#eaedf1}.table-dark,.table-dark>td,.table-dark>th{background-color:#c1c2c3}.table-hover .table-dark:hover{background-color:#b4b5b6}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b4b5b6}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#32383e}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#32383e}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{background-color:rgba(255,255,255,.075)}.form-control{height:auto;padding:.5rem 1rem;font-size:.95rem;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #becad6;font-weight:300;will-change:border-color,box-shadow;border-radius:.375rem;box-shadow:none;-webkit-transition:box-shadow 250ms cubic-bezier(.27,.01,.38,1.06),border 250ms cubic-bezier(.27,.01,.38,1.06);transition:box-shadow 250ms cubic-bezier(.27,.01,.38,1.06),border 250ms cubic-bezier(.27,.01,.38,1.06)}.form-control:hover{border-color:#8fa4b8}.form-control:focus{color:#495057;background-color:#fff;border-color:#007bff;box-shadow:0 .313rem .719rem rgba(0,123,255,.1),0 .156rem .125rem rgba(0,0,0,.06)}.form-control:focus:hover{border-color:#007bff}.form-control::-webkit-input-placeholder{color:#868e96}.form-control:-ms-input-placeholder{color:#868e96}.form-control::-ms-input-placeholder{color:#868e96}.form-control::-moz-placeholder{color:#868e96}.form-control::placeholder{color:#868e96}.form-control:disabled,.form-control[readonly]{background-color:#f5f6f7}.form-control:disabled:hover,.form-control[readonly]:hover{border-color:#becad6;cursor:not-allowed}.form-control[readonly]:not(:disabled):focus{box-shadow:none;border-color:#becad6}select.form-control:not([size]):not([multiple]){height:calc(2.425rem + 2px)}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}select.form-control:hover{cursor:pointer}form label:hover{cursor:pointer}.col-form-label{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);line-height:1.5}.col-form-label-lg{padding-top:calc(.75rem + 1px);padding-bottom:calc(.75rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.35rem + 1px);padding-bottom:calc(.35rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{padding-top:.5rem;padding-bottom:.5rem;line-height:1.5;font-weight:300}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-middle>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.35rem .75rem;font-size:.875rem;line-height:1.5;border-radius:.35rem}.input-group-sm>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-sm>.input-group-middle>select.input-group-text:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:calc(2.0125rem + 2px)}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-middle>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.75rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.5rem}.input-group-lg>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-lg>.input-group-middle>select.input-group-text:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:calc(3.375rem + 2px)}.form-group{margin-bottom:1rem}.form-text{margin-top:.25rem}.form-check{padding-left:1.25rem}.form-check-input{margin-top:.313rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label{color:#868e96}.form-check-inline{margin-right:.75rem}.form-check-inline .form-check-input{margin-right:.3125rem}.valid-feedback{margin-top:.25rem;font-size:80%;color:#17c671}.valid-tooltip{background-color:rgba(23,198,113,.8)}.custom-select.is-valid,.form-control.is-valid,.was-validated .custom-select:valid,.was-validated .form-control:valid{border-color:#17c671;box-shadow:0 5px 11.5px rgba(23,198,113,.1)}.custom-select.is-valid:focus,.form-control.is-valid:focus,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid:focus{box-shadow:0 5px 11.5px rgba(23,198,113,.1),0 1px 1px .1rem rgba(23,198,113,.2)}.custom-select.is-valid:hover,.form-control.is-valid:hover,.was-validated .custom-select:valid:hover,.was-validated .form-control:valid:hover{border-color:#17c671}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#17c671}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#17c671}.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before{background-color:#57eca4;border-color:#2ae68b}.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before{background-color:#2ae68b}.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before{box-shadow:0 .313rem .719rem rgba(23,198,113,.1),0 .156rem .125rem rgba(0,0,0,.06)}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{color:#17c671;border-color:#17c671}.custom-file-input.is-valid~.custom-file-label::after,.was-validated .custom-file-input:valid~.custom-file-label::after{background-color:#b3f6d5;border-color:#2ae68b;color:#17c671}.custom-file-input:focus.is-valid~.custom-file-label,.was-validated .custom-file-input:focus:valid~.custom-file-label{border-color:#17c671;box-shadow:0 5px 11.5px rgba(23,198,113,.1),0 1px 1px .1rem rgba(23,198,113,.2)}.custom-file-input:hover.is-valid~.custom-file-label,.was-validated .custom-file-input:hover:valid~.custom-file-label{border-color:#17c671}.custom-toggle .custom-control-input:not(:checked).is-valid~.custom-control-label::before,.was-validated .custom-toggle .custom-control-input:not(:checked):valid~.custom-control-label::before{background-color:#fff}.custom-toggle .custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-toggle .custom-control-input:valid~.custom-control-label::before{background-color:#17c671}.custom-toggle .custom-control-input.is-invalid~.custom-control-label::after,.was-validated .custom-toggle .custom-control-input:invalid~.custom-control-label::after{background-color:#eb8c95}.custom-toggle .custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-toggle .custom-control-input:invalid:focus~.custom-control-label::before{box-shadow:0 .313rem .719rem rgba(23,198,113,.1),0 .156rem .125rem rgba(0,0,0,.06)}.invalid-feedback{margin-top:.25rem;font-size:80%;color:#c4183c}.invalid-tooltip{background-color:rgba(196,24,60,.8)}.custom-select.is-invalid,.form-control.is-invalid,.was-validated .custom-select:invalid,.was-validated .form-control:invalid{border-color:#c4183c;box-shadow:0 5px 11.5px rgba(196,24,60,.1)}.custom-select.is-invalid:focus,.form-control.is-invalid:focus,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid:focus{box-shadow:0 5px 11.5px rgba(196,24,60,.1),0 1px 1px .1rem rgba(196,24,60,.2)}.custom-select.is-invalid:hover,.form-control.is-invalid:hover,.was-validated .custom-select:invalid:hover,.was-validated .form-control:invalid:hover{border-color:#c4183c}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#c4183c}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#c4183c}.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before{background-color:#ea5876;border-color:#e52a51}.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before{background-color:#e52a51}.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before{box-shadow:0 .313rem .719rem rgba(196,24,60,.1),0 .156rem .125rem rgba(0,0,0,.06)}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{color:#c4183c;border-color:#c4183c}.custom-file-input.is-invalid~.custom-file-label::after,.was-validated .custom-file-input:invalid~.custom-file-label::after{background-color:#f6b2c0;border-color:#e52a51;color:#c4183c}.custom-file-input:focus.is-invalid~.custom-file-label,.was-validated .custom-file-input:focus:invalid~.custom-file-label{border-color:#c4183c;box-shadow:0 5px 11.5px rgba(196,24,60,.1),0 1px 1px .1rem rgba(196,24,60,.2)}.custom-file-input:hover.is-invalid~.custom-file-label,.was-validated .custom-file-input:hover:invalid~.custom-file-label{border-color:#c4183c}.custom-toggle .custom-control-input:not(:checked).is-invalid~.custom-control-label::before,.was-validated .custom-toggle .custom-control-input:not(:checked):invalid~.custom-control-label::before{background-color:#fff}.custom-toggle .custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-toggle .custom-control-input:valid~.custom-control-label::before{background-color:#17c671}.custom-toggle .custom-control-input.is-invalid~.custom-control-label::after,.was-validated .custom-toggle .custom-control-input:invalid~.custom-control-label::after{background-color:#eb8c95}.custom-toggle .custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-toggle .custom-control-input:invalid:focus~.custom-control-label::before{box-shadow:0 .313rem .719rem rgba(196,24,60,.1),0 .156rem .125rem rgba(0,0,0,.06)}@media (min-width:576px){.form-inline .form-check-input{margin-right:.313rem}}.btn{font-weight:300;font-family:Poppins,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;border:1px solid transparent;padding:.75rem 1.25rem;font-size:.875rem;line-height:1.125;border-radius:.375rem;-webkit-transition:all 250ms cubic-bezier(.27,.01,.38,1.06);transition:all 250ms cubic-bezier(.27,.01,.38,1.06)}.btn.hover,.btn:hover{cursor:pointer}.btn.focus,.btn:focus{box-shadow:none}.btn:not([disabled]):not(.disabled).active,.btn:not([disabled]):not(.disabled):active{background-image:none;box-shadow:none}.btn.btn-squared{border-radius:0}.btn.btn-pill{border-radius:50px}.btn-primary{color:#fff;border-color:#007bff;background-color:#007bff;box-shadow:none}.btn-primary:hover{color:#fff;background-color:#006fe6;border-color:#006fe6;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(0,123,255,.25)}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 3px rgba(0,123,255,.15),0 3px 15px rgba(0,123,255,.2),0 2px 5px rgba(0,0,0,.1)}.btn-primary.disabled,.btn-primary:disabled{background-color:#007bff;border-color:#007bff;box-shadow:none;cursor:not-allowed}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#006fe6;border-color:#0062cc;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-secondary{color:#fff;border-color:#5a6169;background-color:#5a6169;box-shadow:none}.btn-secondary:hover{color:#fff;background-color:#4e545b;border-color:#4e545b;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(90,97,105,.25)}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 3px rgba(90,97,105,.15),0 3px 15px rgba(90,97,105,.2),0 2px 5px rgba(0,0,0,.1)}.btn-secondary.disabled,.btn-secondary:disabled{background-color:#5a6169;border-color:#5a6169;box-shadow:none;cursor:not-allowed}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#4e545b;border-color:#42484e;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-success{color:#fff;border-color:#17c671;background-color:#17c671;box-shadow:none}.btn-success:hover{color:#fff;background-color:#14af64;border-color:#14af64;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(23,198,113,.25)}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 3px rgba(23,198,113,.15),0 3px 15px rgba(23,198,113,.2),0 2px 5px rgba(0,0,0,.1)}.btn-success.disabled,.btn-success:disabled{background-color:#17c671;border-color:#17c671;box-shadow:none;cursor:not-allowed}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#14af64;border-color:#129857;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-info{color:#fff;border-color:#00b8d8;background-color:#00b8d8;box-shadow:none}.btn-info:hover{color:#fff;background-color:#00a2bf;border-color:#00a2bf;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(0,184,216,.25)}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 3px rgba(0,184,216,.15),0 3px 15px rgba(0,184,216,.2),0 2px 5px rgba(0,0,0,.1)}.btn-info.disabled,.btn-info:disabled{background-color:#00b8d8;border-color:#00b8d8;box-shadow:none;cursor:not-allowed}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#00a2bf;border-color:#008da5;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-warning{color:#212529;border-color:#ffb400;background-color:#ffb400;box-shadow:none}.btn-warning:hover{color:#212529;background-color:#e6a200;border-color:#e6a200;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(255,180,0,.25)}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 3px rgba(255,180,0,.15),0 3px 15px rgba(255,180,0,.2),0 2px 5px rgba(0,0,0,.1)}.btn-warning.disabled,.btn-warning:disabled{background-color:#ffb400;border-color:#ffb400;box-shadow:none;cursor:not-allowed}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#e6a200;border-color:#cc9000;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-danger{color:#fff;border-color:#c4183c;background-color:#c4183c;box-shadow:none}.btn-danger:hover{color:#fff;background-color:#ad1535;border-color:#ad1535;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(196,24,60,.25)}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 3px rgba(196,24,60,.15),0 3px 15px rgba(196,24,60,.2),0 2px 5px rgba(0,0,0,.1)}.btn-danger.disabled,.btn-danger:disabled{background-color:#c4183c;border-color:#c4183c;box-shadow:none;cursor:not-allowed}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#ad1535;border-color:#97122e;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-light{color:#212529;border-color:#e9ecef;background-color:#e9ecef;box-shadow:none}.btn-light:hover{color:#212529;background-color:#dadfe4;border-color:#dadfe4;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(233,236,239,.25)}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 3px rgba(233,236,239,.15),0 3px 15px rgba(233,236,239,.2),0 2px 5px rgba(0,0,0,.1)}.btn-light.disabled,.btn-light:disabled{background-color:#e9ecef;border-color:#e9ecef;box-shadow:none;cursor:not-allowed}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dadfe4;border-color:#cbd3da;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-dark{color:#fff;border-color:#212529;background-color:#212529;box-shadow:none}.btn-dark:hover{color:#fff;background-color:#16181b;border-color:#16181b;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(33,37,41,.25)}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 3px rgba(33,37,41,.15),0 3px 15px rgba(33,37,41,.2),0 2px 5px rgba(0,0,0,.1)}.btn-dark.disabled,.btn-dark:disabled{background-color:#212529;border-color:#212529;box-shadow:none;cursor:not-allowed}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#16181b;border-color:#0a0c0d;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-white{color:#212529;border-color:#fff;background-color:#fff;box-shadow:none}.btn-white:hover{color:#212529;background-color:#f2f2f2;border-color:#f2f2f2;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(255,255,255,.25)}.btn-white.focus,.btn-white:focus{box-shadow:0 0 0 3px rgba(255,255,255,.15),0 3px 15px rgba(255,255,255,.2),0 2px 5px rgba(0,0,0,.1)}.btn-white.disabled,.btn-white:disabled{background-color:#fff;border-color:#fff;box-shadow:none;cursor:not-allowed}.btn-white:not(:disabled):not(.disabled).active,.btn-white:not(:disabled):not(.disabled):active,.show>.btn-white.dropdown-toggle{color:#212529;background-color:#f2f2f2;border-color:#e6e6e6;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-black{color:#fff;border-color:#000;background-color:#000;box-shadow:none}.btn-black:hover{color:#fff;background-color:#000;border-color:#000;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(0,0,0,.25)}.btn-black.focus,.btn-black:focus{box-shadow:0 0 0 3px rgba(0,0,0,.15),0 3px 15px rgba(0,0,0,.2),0 2px 5px rgba(0,0,0,.1)}.btn-black.disabled,.btn-black:disabled{background-color:#000;border-color:#000;box-shadow:none;cursor:not-allowed}.btn-black:not(:disabled):not(.disabled).active,.btn-black:not(:disabled):not(.disabled):active,.show>.btn-black.dropdown-toggle{color:#fff;background-color:#000;border-color:#000;background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-outline-primary{background-color:transparent;background-image:none;border-color:#007bff;color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(0,123,255,.25)}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 3px rgba(0,123,255,.15),0 3px 15px rgba(0,123,255,.2),0 2px 5px rgba(0,0,0,.1)!important}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent;box-shadow:none}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-outline-secondary{background-color:transparent;background-image:none;border-color:#5a6169;color:#5a6169}.btn-outline-secondary:hover{color:#fff;background-color:#5a6169;border-color:#5a6169;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(90,97,105,.25)}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 3px rgba(90,97,105,.15),0 3px 15px rgba(90,97,105,.2),0 2px 5px rgba(0,0,0,.1)!important}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#5a6169;background-color:transparent;box-shadow:none}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#5a6169;border-color:#5a6169}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-outline-success{background-color:transparent;background-image:none;border-color:#17c671;color:#17c671}.btn-outline-success:hover{color:#fff;background-color:#17c671;border-color:#17c671;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(23,198,113,.25)}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 3px rgba(23,198,113,.15),0 3px 15px rgba(23,198,113,.2),0 2px 5px rgba(0,0,0,.1)!important}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#17c671;background-color:transparent;box-shadow:none}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#17c671;border-color:#17c671}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-outline-info{background-color:transparent;background-image:none;border-color:#00b8d8;color:#00b8d8}.btn-outline-info:hover{color:#fff;background-color:#00b8d8;border-color:#00b8d8;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(0,184,216,.25)}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 3px rgba(0,184,216,.15),0 3px 15px rgba(0,184,216,.2),0 2px 5px rgba(0,0,0,.1)!important}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#00b8d8;background-color:transparent;box-shadow:none}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#00b8d8;border-color:#00b8d8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-outline-warning{background-color:transparent;background-image:none;border-color:#ffb400;color:#ffb400}.btn-outline-warning:hover{color:#212529;background-color:#ffb400;border-color:#ffb400;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(255,180,0,.25)}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 3px rgba(255,180,0,.15),0 3px 15px rgba(255,180,0,.2),0 2px 5px rgba(0,0,0,.1)!important}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffb400;background-color:transparent;box-shadow:none}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffb400;border-color:#ffb400}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-outline-danger{background-color:transparent;background-image:none;border-color:#c4183c;color:#c4183c}.btn-outline-danger:hover{color:#fff;background-color:#c4183c;border-color:#c4183c;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(196,24,60,.25)}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 3px rgba(196,24,60,.15),0 3px 15px rgba(196,24,60,.2),0 2px 5px rgba(0,0,0,.1)!important}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#c4183c;background-color:transparent;box-shadow:none}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#c4183c;border-color:#c4183c}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-outline-light{background-color:transparent;background-image:none;border-color:#e9ecef;color:#212529}.btn-outline-light:hover{color:#212529;background-color:#e9ecef;border-color:#e9ecef;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(233,236,239,.25)}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 3px rgba(233,236,239,.15),0 3px 15px rgba(233,236,239,.2),0 2px 5px rgba(0,0,0,.1)!important}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#e9ecef;background-color:transparent;box-shadow:none}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#e9ecef;border-color:#e9ecef}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-outline-dark{background-color:transparent;background-image:none;border-color:#212529;color:#212529}.btn-outline-dark:hover{color:#fff;background-color:#212529;border-color:#212529;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(33,37,41,.25)}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 3px rgba(33,37,41,.15),0 3px 15px rgba(33,37,41,.2),0 2px 5px rgba(0,0,0,.1)!important}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#212529;background-color:transparent;box-shadow:none}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#212529;border-color:#212529}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-outline-white{background-color:transparent;background-image:none;border-color:#fff;color:#212529;color:#fff}.btn-outline-white:hover{color:#212529;background-color:#fff;border-color:#fff;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(255,255,255,.25)}.btn-outline-white.focus,.btn-outline-white:focus{box-shadow:0 0 0 3px rgba(255,255,255,.15),0 3px 15px rgba(255,255,255,.2),0 2px 5px rgba(0,0,0,.1)!important}.btn-outline-white.disabled,.btn-outline-white:disabled{color:#fff;background-color:transparent;box-shadow:none}.btn-outline-white:not(:disabled):not(.disabled).active,.btn-outline-white:not(:disabled):not(.disabled):active,.show>.btn-outline-white.dropdown-toggle{color:#212529;background-color:#fff;border-color:#fff}.btn-outline-white:not(:disabled):not(.disabled).active:focus,.btn-outline-white:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-white.dropdown-toggle:focus{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-outline-white:not(:disabled):not(.disabled).active,.btn-outline-white:not(:disabled):not(.disabled):active{color:#000}.btn-outline-black{background-color:transparent;background-image:none;border-color:#000;color:#000;color:#000}.btn-outline-black:hover{color:#fff;background-color:#000;border-color:#000;box-shadow:0 5px 15px rgba(0,0,0,.05),0 4px 10px rgba(0,0,0,.25)}.btn-outline-black.focus,.btn-outline-black:focus{box-shadow:0 0 0 3px rgba(0,0,0,.15),0 3px 15px rgba(0,0,0,.2),0 2px 5px rgba(0,0,0,.1)!important}.btn-outline-black.disabled,.btn-outline-black:disabled{color:#000;background-color:transparent;box-shadow:none}.btn-outline-black:not(:disabled):not(.disabled).active,.btn-outline-black:not(:disabled):not(.disabled):active,.show>.btn-outline-black.dropdown-toggle{color:#fff;background-color:#000;border-color:#000}.btn-outline-black:not(:disabled):not(.disabled).active:focus,.btn-outline-black:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-black.dropdown-toggle:focus{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)!important}.btn-outline-black:not(:disabled):not(.disabled).active,.btn-outline-black:not(:disabled):not(.disabled):active{color:#fff}.btn-link{font-weight:300;color:#007bff}.btn-link:hover{color:#0056b3;text-decoration:underline}.btn-link.focus,.btn-link:focus{text-decoration:underline}.btn-link:disabled{color:#868e96}.btn-group-lg>.btn,.btn-lg{padding:.75rem 1.75rem;font-size:1.125rem;line-height:1.5;border-radius:.5rem}.btn-group-sm>.btn,.btn-sm{padding:.35rem 1rem;font-size:.75rem;line-height:1.5;border-radius:.35rem}.btn-block+.btn-block{margin-top:.5rem}.fade{-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.collapsing{-webkit-transition:height 350ms ease-in-out;transition:height 350ms ease-in-out}i.material-icons{font-size:inherit;position:relative;top:2px}.dropdown-menu{z-index:1000;min-width:10rem;padding:.5rem 0;margin:0 0 0;font-size:1rem;color:#5a6169;background-color:#fff;border:1px solid rgba(0,0,0,.05);border-radius:.375rem;box-shadow:0 .5rem 4rem rgba(0,0,0,.11),0 10px 20px rgba(0,0,0,.05),0 2px 3px rgba(0,0,0,.06)}.dropdown-menu-small{box-shadow:0 .5rem 2rem rgba(0,0,0,.11),0 3px 10px rgba(0,0,0,.05),0 2px 3px rgba(0,0,0,.06);padding:.25rem 0;font-size:.813rem}.dropdown-menu-small .dropdown-item{padding:.375rem .875rem;font-size:.813rem}.dropdown-menu-small .dropdown-divider{margin:.25rem 0}.dropup .dropdown-menu{margin-bottom:0}.dropright .dropdown-menu{margin-left:0}.dropleft .dropdown-menu{margin-right:0}.dropdown-divider{height:0;margin:.75rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{padding:.5rem 1.25rem;font-weight:300;color:#212529;font-size:.9375rem;-webkit-transition:background-color 250ms cubic-bezier(.27,.01,.38,1.06),color 250ms cubic-bezier(.27,.01,.38,1.06);transition:background-color 250ms cubic-bezier(.27,.01,.38,1.06),color 250ms cubic-bezier(.27,.01,.38,1.06)}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;background-color:#eceeef}.dropdown-item.active,.dropdown-item:active{color:#fff;background-color:#c3c7cc}.dropdown-item.disabled,.dropdown-item:disabled{color:#868e96}.dropdown-item.disabled:hover,.dropdown-item:disabled:hover{background:0 0;cursor:not-allowed}.dropdown-header{padding:.5rem 1.25rem;font-size:.875rem;color:#868e96}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.9375rem;padding-left:.9375rem}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:1.3125rem;padding-left:1.3125rem}.btn-group.show .dropdown-toggle{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group.show .dropdown-toggle.btn-link{box-shadow:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control{margin-left:-1px}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label,.input-group>.custom-file:not(:first-child) .custom-file-label::after{border-top-left-radius:0;border-bottom-left-radius:0}.input-group.input-group-seamless>.form-control{border-radius:.375rem}.input-group.input-group-seamless>.input-group-append,.input-group.input-group-seamless>.input-group-prepend{position:absolute;top:0;bottom:0;z-index:4}.input-group.input-group-seamless>.input-group-append .input-group-text,.input-group.input-group-seamless>.input-group-prepend .input-group-text{padding:12px 14px;background:0 0;border:none}.input-group.input-group-seamless>.input-group-append{right:0}.input-group.input-group-seamless>.input-group-middle{right:0;left:0}.input-group.input-group-seamless>.input-group-prepend{left:0}.input-group.input-group-seamless>.custom-select:not(:last-child),.input-group.input-group-seamless>.form-control:not(:last-child){padding-right:40px}.input-group.input-group-seamless>.custom-select:not(:first-child),.input-group.input-group-seamless>.form-control:not(:first-child){padding-left:40px}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{font-size:1rem;font-weight:300;line-height:1.5;color:#abb6bf;background-color:#f9fafb;border:1px solid #becad6;border-radius:.375rem}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.input-group-middle>.btn,.input-group>.input-group-middle>.input-group-text{border-left:0;border-right:0;border-radius:0}.input-group-middle{display:-webkit-box;display:flex}.custom-control{min-height:1.5rem;padding-left:1.688rem}.custom-control:hover{cursor:pointer}.custom-control .custom-control-label:before{pointer-events:all}.custom-control-inline{margin-right:1rem}.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:transparent;background-color:#007bff;box-shadow:none}.custom-control-input:focus~.custom-control-label::before{box-shadow:0 .313rem .719rem rgba(0,123,255,.1),0 .156rem .125rem rgba(0,0,0,.06)}.custom-control-input:active~.custom-control-label::before{color:#fff;background-color:#b3d7ff;box-shadow:none}.custom-control-input:disabled~.custom-control-label{color:#868e96}.custom-control-input:disabled~.custom-control-label:hover{cursor:not-allowed}.custom-control-input:disabled~.custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:static}.custom-control-label:hover{cursor:pointer}.custom-control-label::before{top:.1875rem;left:0;width:1.125rem;height:1.125rem;background-color:#fff;border:1px solid #becad6;-webkit-transition:all 250ms cubic-bezier(.27,.01,.38,1.06);transition:all 250ms cubic-bezier(.27,.01,.38,1.06);box-shadow:none}.custom-control-label::after{top:.1875rem;width:1.125rem;height:1.125rem;background-size:50% 50%}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label{position:relative}.custom-checkbox .custom-control-label::before{border-radius:2px}.custom-checkbox .custom-control-label::after{content:'';position:absolute;top:5px;left:7px;width:5px;height:11px;opacity:0;-webkit-transform:rotate(45deg) scale(0);transform:rotate(45deg) scale(0);border-right:2px solid #fff;border-bottom:2px solid #fff;transition:border 250ms cubic-bezier(.27,.01,.38,1.06),-webkit-transform 250ms cubic-bezier(.27,.01,.38,1.06);-webkit-transition:border 250ms cubic-bezier(.27,.01,.38,1.06),-webkit-transform 250ms cubic-bezier(.27,.01,.38,1.06);transition:transform 250ms cubic-bezier(.27,.01,.38,1.06),border 250ms cubic-bezier(.27,.01,.38,1.06);transition:transform 250ms cubic-bezier(.27,.01,.38,1.06),border 250ms cubic-bezier(.27,.01,.38,1.06),-webkit-transform 250ms cubic-bezier(.27,.01,.38,1.06);-webkit-transition-delay:.1s;transition-delay:.1s}.custom-checkbox .custom-control-input:checked~.custom-control-label::before{background-image:none}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{opacity:1;-webkit-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1);background-image:none}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{border:none;background-color:#007bff;box-shadow:none}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{content:'';position:absolute;-webkit-transform:scale(1);transform:scale(1);background-image:none;background-color:#fff;border:none;width:10px;height:2px;top:11px;left:4px;opacity:1;-webkit-transition:none;transition:none}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background:#e9ecef;border-color:#becad6}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::after{border-color:#becad6}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-label::after{content:'';border-radius:50%;-webkit-transform:scale(0);transform:scale(0);background-image:none!important;position:absolute;background:#fff;width:8px;height:8px;top:8px;left:5px;-webkit-transition:all 250ms cubic-bezier(.27,.01,.38,1.06);transition:all 250ms cubic-bezier(.27,.01,.38,1.06);-webkit-transition-delay:.1s;transition-delay:.1s;opacity:0;transform:scale(0)}.custom-radio .custom-control-input:checked~.custom-control-label::before{background-color:#007bff}.custom-radio .custom-control-input:checked~.custom-control-label::after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:#a8aeb4}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background:#e9ecef;border-color:#becad6}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::after{background:#becad6}.custom-select{height:calc(2.425rem + 2px);padding:.375rem 1.75rem .375rem .75rem;line-height:1.2;color:#495057;background:#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center;background-size:8px 10px;border:1px solid #becad6;font-weight:300;font-size:.95rem;-webkit-transition:box-shadow 250ms cubic-bezier(.27,.01,.38,1.06),border 250ms cubic-bezier(.27,.01,.38,1.06);transition:box-shadow 250ms cubic-bezier(.27,.01,.38,1.06),border 250ms cubic-bezier(.27,.01,.38,1.06);border-radius:.375rem}.custom-select:focus{border-color:#007bff;box-shadow:0 .313rem .719rem rgba(0,123,255,.1),0 .156rem .125rem rgba(0,0,0,.06)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select:hover:not(:focus):not(:disabled){cursor:pointer;border-color:#8fa4b8}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){padding-right:.75rem}.custom-select:disabled{color:#868e96;background-color:#e9ecef}.custom-select-sm{height:calc(2.0125rem + 2px);padding-top:.375rem;padding-bottom:.375rem;font-size:.75rem}.custom-select-lg{height:calc(3.375rem + 2px);font-size:1.25rem;padding-top:.375rem;padding-bottom:.375rem}.custom-file{height:calc(2.428rem + 2px);font-size:.95rem;-webkit-transition:box-shadow 250ms cubic-bezier(.27,.01,.38,1.06),border 250ms cubic-bezier(.27,.01,.38,1.06);transition:box-shadow 250ms cubic-bezier(.27,.01,.38,1.06),border 250ms cubic-bezier(.27,.01,.38,1.06)}.custom-file-input{min-width:14rem;height:calc(2.428rem + 2px)}.custom-file-input:focus~.custom-file-label{border-color:#007bff;color:#495057;box-shadow:0 .313rem .719rem rgba(0,123,255,.1),0 .156rem .125rem rgba(0,0,0,.06)}.custom-file-input:focus~.custom-file-label::after{border-color:#007bff;color:#007bff;background:#e6f2ff}.custom-file-input:focus~.custom-file-label:hover{border-color:#007bff}.custom-file-input:lang(en)~.custom-file-label::after{content:\"Browse\"}.custom-file-input:not(:disabled):hover{cursor:pointer}.custom-file-input:not(:disabled):hover~.custom-file-label,.custom-file-input:not(:disabled):hover~.custom-file-label:before{border-color:#8fa4b8}.custom-file-input:disabled+.custom-file-label{color:#868e96;background-color:#f8f9fa}.custom-file-label{height:calc(2.428rem + 2px);padding:.5rem 1rem;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #becad6;font-weight:300;box-shadow:none;-webkit-transition:box-shadow 250ms cubic-bezier(.27,.01,.38,1.06),border-color 250ms cubic-bezier(.27,.01,.38,1.06);transition:box-shadow 250ms cubic-bezier(.27,.01,.38,1.06),border-color 250ms cubic-bezier(.27,.01,.38,1.06);border-radius:.375rem}.custom-file-label::after{padding:.5rem 1rem;height:calc(calc(2.428rem + 2px) - 1px * 2);line-height:1.5;color:#495057;border-left:1px solid #becad6;background-color:#e9ecef;border-radius:0 .375rem .375rem 0}.custom-toggle{position:relative;padding-left:3.75rem}.custom-toggle .custom-control-label::before{position:absolute;top:0;left:0;display:block;width:3.125rem;height:1.75rem;background:#fff;border-radius:100px;border:.0625rem solid #becad6}.custom-toggle .custom-control-label::after{content:'';position:absolute;top:.25rem;left:.25rem;width:1.25rem;height:1.25rem;background:#becad6;border-radius:6.25rem;-webkit-transition:350ms;transition:350ms}.custom-toggle .custom-control-input:checked~.custom-control-label::before{background:#17c671;border-color:#17c671}.custom-toggle .custom-control-input:checked~.custom-control-label::after{left:2.875rem;-webkit-transform:translateX(-100%);transform:translateX(-100%);background:#fff}.custom-toggle .custom-control-input:checked:disabled~.custom-control-label::before{background:#e9ecef;border-color:#becad6}.custom-toggle .custom-control-input:checked:disabled~.custom-control-label::after{background:#becad6}.custom-toggle .custom-control-input:active:not(:disabled)~.custom-control-label::after{width:1.625rem}.custom-toggle .custom-control-input:active:not(:checked)~.custom-control-label::before{background-color:#fff}.custom-toggle .custom-control-input:disabled:active~.custom-control-label::before{background-color:#e9ecef}.custom-toggle .custom-control-input:focus~.custom-control-label::before{box-shadow:0 .313rem .719rem rgba(23,198,113,.1),0 .156rem .125rem rgba(0,0,0,.06)}.custom-toggle .custom-control-input:focus:not(:checked)~.custom-control-label::before{box-shadow:0 .313rem .719rem rgba(0,123,255,.1),0 .156rem .125rem rgba(0,0,0,.06)}.custom-toggle.custom-toggle-sm{padding-left:2.625rem}.custom-toggle.custom-toggle-sm .custom-control-label::before{top:.1875rem;position:absolute;display:block;width:2.1875rem;height:1.125rem;background:#fff;border-radius:100px;border:.0625rem solid #becad6}.custom-toggle.custom-toggle-sm .custom-control-label::after{content:'';position:absolute;top:.375rem;left:.1875rem;width:.75rem;height:.75rem}.custom-toggle.custom-toggle-sm .custom-control-input:checked~.custom-control-label::after{left:1.9375rem}.custom-toggle.custom-toggle-sm .custom-control-input:active:not(:disabled)~.custom-control-label::after{width:1rem}.nav{font-size:.875rem;font-family:Poppins,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif}.nav-link{padding:.625rem 1.125rem;-webkit-transition:all 250ms cubic-bezier(.27,.01,.38,1.06);transition:all 250ms cubic-bezier(.27,.01,.38,1.06)}.nav-link.disabled{color:#868e96}.nav-tabs{border-bottom:1px solid #d1d4d8}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.375rem;border-top-right-radius:.375rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef}.nav-tabs .nav-link.disabled{color:#868e96}.nav-tabs .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-tabs .nav-link:hover{border-color:#e7e9ea}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#ddd}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.375rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-pills:hover{background-color:#fdfdfd}.nav-outlined-pills .nav-link{border-radius:.375rem;border:1px solid transparent}.nav-outlined-pills .nav-link.active,.show>.nav-outlined-pills .nav-link{background:0 0;color:#007bff;border-color:#007bff}.nav-outlined-pills .nav-link:hover{border-color:#e7e9ea}.nav-blue .nav-link.active{background-color:#007bff;border-color:#0074f0;color:#fff}.nav-blue .nav-link.disabled{color:#868e96}.nav-blue .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-blue .nav-link{color:#007bff}.nav-blue.nav-outlined-pills .nav-link.active{background:0 0;border-color:#3395ff;color:#007bff}.nav-blue.nav-outlined-pills .nav-link.active:hover{border-color:#3395ff}.nav-blue.nav-outlined-pills .nav-link{color:#007bff}.nav-indigo .nav-link.active{background-color:#674eec;border-color:#5b40eb;color:#fff}.nav-indigo .nav-link.disabled{color:#868e96}.nav-indigo .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-indigo .nav-link{color:#674eec}.nav-indigo.nav-outlined-pills .nav-link.active{background:0 0;border-color:#8f7cf1;color:#674eec}.nav-indigo.nav-outlined-pills .nav-link.active:hover{border-color:#8f7cf1}.nav-indigo.nav-outlined-pills .nav-link{color:#674eec}.nav-purple .nav-link.active{background-color:#8445f7;border-color:#7a36f6;color:#fff}.nav-purple .nav-link.disabled{color:#868e96}.nav-purple .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-purple .nav-link{color:#8445f7}.nav-purple.nav-outlined-pills .nav-link.active{background:0 0;border-color:#a476f9;color:#8445f7}.nav-purple.nav-outlined-pills .nav-link.active:hover{border-color:#a476f9}.nav-purple.nav-outlined-pills .nav-link{color:#8445f7}.nav-pink .nav-link.active{background-color:#ff4169;border-color:#ff325d;color:#fff}.nav-pink .nav-link.disabled{color:#868e96}.nav-pink .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-pink .nav-link{color:#ff4169}.nav-pink.nav-outlined-pills .nav-link.active{background:0 0;border-color:#ff7491;color:#ff4169}.nav-pink.nav-outlined-pills .nav-link.active:hover{border-color:#ff7491}.nav-pink.nav-outlined-pills .nav-link{color:#ff4169}.nav-red .nav-link.active{background-color:#c4183c;border-color:#b61638;color:#fff}.nav-red .nav-link.disabled{color:#868e96}.nav-red .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-red .nav-link{color:#c4183c}.nav-red.nav-outlined-pills .nav-link.active{background:0 0;border-color:#e52a51;color:#c4183c}.nav-red.nav-outlined-pills .nav-link.active:hover{border-color:#e52a51}.nav-red.nav-outlined-pills .nav-link{color:#c4183c}.nav-orange .nav-link.active{background-color:#fb7906;border-color:#ee7204;color:#fff}.nav-orange .nav-link.disabled{color:#868e96}.nav-orange .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-orange .nav-link{color:#fb7906}.nav-orange.nav-outlined-pills .nav-link.active{background:0 0;border-color:#fc9438;color:#fb7906}.nav-orange.nav-outlined-pills .nav-link.active:hover{border-color:#fc9438}.nav-orange.nav-outlined-pills .nav-link{color:#fb7906}.nav-yellow .nav-link.active{background-color:#ffb400;border-color:#f0a900;color:#212529}.nav-yellow .nav-link.disabled{color:#868e96}.nav-yellow .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-yellow .nav-link{color:#ffb400}.nav-yellow.nav-outlined-pills .nav-link.active{background:0 0;border-color:#ffc333;color:#ffb400}.nav-yellow.nav-outlined-pills .nav-link.active:hover{border-color:#ffc333}.nav-yellow.nav-outlined-pills .nav-link{color:#ffb400}.nav-green .nav-link.active{background-color:#17c671;border-color:#15b869;color:#fff}.nav-green .nav-link.disabled{color:#868e96}.nav-green .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-green .nav-link{color:#17c671}.nav-green.nav-outlined-pills .nav-link.active{background:0 0;border-color:#2ae68b;color:#17c671}.nav-green.nav-outlined-pills .nav-link.active:hover{border-color:#2ae68b}.nav-green.nav-outlined-pills .nav-link{color:#17c671}.nav-teal .nav-link.active{background-color:#1adba2;border-color:#18cd98;color:#212529}.nav-teal .nav-link.disabled{color:#868e96}.nav-teal .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-teal .nav-link{color:#1adba2}.nav-teal.nav-outlined-pills .nav-link.active{background:0 0;border-color:#40e8b7;color:#1adba2}.nav-teal.nav-outlined-pills .nav-link.active:hover{border-color:#40e8b7}.nav-teal.nav-outlined-pills .nav-link{color:#1adba2}.nav-cyan .nav-link.active{background-color:#00b8d8;border-color:#00abc9;color:#fff}.nav-cyan .nav-link.disabled{color:#868e96}.nav-cyan .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-cyan .nav-link{color:#00b8d8}.nav-cyan.nav-outlined-pills .nav-link.active{background:0 0;border-color:#0cdbff;color:#00b8d8}.nav-cyan.nav-outlined-pills .nav-link.active:hover{border-color:#0cdbff}.nav-cyan.nav-outlined-pills .nav-link{color:#00b8d8}.nav-white .nav-link.active{background-color:#fff;border-color:#f7f7f7;color:#212529}.nav-white .nav-link.disabled{color:#868e96}.nav-white .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-white .nav-link{color:#fff}.nav-white.nav-outlined-pills .nav-link.active{background:0 0;border-color:#fff;color:#fff}.nav-white.nav-outlined-pills .nav-link.active:hover{border-color:#fff}.nav-white.nav-outlined-pills .nav-link{color:#fff}.nav-gray .nav-link.active{background-color:#868e96;border-color:#7e868f;color:#fff}.nav-gray .nav-link.disabled{color:#868e96}.nav-gray .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-gray .nav-link{color:#868e96}.nav-gray.nav-outlined-pills .nav-link.active{background:0 0;border-color:#a1a8ae;color:#868e96}.nav-gray.nav-outlined-pills .nav-link.active:hover{border-color:#a1a8ae}.nav-gray.nav-outlined-pills .nav-link{color:#868e96}.nav-gray-dark .nav-link.active{background-color:#343a40;border-color:#2d3238;color:#fff}.nav-gray-dark .nav-link.disabled{color:#868e96}.nav-gray-dark .nav-link.disabled:hover{cursor:not-allowed;border-color:transparent}.nav-gray-dark .nav-link{color:#343a40}.nav-gray-dark.nav-outlined-pills .nav-link.active{background:0 0;border-color:#4b545c;color:#343a40}.nav-gray-dark.nav-outlined-pills .nav-link.active:hover{border-color:#4b545c}.nav-gray-dark.nav-outlined-pills .nav-link{color:#343a40}.navbar{padding:.75rem 1.5rem}.navbar-brand{padding-top:.625rem;padding-bottom:.625rem;margin-right:1.5rem;font-size:1rem;font-family:Poppins,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-weight:400}.navbar-text{padding-top:.625rem;padding-bottom:.625rem}.navbar-toggler{padding:.5rem .5rem;font-size:1rem;background:#fff;border:1px solid transparent;border-radius:.375rem}@media (min-width:576px){.navbar-expand-sm .navbar-nav .nav-link{padding-right:.625rem;padding-left:.625rem}}@media (min-width:768px){.navbar-expand-md .navbar-nav .nav-link{padding-right:.625rem;padding-left:.625rem}}@media (min-width:992px){.navbar-expand-lg .navbar-nav .nav-link{padding-right:.625rem;padding-left:.625rem}}@media (min-width:1200px){.navbar-expand-xl .navbar-nav .nav-link{padding-right:.625rem;padding-left:.625rem}}.navbar-expand .navbar-nav .nav-link{padding-right:.625rem;padding-left:.625rem}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1);background:0 0}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1);background:0 0}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{background-color:#fff;border:none;border-radius:.625rem;box-shadow:0 .46875rem 2.1875rem rgba(90,97,105,.1),0 .9375rem 1.40625rem rgba(90,97,105,.1),0 .25rem .53125rem rgba(90,97,105,.12),0 .125rem .1875rem rgba(90,97,105,.1)}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.625rem;border-top-right-radius:.625rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.625rem;border-bottom-left-radius:.625rem}.card .list-group-item{padding:.8125rem 1.875rem}.card .card-text{margin-bottom:1.5625rem}.card a:hover{text-decoration:none}.card-small{box-shadow:0 2px 0 rgba(90,97,105,.11),0 4px 8px rgba(90,97,105,.12),0 10px 10px rgba(90,97,105,.06),0 7px 70px rgba(90,97,105,.1)}.card-small .card-body,.card-small .card-footer,.card-small .card-header{padding:1rem 1rem}.card-body{padding:1.875rem}.card-body>p:last-child{margin-bottom:0}.card-title{font-weight:500;margin-bottom:.75rem}.card-subtitle{margin-top:-1.09375rem}.card-link{font-family:Poppins,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif}.card-link+.card-link{margin-left:1.875rem}.card-header{padding:1.09375rem 1.875rem;background-color:rgba(90,97,105,.06);border-bottom:none}.card-header:first-child{border-radius:.625rem .625rem 0 0}.card-footer{padding:1.09375rem 1.875rem;background-color:rgba(90,97,105,.06);border-top:none}.card-footer:last-child{border-radius:0 0 .625rem .625rem}.card-header-tabs{margin-bottom:-1rem;border-bottom:0}.card-header-tabs .nav-link,.card-header-tabs .nav-link:hover{border-bottom:transparent}.card-header-pills{margin-right:-.9375rem;margin-left:-.9375rem}.card-header-pills:hover{background:0 0}.card-img-overlay{padding:1.875rem 2.1875rem;background:rgba(90,97,105,.5);border-radius:.625rem}.card-img-overlay .card-title{color:#fff}.card-img{border-radius:.625rem}.card-img-top{border-top-left-radius:.625rem;border-top-right-radius:.625rem}.card-img-bottom{border-bottom-right-radius:.625rem;border-bottom-left-radius:.625rem}.card-deck .card{margin-bottom:.9375rem}@media (min-width:576px){.card-deck{margin-right:-.9375rem;margin-left:-.9375rem}.card-deck .card{margin-right:.9375rem;margin-left:.9375rem}}.card-group>.card{box-shadow:0 .46875rem 2.1875rem rgba(90,97,105,.1),0 .9375rem 1.40625rem rgba(90,97,105,.1),0 .25rem .53125rem rgba(90,97,105,.12),0 .125rem .1875rem rgba(90,97,105,.1)}.card-group>.card:last-child .card-body,.card-group>.card:last-child .card-footer{border-right:none}.card-group .card-body,.card-group .card-footer{border-right:1px solid #e7e9ea}@media (min-width:576px){.card-group{box-shadow:0 .46875rem 2.1875rem rgba(90,97,105,.1),0 .9375rem 1.40625rem rgba(90,97,105,.1),0 .25rem .53125rem rgba(90,97,105,.12),0 .125rem .1875rem rgba(90,97,105,.1);border-radius:.625rem}.card-group>.card{box-shadow:none}.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:only-child{border-radius:.625rem}.card-group>.card:only-child .card-header,.card-group>.card:only-child .card-img-top{border-top-left-radius:.625rem;border-top-right-radius:.625rem}.card-group>.card:only-child .card-footer,.card-group>.card:only-child .card-img-bottom{border-bottom-right-radius:.625rem;border-bottom-left-radius:.625rem}.card-group>.card:not(:first-child):not(:last-child):not(:only-child){border-radius:0}.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0}}.card-columns .card{margin-bottom:2.1875rem}@media (min-width:576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem}}.pagination{padding-left:0;list-style:none;border-radius:.375rem;font-family:Poppins,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-size:.875rem}.page-link{padding:.5rem .75rem;line-height:1.25;color:#007bff;background-color:#fff;border:none;margin:0;-webkit-transition:all 250ms cubic-bezier(.27,.01,.38,1.06);transition:all 250ms cubic-bezier(.27,.01,.38,1.06)}.page-link:focus,.page-link:hover{color:#0056b3;background-color:#f5f5f6;border-color:#dfe1e3}.page-item{box-shadow:0 .125rem .9375rem rgba(90,97,105,.1),0 .125rem .1875rem rgba(90,97,105,.15)}.page-item:first-child{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem;overflow:hidden}.page-item:last-child{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem;overflow:hidden}.page-item:last-child .page-link{border-right:none}.page-item.active .page-link{color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#a8aeb4;background-color:#fff;border-color:#dfe1e3}.pagination-lg .page-link{padding:.9375rem 1.5625rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.pagination-sm .page-link{padding:.25rem .6875rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.35rem;border-bottom-left-radius:.35rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.35rem;border-bottom-right-radius:.35rem}.badge{padding:.375rem .5rem;font-size:75%;font-weight:500;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;color:#fff;border-radius:.375rem}a.badge{-webkit-transition:all 250ms cubic-bezier(.27,.01,.38,1.06);transition:all 250ms cubic-bezier(.27,.01,.38,1.06)}.badge-pill{padding-right:.5rem;padding-left:.5rem;border-radius:10rem}.badge-squared{border-radius:0}.badge-primary{color:#fff;background-color:#007bff}.badge-primary[href]:focus,.badge-primary[href]:hover{color:#fff;text-decoration:none;background-color:#0062cc}.badge-outline-primary{background:0 0;border:1px solid #007bff;color:#007bff}.badge-secondary{color:#fff;background-color:#5a6169}.badge-secondary[href]:focus,.badge-secondary[href]:hover{color:#fff;text-decoration:none;background-color:#42484e}.badge-outline-secondary{background:0 0;border:1px solid #5a6169;color:#5a6169}.badge-success{color:#fff;background-color:#17c671}.badge-success[href]:focus,.badge-success[href]:hover{color:#fff;text-decoration:none;background-color:#129857}.badge-outline-success{background:0 0;border:1px solid #17c671;color:#17c671}.badge-info{color:#fff;background-color:#00b8d8}.badge-info[href]:focus,.badge-info[href]:hover{color:#fff;text-decoration:none;background-color:#008da5}.badge-outline-info{background:0 0;border:1px solid #00b8d8;color:#00b8d8}.badge-warning{color:#212529;background-color:#ffb400}.badge-warning[href]:focus,.badge-warning[href]:hover{color:#212529;text-decoration:none;background-color:#cc9000}.badge-outline-warning{background:0 0;border:1px solid #ffb400;color:#ffb400}.badge-danger{color:#fff;background-color:#c4183c}.badge-danger[href]:focus,.badge-danger[href]:hover{color:#fff;text-decoration:none;background-color:#97122e}.badge-outline-danger{background:0 0;border:1px solid #c4183c;color:#c4183c}.badge-light{color:#212529;background-color:#e9ecef}.badge-light[href]:focus,.badge-light[href]:hover{color:#212529;text-decoration:none;background-color:#cbd3da}.badge-outline-light{background:0 0;border:1px solid #e9ecef;color:#e9ecef;color:#212529}.badge-dark{color:#fff;background-color:#212529}.badge-dark[href]:focus,.badge-dark[href]:hover{color:#fff;text-decoration:none;background-color:#0a0c0d}.badge-outline-dark{background:0 0;border:1px solid #212529;color:#212529}.jumbotron{padding:38px 42px;margin-bottom:2rem;background-color:#eceeef;border-radius:.5rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.alert{padding:.75rem 1.25rem;margin-bottom:1rem;border:none;border-radius:0}.alert-link{font-weight:500}.alert-dismissible .close{top:0;right:0;padding:.75rem 1.25rem;-webkit-transition:all 250ms cubic-bezier(.27,.01,.38,1.06);transition:all 250ms cubic-bezier(.27,.01,.38,1.06)}.alert-dismissible .close:hover{cursor:pointer}.alert-primary{color:#f5faff;background-color:#007bff}.alert-primary .alert-link{color:#f5faff}.alert-secondary{color:#d9dcdf;background-color:#5a6169}.alert-secondary .alert-link{color:#d9dcdf}.alert-success{color:#d7fae9;background-color:#17c671}.alert-success .alert-link{color:#d7fae9}.alert-info{color:#cef8ff;background-color:#00b8d8}.alert-info .alert-link{color:#cef8ff}.alert-warning{color:#fffcf5;background-color:#ffb400}.alert-warning .alert-link{color:#fffcf5}.alert-danger{color:#fad7de;background-color:#c4183c}.alert-danger .alert-link{color:#fad7de}.alert-light{color:#fff;background-color:#e9ecef;color:#212529}.alert-light .alert-link{color:#fff}.alert-light .alert-link{color:#212529}.alert-dark{color:#959faa;background-color:#212529}.alert-dark .alert-link{color:#959faa}.progress-wrapper{position:relative;color:#5a6169}.progress-wrapper .progress-label{font-size:.8125rem}.progress-wrapper .progress-value{position:absolute;top:6px;right:0;color:#5a6169}.progress{height:.625rem;font-size:.625rem;line-height:.625rem;background-color:#f5f5f6;margin-top:6px;border-radius:1.25rem;box-shadow:inset 0 .1rem .1rem rgba(90,97,105,.15)}.progress-sm{height:.3125rem}.progress-lg{height:.9375rem}.progress-lg .progress-bar{height:.9375rem}.progress-bar{height:.625rem;line-height:.625rem;color:#fff;background-color:#007bff;-webkit-transition:width .6s ease;transition:width .6s ease}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:.625rem .625rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}.list-group-small .list-group-item{padding:.625rem 1rem;font-size:.8125rem}.list-group-item-action{color:#5a6169;-webkit-transition:all 250ms cubic-bezier(.27,.01,.38,1.06);transition:all 250ms cubic-bezier(.27,.01,.38,1.06)}.list-group-item-action:focus,.list-group-item-action:hover{color:#5a6169;background-color:#f7f8f8}.list-group-item-action:active{color:#5a6169;background-color:#eceeef}.list-group-item{padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125);font-weight:300}.list-group-item:first-child{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.list-group-item:last-child{border-bottom-right-radius:.375rem;border-bottom-left-radius:.375rem}.list-group-item.disabled,.list-group-item:disabled{color:#868e96;background-color:#fff}.list-group-item.active{color:#fff;background-color:#007bff;border-color:#007bff}.list-group-flush .list-group-item{border-radius:0}.list-group-item-primary{color:#004085;background-color:#b8daff}a.list-group-item-primary,button.list-group-item-primary{color:#004085}a.list-group-item-primary:focus,a.list-group-item-primary:hover,button.list-group-item-primary:focus,button.list-group-item-primary:hover{color:#004085;background-color:#9fcdff}a.list-group-item-primary.active,button.list-group-item-primary.active{background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#2f3237;background-color:#d1d3d5}a.list-group-item-secondary,button.list-group-item-secondary{color:#2f3237}a.list-group-item-secondary:focus,a.list-group-item-secondary:hover,button.list-group-item-secondary:focus,button.list-group-item-secondary:hover{color:#2f3237;background-color:#c4c6c9}a.list-group-item-secondary.active,button.list-group-item-secondary.active{background-color:#2f3237;border-color:#2f3237}.list-group-item-success{color:#0c673b;background-color:#beefd7}a.list-group-item-success,button.list-group-item-success{color:#0c673b}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#0c673b;background-color:#aaeaca}a.list-group-item-success.active,button.list-group-item-success.active{background-color:#0c673b;border-color:#0c673b}.list-group-item-info{color:#006070;background-color:#b8ebf4}a.list-group-item-info,button.list-group-item-info{color:#006070}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#006070;background-color:#a2e5f1}a.list-group-item-info.active,button.list-group-item-info.active{background-color:#006070;border-color:#006070}.list-group-item-warning{color:#855e00;background-color:#ffeab8}a.list-group-item-warning,button.list-group-item-warning{color:#855e00}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#855e00;background-color:#ffe29f}a.list-group-item-warning.active,button.list-group-item-warning.active{background-color:#855e00;border-color:#855e00}.list-group-item-danger{color:#660c1f;background-color:#eebec8}a.list-group-item-danger,button.list-group-item-danger{color:#660c1f}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#660c1f;background-color:#e9aab7}a.list-group-item-danger.active,button.list-group-item-danger.active{background-color:#660c1f;border-color:#660c1f}.list-group-item-light{color:#797b7c;background-color:#f9fafb}a.list-group-item-light,button.list-group-item-light{color:#797b7c}a.list-group-item-light:focus,a.list-group-item-light:hover,button.list-group-item-light:focus,button.list-group-item-light:hover{color:#797b7c;background-color:#eaedf1}a.list-group-item-light.active,button.list-group-item-light.active{background-color:#797b7c;border-color:#797b7c}.list-group-item-dark{color:#111315;background-color:#c1c2c3}a.list-group-item-dark,button.list-group-item-dark{color:#111315}a.list-group-item-dark:focus,a.list-group-item-dark:hover,button.list-group-item-dark:focus,button.list-group-item-dark:hover{color:#111315;background-color:#b4b5b6}a.list-group-item-dark.active,button.list-group-item-dark.active{background-color:#111315;border-color:#111315}.close{font-size:1.5rem;font-weight:500;color:#8c949d;text-shadow:none;-webkit-transition:all 250ms cubic-bezier(.27,.01,.38,1.06);transition:all 250ms cubic-bezier(.27,.01,.38,1.06)}.close:focus,.close:hover{color:#8c949d}.modal{z-index:1050}.modal-dialog{margin:.625rem}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;-webkit-transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out}.modal-dialog-centered{min-height:calc(100% - (.625rem * 2))}.modal-content{background-color:#fff;border:none;border-radius:.5rem;box-shadow:0 .46875rem 2.1875rem rgba(90,97,105,.1),0 .9375rem 1.40625rem rgba(90,97,105,.1),0 .25rem .53125rem rgba(90,97,105,.12),0 .125rem .1875rem rgba(90,97,105,.1)}.modal-backdrop{z-index:1040;background-color:#5a6169}.modal-backdrop.show{opacity:.12}.modal-header{padding:.9375rem 2.1875rem;border-bottom:1px solid #dfe1e3}.modal-title{line-height:1.5}.modal-body{padding:1.875rem 2.1875rem}.modal-footer{padding:.9375rem 2.1875rem;border-top:1px solid #dfe1e3}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.875rem auto}.modal-dialog-centered{min-height:calc(100% - (1.875rem * 2))}.modal-content{box-shadow:0 .46875rem 2.1875rem rgba(90,97,105,.1),0 .9375rem 1.40625rem rgba(90,97,105,.1),0 .25rem .53125rem rgba(90,97,105,.12),0 .125rem .1875rem rgba(90,97,105,.1)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg{max-width:800px}}.tooltip{z-index:1070;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:300;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem}.tooltip.show{opacity:1}.tooltip .arrow{width:5px;height:5px}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:5px 0}.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{border-width:5px 2.5px 0;border-top-color:#fff}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 5px}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{width:5px;height:5px}.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{border-width:2.5px 5px 2.5px 0;border-right-color:#fff}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:5px 0}.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{border-width:0 2.5px 5px;border-bottom-color:#fff}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 5px}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{width:5px;height:5px}.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{border-width:2.5px 0 2.5px 5px;border-left-color:#fff}.tooltip-inner{max-width:200px;padding:7px 13px;color:#5a6169;background-color:#fff;box-shadow:0 3px 15px rgba(90,97,105,.1),0 2px 3px rgba(90,97,105,.2);border-radius:.375rem}.popover{z-index:1060;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:300;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;background-color:#fff;border:none;padding:0;border-radius:.5rem;box-shadow:0 3px 15px rgba(90,97,105,.1),0 2px 3px rgba(90,97,105,.2)}.popover .arrow{width:1rem;height:.3rem;margin:0 .5rem}.popover .arrow::before{border-width:1rem}.popover .arrow::after{border-width:1rem}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.3rem}.bs-popover-auto[x-placement^=top] .arrow,.bs-popover-top .arrow{bottom:calc((.3rem + 1px) * -1)}.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::after,.bs-popover-top .arrow::before{border-width:.3rem .5rem 0}.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::before{border-top-color:rgba(0,0,0,.05)}.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-top .arrow::after{bottom:1px;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.3rem}.bs-popover-auto[x-placement^=right] .arrow,.bs-popover-right .arrow{left:calc((.3rem + 1px) * -1);width:.3rem;height:1rem;margin:.5rem 0}.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::after,.bs-popover-right .arrow::before{border-width:.5rem .3rem .5rem 0}.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::before{border-right-color:rgba(0,0,0,.05)}.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-right .arrow::after{left:1px;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.3rem}.bs-popover-auto[x-placement^=bottom] .arrow,.bs-popover-bottom .arrow{top:calc((.3rem + 1px) * -1)}.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::after,.bs-popover-bottom .arrow::before{border-width:0 .5rem .3rem .5rem}.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::before{border-bottom-color:rgba(0,0,0,.05)}.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-bottom .arrow::after{top:1px;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{width:1rem;margin-left:-.5rem;border-bottom:1px solid #f5f5f6}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.3rem}.bs-popover-auto[x-placement^=left] .arrow,.bs-popover-left .arrow{right:calc((.3rem + 1px) * -1);width:.3rem;height:1rem;margin:.5rem 0}.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::after,.bs-popover-left .arrow::before{border-width:.5rem 0 .5rem .3rem}.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::before{border-left-color:rgba(0,0,0,.05)}.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-left .arrow::after{right:1px;border-left-color:#fff}.popover-header{padding:14px 20px;font-size:1rem;color:#212529;line-height:14px;background-color:#f5f5f6;border-bottom:1px solid #e7e9ea;border-top-left-radius:calc(.5rem - 1px);border-top-right-radius:calc(.5rem - 1px)}.popover-body{padding:15px 20px;color:#5a6169}.carousel{box-shadow:0 .46875rem 2.1875rem rgba(90,97,105,.1),0 .9375rem 1.40625rem rgba(90,97,105,.1),0 .25rem .53125rem rgba(90,97,105,.12),0 .125rem .1875rem rgba(90,97,105,.1)}.carousel-item{transition:-webkit-transform .6s ease;-webkit-transition:-webkit-transform .6s ease;transition:transform .6s ease;transition:transform .6s ease, -webkit-transform .6s ease;transition:transform .6s ease,-webkit-transform .6s ease}.carousel-control-next,.carousel-control-prev{width:15%;color:#fff;opacity:.5}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff}.carousel-control-next-icon,.carousel-control-prev-icon{width:20px;height:20px}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{margin-right:15%;margin-left:15%}.carousel-indicators li{width:30px;height:3px;margin-right:3px;margin-left:3px;background-color:rgba(255,255,255,.5);border-radius:3px}.carousel-indicators .active{background-color:#fff}.carousel-caption{right:15%;left:15%;color:#fff}.noUi-target,.noUi-target *{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;touch-action:none;-ms-user-select:none;-moz-user-select:none;user-select:none;box-sizing:border-box}.noUi-target{position:relative;direction:ltr;background:#eceeef;border-radius:5px;box-shadow:inset 0 1px 2px rgba(90,97,105,.1);margin:35px 0}.noUi-target:focus{outline:0;box-shadow:0 0 8px rgba(0,123,255,.65),0 3px 15px rgba(90,97,105,.1),0 2px 3px rgba(90,97,105,.2)}.noUi-base,.noUi-connects{width:100%;height:100%;position:relative;z-index:1}.noUi-connects{overflow:hidden;z-index:0}.noUi-connect,.noUi-origin{position:absolute;will-change:transform;z-index:1;top:0;left:0;height:100%;width:100%;-webkit-transform-origin:0 0;transform-origin:0 0}.noUi-connect:focus,.noUi-origin:focus{outline:0}.noUi-connect{background:#007bff;border-radius:5px}html:not([dir=rtl]) .noUi-horizontal .noUi-origin{left:auto;right:0}html:not([dir=rtl]) .noUi-horizontal .noUi-handle{right:-11.5px;left:auto}.noUi-rtl .noUi-value-horizontal{-webkit-transform:translate(50%,50%);transform:translate(50%,50%)}.noUi-rtl .noUi-value-vertical{-webkit-transform:translate(0,50%);transform:translate(0,50%)}.noUi-vertical{width:5px}.noUi-vertical .noUi-origin{width:0}.noUi-vertical .noUi-handle{left:-10px;top:-11.5px}.noUi-vertical .noUi-handle:after,.noUi-vertical .noUi-handle:before{width:14px;height:1px;left:6px;top:14px}.noUi-vertical .noUi-handle:after{top:17px}.noUi-vertical .noUi-tooltip{-webkit-transform:translate(0,-50%);transform:translate(0,-50%);top:50%;right:30px}.noUi-vertical .noUi-draggable{cursor:ns-resize}.noUi-horizontal{height:5px}.noUi-horizontal .noUi-origin{height:0}.noUi-horizontal .noUi-handle{left:-11.5px;top:-10px}.noUi-horizontal .noUi-tooltip{-webkit-transform:translate(-50%,0);transform:translate(-50%,0);left:50%;bottom:30px}.noUi-handle{position:absolute;border:1px solid #e7e9ea;border-radius:50%;width:23px;height:23px;box-shadow:0 3px 15px rgba(90,97,105,.1),0 2px 3px rgba(90,97,105,.2);background:#fff;-webkit-transition:all 250ms cubic-bezier(.27,.01,.38,1.06);transition:all 250ms cubic-bezier(.27,.01,.38,1.06)}.noUi-handle:hover{cursor:grab;cursor:-webkit-grab;cursor:-moz-grab}.noUi-handle:active{cursor:grabbing;cursor:-webkit-grabbing;cursor:-moz-grabbing}.noUi-handle:focus{outline:0;box-shadow:0 0 8px rgba(0,123,255,.65),0 3px 15px rgba(90,97,105,.1),0 2px 3px rgba(90,97,105,.2)}.noUi-handle:after{left:17px}.noUi-state-tap .noUi-connect,.noUi-state-tap .noUi-origin{transition:-webkit-transform .3s;-webkit-transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s, -webkit-transform .3s;transition:transform .3s,-webkit-transform .3s}.noUi-state-drag *{cursor:inherit!important}.noUi-connects{border-radius:5px}.noUi-draggable{cursor:ew-resize}.noUi-active{-webkit-transform:scale(1.1);transform:scale(1.1)}[disabled] .noUi-connect{background:#b8b8b8}[disabled] .noUi-handle,[disabled].noUi-handle,[disabled].noUi-target{cursor:not-allowed}[disabled] .noUi-handle{background:#f2f3f4}[disabled] .noUi-handle:focus{box-shadow:0 3px 15px rgba(90,97,105,.1),0 2px 3px rgba(90,97,105,.2)}.noUi-pips,.noUi-pips *{box-sizing:border-box}.noUi-pips{position:absolute;color:#a8aeb4;font-size:12px}.noUi-value{position:absolute;white-space:nowrap;text-align:center}.noUi-value-sub{color:#a8aeb4;font-size:10px}.noUi-marker{position:absolute;background:#a8aeb4}.noUi-marker-sub{background:#a8aeb4}.noUi-marker-large{background:#a8aeb4}.noUi-pips-horizontal{padding:10px 0;height:auto;top:100%;left:0;width:100%}.noUi-value-horizontal{-webkit-transform:translate3d(-50%,50%,0);transform:translate3d(-50%,50%,0)}.noUi-marker-horizontal.noUi-marker{margin-left:-1px;width:1px;height:4px}.noUi-marker-horizontal.noUi-marker-sub{height:5px}.noUi-marker-horizontal.noUi-marker-large{height:7px}.noUi-pips-vertical{padding:0 10px;height:100%;top:0;left:100%}.noUi-value-vertical{-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);padding-left:15px}.noUi-marker-vertical.noUi-marker{width:4px;height:1px;margin-top:-1px}.noUi-marker-vertical.noUi-marker-sub{width:10px}.noUi-marker-vertical.noUi-marker-large{width:7px}.noUi-tooltip{display:block;position:absolute;text-align:center;white-space:nowrap;border-radius:.375rem;border-radius:.375rem;background:#fff;color:#5a6169;box-shadow:0 3px 15px rgba(90,97,105,.1),0 2px 3px rgba(90,97,105,.2);font-size:.75rem;padding:5px 10px}.slider-primary .noUi-connect{background:#007bff}.slider-secondary .noUi-connect{background:#5a6169}.slider-success .noUi-connect{background:#17c671}.slider-info .noUi-connect{background:#00b8d8}.slider-warning .noUi-connect{background:#ffb400}.slider-danger .noUi-connect{background:#c4183c}.slider-light .noUi-connect{background:#e9ecef}.slider-dark .noUi-connect{background:#212529}.datepicker{border-radius:.625rem;direction:ltr}.datepicker-inline{width:220px}.datepicker-rtl{direction:rtl}.datepicker-rtl.dropdown-menu{left:auto}.datepicker-rtl table tr td span{float:right}.datepicker-dropdown{top:0;left:0;padding:20px 22px}.datepicker-dropdown:after,.datepicker-dropdown:before{content:'';display:inline-block;border-top:0;position:absolute}.datepicker-dropdown:before{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #c3c7cc;border-bottom-color:rgba(0,0,0,.2)}.datepicker-dropdown:after{border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff}.datepicker-dropdown.datepicker-orient-left:before{left:6px}.datepicker-dropdown.datepicker-orient-left:after{left:7px}.datepicker-dropdown.datepicker-orient-right:before{right:6px}.datepicker-dropdown.datepicker-orient-right:after{right:7px}.datepicker-dropdown.datepicker-orient-bottom:before{top:-7px}.datepicker-dropdown.datepicker-orient-bottom:after{top:-6px}.datepicker-dropdown.datepicker-orient-top:before{bottom:-7px;border-bottom:0;border-top:7px solid #c3c7cc}.datepicker-dropdown.datepicker-orient-top:after{bottom:-6px;border-bottom:0;border-top:6px solid #fff}.datepicker table{margin:0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.datepicker table tr td{border-radius:50%}.datepicker table tr th{border-radius:.375rem;font-weight:500}.datepicker table tr td,.datepicker table tr th{-webkit-transition:all 250ms cubic-bezier(.27,.01,.38,1.06);transition:all 250ms cubic-bezier(.27,.01,.38,1.06);width:36px;height:36px;border:none;text-align:center}.table-striped .datepicker table tr td,.table-striped .datepicker table tr th{background-color:transparent}.datepicker table tr td.new,.datepicker table tr td.old{color:#c3c7cc}.datepicker table tr td.day:hover,.datepicker table tr td.focused{background:#eceeef;cursor:pointer}.datepicker table tr td.disabled,.datepicker table tr td.disabled:hover{background:0 0;color:#e7e9ea;cursor:default}.datepicker table tr td.highlighted{border-radius:0}.datepicker table tr td.highlighted.focused{background:#007bff}.datepicker table tr td.highlighted.disabled,.datepicker table tr td.highlighted.disabled:active{background:#007bff;color:#5a6169}.datepicker table tr td.today{background:#e6f2ff}.datepicker table tr td.today.focused{background:#f5f5f6}.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled:active{background:#f5f5f6;color:#868e96}.datepicker table tr td.range{background:#007bff;color:#fff;border-radius:0}.datepicker table tr td.range.focused{background:#0067d6}.datepicker table tr td.range.day.disabled:hover,.datepicker table tr td.range.disabled,.datepicker table tr td.range.disabled:active{background:#0062cc;color:#3395ff}.datepicker table tr td.range.highlighted.focused{background:#cbd3da}.datepicker table tr td.range.highlighted.disabled,.datepicker table tr td.range.highlighted.disabled:active{background:#e9ecef;color:#e7e9ea}.datepicker table tr td.range.today.disabled,.datepicker table tr td.range.today.disabled:active{background:#007bff;color:#fff}.datepicker table tr td.day.range-start{border-top-right-radius:0;border-bottom-right-radius:0}.datepicker table tr td.day.range-end{border-top-left-radius:0;border-bottom-left-radius:0}.datepicker table tr td.day.range-start.range-end{border-radius:50%}.datepicker table tr td.day.range:hover,.datepicker table tr td.selected,.datepicker table tr td.selected.highlighted,.datepicker table tr td.selected.highlighted:hover,.datepicker table tr td.selected:hover{background:#007bff;color:#fff}.datepicker table tr td.active,.datepicker table tr td.active.highlighted,.datepicker table tr td.active.highlighted:hover,.datepicker table tr td.active:hover{background:#007bff;color:#fff}.datepicker table tr td span{display:block;width:23%;height:54px;line-height:54px;float:left;margin:1%;cursor:pointer;border-radius:4px}.datepicker table tr td span.focused,.datepicker table tr td span:hover{background:#e9ecef}.datepicker table tr td span.disabled,.datepicker table tr td span.disabled:hover{background:0 0;color:#e7e9ea;cursor:default}.datepicker table tr td span.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active:hover{text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td span.new,.datepicker table tr td span.old{color:#868e96}.datepicker .datepicker-switch{width:145px}.datepicker .datepicker-switch,.datepicker .next,.datepicker .prev,.datepicker tfoot tr th{cursor:pointer}.datepicker .datepicker-switch:hover,.datepicker .next:hover,.datepicker .prev:hover,.datepicker tfoot tr th:hover{background:#e9ecef}.datepicker .next.disabled,.datepicker .prev.disabled{visibility:hidden}.datepicker .cw{font-size:10px;width:12px;padding:0 2px 0 5px;vertical-align:middle}.input-daterange input{text-align:center}.bg-primary{background-color:#007bff!important}.bg-primary.card .card-body,.bg-primary.card .card-footer,.bg-primary.card .card-header,.bg-primary.card .card-title{background-color:#0062cc!important}.bg-primary.card .card-footer,.bg-primary.card .card-header{background:#0074f0}a.bg-primary:focus,a.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#5a6169!important}.bg-secondary.card .card-body,.bg-secondary.card .card-footer,.bg-secondary.card .card-header,.bg-secondary.card .card-title{background-color:#42484e!important}.bg-secondary.card .card-footer,.bg-secondary.card .card-header{background:#535961}a.bg-secondary:focus,a.bg-secondary:hover{background-color:#42484e!important}.bg-success{background-color:#17c671!important}.bg-success.card .card-body,.bg-success.card .card-footer,.bg-success.card .card-header,.bg-success.card .card-title{background-color:#129857!important}.bg-success.card .card-footer,.bg-success.card .card-header{background:#15b869}a.bg-success:focus,a.bg-success:hover{background-color:#129857!important}.bg-info{background-color:#00b8d8!important}.bg-info.card .card-body,.bg-info.card .card-footer,.bg-info.card .card-header,.bg-info.card .card-title{background-color:#008da5!important}.bg-info.card .card-footer,.bg-info.card .card-header{background:#00abc9}a.bg-info:focus,a.bg-info:hover{background-color:#008da5!important}.bg-warning{background-color:#ffb400!important}.bg-warning.card .card-body,.bg-warning.card .card-footer,.bg-warning.card .card-header,.bg-warning.card .card-title{background-color:#cc9000!important}.bg-warning.card .card-footer,.bg-warning.card .card-header{background:#f0a900}a.bg-warning:focus,a.bg-warning:hover{background-color:#cc9000!important}.bg-danger{background-color:#c4183c!important}.bg-danger.card .card-body,.bg-danger.card .card-footer,.bg-danger.card .card-header,.bg-danger.card .card-title{background-color:#97122e!important}.bg-danger.card .card-footer,.bg-danger.card .card-header{background:#b61638}a.bg-danger:focus,a.bg-danger:hover{background-color:#97122e!important}.bg-light{background-color:#e9ecef!important}.bg-light.card .card-body,.bg-light.card .card-footer,.bg-light.card .card-header,.bg-light.card .card-title{background-color:#cbd3da!important}.bg-light.card .card-footer,.bg-light.card .card-header{background:#e0e4e9}a.bg-light:focus,a.bg-light:hover{background-color:#cbd3da!important}.bg-dark{background-color:#212529!important}.bg-dark.card .card-body,.bg-dark.card .card-footer,.bg-dark.card .card-header,.bg-dark.card .card-title{background-color:#0a0c0d!important}.bg-dark.card .card-footer,.bg-dark.card .card-header{background:#1a1d21}a.bg-dark:focus,a.bg-dark:hover{background-color:#0a0c0d!important}.border{border:1px solid #becad6!important}.border-top{border-top:1px solid #becad6!important}.border-right{border-right:1px solid #becad6!important}.border-bottom{border-bottom:1px solid #becad6!important}.border-left{border-left:1px solid #becad6!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#5a6169!important}.border-success{border-color:#17c671!important}.border-info{border-color:#00b8d8!important}.border-warning{border-color:#ffb400!important}.border-danger{border-color:#c4183c!important}.border-light{border-color:#e9ecef!important}.border-dark{border-color:#212529!important}.rounded{border-radius:.375rem!important}.rounded-top{border-top-left-radius:.375rem!important;border-top-right-radius:.375rem!important}.rounded-right{border-top-right-radius:.375rem!important;border-bottom-right-radius:.375rem!important}.rounded-bottom{border-bottom-right-radius:.375rem!important;border-bottom-left-radius:.375rem!important}.rounded-left{border-top-left-radius:.375rem!important;border-bottom-left-radius:.375rem!important}.text-monospace{font-family:\"Roboto Mono\",Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}.font-weight-normal{font-weight:300}.font-weight-bold{font-weight:500}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0062cc!important}.text-secondary{color:#5a6169!important}a.text-secondary:focus,a.text-secondary:hover{color:#42484e!important}.text-success{color:#17c671!important}a.text-success:focus,a.text-success:hover{color:#129857!important}.text-info{color:#00b8d8!important}a.text-info:focus,a.text-info:hover{color:#008da5!important}.text-warning{color:#ffb400!important}a.text-warning:focus,a.text-warning:hover{color:#cc9000!important}.text-danger{color:#c4183c!important}a.text-danger:focus,a.text-danger:hover{color:#97122e!important}.text-light{color:#e9ecef!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#212529!important}a.text-dark:focus,a.text-dark:hover{color:#0a0c0d!important}.text-body{color:#5a6169!important}a.text-white:focus,a.text-white:hover{color:#e6e6e6!important}.text-black{color:#000}a.text-black:focus,a.text-black:hover{color:#000!important}.text-muted{color:#868e96!important}.with-shadows{box-shadow:0 .46875rem 2.1875rem rgba(90,97,105,.1),0 .9375rem 1.40625rem rgba(90,97,105,.1),0 .25rem .53125rem rgba(90,97,105,.12),0 .125rem .1875rem rgba(90,97,105,.1)}", ""]);

// exports


        /***/
    }),

    /***/
    "./node_modules/css-loader/lib/css-base.js":
    /*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
        module.exports = function (useSourceMap) {
            var list = [];

            // return the list of modules as css string
            list.toString = function toString() {
                return this.map(function (item) {
                    var content = cssWithMappingToString(item, useSourceMap);
                    if (item[2]) {
                        return "@media " + item[2] + "{" + content + "}";
                    } else {
                        return content;
                    }
                }).join("");
            };

            // import a list of modules into the list
            list.i = function (modules, mediaQuery) {
                if (typeof modules === "string")
                    modules = [[null, modules, ""]];
                var alreadyImportedModules = {};
                for (var i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    if (typeof id === "number")
                        alreadyImportedModules[id] = true;
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                        if (mediaQuery && !item[2]) {
                            item[2] = mediaQuery;
                        } else if (mediaQuery) {
                            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                        }
                        list.push(item);
                    }
                }
            };
            return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || '';
            var cssMapping = item[3];
            if (!cssMapping) {
                return content;
            }

            if (useSourceMap && typeof btoa === 'function') {
                var sourceMapping = toComment(cssMapping);
                var sourceURLs = cssMapping.sources.map(function (source) {
                    return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
                });

                return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
            }

            return [content].join('\n');
        }

// Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
            // eslint-disable-next-line no-undef
            var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
            var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

            return '/*# ' + data + ' */';
        }


        /***/
    }),

    /***/
    "./node_modules/css-loader/lib/url/escape.js":
    /*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

        module.exports = function escape(url) {
            if (typeof url !== 'string') {
                return url
            }
            // If url is already wrapped in quotes, remove them
            if (/^['"].*['"]$/.test(url)) {
                url = url.slice(1, -1);
            }
            // Should url be wrapped?
            // See https://drafts.csswg.org/css-values-3/#urls
            if (/["'() \t\n]/.test(url)) {
                return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
            }

            return url
        }


        /***/
    }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}

    var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

        /***/
    }),

    /***/
    "./node_modules/popper.js/dist/umd/popper.min.js":
    /*!*******************************************************!*\
  !*** ./node_modules/popper.js/dist/umd/popper.min.js ***!
  \*******************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function (global) {/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
            (function (e, t) {
                true ? module.exports = t() : undefined
            })(this, function () {
                'use strict';

                function e(e) {
                    return e && '[object Function]' === {}.toString.call(e)
                }

                function t(e, t) {
                    if (1 !== e.nodeType) return [];
                    var o = e.ownerDocument.defaultView, n = o.getComputedStyle(e, null);
                    return t ? n[t] : n
                }

                function o(e) {
                    return 'HTML' === e.nodeName ? e : e.parentNode || e.host
                }

                function n(e) {
                    if (!e) return document.body;
                    switch (e.nodeName) {
                        case'HTML':
                        case'BODY':
                            return e.ownerDocument.body;
                        case'#document':
                            return e.body;
                    }
                    var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY;
                    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
                }

                function i(e) {
                    return e && e.referenceNode ? e.referenceNode : e
                }

                function r(e) {
                    return 11 === e ? re : 10 === e ? pe : re || pe
                }

                function p(e) {
                    if (!e) return document.documentElement;
                    for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                    var i = n && n.nodeName;
                    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
                }

                function s(e) {
                    var t = e.nodeName;
                    return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
                }

                function d(e) {
                    return null === e.parentNode ? e : d(e.parentNode)
                }

                function a(e, t) {
                    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
                    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t,
                        i = o ? t : e, r = document.createRange();
                    r.setStart(n, 0), r.setEnd(i, 0);
                    var l = r.commonAncestorContainer;
                    if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
                    var f = d(e);
                    return f.host ? a(f.host, t) : a(e, d(t).host)
                }

                function l(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
                        o = 'top' === t ? 'scrollTop' : 'scrollLeft', n = e.nodeName;
                    if ('BODY' === n || 'HTML' === n) {
                        var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i;
                        return r[o]
                    }
                    return e[o]
                }

                function f(e, t) {
                    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, 'top'),
                        i = l(t, 'left'), r = o ? -1 : 1;
                    return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
                }

                function m(e, t) {
                    var o = 'x' === t ? 'Left' : 'Top', n = 'Left' == o ? 'Right' : 'Bottom';
                    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
                }

                function h(e, t, o, n) {
                    return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
                }

                function c(e) {
                    var t = e.body, o = e.documentElement, n = r(10) && getComputedStyle(o);
                    return {height: h('Height', t, o, n), width: h('Width', t, o, n)}
                }

                function g(e) {
                    return le({}, e, {right: e.left + e.width, bottom: e.top + e.height})
                }

                function u(e) {
                    var o = {};
                    try {
                        if (r(10)) {
                            o = e.getBoundingClientRect();
                            var n = l(e, 'top'), i = l(e, 'left');
                            o.top += n, o.left += i, o.bottom += n, o.right += i
                        } else o = e.getBoundingClientRect()
                    } catch (t) {
                    }
                    var p = {left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top},
                        s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {}, d = s.width || e.clientWidth || p.width,
                        a = s.height || e.clientHeight || p.height, f = e.offsetWidth - d, h = e.offsetHeight - a;
                    if (f || h) {
                        var u = t(e);
                        f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
                    }
                    return g(p)
                }

                function b(e, o) {
                    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10),
                        s = 'HTML' === o.nodeName, d = u(e), a = u(o), l = n(e), m = t(o),
                        h = parseFloat(m.borderTopWidth, 10), c = parseFloat(m.borderLeftWidth, 10);
                    i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
                    var b = g({top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height});
                    if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
                        var w = parseFloat(m.marginTop, 10), y = parseFloat(m.marginLeft, 10);
                        b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y
                    }
                    return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b
                }

                function w(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        o = e.ownerDocument.documentElement, n = b(e, o), i = ee(o.clientWidth, window.innerWidth || 0),
                        r = ee(o.clientHeight, window.innerHeight || 0), p = t ? 0 : l(o), s = t ? 0 : l(o, 'left'),
                        d = {top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r};
                    return g(d)
                }

                function y(e) {
                    var n = e.nodeName;
                    if ('BODY' === n || 'HTML' === n) return !1;
                    if ('fixed' === t(e, 'position')) return !0;
                    var i = o(e);
                    return !!i && y(i)
                }

                function E(e) {
                    if (!e || !e.parentElement || r()) return document.documentElement;
                    for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
                    return o || document.documentElement
                }

                function v(e, t, r, p) {
                    var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], d = {top: 0, left: 0},
                        l = s ? E(e) : a(e, i(t));
                    if ('viewport' === p) d = w(l, s); else {
                        var f;
                        'scrollParent' === p ? (f = n(o(t)), 'BODY' === f.nodeName && (f = e.ownerDocument.documentElement)) : 'window' === p ? f = e.ownerDocument.documentElement : f = p;
                        var m = b(f, l, s);
                        if ('HTML' === f.nodeName && !y(l)) {
                            var h = c(e.ownerDocument), g = h.height, u = h.width;
                            d.top += m.top - m.marginTop, d.bottom = g + m.top, d.left += m.left - m.marginLeft, d.right = u + m.left
                        } else d = m
                    }
                    r = r || 0;
                    var v = 'number' == typeof r;
                    return d.left += v ? r : r.left || 0, d.top += v ? r : r.top || 0, d.right -= v ? r : r.right || 0, d.bottom -= v ? r : r.bottom || 0, d
                }

                function x(e) {
                    var t = e.width, o = e.height;
                    return t * o
                }

                function O(e, t, o, n, i) {
                    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
                    if (-1 === e.indexOf('auto')) return e;
                    var p = v(o, n, r, i), s = {
                        top: {width: p.width, height: t.top - p.top},
                        right: {width: p.right - t.right, height: p.height},
                        bottom: {width: p.width, height: p.bottom - t.bottom},
                        left: {width: t.left - p.left, height: p.height}
                    }, d = Object.keys(s).map(function (e) {
                        return le({key: e}, s[e], {area: x(s[e])})
                    }).sort(function (e, t) {
                        return t.area - e.area
                    }), a = d.filter(function (e) {
                        var t = e.width, n = e.height;
                        return t >= o.clientWidth && n >= o.clientHeight
                    }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split('-')[1];
                    return l + (f ? '-' + f : '')
                }

                function L(e, t, o) {
                    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                        r = n ? E(t) : a(t, i(o));
                    return b(o, r, n)
                }

                function S(e) {
                    var t = e.ownerDocument.defaultView, o = t.getComputedStyle(e),
                        n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
                        i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
                        r = {width: e.offsetWidth + i, height: e.offsetHeight + n};
                    return r
                }

                function T(e) {
                    var t = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'};
                    return e.replace(/left|right|bottom|top/g, function (e) {
                        return t[e]
                    })
                }

                function C(e, t, o) {
                    o = o.split('-')[0];
                    var n = S(e), i = {width: n.width, height: n.height}, r = -1 !== ['right', 'left'].indexOf(o),
                        p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width',
                        a = r ? 'width' : 'height';
                    return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i
                }

                function D(e, t) {
                    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
                }

                function N(e, t, o) {
                    if (Array.prototype.findIndex) return e.findIndex(function (e) {
                        return e[t] === o
                    });
                    var n = D(e, function (e) {
                        return e[t] === o
                    });
                    return e.indexOf(n)
                }

                function P(t, o, n) {
                    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
                    return i.forEach(function (t) {
                        t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
                        var n = t['function'] || t.fn;
                        t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t))
                    }), o
                }

                function k() {
                    if (!this.state.isDestroyed) {
                        var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                        e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }

                function W(e, t) {
                    return e.some(function (e) {
                        var o = e.name, n = e.enabled;
                        return n && o === t
                    })
                }

                function B(e) {
                    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
                        var i = t[n], r = i ? '' + i + o : e;
                        if ('undefined' != typeof document.body.style[r]) return r
                    }
                    return null
                }

                function H() {
                    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }

                function A(e) {
                    var t = e.ownerDocument;
                    return t ? t.defaultView : window
                }

                function M(e, t, o, i) {
                    var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView : e;
                    p.addEventListener(t, o, {passive: !0}), r || M(n(p.parentNode), t, o, i), i.push(p)
                }

                function F(e, t, o, i) {
                    o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {passive: !0});
                    var r = n(e);
                    return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
                }

                function I() {
                    this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
                }

                function R(e, t) {
                    return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
                        e.removeEventListener('scroll', t.updateBound)
                    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
                }

                function U() {
                    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
                }

                function Y(e) {
                    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
                }

                function V(e, t) {
                    Object.keys(t).forEach(function (o) {
                        var n = '';
                        -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n
                    })
                }

                function j(e, t) {
                    Object.keys(t).forEach(function (o) {
                        var n = t[o];
                        !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
                    })
                }

                function q(e, t) {
                    var o = e.offsets, n = o.popper, i = o.reference, r = $, p = function (e) {
                            return e
                        }, s = r(i.width), d = r(n.width), a = -1 !== ['left', 'right'].indexOf(e.placement),
                        l = -1 !== e.placement.indexOf('-'), f = t ? a || l || s % 2 == d % 2 ? r : Z : p,
                        m = t ? r : p;
                    return {
                        left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
                        top: m(n.top),
                        bottom: m(n.bottom),
                        right: f(n.right)
                    }
                }

                function K(e, t, o) {
                    var n = D(e, function (e) {
                        var o = e.name;
                        return o === t
                    }), i = !!n && e.some(function (e) {
                        return e.name === o && e.enabled && e.order < n.order
                    });
                    if (!i) {
                        var r = '`' + t + '`';
                        console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
                    }
                    return i
                }

                function z(e) {
                    return 'end' === e ? 'start' : 'start' === e ? 'end' : e
                }

                function G(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = he.indexOf(e),
                        n = he.slice(o + 1).concat(he.slice(0, o));
                    return t ? n.reverse() : n
                }

                function _(e, t, o, n) {
                    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2];
                    if (!r) return e;
                    if (0 === p.indexOf('%')) {
                        var s;
                        switch (p) {
                            case'%p':
                                s = o;
                                break;
                            case'%':
                            case'%r':
                            default:
                                s = n;
                        }
                        var d = g(s);
                        return d[t] / 100 * r
                    }
                    if ('vh' === p || 'vw' === p) {
                        var a;
                        return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
                    }
                    return r
                }

                function X(e, t, o, n) {
                    var i = [0, 0], r = -1 !== ['right', 'left'].indexOf(n), p = e.split(/(\+|\-)/).map(function (e) {
                        return e.trim()
                    }), s = p.indexOf(D(p, function (e) {
                        return -1 !== e.search(/,|\s/)
                    }));
                    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
                    var d = /\s*,\s*|\s+/,
                        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
                    return a = a.map(function (e, n) {
                        var i = (1 === n ? !r : r) ? 'height' : 'width', p = !1;
                        return e.reduce(function (e, t) {
                            return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
                        }, []).map(function (e) {
                            return _(e, i, t, o)
                        })
                    }), a.forEach(function (e, t) {
                        e.forEach(function (o, n) {
                            Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
                        })
                    }), i
                }

                function J(e, t) {
                    var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference,
                        d = i.split('-')[0];
                    return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
                }

                var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max,
                    te = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator,
                    oe = function () {
                        for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1) if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
                        return 0
                    }(), ne = te && window.Promise, ie = ne ? function (e) {
                        var t = !1;
                        return function () {
                            t || (t = !0, window.Promise.resolve().then(function () {
                                t = !1, e()
                            }))
                        }
                    } : function (e) {
                        var t = !1;
                        return function () {
                            t || (t = !0, setTimeout(function () {
                                t = !1, e()
                            }, oe))
                        }
                    }, re = te && !!(window.MSInputMethodContext && document.documentMode),
                    pe = te && /MSIE 10/.test(navigator.userAgent), se = function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
                    }, de = function () {
                        function e(e, t) {
                            for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }

                        return function (t, o, n) {
                            return o && e(t.prototype, o), n && e(t, n), t
                        }
                    }(), ae = function (e, t, o) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = o, e
                    }, le = Object.assign || function (e) {
                        for (var t, o = 1; o < arguments.length; o++) for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }, fe = te && /Firefox/i.test(navigator.userAgent),
                    me = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
                    he = me.slice(3), ce = {FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise'},
                    ge = function () {
                        function t(o, n) {
                            var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                            se(this, t), this.scheduleUpdate = function () {
                                return requestAnimationFrame(i.update)
                            }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = {
                                isDestroyed: !1,
                                isCreated: !1,
                                scrollParents: []
                            }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                                i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                            }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                                return le({name: e}, i.options.modifiers[e])
                            }).sort(function (e, t) {
                                return e.order - t.order
                            }), this.modifiers.forEach(function (t) {
                                t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                            }), this.update();
                            var p = this.options.eventsEnabled;
                            p && this.enableEventListeners(), this.state.eventsEnabled = p
                        }

                        return de(t, [{
                            key: 'update', value: function () {
                                return k.call(this)
                            }
                        }, {
                            key: 'destroy', value: function () {
                                return H.call(this)
                            }
                        }, {
                            key: 'enableEventListeners', value: function () {
                                return I.call(this)
                            }
                        }, {
                            key: 'disableEventListeners', value: function () {
                                return U.call(this)
                            }
                        }]), t
                    }();
                return ge.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ge.placements = me, ge.Defaults = {
                    placement: 'bottom',
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function () {
                    },
                    onUpdate: function () {
                    },
                    modifiers: {
                        shift: {
                            order: 100, enabled: !0, fn: function (e) {
                                var t = e.placement, o = t.split('-')[0], n = t.split('-')[1];
                                if (n) {
                                    var i = e.offsets, r = i.reference, p = i.popper,
                                        s = -1 !== ['bottom', 'top'].indexOf(o), d = s ? 'left' : 'top',
                                        a = s ? 'width' : 'height',
                                        l = {start: ae({}, d, r[d]), end: ae({}, d, r[d] + r[a] - p[a])};
                                    e.offsets.popper = le({}, p, l[n])
                                }
                                return e
                            }
                        },
                        offset: {order: 200, enabled: !0, fn: J, offset: 0},
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function (e, t) {
                                var o = t.boundariesElement || p(e.instance.popper);
                                e.instance.reference === o && (o = p(o));
                                var n = B('transform'), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n];
                                i.top = '', i.left = '', i[n] = '';
                                var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                                i.top = r, i.left = s, i[n] = d, t.boundaries = a;
                                var l = t.priority, f = e.offsets.popper, m = {
                                    primary: function (e) {
                                        var o = f[e];
                                        return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), ae({}, e, o)
                                    }, secondary: function (e) {
                                        var o = 'right' === e ? 'left' : 'top', n = f[o];
                                        return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n)
                                    }
                                };
                                return l.forEach(function (e) {
                                    var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                                    f = le({}, f, m[t](e))
                                }), e.offsets.popper = f, e
                            },
                            priority: ['left', 'right', 'top', 'bottom'],
                            padding: 5,
                            boundariesElement: 'scrollParent'
                        },
                        keepTogether: {
                            order: 400, enabled: !0, fn: function (e) {
                                var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split('-')[0], r = Z,
                                    p = -1 !== ['top', 'bottom'].indexOf(i), s = p ? 'right' : 'bottom',
                                    d = p ? 'left' : 'top', a = p ? 'width' : 'height';
                                return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
                            }
                        },
                        arrow: {
                            order: 500, enabled: !0, fn: function (e, o) {
                                var n;
                                if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                                var i = o.element;
                                if ('string' == typeof i) {
                                    if (i = e.instance.popper.querySelector(i), !i) return e;
                                } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                                var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference,
                                    a = -1 !== ['left', 'right'].indexOf(r), l = a ? 'height' : 'width',
                                    f = a ? 'Top' : 'Left', m = f.toLowerCase(), h = a ? 'left' : 'top',
                                    c = a ? 'bottom' : 'right', u = S(i)[l];
                                d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
                                var b = d[m] + d[l] / 2 - u / 2, w = t(e.instance.popper),
                                    y = parseFloat(w['margin' + f], 10), E = parseFloat(w['border' + f + 'Width'], 10),
                                    v = b - e.offsets.popper[m] - y - E;
                                return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, $(v)), ae(n, h, ''), n), e
                            }, element: '[x-arrow]'
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function (e, t) {
                                if (W(e.instance.modifiers, 'inner')) return e;
                                if (e.flipped && e.placement === e.originalPlacement) return e;
                                var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                    n = e.placement.split('-')[0], i = T(n), r = e.placement.split('-')[1] || '',
                                    p = [];
                                switch (t.behavior) {
                                    case ce.FLIP:
                                        p = [n, i];
                                        break;
                                    case ce.CLOCKWISE:
                                        p = G(n);
                                        break;
                                    case ce.COUNTERCLOCKWISE:
                                        p = G(n, !0);
                                        break;
                                    default:
                                        p = t.behavior;
                                }
                                return p.forEach(function (s, d) {
                                    if (n !== s || p.length === d + 1) return e;
                                    n = e.placement.split('-')[0], i = T(n);
                                    var a = e.offsets.popper, l = e.offsets.reference, f = Z,
                                        m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                                        h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top),
                                        u = f(a.bottom) > f(o.bottom),
                                        b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                                        w = -1 !== ['top', 'bottom'].indexOf(n),
                                        y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u),
                                        E = !!t.flipVariationsByContent && (w && 'start' === r && c || w && 'end' === r && h || !w && 'start' === r && u || !w && 'end' === r && g),
                                        v = y || E;
                                    (m || b || v) && (e.flipped = !0, (m || b) && (n = p[d + 1]), v && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'))
                                }), e
                            },
                            behavior: 'flip',
                            padding: 5,
                            boundariesElement: 'viewport',
                            flipVariations: !1,
                            flipVariationsByContent: !1
                        },
                        inner: {
                            order: 700, enabled: !1, fn: function (e) {
                                var t = e.placement, o = t.split('-')[0], n = e.offsets, i = n.popper, r = n.reference,
                                    p = -1 !== ['left', 'right'].indexOf(o), s = -1 === ['top', 'left'].indexOf(o);
                                return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e
                            }
                        },
                        hide: {
                            order: 800, enabled: !0, fn: function (e) {
                                if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                                var t = e.offsets.reference, o = D(e.instance.modifiers, function (e) {
                                    return 'preventOverflow' === e.name
                                }).boundaries;
                                if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                                    if (!0 === e.hide) return e;
                                    e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                                } else {
                                    if (!1 === e.hide) return e;
                                    e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                                }
                                return e
                            }
                        },
                        computeStyle: {
                            order: 850, enabled: !0, fn: function (e, t) {
                                var o = t.x, n = t.y, i = e.offsets.popper, r = D(e.instance.modifiers, function (e) {
                                    return 'applyStyle' === e.name
                                }).gpuAcceleration;
                                void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                                var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l),
                                    m = {position: i.position}, h = q(e, 2 > window.devicePixelRatio || !fe),
                                    c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right',
                                    b = B('transform');
                                if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform'; else {
                                    var w = 'bottom' == c ? -1 : 1, y = 'right' == g ? -1 : 1;
                                    m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g
                                }
                                var E = {"x-placement": e.placement};
                                return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e
                            }, gpuAcceleration: !0, x: 'bottom', y: 'right'
                        },
                        applyStyle: {
                            order: 900, enabled: !0, fn: function (e) {
                                return V(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e
                            }, onLoad: function (e, t, o, n, i) {
                                var r = L(i, t, e, o.positionFixed),
                                    p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                                return t.setAttribute('x-placement', p), V(t, {position: o.positionFixed ? 'fixed' : 'absolute'}), o
                            }, gpuAcceleration: void 0
                        }
                    }
                }, ge
            });
//# sourceMappingURL=popper.min.js.map

            /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

        /***/
    }),

    /***/
    "./node_modules/shards-ui/dist/css/shards.min.css":
    /*!********************************************************!*\
  !*** ./node_modules/shards-ui/dist/css/shards.min.css ***!
  \********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {


        var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./shards.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/shards-ui/dist/css/shards.min.css");

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;


        var options = {"hmr": true};

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

        if (content.locals) module.exports = content.locals;

        if (false) {
        }

        /***/
    }),

/***/ "./node_modules/shards-ui/dist/js/shards.min.js":
/*!******************************************************!*\
  !*** ./node_modules/shards-ui/dist/js/shards.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(i){var a={};function s(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=i,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(1);i.n(a),i(3)},function(t,e,i){var a,s,n,r;r=function(_,M){function T(){return new Date(Date.UTC.apply(Date,arguments))}function b(){var t=new Date;return T(t.getFullYear(),t.getMonth(),t.getDate())}function n(t,e){return t.getUTCFullYear()===e.getUTCFullYear()&&t.getUTCMonth()===e.getUTCMonth()&&t.getUTCDate()===e.getUTCDate()}function t(t,e){return function(){return e!==M&&_.fn.datepicker.deprecated(e),this[t].apply(this,arguments)}}var e,i=(e={get:function(t){return this.slice(t)[0]},contains:function(t){for(var e=t&&t.valueOf(),i=0,a=this.length;i<a;i++)if(0<=this[i].valueOf()-e&&this[i].valueOf()-e<864e5)return i;return-1},remove:function(t){this.splice(t,1)},replace:function(t){t&&(_.isArray(t)||(t=[t]),this.clear(),this.push.apply(this,t))},clear:function(){this.length=0},copy:function(){var t=new i;return t.replace(this),t}},function(){var t=[];return t.push.apply(t,arguments),_.extend(t,e),t}),k=function(t,e){_.data(t,"datepicker",this),this._process_options(e),this.dates=new i,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=_(t),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=!!this.element.hasClass("date")&&this.element.find(".add-on, .input-group-addon, .btn"),this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=_(E.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(t,e){return Number(e)+1}),this._process_options({startDate:this._o.startDate,endDate:this._o.endDate,daysOfWeekDisabled:this.o.daysOfWeekDisabled,daysOfWeekHighlighted:this.o.daysOfWeekHighlighted,datesDisabled:this.o.datesDisabled}),this._allow_update=!1,this.setViewMode(this.o.startView),this._allow_update=!0,this.fillDow(),this.fillMonths(),this.update(),this.isInline&&this.show()};k.prototype={constructor:k,_resolveViewName:function(i){return _.each(E.viewModes,function(t,e){if(i===t||-1!==_.inArray(i,e.names))return i=t,!1}),i},_resolveDaysOfWeek:function(t){return _.isArray(t)||(t=t.split(/[,\s]*/)),_.map(t,Number)},_check_template:function(t){try{return t!==M&&""!==t&&((t.match(/[<>]/g)||[]).length<=0||0<_(t).length)}catch(t){return!1}},_process_options:function(t){this._o=_.extend({},this._o,t);var e=this.o=_.extend({},this._o),i=e.language;U[i]||(i=i.split("-")[0],U[i]||(i=d.language)),e.language=i,e.startView=this._resolveViewName(e.startView),e.minViewMode=this._resolveViewName(e.minViewMode),e.maxViewMode=this._resolveViewName(e.maxViewMode),e.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,e.startView)),!0!==e.multidate&&(e.multidate=Number(e.multidate)||!1,!1!==e.multidate&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var a=E.parseFormat(e.format);e.startDate!==-1/0&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=E.parseDate(e.startDate,a,e.language,e.assumeNearbyYear):e.startDate=-1/0),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=E.parseDate(e.endDate,a,e.language,e.assumeNearbyYear):e.endDate=1/0),e.daysOfWeekDisabled=this._resolveDaysOfWeek(e.daysOfWeekDisabled||[]),e.daysOfWeekHighlighted=this._resolveDaysOfWeek(e.daysOfWeekHighlighted||[]),e.datesDisabled=e.datesDisabled||[],_.isArray(e.datesDisabled)||(e.datesDisabled=e.datesDisabled.split(",")),e.datesDisabled=_.map(e.datesDisabled,function(t){return E.parseDate(t,a,e.language,e.assumeNearbyYear)});var s=String(e.orientation).toLowerCase().split(/\s+/g),n=e.orientation.toLowerCase();if(s=_.grep(s,function(t){return/^auto|left|right|top|bottom$/.test(t)}),e.orientation={x:"auto",y:"auto"},n&&"auto"!==n)if(1===s.length)switch(s[0]){case"top":case"bottom":e.orientation.y=s[0];break;case"left":case"right":e.orientation.x=s[0]}else n=_.grep(s,function(t){return/^left|right$/.test(t)}),e.orientation.x=n[0]||"auto",n=_.grep(s,function(t){return/^top|bottom$/.test(t)}),e.orientation.y=n[0]||"auto";else;if(e.defaultViewDate instanceof Date||"string"==typeof e.defaultViewDate)e.defaultViewDate=E.parseDate(e.defaultViewDate,a,e.language,e.assumeNearbyYear);else if(e.defaultViewDate){var r=e.defaultViewDate.year||(new Date).getFullYear(),o=e.defaultViewDate.month||0,l=e.defaultViewDate.day||1;e.defaultViewDate=T(r,o,l)}else e.defaultViewDate=b()},_events:[],_secondaryEvents:[],_applyEvents:function(t){for(var e,i,a,s=0;s<t.length;s++)e=t[s][0],2===t[s].length?(i=M,a=t[s][1]):3===t[s].length&&(i=t[s][1],a=t[s][2]),e.on(a,i)},_unapplyEvents:function(t){for(var e,i,a,s=0;s<t.length;s++)e=t[s][0],2===t[s].length?(a=M,i=t[s][1]):3===t[s].length&&(a=t[s][1],i=t[s][2]),e.off(i,a)},_buildEvents:function(){var t={keyup:_.proxy(function(t){-1===_.inArray(t.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:_.proxy(this.keydown,this),paste:_.proxy(this.paste,this)};!0===this.o.showOnFocus&&(t.focus=_.proxy(this.show,this)),this.isInput?this._events=[[this.element,t]]:this.component&&this.inputField.length?this._events=[[this.inputField,t],[this.component,{click:_.proxy(this.show,this)}]]:this._events=[[this.element,{click:_.proxy(this.show,this),keydown:_.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:_.proxy(function(t){this._focused_from=t.target},this)}],[this.element,{blur:_.proxy(function(t){this._focused_from=t.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":_.proxy(function(t){this.update(t.date)},this)}]),this._secondaryEvents=[[this.picker,{click:_.proxy(this.click,this)}],[this.picker,".prev, .next",{click:_.proxy(this.navArrowsClick,this)}],[this.picker,".day:not(.disabled)",{click:_.proxy(this.dayCellClick,this)}],[_(window),{resize:_.proxy(this.place,this)}],[_(document),{"mousedown touchstart":_.proxy(function(t){this.element.is(t.target)||this.element.find(t.target).length||this.picker.is(t.target)||this.picker.find(t.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(t,e){var i=e||this.dates.get(-1),a=this._utc_to_local(i);this.element.trigger({type:t,date:a,viewMode:this.viewMode,dates:_.map(this.dates,this._utc_to_local),format:_.proxy(function(t,e){0===arguments.length?(t=this.dates.length-1,e=this.o.format):"string"==typeof t&&(e=t,t=this.dates.length-1),e=e||this.o.format;var i=this.dates.get(t);return E.formatDate(i,e,this.o.language)},this)})},show:function(){if(!(this.inputField.prop("disabled")||this.inputField.prop("readonly")&&!1===this.o.enableOnReadonly))return this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&_(this.element).blur(),this},hide:function(){return this.isInline||!this.picker.is(":visible")||(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide")),this},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(t){var e;if(t.originalEvent.clipboardData&&t.originalEvent.clipboardData.types&&-1!==_.inArray("text/plain",t.originalEvent.clipboardData.types))e=t.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;e=window.clipboardData.getData("Text")}this.setDate(e),this.update(),t.preventDefault()},_utc_to_local:function(t){if(!t)return t;var e=new Date(t.getTime()+6e4*t.getTimezoneOffset());return e.getTimezoneOffset()!==t.getTimezoneOffset()&&(e=new Date(t.getTime()+6e4*e.getTimezoneOffset())),e},_local_to_utc:function(t){return t&&new Date(t.getTime()-6e4*t.getTimezoneOffset())},_zero_time:function(t){return t&&new Date(t.getFullYear(),t.getMonth(),t.getDate())},_zero_utc_time:function(t){return t&&T(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())},getDates:function(){return _.map(this.dates,this._utc_to_local)},getUTCDates:function(){return _.map(this.dates,function(t){return new Date(t)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var t=this.dates.get(-1);return t!==M?new Date(t):null},clearDates:function(){this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var t=_.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,t),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var t=_.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,_.map(t,this._utc_to_local)),this},setDate:t("setDates"),setUTCDate:t("setUTCDates"),remove:t("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),setValue:function(){var t=this.getFormattedDate();return this.inputField.val(t),this},getFormattedDate:function(e){e===M&&(e=this.o.format);var i=this.o.language;return _.map(this.dates,function(t){return E.formatDate(t,e,i)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(t){return this._process_options({startDate:t}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(t){return this._process_options({endDate:t}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(t){return this._process_options({daysOfWeekDisabled:t}),this.update(),this},setDaysOfWeekHighlighted:function(t){return this._process_options({daysOfWeekHighlighted:t}),this.update(),this},setDatesDisabled:function(t){return this._process_options({datesDisabled:t}),this.update(),this},place:function(){if(this.isInline)return this;var t=this.picker.outerWidth(),e=this.picker.outerHeight(),i=_(this.o.container),a=i.width(),s="body"===this.o.container?_(document).scrollTop():i.scrollTop(),n=i.offset(),r=[0];this.element.parents().each(function(){var t=_(this).css("z-index");"auto"!==t&&0!==Number(t)&&r.push(Number(t))});var o=Math.max.apply(Math,r)+this.o.zIndexOffset,l=this.component?this.component.parent().offset():this.element.offset(),h=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),d=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),c=l.left-n.left,u=l.top-n.top;"body"!==this.o.container&&(u+=s),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(c-=t-d)):l.left<0?(this.picker.addClass("datepicker-orient-left"),c-=l.left-10):a<c+t?(this.picker.addClass("datepicker-orient-right"),c+=d-t):this.o.rtl?this.picker.addClass("datepicker-orient-right"):this.picker.addClass("datepicker-orient-left");var p=this.o.orientation.y;if("auto"===p&&(p=-s+u-e<0?"bottom":"top"),this.picker.addClass("datepicker-orient-"+p),"top"===p?u-=e+parseInt(this.picker.css("padding-top")):u+=h,this.o.rtl){var f=a-(c+d);this.picker.css({top:u,right:f,zIndex:o})}else this.picker.css({top:u,left:c,zIndex:o});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var t=this.dates.copy(),i=[],e=!1;return arguments.length?(_.each(arguments,_.proxy(function(t,e){e instanceof Date&&(e=this._local_to_utc(e)),i.push(e)},this)),e=!0):(i=(i=this.isInput?this.element.val():this.element.data("date")||this.inputField.val())&&this.o.multidate?i.split(this.o.multidateSeparator):[i],delete this.element.data().date),i=_.map(i,_.proxy(function(t){return E.parseDate(t,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),i=_.grep(i,_.proxy(function(t){return!this.dateWithinRange(t)||!t},this),!0),this.dates.replace(i),this.o.updateViewDate&&(this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate),e?(this.setValue(),this.element.change()):this.dates.length&&String(t)!==String(this.dates)&&e&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&t.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){if(this.o.showWeekDays){var t=this.o.weekStart,e="<tr>";for(this.o.calendarWeeks&&(e+='<th class="cw">&#160;</th>');t<this.o.weekStart+7;)e+='<th class="dow',-1!==_.inArray(t,this.o.daysOfWeekDisabled)&&(e+=" disabled"),e+='">'+U[this.o.language].daysMin[t++%7]+"</th>";e+="</tr>",this.picker.find(".datepicker-days thead").append(e)}},fillMonths:function(){for(var t=this._utc_to_local(this.viewDate),e="",i=0;i<12;i++)e+='<span class="month'+(t&&t.getMonth()===i?" focused":"")+'">'+U[this.o.language].monthsShort[i]+"</span>";this.picker.find(".datepicker-months td").html(e)},setRange:function(t){t&&t.length?this.range=_.map(t,function(t){return t.valueOf()}):delete this.range,this.fill()},getClassNames:function(t){var e=[],i=this.viewDate.getUTCFullYear(),a=this.viewDate.getUTCMonth(),s=b();return t.getUTCFullYear()<i||t.getUTCFullYear()===i&&t.getUTCMonth()<a?e.push("old"):(t.getUTCFullYear()>i||t.getUTCFullYear()===i&&t.getUTCMonth()>a)&&e.push("new"),this.focusDate&&t.valueOf()===this.focusDate.valueOf()&&e.push("focused"),this.o.todayHighlight&&n(t,s)&&e.push("today"),-1!==this.dates.contains(t)&&e.push("active"),this.dateWithinRange(t)||e.push("disabled"),this.dateIsDisabled(t)&&e.push("disabled","disabled-date"),-1!==_.inArray(t.getUTCDay(),this.o.daysOfWeekHighlighted)&&e.push("highlighted"),this.range&&(t>this.range[0]&&t<this.range[this.range.length-1]&&e.push("range"),-1!==_.inArray(t.valueOf(),this.range)&&e.push("selected"),t.valueOf()===this.range[0]&&e.push("range-start"),t.valueOf()===this.range[this.range.length-1]&&e.push("range-end")),e},_fill_yearsView:function(t,e,i,a,s,n,r){for(var o,l,h,d="",c=i/10,u=this.picker.find(t),p=Math.floor(a/i)*i,f=p+9*c,g=Math.floor(this.viewDate.getFullYear()/c)*c,m=_.map(this.dates,function(t){return Math.floor(t.getUTCFullYear()/c)*c}),v=p-c;v<=f+c;v+=c)o=[e],l=null,v===p-c?o.push("old"):v===f+c&&o.push("new"),-1!==_.inArray(v,m)&&o.push("active"),(v<s||n<v)&&o.push("disabled"),v===g&&o.push("focused"),r!==_.noop&&((h=r(new Date(v,0,1)))===M?h={}:"boolean"==typeof h?h={enabled:h}:"string"==typeof h&&(h={classes:h}),!1===h.enabled&&o.push("disabled"),h.classes&&(o=o.concat(h.classes.split(/\s+/))),h.tooltip&&(l=h.tooltip)),d+='<span class="'+o.join(" ")+'"'+(l?' title="'+l+'"':"")+">"+v+"</span>";u.find(".datepicker-switch").text(p+"-"+f),u.find("td").html(d)},fill:function(){var t,e,i=new Date(this.viewDate),s=i.getUTCFullYear(),a=i.getUTCMonth(),n=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,r=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,o=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,h=U[this.o.language].today||U.en.today||"",d=U[this.o.language].clear||U.en.clear||"",c=U[this.o.language].titleFormat||U.en.titleFormat;if(!isNaN(s)&&!isNaN(a)){this.picker.find(".datepicker-days .datepicker-switch").text(E.formatDate(i,c,this.o.language)),this.picker.find("tfoot .today").text(h).css("display",!0===this.o.todayBtn||"linked"===this.o.todayBtn?"table-cell":"none"),this.picker.find("tfoot .clear").text(d).css("display",!0===this.o.clearBtn?"table-cell":"none"),this.picker.find("thead .datepicker-title").text(this.o.title).css("display","string"==typeof this.o.title&&""!==this.o.title?"table-cell":"none"),this.updateNavArrows(),this.fillMonths();var u=T(s,a,0),p=u.getUTCDate();u.setUTCDate(p-(u.getUTCDay()-this.o.weekStart+7)%7);var f=new Date(u);u.getUTCFullYear()<100&&f.setUTCFullYear(u.getUTCFullYear()),f.setUTCDate(f.getUTCDate()+42),f=f.valueOf();for(var g,m,v=[];u.valueOf()<f;){if((g=u.getUTCDay())===this.o.weekStart&&(v.push("<tr>"),this.o.calendarWeeks)){var y=new Date(+u+(this.o.weekStart-g-7)%7*864e5),w=new Date(Number(y)+(11-y.getUTCDay())%7*864e5),D=new Date(Number(D=T(w.getUTCFullYear(),0,1))+(11-D.getUTCDay())%7*864e5),b=(w-D)/864e5/7+1;v.push('<td class="cw">'+b+"</td>")}(m=this.getClassNames(u)).push("day");var k=u.getUTCDate();this.o.beforeShowDay!==_.noop&&((e=this.o.beforeShowDay(this._utc_to_local(u)))===M?e={}:"boolean"==typeof e?e={enabled:e}:"string"==typeof e&&(e={classes:e}),!1===e.enabled&&m.push("disabled"),e.classes&&(m=m.concat(e.classes.split(/\s+/))),e.tooltip&&(t=e.tooltip),e.content&&(k=e.content)),m=_.isFunction(_.uniqueSort)?_.uniqueSort(m):_.unique(m),v.push('<td class="'+m.join(" ")+'"'+(t?' title="'+t+'"':"")+' data-date="'+u.getTime().toString()+'">'+k+"</td>"),t=null,g===this.o.weekEnd&&v.push("</tr>"),u.setUTCDate(u.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(v.join(""));var C=U[this.o.language].monthsTitle||U.en.monthsTitle||"Months",x=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?C:s).end().find("tbody span").removeClass("active");if(_.each(this.dates,function(t,e){e.getUTCFullYear()===s&&x.eq(e.getUTCMonth()).addClass("active")}),(s<n||o<s)&&x.addClass("disabled"),s===n&&x.slice(0,r).addClass("disabled"),s===o&&x.slice(l+1).addClass("disabled"),this.o.beforeShowMonth!==_.noop){var S=this;_.each(x,function(t,e){var i=new Date(s,t,1),a=S.o.beforeShowMonth(i);a===M?a={}:"boolean"==typeof a?a={enabled:a}:"string"==typeof a&&(a={classes:a}),!1!==a.enabled||_(e).hasClass("disabled")||_(e).addClass("disabled"),a.classes&&_(e).addClass(a.classes),a.tooltip&&_(e).prop("title",a.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,s,n,o,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,s,n,o,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,s,n,o,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var t,e,i=new Date(this.viewDate),a=i.getUTCFullYear(),s=i.getUTCMonth(),n=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,r=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,o=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,h=1;switch(this.viewMode){case 4:h*=10;case 3:h*=10;case 2:h*=10;case 1:t=Math.floor(a/h)*h<n,e=Math.floor(a/h)*h+h>o;break;case 0:t=a<=n&&s<r,e=o<=a&&l<s}this.picker.find(".prev").toggleClass("disabled",t),this.picker.find(".next").toggleClass("disabled",e)}},click:function(t){var e,i,a;t.preventDefault(),t.stopPropagation(),(e=_(t.target)).hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1),e.hasClass("today")&&!e.hasClass("day")&&(this.setViewMode(0),this._setDate(b(),"linked"===this.o.todayBtn?null:"view")),e.hasClass("clear")&&this.clearDates(),e.hasClass("disabled")||(e.hasClass("month")||e.hasClass("year")||e.hasClass("decade")||e.hasClass("century"))&&(this.viewDate.setUTCDate(1),1===this.viewMode?(a=e.parent().find("span").index(e),i=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(a)):(a=0,i=Number(e.text()),this.viewDate.setUTCFullYear(i)),this._trigger(E.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(T(i,a,1)):(this.setViewMode(this.viewMode-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus(),delete this._focused_from},dayCellClick:function(t){var e=_(t.currentTarget).data("date"),i=new Date(e);this.o.updateViewDate&&(i.getUTCFullYear()!==this.viewDate.getUTCFullYear()&&this._trigger("changeYear",this.viewDate),i.getUTCMonth()!==this.viewDate.getUTCMonth()&&this._trigger("changeMonth",this.viewDate)),this._setDate(i)},navArrowsClick:function(t){var e=_(t.currentTarget).hasClass("prev")?-1:1;0!==this.viewMode&&(e*=12*E.viewModes[this.viewMode].navStep),this.viewDate=this.moveMonth(this.viewDate,e),this._trigger(E.viewModes[this.viewMode].e,this.viewDate),this.fill()},_toggle_multidate:function(t){var e=this.dates.contains(t);if(t||this.dates.clear(),-1!==e?(!0===this.o.multidate||1<this.o.multidate||this.o.toggleActive)&&this.dates.remove(e):(!1===this.o.multidate&&this.dates.clear(),this.dates.push(t)),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(t,e){e&&"date"!==e||this._toggle_multidate(t&&new Date(t)),(!e&&this.o.updateViewDate||"view"===e)&&(this.viewDate=t&&new Date(t)),this.fill(),this.setValue(),e&&"view"===e||this._trigger("changeDate"),this.inputField.trigger("change"),!this.o.autoclose||e&&"date"!==e||this.hide()},moveDay:function(t,e){var i=new Date(t);return i.setUTCDate(t.getUTCDate()+e),i},moveWeek:function(t,e){return this.moveDay(t,7*e)},moveMonth:function(t,e){if(!(i=t)||isNaN(i.getTime()))return this.o.defaultViewDate;var i;if(!e)return t;var a,s,n=new Date(t.valueOf()),r=n.getUTCDate(),o=n.getUTCMonth(),l=Math.abs(e);if(e=0<e?1:-1,1===l)s=-1===e?function(){return n.getUTCMonth()===o}:function(){return n.getUTCMonth()!==a},a=o+e,n.setUTCMonth(a),a=(a+12)%12;else{for(var h=0;h<l;h++)n=this.moveMonth(n,e);a=n.getUTCMonth(),n.setUTCDate(r),s=function(){return a!==n.getUTCMonth()}}for(;s();)n.setUTCDate(--r),n.setUTCMonth(a);return n},moveYear:function(t,e){return this.moveMonth(t,12*e)},moveAvailableDate:function(t,e,i){do{if(t=this[i](t,e),!this.dateWithinRange(t))return!1;i="moveDay"}while(this.dateIsDisabled(t));return t},weekOfDateIsDisabled:function(t){return-1!==_.inArray(t.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(e){return this.weekOfDateIsDisabled(e)||0<_.grep(this.o.datesDisabled,function(t){return n(e,t)}).length},dateWithinRange:function(t){return t>=this.o.startDate&&t<=this.o.endDate},keydown:function(t){if(this.picker.is(":visible")){var e,i,a=!1,s=this.focusDate||this.viewDate;switch(t.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),t.preventDefault(),t.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;e=37===t.keyCode||38===t.keyCode?-1:1,0===this.viewMode?t.ctrlKey?(i=this.moveAvailableDate(s,e,"moveYear"))&&this._trigger("changeYear",this.viewDate):t.shiftKey?(i=this.moveAvailableDate(s,e,"moveMonth"))&&this._trigger("changeMonth",this.viewDate):37===t.keyCode||39===t.keyCode?i=this.moveAvailableDate(s,e,"moveDay"):this.weekOfDateIsDisabled(s)||(i=this.moveAvailableDate(s,e,"moveWeek")):1===this.viewMode?(38!==t.keyCode&&40!==t.keyCode||(e*=4),i=this.moveAvailableDate(s,e,"moveMonth")):2===this.viewMode&&(38!==t.keyCode&&40!==t.keyCode||(e*=4),i=this.moveAvailableDate(s,e,"moveYear")),i&&(this.focusDate=this.viewDate=i,this.setValue(),this.fill(),t.preventDefault());break;case 13:if(!this.o.forceParse)break;s=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(s),a=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(t.preventDefault(),t.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}a&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))}else 40!==t.keyCode&&27!==t.keyCode||(this.show(),t.stopPropagation())},setViewMode:function(t){this.viewMode=t,this.picker.children("div").hide().filter(".datepicker-"+E.viewModes[this.viewMode].clsName).show(),this.updateNavArrows(),this._trigger("changeViewMode",new Date(this.viewDate))}};var h=function(t,e){_.data(t,"datepicker",this),this.element=_(t),this.inputs=_.map(e.inputs,function(t){return t.jquery?t[0]:t}),delete e.inputs,this.keepEmptyValues=e.keepEmptyValues,delete e.keepEmptyValues,s.call(_(this.inputs),e).on("changeDate",_.proxy(this.dateUpdated,this)),this.pickers=_.map(this.inputs,function(t){return _.data(t,"datepicker")}),this.updateDates()};h.prototype={updateDates:function(){this.dates=_.map(this.pickers,function(t){return t.getUTCDate()}),this.updateRanges()},updateRanges:function(){var i=_.map(this.dates,function(t){return t.valueOf()});_.each(this.pickers,function(t,e){e.setRange(i)})},clearDates:function(){_.each(this.pickers,function(t,e){e.clearDates()})},dateUpdated:function(t){if(!this.updating){this.updating=!0;var i=_.data(t.target,"datepicker");if(i!==M){var a=i.getUTCDate(),s=this.keepEmptyValues,e=_.inArray(t.target,this.inputs),n=e-1,r=e+1,o=this.inputs.length;if(-1!==e){if(_.each(this.pickers,function(t,e){e.getUTCDate()||e!==i&&s||e.setUTCDate(a)}),a<this.dates[n])for(;0<=n&&a<this.dates[n];)this.pickers[n--].setUTCDate(a);else if(a>this.dates[r])for(;r<o&&a>this.dates[r];)this.pickers[r++].setUTCDate(a);this.updateDates(),delete this.updating}}}},destroy:function(){_.map(this.pickers,function(t){t.destroy()}),_(this.inputs).off("changeDate",this.dateUpdated),delete this.element.data().datepicker},remove:t("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")};var a=_.fn.datepicker,s=function(r){var o,l=Array.apply(null,arguments);if(l.shift(),this.each(function(){var t=_(this),e=t.data("datepicker"),i="object"==typeof r&&r;if(!e){var a=function(t,e){var i=_(t).data(),a={},s=new RegExp("^"+e.toLowerCase()+"([A-Z])");function n(t,e){return e.toLowerCase()}for(var r in e=new RegExp("^"+e.toLowerCase()),i)e.test(r)&&(a[r.replace(s,n)]=i[r]);return a}(this,"date"),s=function(t){var i={};if(U[t]||(t=t.split("-")[0],U[t])){var a=U[t];return _.each(c,function(t,e){e in a&&(i[e]=a[e])}),i}}(_.extend({},d,a,i).language),n=_.extend({},d,s,a,i);t.hasClass("input-daterange")||n.inputs?(_.extend(n,{inputs:n.inputs||t.find("input").toArray()}),e=new h(this,n)):e=new k(this,n),t.data("datepicker",e)}"string"==typeof r&&"function"==typeof e[r]&&(o=e[r].apply(e,l))}),o===M||o instanceof k||o instanceof h)return this;if(1<this.length)throw new Error("Using only allowed for the collection of a single element ("+r+" function)");return o};_.fn.datepicker=s;var d=_.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:_.noop,beforeShowMonth:_.noop,beforeShowYear:_.noop,beforeShowDecade:_.noop,beforeShowCentury:_.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,updateViewDate:!0,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&#x00AB;",rightArrow:"&#x00BB;"},showWeekDays:!0},c=_.fn.datepicker.locale_opts=["format","rtl","weekStart"];_.fn.datepicker.Constructor=k;var U=_.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},E={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(t){if("function"==typeof t.toValue&&"function"==typeof t.toDisplay)return t;var e=t.replace(this.validParts,"\0").split("\0"),i=t.match(this.validParts);if(!e||!e.length||!i||0===i.length)throw new Error("Invalid date format.");return{separators:e,parts:i}},parseDate:function(t,e,i,s){if(!t)return M;if(t instanceof Date)return t;if("string"==typeof e&&(e=E.parseFormat(e)),e.toValue)return e.toValue(t,e,i);var a,n,r,o,l,h={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},d={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(t in d&&(t=d[t]),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(t)){for(a=t.match(/([\-+]\d+)([dmwy])/gi),t=new Date,o=0;o<a.length;o++)n=a[o].match(/([\-+]\d+)([dmwy])/i),r=Number(n[1]),l=h[n[2].toLowerCase()],t=k.prototype[l](t,r);return k.prototype._zero_utc_time(t)}a=t&&t.match(this.nonpunctuation)||[];var c,u,p={},f=["yyyy","yy","M","MM","m","mm","d","dd"],g={yyyy:function(t,e){return t.setUTCFullYear(s?(!0===(a=s)&&(a=10),(i=e)<100&&(i+=2e3)>(new Date).getFullYear()+a&&(i-=100),i):e);var i,a},m:function(t,e){if(isNaN(t))return t;for(e-=1;e<0;)e+=12;for(e%=12,t.setUTCMonth(e);t.getUTCMonth()!==e;)t.setUTCDate(t.getUTCDate()-1);return t},d:function(t,e){return t.setUTCDate(e)}};g.yy=g.yyyy,g.M=g.MM=g.mm=g.m,g.dd=g.d,t=b();var m=e.parts.slice();function v(){var t=this.slice(0,a[o].length),e=a[o].slice(0,t.length);return t.toLowerCase()===e.toLowerCase()}if(a.length!==m.length&&(m=_(m).filter(function(t,e){return-1!==_.inArray(e,f)}).toArray()),a.length===m.length){var y,w,D;for(o=0,y=m.length;o<y;o++){if(c=parseInt(a[o],10),n=m[o],isNaN(c))switch(n){case"MM":u=_(U[i].months).filter(v),c=_.inArray(u[0],U[i].months)+1;break;case"M":u=_(U[i].monthsShort).filter(v),c=_.inArray(u[0],U[i].monthsShort)+1}p[n]=c}for(o=0;o<f.length;o++)(D=f[o])in p&&!isNaN(p[D])&&(w=new Date(t),g[D](w,p[D]),isNaN(w)||(t=w))}return t},formatDate:function(t,e,i){if(!t)return"";if("string"==typeof e&&(e=E.parseFormat(e)),e.toDisplay)return e.toDisplay(t,e,i);var a={d:t.getUTCDate(),D:U[i].daysShort[t.getUTCDay()],DD:U[i].days[t.getUTCDay()],m:t.getUTCMonth()+1,M:U[i].monthsShort[t.getUTCMonth()],MM:U[i].months[t.getUTCMonth()],yy:t.getUTCFullYear().toString().substring(2),yyyy:t.getUTCFullYear()};a.dd=(a.d<10?"0":"")+a.d,a.mm=(a.m<10?"0":"")+a.m,t=[];for(var s=_.extend([],e.separators),n=0,r=e.parts.length;n<=r;n++)s.length&&t.push(s.shift()),t.push(a[e.parts[n]]);return t.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">'+d.templates.leftArrow+'</th><th colspan="5" class="datepicker-switch"></th><th class="next">'+d.templates.rightArrow+"</th></tr></thead>",contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};E.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+E.headTemplate+"<tbody></tbody>"+E.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+E.headTemplate+E.contTemplate+E.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+E.headTemplate+E.contTemplate+E.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+E.headTemplate+E.contTemplate+E.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+E.headTemplate+E.contTemplate+E.footTemplate+"</table></div></div>",_.fn.datepicker.DPGlobal=E,_.fn.datepicker.noConflict=function(){return _.fn.datepicker=a,this},_.fn.datepicker.version="1.8.0",_.fn.datepicker.deprecated=function(t){var e=window.console;e&&e.warn&&e.warn("DEPRECATED: "+t)},_(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(t){var e=_(this);e.data("datepicker")||(t.preventDefault(),s.call(e,"show"))}),_(function(){s.call(_('[data-provide="datepicker-inline"]'))})},s=[i(2)],void 0===(n="function"==typeof(a=r)?a.apply(e,s):a)||(t.exports=n)},function(t,e){t.exports=jQuery},function(t,e,i){"use strict";var a=i(4),r=i.n(a);jQuery&&"undefined"!=typeof jQuery&&(jQuery.fn.customSlider=function(e){var i=" Please consult the documentation for more information: https://designrevision.com/docs/shards";if(void 0===e)throw new Error("Shards's custom slider component requires a configuration object."+i);if([{prop:"start",example:"start: [25, 70]"},{prop:"range",example:"range: { 'min': 0, 'max': 100 }"}].map(function(t){if(void 0===e[t.prop])throw new Error("Shards's custom slider component requires a `"+t.prop+"` property passed in the configuration object. For example: `"+t.example+"`"+i)}),this.length&&void 0!==this[0])for(var a=0;a<this.length;a++){r.a.create(this[a],e);var s=jQuery(this[a]).find(".custom-slider-input");if(!s.length||s.length<e.start.length)throw new Error("You need to provide a .custom-slider-input for each start value.");var n=this;jQuery.each(s,function(i,t){i!==e.start.length&&n[a].noUiSlider.on("update",function(t,e){s[i].value=t[i]})})}return this})},function(t,e,i){var a,s,n;s=[],void 0===(n="function"==typeof(a=function(){"use strict";var K="11.1.0";function o(t){return null!=t}function G(t){t.preventDefault()}function s(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function Z(t,e,i){0<i&&(it(t,e),setTimeout(function(){at(t,e)},i))}function tt(t){return Math.max(Math.min(t,100),0)}function et(t){return Array.isArray(t)?t:[t]}function e(t){var e=(t=String(t)).split(".");return 1<e.length?e[1].length:0}function it(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function at(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function st(t){var e=void 0!==window.pageXOffset,i="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:i?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:i?t.documentElement.scrollTop:t.body.scrollTop}}function d(t,e){return 100/(e-t)}function c(t,e){return 100*e/(t[1]-t[0])}function u(t,e){for(var i=1;t>=e[i];)i+=1;return i}function i(t,e,i){if(i>=t.slice(-1)[0])return 100;var a,s,n=u(i,t),r=t[n-1],o=t[n],l=e[n-1],h=e[n];return l+(s=i,c(a=[r,o],a[0]<0?s+Math.abs(a[0]):s-a[0])/d(l,h))}function a(t,e,i,a){if(100===a)return a;var s,n,r=u(a,t),o=t[r-1],l=t[r];return i?(l-o)/2<a-o?l:o:e[r-1]?t[r-1]+(s=a-t[r-1],n=e[r-1],Math.round(s/n)*n):a}function n(t,e,i){var a;if("number"==typeof e&&(e=[e]),!Array.isArray(e))throw new Error("noUiSlider ("+K+"): 'range' contains invalid value.");if(!s(a="min"===t?0:"max"===t?100:parseFloat(t))||!s(e[0]))throw new Error("noUiSlider ("+K+"): 'range' value isn't numeric.");i.xPct.push(a),i.xVal.push(e[0]),a?i.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(i.xSteps[0]=e[1]),i.xHighestCompleteStep.push(0)}function r(t,e,i){if(!e)return!0;i.xSteps[t]=c([i.xVal[t],i.xVal[t+1]],e)/d(i.xPct[t],i.xPct[t+1]);var a=(i.xVal[t+1]-i.xVal[t])/i.xNumSteps[t],s=Math.ceil(Number(a.toFixed(3))-1),n=i.xVal[t]+i.xNumSteps[t]*s;i.xHighestCompleteStep[t]=n}function l(t,e,i){var a;this.xPct=[],this.xVal=[],this.xSteps=[i||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var s=[];for(a in t)t.hasOwnProperty(a)&&s.push([t[a],a]);for(s.length&&"object"==typeof s[0][0]?s.sort(function(t,e){return t[0][0]-e[0][0]}):s.sort(function(t,e){return t[0]-e[0]}),a=0;a<s.length;a++)n(s[a][1],s[a][0],this);for(this.xNumSteps=this.xSteps.slice(0),a=0;a<this.xNumSteps.length;a++)r(a,this.xNumSteps[a],this)}l.prototype.getMargin=function(t){var e=this.xNumSteps[0];if(e&&t/e%1!=0)throw new Error("noUiSlider ("+K+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&c(this.xVal,t)},l.prototype.toStepping=function(t){return t=i(this.xVal,this.xPct,t)},l.prototype.fromStepping=function(t){return function(t,e,i){if(100<=i)return t.slice(-1)[0];var a,s=u(i,e),n=t[s-1],r=t[s],o=e[s-1],l=e[s];return a=[n,r],(i-o)*d(o,l)*(a[1]-a[0])/100+a[0]}(this.xVal,this.xPct,t)},l.prototype.getStep=function(t){return t=a(this.xPct,this.xSteps,this.snap,t)},l.prototype.getNearbySteps=function(t){var e=u(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e-0],step:this.xNumSteps[e-0],highestStep:this.xHighestCompleteStep[e-0]}}},l.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},l.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var h={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};function p(t){if("object"==typeof(e=t)&&"function"==typeof e.to&&"function"==typeof e.from)return!0;var e;throw new Error("noUiSlider ("+K+"): 'format' requires 'to' and 'from' methods.")}function f(t,e){if(!s(e))throw new Error("noUiSlider ("+K+"): 'step' is not numeric.");t.singleStep=e}function g(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider ("+K+"): 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider ("+K+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+K+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new l(e,t.snap,t.singleStep)}function m(t,e){if(e=et(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+K+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function v(t,e){if("boolean"!=typeof(t.snap=e))throw new Error("noUiSlider ("+K+"): 'snap' option must be a boolean.")}function y(t,e){if("boolean"!=typeof(t.animate=e))throw new Error("noUiSlider ("+K+"): 'animate' option must be a boolean.")}function w(t,e){if("number"!=typeof(t.animationDuration=e))throw new Error("noUiSlider ("+K+"): 'animationDuration' option must be a number.")}function D(t,e){var i,a=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(i=1;i<t.handles;i++)a.push(e);a.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+K+"): 'connect' option doesn't match handle count.");a=e}t.connect=a}function b(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+K+"): 'orientation' option is invalid.")}}function k(t,e){if(!s(e))throw new Error("noUiSlider ("+K+"): 'margin' option must be numeric.");if(0!==e&&(t.margin=t.spectrum.getMargin(e),!t.margin))throw new Error("noUiSlider ("+K+"): 'margin' option is only supported on linear sliders.")}function C(t,e){if(!s(e))throw new Error("noUiSlider ("+K+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+K+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function x(t,e){if(!s(e)&&!Array.isArray(e))throw new Error("noUiSlider ("+K+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!s(e[0])&&!s(e[1]))throw new Error("noUiSlider ("+K+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){if(Array.isArray(e)||(e=[e,e]),!(t.padding=[t.spectrum.getMargin(e[0]),t.spectrum.getMargin(e[1])])===t.padding[0]||!1===t.padding[1])throw new Error("noUiSlider ("+K+"): 'padding' option is only supported on linear sliders.");if(t.padding[0]<0||t.padding[1]<0)throw new Error("noUiSlider ("+K+"): 'padding' option must be a positive number(s).");if(100<=t.padding[0]+t.padding[1])throw new Error("noUiSlider ("+K+"): 'padding' option must not exceed 100% of the range.")}}function S(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+K+"): 'direction' option was not recognized.")}}function _(t,e){if("string"!=typeof e)throw new Error("noUiSlider ("+K+"): 'behaviour' must be a string containing options.");var i=0<=e.indexOf("tap"),a=0<=e.indexOf("drag"),s=0<=e.indexOf("fixed"),n=0<=e.indexOf("snap"),r=0<=e.indexOf("hover");if(s){if(2!==t.handles)throw new Error("noUiSlider ("+K+"): 'fixed' behaviour must be used with 2 handles");k(t,t.start[1]-t.start[0])}t.events={tap:i||n,drag:a,fixed:s,snap:n,hover:r}}function M(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var i=0;i<t.handles;i++)t.tooltips.push(!0)}else{if(t.tooltips=et(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+K+"): must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider ("+K+"): 'tooltips' must be passed a formatter or 'false'.")})}}function T(t,e){p(t.ariaFormat=e)}function U(t,e){p(t.format=e)}function E(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider ("+K+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function N(t,e){if("object"!=typeof e)throw new Error("noUiSlider ("+K+"): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var i in t.cssClasses={},e)e.hasOwnProperty(i)&&(t.cssClasses[i]=t.cssPrefix+e[i]);else t.cssClasses=e}function nt(e){var i={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:h,format:h},a={step:{r:!1,t:f},start:{r:!0,t:m},connect:{r:!0,t:D},direction:{r:!0,t:S},snap:{r:!1,t:v},animate:{r:!1,t:y},animationDuration:{r:!1,t:w},range:{r:!0,t:g},orientation:{r:!1,t:b},margin:{r:!1,t:k},limit:{r:!1,t:C},padding:{r:!1,t:x},behaviour:{r:!0,t:_},ariaFormat:{r:!1,t:T},format:{r:!1,t:U},tooltips:{r:!1,t:M},cssPrefix:{r:!0,t:E},cssClasses:{r:!0,t:N}},s={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(a).forEach(function(t){if(!o(e[t])&&void 0===s[t]){if(a[t].r)throw new Error("noUiSlider ("+K+"): '"+t+"' is required.");return!0}a[t].t(i,o(e[t])?e[t]:s[t])}),i.pips=e.pips;var t=document.createElement("div"),n=void 0!==t.style.msTransform,r=void 0!==t.style.transform;i.transformRule=r?"transform":n?"msTransform":"webkitTransform";return i.style=[["left","top"],["right","bottom"]][i.dir][i.ort],i}function V(t,c,n){var l,h,o,r,d,e,u,s,p=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},f=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),D=t,g=[],m=[],v=0,b=c.spectrum,y=[],w={},k=t.ownerDocument,C=k.documentElement,x=k.body,S="rtl"===k.dir||1===c.ort?0:100;function _(t,e){var i=k.createElement("div");return e&&it(i,e),t.appendChild(i),i}function M(t,e){return!!e&&_(t,c.cssClasses.connect)}function i(t,e){return!!c.tooltips[e]&&_(t.firstChild,c.cssClasses.tooltip)}function T(e,a,s){var n=k.createElement("div"),r=[c.cssClasses.valueNormal,c.cssClasses.valueLarge,c.cssClasses.valueSub],o=[c.cssClasses.markerNormal,c.cssClasses.markerLarge,c.cssClasses.markerSub],l=[c.cssClasses.valueHorizontal,c.cssClasses.valueVertical],h=[c.cssClasses.markerHorizontal,c.cssClasses.markerVertical];function d(t,e){var i=e===c.cssClasses.value,a=i?r:o;return e+" "+(i?l:h)[c.ort]+" "+a[t]}return it(n,c.cssClasses.pips),it(n,0===c.ort?c.cssClasses.pipsHorizontal:c.cssClasses.pipsVertical),Object.keys(e).forEach(function(t){!function(t,e){e[1]=e[1]&&a?a(e[0],e[1]):e[1];var i=_(n,!1);i.className=d(e[1],c.cssClasses.marker),i.style[c.style]=t+"%",e[1]&&((i=_(n,!1)).className=d(e[1],c.cssClasses.value),i.setAttribute("data-value",e[0]),i.style[c.style]=t+"%",i.innerText=s.to(e[0]))}(t,e[t])}),n}function U(){var t;d&&((t=d).parentElement.removeChild(t),d=null)}function E(t){U();var p,f,g,m,e,i,v,y,w,a=t.mode,s=t.density||1,n=t.filter||!1,r=function(t,e,i){if("range"===t||"steps"===t)return b.xVal;if("count"===t){if(e<2)throw new Error("noUiSlider ("+K+"): 'values' (>= 2) required for mode 'count'.");var a=e-1,s=100/a;for(e=[];a--;)e[a]=a*s;e.push(100),t="positions"}return"positions"===t?e.map(function(t){return b.fromStepping(i?b.getStep(t):t)}):"values"===t?i?e.map(function(t){return b.fromStepping(b.getStep(b.toStepping(t)))}):e:void 0}(a,t.values||!1,t.stepped||!1),o=(p=s,f=a,g=r,m={},e=b.xVal[0],i=b.xVal[b.xVal.length-1],y=v=!1,w=0,(g=g.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==e&&(g.unshift(e),v=!0),g[g.length-1]!==i&&(g.push(i),y=!0),g.forEach(function(t,e){var i,a,s,n,r,o,l,h,d,c=t,u=g[e+1];if("steps"===f&&(i=b.xNumSteps[e]),i||(i=u-c),!1!==c&&void 0!==u)for(i=Math.max(i,1e-7),a=c;a<=u;a=(a+i).toFixed(7)/1){for(l=(r=(n=b.toStepping(a))-w)/p,d=r/(h=Math.round(l)),s=1;s<=h;s+=1)m[(w+s*d).toFixed(5)]=["x",0];o=-1<g.indexOf(a)?1:"steps"===f?2:0,!e&&v&&(o=0),a===u&&y||(m[n.toFixed(5)]=[a,o]),w=n}}),m),l=t.format||{to:Math.round};return d=D.appendChild(T(o,n,l))}function N(){var t=l.getBoundingClientRect(),e="offset"+["Width","Height"][c.ort];return 0===c.ort?t.width||l[e]:t.height||l[e]}function V(a,s,n,r){var e=function(t){return!!(t=function(t,e,i){var a,s,n=0===t.type.indexOf("touch"),r=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer");0===t.type.indexOf("MSPointer")&&(o=!0);if(n){var l=function(t){return t.target===i||i.contains(t.target)};if("touchstart"===t.type){var h=Array.prototype.filter.call(t.touches,l);if(1<h.length)return!1;a=h[0].pageX,s=h[0].pageY}else{var d=Array.prototype.find.call(t.changedTouches,l);if(!d)return!1;a=d.pageX,s=d.pageY}}e=e||st(k),(r||o)&&(a=t.clientX+e.x,s=t.clientY+e.y);return t.pageOffset=e,t.points=[a,s],t.cursor=r||o,t}(t,r.pageOffset,r.target||s))&&(!(D.hasAttribute("disabled")&&!r.doNotReject)&&(e=D,i=c.cssClasses.tap,!((e.classList?e.classList.contains(i):new RegExp("\\b"+i+"\\b").test(e.className))&&!r.doNotReject)&&(!(a===p.start&&void 0!==t.buttons&&1<t.buttons)&&((!r.hover||!t.buttons)&&(f||t.preventDefault(),t.calcPoint=t.points[c.ort],void n(t,r))))));var e,i},i=[];return a.split(" ").forEach(function(t){s.addEventListener(t,e,!!f&&{passive:!0}),i.push([t,e])}),i}function A(t){var e,i,a,s,n,r,o=100*(t-(e=l,i=c.ort,a=e.getBoundingClientRect(),s=e.ownerDocument,n=s.documentElement,r=st(s),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(r.x=0),i?a.top+r.y-n.clientTop:a.left+r.x-n.clientLeft))/N();return o=tt(o),c.dir?100-o:o}function O(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&P(t,e)}function F(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return P(t,e);var i=(c.dir?-1:1)*(t.calcPoint-e.startCalcPoint);R(0<i,100*i/e.baseSize,e.locations,e.handleNumbers)}function P(t,e){e.handle&&(at(e.handle,c.cssClasses.active),v-=1),e.listeners.forEach(function(t){C.removeEventListener(t[0],t[1])}),0===v&&(at(D,c.cssClasses.drag),q(),t.cursor&&(x.style.cursor="",x.removeEventListener("selectstart",G))),e.handleNumbers.forEach(function(t){z("change",t),z("set",t),z("end",t)})}function Y(t,e){var i;if(1===e.handleNumbers.length){var a=h[e.handleNumbers[0]];if(a.hasAttribute("disabled"))return!1;i=a.children[0],v+=1,it(i,c.cssClasses.active)}t.stopPropagation();var s=[],n=V(p.move,C,F,{target:t.target,handle:i,listeners:s,startCalcPoint:t.calcPoint,baseSize:N(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:g.slice()}),r=V(p.end,C,P,{target:t.target,handle:i,listeners:s,doNotReject:!0,handleNumbers:e.handleNumbers}),o=V("mouseout",C,O,{target:t.target,handle:i,listeners:s,doNotReject:!0,handleNumbers:e.handleNumbers});s.push.apply(s,n.concat(r,o)),t.cursor&&(x.style.cursor=getComputedStyle(t.target).cursor,1<h.length&&it(D,c.cssClasses.drag),x.addEventListener("selectstart",G,!1)),e.handleNumbers.forEach(function(t){z("start",t)})}function a(t){t.stopPropagation();var a,s,n,e=A(t.calcPoint),i=(a=e,n=!(s=100),h.forEach(function(t,e){if(!t.hasAttribute("disabled")){var i=Math.abs(g[e]-a);(i<s||100===i&&100===s)&&(n=e,s=i)}}),n);if(!1===i)return!1;c.events.snap||Z(D,c.cssClasses.tap,c.animationDuration),J(i,e,!0,!0),q(),z("slide",i,!0),z("update",i,!0),z("change",i,!0),z("set",i,!0),c.events.snap&&Y(t,{handleNumbers:[i]})}function W(t){var e=A(t.calcPoint),i=b.getStep(e),a=b.fromStepping(i);Object.keys(w).forEach(function(t){"hover"===t.split(".")[0]&&w[t].forEach(function(t){t.call(r,a)})})}function j(t,e){w[t]=w[t]||[],w[t].push(e),"update"===t.split(".")[0]&&h.forEach(function(t,e){z("update",e)})}function z(i,a,s){Object.keys(w).forEach(function(t){var e=t.split(".")[0];i===e&&w[t].forEach(function(t){t.call(r,y.map(c.format.to),a,y.slice(),s||!1,g.slice())})})}function L(t){return t+"%"}function H(t,e,i,a,s,n){return 1<h.length&&(a&&0<e&&(i=Math.max(i,t[e-1]+c.margin)),s&&e<h.length-1&&(i=Math.min(i,t[e+1]-c.margin))),1<h.length&&c.limit&&(a&&0<e&&(i=Math.min(i,t[e-1]+c.limit)),s&&e<h.length-1&&(i=Math.max(i,t[e+1]-c.limit))),c.padding&&(0===e&&(i=Math.max(i,c.padding[0])),e===h.length-1&&(i=Math.min(i,100-c.padding[1]))),!((i=tt(i=b.getStep(i)))===t[e]&&!n)&&i}function I(t,e){var i=c.ort;return(i?e:t)+", "+(i?t:e)}function R(t,a,i,e){var s=i.slice(),n=[!t,t],r=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){var i=H(s,t,s[t]+a,n[e],r[e],!1);!1===i?a=0:(a=i-s[t],s[t]=i)}):n=r=[!0];var o=!1;e.forEach(function(t,e){o=J(t,i[t]+a,n[e],r[e])||o}),o&&e.forEach(function(t){z("update",t),z("slide",t)})}function B(t,e){return c.dir?100-t-e:t}function q(){m.forEach(function(t){var e=50<g[t]?-1:1,i=3+(h.length+e*t);h[t].style.zIndex=i})}function J(t,e,i,a){return!1!==(e=H(g,t,e,i,a,!1))&&(function(t,e){g[t]=e,y[t]=b.fromStepping(e);var i="translate("+I(L(B(e,0)-S),"0")+")";h[t].style[c.transformRule]=i,Q(t),Q(t+1)}(t,e),!0)}function Q(t){if(o[t]){var e=0,i=100;0!==t&&(e=g[t-1]),t!==o.length-1&&(i=g[t]);var a=i-e,s="translate("+I(L(B(e,a)),"0")+")",n="scale("+I(a/100,"1")+")";o[t].style[c.transformRule]=s+" "+n}}function X(t,e){var a=et(t),i=void 0===g[0];e=void 0===e||!!e,c.animate&&!i&&Z(D,c.cssClasses.tap,c.animationDuration),m.forEach(function(t){var e,i;J(t,(e=a[t],i=t,null===e||!1===e||void 0===e?g[i]:("number"==typeof e&&(e=String(e)),e=c.format.from(e),!1===(e=b.toStepping(e))||isNaN(e)?g[i]:e)),!0,!1)}),m.forEach(function(t){J(t,g[t],!0,!0)}),q(),m.forEach(function(t){z("update",t),null!==a[t]&&e&&z("set",t)})}function $(){var t=y.map(c.format.to);return 1===t.length?t[0]:t}return it(e=D,c.cssClasses.target),0===c.dir?it(e,c.cssClasses.ltr):it(e,c.cssClasses.rtl),0===c.ort?it(e,c.cssClasses.horizontal):it(e,c.cssClasses.vertical),l=_(e,c.cssClasses.base),function(t,e){var i,a,s,n=_(e,c.cssClasses.connects);h=[],(o=[]).push(M(n,t[0]));for(var r=0;r<c.handles;r++)h.push((i=r,s=void 0,a=_(e,c.cssClasses.origin),(s=_(a,c.cssClasses.handle)).setAttribute("data-handle",i),s.setAttribute("tabindex","0"),s.setAttribute("role","slider"),s.setAttribute("aria-orientation",c.ort?"vertical":"horizontal"),0===i?it(s,c.cssClasses.handleLower):i===c.handles-1&&it(s,c.cssClasses.handleUpper),a)),m[r]=r,o.push(M(n,t[r+1]))}(c.connect,l),(u=c.events).fixed||h.forEach(function(t,e){V(p.start,t.children[0],Y,{handleNumbers:[e]})}),u.tap&&V(p.start,l,a,{}),u.hover&&V(p.move,l,W,{hover:!0}),u.drag&&o.forEach(function(t,e){if(!1!==t&&0!==e&&e!==o.length-1){var i=h[e-1],a=h[e],s=[t];it(t,c.cssClasses.draggable),u.fixed&&(s.push(i.children[0]),s.push(a.children[0])),s.forEach(function(t){V(p.start,t,Y,{handles:[i,a],handleNumbers:[e-1,e]})})}}),X(c.start),r={destroy:function(){for(var t in c.cssClasses)c.cssClasses.hasOwnProperty(t)&&at(D,c.cssClasses[t]);for(;D.firstChild;)D.removeChild(D.firstChild);delete D.noUiSlider},steps:function(){return g.map(function(t,e){var i=b.getNearbySteps(t),a=y[e],s=i.thisStep.step,n=null;!1!==s&&a+s>i.stepAfter.startValue&&(s=i.stepAfter.startValue-a),n=a>i.thisStep.startValue?i.thisStep.step:!1!==i.stepBefore.step&&a-i.stepBefore.highestStep,100===t?s=null:0===t&&(n=null);var r=b.countStepDecimals();return null!==s&&!1!==s&&(s=Number(s.toFixed(r))),null!==n&&!1!==n&&(n=Number(n.toFixed(r))),[n,s]})},on:j,off:function(t){var a=t&&t.split(".")[0],s=a&&t.substring(a.length);Object.keys(w).forEach(function(t){var e=t.split(".")[0],i=t.substring(e.length);a&&a!==e||s&&s!==i||delete w[t]})},get:$,set:X,reset:function(t){X(c.start,t)},__moveHandles:function(t,e,i){R(t,e,g,i)},options:n,updateOptions:function(e,t){var i=$(),a=["margin","limit","padding","range","animate","snap","step","format"];a.forEach(function(t){void 0!==e[t]&&(n[t]=e[t])});var s=nt(n);a.forEach(function(t){void 0!==e[t]&&(c[t]=s[t])}),b=s.spectrum,c.margin=s.margin,c.limit=s.limit,c.padding=s.padding,c.pips&&E(c.pips),g=[],X(e.start||i,t)},target:D,removePips:U,pips:E},c.pips&&E(c.pips),c.tooltips&&(s=h.map(i),j("update",function(t,e,i){if(s[e]){var a=t[e];!0!==c.tooltips[e]&&(a=c.tooltips[e].to(i[e])),s[e].innerHTML=a}})),j("update",function(t,e,r,i,o){m.forEach(function(t){var e=h[t],i=H(g,t,0,!0,!0,!0),a=H(g,t,100,!0,!0,!0),s=o[t],n=c.ariaFormat.to(r[t]);e.children[0].setAttribute("aria-valuemin",i.toFixed(1)),e.children[0].setAttribute("aria-valuemax",a.toFixed(1)),e.children[0].setAttribute("aria-valuenow",s.toFixed(1)),e.children[0].setAttribute("aria-valuetext",n)})}),r}return{version:K,create:function(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+K+"): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider ("+K+"): Slider was already initialized.");var i=V(t,nt(e),e);return t.noUiSlider=i}}})?a.apply(e,s):a)||(t.exports=n)}]);

/***/ }),

    /***/
    "./node_modules/style-loader/lib/addStyles.js":
    /*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

        var stylesInDom = {};

        var memoize = function (fn) {
            var memo;

            return function () {
                if (typeof memo === "undefined") memo = fn.apply(this, arguments);
                return memo;
            };
        };

        var isOldIE = memoize(function () {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            return window && document && document.all && !window.atob;
        });

        var getTarget = function (target, parent) {
            if (parent) {
                return parent.querySelector(target);
            }
            return document.querySelector(target);
        };

        var getElement = (function (fn) {
            var memo = {};

            return function (target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                    return target();
                }
                if (typeof memo[target] === "undefined") {
                    var styleTarget = getTarget.call(this, target, parent);
                    // Special case to return head of iframe instead of iframe itself
                    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                        try {
                            // This will throw an exception if access to iframe is blocked
                            // due to cross-origin restrictions
                            styleTarget = styleTarget.contentDocument.head;
                        } catch (e) {
                            styleTarget = null;
                        }
                    }
                    memo[target] = styleTarget;
                }
                return memo[target]
            };
        })();

        var singleton = null;
        var singletonCounter = 0;
        var stylesInsertedAtTop = [];

        var fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

        module.exports = function (list, options) {
            if (typeof DEBUG !== "undefined" && DEBUG) {
                if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
            }

            options = options || {};

            options.attrs = typeof options.attrs === "object" ? options.attrs : {};

            // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page
            if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

            // By default, add <style> tags to the <head> element
            if (!options.insertInto) options.insertInto = "head";

            // By default, add <style> tags to the bottom of the target
            if (!options.insertAt) options.insertAt = "bottom";

            var styles = listToStyles(list, options);

            addStylesToDom(styles, options);

            return function update(newList) {
                var mayRemove = [];

                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];

                    domStyle.refs--;
                    mayRemove.push(domStyle);
                }

                if (newList) {
                    var newStyles = listToStyles(newList, options);
                    addStylesToDom(newStyles, options);
                }

                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];

                    if (domStyle.refs === 0) {
                        for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        };

        function addStylesToDom(styles, options) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];

                if (domStyle) {
                    domStyle.refs++;

                    for (var j = 0; j < domStyle.parts.length; j++) {
                        domStyle.parts[j](item.parts[j]);
                    }

                    for (; j < item.parts.length; j++) {
                        domStyle.parts.push(addStyle(item.parts[j], options));
                    }
                } else {
                    var parts = [];

                    for (var j = 0; j < item.parts.length; j++) {
                        parts.push(addStyle(item.parts[j], options));
                    }

                    stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
                }
            }
        }

        function listToStyles(list, options) {
            var styles = [];
            var newStyles = {};

            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var id = options.base ? item[0] + options.base : item[0];
                var css = item[1];
                var media = item[2];
                var sourceMap = item[3];
                var part = {css: css, media: media, sourceMap: sourceMap};

                if (!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
                else newStyles[id].parts.push(part);
            }

            return styles;
        }

        function insertStyleElement(options, style) {
            var target = getElement(options.insertInto);

            if (!target) {
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            }

            var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

            if (options.insertAt === "top") {
                if (!lastStyleElementInsertedAtTop) {
                    target.insertBefore(style, target.firstChild);
                } else if (lastStyleElementInsertedAtTop.nextSibling) {
                    target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
                } else {
                    target.appendChild(style);
                }
                stylesInsertedAtTop.push(style);
            } else if (options.insertAt === "bottom") {
                target.appendChild(style);
            } else if (typeof options.insertAt === "object" && options.insertAt.before) {
                var nextSibling = getElement(options.insertAt.before, target);
                target.insertBefore(style, nextSibling);
            } else {
                throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            }
        }

        function removeStyleElement(style) {
            if (style.parentNode === null) return false;
            style.parentNode.removeChild(style);

            var idx = stylesInsertedAtTop.indexOf(style);
            if (idx >= 0) {
                stylesInsertedAtTop.splice(idx, 1);
            }
        }

        function createStyleElement(options) {
            var style = document.createElement("style");

            if (options.attrs.type === undefined) {
                options.attrs.type = "text/css";
            }

            if (options.attrs.nonce === undefined) {
                var nonce = getNonce();
                if (nonce) {
                    options.attrs.nonce = nonce;
                }
            }

            addAttrs(style, options.attrs);
            insertStyleElement(options, style);

            return style;
        }

        function createLinkElement(options) {
            var link = document.createElement("link");

            if (options.attrs.type === undefined) {
                options.attrs.type = "text/css";
            }
            options.attrs.rel = "stylesheet";

            addAttrs(link, options.attrs);
            insertStyleElement(options, link);

            return link;
        }

        function addAttrs(el, attrs) {
            Object.keys(attrs).forEach(function (key) {
                el.setAttribute(key, attrs[key]);
            });
        }

        function getNonce() {
            if (false) {
            }

            return __webpack_require__.nc;
        }

        function addStyle(obj, options) {
            var style, update, remove, result;

            // If a transform function was defined, run it on the css
            if (options.transform && obj.css) {
                result = typeof options.transform === 'function'
                    ? options.transform(obj.css)
                    : options.transform.default(obj.css);

                if (result) {
                    // If transform returns a value, use that instead of the original css.
                    // This allows running runtime transformations on the css.
                    obj.css = result;
                } else {
                    // If the transform function returns a falsy value, don't add this css.
                    // This allows conditional loading of css
                    return function () {
                        // noop
                    };
                }
            }

            if (options.singleton) {
                var styleIndex = singletonCounter++;

                style = singleton || (singleton = createStyleElement(options));

                update = applyToSingletonTag.bind(null, style, styleIndex, false);
                remove = applyToSingletonTag.bind(null, style, styleIndex, true);

            } else if (
                obj.sourceMap &&
                typeof URL === "function" &&
                typeof URL.createObjectURL === "function" &&
                typeof URL.revokeObjectURL === "function" &&
                typeof Blob === "function" &&
                typeof btoa === "function"
            ) {
                style = createLinkElement(options);
                update = updateLink.bind(null, style, options);
                remove = function () {
                    removeStyleElement(style);

                    if (style.href) URL.revokeObjectURL(style.href);
                };
            } else {
                style = createStyleElement(options);
                update = applyToTag.bind(null, style);
                remove = function () {
                    removeStyleElement(style);
                };
            }

            update(obj);

            return function updateStyle(newObj) {
                if (newObj) {
                    if (
                        newObj.css === obj.css &&
                        newObj.media === obj.media &&
                        newObj.sourceMap === obj.sourceMap
                    ) {
                        return;
                    }

                    update(obj = newObj);
                } else {
                    remove();
                }
            };
        }

        var replaceText = (function () {
            var textStore = [];

            return function (index, replacement) {
                textStore[index] = replacement;

                return textStore.filter(Boolean).join('\n');
            };
        })();

        function applyToSingletonTag(style, index, remove, obj) {
            var css = remove ? "" : obj.css;

            if (style.styleSheet) {
                style.styleSheet.cssText = replaceText(index, css);
            } else {
                var cssNode = document.createTextNode(css);
                var childNodes = style.childNodes;

                if (childNodes[index]) style.removeChild(childNodes[index]);

                if (childNodes.length) {
                    style.insertBefore(cssNode, childNodes[index]);
                } else {
                    style.appendChild(cssNode);
                }
            }
        }

        function applyToTag(style, obj) {
            var css = obj.css;
            var media = obj.media;

            if (media) {
                style.setAttribute("media", media)
            }

            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                while (style.firstChild) {
                    style.removeChild(style.firstChild);
                }

                style.appendChild(document.createTextNode(css));
            }
        }

        function updateLink(link, options, obj) {
            var css = obj.css;
            var sourceMap = obj.sourceMap;

            /*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
            var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

            if (options.convertToAbsoluteUrls || autoFixUrls) {
                css = fixUrls(css);
            }

            if (sourceMap) {
                // http://stackoverflow.com/a/26603875
                css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
            }

            var blob = new Blob([css], {type: "text/css"});

            var oldSrc = link.href;

            link.href = URL.createObjectURL(blob);

            if (oldSrc) URL.revokeObjectURL(oldSrc);
        }


        /***/
    }),

    /***/
    "./node_modules/style-loader/lib/urls.js":
    /*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {


        /**
         * When source maps are enabled, `style-loader` uses a link element with a data-uri to
         * embed the css on the page. This breaks all relative urls because now they are relative to a
         * bundle instead of the current page.
         *
         * One solution is to only use full urls, but that may be impossible.
         *
         * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
         *
         * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
         *
         */

        module.exports = function (css) {
            // get current location
            var location = typeof window !== "undefined" && window.location;

            if (!location) {
                throw new Error("fixUrls requires window.location");
            }

            // blank or null?
            if (!css || typeof css !== "string") {
                return css;
            }

            var baseUrl = location.protocol + "//" + location.host;
            var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

            // convert each url(...)
            /*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
            var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
                // strip quotes (if they exist)
                var unquotedOrigUrl = origUrl
                    .trim()
                    .replace(/^"(.*)"$/, function (o, $1) {
                        return $1;
                    })
                    .replace(/^'(.*)'$/, function (o, $1) {
                        return $1;
                    });

                // already a full url? no change
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
                    return fullMatch;
                }

                // convert the url to a full url
                var newUrl;

                if (unquotedOrigUrl.indexOf("//") === 0) {
                    //TODO: should we add protocol?
                    newUrl = unquotedOrigUrl;
                } else if (unquotedOrigUrl.indexOf("/") === 0) {
                    // path should be relative to the base url
                    newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
                } else {
                    // path should be relative to current directory
                    newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
                }

                // send back the fixed url(...)
                return "url(" + JSON.stringify(newUrl) + ")";
            });

            // send back the fixed css
            return fixedCss;
        };


        /***/
    }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
        /* harmony import */
        var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-ui/dist/css/shards.min.css */ "./node_modules/shards-ui/dist/css/shards.min.css");
        /* harmony import */
        var shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_min_css__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
        /* harmony import */
        var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var popper_js_dist_umd_popper_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popper.js/dist/umd/popper.min */ "./node_modules/popper.js/dist/umd/popper.min.js");
        /* harmony import */
        var popper_js_dist_umd_popper_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(popper_js_dist_umd_popper_min__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */
        var bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");
        /* harmony import */
        var bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */
        var shards_ui_dist_js_shards_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shards-ui/dist/js/shards.min */ "./node_modules/shards-ui/dist/js/shards.min.js");
        /* harmony import */
        var shards_ui_dist_js_shards_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_js_shards_min__WEBPACK_IMPORTED_MODULE_5__);


        $(window).on("load", function () {
            $(".loader").fadeOut(), $("#preloader").fadeOut("slow"), $("body").css({
                overflow: "visible"
            });
        });

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/divergent/dbms-project/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/divergent/dbms-project/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });
