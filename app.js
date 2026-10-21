(() => {
  "use strict";

  const PHONE_WA = "17867407339";
  const EMAIL = "decoeventolg@yahoo.com";
  const STORE_KEY = "decoevento-quote-v1";
  // URL de la app web de Google Apps Script que guarda cada solicitud en Google Sheets (ver apps-script/Code.gs).
  // Mientras esté vacía, la página funciona igual pero no guarda las solicitudes.
  const LEADS_URL = "";

  // ---------- Textos ----------
  const T = {
    es: {
      title: "Decoevento · Solicita tu estimado",
      kicker: "Catering & Eventos",
      heroA: "Planea tu", heroB: "evento",
      heroLede: "Cuéntanos de tu celebración y elige tu menú plato a plato. Te preparamos un estimado y te lo enviamos por WhatsApp o correo.",
      step1: "Tu evento", step2: "Menú", step3: "Enviar",
      s1a: "Tu", s1b: "evento", s2: "Menú", s3a: "Tu", s3b: "solicitud",
      qOccasion: "Motivo de la celebración", occasionOtherPh: "Cuéntanos cuál",
      qDate: "Fecha del evento",
      qVenue: "¿Dónde es el evento?", locationPh: "Ciudad o dirección (opcional)",
      qGuests: "¿Cuántos invitados?", guestsUnit: "invitados",
      qDuration: "¿Cuánto tiempo estimas que dure?",
      qServices: "¿Qué necesitas de nosotros?", servicesHint: "Puedes elegir varios",
      errRequired: "Este dato es necesario", errGuests: "Indica cuántos invitados esperas", errServices: "Elige al menos un servicio",
      errContact: "Escribe tu nombre y un número de WhatsApp para enviarte el estimado",
      toMenu: "Continuar al menú", toSend: "Continuar", toQuote: "Revisar y enviar", back: "Atrás",
      editMenu: "Editar menú", editEvent: "Editar evento",
      menuHint: "Toca un plato para agregarlo. Con tu selección te preparamos el estimado.",
      contactTitle: "¿A dónde te enviamos tu estimado?",
      contactLede: "Revisa tu selección arriba, déjanos tus datos y envíanos la solicitud.",
      name: "Nombre", phone: "WhatsApp", email: "Correo (opcional)", notes: "Notas (alergias, ideas, estilo)",
      privacy: "Solo usamos tus datos para darte seguimiento sobre este evento.",
      sendLede: "¿Por dónde prefieres enviarla?",
      sendWa: "Solicitar estimado por WhatsApp", sendMail: "Solicitar por correo",
      sendNote: "Decoevento prepara tu estimado y te responde por el mismo medio.",
      doneTitle: (n) => `¡Gracias${n ? `, ${n}` : ""}!`,
      doneText: (ref) => `Tu solicitud ${ref} está lista para enviarse. Si no se abrió WhatsApp o tu correo, toca el botón otra vez.`,
      refLabel: "Ref.", testimonialsTitle: "Lo que dicen nuestros clientes",
      thanks: "Gracias",
      fine: "Precios del menú por persona o por pieza. El estimado final incluye impuesto (7%), cargo de servicio y fee de equipo de cocina, montaje y transporte según el tamaño del evento.",
      occasions: ["Boda", "Cumpleaños", "Quinceañera", "Baby shower", "Bautizo / Comunión", "Graduación", "Aniversario", "Corporativo", "Otro"],
      venues: ["Residencia", "Venue"],
      durations: ["2 – 3 horas", "4 horas", "5 horas", "6 horas o más"],
      services: ["Wedding planner", "Catering", "Rentals", "Decoración", "Staff"],
      each: "c/u", perPerson: "por persona", pieces: "Piezas", plates: "Platos", persons: "personas",
      perGuest: (n) => `≈ ${n} por invitado`,
      minNote: (m) => `Mínimo ${m} personas`, setupNote: (f) => `${f} set up fee`,
      billedMin: (m) => `Mínimo ${m} personas`,
      forGuests: (n) => `Para ${n} invitados`,
      choose: "Elige", of: "de",
      trayNone: "Aún no has elegido platos",
      tray: (n) => `<b>${n}</b> ${n === 1 ? "plato elegido" : "platos elegidos"}`,
      requestFor: "Solicitud de", requestForYou: "Tu solicitud",
      requestLabel: "Solicitud de estimado",
      fOccasion: "Motivo", fDate: "Fecha", fVenue: "Lugar", fGuests: "Invitados", fDuration: "Duración", fServices: "Servicios",
      servicesDetail: "Detalles de servicios", menuTitle: "Menú elegido",
      noItems: "Aún no elegiste platos. Igual puedes enviarnos la solicitud y te asesoramos con el menú.",
      sheetFine: "Este es un resumen de lo que elegiste, no una cotización. Decoevento te enviará un estimado formal que incluye impuesto (7%), cargo de servicio según el número de invitados y fee de equipo de cocina, montaje y transporte según el tamaño del evento. Staff, decoración y rentals se cotizan aparte.",
      openedWa: "Abriendo WhatsApp…", openedMail: "Abriendo tu correo…",
      msgHello: (ref) => `Hola Decoevento, quiero solicitar un estimado para mi evento (Ref. ${ref}).`,
      msgEvent: "EVENTO", msgServices: "SERVICIOS", msgMenu: "MENÚ", msgContact: "CONTACTO", msgNotes: "Notas",
      msgPrefer: (c) => `Prefiero recibir el estimado por ${c}.`,
      mailSubject: (o, d, ref) => `Solicitud de estimado · ${o} · ${d} · ${ref}`,
      tbd: "Por definir"
    },
    en: {
      title: "Decoevento · Request an estimate",
      kicker: "Catering & Events",
      heroA: "Plan your", heroB: "event",
      heroLede: "Tell us about your celebration and pick your menu dish by dish. We'll prepare an estimate and send it by WhatsApp or email.",
      step1: "Your event", step2: "Menu", step3: "Send",
      s1a: "Your", s1b: "event", s2: "Menu", s3a: "Your", s3b: "request",
      qOccasion: "What are you celebrating?", occasionOtherPh: "Tell us what",
      qDate: "Event date",
      qVenue: "Where is the event?", locationPh: "City or address (optional)",
      qGuests: "How many guests?", guestsUnit: "guests",
      qDuration: "How long will it last?",
      qServices: "What do you need from us?", servicesHint: "Choose as many as you like",
      errRequired: "We need this one", errGuests: "Tell us how many guests you expect", errServices: "Choose at least one service",
      errContact: "Add your name and a WhatsApp number so we can send your estimate",
      toMenu: "Continue to menu", toSend: "Continue", toQuote: "Review and send", back: "Back",
      editMenu: "Edit menu", editEvent: "Edit event",
      menuHint: "Tap a dish to add it. We'll prepare your estimate from your selection.",
      contactTitle: "Where should we send your estimate?",
      contactLede: "Review your selection above, leave your details and send us the request.",
      name: "Name", phone: "WhatsApp", email: "Email (optional)", notes: "Notes (allergies, ideas, style)",
      privacy: "We only use your details to follow up about this event.",
      sendLede: "How would you like to send it?",
      sendWa: "Request estimate via WhatsApp", sendMail: "Request via email",
      sendNote: "Decoevento prepares your estimate and replies through the same channel.",
      doneTitle: (n) => `Thank you${n ? `, ${n}` : ""}!`,
      doneText: (ref) => `Your request ${ref} is ready to send. If WhatsApp or your email didn't open, tap the button again.`,
      refLabel: "Ref.", testimonialsTitle: "What our clients say",
      thanks: "Thank you",
      fine: "Menu prices are per person or per piece. The final estimate includes 7% tax, a service charge and a kitchen equipment, set-up and transport fee based on the size of the event.",
      occasions: ["Wedding", "Birthday", "Sweet 15", "Baby shower", "Baptism / Communion", "Graduation", "Anniversary", "Corporate", "Other"],
      venues: ["Residence", "Venue"],
      durations: ["2 – 3 hours", "4 hours", "5 hours", "6+ hours"],
      services: ["Wedding planner", "Catering", "Rentals", "Decor", "Staff"],
      each: "each", perPerson: "per person", pieces: "Pieces", plates: "Plates", persons: "guests",
      perGuest: (n) => `≈ ${n} per guest`,
      minNote: (m) => `Minimum ${m} guests`, setupNote: (f) => `${f} set-up fee`,
      billedMin: (m) => `Minimum ${m} guests`,
      forGuests: (n) => `For ${n} guests`,
      choose: "Choose", of: "of",
      trayNone: "No dishes chosen yet",
      tray: (n) => `<b>${n}</b> ${n === 1 ? "dish chosen" : "dishes chosen"}`,
      requestFor: "Request from", requestForYou: "Your request",
      requestLabel: "Estimate request",
      fOccasion: "Occasion", fDate: "Date", fVenue: "Location", fGuests: "Guests", fDuration: "Duration", fServices: "Services",
      servicesDetail: "Service details", menuTitle: "Selected menu",
      noItems: "You haven't picked any dishes yet. You can still send the request and we'll help you build the menu.",
      sheetFine: "This is a summary of your selection, not a quote. Decoevento will send you a formal estimate including 7% tax, a service charge based on guest count and a kitchen equipment, set-up and transport fee based on the size of the event. Staff, decor and rentals are quoted separately.",
      openedWa: "Opening WhatsApp…", openedMail: "Opening your email…",
      msgHello: (ref) => `Hi Decoevento, I'd like to request an estimate for my event (Ref. ${ref}).`,
      msgEvent: "EVENT", msgServices: "SERVICES", msgMenu: "MENU", msgContact: "CONTACT", msgNotes: "Notes",
      msgPrefer: (c) => `I'd prefer to receive the estimate by ${c}.`,
      mailSubject: (o, d, ref) => `Estimate request · ${o} · ${d} · ${ref}`,
      tbd: "TBD"
    }
  };

  const OCCASION_OTHER = 8;
  const SERVICE_CATERING = 1;

  // Preguntas extra según el servicio elegido (índice en T.services)
  const opts = (es, en) => ({ es, en });
  const EXTRAS = {
    0: [
      { id: "plannerType", short: { es: "Tipo de apoyo", en: "Support" }, type: "single", label: { es: "¿Qué tipo de apoyo buscas?", en: "What kind of support do you need?" },
        options: opts(["Planificación completa", "Coordinación del día", "Asesoría puntual"], ["Full planning", "Day-of coordination", "Consulting"]) },
      { id: "plannerNotes", short: { es: "Proveedores contratados", en: "Vendors booked" }, type: "text", label: { es: "¿Ya tienes algún proveedor contratado? (opcional)", en: "Any vendors already booked? (optional)" } }
    ],
    1: [
      { id: "serviceStyle", short: { es: "Estilo de servicio", en: "Service style" }, type: "single", label: { es: "¿Qué estilo de servicio prefieres?", en: "Which service style do you prefer?" },
        options: opts(["Pasapalos / cóctel", "Estaciones", "Plato servido a la mesa", "Buffet", "Aún no sé"], ["Passed bites / cocktail", "Stations", "Plated", "Buffet", "Not sure yet"]) }
    ],
    2: [
      { id: "rentals", short: { es: "Alquilar", en: "Rent" }, type: "multi", label: { es: "¿Qué necesitas alquilar?", en: "What do you need to rent?" },
        options: opts(["Mesas", "Sillas", "Mantelería", "Vajilla y cubiertos", "Cristalería", "Carpa", "Lounge / sofás", "Calentadores (chafing)"],
          ["Tables", "Chairs", "Linens", "Plates & flatware", "Glassware", "Tent", "Lounge furniture", "Chafing dishes"]) },
      { id: "rentalsNotes", short: { es: "Detalles", en: "Details" }, type: "text", label: { es: "Cantidades o detalles (opcional)", en: "Quantities or details (optional)" } }
    ],
    3: [
      { id: "decor", short: { es: "Decorar", en: "Decorate" }, type: "multi", label: { es: "¿Qué te gustaría decorar?", en: "What would you like decorated?" },
        options: opts(["Mesa principal", "Centros de mesa", "Backdrop / photo wall", "Arco o flores", "Mesa de dulces", "Globos", "Entrada"],
          ["Head table", "Centerpieces", "Backdrop / photo wall", "Arch or florals", "Dessert table", "Balloons", "Entrance"]) },
      { id: "decorStyle", short: { es: "Estilo / colores", en: "Style / colors" }, type: "text", label: { es: "Estilo, temática o colores", en: "Style, theme or colors" } }
    ],
    4: [
      { id: "staff", short: { es: "Personal", en: "Staff" }, type: "multi", label: { es: "¿Qué personal necesitas?", en: "Which staff do you need?" },
        options: opts(["Meseros", "Bartender", "Chef en sitio", "Coordinador del evento", "Limpieza"], ["Servers", "Bartender", "On-site chef", "Event coordinator", "Cleaning crew"]) }
    ]
  };

  // ---------- Estado ----------
  const defaults = () => ({
    lang: (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es",
    step: 1,
    event: { occasion: null, occasionOther: "", date: "", venue: null, location: "", guests: "", duration: null, services: [], extras: {} },
    sel: {},
    contact: { name: "", phone: "", email: "", notes: "" },
    ref: newRef(),
    origin: ""
  });

  function newRef() {
    const d = new Date();
    const mmdd = String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0");
    return `COT-${mmdd}-${Math.floor(100 + Math.random() * 900)}`;
  }

  let state = defaults();
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
    if (saved && saved.event) {
      state = Object.assign(defaults(), saved, { step: 1 });
      state.event.extras = state.event.extras || {};
    }
  } catch (_) { /* almacenamiento no disponible */ }

  // De dónde llegó el cliente (por ejemplo ?utm_source=instagram en el enlace de la bio)
  (() => {
    const q = new URLSearchParams(location.search);
    const utm = ["utm_source", "utm_medium", "utm_campaign"].map((k) => q.get(k)).filter(Boolean).join(" / ");
    const ref = document.referrer && !document.referrer.includes(location.host) ? new URL(document.referrer).hostname : "";
    if (utm || ref) state.origin = utm || ref;
  })();

  const save = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (_) {} };

  const t = () => T[state.lang];
  const L = (o) => (o == null ? "" : typeof o === "string" ? o : o[state.lang] ?? o.es);
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const money = (n) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }).format(n);
  const money2 = (n) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(n);
  const guests = () => Math.max(0, parseInt(state.event.guests, 10) || 0);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICON_PLUS = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
  const ICON_TICK = '<svg class="tick" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';

  const ITEMS = {};
  MENU.forEach((cat) => cat.items.forEach((it) => { ITEMS[it.id] = { ...it, cat }; }));

  // ---------- Idioma ----------
  function applyLang() {
    const tx = t();
    document.documentElement.lang = state.lang;
    document.title = tx.title;
    $$("[data-i18n]").forEach((el) => { const v = tx[el.dataset.i18n]; if (typeof v === "string") el.textContent = v; });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = tx[el.dataset.i18nPh]; });
    const lang = $(".lang");
    lang.dataset.active = state.lang;
    $$("button", lang).forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)));
    renderChips();
    renderMenu();
    updateTray();
    renderExtras();
    syncStepLabels();
    if (state.step === 3) renderSheet();
    renderProof();
  }

  $$(".lang button").forEach((b) => b.addEventListener("click", () => {
    if (state.lang === b.dataset.lang) return;
    state.lang = b.dataset.lang; save(); applyLang();
  }));

  // ---------- Paso 1 ----------
  function chip(label, pressed, attrs = "") {
    return `<button type="button" class="chip" aria-pressed="${pressed}" ${attrs}>${ICON_TICK}<span>${esc(label)}</span></button>`;
  }

  function renderChips() {
    const tx = t(), ev = state.event;
    const map = { occasion: tx.occasions, venue: tx.venues, duration: tx.durations };
    Object.entries(map).forEach(([key, list]) => {
      $(`[data-single="${key}"]`).innerHTML = list.map((l, i) => chip(l, ev[key] === i, `data-i="${i}"`)).join("");
    });
    $('[data-multi="services"]').innerHTML = tx.services.map((l, i) => chip(l, ev.services.includes(i), `data-i="${i}"`)).join("");
    $("#occasionOther").hidden = ev.occasion !== OCCASION_OTHER;
  }

  $$("[data-single]").forEach((box) => box.addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    const key = box.dataset.single, i = +b.dataset.i;
    state.event[key] = state.event[key] === i && key !== "venue" ? null : i;
    $$(".chip", box).forEach((c) => c.setAttribute("aria-pressed", String(+c.dataset.i === state.event[key])));
    if (key === "occasion") {
      const other = $("#occasionOther");
      other.hidden = state.event.occasion !== OCCASION_OTHER;
      if (!other.hidden) other.focus();
    }
    box.closest(".q").classList.remove("is-invalid");
    save();
  }));

  $('[data-multi="services"]').addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    const i = +b.dataset.i, s = state.event.services;
    const at = s.indexOf(i);
    at > -1 ? s.splice(at, 1) : s.push(i);
    s.sort();
    b.setAttribute("aria-pressed", String(at === -1));
    b.closest(".q").classList.remove("is-invalid");
    renderExtras(); syncStepLabels();
    save();
  });

  // Preguntas extra por servicio
  function renderExtras() {
    const tx = t(), ex = state.event.extras;
    $("#extras").innerHTML = state.event.services.filter((i) => EXTRAS[i]).map((i) => `
      <fieldset class="q q--extra" data-svc="${i}">
        <legend><span class="q__n">+</span><span>${esc(tx.services[i])}</span></legend>
        ${EXTRAS[i].map((q) => {
          const label = `<p class="q__hint">${esc(L(q.label))}</p>`;
          if (q.type === "text") return `<label class="extra-text">${label}<input class="line" type="text" data-extra="${q.id}" value="${esc(ex[q.id] || "")}"></label>`;
          const picked = q.type === "single" ? [ex[q.id]] : ex[q.id] || [];
          return `<div class="extra-q">${label}<div class="chips" data-extra="${q.id}" data-type="${q.type}">${q.options[state.lang].map((o, k) => chip(o, picked.includes(k), `data-k="${k}"`)).join("")}</div></div>`;
        }).join("")}
      </fieldset>`).join("");
  }

  $("#extras").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    const box = b.closest("[data-extra]"), id = box.dataset.extra, k = +b.dataset.k, ex = state.event.extras;
    if (box.dataset.type === "single") ex[id] = ex[id] === k ? null : k;
    else {
      const list = (ex[id] = ex[id] || []), at = list.indexOf(k);
      at > -1 ? list.splice(at, 1) : list.push(k);
      list.sort((x, y) => x - y);
    }
    $$(".chip", box).forEach((c) => {
      const kk = +c.dataset.k;
      c.setAttribute("aria-pressed", String(box.dataset.type === "single" ? ex[id] === kk : ex[id].includes(kk)));
    });
    save();
  });

  $("#extras").addEventListener("input", (e) => {
    const el = e.target.closest("input[data-extra]"); if (!el) return;
    state.event.extras[el.dataset.extra] = el.value; save();
  });

  // Si no pidió catering, el paso del menú no aplica
  function syncStepLabels() {
    const tx = t(), menu = needsMenu();
    $('#eventForm button[type="submit"] span').textContent = menu ? tx.toMenu : tx.toSend;
    const nav = $('.steps__list button[data-goto="2"]');
    nav.classList.toggle("is-skipped", !menu);
    nav.disabled = !menu;
    const back = $(".back3");
    back.dataset.goto = menu ? "2" : "1";
    $("span", back).textContent = menu ? tx.editMenu : tx.editEvent;
  }

  const fields = { occasionOther: "occasionOther", date: "date", location: "location", guests: "guests" };
  Object.entries(fields).forEach(([key, id]) => {
    const el = document.getElementById(id);
    el.value = state.event[key] || "";
    el.addEventListener("input", () => {
      state.event[key] = el.value;
      el.closest(".q").classList.remove("is-invalid");
      if (key === "guests") syncAutoQty();
      save();
    });
  });

  // Fecha mínima: hoy
  (() => {
    const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    $("#date").min = d.toISOString().slice(0, 10);
  })();

  $$("[data-guests]").forEach((b) => b.addEventListener("click", () => {
    const n = Math.max(1, Math.min(2000, guests() + +b.dataset.guests));
    state.event.guests = String(n);
    $("#guests").value = n;
    $("#guests").closest(".q").classList.remove("is-invalid");
    syncAutoQty(); save();
  }));

  function validateEvent(show) {
    const ev = state.event, bad = [];
    if (ev.occasion == null || (ev.occasion === OCCASION_OTHER && !ev.occasionOther.trim())) bad.push("occasion");
    if (!ev.date) bad.push("date");
    if (ev.venue == null) bad.push("venue");
    if (!guests()) bad.push("guests");
    if (!ev.services.length) bad.push("services");
    if (show) {
      $$(".q[data-field]").forEach((q) => q.classList.toggle("is-invalid", bad.includes(q.dataset.field)));
      if (bad.length) {
        const first = $(`.q[data-field="${bad[0]}"]`);
        first.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth", block: "center" });
      }
    }
    return bad.length === 0;
  }

  $("#eventForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateEvent(true)) goTo(needsMenu() ? 2 : 3);
  });

  // ---------- Paso 2: menú ----------
  function priceLabel(it) {
    const tx = t(), unit = it.cat.unit;
    const suffix = unit === "piece" ? tx.each : tx.perPerson;
    if (it.variants) return `${it.variants.map((v) => money2(v.price)).join(" · ")} <span>${suffix}</span>`;
    return `${money2(it.price)} <span>${suffix}</span>`;
  }

  function selOf(id) { return state.sel[id]; }

  function newSel(it) {
    const s = { variant: it.variants ? it.variants[0].id : null, choices: {} };
    if (it.cat.unit !== "person") { s.qty = guests() || 50; s.auto = true; }
    return s;
  }

  function maxFor(group, sel) {
    return typeof group.max === "object" ? group.max[sel?.variant] ?? Math.max(...Object.values(group.max)) : group.max;
  }

  function stationPersons(it) {
    return Math.max(guests(), it.min || 0);
  }

  function renderExtra(it) {
    const tx = t(), s = selOf(it.id) || newSel(it);
    let html = "";
    if (it.variants) {
      html += `<div class="chips" data-variant>${it.variants.map((v) => chip(`${L(v.label)} · ${money(v.price)}`, s.variant === v.id, `data-v="${v.id}"`)).join("")}</div>`;
    }
    if (it.cat.unit === "person") {
      const g = guests(), p = stationPersons(it);
      const note = it.min && g < it.min ? tx.billedMin(it.min) : tx.forGuests(g);
      html += `<p class="qty__hint">${esc(note)}</p>`;
    } else {
      const label = it.cat.unit === "plate" ? tx.plates : tx.pieces;
      const ratio = guests() ? (s.qty / guests()).toFixed(1).replace(/\.0$/, "") : null;
      html += `<div class="qty">
        <span class="qty__label">${label}</span>
        <span class="qty__ctrl">
          <button type="button" data-step="-1" aria-label="−">−</button>
          <input type="number" inputmode="numeric" min="1" value="${s.qty}" aria-label="${label}">
          <button type="button" data-step="1" aria-label="+">+</button>
        </span>
        ${ratio ? `<span class="qty__hint">${tx.perGuest(ratio)}</span>` : ""}
      </div>`;
    }
    (it.choices || []).forEach((g) => {
      const picked = s.choices[g.id] || [];
      const max = maxFor(g, s);
      html += `<div class="group" data-group="${g.id}">
        <p class="group__label"><span>${tx.choose} · ${esc(L(g.label))}</span><span class="group__count ${picked.length >= max ? "is-full" : ""}">${picked.length} ${tx.of} ${max}</span></p>
        <div class="chips">${g.options.map((o, i) => chip(L(o), picked.includes(i), `data-o="${i}" ${!picked.includes(i) && picked.length >= max ? 'aria-disabled="true"' : ""}`)).join("")}</div>
      </div>`;
    });
    return html;
  }

  function itemHTML(it) {
    const tx = t(), on = !!selOf(it.id);
    const meta = [];
    if (it.min) meta.push(tx.minNote(it.min));
    if (it.setup) meta.push(tx.setupNote(money(it.setup)));
    return `<li class="item ${on ? "is-on" : ""}" data-id="${it.id}">
      <div class="item__body" data-toggle>
        ${it.tag ? `<span class="item__tag">${esc(L(it.tag))}</span>` : ""}
        <h3 class="item__name">${esc(L(it.name))}</h3>
        ${it.desc ? `<p class="item__desc">${esc(L(it.desc))}</p>` : ""}
        ${it.includes ? `<ul class="station-incl">${it.includes.map((x) => `<li>${esc(L(x))}</li>`).join("")}</ul>` : ""}
        <span class="item__price">${priceLabel(it)}</span>
        ${meta.length ? `<p class="station-meta">${meta.join(" · ")}</p>` : ""}
      </div>
      <button type="button" class="add" data-toggle aria-pressed="${on}" aria-label="${esc(L(it.name))}">${ICON_PLUS}</button>
      <div class="item__extra"><div><div class="extra">${renderExtra(it)}</div></div></div>
    </li>`;
  }

  function renderMenu() {
    $("#menu").innerHTML = MENU.map((cat) => {
      const [a, b] = cat.title[state.lang];
      return `<section class="cat" id="cat-${cat.id}">
        <h2 class="cat__title">${esc(a)}${b ? ` <em>${esc(b)}</em>` : ""}</h2>
        ${cat.note ? `<p class="cat__note">${esc(L(cat.note))}</p>` : ""}
        <ul class="cat__list">${cat.items.map((it) => itemHTML(ITEMS[it.id])).join("")}</ul>
      </section>`;
    }).join("");
    renderCatnav();
  }

  function renderCatnav() {
    $("#catnav .catnav__inner").innerHTML = MENU.map((cat) => {
      const n = cat.items.filter((it) => selOf(it.id)).length;
      return `<a href="#cat-${cat.id}" data-cat="${cat.id}">${esc(cat.title[state.lang].join(" "))}${n ? `<sup>${n}</sup>` : ""}</a>`;
    }).join("");
    spyCats();
  }

  function refreshItem(li) {
    const it = ITEMS[li.dataset.id], on = !!selOf(it.id);
    li.classList.toggle("is-on", on);
    $(".add", li).setAttribute("aria-pressed", String(on));
    $(".extra", li).innerHTML = renderExtra(it);
  }

  function setOn(li, on) {
    const it = ITEMS[li.dataset.id];
    if (on && !selOf(it.id)) state.sel[it.id] = newSel(it);
    if (!on) delete state.sel[it.id];
    refreshItem(li);
    afterChange();
  }

  function afterChange() {
    save(); updateTray(); renderCatnav();
  }

  $("#menu").addEventListener("click", (e) => {
    const li = e.target.closest(".item"); if (!li) return;
    const it = ITEMS[li.dataset.id];

    if (e.target.closest("[data-toggle]")) { setOn(li, !selOf(it.id)); return; }

    const v = e.target.closest("[data-variant] .chip");
    if (v) {
      const s = selOf(it.id); s.variant = v.dataset.v;
      (it.choices || []).forEach((g) => { const m = maxFor(g, s); if (s.choices[g.id]?.length > m) s.choices[g.id].length = m; });
      refreshItem(li); afterChange(); return;
    }

    const o = e.target.closest("[data-group] .chip");
    if (o) {
      const s = selOf(it.id), gid = o.closest("[data-group]").dataset.group;
      const g = it.choices.find((x) => x.id === gid), i = +o.dataset.o;
      const list = (s.choices[gid] = s.choices[gid] || []);
      const at = list.indexOf(i), max = maxFor(g, s);
      if (at > -1) list.splice(at, 1);
      else if (max === 1) list.splice(0, list.length, i);
      else if (list.length < max) list.push(i);
      else { nudge(o.closest("[data-group]").querySelector(".group__count")); return; }
      list.sort((a, b) => a - b);
      refreshItem(li); afterChange(); return;
    }

    const stepBtn = e.target.closest("[data-step]");
    if (stepBtn) {
      const s = selOf(it.id), inc = it.cat.unit === "plate" ? 5 : 10;
      const next = s.qty + +stepBtn.dataset.step * inc;
      s.qty = Math.max(1, Math.round(next / inc) * inc || inc);
      s.auto = false;
      refreshItem(li); afterChange();
    }
  });

  $("#menu").addEventListener("change", (e) => {
    const input = e.target.closest(".qty__ctrl input"); if (!input) return;
    const li = input.closest(".item"), s = selOf(li.dataset.id);
    s.qty = Math.max(1, parseInt(input.value, 10) || 1); s.auto = false;
    refreshItem(li); afterChange();
  });

  function nudge(el) {
    if (!el || prefersReduced()) return;
    el.animate([{ transform: "translateX(0)" }, { transform: "translateX(-3px)" }, { transform: "translateX(3px)" }, { transform: "translateX(0)" }], { duration: 240, easing: "ease-out" });
  }

  function syncAutoQty() {
    const g = guests();
    Object.entries(state.sel).forEach(([id, s]) => { if (s.auto && g) s.qty = g; });
    if (state.step === 2) $$("#menu .item.is-on").forEach(refreshItem);
  }

  let lastCount = -1;
  function updateTray() {
    const n = Object.keys(state.sel).length;
    $("#trayCount").innerHTML = n ? t().tray(n) : t().trayNone;
    if (n !== lastCount && lastCount !== -1) $("#trayCount b")?.classList.add("bump");
    lastCount = n;
  }

  // Resaltar la categoría visible en la barra
  let spyObserver;
  function spyCats() {
    if (spyObserver) spyObserver.disconnect();
    if (!("IntersectionObserver" in window)) return;
    spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const id = en.target.id.replace("cat-", "");
        $$("#catnav a").forEach((a) => {
          const on = a.dataset.cat === id;
          a.classList.toggle("is-active", on);
          if (on) a.scrollIntoView({ block: "nearest", inline: "nearest" });
        });
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    $$("#menu .cat").forEach((c) => spyObserver.observe(c));
  }

  // ---------- Paso 3: solicitud ----------
  // Total interno: solo se guarda en la hoja de Decoevento, no se muestra al cliente.
  function quote() {
    const tx = t(), lines = [];
    let food = 0, setup = 0;
    MENU.forEach((cat) => cat.items.forEach((raw) => {
      const s = selOf(raw.id); if (!s) return;
      const it = ITEMS[raw.id];
      const variant = it.variants?.find((v) => v.id === s.variant);
      const unitPrice = variant ? variant.price : it.price;
      const qty = it.cat.unit === "person" ? stationPersons(it) : s.qty;
      const picks = (it.choices || []).map((g) => {
        const list = (s.choices[g.id] || []).map((i) => L(g.options[i]));
        return list.length ? `${L(g.label)}: ${list.join(", ")}` : null;
      }).filter(Boolean);
      const unitWord = it.cat.unit === "piece" ? tx.pieces.toLowerCase() : it.cat.unit === "plate" ? tx.plates.toLowerCase() : tx.persons;
      lines.push({ cat, name: L(it.name), variant: variant ? L(variant.label) : null, picks, qtyText: `${qty} ${unitWord}`, unitPrice, qty, amount: unitPrice * qty });
      food += unitPrice * qty; setup += it.setup || 0;
    }));
    return { lines, food, setup, total: food + setup };
  }

  function fmtDate(iso) {
    if (!iso) return t().tbd;
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString(state.lang === "es" ? "es-US" : "en-US", { weekday: "short", day: "numeric", month: "long", year: "numeric" });
  }

  function eventFacts() {
    const tx = t(), ev = state.event;
    const occasion = ev.occasion === OCCASION_OTHER ? ev.occasionOther.trim() || tx.occasions[OCCASION_OTHER] : ev.occasion != null ? tx.occasions[ev.occasion] : tx.tbd;
    const venue = [ev.venue != null ? tx.venues[ev.venue] : null, ev.location.trim()].filter(Boolean).join(" · ") || tx.tbd;
    return [
      [tx.fOccasion, occasion],
      [tx.fDate, fmtDate(ev.date)],
      [tx.fVenue, venue],
      [tx.fGuests, guests() || tx.tbd],
      [tx.fDuration, ev.duration != null ? tx.durations[ev.duration] : tx.tbd],
      [tx.fServices, ev.services.map((i) => tx.services[i]).join(", ") || tx.tbd]
    ];
  }

  // Respuestas a las preguntas extra, como [servicio, [["pregunta", "respuesta"], …]]
  function extrasSummary() {
    const tx = t(), ex = state.event.extras;
    return state.event.services.filter((i) => EXTRAS[i]).map((i) => {
      const rows = EXTRAS[i].map((q) => {
        const v = ex[q.id];
        const list = q.options ? q.options[state.lang] : null;
        const val = q.type === "single" ? (v != null ? list[v] : "") : q.type === "multi" ? (v || []).map((k) => list[k]).join(", ") : (v || "").trim();
        return val ? [L(q.short), val] : null;
      }).filter(Boolean);
      return [tx.services[i], rows];
    }).filter(([, rows]) => rows.length);
  }

  function needsMenu() { return state.event.services.includes(SERVICE_CATERING); }

  function renderSheet() {
    const tx = t(), q = quote(), name = state.contact.name.trim();
    const today = new Date().toLocaleDateString(state.lang === "es" ? "es-US" : "en-US", { day: "numeric", month: "short", year: "numeric" });
    const groups = [];
    q.lines.forEach((l) => {
      let g = groups.find((x) => x.cat === l.cat);
      if (!g) groups.push((g = { cat: l.cat, lines: [] }));
      g.lines.push(l);
    });
    const extras = extrasSummary();

    $("#sheet").innerHTML = `
      <header class="sheet__head">
        <img class="sheet__logo" src="logo.png" alt="Decoevento">
        <p class="sheet__date">${tx.requestLabel} · ${tx.refLabel} ${esc(state.ref)}<br>${today}</p>
      </header>
      <h3 class="sheet__title" id="sheetTitle">${name ? `${tx.requestFor} <em>${esc(name)}</em>` : `<em>${tx.requestForYou}</em>`}</h3>
      <dl class="facts">${eventFacts().map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      ${extras.length ? `<div class="lines">
        <section class="lines__group"><h4>${tx.servicesDetail}</h4>
        ${extras.map(([svc, rows]) => `<div class="line-row line-row--plain"><span class="line-row__name">${esc(svc)}</span>
          <span class="line-row__sub">${rows.map(([k, v]) => `${esc(k)}: ${esc(v)}`).join("<br>")}</span></div>`).join("")}
        </section></div>` : ""}
      ${needsMenu() ? (groups.length ? `<div class="lines">${groups.map((gr) => `
        <section class="lines__group">
          <h4>${esc(gr.cat.title[state.lang].join(" "))}</h4>
          ${gr.lines.map((l) => `
            <div class="line-row line-row--plain">
              <span class="line-row__name">${esc(l.name)}${l.variant ? ` — ${esc(l.variant)}` : ""}</span>
              <span class="line-row__sub">${esc(l.qtyText)}${l.picks.length ? `<br>${l.picks.map(esc).join("<br>")}` : ""}</span>
            </div>`).join("")}
        </section>`).join("")}</div>` : `<p class="empty">${tx.noItems}</p>`) : ""}
      <p class="sheet__fine">${tx.sheetFine}</p>`;
    updateSendLinks();
  }

  // Contacto
  const cMap = { cName: "name", cPhone: "phone", cEmail: "email", cNotes: "notes" };
  Object.entries(cMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    el.value = state.contact[key] || "";
    el.addEventListener("input", () => {
      state.contact[key] = el.value; save(); updateSendLinks();
      $("#contactErr").classList.remove("is-shown");
      if (key === "name") {
        const tx = t(), n = el.value.trim(), h = $("#sheetTitle");
        if (h) h.innerHTML = n ? `${tx.requestFor} <em>${esc(n)}</em>` : `<em>${tx.requestForYou}</em>`;
      }
    });
    // Si deja nombre y WhatsApp, se guarda aunque no llegue a enviar (para seguimiento)
    el.addEventListener("change", () => { if (contactOk()) sendLead("lead"); });
  });

  function contactOk() {
    const c = state.contact;
    return !!c.name.trim() && c.phone.replace(/\D/g, "").length >= 7 && (!c.email.trim() || /\S+@\S+\.\S+/.test(c.email));
  }

  function validateContact() {
    const c = state.contact, ok = contactOk();
    $("#contactErr").classList.toggle("is-shown", !ok);
    if (!ok) {
      const phoneOk = c.phone.replace(/\D/g, "").length >= 7;
      (!c.name.trim() ? $("#cName") : !phoneOk ? $("#cPhone") : $("#cEmail")).focus();
    }
    return ok;
  }

  // ---------- Registro de solicitudes (Google Sheets) ----------
  function leadPayload(action, extra = {}) {
    const es = T.es, ev = state.event, q = quote(), c = state.contact;
    const prevLang = state.lang; state.lang = "es";
    const details = extrasSummary().map(([svc, rows]) => `${svc}: ${rows.map(([k, v]) => `${k}: ${v}`).join(" · ")}`).join("\n");
    const menu = quote().lines.map((l) => `${l.name}${l.variant ? ` (${l.variant})` : ""}: ${l.qtyText} × ${money2(l.unitPrice)} = ${money2(l.amount)}${l.picks.length ? ` [${l.picks.join("; ")}]` : ""}`).join("\n");
    state.lang = prevLang;
    return {
      action, ref: state.ref, lang: state.lang, origin: state.origin,
      name: c.name.trim(), phone: c.phone.trim(), email: c.email.trim(), notes: c.notes.trim(),
      occasion: ev.occasion === OCCASION_OTHER ? ev.occasionOther.trim() : es.occasions[ev.occasion] || "",
      date: ev.date, venue: [ev.venue != null ? es.venues[ev.venue] : "", ev.location.trim()].filter(Boolean).join(" · "),
      guests: guests(), duration: ev.duration != null ? es.durations[ev.duration] : "",
      services: ev.services.map((i) => es.services[i]).join(", "),
      details, menu,
      total: Math.round(q.total * 100) / 100,
      website: $("#cWebsite").value,
      ...extra
    };
  }

  function sendLead(action, extra) {
    if (!LEADS_URL) return;
    const body = JSON.stringify(leadPayload(action, extra));
    try {
      // text/plain evita la verificación CORS previa; la respuesta no se necesita
      fetch(LEADS_URL, { method: "POST", mode: "no-cors", keepalive: true, headers: { "Content-Type": "text/plain;charset=utf-8" }, body });
    } catch (_) { /* sin conexión: no bloquea al cliente */ }
  }

  function messageText(channel) {
    const tx = t(), q = quote(), c = state.contact, wa = channel === "wa";
    const b = (s) => (wa ? `*${s}*` : s);
    const out = [tx.msgHello(state.ref), "", b(tx.msgEvent)];
    eventFacts().forEach(([k, v]) => out.push(`${k}: ${v}`));
    const extras = extrasSummary();
    if (extras.length) {
      out.push("", b(tx.msgServices));
      extras.forEach(([svc, rows]) => { out.push(`• ${svc}`); rows.forEach(([k, v]) => out.push(`   ${k}: ${v}`)); });
    }
    if (needsMenu()) {
      out.push("", b(tx.msgMenu));
      if (!q.lines.length) out.push(tx.noItems);
      q.lines.forEach((l) => {
        out.push(`• ${l.name}${l.variant ? ` (${l.variant})` : ""} — ${l.qtyText}`);
        l.picks.forEach((p) => out.push(`   ${p}`));
      });
    }
    out.push("", b(tx.msgContact), `${tx.name}: ${c.name.trim()}`);
    if (c.phone.trim()) out.push(`${tx.phone}: ${c.phone.trim()}`);
    if (c.email.trim()) out.push(`${tx.email.replace(/ \(.*\)/, "")}: ${c.email.trim()}`);
    if (c.notes.trim()) out.push(`${tx.msgNotes}: ${c.notes.trim()}`);
    out.push("", tx.msgPrefer(wa ? "WhatsApp" : tx.email.replace(/ \(.*\)/, "").toLowerCase()));
    return out.join("\n");
  }

  function mailHref() {
    const tx = t(), ev = state.event;
    const occ = ev.occasion === OCCASION_OTHER ? ev.occasionOther : tx.occasions[ev.occasion] || "";
    const params = [
      `subject=${encodeURIComponent(tx.mailSubject(occ, fmtDate(ev.date), state.ref))}`,
      `body=${encodeURIComponent(messageText("mail"))}`
    ];
    if (/\S+@\S+\.\S+/.test(state.contact.email)) params.unshift(`cc=${encodeURIComponent(state.contact.email.trim())}`);
    return `mailto:${EMAIL}?${params.join("&")}`;
  }

  // Los envíos son enlaces reales (funcionan aunque el navegador bloquee ventanas emergentes)
  function updateSendLinks() {
    $('[data-send="wa"]').href = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(messageText("wa"))}`;
    $('[data-send="mail"]').href = mailHref();
  }

  $(".send").addEventListener("click", (e) => {
    const b = e.target.closest("[data-send]"); if (!b) return;
    if (!validateContact()) { e.preventDefault(); return; }
    updateSendLinks();
    sendLead("click", { channel: b.dataset.send === "wa" ? "WhatsApp" : "Correo" });
    toast(b.dataset.send === "wa" ? t().openedWa : t().openedMail);
    const tx = t(), done = $("#done");
    done.innerHTML = `<p class="done__title">${esc(tx.doneTitle(state.contact.name.trim().split(" ")[0]))}</p><p class="done__text">${esc(tx.doneText(state.ref))}</p>`;
    done.hidden = false;
  });

  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg; el.classList.add("is-shown");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-shown"), 2200);
  }

  // ---------- Navegación entre pasos ----------
  const prefersReduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function goTo(n, opts = {}) {
    if (n > 1 && !validateEvent(false)) { n = 1; if (state.step === 1) { validateEvent(true); return; } }
    state.step = n;
    $$(".step").forEach((s) => {
      const on = +s.dataset.step === n;
      s.hidden = !on;
      s.classList.toggle("is-entering", on && !opts.instant);
    });
    $$(".steps__list button").forEach((b) => {
      const k = +b.dataset.goto;
      if (k === n) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
      b.classList.toggle("is-done", k < n);
    });
    if (n === 2) { syncAutoQty(); renderMenu(); updateTray(); }
    if (n === 3) { renderSheet(); $("#done").hidden = true; }
    if (n === 1 && opts.showErrors) { validateEvent(true); return; }
    if (!opts.instant) {
      const top = $(".steps").getBoundingClientRect().top + window.scrollY - parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--topbar"));
      window.scrollTo({ top, behavior: prefersReduced() ? "auto" : "smooth" });
    }
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-goto]"); if (!b) return;
    const n = +b.dataset.goto;
    if (n > 1 && !validateEvent(false)) { goTo(1, { showErrors: true }); return; }
    goTo(n === 2 && !needsMenu() ? 3 : n);
  });

  // ---------- Fotos y testimonios (data.js) ----------
  function renderProof() {
    const photos = window.GALLERY || [];
    const gal = $("#gallery");
    gal.hidden = !photos.length;
    $(".gallery__track", gal).innerHTML = photos.map((p) =>
      `<figure class="gallery__item"><img src="${esc(p.src)}" alt="${esc(L(p.alt))}" loading="lazy" decoding="async"></figure>`).join("");

    const quotes = window.TESTIMONIALS || [];
    const box = $("#testimonials");
    box.hidden = !quotes.length;
    box.innerHTML = quotes.length ? `<h3 class="label">${t().testimonialsTitle}</h3>${quotes.map((q) =>
      `<blockquote class="quote"><p>“${esc(L(q.text))}”</p><footer>${esc(q.name)}${q.event ? ` · ${esc(L(q.event))}` : ""}</footer></blockquote>`).join("")}` : "";
  }

  // ---------- Inicio ----------
  applyLang();
  goTo(1, { instant: true });
})();
