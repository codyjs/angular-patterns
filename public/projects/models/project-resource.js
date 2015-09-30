(function(){
  angular
    .module('project-test')
    .service('ProjectResource', ProjectResource);

  ProjectResource.$inject = ['$q'];

  /*
  * SERVICE: Project Resource
  * This service exposes an API to the Project Factory for sending and receiving
  * data from the server.
  */
  function ProjectResource($q) {

    this.getList = getList;
    this.get = get;
    this.save = save;

    var data = [
      {"name": "Project1", "data": "data1"},
      {"name": "Project2", "data": "data2"},
      {"name": "Project3", "data": "data3"}
    ];

    function getList() {
      var deferred = $q.defer();
      deferred.resolve(data);
      return deferred.promise;
    }

    function get(id) {
      var deferred = $q.defer();
      deferred.resolve(data[id]);
      return deferred.promise;
    }

    function save(obj) {
      console.log('Saved '+ obj.name + ':');
      console.log(obj);
    }
  }
})();
