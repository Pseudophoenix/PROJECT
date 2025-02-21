// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// // GET request - Returns operation code
// app.get('/bfhl', (req, res) => {
//     res.json({ operation_code: "BFHL" });
// });

// // POST request - Processes input JSON and returns structured response
// app.post('/bfhl', (req, res) => {
//     try {
//         const { data } = req.body;
//         if (!data || !Array.isArray(data)) {
//             return res.status(400).json({ status: "failure", message: "Invalid input format" });
//         }

//         // Separate numbers and alphabets
//         const numbers = data.filter(item => !isNaN(item));
//         const alphabets = data.filter(item => isNaN(item));

//         // Response structure
//         const response = {
//             status: "success",
//             user_id: "your_user_id",  // Replace with actual user ID if needed
//             email: "your_college_email@example.com",  // Replace with actual college email
//             roll_number: "your_roll_number",  // Replace with actual roll number
//             numbers: numbers,
//             alphabets: alphabets
//         };

//         res.json(response);
//     } catch (error) {
//         res.status(500).json({ status: "failure", message: "Server error" });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /[a-zA-Z]/.test(item));
    const highestAlphabet = alphabets.length > 0 ? [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)] : [];

    const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});