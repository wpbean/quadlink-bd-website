require("dotenv").config({ quiet: true });

const path = require("path");
const express = require("express");
const rateLimit = require("express-rate-limit");
const contactRouter = require("./src/routes/contact");

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: "অনুরোধ সীমা অতিক্রম করেছে। কিছুক্ষণ পর আবার চেষ্টা করুন।" }
});

app.use("/api/contact", contactLimiter, contactRouter);

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Quadlink BD server running at http://localhost:${PORT}`);
});
