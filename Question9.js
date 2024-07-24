import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.post("/register", (req, res) => {
    const { username, password } = req.body;
    if ((!username) || (password.length < 6)) {
        return res.status(400).send("Invalid data");
    }
    return res.status(201).send("User registered");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
