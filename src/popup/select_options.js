// ========== =========== ========== ========== ========== //
//                                                         //
//             DECLARING CSS INJECTION SCRIPTS             //
//                                                         //
// ========== =========== ========== ========== ========== //

// ====================== HOMEPAGE ======================= //

const CSS_SCRIPT_HIDE_HOMEPAGE_ALL = `
    html ytd-browse[page-subtype="home"]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_HOMEPAGE_AD = `
    html ytd-ad-slot-renderer
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_HOMEPAGE_NEWS = `
    html ytd-rich-section-renderer[ossd_homepage_news_section]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_HOMEPAGE_SHORTS = `
    html ytd-rich-section-renderer[ossd_homepage_shorts_section]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_HOMEPAGE_PRIMETIME = `
    html ytd-rich-section-renderer[ossd_homepage_primetime_section]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_HOMEPAGE_SPECIALSECS = `
    html ytd-rich-section-renderer
    { display: none !important; }
`;
function CSS_SCRIPT_HIDE_HOMEPAGE_SUGGESTIONS_ROWS(num) { return `
    html ytd-browse[page-subtype="home"] ytd-rich-grid-renderer > #contents > ytd-rich-grid-row:nth-of-type(n+${num})
    { display: none !important; }
`; }
const CSS_SCRIPT_HIDE_HOMEPAGE_HEADER = `
    ytd-browse[page-subtype="home"] ytd-rich-grid-renderer > div#header
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_HOMEPAGE_THUMBNAILS = `
    html ytd-thumbnail,
    html #media-container.ytd-display-ad-renderer
    { display: none !important; }
`;

// =================== NAVIGATION BAR ==================== //

function CSS_SCRIPT_CHANGE_COLOR_NAVBAR_TEXT(color) { return `
    html a[title="Home"][href="/"] yt-formatted-string,
    html a[title="Home"][href="/"] yt-icon.guide-icon,
    html a[title="Home"][href="/"] span.title,
    html a[href="/feed/trending"] yt-formatted-string,
    html a[href="/feed/trending"] yt-icon.guide-icon,
    html a[href="/feed/trending"] span.title,
    html a[href="/feed/explore"] yt-formatted-string,
    html a[href="/feed/explore"] yt-icon.guide-icon,
    html a[href="/feed/explore"] span.title,
    html a[title="Shorts"] yt-formatted-string,
    html a[title="Shorts"] yt-icon.guide-icon,
    html a[title="Shorts"] span.title,
    html a[title="Subscriptions"][href="/feed/subscriptions"] yt-formatted-string,
    html a[title="Subscriptions"][href="/feed/subscriptions"] yt-icon.guide-icon,
    html a[title="Subscriptions"][href="/feed/subscriptions"] span.title,
    html ytd-guide-collapsible-section-entry-renderer yt-formatted-string,
    html ytd-guide-collapsible-section-entry-renderer yt-icon.guide-icon,
    html ytd-guide-collapsible-section-entry-renderer span.title,
    html a[title="Library"][href="/feed/library"] yt-formatted-string,
    html a[title="Library"][href="/feed/library"] yt-icon.guide-icon,
    html a[title="Library"][href="/feed/library"] span.title,
    html ytd-guide-section-renderer[ossd_sub_section] yt-formatted-string,
    html ytd-guide-section-renderer[ossd_sub_section] yt-icon.guide-icon,
    html ytd-guide-section-renderer[ossd_sub_section] span.title,
    html ytd-guide-section-renderer[ossd_explore_section] yt-formatted-string,
    html ytd-guide-section-renderer[ossd_explore_section] yt-icon.guide-icon,
    html ytd-guide-section-renderer[ossd_explore_section] span.title,
    html ytd-guide-section-renderer[ossd_more_section] yt-formatted-string,
    html ytd-guide-section-renderer[ossd_more_section] yt-icon.guide-icon,
    html ytd-guide-section-renderer[ossd_more_section] span.title,
    html ytd-guide-section-renderer[ossd_hidden_section] yt-formatted-string,
    html ytd-guide-section-renderer[ossd_hidden_section] yt-icon.guide-icon,
    html ytd-guide-section-renderer[ossd_hidden_section] span.title
    { color: ${color} !important; }
`; }
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
    html ytd-guide-collapsible-section-entry-renderer,
    html a[title="Library"][href="/feed/library"]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_SUBSEC = `
    html ytd-guide-section-renderer[ossd_sub_section]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_EXPLORESEC = `
    html ytd-guide-section-renderer[ossd_explore_section]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_MORE = `
    html ytd-guide-section-renderer[ossd_more_section]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_SETTINGS = `
    html ytd-guide-section-renderer[ossd_hidden_section]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_NAVBAR_FOOTER = `
    html div#footer.ytd-guide-renderer
    { display: none !important; }
`;

