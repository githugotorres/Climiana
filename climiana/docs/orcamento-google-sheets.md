# Integração do formulário de orçamento com Google Sheets

Esta integração envia o formulário interno do site diretamente para um Google Apps Script, que grava os dados numa Google Sheet.

## 1. Criar o Apps Script

Abre a tua Google Sheet e vai a **Extensões > Apps Script**. Cola este código:

```javascript
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

## 6. Ativar a notificação por email (atualizar um script já existente)

Se já tens o Apps Script publicado e só queres passar a receber um email em
`climiana@gmail.com` sempre que chega um pedido, não precisas de repetir o
processo todo — segue estes passos no script existente:

1. Abre a Google Sheet do orçamento e vai a **Extensões > Apps Script**.
2. Substitui todo o conteúdo do ficheiro pelo código atualizado da secção 1
   acima (já inclui o envio de email).
3. Guarda (⌘S / Ctrl+S).
4. No menu de funções (por cima do editor), escolhe `testarAutorizacaoEmail`
   e clica em **Executar**. Vai pedir-te para autorizar o script a enviar
   emails — aceita. Sem este passo, o envio falha silenciosamente quando o
   pedido chega através do site (a sheet continua a ser preenchida na mesma).
   Confirma que o email de teste chegou a `climiana@gmail.com`.
5. Vai a **Deploy > Manage deployments**, clica no ícone de lápis (editar) do
   deployment ativo do tipo *Web app*, e em **Version** escolhe **New
   version**. Clica em **Deploy**.
   - Importante: usa **Manage deployments > editar**, não **New deployment**.
     Criar um deployment novo gera um URL novo, e nesse caso terias de
     atualizar `VITE_ORCAMENTO_WEBHOOK_URL` no site e no GitHub Actions
     (secret `VITE_ORCAMENTO_WEBHOOK_URL`). Editando a versão do deployment
     existente, o URL mantém-se igual e não precisas de mexer em mais nada.
6. Testa: envia um pedido de orçamento a partir do site e confirma que chega
   o email a `climiana@gmail.com`.

Nota sobre limites: `MailApp.sendEmail` usa a conta Gmail do dono do script
e tem um limite diário (cerca de 100 emails/dia em contas Gmail gratuitas),
mais do que suficiente para o volume de pedidos de orçamento deste site.