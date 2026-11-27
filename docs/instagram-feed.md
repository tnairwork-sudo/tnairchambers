# Instagram feed

Account: [@nairandco](https://www.instagram.com/nairandco/). Public business account. Display name Nair & Co.

## Phase 1, shipped

`lib/instagram-reels.ts` is a typed list, newest first. The home page shows the first four. `/reels` shows the full list. `/space-aerospace-defence` shows the first three.

Posters live in `public/instagram/<shortcode>.jpg`. They are frames from the public embed, committed with the site. Do not hotlink Instagram CDN image URLs. Those URLs expire.

`components/ReelsGrid.tsx` draws the tiles. A tile is a button. The Instagram iframe is mounted only after the visitor opens a tile. Nothing on the page calls Instagram before that. If the iframe does not load within a few seconds, the tile modal shows the excerpt and an Open on Instagram link.

Titles in the data file are working titles taken from captions and posters. Tushar has not approved them.

The public embed used to build this list shows the newest six posts. The profile had more posts than that. Older films may be missing. See the pull request for what still needs a yes.

## Phase 2, not built

Do not add this until Tushar has authorised @nairandco and a token exists in Vercel. Never commit the token. Never paste it into chat.

Because the account is a business account, the Instagram API with Instagram Login can read its media with the `instagram_business_basic` permission. A Meta developer app in Development mode, with Tushar added as an Instagram tester, is enough for his own account. No app review is required for that.

Outline, for when the token exists:

1. Tushar adds @nairandco as an Instagram tester on a Meta developer app, accepts the invitation, and generates a long-lived access token.
2. Store `INSTAGRAM_ACCESS_TOKEN` in Vercel. Add `INSTAGRAM_USER_ID` only if the call needs it. Prefer Vercel Edge Config or KV so the token can be refreshed.
3. A server-only fetch, in a route handler or a server component:

   `GET https://graph.instagram.com/me/media?fields=id,caption,media_type,media_product_type,permalink,thumbnail_url,timestamp&limit=50`

4. Keep items whose `media_type` is `VIDEO`. Cache with `revalidate: 3600`.
5. Merge with `lib/instagram-reels.ts`. The curated title wins. If there is no curated title, use the first line of the caption.
6. If the API call fails, render the curated file and show no error.
7. Thumbnail URLs from the API expire. Proxy them through `next/image` with `images.remotePatterns` for `*.cdninstagram.com`, or download them at build time.
8. Long-lived tokens last about 60 days. Refresh with `GET https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=...` on a Vercel cron every 30 days, or set a reminder. The refresh must read and write the stored token. It must not log the token.

A feature flag should stay off until the token is present. Phase 1 remains the fallback.

## What this feed does not do

No third-party widget. No tracking script on page load. No scrape of the profile during the build. `vercel.json` sends `X-Frame-Options: DENY` for this site only. That does not block this site from framing Instagram. Do not add a Content-Security-Policy that blocks `https://www.instagram.com` frames.

If the reel embed endpoint stops returning a page, the fallback is a `blockquote` with `class="instagram-media"` and `https://www.instagram.com/embed.js`, loaded only inside the open modal, plus the Open on Instagram link.
