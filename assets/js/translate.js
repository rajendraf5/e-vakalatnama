function changeLanguage(lang, label) {
    // Keep your custom dropdown text unchanged by Google Translate
    document.getElementById('currentLanguage').textContent = label;

    const changeGoogleLanguage = () => {
        const select = document.querySelector('.goog-te-combo');

        if (!select) {
            return false;
        }

        select.value = lang;

        // Google Translate listens for the change event
        select.dispatchEvent(new Event('change', {
            bubbles: true
        }));

        return true;
    };

    // Try immediately
    if (changeGoogleLanguage()) {
        return;
    }

    // Google Translate may still be loading
    let attempts = 0;

    const timer = setInterval(() => {
        attempts++;

        if (changeGoogleLanguage() || attempts >= 20) {
            clearInterval(timer);
        }
    }, 300);
};

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi',
        autoDisplay: false
    }, 'google_translate_element');
}