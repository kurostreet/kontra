/* KONTRA SITE UPDATER v1 — refreshes stale Android WebView pages safely. */
(() => {
  "use strict";

  const currentBuild = String(document.body?.dataset.build || "").trim();
  const checkIntervalMs = 60000;
  const checkThrottleMs = 15000;
  let checkRunning = false;
  let lastCheckAt = 0;

  async function checkForSiteUpdate(force = false) {
    const now = Date.now();
    if (checkRunning) return false;
    if (!force && now - lastCheckAt < checkThrottleMs) return false;

    checkRunning = true;
    lastCheckAt = now;
    try {
      const response = await fetch(`/site-version.json?_=${now}`, {
        cache: "no-store",
        headers: { Accept: "application/json" }
      });
      if (!response.ok) return false;

      const payload = await response.json();
      const remoteBuild = String(payload?.build || "").trim();
      if (!currentBuild || !remoteBuild || remoteBuild === currentBuild) return false;

      const nextUrl = new URL(window.location.href);
      nextUrl.searchParams.set("_update", String(now));
      window.location.replace(nextUrl.toString());
      return true;
    } catch (_) {
      return false;
    } finally {
      checkRunning = false;
    }
  }

  function checkWhenVisible() {
    if (document.visibilityState === "visible") void checkForSiteUpdate(false);
  }

  document.addEventListener("visibilitychange", checkWhenVisible);
  window.addEventListener("focus", checkWhenVisible);
  window.addEventListener("pageshow", checkWhenVisible);
  setInterval(() => void checkForSiteUpdate(false), checkIntervalMs);
  void checkForSiteUpdate(true);
})();
