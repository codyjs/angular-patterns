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
        resolve: {projectList : getProjectList}
      })
      .when('/project/:projectId', {
        controller: 'ProjectViewContainer',
        controllerAs: 'container',
        templateUrl: '/projects/containers/project-view.html',
        resolve: {project: getProject}
      })
      .when('/project/:projectId/edit', {
        controller: 'ProjectEditContainer',
        controllerAs: 'container',
        templateUrl: '/projects/containers/project-edit.html',
        resolve: {project : getProject}
      });

      function getProjectList(ProjectFactory){
        return ProjectFactory.getProjectList();
      }

      function getProject($route, ProjectFactory){
        return ProjectFactory.getProject($route.current.params.projectId);
      }
  }
})();
