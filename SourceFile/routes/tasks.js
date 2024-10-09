const express = require('express')
const fs  = require('fs')
const path = require('path');
const router = express.Router()


function getStudentData(){
  const filePath = fs.readFileSync('./Files/students.json');
  console.log(filePath)

}
  router.get('/', (req, res) => {
    res.send(students);
  });

  // router.get('/:id', (req, res) => {
  //   const id =parseInt(req.params.id)
  //   const filtered = students.filter((items)=>items.id === id)
  //   res.send(filtered)
  // });

  // router.post('/',(req,res)=>{
  //   const payload = {
  //       id: students.length + 1,
  //       name: req.body.name,
  //       age: req.body.age,
  //       major: req.body.major,
  //       grades: {
  //         math: req.body.grades.math,
  //         english: req.body.grades.english,
  //         science: req.body.grades.science
  //       }
  //     };
  //     students.push(payload);
  //     res.status(201).send(students);
  // })

  module.exports = router