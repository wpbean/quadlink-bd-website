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
    phone: "+880 1XXX-XXXXXX",
    phoneRaw: "+8801000000000",
    email: "info@quadlinkbd.com",
    address: "সাভার ও ঢাকা জোন, বাংলাদেশ"
  },

  statistics: [
    { value: "৫,০০০+", label: "সক্রিয় সন্তুষ্ট গ্রাহক" },
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
      speed: "20 Mbps",
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
      price: "৳৭০০",
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
      price: "৳৯০০",
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
      icon: "📡",
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

  coverage: [
    {
      city: "ধামরাই জোন",
      status: "সক্রিয় কভারেজ",
      subareas: ["ইসলামপুর", "পঞ্চাশ", "হাসপাতাল রোড", "থানা রোড", "ধামরাই বাজার", "পাঠানতলা", "কুমড়াইল", "কলেজ রোড", "উপজেলা"]
    },
    {
      city: "ঢাকা পশ্চিম জোন",
      status: "সক্রিয় কভারেজ",
      subareas: ["মিরপুর", "মোহাম্মদপুর", "কল্যাণপুর", "শ্যামলী", "গাবতলী"]
    },
    {
      city: "ঢাকা উত্তর জোন",
      status: "সম্প্রসারণাধীন",
      subareas: ["উত্তরা", "এয়ারপোর্ট রোড", "আব্দুল্লাহপুর", "টঙ্গী সংলগ্ন"]
    }
  ]
};

/* ==========================================================================
   2. DOM Rendering Functions
   ========================================================================== */

function populateCompanyDetails() {
  const phoneDisplay = document.getElementById("contactPhoneDisplay");
  const phoneLink = document.getElementById("contactPhoneLink");
  const emailDisplay = document.getElementById("contactEmailDisplay");
  const emailLink = document.getElementById("contactEmailLink");
  const addressDisplay = document.getElementById("contactAddressDisplay");

  const footerPhone = document.getElementById("footerPhoneDisplay");
  const footerEmail = document.getElementById("footerEmailDisplay");
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
  if (footerEmail) footerEmail.textContent = appConfig.company.email;
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
        <span class="coverage-status-badge">${zone.status}</span>
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

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
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
  renderStatistics();
  renderServices();
  renderPackages();
  renderBenefits();
  renderCoverage();
  setupUIInteractions();
});
