(function(){
  angular
    .module('project-test')
    .directive('projectDetailsComponent', ProjectDetailsCmp)
    .controller('ProjectDetailsController', ProjectDetailsCtrl);

  ProjectDetailsCtrl.$inject = [];

  // Component
  function ProjectDetailsCmp(){
    var directive = {
      restrict: 'E',
      scope: {
        project: '='
      },
      controller: 'ProjectDetailsController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: '/projects/templates/project-details.html'
    };

    return directive;
  }


  // Controller
  function ProjectDetailsCtrl() {
    var vm = this;
  }
})();
