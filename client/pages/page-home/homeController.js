// homeController.js
// Similar to our app.js, we will define a module name for this controller file called 'homeModule'.
// HOWEVER, this is not the controller name. 
// On the second line, we define the controller name as the first argument in ".controller". 
// In this example, this controller is called 'HomeController'.
// The second argument will be a function that takes $scope as an argument (we can add more later).
// The $scope variable will allow the HTML and the controller to have access to the same variables 
//  (two-way binding, which we will cover later)

angular.module('homeModule', [])
.controller('HomeController', function($scope) {

});

//https://medium.com/@kasonjim/building-a-simple-full-stack-mean-application-part-2-79617860fb00
