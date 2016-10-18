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
                .state('error500', {
                    url: '/error',
                    views: {
                        'content': {
                            component: 'error500'
                        },

                    },
                }).state('signin', {
                    url: '/signin',
                    views: {
                        'content@': {
                            component: 'loginScreen'
                        },

                    },
                }).state('inside', {
                    // url: '/bulletinBoard',
                    abstract: true,
                    views: {

                        'menu@': {
                            component: 'navbar'
                        }

                    },
                    // templateUrl: '../src/app/bulletinBoard/views/bulletinBoard.part.html'
                }).state('inside.header', {
                    url: '/home',
                    views: {
                        'header@': {
                            component: 'topNav'
                        }
                    }
                }).state('inside.dashboard', {
                    url: '/home',
                    views: {
                        'content@': {
                            component: 'dashboard'
                        }
                    }
                }).state('inside.view1', {
                    url: '/view1',
                    views: {
                        'content': {
                            component: 'view1'
                        }
                    }
                }),

                $urlRouterProvider.otherwise('/signin');
        }
    ]);