// DOM helpers shared by the user scripts.
// Inlined into .user.js files by scripts/build.js — do not wrap in an IIFE.

// Append a <style> once, guarded by its element id.
function addStyle(id, cssText) {
    if (document.getElementById(id)) {
        return;
    }

    const style = document.createElement('style');
    style.id = id;
    style.textContent = cssText;
    (document.head || document.documentElement).appendChild(style);
}

// Run callback now, or on DOMContentLoaded when the document is still loading.
function onDomReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
        callback();
    }
}

// Observe body mutations and invoke callback at most once per animation frame.
function observeDomChanges(callback) {
    let queued = false;
    const observer = new MutationObserver(() => {
        if (queued) {
            return;
        }

        queued = true;
        requestAnimationFrame(() => {
            queued = false;
            callback();
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return observer;
}
