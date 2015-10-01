(function(){
  angular
    .module('project-test')
    .directive('homeComponent', HomeCmp)
    .controller('HomeController', HomeCtrl);

  HomeCtrl.$inject = [];

  function HomeCmp() {
    var directive = {
      restrict : 'E',
      scope: {
        projects: '='
      },
      controller: 'HomeController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: '/home/templates/home.html'
    };

    return directive;
  }


  function HomeCtrl() {
    var vm = this;
  }
})();
