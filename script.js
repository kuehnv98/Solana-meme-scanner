
document.addEventListener("DOMContentLoaded", () => {
  const tokenList = document.getElementById("token-list");
  const status = document.getElementById("status");

  async function fetchTokens() {
    status.textContent = "📡 Neue Meme-Coins scannen...";

    // Platzhalter: hier würde die echte API-Abfrage stehen
    const fakeData = [
      { name: "$FROGZ", created: "vor 12 Sekunden" },
      { name: "$LASER", created: "vor 55 Sekunden" },
      { name: "$SOLINU", created: "vor 1 Min." }
    ];

    tokenList.innerHTML = "";
    fakeData.forEach(token => {
      const li = document.createElement("li");
      li.textContent = `${token.name} – ${token.created}`;
      tokenList.appendChild(li);
    });

    status.textContent = "✅ Erfolgreich geladen – alle 30 Sekunden aktualisieren...";
  }

  fetchTokens();
  setInterval(fetchTokens, 30000);
});
