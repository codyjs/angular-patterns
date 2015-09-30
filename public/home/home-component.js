(function(){
  angular
    .module('project-test')
    .directive('homeComponent', HomeCmp)
    .controller('HomeController', HomeCtrl);

  HomeCtrl.$inject = [];

  // Component
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


  // Controller
  function HomeCtrl() {
    var vm = this;
  }
})();
