const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  email: String
});

const Student = mongoose.model('Student', studentSchema);

// Route: Home
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Route: Add student
app.post('/addStudent', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send('Student added successfully');
  } catch (err) {
    res.send(err);
  }
});

// Route: Get students
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.listen(3000, () => {
  console.log('✅ Server running on port 3000');
});

app.put('/updateStudent/:id', async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send('Student updated successfully');
  } catch (err) {
    res.send(err);
  }
});

app.delete('/deleteStudent/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.send('Student deleted successfully');
  } catch (err) {
    res.send(err);
  }
});