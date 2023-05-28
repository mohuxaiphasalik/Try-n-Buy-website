const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    setTimeout(() => {
        const results = {
            "height": 184.000000,
            "waist": 88.899565,
            "belly": 86.783576,
            "chest": 102.663332,
            "wrist": 17.208063,
            "neck": 37.045089,
            "arm length": 56.851427,
            "thigh": 55.419682,
            "shoulder width": 50.602225,
            "hips": 101.574773,
            "ankle": 21.802311
        }
        res.send(results);
    }, 5000); // 5000 milliseconds = 5 seconds
});

app.listen(16000, () => {
    console.log('Fake API server is running on port 6000');
});
