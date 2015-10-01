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

    function save(obj) {
      console.log('Saved '+ obj.name + ':');
      console.log(obj);
    }
  }
})();
