// /pages/index.js

import { useState, useEffect } from 'react';

export default function Home() {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch player data from the custom API route
    async function fetchPlayerData() {
      const response = await fetch('clash');
      const data = await response.json();
      setPlayerData(data);
      setLoading(false);
    }

    fetchPlayerData();
  }, []);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (!playerData) return <p>Error fetching data</p>;

  // Display player information
  return (
    <div>
      <h1>Clash of Clans Player Info</h1>
      <p><strong>Player Name:</strong> {playerData.name}</p>
      <p><strong>Player Level:</strong> {playerData.expLevel}</p>
      <p><strong>Clan:</strong> {playerData.clan?.name || 'No Clan'}</p>
      <p><strong>Trophies:</strong> {playerData.trophies}</p>
      {/* You can render more data fields based on the API response */}
    </div>
  );
}
