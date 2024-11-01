export default async function handler(req, res) {
  const { refresh_token } = req.query;

  if (!refresh_token) {
    return res.status(400).json({ error: "Missing refresh token" });
  }

  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${basicAuth}`,
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to refresh token" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error refreshing access token:", error);
    res.status(500).json({ error: "Server error" });
  }
}
