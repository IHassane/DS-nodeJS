import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import User from "./userModel";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_URL, { useNewUrlParser: true,useUnifiedTopology: true,});
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
connectDB();

app.post("/users", (req, res) => {
    try{
        const user = new User({
            name:req.body.name,
            age:req.body.age,
        });
        const result = user.save()
        if (result)
            return res.status(201).send(user);
        else
            return res.status(404).send("Erreur lors de la creation");
    }catch (err){
        return res.status(500).json({message:"Internal serveur erreur",err});
    }
});

app.get("/users/:id", (req, res) => {
    try {
   const user = User.findById(req.params.id)
        if (user)
            return res.status(200).send(user);
        else
            return res.status(404).send("Utilisateur introuvable");
    }catch (err){
        return res.status(500).json({message:"Internal serveur erreur",err});
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});