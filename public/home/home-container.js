(function(){
  angular
    .module('project-test')
    .controller('HomeContainer', HomeContainer);

  HomeContainer.$inject = ['getProjectList'];

  function HomeContainer(getProjectList) {
    var vm = this;
    vm.projects = getProjectList;
  }
})();
