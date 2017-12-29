'user strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataservice) {
  $scope.helloWorld = function() {
    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
  };
  
  $scope.learningNgChange = function() {
    console.log("A change has been made"); 
  }
  
  dataservice.getTodos(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  })
  
  $scope.deleteTodo = function(todo, $index) {
    dataservice.deleteTodo(todo);
    $scope.todos.splice($index, 1); // selects the index to delete, then deletes only one entry.
  }
  
  $scope.saveTodo = function(todo, $index) {
    dataservice.saveTodo(todo); 
  }
  
  $scope.addTodo = function() {
    var todo = {name: "This is a new todo"};
    $scope.todos.push(todo);
  }
})