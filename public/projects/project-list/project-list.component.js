(function(){
  angular
    .module('project-test')
    .directive('projectList', ProjectListDir)
    .controller('ProjectList', ProjectListCtrl);

  ProjectListCtrl.$inject = [];

  // Component
  function ProjectListDir(){
    var directive = {
      restrict: 'E',
      scope: {
        projects: '='
      },
      controller: 'ProjectList',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: '/projects/project-list/project-list.html'
    };

    return directive;
  }


  // Controller
  function ProjectListCtrl() {
    var vm = this;
  }
})();
