(function(){
  angular
    .module('project-test')
    .directive('projectViewContainer', ProjectViewContainerDir)
    .controller('ProjectViewContainer', ProjectViewContainerCtrl);

  ProjectViewContainerCtrl.$inject = ['ProjectFactory', '$routeParams'];

  function ProjectViewContainerDir(){
    var directive = {
      restrict : 'E',
      controller: 'ProjectViewContainer',
      controllerAs: 'container',
      bindToController: true,
      templateUrl: '/projects/containers/project-view.html'
    };

    return directive;
  }

  function ProjectViewContainerCtrl(ProjectFactory, $routeParams) {
    var vm = this;
    vm.project = {};

    // get project
    ProjectFactory.getProject($routeParams.projectId).then(function(project){
      vm.project = project;
    });

    vm.links = [
      {text: 'Back to Home', url: '/'}
    ];
  }
})();
