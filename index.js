import app from "./src/app/app.js";
import { PORT } from './src/config/app.config.js';

app.use((req, res, next) => {
    return res.status(200).json("welcome to study");

});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})