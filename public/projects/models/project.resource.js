(function(){
  angular
    .module('project-test')
    .service('ProjectResource', ProjectResource);

  ProjectResource.$inject = ['$http'];

  function ProjectResource($http) {

    this.getList = getList;
    this.get = get;
    this.save = save;

    function getList() {
      return $http.get('/api/projects/').then(function(response){
        return response.data;
      });
    }

    function get(id) {
      return $http.get('/api/project/'+ id + '/').then(function(response){
        return response.data;
      });
    }

    function save(project) {
      if (project.hasOwnProperty('id')){
        // update
        return $http.put('/api/project/'+project.id+'/' , project).then(function(response){
          return response.data;
        });

      } else {
        // create
        return $http.post('/api/project/' , project).then(function(response){
          return response.data;
        });

      }
    }
  }
})();
