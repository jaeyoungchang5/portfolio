// Shared by the server layout and the client-side ThemeToggle, so it can't live in a 'use client' file.

/** localStorage key for the visitor's choice. Without one, the site is light; the system setting is ignored. */
export const THEME_STORAGE_KEY = 'theme';

/**
 * Runs in <head> before the page paints, so a visitor who chose dark never sees a flash of the light theme.
 * Allowed by the Content-Security-Policy's script-src 'unsafe-inline' (see next.config.mjs).
 */
export const themeInitScript = `(function () {
    try {
        if (localStorage.getItem('${THEME_STORAGE_KEY}') === 'dark') document.documentElement.classList.add('dark');
    } catch (e) {}
})();`;
