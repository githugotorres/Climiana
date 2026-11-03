const SPREADSHEET_ID = "1dKbHAkV2AwLWg_4V1q3y7eNRE3N2MtWkHX9jLW5MAkw";
const SHEET_NAME = "Orcamentos";
const NOTIFICATION_EMAIL = "climiana@gmail.com";

function doPost(e) {
  try {
    const payload = e.parameter && Object.keys(e.parameter).length
      ? e.parameter
      : JSON.parse(e.postData.contents || "{}");
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Data",
        "Nome Completo",
        "Email",
        "Telemóvel",
        "Morada",
        "Tipo de serviço",
        "Tipo de espaço",
        "Tem projeto?",
        "Localização da obra",
        "Nova ou substituição",
        "Urgência",
        "Descrição",
        "Origem",
      ]);
    }

    sheet.appendRow([
      new Date(),
      payload.nomeCompleto || "",
      payload.email || "",
      payload.telemovel || "",
      payload.morada || "",
      payload.tipoServico || "",
      payload.tipoEspaco || "",
      payload.temProjetoInstalacao || "",
      payload.localizacaoObra || "",
      payload.novaOuSubstituicao || "",
      payload.urgencia || "",
      payload.descricao || "",
      payload.origem || "",
    ]);

    try {
      enviarNotificacaoEmail(payload);
    } catch (emailError) {
      // Não falhar o pedido só porque a notificação por email deu erro:
      // os dados já ficaram guardados na sheet, que é o que importa.
      Logger.log("Falha ao enviar notificação por email: " + emailError);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function enviarNotificacaoEmail(payload) {
  const assunto = "Novo pedido de orçamento — " + (payload.nomeCompleto || "sem nome");

  const corpo = [
    "Recebeu um novo pedido de orçamento através do site da Climiana.",
    "",
    "Nome Completo: " + (payload.nomeCompleto || "-"),
    "Email: " + (payload.email || "-"),
    "Telemóvel: " + (payload.telemovel || "-"),
    "Morada: " + (payload.morada || "-"),
    "Tipo de serviço: " + (payload.tipoServico || "-"),
    "Tipo de espaço: " + (payload.tipoEspaco || "-"),
    "Tem projeto de instalação?: " + (payload.temProjetoInstalacao || "-"),
    "Localização da obra: " + (payload.localizacaoObra || "-"),
    "Nova ou substituição: " + (payload.novaOuSubstituicao || "-"),
    "Urgência: " + (payload.urgencia || "-"),
    "Descrição: " + (payload.descricao || "-"),
    "Origem: " + (payload.origem || "-"),
    "",
    "Este pedido também foi guardado na Google Sheet.",
  ].join("\n");

  MailApp.sendEmail(NOTIFICATION_EMAIL, assunto, corpo);
}

// Corre esta função uma vez manualmente no editor do Apps Script (Executar >
// testarAutorizacaoEmail) depois de colar este código. Isso vai pedir-te para
// autorizar o script a enviar emails; sem esse passo, o envio de emails falha
// silenciosamente quando o pedido chega através do site.
function testarAutorizacaoEmail() {
  MailApp.sendEmail(
    NOTIFICATION_EMAIL,
    "Teste de autorização — Climiana",
    "Este é um email de teste para autorizar o Apps Script a enviar notificações. Se recebeu isto, está tudo a funcionar."
  );
}
