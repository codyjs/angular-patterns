var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var data = [
  {name: "Project1", data: "data1", id: "1"},
  {name: "Project2", data: "data2", id: "2"},
  {name: "Project3", data: "data3", id: "3"}
];

var uuid = 3;

function findProject(id){
  var project = false;
  data.forEach(function(element, index, array){
    if (element.id === id) {
      project = element;
    }
  });
  return project;
}

// get all projects
app.get('/api/projects/', function(req, res){
  res.send(data);
});

// get one project by id
app.get('/api/project/:projectId/', function(req, res){
  var project = findProject(req.params.projectId);
  if (project) {
    res.send(project);
  } else {
    res.sendStatus(404);
  }
});

// save a new project
app.post('/api/project/', function(req, res){
  var project = req.body;
  project.id = ++uuid;
  data.push(project);
  res.send(findProject(uuid));
});

// edit an existing project
app.put('/api/project/:projectId/', function(req, res){
  var newProj = req.body;
  var project = findProject(req.params.projectId);
  project.name = newProj.name;
  project.data = newProj.data;
  res.send(findProject(req.params.projectId));
});

module.exports = app;
