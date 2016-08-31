angular.module('loggedIn').component('loggedIn', {
    templateUrl: 'logged-in/logged-in.template.html',
    controller:['$http', function($http){
        var vm = this;
        $http.get('/data').then(function(response){
            vm.cred = response.data;
        });
    }]
});