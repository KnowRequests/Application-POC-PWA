# Know Requests — POC

Paid music requests, two-sided: patrons request and boost songs, the DJ accepts and the track lands on the decks (TIDAL playlist) in seconds.

- **Patron app:** [index.html](https://infinite-grok.github.io/know-requests/) — scan, search, boost, request
- **DJ dashboard:** [dj.html](https://infinite-grok.github.io/know-requests/dj.html) — live queue with BPM, accept/decline, earnings

Backend runs on Cloudflare Workers + KV. Streaming integration: TIDAL (OAuth, live catalog search, playlist writes). This is a proof of concept — payments are simulated with demo credits.
