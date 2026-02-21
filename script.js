let lang = localStorage.getItem("lang") || "ar";

const translations = {
  ar: {
    site_title: "منظّم مهامي",
    home_header: "منظّم مهامي",
    title: "منظّم مهامي",
    nav_home: "الرئيسية",
    nav_tasks: "المهام",
    nav_appointments: "المواعيد",
    nav_about: "عنّا",
    nav_profile: "حسابي",
    login: "تسجيل الدخول",
    logout: "تسجيل خروج",

    welcome: "مرحبًا بك في منظّم مهامك",
    desc: "نظّم مهامك ومواعيدك بسهولة وتابع إنجازاتك يومًا بيوم.",

    tasks_title: "المهام",
    tasks_list: "المهام",
    task_placeholder: "اكتب المهمة",

    appointments: "المواعيد",
    event_name: "اسم الموعد",

    about_page_title: "عن التطبيق",
    about_header: "عن التطبيق",
    aboutTitle: "ما هو هذا التطبيق؟",
    aboutDesc:
      "هذا التطبيق يساعدك على تنظيم مهامك اليومية ومواعيدك الشهرية بطريقة بسيطة وواضحة.",
    featuresTitle: "ماذا يقدّم لك؟",
    featuresList: `
      <li>📌 إضافة مهام مع وقت وتاريخ</li>
      <li>🔔 إشعارات للتنبيه بالمهام</li>
      <li>📅 تقويم شهري للمواعيد</li>
      <li>💾 حفظ تلقائي للبيانات</li>
      <li>🌍 دعم اللغة العربية والإنجليزية</li>
    `,
    privacyTitle: "الخصوصية",
    privacyDesc:
      "جميع بياناتك محفوظة على جهازك فقط، ولا يتم إرسال أي معلومات إلى الإنترنت.",
    helpTitle: "نصائح للاستخدام",
    helpList: `
      <li>احرص على تفعيل الإشعارات عند الطلب</li>
      <li>راجع مهامك يوميًا</li>
      <li>حدّث مواعيدك أولًا بأول</li>
    `,

    profile_page_title: "حسابي",
    profile_header: "حسابي",
    name: "الاسم:",
    username: "اسم المستخدم:",
    email: "البريد الإلكتروني:",
progress: "نسبة الإنجاز:",
  },

  en: {
    site_title: "My Planner",
    home_header: "My Planner",
    title: "My Planner",
    nav_home: "Home",
    nav_tasks: "Tasks",
    nav_appointments: "Appointments",
    nav_about: "About",
    nav_profile: "My Profile",
    login: "Login",
    logout: "Logout",
progress: "Progress:",

    welcome: "Welcome to your task organizer",
    desc: "Organize your tasks and appointments easily.",

    tasks_title: "Tasks",
    tasks_list: "Tasks",
    task_placeholder: "Write task",

    appointments: "Appointments",
    event_name: "Event name",

    about_page_title: "About",
    about_header: "About",
    aboutTitle: "What is this app?",
    aboutDesc:
      "This app helps you organize your daily tasks and monthly appointments in a simple and clear way.",
    featuresTitle: "What does it offer?",
    featuresList: `
      <li>📌 Add tasks with date and time</li>
      <li>🔔 Task notifications</li>
      <li>📅 Monthly appointment calendar</li>
      <li>💾 Automatic saving</li>
      <li>🌍 Arabic & English support</li>
    `,
    privacyTitle: "Privacy",
    privacyDesc:
      "All your data is stored locally on your device. No information is sent online.",
    helpTitle: "Usage Tips",
    helpList: `
      <li>Allow notifications when prompted</li>
      <li>Check your tasks daily</li>
      <li>Keep your appointments updated</li>
    `,

    profile_page_title: "My Profile",
    profile_header: "My Profile",
    name: "Name:",
    username: "Username:",
    email: "Email:"
  }
};

function applyLang() {
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === "UL") {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  document.querySelectorAll("[data-key-placeholder]").forEach(el => {
    const key = el.getAttribute("data-key-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  if (translations[lang].site_title) {
    document.title = translations[lang].site_title;
  }
}

function toggleLang() {
  lang = lang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", lang);
  applyLang();
}

/* QUOTES */

const quotes = {
  ar: [
    "ابدأ الآن، ليس غدًا ✨",
    "كل إنجاز صغير يقربك من هدفك 💪",
    "استمر… أنت تستطيع 🔥",
    "إنجازك اليوم هو فخرك غدًا 🌟",
    "رتّب أولوياتك… وابدأ بالأهم 🎯",
    "النجاح عادة، مو صدفة 💼",
    "كل يوم صفحة جديدة فاكتبها صح 📖",
    "التقدم أهم من الكمال 🚶‍♀️",
    "لا تنتظر الحافز… اصنعه 💥",
    "أنجز مهمة الآن وارتاح بعدها ☕",
    "حلمك يستاهل تعبك 💫",
    "الاستمرارية تصنع الفرق 🔁",
    "ابدأ ولو بخطوة بسيطة 👣"
  ],
  en: [
    "Start now, not tomorrow ✨",
    "Every small progress counts 💪",
    "Keep going… you can do it 🔥",
    "Success is built daily 🏗️",
    "Focus on progress, not perfection 🎯",
    "One task at a time ✔️",
    "Discipline creates freedom 💼",
    "Your future self will thank you 🙌",
    "Small steps lead to big results 🚀",
    "Make today productive 💡",
    "Consistency beats motivation 🔥",
    "Start simple, start now ⏳",
    "You are closer than you think 🌟"
  ]
};

function showQuote() {
  const currentLang = localStorage.getItem("lang") || "ar";
  const box = document.getElementById("quoteBox");
  if (!box) return;
  const randomIndex = Math.floor(Math.random() * quotes[currentLang].length);
  box.textContent = quotes[currentLang][randomIndex];
}

/* PROGRESS (يستخدم في الصفحة الرئيسية لو حبيت) */

function updateProgress() {
  const el = document.getElementById("progressText");
  if (!el) return;

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const completed = tasks.filter(task => task.done).length;
  const percent = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  el.textContent = translations[lang].progress + " " + percent + "%";

  localStorage.setItem("lastProgress", percent);
  localStorage.setItem("lastDate", new Date().toDateString());
}

function checkYesterdayProgress() {
  const today = new Date().toDateString();
  const savedDate = localStorage.getItem("lastDate");
  const savedProgress = localStorage.getItem("lastProgress");

  // أول مرة يفتح فيها المستخدم
  if (!savedDate) {
    localStorage.setItem("lastDate", today);
    return;
  }

  // إذا دخل يوم جديد
  if (savedDate !== today) {

    // لو فيه نسبة محفوظة من أمس → اعرض إشعار تشجيعي
    if (savedProgress !== null) {
      alert("👏 أحسنت! أنجزت أمس بنسبة " + savedProgress + "%");
    }

    // تحديث التاريخ لليوم الجديد
    localStorage.setItem("lastDate", today);

    // تصفير نسبة الإنجاز لليوم الجديد
    localStorage.setItem("lastProgress", 0);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  applyLang();
  showQuote();
  checkYesterdayProgress();
});
/* ===== DARK MODE ===== */

function applyDarkMode() {
  const mode = localStorage.getItem("darkMode") || "light";
  if (mode === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", isDark ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang();
  applyDarkMode();
  showQuote();
  updateProgress();
  checkYesterdayProgress();
});