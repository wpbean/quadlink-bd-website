/**
 * Quadlink BD - Core Application Configuration & Logic
 * Static, Modular, and Zero-dependency
 */

/* ==========================================================================
   1. Editable Business Configuration (Edit here to change website data)
   ========================================================================== */
const appConfig = {
  company: {
    name: "Quadlink BD",
    domain: "quadlinkbd.com",
    phone: "+880 1811-106635",
    phoneRaw: "+8801811106635",
    email: "info@quadlinkbd.com",
    address: "মাদ্রাসা রোড, ইসলামপুর, ধামরাই, ঢাকা",
    socials: {
      facebook: "https://www.facebook.com/quadlinkbd",
      linkedin: "#",
      youtube: "#",
      instagram: "#",
      tiktok: "#"
    }
  },

  statistics: [
    { value: "১,০০০+", label: "সক্রিয় সন্তুষ্ট গ্রাহক" },
    { value: "৯৯.৯%", label: "নেটওয়ার্ক আপটাইম" },
    { value: "২৪/৭", label: "টেকনিক্যাল সাপোর্ট" },
    { value: "১০+", label: "কভারেজ সাব-এলাকা" }
  ],

  services: [
    {
      icon: "🏠",
      title: "হোম ব্রডব্যান্ড",
      description: "বাসা ও ব্যক্তিগত ব্যবহারের জন্য দ্রুতগতির ও নির্ভরযোগ্য নিরবচ্ছিন্ন অপটিক্যাল ফাইবার ইন্টারনেট।"
    },
    {
      icon: "⚡",
      title: "ফাইবার অপটিক কানেকশন",
      description: "সর্বাধুনিক FTTH প্রযুক্তির মাধ্যমে প্রতিটি সংযোগে নিশ্চিত স্থিতিশীলতা ও সর্বনিম্ন পিং।"
    },
    {
      icon: "🏢",
      title: "কর্পোরেট ইন্টারনেট",
      description: "অফিস ও শিল্পপ্রতিষ্ঠানের জন্য উচ্চগতির ডেডিকেটেড ব্যান্ডউইথ ও বিশেষ এসএলএ সুবিধা।"
    },
  ],

  packages: [
    {
      id: "pkg-basic",
      name: "Basic",
      speed: "25 Mbps",
      price: "৳৫০০",
      period: "/ মাস",
      popular: false,
      features: [
        "আনলিমিটেড ইন্টারনেট ডেটা",
        "১০০% অপটিক্যাল ফাইবার সংযোগ",
        "YouTube ও BDIX বাফারলেস",
        "২৪/৭ কাস্টমার ও ফিল্ড সাপোর্ট"
      ]
    },
    {
      id: "pkg-smart",
      name: "Smart",
      speed: "30 Mbps",
      price: "৳৬৫০",
      period: "/ মাস",
      popular: true,
      features: [
        "আল্ট্রা-ফাস্ট গেমিং ও স্ট্রিমিং",
        "হাই-স্পিড BDIX & গ্লোবাল ক্যাশ",
        "অপটিক্যাল ফাইবার ডিরেক্ট লাইন",
        "২৪/৭ অগ্রাধিকার সাপোর্ট"
      ]
    },
    {
      id: "pkg-premium",
      name: "Premium",
      speed: "50 Mbps",
      price: "৳৯৯০",
      period: "/ মাস",
      popular: false,
      features: [
        "মাল্টি-ডিভাইস 4K স্ট্রিমিং",
        "আল্ট্রা-লো পিং অনলাইন গেমিং",
        "ডেডিকেটেড রাউটিং অপ্টিমাইজেশন",
        "প্রায়োরিটি অন-সাইট টেকনিক্যাল সাপোর্ট"
      ]
    },
    {
      id: "pkg-ultra",
      name: "Ultra Pro",
      speed: "80 Mbps",
      price: "৳১,২০০",
      period: "/ মাস",
      popular: false,
      features: [
        "সুপারফাস্ট কন্টেন্ট আপলোড/ডাউনলোড",
        "হেভি রিমোট ওয়ার্ক ও স্ট্রিমিং",
        "পাবলিক আইপি সুবিধা (প্রযোজ্য ক্ষেত্রে)",
        "ডেডিকেটেড সিনিয়র সাপোর্ট অফিসার"
      ]
    }
  ],

  benefits: [
    {
      icon: "🚀",
      title: "আল্ট্রা ফাস্ট ইন্টারনেট",
      desc: "সরাসরি অপটিক্যাল ফাইবার নেটওয়ার্কের মাধ্যমে সর্বোচ্চ গতির নিশ্চয়তা।"
    },
    {
      icon: "🛡️",
      title: "স্থিতিশীল সংযোগ",
      desc: "৯৯.৯% আপটাইমের সাথে ঝড়-বৃষ্টিতেও স্থিতিশীল নেটওয়ার্ক কানেক্টিভিটি।"
    },
    {
      icon: "🛠️",
      title: "২৪/৭ কাস্টমার সাপোর্ট",
      desc: "যেকোনো সমস্যায় দিনের ২৪ ঘণ্টা ও সপ্তাহের ৭ দিন দ্রুত সমাধানের টিম।"
    },
    {
      icon: "💰",
      title: "স্বচ্ছ প্যাকেজ ও মূল্য",
      desc: "কোনো প্রকার হিডেন চার্জ বা ফেয়ার ইউজেজ পলিসি (FUP) এর ঝামেলা নেই।"
    },
    {
      icon: "🎯",
      title: "লো-পিং গেমিং",
      desc: "অনলাইন গেমারদের জন্য অপ্টিমাইজড রাউটিং ও জিরো প্যাকেট লস প্রযুক্তি।"
    },
    {
      icon: "📺",
      title: "HD & 4K স্ট্রিমিং",
      desc: "YouTube, Netflix ও OTT প্ল্যাটফর্মে নিশ্চিন্ত বাফারলেস ভিডিওর অভিজ্ঞতা।"
    }
  ],

  customPackageOption: {
    value: "Corporate / Custom",
    label: "কর্পোরেট / কাস্টম প্যাকেজ"
  },

  coverage: [
    {
      city: "ধামরাই জোন",
      status: "সক্রিয় কভারেজ",
      subareas: ["ইসলামপুর", "পঞ্চাশ", "সুইডিশ","হাসপাতাল রোড", "থানা রোড", "ধামরাই বাজার", "উপজেলা", "পাঠানতলা", "কুমড়াইল", "কলেজ রোড"]
    },
    {
      city: "নবীনগর জোন",
      status: "সম্প্রসারণাধীন",
      subareas: ["নিরিবিলি", "জালালাবাদ", "ডেন্ডাবর", "পল্লীবিদ্যুৎ", "বাইপাইল", "কুরগাঁও", "গকুলনগর", "ইসলামনগর", "পানধোয়া", "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়"]
    },
    {
      city: "সাভার জোন",
      status: "সম্প্রসারণাধীন",
      subareas: ["রেডিও কলোনি", "জাহাঙ্গীরনগর সোসাইটি", "সি আর পি", "সাভার বাস স্ট্যান্ড", "বাজার রোড", "থানা রোড", "গেন্ডা", "ব্যাংক টাউন", "পুলিশ টাউন", "উলাইল", "হেমায়েতপুর"]
    }
  ]
};

