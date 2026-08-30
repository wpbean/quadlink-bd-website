const express = require("express");
const { Resend } = require("resend");

const router = express.Router();

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@quadlinkbd.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Quadlink BD Website <onboarding@resend.dev>";

function getResendClient() {
  if (!process.env.RESEND_API_KEY) return null;
  return new Resend(process.env.RESEND_API_KEY);
}

router.post("/", async (req, res) => {
  const { fullName, phoneNumber, customerArea, selectedPackage, customerMessage } = req.body || {};

  const name = typeof fullName === "string" ? fullName.trim() : "";
  const phone = typeof phoneNumber === "string" ? phoneNumber.trim() : "";
  const area = typeof customerArea === "string" ? customerArea.trim() : "";
  const pkg = typeof selectedPackage === "string" ? selectedPackage.trim() : "";
  const message = typeof customerMessage === "string" ? customerMessage.trim() : "";

  if (!name || !phone || !area) {
    return res.status(400).json({
      ok: false,
      error: "অনুগ্রহ করে সব আবশ্যক তথ্য সঠিকভাবে পূরণ করুন।"
    });
  }

  const resend = getResendClient();
  if (!resend) {
    console.error("RESEND_API_KEY is not configured — contact form email not sent.");
    return res.status(503).json({
      ok: false,
      error: "দুঃখিত, বার্তা পাঠানোর সেবাটি এই মুহূর্তে চালু নেই। পরে আবার চেষ্টা করুন।"
    });
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `নতুন সংযোগের আবেদন — ${name}`,
      text: [
        `নাম: ${name}`,
        `মোবাইল: ${phone}`,
        `এলাকা: ${area}`,
        `আগ্রহী প্যাকেজ: ${pkg || "উল্লেখ নেই"}`,
        `মন্তব্য: ${message || "নেই"}`
      ].join("\n")
    });

    if (error) {
      console.error("Resend send failed:", error);
      return res.status(502).json({
        ok: false,
        error: "দুঃখিত, বার্তা পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।"
      });
    }

    res.json({ ok: true });
  } catch (err) {
    console.error("Resend send failed:", err);
    res.status(502).json({
      ok: false,
      error: "দুঃখিত, বার্তা পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।"
    });
  }
});

module.exports = router;
