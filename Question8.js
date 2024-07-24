import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
const authMiddleware = (req,res,next) => {
    if (!req.headers.authorization) {
        return res.sendStatus(403);
    }else{
        next();
    }
};
app.get("/profile", authMiddleware, (req, res) => {
    return res.send("Profile data");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});