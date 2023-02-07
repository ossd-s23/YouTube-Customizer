// ========== =========== ========== ========== ========== //
//                                                         //
//             DECLARING CSS INJECTION SCRIPTS             //
//                                                         //
// ========== =========== ========== ========== ========== //

// =================== NAVIGATION BAR ==================== //

const CSS_SCRIPT_HIDE_NAVBAR_ALL = `
    html tp-yt-app-drawer#guide,
    html yt-icon-button#guide-button,
    html ytd-mini-guide-renderer[role="navigation"]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_HOME = `
    html a[title="Home"][href="/"]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_EXPLORE = `
    html a[href="/feed/trending"],
    html a[href="/feed/explore"]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_SHORTS = `
    html a[title="Shorts"]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_SUB = `
    html a[title="Subscriptions"][href="/feed/subscriptions"]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_QUICKLINKS = `
    html ytd-guide-collapsible-section-entry-renderer
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_SUBSEC = `
    html ytd-guide-section-renderer[rys_sub_section]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_EXPLORESEC = `
    html ytd-guide-section-renderer[rys_explore_section]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_MORE = `
    html ytd-guide-section-renderer[rys_more_section]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_SETTINGS = `
    html ytd-guide-section-renderer[rys_hidden_section]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_FOOTER = `
    html div#footer.ytd-guide-renderer
    { display: none !important; }
`;

// ========== =========== ========== ========== ========== //
//                                                         //
//          DECLARING CUSTOMIZATION STATE MEMORY           //
//                                                         //
// ========== =========== ========== ========== ========== //

function memorizeStates() {

    // =================== NAVIGATION BAR ==================== //
    browser.storage.local.get({hide_navbar_all_state: ""})
        .then(result => document.getElementById("hide-navbar-all").checked = !!result.hide_navbar_all_state);
    browser.storage.local.get({hide_navbar_home_state: ""})
        .then(result => document.getElementById("hide-navbar-home").checked = !!result.hide_navbar_home_state);
    browser.storage.local.get({hide_navbar_explore_state: ""})
        .then(result => document.getElementById("hide-navbar-explore").checked = !!result.hide_navbar_explore_state);
    browser.storage.local.get({hide_navbar_shorts_state: ""})
        .then(result => document.getElementById("hide-navbar-shorts").checked = !!result.hide_navbar_shorts_state);
    browser.storage.local.get({hide_navbar_sub_state: ""})
        .then(result => document.getElementById("hide-navbar-sub").checked = !!result.hide_navbar_sub_state);
    browser.storage.local.get({hide_navbar_quicklinks_state: ""})
        .then(result => document.getElementById("hide-navbar-quicklinks").checked = !!result.hide_navbar_quicklinks_state);
    browser.storage.local.get({hide_navbar_subsec_state: ""})
        .then(result => document.getElementById("hide-navbar-subsec").checked = !!result.hide_navbar_subsec_state);
    browser.storage.local.get({hide_navbar_exploresec_state: ""})
        .then(result => document.getElementById("hide-navbar-exploresec").checked = !!result.hide_navbar_exploresec_state);
    browser.storage.local.get({hide_navbar_more_state: ""})
        .then(result => document.getElementById("hide-navbar-more").checked = !!result.hide_navbar_more_state);
        browser.storage.local.get({hide_navbar_settings_state: ""})
        .then(result => document.getElementById("hide-navbar-settings").checked = !!result.hide_navbar_settings_state);
    browser.storage.local.get({hide_navbar_footer_state: ""})
        .then(result => document.getElementById("hide-navbar-footer").checked = !!result.hide_navbar_footer_state);

}

function listenForClicks() {
    document.addEventListener("change", (event) => {
        function reportError(error) {
            console.error(`Error: ${error}`);
        }

        // ========== =========== ========== ========== ========== //
        //                                                         //
        //        DECLARING CUSTOMIZATION MESSAGE FUNCTIONS        //
        //                                                         //
        // ========== =========== ========== ========== ========== //
        // TODO: Possibly need to change usage of tabs API

        // =================== NAVIGATION BAR ==================== //

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

        function hideNavbarHome(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-navbar-home",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_HOME,
            });
        }
        function unhideNavbarHome(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-navbar-home",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_HOME,
            });
        }

        function hideNavbarExplore(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-navbar-explore",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_EXPLORE,
            });
        }
        function unhideNavbarExplore(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-navbar-explore",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_EXPLORE,
            });
        }

        function hideNavbarShorts(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-navbar-shorts",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_SHORTS,
            });
        }
        function unhideNavbarShorts(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-navbar-shorts",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_SHORTS,
            });
        }

        function hideNavbarSub(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-navbar-sub",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_SUB,
            });
        }
        function unhideNavbarSub(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-navbar-sub",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_SUB,
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

        function hideNavbarSubsec(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-navbar-subsec",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_SUBSEC,
            });
        }
        function unhideNavbarSubsec(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-navbar-subsec",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_SUBSEC,
            });
        }

        function hideNavbarExploresec(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-navbar-exploresec",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_EXPLORESEC,
            });
        }
        function unhideNavbarExploresec(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-navbar-exploresec",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_EXPLORESEC,
            });
        }

        function hideNavbarMore(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-navbar-more",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_MORE,
            });
        }
        function unhideNavbarMore(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-navbar-more",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_MORE,
            });
        }

        function hideNavbarSettings(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-navbar-settings",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_SETTINGS,
            });
        }
        function unhideNavbarSettings(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-navbar-settings",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_SETTINGS,
            });
        }

        function hideNavbarFooter(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-navbar-footer",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_FOOTER,
            });
        }
        function unhideNavbarFooter(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-navbar-footer",
                css_script: CSS_SCRIPT_HIDE_NAVBAR_FOOTER,
            });
        }

        // ========== =========== ========== ========== ========== //
        //                                                         //
        //            DECLARING CUSTOMIZATION TRIGGERS             //
        //                                                         //
        // ========== =========== ========== ========== ========== //
        // TODO: Possibly need to change querying sentence

        // =================== NAVIGATION BAR ==================== //

        if (event.target.id === "hide-navbar-all") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_all_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarAll).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarAll).catch(reportError);
        }
        else if (event.target.id === "hide-navbar-home") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_home_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarHome).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarHome).catch(reportError);
        }
        else if (event.target.id === "hide-navbar-explore") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_explore_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarExplore).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarExplore).catch(reportError);
        }
        else if (event.target.id === "hide-navbar-shorts") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_shorts_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarShorts).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarShorts).catch(reportError);
        }
        else if (event.target.id === "hide-navbar-sub") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_sub_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarSub).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarSub).catch(reportError);
        }
        else if (event.target.id === "hide-navbar-quicklinks") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_quicklinks_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarQuicklinks).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarQuicklinks).catch(reportError);
        }
        else if (event.target.id === "hide-navbar-subsec") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_subsec_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarSubsec).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarSubsec).catch(reportError);
        }
        else if (event.target.id === "hide-navbar-exploresec") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_exploresec_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarExploresec).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarExploresec).catch(reportError);
        }
        else if (event.target.id === "hide-navbar-more") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_more_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarMore).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarMore).catch(reportError);
        }
        else if (event.target.id === "hide-navbar-settings") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_settings_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarSettings).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarSettings).catch(reportError);
        }
        else if (event.target.id === "hide-navbar-footer") {
            var m = event.target.checked;
            browser.storage.local.set({hide_navbar_footer_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideNavbarFooter).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideNavbarFooter).catch(reportError);
        }

    });
}

browser.tabs.executeScript({file: "/content_scripts/main.js"}).then(memorizeStates).then(listenForClicks);