// ==================== VIDEO PLAYER ===================== //

function CSS_SCRIPT_CHANGE_COLOR_PROGBAR_TEXT(color) { return `
    html .ytp-scrubber-button
    { background-color: ${color} !important; }
`; }
const CSS_SCRIPT_TURN_SKYMODE_ON = `
    html #container.ytd-masthead
    { background-color: #a8dadc; }
    html ytd-app,
    html ytd-app[darker-dark-theme],
    html #channel-header.ytd-c4-tabbed-header-renderer,
    html #contents.ytd-rich-grid-renderer,
    html ytd-shorts,
    html #shorts-container.ytd-shorts,
    html ytd-browse,
    html #tabs-inner-container.ytd-c4-tabbed-header-renderer,
    html ytd-app[darker-dark-theme] #guide-content.ytd-app,
    html ytd-app[guide-refresh] ytd-mini-guide-renderer.ytd-app,
    html ytd-watch-flexy[flexy][is-two-columns_] #columns.ytd-watch-flexy,
    html ytd-feed-filter-chip-bar-renderer[darker-dark-theme] #chips-wrapper.ytd-feed-filter-chip-bar-renderer
    { background-color: #f1faee; }
    html .guide-icon.ytd-mini-guide-entry-renderer,
    html ytd-mini-guide-entry-renderer[system-icons][is-active] .title.ytd-mini-guide-entry-renderer,
    html ytd-mini-guide-entry-renderer[system-icons] .title.ytd-mini-guide-entry-renderer,
    html tp-yt-paper-tab:not(.iron-selected) .tp-yt-paper-tab[style-target="tab-content"]
    { color: #212121; }
    html yt-chip-cloud-chip-renderer[modern-chips][chip-style],
    html .header.ytd-playlist-panel-renderer
    { background-color: #a8dadc; border: 1px solid #ffffff; }
    html yt-chip-cloud-chip-renderer[modern-chips][chip-style]
    { background-color: #457b9d; color: #f1faee; }
`;

// ========== =========== ========== ========== ========== //
//                                                         //
//          DECLARING CUSTOMIZATION STATE MEMORY           //
//                                                         //
// ========== =========== ========== ========== ========== //

