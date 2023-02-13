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
    `
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

    browser.storage.local.get({general_scheme_state: ""}).then(result => {
        const res = result.general_scheme_state;
        if (parseInt(res) != 0 && res !== "") insertCSSScript(CSS_SCRIPT_CHANGE_GENERAL_SCHEME(GENERAL_SCHEMES[parseInt(res)]), "css-script-change-general-scheme");
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

    browser.storage.local.get({change_scrubber_pattern_state: ""}).then(result => {
        const res = result.change_scrubber_pattern_state;
        if (res !== "default" && res !== "") {
            var pattern;
            if (pat === "pusheen") pattern = PUSHEEN;
            else if (pat === "pikachu") pattern = PIKACHU;
            else if (pat === "capoo") pattern = CAPOO;
            insertCSSScript(CSS_SCRIPT_CHANGE_SCRUBBER_PATTERN(pattern), "css-script-change-scrubber-pattern");
        }
    })
    browser.storage.local.get({change_progbar_pattern_state: ""}).then(result => {
        const res = result.change_progbar_pattern_state;
        if (res !== "default" && res !== "") {
            var pattern;
            if (pat === "cherry-love") pattern = CHERRY_LOVE;
            else if (pat === "pokeball") pattern = POKEBALL;
            else if (pat === "lightblue") pattern = LIGHTBLUE;
            insertCSSScript(CSS_SCRIPT_CHANGE_PROGBAR_PATTERN(pattern), "css-script-change-progbar-pattern");
        }
    })
    browser.storage.local.get({hide_sidebar_suggestions_state: ""}).then(result => {
        if (!!result.hide_sidebar_suggestions_state) insertCSSScript(CSS_SCRIPT_HIDE_SIDEBAR_SUGGESTIONS, "css-script-hide-sidebar-suggestions");
    });
    browser.storage.local.get({hide_endofvid_suggestions_state: ""}).then(result => {
        if (!!result.hide_endofvid_suggestions_state) insertCSSScript(CSS_SCRIPT_HIDE_ENDOFVID_SUGGESTIONS, "css-script-hide-endofvid-suggestions");
    });
    browser.storage.local.get({hide_like_and_more_state: ""}).then(result => {
        if (!!result.hide_like_and_more_state) insertCSSScript(CSS_SCRIPT_HIDE_LIKE_AND_MORE, "css-script-hide-like-and-more");
    });
    browser.storage.local.get({hide_merch_shelf_state: ""}).then(result => {
        if (!!result.hide_merch_shelf_state) insertCSSScript(CSS_SCRIPT_HIDE_MERCH_SHELF, "css-script-hide-merch-shelf");
    });
    browser.storage.local.get({hide_all_comments_state: ""}).then(result => {
        if (!!result.hide_all_comments_state) insertCSSScript(CSS_SCRIPT_HIDE_ALL_COMMENTS, "css-script-hide-all-comments");
    });
    browser.storage.local.get({hide_comment_actions_state: ""}).then(result => {
        if (!!result.hide_comment_actions_state) insertCSSScript(CSS_SCRIPT_HIDE_COMMENT_ACTIONS, "css-script-hide-comment-actions");
    });
    browser.storage.local.get({hide_comment_replies_state: ""}).then(result => {
        if (!!result.hide_comment_replies_state) insertCSSScript(CSS_SCRIPT_HIDE_COMMENT_REPLIES, "css-script-hide-comment-replies");
    });

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
  