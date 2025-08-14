# Solana Meme Scanner – V1 (Takeover & Revival)
Leichtgewichtiges, **clientseitiges** Frontend, das Solana-Pairs von DexScreener lädt und zwei Profile scannt:

- **Community Takeover** (frischer breiter Kaufdruck bei jungen Coins)
- **Revival** (ältere Coins, die nach Seitwärts/Dump wieder anspringen)

## Features
- Keine Backend-Services, kein API-Key
- Live-Refresh (Default 15s), Limitierung der Zeilen
- Hard-Filter + Score (0–100) je Profil, Ampel (🟢/🟡/🔴)
- Tweakbare Schwellwerte direkt in der UI

## Datenquelle
- `GET https://api.dexscreener.com/latest/dex/pairs/solana`

## Lokales Testing
- Einfach `index.html` im Browser öffnen (oder via `npx serve` o.ä.).

## Deployment (Cloudflare Pages)
1. Neues Projekt anlegen → **"Direct Upload"** oder GitHub-Repo verbinden.
2. Framework: **None** (statisch). Build-Output: **/** (Root).
3. Domain verbinden (optional).

## Hinweise
- CORS/Rate-Limits: DexScreener ist i.d.R. offen für diesen Endpoint. Bei starkem Traffic ggf. Intervall erhöhen.
- Alle Berechnungen (Buy-Ratio, AccVol, Scores) erfolgen im Browser.
- Die Defaults sind konservativ gewählt und können in der UI angepasst werden.