function memorizeStates() {

    // ====================== HOMEPAGE ======================= //

    browser.storage.local.get({hide_homepage_all_state: ""})
        .then(result => document.getElementById("hide-homepage-all").checked = !!result.hide_homepage_all_state);
    browser.storage.local.get({hide_homepage_ad_state: ""})
        .then(result => document.getElementById("hide-homepage-ad").checked = !!result.hide_homepage_ad_state);
    browser.storage.local.get({hide_homepage_news_state: ""})
        .then(result => document.getElementById("hide-homepage-news").checked = !!result.hide_homepage_news_state);
    browser.storage.local.get({hide_homepage_shorts_state: ""})
        .then(result => document.getElementById("hide-homepage-shorts").checked = !!result.hide_homepage_shorts_state);
    browser.storage.local.get({hide_homepage_primetime_state: ""})
        .then(result => document.getElementById("hide-homepage-primetime").checked = !!result.hide_homepage_primetime_state);
    browser.storage.local.get({hide_homepage_specialsecs_state: ""})
        .then(result => document.getElementById("hide-homepage-specialsecs").checked = !!result.hide_homepage_specialsecs_state);
    browser.storage.local.get({hide_homepage_suggestions_rows_state: ""})
        .then(result => document.getElementById("hide-homepage-suggestions-rows").value = result.hide_homepage_suggestions_rows_state);
    browser.storage.local.get({hide_homepage_header_state: ""})
        .then(result => document.getElementById("hide-homepage-header").checked = !!result.hide_homepage_header_state);
    browser.storage.local.get({hide_homepage_thumbnails_state: ""})
        .then(result => document.getElementById("hide-homepage-thumbnails").checked = !!result.hide_homepage_thumbnails_state);

    // =================== NAVIGATION BAR ==================== //

    browser.storage.local.get({change_color_navbar_text_state: ""})
        .then(result => document.getElementById("change-color-navbar-text").value = result.change_color_navbar_text_state);
    browser.storage.local.get({icon_redirect_navbar_state: ""})
        .then(result => document.getElementById("icon-redirect-navbar").value = result.icon_redirect_navbar_state);
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

    // ==================== VIDEO PLAYER ===================== //

    browser.storage.local.get({change_color_progbar_text_state: ""})
        .then(result => document.getElementById("change-color-progbar-text").value = result.change_color_progbar_text_state);
    browser.storage.local.get({sky_mode_on_state: ""})
        .then(result => document.getElementById("sky-mode-on").checked = !!result.sky_mode_on_state);

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
    
        // ====================== HOMEPAGE ======================= //

        function hideHomepageAll(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-homepage-all",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_ALL,
            });
        }
        function unhideHomepageAll(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-homepage-all",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_ALL,
            });
        }

        function hideHomepageAd(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-homepage-ad",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_AD,
            });
        }
        function unhideHomepageAd(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-homepage-ad",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_AD,
            });
        }

        function hideHomepageNews(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-homepage-news",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_NEWS,
            });
        }
        function unhideHomepageNews(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-homepage-news",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_NEWS,
            });
        }

        function hideHomepageShorts(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-homepage-shorts",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_SHORTS,
            });
        }
        function unhideHomepageShorts(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-homepage-shorts",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_SHORTS,
            });
        }

        function hideHomepagePrimetime(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-homepage-primetime",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_PRIMETIME,
            });
        }
        function unhideHomepagePrimetime(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-homepage-primetime",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_PRIMETIME,
            });
        }

        function hideHomepageSpecialsecs(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-homepage-specialsecs",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_SPECIALSECS,
            });
        }
        function unhideHomepageSpecialsecs(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-homepage-specialsecs",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_SPECIALSECS,
            });
        }

        function hideHomepageSuggestionsRows(tabs, num) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-homepage-suggestions-rows",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_SUGGESTIONS_ROWS(num),
            });
        }
        function cancelHideHomepageSuggestionsRows(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-homepage-suggestions-rows",
                css_script: "",
            });
        }

        function hideHomepageHeader(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-homepage-header",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_HEADER,
            });
        }
        function unhideHomepageHeader(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-homepage-header",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_HEADER,
            });
        }

        function hideHomepageThumbnails(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-hide-homepage-thumbnails",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_THUMBNAILS,
            });
        }
        function unhideHomepageThumbnails(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-hide-homepage-thumbnails",
                css_script: CSS_SCRIPT_HIDE_HOMEPAGE_THUMBNAILS,
            });
        }

        // =================== NAVIGATION BAR ==================== //

        function changeColorNavbarText(tabs, color) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-change-color-navbar-text",
                css_script: CSS_SCRIPT_CHANGE_COLOR_NAVBAR_TEXT(color),
            });
        }
        function cancelChangeColorNavbarText(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-change-color-navbar-text",
                css_script: "",
            });
        }

        function iconRedirectNavbar(tabs, url) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "i_icon_redirect_navbar",
                url: url,
            });
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

        // ==================== VIDEO PLAYER ===================== //

        function changeColorProgbarText(tabs, color) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-change-color-progbar-text",
                css_script: CSS_SCRIPT_CHANGE_COLOR_PROGBAR_TEXT(color),
            });
        }
        function cancelChangeColorProgbarText(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-change-color-progbar-text",
                css_script: "",
            });
        }

        function skyModeOn(tabs){
            browser.tabs.sendMessage(tabs[0].id, {
                command: "insert_css",
                description: "css-script-turn-skymode-on",
                css_script: CSS_SCRIPT_TURN_SKYMODE_ON,
            });
        }
        function skyModeOff(tabs){
            browser.tabs.sendMessage(tabs[0].id, {
                command: "remove_css",
                description: "css-script-turn-skymode-on",
                css_script: CSS_SCRIPT_TURN_SKYMODE_ON,
            });
        }

        // ========== =========== ========== ========== ========== //
        //                                                         //
        //            DECLARING CUSTOMIZATION TRIGGERS             //
        //                                                         //
        // ========== =========== ========== ========== ========== //
        // TODO: Possibly need to change querying sentence

        // ====================== HOMEPAGE ======================= //

        if (event.target.id === "hide-homepage-all") {
            var m = event.target.checked;
            browser.storage.local.set({hide_homepage_all_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideHomepageAll).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideHomepageAll).catch(reportError);
        }
        else if (event.target.id === "hide-homepage-ad") {
            var m = event.target.checked;
            browser.storage.local.set({hide_homepage_ad_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideHomepageAd).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideHomepageAd).catch(reportError);
        }
        else if (event.target.id === "hide-homepage-news") {
            var m = event.target.checked;
            browser.storage.local.set({hide_homepage_news_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideHomepageNews).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideHomepageNews).catch(reportError);
        }
        else if (event.target.id === "hide-homepage-shorts") {
            var m = event.target.checked;
            browser.storage.local.set({hide_homepage_shorts_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideHomepageShorts).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideHomepageShorts).catch(reportError);
        }
        else if (event.target.id === "hide-homepage-primetime") {
            var m = event.target.checked;
            browser.storage.local.set({hide_homepage_primetime_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideHomepagePrimetime).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideHomepagePrimetime).catch(reportError);
        }
        else if (event.target.id === "hide-homepage-specialsecs") {
            var m = event.target.checked;
            browser.storage.local.set({hide_homepage_specialsecs_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideHomepageSpecialsecs).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideHomepageSpecialsecs).catch(reportError);
        }
        else if (event.target.id === "hide-homepage-suggestions-rows") {
            var m = event.target.value;
            browser.storage.local.set({hide_homepage_suggestions_rows_state: m});
            if (m === "inf") browser.tabs.query({active: true, currentWindow: true}).then(cancelHideHomepageSuggestionsRows).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(tabs => hideHomepageSuggestionsRows(tabs, m)).catch(reportError);
        }
        else if (event.target.id === "hide-homepage-header") {
            var m = event.target.checked;
            browser.storage.local.set({hide_homepage_header_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideHomepageHeader).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideHomepageHeader).catch(reportError);
        }
        else if (event.target.id === "hide-homepage-thumbnails") {
            var m = event.target.checked;
            browser.storage.local.set({hide_homepage_thumbnails_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(hideHomepageThumbnails).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(unhideHomepageThumbnails).catch(reportError);
        }

        // =================== NAVIGATION BAR ==================== //

        else if (event.target.id === "change-color-navbar-text") {
            var m = event.target.value;
            browser.storage.local.set({change_color_navbar_text_state: m});
            if (m === "default") browser.tabs.query({active: true, currentWindow: true}).then(cancelChangeColorNavbarText).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(tabs => changeColorNavbarText(tabs, m)).catch(reportError);
        }
        else if (event.target.id === "icon-redirect-navbar") {
            var m = event.target.value;
            browser.storage.local.set({icon_redirect_navbar_state: m});
            browser.tabs.query({active: true, currentWindow: true}).then(tabs => iconRedirectNavbar(tabs, m)).catch(reportError);
        }
        else if (event.target.id === "hide-navbar-all") {
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

        // ==================== VIDEO PLAYER ===================== //

        else if (event.target.id === "change-color-progbar-text") {
            var m = event.target.value;
            browser.storage.local.set({change_color_progbar_text_state: m});
            if (m === "default") browser.tabs.query({active: true, currentWindow: true}).then(cancelChangeColorProgbarText).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(tabs => changeColorProgbarText(tabs, m)).catch(reportError);
        }
        else if(event.target.id === "sky-mode-on"){
            var m = event.target.checked;
            browser.storage.local.set({sky_mode_on_state: m});
            if (m) browser.tabs.query({active: true, currentWindow: true}).then(skyModeOn).catch(reportError);
            else browser.tabs.query({active: true, currentWindow: true}).then(skyModeOff).catch(reportError);
        }
    });
}

browser.tabs.executeScript({file: "/content_scripts/main.js"}).then(memorizeStates).then(listenForClicks);
