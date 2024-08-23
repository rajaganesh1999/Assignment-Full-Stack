// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const userRoutes = require('./routes/users'); // Updated to use users.js
// const videoRoutes = require('./routes/videos'); // Ensure this path is correct

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://rajaganesh:abcd1234@cluster0.bctvimj.mongodb.net/?retryWrites=true&w=majority&appName=test', {
//   useNewUrlParser: true, // These options are deprecated in recent versions of MongoDB driver
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('MongoDB connected successfully');
// })
// .catch((err) => {
//   console.error('MongoDB connection error:', err);
// });

// app.use('/api/users', userRoutes);
// app.use('/api/videos', videoRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });


// app.listen(5000, () => console.log('Server running on http://localhost:5000'));

// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const videoRoutes = require('./routes/videos');

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors({ origin: '*' }));
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://rajaganesh:abcd1234@cluster0.bctvimj.mongodb.net/?retryWrites=true&w=majority&appName=test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Routes setup
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error occurred:', err.stack);
  res.status(500).send('Internal Server Error');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
