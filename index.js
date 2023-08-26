import express from "express";
import bodyParser from 'body-parser';


const app = express();
const PORT = 3000;

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// In-memory storage for the todo list
let todos = [];

app.get('/', (req, res) => {
  res.render('index.ejs', { todos });
});

app.post('/add', (req, res) => {
  const newTodo = req.body.todo;
  todos.push(newTodo);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});
