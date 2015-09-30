(function(){
  angular
    .module('project-test')
    .factory('ProjectFactory', ProjectFactory);

  ProjectFactory.$inject = ['ProjectResource'];

  /*
  * FACTORY: Model Factory
  * This factory exposes an API to controllers to use for instantiating Model
  * objects. These objects should contain data and operations that are relevant
  * to their application-speciic logic.
  */
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

        // for each JSON object returned, create a new Model object
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
