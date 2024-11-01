import { useEffect, useState } from "react";

export default function useSpotifyAuth() {
  const [token, setToken] = useState(() =>
    window.localStorage.getItem("token")
  );
  const [refreshToken, setRefreshToken] = useState(() =>
    window.localStorage.getItem("refresh_token")
  );

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    const expiration = window.localStorage.getItem("token_expiration");

    if (!token && hash.includes("access_token")) {
      const params = new URLSearchParams(hash.substring(1));
      token = params.get("access_token");
      const refreshToken = params.get("refresh_token");
      const expiresIn = parseInt(params.get("expires_in"));

      const expirationTime = Date.now() + expiresIn * 1000;
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("refresh_token", refreshToken);
      window.localStorage.setItem("token_expiration", expirationTime);
      window.location.hash = "";

      setToken(token);
      setRefreshToken(refreshToken);
    } else if (expiration && Date.now() > expiration) {
      console.log("Refresh token:", refreshToken);
      refreshAccessToken(refreshToken);
    }
  }, [refreshToken]);

  // Function to refresh the access token using the refresh token
  const refreshAccessToken = async (refreshToken) => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
    const basicAuth = btoa(`${clientId}:${clientSecret}`);

    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${basicAuth}`,
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const newAccessToken = data.access_token;
      const expiresIn = data.expires_in;
      const expirationTime = Date.now() + expiresIn * 1000;

      window.localStorage.setItem("token", newAccessToken);
      window.localStorage.setItem("token_expiration", expirationTime);
      setToken(newAccessToken);
    } catch (error) {
      console.error("Error refreshing access token:", error);
      logout();
    }
  };

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("refresh_token");
    window.localStorage.removeItem("token_expiration");
  };

  return { token, logout };
}
