import { images } from "@/data/images";
import { site } from "@/lib/site";

export type MailRow = {
  label: string;
  value: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function clubEmailText(subject: string, rows: MailRow[]) {
  const lines = rows.map((row) => `${row.label}: ${row.value}`);
  return [`FC Växjö`, subject, "", ...lines, "", `${site.pitchName}, ${site.address.city}`, site.url].join(
    "\n",
  );
}

export function clubEmailHtml(subject: string, rows: MailRow[]) {
  const fields = rows
    .map(
      (row) => `
        <tr>
          <td style="padding:14px 24px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;color:#8f1822;">
            ${escapeHtml(row.label)}
          </td>
        </tr>
        <tr>
          <td style="padding:4px 24px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:24px;color:#1c1917;">
            ${escapeHtml(row.value).replace(/\n/g, "<br>")}
          </td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="sv">
  <body style="margin:0;padding:0;background:#f6f3f2;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f3f2;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:#8f1822;padding:28px 24px 22px;" align="center">
                <img src="${images.crest}" width="72" height="72" alt="FC Växjö" style="display:block;border:0;border-radius:50%;margin:0 auto 14px;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:32px;font-weight:bold;letter-spacing:0.08em;color:#ffffff;">
                  FC VÄXJÖ
                </div>
                <div style="margin-top:6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#f3d19a;">
                  Grundad ${site.founded}
                </div>
              </td>
            </tr>
            <tr>
              <td style="height:4px;background:#d97706;font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:22px 24px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#b45309;">
                Nytt meddelande från hemsidan
              </td>
            </tr>
            <tr>
              <td style="padding:8px 24px 8px;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:28px;color:#1c1917;">
                ${escapeHtml(subject)}
              </td>
            </tr>
            ${fields}
            <tr>
              <td style="padding:28px 24px 24px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;color:#57534d;">
                Svara på mejlet för att nå personen som skickade formuläret.<br>
                ${escapeHtml(site.name)} · ${escapeHtml(site.pitchName)}, ${escapeHtml(site.address.city)}<br>
                <a href="${site.url}" style="color:#8f1822;text-decoration:none;">fcvaxjo.se</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
