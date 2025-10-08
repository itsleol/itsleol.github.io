let currentLang = 'en';
function setLang(langObj) {
  for (const key in langObj) {
    const el = document.getElementById(key);
    if (el) el.textContent = langObj[key];
  }
}
document.getElementById('lang-toggle').onclick = function() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  setLang(currentLang === 'en' ? window.LANG_EN : window.LANG_ZH);
};
// 页面加载默认语言
window.onload = function() {
  setLang(window.LANG_EN);
};
