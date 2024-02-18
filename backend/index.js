import app from "./app.js";
import cors from "cors";
import { dbConnection } from "./dbConnection.js";
import { user } from "./models/userModel.js";
app.use(cors());

dbConnection();

const userDetails = [
  {
    name: "Gourav",
    email: "g@g.com",
  },
  {
    name: "Gaurav",
    email: "g@g.com",
  },
  {
    name: "Gourav",
    email: "g@g.com",
  },
  {
    name: "Gourav",
    email: "g@g.com",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  //Store user data in db

  const userData = await user.create({
    name,
    email,
    password,
  });

  res.status(200).json({
    success: true,
    userData,
  });
});

app.get("/sendUsers", async (req, res) => {
  const userDetails = await user.findById("65d09eeaa4da63e3a7acf802");
  res.status(201).json({
    success: true,
    userData: userDetails,
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
