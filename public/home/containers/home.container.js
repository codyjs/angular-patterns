(function(){
  angular
    .module('project-test')
    .controller('HomeContainer', HomeContainerCtrl);

  HomeContainerCtrl.$inject = ['ProjectFactory', 'projectList'];

  function HomeContainerCtrl(ProjectFactory, projectList) {
    var vm = this;
    vm.projects = projectList;
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
