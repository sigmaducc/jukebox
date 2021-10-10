import express from "express";
import cors from "cors";
import YoutubeMusicApi from "youtube-music-api";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const api = new YoutubeMusicApi();

app.get("/:x", (req, res) => {
    let { x } = req.params;
    api.initalize().then((info) => {
        api.search(x, "song").then((result) => res.send(result));
    });
    console.log("node server started!");
});
app.listen(3000);