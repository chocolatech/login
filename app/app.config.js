// angular.module('app').
//     config(['$locationProvider', '$routeProvider',
//         function config($locationProvider, $routeProvider) {

//             $routeProvider.
//                 when('/signin', {
//                     template: '<login-screen></login-screen>'
//                 }).
//                 when('/home', {
//                     template: '<dashboard></dashboard>'
//                 }).
//                 when('/error', {
//                     template: '<error500></error500>'
//                 }).
//                 otherwise('/signin');
//         }]);





angular.module('app').
    config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('signin', {
                    url: '/signin',
                    views: {
                        'content@signin': {
                            component: 'login-screen'
                        }
                    },
                }).state('inside', {
                    // url: '/bulletinBoard',
                    views: {
                        'header': {
                            component: 'top-nav'
                        },
                        'menu': {
                            component: 'navbar'
                        }
                    },
                    // templateUrl: '../src/app/bulletinBoard/views/bulletinBoard.part.html'
                }).state('inside.dashboard', {
                    url: '/home',
                    views: {
                        content: {
                            component: 'dashboard'
                        }
                    }
                }),

            $urlRouterProvider.otherwise('/signin');
        }
    ]);