const expresss = require("express");

const app = expresss();
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});