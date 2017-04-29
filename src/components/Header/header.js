(function(angular) {
    'use strict';

    function HeaderController() {
    }

    angular.module('myApp').component("topHeader", {
        templateUrl: 'components/Header/header.html',
        controller: HeaderController
    });


})(window.angular);