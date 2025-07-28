
const takeoverList = document.getElementById('takeover-list');
const revivalList = document.getElementById('revival-list');
const status = document.getElementById('scanner-status');

async function fetchDexData() {
  try {
    const res = await fetch('https://api.dexscreener.com/latest/dex/pairs/solana');
    const data = await res.json();
    return data.pairs;
  } catch (err) {
    console.error("Error fetching Dex data:", err);
    return [];
  }
}

function detectTakeover(pair) {
  return pair.baseToken.name.toLowerCase().includes('elon') && pair.liquidity.usd > 3000;
}

function detectRevival(pair) {
  return pair.priceChange.h1 > 50 && pair.volume.h1 > 500;
}

function renderCoins(pairs) {
  takeoverList.innerHTML = '';
  revivalList.innerHTML = '';

  pairs.forEach(pair => {
    const li = document.createElement('li');
    li.innerHTML = \`\${pair.baseToken.name} | \$\${pair.priceUsd.toFixed(4)} | Volume: \$\${pair.volume.h1.toFixed(0)}\`;

    if (detectTakeover(pair)) {
      takeoverList.appendChild(li.cloneNode(true));
    }
    if (detectRevival(pair)) {
      revivalList.appendChild(li);
    }
  });
}

async function updateScanner() {
  status.innerText = "Fetching live data...";
  const pairs = await fetchDexData();
  renderCoins(pairs);
  status.innerText = "Last updated: " + new Date().toLocaleTimeString();
}

setInterval(updateScanner, 20000);
updateScanner();
