(function(e) {
    function t(t) {
        for (var s, r, i = t[0], c = t[1], l = t[2], d = 0, u = []; d < i.length; d++)
            r = i[d],
            Object.prototype.hasOwnProperty.call(n, r) && n[r] && u.push(n[r][0]),
            n[r] = 0;
        for (s in c)
            Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
        m && m(t);
        while (u.length)
            u.shift()();
        return o.push.apply(o, l || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < o.length; t++) {
            for (var a = o[t], s = !0, r = 1; r < a.length; r++) {
                var i = a[r];
                0 !== n[i] && (s = !1)
            }
            s && (o.splice(t--, 1),
            e = c(c.s = a[0]))
        }
        return e
    }
    var s = {}
      , r = {
        app: 0
    }
      , n = {
        app: 0
    }
      , o = [];
    function i(e) {
        return c.p + "static/js/" + ({}[e] || e) + "." + {
            "chunk-4bdda8ae": "8cb1520f",
            "chunk-62f4186b": "d20ada97",
            "chunk-6b0d15d8": "7efaaa7d",
            "chunk-6bad0cd5": "c136d36e",
            "chunk-7eca0c14": "49822501",
            "chunk-80952dca": "1ce14e15",
            "chunk-9f446358": "1237fa1b",
            "chunk-bbee6adc": "cbb1e2fd"
        }[e] + ".js"
    }
    function c(t) {
        if (s[t])
            return s[t].exports;
        var a = s[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, c),
        a.l = !0,
        a.exports
    }
    c.e = function(e) {
        var t = []
          , a = {
            "chunk-4bdda8ae": 1,
            "chunk-62f4186b": 1,
            "chunk-6b0d15d8": 1,
            "chunk-6bad0cd5": 1,
            "chunk-7eca0c14": 1,
            "chunk-80952dca": 1,
            "chunk-9f446358": 1,
            "chunk-bbee6adc": 1
        };
        r[e] ? t.push(r[e]) : 0 !== r[e] && a[e] && t.push(r[e] = new Promise((function(t, a) {
            for (var s = "static/css/" + ({}[e] || e) + "." + {
                "chunk-4bdda8ae": "b5e42a22",
                "chunk-62f4186b": "9cd847be",
                "chunk-6b0d15d8": "5125f0ce",
                "chunk-6bad0cd5": "7128f82b",
                "chunk-7eca0c14": "01a9e4f7",
                "chunk-80952dca": "a3abea7e",
                "chunk-9f446358": "d023f26d",
                "chunk-bbee6adc": "44b976a6"
            }[e] + ".css", n = c.p + s, o = document.getElementsByTagName("link"), i = 0; i < o.length; i++) {
                var l = o[i]
                  , d = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (d === s || d === n))
                    return t()
            }
            var u = document.getElementsByTagName("style");
            for (i = 0; i < u.length; i++) {
                l = u[i],
                d = l.getAttribute("data-href");
                if (d === s || d === n)
                    return t()
            }
            var m = document.createElement("link");
            m.rel = "stylesheet",
            m.type = "text/css",
            m.onload = t,
            m.onerror = function(t) {
                var s = t && t.target && t.target.src || n
                  , o = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED",
                o.request = s,
                delete r[e],
                m.parentNode.removeChild(m),
                a(o)
            }
            ,
            m.href = n;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(m)
        }
        )).then((function() {
            r[e] = 0
        }
        )));
        var s = n[e];
        if (0 !== s)
            if (s)
                t.push(s[2]);
            else {
                var o = new Promise((function(t, a) {
                    s = n[e] = [t, a]
                }
                ));
                t.push(s[2] = o);
                var l, d = document.createElement("script");
                d.charset = "utf-8",
                d.timeout = 120,
                c.nc && d.setAttribute("nonce", c.nc),
                d.src = i(e);
                var u = new Error;
                l = function(t) {
                    d.onerror = d.onload = null,
                    clearTimeout(m);
                    var a = n[e];
                    if (0 !== a) {
                        if (a) {
                            var s = t && ("load" === t.type ? "missing" : t.type)
                              , r = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + s + ": " + r + ")",
                            u.name = "ChunkLoadError",
                            u.type = s,
                            u.request = r,
                            a[1](u)
                        }
                        n[e] = void 0
                    }
                }
                ;
                var m = setTimeout((function() {
                    l({
                        type: "timeout",
                        target: d
                    })
                }
                ), 12e4);
                d.onerror = d.onload = l,
                document.head.appendChild(d)
            }
        return Promise.all(t)
    }
    ,
    c.m = e,
    c.c = s,
    c.d = function(e, t, a) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(e, t) {
        if (1 & t && (e = c(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (c.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var s in e)
                c.d(a, s, function(t) {
                    return e[t]
                }
                .bind(null, s));
        return a
    }
    ,
    c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return c.d(t, "a", t),
        t
    }
    ,
    c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    c.p = "/",
    c.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var l = window["webpackJsonp"] = window["webpackJsonp"] || []
      , d = l.push.bind(l);
    l.push = t,
    l = l.slice();
    for (var u = 0; u < l.length; u++)
        t(l[u]);
    var m = d;
    o.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "0262": function(e) {
        e.exports = JSON.parse('{"en":"English","user":"user|users","login":"Login","register":"Register","username":"Username","password":"Password","login_account":"Login account","sponsor":"Sponsor","home":"Home","media":"Media","dashboard":"Dashboard","task":"Task","CMS":"CMS","widget":"Widget","chart":"Chart","list":"List","social":"Social","statistic":"Statistic","echart":"Echart","g2":"G2","mail":"Mail","inbox":"Inbox","table":"Table","access_denied":"Access Deny","basic_form":"Basic Form","step_form":"Wizard Form","form":"Form","acl":"ACL","user_list":"User List","edit_user":"Edit User","create_user":"Create User","changelog":"Changelog","calendar":"Calendar","all":"All","dir":"Directory","element":"Element","cascader":"Cascader","chat":"Chat","cms":"CMS","post":"Post","post_list":"Post List","task_list":"Task List","kanboard":"Kanboard","file_type":"File Type","video":"Video","image":"Image","document":"Document","rule":{"required":"{0} is required"},"$vuetify":{"badge":"Badge","close":"Close","dataIterator":{"noResultsText":"No matching records found","loadingText":"Loading items..."},"dataTable":{"itemsPerPageText":"Rows per page:","ariaLabel":{"sortDescending":"Sorted descending.","sortAscending":"Sorted ascending.","sortNone":"Not sorted.","activateNone":"Activate to remove sorting.","activateDescending":"Activate to sort descending.","activateAscending":"Activate to sort ascending."},"sortBy":"Sort by"},"dataFooter":{"itemsPerPageText":"Items per page:","itemsPerPageAll":"All","nextPage":"Next page","prevPage":"Previous page","firstPage":"First page","lastPage":"Last page","pageText":"{0}-{1} of {2}"},"datePicker":{"itemsSelected":"{0} selected","nextMonthAriaLabel":"Next month","nextYearAriaLabel":"Next year","prevMonthAriaLabel":"Previous month","prevYearAriaLabel":"Previous year"},"noDataText":"No data available","carousel":{"prev":"Previous visual","next":"Next visual","ariaLabel":{"delimiter":"Carousel slide {0} of {1}"}},"calendar":{"moreEvents":"{0} more"},"fileInput":{"counter":"{0} files","counterSize":"{0} files ({1} in total)"},"timePicker":{"am":"AM","pm":"PM"},"pagination":{"ariaLabel":{"wrapper":"Pagination Navigation","next":"Next page","previous":"Previous page","page":"Goto Page {0}","currentPage":"Current Page, Page {0}"}},"rating":{"ariaLabel":{"icon":"Rating {0} of {1}"}}}}')
    },
    "0cbc": function(e) {
        e.exports = JSON.parse('{"th":"ภาษาไทย","Devices":"อุปกรณ์","Other":"อื่น ๆ","user":"user|users","login":"Login","register":"Register","username":"Username","password":"Password","login_account":"Login account","sponsor":"Sponsor","home":"Home","media":"Media","Experts":"โรบอท","dashboard":"ภาพรวม","task":"Task","CMS":"CMS","widget":"Widget","chart":"Chart","list":"List","social":"Social","statistic":"Statistic","echart":"Echart","g2":"G2","mail":"Mail","inbox":"Inbox","table":"Table","access_denied":"Access Deny","basic_form":"Basic Form","step_form":"Wizard Form","form":"Form","acl":"ACL","user_list":"User List","edit_user":"Edit User","create_user":"Create User","changelog":"Changelog","calendar":"Calendar","all":"All","dir":"Directory","element":"Element","cascader":"Cascader","chat":"Chat","cms":"CMS","post":"Post","post_list":"Post List","task_list":"Task List","kanboard":"Kanboard","file_type":"File Type","video":"Video","image":"Image","document":"Document","rule":{"required":"{0} is required"},"$vuetify":{"badge":"Badge","close":"Close","dataIterator":{"noResultsText":"No matching records found","loadingText":"Loading items..."},"dataTable":{"itemsPerPageText":"Rows per page:","ariaLabel":{"sortDescending":"Sorted descending.","sortAscending":"Sorted ascending.","sortNone":"Not sorted.","activateNone":"Activate to remove sorting.","activateDescending":"Activate to sort descending.","activateAscending":"Activate to sort ascending."},"sortBy":"Sort by"},"dataFooter":{"itemsPerPageText":"Items per page:","itemsPerPageAll":"All","nextPage":"Next page","prevPage":"Previous page","firstPage":"First page","lastPage":"Last page","pageText":"{0}-{1} of {2}"},"datePicker":{"itemsSelected":"{0} selected","nextMonthAriaLabel":"Next month","nextYearAriaLabel":"Next year","prevMonthAriaLabel":"Previous month","prevYearAriaLabel":"Previous year"},"noDataText":"No data available","carousel":{"prev":"Previous visual","next":"Next visual","ariaLabel":{"delimiter":"Carousel slide {0} of {1}"}},"calendar":{"moreEvents":"{0} more"},"fileInput":{"counter":"{0} files","counterSize":"{0} files ({1} in total)"},"timePicker":{"am":"AM","pm":"PM"},"pagination":{"ariaLabel":{"wrapper":"Pagination Navigation","next":"Next page","previous":"Previous page","page":"Goto Page {0}","currentPage":"Current Page, Page {0}"}},"rating":{"ariaLabel":{"icon":"Rating {0} of {1}"}}}}')
    },
    "0f9a": function(e, t, a) {
        "use strict";
        a.r(t);
        var s = a("9870");
        const r = {
            users: []
        }
          , n = {
            getUsers: e => e.users,
            getUserByName: e => t => {
                const a = e.users.find(item.name === t);
                return a
            }
            ,
            getUserByEmail: e => t => {
                const a = e.users.find(item.name === t);
                return a
            }
        }
          , o = {
            async createUser(e, t) {
                return s["a"].call("CreateUser", t).then(t => t.data && t.data.success && 1 == t.data.success ? (e.dispatch("fetchUser"),
                t.data) : t.data)
            },
            removeUser(e, t) {
                return s["a"].call("RemoveUser", t).then(t => t.data && t.data.success && 1 == t.data.success ? (e.dispatch("fetchUser"),
                t.data) : t.data)
            },
            editUser(e, t) {
                return s["a"].call("EditUser", t).then(t => t.data && t.data.success && 1 == t.data.success ? (e.dispatch("fetchUser"),
                t.data) : t.data)
            },
            checkUserUpdate(e) {
                e.getters.getUsers.length <= 0 && e.dispatch("fetchUser")
            },
            fetchUser(e) {
                return s["a"].call("ListUser").then(t => t.data && t.data.success && 1 == t.data.success ? (e.commit("SET_USERS", t.data.data.users),
                t.data) : t.data)
            }
        }
          , i = {
            SET_USERS(e, t) {
                e.users = t
            }
        };
        t["default"] = {
            namespace: !0,
            state: r,
            getters: n,
            actions: o,
            mutations: i
        }
    },
    "18f2": function(e, t, a) {
        "use strict";
        a.r(t);
        a("14d9");
        var s = a("a026")
          , r = a("9870");
        a("bc3a");
        const n = {
            markers: [],
            history: [],
            loading: !1
        }
          , o = {
            getMarkerByName: e => t => {
                const a = e.markers.find(item.name === t);
                return a
            }
            ,
            getMarkerHistory: e => t => {
                let a = e.markers.find(e => e.id === t);
                return a ? a.history : []
            }
        }
          , i = {
            async initMarker({commit: e, state: t, rootState: a}) {
                e("SET_LOADING", !0);
                let s = this._vm.$db
                  , n = await r["a"].call("ListMarker");
                if (n.data && !0 === n.data.success) {
                    let t = n.data.data;
                    e("SET_MARKERS", t)
                } else
                    e("SET_MARKERS", []);
                let o = s.collection("marker");
                o.onSnapshot(async t => {
                    let a = [];
                    if (!t.empty)
                        for (let e of t.docs) {
                            let t = await e.data();
                            a.push(t)
                        }
                    e("UPDATE_MARKERS", a)
                }
                );
                let i = this._vm.$rtdb
                  , c = i.ref("crosswalk/");
                c.get().then(t => {
                    let a = t.val()
                      , s = [];
                    for (let e of Object.keys(a))
                        for (let t of Object.keys(a[e])) {
                            let r = a[e][t];
                            r.master_id = e,
                            r.device_id = r.device_id + "",
                            s.push(Object.assign({}, r))
                        }
                    e("UPDATE_MARKERS", s)
                }
                ),
                c.on("child_changed", t => {
                    const a = t.val()
                      , s = t.key;
                    let r = [];
                    for (let e in a) {
                        let t = a[e];
                        t && (t.master_id = s,
                        t.device_id = t.device_id + ""),
                        r.push(t)
                    }
                    e("UPDATE_MARKERS", r)
                }
                );
                let l = new Date
                  , d = s.collection("sensor_history_day").where("day", "==", l.getDate()).where("month", "==", l.getMonth()).where("year", "==", l.getFullYear());
                d.onSnapshot(async t => {
                    let a = [];
                    for (let e of t.docs) {
                        let t = await e.data();
                        a.push({
                            device_id: t.device_id,
                            master_id: t.master_id,
                            daycount: t.count,
                            history: t.data,
                            mistatus: t.status
                        })
                    }
                    e("UPDATE_MARKERS", a)
                }
                )
            },
            async createMarker({commit: e, state: t}, a) {
                let s = await r["a"].call("CreateMarker", a);
                return s.data
            },
            async removeMarker({commit: e, state: t}, a) {
                let s = await r["a"].call("RemoveMarker", a);
                return s.data
            },
            async updateValue({commit: e, state: t}, a) {
                let s = await r["a"].call("EditMarker", a);
                return s.data
            },
            async editMarker({commit: e, state: t}, a) {
                let s = await r["a"].call("EditMarker", a);
                return s.data
            },
            async downloadHistoryById({commit: e, state: t}, a) {
                let s = this._vm.$db;
                const {start_day: r, start_month: n, start_year: o, end_day: i, end_month: c, end_year: l} = a;
                let d = await s.collection("sensor_history_day").where("day", ">=", r).where("day", "<=", i).where("device_id", "==", a.device_id).where("master_id", "==", a.master_id).get();
                if (!d.empty) {
                    let e = [];
                    for (let t of d.docs) {
                        let a = t.data();
                        if (a.month <= c && a.month >= n && a.year <= l && a.year >= o)
                            for (let t of a.data)
                                e.push({
                                    date: `${a.day}-${a.month + 1}-${a.year}`,
                                    id: a.device_id,
                                    master: a.master_id,
                                    status: t.status,
                                    count: t.count,
                                    timestamp: t.timestamp.toDate(),
                                    volt: t.volt,
                                    ch1_cur: t.ch1_cur,
                                    ch2_cur: t.ch2_cur,
                                    ch3_cur: t.ch3_cur,
                                    ch1_nor: t.ch1_nor,
                                    ch2_nor: t.ch2_nor,
                                    ch3_nor: t.ch3_nor
                                })
                    }
                    return e
                }
            },
            async downloadHistory({commit: e, state: t}, a) {
                let s = this._vm.$db;
                const {start_day: r, start_month: n, start_year: o, end_day: i, end_month: c, end_year: l} = a;
                let d = await s.collection("sensor_history_day").where("day", ">=", r).where("day", "<=", i).get();
                if (!d.empty) {
                    let e = [];
                    for (let t of d.docs) {
                        let a = t.data();
                        if (a.month <= c && a.month >= n && a.year <= l && a.year >= o)
                            for (let t of a.data)
                                e.push({
                                    date: `${a.day}-${a.month + 1}-${a.year}`,
                                    id: a.device_id,
                                    master: a.master_id,
                                    status: t.status,
                                    count: t.count,
                                    timestamp: t.timestamp.toDate(),
                                    volt: t.volt,
                                    ch1_cur: t.ch1_cur,
                                    ch2_cur: t.ch2_cur,
                                    ch3_cur: t.ch3_cur,
                                    ch1_nor: t.ch1_nor,
                                    ch2_nor: t.ch2_nor,
                                    ch3_nor: t.ch3_nor
                                })
                    }
                    return e
                }
            },
            async requestMarkerHistory({commit: e, state: t}, a) {
                let s = this._vm.$db
                  , {type: r, id: n, date: o} = a;
                if ("day" == r) {
                    let[e,t,a] = o.split("-");
                    t = parseInt(t) - 1,
                    a = parseInt(a);
                    const r = `${n}$${a}_${t}_${e}`;
                    let i = await s.collection("sensor_history_day").doc(r).get();
                    if (i.exists) {
                        let e = i.data();
                        return e.data
                    }
                    return []
                }
                if ("month" == r) {
                    const e = a.master_id
                      , t = a.device_id
                      , r = a.month;
                    let n = await s.collection("sensor_history_day").where("master_id", "==", e).where("device_id", "==", t).where("month", "==", r).get()
                      , o = new Date(2008,r + 1,0)
                      , i = Array.from(Array(o.getDate()).keys()).map(e => 0);
                    if (!n.empty)
                        for (let a of n.docs) {
                            let e = a.data();
                            i[e.day] = e.count
                        }
                    return i.map( (e, t) => ({
                        x: t,
                        y: e
                    }))
                }
            }
        }
          , c = {
            ADD_MARKER(e, t) {
                e.markers.push(t)
            },
            SET_MARKERS(e, t) {
                e.markers = t
            },
            UPDATE_MARKERS(e, t) {
                for (let a of t) {
                    if (!a)
                        continue;
                    let t = e.markers.findIndex(e => e.device_id == a.device_id && e.master_id == a.master_id);
                    if (t >= 0) {
                        let r = e.markers[t]
                          , n = Object.assign(r, a);
                        s["a"].set(e.markers, t, n)
                    }
                }
            },
            SET_OPEN_INFO(e, t) {
                for (let a of e.markers)
                    a.info = t
            },
            SET_LOADING(e, t) {
                e.loading = t
            }
        };
        t["default"] = {
            namespace: !0,
            state: n,
            getters: o,
            actions: i,
            mutations: c
        }
    },
    "1ce1": function(e, t, a) {
        "use strict";
        a("8151")
    },
    "26a4": function(e, t, a) {
        "use strict";
        a("de19")
    },
    "2a74": function(e, t, a) {
        "use strict";
        a.r(t);
        var s = a("bba4")
          , r = a.n(s);
        const n = a("d307")
          , o = {};
        n.keys().forEach(e => {
            if ("./index.js" === e)
                return;
            const t = r()(e.replace(/(\.\/|\.js)/g, ""));
            let a = n(e).default;
            a.namespaced = !0,
            "auth" != t && "app" != t || (a.namespaced = !1),
            o[t] = a
        }
        ),
        t["default"] = o
    },
    "3dbf": function(e, t, a) {},
    4360: function(e, t, a) {
        "use strict";
        var s = a("a026")
          , r = a("2f62")
          , n = a("2a74")
          , o = a("bfa9");
        const i = new o["a"]({
            key: "vma",
            storage: window.localStorage,
            modules: ["app", "auth"]
        });
        s["a"].use(r["a"]);
        let c = Object.keys(n["default"]).map(e => n["default"][e].plugins).filter(e => void 0 != e);
        c = [].concat.apply([], c);
        const l = new r["a"].Store({
            modules: n["default"],
            plugins: [i.plugin].concat(c)
        });
        t["a"] = l
    },
    4678: function(e, t, a) {
        var s = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };
        function r(e) {
            var t = n(e);
            return a(t)
        }
        function n(e) {
            if (!a.o(s, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return s[e]
        }
        r.keys = function() {
            return Object.keys(s)
        }
        ,
        r.resolve = n,
        e.exports = r,
        r.id = "4678"
    },
    5562: function(e, t, a) {},
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        var s = a("a026")
          , r = a("a18c")
          , n = a("4360")
          , o = a("9483");
        Object(o["a"])("/service-worker.js", {
            ready() {
                console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
            },
            registered() {
                console.log("Service worker has been registered.")
            },
            cached() {
                console.log("Content has been cached for offline use.")
            },
            updatefound() {
                console.log("New content is downloading.")
            },
            updated() {
                console.log("New content is available; please refresh.")
            },
            offline() {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error(e) {
                console.error("Error during service worker registration:", e)
            }
        });
        var i = a("f309")
          , c = a("a925")
          , l = a("0262")
          , d = a("0cbc");
        s["a"].use(c["a"]);
        const u = {
            th: d,
            en: l
        }
          , m = new c["a"]({
            locale: n["a"].getters.getLocale,
            messages: u
        });
        var h = m;
        s["a"].use(i["a"]);
        var p = new i["a"]({
            lang: {
                t: (e, ...t) => h.t(e, t),
                current: "en"
            },
            theme: {
                options: {
                    customProperties: !0
                },
                themes: {
                    light: {
                        primary: n["a"].getters.getThemeColor,
                        secondary: "#424242",
                        accent: "#82B1FF",
                        error: "#FF5252",
                        info: "#2196F3",
                        success: "#4CAF50",
                        warning: "#FFC107"
                    }
                }
            }
        })
          , f = (a("ad18"),
        a("7496"))
          , g = a("8336")
          , b = a("132d")
          , _ = a("2db4")
          , v = function() {
            var e = this
              , t = e._self._c;
            return t(f["a"], {
                attrs: {
                    dark: ""
                }
            }, [t("router-view"), t(_["a"], {
                attrs: {
                    timeout: 3e3,
                    app: "",
                    top: "",
                    centered: "",
                    color: e.snackbar.color
                },
                scopedSlots: e._u([{
                    key: "action",
                    fn: function({attrs: a}) {
                        return [t(g["a"], e._b({
                            attrs: {
                                icon: ""
                            },
                            on: {
                                click: function(t) {
                                    return e.$store.commit("HIDE_SNACKBAR")
                                }
                            }
                        }, "v-btn", a, !1), [t(b["a"], [e._v("mdi-close")])], 1)]
                    }
                }]),
                model: {
                    value: e.snackbar.show,
                    callback: function(t) {
                        e.$set(e.snackbar, "show", t)
                    },
                    expression: "snackbar.show"
                }
            }, [e._v(" " + e._s(e.snackbar.text) + " ")])], 1)
        }
          , y = []
          , k = a("2f62")
          , w = {
            components: {},
            data() {
                return {}
            },
            computed: {
                ...Object(k["c"])(["getSnackbar", "isUserAuth", "getUser"]),
                snackbar: {
                    get() {
                        return this.getSnackbar
                    },
                    set(e) {
                        this.$store.commit("UPDATE_SNACKBAR", e)
                    }
                }
            },
            mounted() {
                void 0 !== typeof window && void 0 === window._UDEV && (window._UDEV = this),
                this.authAction()
            },
            created() {
                this.$bus.$on("userLoggedIn", async () => {
                    console.log("Fetch Device!")
                }
                ),
                this.initMarker()
            },
            methods: {
                ...Object(k["b"])("marker", ["initMarker"]),
                ...Object(k["b"])(["authAction"])
            }
        }
          , j = w
          , A = a("2877")
          , S = Object(A["a"])(j, v, y, !1, null, null, null)
          , C = S.exports
          , x = a("6c42");
        a("da96");
        const E = {
            timeout: 3e3
        };
        s["a"].use(x["a"], E);
        a("5363"),
        a("3ea4");
        var T = a("260b");
        a("ea7b"),
        a("e71f"),
        a("8934"),
        a("588e"),
        a("66ce");
        const O = {
            apiKey: "AIzaSyCURGY4A39mOZCNGVvh3h-mJEFOV45oP6E",
            authDomain: "monitor-tangkam.firebaseapp.com",
            databaseURL: "https://monitor-tangkam-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "monitor-tangkam",
            storageBucket: "monitor-tangkam.appspot.com",
            messagingSenderId: "914365368721",
            appId: "1:914365368721:web:47d7af4b0b26ca5328b230"
        }
          , N = (T["a"].initializeApp(O),
        "asia-southeast1")
          , L = T["a"].app().auth(N)
          , P = T["a"].app().firestore(N)
          , D = T["a"].app().functions(N)
          , R = (T["a"].storage(),
        T["a"].database());
        var U = T["a"]
          , I = a("9eed")
          , M = a.n(I)
          , $ = a("1321")
          , F = a.n($)
          , z = a("b9ee");
        s["a"].use(F.a),
        s["a"].component("apexchart", F.a),
        s["a"].config.productionTip = !1,
        s["a"].prototype.$db = P,
        s["a"].prototype.$fn = D,
        s["a"].prototype.$auth = L,
        s["a"].prototype.$rtdb = R,
        s["a"].prototype.$firebase = U,
        s["a"].use(z["a"], {
            load: {
                key: "AIzaSyCuvAEFDpzB0-00wAzJNEZR89qZ_mEPiqA",
                libraries: "places"
            },
            autoBindAllEvents: !1,
            installComponents: !0,
            dynamicLoad: !1
        });
        const B = new s["a"];
        s["a"].prototype.$bus = B,
        s["a"].use(M.a, {
            vuetify: p
        });
        const K = a("c1df");
        a("10e8"),
        s["a"].use(a("2ead"), {
            moment: K
        });
        const W = new s["a"]({
            router: r["a"],
            store: n["a"],
            i18n: h,
            vuetify: p,
            render: e => e(C)
        });
        W.$mount("#app")
    },
    "5baf": function(e, t, a) {
        "use strict";
        a("6d85")
    },
    "6cce": function(e, t, a) {
        "use strict";
        a("5562")
    },
    "6d85": function(e, t, a) {},
    8151: function(e, t, a) {},
    "88e8": function(e, t, a) {
        "use strict";
        a("ce3c")
    },
    9870: function(e, t, a) {
        "use strict";
        var s = a("a026")
          , r = a("4360");
        const n = {
            call(e, t) {
                return new Promise( (a, n) => {
                    let o = s["a"].prototype.$fn.httpsCallable(e);
                    o(t).then(e => {
                        e.data.reason && "NOT_AUTH" == e.data.reason && r["a"].dispatch("logout", !0),
                        a(e)
                    }
                    ).catch(e => {
                        n(e)
                    }
                    )
                }
                )
            }
        };
        t["a"] = n
    },
    a18c: function(e, t, a) {
        "use strict";
        var s = a("a026")
          , r = a("8c4f")
          , n = a("7496")
          , o = a("f6c4")
          , i = function() {
            var e = this
              , t = e._self._c;
            return t(n["a"], {
                staticClass: "layout-auth black"
            }, [t(o["a"], [t("router-view", {
                key: e.$route.path
            })], 1)], 1)
        }
          , c = []
          , l = {
            data: () => ({}),
            methods: {}
        }
          , d = l
          , u = (a("a6f7"),
        a("2877"))
          , m = Object(u["a"])(d, i, c, !1, null, "5834c130", null)
          , h = m.exports
          , p = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "admin"
            }, [t("app-drawer", {
                ref: "drawer",
                staticClass: "admin_drawer",
                on: {
                    "drawer:collapsed": function(t) {
                        e.mini = !e.mini
                    }
                }
            }), t("app-toolbar", {
                staticClass: "admin_toolbar",
                attrs: {
                    extended: ""
                },
                on: {
                    "side-icon-click": e.handleDrawerVisiable
                }
            }), t(o["a"], {
                staticClass: "grey lighten-3"
            }, [t("div", {
                staticClass: "page_wrapper"
            }, [t("router-view")], 1)]), t("app-fab")], 1)
        }
          , f = []
          , g = a("8336")
          , b = a("132d")
          , _ = a("f774")
          , v = a("71d9")
          , y = function() {
            var e = this
              , t = e._self._c;
            return t(_["a"], {
                staticClass: "app-drawer",
                attrs: {
                    app: "",
                    "mini-variant": e.mini,
                    "mini-variant-width": "64",
                    width: e.drawerWidth,
                    permanent: ""
                },
                on: {
                    "update:miniVariant": function(t) {
                        e.mini = t
                    },
                    "update:mini-variant": function(t) {
                        e.mini = t
                    }
                },
                scopedSlots: e._u([{
                    key: "append",
                    fn: function() {
                        return [t("div", {
                            staticClass: "grey lighten-3"
                        }, [e.mini ? [t(g["a"], {
                            staticClass: "mx-auto",
                            attrs: {
                                block: "",
                                width: "64",
                                height: "48",
                                icon: "",
                                tile: ""
                            },
                            on: {
                                click: e.handleDrawerCollapse
                            }
                        }, [t(b["a"], [e._v("mdi-arrow-collapse-right")])], 1)] : [t(g["a"], {
                            attrs: {
                                right: "",
                                block: "",
                                height: "48",
                                icon: "",
                                tile: ""
                            },
                            on: {
                                click: e.handleDrawerCollapse
                            }
                        }, [t(b["a"], [e._v("mdi-arrow-collapse-left")])], 1)]], 2)]
                    },
                    proxy: !0
                }]),
                model: {
                    value: e.showDrawer,
                    callback: function(t) {
                        e.showDrawer = t
                    },
                    expression: "showDrawer"
                }
            }, [e.mini ? t(v["a"], {
                staticClass: "pl-0",
                attrs: {
                    color: "grey lighten-4",
                    height: "80"
                }
            }, [t("img", {
                staticStyle: {
                    "margin-left": "-10px"
                },
                attrs: {
                    src: "/static/web_logo.png",
                    height: "55",
                    alt: "เทศบาลนครเชียงใหม่"
                }
            })]) : t(v["a"], {
                staticClass: "pl-0",
                attrs: {
                    color: "grey lighten-4",
                    height: "80"
                }
            }, [t("img", {
                attrs: {
                    src: "/static/web_logo.png",
                    height: "55",
                    alt: "เทศบาลนครเชียงใหม่"
                }
            })]), t("smooth-scrollbar", {
                staticClass: "app-drawer__scrollbar",
                attrs: {
                    options: {
                        damping: .1,
                        alwaysShowTracks: !0
                    }
                }
            }, [t("div", {
                staticClass: "app-drawer__inner"
            }, [t("nav-list", {
                attrs: {
                    items: e.computeMenu,
                    mini: e.mini
                }
            })], 1)])], 1)
        }
          , k = []
          , w = a("2f62")
          , j = a("40a7")
          , A = a("8860")
          , S = a("56b0")
          , C = a("5d23")
          , x = a("3a2f")
          , E = function() {
            var e = this
              , t = e._self._c;
            return t(A["a"], {
                staticClass: "pa-0"
            }, [e._l(e.items, (function(a, s) {
                return [e.hasChild(a) ? t(S["a"], {
                    key: s,
                    attrs: {
                        "no-action": "",
                        to: a.path,
                        value: e.computeGroupExpanded(a, e.$route)
                    },
                    scopedSlots: e._u([{
                        key: "prependIcon",
                        fn: function() {
                            return [t(x["a"], {
                                attrs: {
                                    bottom: ""
                                },
                                scopedSlots: e._u([{
                                    key: "activator",
                                    fn: function({on: s, attrs: r}) {
                                        return [t(b["a"], e._g(e._b({
                                            domProps: {
                                                textContent: e._s(a.icon)
                                            }
                                        }, "v-icon", r, !1), s))]
                                    }
                                }], null, !0)
                            }, [t("span", {
                                domProps: {
                                    textContent: e._s(a.title)
                                }
                            })])]
                        },
                        proxy: !0
                    }, {
                        key: "activator",
                        fn: function() {
                            return [t(C["g"], [t(C["k"], {
                                domProps: {
                                    textContent: e._s(a.title)
                                }
                            })], 1)]
                        },
                        proxy: !0
                    }], null, !0)
                }, e._l(a.children, (function(a) {
                    return t("nav-list-item", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.mini,
                            expression: "!mini"
                        }],
                        key: "c" + a.path,
                        attrs: {
                            item: a
                        }
                    })
                }
                )), 1) : t("nav-list-item", {
                    key: "nav" + s,
                    attrs: {
                        item: a,
                        mini: e.mini
                    }
                })]
            }
            ))], 2)
        }
          , T = []
          , O = a("da13")
          , N = a("1800")
          , L = a("34c3")
          , P = function() {
            var e = this
              , t = e._self._c;
            return t(O["a"], {
                attrs: {
                    to: e.item.path
                }
            }, [t(L["a"], {
                class: e.mini ? "mr-0" : ""
            }, [t(x["a"], {
                attrs: {
                    bottom: ""
                },
                scopedSlots: e._u([{
                    key: "activator",
                    fn: function({on: a, attrs: s}) {
                        return [t(b["a"], e._g(e._b({
                            domProps: {
                                textContent: e._s(e.item.icon)
                            }
                        }, "v-icon", s, !1), a))]
                    }
                }])
            }, [t("span", {
                domProps: {
                    textContent: e._s(e.item.title)
                }
            })])], 1), t(C["g"], [t(C["k"], {
                domProps: {
                    textContent: e._s(e.item.title)
                }
            })], 1), e.item.isNew ? t(N["a"], [t(b["a"], {
                attrs: {
                    color: "green"
                }
            }, [e._v("mdi-new-box ")])], 1) : e._e()], 1)
        }
          , D = []
          , R = {
            props: {
                mini: Boolean,
                item: Object
            },
            computed: {}
        }
          , U = R
          , I = Object(u["a"])(U, P, D, !1, null, null, null)
          , M = I.exports
          , $ = {
            components: {
                NavListItem: M
            },
            props: {
                mini: Boolean,
                items: {
                    type: Array,
                    default: () => []
                }
            },
            methods: {
                hasChild(e) {
                    return Array.isArray(e.children) && e.children.length > 0
                },
                computeGroupExpanded(e, t) {
                    return t.matched.map(e => e.path).includes(e.path)
                }
            }
        }
          , F = $
          , z = Object(u["a"])(F, E, T, !1, null, null, null)
          , B = z.exports
          , K = {
            name: "AppDrawer",
            components: {
                SmoothScrollbar: j["a"],
                NavList: B
            },
            props: {},
            data() {
                return {
                    mini: !1,
                    showDrawer: !0,
                    drawerWidth: 256,
                    scrollSettings: {
                        maxScrollbarLength: 160
                    }
                }
            },
            computed: {
                ...Object(w["c"])(["getUser", "isAdmin", "isTechnician"]),
                computeMenu() {
                    return this.filterRouteItem(ot[0].children)
                },
                computeHeight() {
                    return {
                        height: this.height || ""
                    }
                }
            },
            mounted() {
                "interface" == this.$route.name && (this.mini = !0)
            },
            methods: {
                canAccess(e) {
                    return !e || (!(!this.isAdmin || !e.includes("admin")) || !(!this.isTechnician || !e.includes("technician")))
                },
                filterRouteItem(e) {
                    return e.filter(e => !0 !== e.meta.hidden && this.canAccess(e.meta.role)).map(e => ({
                        title: this.$t(e.meta.title),
                        icon: e.meta.icon,
                        path: e.path,
                        isNew: e.meta.isNew || !1,
                        children: e.children ? this.filterRouteItem(e.children) : []
                    }))
                },
                handleDrawerCollapse() {
                    this.mini = !this.mini
                },
                toggleDrawer() {
                    this.showDrawer = !this.showDrawer
                }
            },
            watch: {
                $route(e, t) {
                    "interface" == e.name && (this.mini = !0)
                }
            }
        }
          , W = K
          , q = (a("88e8"),
        Object(u["a"])(W, y, k, !1, null, "7154327e", null))
          , H = q.exports
          , G = a("40dc")
          , V = a("e449")
          , J = a("2fa4")
          , Y = function() {
            var e = this
              , t = e._self._c;
            return t(G["a"], {
                attrs: {
                    color: "primary",
                    dark: "",
                    app: "",
                    height: "80"
                }
            }, [t(J["a"]), t(g["a"], {
                staticClass: "primary darken-2 mx-2",
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(t) {
                        return e.handleFullScreen()
                    }
                }
            }, [t(b["a"], [e._v("mdi-fullscreen")])], 1), t(V["a"], {
                attrs: {
                    "offset-y": "",
                    origin: "center center",
                    transition: "scale-transition"
                },
                scopedSlots: e._u([{
                    key: "activator",
                    fn: function({on: a}) {
                        return [t(g["a"], e._g({
                            staticClass: "primary darken-2 mx-2",
                            attrs: {
                                slot: "activator",
                                icon: ""
                            },
                            slot: "activator"
                        }, a), [t("c-avatar", {
                            attrs: {
                                size: 46,
                                username: e.getDisplayName,
                                src: e.getAvatar,
                                status: "online"
                            }
                        })], 1)]
                    }
                }])
            }, [t(A["a"], {
                staticClass: "pa-0"
            }, e._l(e.profileMenus, (function(a, s) {
                return t(O["a"], {
                    key: s,
                    attrs: {
                        to: a.href ? null : {
                            name: a.name
                        },
                        href: a.href,
                        disabled: a.disabled,
                        target: a.target,
                        rel: "noopener"
                    },
                    on: {
                        click: a.click
                    }
                }, [a.icon ? t(N["a"], [t(b["a"], [e._v(e._s(a.icon))])], 1) : e._e(), t(C["g"], [t(C["k"], [e._v(e._s(a.title))])], 1)], 1)
            }
            )), 1)], 1)], 1)
        }
          , Z = []
          , Q = (a("14d9"),
        a("b0af"))
          , X = a("99d9")
          , ee = a("ce7e")
          , te = a("8270")
          , ae = a("e0c7")
          , se = function() {
            var e = this
              , t = e._self._c;
            return t(Q["a"], {
                staticClass: "notes",
                attrs: {
                    tile: ""
                }
            }, [t(v["a"], {
                attrs: {
                    tile: "",
                    flat: ""
                }
            }, [t(ae["a"], [e._v("Notification")]), t(J["a"]), t(g["a"], {
                attrs: {
                    text: ""
                },
                on: {
                    click: e.handleClearNotification
                }
            }, [e._v("clear")])], 1), t(ee["a"]), t(X["d"], {
                staticClass: "pa-0"
            }, [t(A["a"], {
                staticClass: "pa-0 notes_list",
                attrs: {
                    dense: ""
                }
            }, [e._l(e.items, (function(a, s) {
                return [t(O["a"], {
                    key: s,
                    on: {
                        click: e.handleClick
                    }
                }, [t(te["a"], {
                    attrs: {
                        color: a.color
                    }
                }, [t(b["a"], {
                    attrs: {
                        dark: ""
                    }
                }, [e._v(e._s(a.icon))])], 1), t(C["g"], [t(C["j"], {
                    domProps: {
                        innerHTML: e._s(a.title)
                    }
                })], 1), t(N["a"], {
                    staticClass: "caption"
                }, [e._v(" " + e._s(a.timeLabel) + " ")])], 1), t(ee["a"], {
                    key: "d" + s
                })]
            }
            ))], 2), t(ee["a"]), t(g["a"], {
                staticClass: "ma-0",
                attrs: {
                    block: "",
                    text: ""
                }
            }, [e._v("All")]), t(ee["a"])], 1)], 1)
        }
          , re = []
          , ne = {
            props: {
                items: {
                    type: Array,
                    default: () => []
                }
            },
            data() {
                return {}
            },
            methods: {
                handleClick: e => {
                    console.log(e)
                }
                ,
                handleClearNotification() {
                    this.$store.dispatch("clearNotificaton")
                }
            }
        }
          , oe = ne
          , ie = (a("5baf"),
        Object(u["a"])(oe, se, re, !1, null, "0445d1b0", null))
          , ce = ie.exports
          , le = a("4ca6")
          , de = a("1baa")
          , ue = function() {
            var e = this
              , t = e._self._c;
            return t(V["a"], {
                attrs: {
                    "offset-y": "",
                    origin: "center center",
                    rounded: "",
                    transition: "scale-transition"
                },
                scopedSlots: e._u([{
                    key: "activator",
                    fn: function({on: a}) {
                        return [t(g["a"], e._g({
                            staticClass: "primary darken-2 mx-2",
                            attrs: {
                                slot: "activator",
                                icon: ""
                            },
                            slot: "activator"
                        }, a), [t(le["a"], {
                            attrs: {
                                color: "red",
                                "offset-x": "5",
                                "offset-y": "5",
                                overlap: ""
                            }
                        }, [t("span", {
                            attrs: {
                                slot: "badge"
                            },
                            slot: "badge"
                        }, [e._v(e._s(e.computeLocaleText(e.locale)))]), t(b["a"], {
                            attrs: {
                                medium: ""
                            }
                        }, [e._v("mdi-translate")])], 1)], 1)]
                    }
                }])
            }, [t(A["a"], [t(de["a"], {
                model: {
                    value: e.locale,
                    callback: function(t) {
                        e.locale = t
                    },
                    expression: "locale"
                }
            }, e._l(e.availableLanguages, (function(a) {
                return t(O["a"], {
                    key: a.value,
                    attrs: {
                        value: a.value
                    },
                    on: {
                        click: function(t) {
                            return e.handleChangeLocale(a)
                        }
                    }
                }, [t(C["k"], {
                    domProps: {
                        textContent: e._s(a.text)
                    }
                })], 1)
            }
            )), 1)], 1)], 1)
        }
          , me = []
          , he = {
            data() {
                return {
                    locale: this._i18n.locale
                }
            },
            computed: {
                availableLanguages() {
                    const {messages: e} = this._i18n;
                    return Object.keys(e).map(t => ({
                        text: e[t][t],
                        value: t
                    }))
                }
            },
            methods: {
                computeLocaleText(e) {
                    return e.toUpperCase()
                },
                handleChangeLocale(e) {
                    this._i18n.locale = e.value,
                    this.$store.commit("SET_LOCALE", e.value)
                }
            }
        }
          , pe = he
          , fe = Object(u["a"])(pe, ue, me, !1, null, null, null)
          , ge = fe.exports
          , be = a("f126")
          , _e = a("b166")
          , ve = a("80d2");
        const ye = (e, t="MM/dd/yyyy") => Object(_e["a"])(e, t)
          , ke = (e=[]) => e[Math.floor(Math.random() * e.length)]
          , we = e => (e || "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
          , je = e => Object(ve["y"])(e)
          , Ae = () => {
            let e = window.document
              , t = e.documentElement
              , a = t.requestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || t.msRequestFullscreen
              , s = e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen;
            e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || e.msFullscreenElement ? s.call(e) : a.call(t)
        }
        ;
        var Se = {
            randomElement: ke,
            toggleFullScreen: Ae,
            formatDate: ye,
            bytes: je,
            kebab: we
        }
          , Ce = {
            name: "AppToolbar",
            components: {
                LocaleSwitch: ge,
                NotificationList: ce,
                CAvatar: be["a"]
            },
            props: {},
            data() {
                return {
                    profileMenus: [{
                        icon: "mdi-account",
                        href: "#",
                        title: "Profile",
                        click: this.handleProfile
                    }, {
                        icon: "mdi-cog",
                        href: "#",
                        title: "Settings",
                        click: this.handleSetting
                    }, {
                        icon: "mdi-power",
                        href: "#",
                        title: "Logout",
                        click: this.handleLogut
                    }]
                }
            },
            computed: {
                ...Object(w["c"])(["getDisplayName", "getAvatar", "getNotification"]),
                breadcrumbs() {
                    const {matched: e} = this.$route;
                    return e.map( (t, a) => {
                        const s = a === e.length - 1 ? this.$route.path : t.path || t.redirect
                          , r = this.$t(t.meta.title);
                        return {
                            text: r,
                            to: s,
                            exact: !0,
                            disabled: !1
                        }
                    }
                    )
                }
            },
            created() {},
            methods: {
                handleDrawerToggle() {
                    this.$emit("side-icon-click")
                },
                handleFullScreen() {
                    Se.toggleFullScreen()
                },
                async handleLogut() {
                    let e = await this.$confirm("T:LOGOUT_CONFIRM", {
                        title: "T:LOGOUT_CONFIRM_TITILE"
                    });
                    e && (this.$store.dispatch("logout"),
                    this.$toast.success("T:LOGOUT_SUCCESS"),
                    this.$router.push("/auth/login"))
                },
                handleSetting() {},
                handleProfile() {},
                handleGoBack() {
                    this.$router.go(-1)
                }
            }
        }
          , xe = Ce
          , Ee = (a("1ce1"),
        Object(u["a"])(xe, Y, Z, !1, null, null, null))
          , Te = Ee.exports
          , Oe = a("0789")
          , Ne = a("f977")
          , Le = function() {
            var e = this
              , t = e._self._c;
            return t(Oe["h"], [t(g["a"], {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.fab,
                    expression: "fab"
                }, {
                    def: Ne["b"],
                    name: "scroll",
                    rawName: "v-scroll",
                    value: e.onScroll,
                    expression: "onScroll"
                }],
                style: {
                    bottom: e.fab ? "100px" : ""
                },
                attrs: {
                    "aria-label": "Scroll to top",
                    bottom: "",
                    small: "",
                    color: "red",
                    dark: "",
                    fab: "",
                    fixed: "",
                    right: "",
                    title: "Scroll to top"
                },
                on: {
                    click: e.toTop
                }
            }, [t(b["a"], [e._v("mdi-rocket")])], 1)], 1)
        }
          , Pe = []
          , De = {
            name: "AppFab",
            data() {
                return {
                    fab: !1
                }
            },
            methods: {
                onScroll() {
                    if ("undefined" === typeof window)
                        return;
                    const e = window.pageYOffset || document.documentElement.offsetTop || 0;
                    this.fab = e > 300
                },
                toTop() {
                    this.$vuetify.goTo(0)
                }
            }
        }
          , Re = De
          , Ue = Object(u["a"])(Re, Le, Pe, !1, null, null, null)
          , Ie = Ue.exports
          , Me = {
            name: "LayoutDefault",
            components: {
                AppDrawer: H,
                AppToolbar: Te,
                AppFab: Ie
            },
            data() {
                return {
                    mini: !1,
                    showDrawer: !0
                }
            },
            methods: {
                handleDrawerVisiable() {
                    this.$refs.drawer.toggleDrawer()
                }
            }
        }
          , $e = Me
          , Fe = (a("6cce"),
        Object(u["a"])($e, p, f, !1, null, "64680c49", null))
          , ze = Fe.exports
          , Be = a("553a")
          , Ke = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "media"
            }, [t("app-toolbar", {
                staticClass: "media_toolbar"
            }), t("media-drawer"), t(o["a"], [t("div", {
                staticClass: "media_wrapper"
            }, [t("router-view")], 1), t(Be["a"], {
                staticClass: "pa-3 app--footer",
                attrs: {
                    height: "auto"
                }
            }, [t("span", [e._v("isocked.com Design © " + e._s((new Date).getFullYear()))]), t(J["a"]), t("span", {
                staticClass: "caption mr-1"
            }, [e._v("Make With Love")]), t(b["a"], {
                attrs: {
                    color: "pink",
                    small: ""
                }
            }, [e._v("mdi-heart")])], 1)], 1)], 1)
        }
          , We = []
          , qe = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "media_drawer"
            }, [t(_["a"], {
                attrs: {
                    app: ""
                }
            }, [t(g["a"], {
                attrs: {
                    dark: "",
                    height: "64",
                    block: "",
                    color: "primary",
                    tile: ""
                }
            }, [e._v(e._s(e.$t("media")))]), t(A["a"], {
                staticClass: "media-list pa-0"
            }, [e._l(e.items, (function(a) {
                return [a.heading ? [t(ae["a"], {
                    key: a.heading
                }, [e._v(" " + e._s(a.heading) + " ")]), t(ee["a"], {
                    key: "d" + a.heading
                })] : [t(O["a"], {
                    key: a.text,
                    attrs: {
                        link: "",
                        exact: "",
                        to: a.to
                    }
                }, [a.icon ? t(L["a"], [t("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [t("use", {
                    attrs: {
                        "xlink:href": e.getIconByExt(a.icon)
                    }
                })])]) : e._e(), t(C["g"], [t(C["k"], [e._v(e._s(a.title))])], 1)], 1)]]
            }
            ))], 2)], 1)], 1)
        }
          , He = []
          , Ge = {
            data() {
                return {
                    items: [{
                        heading: this.$t("file_type")
                    }, {
                        title: this.$t("video"),
                        icon: "video",
                        to: {
                            path: "/media/video"
                        }
                    }, {
                        title: this.$t("image"),
                        icon: "jpg",
                        to: {
                            path: "/media/image"
                        }
                    }, {
                        title: this.$t("document"),
                        icon: "doc",
                        to: {
                            path: "/media/doc"
                        }
                    }]
                }
            },
            computed: {
                ...Object(w["c"])(["getIconByExt"])
            }
        }
          , Ve = Ge
          , Je = (a("a69d"),
        Object(u["a"])(Ve, qe, He, !1, null, "7f0fb001", null))
          , Ye = Je.exports
          , Ze = {
            name: "LayoutMedia",
            components: {
                AppToolbar: Te,
                MediaDrawer: Ye
            }
        }
          , Qe = Ze
          , Xe = (a("26a4"),
        Object(u["a"])(Qe, Ke, We, !1, null, "70fa997c", null))
          , et = (Xe.exports,
        function() {
            var e = this
              , t = e._self._c;
            return t("router-view")
        }
        )
          , tt = []
          , at = {
            name: "RouteWrapper"
        }
          , st = at
          , rt = Object(u["a"])(st, et, tt, !1, null, null, null);
        rt.exports;
        const nt = [{
            path: "*",
            component: () => a.e("chunk-62f4186b").then(a.bind(null, "d31a"))
        }, {
            path: "/auth",
            component: h,
            meta: {
                title: "Login"
            },
            redirect: "/auth/login",
            hidden: !0,
            children: [{
                path: "login",
                name: "login",
                meta: {
                    title: "Login"
                },
                component: () => a.e("chunk-6bad0cd5").then(a.bind(null, "5326"))
            }]
        }, {
            path: "/404",
            name: "404",
            meta: {
                title: "Not Found"
            },
            component: () => a.e("chunk-62f4186b").then(a.bind(null, "d31a"))
        }, {
            path: "/500",
            name: "500",
            meta: {
                title: "Server Error"
            },
            component: () => a.e("chunk-bbee6adc").then(a.bind(null, "2609"))
        }]
          , ot = [{
            path: "/",
            component: ze,
            meta: {
                title: "home",
                icon: ""
            },
            redirect: "/dashboard",
            children: [{
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: "dashboard",
                    icon: "mdi-view-dashboard"
                },
                component: () => a.e("chunk-80952dca").then(a.bind(null, "7277"))
            }, {
                path: "/map",
                meta: {
                    title: "แผนที่",
                    icon: "mdi-map"
                },
                name: "map",
                props: e => ({
                    type: e.query.type
                }),
                component: () => a.e("chunk-7eca0c14").then(a.bind(null, "073a"))
            }, {
                path: "/marker",
                meta: {
                    title: "เซ็นเซอร์",
                    icon: "mdi-map-marker"
                },
                name: "marker",
                props: e => ({
                    type: e.query.type
                }),
                component: () => a.e("chunk-4bdda8ae").then(a.bind(null, "6b2d"))
            }, {
                path: "/user",
                meta: {
                    title: "ผู้ใช้",
                    icon: "mdi-account-details",
                    role: ["admin"]
                },
                name: "users",
                props: e => ({
                    type: e.query.type
                }),
                component: () => a.e("chunk-9f446358").then(a.bind(null, "0630"))
            }, {
                path: "/403",
                name: "Forbidden",
                meta: {
                    title: "access_denied",
                    hidden: !0
                },
                component: () => a.e("chunk-6b0d15d8").then(a.bind(null, "971f"))
            }]
        }];
        var it = a("323e")
          , ct = a.n(it)
          , lt = (a("a5d8"),
        a("4360"));
        const dt = nt.concat(ot);
        s["a"].use(r["a"]);
        const ut = new r["a"]({
            mode: "hash",
            linkActiveClass: "active",
            routes: dt
        });
        ut.beforeEach( (e, t, a) => {
            ct.a.start();
            const s = lt["a"].getters.getUser;
            ot.find(t => t.name && t.name == e.name || t.children && t.children.find(t => t.name == e.name)) ? s ? a() : a({
                name: "login",
                query: {
                    redirect: e.path
                }
            }) : a()
        }
        ),
        ut.afterEach( () => {
            ct.a.done()
        }
        );
        t["a"] = ut
    },
    a574: function(e, t, a) {},
    a69d: function(e, t, a) {
        "use strict";
        a("db0d")
    },
    a6f7: function(e, t, a) {
        "use strict";
        a("3dbf")
    },
    ad18: function(e, t, a) {},
    bf38: function(e, t, a) {
        "use strict";
        a("a574")
    },
    c7d4: function(e, t, a) {
        "use strict";
        a.r(t);
        a("14d9");
        var s = a("bc3a")
          , r = a.n(s)
          , n = a("4360");
        const o = r.a.create({
            baseURL: Object({
                NODE_ENV: "production",
                BASE_URL: "/"
            }).VUE_APP_BASE_API,
            timeout: 5e4,
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
          , i = e => {
            const {status: t, data: a} = e.response
              , {errors: s} = a;
            let r = [];
            for (let n in s)
                r.push(s[n]);
            switch (t) {
            case 400:
                n["a"].commit("SHOW_SNACKBAR", {
                    text: a.message,
                    color: "error"
                });
                break;
            case 422:
                n["a"].commit("SHOW_SNACKBAR", {
                    text: r,
                    color: "error"
                });
                break;
            case 401:
                n["a"].commit("SHOW_SNACKBAR", {
                    text: r,
                    color: "error"
                });
                break;
            case 403:
                n["a"].commit("SHOW_SNACKBAR", {
                    text: r,
                    color: "error"
                });
                break;
            case 500:
                n["a"].commit("SHOW_SNACKBAR", {
                    text: "server error",
                    color: "error"
                });
                break;
            default:
                break
            }
            return Promise.reject(e)
        }
        ;
        o.interceptors.request.use(e => (e.headers["Access-Control-Allow-Origin"] = "*",
        e.headers["Content-Type"] = "application/json",
        e.headers["Authorization"] = "Bearer " + n["a"].getters.getAccessToken,
        e), i),
        o.interceptors.response.use( ({data: e, config: t}) => (["put", "post", "delete", "patch"].includes(t.method) && e.meta && n["a"].commit("SHOW_SNACKBAR", {
            text: e.meta.message,
            color: "success"
        }),
        e), i);
        var c = a("a026")
          , l = a("a18c");
        const d = {
            user: null,
            error: "",
            language: "en",
            loginModal: !1
        }
          , u = {
            getUser: e => e.user,
            isUserAuth: e => !!e.user,
            getError: e => e.error,
            getAvatar: e => e.user ? e.user.photoURL : null,
            getDisplayName: e => e.user ? e.user.displayName || e.user.email : null,
            getUID: e => e.user ? e.user.user.uid : null,
            getLanguage: e => e.language,
            isAdmin: e => e.user && e.user.customToken && !0 === e.user.customToken.claims.admin,
            isTechnician: e => e.user && e.user.customToken && !0 === e.user.customToken.claims.technician
        }
          , m = {
            authAction({commit: e, dispatch: t}) {
                c["a"].prototype.$auth.onAuthStateChanged(async t => {
                    c["a"].prototype.$db;
                    if (t) {
                        try {
                            let a = await t.getIdTokenResult();
                            t.customToken = a,
                            e("SET_USER", t),
                            this._vm.$bus.$emit("userLoggedIn")
                        } catch (a) {
                            return console.log(a),
                            void this._vm.$toast.error("Error : cannot get user info!")
                        }
                        await e("SET_LOGIN_MODAL", !1)
                    } else
                        e("SET_USER", null)
                }
                )
            },
            async emailRegister({commit: e}, t) {
                try {
                    const a = c["a"].prototype.$firebase;
                    let s = await a.auth().createUserWithEmailAndPassword(t.email, t.pass);
                    if (s && s.user) {
                        let t = await s.user.getIdTokenResult();
                        return s.user.customToken = t,
                        e("SET_USER", s.user),
                        {
                            success: !0,
                            data: s
                        }
                    }
                    return {
                        success: !1,
                        reason: "NO_USER_DATA"
                    }
                } catch (i) {
                    return {
                        success: !1,
                        reason: i.message
                    }
                }
            },
            async emailLogin({commit: e}, t) {
                try {
                    const a = c["a"].prototype.$firebase;
                    let s = await a.auth().signInWithEmailAndPassword(t.email, t.pass);
                    if (s && s.user) {
                        let t = await s.user.getIdTokenResult();
                        return s.user.customToken = t,
                        e("SET_USER", s.user),
                        {
                            success: !0,
                            data: s
                        }
                    }
                    return {
                        success: !1,
                        reason: "NO_USER_DATA"
                    }
                } catch (i) {
                    return {
                        success: !1,
                        reason: i.message
                    }
                }
            },
            async socialLogin({commit: e}, t) {
                try {
                    const a = c["a"].prototype.$firebase;
                    let s = null;
                    if ("google" == t ? s = new a.auth.GoogleAuthProvider : "facebook" == t ? s = new a.auth.FacebookAuthProvider : "github" == t && (s = new a.auth.GithubAuthProvider),
                    !s)
                        return reject({
                            success: !1,
                            reason: "NO_PROVIDER_PROVIDED"
                        });
                    let r = await a.auth().signInWithPopup(s);
                    if (r && r.credential && r.user) {
                        let t = await r.user.getIdTokenResult();
                        return r.user.customToken = t,
                        e("SET_USER", r.user),
                        {
                            success: !0,
                            data: r
                        }
                    }
                    return {
                        success: !1,
                        reason: "NO_USER_DATA"
                    }
                } catch (i) {
                    return {
                        success: !1,
                        reason: i.message
                    }
                }
            },
            logout({commit: e, dispatch: t}, a=!1) {
                e("SET_USER", null),
                a && l["a"].push({
                    path: "/auth/login"
                }).then( () => {
                    l["a"].go()
                }
                )
            }
        }
          , h = {
            SET_USER(e, t) {
                e.user = t
            },
            SET_ERROR(e, t) {
                e.error = t
            },
            SET_LOGIN_MODAL(e, t) {
                e.loginModal = t
            }
        };
        t["default"] = {
            namespace: !0,
            state: d,
            getters: u,
            actions: m,
            mutations: h
        }
    },
    ce3c: function(e, t, a) {},
    d307: function(e, t, a) {
        var s = {
            "./app.js": "d9cd",
            "./auth.js": "c7d4",
            "./event.js": "daf6",
            "./index.js": "2a74",
            "./marker.js": "18f2",
            "./user.js": "0f9a"
        };
        function r(e) {
            var t = n(e);
            return a(t)
        }
        function n(e) {
            if (!a.o(s, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return s[e]
        }
        r.keys = function() {
            return Object.keys(s)
        }
        ,
        r.resolve = n,
        e.exports = r,
        r.id = "d307"
    },
    d9cd: function(e, t, a) {
        "use strict";
        a.r(t);
        a("14d9");
        const s = {
            mode: "light",
            themeColor: "#ff9800",
            theme: "orange",
            snackbar: {
                show: !1,
                text: "",
                color: ""
            },
            locale: "th",
            notificatons: [{
                title: "New user registered",
                color: "light-green",
                icon: "mdi-account-circle",
                timeLabel: "Just now"
            }, {
                title: "New order received",
                color: "light-blue",
                icon: "mdi-cart-plus",
                timeLabel: "2 min ago"
            }, {
                title: "New payment made",
                color: "cyan",
                icon: "mdi-receipt",
                timeLabel: "24 min ago"
            }, {
                title: "New message from Michael",
                color: "red",
                icon: "mdi-email",
                timeLabel: "1 hour ago"
            }]
        }
          , r = {
            getSnackbar: e => e.snackbar,
            getLocale: e => e.locale,
            getTheme: e => e.theme,
            getThemeColor: e => e.themeColor,
            getNotification: e => e.notificatons
        }
          , n = {
            updateNotification({commit: e}, t) {
                const a = {
                    title: t,
                    color: "light-green",
                    icon: "mdi-account-circle",
                    timeLabel: "Just now"
                };
                e("UPDATE_NOTIFICATION", a)
            },
            clearNotificaton({commit: e}) {
                e("CLEAR_NOTIFICATION")
            }
        }
          , o = {
            setThemeColor(e, t) {
                e.themeColor = t
            },
            setTheme(e, t) {
                e.theme = t
            },
            SET_LOCALE(e, t) {
                e.locale = t
            },
            UPDATE_NOTIFICATION(e, t) {
                e.notificatons.push(t)
            },
            CLEAR_NOTIFICATION(e) {
                e.notificatons = []
            },
            SHOW_SNACKBAR(e, {color: t, text: a}) {
                e.snackbar.show = !0,
                e.snackbar.color = t,
                e.snackbar.text = a
            },
            HIDE_SNACKBAR(e) {
                e.snackbar.show = !1
            }
        };
        t["default"] = {
            namespace: !0,
            state: s,
            getters: r,
            actions: n,
            mutations: o
        }
    },
    daf6: function(e, t, a) {
        "use strict";
        a.r(t);
        a("14d9");
        const s = (new Date).toDateString()
          , r = {
            lastId: 2,
            events: [{
                id: 1,
                name: "Standup meeting",
                start: new Date(s + " 09:30"),
                end: new Date(s + " 10:00"),
                color: "red",
                timed: !0
            }, {
                id: 2,
                name: "National Day",
                start: new Date("2020-10-01"),
                end: new Date("2020-10-07"),
                color: "green",
                timed: !1
            }]
        }
          , n = {
            getEvents: e => e.events
        }
          , o = {
            createEvent({state: e}, t) {
                t.id = e.lastId++,
                e.events.push(t)
            },
            updateEvent({state: e}, t) {
                e.events.forEach(e => {
                    e.id === t.id && (e = t)
                }
                )
            }
        }
          , i = {};
        t["default"] = {
            namespace: !0,
            state: r,
            getters: n,
            actions: o,
            mutations: i
        }
    },
    db0d: function(e, t, a) {},
    de19: function(e, t, a) {},
    f126: function(e, t, a) {
        "use strict";
        var s = a("132d")
          , r = function() {
            var e = this
              , t = e._self._c;
            return t("figure", {
                staticClass: "c-avatar"
            }, [e._t("top"), e.src ? t("img", {
                staticClass: "c-avatar__image",
                style: e.imgStyles,
                attrs: {
                    src: e.src,
                    alt: "",
                    referrerpolicy: "no-referrer"
                }
            }) : t("div", {
                staticClass: "c-avatar__inital",
                style: e.charStyles
            }, [e._v(" " + e._s(e.username.charAt(0).toUpperCase()) + " ")]), e.showUnread ? t("span", {
                class: e.alertClasses,
                style: e.alertIndicatorStyles
            }, [t("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.unread > 0,
                    expression: "unread > 0"
                }]
            }, [e._v(e._s(e.unread))])]) : e._e(), e.icon ? t(s["a"], {
                staticClass: "c-avatar__icon",
                attrs: {
                    size: "18"
                }
            }, [e._v(e._s(e.icon))]) : e.status ? t("span", {
                class: e.statusClasses,
                style: e.indicatorStyles
            }) : e._e()], 2)
        }
          , n = []
          , o = a("80d2")
          , i = {
            name: "CAvatar",
            props: {
                src: {
                    type: [String, null]
                },
                size: {
                    type: [Number, String],
                    default: 48
                },
                status: {
                    type: String
                },
                icon: {
                    type: String
                },
                username: {
                    type: String,
                    default: ""
                },
                color: {
                    type: [String, Number],
                    default: "#2196f3"
                },
                unread: Number
            },
            data() {
                return {}
            },
            computed: {
                showUnread() {
                    return this.unread > 0 && !this.$route.path.includes(this.publicId)
                },
                imgStyles() {
                    return {
                        height: Object(o["i"])(this.size),
                        minWidth: Object(o["i"])(this.size),
                        width: Object(o["i"])(this.size)
                    }
                },
                charStyles() {
                    return {
                        height: Object(o["i"])(this.size),
                        minWidth: Object(o["i"])(this.size),
                        width: Object(o["i"])(this.size),
                        "background-color": this.color
                    }
                },
                indicatorStyles() {
                    const e = this.size / 3;
                    return {
                        height: Object(o["i"])(e),
                        minWidth: Object(o["i"])(e),
                        width: Object(o["i"])(e)
                    }
                },
                alertIndicatorStyles() {
                    const e = this.size / 2;
                    return {
                        height: Object(o["i"])(e),
                        minWidth: Object(o["i"])(e)
                    }
                },
                alertClasses() {
                    return ["c-avatar__alert", "alert"]
                },
                statusClasses() {
                    return ["c-avatar__status", this.status]
                }
            },
            watch: {},
            created() {
                void 0 === window._AVATAR && (window._AVATAR = this)
            },
            methods: {}
        }
          , c = i
          , l = (a("bf38"),
        a("2877"))
          , d = Object(l["a"])(c, r, n, !1, null, "a9a5ea7c", null);
        t["a"] = d.exports
    }
});
