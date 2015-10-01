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
        ModelResource.save(this);
      }
      // Bind any other application-speciic logic here
      // $validate : function(){...}
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

    return {
      getProjectList : getProjectList,
      getProject : getProject
    };
  }
})();
