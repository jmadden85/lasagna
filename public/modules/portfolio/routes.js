'use strict';

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/lasagna/public/modules/portfolio/partials/app.html',
      controllerAs: 'page',
      controller: 'PageCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});