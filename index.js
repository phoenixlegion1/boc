<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clash of Clans Player Data</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
    }
    .player-info {
      background: #f5f5f5;
      padding: 20px;
      border-radius: 10px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Clash of Clans Player Info</h1>

    <!-- Input for Player Tag -->
    <input type="text" id="playerTag" placeholder="Enter Player Tag (e.g., #PLAYER_TAG)" />

    <!-- Button to Fetch Player Data -->
    <button onclick="fetchPlayerData()">Get Player Data</button>

    <!-- Display the player data here -->
    <div id="playerInfo" class="player-info"></div>
  </div>

  <script src="app.js"></script>
</body>
</html>