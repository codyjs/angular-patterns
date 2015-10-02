(function(){
  angular
    .module('project-test')
    .controller('ProjectEditContainer', ProjectEditContainerCtrl);

  ProjectEditContainerCtrl.$inject = ['project', '$location'];

  function ProjectEditContainerCtrl(project, $location) {
    var vm = this;
    vm.project = project;
    vm.handleSave = handleSave;

    vm.links = [
      {text: 'Back to Home', url: '/'}
    ];

    function handleSave() {
      vm.project.$save();
      $location.path('/');
    }
  }
})();
