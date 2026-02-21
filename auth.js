// تسجيل حساب (يستخدم في signup.html أو صفحات التسجيل)
function register() {
  const name =
    document.getElementById("signupName")?.value?.trim() || "";
  const username =
    document.getElementById("signupUsername")?.value?.trim() || "";
  const email =
    document.getElementById("signupEmail")?.value?.trim() ||
    document.getElementById("regEmail")?.value?.trim() ||
    "";
  const password =
    document.getElementById("signupPassword")?.value ||
    document.getElementById("regPassword")?.value ||
    "";

  const emailError = document.getElementById("emailError");
  if (emailError) emailError.textContent = "";

  if (!email || !password) {
    alert("أكمل البيانات");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    if (emailError) emailError.textContent = "اكتب بريد إلكتروني صحيح";
    else alert("اكتب بريد إلكتروني صحيح");
    return;
  }

  if (password.length < 8) {
    alert("كلمة المرور يجب أن تكون 8 أحرف على الأقل");
    return;
  }

  const user = { name, username, email, password };
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("loggedIn", "true");

  window.location.href = "index.html";
}

// تسجيل دخول
function login() {
  const email = document.getElementById("loginEmail")?.value;
  const password = document.getElementById("loginPassword")?.value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("لا يوجد حساب مسجل");
    return;
  }

  if (user.email !== email || user.password !== password) {
    alert("البيانات غير صحيحة");
    return;
  }

  localStorage.setItem("loggedIn", "true");
  window.location.href = "index.html";
}

// تسجيل خروج
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// حماية الصفحات الخاصة
function checkAuth() {
  const user = JSON.parse(localStorage.getItem("user"));
  const loggedIn = localStorage.getItem("loggedIn");

  if (!user || loggedIn !== "true") {
    window.location.href = "login.html";
  }
}