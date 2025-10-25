const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const newsRoutes = require('./routes/newsRoutes');

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);


app.get('/', (req, res) => res.send('📰 News Aggregator API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
