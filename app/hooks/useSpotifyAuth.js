import { useEffect, useState } from "react";

export default function useSpotifyAuth() {
  const [token, setToken] = useState(() =>
    typeof window !== "undefined" ? window.localStorage.getItem("token") : ""
  );
  const [refreshToken, setRefreshToken] = useState(() =>
    typeof window !== "undefined"
      ? window.localStorage.getItem("refresh_token")
      : ""
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

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
      refreshAccessToken(refreshToken);
    }
  }, [refreshToken]);

  const refreshAccessToken = async (refreshToken) => {
    try {
      const response = await fetch(
        `/api/refresh-token?refresh_token=${refreshToken}`
      );

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
