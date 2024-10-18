// app.js

async function fetchPlayerData() {
  const playerTagInput = document.getElementById('playerTag').value.trim();
  const playerTag = encodeURIComponent(playerTagInput);  // Make sure the player tag is encoded correctly
  const playerInfoDiv = document.getElementById('playerInfo');
  playerInfoDiv.innerHTML = 'Loading...';  // Show a loading message


  // Your Clash of Clans API key (make sure to keep it secure in production!)
  const apiKey = process.env.COC_API_KEY;  // Replace with your API key from Clash of Clans Developer portal

  try {
    const response = await fetch(`https://cocproxy.royaleapi.dev/v1/players/%23${playerTag}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response.ok) {
      const data = await response.json();

      // Display player data on the page
      playerInfoDiv.innerHTML = `
        <h2>Player Name: ${data.name}</h2>
        <p><strong>Level:</strong> ${data.expLevel}</p>
        <p><strong>Trophies:</strong> ${data.trophies}</p>
        <p><strong>Clan:</strong> ${data.clan ? data.clan.name : 'No Clan'}</p>
        <p><strong>Clan Role:</strong> ${data.role ? data.role : 'N/A'}</p>
        <p><strong>Best Trophies:</strong> ${data.bestTrophies}</p>
      `;
    } else {
      playerInfoDiv.innerHTML = `Error fetching player data: ${response.statusText}`;
    }
  } catch (error) {
    playerInfoDiv.innerHTML = `Failed to fetch data. Error: ${error.message}`;
  }
}