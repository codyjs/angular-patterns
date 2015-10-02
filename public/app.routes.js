(function(){
  angular
    .module('project-test')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        controller: 'HomeContainer',
        controllerAs: 'container',
        templateUrl: '/home/containers/home.html',
        resolve: {
          projectList : function(ProjectFactory){
            return ProjectFactory.getProjectList();
          }
        }
      })
      .when('/project/:projectId', {
        controller: 'ProjectViewContainer',
        controllerAs: 'container',
        templateUrl: '/projects/containers/project-view.html',
        resolve: {
          project: function($route, ProjectFactory){
            return ProjectFactory.getProject($route.current.params.projectId);
          }
        }
      });
  }
})();
