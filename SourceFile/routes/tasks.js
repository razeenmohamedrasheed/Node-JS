const express = require('express')
const router = express.Router()

const students = [
    {
      id: 1,
      name: "John Doe",
      age: 20,
      major: "Computer Science",
      grades: { math: 90, english: 85, science: 88 },
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 22,
      major: "Mechanical Engineering",
      grades: { math: 78, english: 82, science: 80 },
    },
    {
      id: 3,
      name: "Emily Johnson",
      age: 21,
      major: "Business Administration",
      grades: { math: 85, english: 87, science: 90 },
    },
    {
      id: 4,
      name: "Michael Brown",
      age: 23,
      major: "Electrical Engineering",
      grades: { math: 92, english: 81, science: 84 },
    },
    {
      id: 5,
      name: "Sara Davis",
      age: 19,
      major: "Biology",
      grades: { math: 88, english: 92, science: 89 },
    }
  ];


  router.get('/', (req, res) => {
    res.send(students);
  });

  router.get('/:id', (req, res) => {
    const id =parseInt(req.params.id)
    const filtered = students.filter((items)=>items.id === id)
    res.send(filtered)
  });

  router.post('/',(req,res)=>{
    const payload = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        major: req.body.major,
        grades: {
          math: req.body.grades.math,
          english: req.body.grades.english,
          science: req.body.grades.science
        }
      };
      students.push(payload);
      res.status(201).send(students);
  })

  module.exports = router