// Shared by the server layout and the client-side ThemeToggle, so it can't live in a 'use client' file.

/** localStorage key for an explicit choice. With no stored choice, the site follows the system setting. */
export const THEME_STORAGE_KEY = 'theme';

/**
 * Runs in <head> before the page paints, so a dark-mode visitor never sees a flash of the light theme.
 * Allowed by the Content-Security-Policy's script-src 'unsafe-inline' (see next.config.mjs).
 */
export const themeInitScript = `(function () {
    try {
        var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
        var dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (dark) document.documentElement.classList.add('dark');
    } catch (e) {}
})();`;
