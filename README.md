# Solana Meme Scanner – V1 (Fix mit Proxy-Option)

Falls der direkte DexScreener-Fetch im Browser blockiert wird (CORS/Ratenlimit), stelle in der UI die Quelle auf **"Cloudflare Worker Proxy"**. Dazu:

## Cloudflare Worker (Proxy) einrichten
1. Cloudflare Dashboard → **Workers & Pages** → **Create Worker**.
2. Code unten einfügen, speichern & deployen.
3. Unter **Routes** (optional, wenn du eine Domain nutzt) eine Route setzen, sonst nutze die Worker-Subdomain.
4. In **Pages** (deinem Projekt) unter *Custom Domains / Functions* eine **Function/Rewrite** einrichten **oder** in der `index.html`-UI die Quelle auf **Proxy** stellen und die Worker-URL als Basis eintragen (siehe Code).

### Worker-Code (CORS-Proxy nur für DexScreener)
```js
export default {
  async fetch(req) {
    // Passe die Ziel-URL an, wenn du andere Chains möchtest
    const target = 'https://api.dexscreener.com/latest/dex/pairs/solana';
    const resp = await fetch(target, { headers: { 'accept':'application/json' }});
    const newResp = new Response(resp.body, resp);
    newResp.headers.set('Access-Control-Allow-Origin', '*');
    newResp.headers.set('Access-Control-Allow-Headers', 'Content-Type, Accept');
    newResp.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return newResp;
  }
}
```
> Danach kannst du den Proxy unter z. B. `https://<dein-worker>.<deine-subdomain>.workers.dev/api/pairs` mappen (Route), oder einfach die Worker-URL nehmen und im Frontend unter „API Quelle“ → **Proxy** wählen.
