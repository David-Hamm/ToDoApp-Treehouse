'use strict';
angular.module("todoListApp")
.service('dataservice', function($http) {
  
  this.helloWorld = function() {
    console.log("This is the data from the service's method."); 
  }
  
  this.getTodos = function(callback) {
    $http.get('mock/todos.json').then(callback);
  }
  
  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " has been deleted!") 
  }
  
  this.saveTodo = function(todo) {
    console.log("The " + todo.name + " has been saved!");
  }
});