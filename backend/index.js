require('dotenv').config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
      const r = await axios.put(
          'https://api.chatengine.io/users/',
          { username, secret: username, first_name: username },
          { headers: { 'private-key': process.env.PRIVATE_KEY } }
      );
      return res.status(r.status).json(r.data);
  } catch (error) {
      if (error.response) {
          return res.status(error.response.status).json(error.response.data);
      } else {
          // Handle cases where error.response is undefined
          console.error('Error without response:', error.message);
          return res.status(500).json({ message: 'An unexpected error occurred' });
      }
  }
});

port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log(`App is listening at the port ${port}`)
});