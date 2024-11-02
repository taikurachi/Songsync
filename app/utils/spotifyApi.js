export const fetchRecentlyPlayed = async (accessToken) => {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=50",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error(
        "Failed to fetch songs:",
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    console.error("Error fetching songs:", error);
  }
};
