(() => {

    // ========== =========== ========== ========== ========== //
    //                                                         //
    //              SETTING GLOBAL GUARD VARIABLE              //
    //                                                         //
    // ========== =========== ========== ========== ========== //

    if (window.hasRun) return;
    window.hasRun = true;

    // ========== =========== ========== ========== ========== //
    //                                                         //
    //             DECLARING CSS INJECTION SCRIPTS             //
    //                                                         //
    // ========== =========== ========== ========== ========== //

    // ======================= GENERAL ======================= //

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

    // ========== =========== ========== ========== ========== //
    //                                                         //
    //                     MAIN FUNCTION                       //
    //                                                         //
    // ========== =========== ========== ========== ========== //

    var iconRedirectNavbarURL = "https://www.youtube.com/";

    // Insert CSS script into the page with id as the specified description
    // Modify on existence of corresponding style sheet, create otherwise
    function insertCSSScript(css_script, description) {
        var istyle = document.getElementById(description);
        if (istyle) istyle.innerText = css_script;
        else {
            istyle = document.createElement("style");
            istyle.innerText = css_script;
            istyle.setAttribute("id", description);
            document.head.appendChild(istyle);
        }
    }

    // Remove the style sheet with id specified by the description
    function removeCSSScript(description) {
        const istyle = document.getElementById(description);
        istyle.disabled = true;
        istyle.parentNode.removeChild(istyle);
    }

    // Set up some attributes in advance, otherwise impossible to inspect some elements
    function attributesSetup() {
        // Set homepage titled section attributes, otherwise impossible to inspect
        const homepageTitledSecs = document.querySelectorAll("ytd-rich-section-renderer");
        homepageTitledSecs.forEach(section => {
            const homepageTitledSecTitle = section.querySelector("#title");
            if (!homepageTitledSecTitle?.innerText) return;
            const homepageTitledSecTitleText = homepageTitledSecTitle.innerText.toLowerCase();
            if (homepageTitledSecTitleText.includes("news")) section.setAttribute("ossd_homepage_news_section", "");
            else if (homepageTitledSecTitleText.includes("shorts")) section.setAttribute("ossd_homepage_shorts_section", "");
            else if (homepageTitledSecTitleText.includes("prime")) section.setAttribute("ossd_homepage_primetime_section", "");
        });

        // Set left navigation bar section attributes, otherwise impossible to inspect
        const leftNavbar = document.querySelectorAll("ytd-guide-section-renderer");
        var leftNavbarCounter = 0;
        leftNavbar.forEach(section => {
            const leftNavbarTitle = section.querySelector("#guide-section-title");
            if (!leftNavbarTitle?.innerText) {
                if (leftNavbarCounter) section.setAttribute("ossd_hidden_section", "");
                else return;
            }
            const leftNavbarTitleText = leftNavbarTitle.innerText.toLowerCase();
            if (leftNavbarTitleText.includes("subscriptions")) section.setAttribute("ossd_sub_section", "");
            else if (leftNavbarTitleText.includes("explore")) section.setAttribute("ossd_explore_section", "");
            else if (leftNavbarTitleText.includes("more from")) section.setAttribute("ossd_more_section", "");
            leftNavbarCounter ++;
        });
    }

    // Overwrite some preset properties of the website
    function propertiesOverride() {
        // Overwrite YouTube logo icon redirection
        const youtubeIcons = document.querySelectorAll("a#logo");
        youtubeIcons.forEach(icon => {
            icon.addEventListener("click", (event) => {
                event.preventDefault();
                window.location = iconRedirectNavbarURL;
            });
        });
    }

    // ========== =========== ========== ========== ========== //
    //                                                         //
    //       UPDATE NEW WINDOW BASED ON MEMORIZED STATES       //
    //                                                         //
    // ========== =========== ========== ========== ========== //
    attributesSetup();

    // ======================= GENERAL ======================= //

    browser.storage.local.get({sky_mode_on_state: ""}).then(result => {
        if (!!result.sky_mode_on_state) insertCSSScript(CSS_SCRIPT_TURN_SKYMODE_ON, "css-script-turn-skymode-on");
    });

    // ====================== HOMEPAGE ======================= //

    browser.storage.local.get({hide_homepage_all_state: ""}).then(result => {
        if (!!result.hide_homepage_all_state) insertCSSScript(CSS_SCRIPT_HIDE_HOMEPAGE_ALL, "css-script-hide-homepage-all");
    });
    browser.storage.local.get({hide_homepage_ad_state: ""}).then(result => {
        if (!!result.hide_homepage_ad_state) insertCSSScript(CSS_SCRIPT_HIDE_HOMEPAGE_AD, "css-script-hide-homepage-ad");
    });
    browser.storage.local.get({hide_homepage_news_state: ""}).then(result => {
        if (!!result.hide_homepage_news_state) insertCSSScript(CSS_SCRIPT_HIDE_HOMEPAGE_NEWS, "css-script-hide-homepage-news");
    });
    browser.storage.local.get({hide_homepage_shorts_state: ""}).then(result => {
        if (!!result.hide_homepage_shorts_state) insertCSSScript(CSS_SCRIPT_HIDE_HOMEPAGE_SHORTS, "css-script-hide-homepage-shorts");
    });
    browser.storage.local.get({hide_homepage_primetime_state: ""}).then(result => {
        if (!!result.hide_homepage_primetime_state) insertCSSScript(CSS_SCRIPT_HIDE_HOMEPAGE_PRIMETIME, "css-script-hide-homepage-primetime");
    });
    browser.storage.local.get({hide_homepage_specialsecs_state: ""}).then(result => {
        if (!!result.hide_homepage_specialsecs_state) insertCSSScript(CSS_SCRIPT_HIDE_HOMEPAGE_SPECIALSECS, "css-script-hide-homepage-specialsecs");
    });
    browser.storage.local.get({hide_homepage_suggestions_rows_state: ""}).then(result => {
        const res = result.hide_homepage_suggestions_rows_state;
        if (res !== "inf" && res !== "") insertCSSScript(CSS_SCRIPT_HIDE_HOMEPAGE_SUGGESTIONS_ROWS(res), "css-script-hide-homepage-suggestions-rows");
    });
    browser.storage.local.get({hide_homepage_header_state: ""}).then(result => {
        if (!!result.hide_homepage_header_state) insertCSSScript(CSS_SCRIPT_HIDE_HOMEPAGE_HEADER, "css-script-hide-homepage-header");
    });
    browser.storage.local.get({hide_homepage_thumbnails_state: ""}).then(result => {
        if (!!result.hide_homepage_thumbnails_state) insertCSSScript(CSS_SCRIPT_HIDE_HOMEPAGE_THUMBNAILS, "css-script-hide-homepage-thumbnails");
    });

    // =================== NAVIGATION BAR ==================== //

    browser.storage.local.get({change_color_navbar_text_state: ""}).then(result => {
        const res = result.change_color_navbar_text_state;
        if (res !== "default" && res !== "") insertCSSScript(CSS_SCRIPT_CHANGE_COLOR_NAVBAR_TEXT(res), "css-script-change-color-navbar-text");
    });
    browser.storage.local.get({icon_redirect_navbar_state: ""}).then(result => {
        const res = result.icon_redirect_navbar_state;
        if (res !== "") iconRedirectNavbarURL = res;
    });
    browser.storage.local.get({hide_navbar_all_state: ""}).then(result => {
        if (!!result.hide_navbar_all_state) insertCSSScript(CSS_SCRIPT_HIDE_NAVBAR_ALL, "css-script-hide-navbar-all");
    });
    browser.storage.local.get({hide_navbar_home_state: ""}).then(result => {
        if (!!result.hide_navbar_home_state) insertCSSScript(CSS_SCRIPT_HIDE_NAVBAR_HOME, "css-script-hide-navbar-home");
    });
    browser.storage.local.get({hide_navbar_explore_state: ""}).then(result => {
        if (!!result.hide_navbar_explore_state) insertCSSScript(CSS_SCRIPT_HIDE_NAVBAR_EXPLORE, "css-script-hide-navbar-explore");
    });
    browser.storage.local.get({hide_navbar_shorts_state: ""}).then(result => {
        if (!!result.hide_navbar_shorts_state) insertCSSScript(CSS_SCRIPT_HIDE_NAVBAR_SHORTS, "css-script-hide-navbar-shorts");
    });
    browser.storage.local.get({hide_navbar_sub_state: ""}).then(result => {
        if (!!result.hide_navbar_sub_state) insertCSSScript(CSS_SCRIPT_HIDE_NAVBAR_SUB, "css-script-hide-navbar-sub");
    });
    browser.storage.local.get({hide_navbar_quicklinks_state: ""}).then(result => {
        if (!!result.hide_navbar_quicklinks_state) insertCSSScript(CSS_SCRIPT_HIDE_NAVBAR_QUICKLINKS, "css-script-hide-navbar-quicklinks");
    });
    browser.storage.local.get({hide_navbar_subsec_state: ""}).then(result => {
        if (!!result.hide_navbar_subsec_state) insertCSSScript(CSS_SCRIPT_HIDE_NAVBAR_SUBSEC, "css-script-hide-navbar-subsec");
    });
    browser.storage.local.get({hide_navbar_exploresec_state: ""}).then(result => {
        if (!!result.hide_navbar_exploresec_state) insertCSSScript(CSS_SCRIPT_HIDE_NAVBAR_EXPLORESEC, "css-script-hide-navbar-exploresec");
    });
    browser.storage.local.get({hide_navbar_more_state: ""}).then(result => {
        if (!!result.hide_navbar_more_state) insertCSSScript(CSS_SCRIPT_HIDE_NAVBAR_MORE, "css-script-hide-navbar-more");
    });
    browser.storage.local.get({hide_navbar_settings_state: ""}).then(result => {
        if (!!result.hide_navbar_settings_state) insertCSSScript(CSS_SCRIPT_HIDE_NAVBAR_SETTINGS, "css-script-hide-navbar-settings");
    });
    browser.storage.local.get({hide_navbar_footer_state: ""}).then(result => {
        if (!!result.hide_navbar_footer_state) insertCSSScript(CSS_SCRIPT_HIDE_NAVBAR_FOOTER, "css-script-hide-navbar-footer");
    });

    // ==================== VIDEO PLAYER ===================== //

    browser.storage.local.get({change_color_progbar_text_state: ""}).then(result => {
        const res = result.change_color_progbar_text_state;
        if (res !== "default" && res !== "") insertCSSScript(CSS_SCRIPT_CHANGE_COLOR_PROGBAR_TEXT(res), "css-script-change-color-progbar-text");
    })

    propertiesOverride();


    // ========== =========== ========== ========== ========== //
    //                                                         //
    //                HANDLING RUNTIME MESSAGES                //
    //                                                         //
    // ========== =========== ========== ========== ========== //

    browser.runtime.onMessage.addListener((message) => {
        attributesSetup();

        // Listen to messages from popup window
        if (message.command === "insert_css") insertCSSScript(message.css_script, message.description);
        else if (message.command === "remove_css") removeCSSScript(message.description);
        else if (message.command === "i_icon_redirect_navbar") iconRedirectNavbarURL = message.url;

        propertiesOverride();

    });

})();
  