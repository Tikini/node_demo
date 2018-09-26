const express = require('express');
var app = express();
app.use(express.json());
courses = [
{
id:1,
name:"Course-1"
},
{
  id:2,
  name:"Course-2"
},
{
  id:3,
  name:"Course-3"
}];
app.get('/', (req, res)=>
{
res.send('Hello');
});
app.get('/courses', (req, res)=>
{
res.send(courses);
});
app.get('/courses/:id', (req, res)=>
{
  const course = courses.find(c=> parseInt(req.params.id) === c.id);
 
  if(!course) res.status(404).send('The course is not found');
  res.send(course);
// res.send(req.params);
// res.send(req.query);
});
app.post('/courses', (req, res)=>
{
const course =
{
  id:courses.length,
  name:req.body.name
}
courses.push(course);
res.send(course);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listenning on Port ${port}`));