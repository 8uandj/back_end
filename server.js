const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/study-results', require('./routes/studyResult'));
app.use('/api/exam-schedule', require('./routes/examSchedule'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/vaccination', require('./routes/vaccination'));

// Thêm route mặc định cho "/"
app.get('/', (req, res) => {
  res.send('Welcome to LMS Backend API');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));