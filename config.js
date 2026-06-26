// API base configuration.
// Local/LAN serving (Node server): same-origin, base stays ''.
// GitHub Pages deployment: API calls go to the Cloudflare Worker.
// WORKER_URL is filled in by the deploy; localStorage 'kr_api' overrides for testing.
(function () {
  const WORKER_URL = 'https://know-requests.sweepnspect.workers.dev';
  const override = localStorage.getItem('kr_api');
  window.KR_API = override !== null ? override
    : location.hostname.endsWith('github.io') ? WORKER_URL
    : '';
})();
