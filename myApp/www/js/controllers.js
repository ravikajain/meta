var appModule=angular.module('starter.controllers', []);
appModule.controller('UserCtrl', function($scope,$rootScope,$state,$ionicModal) {
   var usersTemp = [{
    firstName: 'Ban',
    lastName: 'Sparrow',
    email: 'ban.sparrow@metacube.com'

  }, {
    firstName: 'Max',
    lastName: 'Lynx',
    email: 'max.lynx@metacube.com'

  }, {
    firstName: 'Adam',
    lastName: 'Bradleyson',
    email: 'ban.sparrow@metacube.com'

  }];
  $rootScope.users = usersTemp;
  $scope.remove = function(user) {
    var index = $rootScope.users.indexOf(user);
    $rootScope.users.splice(index,1);

     $state.go('tab.users');
  };
  $scope.goto1 = function(user) {
      //var indexTemp = $rootScope.users.indexOf(user);
      $rootScope.detail = user;
      console.log(user);
    $state.go('detail');
  };


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/detail.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeDetail = function() {
    $scope.modal.hide();
  };

  // Open the login modal

  $scope.goto = function(user) {
      $rootScope.detail = user;
        console.log(user);
    $scope.modal.show();
  };
})
.controller('AddCtrl', function($scope,$state,$rootScope,$stateParams) {
  $scope.user = {firstName:"", lastName:"", email:""};


  $scope.addMe = function(user) {
     $rootScope.users.push(user);

      $scope.user = {firstName:"", lastName:"", email:""};
     $state.go('tab.users');
  };

});
