const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect('mongodb+srv://kmadhavi:LTQHzdXcutrnHw9M@cluster0.cpjradr.mongodb.net/complaints?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.log("❌ MongoDB Error:", err));

// ✅ Schema
const Complaint = mongoose.model('Complaint', {
    name: String,
    issue: String,
    contact: String,
});

// ✅ Route to handle complaint submission
app.post('/submit', async (req, res) => {
    try {
        const { name, issue, contact } = req.body;
        const newComplaint = new Complaint({ name, issue, contact });
        await newComplaint.save();
        res.send({ message: '✅ Complaint saved successfully!' });
    } catch (err) {
        console.error("❌ Error saving complaint:", err);
        res.status(500).send({ message: '❌ Server Error' });
    }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

