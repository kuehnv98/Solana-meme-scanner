const WORKER_URL = "https://icy-bush-6d1c.kuehn-v2020.workers.dev/"; // Dein Worker

async function loadData() {
  try {
    const res = await fetch(WORKER_URL);
    const data = await res.json();

    if (!data.ok) {
      console.error("API Fehler:", data.error);
      return;
    }

    renderList("takeover", data.takeover);
    renderList("revival", data.revival);

  } catch (err) {
    console.error("Fetch Error:", err);
  }
}

function renderList(id, coins) {
  const container = document.getElementById(id);
  container.innerHTML = "";

  if (!coins || coins.length === 0) {
    container.innerHTML = `<div class="card">Keine Treffer</div>`;
    return;
  }

  coins.forEach(c => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="title">${c.baseToken?.name || "Unbekannt"} (${c.baseToken?.symbol || ""})</div>
      <div class="small">MC: $${formatNum(c.marketCap)}</div>
      <div class="small">Pump 1h: ${c.priceChange?.h1 ?? 0}%</div>
      <div class="small">Vol 24h: $${formatNum(c.volume?.h24)}</div>
      <div class="small"><a href="${c.url}" target="_blank" style="color:#0ff">Chart öffnen</a></div>
    `;
    container.appendChild(div);
  });
}

function formatNum(n) {
  if (!n) return 0;
  return Number(n).toLocaleString();
}

// Erst laden, dann alle 30 Sekunden aktualisieren
loadData();
setInterval(loadData, 30000);
