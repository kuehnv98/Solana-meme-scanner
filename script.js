const endpoint = "https://scanner-api.solanamemes.tools/latest";

async function fetchCoins() {
  try {
    const res = await fetch(endpoint);
    const data = await res.json();

    const container = document.getElementById("coin-list");
    const status = document.getElementById("scanner-status");
    status.innerText = "✅ Erfolgreich geladen – wird alle 30s aktualisiert.";

    container.innerHTML = "";
    data.forEach((coin) => {
      const div = document.createElement("div");
      div.className = "coin";
      div.innerHTML = `<strong>${coin.symbol}</strong><br/>${coin.description}<br/>${coin.age}`;
      container.appendChild(div);
    });
  } catch (err) {
    document.getElementById("scanner-status").innerText = "❌ Fehler beim Laden.";
  }
}
fetchCoins();
setInterval(fetchCoins, 30000);