const apiKey = `08eef91c5a865641cc85ae7b771d4002f78ef3cb`;
import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

app.get("/api/search", async (req, res) => {
  try {
    const query = req.query.query || "";
    const resources = req.query.resources;
    const externalUrl = `https://www.giantbomb.com/api/search/?api_key=${apiKey}&format=json&query=${encodeURIComponent(
      query
    )}&resources=${encodeURIComponent(resources)}`;
    const response = await axios.get(externalUrl, {
      headers: { "User-Agent": "MyGameApp/1.0" },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching external API:", error);
    res.status(500).json({ error: "Failed to fetch external data" });
  }
});
app.get("/api/:options/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const options = req.params.options;
    console.log("options", options);
    const externalUrl = `https://www.giantbomb.com/api/${options}/${id}/?api_key=${apiKey}&format=json`;
    const response = await axios.get(externalUrl, {
      headers: { "User-Agent": "MyGameApp/1.0" },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching external API", error);
    res.status(500).json({ error: "Failed to fetch external data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//478dc71d037549c58732b720314df28d gamebrain api key
//382f90b0 omdb api key
//08eef91c5a865641cc85ae7b771d4002f78ef3cb gaint bomb api key
