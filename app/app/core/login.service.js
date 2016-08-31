angular.module('core').
    service('Login', ['$http', function ($http) {
        return $http.get('/data').then(function (response) {
                console.log(response);
                vm.cred = response.data;
                if (response.status == 200) {
                    $location.path('/home');
                }
                else if(response.status == 401){
                    console.log('wrong auth');
                }
                else if(response.status== 500){
                    console.log('server error');
                    $location.path('/error');
                }
     
            });
    }
    ]);