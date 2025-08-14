# V1 mit konfigurierbarer Proxy-URL (neu)
- In der App kannst du oben „API-Quelle“ umstellen (Direkt/Proxy).
- Bei Proxy trägst du deine Worker-URL in „Proxy URL“ ein (z. B. `https://<name>.workers.dev/api/pairs`).

Worker-Beispiel (CORS-Proxy):
```js
export default {
  async fetch(req) {
    const target = 'https://api.dexscreener.com/latest/dex/pairs/solana';
    const r = await fetch(target, { headers: { accept: 'application/json' } });
    const out = new Response(r.body, r);
    out.headers.set('Access-Control-Allow-Origin', '*');
    out.headers.set('Access-Control-Allow-Headers', 'Content-Type, Accept');
    out.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return out;
  }
}
```
