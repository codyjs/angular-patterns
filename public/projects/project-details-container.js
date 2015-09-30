(function(){
  angular
    .module('project-test')
    .controller('ProjectDetailsContainer', ProjectDetailsContainer);

  ProjectDetailsContainer.$inject = ['getProject'];

  function ProjectDetailsContainer(getProject) {
    var vm = this;
    vm.project = getProject;
  }
})();
