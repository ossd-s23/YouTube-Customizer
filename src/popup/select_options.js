// ========== =========== ========== ========== ========== //
//                                                         //
//                   DECLARING PATTERNS                    //
//                                                         //
// ========== =========== ========== ========== ========== //

const GENERAL_SCHEMES = [[],  // Medium, Lightest, Almost-black, Almost-white, Darkest
    ["#a8dadc", "#f1faee", "#212121", "#ffffff", "#457b9d"],
    ["#ffe7cc", "#fffbeb", "#212121", "#ffffff", "#d48747"],
    ["#f8dbe3", "#fdf2f6", "#212121", "#ffffff", "#dc628d"],
];
const PUSHEEN = browser.runtime.getURL("images/pusheen.gif");
const PIKACHU = browser.runtime.getURL("images/pikachu.gif");
const CAPOO = browser.runtime.getURL("images/capoo.gif");
const CHERRY_LOVE = `linear-gradient(
          0deg,
          hsl(0deg 95% 40%) 0%,
          hsl(332deg 91% 43%) 8%,
          hsl(322deg 89% 46%) 17%,
          hsl(315deg 87% 49%) 25%,
          hsl(314deg 83% 59%) 33%,
          hsl(311deg 86% 64%) 42%,
          hsl(307deg 90% 69%) 50%,
          hsl(310deg 89% 70%) 58%,
          hsl(312deg 89% 72%) 67%,
          hsl(315deg 88% 73%) 75%,
          hsl(313deg 87% 77%) 83%,
          hsl(310deg 85% 81%) 92%,
          hsl(306deg 82% 85%) 100%)`;
const POKEBALL = "linear-gradient(to bottom, red 45%, grey 55%, white 100%)";
const LIGHTBLUE = "#6cd3ff";

// ========== =========== ========== ========== ========== //
//                                                         //
//             DECLARING CSS INJECTION SCRIPTS             //
//                                                         //
// ========== =========== ========== ========== ========== //

// ======================= GENERAL ======================= //

function CSS_SCRIPT_CHANGE_GENERAL_SCHEME(colors) { return `
    html #container.ytd-masthead
    { background-color: ${colors[0]}; }
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
    { background-color: ${colors[1]}; }
    html .guide-icon.ytd-mini-guide-entry-renderer,
    html ytd-mini-guide-entry-renderer[system-icons][is-active] .title.ytd-mini-guide-entry-renderer,
    html ytd-mini-guide-entry-renderer[system-icons] .title.ytd-mini-guide-entry-renderer,
    html tp-yt-paper-tab:not(.iron-selected) .tp-yt-paper-tab[style-target="tab-content"]
    { color: ${colors[2]}; }
    html yt-chip-cloud-chip-renderer[modern-chips][chip-style],
    html .header.ytd-playlist-panel-renderer
    { background-color: ${colors[0]}; border: 1px solid ${colors[3]}; }
    html yt-chip-cloud-chip-renderer[modern-chips][chip-style]
    { background-color: ${colors[4]}; color: ${colors[1]}; }
`; }

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

function CSS_SCRIPT_CHANGE_SCRUBBER_PATTERN(pattern) { return `
    html .ytp-scrubber-container
    { background: url(${pattern}) no-repeat; background-size: 36px;
      width: 40px; height: 24px; margin-top: -3px; margin-left: -6px; }
    html .ytp-scrubber-container:hover
    { background-size: 40px; margin-top: -5px; margin-left: -8px; }
    html .ytp-scrubber-button
    { display: none; }
`; }
function CSS_SCRIPT_CHANGE_PROGBAR_PATTERN(pattern) { return `
    html .ytp-play-progress
    { padding: 2.5px .5px; top: -2px; background: ${pattern}; }
`; }
const CSS_SCRIPT_HIDE_SIDEBAR_SUGGESTIONS = `
    html #secondary,
    html #related
    { display: none !important; }
    html ytd-watch-flexy[flexy][is-two-columns_]:not([fullscreen]):not([theater])
    { --ytd-watch-flexy-max-player-width: calc(var(--ytd-watch-flexy-chat-max-height)*var(--ytd-watch-flexy-width-ratio)/var(--ytd-watch-flexy-height-ratio)) !important; }
`;
const CSS_SCRIPT_HIDE_ENDOFVID_SUGGESTIONS = `
    html .html5-endscreen
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_LIKE_AND_MORE = `
    html #menu-container,
    html #actions
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_MERCH_SHELF = `
    html ytd-merch-shelf-renderer
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_ALL_COMMENTS = `
    html #comments,
    html #comment-teaser,
    html ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-comments-section"]
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_COMMENT_ACTIONS = `
    html ytd-comment-action-buttons-renderer
    { display: none !important; }
`;
const CSS_SCRIPT_HIDE_COMMENT_REPLIES = `
    html #replies.ytd-comment-thread-renderer
    { display: none !important; }
`;

