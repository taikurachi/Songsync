export const fetchRecentlyPlayed = async (token) => {
  try {
    console.log(token, "fetch recently played");
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=5",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recently played tracks:", error);
    return null;
  }
};
