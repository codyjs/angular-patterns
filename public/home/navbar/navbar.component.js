(function(){
  angular
    .module('project-test')
    .directive('navbar', NavbarDir)
    .controller('Navbar', NavbarCtrl);

  NavbarCtrl.$inject = [];

  // Component
  function NavbarDir(){
    var directive = {
      restrict: 'E',
      scope: {
        title: '=navTitle',
        links: '='
      },
      controller: 'Navbar',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: '/home/navbar/navbar.html'
    };

    return directive;
  }


  // Controller
  function NavbarCtrl() {
    var vm = this;
  }
})();