/* ==========================================================================
   2. DOM Rendering Functions
   ========================================================================== */

const SOCIAL_ICONS = {
  facebook: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
  linkedin: '<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>',
  youtube: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
  instagram: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
  tiktok: '<path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.02 3.37-2.49V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>'
};

const SOCIAL_LABELS = {
  facebook: "Facebook",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  instagram: "Instagram",
  tiktok: "TikTok"
};

function renderSocialLinks() {
  const targets = [
    { id: "contactSocialLinks", className: "contact-social-link", size: 18 },
    { id: "footerSocialLinks", className: "social-link", size: 20 }
  ];

  const links = Object.entries(appConfig.company.socials || {})
    .filter(([, url]) => url);

  targets.forEach(({ id, className, size }) => {
    const container = document.getElementById(id);
    if (!container) return;

    container.innerHTML = links.map(([platform, url]) => `
      <a href="${url}" class="${className}" aria-label="${SOCIAL_LABELS[platform] || platform}" target="_blank" rel="noopener noreferrer">
        <svg width="${size}" height="${size}" fill="currentColor" viewBox="0 0 24 24">${SOCIAL_ICONS[platform] || ""}</svg>
      </a>
    `).join("");
  });
}

function populateCompanyDetails() {
  const phoneDisplay = document.getElementById("contactPhoneDisplay");
  const phoneLink = document.getElementById("contactPhoneLink");
  const emailDisplay = document.getElementById("contactEmailDisplay");
  const emailLink = document.getElementById("contactEmailLink");
  const addressDisplay = document.getElementById("contactAddressDisplay");

  const footerPhone = document.getElementById("footerPhoneDisplay");
  const footerPhoneLink = document.getElementById("footerPhoneLink");
  const footerEmail = document.getElementById("footerEmailDisplay");
  const footerEmailLink = document.getElementById("footerEmailLink");
  const footerAddress = document.getElementById("footerAddressDisplay");

  if (phoneDisplay) phoneDisplay.textContent = appConfig.company.phone;
  if (phoneLink) {
    phoneLink.href = `tel:${appConfig.company.phoneRaw}`;
    phoneLink.textContent = `${appConfig.company.phone} এ কল করুন →`;
  }
  if (emailDisplay) emailDisplay.textContent = appConfig.company.email;
  if (emailLink) emailLink.href = `mailto:${appConfig.company.email}`;
  if (addressDisplay) addressDisplay.textContent = appConfig.company.address;

  if (footerPhone) footerPhone.textContent = appConfig.company.phone;
  if (footerPhoneLink) footerPhoneLink.href = `tel:${appConfig.company.phoneRaw}`;
  if (footerEmail) footerEmail.textContent = appConfig.company.email;
  if (footerEmailLink) footerEmailLink.href = `mailto:${appConfig.company.email}`;
  if (footerAddress) footerAddress.textContent = appConfig.company.address;
}

