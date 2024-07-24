import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use((req, res) => {
    console.log("Request received");
});
app.get("/hello", (req, res) => {
    return res.send("Hello, World!");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
