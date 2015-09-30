(function(){
  angular
    .module('project-test')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        template: '<home-component projects="container.projects"></home-component>',
        controller: 'HomeContainer',
        controllerAs: 'container',
        resolve: {getProjectList : function(ProjectFactory) {
          return ProjectFactory.getProjectList();
        }}
      })
      .when('/project/:projectId', {
        template: '<project-details-component project="container.project"></project-details-component>',
        controller: 'ProjectDetailsContainer',
        controllerAs: 'container',
        resolve: {getProject : function($route, ProjectFactory){
          return ProjectFactory.getProject($route.current.params.projectId);
        }}
      });
  }
})();
