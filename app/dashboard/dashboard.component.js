angular.module('dashboard').component('dashboard', {
    templateUrl: 'dashboard/dashboard.template.html',
    controller: [function () {
        /* off-canvas sidebar toggle */
        $('[data-toggle=offcanvas]').click(function () {
            $('.row-offcanvas').toggleClass('active');
            $('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
        });
    }]
});