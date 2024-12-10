import { loadComponent, loadPage } from "../app/utils/components.js"
import { intializeFeatureFlags } from "../app/utils/config.js"
import { storageHandler } from "../app/utils/storage.js";

(() => {
    // Load the header and footer by default
    loadComponent("header", "/app/components/header/index.html");
    loadComponent("footer", "/app/components/footer/index.html");

    const currentPage = storageHandler.getItem('currentPage');

    if (!currentPage) {
        loadPage("home");
    }

    loadPage(currentPage);

    // Initialize feature flags or any other setup
    intializeFeatureFlags();
})();