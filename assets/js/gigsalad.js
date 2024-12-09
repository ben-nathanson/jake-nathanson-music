function GsContactForm() {
    (this.formKey = null),
        (this.path = ""),
        (this.domain = "www.gigsalad.com"),
        (this.protocol = "https"),
        (this.maxWidth = "540px"),
        (this.textColor = null),
        (this.linkColor = null),
        (this.backgroundColor = null),
        (this.styleSheet = null),
        (this.initialize = function (options) {
            for (key in options) this[key] = options[key];
            "string" == typeof this.formKey && (this.path = "api/request/" + this.formKey.replace("/quote-widget", ""));
        }),
        (this.generateFrameMarkup = function () {
            var queryString = "",
                queryData = [];
            return (
                this.textColor && queryData.push("textColor=" + encodeURIComponent(this.textColor)),
                this.linkColor && queryData.push("linkColor=" + encodeURIComponent(this.linkColor)),
                this.backgroundColor && queryData.push("backgroundColor=" + encodeURIComponent(this.backgroundColor)),
                this.styleSheet && queryData.push("styleSheet=" + encodeURIComponent(this.styleSheet)),
                queryData.length && (queryString = "?" + queryData.join("&")),
                '<iframe id="Gscq_form" width="100%" height="100%" scrolling="no" style="border:none!important" src="' + this.protocol + "://" + this.domain + "/" + this.path + "/quote-widget" + queryString + '"></iframe>'
            );
        }),
        (this.display = function () {
            var el = document.getElementById("gigsalad_quote_widget");
            (el.style.width = "100%"),
                (el.style.maxWidth = this.maxWidth),
                (el.innerHTML = this.generateFrameMarkup()),
                Array.prototype.forEach ||
                    (Array.prototype.forEach = function (a) {
                        "use strict";
                        if (null == this || "function" != typeof a) throw new TypeError();
                        for (var b = Object(this), c = b.length >>> 0, d = arguments.length >= 2 ? arguments[1] : void 0, e = 0; c > e; e++) e in b && a.call(d, b[e], e, b);
                    }),
                Function.prototype.bind ||
                    (Function.prototype.bind = function (a) {
                        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                        var b = Array.prototype.slice.call(arguments, 1),
                            c = this,
                            d = function () {},
                            e = function () {
                                return c.apply(this instanceof d ? this : a, b.concat(Array.prototype.slice.call(arguments)));
                            };
                        return (d.prototype = this.prototype), (e.prototype = new d()), e;
                    }),
                Array.prototype.forEach ||
                    (Array.prototype.forEach = function (a, b) {
                        if (null === this) throw new TypeError(" this is null or not defined");
                        if ("function" != typeof a) throw new TypeError(a + " is not a function");
                        for (var c = Object(this), d = c.length >>> 0, e = 0; d > e; e++) e in c && a.call(b, c[e], e, c);
                    }),
                (function (a) {
                    "use strict";
                    function b(a, b, c) {
                        "addEventListener" in window ? a.addEventListener(b, c, !1) : "attachEvent" in window && a.attachEvent("on" + b, c);
                    }
                    function c(a, b, c) {
                        "removeEventListener" in window ? a.removeEventListener(b, c, !1) : "detachEvent" in window && a.detachEvent("on" + b, c);
                    }
                    function f(a) {
                        return (
                            K +
                            "[" +
                            (function (a) {
                                var b = "Host page: " + a;
                                return window.top !== window.self && (b = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + a : "Nested host page: " + a), b;
                            })(a) +
                            "]"
                        );
                    }
                    function g(a) {
                        return P[a] ? P[a].log : G;
                    }
                    function h(a, b) {
                        k("log", a, b, g(a));
                    }
                    function i(a, b) {
                        k("info", a, b, g(a));
                    }
                    function j(a, b) {
                        k("warn", a, b, !0);
                    }
                    function k(a, b, c, d) {
                        !0 === d && "object" == typeof window.console && console[a](f(b), c);
                    }
                    function l(a) {
                        function d() {
                            f("Height"),
                                f("Width"),
                                t(
                                    function () {
                                        s(U), p(V), I("resizedCallback", U);
                                    },
                                    U,
                                    "init"
                                );
                        }
                        function f(a) {
                            var b = Number(P[V]["max" + a]),
                                c = Number(P[V]["min" + a]),
                                d = a.toLowerCase(),
                                e = Number(U[d]);
                            h(V, "Checking " + d + " is in range " + c + "-" + b), c > e && ((e = c), h(V, "Set " + d + " to min value")), e > b && ((e = b), h(V, "Set " + d + " to max value")), (U[d] = "" + e);
                        }
                        function w(a) {
                            return T.substr(T.indexOf(":") + J + a);
                        }
                        function A(a, b) {
                            x(function () {
                                u(
                                    "Send Page Info",
                                    "pageInfo:" +
                                        (function () {
                                            var a = document.body.getBoundingClientRect(),
                                                b = U.iframe.getBoundingClientRect();
                                            return JSON.stringify({
                                                iframeHeight: b.height,
                                                iframeWidth: b.width,
                                                clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                                                clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                                                offsetTop: parseInt(b.top - a.top, 10),
                                                offsetLeft: parseInt(b.left - a.left, 10),
                                                scrollTop: window.pageYOffset,
                                                scrollLeft: window.pageXOffset,
                                            });
                                        })(),
                                    a,
                                    b
                                );
                            }, 32);
                        }
                        function E(a) {
                            var b = a.getBoundingClientRect();
                            return o(V), { x: Math.floor(Number(b.left) + Number(M.x)), y: Math.floor(Number(b.top) + Number(M.y)) };
                        }
                        function F(a) {
                            var e = a ? E(U.iframe) : { x: 0, y: 0 },
                                f = { x: Number(U.width) + e.x, y: Number(U.height) + e.y };
                            h(V, "Reposition requested from iFrame (offset x:" + e.x + " y:" + e.y + ")"),
                                window.top !== window.self
                                    ? window.parentIFrame
                                        ? window.parentIFrame["scrollTo" + (a ? "Offset" : "")](f.x, f.y)
                                        : j(V, "Unable to scroll to requested position, window.parentIFrame not found")
                                    : ((M = f), G(), h(V, "--"));
                        }
                        function G() {
                            !1 !== I("scrollCallback", M) ? p(V) : q();
                        }
                        function I(a, b) {
                            return m(V, a, b);
                        }
                        var T = a.data,
                            U = {},
                            V = null;
                        "[iFrameResizerChild]Ready" === T
                            ? (function () {
                                  for (var a in P) u("iFrame requested init", v(a), document.getElementById(a), a);
                              })()
                            : K === ("" + T).substr(0, L) && T.substr(L).split(":")[0] in P
                            ? ((U = (function () {
                                  var a = T.substr(L).split(":");
                                  return { iframe: P[a[0]].iframe, id: a[0], height: a[1], width: a[2], type: a[3] };
                              })()),
                              (V = U.id),
                              (P[V].loaded = !0),
                              !(function () {
                                  var a = U.type in { true: 1, false: 1, undefined: 1 };
                                  return a && h(V, "Ignoring init message from meta parent page"), a;
                              })() &&
                                  (function (a) {
                                      var b = !0;
                                      return P[a] || ((b = !1), j(U.type + " No settings for " + a + ". Message was: " + T)), b;
                                  })(V) &&
                                  (h(V, "Received: " + T),
                                  (function () {
                                      var a = !0;
                                      return null === U.iframe && (j(V, "IFrame (" + U.id + ") not found"), (a = !1)), a;
                                  })() &&
                                      (function () {
                                          var c = a.origin,
                                              d = P[V].checkOrigin;
                                          if (
                                              d &&
                                              "" + c != "null" &&
                                              !(d.constructor === Array
                                                  ? (function () {
                                                        var a = 0,
                                                            b = !1;
                                                        for (h(V, "Checking connection is from allowed list of origins: " + d); a < d.length; a++)
                                                            if (d[a] === c) {
                                                                b = !0;
                                                                break;
                                                            }
                                                        return b;
                                                    })()
                                                  : (function () {
                                                        var a = P[V].remoteHost;
                                                        return h(V, "Checking connection is from: " + a), c === a;
                                                    })())
                                          )
                                              throw new Error(
                                                  "Unexpected message received from: " +
                                                      c +
                                                      " for " +
                                                      U.iframe.id +
                                                      ". Message was: " +
                                                      a.data +
                                                      ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
                                              );
                                          return !0;
                                      })() &&
                                      (function () {
                                          switch ((P[V].firstRun && (P[V].firstRun = !1), U.type)) {
                                              case "close":
                                                  n(U.iframe);
                                                  break;
                                              case "message":
                                                  !(function (a) {
                                                      h(V, "MessageCallback passed: {iframe: " + U.iframe.id + ", message: " + a + "}"), I("messageCallback", { iframe: U.iframe, message: JSON.parse(a) }), h(V, "--");
                                                  })(w(6));
                                                  break;
                                              case "scrollTo":
                                                  F(!1);
                                                  break;
                                              case "scrollToOffset":
                                                  F(!0);
                                                  break;
                                              case "pageInfo":
                                                  A(P[V].iframe, V),
                                                      (function () {
                                                          function a(a, b) {
                                                              function c() {
                                                                  P[f] ? A(P[f].iframe, f) : d();
                                                              }
                                                              ["scroll", "resize"].forEach(function (d) {
                                                                  h(f, a + d + " listener for sendPageInfo"), b(window, d, c);
                                                              });
                                                          }
                                                          function d() {
                                                              a("Remove ", c);
                                                          }
                                                          var f = V;
                                                          a("Add ", b), (P[f].stopPageInfo = d);
                                                      })();
                                                  break;
                                              case "pageInfoStop":
                                                  P[V] && P[V].stopPageInfo && (P[V].stopPageInfo(), delete P[V].stopPageInfo);
                                                  break;
                                              case "inPageLink":
                                                  !(function (a) {
                                                      var d = a.split("#")[1] || "",
                                                          e = decodeURIComponent(d),
                                                          f = document.getElementById(e) || document.getElementsByName(e)[0];
                                                      f
                                                          ? (function () {
                                                                var a = E(f);
                                                                h(V, "Moving to in page link (#" + d + ") at x: " + a.x + " y: " + a.y), (M = { x: a.x, y: a.y }), G(), h(V, "--");
                                                            })()
                                                          : window.top !== window.self
                                                          ? window.parentIFrame
                                                              ? window.parentIFrame.moveToAnchor(d)
                                                              : h(V, "In page link #" + d + " not found and window.parentIFrame not found")
                                                          : h(V, "In page link #" + d + " not found");
                                                  })(w(9));
                                                  break;
                                              case "reset":
                                                  r(U);
                                                  break;
                                              case "init":
                                                  d(), I("initCallback", U.iframe);
                                                  break;
                                              default:
                                                  d();
                                          }
                                      })()))
                            : i(V, "Ignored: " + T);
                    }
                    function m(a, b, c) {
                        var d = null,
                            e = null;
                        if (P[a]) {
                            if ("function" != typeof (d = P[a][b])) throw new TypeError(b + " on iFrame[" + a + "] is not a function");
                            e = d(c);
                        }
                        return e;
                    }
                    function n(a) {
                        var b = a.id;
                        h(b, "Removing iFrame: " + b), a.parentNode && a.parentNode.removeChild(a), m(b, "closedCallback", b), h(b, "--"), delete P[b];
                    }
                    function o(b) {
                        null === M &&
                            h(
                                b,
                                "Get page position: " +
                                    (M = { x: window.pageXOffset !== a ? window.pageXOffset : document.documentElement.scrollLeft, y: window.pageYOffset !== a ? window.pageYOffset : document.documentElement.scrollTop }).x +
                                    "," +
                                    M.y
                            );
                    }
                    function p(a) {
                        null !== M && (window.scrollTo(M.x, M.y), h(a, "Set page position: " + M.x + "," + M.y), q());
                    }
                    function q() {
                        M = null;
                    }
                    function r(a) {
                        h(a.id, "Size reset requested by " + ("init" === a.type ? "host page" : "iFrame")),
                            o(a.id),
                            t(
                                function () {
                                    s(a), u("reset", "reset", a.iframe, a.id);
                                },
                                a,
                                "reset"
                            );
                    }
                    function s(a) {
                        function b(b) {
                            (a.iframe.style[b] = a[b] + "px"), h(a.id, "IFrame (" + e + ") " + b + " set to " + a[b] + "px");
                        }
                        function c(b) {
                            H ||
                                "0" !== a[b] ||
                                ((H = !0),
                                h(e, "Hidden iFrame detected, creating visibility listener"),
                                (function () {
                                    function a() {
                                        function a(a) {
                                            function b(b) {
                                                return "0px" === P[a].iframe.style[b];
                                            }
                                            (function (a) {
                                                return null !== a.offsetParent;
                                            })(P[a].iframe) &&
                                                (b("height") || b("width")) &&
                                                u("Visibility change", "resize", P[a].iframe, a);
                                        }
                                        for (var b in P) a(b);
                                    }
                                    function b(b) {
                                        h("window", "Mutation observed: " + b[0].target + " " + b[0].type), x(a, 16);
                                    }
                                    var d = window.MutationObserver || window.WebKitMutationObserver;
                                    d &&
                                        (function () {
                                            var a = document.querySelector("body");
                                            new d(b).observe(a, { attributes: !0, attributeOldValue: !1, characterData: !0, characterDataOldValue: !1, childList: !0, subtree: !0 });
                                        })();
                                })());
                        }
                        function d(a) {
                            b(a), c(a);
                        }
                        var e = a.iframe.id;
                        P[e] && (P[e].sizeHeight && d("height"), P[e].sizeWidth && d("width"));
                    }
                    function t(a, b, c) {
                        c !== b.type && N ? (h(b.id, "Requesting animation frame"), N(a)) : a();
                    }
                    function u(a, b, c, d, e) {
                        var l = !1;
                        (d = d || c.id),
                            P[d] &&
                                (c && "contentWindow" in c && null !== c.contentWindow
                                    ? (function () {
                                          var e = P[d].targetOrigin;
                                          h(d, "[" + a + "] Sending msg to iframe[" + d + "] (" + b + ") targetOrigin: " + e), c.contentWindow.postMessage(K + b, e);
                                      })()
                                    : j(d, "[" + a + "] IFrame(" + d + ") not found"),
                                e &&
                                    P[d].warningTimeout &&
                                    (P[d].msgTimeout = setTimeout(function () {
                                        !P[d] ||
                                            P[d].loaded ||
                                            l ||
                                            ((l = !0),
                                            j(
                                                d,
                                                "IFrame has not responded within " +
                                                    P[d].warningTimeout / 1e3 +
                                                    " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ingored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
                                            ));
                                    }, P[d].warningTimeout)));
                    }
                    function v(a) {
                        return (
                            a +
                            ":" +
                            P[a].bodyMarginV1 +
                            ":" +
                            P[a].sizeWidth +
                            ":" +
                            P[a].log +
                            ":" +
                            P[a].interval +
                            ":" +
                            P[a].enablePublicMethods +
                            ":" +
                            P[a].autoResize +
                            ":" +
                            P[a].bodyMargin +
                            ":" +
                            P[a].heightCalculationMethod +
                            ":" +
                            P[a].bodyBackground +
                            ":" +
                            P[a].bodyPadding +
                            ":" +
                            P[a].tolerance +
                            ":" +
                            P[a].inPageLinks +
                            ":" +
                            P[a].resizeFrom +
                            ":" +
                            P[a].widthCalculationMethod
                        );
                    }
                    function w(c, d) {
                        var x = (function (a) {
                            return (
                                a,
                                "" === a &&
                                    ((c.id = a = (function () {
                                        var a = (d && d.id) || S.id + F++;
                                        return null !== document.getElementById(a) && (a += F++), a;
                                    })()),
                                    (G = (d || {}).log),
                                    a,
                                    h(a, "Added missing iframe ID: " + a + " (" + c.src + ")")),
                                a
                            );
                        })(c.id);
                        x in P && "iFrameResizer" in c
                            ? j(x, "Ignored iFrame, already setup.")
                            : ((function (a) {
                                  (a = a || {}),
                                      (P[x] = { firstRun: !0, iframe: c, remoteHost: c.src.split("/").slice(0, 3).join("/") }),
                                      (function (a) {
                                          if ("object" != typeof a) throw new TypeError("Options is not an object");
                                      })(a),
                                      (function (a) {
                                          for (var b in S) S.hasOwnProperty(b) && (P[x][b] = a.hasOwnProperty(b) ? a[b] : S[b]);
                                      })(a),
                                      (P[x].targetOrigin =
                                          !0 === P[x].checkOrigin
                                              ? (function (a) {
                                                    return "" === a || "file://" === a ? "*" : a;
                                                })(P[x].remoteHost)
                                              : "*");
                              })(d),
                              (function () {
                                  switch ((h(x, "IFrame scrolling " + (P[x].scrolling ? "enabled" : "disabled") + " for " + x), (c.style.overflow = !1 === P[x].scrolling ? "hidden" : "auto"), P[x].scrolling)) {
                                      case !0:
                                          c.scrolling = "yes";
                                          break;
                                      case !1:
                                          c.scrolling = "no";
                                          break;
                                      default:
                                          c.scrolling = P[x].scrolling;
                                  }
                              })(),
                              (function () {
                                  function a(a) {
                                      1 / 0 !== P[x][a] && 0 !== P[x][a] && ((c.style[a] = P[x][a] + "px"), h(x, "Set " + a + " = " + P[x][a] + "px"));
                                  }
                                  function b(a) {
                                      if (P[x]["min" + a] > P[x]["max" + a]) throw new Error("Value for min" + a + " can not be greater than max" + a);
                                  }
                                  b("Height"), b("Width"), a("maxHeight"), a("minHeight"), a("maxWidth"), a("minWidth");
                              })(),
                              ("number" == typeof P[x].bodyMargin || "0" === P[x].bodyMargin) && ((P[x].bodyMarginV1 = P[x].bodyMargin), (P[x].bodyMargin = P[x].bodyMargin + "px")),
                              (function (d) {
                                  b(c, "load", function () {
                                      u("iFrame.onload", d, c, a, !0),
                                          (function () {
                                              var a = P[x].firstRun,
                                                  b = P[x].heightCalculationMethod in O;
                                              !a && b && r({ iframe: c, height: 0, width: 0, type: "init" });
                                          })();
                                  }),
                                      u("init", d, c, a, !0);
                              })(v(x)),
                              Function.prototype.bind &&
                                  (P[x].iframe.iFrameResizer = {
                                      close: n.bind(null, P[x].iframe),
                                      resize: u.bind(null, "Window resize", "resize", P[x].iframe),
                                      moveToAnchor: function (a) {
                                          u("Move to anchor", "moveToAnchor:" + a, P[x].iframe, x);
                                      },
                                      sendMessage: function (a) {
                                          u("Send Message", "message:" + (a = JSON.stringify(a)), P[x].iframe, x);
                                      },
                                  }));
                    }
                    function x(a, b) {
                        null === Q &&
                            (Q = setTimeout(function () {
                                (Q = null), a();
                            }, b));
                    }
                    function z(a) {
                        h("window", "Trigger event: " + a),
                            x(function () {
                                B("Window " + a, "resize");
                            }, 16);
                    }
                    function A() {
                        "hidden" !== document.visibilityState &&
                            (h("document", "Trigger event: Visiblity change"),
                            x(function () {
                                B("Tab Visable", "resize");
                            }, 16));
                    }
                    function B(a, b) {
                        function c(a) {
                            return "parent" === P[a].resizeFrom && P[a].autoResize && !P[a].firstRun;
                        }
                        for (var d in P) c(d) && u(a, b, document.getElementById(d), d);
                    }
                    function C() {
                        b(window, "message", l),
                            b(window, "resize", function () {
                                z("resize");
                            }),
                            b(document, "visibilitychange", A),
                            b(document, "-webkit-visibilitychange", A),
                            b(window, "focusin", function () {
                                z("focus");
                            }),
                            b(window, "focus", function () {
                                z("focus");
                            });
                    }
                    function D() {
                        function b(a, b) {
                            b &&
                                ((function () {
                                    if (!b.tagName) throw new TypeError("Object is not a valid DOM element");
                                    if ("IFRAME" !== b.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + b.tagName + ">");
                                })(),
                                w(b, a),
                                e.push(b));
                        }
                        var e;
                        return (
                            (function () {
                                var a,
                                    b = ["moz", "webkit", "o", "ms"];
                                for (a = 0; a < b.length && !N; a += 1) N = window[b[a] + "RequestAnimationFrame"];
                                N || h("setup", "RequestAnimationFrame not supported");
                            })(),
                            C(),
                            function (d, f) {
                                switch (
                                    ((e = []),
                                    (function (a) {
                                        a && a.enablePublicMethods && j("enablePublicMethods option has been removed, public methods are now always available in the iFrame");
                                    })(d),
                                    typeof f)
                                ) {
                                    case "undefined":
                                    case "string":
                                        Array.prototype.forEach.call(document.querySelectorAll(f || "iframe"), b.bind(a, d));
                                        break;
                                    case "object":
                                        b(d, f);
                                        break;
                                    default:
                                        throw new TypeError("Unexpected data type (" + typeof f + ")");
                                }
                                return e;
                            }
                        );
                    }
                    if ("undefined" != typeof window) {
                        var F = 0,
                            G = !1,
                            H = !1,
                            J = "message".length,
                            K = "[iFrameSizer]",
                            L = K.length,
                            M = null,
                            N = window.requestAnimationFrame,
                            O = { max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 },
                            P = {},
                            Q = null,
                            S = {
                                autoResize: !0,
                                bodyBackground: null,
                                bodyMargin: null,
                                bodyMarginV1: 8,
                                bodyPadding: null,
                                checkOrigin: !0,
                                inPageLinks: !1,
                                enablePublicMethods: !0,
                                heightCalculationMethod: "bodyOffset",
                                id: "iFrameResizer",
                                interval: 32,
                                log: !1,
                                maxHeight: 1 / 0,
                                maxWidth: 1 / 0,
                                minHeight: 0,
                                minWidth: 0,
                                resizeFrom: "parent",
                                scrolling: !1,
                                sizeHeight: !0,
                                sizeWidth: !1,
                                warningTimeout: 5e3,
                                tolerance: 0,
                                widthCalculationMethod: "scroll",
                                closedCallback: function () {},
                                initCallback: function () {},
                                messageCallback: function () {
                                    j("MessageCallback function not defined");
                                },
                                resizedCallback: function () {},
                                scrollCallback: function () {
                                    return !0;
                                },
                            };
                        window.jQuery &&
                            (function (a) {
                                a.fn
                                    ? a.fn.iFrameResize ||
                                      (a.fn.iFrameResize = function (a) {
                                          return this.filter("iframe")
                                              .each(function (b, c) {
                                                  w(c, a);
                                              })
                                              .end();
                                      })
                                    : i("", "Unable to bind to jQuery, it is not fully loaded.");
                            })(window.jQuery),
                            "function" == typeof define && define.amd ? define([], D) : "object" == typeof module && "object" == typeof module.exports ? (module.exports = D()) : (window.iFrameResize = window.iFrameResize || D());
                    }
                })(),
                iFrameResize({ minHeight: 460, log: !1, checkOrigin: !1 }, "#Gscq_form");
        });
}
