document.addEventListener("DOMContentLoaded", () => {
    chrome.runtime.sendMessage("getTabCount", (response) => {
      if (response && response.tabCount !== undefined) {
        document.getElementById("count").textContent = response.tabCount;
      } else {
        document.getElementById("count").textContent = "Error";
      }
    });
  });
  