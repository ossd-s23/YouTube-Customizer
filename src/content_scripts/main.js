(() => {

    // Check and set a global guard variable
    if (window.hasRun) return;
    window.hasRun = true;

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

        // Set left navigation bar section attributes, otherwise impossible to select
        const leftNavbar = document.querySelectorAll("ytd-guide-section-renderer");
        var counter = 0;
        leftNavbar.forEach(section => {
            const title = section.querySelector("#guide-section-title");
            if (!title?.innerText) {
                if (counter) section.setAttribute("rys_hidden_section", "");
                else return;
            }
            const titleText = title.innerText.toLowerCase();
            if (titleText.includes("subscriptions")) section.setAttribute("rys_sub_section", "");
            if (titleText.includes("explore")) section.setAttribute("rys_explore_section", "");
            if (titleText.includes("more from")) section.setAttribute("rys_more_section", "");
            counter ++;
        });

        // Listen to messages
        if (message.command === "insert_css") insertCSSScript(message.css_script, message.description);
        else if (message.command === "remove_css") removeCSSScript(message.description);
        
    });

})();
  