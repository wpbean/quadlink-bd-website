const BRAND_DARK = "#12291B";
const BRAND_PRIMARY = "#2E7045";
const BRAND_ACCENT = "#4CAF6B";
const TEXT_MAIN = "#0F172A";
const TEXT_MUTED = "#64748B";
const BORDER = "#E2E8F0";
const BG = "#F1F5F9";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label, value) {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${BORDER};" valign="top">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="130" valign="top" style="font-family:'Hind Siliguri',Arial,sans-serif;font-size:13px;line-height:20px;color:${TEXT_MUTED};">
              ${label}
            </td>
            <td valign="top" style="font-family:'Hind Siliguri',Arial,sans-serif;font-size:15px;line-height:22px;color:${TEXT_MAIN};font-weight:600;">
              ${value}
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

function buildContactEmailHtml({ name, phone, area, pkg, message }) {
  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeArea = escapeHtml(area);
  const safePkg = pkg ? escapeHtml(pkg) : "উল্লেখ নেই";
  const safeMessage = message ? escapeHtml(message).replace(/\n/g, "<br>") : "";
  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return `<!DOCTYPE html>
<html lang="bn">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>নতুন সংযোগের আবেদন</title>
  </head>
  <body style="margin:0;padding:0;background-color:${BG};font-family:'Hind Siliguri',Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BG};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid ${BORDER};">
            <tr>
              <td style="background-color:${BRAND_DARK};padding:28px 32px;" align="left">
                <img src="https://quadlinkbd.com/img/logo-white.png" alt="Quadlink BD" height="28" style="display:block;height:28px;width:auto;border:0;">
              </td>
            </tr>

            <tr>
              <td style="padding:32px 32px 8px 32px;">
                <span style="display:inline-block;background-color:${BRAND_ACCENT}22;color:${BRAND_PRIMARY};font-family:'Hind Siliguri',Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.02em;padding:6px 12px;border-radius:999px;">
                  নতুন সংযোগের আবেদন
                </span>
                <h1 style="margin:16px 0 0 0;font-family:'Hind Siliguri',Arial,sans-serif;font-size:20px;line-height:28px;color:${TEXT_MAIN};">
                  ওয়েবসাইট থেকে ${safeName} একটি নতুন সংযোগের জন্য অনুরোধ পাঠিয়েছেন।
                </h1>
              </td>
            </tr>

            <tr>
              <td style="padding:8px 32px 24px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  ${row("নাম", safeName)}
                  ${row("মোবাইল", `<a href="${telHref}" style="color:${BRAND_PRIMARY};text-decoration:none;">${safePhone}</a>`)}
                  ${row("এলাকা", safeArea)}
                  ${row("আগ্রহী প্যাকেজ", safePkg)}
                </table>
              </td>
            </tr>

            ${
              safeMessage
                ? `<tr>
              <td style="padding:0 32px 24px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BG};border-radius:12px;">
                  <tr>
                    <td style="padding:16px 20px;">
                      <div style="font-family:'Hind Siliguri',Arial,sans-serif;font-size:13px;color:${TEXT_MUTED};margin-bottom:6px;">মন্তব্য</div>
                      <div style="font-family:'Hind Siliguri',Arial,sans-serif;font-size:15px;line-height:24px;color:${TEXT_MAIN};">${safeMessage}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>`
                : ""
            }

            <tr>
              <td style="padding:0 32px 32px 32px;">
                <a href="${telHref}" style="display:inline-block;background-color:${BRAND_PRIMARY};color:#FFFFFF;font-family:'Hind Siliguri',Arial,sans-serif;font-size:15px;font-weight:600;text-decoration:none;padding:12px 24px;border-radius:8px;">
                  গ্রাহককে কল করুন
                </a>
              </td>
            </tr>

            <tr>
              <td style="background-color:${BG};padding:20px 32px;border-top:1px solid ${BORDER};">
                <p style="margin:0;font-family:'Hind Siliguri',Arial,sans-serif;font-size:12px;line-height:18px;color:${TEXT_MUTED};">
                  এই বার্তাটি quadlinkbd.com ওয়েবসাইটের যোগাযোগ ফর্ম থেকে স্বয়ংক্রিয়ভাবে পাঠানো হয়েছে।
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

module.exports = { buildContactEmailHtml };
