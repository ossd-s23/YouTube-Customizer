(() => {

    // Check and set a global guard variable
    if (window.hasRun) return;
    window.hasRun = true;
    
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

    browser.runtime.onMessage.addListener((message) => {

        // Set homepage titled section attributes, otherwise impossible to select
        const homepageTitledSecs = document.querySelectorAll("ytd-rich-section-renderer");
        homepageTitledSecs.forEach(section => {
            const homepageTitledSecTitle = section.querySelector("#title");
            if (!homepageTitledSecTitle?.innerText) return;
            const homepageTitledSecTitleText = homepageTitledSecTitle.innerText.toLowerCase();
            if (homepageTitledSecTitleText.includes("news")) section.setAttribute("ossd_homepage_news_section", "");
            else if (homepageTitledSecTitleText.includes("shorts")) section.setAttribute("ossd_homepage_shorts_section", "");
            else if (homepageTitledSecTitleText.includes("prime")) section.setAttribute("ossd_homepage_primetime_section", "");
        });

        // Set left navigation bar section attributes, otherwise impossible to select
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

        // Listen to messages from popup window
        if (message.command === "insert_css") insertCSSScript(message.css_script, message.description);
        else if (message.command === "remove_css") removeCSSScript(message.description);
        else if (message.command === "i_icon_redirect_navbar") iconRedirectNavbarURL = message.url;

        // Overwrite YouTube logo icon redirection
        const youtubeIcons = document.querySelectorAll("a#logo");
        youtubeIcons.forEach(icon => {
            icon.addEventListener("click", (event) => {
                event.preventDefault();
                window.location = iconRedirectNavbarURL;
            });
        });

    });

})();
  