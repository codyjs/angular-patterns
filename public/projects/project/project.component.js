(function(){
  angular
    .module('project-test')
    .directive('projectDetails', ProjectDetailsDir)
    .controller('ProjectDetails', ProjectDetailsCtrl);

  ProjectDetailsCtrl.$inject = [];

  // Component
  function ProjectDetailsDir(){
    var directive = {
      restrict: 'E',
      scope: {
        project: '='
      },
      controller: 'ProjectDetails',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: '/projects/project/project.html'
    };

    return directive;
  }


  // Controller
  function ProjectDetailsCtrl() {
    var vm = this;
  }
})();
