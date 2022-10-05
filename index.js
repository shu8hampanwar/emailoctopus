import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.options(cors());

const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

// var api_key = "00000000-0000-0000-0000-000000000000";
// var email_address = "shubham@blogs.com";

// var listId = "fdffc3a4-4193-11ed-9a32-0241b9615763";

// var url = `https://emailoctopus.com/api/1.5/lists/${listId}/contacts`;
// var url = `https://emailoctopus.com/api/1.5/lists/${listId}/contacts`;

app.post("/contact", (req, res) => {
  const { email } = req.body;

  const options = {
    api_key: "0d6eb42a-ac92-40b0-85e9-22b8c41b9ec5",
    email_address: email,
  };

  fetch(
    "https://emailoctopus.com/api/1.5/lists/fdffc3a4-4193-11ed-9a32-0241b9615763/contacts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    }
  )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});

app.listen(port, () => console.log("hellos"));
