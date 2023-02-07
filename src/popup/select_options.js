const CSS_SCRIPT_HIDE_NAVBAR_ALL = `html tp-yt-app-drawer#guide, yt-icon-button#guide-button { display: none !important; }`;

function memorizeStates() {
    browser.storage.local.get({hide_navbar_all_state: ""})
        .then(result => document.getElementById("hide-navbar-all").checked = !!result.hide_navbar_all_state);
}

function listenForClicks() {
    document.addEventListener("change", (event) => {

        function reportError(error) {
            console.error(`Error: ${error}`);
        }
        function hideNavbarAll(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-nav-bar",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_ALL,
            });
        }
        function unhideNavbarAll(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-nav-bar",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_ALL,
            });
        }

        if (event.target.id === "hide-navbar-all") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_all_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarAll).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarAll).catch(reportError);
        }

    });
}

browser.tabs.executeScript({file: "/content_scripts/main.js"}).then(memorizeStates).then(listenForClicks);
