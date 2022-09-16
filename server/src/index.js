const express = require('express');
const connectDB = require('../config/db');
const cors = require('cors');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));

// Serve static assets in production
// Serve static assets in production env
if (process.env.NODE_ENV === 'production') {
	app.use((req, res, next) => {
		if (req.header('x-forwarded-proto') !== 'https')
			res.redirect(`https://${req.header('host')}${req.url}`);
		else next();
	});

	// Set static folder
	app.use(express.static(path.join(__dirname, '../../client/build')));

	app.get('/*', (req, res) => {
		res.sendFile(path.join(__dirname + '../../../client/build/index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
