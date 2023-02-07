const CSS_SCRIPT_HIDE_NAVBAR_ALL = `
    html tp-yt-app-drawer#guide,
    html yt-icon-button#guide-button,
    html ytd-mini-guide-renderer[role="navigation"]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_QUICKLINKS = `
    html ytd-guide-collapsible-section-entry-renderer
    { display: none !important; }
`;

function memorizeStates() {
    browser.storage.local.get({hide_navbar_all_state: ""})
        .then(result => document.getElementById("hide-navbar-all").checked = !!result.hide_navbar_all_state);
    browser.storage.local.get({hide_navbar_quicklinks_state: ""})
        .then(result => document.getElementById("hide-navbar-quicklinks").checked = !!result.hide_navbar_quicklinks_state);
}

function listenForClicks() {
    document.addEventListener("change", (event) => {

        function reportError(error) {
            console.error(`Error: ${error}`);
        }

        function hideNavbarAll(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-navbar-all",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_ALL,
            });
        }
        function unhideNavbarAll(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-navbar-all",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_ALL,
            });
        }

        function hideNavbarQuicklinks(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-navbar-quicklinks",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_QUICKLINKS,
            });
        }
        function unhideNavbarQuicklinks(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-navbar-quicklinks",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_QUICKLINKS,
            });
        }

        if (event.target.id === "hide-navbar-all") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_all_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarAll).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarAll).catch(reportError);
        }
        else if (event.target.id === "hide-navbar-quicklinks") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_quicklinks_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarQuicklinks).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarQuicklinks).catch(reportError);
        }

    });
}

browser.tabs.executeScript({file: "/content_scripts/main.js"}).then(memorizeStates).then(listenForClicks);