// ========== =========== ========== ========== ========== //
//                                                         //
//          DECLARING CUSTOMIZATION STATE MEMORY           //
//                                                         //
// ========== =========== ========== ========== ========== //

function memorizeStates() {
    
    // ======================= GENERAL ======================= //

    browser.storage.local.get({general_scheme_state: ""}).then(result => {
        const res = result.general_scheme_state;
        const grp = document.getElementsByName("general-scheme");
        if (res === "") {
            grp[0].checked = true;
            for (i = 1; i < grp.length; i ++) grp[i].checked = false;
        }
        else {
            for (i = 0; i < grp.length; i ++) {
                if (i == parseInt(res)) grp[i].checked = true;
                else grp[i].checked = false;
            }
        }
    });

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

    browser.storage.local.get({change_scrubber_pattern_state: ""})
        .then(result => document.getElementById("change-scrubber-pattern").value = result.change_scrubber_pattern_state);
    browser.storage.local.get({change_progbar_pattern_state: ""})
        .then(result => document.getElementById("change-progbar-pattern").value = result.change_progbar_pattern_state);
    browser.storage.local.get({hide_sidebar_suggestions_state: ""})
        .then(result => document.getElementById("hide-sidebar-suggestions").checked = !!result.hide_sidebar_suggestions_state);
    browser.storage.local.get({hide_endofvid_suggestions_state: ""})
        .then(result => document.getElementById("hide-endofvid-suggestions").checked = !!result.hide_endofvid_suggestions_state);
    browser.storage.local.get({hide_like_and_more_state: ""})
        .then(result => document.getElementById("hide-like-and-more").checked = !!result.hide_like_and_more_state);
    browser.storage.local.get({hide_merch_shelf_state: ""})
        .then(result => document.getElementById("hide-merch-shelf").checked = !!result.hide_merch_shelf_state);
    browser.storage.local.get({hide_all_comments_state: ""})
        .then(result => document.getElementById("hide-all-comments").checked = !!result.hide_all_comments_state);
    browser.storage.local.get({hide_comment_actions_state: ""})
        .then(result => document.getElementById("hide-comment-actions").checked = !!result.hide_comment_actions_state);
    browser.storage.local.get({hide_comment_replies_state: ""})
        .then(result => document.getElementById("hide-comment-replies").checked = !!result.hide_comment_replies_state);

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

        function sendInsertCSSMessage(tabs, description, css_script) {
            for (const tab of tabs) {
                browser.tabs.sendMessage(tab.id, {
                    command: "insert_css",
                    description: description,
                    css_script, css_script,
                });
            }
        }
        function sendRemoveCSSMessage(tabs, description, css_script) {
            for (const tab of tabs) {
                browser.tabs.sendMessage(tab.id, {
                    command: "remove_css",
                    description: description,
                    css_script, css_script,
                });
            }
        }

        // =================== GENERAL SPECIAL =================== //

        function changeGeneralScheme(tabs, colors) {
            for (const tab of tabs) {
                browser.tabs.sendMessage(tab.id, {
                    command: "insert_css",
                    description: "css-script-change-general-scheme",
                    css_script: CSS_SCRIPT_CHANGE_GENERAL_SCHEME(colors),
                });
            }
        }
    
        // ================== HOMEPAGE SPECIAL =================== //

        function hideHomepageSuggestionsRows(tabs, num) {
            for (const tab of tabs) {
                browser.tabs.sendMessage(tab.id, {
                    command: "insert_css",
                    description: "css-script-hide-homepage-suggestions-rows",
                    css_script: CSS_SCRIPT_HIDE_HOMEPAGE_SUGGESTIONS_ROWS(num),
                });
            }
        }

        // =============== NAVIGATION BAR SPECIAL ================ //

        function changeColorNavbarText(tabs, color) {
            for (const tab of tabs) {
                browser.tabs.sendMessage(tab.id, {
                    command: "insert_css",
                    description: "css-script-change-color-navbar-text",
                    css_script: CSS_SCRIPT_CHANGE_COLOR_NAVBAR_TEXT(color),
                });
            }
        }

        function iconRedirectNavbar(tabs, url) {
            for (const tab of tabs) {
                browser.tabs.sendMessage(tab.id, {
                    command: "i_icon_redirect_navbar",
                    url: url,
                });
            }
        }

        // ================ VIDEO PLAYER SPECIAL ================= //

        function changeScrubberPattern(tabs, pat) {
            var pattern;
            if (pat === "pusheen") pattern = PUSHEEN;
            else if (pat === "pikachu") pattern = PIKACHU;
            else if (pat === "capoo") pattern = CAPOO;
            for (const tab of tabs) {
                browser.tabs.sendMessage(tab.id, {
                    command: "insert_css",
                    description: "css-script-change-scrubber-pattern",
                    css_script: CSS_SCRIPT_CHANGE_SCRUBBER_PATTERN(pattern),
                });
            }
        }

        function changeProgbarPattern(tabs, pat) {
            var pattern;
            if (pat === "cherry-love") pattern = CHERRY_LOVE;
            else if (pat === "pokeball") pattern = POKEBALL;
            else if (pat === "lightblue") pattern = LIGHTBLUE;
            for (const tab of tabs) {
                browser.tabs.sendMessage(tab.id, {
                    command: "insert_css",
                    description: "css-script-change-progbar-pattern",
                    css_script: CSS_SCRIPT_CHANGE_PROGBAR_PATTERN(pattern),
                });
            }
        }

        // ========== =========== ========== ========== ========== //
        //                                                         //
        //            DECLARING CUSTOMIZATION TRIGGERS             //
        //                                                         //
        // ========== =========== ========== ========== ========== //
        // TODO: Possibly need to change querying sentence

        // ====================== GENERAL ======================= //

        if (event.target.name === "general-scheme") {
            var m;
            const d = "css-script-change-general-scheme";
            if (event.target.id === "default-scheme") m = 0;
            else if (event.target.id === "sky-scheme") m = 1;
            else if (event.target.id === "earth-scheme") m = 2;
            else if (event.target.id === "valentine-scheme") m = 3;
            browser.storage.local.set({general_scheme_state: m});
            if (m == 0) browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, ""))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => changeGeneralScheme(tabs, GENERAL_SCHEMES[m]))
                .catch(reportError);
        }

        // ====================== HOMEPAGE ======================= //

        else if (event.target.id === "hide-homepage-all") {
            var m = event.target.checked;
            const d = "css-script-hide-homepage-all";
            browser.storage.local.set({hide_homepage_all_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_ALL))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_ALL))
                .catch(reportError);
        }
        else if (event.target.id === "hide-homepage-ad") {
            var m = event.target.checked;
            const d = "css-script-hide-homepage-ad";
            browser.storage.local.set({hide_homepage_ad_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_AD))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_AD))
                .catch(reportError);
        }
        else if (event.target.id === "hide-homepage-news") {
            var m = event.target.checked;
            const d = "css-script-hide-homepage-news";
            browser.storage.local.set({hide_homepage_news_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_NEWS))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_NEWS))
                .catch(reportError);
        }
        else if (event.target.id === "hide-homepage-shorts") {
            var m = event.target.checked;
            const d = "css-script-hide-homepage-shorts";
            browser.storage.local.set({hide_homepage_shorts_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_SHORTS))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_SHORTS))
                .catch(reportError);
        }
        else if (event.target.id === "hide-homepage-primetime") {
            var m = event.target.checked;
            const d = "css-script-hide-homepage-primetime";
            browser.storage.local.set({hide_homepage_primetime_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_PRIMETIME))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_PRIMETIME))
                .catch(reportError);
        }
        else if (event.target.id === "hide-homepage-specialsecs") {
            var m = event.target.checked;
            const d = "css-script-hide-homepage-specialsecs";
            browser.storage.local.set({hide_homepage_specialsecs_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_SPECIALSECS))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_SPECIALSECS))
                .catch(reportError);
        }
        else if (event.target.id === "hide-homepage-suggestions-rows") {
            var m = event.target.value;
            const d = "css-script-hide-homepage-suggestions-rows";
            browser.storage.local.set({hide_homepage_suggestions_rows_state: m});
            if (m === "inf") browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, ""))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => hideHomepageSuggestionsRows(tabs, m))
                .catch(reportError);
        }
        else if (event.target.id === "hide-homepage-header") {
            var m = event.target.checked;
            const d = "css-script-hide-homepage-header";
            browser.storage.local.set({hide_homepage_header_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_HEADER))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_HEADER))
                .catch(reportError);
        }
        else if (event.target.id === "hide-homepage-thumbnails") {
            var m = event.target.checked;
            const d = "css-script-hide-homepage-thumbnails";
            browser.storage.local.set({hide_homepage_thumbnails_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_THUMBNAILS))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_HOMEPAGE_THUMBNAILS))
                .catch(reportError);
        }

        // =================== NAVIGATION BAR ==================== //

        else if (event.target.id === "change-color-navbar-text") {
            var m = event.target.value;
            const d = "css-script-change-color-navbar-text";
            browser.storage.local.set({change_color_navbar_text_state: m});
            if (m === "default") browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, ""))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => changeColorNavbarText(tabs, m))
                .catch(reportError);
        }
        else if (event.target.id === "icon-redirect-navbar") {
            var m = event.target.value;
            browser.storage.local.set({icon_redirect_navbar_state: m});
            browser.tabs.query({currentWindow: true})
                .then(tabs => iconRedirectNavbar(tabs, m))
                .catch(reportError);
        }
        else if (event.target.id === "hide-navbar-all") {
            var m = event.target.checked;
            const d = "css-script-hide-navbar-all";
            browser.storage.local.set({hide_navbar_all_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_ALL))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_ALL))
                .catch(reportError);
        }
        else if (event.target.id === "hide-navbar-home") {
            var m = event.target.checked;
            const d = "css-script-hide-navbar-home";
            browser.storage.local.set({hide_navbar_home_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_HOME))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_HOME))
                .catch(reportError);
        }
        else if (event.target.id === "hide-navbar-explore") {
            var m = event.target.checked;
            const d = "css-script-hide-navbar-explore";
            browser.storage.local.set({hide_navbar_explore_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_EXPLORE))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_EXPLORE))
                .catch(reportError);
        }
        else if (event.target.id === "hide-navbar-shorts") {
            var m = event.target.checked;
            const d = "css-script-hide-navbar-shorts";
            browser.storage.local.set({hide_navbar_shorts_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_SHORTS))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_SHORTS))
                .catch(reportError);
        }
        else if (event.target.id === "hide-navbar-sub") {
            var m = event.target.checked;
            const d = "css-script-hide-navbar-sub";
            browser.storage.local.set({hide_navbar_sub_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_SUB))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_SUB))
                .catch(reportError);
        }
        else if (event.target.id === "hide-navbar-quicklinks") {
            var m = event.target.checked;
            const d = "css-script-hide-navbar-quicklinks";
            browser.storage.local.set({hide_navbar_quicklinks_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_QUICKLINKS))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_QUICKLINKS))
                .catch(reportError);
        }
        else if (event.target.id === "hide-navbar-subsec") {
            var m = event.target.checked;
            const d = "css-script-hide-navbar-subsec";
            browser.storage.local.set({hide_navbar_subsec_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_SUBSEC))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_SUBSEC))
                .catch(reportError);
        }
        else if (event.target.id === "hide-navbar-exploresec") {
            var m = event.target.checked;
            const d = "css-script-hide-navbar-exploresec";
            browser.storage.local.set({hide_navbar_exploresec_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_EXPLORESEC))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_EXPLORESEC))
                .catch(reportError);
        }
        else if (event.target.id === "hide-navbar-more") {
            var m = event.target.checked;
            const d = "css-script-hide-navbar-more";
            browser.storage.local.set({hide_navbar_more_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_MORE))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_MORE))
                .catch(reportError);
        }
        else if (event.target.id === "hide-navbar-settings") {
            var m = event.target.checked;
            const d = "css-script-hide-navbar-settings";
            browser.storage.local.set({hide_navbar_settings_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_SETTINGS))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_SETTINGS))
                .catch(reportError);
        }
        else if (event.target.id === "hide-navbar-footer") {
            var m = event.target.checked;
            const d = "css-script-hide-navbar-footer";
            browser.storage.local.set({hide_navbar_footer_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_FOOTER))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_NAVBAR_FOOTER))
                .catch(reportError);
        }

        // ==================== VIDEO PLAYER ===================== //

        else if (event.target.id === "change-scrubber-pattern") {
            var m = event.target.value;
            const d = "css-script-change-scrubber-pattern";
            browser.storage.local.set({change_scrubber_pattern_state: m});
            if (m === "default") browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, ""))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => changeScrubberPattern(tabs, m))
                .catch(reportError);
        }
        else if (event.target.id === "change-progbar-pattern") {
            var m = event.target.value;
            const d = "css-script-change-progbar-pattern";
            browser.storage.local.set({change_progbar_pattern_state: m});
            if (m === "default") browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, ""))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => changeProgbarPattern(tabs, m))
                .catch(reportError);
        }
        else if (event.target.id === "hide-sidebar-suggestions") {
            var m = event.target.checked;
            const d = "css-script-hide-sidebar-suggestions";
            browser.storage.local.set({hide_sidebar_suggestions_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_SIDEBAR_SUGGESTIONS))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_SIDEBAR_SUGGESTIONS))
                .catch(reportError);
        }
        else if (event.target.id === "hide-endofvid-suggestions") {
            var m = event.target.checked;
            const d = "css-script-hide-endofvid-suggestions";
            browser.storage.local.set({hide_endofvid_suggestions_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_ENDOFVID_SUGGESTIONS))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_ENDOFVID_SUGGESTIONS))
                .catch(reportError);
        }
        else if (event.target.id === "hide-like-and-more") {
            var m = event.target.checked;
            const d = "css-script-hide-like-and-more";
            browser.storage.local.set({hide_like_and_more_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_LIKE_AND_MORE))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_LIKE_AND_MORE))
                .catch(reportError);
        }
        else if (event.target.id === "hide-merch-shelf") {
            var m = event.target.checked;
            const d = "css-script-hide-merch-shelf";
            browser.storage.local.set({hide_merch_shelf_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_MERCH_SHELF))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_MERCH_SHELF))
                .catch(reportError);
        }
        else if (event.target.id === "hide-all-comments") {
            var m = event.target.checked;
            const d = "css-script-hide-all-comments";
            browser.storage.local.set({hide_all_comments_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_ALL_COMMENTS))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_ALL_COMMENTS))
                .catch(reportError);
        }
        else if (event.target.id === "hide-comment-actions") {
            var m = event.target.checked;
            const d = "css-script-hide-comment-actions";
            browser.storage.local.set({hide_comment_actions_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_COMMENT_ACTIONS))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_COMMENT_ACTIONS))
                .catch(reportError);
        }
        else if (event.target.id === "hide-comment-replies") {
            var m = event.target.checked;
            const d = "css-script-hide-comment-replies";
            browser.storage.local.set({hide_comment_replies_state: m});
            if (m) browser.tabs.query({currentWindow: true})
                .then(tabs => sendInsertCSSMessage(tabs, d, CSS_SCRIPT_HIDE_COMMENT_REPLIES))
                .catch(reportError);
            else browser.tabs.query({currentWindow: true})
                .then(tabs => sendRemoveCSSMessage(tabs, d, CSS_SCRIPT_HIDE_COMMENT_REPLIES))
                .catch(reportError);
        }

    });
}

browser.tabs.executeScript({file: "/content_scripts/main.js"}).then(memorizeStates).then(listenForClicks);
