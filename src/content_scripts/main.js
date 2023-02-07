(() => {

    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    function insertCSS(css_script, description) {
        const istyle = document.createElement("style");
        istyle.innerText = css_script;
        istyle.setAttribute("id", description);
        document.head.appendChild(istyle);
    }

    function removeCSS(description) {
        const istyle = document.getElementById(description);
        istyle.disabled = true;
        istyle.parentNode.removeChild(istyle);
    }

    browser.runtime.onMessage.addListener((message) => {
        if (message.command === "insert_css") {
            insertCSS(message.css_script, message.description);
        }
        else if (message.command === "remove_css") {
            removeCSS(message.description);
        }
        else {
            alert("message.command: Out of scope")
        }
    });

})();
  