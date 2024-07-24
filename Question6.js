import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/addUser", (req, res) => {
    return res.send("User added");
});
app.delete("/deleteUser", (req, res) => {
    return res.send("User deleted");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});