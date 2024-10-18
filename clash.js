// /pages/api/clash.js

export default async function handler(req, res) {
  const apiKey = process.env.COC_API_KEY; // Secure API Key from Vercel environment variables
  const playerTag = '#PJ0PJVPC9';  // Replace with the desired player tag

  // Fetch data from the Clash of Clans API
  const response = await fetch(`https://cocproxy.royaleapi.dev/v1/players/${encodeURIComponent(playerTag)}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  // Handle API response
  if (response.ok) {
    const data = await response.json();
    res.status(200).json(data);  // Return data if successful
  } else {
    res.status(response.status).json({ message: 'Failed to fetch data' });
  }
}