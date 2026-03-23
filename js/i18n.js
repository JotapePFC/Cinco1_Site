const defaultLang = 'pt';
let currentLang = localStorage.getItem('cinco1_lang') || defaultLang;

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cinco1_lang', lang);
    applyTranslations();
    updateToggleButtons();
}

function applyTranslations() {
    if (typeof translations === 'undefined') return;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // Handle dynamic updates via events
    window.dispatchEvent(new Event('languageChanged'));
}

function updateToggleButtons() {
    const toggles = document.querySelectorAll('.lang-toggle-text');
    toggles.forEach(toggle => {
        toggle.textContent = currentLang === 'pt' ? 'PT-BR' : 'EN';
    });
}

function toggleLanguage() {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    setLanguage(newLang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to toggle buttons
    const buttons = document.querySelectorAll('.lang-toggle-btn');
    buttons.forEach(btn => btn.addEventListener('click', toggleLanguage));
    
    // Ensure translation applies initially
    applyTranslations();
    updateToggleButtons();
});
