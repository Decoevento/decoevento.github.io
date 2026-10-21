/**
 * Decoevento · Registro de solicitudes de cotización
 *
 * Recibe las solicitudes que envía la página (decoevento.github.io), las guarda en la hoja
 * "Solicitudes" y avisa por correo cuando llega una nueva.
 *
 * Instalación (una sola vez):
 *  1. Abre la hoja de Google Sheets → Extensiones → Apps Script.
 *  2. Borra lo que haya, pega este archivo completo y guarda.
 *  3. Elige la función "configurar" arriba y toca Ejecutar (acepta los permisos).
 *  4. Implementar → Nueva implementación → tipo "Aplicación web".
 *     Ejecutar como: Yo · Quién tiene acceso: Cualquier usuario → Implementar.
 *  5. Copia la URL que termina en /exec y pégala en LEADS_URL dentro de app.js.
 */

const HOJA = "Solicitudes";
const AVISAR_A = "decoeventolg@yahoo.com"; // a quién le llega el aviso de cada solicitud nueva

const COLUMNAS = [
  "Recibida", "Referencia", "Estado", "Nombre", "WhatsApp", "Correo",
  "Motivo", "Fecha evento", "Lugar", "Invitados", "Duración", "Servicios",
  "Detalles de servicios", "Menú", "Total menú (interno)", "Notas", "Idioma", "Origen", "Último clic", "Seguimiento"
];
const COL = Object.fromEntries(COLUMNAS.map((c, i) => [c, i + 1]));

function doPost(e) {
  const datos = JSON.parse(e.postData.contents || "{}");
  if (datos.website) return respuesta(); // campo trampa lleno: es un robot
  if (!datos.ref) return respuesta();

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const hoja = obtenerHoja();
    const fila = buscarFila(hoja, datos.ref);

    if (datos.action === "click") {
      if (fila) {
        hoja.getRange(fila, COL["Estado"]).setValue(`Envió por ${datos.channel || "WhatsApp"}`);
        hoja.getRange(fila, COL["Último clic"]).setValue(new Date());
      }
      return respuesta();
    }

    const valores = {
      "Referencia": datos.ref,
      "Nombre": datos.name,
      "WhatsApp": datos.phone,
      "Correo": datos.email,
      "Motivo": datos.occasion,
      "Fecha evento": datos.date,
      "Lugar": datos.venue,
      "Invitados": datos.guests,
      "Duración": datos.duration,
      "Servicios": datos.services,
      "Detalles de servicios": datos.details,
      "Menú": datos.menu,
      "Total menú (interno)": datos.total,
      "Notas": datos.notes,
      "Idioma": datos.lang,
      "Origen": datos.origin
    };

    if (fila) {
      Object.entries(valores).forEach(([col, v]) => hoja.getRange(fila, COL[col]).setValue(v));
    } else {
      const nueva = COLUMNAS.map((c) => (c === "Recibida" ? new Date() : c === "Estado" ? "Dejó sus datos" : valores[c] ?? ""));
      hoja.appendRow(nueva);
      avisar(datos);
    }
  } finally {
    lock.releaseLock();
  }
  return respuesta();
}

function avisar(d) {
  if (!AVISAR_A) return;
  const tel = String(d.phone || "").replace(/\D/g, "");
  const total = Number(d.total || 0).toLocaleString("en-US", { style: "currency", currency: "USD" });
  const cuerpo = [
    `Nueva solicitud ${d.ref}`,
    "",
    `Nombre: ${d.name}`,
    `WhatsApp: ${d.phone}  →  https://wa.me/${tel}`,
    d.email ? `Correo: ${d.email}` : "",
    `Motivo: ${d.occasion} · Fecha: ${d.date} · Invitados: ${d.guests}`,
    `Lugar: ${d.venue}`,
    `Servicios: ${d.services}`,
    d.details ? d.details : "",
    `Total menú (sin impuesto ni fees): ${total}`,
    "",
    d.menu || "(sin platos elegidos)",
    d.notes ? `\nNotas: ${d.notes}` : "",
    "",
    `Hoja de solicitudes: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}`
  ].filter((l) => l !== null).join("\n");
  MailApp.sendEmail(AVISAR_A, `Nueva cotización ${d.ref} · ${d.name} · ${d.occasion}`, cuerpo);
}

function obtenerHoja() {
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  return libro.getSheetByName(HOJA) || configurar();
}

function buscarFila(hoja, ref) {
  const ultima = hoja.getLastRow();
  if (ultima < 2) return null;
  const refs = hoja.getRange(2, COL["Referencia"], ultima - 1, 1).getValues();
  const i = refs.findIndex((r) => r[0] === ref);
  return i === -1 ? null : i + 2;
}

function respuesta() {
  return ContentService.createTextOutput("ok");
}

/** Crea la hoja con sus columnas y formato. Ejecútala una vez a mano. */
function configurar() {
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = libro.getSheetByName(HOJA) || libro.insertSheet(HOJA);
  hoja.getRange(1, 1, 1, COLUMNAS.length).setValues([COLUMNAS])
    .setFontWeight("bold").setBackground("#4A4A4A").setFontColor("#F9F8F6");
  hoja.setFrozenRows(1);
  hoja.getRange("A:A").setNumberFormat("dd/mm/yyyy hh:mm");
  hoja.getRange(1, COL["Total menú (interno)"], 1000, 1).setNumberFormat("$#,##0.00");
  hoja.getRange(1, COL["Último clic"], 1000, 1).setNumberFormat("dd/mm/yyyy hh:mm");
  hoja.setColumnWidth(COL["Menú"], 360);
  hoja.setColumnWidth(COL["Detalles de servicios"], 280);
  hoja.getRange(1, COL["Detalles de servicios"], 1000, 2).setWrap(true);
  const estados = SpreadsheetApp.newDataValidation()
    .requireValueInList(["Dejó sus datos", "Envió por WhatsApp", "Envió por Correo", "Contactado", "Estimado enviado", "Reservado", "Perdido"], true)
    .setAllowInvalid(true).build();
  hoja.getRange(2, COL["Estado"], 999, 1).setDataValidation(estados);
  const hoja1 = libro.getSheetByName("Hoja 1") || libro.getSheetByName("Sheet1");
  if (hoja1 && hoja1.getLastRow() === 0 && libro.getSheets().length > 1) libro.deleteSheet(hoja1);
  return hoja;
}
