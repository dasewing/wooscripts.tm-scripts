// Copy text to the clipboard. Resolves to true on success, false otherwise.
// Inlined into .user.js files by scripts/build.js — do not wrap in an IIFE.
async function copyText(text) {
    if (!text) {
        return false;
    }

    try {
        if (navigator.clipboard?.writeText && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }

        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        Object.assign(textarea.style, {
            position: 'fixed',
            left: '-9999px',
            top: '0',
        });
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand('copy');
        textarea.remove();
        return copied;
    } catch {
        return false;
    }
}
