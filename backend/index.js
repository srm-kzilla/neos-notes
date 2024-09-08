import express from "express";
import cors from "cors";
import basic from "./routes/basic.js";
import notes from "./routes/notes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/basic", basic);
app.use("/notes", notes);

app.get("/", (req, res) => {
    res.send({
        message: "Neo's Notes Backend",
    });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
