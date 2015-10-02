(function(){
  angular
    .module('project-test')
    .directive('homeContainer', HomeContainerDir)
    .controller('HomeContainer', HomeContainerCtrl);

  HomeContainerCtrl.$inject = ['ProjectFactory'];

  function HomeContainerDir() {
    var directive = {
      restrict : 'E',
      controller: 'HomeContainer',
      controllerAs: 'container',
      bindToController: true,
      templateUrl: '/home/containers/home.html'
    };

    return directive;
  }

  function HomeContainerCtrl(ProjectFactory) {
    var vm = this;
    vm.projects = [];
    vm.newProject = ProjectFactory.newProject();
    vm.links = [
      {text: 'Click Me', url: '/'},
      {text: 'Click Me', url: '/'},
      {text: 'Click Me', url: '/'}
    ];

    vm.saveNewProject = saveNewProject;
    vm.getProjectList = getProjectList;
    vm.getProjectList();

    function getProjectList() {
      ProjectFactory.getProjectList().then(function(list){
        vm.projects = list;
      });
    }

    function saveNewProject() {
      vm.newProject.$save();
      vm.newProject = ProjectFactory.newProject();
      vm.getProjectList();
    }
  }
})();
