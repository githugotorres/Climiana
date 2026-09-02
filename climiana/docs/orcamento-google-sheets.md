# Integração do formulário de orçamento com Google Sheets

Esta integração envia o formulário interno do site diretamente para um Google Apps Script, que grava os dados numa Google Sheet.

## 1. Criar o Apps Script

Abre a tua Google Sheet e vai a **Extensões > Apps Script**. Cola este código:

```javascript
const SPREADSHEET_ID = "1dKbHAkV2AwLWg_4V1q3y7eNRE3N2MtWkHX9jLW5MAkw";
const SHEET_NAME = "Orcamentos";

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
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 2. Criar a folha

Cria uma folha chamada `Orcamentos` com estas colunas:

`Data | Nome Completo | Email | Telemóvel | Morada | Tipo de serviço | Tipo de espaço | Tem projeto? | Localização da obra | Nova ou substituição | Urgência | Descrição`

## 3. Publicar o script

Em **Deploy > New deployment**, escolhe **Web app**.

- Execute as: `Me`
- Who has access: `Anyone`

Depois copia o URL do Web App.

## 4. Ligar o site

No ficheiro `.env` do projeto, define o URL do **Web App do Apps Script**. Não é o link da Google Sheet.

```bash
VITE_ORCAMENTO_WEBHOOK_URL="https://script.google.com/macros/s/XXXXX/exec"
```

Depois reinicia o `pnpm dev`.

## 5. Nota importante

O formulário do site envia o pedido através de um formulário HTML normal para esse URL. Isso costuma ser mais fiável do que `fetch` para o Google Apps Script.

Se mesmo assim não aparecer na sheet, confirma estes 3 pontos:

1. o Web App foi novamente publicado depois das últimas mudanças;
2. o deploy está com `Execute as: Me` e `Who has access: Anyone`;
3. o URL em `VITE_ORCAMENTO_WEBHOOK_URL` é o do Web App, não o da folha.