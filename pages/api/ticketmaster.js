export default async function handler(req, res) {
  const { artistName } = req.query;
  const apiKey = process.env.TICKETMASTER_API_KEY;
  if (!apiKey) {
    console.error("API Key is missing");
    return res.status(500).json({ error: "API Key is missing" });
  }

  if (!artistName) {
    return res.status(400).json({ error: "Artist name is required" });
  }
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&keyword=${encodeURIComponent(
        artistName
      )}&size=4`
    );
    if (!response.ok) {
      throw new Error(`Error fetching events: ${response.statusText}`);
    }
    const data = await response.json();
    res.status(200).json(data._embedded ? data._embedded.events : []);
  } catch (error) {
    res.status(500).json({ error: "Error fetching from Ticketmaster" });
  }
}
