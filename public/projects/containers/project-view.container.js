(function(){
  angular
    .module('project-test')
    .controller('ProjectViewContainer', ProjectViewContainerCtrl);

  ProjectViewContainerCtrl.$inject = ['project'];

  function ProjectViewContainerCtrl(project) {
    var vm = this;
    vm.project = project;

    vm.links = [
      {text: 'Back to Home', url: '/'}
    ];
  }
})();