function renderStatistics() {
  const container = document.getElementById("statsGrid");
  if (!container) return;

  container.innerHTML = appConfig.statistics.map(stat => `
    <div class="stat-item reveal-item">
      <div class="stat-value">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join("");
}

function renderServices() {
  const container = document.getElementById("servicesGrid");
  if (!container) return;

  container.innerHTML = appConfig.services.map(service => `
    <div class="service-card reveal-item">
      <div class="service-icon">${service.icon}</div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.description}</p>
    </div>
  `).join("");
}

function renderPackages() {
  const container = document.getElementById("packagesGrid");
  if (!container) return;

  container.innerHTML = appConfig.packages.map(pkg => `
    <div class="pkg-card ${pkg.popular ? 'popular' : ''} reveal-item">
      ${pkg.popular ? '<div class="popular-badge">সবচেয়ে জনপ্রিয়</div>' : ''}
      <div class="pkg-header">
        <h3 class="pkg-name">${pkg.name}</h3>
        <div class="pkg-speed">${pkg.speed}</div>
        <div class="pkg-price"><strong>${pkg.price}</strong> ${pkg.period}</div>
      </div>
      <ul class="pkg-features">
        ${pkg.features.map(feat => `
          <li class="pkg-feature-item">
            <span class="pkg-feature-icon">✓</span>
            <span>${feat}</span>
          </li>
        `).join("")}
      </ul>
      <a href="#contact" class="btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} btn-block" onclick="selectPackageForForm('${pkg.name} (${pkg.speed})')">সংযোগ নিন</a>
    </div>
  `).join("");
}

function renderPackageOptions() {
  const select = document.getElementById("selectedPackage");
  if (!select) return;

  const packageOptions = appConfig.packages.map(pkg => `
    <option value="${pkg.name} (${pkg.speed})" ${pkg.popular ? "selected" : ""}>${pkg.name} — ${pkg.speed} (${pkg.price}${pkg.period})</option>
  `).join("");

  const customOption = `<option value="${appConfig.customPackageOption.value}">${appConfig.customPackageOption.label}</option>`;

  select.innerHTML = packageOptions + customOption;
}

function renderBenefits() {
  const container = document.getElementById("benefitsGrid");
  if (!container) return;

  container.innerHTML = appConfig.benefits.map(benefit => `
    <div class="benefit-card reveal-item">
      <div class="benefit-icon">${benefit.icon}</div>
      <div class="benefit-content">
        <h3>${benefit.title}</h3>
        <p>${benefit.desc}</p>
      </div>
    </div>
  `).join("");
}

function renderCoverage() {
  const container = document.getElementById("coverageGrid");
  if (!container) return;

  container.innerHTML = appConfig.coverage.map(zone => `
    <div class="coverage-card reveal-item">
      <div class="coverage-header">
        <span class="coverage-city">${zone.city}</span>
        <span class="coverage-status-badge${zone.status === "সম্প্রসারণাধীন" ? " coverage-status-badge--warning" : ""}">${zone.status}</span>
      </div>
      <div class="subarea-list">
        ${zone.subareas.map(area => `<span class="subarea-tag">${area}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function selectPackageForForm(pkgLabel) {
  const select = document.getElementById("selectedPackage");
  if (select) {
    let found = false;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value.includes(pkgLabel.split(" ")[0])) {
        select.selectedIndex = i;
        found = true;
        break;
      }
    }
    if (!found) {
      select.value = select.options[0].value;
    }
  }
}

/* ==========================================================================
   3. Contact Form Handler (submits to /api/contact — sent via Resend)
   ========================================================================== */
async function handleFormSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("contactForm");
  const submitBtn = form.querySelector('button[type="submit"]');
  const feedback = document.getElementById("formFeedback");

  const name = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phoneNumber").value.trim();
  const area = document.getElementById("customerArea").value.trim();
  const pkg = document.getElementById("selectedPackage").value;
  const message = document.getElementById("customerMessage").value.trim();

  function showFeedback(success, text) {
    feedback.className = success ? "form-feedback success" : "form-feedback";
    if (!success) feedback.style.color = "var(--color-error)";
    feedback.textContent = text;
    feedback.style.display = "block";
  }

  if (!name || !phone || !area) {
    showFeedback(false, "অনুগ্রহ করে সব আবশ্যক তথ্য সঠিকভাবে পূরণ করুন।");
    return false;
  }

  submitBtn.disabled = true;
  submitBtn.dataset.originalText = submitBtn.dataset.originalText || submitBtn.textContent;
  submitBtn.textContent = "পাঠানো হচ্ছে...";

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: name,
        phoneNumber: phone,
        customerArea: area,
        selectedPackage: pkg,
        customerMessage: message
      })
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok && data.ok) {
      showFeedback(true, `ধন্যবাদ ${name}! আপনার সংযোগের আবেদনটি গৃহীত হয়েছে। আমাদের টিম খুব দ্রুত ${phone} নম্বরে যোগাযোগ করবে।`);
      form.reset();
    } else {
      showFeedback(false, data.error || "দুঃখিত, বার্তা পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
    }
  } catch (err) {
    showFeedback(false, "নেটওয়ার্ক সমস্যার কারণে বার্তা পাঠানো যায়নি। আবার চেষ্টা করুন।");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = submitBtn.dataset.originalText;
  }

  return false;
}

/* ==========================================================================
   4. UI Interactions & Intersection Observer
   ========================================================================== */
function setupUIInteractions() {
  // Sticky Navbar Scroll Effect
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const mainNav = document.getElementById("mainNav");
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", !isExpanded);
      mainNav.classList.toggle("active");
    });

    // Close menu when clicking nav links
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll-Spy: sync active nav link with the section in view
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function setActiveLink(id) {
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  }

  if (sections.length && "IntersectionObserver" in window) {
    let activeId = sections[0].id;

    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeId = entry.target.id;
        }
      });
      setActiveLink(activeId);
    }, {
      // Counts a section as "current" once it crosses the header/mid-viewport band
      rootMargin: "-45% 0px -50% 0px",
      threshold: 0
    });

    sections.forEach(section => spyObserver.observe(section));

    // Instant feedback on click, ahead of the smooth-scroll finishing
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        const targetId = link.getAttribute("href").slice(1);
        activeId = targetId;
        setActiveLink(targetId);
      });
    });
  }

  // Dynamic Copyright Year
  const currentYearEl = document.getElementById("currentYear");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.classList.toggle("visible", window.scrollY > 400);
    }, { passive: true });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Scroll Reveal Animations via IntersectionObserver
  const revealItems = document.querySelectorAll(".reveal-item");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("revealed"));
  }
}

/* ==========================================================================
   5. Initialization
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  populateCompanyDetails();
  renderSocialLinks();
  renderStatistics();
  renderServices();
  renderPackages();
  renderPackageOptions();
  renderBenefits();
  renderCoverage();
  setupUIInteractions();
});
