//#region site/components/reusable/capability-host.ts
var e = class extends HTMLElement {
	currentAdapter = null;
	generation = 0;
	controller = null;
	cleanup = null;
	get adapter() {
		return this.currentAdapter;
	}
	set adapter(e) {
		e !== this.currentAdapter && (this.currentAdapter = e, this.scheduleRemount());
	}
	connectedCallback() {
		this.scheduleRemount();
	}
	disconnectedCallback() {
		this.scheduleTeardown();
	}
	reportError(e) {
		this.dispatchEvent(new CustomEvent("project-capability-error", {
			bubbles: !0,
			composed: !0,
			detail: Object.freeze({ error: e })
		}));
	}
	scheduleRemount() {
		this.remount().catch((e) => this.reportError(e));
	}
	scheduleTeardown() {
		this.teardown().catch((e) => this.reportError(e));
	}
	async releaseCurrent() {
		this.controller?.abort(), this.controller = null;
		let e = this.cleanup;
		this.cleanup = null, e && await e();
	}
	async teardown() {
		this.generation += 1, await this.releaseCurrent();
	}
	async remount() {
		let e = ++this.generation;
		await this.releaseCurrent();
		let t = this.currentAdapter;
		if (!this.isConnected || !t || e !== this.generation) return;
		let n = new AbortController();
		this.controller = n;
		let r = await t.mount({
			host: this,
			signal: n.signal
		}), i = typeof r == "function" ? r : null;
		if (e !== this.generation || n.signal.aborted || !this.isConnected || t !== this.currentAdapter) {
			i && await i();
			return;
		}
		this.cleanup = i;
	}
}, t = globalThis, n = t.ShadowRoot && (t.ShadyCSS === void 0 || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, r = Symbol(), i = /* @__PURE__ */ new WeakMap(), a = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== r) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (n && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = i.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && i.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, o = (e) => new a(typeof e == "string" ? e : e + "", void 0, r), s = (e, ...t) => new a(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, r), c = (e, r) => {
	if (n) e.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let n of r) {
		let r = document.createElement("style"), i = t.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, e.appendChild(r);
	}
}, l = n ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return o(t);
})(e) : e, { is: u, defineProperty: d, getOwnPropertyDescriptor: ee, getOwnPropertyNames: te, getOwnPropertySymbols: ne, getPrototypeOf: re } = Object, f = globalThis, p = f.trustedTypes, ie = p ? p.emptyScript : "", ae = f.reactiveElementPolyfillSupport, m = (e, t) => e, h = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ie : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, oe = (e, t) => !u(e, t), se = {
	attribute: !0,
	type: String,
	converter: h,
	reflect: !1,
	useDefault: !1,
	hasChanged: oe
};
Symbol.metadata ??= Symbol("metadata"), f.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var g = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = se) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && d(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = ee(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? se;
	}
	static _$Ei() {
		if (this.hasOwnProperty(m("elementProperties"))) return;
		let e = re(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(m("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(m("properties"))) {
			let e = this.properties, t = [...te(e), ...ne(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(l(e));
		} else e !== void 0 && t.push(l(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return c(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? h : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? h : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? oe)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, g[m("elementProperties")] = /* @__PURE__ */ new Map(), g[m("finalized")] = /* @__PURE__ */ new Map(), ae?.({ ReactiveElement: g }), (f.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js
var _ = globalThis, v = (e) => e, y = _.trustedTypes, b = y ? y.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, x = "$lit$", S = `lit$${Math.random().toFixed(9).slice(2)}$`, C = "?" + S, ce = `<${C}>`, w = document, T = () => w.createComment(""), E = (e) => e === null || typeof e != "object" && typeof e != "function", D = Array.isArray, le = (e) => D(e) || typeof e?.[Symbol.iterator] == "function", O = "[ 	\n\f\r]", k = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ue = /-->/g, A = />/g, j = RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), M = /'/g, N = /"/g, P = /^(?:script|style|textarea|title)$/i, F = (e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}), I = F(1), L = F(2), R = Symbol.for("lit-noChange"), z = Symbol.for("lit-nothing"), B = /* @__PURE__ */ new WeakMap(), V = w.createTreeWalker(w, 129);
function H(e, t) {
	if (!D(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return b === void 0 ? t : b.createHTML(t);
}
var de = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = k;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === k ? c[1] === "!--" ? o = ue : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = j) : (P.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = j) : o = A : o === j ? c[0] === ">" ? (o = i ?? k, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? j : c[3] === "\"" ? N : M) : o === N || o === M ? o = j : o === ue || o === A ? o = k : (o = j, i = void 0);
		let d = o === j && e[t + 1].startsWith("/>") ? " " : "";
		a += o === k ? n + ce : l >= 0 ? (r.push(s), n.slice(0, l) + x + n.slice(l) + S + d) : n + S + (l === -2 ? t : d);
	}
	return [H(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, U = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = de(t, n);
		if (this.el = e.createElement(l, r), V.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = V.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(x)) {
					let t = u[o++], n = i.getAttribute(e).split(S), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? pe : r[1] === "?" ? me : r[1] === "@" ? he : K
					}), i.removeAttribute(e);
				} else e.startsWith(S) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (P.test(i.tagName)) {
					let e = i.textContent.split(S), t = e.length - 1;
					if (t > 0) {
						i.textContent = y ? y.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], T()), V.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], T());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === C) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(S, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += S.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = w.createElement("template");
		return n.innerHTML = e, n;
	}
};
function W(e, t, n = e, r) {
	if (t === R) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = E(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = W(e, i._$AS(e, t.values), i, r)), t;
}
var fe = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? w).importNode(t, !0);
		V.currentNode = r;
		let i = V.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new G(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new ge(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = V.nextNode(), a++);
		}
		return V.currentNode = w, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, G = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = z, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = W(this, e, t), E(e) ? e === z || e == null || e === "" ? (this._$AH !== z && this._$AR(), this._$AH = z) : e !== this._$AH && e !== R && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? le(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== z && E(this._$AH) ? this._$AA.nextSibling.data = e : this.T(w.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = U.createElement(H(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new fe(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = B.get(e.strings);
		return t === void 0 && B.set(e.strings, t = new U(e)), t;
	}
	k(t) {
		D(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(T()), this.O(T()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = v(e).nextSibling;
			v(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, K = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = z, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = z;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = W(this, e, t, 0), a = !E(e) || e !== this._$AH && e !== R, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = W(this, r[n + o], t, o), s === R && (s = this._$AH[o]), a ||= !E(s) || s !== this._$AH[o], s === z ? e = z : e !== z && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === z ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, pe = class extends K {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === z ? void 0 : e;
	}
}, me = class extends K {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== z);
	}
}, he = class extends K {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = W(this, e, t, 0) ?? z) === R) return;
		let n = this._$AH, r = e === z && n !== z || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== z && (n === z || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, ge = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		W(this, e);
	}
}, _e = _.litHtmlPolyfillSupport;
_e?.(U, G), (_.litHtmlVersions ??= []).push("3.3.3");
var ve = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new G(t.insertBefore(T(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, q = globalThis, J = class extends g {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ve(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return R;
	}
};
J._$litElement$ = !0, J.finalized = !0, q.litElementHydrateSupport?.({ LitElement: J });
var ye = q.litElementPolyfillSupport;
ye?.({ LitElement: J }), (q.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region site/components/reusable/embed-theme.ts
var Y = s`
  :host {
    color: var(--luum-embed-ink, #211d14);
    font-family: var(
      --luum-embed-font,
      "Avenir Next",
      "Segoe UI",
      system-ui,
      sans-serif
    );
    --_luum-paper: var(--luum-embed-paper, #fff9e4);
    --_luum-panel: var(--luum-embed-panel, #f6df8f);
    --_luum-line: var(--luum-embed-line, #211d14);
    --_luum-muted: var(--luum-embed-muted, #655f50);
    --_luum-accent: var(--luum-embed-accent, #236f5e);
    --_luum-focus: var(--luum-embed-focus, #1d6d5d);
    --_luum-radius: var(--luum-embed-radius, 0px);
    --_luum-shadow: var(--luum-embed-shadow, 5px 5px 0 #211d14);
  }

  button {
    font: inherit;
  }

  button:focus-visible {
    outline: 3px solid var(--_luum-focus);
    outline-offset: 4px;
  }
`;
//#endregion
//#region site/components/reusable/project-site-motion.ts
function be() {
	return typeof globalThis.matchMedia == "function" && globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
async function xe(e, t) {
	let n = e;
	if (!n?.startViewTransition || be()) {
		await t();
		return;
	}
	await n.startViewTransition(t).finished.catch(() => void 0);
}
//#endregion
//#region site/components/reusable/embed-graph.ts
var Se = (e) => Math.min(92, Math.max(8, e)), Ce = class extends J {
	static properties = {
		nodes: { attribute: !1 },
		edges: { attribute: !1 },
		selectedId: {
			type: String,
			attribute: "selected-id"
		},
		ariaLabel: {
			type: String,
			attribute: "aria-label"
		}
	};
	static styles = [Y, s`
      :host {
        display: block;
        min-inline-size: 0;
      }

      [part="surface"] {
        position: relative;
        min-block-size: var(--luum-embed-graph-height, 22rem);
        overflow: hidden;
        border: 2px solid var(--_luum-line);
        border-radius: var(--_luum-radius);
        background: var(--_luum-paper);
        box-shadow: var(--_luum-shadow);
      }

      svg {
        position: absolute;
        inset: 0;
        inline-size: 100%;
        block-size: 100%;
        pointer-events: none;
      }

      [part="edge"] {
        stroke: var(--edge-color, color-mix(in srgb, var(--_luum-line) 52%, transparent));
        stroke-width: 1.5;
      }

      [part="edge-label"] {
        fill: var(--_luum-muted);
        font: 700 3px var(--luum-embed-font, system-ui, sans-serif);
        paint-order: stroke;
        stroke: var(--_luum-paper);
        stroke-width: 1.2px;
      }

      [part="node"] {
        position: absolute;
        translate: -50% -50%;
        display: grid;
        gap: 0.15rem;
        min-inline-size: 5.5rem;
        max-inline-size: 9rem;
        min-block-size: 44px;
        padding: 0.55rem 0.65rem;
        border: 2px solid var(--node-color, var(--_luum-line));
        border-radius: var(--_luum-radius);
        background: color-mix(in srgb, var(--node-color, var(--_luum-panel)) 12%, var(--_luum-paper));
        color: inherit;
        box-shadow: 3px 3px 0 color-mix(in srgb, var(--_luum-line) 75%, transparent);
        text-align: center;
        cursor: pointer;
        view-transition-name: match-element;
      }

      [part="node"][aria-pressed="true"] {
        border-color: var(--node-color, var(--_luum-accent));
        box-shadow:
          inset 0 3px 0 var(--node-color, var(--_luum-accent)),
          3px 3px 0 var(--_luum-line);
      }

      [part="node-label"] {
        font-size: 0.84rem;
        font-weight: 900;
        line-height: 1.05;
      }

      [part="node-detail"] {
        color: var(--_luum-muted);
        font-size: 0.7rem;
        line-height: 1.2;
      }
    `];
	constructor() {
		super(), this.nodes = [], this.edges = [], this.selectedId = "", this.ariaLabel = "Relationship graph";
	}
	resolvedPosition(e, t) {
		if (e.position) return Object.freeze({
			x: Se(e.position.x),
			y: Se(e.position.y)
		});
		let n = t / Math.max(1, this.nodes.length) * Math.PI * 2 - Math.PI / 2;
		return Object.freeze({
			x: 50 + Math.cos(n) * 34,
			y: 50 + Math.sin(n) * 32
		});
	}
	selectNode(e) {
		xe(this.renderRoot.querySelector("[part=\"surface\"]"), async () => {
			this.selectedId = e, this.dispatchEvent(new CustomEvent("luum-embed-select", {
				bubbles: !0,
				composed: !0,
				detail: Object.freeze({
					kind: "graph",
					id: e
				})
			})), await this.updateComplete;
		});
	}
	render() {
		let e = this.nodes.map((e, t) => Object.freeze({
			...e,
			position: this.resolvedPosition(e, t)
		})), t = new Map(e.map((e) => [e.id, e]));
		return I`
      <div part="surface" role="group" aria-label=${this.ariaLabel}>
        <svg viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
          ${this.edges.map((e) => {
			let n = t.get(e.sourceId), r = t.get(e.targetId);
			if (!n || !r) return z;
			let i = (n.position.x + r.position.x) / 2, a = (n.position.y + r.position.y) / 2;
			return L`
              <line
                part="edge"
                x1=${n.position.x}
                y1=${n.position.y}
                x2=${r.position.x}
                y2=${r.position.y}
                style=${e.color ? `--edge-color:${e.color}` : z}
              ></line>
              ${e.label ? L`<text part="edge-label" x=${i} y=${a - 1} text-anchor="middle">${e.label}</text>` : z}
            `;
		})}
        </svg>
        ${e.map((e) => I`
            <button
              part="node"
              type="button"
              aria-pressed=${this.selectedId === e.id ? "true" : "false"}
              style=${`left:${String(e.position.x)}%;top:${String(e.position.y)}%;${e.color ? `--node-color:${e.color};` : ""}`}
              @click=${() => this.selectNode(e.id)}
            >
              <span part="node-label">${e.label}</span>
              ${e.detail ? I`<span part="node-detail">${e.detail}</span>` : z}
            </button>
          `)}
      </div>
    `;
	}
}, we = class extends J {
	static properties = {
		items: { attribute: !1 },
		selectedId: {
			type: String,
			attribute: "selected-id"
		},
		ariaLabel: {
			type: String,
			attribute: "aria-label"
		}
	};
	static styles = [Y, s`
      :host {
        display: block;
        min-inline-size: 0;
      }

      [part="surface"] {
        position: relative;
        overflow-x: auto;
        overscroll-behavior-inline: contain;
        padding: 1rem 0.35rem 1.2rem;
      }

      [part="rail"] {
        position: relative;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: minmax(10rem, 1fr);
        align-items: stretch;
        gap: 1rem;
        min-inline-size: max(100%, calc(var(--luum-embed-item-count, 1) * 11rem));
      }

      [part="rail"]::before {
        content: "";
        position: absolute;
        inset-inline: 0;
        inset-block-start: 2.15rem;
        block-size: 2px;
        background: color-mix(in srgb, var(--_luum-line) 38%, transparent);
      }

      [part="item"] {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-rows: auto auto 1fr;
        gap: 0.3rem;
        min-block-size: 7.2rem;
        padding: 0.75rem 0.8rem;
        border: 2px solid var(--_luum-line);
        border-radius: var(--_luum-radius);
        background: var(--_luum-paper);
        color: inherit;
        box-shadow: var(--_luum-shadow);
        text-align: start;
        cursor: pointer;
        view-transition-name: match-element;
      }

      [part="item"]::before {
        content: "";
        inline-size: 0.9rem;
        block-size: 0.9rem;
        margin-block-start: -1.15rem;
        border: 2px solid var(--_luum-line);
        border-radius: 999px;
        background: var(--item-color, var(--_luum-accent));
      }

      [part="item"][aria-current="true"] {
        border-color: var(--item-color, var(--_luum-accent));
        box-shadow:
          inset 0 4px 0 var(--item-color, var(--_luum-accent)),
          var(--_luum-shadow);
      }

      [part="time"] {
        color: var(--_luum-muted);
        font-family: ui-monospace, "SFMono-Regular", Menlo, monospace;
        font-size: 0.75rem;
        font-weight: 850;
        letter-spacing: 0.05em;
      }

      [part="label"] {
        font-size: 1rem;
        font-weight: 900;
        line-height: 1.05;
      }

      [part="detail"] {
        color: var(--_luum-muted);
        font-size: 0.82rem;
        line-height: 1.45;
      }

      @media (prefers-reduced-motion: reduce) {
        [part="surface"] {
          scroll-behavior: auto;
        }
      }
    `];
	constructor() {
		super(), this.items = [], this.selectedId = "", this.ariaLabel = "Timeline";
	}
	selectItem(e) {
		xe(this.renderRoot.querySelector("[part=\"surface\"]"), async () => {
			this.selectedId = e, this.dispatchEvent(new CustomEvent("luum-embed-select", {
				bubbles: !0,
				composed: !0,
				detail: Object.freeze({
					kind: "timeline",
					id: e
				})
			})), await this.updateComplete;
		});
	}
	render() {
		let e = Math.max(1, this.items.length);
		return I`
      <div
        part="surface"
        role="region"
        aria-label=${this.ariaLabel}
        style=${`--luum-embed-item-count:${String(e)}`}
      >
        <div part="rail" role="group" aria-label="Timeline items">
          ${this.items.map((e) => I`
              <button
                part="item"
                type="button"
                aria-current=${this.selectedId === e.id ? "true" : z}
                style=${e.color ? `--item-color:${e.color}` : z}
                @click=${() => this.selectItem(e.id)}
              >
                <span part="time">${e.timeLabel}</span>
                <span part="label">${e.label}</span>
                ${e.detail ? I`<span part="detail">${e.detail}</span>` : z}
              </button>
            `)}
        </div>
      </div>
    `;
	}
}, Te = Object.freeze([
	.5,
	.75,
	1,
	1.25,
	1.5,
	2,
	3
]), X = 1, Z = 36, Ee = 320, De = 28;
function Q(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
var Oe = class extends J {
	static properties = {
		src: { type: String },
		alt: { type: String },
		caption: { type: String },
		minZoom: {
			type: Number,
			attribute: "min-zoom"
		},
		maxZoom: {
			type: Number,
			attribute: "max-zoom"
		},
		zoom: { state: !0 }
	};
	static styles = s`
    :host { display:block; min-inline-size:0; font:inherit; color:inherit }
    figure { display:grid; gap:.45rem; margin:0; min-inline-size:0 }
    .viewport {
      position:relative; display:grid; place-items:center; min-block-size:10rem;
      overflow:hidden; border-radius:var(--media-viewer-radius,.55rem);
      background:var(--media-viewer-surface,color-mix(in srgb,CanvasText 5%,Canvas));
      touch-action:none; user-select:none;
    }
    .viewport:focus-visible { outline:2px solid var(--media-viewer-focus,Highlight); outline-offset:2px }
    img {
      display:block; inline-size:100%; block-size:100%; max-block-size:var(--media-viewer-max-height,70dvh);
      object-fit:contain; transform:translate(var(--media-pan-x,0),var(--media-pan-y,0)) scale(var(--media-zoom,1));
      transform-origin:center; will-change:transform; pointer-events:none;
    }
    figcaption { color:var(--media-viewer-muted,GrayText); font-size:.82em }
    .controls { display:flex; align-items:center; justify-content:center; gap:.4rem }
    button {
      min-inline-size:var(--media-viewer-target-size,44px); min-block-size:var(--media-viewer-target-size,44px);
      border:1px solid color-mix(in srgb,CanvasText 18%,Canvas); border-radius:.45rem;
      background:Canvas; color:CanvasText; font:inherit;
    }
    output { min-inline-size:4ch; text-align:center; font-variant-numeric:tabular-nums }
    @media (pointer:coarse) { button { min-inline-size:48px; min-block-size:48px } }
  `;
	panX = 0;
	panY = 0;
	pointers = /* @__PURE__ */ new Map();
	pinchDistance = 0;
	pinchCenter = null;
	lastTap = null;
	constructor() {
		super(), this.src = "", this.alt = "", this.caption = "", this.minZoom = .5, this.maxZoom = 3, this.zoom = X;
	}
	get viewport() {
		return this.renderRoot.querySelector(".viewport");
	}
	syncTransform() {
		let e = this.renderRoot.querySelector("img");
		e && (e.style.setProperty("--media-zoom", String(this.zoom)), e.style.setProperty("--media-pan-x", `${this.panX}px`), e.style.setProperty("--media-pan-y", `${this.panY}px`));
	}
	clampPan(e = this.viewport) {
		if (!e || this.zoom <= 1.001) {
			this.panX = 0, this.panY = 0;
			return;
		}
		let t = e.clientWidth * (this.zoom - 1) / 2, n = e.clientHeight * (this.zoom - 1) / 2;
		this.panX = Q(this.panX, -t, t), this.panY = Q(this.panY, -n, n);
	}
	setPan(e, t, n = this.viewport) {
		this.panX = e, this.panY = t, this.clampPan(n), this.syncTransform();
	}
	setZoom(e, t = this.viewport, n = null) {
		let r = Math.min(this.minZoom, this.maxZoom), i = Math.max(this.minZoom, this.maxZoom), a = this.zoom, o = Q(e, r, i);
		if (!(Math.abs(a - o) < 1e-4)) {
			if (t && n && a > 0) {
				let e = t.getBoundingClientRect(), r = n.x - e.left - e.width / 2, i = n.y - e.top - e.height / 2, s = o / a;
				this.panX = r - s * (r - this.panX), this.panY = i - s * (i - this.panY);
			}
			this.zoom = o, this.clampPan(t), this.syncTransform(), this.dispatchEvent(new CustomEvent("media-viewer-zoom", {
				bubbles: !0,
				composed: !0,
				detail: Object.freeze({ zoom: o })
			}));
		}
	}
	resetView() {
		this.zoom = X, this.panX = 0, this.panY = 0, this.pointers.clear(), this.pinchDistance = 0, this.pinchCenter = null, this.syncTransform();
	}
	stepZoom(e) {
		let t = Te.filter((e) => e >= this.minZoom && e <= this.maxZoom);
		if (!t.length) {
			this.setZoom(this.zoom + e * .25);
			return;
		}
		let n = e > 0 ? t.find((e) => e > this.zoom + .001) ?? t.at(-1) ?? this.maxZoom : [...t].reverse().find((e) => e < this.zoom - .001) ?? t[0] ?? this.minZoom;
		this.setZoom(n);
	}
	pinchMetrics() {
		let e = [...this.pointers.values()];
		if (e.length < 2) return null;
		let t = e[0], n = e[1];
		if (!(t && n)) return null;
		let r = n.x - t.x, i = n.y - t.y;
		return Object.freeze({
			distance: Math.hypot(r, i),
			center: Object.freeze({
				x: (t.x + n.x) / 2,
				y: (t.y + n.y) / 2
			})
		});
	}
	onPointerDown(e) {
		if (!this.src || e.pointerType === "mouse" && e.button !== 0) return;
		let t = e.currentTarget;
		if (!(t instanceof HTMLElement)) return;
		e.preventDefault(), t.focus({ preventScroll: !0 });
		try {
			t.setPointerCapture(e.pointerId);
		} catch {}
		this.pointers.set(e.pointerId, Object.freeze({
			x: e.clientX,
			y: e.clientY
		}));
		let n = this.pinchMetrics();
		n && (this.pinchDistance = Math.max(1, n.distance), this.pinchCenter = n.center);
	}
	onPointerMove(e) {
		let t = this.pointers.get(e.pointerId);
		if (!t) return;
		let n = e.currentTarget;
		if (!(n instanceof HTMLElement)) return;
		this.pointers.set(e.pointerId, Object.freeze({
			x: e.clientX,
			y: e.clientY
		}));
		let r = this.pinchMetrics();
		if (r) {
			e.preventDefault();
			let t = this.pinchCenter ?? r.center;
			this.panX += r.center.x - t.x, this.panY += r.center.y - t.y;
			let i = this.pinchDistance > 0 ? r.distance / this.pinchDistance : 1;
			this.setZoom(this.zoom * i, n, r.center), this.pinchDistance = Math.max(1, r.distance), this.pinchCenter = r.center;
			return;
		}
		this.zoom > 1.001 && (e.preventDefault(), this.setPan(this.panX + e.clientX - t.x, this.panY + e.clientY - t.y, n));
	}
	releasePointer(e) {
		let t = e.currentTarget;
		if (t instanceof HTMLElement) {
			this.pointers.delete(e.pointerId);
			try {
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId);
			} catch {}
			if (this.pointers.size < 2 && (this.pinchDistance = 0, this.pinchCenter = null), (e.type === "pointercancel" || e.type === "lostpointercapture") && (this.lastTap = null), e.type === "pointerup" && e.pointerType === "touch" && this.pointers.size === 0) {
				let n = Date.now(), r = this.lastTap;
				r && n - r.at <= Ee && Math.hypot(e.clientX - r.x, e.clientY - r.y) <= De ? (this.lastTap = null, this.setZoom(this.zoom > 1.001 ? X : 2, t, {
					x: e.clientX,
					y: e.clientY
				})) : this.lastTap = Object.freeze({
					x: e.clientX,
					y: e.clientY,
					at: n
				});
			}
		}
	}
	onWheel(e) {
		if (!this.src) return;
		let t = e.currentTarget;
		if (!(t instanceof HTMLElement)) return;
		e.preventDefault();
		let n = e.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 : e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? Math.max(1, t.clientHeight) : 1;
		this.setZoom(this.zoom * Math.exp(-e.deltaY * n * .0015), t, {
			x: e.clientX,
			y: e.clientY
		});
	}
	onDoubleClick(e) {
		e.preventDefault(), this.setZoom(this.zoom > 1.001 ? X : 2, this.viewport, {
			x: e.clientX,
			y: e.clientY
		});
	}
	onKeyDown(e) {
		if (e.key === "+" || e.key === "=") {
			e.preventDefault(), this.stepZoom(1);
			return;
		}
		if (e.key === "-" || e.key === "_") {
			e.preventDefault(), this.stepZoom(-1);
			return;
		}
		if (e.key === "0" || e.key === "Escape") {
			e.preventDefault(), this.resetView();
			return;
		}
		this.zoom <= 1.001 || (e.key === "ArrowLeft" ? (e.preventDefault(), this.setPan(this.panX + Z, this.panY)) : e.key === "ArrowRight" ? (e.preventDefault(), this.setPan(this.panX - Z, this.panY)) : e.key === "ArrowUp" ? (e.preventDefault(), this.setPan(this.panX, this.panY + Z)) : e.key === "ArrowDown" && (e.preventDefault(), this.setPan(this.panX, this.panY - Z)));
	}
	updated(e) {
		e.has("src") && this.resetView(), this.syncTransform();
	}
	render() {
		if (!this.src) return z;
		let e = `${Math.round(this.zoom * 100)}%`;
		return I`
      <figure part="figure">
        <div
          class="viewport"
          part="viewport"
          tabindex="0"
          role="group"
          aria-label="Image viewer. Drag to pan when zoomed; pinch, wheel, plus or minus to zoom; zero resets."
          aria-keyshortcuts="+ - 0 ArrowLeft ArrowRight ArrowUp ArrowDown"
          @pointerdown=${this.onPointerDown}
          @pointermove=${this.onPointerMove}
          @pointerup=${this.releasePointer}
          @pointercancel=${this.releasePointer}
          @lostpointercapture=${this.releasePointer}
          @wheel=${this.onWheel}
          @dblclick=${this.onDoubleClick}
          @keydown=${this.onKeyDown}
        >
          <img part="image" src=${this.src} alt=${this.alt} decoding="async" draggable="false" />
        </div>
        ${this.caption ? I`<figcaption part="caption">${this.caption}</figcaption>` : z}
        <div class="controls" part="controls" role="group" aria-label="Image zoom">
          <button type="button" part="zoom-out" aria-label="Zoom image out" @click=${() => this.stepZoom(-1)}
            ?disabled=${this.zoom <= this.minZoom + .001}>−</button>
          <output part="zoom-level" aria-live="polite">${e}</output>
          <button type="button" part="zoom-in" aria-label="Zoom image in" @click=${() => this.stepZoom(1)}
            ?disabled=${this.zoom >= this.maxZoom - .001}>+</button>
        </div>
      </figure>
    `;
	}
}, ke = "0.6.0";
function Ae(e) {
	return e;
}
var $ = class extends we {}, je = class extends Ce {}, Me = class extends Oe {};
typeof customElements < "u" && !customElements.get("xt-project-timeline") && customElements.define("xt-project-timeline", $), typeof customElements < "u" && !customElements.get("xt-project-graph") && customElements.define("xt-project-graph", je), typeof customElements < "u" && !customElements.get("xt-project-media-viewer") && customElements.define("xt-project-media-viewer", Me), typeof customElements < "u" && !customElements.get("xt-project-capability") && customElements.define("xt-project-capability", e);
async function Ne(e) {
	if (typeof document > "u") {
		await e();
		return;
	}
	let t = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches, n = document;
	if (t || typeof n.startViewTransition != "function" || n.activeViewTransition) {
		await e();
		return;
	}
	await n.startViewTransition(e).updateCallbackDone;
}
//#endregion
export { ke as PROJECT_SITE_KIT_VERSION, e as ProjectCapabilityHostElement, je as ProjectGraphElement, Me as ProjectMediaViewerElement, $ as ProjectTimelineElement, Ae as defineProjectSite, Ne as runProjectViewTransition };
