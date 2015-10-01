(function(){
  angular
    .module('project-test')
    .directive('projectDetailsContainer', ProjectDetailsContainerDir)
    .controller('ProjectDetailsContainer', ProjectDetailsContainerCtrl);

  ProjectDetailsContainerCtrl.$inject = ['ProjectFactory', '$routeParams'];

  function ProjectDetailsContainerDir(){
    var directive = {
      restrict : 'E',
      controller: 'ProjectDetailsContainer',
      controllerAs: 'container',
      bindToController: true,
      templateUrl: '/projects/containers/project-details.html'
    };

    return directive;
  }

  function ProjectDetailsContainerCtrl(ProjectFactory, $routeParams) {
    var vm = this;
    vm.project = {};

    // get project
    ProjectFactory.getProject($routeParams.projectId).then(function(project){
      vm.project = project;
    });
  }
})();
