const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the React app's dist folder
app.use(express.static(path.join(__dirname, '../macbuddy/dist')));

// Route to render the EJS page
app.get('/', (req, res) => {
  res.render('index'); // Render index.ejs
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});