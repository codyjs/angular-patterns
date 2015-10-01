(function(){
  angular
    .module('project-test')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        template: '<home-container></home-container>'
      })
      .when('/project/:projectId', {
        template: '<project-view-container></project-view-container>'
      });
  }
})();
