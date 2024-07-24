import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const jwt = require("jsonwebtoken");
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.post("/login", (req, res) => {
    const user = {username: "john" };
    const token = jwt.sign(user, process.env.SECRET_KEY);
    return res.status(201).json(token);
});
app.get("/protected", (req, res) => {
    const token = req.headers["authorization"];

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
           return res.sendStatus(403);
        } else {
            return res.status(201).send({ message: "Welcome to the protected route!" });
        }
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
