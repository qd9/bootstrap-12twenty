(function(angular) {
    'use strict';

    function LeftNavbarController() {
    }

    angular.module('myApp').component("leftNavbar", {
        templateUrl: 'components/leftNavbar/leftNavbar.html',
        controller: LeftNavbarController
    });


})(window.angular);