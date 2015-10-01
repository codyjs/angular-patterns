(function(){
  angular
    .module('project-test')
    .directive('projectForm', ProjectFormDir)
    .controller('ProjectForm', ProjectFormCtrl);

  ProjectFormCtrl.$inject = [];

  // Component
  function ProjectFormDir() {
    var directive = {
      restrict: 'E',
      scope: {
        project: '=',
        saveCallback: '&save'
      },
      controller: 'ProjectForm',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: '/projects/project-form/project-form.html'
    };

    return directive;
  }


  // Controller
  function ProjectFormCtrl() {
    var vm = this;

    // flag to set if validate fails
    vm.error = false;
    vm.handleSave = handleSave;

    function handleSave() {
      if (vm.project.$validate()){
        vm.error = false;
        vm.saveCallback();
      } else {
        vm.error = true;
      }
    }
  }
})();
