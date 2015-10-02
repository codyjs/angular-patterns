(function(){
  angular
    .module('project-test')
    .controller('ProjectViewContainer', ProjectViewContainerCtrl);

  ProjectViewContainerCtrl.$inject = ['project', '$routeParams'];

  function ProjectViewContainerCtrl(project, $routeParams) {
    var vm = this;
    vm.project = project;

    vm.links = [
      {text: 'Back to Home', url: '/'}
    ];
  }
})();
