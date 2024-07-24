import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import User from "usermodel"
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/users", (req, res) => {
    const users = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
    ];
    res.json(users);
});

app.post("/users", (req, res) => {
   try {
       const newUser = new User({
           name: req.body.name,
           surname: req.body.surname,
           email: req.body.email
       });
       const result = newUser.save();
       if (result){
       return res.status(201).json(newUser);
       }else{res.status(400).send("Rien de sauvgarder");}
   }catch{
       return res.status(500).send("Erreur lors de la sauvgarde")
   }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
