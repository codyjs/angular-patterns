(function(){
  angular
    .module('project-test')
    .factory('ProjectFactory', ProjectFactory);

  ProjectFactory.$inject = ['ProjectResource'];

  function ProjectFactory(ProjectResource) {

    function Project(json) {
      angular.extend(this, json);
    }

    Project.prototype= {
      $save: function() {
        ProjectResource.save(this).then(function(data){
          console.log(data);
        });
      },
      $validate : function(){
        if (this.name === '' || this.data === '') return false;
        return true;
      }
      // Bind any other application-speciic logic here
    };

    function getProjectList() {
      return ProjectResource.getList().then(function(jsonList) {
        var projectList = [];

        angular.forEach(jsonList, function(obj, i) {
          projectList.push(new Project(obj));
        });

        return projectList;
      });
    }

    function getProject(id) {
      return ProjectResource.get(id).then(function(json){
        return new Project(json);
      });
    }

    function newProject() {
      return new Project({name: '', data: ''});
    }

    return {
      getProjectList : getProjectList,
      getProject : getProject,
      newProject : newProject
    };
  }
})();
