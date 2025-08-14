# V1 (Proxy fest hinterlegt)
Diese Version nutzt **ausschließlich** deinen Cloudflare Worker als Datenquelle und hängt **keinen Pfad** an.

**Proxy-URL (fest):**
```
https://icy-bush-6d1c.kuehn-v2020.workers.dev/
```

Der Worker muss die DexScreener-JSON zurückgeben (Endpoint: `/latest/dex/pairs/solana`) und CORS erlauben.
